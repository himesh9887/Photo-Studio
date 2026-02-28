import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const previousScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < 60) {
        setIsVisible(true);
      } else if (current > previousScroll.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      previousScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}
