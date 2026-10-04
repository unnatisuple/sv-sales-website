import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://svsalesnagpur.in";
  const routes = [
    "",
    "/about",
    "/vision-mission",
    "/why-choose-us",
    "/products",
    "/brands",
    "/projects",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
