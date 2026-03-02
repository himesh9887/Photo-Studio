import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text, center = false, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`${center ? "mx-auto text-center" : "text-left"} max-w-3xl`}
    >
      <p className={`text-sm font-semibold uppercase tracking-[0.32em] ${dark ? "text-[color:var(--gold-soft)]" : "text-[color:var(--gold)]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-[color:var(--text)]"}`}>{title}</h2>
      {text ? (
        <p className={`mt-5 text-lg leading-9 ${dark ? "text-white/68" : "text-[color:var(--muted)]"}`}>
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}
