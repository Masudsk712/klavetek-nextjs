import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B0C0F] py-24 lg:py-32">
      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left: Text content */}
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 dark:bg-blue-400/10">
                Our Vision
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Shaping the Future of Sustainable Construction
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted and innovative construction materials company,
                driving the global shift towards eco-friendly, high-performance building
                solutions.
              </p>
            </div>
          </Reveal>

          {/* Right: Premium card */}
          <Reveal delay={0.2}>
            <GlassCard className="p-8 lg:p-10 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full -z-10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Innovation at Every Layer
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We envision a future where every structure stands as a testament to
                  sustainable innovation — where green building materials set the
                  benchmark for quality, efficiency, and environmental responsibility.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}