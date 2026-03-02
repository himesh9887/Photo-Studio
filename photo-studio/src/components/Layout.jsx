import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar.jsx";
import StudioFooter from "./StudioFooter.jsx";
import FloatingDock from "./FloatingDock.jsx";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onRouteChange = () => window.scrollTo({ top: 0, behavior: "smooth" });

    window.addEventListener("scroll", onScroll, { passive: true });
    onRouteChange();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {!isAdminRoute ? <DesktopNavbar scrolled={scrolled} /> : null}
      <main className={!isAdminRoute ? "overflow-x-hidden pb-24 md:pb-0" : "overflow-x-hidden"}>{children}</main>
      {!isAdminRoute ? <StudioFooter /> : null}
      {!isAdminRoute ? <FloatingDock /> : null}
    </div>
  );
}
