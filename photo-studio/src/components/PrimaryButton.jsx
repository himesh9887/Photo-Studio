import { motion } from "framer-motion";

export default function PrimaryButton({ children, className = "", variant = "solid", ...props }) {
  const shared =
    "inline-flex min-h-[3.25rem] items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] transition-all sm:px-6";

  const look =
    variant === "outline"
      ? "border border-[color:var(--gold)] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-black"
      : "bg-[color:var(--gold)] text-black hover:gold-glow";

  return (
    <motion.button
      className={`${shared} ${look} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
