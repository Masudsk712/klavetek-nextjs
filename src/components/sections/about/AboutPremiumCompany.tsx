"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const highlights = [
  {
    label: "ISO Certified",
    description: "Quality assured manufacturing",
  },
  {
    label: "German Technology",
    description: "Advanced production systems",
  },
  {
    label: "Pan India",
    description: "50+ cities served",
  },
  {
    label: "Sustainable",
    description: "Eco-friendly processes",
  },
];

export default function AboutPremiumCompany() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/90 via-white to-stone-50 dark:from-[#0b0d10] dark:to-[#131616] py-24 lg:py-32">
      {/* Decorative radial glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_top_left,_#a5dc3a_0%,_transparent_55%)] opacity-20 dark:opacity-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,_#7abf32_0%,_transparent_55%)] opacity-15 dark:opacity-8" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Left: Factory Image */}
          <Reveal y={50}>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/images/FACTORY.jpg"
                  alt="Klavetek Manufacturing Plant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                />
              </div>
              {/* Glass accent shapes */}
              <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-gradient-to-br from-lime-400/25 to-emerald-600/20 rounded-[2rem] -z-10 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-lime-400/15 rounded-[1.5rem] -z-10" />
            </div>
          </Reveal>

          {/* Right: Content */}
          <div className="space-y-8">
            <Reveal>
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10">
                About Company
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                About Klavetek
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Klavetek Green Blocks & Tiles Pvt. Ltd. is a leading manufacturer of premium AAC blocks and construction solutions committed to sustainable building materials and high-performance engineering.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-primary dark:text-emerald-400 mb-1">
                      {item.label}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}