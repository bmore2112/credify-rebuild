import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Welcome AI crawlers for GEO visibility
      { userAgent: ["GPTBot", "OAI-SearchBot", "PerplexityBot", "ClaudeBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
