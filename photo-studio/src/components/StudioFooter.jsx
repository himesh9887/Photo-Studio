import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

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
  const { isDark } = useTheme();

  const footerTheme = isDark
    ? {
        "--surface": "rgba(18, 18, 18, 0.92)",
        "--text": "#ffffff",
        "--muted": "rgba(255, 255, 255, 0.7)",
        "--line": "rgba(255, 255, 255, 0.1)",
        "--gold": "#d4af37",
        "--gold-soft": "#efd07b",
      }
    : {
        "--surface": "rgba(255, 248, 239, 0.94)",
        "--text": "#1d160f",
        "--muted": "#6b5f52",
        "--line": "rgba(197, 154, 82, 0.16)",
        "--gold": "#b78638",
        "--gold-soft": "#d8b06a",
      };

  return (
    <footer className="px-4 pb-28 pt-10 sm:px-6 sm:pt-12 md:pb-12 lg:px-8">
      <div
        className="relative mx-auto w-full max-w-[1440px]"
        style={footerTheme}
      >
        <div className="pointer-events-none absolute -left-10 top-6 h-28 w-28 rounded-full bg-[rgba(212,175,55,0.1)] blur-3xl sm:-left-14 sm:top-10 sm:h-36 sm:w-36" />
        <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[color:var(--gold-soft)]/8 blur-3xl sm:h-40 sm:w-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.24)] to-transparent" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-full"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--text) 8%, transparent), transparent 16%, color-mix(in oklab, var(--text) 10%, transparent))",
          }}
        />

        <div className="relative sm:hidden">
          <div className="px-0 py-5">
            <div className="rounded-[1.35rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] px-3 py-4 shadow-[0_16px_34px_rgba(0,0,0,0.08)]">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold)">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--gold-soft)]" />
                  Veloura Studio
                </div>
                <h2 className="mt-4 text-[1.55rem] leading-tight text-(--text)">
                  Premium wedding visuals with a cleaner modern presence.
                </h2>
                <p className="mt-3 text-sm leading-7 text-(--muted)">
                  Built for mobile too: cleaner structure, better spacing, and a more premium first impression.
                </p>
              </motion.div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  to="/booking"
                  className="rounded-[1.15rem] border border-[color:var(--gold)]/20 bg-[color:var(--gold)]/10 px-3 py-3.5 shadow-[0_12px_28px_rgba(212,175,55,0.08)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--gold)">Book</p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-(--text)">Reserve Date</span>
                    <ArrowUpRight size={16} className="text-(--gold)" />
                  </div>
                </Link>
                <Link
                  to="/gallery"
                  className="rounded-[1.15rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-3.5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--gold)">Work</p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-(--text)">View Portfolio</span>
                    <ArrowUpRight size={16} className="text-(--gold)" />
                  </div>
                </Link>
              </div>

              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--gold)">
                  Quick Links
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-2.5 text-center text-xs font-medium text-(--text) transition hover:border-[color:var(--gold)]/30 hover:text-(--gold)"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--gold)">
                  Services
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-2.5 text-[11px] font-medium text-(--muted)"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--gold)">
                  Contact
                </p>
                <div className="mt-3 space-y-2.5">
                  {contacts.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.text} className="flex items-start gap-3 rounded-[1rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-3">
                        <span className="mt-0.5 inline-flex rounded-lg bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] p-2 text-(--gold)">
                          <Icon size={15} />
                        </span>
                        <p className="text-xs leading-6 text-(--muted)">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                {socials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-(--text) transition hover:border-[color:var(--gold)]/30 hover:text-(--gold)"
                    >
                      <Icon size={14} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 border-t border-(--line) px-1 py-4 text-center text-[10px] uppercase tracking-[0.16em] text-(--muted)">
              <p>Veloura Studio (c) {year}</p>
              <p className="mt-1">Dark cinematic photo studio website</p>
            </div>
          </div>
        </div>

        <div className="relative hidden sm:block sm:px-0 sm:py-9 lg:py-11">
          <div className="rounded-[2rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] px-6 py-8 shadow-[0_18px_42px_rgba(0,0,0,0.08)] lg:px-8 lg:py-10">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
              <div className="grid gap-6 border-b border-(--line) pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--gold-soft)]" />
                    Veloura Studio
                  </div>
                  <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-(--text) md:text-4xl xl:text-[3.25rem]">
                    A cleaner footer that feels aligned with the rest of the site on laptop screens.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-(--muted)">
                    Better spacing, tighter hierarchy, and simpler action blocks make the bottom section feel intentional instead of oversized.
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
                          className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-(--text) transition hover:border-[color:var(--gold)] hover:text-(--gold)"
                        >
                          <Icon size={14} />
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <Link
                    to="/booking"
                    className="rounded-[1.5rem] border border-[color:var(--gold)]/22 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--gold)_10%,transparent),color-mix(in_oklab,var(--surface)_92%,transparent))] px-5 py-5 transition hover:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--gold)_14%,transparent),color-mix(in_oklab,var(--surface)_94%,transparent))]"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold)">Book</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-base font-semibold text-(--text)">Reserve Your Date</span>
                      <ArrowUpRight size={16} className="text-(--gold)" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-(--muted)">Fast booking flow with package selection and payment handoff.</p>
                  </Link>

                  <Link
                    to="/gallery"
                    className="rounded-[1.5rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-5 py-5 transition hover:border-[color:var(--gold)]/20 hover:bg-[color-mix(in_oklab,var(--surface)_94%,transparent)]"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold)">Portfolio</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-base font-semibold text-(--text)">View Recent Work</span>
                      <ArrowUpRight size={16} className="text-(--gold)" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-(--muted)">Curated galleries with cleaner browsing and stronger image focus.</p>
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_0.95fr_1.2fr]">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
                <div className="h-full rounded-[1.5rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-5 py-5 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
                    Quick Links
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {quickLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] px-3 py-2.5 text-center text-xs font-medium text-(--text) transition hover:border-[color:var(--gold)]/30 hover:text-(--gold)"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.08 }}>
                <div className="h-full rounded-[1.5rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-5 py-5 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
                    Services
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {services.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-(--line) bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] px-3 py-2.5 text-[11px] font-medium text-(--muted)"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.16 }}
              >
                <div className="rounded-[1.5rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-5 py-5 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
                    Contact
                  </p>
                  <div className="mt-5 grid gap-3">
                    {contacts.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.text} className="flex items-start gap-3 rounded-[1.2rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] px-4 py-3">
                          <span className="mt-0.5 inline-flex rounded-xl bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] p-2 text-(--gold)">
                            <Icon size={16} />
                          </span>
                          <p className="text-sm leading-6 text-(--muted)">{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-(--line) pt-6 text-xs uppercase tracking-[0.22em] text-(--muted) sm:flex-row sm:items-center sm:justify-between">
              <p>Veloura Studio (c) {year}</p>
              <p>Dark cinematic photo studio website</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
