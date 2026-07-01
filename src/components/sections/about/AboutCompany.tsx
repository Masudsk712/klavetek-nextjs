import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

export default function AboutCompany() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50/80 to-white dark:from-[#0B0C0F] dark:to-[#111] py-24 lg:py-32">
      {/* Decorative green gradient shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-30 dark:opacity-10 bg-[radial-gradient(circle_at_top_left,_#A8D63A_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_bottom_right,_#6BAF2A_0%,_transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Left: Factory Image with glass accent card */}
          <Reveal y={40}>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/images/FACTORY.jpg"
                  alt="Klavetek Manufacturing Plant"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-lime-400/20 to-emerald-600/20 rounded-3xl -z-10 blur-xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-lime-400/20 rounded-2xl -z-10" />
            </div>
          </Reveal>

          {/* Right: Content */}
          <div className="space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary dark:text-emerald-400 dark:bg-emerald-400/10">
                  About Company
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                About Klavetek
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                Klavetek Green Blocks & Tiles Pvt. Ltd. is a leading manufacturer of
                premium AAC blocks and construction solutions committed to sustainable
                building materials and high-performance engineering.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-6 shadow-xl">
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  With decades of expertise in manufacturing and supplying premium AAC
                  blocks across India, we deliver innovative building solutions that
                  prioritize sustainability without compromising on strength and
                  durability.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}