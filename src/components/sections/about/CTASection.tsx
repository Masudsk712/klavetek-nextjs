import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <Reveal>
          <GlassCard className="max-w-4xl mx-auto p-12 lg:p-16 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                Ready to Build with Klavetek?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Transform your construction projects with our premium AAC blocks and tiles. Get in touch for a free consultation and quote.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 px-10 py-4 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(16,185,129,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(16,185,129,0.45)] hover:scale-[1.03] hover:-translate-y-0.5"
              >
                Get Free Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}