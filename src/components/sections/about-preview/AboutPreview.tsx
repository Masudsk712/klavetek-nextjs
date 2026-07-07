"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf, Cpu, MapPin } from "lucide-react";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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
      delay: 0.4 + i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

const premiumFeatures = [
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    label: "Premium Quality",
  },
  {
    icon: <Leaf className="w-4 h-4" />,
    label: "Eco-Friendly Manufacturing",
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    label: "Modern Production Technology",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Trusted Across India",
  },
];

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="about-preview"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-black dark:via-emerald-950/20 dark:to-black transition-colors duration-500"
    >
      {/* ─── Subtle background noise texture ─── */}
      <div className="noise-bg absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* ─── Soft emerald radial glow ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 30%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ─── Subtle floating particles ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] left-[8%] w-[2px] h-[2px] rounded-full bg-emerald-400/20 animate-particle" />
        <div className="absolute top-[30%] right-[12%] w-[2px] h-[2px] rounded-full bg-emerald-300/15 animate-particle-2" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] left-[20%] w-[2px] h-[2px] rounded-full bg-emerald-400/20 animate-particle-3" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[70%] right-[25%] w-[2px] h-[2px] rounded-full bg-emerald-300/15 animate-particle-2" style={{ animationDelay: "6s" }} />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 py-[140px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid items-center gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-[1fr_0.82fr]"
        >
          {/* ================================================================
              LEFT SIDE — Premium Content (55%)
              ================================================================ */}
          <div className="max-w-[640px]">
            {/* ─── Premium Glass Badge ─── */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                About Klavetek
              </span>
            </motion.div>

            {/* ─── Large Heading ─── */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-[1.12] tracking-[-0.025em] text-gray-900 dark:text-white sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px]"
            >
              <span className="block">Building India's Future with</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Premium AAC Blocks
                </span>
                <span className="text-gray-800 dark:text-gray-200">.</span>
              </span>
            </motion.h2>

            {/* ─── Description Paragraph ─── */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-[1.85] tracking-[0.01em] max-w-[580px]"
            >
              Klavetek is a trusted manufacturer of premium AAC Blocks and eco-friendly construction 
              materials, dedicated to quality, innovation, and sustainability. With state-of-the-art 
              production technology and rigorous quality control, we deliver durable, lightweight, 
              and thermally efficient building solutions across India. Our commitment to reliable 
              delivery and customer satisfaction makes us the preferred partner for modern 
              infrastructure projects — from residential complexes to large-scale commercial 
              developments.
            </motion.p>

            {/* ─── Premium Features as Glass Chips ─── */}
            <motion.div variants={fadeIn} className="mt-10">
              <div className="flex flex-wrap gap-3">
                {premiumFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={staggerItem}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="about-preview-chip group inline-flex items-center gap-2 px-4 py-2.5 rounded-full cursor-default"
                  >
                    <span className="text-emerald-500/80 transition-all duration-300 group-hover:text-emerald-600 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.3)] inline-block">
                      {feature.icon}
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ─── Buttons ─── */}
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
              {/* Primary Button */}
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-base text-white transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1 btn-about-preview-primary"
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
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.10) 70%, transparent 100%)",
                      width: "60%",
                      left: "-20%",
                      top: 0,
                      bottom: 0,
                    }}
                  />
                </span>

                <span className="relative z-10">Learn More About Us</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110"
                />
              </Link>

              {/* Secondary Button */}
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-base text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-white/80 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:shadow-[0_8px_32px_rgba(16,185,129,0.12)]"
              >
                <span className="relative z-10">View Products</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110"
                />
              </Link>
            </motion.div>
          </div>

          {/* ================================================================
              RIGHT SIDE — Premium Floating Glass Image Card (45%)
              ================================================================ */}
          <motion.div variants={fadeUp} className="relative">
            <div className="about-preview-image-card relative rounded-2xl overflow-hidden group">
              {/* Glass border glow */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(5,150,105,0.15), rgba(16,185,129,0.2))",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              />

              {/* Image card inner */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-emerald-900/5">
                {/* Glass top reflection */}
                <div className="glass-reflection absolute inset-0 z-10 pointer-events-none rounded-2xl" />

                {/* Floating animation wrapper */}
                <div className="about-preview-float-wrapper">
                  {/* Light reflection sweep */}
                  <div className="about-preview-light-sweep absolute inset-0 z-20 pointer-events-none" />

                  {/* Image with hover zoom */}
                  <div className="overflow-hidden">
                    <img
                      src="/images/FACTORY.jpg"
                      alt="Klavetek AAC Blocks Factory - Modern Production Facility"
                      className="w-full h-full object-cover about-preview-zoom-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-[5]" />

                {/* Small floating badge: "10+ Years of Excellence" */}
                <div className="about-preview-badge absolute bottom-5 left-5 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-xl border border-white/15 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  10+ Years of Excellence
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none dark:opacity-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,1) 100%)",
        }}
      />
    </section>
  );
}