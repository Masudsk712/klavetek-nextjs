"use client";

import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroScroll from "./HeroScroll";

export default function HeroSection() {
  return (
    <section
  id="hero"
  className="
    relative
    isolate
    flex
    min-h-screen
    items-center
    overflow-hidden
  "
>
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <div
        className="
          relative
          z-50
          mx-auto
          w-full
          max-w-[1450px]
          px-6
          pt-24
          lg:px-10
        "
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          {/* Left */}
          <HeroContent />

          {/* Right */}
          <HeroStats />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <HeroScroll />
    </section>
  );
}