import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { gallery } from "../data/studioData.js";

export default function GalleryDetails() {
  const { id } = useParams();
  const item = gallery.find((entry) => entry.id === id) || gallery[0];

  return (
    <div className="premium-container pt-28 pb-20 md:pt-32 md:pb-24">
      <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
        <ArrowLeft size={16} /> Back To Gallery
      </Link>

      <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] shadow-2xl">
          <motion.img src={item.image} alt={item.title} className="h-full min-h-[280px] w-full object-cover sm:min-h-[420px]" whileHover={{ scale: 1.05 }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">{item.category}</p>
          <h1 className="mt-5 text-3xl leading-tight sm:text-5xl lg:text-6xl">{item.title}</h1>
          <p className="mt-6 text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">This collection is presented with stronger hierarchy and cleaner spacing, making the page feel more premium and easier to browse.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["580+", "Frames"],
              ["14h", "Coverage"],
              ["4", "Scenes"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] p-4 text-center">
                <p className="text-2xl font-semibold text-[color:var(--gold)]">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
