"use client";

import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
}

export default function FloatingParticles({
  count = 20,
}: FloatingParticlesProps) {
  const particles = Array.from({ length: count });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, index) => {
        const size = Math.random() * 10 + 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 8 + Math.random() * 10;

        return (
          <motion.span
            key={index}
            className="absolute rounded-full bg-green-400/20 blur-sm"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: "-40px",
            }}
            animate={{
              y: [-20, -900],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 0.8, 0],
              scale: [0.6, 1.2, 0.8],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}