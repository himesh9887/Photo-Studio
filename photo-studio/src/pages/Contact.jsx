import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";

const contactCards = [
  [Mail, "hello@velourastudio.com", "Send your event vision and preferred dates."],
  [Phone, "+91 98765 43210", "Talk directly for availability and quick planning."],
  [MapPin, "Delhi, Mumbai, Jaipur", "Available for destination weddings across India."],
];

export default function Contact() {
  return (
    <div className="premium-container pt-28 pb-20 md:pt-32 md:pb-24">
      <section className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_96%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] px-5 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">Contact</p>
        <h1 className="mt-6 max-w-4xl text-3xl leading-tight sm:text-5xl lg:text-7xl">Start the conversation with a clear, premium first impression.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">This page now gives clients cleaner contact options and a more trustworthy professional presentation.</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {contactCards.map(([Icon, value, note]) => (
          <motion.div key={value} className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-2xl sm:p-8" whileHover={{ y: -10 }}>
            <div className="inline-flex rounded-2xl bg-[color:var(--gold)]/10 p-3 text-[color:var(--gold)]">
              <Icon size={22} />
            </div>
            <p className="mt-6 break-words text-xl leading-tight sm:text-2xl">{value}</p>
            <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{note}</p>
          </motion.div>
        ))}
      </section>

      <section className="mt-12 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-8 shadow-2xl sm:px-10 sm:py-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">Quick Next Step</p>
            <h2 className="mt-4 text-2xl leading-tight sm:text-4xl">Ready to secure a date?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">Go straight to the booking flow and reserve your preferred package without waiting.</p>
          </div>
          <Link to="/booking" className="w-full lg:w-auto">
            <PrimaryButton className="w-full lg:w-auto">Start Booking</PrimaryButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
