import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { industries, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industry Solutions — Capital Built for Your Sector",
  description:
    "Capital built for your industry. Credify has placed $840M across real estate, construction, healthcare, retail, restaurants, trucking, manufacturing, home & professional services.",
  alternates: { canonical: "/solutions" },
};

const valueProps = [
  { title: "Industry-specific rates", body: "Pricing tuned to your sector’s risk profile, not a one-size-fits-all spread." },
  { title: "Fast approvals", body: "Streamlined files routed to lenders who already know your industry’s nuances." },
  { title: "Expert guidance", body: "Advisors with deep industry knowledge match your file to the right capital." },
];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }])} />

      <section className="container-c pb-16 pt-32 sm:pt-36">
        <p className="eyebrow">Industry Solutions · $100K Minimum Approval · Guaranteed</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
          Capital built for <span className="emph">your</span> industry.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ivory/80">
          Every sector has a different funding playbook. Banks run one model for all of them. We’ve placed $840M across {industries.length} industry verticals — every operator got denied somewhere else first.
        </p>
        <Link href={site.cta.href} className="btn-primary mt-8">{site.cta.label}</Link>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title} className="card p-6">
              <h2 className="text-lg font-semibold">{v.title}</h2>
              <p className="mt-2 text-sm text-ivory-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="industries-h" className="container-c pb-10">
        <p className="eyebrow">Industries We Serve</p>
        <h2 id="industries-h" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Tailored capital for <span className="emph">every</span> sector.
        </h2>
        <p className="mt-4 max-w-2xl text-ivory-muted">
          Each industry has its own underwriting playbook on our side. Pick yours to see the challenges we hear about most and the products that solve them.
        </p>

        <div className="mt-12 space-y-6">
          {industries.map((ind, i) => (
            <article key={ind.slug} id={ind.slug} className="card scroll-mt-24 p-7 sm:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="eyebrow">{ind.flagship ? "Flagship Sector" : `Sector ${String(i + 1).padStart(2, "0")}`}</p>
                <p className="text-xs uppercase tracking-wider text-gold">{ind.range}</p>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{ind.name}</h3>
              <p className="mt-3 max-w-3xl text-sm text-ivory-muted">{ind.blurb}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ivory">Common Challenges</p>
                  <ul className="mt-3 space-y-2 text-sm text-ivory-muted">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex gap-2"><span className="text-gold" aria-hidden>—</span>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ivory">Recommended Products</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {ind.products.map((p) => (
                      <li key={p} className="rounded-full border border-line px-3 py-1 text-xs text-ivory/80">{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
