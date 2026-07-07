"use client";

import { useEffect, useState, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  startOnMount?: boolean;
}

export function useCountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  startOnMount = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);
  const hasTriggered = useRef(false);

  const animateRef = useRef<() => void>(() => {
    if (hasTriggered.current) return;
    hasTriggered.current = true;

    startTime.current = null;
    setCount(0);

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(eased * end * Math.pow(10, decimals)) / Math.pow(10, decimals);
      setCount(current);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(step);
      } else {
        setHasAnimated(true);
      }
    };

    rafId.current = requestAnimationFrame(step);
  });

  useEffect(() => {
    if (startOnMount) {
      const timer = setTimeout(animateRef.current, 500);
      return () => {
        clearTimeout(timer);
        if (rafId.current) cancelAnimationFrame(rafId.current);
      };
    }
  }, [end, duration, startOnMount]);

  // IntersectionObserver to trigger animation when element is visible
  useEffect(() => {
    if (!startOnMount || typeof window === "undefined") return;

    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = false;
          startTime.current = null;
          if (rafId.current) cancelAnimationFrame(rafId.current);
          setTimeout(animateRef.current, 200);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnMount]);

  const displayValue =
    count >= 1000
      ? count.toLocaleString("en-IN", { maximumFractionDigits: decimals })
      : count.toFixed(decimals);

  return {
    display: `${prefix}${displayValue}${suffix}`,
    raw: count,
    hasAnimated,
    animate: animateRef.current,
    ref: elementRef,
  };
}
