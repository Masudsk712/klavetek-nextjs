"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;

  delay?: number;
  duration?: number;

  once?: boolean;

  y?: number;
  x?: number;

  scale?: number;
}

export default function Reveal({
  children,
  className,

  delay = 0,
  duration = 0.6,

  once = true,

  y = 40,
  x = 0,

  scale = 1,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}