"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Mouse } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Leaf,
} from "lucide-react";

export default function HeroContent() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Container className="relative z-20 flex min-h-[95vh] items-center py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 backdrop-blur-md">
              <Leaf size={18} className="text-emerald-400" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Welcome to Klavetek Green Blocks & Tiles Pvt. Ltd.
              </span>
            </div>
            <Heading level="h1" className="mb-8 text-white">
              Building
              <span className="block bg-gradient-to-r from-green-400 via-lime-300 to-white bg-clip-text text-transparent">Stronger Walls</span>
              For A
              <span className="block">Greener Tomorrow</span>
            </Heading>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Klavetek Green Blocks & Tiles Pvt. Ltd. manufactures premium-quality Autoclaved Aerated Concrete (AAC) Blocks engineered for superior strength, lightweight construction, thermal insulation, fire resistance, and sustainable infrastructure development across residential, commercial, and industrial projects.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Feature text="Eco-Friendly Manufacturing" />
              <Feature text="Lightweight AAC Blocks" />
              <Feature text="High Compressive Strength" />
              <Feature text="Thermal & Sound Insulation" />
            </div>
            <div className="mt-12 flex flex-wrap gap-5">
              <Button size="lg">View Products <ArrowRight size={18} className="ml-2" /></Button>
              <Button variant="outline" size="lg">Get Free Quote</Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="relative z-20 flex min-h-[95vh] items-center py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 backdrop-blur-md">
            <Leaf size={18} className="text-emerald-400" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Welcome to Klavetek Green Blocks & Tiles Pvt. Ltd.
            </span>
          </div>

          {/* Heading */}

          <Heading level="h1" className="mb-8 text-white">
            Building
            <span className="block bg-gradient-to-r from-green-400 via-lime-300 to-white bg-clip-text text-transparent">
              Stronger Walls
            </span>
            For A
            <span className="block">
              Greener Tomorrow
            </span>
          </Heading>

          {/* Description */}

          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Klavetek Green Blocks & Tiles Pvt. Ltd. manufactures
            premium-quality Autoclaved Aerated Concrete (AAC) Blocks
            engineered for superior strength, lightweight construction,
            thermal insulation, fire resistance, and sustainable
            infrastructure development across residential,
            commercial, and industrial projects.
          </p>

          {/* Feature List */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Feature text="Eco-Friendly Manufacturing" />
            <Feature text="Lightweight AAC Blocks" />
            <Feature text="High Compressive Strength" />
            <Feature text="Thermal & Sound Insulation" />
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">
            <Button size="lg">
              View Products
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Get Free Quote
            </Button>
          </div>

        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}

        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Main Glass Card */}

          <div className="relative w-full max-w-lg">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

              {/* Product Image */}

              <div className="mb-8 overflow-hidden rounded-3xl">
                <img
                  src="/images/products/aac-block.png"
                  alt="AAC Blocks"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title */}

              <h3 className="text-3xl font-bold text-white">
                Premium AAC Blocks
              </h3>

              <p className="mt-4 text-slate-300 leading-8">
                Manufactured with advanced autoclaved aerated concrete technology
                to provide exceptional strength, lightweight performance,
                thermal insulation and eco-friendly construction.
              </p>

              {/* Features */}

              <div className="mt-8 space-y-4">
                <Info text="High Compressive Strength" />
                <Info text="Fire Resistant Material" />
                <Info text="Thermal Insulation" />
                <Info text="Eco-Friendly Manufacturing" />
              </div>

            </div>

            {/* Floating Card 1 */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-4 top-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-widest text-green-300">
                Manufacturing
              </p>
              <h4 className="mt-2 text-xl font-bold text-white">
                Precision Engineering
              </h4>
            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute right-4 bottom-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-widest text-green-300">
                Sustainability
              </p>
              <h4 className="mt-2 text-xl font-bold text-white">
                Green Building Ready
              </h4>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Mouse Indicator */}

      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Mouse className="h-7 w-7 text-white/70" />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-2 h-8 w-[2px] rounded-full bg-emerald-400"
        />
      </motion.div>
    </Container>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={20} className="text-green-400" />
      <span className="text-white">{text}</span>
    </div>
  );
}

function Info({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={18} className="text-green-400" />
      <span className="text-white">{text}</span>
    </div>
  );
}