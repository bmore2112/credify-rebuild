import { site, faqs, services } from "./data";

const url = site.domain;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${url}/#organization`,
  name: site.name,
  url,
  email: site.email,
  telephone: site.phone,
  description:
    "Credify is a business-financing partner that places capital for operators denied by banks and platforms — $100K minimum approval, 100+ private lending partners, $840M+ delivered.",
  areaServed: "US",
  slogan: site.tagline,
  serviceType: services.map((s) => s.title),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1280",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${url}/#website`,
  url,
  name: site.name,
  publisher: { "@id": `${url}/#organization` },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${url}${it.path}`,
    })),
  };
}
