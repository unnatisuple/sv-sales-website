"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { companyData } from "@/data/company";
import { categories } from "@/data/categories";

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Highlight top 8 popular categories for footer column
  const topCategories = categories.filter((c) => c.id !== "all").slice(0, 8);

  return (
    <footer className="bg-[var(--navy-surface)] text-[var(--navy-fg)] border-t border-[var(--border)] pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-20 w-52 sm:h-24 sm:w-60">
                <Image
                  src="/logo/sv-sales-logo.png"
                  alt="S V Sales Logo"
                  fill
                  sizes="240px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              {companyData.aboutUs}
            </p>

            <div className="pt-2">
              <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wider mb-2">
                Serving Nagpur & Beyond
              </p>
              <p className="text-xs text-gray-400">
                Homeowners · Interior Designers · Builders · Architects · Contractors
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/#home" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[var(--accent)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#vision-mission" className="hover:text-[var(--accent)] transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-[var(--accent)] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-[var(--accent)] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#brands" className="hover:text-[var(--accent)] transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[var(--accent)] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--accent)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {topCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/#products`}
                    className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-4">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <a
                  href={companyData.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors leading-snug"
                >
                  {companyData.contact.address}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${companyData.contact.phones[0]}`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    +91 {companyData.contact.phones[0]}
                  </a>
                  <a
                    href={`tel:${companyData.contact.phones[1]}`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    +91 {companyData.contact.phones[1]}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={companyData.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="p-2 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-[#1A1813] transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.contact.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page"
                  className="p-2 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-[#1A1813] transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} {companyData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Nagpur, Maharashtra, India</span>
            <span>Complete Bath Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
