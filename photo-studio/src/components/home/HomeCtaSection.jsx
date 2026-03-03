import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCtaSection() {
  return (
    <section className="px-4 pb-24 pt-4 sm:px-6 sm:pt-8 lg:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem]"
          style={{
            boxShadow: "var(--shadow-premium)",
          }}
        >
          <div className="absolute inset-0 border border-[rgba(255,255,255,0.12)]" />
          <img
            src="https://images.unsplash.com/photo-1510076857177-4ee6b52e9095?auto=format&fit=crop&w=1800&q=80"
            alt="Studio call to action"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,8,8,0.9),rgba(8,8,8,0.48),rgba(8,8,8,0.84))]" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(120deg,transparent,rgba(212,175,55,0.08))] lg:block" />
          <div className="absolute -right-16 top-0 h-44 w-44 rounded-full bg-[rgba(212,175,55,0.14)] blur-3xl" />

          <div className="relative px-3.5 py-8 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-20">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:#efd07b] sm:text-xs sm:tracking-[0.34em]">
              Ready To Book
            </p>
            <h2 className="mx-auto mt-3 max-w-4xl text-[1.8rem] font-semibold leading-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl">
              A full-screen style homepage should push visitors toward enquiry immediately.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-white/72 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
              The section is now wider, lighter, and less boxed-in so the homepage feels more premium across desktop and mobile.
            </p>

            <Link to="/booking" className="mt-5 inline-block w-full sm:mt-10 sm:w-auto">
              <motion.span
                animate={{ boxShadow: ["0 0 0 rgba(212,175,55,0.18)", "0 0 0 12px rgba(212,175,55,0)", "0 0 0 rgba(212,175,55,0.18)"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2.5 rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] sm:min-h-0 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.22em] sm:w-auto"
                style={{ background: "var(--gold)", color: "#15110c" }}
              >
                Book Now <ArrowRight size={18} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
