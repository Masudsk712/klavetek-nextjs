"use client";

import { useRef, useState, useEffect } from "react";
import Reveal from "@/components/animations/Reveal";

const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Klavetek was founded with a vision to revolutionize construction materials in India.",
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Expanded manufacturing capacity and introduced premium AAC blocks to the market.",
  },
  {
    year: "2020",
    title: "Innovation",
    description: "Launched eco-friendly product lines and achieved national presence across 50+ cities.",
  },
  {
    year: "2026",
    title: "Future",
    description: "Continuing to lead the industry with sustainable solutions and technological advancement.",
  },
];

export default function PremiumTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/90 via-white to-stone-50 dark:from-[#0b0d10] dark:to-[#131616] py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,_#a5dc3a_0%,_transparent_55%)] opacity-15 dark:opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10 mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Company Timeline
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="shrink-0 w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-105 transition-all"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex-1 overflow-x-auto scroll-smooth snap-x snap-mandatory scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex gap-6 min-w-max px-2">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="snap-center w-[280px] shrink-0 group"
                  >
                    <div className="relative h-full rounded-[1.5rem] border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                    {/* Connector arrow */}
                    {index < milestones.length - 1 && (
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="shrink-0 w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-105 transition-all"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}