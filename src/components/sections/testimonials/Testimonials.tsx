"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";

const testimonials = [
  {
    quote:
      "Klavetek's AAC blocks have transformed our construction process. The quality is consistently excellent and delivery is always on time. Their products have helped us reduce construction time by 30% while maintaining superior structural integrity.",
    author: "Rajesh Kumar",
    role: "Project Director",
    company: "Sharma Builders",
    rating: 5,
  },
  {
    quote:
      "We switched to Klavetek blocks for our residential projects and have seen remarkable improvements. The technical support and product knowledge from the Klavetek team is outstanding. They're more than suppliers - they're true partners.",
    author: "Priya Sharma",
    role: "Chief Architect",
    company: "Urban Spaces",
    rating: 5,
  },
  {
    quote:
      "Klavetek's commitment to eco-friendly solutions aligns perfectly with our sustainable building goals. The product quality is unmatched, and their on-time delivery has streamlined our entire supply chain. Highly recommended for any serious project.",
    author: "Amit Patel",
    role: "CEO",
    company: "Patel Infrastructure",
    rating: 5,
  },
];

const trustBadges = [
  { icon: "✓", label: "Premium Quality", description: "IS certified products" },
  { icon: "✓", label: "On-Time Delivery", description: "Pan-India logistics" },
  { icon: "✓", label: "Eco-Friendly Products", description: "Sustainable materials" },
  { icon: "✓", label: "Technical Support", description: "24/7 expert assistance" },
];

const clientLogos = [
  { name: "Sharma Builders", placeholder: "SB" },
  { name: "Urban Spaces", placeholder: "US" },
  { name: "Patel Infrastructure", placeholder: "PI" },
  { name: "Vision Construction", placeholder: "VC" },
  { name: "Elite Developers", placeholder: "ED" },
  { name: "Prime Estates", placeholder: "PE" },
  { name: "Nation Builders", placeholder: "NB" },
  { name: "Green Homes", placeholder: "GH" },
  { name: "Skyline Projects", placeholder: "SP" },
  { name: "Core Infrastructure", placeholder: "CI" },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <Section
      id="testimonials"
      background="default"
      spacing="xl"
      className="relative overflow-hidden"
    >
      {/* Background soft emerald radial glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: "radial-gradient(circle at 50% 50%, #10B981 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Subtle noise texture */}
      <div className="noise-bg absolute inset-0 -z-10" />

      <Container>
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Premium glass badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-5 py-2.5 backdrop-blur-xl dark:bg-emerald-950/50"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent dark:from-emerald-400 dark:to-green-400">
              Client Testimonials
            </span>
          </motion.div>

          {/* Large heading with emerald gradient */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
            Trusted by{" "}
            <span className="premium-gradient-text">
              Builders, Engineers & Developers
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            At Klavetek, we are committed to delivering exceptional quality products,
            ensuring timely delivery, and providing unparalleled customer satisfaction.
            Our clients trust us to be their partners in building India's future
            with sustainable, innovative AAC solutions that stand the test of time.
          </p>
        </motion.div>

        {/* TRUST BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-16 mb-20 max-w-5xl"
        >
          <div className="glass relative rounded-3xl p-8 dark:bg-white/[0.03]">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-chip group relative rounded-2xl p-5 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 text-emerald-600 dark:from-emerald-500/30 dark:to-green-500/30 dark:text-emerald-400">
                      <span className="text-xl font-bold">{badge.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        {badge.label}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TESTIMONIALS GRID */}
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={index}
              delay={0.2 * index}
              duration={0.7}
              y={50}
              scale={0.95}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative h-full"
              >
                <GlassCard className="h-full overflow-hidden">
                  {/* Large quotation mark */}
                  <div className="absolute -top-4 -left-3 text-[120px] font-serif leading-none text-emerald-500/10 transition-all duration-500 group-hover:text-emerald-500/20 dark:text-emerald-400/10 dark:group-hover:text-emerald-400/20">
                    &ldquo;
                  </div>

                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5" />

                  {/* 5-star rating */}
                  <div className="relative mb-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + i * 0.1 }}
                        className="h-5 w-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="ml-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                    >
                      {testimonial.rating}.0
                    </motion.div>
                  </div>

                  {/* Testimonial quote */}
                  <blockquote className="relative mb-6 flex-1 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    <span className="mb-4 block text-2xl text-emerald-600/30">&ldquo;</span>
                    <p className="relative z-10">{testimonial.quote}</p>
                  </blockquote>

                  {/* Client info */}
                  <div className="relative mt-auto flex items-center gap-4 rounded-2xl border-t border-slate-200/60 p-4 dark:border-slate-700/50">
                    {/* Client avatar placeholder */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-lg font-bold text-white shadow-lg">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CLIENT LOGOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-24 max-w-7xl"
        >
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Trusted Partners
            </h3>
            <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative flex items-center justify-center"
              >
                <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm transition-all duration-400 hover:border-emerald-500/30 hover:bg-white hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] dark:border-slate-700 dark:bg-slate-800/30 dark:hover:border-emerald-500/40 dark:hover:bg-slate-800/60 dark:hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 text-sm font-bold text-white opacity-50 transition-all duration-400 group-hover:from-emerald-600 group-hover:to-green-600 group-hover:opacity-100 group-hover:shadow-lg dark:from-slate-500 dark:to-slate-700">
                      {logo.placeholder}
                    </div>
                    <span className="text-center text-xs font-medium text-slate-600 opacity-60 transition-opacity duration-400 group-hover:opacity-100 dark:text-slate-300">
                      {logo.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-24 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Animated background glow */}
            <div className="absolute inset-0 -z-10">
              <div className="animate-breathing-glow absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-green-500/20" />
            </div>

            {/* Glass overlay effect */}
            <div className="glass-reflection absolute inset-0" />

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Let's Build Your Next Project{" "}
                <span className="premium-gradient-text">Together</span>
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                Partner with Klavetek for premium AAC solutions that deliver
                exceptional quality, sustainability, and value to your construction projects.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-10 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(16,185,129,0.4)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(16,185,129,0.5)]"
                >
                  <span className="relative z-10">Request a Quote</span>
                  <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-full border-2 border-white/20 px-10 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/5"
                >
                  <span className="relative z-10">Contact Us</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}