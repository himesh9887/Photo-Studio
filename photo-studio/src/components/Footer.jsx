import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Packages", to: "/packages" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const contacts = [
  { icon: MapPin, text: "Delhi, Mumbai, Jaipur and destination weddings" },
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "hello@velourastudio.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-28 pt-12 sm:px-6 md:pb-12 lg:px-8">
      <div className="premium-container">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#111111,#171717_55%,#0b0b0b)] px-6 py-10 shadow-2xl sm:px-8 lg:px-10 lg:py-12">
          <div className="absolute -left-12 top-8 h-32 w-32 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid gap-10 border-b border-white/10 pb-8 lg:grid-cols-[1.2fr_0.7fr_0.9fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--gold-soft)]">Veloura Studio</p>
              <h2 className="mt-5 max-w-md text-3xl leading-tight text-white sm:text-4xl">A refined digital presence for premium wedding bookings.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                Cinematic wedding photography, editorial portraits, and polished client experiences built for modern luxury positioning.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@velourastudio.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]"
                >
                  Email Studio
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]"
                >
                  <Instagram size={14} />
                  Instagram
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.06 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">Navigate</p>
              <div className="mt-5 grid gap-3">
                {links.map((item) => (
                  <Link key={item.label} to={item.to} className="text-sm text-white/72 transition hover:text-[color:var(--gold-soft)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.12 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">Contact</p>
              <div className="mt-5 space-y-4">
                {contacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="mt-0.5 inline-flex rounded-xl bg-white/8 p-2 text-[color:var(--gold-soft)]">
                        <Icon size={16} />
                      </span>
                      <p className="text-sm leading-6 text-white/70">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.18 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">Book</p>
              <p className="mt-5 text-sm leading-7 text-white/68">Reserve your wedding date early to secure prime weekend availability.</p>
              <Link
                to="/booking"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-soft)] transition hover:text-white"
              >
                Start Booking <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="relative flex flex-col gap-3 pt-6 text-xs uppercase tracking-[0.22em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>Veloura Studio © {year}</p>
            <p>Premium wedding photography website</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
