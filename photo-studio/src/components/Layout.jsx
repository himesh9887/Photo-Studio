import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar.jsx";
import FloatingDock from "./FloatingDock.jsx";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <DesktopNavbar scrolled={scrolled} />
      <main className="pb-24 md:pb-0">{children}</main>
      <FloatingDock />
    </div>
  );
}
