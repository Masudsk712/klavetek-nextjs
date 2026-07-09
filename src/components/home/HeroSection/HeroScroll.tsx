"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  const handleScroll = () => {
    const next = document.getElementById("trust");

    if (next) {
      next.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
        flex
        flex-col
        items-center
        gap-2
        text-white/70
        transition
        hover:text-emerald-400
      "
    >
      <span className="text-xs uppercase tracking-[0.35em]">
        Scroll
      </span>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </motion.button>
  );
}