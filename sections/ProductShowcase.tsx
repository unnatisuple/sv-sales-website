"use client";

import React, { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductFilter } from "./ProductFilter";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { products, Product } from "@/data/products";
import { categories } from "@/data/categories";

interface ProductShowcaseProps {
  initialCategory?: string;
}

export function ProductShowcase({ initialCategory = "all" }: ProductShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleEnquire = (productName: string, categoryId: string) => {
    // Custom event to fill the contact form
    if (typeof window !== "undefined") {
      const event = new CustomEvent("sv-enquire-product", {
        detail: { productName, categoryId },
      });
      window.dispatchEvent(event);

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-[var(--bg)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Our Product Range"
            title="Complete Bath, Kitchen & Infrastructure Solutions"
            subtitle="Explore our comprehensive collection of premium bath fittings, sanitaryware, showers, wellness enclosures, and engineering-grade plumbing systems."
          />
        </Reveal>

        {/* Filter Bar */}
        <Reveal variant="fade-up" delay={0.1}>
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setActiveProduct}
            />
          ))}
        </div>

        {/* Empty State Fallback (if any) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] max-w-md mx-auto">
            <p className="text-base font-semibold text-[var(--fg)]">
              No products found in this category.
            </p>
            <p className="text-xs text-[var(--fg-muted)] mt-1">
              Contact our sales desk for custom sourcing and catalogue inquiries.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="mt-4 px-4 py-2 rounded-full bg-[var(--accent)] text-[#1A1813] text-xs font-bold"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Product Detail Modal */}
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onEnquire={handleEnquire}
        />
      </div>
    </section>
  );
}
