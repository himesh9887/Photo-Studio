import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollSection from "../components/ScrollSection.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { gallery, packages } from "../data/studioData.js";

const trustStats = [
  { value: "180+", label: "wedding stories" },
  { value: "12", label: "cities covered" },
  { value: "48 hr", label: "preview delivery" },
];

const signaturePoints = [
  "Clear timeline planning before the event day",
  "Cinematic portraits with natural expressions",
  "Luxury album and polished digital delivery",
];

const services = [
  {
    title: "Wedding coverage",
    text: "Full-day photography built around rituals, portraits, and candid moments without losing pace.",
  },
  {
    title: "Pre-wedding shoots",
    text: "Styled sessions with cleaner art direction, balanced composition, and a premium finish.",
  },
  {
    title: "Luxury celebrations",
    text: "Multi-event coverage for families that want a refined and consistent visual story.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 md:pb-20 md:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(197,154,82,0.16),transparent_24%),radial-gradient(circle_at_86%_10%,rgba(19,16,13,0.05),transparent_22%)]" />
        <div className="premium-container relative">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)]">
            <div className="rounded-[2rem] bg-[color:var(--text)] p-5 sm:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.9fr)]">
                <div className="flex flex-col justify-between">
                  <div>
                    <motion.p
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-[color:var(--gold-soft)] sm:text-xs"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Sparkles size={14} />
                      Modern Wedding Studio
                    </motion.p>

                    <motion.h1
                      className="mt-6 max-w-3xl text-4xl leading-[0.98] text-white sm:text-5xl md:text-6xl xl:text-7xl"
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 }}
                    >
                      Clean, premium wedding visuals with a homepage that finally feels professional.
                    </motion.h1>

                    <motion.p
                      className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base md:text-lg"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.14 }}
                    >
                      This version is simpler and more polished: less clutter, stronger spacing, clearer hierarchy, and a better flow from hero to booking.
                    </motion.p>
                  </div>

                  <motion.div
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/booking" className="w-full sm:w-auto">
                      <PrimaryButton className="w-full sm:w-auto">Book Session</PrimaryButton>
                    </Link>
                    <Link to="/gallery" className="w-full sm:w-auto">
                      <PrimaryButton
                        variant="outline"
                        className="w-full border-white/25 text-white hover:border-[color:var(--gold)] hover:text-black sm:w-auto"
                      >
                        View Gallery
                      </PrimaryButton>
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  className="relative overflow-hidden rounded-[1.7rem]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400"
                    alt="Elegant wedding portrait"
                    className="h-72 w-full object-cover sm:h-96 lg:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/28 px-4 py-4 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold-soft)] sm:text-xs">Signature Mood</p>
                    <p className="mt-2 text-lg text-white sm:text-xl">Editorial compositions with natural warmth.</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-6 grid gap-3 sm:grid-cols-3"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                {trustStats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/6 px-4 py-4">
                    <p className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/55 sm:text-xs">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="grid gap-6">
              <motion.div
                className="glass-card rounded-[2rem] p-5 sm:p-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Why It Feels Better</p>
                <h2 className="mt-4 text-2xl leading-tight sm:text-3xl">A stronger layout without making the page feel crowded.</h2>
                <div className="mt-6 space-y-3">
                  {signaturePoints.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-black/5 bg-white/50 px-4 py-3 dark:border-white/5 dark:bg-white/5">
                      <Check size={16} className="mt-1 shrink-0 text-[color:var(--gold)]" />
                      <p className="text-sm leading-6 text-[color:var(--muted)]">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-[2rem] bg-[color:var(--bg-soft)] p-5 sm:p-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Featured Package</p>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl">Royale Experience</h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                      Best fit for multi-event weddings that need a richer, complete visual story.
                    </p>
                  </div>
                  <Star size={18} className="mt-1 text-[color:var(--gold)]" />
                </div>
                <p className="mt-5 text-3xl font-semibold">INR 2,75,000</p>
                <Link to="/packages" className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">
                  Explore packages <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ScrollSection className="premium-container py-6 md:py-10">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <div className="rounded-[2rem] bg-[color:var(--bg-soft)] p-5 sm:p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Studio Services</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">Built for couples who want premium without confusion.</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
              The page now reads cleaner and guides visitors from trust to services to packages to gallery in a more natural order.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((item) => (
              <motion.article
                key={item.title}
                className="glass-card rounded-[1.8rem] p-5"
                initial="rest"
                whileHover="hover"
                variants={{ rest: { y: 0 }, hover: { y: -8, boxShadow: "var(--shadow-premium)" } }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)] sm:text-xs">Service</p>
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="premium-container py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Packages</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Simple cards, premium detail.</h2>
          </div>
          <Link to="/packages" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">
            See all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <motion.article
              key={item.id}
              className={`rounded-[2rem] p-5 sm:p-6 ${
                index === 1 ? "bg-[color:var(--text)] text-white" : "glass-card"
              }`}
              initial="rest"
              whileHover="hover"
              variants={{ rest: { y: 0 }, hover: { y: -10, boxShadow: "var(--shadow-premium)" } }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className={`text-xs uppercase tracking-[0.28em] ${index === 1 ? "text-[color:var(--gold-soft)]" : "text-[color:var(--gold)]"}`}>
                  {index === 1 ? "Most Selected" : "Collection"}
                </p>
                <Sparkles size={18} className={index === 1 ? "text-[color:var(--gold-soft)]" : "text-[color:var(--gold)]"} />
              </div>
              <h3 className="mt-4 text-2xl">{item.name}</h3>
              <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-white/70" : "text-[color:var(--muted)]"}`}>{item.description}</p>
              <p className="mt-5 text-3xl font-semibold">INR {item.price.toLocaleString("en-IN")}</p>
              <div className="mt-5 space-y-3">
                {item.features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <Check size={16} className={`mt-1 shrink-0 ${index === 1 ? "text-[color:var(--gold-soft)]" : "text-[color:var(--gold)]"}`} />
                    <p className={`text-sm leading-6 ${index === 1 ? "text-white/70" : "text-[color:var(--muted)]"}`}>{feature}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection className="premium-container py-6 md:py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Gallery</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Balanced, cleaner visual showcase.</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Open gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {gallery.slice(0, 4).map((item, index) => (
            <motion.article
              key={item.id}
              className={`group relative overflow-hidden rounded-[2rem] ${index === 0 ? "md:col-span-2" : ""}`}
              whileHover={{ y: -8 }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover ${index === 0 ? "h-80 sm:h-[28rem]" : "h-72 sm:h-80"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.45 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold-soft)] sm:text-xs">{item.category}</p>
                  <h3 className="mt-2 text-xl text-white sm:text-2xl">{item.title}</h3>
                </div>
                <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/76 sm:inline-flex">
                  Featured
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection className="premium-container py-12 md:py-16">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#17120d,#2a2014_58%,#18120c)] px-5 py-8 sm:px-8 sm:py-10 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">Ready To Book</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                A cleaner homepage now matches the premium feel your studio needs.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                If this direction looks right, the same UI language can be applied to the booking, about, and contact pages too.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/booking" className="w-full sm:w-auto lg:w-full">
                <PrimaryButton className="w-full sm:w-auto lg:w-full">Start Booking</PrimaryButton>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto lg:w-full">
                <PrimaryButton
                  variant="outline"
                  className="w-full border-white/25 text-white hover:border-[color:var(--gold)] hover:text-black sm:w-auto lg:w-full"
                >
                  Contact Studio
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
}
