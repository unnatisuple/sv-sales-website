import React from "react";
import type { Metadata } from "next";
import { BrandPartners } from "@/sections/BrandPartners";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Brand Partners | S V Sales – Jaquar, Astral, Hindware, JSW & More",
  description:
    "Explore our authorized brand partnerships including Jaquar, Astral Pipes, JSW, Atul, Hindware, Soncera, Essco, and Artize.",
};

export default function BrandsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <BrandPartners />
      <WhyChooseUs />
    </div>
  );
}
