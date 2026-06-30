import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#040404]"
    >
      {/* Background */}
      <HeroBackground />

      {/* Hero Content */}
      <HeroContent />

      {/* Bottom Stats */}
      <HeroStats />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
    </section>
  );
}
