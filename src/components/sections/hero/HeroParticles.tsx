"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function HeroParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      width: random(0.5, 3),
      height: random(0.5, 3),
      left: `${random(0, 100)}%`,
      top: `${random(0, 100)}%`,
      background: `rgba(255,255,255,${random(0.1, 0.5)})`,
      boxShadow: `0 0 ${random(1, 4)}px rgba(132,204,22,0.4)`,
      x: [0, random(-100, 100)],
      y: [0, random(-100, 100)],
      duration: random(10, 25),
      delay: random(0, 5),
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
            background: p.background,
            boxShadow: p.boxShadow,
          }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
