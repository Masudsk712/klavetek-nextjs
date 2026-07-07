"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Shield,
  Leaf,
  Timer,
  DollarSign,
  Ruler,
  Flame,
  Volume2,
  Truck,
  Building2,
} from "lucide-react";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

/* ──────────────────────────────────────────────────────────────
   Data - Comparison Items
   ────────────────────────────────────────────────────────────── */

interface ComparisonItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  aacValue: string;
  clayValue: string;
  aacRating: number;
  clayRating: number;
}

const comparisonItems: ComparisonItem[] = [
  {
    id: "weight",
    icon: <Truck className="w-5 h-5" />,
    label: "Weight",
    aacValue: "Very Lightweight",
    clayValue: "Heavy",
    aacRating: 5,
    clayRating: 2,
  },
  {
    id: "compressive",
    icon: <Shield className="w-5 h-5" />,
    label: "Compressive Strength",
    aacValue: "Excellent",
    clayValue: "Good",
    aacRating: 5,
    clayRating: 3,
  },
  {
    id: "thermal",
    icon: <Zap className="w-5 h-5" />,
    label: "Thermal Insulation",
    aacValue: "Excellent",
    clayValue: "Low",
    aacRating: 5,
    clayRating: 2,
  },
  {
    id: "sound",
    icon: <Volume2 className="w-5 h-5" />,
    label: "Sound Insulation",
    aacValue: "Excellent",
    clayValue: "Moderate",
    aacRating: 5,
    clayRating: 3,
  },
  {
    id: "fire",
    icon: <Flame className="w-5 h-5" />,
    label: "Fire Resistance",
    aacValue: "Up to 4 Hours",
    clayValue: "Lower Performance",
    aacRating: 5,
    clayRating: 2,
  },
  {
    id: "speed",
    icon: <Timer className="w-5 h-5" />,
    label: "Construction Speed",
    aacValue: "Faster Installation",
    clayValue: "Slower",
    aacRating: 5,
    clayRating: 2,
  },
  {
    id: "mortar",
    icon: <Ruler className="w-5 h-5" />,
    label: "Mortar Consumption",
    aacValue: "Less Mortar",
    clayValue: "More Mortar",
    aacRating: 5,
    clayRating: 2,
  },
  {
    id: "eco",
    icon: <Leaf className="w-5 h-5" />,
    label: "Eco Friendly",
    aacValue: "Sustainable Manufacturing",
    clayValue: "Consumes Top Soil",
    aacRating: 5,
    clayRating: 1,
  },
  {
    id: "accuracy",
    icon: <Ruler className="w-5 h-5" />,
    label: "Dimensional Accuracy",
    aacValue: "Factory Precision",
    clayValue: "Variable Sizes",
    aacRating: 5,
    clayRating: 2,
  },
  {
    id: "cost",
    icon: <DollarSign className="w-5 h-5" />,
    label: "Project Cost",
    aacValue: "Lower Overall Cost",
    clayValue: "Higher Labour Cost",
    aacRating: 5,
    clayRating: 2,
  },
];

/* ──────────────────────────────────────────────────────────────
   Stars Rating Component
   ────────────────────────────────────────────────────────────── */

function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= rating
              ? `fill-current ${color}`
              : "fill-gray-300 text-gray-300 dark:fill-gray-700 dark:text-gray-700"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Count Up Hook
   ────────────────────────────────────────────────────────────── */

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, start]);

  return count;
}

/* ──────────────────────────────────────────────────────────────
   Stat Card Component
   ────────────────────────────────────────────────────────────── */

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative h-full rounded-3xl overflow-hidden bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)] dark:group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)] group-hover:border-emerald-300/40 dark:group-hover:border-emerald-500/20">
        {/* Glass reflection */}
        <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl bg-gradient-to-b from-white/20 via-transparent to-transparent dark:from-white/[0.03]" />

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-emerald-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

        <div className="relative z-20 p-8 text-center">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 bg-clip-text text-transparent mb-3">
            {count}
            {suffix}
          </div>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Mobile Accordion Item
   ────────────────────────────────────────────────────────────── */

