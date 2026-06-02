import type { Metadata } from "next";
import { Exo_2, Oxanium } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/data";

// Body / subtext — geometric but highly readable for a professional feel
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// Titles / display — free Bevon-alike: wide, futuristic, geometric
const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Credify — Business Financing for Operators Banks Denied",
    template: "%s · Credify",
  },
  description:
    "Denied by banks and platforms? Credify places business capital with a $100K minimum approval, guaranteed. 100+ private lending partners, $840M+ delivered, funded in days.",
  keywords: ["business financing", "business line of credit", "working capital", "SBA loans", "bridge loans", "equipment financing", "commercial real estate financing"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.domain,
    title: "Credify — Making the impossible possible.",
    description: "Approved where others denied you. $100K minimum approval, guaranteed. 100+ capital partners.",
    siteName: "Credify",
  },
  twitter: { card: "summary_large_image", title: "Credify — Business Financing", description: "Approved where others denied you. $100K minimum approval, guaranteed." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${exo2.variable} ${oxanium.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 btn-primary">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
