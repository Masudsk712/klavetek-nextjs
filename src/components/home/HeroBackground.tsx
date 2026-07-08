"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 40;

      mouseX.set(xPos);
      mouseY.set(yPos);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Mouse Parallax */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="absolute inset-0"
      >
        {/* Green Ambient Glow */}
        <div
          className="
          absolute
          left-[-10%]
          top-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-green-500/20
          blur-[140px]
        "
        />

        <div
          className="
          absolute
          right-[-10%]
          bottom-[0]
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-400/20
          blur-[130px]
        "
        />
      </motion.div>

      {/* Dark Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/55
      "
      />

      {/* Green Gradient Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-green-950/60
        via-transparent
        to-black/40
      "
      />

      {/* Bottom Fade */}
      <div
        className="
        absolute
        bottom-0
        left-0
        h-60
        w-full
        bg-gradient-to-t
        from-background
        to-transparent
      "
      />

      {/* Noise Texture */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        mix-blend-soft-light
        bg-repeat
      "
        style={{
          backgroundImage: "url('/images/noise.webp')",
        }}
      />

      {/* Grid Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:60px_60px]
        opacity-20
      "
      />

      {/* Floating Particles */}
      <FloatingParticles count={25} />
            {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-40
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-b
          from-green-400/10
          to-transparent
          blur-3xl
        "
      />

      {/* Animated Light Beam */}
      <motion.div
        className="
          absolute
          top-[-20%]
          left-[-15%]
          h-[140%]
          w-40
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          blur-3xl
        "
        animate={{
          x: ["-10%", "130%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Green Accent Beam */}
      <motion.div
        className="
          absolute
          top-0
          right-[-20%]
          h-full
          w-60
          -rotate-12
          bg-gradient-to-l
          from-green-500/10
          via-green-400/5
          to-transparent
          blur-[100px]
        "
        animate={{
          x: [0, -120, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Ambient Glow */}
      <motion.div
        className="
          absolute
          bottom-[-120px]
          left-1/2
          h-72
          w-[90%]
          -translate-x-1/2
          rounded-full
          bg-green-500/10
          blur-[140px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Corner Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-emerald-400/10
          blur-[120px]
        "
      />

      {/* Performance Layer */}
      <div
        className="
          absolute
          inset-0
          will-change-transform
          pointer-events-none
        "
      />
    </div>
  );
}