import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { gallery } from "../data/studioData.js";

const filters = ["All", "Wedding", "Engagement", "Luxury", "Editorial"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  void motion;

  const items = useMemo(
    () => (active === "All" ? gallery : gallery.filter((item) => item.category === active)),
    [active],
  );

  const featuredItem = items[0];
  const secondaryItems = items.slice(1);

  return (
    <div className="relative overflow-hidden pb-20 pt-24 sm:pt-28 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(212,175,55,0.05),transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-(--gold)/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-112 h-72 w-72 rounded-full bg-(--gold-soft)/8 blur-3xl" />

      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-(--line) bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_94%,transparent),color-mix(in_oklab,var(--bg-soft)_90%,transparent))] px-4 py-5 shadow-[0_22px_55px_rgba(0,0,0,0.12)] sm:rounded-4xl sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-(--gold)/8 blur-3xl sm:h-44 sm:w-44" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--gold)/30 to-transparent" />

          <div className="relative grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-(--gold) sm:text-sm sm:tracking-[0.32em]">
                Portfolio
              </p>
              <h1 className="mt-4 max-w-4xl text-[2rem] leading-[1.02] sm:text-5xl lg:text-7xl">
                A gallery that feels curated on phone, tablet, and laptop.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-(--muted) sm:mt-6 sm:text-lg sm:leading-9">
                The layout is now cleaner, more premium, and easier to browse across every screen size with stronger visual hierarchy and better spacing.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:justify-self-end lg:max-w-sm">
              {[
                ["250+", "captured moments"],
                [`${items.length}`, "visible stories"],
                ["4K", "premium presentation"],
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

      <section className="mt-6 rounded-[1.35rem] border border-(--line) bg-(--surface) px-3 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:mt-8 sm:rounded-[1.75rem] sm:px-4 sm:py-4">
        <div className="flex items-center gap-2 px-1 pb-3">
          <span className="inline-flex rounded-full bg-(--gold)/10 p-2 text-(--gold)">
            <Sparkles size={14} />
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--muted) sm:text-xs sm:tracking-[0.24em]">
            Filter Collections
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          {filters.map((filter) => {
            const activeFilter = active === filter;

            return (
              <motion.button
                key={filter}
                className="w-full rounded-full px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] sm:w-auto sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.22em]"
                style={{
                  background: activeFilter ? "var(--gold)" : "color-mix(in oklab, var(--surface) 92%, transparent)",
                  color: activeFilter ? "#13100c" : "var(--text)",
                  border: `1px solid ${activeFilter ? "transparent" : "var(--line)"}`,
                  boxShadow: activeFilter
                    ? "0 12px 24px color-mix(in oklab, var(--gold) 18%, transparent)"
                    : "none",
                }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -1 }}
                onClick={() => setActive(filter)}
              >
                {filter}
              </motion.button>
            );
          })}
        </div>
      </section>

      {featuredItem ? (
        <motion.section layout className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            key={featuredItem.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Link
              to={`/gallery/${featuredItem.id}`}
              className="group block overflow-hidden rounded-3xl border border-(--line) bg-(--surface) shadow-[0_22px_55px_rgba(0,0,0,0.12)] sm:rounded-[1.75rem]"
            >
              <div className="relative h-72 overflow-hidden sm:h-104 lg:h-136">
                <motion.img
                  src={featuredItem.image}
                  alt={featuredItem.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#efd07b] sm:text-xs sm:tracking-[0.24em]">
                    Featured Collection
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {featuredItem.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
                    A stronger first card gives the gallery immediate impact and makes the page feel more editorial and premium.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="grid gap-4">
            <div className="rounded-[1.35rem] border border-(--line) bg-(--surface) p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-3xl sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold) sm:text-xs sm:tracking-[0.22em]">
                Active Category
              </p>
              <p className="mt-3 text-2xl font-semibold sm:text-3xl">{active}</p>
              <p className="mt-3 text-sm leading-7 text-(--muted)">
                The content grid adjusts smoothly for each category so the browsing flow stays clean and balanced.
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-(--line) bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_8%,transparent),color-mix(in_oklab,var(--surface)_94%,transparent))] p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-3xl sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold) sm:text-xs sm:tracking-[0.22em]">
                Gallery Flow
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Better mobile card proportions",
                  "Cleaner tablet spacing",
                  "More premium desktop hierarchy",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-(--line) bg-(--surface) px-3 py-3 text-sm text-(--text)"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      ) : null}

      <motion.section layout className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {secondaryItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Link
                to={`/gallery/${item.id}`}
                className="group block overflow-hidden rounded-[1.35rem] border border-(--line) bg-(--surface) shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:rounded-[1.75rem] sm:shadow-[0_22px_55px_rgba(0,0,0,0.12)]"
              >
                <div className={`overflow-hidden ${index % 4 === 0 ? "h-64 sm:h-80" : "h-56 sm:h-72"}`}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--gold) sm:text-xs sm:tracking-[0.24em]">
                    {item.category}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="text-lg leading-tight sm:text-2xl">{item.title}</h3>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--line) text-(--gold) transition group-hover:translate-x-1">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
      </div>
    </div>
  );
}
