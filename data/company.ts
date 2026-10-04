export interface DirectorInfo {
  name: string;
  role: string;
  company: string;
  experience: string;
  education: string;
  phone: string;
  image: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  instagram: {
    handle: string;
    url: string;
  };
  facebook: {
    url: string;
  };
  mapsUrl: string;
}

export interface CompanyDetails {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  aboutUs: string;
  vision: string;
  mission: string;
  whoWeServe: string[];
  director: DirectorInfo;
  contact: ContactInfo;
}

export const companyData: CompanyDetails = {
  name: "S V SALES",
  legalName: "S.V. SALES",
  tagline: "Complete Bath Solutions",
  shortDescription: "Supplier of bathroom, kitchen, and plumbing/construction products in Nagpur, India.",
  aboutUs: "S V Sales is a trusted supplier of bathroom and kitchen solutions serving home owners, interior designers, builders, architects, and contractors. We provide high-quality bath fittings, sanitary ware, chimneys, cooktops, tiles adhesives, grout, and epoxy that ensure smooth and timely execution of construction and renovation projects.",
  vision: "To be the leading provider of innovative, sustainable, and premium bath fitting and sanitary solutions, transforming spaces into havens of comfort and elegance.",
  mission: "Delivering exceptional quality, reliability and customer experience through cutting-edge technology and personalized services.",
  whoWeServe: [
    "Homeowners",
    "Interior Designers",
    "Builders",
    "Architects",
    "Contractors",
    "Every Individual",
  ],
  director: {
    name: "Vishwas Bhatpalliwar",
    role: "Director",
    company: "S V SALES",
    experience: "Since 18 Years",
    education: "B.Com Graduate",
    phone: "+91 8055787689",
    image: "/images/director/vishwas-bhatpalliwar.png",
  },
  contact: {
    address: "Royal Tower, Ramteke Nagar, Beltarodi Road, Rameshwari, Nagpur - 440027",
    phones: ["8055787689", "9767710959"],
    instagram: {
      handle: "@vishwasbhatpalliwar",
      url: "https://www.instagram.com/vishwasbhatpalliwar",
    },
    facebook: {
      url: "https://www.facebook.com/vishwas.bhatpalliwar",
    },
    mapsUrl: "https://maps.google.com/?q=Royal+Tower+Ramteke+Nagar+Beltarodi+Road+Rameshwari+Nagpur+440027",
  },
};
