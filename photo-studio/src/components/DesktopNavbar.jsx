import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
];

export default function DesktopNavbar({ scrolled }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 hidden md:block"
      animate={{
        backgroundColor: scrolled ? "var(--glass)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.14)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.32 }}
    >
      <div className="premium-container flex h-[4.5rem] items-center justify-between lg:h-20">
        <Link to="/" className="text-lg font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)] lg:text-xl lg:tracking-[0.28em]">
          Veloura
        </Link>

        <nav className="flex items-center gap-3 lg:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative py-2 text-[11px] uppercase tracking-[0.18em] transition-colors lg:text-xs lg:tracking-[0.24em] ${
                  isActive ? "text-[color:var(--gold)]" : "text-[color:var(--text)]/76 hover:text-[color:var(--text)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px w-full origin-left bg-[color:var(--gold)]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                  {isActive ? <motion.span layoutId="active-nav" className="absolute -bottom-1 left-0 h-px w-full bg-[color:var(--gold)]" /> : null}
                </>
              )}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className="rounded-full border border-[color:var(--line)] p-2 text-[color:var(--gold)] transition hover:rotate-6 hover:bg-[color:var(--gold)]/10"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
