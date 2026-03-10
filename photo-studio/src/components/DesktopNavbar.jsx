import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
];

export default function DesktopNavbar({ scrolled }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40"
      animate={{
        backgroundColor: scrolled ? "var(--glass)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.14)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.32 }}
    >
      <div className="premium-container">
        <div className="flex h-[4.25rem] items-center justify-between sm:hidden">
          <Link to="/" className="text-base font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Veloura
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/booking"
              className="inline-flex min-h-[2.75rem] items-center rounded-full border border-[color:var(--gold)]/20 bg-[color:var(--gold)]/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold)]"
            >
              Book
            </Link>
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--glass)] text-[color:var(--gold)]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        <div className="hidden sm:flex sm:min-h-[4.75rem] sm:items-center sm:justify-between sm:py-2.5 lg:min-h-20 lg:py-0">
          <Link to="/" className="shrink-0 text-lg font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] lg:text-xl lg:tracking-[0.28em]">
            Veloura
          </Link>

          <div className="ml-3 flex min-w-0 flex-1 items-center justify-end gap-2 lg:gap-4">
            <nav className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-end gap-1 rounded-[1.15rem] border border-[color:var(--line)] bg-[color:var(--glass)] px-1.5 py-1.5 md:gap-1.5 md:px-2 lg:gap-2 lg:rounded-full lg:px-3 lg:py-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] transition-colors md:px-3 md:text-[11px] md:tracking-[0.12em] lg:px-4 lg:py-2 lg:text-xs lg:tracking-[0.2em] ${
                        isActive
                          ? "bg-[color:var(--gold)] text-[color:var(--button-ink)]"
                          : "text-[color:var(--text)]/76 hover:bg-[color:var(--hover-surface)] hover:text-[color:var(--text)]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>

            <a
              href="tel:+919876543210"
              className="hidden xl:inline-flex xl:min-h-[2.75rem] xl:items-center xl:gap-2 xl:rounded-full xl:border xl:border-[color:var(--line)] xl:bg-[color:var(--glass)] xl:px-3 xl:text-[11px] xl:font-semibold xl:uppercase xl:tracking-[0.12em] xl:text-[color:var(--text)]/78 xl:transition xl:hover:border-[color:var(--gold)]/35 xl:hover:text-[color:var(--gold)]"
            >
              <Phone size={14} />
              +91 98765 43210
            </a>

            <button
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--glass)] text-[color:var(--gold)] transition hover:rotate-6 hover:bg-[color:var(--gold)]/10 lg:h-11 lg:w-11"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
