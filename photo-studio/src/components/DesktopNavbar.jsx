import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
];

export default function DesktopNavbar({ scrolled }) {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-40 hidden md:block ${scrolled ? "shadow-2xl" : ""}`}
      animate={{
        backgroundColor: scrolled ? "var(--glass)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
      }}
      transition={{ duration: 0.32 }}
    >
      <div className="premium-container flex h-20 items-center justify-between">
        <Link to="/" className="text-xl font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
          Lumiere
        </Link>
        <nav className="flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="group relative text-xs uppercase tracking-[0.2em] text-[color:var(--text)]/85">
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-[color:var(--gold)]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
              {location.pathname === item.to ? (
                <motion.span layoutId="active-nav" className="absolute -bottom-1 left-0 h-px w-full bg-[color:var(--gold)]" />
              ) : null}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-[color:var(--gold)]/40 p-2 text-[color:var(--gold)] transition hover:rotate-6 hover:bg-[color:var(--gold)]/10"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
