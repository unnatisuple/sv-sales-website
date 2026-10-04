import React from "react";
import { Hero } from "@/sections/Hero";
import { AboutUs } from "@/sections/AboutUs";
import { VisionMission } from "@/sections/VisionMission";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { BrandPartners } from "@/sections/BrandPartners";
import { Projects } from "@/sections/Projects";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Home / Hero Section */}
      <Hero />

      {/* 2. About Us Section */}
      <AboutUs />

      {/* 3. Vision & Mission Section */}
      <VisionMission />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. Products Section */}
      <ProductShowcase />

      {/* 6. Brands Section */}
      <BrandPartners />

      {/* 7. Projects Section */}
      <Projects />

      {/* 8. Contact Section */}
      <ContactSection />
    </div>
  );
}
