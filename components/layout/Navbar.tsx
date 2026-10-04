"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Vision & Mission", href: "/#vision-mission" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Products", href: "/#products" },
  { label: "Brands", href: "/#brands" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);

      // Section spy for active indicator
      const sections = [
        "home",
        "about",
        "vision-mission",
        "why-choose-us",
        "products",
        "brands",
        "projects",
        "contact",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[var(--bg-elevated)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-xs py-2 sm:py-2.5"
            : "bg-transparent py-3 sm:py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 shrink-0"
          >
            <div className="relative h-14 w-36 sm:h-16 sm:w-44 md:h-18 md:w-48 lg:h-20 lg:w-52 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/logo/sv-sales-logo.png"
                alt="S V SALES - Complete Bath Solutions"
                fill
                priority
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 192px, 220px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("/#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap",
                    isActive
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-muted)]/60"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[var(--accent)] rounded-full animate-in fade-in duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <ThemeToggle />

            <div className="hidden sm:block">
              <Button href="/#contact" variant="primary" size="sm" showArrow>
                Contact Us
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              aria-label="Open mobile menu"
              className="lg:hidden p-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer shadow-2xs"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
