"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Factory,
  Hammer,
  Scissors,
  CheckCircle2,
  Boxes,
} from "lucide-react";

const process = [
  {
    icon: Package,
    title: "Raw Material",
    description:
      "Premium cement, lime, gypsum and fly ash are carefully selected.",
  },
  {
    icon: Factory,
    title: "Mixing",
    description:
      "Raw materials are automatically mixed for a uniform composition.",
  },
  {
    icon: Boxes,
    title: "Casting",
    description:
      "The mixture is poured into moulds and prepared for expansion.",
  },
  {
    icon: Scissors,
    title: "Precision Cutting",
    description:
      "Advanced wire cutting ensures accurate dimensions.",
  },
  {
    icon: Hammer,
    title: "Autoclaving",
    description:
      "High-pressure steam curing delivers exceptional strength.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Check",
    description:
      "Every block undergoes strict inspection before dispatch.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Products are safely packed and delivered across India.",
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="relative bg-[#080808] py-28 overflow-hidden">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Manufacturing Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            From
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              Raw Material
            </span>
            {" "}to
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              Premium AAC Blocks
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Every Klavetek AAC Block passes through a fully automated,
            precision-controlled manufacturing process to ensure
            superior strength, consistency and long-term durability.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Center Line */}

          <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-white/10 lg:block" />

          <div className="grid gap-8 lg:grid-cols-7">          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="relative"
              >
                {/* Timeline Dot */}

                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500 shadow-lg shadow-emerald-500/30">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                {/* Card */}

                <div
                  className="
                    mt-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    text-center
                    transition-all
                    duration-300
                    hover:border-emerald-500/30
                    hover:bg-white/[0.06]
                  "
                >

                  <span className="text-sm font-semibold tracking-widest text-emerald-400">
                    STEP {index + 1}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            );
          })}

          </div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mt-24 text-center"
        >

          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/60">
            Our automated manufacturing facility follows strict quality
            standards at every stage to ensure every AAC Block delivered
            meets the highest level of strength, precision and reliability.
          </p>

        </motion.div>

      </div>

    </section>
  );
}