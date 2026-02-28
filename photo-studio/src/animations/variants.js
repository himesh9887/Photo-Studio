export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const gentleHover = {
  rest: { y: 0, scale: 1, boxShadow: "var(--shadow-card)" },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 18px 36px color-mix(in oklab, var(--gold) 22%, transparent)",
  },
};
