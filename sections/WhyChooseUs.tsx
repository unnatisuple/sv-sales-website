"use client";

import React from "react";
import {
  Clock,
  Users,
  Layers,
  CheckCheck,
  Truck,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const VALUE_PROPS = [
  {
    icon: Clock,
    title: "18+ Years of Industry Experience",
    description:
      "Serving Nagpur's construction and interior ecosystem since 18 years with profound domain knowledge and dependable sourcing.",
  },
  {
    icon: Users,
    title: "Trusted Across the Trade",
    description:
      "Preferred supplier for homeowners, interior designers, builders, architects, contractors, and individual renovators.",
  },
  {
    icon: Layers,
    title: "Comprehensive Solutions Spectrum",
    description:
      "Single-point provider for bath fittings, sanitaryware, chimneys, cooktops, tile adhesives, grout, epoxy, and advanced piping.",
  },
  {
    icon: CheckCheck,
    title: "Direct Partnerships with Premier Brands",
    description:
      "Authorized distributor for Jaquar, Astral Pipes, JSW, Hindware, Atul, Artize, Essco, Soncera, JK Industries, and Flortek.",
  },
  {
    icon: Truck,
    title: "Prompt Project Execution & Delivery",
    description:
      "Dedicated to ensuring smooth and timely execution of residential, commercial, and renovation schedules without bottlenecks.",
  },
  {
    icon: GraduationCap,
    title: "Director-Led, B.Com Qualified Leadership",
    description:
      "Under the professional stewardship of Vishwas Bhatpalliwar, guaranteeing personalized attention and ethical business standards.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[var(--bg-elevated)] transition-colors duration-200 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="The S V Sales Advantage"
            title="Why Choose S V Sales"
            subtitle="Built upon eighteen years of hands-on expertise, authorized manufacturer channels, and customer-first service."
          />
        </Reveal>

        {/* Value Prop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PROPS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <Reveal key={prop.title} variant="fade-up" delay={0.08 * idx}>
                <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center transition-colors group-hover:bg-[var(--accent)] group-hover:text-[#1A1813]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--fg)] mb-2">
                        {prop.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
