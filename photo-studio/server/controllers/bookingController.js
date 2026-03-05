import Booking from "../models/Booking.js";
import { getStripe } from "../config/stripe.js";
import { sendBookingConfirmation } from "../config/mailer.js";
import mongoose from "mongoose";
import { createBooking, findBookingById, listBookings, saveBooking } from "../store/bookingStore.js";

const ALLOWED_PAYMENT_METHODS = new Set(["auto", "card", "upi", "netbanking"]);
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const DB_OP_TIMEOUT_MS = 2500;

function isDbReady() {
  return mongoose.connection.readyState === 1;
}

async function createBookingRecord(data) {
  if (isDbReady()) {
    try {
      return await Promise.race([
        Booking.create(data),
        new Promise((_, reject) => setTimeout(() => reject(new Error("DB create timeout")), DB_OP_TIMEOUT_MS)),
      ]);
    } catch (_) {
      return createBooking(data);
    }
  }
  return createBooking(data);
}

async function findBookingRecordById(id) {
  if (isDbReady()) {
    try {
      return await Promise.race([
        Booking.findById(id),
        new Promise((_, reject) => setTimeout(() => reject(new Error("DB find timeout")), DB_OP_TIMEOUT_MS)),
      ]);
    } catch (_) {
      return findBookingById(id);
    }
  }
  return findBookingById(id);
}

async function getBookingList() {
  if (isDbReady()) {
    try {
      return await Promise.race([
        Booking.find().sort({ createdAt: -1 }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("DB list timeout")), DB_OP_TIMEOUT_MS)),
      ]);
    } catch (_) {
      return listBookings();
    }
  }
  return listBookings();
}

async function persistBooking(booking) {
  if (!booking) return booking;
  if (isDbReady()) {
    try {
      await Promise.race([
        booking.save(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("DB save timeout")), DB_OP_TIMEOUT_MS)),
      ]);
      return booking;
    } catch (_) {
      return saveBooking(booking);
    }
  }
  return saveBooking(booking);
}

async function markBookingPaid(booking, stripeSessionId) {
  if (!booking) return null;
  if (booking.paymentStatus === "paid") return booking;

  booking.status = "confirmed";
  booking.paymentStatus = "paid";
  if (stripeSessionId) booking.stripeSessionId = stripeSessionId;
  await persistBooking(booking);
  await sendBookingConfirmation(booking).catch(() => {});
  return booking;
}

async function markBookingFailed(booking, stripeSessionId) {
  if (!booking) return null;
  if (booking.paymentStatus === "paid") return booking;

  booking.status = "pending";
  booking.paymentStatus = "failed";
  if (stripeSessionId) booking.stripeSessionId = stripeSessionId;
  await persistBooking(booking);
  return booking;
}

export async function createCheckout(req, res) {
  const {
    customerName,
    customerEmail,
    customerPhone,
    eventDate,
    notes,
    packageId,
    packageName,
    paymentType,
    paymentMethod = "auto",
    amount,
  } = req.body;

  const normalizedPaymentMethod = ALLOWED_PAYMENT_METHODS.has(paymentMethod) ? paymentMethod : "auto";
  const safeAmount = Number(amount);

  if (!customerName || !customerEmail || !customerPhone || !eventDate || !packageId || !packageName || !paymentType || !safeAmount) {
    return res.status(400).json({ message: "Missing required booking fields." });
  }

  if (safeAmount <= 0) {
    return res.status(400).json({ message: "Invalid payment amount." });
  }

  const booking = await createBookingRecord({
    customerName,
    customerEmail,
    customerPhone,
    eventDate,
    notes,
    packageId,
    packageName,
    paymentType,
    paymentMethod: normalizedPaymentMethod,
    amount: safeAmount,
  });

  const stripe = getStripe();
  if (!stripe) {
    return res.json({
      bookingId: booking._id,
      url: `${CLIENT_URL}/booking-success?bookingId=${booking._id}`,
    });
  }

  const paymentMethodMap = {
    card: ["card"],
    upi: ["upi"],
    netbanking: ["netbanking"],
  };

  const sessionPayload = {
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "inr",
          product_data: { name: `${packageName} - Photo Studio` },
          unit_amount: safeAmount * 100,
        },
      },
    ],
    client_reference_id: String(booking._id),
    metadata: {
      bookingId: String(booking._id),
      paymentMethodPreference: normalizedPaymentMethod,
    },
    success_url: `${CLIENT_URL}/booking-success?bookingId=${booking._id}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${CLIENT_URL}/booking?bookingId=${booking._id}&payment=cancelled`,
  };

  if (normalizedPaymentMethod === "auto") {
    sessionPayload.automatic_payment_methods = { enabled: true };
  } else {
    sessionPayload.payment_method_types = paymentMethodMap[normalizedPaymentMethod] || ["card"];
  }

  let session;
  try {
    session = await stripe.checkout.sessions.create(sessionPayload);
  } catch (_) {
    const fallbackPayload = {
      ...sessionPayload,
      automatic_payment_methods: { enabled: true },
    };
    delete fallbackPayload.payment_method_types;
    session = await stripe.checkout.sessions.create(fallbackPayload);
  }

  booking.stripeSessionId = session.id;
  await persistBooking(booking);

  return res.json({ bookingId: booking._id, url: session.url });
}

