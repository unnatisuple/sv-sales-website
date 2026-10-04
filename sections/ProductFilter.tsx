"use client";

import React from "react";
import { ProductCategory } from "@/data/categories";
import { cn } from "@/lib/utils";

interface ProductFilterProps {
  categories: ProductCategory[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function ProductFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProductFilterProps) {
  return (
    <div className="relative mb-10 sm:mb-12">
      {/* Scrollable pill container with hidden scrollbar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth snap-x">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              type="button"
              className={cn(
                "snap-start shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 select-none border",
                isSelected
                  ? "bg-[var(--accent)] text-[#1A1813] border-[var(--accent)] shadow-sm scale-105"
                  : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--fg)]"
              )}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
