import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const previousScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - previousScroll.current;
      const nearTop = current < 80;
      const nearBottom = window.innerHeight + current >= document.documentElement.scrollHeight - 24;

      if (nearTop || nearBottom) {
        setIsVisible(true);
      } else if (delta > 12) {
        setIsVisible(false);
      } else if (delta < -12) {
        setIsVisible(true);
      }

      previousScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}
