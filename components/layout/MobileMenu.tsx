"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Phone, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[var(--bg-elevated)] border-l border-[var(--border)] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src="/logo/sv-sales-logo.png"
              alt="S V Sales Logo"
              width={150}
              height={65}
              className="object-contain h-13 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              type="button"
              aria-label="Close menu"
              className="p-2 rounded-full border border-[var(--border)] text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-medium text-[var(--fg)] hover:text-[var(--accent)] hover:bg-[var(--bg-muted)] transition-colors group"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-[var(--border)] bg-[var(--bg)] space-y-4">
          <div className="flex flex-col gap-1.5 text-xs text-[var(--fg-muted)]">
            <span className="font-semibold text-[var(--fg)]">Direct Enquiry:</span>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
              <a href={`tel:${companyData.contact.phones[0]}`} className="hover:text-[var(--accent)]">
                +91 {companyData.contact.phones[0]}
              </a>
              <span>·</span>
              <a href={`tel:${companyData.contact.phones[1]}`} className="hover:text-[var(--accent)]">
                +91 {companyData.contact.phones[1]}
              </a>
            </div>
          </div>

          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
