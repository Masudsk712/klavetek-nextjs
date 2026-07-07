"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  FlaskConical,
  Settings,
  Box,
  ShieldCheck,
  Truck,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  Target,
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
  hidden: { opacity: 0, y: 40 },
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

/* ──────────────────────────────────────────────────────────────
   Manufacturing Steps Data
   ────────────────────────────────────────────────────────────── */

const steps = [
  {
    title: "Raw Material Selection",
    description:
      "High-quality cement, fly ash, lime, gypsum, and aluminium powder are carefully selected from certified suppliers.",
    icon: <PackageCheck className="w-7 h-7" />,
  },
  {
    title: "Precision Mixing",
    description:
      "Computer-controlled batching and mixing ensure a consistent material composition.",
    icon: <Settings className="w-7 h-7" />,
  },
  {
    title: "AAC Block Formation",
    description:
      "The mixture expands naturally inside moulds to create lightweight cellular concrete.",
    icon: <Box className="w-7 h-7" />,
  },
  {
    title: "Autoclave Curing",
    description:
      "Blocks are steam-cured under high pressure for superior strength and durability.",
    icon: <FlaskConical className="w-7 h-7" />,
  },
  {
    title: "Quality Inspection",
    description:
      "Every block undergoes dimensional, strength, and quality inspection before dispatch.",
    icon: <ShieldCheck className="w-7 h-7" />,
  },
  {
    title: "Packaging & Delivery",
    description:
      "Products are safely packed and delivered on time across projects.",
    icon: <Truck className="w-7 h-7" />,
  },
];

/* ──────────────────────────────────────────────────────────────
   Count-Up Animation Hook
   ────────────────────────────────────────────────────────────── */

function useCountUp(end: number, duration: number = 2, inView: boolean = false) {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration });

  useEffect(() => {
    if (!inView) return;
    motionValue.set(end);
  }, [inView, motionValue, end]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCount(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return count;
}

/* ──────────────────────────────────────────────────────────────
   Statistics Counter Component
   ────────────────────────────────────────────────────────────── */

function StatItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix?: boolean;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2.5, inView);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-emerald-500 mb-2">
        {count}
        {suffix && <span className="text-4xl md:text-5xl">+</span>}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Timeline Step Card Component
   ────────────────────────────────────────────────────────────── */

function TimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      variants={fadeUp}
      className="manufacturing-timeline-item relative group"
      style={{ "--step-index": index } as React.CSSProperties}
    >
      {/* Animated connecting line */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 w-px h-[calc(100%-2.5rem)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="w-full h-full bg-gradient-to-b from-emerald-500/20 to-transparent" />
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="manufacturing-card relative h-full rounded-3xl p-8 md:p-10 transition-all duration-700 ease-out group"
      >
        {/* Glow effect on hover */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />

        {/* Border gradient */}
        <div
          className="absolute -inset-[1px] rounded-3xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.4), rgba(5,150,105,0.2), rgba(16,185,129,0.3))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        {/* Glass morphism card */}
        <div className="relative z-30 h-full rounded-3xl overflow-hidden bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)] dark:group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)] group-hover:-translate-y-2">
          {/* Top reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent dark:from-white/[0.05] pointer-events-none z-10" />

          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
            style={{
              background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16,185,129,0.06), transparent 40%)",
            }}
          />

          {/* Content */}
          <div className="relative z-20">
            {/* Icon with glowing background */}
            <div className="mb-6 relative inline-flex">
              <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/20 dark:to-emerald-600/10 border border-emerald-500/20 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                {step.icon}
              </div>
            </div>

            {/* Step number */}
            <div className="text-emerald-500/40 dark:text-emerald-400/40 text-xs font-bold tracking-[0.3em] mb-3 font-mono">
              STEP {(index + 1).toString().padStart(2, "0")}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-[-0.025em]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-base text-gray-600 dark:text-gray-400 leading-[1.8]">
              {step.description}
            </p>

            {/* Arrow on hover */}
            <div className="mt-6 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-out">
              <span>Learn more</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Main Section Component
   ────────────────────────────────────────────────────────────── */

export default function ManufacturingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="manufacturing-process"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/10 to-white dark:from-black dark:via-emerald-950/10 dark:to-black transition-colors duration-500"
    >
      {/* Background noise texture */}
      <div className="noise-bg absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* Soft radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 30%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Floating light reflections */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[8%] w-72 h-72 rounded-full bg-emerald-400/5 dark:bg-emerald-400/[0.03] blur-3xl animate-float" />
        <div className="absolute top-[65%] right-[12%] w-96 h-96 rounded-full bg-emerald-300/5 dark:bg-emerald-300/[0.03] blur-3xl animate-float-delayed" />
      </div>

      {/* ─── Main Content ─── */}
      <Container className="relative z-10 py-[140px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ================================================================
              SECTION HEADER
              ================================================================ */}
          <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
            {/* Premium Glass Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Our Manufacturing Process
              </span>
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-[1.12] tracking-[-0.025em] text-gray-900 dark:text-white sm:text-[42px] md:text-[48px] lg:text-[52px]"
            >
              Precision Manufacturing.
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Superior Performance.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-[1.85] tracking-[0.01em]"
            >
              Every AAC Block is manufactured using advanced technology and strict quality control 
              to ensure consistent strength, durability, and sustainability. Our precision-engineered 
              process combines state-of-the-art automation with rigorous quality standards, delivering 
              products that set new benchmarks in the construction industry.
            </motion.p>
          </div>

          {/* ================================================================
              TIMELINE - Desktop Horizontal, Mobile Vertical
              ================================================================ */}
          <div className="mb-20 lg:mb-28">
            {/* Desktop Horizontal Timeline */}
            <div className="hidden lg:block relative">
              {/* Timeline horizontal line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 mx-auto max-w-7xl">
                <div className="h-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                {/* Animated progress line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 origin-left"
                />
              </div>

              {/* Steps grid */}
              <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                  <motion.div key={index} variants={fadeUp} className="relative">
                    {/* Glowing milestone circle */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-500 z-20 relative">
                          {step.icon}
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    {/* Card (vertical layout on desktop) */}
                    <TimelineStep step={step} index={index} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tablet 2-Column Grid */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                  <TimelineStep key={index} step={step} index={index} />
                ))}
              </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="md:hidden max-w-2xl mx-auto">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/20 via-emerald-500/40 to-emerald-500/20" />

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-10 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border-4 border-white dark:border-black shadow-lg shadow-emerald-500/30 z-10" />

                    {/* Card */}
                    <TimelineStep step={step} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================================
              BOTTOM STATISTICS
              ================================================================ */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-[32px] overflow-hidden bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-10 md:p-14 mb-12 lg:mb-14"
          >
            {/* Glass border glow */}
            <div
              className="absolute -inset-[1px] rounded-[32px] opacity-30 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1), rgba(16,185,129,0.15))",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                padding: "1px",
              }}
            />

            {/* Glass reflection */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[32px] bg-gradient-to-b from-white/30 via-transparent to-transparent dark:from-white/[0.05]" />

            <div className="relative z-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                <StatItem value={10} suffix={true} label="Years Experience" inView={isInView} />
                <StatItem value={500} suffix={true} label="Projects" inView={isInView} />
                <StatItem value={1000} suffix={true} label="Happy Customers" inView={isInView} />
                <StatItem value={100} suffix={true} label="Quality Tested" inView={isInView} />
              </div>
            </div>
          </motion.div>

          {/* ================================================================
              BOTTOM CTA
              ================================================================ */}
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-[-0.025em]">
              Experience Premium Manufacturing.
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover how Klavetek's advanced manufacturing process delivers superior AAC blocks 
              that elevate your construction projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="manufacturing-cta-primary group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4 font-semibold text-base text-white transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1"
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
      </Container>
    </section>
  );
}