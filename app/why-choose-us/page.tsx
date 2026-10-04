import React from "react";
import type { Metadata } from "next";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Why Choose S V Sales | 18+ Years Experience in Nagpur",
  description:
    "Discover why homeowners, interior designers, architects, and builders trust S V Sales for bathroom, sanitaryware, and piping solutions.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <WhyChooseUs />
    </div>
  );
}
