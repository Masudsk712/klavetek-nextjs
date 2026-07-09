"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Leaf,
  ShieldCheck,
  Thermometer,
  Zap,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Lightweight",
    description:
      "Reduces structural load while improving construction speed.",
  },
  {
    icon: ShieldCheck,
    title: "High Strength",
    description:
      "Engineered for durability and long-lasting structural performance.",
  },
  {
    icon: Flame,
    title: "Fire Resistant",
    description:
      "Excellent fire resistance for enhanced building safety.",
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    description:
      "Keeps interiors cooler and improves energy efficiency.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description:
      "Sustainable manufacturing with a lower environmental impact.",
  },
  {
    icon: Zap,
    title: "Fast Construction",
    description:
      "Easy installation reduces labour time and overall project cost.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Why Choose Klavetek
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Built For
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              Modern Construction
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Our AAC Blocks are designed to deliver strength,
            sustainability and efficiency for residential,
            commercial and industrial construction projects.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
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
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                transition-all
                duration-300
                hover:border-emerald-500/30
                hover:bg-white/[0.06]
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-500/10
                  transition-all
                  duration-300
                  group-hover:bg-emerald-500
                "
              >
                <Icon
                  className="
                    h-8
                    w-8
                    text-emerald-400
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
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
          className="mt-20 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Every Klavetek AAC Block is manufactured using modern
            automation and strict quality control to ensure reliable
            performance for every project.
          </p>

          <button
            className="
              mt-8
              rounded-full
              bg-emerald-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-emerald-600
              hover:scale-105
            "
          >
            Explore Our Products
          </button>
        </motion.div>

      </div>
    </section>
  );
}