import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Get a Custom Quote — Book a Strategy Call",
  description:
    "Twenty minutes with your advisor. No credit pull, $100K minimum approval, guaranteed. Tell us the file and we’ll find the path through the denials.",
  alternates: { canonical: "/apply" },
  robots: { index: true, follow: true },
};

const covered = [
  "Where every prior lender said no — and why",
  "Which of our 100+ partners fits your file",
  "Realistic capital range, terms, and timeline",
  "The exact documents to move to a funded close",
];

export default function ApplyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Apply", path: "/apply" }])} />
      <section className="container-c grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Strategy Call</p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Book a call. <span className="emph">See how we can help.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ivory/80">
            No matter what you’re facing, there’s a way through. Twenty minutes with your advisor, and we’ll find it together.
          </p>
          <p className="mt-4 text-sm text-ivory-muted">20-min discovery call · Your dedicated advisor · $100K minimum approval</p>

          <div className="mt-10">
            <p className="eyebrow mb-4">What we’ll cover</p>
            <ul className="space-y-3">
              {covered.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-ivory/90">
                  <span className="mt-1 text-funded" aria-hidden>✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ApplyForm />
      </section>
    </>
  );
}
