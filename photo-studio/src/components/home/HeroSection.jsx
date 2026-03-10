import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: "ceremony",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Signature Weddings",
    title: "Frames that feel cinematic, intimate, and premium.",
    text: "A modern dark landing experience crafted to build trust fast and make your studio feel high-end from the first scroll.",
  },
  {
    id: "portrait",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Editorial Portraits",
    title: "Luxury visuals that still keep the message clear.",
    text: "The layout balances atmosphere, strong typography, and booking-focused structure so the page looks polished and performs better.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative px-4 pb-12 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:min-h-screen lg:px-8 lg:pb-24 lg:pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(212,175,55,0.08),transparent_20%),linear-gradient(180deg,rgba(10,10,10,0.14),transparent_30%)]" />
        <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-[rgba(212,175,55,0.09)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden lg:min-h-[calc(100vh-6.5rem)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_32%,transparent),transparent_44%,color-mix(in_oklab,var(--gold)_4%,transparent))]" />
          <div className="absolute inset-y-0 right-0 hidden w-[58%] bg-[linear-gradient(120deg,transparent,rgba(12,12,12,0.06),rgba(12,12,12,0.14))] lg:block" />

          <div className="relative grid gap-6 py-4 sm:gap-10 sm:py-7 lg:min-h-[calc(100vh-6.5rem)] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-10">
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[18rem] overflow-hidden rounded-[1.5rem] border p-2 sm:h-[34rem] sm:rounded-[2.25rem] sm:p-3 lg:mx-8 lg:h-[min(76vh,44rem)] xl:mx-0" style={{ borderColor: "color-mix(in oklab, var(--gold) 14%, var(--line))" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/35" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative h-full overflow-hidden rounded-[1.15rem] sm:rounded-[1.4rem]"
                  >
                    <motion.img
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      initial={{ scale: 1.02 }}
                      animate={{ scale: 1.1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/22 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-8">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[color:#efd07b] sm:text-xs sm:tracking-[0.3em]">
                        {currentSlide.eyebrow}
                      </p>
                      <h2 className="mt-2 max-w-lg text-lg font-semibold leading-tight text-white sm:mt-3 sm:text-4xl">
                        {currentSlide.title}
                      </h2>
                      <p className="mt-2 max-w-lg text-[11px] leading-5 text-white/72 sm:mt-4 sm:text-base sm:leading-7">
                        {currentSlide.text}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mx-3 mt-3 rounded-[1rem] border px-3 py-2.5 backdrop-blur-xl sm:mx-0 sm:absolute sm:bottom-6 sm:left-6 sm:mt-0 sm:max-w-[18rem] sm:rounded-[1.5rem] sm:px-5 sm:py-4" style={{ borderColor: "var(--hero-panel-line)", background: "var(--hero-panel-bg)" }}>
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[color:#efd07b] sm:text-xs sm:tracking-[0.28em]">
                  Studio Positioning
                </p>
                <p className="mt-1.5 text-[11px] leading-5 sm:mt-3 sm:text-sm sm:leading-7" style={{ color: "var(--hero-panel-text)" }}>
                  Stronger first impression, cleaner trust signals, and better booking intent.
                </p>
              </div>
            </div>

            <div className="order-2 flex flex-col justify-center px-3 text-center sm:px-0 lg:order-1 lg:max-w-[38rem] lg:pr-6 lg:text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)] sm:text-xs sm:tracking-[0.34em]">
                Modern Dark Cinematic UI
              </p>
              <h1 className="mt-3 text-[1.9rem] font-semibold leading-[0.96] tracking-[-0.04em] sm:mt-5 sm:text-6xl xl:text-7xl">
                Professional photo studio presence, built to convert.
              </h1>
              <p className="mx-auto mt-3.5 max-w-xl text-[13px] leading-6 text-[color:var(--muted)] sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                Full-screen composition, cleaner spacing, and stronger contrast make the first screen feel open, premium, and easier to trust.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:mt-10 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/booking" className="w-full sm:w-auto">
                  <motion.span
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="gold-glow inline-flex min-h-[3rem] w-full items-center justify-center gap-2.5 rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] sm:min-h-0 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.22em] sm:w-auto"
                    style={{ background: "var(--gold)", color: "var(--button-ink)" }}
                  >
                    Book Now <ArrowRight size={18} />
                  </motion.span>
                </Link>
                <Link to="/gallery" className="w-full sm:w-auto">
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-full border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] sm:min-h-0 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.22em] sm:w-auto"
                    style={{ borderColor: "var(--line)" }}
                  >
                    View Portfolio
                  </motion.span>
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
                {[
                  ["Luxury", "feel"],
                  ["Full", "screen"],
                  ["Fast", "booking"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-[1rem] border px-2.5 py-3 text-center sm:rounded-3xl sm:px-5 sm:py-5 sm:text-left"
                    style={{
                      borderColor: "var(--line)",
                      background: "color-mix(in oklab, var(--surface) 84%, transparent)",
                    }}
                  >
                    <p className="text-[13px] font-semibold sm:text-lg">{value}</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[color:var(--muted)] sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
