import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    eventDate: { type: Date, required: true },
    notes: String,
    packageId: { type: String, required: true },
    packageName: { type: String, required: true },
    paymentType: { type: String, enum: ["full", "advance"], required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    paymentStatus: { type: String, enum: ["unpaid", "paid"], default: "unpaid" },
    stripeSessionId: String,
  },
  { timestamps: true },
);

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;
