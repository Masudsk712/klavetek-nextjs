"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  ShieldCheck,
  Leaf,
  Building2,
} from "lucide-react";

import { COMPANY } from "@/constants/company";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-3xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
      >
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-emerald-500/40
            bg-emerald-500/10
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-emerald-400
            backdrop-blur-xl
          "
        >
          <Factory size={16} />

          {COMPANY.hero.badge}
        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .2,
          duration: .7,
        }}
        className="
          mt-8
          text-5xl
          font-black
          leading-tight
          tracking-tight
          text-white
          md:text-6xl
          xl:text-7xl
        "
      >
        {COMPANY.hero.title}

        <br />

        <span
          className="
            bg-gradient-to-r
            from-emerald-400
            via-green-300
            to-lime-300
            bg-clip-text
            text-transparent
          "
        >
          {COMPANY.hero.highlight}
        </span>
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .35,
          duration: .7,
        }}
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-white/80
          md:text-xl
        "
      >
        {COMPANY.hero.subtitle}
      </motion.p>      {/* CTA Buttons */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        className="
          mt-10
          flex
          flex-wrap
          gap-5
        "
      >
        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-emerald-500
            to-green-600
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-[0_15px_45px_rgba(16,185,129,.35)]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_20px_60px_rgba(16,185,129,.5)]
          "
        >
          {COMPANY.hero.primaryButton}

          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          href="/products"
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/20
            bg-white/10
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white/20
            hover:scale-105
          "
        >
          {COMPANY.hero.secondaryButton}
        </Link>
      </motion.div>

      {/* Trust Features */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 0.7,
        }}
        className="
          mt-12
          grid
          gap-5
          sm:grid-cols-3
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            backdrop-blur-xl
          "
        >
          <div className="rounded-xl bg-emerald-500/20 p-3">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
          </div>

          <div>
            <p className="font-semibold text-white">
              ISO Certified
            </p>

            <p className="text-sm text-white/60">
              Quality Assured Manufacturing
            </p>
          </div>
        </div>

        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            backdrop-blur-xl
          "
        >
          <div className="rounded-xl bg-emerald-500/20 p-3">
            <Leaf className="h-6 w-6 text-emerald-400" />
          </div>

          <div>
            <p className="font-semibold text-white">
              Eco Friendly
            </p>

            <p className="text-sm text-white/60">
              Sustainable AAC Technology
            </p>
          </div>
        </div>

        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            backdrop-blur-xl
          "
        >
          <div className="rounded-xl bg-emerald-500/20 p-3">
            <Building2 className="h-6 w-6 text-emerald-400" />
          </div>

          <div>
            <p className="font-semibold text-white">
              Premium AAC Blocks
            </p>

            <p className="text-sm text-white/60">
              Strong • Lightweight • Durable
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}