import { randomUUID } from "node:crypto";

const memoryBookings = [];

function nowIso() {
  return new Date().toISOString();
}

function normalizeId(id) {
  return String(id);
}

export function createBooking(data) {
  const booking = {
    _id: randomUUID(),
    customerName: data.customerName,
    customerEmail: data.customerEmail,
    customerPhone: data.customerPhone,
    eventDate: data.eventDate,
    notes: data.notes || "",
    packageId: data.packageId,
    packageName: data.packageName,
    paymentType: data.paymentType,
    paymentMethod: data.paymentMethod || "auto",
    amount: data.amount,
    status: data.status || "pending",
    paymentStatus: data.paymentStatus || "unpaid",
    stripeSessionId: data.stripeSessionId || "",
    createdAt: nowIso(),
    updatedAt: nowIso(),
  };

  memoryBookings.unshift(booking);
  return booking;
}

export function findBookingById(id) {
  return memoryBookings.find((item) => normalizeId(item._id) === normalizeId(id)) || null;
}

export function listBookings() {
  return [...memoryBookings];
}

export function saveBooking(booking) {
  const index = memoryBookings.findIndex((item) => normalizeId(item._id) === normalizeId(booking._id));
  if (index === -1) return booking;
  memoryBookings[index] = { ...booking, updatedAt: nowIso() };
  return memoryBookings[index];
}
