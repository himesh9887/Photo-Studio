import { motion } from "framer-motion";

export default function FormField({ label, name, value, onChange, error, textarea = false, type = "text" }) {
  const El = textarea ? "textarea" : "input";
  const hasValue = Boolean(value);

  return (
    <motion.label
      className="relative block"
      animate={error ? { x: [0, -6, 6, -3, 3, 0] } : { x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <El
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        rows={textarea ? 4 : undefined}
        className={`peer w-full rounded-2xl border bg-transparent px-4 pb-3 pt-6 text-sm text-[color:var(--text)] outline-none transition-all ${
          error
            ? "border-red-400 shadow-[0_0_0_2px_rgba(248,113,113,0.3)]"
            : "border-[color:color-mix(in_oklab,var(--gold)_22%,transparent)] focus:border-[color:var(--gold)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_30%,transparent)]"
        }`}
      />
      <span
        className={`pointer-events-none absolute left-4 transition-all ${
          hasValue
            ? "top-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--gold)]"
            : "top-4 text-sm text-[color:var(--muted)] peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-[color:var(--gold)]"
        }`}
      >
        {label}
      </span>
      {error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null}
    </motion.label>
  );
}
