import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Enquiry | S V Sales – Rameshwari, Nagpur",
  description:
    "Contact S V Sales at Royal Tower, Rameshwari, Nagpur. Call +91 8055787689 or +91 9767710959 to discuss your bathroom, plumbing, or kitchen project requirements.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <ContactSection />
    </div>
  );
}
