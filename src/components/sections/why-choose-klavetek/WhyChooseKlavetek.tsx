"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Leaf,
  Factory,
  Building2,
  Truck,
  Users,
  Headphones,
  CheckCircle2,
  ArrowRight,
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
      staggerChildren: 0.08,
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
   Data - Feature Cards
   ────────────────────────────────────────────────────────────── */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Quality",
    description:
      "Manufactured using advanced technology with strict quality control to ensure consistent strength, durability and dimensional accuracy.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Eco-Friendly Manufacturing",
    description:
      "Produced using sustainable processes that reduce environmental impact while supporting green construction practices.",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Advanced Manufacturing Technology",
    description:
      "Modern automated production ensures precision, uniformity and reliable product performance.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "High Strength & Durability",
    description:
      "Engineered for excellent compressive strength, thermal insulation and long-lasting structural performance.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery",
    description:
      "Reliable logistics and timely delivery help keep every construction project on schedule.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Support",
    description:
      "Dedicated technical assistance and responsive customer service from enquiry to project completion.",
  },
];

/* ──────────────────────────────────────────────────────────────
   Feature Card Component
   ────────────────────────────────────────────────────────────── */

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.setProperty("--mouse-x", `${x * 8}deg`);
    cardRef.current.style.setProperty("--mouse-y", `${y * 8}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--mouse-x", "0deg");
    cardRef.current.style.setProperty("--mouse-y", "0deg");
  };

  return (
    <motion.div variants={fadeUp}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="why-choose-card group relative h-full"
        style={{
          transform:
            "perspective(1200px) rotateX(var(--mouse-y, 0deg)) rotateY(var(--mouse-x, 0deg))",
          transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {/* Top-right corner emerald glow accent */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400/80 blur-[2px] opacity-40 group-hover:opacity-100 group-hover:blur-[3px] transition-all duration-500 z-20 pointer-events-none" />

        {/* Glass border glow */}
        <div
          className="absolute -inset-[1px] rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"
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

        {/* ─── Card Inner ─── */}
        <div className="relative h-full rounded-[28px] overflow-hidden bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)] dark:group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)] group-hover:border-emerald-300/40 dark:group-hover:border-emerald-500/20 group-hover:-translate-y-1.5">
          {/* Glass top reflection */}
          <div className="why-choose-glass-reflection absolute inset-0 z-10 pointer-events-none rounded-[28px]" />

          {/* Bottom animated glass reflection */}
          <div className="why-choose-bottom-reflection absolute inset-0 z-10 pointer-events-none rounded-[28px]" />

          {/* Subtle emerald gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-emerald-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

          {/* ─── Content ─── */}
          <div className="relative z-20 p-7 flex flex-col h-full">
            {/* Icon */}
            <div className="mb-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-[-0.02em]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-[1.75] flex-1">
              {feature.description}
            </p>

            {/* Arrow icon */}
            <div className="mt-5 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 ease-out">
              <span className="text-xs">Learn more</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Trust Indicator Component
   ────────────────────────────────────────────────────────────── */

function TrustIndicator({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {text}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Main Section Component
   ────────────────────────────────────────────────────────────── */

export default function WhyChooseKlavetek() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="why-choose-klavetek"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white dark:from-black dark:via-emerald-950/10 dark:to-black transition-colors duration-500"
    >
      {/* Background noise texture */}
      <div className="noise-bg absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* Soft radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.02) 30%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Floating light reflections */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-emerald-400/5 blur-3xl animate-float" />
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-emerald-300/5 blur-3xl animate-float-delayed" />
      </div>

      {/* ─── Main Content ─── */}
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 py-[140px]">
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
              <span className="why-choose-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Why Choose Klavetek
              </span>
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-[1.12] tracking-[-0.025em] text-gray-900 dark:text-white sm:text-[42px] md:text-[48px] lg:text-[52px]"
            >
              Why Builders & Engineers Trust{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Klavetek
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-[1.85] tracking-[0.01em]"
            >
              Klavetek Green Blocks & Tiles Pvt. Ltd. is committed to delivering 
              superior quality construction materials through innovation, sustainable 
              manufacturing practices, and unwavering dedication to customer satisfaction. 
              Every product reflects our passion for excellence, environmental responsibility, 
              and the trust builders place in us.
            </motion.p>
          </div>

          {/* ================================================================
              FEATURE CARDS - 3×2 GRID
              ================================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
              />
            ))}
          </div>

          {/* ================================================================
              BOTTOM TRUST BAR
              ================================================================ */}
          <motion.div
            variants={fadeUp}
            className="why-choose-trust-bar relative rounded-[28px] overflow-hidden bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8 md:p-10 mb-12 lg:mb-14"
          >
            {/* Glass border glow */}
            <div
              className="absolute -inset-[1px] rounded-[28px] opacity-30 pointer-events-none z-20"
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
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] bg-gradient-to-b from-white/20 via-transparent to-transparent dark:from-white/[0.03]" />

            <div className="relative z-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <TrustIndicator text="Premium Quality" />
                <TrustIndicator text="Eco-Friendly Production" />
                <TrustIndicator text="Fast Delivery" />
                <TrustIndicator text="Customer Satisfaction" />
              </div>
            </div>
          </motion.div>

          {/* ================================================================
              BOTTOM CTA
              ================================================================ */}
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-[-0.025em]">
              Ready to Build with Confidence?
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with Klavetek for premium quality AAC blocks and tiles. 
              Get started with a free consultation today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="why-choose-cta-primary group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4 font-semibold text-base text-white transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1"
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
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4 font-semibold text-base text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-lg transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1 hover:border-emerald-300/50 dark:hover:border-emerald-500/30 hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/30"
              >
                <span>Contact Us</span>
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