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
  { icon: MapPin, text: "Premium wedding coverage across India and destination venues" },
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "hello@lumiere-studio.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-4 pb-28 pt-10 sm:px-6 md:pb-10 lg:px-8">
      <div className="premium-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#120f0c,#21180f_52%,#0f0c0a)] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute -left-14 top-10 h-36 w-36 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-soft)] to-transparent" />

          <div className="relative grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.7fr)_minmax(260px,0.9fr)]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--gold-soft)]">Lumiere Studio</p>
              <h2 className="mt-4 max-w-md text-3xl leading-tight text-white sm:text-4xl">
                A premium footer for a premium studio presence.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                Wedding, engagement, and editorial photography with cleaner direction, better client flow, and a more polished digital experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@lumiere-studio.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]"
                >
                  Email Studio
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]"
                >
                  <Instagram size={14} />
                  Instagram
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">Quick Links</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {links.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-[color:var(--gold-soft)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">Contact</p>
              <div className="mt-5 space-y-4">
                {contacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.text} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                      <span className="mt-0.5 inline-flex rounded-xl bg-white/8 p-2">
                        <Icon size={16} className="text-[color:var(--gold-soft)]" />
                      </span>
                      <p className="text-sm leading-6 text-white/70">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="relative flex flex-col gap-3 pt-6 text-xs uppercase tracking-[0.22em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>Lumiere Studio © {year}</p>
            <p>Built for premium bookings and modern presentation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
