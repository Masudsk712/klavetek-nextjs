"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What are AAC Blocks?",
    answer:
      "AAC (Autoclaved Aerated Concrete) Blocks are lightweight, eco-friendly building materials manufactured using cement, fly ash, lime, gypsum and aluminium powder. They provide excellent strength, thermal insulation and faster construction.",
  },
  {
    question: "Why are AAC Blocks better than traditional clay bricks?",
    answer:
      "AAC Blocks are lighter, stronger, more thermally efficient, consume less mortar, reduce structural load and support faster construction compared to traditional clay bricks.",
  },
  {
    question: "What AAC Block sizes are available?",
    answer:
      "Klavetek manufactures multiple standard sizes including:\n\n• 600 × 200 × 100 mm\n• 600 × 200 × 125 mm\n• 600 × 200 × 150 mm\n• 600 × 200 × 200 mm\n• 600 × 200 × 250 mm",
  },
  {
    question: "Are AAC Blocks fire resistant?",
    answer:
      "Yes. AAC Blocks provide excellent fire resistance and can withstand high temperatures for several hours, making them safer than conventional bricks.",
  },
  {
    question: "Do AAC Blocks provide thermal insulation?",
    answer:
      "Yes. AAC Blocks reduce heat transfer significantly, keeping buildings cooler during summer and helping lower energy consumption.",
  },
  {
    question: "Can AAC Blocks reduce construction costs?",
    answer:
      "Yes. Their lightweight nature reduces structural load, saves steel and cement, consumes less mortar and speeds up construction, resulting in lower overall project costs.",
  },
  {
    question: "Do you supply in bulk for commercial projects?",
    answer:
      "Yes. We supply residential, commercial and industrial construction projects with reliable production capacity and timely delivery.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "Simply click the \"Get Free Quote\" button or contact our sales team. We will provide a customised quotation based on your project requirements.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Only one open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Lazy animation triggers
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isInView) {
      // Stagger the animation triggers slightly after section comes into view
      const timers = faqs.map((_, i) =>
        setTimeout(() => {
          setAnimatedItems((prev) => new Set(prev).add(i));
        }, 400 + i * 80)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [isInView]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section
      id="faq"
      background="default"
      spacing="xl"
      className="relative overflow-hidden"
    >
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle emerald radial glow */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, #10B981 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Subtle noise texture */}
      <div className="noise-bg absolute inset-0 -z-10" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-emerald-400/20 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[15%] top-[60%] h-3 w-3 rounded-full bg-emerald-400/15 blur-md"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[40%] top-[75%] h-2 w-2 rounded-full bg-green-400/10 blur-sm"
        />
      </div>

      <Container>
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-[700px] text-center"
        >
          {/* Premium glass badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-5 py-2.5 backdrop-blur-xl dark:bg-emerald-950/50"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent dark:from-emerald-400 dark:to-green-400">
              Frequently Asked Questions
            </span>
          </motion.div>

          {/* Large Heading with emerald gradient highlight */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
            Have Questions?
            <br />
            <span className="premium-gradient-text">We've Got Answers.</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-[700px] text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Everything you need to know before choosing Klavetek AAC Blocks for your
            construction project.
          </p>
        </motion.div>

        {/* MAIN LAYOUT: Left Illustration Card + Right Accordion */}
        <div className="mx-auto mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* LEFT: Premium Illustration Card (40% on desktop) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2} duration={0.8} y={40}>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Main Glass Card */}
                  <GlassCard className="relative overflow-hidden rounded-[24px] p-8 dark:bg-white/[0.03]">
                    {/* Soft emerald glow */}
                    <div className="absolute -inset-4 -z-10 rounded-full bg-emerald-500/10 opacity-60 blur-3xl" />

                    {/* Glass reflection */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5" />

                    {/* Large Question Icon */}
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 shadow-[0_8px_30px_rgba(16,185,129,0.15)] backdrop-blur-xl dark:from-emerald-500/30 dark:to-green-600/30">
                      <svg
                        className="h-12 w-12 text-emerald-600 dark:text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Have Questions?
                    </h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                      We're here to help. Get answers to all your AAC block questions.
                    </p>

                    {/* Small info cards */}
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-50/50 p-4 backdrop-blur-xl dark:bg-emerald-950/20">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 text-emerald-600 dark:text-emerald-400">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          24/7 Technical Support
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-50/50 p-4 backdrop-blur-xl dark:bg-emerald-950/20">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 text-emerald-600 dark:text-emerald-400">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Free Consultation
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-50/50 p-4 backdrop-blur-xl dark:bg-emerald-950/20">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 text-emerald-600 dark:text-emerald-400">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Expert Guidance
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </Reveal>
            </div>

            {/* RIGHT: Premium FAQ Accordion (60% on desktop) */}
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const shouldAnimate = animatedItems.has(index);

                  return (
                    <Reveal key={index} delay={0.1 * index} duration={0.6} y={30}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          shouldAnimate
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <GlassCard
                          className={cn(
                            "rounded-[24px] transition-all duration-500",
                            isOpen
                              ? "border-emerald-500/30 bg-emerald-50/30 shadow-[0_8px_40px_rgba(16,185,129,0.12)] dark:bg-emerald-950/10 dark:shadow-[0_8px_40px_rgba(16,185,129,0.15)]"
                              : "dark:bg-white/[0.02]"
                          )}
                        >
                          {/* Light reflection on open */}
                          {isOpen && (
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 dark:from-white/5" />
                          )}

                          <button
                            onClick={() => toggleAccordion(index)}
                            className="relative z-10 flex w-full items-center justify-between gap-4 p-6 text-left"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                          >
                            <span className="text-lg font-semibold text-slate-900 dark:text-white">
                              {faq.question}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-50/50 backdrop-blur-xl dark:bg-emerald-950/30"
                            >
                              <svg
                                className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </motion.div>
                          </button>

                          {/* Accordion Answer */}
                          <motion.div
                            id={`faq-answer-${index}`}
                            initial={false}
                            animate={{
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{
                              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.3, delay: isOpen ? 0.1 : 0 },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="relative z-10 px-6 pb-6">
                              <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                              <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-slate-700 dark:text-slate-300">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </GlassCard>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SUPPORT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-20 lg:mt-24"
        >
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Animated background glow */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-green-500/20"
              />
            </div>

            {/* Glass overlay */}
            <div className="glass-reflection absolute inset-0" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Still Have Questions?
                </h3>
                <p className="mt-2 text-lg text-slate-300">
                  Need technical guidance for your project?
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-10 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(16,185,129,0.4)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(16,185,129,0.5)]"
                >
                  <span className="relative z-10">Contact Our Team</span>
                  <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-full border-2 border-white/20 px-10 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/5"
                >
                  <span className="relative z-10">Get Free Quote</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}