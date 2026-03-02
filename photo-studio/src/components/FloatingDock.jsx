import { motion } from "framer-motion";
import { CalendarCheck, Home, Image, Package, Phone, Sun, Moon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useScrollDirection } from "../hooks/useScrollDirection.js";

const items = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/gallery", icon: Image, label: "Gallery" },
  { to: "/packages", icon: Package, label: "Plans" },
  { to: "/booking", icon: CalendarCheck, label: "Book" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

export default function FloatingDock() {
  const { isDark, toggleTheme } = useTheme();
  const isVisible = useScrollDirection();
  const location = useLocation();

  return (
    <motion.div
      className="fixed inset-x-0 bottom-3 z-50 md:hidden"
      animate={{ y: isVisible ? 0 : 120, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-[calc(100%-0.75rem)] max-w-lg rounded-[1.35rem] border border-[color:var(--line)] bg-[color:var(--glass)] px-1.5 py-1.5 backdrop-blur-xl shadow-2xl sm:w-[calc(100%-1rem)] sm:rounded-[1.8rem] sm:px-2 sm:py-2">
        <div className="grid grid-cols-6 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.to;
            return (
              <NavLink key={item.to} to={item.to} aria-label={item.label}>
                <motion.span
                  whileTap={{ scale: 0.96 }}
                  className={`flex min-h-[3rem] flex-col items-center justify-center rounded-xl px-0.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] sm:min-h-[3.35rem] sm:rounded-2xl sm:px-1 sm:py-2 sm:text-[10px] sm:tracking-[0.14em] ${
                    active ? "bg-[color:var(--gold)] text-black" : "text-[color:var(--text)]/82"
                  }`}
                >
                  <Icon size={15} className="sm:h-[17px] sm:w-[17px]" />
                  <span className="mt-1 leading-none">{item.label}</span>
                </motion.span>
              </NavLink>
            );
          })}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex min-h-[3rem] flex-col items-center justify-center rounded-xl px-0.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[color:var(--gold)] sm:min-h-[3.35rem] sm:rounded-2xl sm:px-1 sm:py-2 sm:text-[10px] sm:tracking-[0.14em]"
          >
            <motion.span whileTap={{ scale: 0.96 }} className="flex flex-col items-center justify-center">
              {isDark ? <Sun size={15} className="sm:h-[17px] sm:w-[17px]" /> : <Moon size={15} className="sm:h-[17px] sm:w-[17px]" />}
              <span className="mt-1 leading-none">Theme</span>
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
