import React from "react";
import type { Metadata } from "next";
import { AboutUs } from "@/sections/AboutUs";

export const metadata: Metadata = {
  title: "About Us & Leadership | S V Sales – Complete Bath Solutions",
  description:
    "Learn about S V Sales Nagpur, founded by Director Vishwas Bhatpalliwar with 18+ years experience supplying premium bathroom and kitchen solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <AboutUs />
    </div>
  );
}
