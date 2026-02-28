import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollSection from "../components/ScrollSection.jsx";
import { gallery } from "../data/studioData.js";

const filters = ["All", "Wedding", "Engagement", "Luxury", "Editorial"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const items = useMemo(() => (active === "All" ? gallery : gallery.filter((item) => item.category === active)), [active]);

  return (
    <div className="premium-container pt-28 md:pt-32">
      <ScrollSection>
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">Portfolio</p>
        <h1 className="max-w-3xl text-5xl md:text-7xl">A gallery built on color, movement, and atmosphere.</h1>
      </ScrollSection>

      <ScrollSection className="py-10">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] ${active === filter ? "bg-[color:var(--gold)] text-black" : "glass-card text-[color:var(--text)]"}`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </ScrollSection>

      <motion.div layout className="grid gap-5 pb-24 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div key={item.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <Link to={`/gallery/${item.id}`} className="group block overflow-hidden rounded-3xl">
                <motion.img src={item.image} alt={item.title} className="h-80 w-full object-cover" whileHover={{ scale: 1.1 }} />
                <motion.div className="bg-[color:var(--bg-soft)] p-5 transition group-hover:bg-[color:var(--bg)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">{item.category}</p>
                  <h3 className="mt-2 text-2xl">{item.title}</h3>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
