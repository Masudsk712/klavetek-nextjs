"use client";

import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

const values = [
  {
    title: "Innovation",
    description: "Continuously redefining possibilities through advanced manufacturing and smarter design.",
    gradient: "from-emerald-500 to-lime-400",
    shadow: "shadow-emerald-500/25",
  },
  {
    title: "Quality",
    description: "Uncompromising standards in every product we manufacture.",
    gradient: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/25",
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and ethical business practices.",
    gradient: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/25",
  },
  {
    title: "Sustainability",
    description: "Committed to eco-friendly processes and green building solutions.",
    gradient: "from-green-600 to-teal-500",
    shadow: "shadow-green-500/25",
  },
  {
    title: "Customer First",
    description: "Delivering exceptional service and support to every client.",
    gradient: "from-rose-500 to-pink-500",
    shadow: "shadow-rose-500/25",
  },
  {
    title: "Safety",
    description: "Prioritizing workplace safety and responsible manufacturing.",
    gradient: "from-indigo-500 to-purple-500",
    shadow: "shadow-indigo-500/25",
  },
];

const icons = [
  <svg key="innovation" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  <svg key="quality" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  <svg key="integrity" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.634-2.754 9.307m-2.542-6.034A10.963 10.963 0 0112 5.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12c0-1.13.202-2.206.57-3.21m5.603 6.273A9.964 9.964 0 0112 5.25c2.255 0 4.347.79 5.997 2.127m-5.997 2.127A9.965 9.965 0 0012 5.25c2.255 0 4.347.79 5.997 2.127m0 0a10.966 10.966 0 01-5.996 2.987m5.996-2.987A10.966 10.966 0 0112 18.75"/></svg>,
  <svg key="sustainability" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 009-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9.004 9.004 0 009 9zm-1.5-6l-2.5 2.5 1 1L11 14l3-3 1 1z" /></svg>,
  <svg key="customer" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="safety" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/90 via-white to-stone-50 dark:from-[#0b0d10] dark:to-[#131616] py-24 lg:py-32">
      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10 mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Core Values
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.1}>
              <GlassCard className="p-8 h-full group relative overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 text-white shadow-lg ${value.shadow}`}>
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}