"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#040404] pt-20"
    >
      {/* Background Layer */}
      <HeroBackground />

      {/* Content Layer */}
      <HeroContent />

      {/* Scroll Indicator */}
      <HeroScrollIndicator />
    </section>
  );
}