"use client";

import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

export default function PremiumCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-lime-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <Reveal>
          <GlassCard className="max-w-5xl mx-auto p-12 lg:p-20 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-6">
                Let&rsquo;s Build The Future Together
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Partner with Klavetek for premium AAC blocks and innovative construction solutions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 px-10 py-4 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(16,185,129,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(16,185,129,0.45)] hover:scale-105 hover:-translate-y-0.5"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}