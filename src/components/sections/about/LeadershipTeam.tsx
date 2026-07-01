"use client";

import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    description: "25+ years of experience leading Klavetek with a vision for sustainable construction.",
  },
  {
    name: "Priya Sharma",
    role: "Director",
    description: "Expert in operational excellence and modernizing manufacturing processes.",
  },
  {
    name: "Arun Patel",
    role: "Production Head",
    description: "Ensures every product meets the highest standards of durability and performance.",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Head",
    description: "Drives brand strategy and customer engagement across India.",
  },
  {
    name: "Vikram Singh",
    role: "HR Head",
    description: "Builds world-class teams and nurturing workplace culture.",
  },
  {
    name: "Anita Joshi",
    role: "Quality Head",
    description: "Maintains rigorous quality control standards across all operations.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/90 via-white to-stone-50 dark:from-[#0b0d10] dark:to-[#131616] py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#a5dc3a_0%,_transparent_55%)] opacity-10 dark:opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10 mb-4">
              Our People
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Meet the minds behind Klavetek's success and innovation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <GlassCard className="p-6 h-full group relative overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <div className="flex flex-col items-center text-center">
                  {/* Large circular photo */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 ring-2 ring-primary/20 dark:ring-emerald-400/30 shadow-xl group-hover:shadow-2xl transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.25h15.003c.966 0 1.75-.784 1.75-1.75V18c0-1.657-1.007-3.036-2.39-3.878A3.747 3.747 0 0017.25 13.5c0-.966-.784-1.75-1.75-1.75h-1.5a.75.75 0 010-1.5h1.5c.966 0 1.75.784 1.75 1.75v.028a3.75 3.75 0 011.5-.028V18c0 .966-.784 1.75-1.75 1.75H4.501c-.966 0-1.75-.784-1.75-1.75v-1.5c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 010 1.5h-1.5c-.966 0-1.75-.784-1.75-1.75 0-1.38.94-2.53 2.23-2.87A3.75 3.75 0 0115 9.75a.75.75 0 011.5 0c0 1.38-.94 2.53-2.23 2.87A3.75 3.75 0 014.5 14.25v2.25c0 .414.336.75.75.75z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary dark:text-emerald-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {member.description}
                  </p>

                  {/* LinkedIn placeholder */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 rounded-full px-3 py-1.5 group-hover:border-emerald-400/40 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}