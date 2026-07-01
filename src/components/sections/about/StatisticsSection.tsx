"use client";

import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "./AnimatedCounter";

export default function StatisticsSection() {
  const stats = [
    { target: 20, suffix: "+", label: "Years Experience" },
    { target: 500, suffix: "+", label: "Projects" },
    { target: 50, suffix: "+", label: "Cities" },
    { target: 100, suffix: "%", label: "Quality Assurance" },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer trust
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2.5}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}