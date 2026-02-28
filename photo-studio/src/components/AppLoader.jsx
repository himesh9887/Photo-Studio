import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AppLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div
              className="mx-auto mb-5 h-16 w-16 rounded-full border-2 border-[color:var(--gold)] border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-xs uppercase tracking-[0.38em] text-[color:var(--muted)]">Lumiere Studio</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
