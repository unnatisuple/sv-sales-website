export interface Project {
  id: string;
  name: string;
  status: "Completed" | "Running";
  image: string;
  location?: string;
  description?: string;
  productsSupplied?: string[];
  note?: string;
}

export const projects: Project[] = [
  // Completed Projects
  {
    id: "jayanti-nagari",
    name: "Jayanti Nagari",
    status: "Completed",
    image: "/images/projects/jayanti-nagari.jpg",
    location: "",
    description: "",
    productsSupplied: [],
  },
  {
    id: "mahalaxmi-floret",
    name: "Mahalaxmi Floret",
    status: "Completed",
    image: "/images/projects/mahalaxmi-floret.jpg",
    location: "",
    description: "",
    productsSupplied: [],
  },
  {
    id: "sommet-royal-dream-city",
    name: "Sommet – Royal Dream City",
    status: "Completed",
    image: "/images/projects/royal-dream-city.jpg",
    location: "",
    description: "",
    productsSupplied: [],
    note: "Presented as Sommet and Royal Dream City development",
  },
  // Running Projects
  {
    id: "sonnesta-royal-dream-city-2",
    name: "Sonnesta – Royal Dream City 2",
    status: "Running",
    image: "/images/projects/sonnesta.jpg",
    location: "",
    description: "",
    productsSupplied: [],
    note: "Presented as Sonnesta and Royal Dream City - 2 development",
  },
  {
    id: "sommet-shivganga-park",
    name: "Sommet Shivganga Park",
    status: "Running",
    image: "/images/projects/shivganga-park.jpg",
    location: "",
    description: "",
    productsSupplied: [],
  },
];
