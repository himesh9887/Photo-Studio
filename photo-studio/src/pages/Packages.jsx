import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { packages } from "../data/studioData.js";

export default function Packages() {
  return (
    <div className="premium-container pt-28 pb-20 md:pt-32 md:pb-24">
      <section className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_96%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] px-5 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">Investment</p>
        <h1 className="mt-6 max-w-4xl text-3xl leading-tight sm:text-5xl lg:text-7xl">Packages built for premium wedding productions.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">The pricing page now reads cleaner, feels more premium, and guides people toward booking without clutter.</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((item, index) => (
          <motion.article
            key={item.id}
            className={`rounded-[2rem] border p-6 shadow-2xl sm:p-8 ${
              index === 1
                ? "border-[color:var(--gold)]/30 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--gold)_10%,transparent),color-mix(in_oklab,var(--surface)_96%,transparent))]"
                : "border-[color:var(--line)] bg-[color:var(--surface)]"
            }`}
            whileHover={{ y: -10 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">{index === 1 ? "Most Selected" : "Collection"}</p>
            <h2 className="mt-5 text-2xl leading-tight sm:text-3xl">{item.name}</h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{item.description}</p>
            <p className="mt-6 text-3xl font-semibold text-[color:var(--gold)] sm:text-4xl">INR {item.price.toLocaleString("en-IN")}</p>
            <ul className="mt-8 space-y-4">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-base leading-7">
                  <Check size={18} className="mt-1 shrink-0 text-[color:var(--gold)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to={`/booking?package=${item.id}`} className="mt-10 block">
              <PrimaryButton className="w-full">Select Package</PrimaryButton>
            </Link>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
