"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/cn";

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
}

export default function Counter({
  end,
  start = 0,
  duration = 2.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className,
}: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <span
      ref={ref}
      className={cn(
        "font-bold tracking-tight",
        className
      )}
    >
      {inView ? (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          separator={separator}
        />
      ) : (
        `${prefix}${start}${suffix}`
      )}
    </span>
  );
}