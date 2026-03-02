import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Packages", to: "/packages" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Wedding Films",
  "Pre-Wedding Shoots",
  "Portrait Sessions",
  "Destination Weddings",
];

const contacts = [
  { icon: MapPin, text: "Delhi, Jaipur, Mumbai and destination events" },
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "hello@velourastudio.com" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function StudioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-28 pt-10 sm:px-6 sm:pt-12 md:pb-12 lg:px-8">
      <div className="premium-container">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,#090909,#111111_42%,#0d0d0d)] shadow-2xl sm:rounded-[2rem]">
          <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-[rgba(212,175,55,0.12)] blur-3xl sm:-left-14 sm:top-10 sm:h-36 sm:w-36" />
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/5 blur-3xl sm:h-40 sm:w-40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.28)] to-transparent" />

          <div className="relative sm:hidden">
            <div className="px-4 py-5">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--gold-soft)]" />
                  Veloura Studio
                </div>
                <h2 className="mt-4 text-[1.8rem] leading-tight text-white">
                  Premium wedding visuals with a cleaner modern presence.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Built for mobile too: cleaner structure, better spacing, and a more premium first impression.
                </p>
              </motion.div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  to="/booking"
                  className="rounded-[1.15rem] border border-[color:var(--gold)]/20 bg-[color:var(--gold)]/10 px-4 py-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">Book</p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">Reserve Date</span>
                    <ArrowUpRight size={16} className="text-[color:var(--gold-soft)]" />
                  </div>
                </Link>
                <Link
                  to="/gallery"
                  className="rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">Work</p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">View Portfolio</span>
                    <ArrowUpRight size={16} className="text-[color:var(--gold-soft)]" />
                  </div>
                </Link>
              </div>

              <div className="mt-4 rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">
                  Quick Links
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-xs font-medium text-white/78"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">
                  Services
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] font-medium text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">
                  Contact
                </p>
                <div className="mt-3 space-y-2.5">
                  {contacts.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.text} className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.03] px-3 py-3">
                        <span className="mt-0.5 inline-flex rounded-lg bg-white/8 p-2 text-[color:var(--gold-soft)]">
                          <Icon size={15} />
                        </span>
                        <p className="text-xs leading-6 text-white/70">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                {socials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                    >
                      <Icon size={14} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/10 px-4 py-4 text-center text-[10px] uppercase tracking-[0.16em] text-white/45">
              <p>Veloura Studio (c) {year}</p>
              <p className="mt-1">Dark cinematic photo studio website</p>
            </div>
          </div>

          <div className="relative hidden sm:block sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="border-b border-white/10 pb-8">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-soft)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--gold-soft)]" />
                  Veloura Studio
                </div>
                <h2 className="mt-5 max-w-md text-4xl leading-tight text-white">
                  Modern cinematic visuals for premium wedding storytelling.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                  Production-ready presentation, cleaner trust signals, and a more premium digital impression for serious clients.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socials.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]"
                      >
                        <Icon size={14} />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_0.8fr_1fr]">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
                    Quick Links
                  </p>
                  <div className="mt-5 grid gap-3">
                    {quickLinks.map((item) => (
                      <Link key={item.label} to={item.to} className="text-sm text-white/72 transition hover:text-[color:var(--gold-soft)]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.08 }}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
                    Services
                  </p>
                  <div className="mt-5 grid gap-3">
                    {services.map((item) => (
                      <p key={item} className="text-sm text-white/72">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.16 }}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
                    Contact
                  </p>
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
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
              <p>Veloura Studio (c) {year}</p>
              <p>Dark cinematic photo studio website</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
