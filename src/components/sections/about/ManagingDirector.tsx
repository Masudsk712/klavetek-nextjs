"use client";

import Reveal from "@/components/animations/Reveal";

export default function ManagingDirector() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/90 via-white to-stone-50 dark:from-[#0b0d10] dark:to-[#131616] py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[320px_1fr] items-center max-w-6xl mx-auto">
          {/* MD Photo */}
          <Reveal>
            <div className="relative mx-auto lg:mx-0">
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden shadow-2xl ring-2 ring-primary/20 dark:ring-emerald-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-slate-400/50 dark:bg-slate-600/50 mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-12 h-12 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.25h15.003c.966 0 1.75-.784 1.75-1.75V18c0-1.657-1.007-3.036-2.39-3.878A3.747 3.747 0 0017.25 13.5c0-.966-.784-1.75-1.75-1.75h-1.5a.75.75 0 010-1.5h1.5c.966 0 1.75.784 1.75 1.75v.028a3.75 3.75 0 011.5-.028V18c0 .966-.784 1.75-1.75 1.75H4.501c-.966 0-1.75-.784-1.75-1.75v-1.5c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 010 1.5h-1.5c-.966 0-1.75-.784-1.75-1.75 0-1.38.94-2.53 2.23-2.87A3.75 3.75 0 0115 9.75a.75.75 0 011.5 0c0 1.38-.94 2.53-2.23 2.87A3.75 3.75 0 014.5 14.25v2.25c0 .414.336.75.75.75z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Professional Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/25 to-accent/20 rounded-[2rem] blur-2xl" />
            </div>
          </Reveal>

          {/* Message Content */}
          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="relative">
                <svg className="absolute -top-4 -left-4 w-16 h-16 text-primary/15 dark:text-emerald-400/15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4.995v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4.995v10h-9.983z" />
                </svg>
                <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic pl-8">
                  At Klavetek, we believe that quality construction materials are the foundation of a stronger, greener future. Our commitment to innovation and sustainability drives every decision we make.
                </blockquote>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Rajesh Kumar
                </h3>
                <p className="text-sm font-semibold text-primary dark:text-emerald-400">
                  Managing Director
                </p>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  With over 25 years of experience in the construction industry, Rajesh Kumar leads Klavetek with a vision to revolutionize sustainable building materials in India. Under his guidance, the company has grown from a small unit to a leading manufacturer serving customers across 50+ cities.
                </p>
              </div>

              <div className="pt-4">
                <div className="inline-block px-8 py-4 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl">
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic font-serif">
                    Signature
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}