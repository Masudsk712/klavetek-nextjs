"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number | null>(null);

  // Smooth parallax values for background layer — limited to 12px
  const bgX = useMotionValue(0);
  const bgY = useMotionValue(0);
  const springBgX = useSpring(bgX, { stiffness: 30, damping: 15 });
  const springBgY = useSpring(bgY, { stiffness: 30, damping: 15 });

  // Scroll state for fade transition
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        bgX.set(-x);
        bgY.set(-y);
        setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
        rafRef.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [bgX, bgY]);

  // Scroll-based fade transition to next section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how much of the hero is still visible
      const visible = Math.max(0, Math.min(1, (rect.bottom - 100) / windowHeight));
      setScrollProgress(1 - visible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic gradient angle based on mouse position
  const gradientAngle = 95 + (mousePos.x - 0.5) * 10;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-background text-text-primary pt-20 transition-colors duration-500"
      style={{
        opacity: 1 - scrollProgress * 0.4,
        transform: `scale(${1 - scrollProgress * 0.02})`,
        transformOrigin: "center bottom",
        transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
      }}
    >
      {/* Background Layer with parallax */}
      <motion.div
        style={{
          x: springBgX,
          y: springBgY,
        }}
        className="absolute inset-0 z-0"
      >
        <HeroBackground />
      </motion.div>

      {/* Premium emerald gradient overlay that shifts with mouse */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(${gradientAngle}deg, rgba(16, 185, 129, 0.03) 0%, transparent 50%, rgba(16, 185, 129, 0.01) 100%)`,
        }}
      />

      {/* Content Layer */}
      <HeroContent />

      {/* Depth Layer - Scroll Indicator */}
      <HeroScrollIndicator />

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)`,
          opacity: 1 - scrollProgress * 0.5,
        }}
      />
    </section>
  );
}
