import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aarohi Malhotra",
    role: "Jaipur Wedding",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    review:
      "The homepage now feels premium from the first second. The visual depth, typography, and cleaner structure instantly build trust.",
  },
  {
    name: "Kabir Sethi",
    role: "Destination Groom",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    review:
      "This version looks much more polished and modern. It finally feels like a professional studio website instead of a basic template.",
  },
  {
    name: "Myra Khanna",
    role: "Editorial Couple Shoot",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80",
    review:
      "The carousel, spacing, and dark cinematic styling make the whole experience feel expensive and memorable.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="premium-container">
        <div className="section-shell rounded-[1.35rem] px-3.5 py-4 sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] sm:text-xs sm:tracking-[0.34em]">
                Testimonials
              </p>
              <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight sm:mt-5 sm:text-5xl">
                Auto-sliding reviews with stronger social proof.
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-[color:var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
                Cleaner testimonial presentation makes the page feel more trustworthy and far less cluttered.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-[1.15rem] border px-3.5 py-4 sm:rounded-[1.8rem] sm:px-8 sm:py-8"
              style={{
                borderColor: "var(--line)",
                background: "color-mix(in oklab, var(--surface) 92%, transparent)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.name}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="h-12 w-12 rounded-lg object-cover sm:h-16 sm:w-16 sm:rounded-2xl"
                    />
                    <div>
                      <p className="text-sm font-semibold sm:text-lg">{activeTestimonial.name}</p>
                      <p className="mt-1 text-[11px] text-[color:var(--muted)] sm:text-sm">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-[color:var(--gold)] sm:mt-6">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" className="sm:h-4 sm:w-4" />
                    ))}
                  </div>

                  <p className="mt-3 text-[13px] leading-6 sm:mt-6 sm:text-2xl sm:leading-9">
                    "{activeTestimonial.review}"
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex gap-2 sm:mt-8">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: index === activeIndex ? "2.4rem" : "0.75rem",
                      background:
                        index === activeIndex
                          ? "var(--gold)"
                          : "color-mix(in oklab, var(--muted) 28%, transparent)",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
