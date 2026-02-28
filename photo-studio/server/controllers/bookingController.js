import Booking from "../models/Booking.js";
import { getStripe } from "../config/stripe.js";
import { sendBookingConfirmation } from "../config/mailer.js";

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
    amount,
  } = req.body;

  const booking = await Booking.create({
    customerName,
    customerEmail,
    customerPhone,
    eventDate,
    notes,
    packageId,
    packageName,
    paymentType,
    amount,
  });

  const stripe = getStripe();
  if (!stripe) {
    return res.json({
      bookingId: booking._id,
      url: `${process.env.CLIENT_URL || "http://localhost:5173"}/booking-success?bookingId=${booking._id}`,
    });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "inr",
          product_data: { name: `${packageName} - Photo Studio` },
          unit_amount: amount * 100,
        },
      },
    ],
    metadata: { bookingId: String(booking._id) },
    success_url: `${process.env.CLIENT_URL || "http://localhost:5173"}/booking-success?bookingId=${booking._id}`,
    cancel_url: `${process.env.CLIENT_URL || "http://localhost:5173"}/booking`,
  });

  booking.stripeSessionId = session.id;
  await booking.save();

  return res.json({ bookingId: booking._id, url: session.url });
}

export async function confirmBooking(req, res) {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  booking.status = "confirmed";
  booking.paymentStatus = "paid";
  await booking.save();
  await sendBookingConfirmation(booking).catch(() => {});

  return res.json({ booking });
}

export async function getBookings(_, res) {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  return res.json({ bookings });
}
