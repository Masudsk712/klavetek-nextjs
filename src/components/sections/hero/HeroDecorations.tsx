"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroDecorations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty("--cursor-x", `${clientX}px`);
      containerRef.current.style.setProperty("--cursor-y", `${clientY}px`);
    };

    const container = containerRef.current;
    if (container) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      
      {/* Cursor Glow Effect */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
        style={{
          left: "var(--cursor-x, 50%)",
          top: "var(--cursor-y, 50%)",
          background: "radial-gradient(circle, rgba(16,185,129,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Floating Glass Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 h-40 w-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-32 h-28 w-28 rounded-full border border-emerald-500/10 bg-emerald-500/5 backdrop-blur-3xl"
      />

      {/* Green Light Beams */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, rgba(16,185,129,0.3) 45%, transparent 50%), linear-gradient(-115deg, transparent 40%, rgba(132,204,22,0.2) 45%, transparent 50%)",
        }}
      />

      {/* Depth Shadows */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-56 top-10 h-[650px] w-[650px] rounded-full bg-emerald-500/15 blur-[180px]"
      />

      <motion.div
        animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-56 bottom-0 h-[700px] w-[700px] rounded-full bg-lime-400/12 blur-[220px]"
      />
    </div>
  );
}