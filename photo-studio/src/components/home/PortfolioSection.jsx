import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { gallery as galleryData } from "../../data/studioData.js";

const categories = ["All", ...new Set(galleryData.map((item) => item.category))];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const visibleItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5 sm:gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] sm:text-xs sm:tracking-[0.34em]">
              Portfolio
            </p>
            <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight sm:mt-5 sm:text-5xl lg:text-6xl">
              Masonry gallery with filtering and a cinematic lightbox.
            </h2>
            <p className="mt-3 text-[13px] leading-6 text-[color:var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
              Visitors can scan categories fast, hover for motion, and open work in a focused modal without leaving the page.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:w-auto lg:flex-wrap lg:gap-3">
            {categories.map((category) => {
              const active = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="w-full rounded-full px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition sm:px-4 sm:text-xs sm:tracking-[0.16em] lg:w-auto lg:px-5 lg:py-3 lg:tracking-[0.22em]"
                  style={{
                    background: active
                      ? "var(--gold)"
                      : "color-mix(in oklab, var(--surface) 88%, transparent)",
                    color: active ? "#16120d" : "var(--text)",
                    border: `1px solid ${active ? "transparent" : "var(--line)"}`,
                    boxShadow: active
                      ? "0 12px 28px color-mix(in oklab, var(--gold) 18%, transparent)"
                      : "none",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-8 columns-1 gap-3 sm:mt-12 sm:gap-5 md:columns-2 xl:columns-3">
          {visibleItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedItem(item)}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[1.15rem] border text-left sm:mb-5 sm:rounded-[1.75rem]"
              style={{ borderColor: "var(--line)" }}
            >
              <div className={`${index % 3 === 0 ? "h-[15rem] sm:h-[28rem]" : index % 2 === 0 ? "h-[13rem] sm:h-[23rem]" : "h-[12rem] sm:h-[20rem]"}`}>
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[color:#efd07b] sm:text-xs sm:tracking-[0.26em]">
                  {item.category}
                </p>
                <h3 className="mt-1.5 text-base font-semibold text-white sm:text-2xl">{item.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm sm:py-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.4rem] border sm:rounded-[2rem]"
              style={{ borderColor: "rgba(255,255,255,0.14)" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-3 top-3 z-10 inline-flex rounded-full border p-2 text-white sm:right-4 sm:top-4"
                style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(10,10,10,0.45)" }}
              >
                <X size={18} />
              </button>

              <div className="grid bg-[#0d0d0d] lg:grid-cols-[1.1fr_0.9fr]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-[14rem] w-full object-cover sm:h-[32rem] lg:h-[42rem]"
                />
                <div className="flex flex-col justify-center px-4 py-5 sm:px-8 sm:py-8 lg:px-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:#efd07b] sm:text-xs sm:tracking-[0.28em]">
                    {selectedItem.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-4xl">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72 sm:mt-5 sm:text-base sm:leading-8">
                    A focused lightbox gives the portfolio more depth and keeps the browsing experience premium and immersive.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
