import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const highlights = [
  "Documentary honesty with a polished editorial finish.",
  "Structured timelines so photography never feels chaotic.",
  "A premium client journey from consultation to final delivery.",
];

export default function About() {
  return (
    <div className="premium-container pt-28 pb-20 md:pt-32 md:pb-24">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_96%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] px-5 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">About</p>
          <h1 className="mt-6 max-w-4xl text-3xl leading-tight sm:text-5xl lg:text-7xl">A production house built for modern luxury wedding storytelling.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">
            The website and the brand now align around one idea: emotional imagery presented with restraint, confidence, and a premium client experience.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] shadow-2xl">
          <img src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1400&q=80" alt="Studio portrait" className="h-[18rem] w-full object-cover sm:h-[34rem]" />
        </motion.div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.article key={item} whileHover={{ y: -8 }} className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-2xl sm:p-8">
            <div className="inline-flex rounded-2xl bg-[color:var(--gold)]/10 p-3 text-[color:var(--gold)]">
              {index === 1 ? <Sparkles size={20} /> : <Check size={20} />}
            </div>
            <p className="mt-6 text-lg leading-8 sm:text-xl sm:leading-9">{item}</p>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
