import { motion } from "framer-motion";
import { containerStagger, fadeUp } from "../animations/variants.js";

export default function ScrollSection({ children, className = "" }) {
  return (
    <motion.section
      className={className}
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <motion.div variants={fadeUp}>{children}</motion.div>
    </motion.section>
  );
}
