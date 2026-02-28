import ScrollSection from "../components/ScrollSection.jsx";

export default function About() {
  return (
    <div className="premium-container pt-28 pb-20 md:pt-32">
      <ScrollSection>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">About</p>
        <h1 className="max-w-4xl text-5xl md:text-7xl">A production house for modern wedding storytelling.</h1>
        <p className="mt-8 max-w-3xl text-[color:var(--muted)]">
          Lumiere Studio combines documentary honesty with editorial craft. Every project is designed as a complete visual production, from location lighting plans to album art direction.
        </p>
      </ScrollSection>
    </div>
  );
}
