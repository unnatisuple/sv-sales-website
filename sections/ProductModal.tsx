"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Check, Layers, Building, MessageSquare } from "lucide-react";
import { Product } from "@/data/products";
import { brands } from "@/data/brands";
import { Button } from "@/components/ui/Button";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productName: string, categoryId: string) => void;
}

export function ProductModal({ product, onClose, onEnquire }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [product, onClose]);

  if (!product) return null;

  // Find brand information
  const brandInfo = brands.find(
    (b) => b.name.toLowerCase().includes(product.brand.toLowerCase()) || product.brand.toLowerCase().includes(b.id)
  );

  const handleEnquiryClick = () => {
    onEnquire(product.name, product.category);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal / Bottom Sheet Window */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto bg-[var(--bg-elevated)] rounded-t-3xl sm:rounded-3xl border border-[var(--border)] shadow-2xl z-50 flex flex-col animate-in fade-in zoom-in-95 sm:slide-in-from-bottom-6 duration-200"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[var(--bg-elevated)]/95 backdrop-blur-md border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[var(--navy-surface)] text-[var(--navy-fg)]">
              {product.brand}
            </span>
            <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close product details"
            className="p-2 rounded-full border border-[var(--border)] text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Product Image Container */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[var(--bg-muted)] border border-[var(--border)] shadow-inner">
            <Image
              src={product.image}
              alt={`${product.name} - official catalog image`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {/* Title & Full Description */}
          <div>
            <h2
              id="modal-product-title"
              className="text-2xl sm:text-3xl font-extrabold text-[var(--fg)] tracking-tight mb-3"
            >
              {product.name}
            </h2>
            <p className="text-sm sm:text-base text-[var(--fg-muted)] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          {product.features && product.features.length > 0 && (
            <div className="p-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--fg)] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[var(--accent)]" />
                Technical Highlights & Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg-muted)]">
                    <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="p-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--fg)] mb-3 flex items-center gap-2">
                <Building className="w-4 h-4 text-[var(--accent)]" />
                Recommended Project Applications
              </h3>
              <ul className="space-y-2">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Brand Attribution Blurb & Official Manufacturer Reference Link */}
          <div className="p-4 rounded-xl bg-[var(--bg-muted)]/70 border border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <p className="font-semibold text-[var(--fg)]">
                Supplied by S V Sales · Manufactured by {product.brand}
              </p>
              {brandInfo && (
                <p className="text-[var(--fg-muted)]">{brandInfo.description}</p>
              )}
            </div>

            {product.sourceUrl && (
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[var(--accent)] hover:underline shrink-0"
              >
                <span>Official Brand Reference</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-[var(--bg-elevated)] border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[var(--fg-muted)] text-center sm:text-left">
            Need specifications, project quotes or delivery timelines?
          </div>

          <Button
            onClick={handleEnquiryClick}
            variant="secondary"
            size="md"
            icon={MessageSquare}
            className="w-full sm:w-auto"
          >
            Enquire About This Product
          </Button>
        </div>
      </div>
    </div>
  );
}
