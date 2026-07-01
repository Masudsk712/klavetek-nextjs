"use client";

import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-6 left-6 z-20 hidden lg:flex items-center gap-3"
    >
      <div className="relative h-6 w-3.5 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
        <motion.div
          animate={{ y: [0, 12], opacity: [0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-1 rounded-full bg-emerald-400"
        />
      </div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium">
        Scroll to explore
      </span>
    </motion.div>
  );
}