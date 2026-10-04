import React from "react";
import type { Metadata } from "next";
import { Projects } from "@/sections/Projects";
import { ContactSection } from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Projects Supplied | S V Sales – Nagpur Real Estate Developments",
  description:
    "Discover residential and commercial real-estate projects supplied by S V Sales in Nagpur, including Jayanti Nagari, Mahalaxmi Floret, and Sonnesta.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <Projects />
      <ContactSection />
    </div>
  );
}
