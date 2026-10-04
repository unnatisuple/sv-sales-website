"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Award, Phone, CheckCircle2, Store } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { companyData } from "@/data/company";

export function AboutUs() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[var(--bg)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Company Overview"
            title="Trusted Partner for Modern Architecture & Renovation"
            subtitle="Supplying industry-benchmark bathroom and kitchen fittings across Nagpur with an unwavering commitment to quality and punctuality."
          />
        </Reveal>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Authentic Storefront Image & Highlight */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="scale-in">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-md group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/about/storefront.png"
                    alt="S V Sales storefront and showroom in Nagpur"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Floating badge over storefront */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-[var(--bg-elevated)]/90 backdrop-blur-md p-4 rounded-2xl border border-[var(--border)] shadow-lg flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[var(--accent)] text-[#1A1813]">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--fg-muted)]">Official Experience Centre</p>
                    <p className="text-sm font-bold text-[var(--fg)]">S.V. SALES — Rameshwari, Nagpur</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Verbatim Narrative & Audience */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="slide-left" delay={0.1}>
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">
                  About S V Sales
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] leading-snug">
                  Precision, Reliability & Uncompromising Excellence
                </h3>
                {/* Verbatim About Us Text */}
                <p className="text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed">
                  <span className="font-semibold text-[var(--fg)]">S V Sales</span> is a trusted supplier of{" "}
                  <span className="text-[var(--accent)] font-semibold">bathroom and kitchen solutions</span>{" "}
                  serving home owners, interior designers, builders, architects, and contractors. We provide high-quality{" "}
                  <span className="text-[var(--accent)] font-semibold">bath fittings</span>,{" "}
                  <span className="text-[var(--accent)] font-semibold">sanitary ware</span>, chimneys, cooktops,{" "}
                  <span className="text-[var(--accent)] font-semibold">tiles adhesives, grout, and epoxy</span> that
                  ensure smooth and timely execution of construction and renovation projects.
                </p>
              </div>
            </Reveal>

            {/* Who We Serve - Exactly from PDF "My Specific ask / I am looking to" */}
            <Reveal variant="slide-left" delay={0.2}>
              <div className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-2xs">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--fg)] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  Who We Specially Serve
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {companyData.whoWeServe.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--fg-muted)] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Director Profile Card - Vishwas Bhatpalliwar */}
        <Reveal variant="fade-up" delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--navy-surface)] to-[var(--navy-surface-light)] text-[var(--navy-fg)] border border-[var(--border)] shadow-xl p-8 sm:p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Director Portrait */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-[var(--accent)]/40 shadow-xl bg-[#091F2D]">
                  <Image
                    src={companyData.director.image}
                    alt={`${companyData.director.name} - ${companyData.director.role}`}
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Director Credentials & Verbatim Details */}
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30">
                  Leadership
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {companyData.director.name}
                  </h3>
                  <p className="text-base text-[var(--accent)] font-medium mt-1">
                    {companyData.director.role}, {companyData.director.company}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <Award className="w-5 h-5 text-[var(--accent)] shrink-0" />
                    <div>
                      <p className="text-xs text-gray-300">Industry Experience</p>
                      <p className="text-sm font-bold text-white">{companyData.director.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <GraduationCap className="w-5 h-5 text-[var(--accent)] shrink-0" />
                    <div>
                      <p className="text-xs text-gray-300">Academic Background</p>
                      <p className="text-sm font-bold text-white">{companyData.director.education}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={`tel:${companyData.director.phone.replace(/[^0-9]/g, "")}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-[#1A1813] text-sm font-bold hover:bg-[var(--accent-hover)] transition-all shadow-md active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Director: {companyData.director.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Animated Stat Strip */}
        <Reveal variant="fade-up" delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCounter
              target={18}
              suffix="+"
              label="Years of Experience"
              sublabel="Since 18 Years in Business"
            />
            <StatCounter
              target={10}
              suffix="+"
              label="Brand Partners"
              sublabel="Jaquar, Astral, JSW & More"
            />
            <StatCounter
              target={18}
              suffix="+"
              label="Product Categories"
              sublabel="Fittings, Piping, Sanitaryware"
            />
            <StatCounter
              target={100}
              suffix="%"
              label="Genuine Supply"
              sublabel="Authorized Brand Distribution"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
