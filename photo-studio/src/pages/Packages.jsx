import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import ScrollSection from "../components/ScrollSection.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { packages } from "../data/studioData.js";

export default function Packages() {
  return (
    <div className="premium-container pt-28 pb-24 md:pt-32">
      <ScrollSection>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Investment</p>
        <h1 className="text-5xl md:text-7xl">Packages tailored for premium productions.</h1>
      </ScrollSection>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {packages.map((item) => (
          <motion.article key={item.id} className="glass-card rounded-3xl p-7" whileHover={{ y: -10 }}>
            <h2 className="text-3xl">{item.name}</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{item.description}</p>
            <p className="mt-4 text-xl font-semibold text-[color:var(--gold)]">INR {item.price.toLocaleString()}</p>
            <ul className="mt-4 space-y-3">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-[color:var(--gold)]" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={`/booking?package=${item.id}`} className="mt-8 block">
              <PrimaryButton className="w-full">Select Package</PrimaryButton>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
