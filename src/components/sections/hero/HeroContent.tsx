"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Container from "@/components/ui/Container";
import HeroCTA from "./HeroCTA";
import HeroStatsPanel from "./HeroStatsPanel";

/* ──────────────────────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

const trustBadges = [
  {
    icon: (
      <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Premium Quality",
  },
  {
    icon: (
      <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22L12 2l10 20H2z" />
        <path d="M12 18v.01" />
        <path d="M12 14v-4" />
      </svg>
    ),
    label: "Eco Friendly",
  },
  {
    icon: (
      <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: "IS Certified",
  },
  {
    icon: (
      <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" />
        <path d="M9 12v.01" />
        <path d="M9 15v.01" />
        <path d="M9 18v.01" />
      </svg>
    ),
    label: "Fast Delivery",
  },
];

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function HeroContent() {
  // Subtle parallax on mouse movement — limited to 12px max
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 12;
    const y = (e.clientY / innerHeight - 0.5) * 12;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <Container className="relative z-20 flex min-h-[92vh] items-center py-28 md:py-32 lg:py-36">
      {/* Radial glow behind headline — soft breathing animation */}
      <div
        className="absolute top-1/3 left-0 w-[700px] h-[700px] -translate-x-1/4 -translate-y-1/4 pointer-events-none z-0 animate-breathing-glow"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.06) 30%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Floating Particles — very subtle */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[10%] w-[3px] h-[3px] rounded-full bg-emerald-400/30 animate-particle" />
        <div className="absolute top-[25%] right-[15%] w-[2px] h-[2px] rounded-full bg-emerald-300/20 animate-particle-2" />
        <div className="absolute top-[55%] left-[25%] w-[2px] h-[2px] rounded-full bg-emerald-400/25 animate-particle-3" />
        <div className="absolute top-[60%] right-[20%] w-[3px] h-[3px] rounded-full bg-emerald-300/20 animate-particle" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[35%] left-[40%] w-[2px] h-[2px] rounded-full bg-emerald-400/20 animate-particle-2" style={{ animationDelay: "5s" }} />
        <div className="absolute top-[70%] left-[15%] w-[2px] h-[2px] rounded-full bg-emerald-300/20 animate-particle-3" style={{ animationDelay: "7s" }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid items-center gap-16 lg:gap-24 xl:gap-32 lg:grid-cols-[1fr_400px] w-full relative z-10"
        onMouseMove={handleMouseMove}
      >
        {/* ================================================================
            LEFT SIDE — Headline + Description + CTA + Trust Badges
            ================================================================ */}
        <div className="max-w-[700px]">
          {/* Small label / brand preamble */}
          <motion.div variants={fadeUp} className="mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="h-px w-10 bg-emerald-400" />
              PREMIUM BUILDING SOLUTIONS
            </span>
          </motion.div>

          {/* ─── Headline — Ultra-Premium Enterprise Style ─── */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-5xl font-bold leading-[1.06] tracking-[-0.025em] text-white sm:text-6xl md:text-[68px] lg:text-[72px] xl:text-[76px]"
          >
            <span className="block">India's Trusted</span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                AAC Blocks
              </span>
              <span className="text-white/90">&nbsp;& Tiles</span>
            </span>
            <span className="block text-white/85 mt-2">Manufacturer</span>
          </motion.h1>

          {/* ─── Subtitle — optimized width 580-620px ─── */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-white/65 max-w-[600px] leading-[1.75] tracking-[0.01em]"
          >
            Engineering stronger, lighter, and sustainable building materials
            for modern infrastructure — with uncompromising quality and
            ISO-certified manufacturing.
          </motion.p>

          {/* ─── CTA Buttons ─── */}
          <motion.div variants={fadeUp}>
            <HeroCTA />
          </motion.div>

          {/* ─── Trust Badges — Premium Glass Chips ─── */}
          <motion.div variants={fadeIn} className="mt-16 sm:mt-20">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-5 font-medium">
              Trusted Excellence
            </p>
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  className="glass-chip group inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-default"
                >
                  <span className="text-emerald-400/80 transition-all duration-300 group-hover:text-emerald-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.5)] inline-block">
                    {badge.icon}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap text-white/80 transition-colors duration-300 group-hover:text-white">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            RIGHT SIDE — Premium Floating Glass Stats Panel
            ================================================================ */}
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
        >
          <HeroStatsPanel />
        </motion.div>
      </motion.div>
    </Container>
  );
}