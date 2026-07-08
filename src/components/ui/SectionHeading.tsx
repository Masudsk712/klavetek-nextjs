"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "mb-16",
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left",
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <motion.div variants={fadeUp}>
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-1.5
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-green-600
              dark:text-green-400
              backdrop-blur-md
            "
          >
            {badge}
          </span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="
          mt-5
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-gray-900
          dark:text-white
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}

        {highlight && (
          <>
            {" "}
            <span
              className="
                bg-gradient-to-r
                from-green-500
                via-emerald-500
                to-lime-500
                bg-clip-text
                text-transparent
              "
            >
              {highlight}
            </span>
          </>
        )}
      </motion.h2>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        className={cn(
          "mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-400",
          align === "center" && "mx-auto"
        )}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="
            mt-8
            text-lg
            leading-8
            text-gray-600
            dark:text-gray-300
          "
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}