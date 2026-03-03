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
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="pointer-events-none absolute -left-10 top-6 h-28 w-28 rounded-full bg-[rgba(212,175,55,0.1)] blur-3xl sm:-left-14 sm:top-10 sm:h-36 sm:w-36" />
        <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[color:var(--gold-soft)]/8 blur-3xl sm:h-40 sm:w-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.24)] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(10,10,10,0.14),transparent_16%,rgba(10,10,10,0.2))]" />

        <div className="relative sm:hidden">
          <div className="px-0 py-5">
            <div className="px-1 py-1">
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
                  className="rounded-[1.15rem] border border-[color:var(--gold)]/20 bg-[color:var(--gold)]/10 px-4 py-4 shadow-[0_12px_28px_rgba(212,175,55,0.08)]"
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

              <div className="mt-6 px-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">
                  Quick Links
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2.5 text-center text-xs font-medium text-white/78 transition hover:border-[color:var(--gold)]/30 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 px-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">
                  Services
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[11px] font-medium text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 px-1">
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

              <div className="mt-6 flex gap-2 px-1">
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

            <div className="mt-5 border-t border-white/10 px-1 py-4 text-center text-[10px] uppercase tracking-[0.16em] text-white/45">
              <p>Veloura Studio (c) {year}</p>
              <p className="mt-1">Dark cinematic photo studio website</p>
            </div>
          </div>

          <div className="relative hidden sm:block sm:px-0 sm:py-10 lg:py-12">
            <div className="border-b border-white/10 pb-8">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-soft)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--gold-soft)]" />
                  Veloura Studio
                </div>
                <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <h2 className="max-w-2xl text-4xl leading-tight text-white lg:text-5xl">
                      Modern cinematic visuals with a cleaner, wider footer layout.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                      The footer now feels more open and aligned with the homepage instead of looking like a separate heavy card.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Link
                      to="/booking"
                      className="rounded-[1.35rem] border border-[color:var(--gold)]/20 bg-[color:var(--gold)]/10 px-5 py-4 transition hover:bg-[color:var(--gold)]/14"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">Book</p>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-white">Reserve Your Date</span>
                        <ArrowUpRight size={16} className="text-[color:var(--gold-soft)]" />
                      </div>
                    </Link>
                    <Link
                      to="/gallery"
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-[color:var(--gold)]/20 hover:bg-white/[0.06]"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">Portfolio</p>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-white">View Recent Work</span>
                        <ArrowUpRight size={16} className="text-[color:var(--gold-soft)]" />
                      </div>
                    </Link>
                  </div>
                </div>
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
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
                    Quick Links
                  </p>
                  <div className="mt-5 grid gap-3">
                    {quickLinks.map((item) => (
                      <Link key={item.label} to={item.to} className="text-sm text-white/72 transition hover:translate-x-1 hover:text-[color:var(--gold-soft)]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.08 }}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl">
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
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl">
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
