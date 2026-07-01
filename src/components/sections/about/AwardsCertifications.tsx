"use client";

import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

const awards = [
  {
    label: "ISO 9001",
    description: "Quality Management Systems",
  },
  {
    label: "BIS Certified",
    description: "Bureau of Indian Standards",
  },
  {
    label: "IGBC Member",
    description: "Indian Green Building Council",
  },
  {
    label: "Green Manufacturing",
    description: "Eco-friendly production certified",
  },
  {
    label: "Best Manufacturer",
    description: "Industry excellence recognition",
  },
  {
    label: "Quality Award",
    description: "National quality achievement",
  },
];

const iconSvg = (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function AwardsCertifications() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/90 via-white to-stone-50 dark:from-[#0b0d10] dark:to-[#131616] py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,_#a5dc3a_0%,_transparent_55%)] opacity-15 dark:opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10 mb-4">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Awards & Certifications
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Trusted by industry bodies and certified for quality.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <Reveal key={award.label} delay={index * 0.08}>
              <GlassCard className="p-6 h-full group relative overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/25 shrink-0">
                    {iconSvg}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                      {award.label}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(107,175,42,0.08),transparent_60%)]" />
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}