import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = ["/", "/about", "/contact", "/privacy-policy", "/terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : route.includes("policy") || route.includes("terms") ? 0.3 : 0.7,
  }));
}
