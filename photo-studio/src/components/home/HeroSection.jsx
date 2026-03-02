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
    <section className="relative px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:min-h-screen lg:pb-28 lg:pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_32%),radial-gradient(circle_at_80%_12%,rgba(212,175,55,0.08),transparent_22%)]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(212,175,55,0.08)] blur-3xl" />
      </div>

      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="section-shell relative overflow-hidden rounded-[1.75rem] px-4 py-5 sm:rounded-[2rem] sm:px-8 sm:py-8 lg:px-10 lg:py-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_44%,rgba(212,175,55,0.08))]" />

          <div className="relative grid gap-6 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)] sm:text-xs sm:tracking-[0.34em]">
                Modern Dark Cinematic UI
              </p>
              <h1 className="mt-4 text-[2.1rem] font-semibold leading-[0.94] tracking-[-0.04em] sm:mt-5 sm:text-6xl xl:text-7xl">
                Professional photo studio presence, built to convert.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                Large type, emotional copy, premium contrast, and polished motion make the first screen feel intentional instead of template-like.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/booking" className="w-full sm:w-auto">
                  <motion.span
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="gold-glow inline-flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] sm:min-h-0 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.22em] sm:w-auto"
                    style={{ background: "var(--gold)", color: "#15110c" }}
                  >
                    Book Now <ArrowRight size={18} />
                  </motion.span>
                </Link>
                <Link to="/gallery" className="w-full sm:w-auto">
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] sm:min-h-0 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.22em] sm:w-auto"
                    style={{ borderColor: "var(--line)" }}
                  >
                    View Portfolio
                  </motion.span>
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3">
                {[
                  ["Luxury-first", "visual hierarchy"],
                  ["Fully responsive", "mobile structure"],
                  ["Smooth motion", "premium feel"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-[1.35rem] border px-4 py-4 text-left sm:rounded-3xl sm:px-5 sm:py-5"
                    style={{
                      borderColor: "var(--line)",
                      background: "color-mix(in oklab, var(--surface) 90%, transparent)",
                    }}
                  >
                    <p className="text-base font-semibold sm:text-lg">{value}</p>
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)] sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[17rem] overflow-hidden rounded-[1.6rem] border p-2.5 sm:h-[31rem] sm:rounded-[2rem] sm:p-3" style={{ borderColor: "var(--line)" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/35" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative h-full overflow-hidden rounded-[1.4rem]"
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
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:#efd07b] sm:text-xs sm:tracking-[0.3em]">
                        {currentSlide.eyebrow}
                      </p>
                      <h2 className="mt-2.5 max-w-lg text-xl font-semibold leading-tight text-white sm:mt-3 sm:text-4xl">
                        {currentSlide.title}
                      </h2>
                      <p className="mt-2.5 max-w-lg text-xs leading-6 text-white/72 sm:mt-4 sm:text-base sm:leading-7">
                        {currentSlide.text}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-3 rounded-[1.25rem] border px-4 py-3 backdrop-blur-xl sm:absolute sm:-bottom-6 sm:left-auto sm:right-6 sm:mt-0 sm:max-w-[18rem] sm:rounded-[1.5rem] sm:px-5 sm:py-4" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(12,12,12,0.58)" }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:#efd07b] sm:text-xs sm:tracking-[0.28em]">
                  Studio Positioning
                </p>
                <p className="mt-2 text-xs leading-6 text-white/74 sm:mt-3 sm:text-sm sm:leading-7">
                  Stronger first impression, cleaner trust signals, and better booking intent.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
