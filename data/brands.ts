export interface Brand {
  id: string;
  name: string;
  logo: string;
  url: string;
  categorySummary: string;
  description: string;
}

export const brands: Brand[] = [
  {
    id: "jaquar",
    name: "Jaquar",
    logo: "/images/brands/jaquar.jpg",
    url: "https://www.jaquar.com/en/jaquar-products",
    categorySummary: "Complete Bath Solutions, Faucets, Sanitaryware & Showers",
    description: "Global leader in complete bathroom solutions providing premium faucets, ceramics, showers, bathtubs, and wellness systems.",
  },
  {
    id: "astral-pipes",
    name: "Astral Pipes",
    logo: "/images/brands/astral-pipes.png",
    url: "https://www.astralpipes.com/catalogue/",
    categorySummary: "CPVC, UPVC, SWR, FOAMCORE, SILENCO, PVC & Water Tanks",
    description: "India's premier piping solutions manufacturer pioneering CPVC, acoustic drainage (SILENCO), foamcore, and water storage tanks.",
  },
  {
    id: "artize",
    name: "Artize",
    logo: "/images/brands/artize.png",
    url: "https://www.artize.com/",
    categorySummary: "Luxury Faucets, Wellness & Architectural Bathware",
    description: "Luxury brand by Jaquar Group conceived to cater to connoisseurs of fine design, exquisite craftsmanship, and wellness.",
  },
  {
    id: "essco",
    name: "Essco (by Jaquar)",
    logo: "/images/brands/essco.jpg",
    url: "https://www.jaquar.com/en/essco",
    categorySummary: "Value Bath Fittings & Sanitaryware",
    description: "Pioneer of branded bath fittings in India from Jaquar Group, offering trusted quality, reliability, and accessible luxury.",
  },
  {
    id: "hindware",
    name: "Hindware (Smart Appliances)",
    logo: "/images/brands/hindware.png",
    url: "https://hindware.com/",
    categorySummary: "Chimneys, Cooktops, Water Heaters & Kitchen Appliances",
    description: "Leading consumer lifestyle brand delivering smart kitchen chimneys, auto-clean cooktops, food waste disposers, and water heaters.",
  },
  {
    id: "jsw",
    name: "JSW",
    logo: "/images/brands/jsw.jpg",
    url: "https://www.jsw.in/",
    categorySummary: "Cement, Structural Steel & Construction Materials",
    description: "Leading Indian conglomerate delivering advanced building materials, steel, and high-performance cement for durable construction.",
  },
  {
    id: "atul",
    name: "Atul",
    logo: "/images/brands/atul.png",
    url: "https://www.atul.co.in/",
    categorySummary: "Tile Adhesives, Grout, Epoxy & Construction Chemicals",
    description: "Specialty chemical and materials enterprise providing advanced epoxy systems, tile adhesives, and grouts for modern architecture.",
  },
  {
    id: "soncera",
    name: "Soncera (Bathware)",
    logo: "/images/brands/soncera.png",
    url: "https://www.soncera.com/",
    categorySummary: "Ceramic Sanitaryware & Wash Basins",
    description: "Innovative manufacturer of contemporary ceramic sanitaryware, designer table-top basins, and water closets.",
  },
  {
    id: "jk-industries",
    name: "JK Industries",
    logo: "/images/brands/jk-industries.png",
    url: "https://jkindustries.in/",
    categorySummary: "Manhole Covers & Infrastructure Drainage Solutions",
    description: "Specialized manufacturer of heavy-duty and decorative manhole covers and drainage infrastructure fittings.",
  },
  {
    id: "flortek",
    name: "Flortek",
    logo: "/images/brands/flortek.jpg",
    url: "https://www.flortek.in/",
    categorySummary: "Floor Care & Coating Solutions",
    description: "Provider of specialized floor care, surface protection, and architectural tile finishing solutions.",
  },
];
