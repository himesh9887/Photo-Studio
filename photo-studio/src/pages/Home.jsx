import HeroSection from "../components/home/HeroSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import PortfolioSection from "../components/home/PortfolioSection.jsx";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import HomeCtaSection from "../components/home/HomeCtaSection.jsx";

export default function Home() {
  return (
    <div
      className="overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--bg) 92%, #0d1014 8%), color-mix(in oklab, var(--bg-soft) 94%, #0d1014 6%))",
        color: "var(--text)",
      }}
    >
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <HomeCtaSection />
    </div>
  );
}
