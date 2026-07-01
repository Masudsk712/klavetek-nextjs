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

export default function CompanyTimeline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/80 to-white dark:from-[#0B0C0F] dark:to-[#111] py-24 lg:py-32">
      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10 mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Company Timeline
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 dark:from-emerald-400/20 dark:via-emerald-400/40 dark:to-emerald-400/20 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 0.1}>
                <div className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block p-6 rounded-2xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50 dark:shadow-emerald-400/50 ring-4 ring-white dark:ring-[#0B0C0F] z-10" />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}