"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  ShieldCheck,
  Factory,
  BadgeCheck,
  Truck,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    subtitle: "Quality Assured Manufacturing",
  },
  {
    icon: Factory,
    title: "Modern Plant",
    subtitle: "Fully Automated Production",
  },
  {
    icon: Building2,
    title: "500+ Projects",
    subtitle: "Residential & Commercial",
  },
  {
    icon: Truck,
    title: "Pan India Supply",
    subtitle: "Reliable Logistics Network",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    subtitle: "AAC Blocks Built to Last",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    subtitle: "Growing Across India",
  },
];

export default function TrustedSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-lime-400/10 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Trusted Manufacturing Partner
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Built on
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              Quality, Innovation & Trust
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Klavetek Green Blocks delivers premium AAC Blocks using
            advanced manufacturing technology with strict quality
            standards for stronger and sustainable construction.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {trustItems.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .08,
                  duration: .55,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-emerald-500/40
                  hover:bg-white/[0.06]
                "
              >

                {/* Glow */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-emerald-500/0
                  via-transparent
                  to-lime-500/0
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                  group-hover:from-emerald-500/10
                  group-hover:to-lime-500/10
                " />

                <div className="relative z-10">

                  <div className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-green-600
                    shadow-xl
                    shadow-emerald-500/30
                  ">

                    <Icon className="h-8 w-8 text-white" />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-white/60">
                    {item.subtitle}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Numbers */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-16 md:grid-cols-4"
        >

          {[
            ["500+", "Projects Completed"],
            ["25+", "Years Experience"],
            ["1200+", "Happy Clients"],
            ["100%", "Quality Commitment"],
          ].map(([number, text]) => (

            <div key={text} className="text-center">

              <h3 className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-5xl font-black text-transparent">
                {number}
              </h3>

              <p className="mt-3 text-white/60">
                {text}
              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}