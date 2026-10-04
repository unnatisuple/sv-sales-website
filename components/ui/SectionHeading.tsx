"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-6 sm:mb-10",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2.5 border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--accent)] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-snug",
          light ? "text-white" : "text-[var(--fg)]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-2.5 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto",
            light ? "text-gray-300" : "text-[var(--fg-muted)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
