"use client";

import { motion } from "framer-motion";
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">

      {/* ================= VIDEO ================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero1.mp4"
          type="video/mp4"
        />
      </video>

      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/50" />

      {/* ================= MAIN GRADIENT ================= */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#021b10]/90 via-[#03130f]/70 to-[#032415]/80" />

      {/* ================= TOP FADE ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* ================= LEFT GLOW ================= */}

      <div className="absolute -left-56 top-10 h-[650px] w-[650px] rounded-full bg-emerald-500/20 blur-[180px]" />

      {/* ================= RIGHT GLOW ================= */}

      <div className="absolute -right-56 bottom-0 h-[700px] w-[700px] rounded-full bg-lime-400/15 blur-[220px]" />
        <motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.25, 0.45, 0.25],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[180px]"
 />
      {/* ================= CENTER LIGHT ================= */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[220px]" />

      {/* ================= GRID ================= */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= RADIAL LIGHT ================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,.25) 55%, rgba(0,0,0,.8) 100%)",
        }}
      />

      {/* ================= NOISE ================= */}

      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />
    </div>
  );
}