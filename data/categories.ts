export interface ProductCategory {
  id: string;
  name: string;
  group: "Bathroom & Kitchen" | "Plumbing & Drainage" | "All";
  description?: string;
  image?: string;
}

export const categories: ProductCategory[] = [
  { id: "all", name: "All", group: "All" },
  { id: "faucets", name: "Faucets", group: "Bathroom & Kitchen", image: "/images/products/faucets.jpeg" },
  { id: "sanitaryware", name: "Sanitaryware", group: "Bathroom & Kitchen", image: "/images/products/sanitaryware.jpeg" },
  { id: "showers", name: "Showers", group: "Bathroom & Kitchen", image: "/images/products/showers.jpeg" },
  { id: "bath-tubs", name: "Bath Tubs", group: "Bathroom & Kitchen", image: "/images/products/bath-tubs.jpeg" },
  { id: "shower-enclosures", name: "Shower Enclosures", group: "Bathroom & Kitchen", image: "/images/products/shower-enclosures.jpeg" },
  { id: "diverters", name: "Diverters", group: "Bathroom & Kitchen", image: "/images/products/diverters.jpeg" },
  { id: "shower-panels", name: "Shower Panels", group: "Bathroom & Kitchen", image: "/images/products/shower-panels.jpeg" },
  { id: "clouds", name: "Clouds", group: "Bathroom & Kitchen", image: "/images/products/clouds.jpeg" },
  { id: "flushing-systems", name: "Flushing Systems", group: "Bathroom & Kitchen", image: "/images/products/flushing-systems.jpeg" },
  { id: "water-heaters", name: "Water Heaters", group: "Bathroom & Kitchen", image: "/images/products/water-heaters.jpeg" },
  { id: "accessories", name: "Accessories", group: "Bathroom & Kitchen", image: "/images/products/accessories.jpeg" },
  { id: "cpvc", name: "CPVC", group: "Plumbing & Drainage", image: "/images/products/cpvc.jpeg" },
  { id: "upvc", name: "UPVC", group: "Plumbing & Drainage", image: "/images/products/upvc.jpeg" },
  { id: "swr", name: "SWR", group: "Plumbing & Drainage", image: "/images/products/swr.png" },
  { id: "foamcore", name: "FOAMCORE", group: "Plumbing & Drainage", image: "/images/products/foamcore.jpeg" },
  { id: "pvc", name: "PVC", group: "Plumbing & Drainage", image: "/images/products/pvc.jpeg" },
  { id: "water-tanks", name: "Water Tanks", group: "Plumbing & Drainage", image: "/images/products/water-tanks.png" },
  { id: "silenco", name: "SILENCO", group: "Plumbing & Drainage", image: "/images/products/silenco.jpeg" },
];
