"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Factory,
  ShieldCheck,
  Leaf,
  Building2,
} from "lucide-react";

import HeroBackground from "./HeroBackground";

import { COMPANY } from "@/constants/company";

import {
  heroTitle,
  heroSubtitle,
  heroButtons,
  staggerContainer,
} from "@/lib/animations";

import Section from "@/components/shared/Section";

import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen overflow-hidden py-0"
      containerClassName="relative z-20 flex min-h-screen items-center"
    >
      <HeroBackground />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2"
      >
        {/* LEFT CONTENT */}

        <div className="relative z-30">

          <motion.div variants={heroSubtitle}>
            <Badge>

              <Factory className="mr-2 h-4 w-4" />

              {COMPANY.hero.badge}

            </Badge>
          </motion.div>

          <motion.h1
            variants={heroTitle}
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
                from-green-400
                via-emerald-300
                to-lime-300
                bg-clip-text
                text-transparent
              "
            >
              {COMPANY.hero.highlight}
            </span>
          </motion.h1>

          <motion.p
            variants={heroSubtitle}
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
          </motion.p>

          {/* CTA */}

          <motion.div
            variants={heroButtons}
            className="mt-10 flex flex-wrap gap-5"
          >
            <MagneticButton>
              <Link href="/contact">

                <Button size="lg">

                  {COMPANY.hero.primaryButton}

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Button>

              </Link>
            </MagneticButton>

            <MagneticButton strength={45}>
              <Link href="/products">

                <Button
                  size="lg"
                  variant="secondary"
                >
                  {COMPANY.hero.secondaryButton}
                </Button>

              </Link>
            </MagneticButton>
          </motion.div>

          {/* Trust Badges */}

          <motion.div
            variants={heroButtons}
            className="
              mt-12
              flex
              flex-wrap
              gap-6
              text-white/80
            "
          >
            <div className="flex items-center gap-2">

              <ShieldCheck className="h-5 w-5 text-green-400" />

              <span className="text-sm font-medium">
                ISO Certified
              </span>

            </div>

            <div className="flex items-center gap-2">

              <Leaf className="h-5 w-5 text-green-400" />

              <span className="text-sm font-medium">
                Eco Friendly
              </span>

            </div>

            <div className="flex items-center gap-2">

              <Building2 className="h-5 w-5 text-green-400" />

              <span className="text-sm font-medium">
                Premium AAC Blocks
              </span>

            </div>

          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <motion.div
          variants={heroButtons}
          className="
            relative
            hidden
            lg:flex
            items-center
            justify-center
          "
        >
          <div className="grid w-full max-w-md gap-6">
                      {/* Card 1 */}
            <GlassCard className="backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/60">
                    Projects Delivered
                  </p>

                  <Counter
                    end={COMPANY.stats.projects}
                    suffix="+"
                    className="mt-2 block text-5xl font-black text-white"
                  />
                </div>

                <div className="rounded-2xl bg-green-500/20 p-4">
                  <Building2 className="h-8 w-8 text-green-400" />
                </div>
              </div>
            </GlassCard>

            {/* Card 2 */}
            <div className="grid grid-cols-2 gap-6">
              <GlassCard>
                <div className="text-center">
                  <Counter
                    end={COMPANY.stats.experience}
                    suffix="+"
                    className="block text-4xl font-black text-white"
                  />

                  <p className="mt-2 text-sm text-white/70">
                    Years Experience
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="text-center">
                  <Counter
                    end={COMPANY.stats.customers}
                    suffix="+"
                    className="block text-4xl font-black text-white"
                  />

                  <p className="mt-2 text-sm text-white/70">
                    Happy Clients
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <GlassCard className="border-green-500/20">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-green-500/20 p-4">
                    <Factory className="h-8 w-8 text-green-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Modern Manufacturing
                    </h3>

                    <p className="mt-1 text-sm text-white/70">
                      Advanced AAC Block Technology with
                      Premium Quality Standards
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-30
          -translate-x-1/2
        "
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-2
            text-white/70
          "
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </Section>
  );
}