"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  BriefcaseBusiness,
} from "lucide-react";

import { COMPANY } from "@/constants/company";
import Counter from "@/components/ui/Counter";

export default function HeroStats() {
  return (
    <div
      className="
        relative
        hidden
        w-full
        max-w-[470px]
        lg:flex
        flex-col
        gap-5
      "
    >
      {/* ===========================
          PROJECT CARD
      =========================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: .8,
          delay: .3,
        }}
        whileHover={{
          y: -6,
        }}
        className="
          rounded-[28px]
          border
          border-white/10
          bg-white/10
          backdrop-blur-2xl
          p-6
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
        "
      >
        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-[.25em] text-white/60">
              Projects Delivered
            </p>

            <Counter
              end={COMPANY.stats.projects}
              suffix="+"
              className="
                mt-2
                block
                text-5xl
                font-black
                text-white
              "
            />

          </div>

          <div
            className="
              rounded-2xl
              bg-emerald-500/20
              p-4
            "
          >
            <Building2
              className="
                h-8
                w-8
                text-emerald-400
              "
            />
          </div>

        </div>
      </motion.div>

      {/* ===========================
          SMALL CARDS
      =========================== */}

      <div className="grid grid-cols-2 gap-5">

        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            rounded-[26px]
            border
            border-white/10
            bg-white/10
            backdrop-blur-xl
            p-6
          "
        >
          <Counter
            end={COMPANY.stats.experience}
            suffix="+"
            className="
              block
              text-4xl
              font-black
              text-white
            "
          />

          <p className="mt-2 text-white/70">
            Years Experience
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            rounded-[26px]
            border
            border-white/10
            bg-white/10
            backdrop-blur-xl
            p-6
          "
        >
          <Counter
            end={COMPANY.stats.customers}
            suffix="+"
            className="
              block
              text-4xl
              font-black
              text-white
            "
          />

          <p className="mt-2 text-white/70">
            Happy Clients
          </p>
        </motion.div>

      </div>      {/* ===========================
          MODERN MANUFACTURING CARD
      =========================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.6,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
          rounded-[28px]
          border
          border-white/10
          bg-white/10
          backdrop-blur-2xl
          p-6
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
        "
      >
        <div className="flex items-center gap-5">

          {/* Icon */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-emerald-500/30
              to-green-600/20
            "
          >
            <Factory
              className="
                h-8
                w-8
                text-emerald-400
              "
            />
          </motion.div>

          {/* Content */}

          <div className="flex-1">

            <h3
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Modern Manufacturing
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-white/70
              "
            >
              Automated AAC Block Production with
              International Quality Standards.
            </p>

          </div>

        </div>
      </motion.div>

      {/* ===========================
          FLOATING GLOW
      =========================== */}

      <motion.div
        animate={{
          opacity: [0.15, 0.30, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-24
          -top-20
          -z-10
          h-72
          w-72
          rounded-full
          bg-emerald-500/20
          blur-[120px]
        "
      />

      {/* ===========================
          DECORATION DOT
      =========================== */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-8
          bottom-20
          h-4
          w-4
          rounded-full
          bg-emerald-400
          shadow-[0_0_25px_rgba(16,185,129,.9)]
        "
      />

    </div>
  );
}