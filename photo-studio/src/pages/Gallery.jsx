import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gallery } from "../data/studioData.js";

const filters = ["All", "Wedding", "Engagement", "Luxury", "Editorial"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const items = useMemo(() => (active === "All" ? gallery : gallery.filter((item) => item.category === active)), [active]);

  return (
    <div className="premium-container pt-28 pb-20 md:pt-32 md:pb-24">
      <section className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_96%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] px-5 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">Portfolio</p>
        <h1 className="mt-6 max-w-4xl text-3xl leading-tight sm:text-5xl lg:text-7xl">A gallery designed to feel curated, cinematic, and premium.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">This page now has cleaner filtering, larger visuals, and a more professional browsing experience across mobile and desktop.</p>
      </section>

      <section className="mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            className={`w-full rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] sm:w-auto ${
              active === filter ? "bg-[color:var(--gold)] text-black" : "premium-panel text-[color:var(--text)]"
            }`}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04 }}
            onClick={() => setActive(filter)}
          >
            {filter}
          </motion.button>
        ))}
      </section>

      <motion.section layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div key={item.id} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <Link to={`/gallery/${item.id}`} className="group block overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-2xl">
                <div className={`overflow-hidden ${index % 4 === 0 ? "h-72 sm:h-96" : "h-64 sm:h-80"}`}>
                  <motion.img src={item.image} alt={item.title} className="h-full w-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">{item.category}</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <h3 className="text-xl leading-tight sm:text-2xl">{item.title}</h3>
                    <ArrowRight size={18} className="text-[color:var(--gold)] transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}
