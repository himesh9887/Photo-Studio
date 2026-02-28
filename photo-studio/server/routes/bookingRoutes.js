import { Router } from "express";
import { confirmBooking, createCheckout, getBookings } from "../controllers/bookingController.js";
import { requireAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/checkout", createCheckout);
router.patch("/:id/confirm", confirmBooking);
router.get("/", requireAdmin, getBookings);

export default router;
