import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import { stripeWebhook } from "./controllers/bookingController.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

const configuredOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const devAllowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
];

const allowList = new Set([...configuredOrigins, ...devAllowedOrigins]);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowList.has(origin)) return callback(null, true);
      return callback(new Error("CORS blocked for this origin."));
    },
    credentials: true,
  }),
);
app.post("/api/bookings/webhook", express.raw({ type: "application/json" }), stripeWebhook);
app.use(express.json());

app.get("/api/health", (_, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

app.use((error, _, res, __) => {
  res.status(error.status || 500).json({ message: error.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
