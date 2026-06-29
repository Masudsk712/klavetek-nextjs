"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  strength = 30,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX =
      e.clientX - rect.left - rect.width / 2;

    const offsetY =
      e.clientY - rect.top - rect.height / 2;

    x.set((offsetX / rect.width) * strength);

    y.set((offsetY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{
        scale: 0.96,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className={cn(
        "rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-green-700",
        className
      )}
    >
      {children}
    </motion.button>
  );
}