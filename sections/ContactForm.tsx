"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { categories } from "@/data/categories";

interface FormState {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    category: "faucets",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Listen for pre-fill events from ProductModal
  useEffect(() => {
    const handleProductEnquiry = (e: Event) => {
      const customEvent = e as CustomEvent<{ productName: string; categoryId: string }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          requirement: `Inquiry regarding ${customEvent.detail.productName}`,
          category: customEvent.detail.categoryId || prev.category,
          message: `Hello S V Sales team, I am interested in sourcing ${customEvent.detail.productName}. Please share technical specifications, availability, and bulk pricing for my project.`,
        }));
      }
    };

    window.addEventListener("sv-enquire-product", handleProductEnquiry);
    return () => window.removeEventListener("sv-enquire-product", handleProductEnquiry);
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      /**
       * BACKEND INTEGRATION NOTE:
       * Replace this simulation with your actual API endpoint, EmailJS, Resend, or CRM webhook:
       * 
       * await fetch('/api/enquiry', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(formData),
       * });
       */
      console.log("Submitting S V Sales enquiry payload:", formData);

      // Simulate API network latency
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        requirement: "",
        category: "faucets",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Failed to submit enquiry:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-md text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 mx-auto rounded-full bg-[var(--status-completed-bg)] text-[var(--status-completed-fg)] flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--fg)]">
          Enquiry Received Successfully
        </h3>
        <p className="text-sm text-[var(--fg-muted)] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to <span className="font-semibold text-[var(--fg)]">S V SALES</span>.
          Our sales desk will review your requirements and contact you within 24 business hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          type="button"
          className="mt-4 px-6 py-2.5 rounded-full bg-[var(--accent)] text-[#1A1813] text-sm font-bold hover:bg-[var(--accent-hover)] transition-all cursor-pointer shadow-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  const validCategories = categories.filter((c) => c.id !== "all");

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-md space-y-5"
    >
      <div className="border-b border-[var(--border)] pb-4 mb-2">
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)]">
          Request Project Consultation & Quote
        </h3>
        <p className="text-xs sm:text-sm text-[var(--fg-muted)] mt-1">
          Direct enquiry to S V Sales technical sales team for residential, commercial & plumbing supplies.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label
          htmlFor="enquiry-name"
          className="block text-xs font-bold uppercase tracking-wider text-[var(--fg)] mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="enquiry-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Rajesh Sharma"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--fg)] placeholder-[var(--fg-subtle)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Phone & Email (2 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--fg)] mb-1.5"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--fg)] placeholder-[var(--fg-subtle)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--fg)] mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--fg)] placeholder-[var(--fg-subtle)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Requirement & Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="enquiry-requirement"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--fg)] mb-1.5"
          >
            Project / Requirement Type
          </label>
          <input
            id="enquiry-requirement"
            type="text"
            value={formData.requirement}
            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            placeholder="e.g. Villa Renovation, High-Rise Piping"
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--fg)] placeholder-[var(--fg-subtle)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-category"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--fg)] mb-1.5"
          >
            Primary Category of Interest
          </label>
          <select
            id="enquiry-category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--fg)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors cursor-pointer"
          >
            {validCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.group})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="enquiry-message"
          className="block text-xs font-bold uppercase tracking-wider text-[var(--fg)] mb-1.5"
        >
          Message / Specific Quantities or Specs <span className="text-red-500">*</span>
        </label>
        <textarea
          id="enquiry-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your requirements, project site location, or questions..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--fg)] placeholder-[var(--fg-subtle)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-y"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-full bg-[var(--navy-surface)] text-[var(--navy-fg)] font-bold text-sm hover:bg-[var(--navy-surface-light)] border border-transparent shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[var(--accent)]" />
            <span>Submitting Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-[var(--accent)]" />
            <span>Send Enquiry</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-[var(--fg-muted)] text-center">
        Zero obligation consultation · Strictly informative supplier showcase · No online transactions
      </p>
    </form>
  );
}
