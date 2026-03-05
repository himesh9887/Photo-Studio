import { useEffect, useMemo, useState } from "react";
import { AlertCircle, Check } from "lucide-react";
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
        <span
          key={bit.id}
          className="absolute top-0 h-2 w-2 rounded-full bg-[color:var(--gold)]"
          style={{ left: bit.x }}
        />
      ))}
    </div>
  );
}

export default function BookingSuccess() {
  const [params] = useSearchParams();
  const bookingId = params.get("bookingId");
  const sessionId = params.get("session_id");
  const [status, setStatus] = useState(() => (bookingId ? "verifying" : "failed"));
  const [message, setMessage] = useState(() =>
    bookingId
      ? "Syncing your confirmation..."
      : "Missing booking details. Please retry payment from booking page.",
  );

  useEffect(() => {
    if (!bookingId) return;

    let attempts = 0;
    let timer;
    const maxAttempts = 8;

    const verify = () => {
      api
        .post("/bookings/verify", { bookingId, sessionId })
        .then((response) => {
          if (response.data?.pending) {
            attempts += 1;
            setStatus("pending");
            setMessage("Payment is processing. Waiting for final confirmation...");
            if (attempts < maxAttempts) {
              timer = setTimeout(verify, 3500);
            }
            return;
          }

          setStatus("success");
          setMessage("Your payment is verified. A confirmation email has been queued.");
        })
        .catch((error) => {
          setStatus("failed");
          setMessage(error.message || "Payment verification failed. Please contact support.");
        });
    };

    verify();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [bookingId, sessionId]);

  return (
    <div className="premium-container relative flex min-h-screen items-center justify-center py-20 sm:py-24">
      <Confetti />
      <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 text-center shadow-2xl sm:p-10">
        <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border sm:h-20 sm:w-20 ${
          status === "failed" ? "border-red-400 text-red-400" : "border-[color:var(--gold)] text-[color:var(--gold)]"
        }`}>
          {status === "failed" ? <AlertCircle size={36} /> : <Check size={36} />}
        </div>
        <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${
          status === "failed" ? "text-red-400" : "text-[color:var(--gold)]"
        }`}>
          {status === "failed" ? "Payment Pending" : status === "pending" ? "Payment Processing" : "Payment Success"}
        </p>
        <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
          {status === "failed" ? "Verification Needed" : status === "pending" ? "Confirmation In Progress" : "Booking Confirmed"}
        </h1>
        <p className="mt-6 text-base leading-8 text-[color:var(--muted)] sm:text-lg">
          {status === "verifying" ? "Syncing your confirmation..." : message}
        </p>
        <Link to={status === "failed" ? "/booking" : "/"} className="mt-8 inline-block">
          <PrimaryButton>{status === "failed" ? "Back to Booking" : "Return Home"}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
