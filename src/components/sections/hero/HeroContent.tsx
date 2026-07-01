"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import HeroCTA from "./HeroCTA";

export default function HeroContent() {
  return (
    <Container className="relative z-20 flex min-h-[85vh] items-center py-24">
      <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1fr_320px]">
        {/* LEFT CONTENT */}
        <div>
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              <span className="h-px w-8 bg-emerald-400" />
              STRONGER • SMARTER • GREENER
            </span>
          </motion.div>

          {/* Large Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-green-400 via-lime-300 to-emerald-200 bg-clip-text text-transparent">
              Stronger Walls
            </span>
            <br />
            For A
            <br />
            <span className="bg-gradient-to-r from-green-400 via-lime-300 to-emerald-200 bg-clip-text text-transparent">
              Greener Tomorrow
            </span>
          </motion.h1>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Premium AAC Blocks & Tiles.
            <br />
            <span className="text-white/90 font-medium">Stronger • Lighter • Sustainable</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HeroCTA />
          </motion.div>
        </div>

        {/* RIGHT PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="w-[320px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
            {/* Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white/90">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white/90">Eco Friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white/90">Pan India Supply</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-6" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <span className="block text-xl font-bold text-emerald-400">20+</span>
                <span className="block text-xs text-slate-400 mt-1">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-bold text-emerald-400">500+</span>
                <span className="block text-xs text-slate-400 mt-1">Projects Delivered</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-bold text-emerald-400">50+</span>
                <span className="block text-xs text-slate-400 mt-1">Cities Served</span>
              </div>
            </div>

            {/* CTA Link */}
            <a
              href="#products"
              className="group flex items-center justify-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <span>View Products</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}