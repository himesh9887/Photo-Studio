import { Router } from "express";
import { confirmBooking, createCheckout, getBookings, verifyCheckout } from "../controllers/bookingController.js";
import { requireAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/checkout", createCheckout);
router.post("/verify", verifyCheckout);
router.patch("/:id/confirm", requireAdmin, confirmBooking);
router.get("/", requireAdmin, getBookings);

export default router;
