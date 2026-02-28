import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { api } from "../services/api.js";

function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, index) => ({
        id: index,
        x: `${(index / 16) * 100}%`,
        delay: index * 0.06,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bits.map((bit) => (
        <motion.span
          key={bit.id}
          className="absolute top-0 h-2 w-2 rounded-full bg-[color:var(--gold)]"
          style={{ left: bit.x }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 260, opacity: [0, 1, 0], rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, delay: bit.delay }}
        />
      ))}
    </div>
  );
}

export default function BookingSuccess() {
  const [params] = useSearchParams();
  const bookingId = params.get("bookingId");
  const [status, setStatus] = useState("confirming");

  useEffect(() => {
    if (!bookingId) return setStatus("done");
    api
      .patch(`/bookings/${bookingId}/confirm`, {})
      .then(() => setStatus("done"))
      .catch(() => setStatus("done"));
  }, [bookingId]);

  return (
    <div className="premium-container relative flex min-h-screen items-center justify-center py-24">
      <Confetti />
      <motion.div className="glass-card relative z-10 w-full max-w-lg rounded-3xl p-8 text-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <motion.div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--gold)] text-[color:var(--gold)]"
          animate={{ scale: [0.9, 1.06, 1] }}
          transition={{ duration: 0.6 }}
        >
          <Check size={36} />
        </motion.div>
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Payment Success</p>
        <h1 className="mt-3 text-4xl">Booking Confirmed</h1>
        <p className="mt-4 text-sm text-[color:var(--muted)]">
          {status === "confirming" ? "Syncing your confirmation..." : "Your session has been reserved. A confirmation email has been queued."}
        </p>
        <Link to="/" className="mt-8 inline-block">
          <PrimaryButton>Return Home</PrimaryButton>
        </Link>
      </motion.div>
    </div>
  );
}
