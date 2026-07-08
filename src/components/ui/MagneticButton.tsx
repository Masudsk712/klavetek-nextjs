"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ReactNode,
  MouseEvent,
  useRef,
} from "react";

import { cn } from "@/lib/cn";

interface MagneticButtonProps {
  children: ReactNode;

  className?: string;

  strength?: number;

  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className,
  strength = 35,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(
    e: MouseEvent<HTMLDivElement>
  ) {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const offsetX =
      e.clientX -
      rect.left -
      rect.width / 2;

    const offsetY =
      e.clientY -
      rect.top -
      rect.height / 2;

    x.set((offsetX / rect.width) * strength);

    y.set((offsetY / rect.height) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{
        scale: 0.96,
      }}
      className={cn(
        "inline-flex",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}