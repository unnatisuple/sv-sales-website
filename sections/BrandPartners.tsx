"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { brands } from "@/data/brands";

export function BrandPartners() {
  // Duplicate brands array for infinite seamless looping
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-20 sm:py-28 bg-[var(--bg-elevated)] transition-colors duration-200 overflow-hidden border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Authorized Supplier Network"
            title="Our Brand Partners"
            subtitle="Collaborating with India’s most esteemed sanitaryware, piping, and construction material brands to deliver uncompromised quality for every project."
          />
        </Reveal>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-4 my-8">
        <div className="animate-marquee flex items-center gap-8 px-4">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="shrink-0 w-44 h-24 sm:w-52 sm:h-28 rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-[var(--accent)] shadow-2xs group"
            >
              <div className="relative w-full h-full grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} official brand partner logo`}
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Brand Sourcing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Reveal variant="fade-up" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Brand Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative w-28 h-12">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        sizes="112px"
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-light)] px-2 py-0.5 rounded">
                      Authorized
                    </span>
                  </div>

                  {/* Brand Name & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-[var(--fg)] mb-1">
                      {brand.name}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--accent)] mb-2">
                      {brand.categorySummary}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                {/* Manufacturer URL link */}
                <div className="pt-4 mt-4 border-t border-[var(--border)]">
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>Manufacturer Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
