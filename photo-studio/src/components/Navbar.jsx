import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <DesktopNavbar scrolled={scrolled} />;
}
