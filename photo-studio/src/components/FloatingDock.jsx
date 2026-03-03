import { motion } from "framer-motion";
import { CalendarCheck, Home, Image, Package, Phone } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useScrollDirection } from "../hooks/useScrollDirection.js";

const items = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/gallery", icon: Image, label: "Gallery" },
  { to: "/packages", icon: Package, label: "Plans" },
  { to: "/booking", icon: CalendarCheck, label: "Book" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

export default function FloatingDock() {
  const isVisible = useScrollDirection();
  const location = useLocation();

  return (
    <motion.div
      className="fixed inset-x-0 bottom-3 z-50 sm:hidden"
      animate={{ y: isVisible ? 0 : 120, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto w-[calc(100%-0.75rem)] rounded-[1.35rem] border border-[color:var(--line)] bg-[color:var(--glass)] px-1.5 py-1.5 backdrop-blur-xl shadow-2xl"
      >
        <div className="grid grid-cols-5 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.to;

            return (
              <NavLink key={item.to} to={item.to} aria-label={item.label}>
                <motion.span
                  whileHover={{ y: -2, scale: active ? 1.02 : 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  animate={
                    active
                      ? {
                          y: [0, -1.5, 0],
                          boxShadow: [
                            "0 8px 18px rgba(212,175,55,0.20)",
                            "0 12px 24px rgba(212,175,55,0.28)",
                            "0 8px 18px rgba(212,175,55,0.20)",
                          ],
                        }
                      : {
                          y: 0,
                          boxShadow: "0 0 0 rgba(0,0,0,0)",
                        }
                  }
                  transition={
                    active
                      ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.2, ease: "easeOut" }
                  }
                  className={`flex min-h-[3rem] flex-col items-center justify-center rounded-xl px-0.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                    active
                      ? "bg-[color:var(--gold)] text-black"
                      : "text-[color:var(--text)]/82"
                  }`}
                  style={
                    !active
                      ? {
                          background: "color-mix(in oklab, var(--surface) 26%, transparent)",
                        }
                      : undefined
                  }
                >
                  <motion.span
                    animate={active ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                    transition={
                      active
                        ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 }
                    }
                    className="inline-flex"
                  >
                    <Icon size={15} />
                  </motion.span>
                  <span className="mt-1 leading-none">{item.label}</span>
                </motion.span>
              </NavLink>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
