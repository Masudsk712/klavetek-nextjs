"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useCallback, useRef } from "react";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

const stats = [
  { end: 10, suffix: "+ Years", label: "Experience" },
  { end: 500, suffix: "+ Projects", label: "Delivered" },
  { end: 1000, suffix: "+ Clients", label: "Happy Clients" },
  { end: 247, suffix: "/7", label: "Support", prefix: "" },
];

/* ──────────────────────────────────────────────────────────────
   Stat Item with Count-Up (triggers once on visibility)
   ────────────────────────────────────────────────────────────── */

function StatItem({
  end,
  suffix,
  prefix = "",
  label,
  delay = 0,
}: {
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
  delay: number;
}) {
  const { display, ref } = useCountUp({
    end,
    suffix,
    prefix,
    duration: 2.5,
    startOnMount: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="group/card cursor-default"
    >
      <div className="flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-300 group-hover/card:bg-white/[0.04]">
        <div className="flex-1 min-w-0">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
            {display}
          </p>
          <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-medium mt-0.5">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Main Component
   ────────────────────────────────────────────────────────────── */

export default function HeroStatsPanel() {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    tiltRef.current = { x: x * 3, y: y * -3 };

    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      if (card) {
        card.style.setProperty("--tilt-x", `${tiltRef.current.x}deg`);
        card.style.setProperty("--tilt-y", `${tiltRef.current.y}deg`);
      }
      rafRef.current = null;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--tilt-x", `0deg`);
    card.style.setProperty("--tilt-y", `0deg`);
  }, []);

  return (
    <div className="hidden lg:flex justify-end">
      <div className="group relative w-full max-w-[380px]">
        {/* Floating container */}
        <div className="relative animate-float-panel">
          {/* Main Glass Card with layered glass effect */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-3xl border border-white/15 dark:border-white/10 bg-white/[0.06] dark:bg-white/[0.05] backdrop-blur-2xl p-7 sm:p-8 shadow-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.015] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.15)] layered-glass"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(0,0,0,0.7)",
              transform:
                "perspective(1000px) rotateX(var(--tilt-y, 0deg)) rotateY(var(--tilt-x, 0deg))",
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Glass reflection overlay - animated drift */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent" />
              {/* Moving light reflection - enhanced with slower, more premium drift */}
              <motion.div
                className="absolute -inset-4 opacity-30 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 45%, transparent 60%)",
                  filter: "blur(40px)",
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Green accent strip */}
            <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-600 rounded-full" />

            <div className="pt-3 relative z-10">
              {/* Panel Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-300">
                  By the Numbers
                </h3>
                <p className="text-[11px] text-white/40 mt-1 font-medium">
                  KLAVETEK — Trusted Since 2012
                </p>
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent mb-4" />

              {/* Stats */}
              <div className="space-y-1">
                {stats.map((stat, i) => (
                  <StatItem
                    key={i}
                    end={stat.end}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    label={stat.label}
                    delay={0.4 + i * 0.15}
                  />
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent mt-4 mb-5" />

              {/* Bottom CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="group/link flex items-center justify-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-all duration-300 ease-out"
              >
                <span>Get Free Consultation</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 ease-out group-hover/link:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </div>

            {/* Subtle green glow on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-green" />
          </div>
        </div>

        {/* Soft bottom shadow for floating depth */}
        <div className="absolute -bottom-5 left-8 right-8 h-10 bg-gradient-to-t from-black/30 to-transparent blur-2xl -z-10" />
      </div>
    </div>
  );
}