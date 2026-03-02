import { motion, useInView } from "framer-motion";
import { Award, Camera, Clock3, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "events captured",
    title: "Trusted Coverage",
    description: "Years of premium wedding and portrait work with consistent delivery standards.",
    icon: Camera,
  },
  {
    value: 96,
    suffix: "%",
    label: "repeat referrals",
    title: "Client Confidence",
    description: "A stronger brand experience makes visitors more likely to enquire and recommend.",
    icon: Users,
  },
  {
    value: 48,
    suffix: "h",
    label: "preview delivery",
    title: "Fast Turnaround",
    description: "Quick previews create momentum while the full gallery is refined to final quality.",
    icon: Clock3,
  },
  {
    value: 10,
    suffix: "+",
    label: "years experience",
    title: "Luxury Standard",
    description: "Sharper presentation, better clarity, and more trust for premium-value bookings.",
    icon: Award,
  },
];

function CounterCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    let frameId;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(item.value * progress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, item.value]);

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      className="section-shell rounded-[1.35rem] p-4 sm:rounded-[1.8rem] sm:p-6"
    >
      <span className="inline-flex rounded-xl p-2.5 sm:rounded-2xl sm:p-3" style={{ background: "color-mix(in oklab, var(--gold) 12%, transparent)", color: "var(--gold)" }}>
        <Icon size={20} />
      </span>

      <div className="mt-4 flex items-end gap-2 sm:mt-5">
        <p className="text-3xl font-semibold sm:text-5xl">
          {count}
          {item.suffix}
        </p>
      </div>
      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)] sm:mt-2 sm:text-xs sm:tracking-[0.24em]">
        {item.label}
      </p>
      <h3 className="mt-4 text-xl font-semibold sm:mt-5 sm:text-2xl">{item.title}</h3>
      <p className="mt-2.5 text-sm leading-7 text-[color:var(--muted)] sm:mt-3 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
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
            Why Choose Us
          </p>
          <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:mt-5 sm:text-5xl lg:text-6xl">
            Strong trust signals with animated stats and cleaner storytelling.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
            Instead of weak filler content, this block uses measurable signals and clear reasons to choose the studio.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <CounterCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
