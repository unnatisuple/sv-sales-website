import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { companyData } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://svsalesnagpur.in"),
  title: {
    default: "S V Sales – Premium Bathroom, Sanitaryware, Plumbing & Kitchen Solutions in Nagpur",
    template: "%s | S V Sales",
  },
  description:
    "S V Sales is a premier supplier of luxury bathroom fittings, sanitaryware, chimneys, cooktops, Astral pipes, and tile adhesives in Nagpur, India. Serving homeowners, architects, designers, builders, and contractors.",
  keywords: [
    "S V Sales",
    "S V Sales Nagpur",
    "Bath fittings Nagpur",
    "Sanitaryware supplier Nagpur",
    "Jaquar distributor Nagpur",
    "Astral pipes Nagpur",
    "Hindware Nagpur",
    "Vishwas Bhatpalliwar",
    "Complete Bath Solutions",
    "CPVC UPVC pipes Nagpur",
    "Bathroom showroom Rameshwari Nagpur",
  ],
  authors: [{ name: companyData.director.name }],
  openGraph: {
    title: "S V Sales – Complete Bath & Kitchen Solutions Nagpur",
    description:
      "Premier supplier of luxury bathroom fittings, sanitaryware, chimneys, cooktops, Astral pipes, and tile adhesives in Nagpur.",
    url: "https://svsalesnagpur.in",
    siteName: "S V Sales",
    images: [
      {
        url: "/logo/sv-sales-logo.png",
        width: 800,
        height: 600,
        alt: "S V Sales Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S V Sales – Complete Bath & Kitchen Solutions Nagpur",
    description:
      "Authorized distributor for Jaquar, Astral Pipes, Hindware, JSW, and Soncera in Nagpur, India.",
    images: ["/logo/sv-sales-logo.png"],
  },
  icons: {
    icon: "/logo/sv-sales-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: companyData.name,
    legalName: companyData.legalName,
    description: companyData.aboutUs,
    url: "https://svsalesnagpur.in",
    telephone: [`+91${companyData.contact.phones[0]}`, `+91${companyData.contact.phones[1]}`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Royal Tower, Ramteke Nagar, Beltarodi Road, Rameshwari",
      addressLocality: "Nagpur",
      postalCode: "440027",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: companyData.director.name,
      jobTitle: companyData.director.role,
    },
    sameAs: [
      companyData.contact.instagram.url,
      companyData.contact.facebook.url,
    ],
    areaServed: "Nagpur, Maharashtra, India",
    priceRange: "$$",
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
