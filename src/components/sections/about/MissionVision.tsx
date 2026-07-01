"use client";

import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/90 via-white to-stone-50 dark:from-[#0b0d10] dark:to-[#131616] py-24 lg:py-32">
      {/* Soft decorative glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10 mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Mission & Vision
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
          {/* Mission Card */}
          <Reveal delay={0.1}>
            <GlassCard className="p-8 lg:p-10 h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-lime-400/5 rounded-full -z-10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-400 flex items-center justify-center mb-7 shadow-lg shadow-emerald-500/25">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To deliver high-performance, sustainable construction materials through precision manufacturing, German-inspired engineering, and responsible stewardship of resources.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          {/* Vision Card */}
          <Reveal delay={0.2}>
            <GlassCard className="p-8 lg:p-10 h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 rounded-full -z-10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-7 shadow-lg shadow-blue-500/25">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Vision
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To become India’s most trusted partner in sustainable construction by setting new benchmarks in quality, innovation, and environmental responsibility.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}