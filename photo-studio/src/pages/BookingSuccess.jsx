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
    if (!bookingId) {
      setStatus("done");
      return;
    }

    api
      .patch(`/bookings/${bookingId}/confirm`, {})
      .then(() => setStatus("done"))
      .catch(() => setStatus("done"));
  }, [bookingId]);

  return (
    <div className="premium-container relative flex min-h-screen items-center justify-center py-20 sm:py-24">
      <Confetti />
      <motion.div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 text-center shadow-2xl sm:p-10" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <motion.div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--gold)] text-[color:var(--gold)] sm:h-20 sm:w-20" animate={{ scale: [0.9, 1.06, 1] }} transition={{ duration: 0.6 }}>
          <Check size={36} />
        </motion.div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Payment Success</p>
        <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">Booking Confirmed</h1>
        <p className="mt-6 text-base leading-8 text-[color:var(--muted)] sm:text-lg">
          {status === "confirming" ? "Syncing your confirmation..." : "Your session has been reserved. A confirmation email has been queued."}
        </p>
        <Link to="/" className="mt-8 inline-block">
          <PrimaryButton>Return Home</PrimaryButton>
        </Link>
      </motion.div>
    </div>
  );
}
