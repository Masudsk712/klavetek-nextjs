"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

/* ──────────────────────────────────────────────────────────────
   PREMIUM CONVERSION CTA SECTION
   ────────────────────────────────────────────────────────────── */

export default function PremiumCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch((err: DOMException) => {
          console.warn("[PremiumCTA] Video play failed:", err.message);
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = "auto";
          video.load();
          setTimeout(playVideo, 600);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);

    if (video.readyState >= 3) {
      observer.disconnect();
      playVideo();
    }

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black min-h-[85vh]"
      style={{
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      {/* ─── Background Video Layer ─── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: "scale(1.1)",
            animation: "ken-burns-premium 20s ease-in-out infinite alternate",
            willChange: "transform",
          }}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Video loading placeholder */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-emerald-900" />
        )}
      </div>

      {/* ─── Noise Texture Overlay ─── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
        aria-hidden="true"
      />

      {/* ─── Dark Emerald Overlay ─── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(6,78,59,0.75) 30%, rgba(6,78,59,0.8) 70%, rgba(0,0,0,0.85) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* ─── Soft Vignette ─── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 85% 75% at 50% 50%, transparent 25%, rgba(0,0,0,0.55) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* ─── Animated Light Sweep ─── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 animate-light-sweep"
          style={{
            background:
              "linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.08) 45%, rgba(16,185,129,0.06) 50%, rgba(255,255,255,0.08) 55%, transparent 70%)",
            filter: "blur(60px)",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
          }}
        />
      </div>

      {/* ─── Floating Glass Reflections ─── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-[15%] left-[12%] w-96 h-96 rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "reflection-drift 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[60%] right-[8%] w-[28rem] h-[28rem] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, rgba(52,211,153,0.4) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "reflection-drift 20s ease-in-out infinite 4s",
          }}
        />
        <div
          className="absolute top-[40%] left-[60%] w-72 h-72 rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
            filter: "blur(90px)",
            animation: "reflection-drift 18s ease-in-out infinite 8s",
          }}
        />
      </div>

      {/* ─── Animated Light Rays ─── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none animate-light-ray"
        style={{
          background: `linear-gradient(45deg, transparent 0%, rgba(16,185,129,0.04) 30%, transparent 60%)`,
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ─── Floating Particles ─── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-emerald-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${
                10 + Math.random() * 15
              }s ease-in-out infinite ${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* ─── Emerald Glow Behind Content ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 30%, transparent 65%)",
          filter: "blur(100px)",
          animation: "breathing-glow 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* ─── Bottom Fade to Footer ─── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[4] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-[900px] mx-auto text-center"
        >
          {/* Glass Badge */}
          <motion.div variants={fadeUp} className="mb-10">
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-100 bg-white/8 backdrop-blur-xl border border-emerald-300/20 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Ready to Build Smarter?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-[-0.03em] mb-8"
          >
            Let's Build the
            <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              Future Together
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg lg:text-xl text-emerald-50/90 leading-[1.85] tracking-[0.01em] mb-12"
          >
            Build stronger, faster and more sustainably with Klavetek AAC Blocks.
            Whether your project is residential, commercial or industrial, our team
            is ready to deliver premium construction materials with unmatched quality
            and reliability.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={scaleUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            {/* Primary CTA Button */}
            <Link
              href="/contact"
              className="premium-cta-primary group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-5 text-lg font-semibold text-white transition-all duration-500 ease-out hover:scale-[1.05] hover:-translate-y-1"
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
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)",
                    width: "60%",
                    left: "-20%",
                    top: 0,
                    bottom: 0,
                  }}
                />
              </span>

              {/* Emerald shimmer background */}
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-size-200 animate-emerald-shimmer" />

              {/* Glass layer */}
              <span className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent" />

              <span className="relative z-10">Get Free Quote</span>
              <ArrowRight
                size={20}
                className="relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110"
              />
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-5 text-lg font-semibold text-white bg-white/10 dark:bg-white/[0.08] backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl transition-all duration-500 ease-out hover:scale-[1.05] hover:-translate-y-1 hover:bg-white/15 dark:hover:bg-white/[0.12] hover:border-emerald-300/40 dark:hover:border-emerald-500/30"
            >
              <Phone size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span>Call Our Team</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            {[
              "Premium Quality",
              "Eco-Friendly",
              "Fast Delivery",
              "Expert Support",
            ].map((text, index) => (
              <motion.div
                key={text}
                variants={fadeUp}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2.5 glass-chip px-5 py-2.5 rounded-full"
              >
                <svg
                  className="w-5 h-5 text-emerald-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-emerald-50/90">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}