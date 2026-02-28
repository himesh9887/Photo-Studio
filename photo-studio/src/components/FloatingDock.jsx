import { motion } from "framer-motion";
import { Home, Image, Package, CalendarCheck, Phone, Moon, Sun } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useScrollDirection } from "../hooks/useScrollDirection.js";

const items = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/gallery", icon: Image, label: "Gallery" },
  { to: "/packages", icon: Package, label: "Packages" },
  { to: "/booking", icon: CalendarCheck, label: "Booking" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

export default function FloatingDock() {
  const { isDark, toggleTheme } = useTheme();
  const isVisible = useScrollDirection();
  const location = useLocation();

  return (
    <motion.div
      className="fixed inset-x-0 bottom-4 z-50 md:hidden"
      animate={{ y: isVisible ? 0 : 110, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-[94%] max-w-sm items-center justify-between rounded-[2rem] border border-[color:var(--gold)]/25 px-3 py-2 glass-card">
        {items.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.to;
          return (
            <NavLink key={item.to} to={item.to} aria-label={item.label}>
              <motion.span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  active ? "bg-[color:var(--gold)] text-black" : "text-[color:var(--text)]/85"
                }`}
                whileTap={{ scale: 1.18 }}
                animate={active ? { y: [0, -4, 0] } : { y: 0 }}
                transition={{ duration: 0.38 }}
              >
                <Icon size={18} />
              </motion.span>
            </NavLink>
          );
        })}
        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[color:var(--gold)]"
          aria-label="Toggle theme"
        >
          <motion.span whileTap={{ scale: 1.15 }} whileHover={{ rotate: 12 }}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}
