import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const routes = [
    { path: "/", priority: 1, freq: "weekly" as const },
    { path: "/solutions", priority: 0.9, freq: "monthly" as const },
    { path: "/apply", priority: 0.9, freq: "monthly" as const },
  ];
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date("2026-06-02"),
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
