import HeroSection from "../components/home/HeroSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import HomeCtaSection from "../components/home/HomeCtaSection.jsx";

export default function Home() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, color-mix(in oklab, var(--gold) 10%, transparent), transparent 26%), radial-gradient(circle at 84% 10%, color-mix(in oklab, var(--gold-soft) 9%, transparent), transparent 22%), linear-gradient(180deg, color-mix(in oklab, var(--bg) 94%, #0d1014 6%), color-mix(in oklab, var(--bg-soft) 95%, #0d1014 5%) 38%, color-mix(in oklab, var(--bg) 96%, #0d1014 4%) 100%)",
        color: "var(--text)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-152 bg-[linear-gradient(180deg,rgba(9,9,9,0.18),transparent)]" />
      <div className="pointer-events-none absolute -left-32 top-96 h-72 w-72 rounded-full bg-(--gold)/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-72 -right-28 h-80 w-80 rounded-full bg-(--gold-soft)/8 blur-3xl" />

      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <HomeCtaSection />
    </div>
  );
}
