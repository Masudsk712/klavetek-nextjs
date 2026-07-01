"use client";

import Reveal from "@/components/animations/Reveal";

export default function ManufacturingTimeline() {
  const steps = [
    { title: "Raw Material", description: "Premium quality raw materials sourced from trusted suppliers" },
    { title: "Production", description: "State-of-the-art manufacturing with German technology" },
    { title: "Quality Check", description: "Rigorous testing at every stage for superior standards" },
    { title: "Delivery", description: "Nationwide logistics network for timely delivery" },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From raw materials to your doorstep, quality at every step
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector line (hidden on mobile, shown on md+) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-primary/20 -z-10" />
                  )}
                  
                  <div className="flex flex-col items-center text-center">
                    {/* Circle with number */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (mobile only) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-4 mb-2">
                      <svg 
                        className="w-6 h-6 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}