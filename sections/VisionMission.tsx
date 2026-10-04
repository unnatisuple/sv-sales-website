"use client";

import React from "react";
import { Compass, Award, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { companyData } from "@/data/company";

export function VisionMission() {
  return (
    <section id="vision-mission" className="py-16 sm:py-24 bg-[var(--bg)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Core Guiding Principles"
            title="Vision & Mission"
            subtitle="Anchored in integrity, engineering precision, and a passion for creating living spaces that blend comfort, endurance, and luxury."
          />
        </Reveal>

        {/* Two Balanced UI Cards — Content-Focused without Decorative Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Vision */}
          <Reveal variant="fade-up" delay={0.1}>
            <div className="group relative rounded-3xl p-8 sm:p-10 bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
              <div className="space-y-6">
                {/* Header with Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center transition-colors group-hover:bg-[var(--accent)] group-hover:text-[#1A1813] shadow-xs">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20">
                    Our Horizon
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] tracking-tight mb-4">
                    VISION
                  </h3>
                  {/* Verbatim Vision Statement */}
                  <blockquote className="text-base sm:text-lg text-[var(--fg)] leading-relaxed italic border-l-3 border-[var(--accent)] pl-4 py-1 bg-[var(--bg-muted)]/30 rounded-r-xl">
                    &ldquo;{companyData.vision}&rdquo;
                  </blockquote>
                </div>

                {/* Strategic Pillars */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg-muted)]">
                    <Sparkles className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>Leading provider of innovative, sustainable & premium solutions</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg-muted)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>Transforming residential & commercial spaces into havens of comfort</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">
                <ShieldCheck className="w-4 h-4" />
                <span>Pioneering architectural bath excellence across Nagpur</span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Mission */}
          <Reveal variant="fade-up" delay={0.2}>
            <div className="group relative rounded-3xl p-8 sm:p-10 bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
              <div className="space-y-6">
                {/* Header with Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center transition-colors group-hover:bg-[var(--accent)] group-hover:text-[#1A1813] shadow-xs">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20">
                    Our Commitment
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] tracking-tight mb-4">
                    MISSION
                  </h3>
                  {/* Verbatim Mission Statement */}
                  <blockquote className="text-base sm:text-lg text-[var(--fg)] leading-relaxed italic border-l-3 border-[var(--accent)] pl-4 py-1 bg-[var(--bg-muted)]/30 rounded-r-xl">
                    &ldquo;{companyData.mission}&rdquo;
                  </blockquote>
                </div>

                {/* Core Commitments */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg-muted)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>Delivering uncompromised quality, durability & genuine brand supply</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg-muted)]">
                    <HeartHandshake className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>Cutting-edge technology paired with personalized customer consultation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Client-first execution & reliable after-sales support</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
