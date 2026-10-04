"use client";

import React from "react";
import { Phone, MapPin, Navigation, ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { companyData } from "@/data/company";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--bg)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Direct Communication"
            title="Connect with S V Sales"
            subtitle="Visit our showroom in Rameshwari, Nagpur, or connect directly with our director and technical sales executives for product inquiries, estimates, and supply schedules."
          />
        </Reveal>

        {/* Two-Column Grid: Details Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Details Card & Map */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal variant="slide-right">
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-md space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                    Corporate Office & Showroom
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] mt-1">
                    S V SALES
                  </h3>
                  <p className="text-xs text-[var(--fg-muted)] mt-0.5">
                    Complete Bath Solutions
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
                  <MapPin className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase text-[var(--fg)] tracking-wider">
                      Showroom Address
                    </p>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                      {companyData.contact.address}
                    </p>
                    <a
                      href={companyData.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline pt-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Direct Phone Numbers */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase text-[var(--fg)] tracking-wider flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[var(--accent)]" />
                    <span>Direct Calling & WhatsApp</span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`tel:${companyData.contact.phones[0]}`}
                      className="p-3.5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col items-start group shadow-2xs"
                    >
                      <span className="text-[11px] text-[var(--fg-muted)]">Primary Desk</span>
                      <span className="text-sm font-bold text-[var(--fg)] group-hover:text-[var(--accent)]">
                        +91 {companyData.contact.phones[0]}
                      </span>
                    </a>

                    <a
                      href={`tel:${companyData.contact.phones[1]}`}
                      className="p-3.5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col items-start group shadow-2xs"
                    >
                      <span className="text-[11px] text-[var(--fg-muted)]">Sales Hotline</span>
                      <span className="text-sm font-bold text-[var(--fg)] group-hover:text-[var(--accent)]">
                        +91 {companyData.contact.phones[1]}
                      </span>
                    </a>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="pt-2 border-t border-[var(--border)] space-y-3">
                  <p className="text-xs font-bold uppercase text-[var(--fg)] tracking-wider">
                    Official Social Channels
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={companyData.contact.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] flex items-center gap-2.5 text-xs font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-all"
                    >
                      <InstagramIcon className="w-4 h-4 text-pink-500" />
                      <span>{companyData.contact.instagram.handle}</span>
                      <ExternalLink className="w-3 h-3 ml-auto text-[var(--fg-muted)]" />
                    </a>

                    <a
                      href={companyData.contact.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] flex items-center gap-2.5 text-xs font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-all"
                    >
                      <FacebookIcon className="w-4 h-4 text-blue-500" />
                      <span>Facebook Profile</span>
                      <ExternalLink className="w-3 h-3 ml-auto text-[var(--fg-muted)]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Styled Interactive Map Embed Container */}
              <div className="mt-6 rounded-3xl overflow-hidden border border-[var(--border)] shadow-md bg-[var(--bg-elevated)]">
                <div className="p-3.5 bg-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="font-bold text-[var(--fg)] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[var(--accent)]" />
                    Showroom Location Map
                  </span>
                  <a
                    href={companyData.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline font-semibold"
                  >
                    Open Full Map
                  </a>
                </div>
                <iframe
                  title="S V Sales Showroom Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14888.750519349896!2d79.083!3d21.105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf210c497339%3A0x6b29f03023e3905e!2sRameshwari%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <Reveal variant="slide-left" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
