import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollSection from "../components/ScrollSection.jsx";

export default function Contact() {
  return (
    <div className="premium-container pt-28 pb-24 md:pt-32">
      <ScrollSection>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Contact</p>
        <h1 className="text-5xl md:text-7xl">Start your production briefing.</h1>
      </ScrollSection>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          [Mail, "hello@lumierestudio.com"],
          [Phone, "+91 99999 12345"],
          [MapPin, "Mumbai, India"],
        ].map(([Icon, value]) => (
          <motion.div key={value} className="glass-card rounded-3xl p-6" whileHover={{ y: -10 }}>
            <Icon className="mb-3 text-[color:var(--gold)]" />
            <p>{value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
