"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
}

export function StatCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  duration = 1.6,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out quartic
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-xs">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--accent)] tracking-tight">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm sm:text-base font-semibold text-[var(--fg)]">
        {label}
      </div>
      {sublabel && (
        <div className="mt-0.5 text-xs text-[var(--fg-muted)]">
          {sublabel}
        </div>
      )}
    </div>
  );
}
