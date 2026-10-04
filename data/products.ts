/**
 * S V SALES - Product Catalogue Data
 * 
 * NOTE ON ASSETS:
 * Image paths reference authentic assets extracted directly from the S V Sales company presentation
 * or locally hosted high-resolution catalog visuals. Replace or expand these paths with locally hosted,
 * rights-cleared assets sourced directly from or licensed for use alongside authorized brand partners.
 * 
 * S V Sales is an authorized supplier/distributor, not a manufacturer. All products are manufactured
 * by respective partner brands as indicated in the brand field.
 */

export interface Product {
  id: string;
  name: string;
  category: string;      // Category ID matching data/categories.ts
  brand: string;         // Manufacturer name
  brandLogo?: string;    // Path to brand logo asset
  description: string;
  features: string[];
  applications: string[];
  image: string;
  gallery?: string[];
  sourceUrl?: string;    // Official manufacturer reference URL
}

export const products: Product[] = [
  // 1. Faucets
  {
    id: "faucet-single-lever-basin-mixer",
    name: "Single Lever Basin Mixer",
    category: "faucets",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Premium counter-top single-lever basin mixer featuring advanced ceramic disc cartridge technology for smooth operation and precise temperature control.",
    features: [
      "High-grade brass body with multi-layer chrome finish",
      "Durable ceramic disc cartridge tested for up to 500,000 cycles",
      "Soft water flow aerator reducing splashing and water wastage",
      "Flexible braided stainless steel inlet hoses included",
    ],
    applications: [
      "Master bathrooms & powder rooms in residential villas",
      "Luxury hotel guest rooms & executive suites",
      "Commercial office washrooms",
    ],
    image: "/images/products/faucets.jpeg",
    sourceUrl: "https://www.jaquar.com/en/faucets",
  },
  {
    id: "faucet-wall-mounted-sink-cock",
    name: "Wall Mounted Sink Cock",
    category: "faucets",
    brand: "Essco (by Jaquar)",
    brandLogo: "/images/brands/essco.jpg",
    description: "Ergonomic wall-mounted swivel kitchen sink cock with high-arch spout providing maximum clearance for cookware cleaning.",
    features: [
      "360-degree swivel spout for versatile sink basin coverage",
      "Corrosion-resistant chrome plated solid brass build",
      "Quarter-turn ceramic mechanism for instant shut-off",
      "Standard wall-flange connection for simple maintenance",
    ],
    applications: [
      "Residential modular kitchens & utility spaces",
      "Commercial pantries & food preparation areas",
      "Apartment kitchen renovations",
    ],
    image: "/images/products/faucets.jpeg",
    sourceUrl: "https://www.jaquar.com/en/essco",
  },

  // 2. Sanitaryware
  {
    id: "sanitaryware-rimless-wall-hung-wc",
    name: "Rimless Wall Hung WC",
    category: "sanitaryware",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Modern wall-hung ceramic water closet engineered with hygienic rimless flushing technology and soft-closing slim seat cover.",
    features: [
      "Hygienic rimless bowl design preventing bacterial buildup",
      "Dual-flush water conservation system (3L / 4.5L)",
      "Vitreous china construction with anti-stain glazed surface",
      "Durable UF soft-close detachable seat cover",
    ],
    applications: [
      "Contemporary luxury residential bathrooms",
      "Boutique hospitality & premium corporate washrooms",
      "Modern apartment master suites",
    ],
    image: "/images/products/sanitaryware.jpeg",
    sourceUrl: "https://www.jaquar.com/en/jaquar-products",
  },
  {
    id: "sanitaryware-table-top-art-basin",
    name: "Designer Counter-Top Art Basin",
    category: "sanitaryware",
    brand: "Soncera (Bathware)",
    brandLogo: "/images/brands/soncera.png",
    description: "Artistic ceramic table-top wash basin with sleek curved contours and glossy stain-resistant glaze finish.",
    features: [
      "Thin-rim design maximizing bowl depth and elegance",
      "High-density vitreous china resistant to chipping",
      "Self-cleaning glaze preventing dirt and lime-scale deposits",
      "Universal waste hole compatibility",
    ],
    applications: [
      "Designer powder rooms & guest restrooms",
      "Modern luxury apartments & penthouses",
      "Restaurant & club restrooms",
    ],
    image: "/images/products/sanitaryware.jpeg",
    sourceUrl: "https://www.soncera.com/",
  },

  // 3. Showers
  {
    id: "shower-overhead-rain-shower",
    name: "Architectural Overhead Rain Shower",
    category: "showers",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Ceiling or wall-mountable multi-nozzle overhead rain shower delivering an enveloping, gentle water cascade for revitalizing wellness bathing.",
    features: [
      "Rubit easy-clean silicone nozzles preventing lime-scale clogging",
      "Air-injection technology infusing air for fuller water droplets",
      "Ultra-slim polished stainless steel profile",
      "Consistent pressure compensation system",
    ],
    applications: [
      "Residential master walk-in shower enclosures",
      "Wellness spas & luxury hotel suites",
      "Modern villa bathroom renovations",
    ],
    image: "/images/products/showers.jpeg",
    sourceUrl: "https://www.jaquar.com/en/jaquar-products",
  },

  // 4. Bath Tubs
  {
    id: "bathtub-freestanding-acrylic",
    name: "Freestanding Ergonomic Bath Tub",
    category: "bath-tubs",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Sculptural freestanding seamless acrylic bath tub designed for ergonomic lumbar support, effortless relaxation, and architectural distinction.",
    features: [
      "Seamless sanitary-grade Lucite acrylic construction",
      "Excellent thermal insulation retaining water heat longer",
      "Integrated pop-up waste and overflow drain system",
      "Reinforced base with adjustable levelling feet",
    ],
    applications: [
      "Spacious master bathrooms in private residences & villas",
      "Presidential suites & luxury resort villas",
      "Spa retreat suites",
    ],
    image: "/images/products/bath-tubs.jpeg",
    sourceUrl: "https://www.jaquar.com/en/jaquar-products",
  },

  // 5. Shower Enclosures
  {
    id: "shower-enclosure-frameless-glass",
    name: "Frameless Toughened Glass Enclosure",
    category: "shower-enclosures",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Precision-engineered frameless glass shower enclosure with tempered safety glass and solid brass architectural hardware.",
    features: [
      "8mm/10mm toughened safety glass with anti-shatter film",
      "Water-repellent hydrophobic nanotech glass coating",
      "Rust-proof brass hinges and magnetic water seals",
      "Customizable configurations for corner or niche spaces",
    ],
    applications: [
      "Dry-and-wet segregated modern residential bathrooms",
      "Hospitality guest room showers",
      "High-end condominium developments",
    ],
    image: "/images/products/shower-enclosures.jpeg",
    sourceUrl: "https://www.jaquar.com/en/jaquar-products",
  },

  // 6. Diverters
  {
    id: "diverter-high-flow-concealed",
    name: "Concealed High-Flow Bath & Shower Diverter",
    category: "diverters",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Concealed single-lever high-flow diverter body with intuitive control plate for effortless switching between overhead shower, hand shower, and spout.",
    features: [
      "Solid forged brass concealed body for leak-free in-wall longevity",
      "Smooth cartridge mechanism balancing fluctuations in water flow",
      "Polished decorative trim plate with laser-etched indicators",
      "High flow rate suited for multi-outlet shower systems",
    ],
    applications: [
      "In-wall concealed bathroom plumbing installations",
      "Multi-point shower cubicles in residences and hotels",
      "Premium construction developments",
    ],
    image: "/images/products/diverters.jpeg",
    sourceUrl: "https://www.jaquar.com/en/faucets",
  },

  // 7. Shower Panels
  {
    id: "shower-panel-multi-jet-column",
    name: "Multi-Function Hydrotherapy Shower Panel",
    category: "shower-panels",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "All-in-one stainless steel vertical shower panel integrating overhead rainfall, body massage hydro-jets, and handheld shower wand.",
    features: [
      "Brushed stainless steel anti-fingerprint surface",
      "Adjustable angle body massage jets for tension relief",
      "Thermostatic mixer valve preventing accidental scalding",
      "Integrated multi-function hand shower with kink-free hose",
    ],
    applications: [
      "Renovation projects retrofitting existing shower walls",
      "Private wellness bathrooms and gym facilities",
      "Compact master bathrooms seeking multi-spray flexibility",
    ],
    image: "/images/products/shower-panels.jpeg",
    sourceUrl: "https://www.jaquar.com/en/jaquar-products",
  },

  // 8. Clouds
  {
    id: "clouds-chromotherapy-ceiling-shower",
    name: "Cloud Ceiling Shower with Chromotherapy",
    category: "clouds",
    brand: "Artize",
    brandLogo: "/images/brands/artize.png",
    description: "Flush-mount architectural ceiling shower delivering rain, cascade, and mist patterns with integrated ambient chromotherapy LED mood lighting.",
    features: [
      "Flush ceiling architectural installation for minimalist aesthetic",
      "Multiple spray modes: Tropical Rain, Gentle Mist, and Water Curtain",
      "Synchronized mood LED chromotherapy controlled via waterproof interface",
      "Precision-crafted stainless steel mirror finish plate",
    ],
    applications: [
      "Ultra-luxury master suites and bespoke private spas",
      "Five-star hospitality wellness suites",
      "Architectural residential projects",
    ],
    image: "/images/products/clouds.jpeg",
    sourceUrl: "https://www.artize.com/",
  },

  // 9. Flushing Systems
  {
    id: "flushing-concealed-cistern-dual-flush",
    name: "Concealed Dual-Flush In-Wall Cistern",
    category: "flushing-systems",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Heavy-duty concealed in-wall cistern tank with powder-coated mounting frame and dual-flush actuator plate compatibility.",
    features: [
      "Blow-molded leak-proof HDPE tank with condensation insulation",
      "Tool-free internal mechanism servicing through the actuator plate window",
      "Water-saving dual flush (adjustable 3L / 6L or 2L / 4L)",
      "Tested to support up to 400 kg wall-hung toilet load",
    ],
    applications: [
      "Dry-wall and solid-wall concealed toilet installations",
      "Modern minimalist bathrooms with wall-hung sanitaryware",
      "Commercial office washrooms and multi-family residential towers",
    ],
    image: "/images/products/flushing-systems.jpeg",
    sourceUrl: "https://www.jaquar.com/en/jaquar-products",
  },

  // 10. Water Heaters
  {
    id: "water-heater-storage-geyser",
    name: "Glassline Storage Water Heater",
    category: "water-heaters",
    brand: "Hindware (Smart Appliances)",
    brandLogo: "/images/brands/hindware.png",
    description: "Energy-efficient storage electric water heater with titanium glasslined inner tank and intelligent digital temperature display.",
    features: [
      "Titanium core glass-line inner tank preventing rust in hard water",
      "Incoloy 800 heating element for fast and durable heating",
      "High-density PUF insulation minimizing thermal heat loss",
      "Multi-function safety valve rated up to 8 bar pressure for high-rise buildings",
    ],
    applications: [
      "High-rise residential apartments and multi-story bungalows",
      "Cold-water climate continuous heating requirements",
      "Master bathrooms, guest bathrooms, and kitchens",
    ],
    image: "/images/products/water-heaters.jpeg",
    sourceUrl: "https://hindware.com/",
  },

  // 11. Accessories
  {
    id: "accessories-bath-hardware-collection",
    name: "Solid Brass Bathroom Accessories Suite",
    category: "accessories",
    brand: "Jaquar",
    brandLogo: "/images/brands/jaquar.jpg",
    description: "Complete coordinated brass hardware set including towel bar, robe hook, tumbler holder, soap dish, and toilet paper dispenser.",
    features: [
      "100% solid brass substrate with durable multi-layer chrome plating",
      "Concealed screw wall-mounting hardware included",
      "Rust and corrosion resistant even in high humidity conditions",
      "Uniform architectural silhouette complementing modern faucets",
    ],
    applications: [
      "Complete residential bathroom hardware fit-outs",
      "Hotel & service apartment washrooms",
      "Commercial washroom renovations",
    ],
    image: "/images/products/accessories.jpeg",
    sourceUrl: "https://www.jaquar.com/en/accessories-range",
  },

  // 12. CPVC
  {
    id: "cpvc-pro-piping-system",
    name: "CPVC PRO Hot & Cold Water Piping",
    category: "cpvc",
    brand: "Astral Pipes",
    brandLogo: "/images/brands/astral-pipes.png",
    description: "Industry-standard chlorinated polyvinyl chloride (CPVC) pipes and fittings engineered for potable hot and cold water distribution up to 93°C.",
    features: [
      "Certified safe for drinking water (potable) with NSF-61 compliance",
      "Corrosion, scale, and chlorine resistant throughout building lifecycle",
      "Low thermal conductivity reducing insulation requirements",
      "Easy solvent weld jointing with Astral fast-curing solvent cement",
    ],
    applications: [
      "Residential hot and cold water plumbing distribution",
      "Commercial hospitality & healthcare potable water systems",
      "Industrial chemical transport within rated temperatures",
    ],
    image: "/images/products/cpvc.jpeg",
    sourceUrl: "https://www.astralpipes.com/catalogue/",
  },

  // 13. UPVC
  {
    id: "upvc-aquasafe-plumbing-system",
    name: "Aquasafe UPVC Plumbing Pipes",
    category: "upvc",
    brand: "Astral Pipes",
    brandLogo: "/images/brands/astral-pipes.png",
    description: "High-tensile unplasticized PVC pressure pipes for cold water distribution and ring-main systems in residential and commercial infrastructure.",
    features: [
      "UV-stabilized formulation suitable for outdoor sun exposure",
      "Smooth internal bore minimizing friction loss and pressure drops",
      "Chemical resistance to aggressive soils and water additives",
      "Cost-effective durable alternative to conventional metallic piping",
    ],
    applications: [
      "Cold water supply lines in multi-story residential buildings",
      "Water distribution networks in schools, offices, and hospitals",
      "Swimming pool circulation and water filtration lines",
    ],
    image: "/images/products/upvc.jpeg",
    sourceUrl: "https://www.astralpipes.com/catalogue/",
  },

  // 14. SWR
  {
    id: "swr-drainage-drainmaster",
    name: "DrainMaster SWR Drainage Pipes & Fittings",
    category: "swr",
    brand: "Astral Pipes",
    brandLogo: "/images/brands/astral-pipes.png",
    description: "Soil, Waste & Rainwater (SWR) drainage piping system equipped with rubber ring joints ensuring 100% leak-proof sanitation discharge.",
    features: [
      "Push-fit rubber ring jointing allowing thermal expansion movement",
      "Resistant to household detergents, greases, and harsh drain chemicals",
      "Smooth mirror finish interior preventing solid waste accumulation",
      "Lightweight and quick to install compared to cast iron systems",
    ],
    applications: [
      "Soil and waste drainage stacks in multi-story buildings",
      "Rainwater harvesting collection downpipes",
      "Ventilation pipe networks in residential and commercial complexes",
    ],
    image: "/images/products/swr.png",
    sourceUrl: "https://www.astralpipes.com/catalogue/",
  },

  // 15. FOAMCORE
  {
    id: "foamcore-underground-drainage",
    name: "Foamcore Underground Drainage System",
    category: "foamcore",
    brand: "Astral Pipes",
    brandLogo: "/images/brands/astral-pipes.png",
    description: "Multi-layer structured-wall underground drainage pipes featuring an outer/inner solid skin with an expanded foamed core for structural rigidity.",
    features: [
      "High ring stiffness absorbing heavy underground soil loads and vehicular traffic",
      "Lighter weight than solid wall pipes with equal load-bearing capacity",
      "Elastomeric rubber seal socket joints preventing root penetration",
      "Resistant to corrosive sewer gases including hydrogen sulfide",
    ],
    applications: [
      "Underground municipal and township sewer lines",
      "Building exterior storm drainage mains",
      "Industrial estate wastewater collector networks",
    ],
    image: "/images/products/foamcore.jpeg",
    sourceUrl: "https://www.astralpipes.com/catalogue/",
  },

  // 16. SILENCO
  {
    id: "silenco-acoustic-drainage",
    name: "Silenco Low-Noise Acoustic Drainage",
    category: "silenco",
    brand: "Astral Pipes",
    brandLogo: "/images/brands/astral-pipes.png",
    description: "Triple-layer mineral-reinforced acoustic drainage pipe engineered to absorb sound waves, preventing flushing noise transmission through walls.",
    features: [
      "Mineral-reinforced polypropylene core dampening airborne & structure-borne noise",
      "Meets stringent European noise control standards (DIN EN 14366)",
      "High temperature resistance up to 95°C for domestic wastewater",
      "Precision-molded acoustic push-fit fittings with integrated rubber gaskets",
    ],
    applications: [
      "Luxury high-rise residential towers and condominiums",
      "Five-star hotels, hospitals, and wellness resorts",
      "Sound-sensitive auditoriums, libraries, and recording studios",
    ],
    image: "/images/products/silenco.jpeg",
    sourceUrl: "https://www.astralpipes.com/catalogue/",
  },

  // 17. PVC
  {
    id: "pvc-conduit-and-pressure-pipes",
    name: "Heavy Duty PVC Conduit & Pressure Pipes",
    category: "pvc",
    brand: "Astral Pipes",
    brandLogo: "/images/brands/astral-pipes.png",
    description: "Rigid polyvinyl chloride piping engineered for electrical wire conduit protection and industrial fluid conveying under pressure.",
    features: [
      "High dielectric strength providing safe electrical insulation",
      "Fire-retardant self-extinguishing polymer formulation",
      "Impact resistant under masonry embedding and slab casting",
      "Available in light, medium, and heavy mechanical duty classes",
    ],
    applications: [
      "Concealed electrical conduit wiring in concrete slabs and brick walls",
      "Surface mounted wiring in commercial and industrial structures",
      "Irrigation and agricultural water transfer",
    ],
    image: "/images/products/pvc.jpeg",
    sourceUrl: "https://www.astralpipes.com/catalogue/",
  },

  // 18. Water Tanks
  {
    id: "water-tank-anti-bacterial-multishield",
    name: "Multi-Layer Anti-Bacterial Water Tank",
    category: "water-tanks",
    brand: "Astral Pipes",
    brandLogo: "/images/brands/astral-pipes.png",
    description: "Multi-layer rotationally molded potable water storage tank with anti-bacterial inner shield and UV-reflective external protection.",
    features: [
      "100% virgin food-grade polymer safe for drinking water storage",
      "Anti-bacterial inner silver-ion layer preventing microbe and algae growth",
      "UV-stabilized sun-shield outer barrier preventing sunlight degradation",
      "Extra-strong threaded lid and heavy-duty ribbed structural body",
    ],
    applications: [
      "Rooftop domestic water storage for independent houses & apartments",
      "Commercial building emergency water reserves",
      "Hospital and educational campus overhead tanks",
    ],
    image: "/images/products/water-tanks.png",
    sourceUrl: "https://www.astralpipes.com/catalogue/",
  },
];
