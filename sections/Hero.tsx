"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Replaceable architectural interior background image */}
        <Image
          src="/images/hero/hero-bathroom.png"
          alt="S V Sales luxury bathroom interior showroom showcase"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Gradient overlays for contrast and readability in both light and dark modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-black/40 z-10" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-8 w-64 h-64 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-8 w-80 h-80 bg-[var(--navy-surface-light)]/40 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        {/* Eyebrow badge */}
        <Reveal variant="fade-up" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 bg-white/10 backdrop-blur-md text-[var(--accent)] border border-white/15 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Bath, Kitchen & Plumbing Solutions</span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal variant="fade-up" delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Elevate Spaces with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#F0D59A]">
              S V SALES
            </span>
          </h1>
        </Reveal>

        {/* Subtitle synthesized directly from About Us */}
        <Reveal variant="fade-up" delay={0.3}>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Nagpur’s trusted partner for premium bath fittings, sanitaryware, chimneys, cooktops,
            piping systems, and adhesives — empowering homeowners, architects, designers, builders,
            and contractors with prompt, exceptional execution.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal variant="fade-up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              href="#products"
              variant="secondary"
              size="lg"
              showArrow
              className="w-full sm:w-auto"
            >
              Explore Products
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-white/30 hover:border-[var(--accent)] hover:text-[var(--accent)] bg-white/5 backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </div>
        </Reveal>

        {/* Trust Badges Strip */}
        <Reveal variant="fade-up" delay={0.5}>
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/10 text-[var(--accent)] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300 font-medium">Industry Legacy</p>
                <p className="text-sm font-bold text-white">18+ Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/10 text-[var(--accent)] shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300 font-medium">Authorized Supply</p>
                <p className="text-sm font-bold text-white">Leading Brand Partners</p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 rounded-xl bg-white/10 text-[var(--accent)] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300 font-medium">Complete Spectrum</p>
                <p className="text-sm font-bold text-white">Bath · Kitchen · Piping</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/60 hover:text-[var(--accent)] transition-colors duration-200"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
