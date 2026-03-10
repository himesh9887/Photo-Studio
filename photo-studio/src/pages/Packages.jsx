import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { packages } from "../data/studioData.js";

export default function Packages() {
  return (
    <div className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(212,175,55,0.05),transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-(--gold)/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-[30rem] h-72 w-72 rounded-full bg-(--gold-soft)/8 blur-3xl" />

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[1.5rem] border border-(--line) bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_95%,transparent),color-mix(in_oklab,var(--bg-soft)_90%,transparent))] px-4 py-6 shadow-[0_22px_55px_rgba(0,0,0,0.12)] sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-(--gold)/8 blur-3xl sm:h-48 sm:w-48" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--gold)/30 to-transparent" />

          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-(--gold) sm:text-sm sm:tracking-[0.32em]">
                Investment
              </p>
              <h1 className="mt-4 max-w-4xl text-[2rem] leading-[1.02] sm:text-5xl lg:text-7xl">
                Premium plans built to feel clear, elevated, and easy to book.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-(--muted) sm:mt-6 sm:text-lg sm:leading-9">
                The plans page now has cleaner hierarchy, stronger pricing visibility, and a more premium presentation across phone, tablet, and desktop.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:justify-self-end lg:max-w-sm">
              {[
                ["3", "signature plans"],
                ["48h", "preview support"],
                ["Tailored", "premium coverage"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.15rem] border border-(--line) bg-(--surface) px-4 py-4 sm:rounded-[1.35rem]"
                >
                  <p className="text-xl font-semibold text-(--gold) sm:text-2xl">{value}</p>
                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--muted) sm:text-xs sm:tracking-[0.2em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[1.35rem] border border-(--line) bg-(--surface) px-3 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:mt-8 sm:rounded-[1.75rem] sm:px-4 sm:py-4">
          <div className="flex items-center gap-2 px-1 pb-3">
            <span className="inline-flex rounded-full bg-(--gold)/10 p-2 text-(--gold)">
              <Sparkles size={14} />
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--muted) sm:text-xs sm:tracking-[0.24em]">
              Curated Pricing
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
            {packages.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-full border px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.2em] ${
                  index === 1
                    ? "border-transparent bg-(--gold) text-[color:var(--button-ink)] shadow-[0_12px_24px_rgba(212,175,55,0.18)]"
                    : "border-(--line) bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] text-(--text)"
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4 lg:mt-8 lg:grid-cols-3 lg:items-start">
          {packages.map((item, index) => {
            const featured = index === 1;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-[1.5rem] border p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-[2rem] sm:p-6 lg:p-7 ${
                  featured
                    ? "border-[color:var(--gold)]/25 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--gold)_9%,transparent),color-mix(in_oklab,var(--surface)_96%,transparent))] lg:-mt-4 lg:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
                    : "border-(--line) bg-(--surface)"
                }`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-(--gold)/6 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold) sm:text-xs sm:tracking-[0.24em]">
                        {featured ? "Most Selected" : "Collection"}
                      </p>
                      <h2 className="mt-3 text-[1.6rem] leading-tight sm:text-3xl">{item.name}</h2>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[10px] ${
                        featured
                          ? "bg-(--gold) text-[color:var(--button-ink)]"
                          : "border border-(--line) bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] text-(--muted)"
                      }`}
                    >
                      {featured ? "Recommended" : "Premium"}
                    </span>
                  </div>

                  <p className="mt-4 text-[13px] leading-6 text-(--muted) sm:text-base sm:leading-8">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-[1.15rem] border border-(--line) bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] p-4 sm:rounded-[1.35rem]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--muted) sm:text-xs sm:tracking-[0.22em]">
                      Starting Investment
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-(--gold) sm:text-4xl">
                      INR {item.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 rounded-2xl border border-(--line) bg-[color-mix(in_oklab,var(--surface)_94%,transparent)] px-3 py-3 text-sm leading-6 sm:text-base sm:leading-7">
                        <span className="mt-0.5 inline-flex rounded-full bg-(--gold)/10 p-1.5 text-(--gold)">
                          <Check size={16} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/booking?package=${item.id}`} className="mt-6 block">
                    <PrimaryButton className="w-full">
                      {featured ? "Book This Package" : "Select Package"}
                    </PrimaryButton>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
