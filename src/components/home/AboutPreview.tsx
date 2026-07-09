"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[170px]" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">

        {/* ================================= */}
        {/* LEFT CONTENT */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .7,
          }}
          viewport={{ once: true }}
        >

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.22em]
              text-emerald-400
            "
          >
            <Factory size={16} />
            About Klavetek
          </span>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Building India's
            <br />

            <span
              className="
                bg-gradient-to-r
                from-emerald-400
                to-lime-300
                bg-clip-text
                text-transparent
              "
            >
              Future with AAC
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-white/65
            "
          >
            Klavetek Green Blocks is committed to manufacturing
            premium AAC Blocks using cutting-edge automation,
            sustainable technology and uncompromising quality
            standards for residential, commercial and industrial
            construction projects.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-5">

            {[
              "High Strength & Lightweight AAC Blocks",
              "Advanced Automated Manufacturing Plant",
              "Eco-Friendly & Sustainable Production",
              "Reliable Supply Across India",
            ].map((item) => (

              <div
                key={item}
                className="flex items-start gap-4"
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-500/15
                  "
                >
                  <CheckCircle2
                    className="text-emerald-400"
                    size={20}
                  />
                </div>

                <p className="pt-1 text-white/80">
                  {item}
                </p>

              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/about"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-emerald-500
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                shadow-xl
                shadow-emerald-500/30
                transition
                hover:scale-105
                hover:bg-emerald-600
              "
            >
              Learn More

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/15
                bg-white/5
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                hover:border-emerald-400
                hover:bg-white/10
              "
            >
              Contact Us
            </Link>

          </div>

        </motion.div>        {/* ================================= */}
        {/* RIGHT IMAGE */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Main Image */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              shadow-[0_25px_80px_rgba(0,0,0,.45)]
            "
          >
            <Image
              src="/images/photo1.webp"
              alt="Klavetek Factory"
              width={700}
              height={850}
              priority
              className="
                h-[650px]
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* Experience Card */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              -left-10
              top-10
              rounded-3xl
              border
              border-white/10
              bg-black/60
              p-6
              backdrop-blur-2xl
            "
          >
            <h3 className="text-5xl font-black text-emerald-400">
              25+
            </h3>

            <p className="mt-2 text-sm text-white/70">
              Years of
              <br />
              Experience
            </p>
          </motion.div>

          {/* Bottom Card */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              -right-8
              bottom-10
              rounded-3xl
              border
              border-white/10
              bg-black/60
              p-6
              backdrop-blur-2xl
            "
          >
            <div className="flex items-center gap-5">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-500/20
                "
              >
                <ShieldCheck
                  className="text-emerald-400"
                  size={28}
                />
              </div>

              <div>

                <h4 className="text-lg font-bold text-white">
                  ISO Certified
                </h4>

                <p className="text-sm text-white/60">
                  International Quality Standards
                </p>

              </div>

            </div>
          </motion.div>

          {/* Eco Card */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              left-10
              bottom-28
              rounded-2xl
              border
              border-white/10
              bg-black/60
              p-5
              backdrop-blur-2xl
            "
          >
            <div className="flex items-center gap-3">

              <Leaf
                className="text-emerald-400"
                size={22}
              />

              <span className="font-medium text-white">
                Eco Friendly
              </span>

            </div>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}