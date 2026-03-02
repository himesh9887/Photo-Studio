import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Films",
    description:
      "Cinematic storytelling with premium color, emotional pacing, and polished final delivery.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Couple Portraits",
    description:
      "Guided editorial sessions built around elegant framing, natural movement, and luxury aesthetics.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Private Celebrations",
    description:
      "Premium event coverage for receptions, intimate gatherings, and destination evenings.",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)] sm:text-xs sm:tracking-[0.34em]">
            Services
          </p>
          <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:mt-5 sm:text-5xl lg:text-6xl">
            Premium service cards with clearer content and stronger visual depth.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
            Each card uses cinematic imagery, rounded edges, soft glow borders, and hover lift so the section feels far more professional.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[1.5rem] border sm:rounded-[2rem]"
              style={{
                borderColor: "color-mix(in oklab, var(--gold) 12%, var(--line))",
                background: "color-mix(in oklab, var(--surface) 92%, transparent)",
                boxShadow:
                  "0 18px 44px rgba(0, 0, 0, 0.18), 0 0 0 1px color-mix(in oklab, var(--gold) 10%, transparent)",
              }}
            >
              <div className="relative h-52 overflow-hidden sm:h-64">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>

              <div className="p-5 sm:p-7">
                <h3 className="text-lg font-semibold sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:mt-4 sm:text-base sm:leading-8">
                  {service.description}
                </p>
                <div className="mt-5 h-1 w-12 rounded-full bg-[color:var(--gold)] transition-all duration-300 group-hover:w-20 sm:mt-6 sm:w-14" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
