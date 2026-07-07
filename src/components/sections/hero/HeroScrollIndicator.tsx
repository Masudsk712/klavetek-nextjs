"use client";

import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-3"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
        Scroll
      </span>

      {/* Scroll mouse indicator */}
      <div className="relative h-8 w-[18px] rounded-full border-2 border-white/20 flex items-start justify-center p-1">
        <motion.div
          animate={{
            y: [0, 18],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="w-[3px] h-[6px] rounded-full bg-emerald-400"
        />
      </div>
    </motion.div>
  );
}