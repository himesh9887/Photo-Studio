import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollSection from "../components/ScrollSection.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { gallery, packages } from "../data/studioData.js";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-screen overflow-hidden px-5 pt-28 md:pt-32">
        <motion.img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800"
          alt="Luxury wedding frame"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[var(--bg)]" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center">
          <motion.p className="mb-6 text-xs uppercase tracking-[0.35em] text-[color:var(--gold-soft)]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Cinematic Wedding Studio
          </motion.p>
          <motion.h1
            className="max-w-4xl text-5xl leading-[1.08] text-white md:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            We direct memories with editorial precision and timeless emotion.
          </motion.h1>
          <motion.div className="mt-10 flex flex-wrap gap-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Link to="/booking"><PrimaryButton>Book Session</PrimaryButton></Link>
            <Link to="/gallery"><PrimaryButton variant="outline">View Gallery</PrimaryButton></Link>
          </motion.div>
        </div>
      </section>

      <ScrollSection className="premium-container py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Signature Work</p>
          <h2 className="text-4xl md:text-6xl">Designed with light, movement, and silence.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <motion.article
              key={item.id}
              className="glass-card rounded-3xl p-7"
              initial="rest"
              whileHover="hover"
              variants={{ rest: { y: 0 }, hover: { y: -10, boxShadow: "var(--shadow-premium)" } }}
            >
              <Sparkles className="mb-4 text-[color:var(--gold)]" />
              <h3 className="mb-3 text-2xl">{item.name}</h3>
              <p className="text-sm text-[color:var(--muted)]">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection className="premium-container pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Recent Frames</p>
            <h2 className="text-4xl md:text-5xl">Curated moments</h2>
          </div>
          <Link className="hidden items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--gold)] md:flex" to="/gallery">
            Explore <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.slice(0, 3).map((item) => (
            <motion.div key={item.id} className="group relative overflow-hidden rounded-3xl" whileHover={{ y: -10 }}>
              <motion.img src={item.image} alt={item.title} className="h-72 w-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
              <motion.div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">{item.category}</p>
                <h3 className="text-2xl text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollSection>
    </div>
  );
}
