import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { gallery } from "../data/studioData.js";

export default function GalleryDetails() {
  const { id } = useParams();
  const item = gallery.find((entry) => entry.id === id) || gallery[0];

  return (
    <div className="premium-container grid min-h-screen gap-10 pt-28 pb-20 md:grid-cols-2 md:pt-32">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="overflow-hidden rounded-3xl">
        <motion.img src={item.image} alt={item.title} className="h-full min-h-[420px] w-full object-cover" whileHover={{ scale: 1.08 }} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">{item.category}</p>
        <h1 className="mt-4 text-5xl md:text-6xl">{item.title}</h1>
        <p className="mt-6 max-w-xl text-[color:var(--muted)]">
          This collection was directed with a deliberate balance of natural light and cinematic contrast to preserve emotional detail without visual noise.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            ["580+", "Frames"],
            ["14h", "Coverage"],
            ["4", "Scenes"],
          ].map(([value, label]) => (
            <div key={label} className="glass-card rounded-2xl p-4 text-center">
              <p className="text-2xl text-[color:var(--gold)]">{value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
