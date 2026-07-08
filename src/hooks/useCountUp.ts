"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: boolean;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

interface UseCountUpReturn {
  display: string;
  raw: number;
  hasAnimated: boolean;
  ref: (element: HTMLElement | null) => void;
}

export default function useCountUp({
  end,
  duration = 2000,
  start = false,
  decimals = 0,
  prefix = "",
  suffix = "",
}: UseCountUpOptions): UseCountUpReturn {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!start || hasAnimated) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setCount(current);
      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, start, hasAnimated, decimals, prefix, suffix]);

  const refCallback = (element: HTMLElement | null) => {
    elementRef.current = element;
  };

  return {
    display,
    raw: count,
    hasAnimated,
    ref: refCallback,
  };
}