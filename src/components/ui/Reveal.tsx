"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  fadeDown,
  zoomIn,
} from "@/lib/animations";

type RevealAnimation =
  | "up"
  | "down"
  | "left"
  | "right"
  | "zoom";

interface RevealProps {
  children: ReactNode;

  animation?: RevealAnimation;

  delay?: number;

  duration?: number;

  once?: boolean;

  amount?: number;

  className?: string;
}

const variantsMap: Record<RevealAnimation, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  zoom: zoomIn,
};

export default function Reveal({
  children,
  animation = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className,
}: RevealProps) {
  const variants = variantsMap[animation];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}