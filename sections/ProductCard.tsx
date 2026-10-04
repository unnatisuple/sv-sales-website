"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(product);
        }
      }}
      aria-label={`View details for ${product.name}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 select-none"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-muted)]">
        <Image
          src={product.image}
          alt={`${product.name} by ${product.brand}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-108"
        />
        {/* Brand Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[var(--navy-surface)]/90 backdrop-blur-md text-[var(--navy-fg)] border border-white/15 shadow-sm">
          {product.brand}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
              {product.category.replace("-", " ")}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs sm:text-sm text-[var(--fg-muted)] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Action Link (View Details) */}
        <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-xs font-semibold text-[var(--accent)]">
          <span className="group-hover:underline">View Specifications</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