function MobileComparisonItem({ item }: { item: ComparisonItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200/60 dark:border-white/[0.06] last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors duration-300"
        aria-expanded={isExpanded}
        aria-label={`${item.label} comparison details`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
            {item.icon}
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">{item.label}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 pb-4 space-y-3"
        >
          {/* AAC Blocks */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/30">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">AAC Blocks</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.aacValue}</p>
              <StarRating rating={item.aacRating} color="text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>

          {/* Clay Bricks */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-700/30">
            <XCircle className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Clay Bricks</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.clayValue}</p>
              <StarRating rating={item.clayRating} color="text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Main Section Component
   ────────────────────────────────────────────────────────────── */

export default function WhyAACComparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-aac"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/10 to-white dark:from-black dark:via-emerald-950/5 dark:to-black transition-colors duration-500"
    >
      {/* Background effects */}
      <div className="noise-bg absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* Emerald radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 30%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/40 dark:bg-emerald-400/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particle-float ${12 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ─── Main Content ─── */}
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 py-[120px] sm:py-[140px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ================================================================
              SECTION HEADER
              ================================================================ */}
          <div className="text-center max-w-[720px] mx-auto mb-16 lg:mb-20">
            {/* Premium Glass Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Why AAC Blocks?
              </span>
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-[1.12] tracking-[-0.025em] text-gray-900 dark:text-white sm:text-[42px] md:text-[48px] lg:text-[52px]"
            >
              The Smarter Choice for{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Modern Construction
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-[1.85] tracking-[0.01em]"
            >
              Engineers, architects, builders and homeowners are rapidly choosing AAC Blocks over traditional clay bricks.
              With superior insulation, lighter weight, faster construction and sustainable manufacturing,
              AAC Blocks deliver unmatched performance while reducing overall project costs and environmental impact.
            </motion.p>
          </div>

          {/* ================================================================
              MAIN SHOWCASE - Floating Cards (Desktop)
              ================================================================ */}
          <div className="hidden md:block mb-16 lg:mb-20">
            <div className="relative grid grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* AAC Blocks Card */}
              <motion.div
                variants={slideInLeft}
                className="animate-float-panel"
                style={{ animationDelay: "0s" }}
              >
                <div className="relative h-full rounded-[28px] overflow-hidden bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]">
                  {/* Glass reflection */}
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] bg-gradient-to-b from-white/20 via-transparent to-transparent dark:from-white/[0.03]" />

                  {/* Corner glow */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400/80 blur-[2px] opacity-40 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none" />

                  <div className="relative z-20 p-8 md:p-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-3">
                      Klavetek AAC Blocks
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      Engineered for excellence
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* VS Circle */}
              <motion.div
                variants={fadeIn}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-[0_8px_32px_rgba(16,185,129,0.4)] dark:shadow-[0_8px_32px_rgba(16,185,129,0.3)] animate-pulse">
                    <span className="text-2xl md:text-3xl font-bold text-white">VS</span>
                  </div>
                  {/* Orbiting ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 dark:border-emerald-500/20 animate-spin" style={{ animationDuration: "20s" }} />
                </div>
              </motion.div>

              {/* Clay Bricks Card */}
              <motion.div
                variants={slideInRight}
                className="animate-float-panel"
                style={{ animationDelay: "1s" }}
              >
                <div className="relative h-full rounded-[28px] overflow-hidden bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/50 dark:border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  {/* Glass reflection */}
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] bg-gradient-to-b from-white/20 via-transparent to-transparent dark:from-white/[0.03]" />

                  <div className="relative z-20 p-8 md:p-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-3">
                      Traditional Clay Bricks
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      The conventional choice
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================================================================
              COMPARISON ROWS (Desktop)
              ================================================================ */}
          <div className="hidden md:block mb-16 lg:mb-20">
            <div className="max-w-5xl mx-auto space-y-1">
              {comparisonItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  whileHover={{ scale: 1.01 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200/60 dark:border-white/[0.06] hover:border-emerald-300/50 dark:hover:border-emerald-700/40 hover:shadow-[0_8px_32px_rgba(16,185,129,0.1)] dark:hover:shadow-[0_8px_32px_rgba(16,185,129,0.05)] transition-all duration-500">
                    {/* Glass reflection */}
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-transparent dark:from-white/[0.02]" />

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

                    <div className="relative z-20 grid grid-cols-[auto_1fr_1fr_1fr] gap-4 items-center p-5 md:p-6">
                      {/* Icon & Label */}
                      <div className="flex items-center gap-3 col-span-4 md:col-span-1 mb-2 md:mb-0">
                        <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                          {item.icon}
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">{item.label}</span>
                      </div>

                      {/* AAC Blocks Column */}
                      <div className="col-span-4 md:col-span-1">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                              AAC Blocks
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white pl-6">
                            {item.aacValue}
                          </p>
                          <div className="pl-6">
                            <StarRating rating={item.aacRating} color="text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </div>
                      </div>

                      {/* VS Divider (Desktop only) */}
                      <div className="hidden md:flex col-span-1 items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                          <span className="text-xs font-bold text-white">VS</span>
                        </div>
                      </div>

                      {/* Clay Bricks Column */}
                      <div className="col-span-4 md:col-span-1">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                              Clay Bricks
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 pl-6">
                            {item.clayValue}
                          </p>
                          <div className="pl-6">
                            <StarRating rating={item.clayRating} color="text-gray-400 dark:text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================================================================
              COMPARISON ROWS (Mobile Accordion)
              ================================================================ */}
          <div className="md:hidden mb-16 lg:mb-20">
            <motion.div variants={fadeIn} className="max-w-2xl mx-auto bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-gray-200/60 dark:border-white/[0.06] overflow-hidden">
              {comparisonItems.map((item, index) => (
                <MobileComparisonItem key={item.id} item={item} />
              ))}
            </motion.div>
          </div>

          {/* ================================================================
              BOTTOM BENEFITS - Statistics Cards
              ================================================================ */}
          <div className="mb-16 lg:mb-20">
            <motion.div
              variants={fadeUp}
              className="text-center max-w-[700px] mx-auto mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real Results That Matter
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                See the measurable impact of choosing AAC Blocks for your construction project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 max-w-6xl mx-auto">
              <StatCard value={50} suffix="%" label="Faster Construction" delay={0} />
              <StatCard value={30} suffix="%" label="Reduced Dead Load" delay={1} />
              <StatCard value={20} suffix="%" label="Lower Energy Consumption" delay={2} />
              <StatCard value={100} suffix="%" label="Eco Friendly" delay={3} />
            </div>
          </div>

          {/* ================================================================
              BOTTOM CTA
              ================================================================ */}
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-[-0.025em]">
              Build Smarter with Klavetek AAC Blocks
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have made the switch to AAC Blocks.
              Experience faster construction, lower costs, and superior quality.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4 font-semibold text-base text-white transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1"
                aria-label="Get free quote for AAC blocks"
              >
                {/* Glossy reflection sweep */}
                <span
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  aria-hidden="true"
                >
                  <span
                    className="absolute inset-0 animate-glossy-sweep"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 70%, transparent 100%)",
                      width: "60%",
                      left: "-20%",
                      top: 0,
                      bottom: 0,
                    }}
                  />
                </span>

                {/* Emerald shimmer background */}
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-size-200 animate-emerald-shimmer" />

                <span className="relative z-10">Get Free Quote</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110"
                />
              </Link>

              <Link
                href="/products"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4 font-semibold text-base text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-lg transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1 hover:border-emerald-300/50 dark:hover:border-emerald-500/30 hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/30"
                aria-label="View AAC block products"
              >
                <span>View Products</span>
                <ArrowRight
                  size={18}
                  className="transition-all duration-300 ease-out group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
