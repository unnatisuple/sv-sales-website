import React from "react";
import type { Metadata } from "next";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { BrandPartners } from "@/sections/BrandPartners";

export const metadata: Metadata = {
  title: "Products Catalogue | S V Sales – Faucets, Sanitaryware & Piping",
  description:
    "Browse our complete catalog of Jaquar and Astral solutions: faucets, sanitaryware, showers, bathtubs, CPVC, UPVC, SWR, and water tanks.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <ProductShowcase />
      <BrandPartners />
    </div>
  );
}
