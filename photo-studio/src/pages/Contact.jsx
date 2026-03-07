import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Clock3, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@velourastudio.com",
    note: "Mood board, event city, expected guest count, and date share karein for faster proposal.",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 98765 43210",
    note: "Quick availability checks, package questions, aur urgent planning support ke liye best.",
  },
  {
    icon: MapPin,
    label: "Studio Reach",
    value: "Delhi NCR, Mumbai, Jaipur",
    note: "Destination weddings, editorial shoots, aur luxury events across India available.",
  },
];

const processNotes = [
  "24 hours ke andar response on most enquiries",
  "Wedding aur luxury shoots ke liye consultation call available",
  "Mobile se direct booking start karne ke liye streamlined flow",
];

const schedule = [
  { label: "Monday to Saturday", value: "10:00 AM - 7:00 PM" },
  { label: "Consultation Calls", value: "Appointment basis" },
  { label: "Urgent Wedding Support", value: "WhatsApp priority" },
];

export default function Contact() {
  return (
    <div className="relative overflow-hidden pb-20 pt-24 sm:pt-28 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(212,175,55,0.06),transparent)]" />
      <div className="pointer-events-none absolute -left-20 top-28 h-56 w-56 rounded-full bg-(--gold)/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute -right-24 top-80 h-64 w-64 rounded-full bg-(--gold-soft)/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="premium-container">
        <section className="relative overflow-hidden rounded-3xl border border-(--line) bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_95%,transparent),color-mix(in_oklab,var(--bg-soft)_91%,transparent))] px-4 py-6 shadow-[0_22px_55px_rgba(0,0,0,0.12)] sm:rounded-4xl sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-(--gold)/10 blur-3xl sm:h-40 sm:w-40" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--gold)/30 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-(--gold) sm:text-sm sm:tracking-[0.32em]">
                Contact Studio
              </p>
              <h1 className="mt-4 max-w-4xl text-[2.15rem] leading-[1.02] sm:text-5xl lg:text-7xl">
                Plan your shoot without chasing details across multiple screens.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-(--muted) sm:mt-6 sm:text-lg sm:leading-9">
                Clear contact options, studio timing, and direct booking access ek hi page par rakhe gaye hain taki inquiry se confirmation tak flow simple rahe.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:justify-self-end lg:max-w-sm">
              {[
                ["24h", "response window"],
                ["3", "contact channels"],
                ["Pan India", "shoot coverage"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.15rem] border border-(--line) bg-(--surface) px-4 py-4 sm:rounded-[1.35rem]"
                >
                  <p className="text-2xl font-semibold text-(--gold)">{value}</p>
                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--muted) sm:text-xs sm:tracking-[0.2em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {contactCards.map(({ icon: Icon, label, value, note }) => (
            <motion.div
              key={value}
              className="rounded-[1.35rem] border border-(--line) bg-(--surface) p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-[1.75rem] sm:p-6 sm:shadow-[0_22px_55px_rgba(0,0,0,0.12)]"
              whileHover={{ y: -6 }}
            >
              <div className="inline-flex rounded-2xl bg-(--gold)/10 p-3 text-(--gold)">
                <Icon size={20} />
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-(--muted) sm:text-xs sm:tracking-[0.24em]">
                {label}
              </p>
              <p className="mt-3 break-words text-lg leading-tight sm:text-2xl">{value}</p>
              <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base sm:leading-8">{note}</p>
            </motion.div>
          ))}
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-(--line) bg-(--surface) p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-[2rem] sm:p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-full bg-(--gold)/10 p-2 text-(--gold)">
                <Sparkles size={16} />
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold) sm:text-xs sm:tracking-[0.22em]">
                Enquiry Flow
              </p>
            </div>

            <h2 className="mt-5 text-2xl leading-tight sm:text-4xl">Clear next steps from first enquiry to confirmed booking.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-(--muted) sm:text-base sm:leading-8">
              Page ab sirf decorative nahi lagta. Har block ek useful action ya expectation set karta hai, isliye user ko samajh aata hai ki ab kya karna hai.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {processNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-(--line) bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_7%,transparent),color-mix(in_oklab,var(--surface)_94%,transparent))] px-4 py-4 text-sm leading-7 text-(--text)"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-(--line) bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_94%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-[2rem] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-full bg-(--gold)/10 p-2 text-(--gold)">
                  <Clock3 size={16} />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold) sm:text-xs sm:tracking-[0.22em]">
                  Availability
                </p>
              </div>

              <div className="mt-5 space-y-4">
                {schedule.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-[1.15rem] border border-(--line) bg-(--surface) px-4 py-4"
                  >
                    <span className="text-sm text-(--muted) sm:text-base">{item.label}</span>
                    <span className="text-sm font-semibold sm:text-base">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-(--line) bg-(--surface) p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-[2rem] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-full bg-(--gold)/10 p-2 text-(--gold)">
                  <CalendarClock size={16} />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold) sm:text-xs sm:tracking-[0.22em]">
                  Ready To Book
                </p>
              </div>
              <h3 className="mt-4 text-2xl leading-tight sm:text-3xl">Date lock karni hai to direct booking flow par ja sakte hain.</h3>
              <p className="mt-4 text-sm leading-7 text-(--muted) sm:text-base sm:leading-8">
                Package choose karein, details fill karein, aur secure payment checkout par move karein without unnecessary extra steps.
              </p>

              <Link to="/booking" className="mt-6 block w-full">
                <PrimaryButton className="w-full justify-between gap-3 px-5 sm:px-6">
                  Start Booking
                  <ArrowRight size={16} />
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