export async function verifyCheckout(req, res) {
  const { bookingId, sessionId } = req.body;
  if (!bookingId) return res.status(400).json({ message: "bookingId is required." });

  const booking = await findBookingRecordById(bookingId);
  if (!booking) return res.status(404).json({ message: "Booking not found." });

  const stripe = getStripe();
  if (!stripe) {
    await markBookingPaid(booking);
    return res.json({ booking, verified: true, mode: "no_stripe" });
  }

  const targetSessionId = sessionId || booking.stripeSessionId;
  if (!targetSessionId) {
    return res.status(400).json({ message: "Missing Stripe session id." });
  }

  const session = await stripe.checkout.sessions.retrieve(targetSessionId);
  const sessionBookingId = session.metadata?.bookingId || session.client_reference_id;
  if (sessionBookingId && String(sessionBookingId) !== String(booking._id)) {
    return res.status(400).json({ message: "Session does not match booking." });
  }

  const paymentPaid = session.payment_status === "paid";
  const checkoutComplete = session.status === "complete";

  if (paymentPaid) {
    await markBookingPaid(booking, targetSessionId);
    return res.json({ booking, verified: true, mode: "stripe" });
  }

  if (checkoutComplete) {
    booking.paymentStatus = "processing";
    booking.stripeSessionId = targetSessionId;
    await persistBooking(booking);
    return res.status(202).json({
      booking,
      verified: false,
      pending: true,
      message: "Payment is processing. We will confirm shortly.",
    });
  }

  return res.status(402).json({ message: "Payment is not completed yet." });
}

export async function stripeWebhook(req, res) {
  const stripe = getStripe();
  if (!stripe) return res.status(200).json({ received: true, skipped: true });

  const signature = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;

  try {
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(req.body, signature, webhookSecret);
    } else {
      event = JSON.parse(req.body.toString("utf8"));
    }
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  const session = event.data?.object;
  const bookingId = session?.metadata?.bookingId || session?.client_reference_id;

  if (!bookingId) {
    return res.status(200).json({ received: true, ignored: true });
  }

  const booking = await findBookingRecordById(bookingId);
  if (!booking) {
    return res.status(200).json({ received: true, ignored: true });
  }

  if (event.type === "checkout.session.completed") {
    if (session.payment_status === "paid") {
      await markBookingPaid(booking, session.id);
    } else {
      booking.paymentStatus = "processing";
      booking.stripeSessionId = session.id;
      await persistBooking(booking);
    }
  }

  if (event.type === "checkout.session.async_payment_succeeded") {
    await markBookingPaid(booking, session.id);
  }

  if (event.type === "checkout.session.async_payment_failed" || event.type === "checkout.session.expired") {
    await markBookingFailed(booking, session.id);
  }

  return res.status(200).json({ received: true });
}

export async function confirmBooking(req, res) {
  const booking = await findBookingRecordById(req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  await markBookingPaid(booking);

  return res.json({ booking });
}

export async function getBookings(_, res) {
  const bookings = await getBookingList();
  return res.json({ bookings });
}
