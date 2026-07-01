"use client";

import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function FeatureCards() {
  const features = [
    {
      icon: "✓",
      title: "ISO Certified",
      description: "Internationally recognized quality management system ensuring consistent product excellence and customer satisfaction."
    },
    {
      icon: "🌱",
      title: "Eco Friendly Manufacturing",
      description: "Sustainable production processes that minimize environmental impact while delivering superior quality AAC blocks."
    },
    {
      icon: "🏭",
      title: "Modern Production Plant",
      description: "State-of-the-art manufacturing facility equipped with latest German technology for precision and efficiency."
    },
    {
      icon: "🚛",
      title: "Pan India Supply",
      description: "Extensive distribution network ensuring timely delivery of premium AAC blocks across India."
    }
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Klavetek
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Premium quality backed by excellence and innovation
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <GlassCard className="p-8 h-full hover:scale-105 transition-transform duration-500">
                <div className="text-5xl mb-6 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}