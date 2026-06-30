import { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const pages = [
    "",
    "/about",
    "/products",
    "/technology",
    "/industries",
    "/projects",
    "/certificates",
    "/gallery",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/faq",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : path === "/contact" ? 0.9 : 0.8,
  }));
}