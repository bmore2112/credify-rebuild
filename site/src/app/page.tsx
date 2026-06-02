import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { faqSchema } from "@/lib/seo";
import { stats, comparison, steps, services, serviceGroups, testimonials, faqs, heroStats, site } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 contrast-125 saturate-50 brightness-90"
        />
        {/* darken for legibility (cold blue-black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        {/* cold steel-cyan city glow */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background:
              "radial-gradient(60% 65% at 26% 36%, rgba(92,157,196,0.32), rgba(92,157,196,0.08) 46%, transparent 74%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        <div className="container-c relative py-24 sm:py-32">
          <p className="eyebrow animate-fade-up">Denied Elsewhere · $100K Minimum Approval · Guaranteed</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            Making the <span className="emph">impossible</span> possible.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/80">{heroStats}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href={site.cta.href} className="btn-primary text-base">{site.cta.label}</Link>
            <span className="text-sm text-ivory-muted">60-second reply · No credit pull · $100K minimum, guaranteed</span>
          </div>
        </div>
      </section>

      {/* STATS / TRACK RECORD */}
      <section aria-labelledby="track" className="container-c py-20">
        <p className="eyebrow">Track Record</p>
        <h2 id="track" className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Approved where <span className="emph">others</span> denied you.
        </h2>
        <p className="mt-4 max-w-2xl text-ivory-muted">
          Banks underwrite by credit score. Platforms underwrite by template. Direct lenders won’t touch complex files. We read the actual business, match it to the right lender, and fund it.
        </p>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-2 p-7">
              <dt className="font-display text-4xl font-semibold text-gold-hi">{s.value}</dt>
              <dd className="mt-1 text-sm font-medium text-ivory">{s.label}</dd>
              <dd className="mt-2 text-sm text-ivory-muted">{s.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* WHY / COMPARISON */}
      <section id="why" aria-labelledby="why-h" className="container-c py-20">
        <p className="eyebrow">Why Credify</p>
        <h2 id="why-h" className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Built for deals banks <span className="emph">won’t</span> touch.
        </h2>
        <p className="mt-4 text-ivory-muted">How we stack up against every lender that already said no.</p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="hairline">
                {comparison.headers.map((h, i) => (
                  <th key={i} className={`py-4 pr-6 text-sm font-medium ${i === 2 ? "text-gold-hi" : "text-ivory-muted"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row[0]} className="hairline">
                  <th scope="row" className="py-4 pr-6 text-sm font-medium text-ivory">{row[0]}</th>
                  <td className="py-4 pr-6 text-sm text-ivory-muted">{row[1]}</td>
                  <td className="py-4 pr-6 text-sm font-semibold text-funded">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" aria-labelledby="process-h" className="container-c py-20">
        <p className="eyebrow">How It Works</p>
        <h2 id="process-h" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Your path from <span className="emph">denied</span> to funded.
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="card p-6">
              <span className="font-display text-3xl font-semibold text-gold">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-ivory-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="services-h" className="container-c py-20">
        <p className="eyebrow">Services</p>
        <h2 id="services-h" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Twelve ways to make it <span className="emph">possible.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-ivory-muted">
          Whatever shape the file’s in, we have the instrument that fits. Every approval starts at $100K. Guaranteed.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.slice(0, 5).map((s, i) => (
            <article key={s.slug} className={`card p-7 ${i === 0 ? "lg:col-span-2" : ""}`}>
              <p className="eyebrow">{s.tag}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-ivory-muted">{s.body}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-gold">{s.meta}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <p className="eyebrow mb-4">The full shelf · 12 instruments · one desk</p>
          <ul className="flex flex-wrap gap-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/apply" className="btn-ghost px-4 py-2 text-xs">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" aria-labelledby="clients-h" className="container-c py-20">
        <p className="eyebrow">Clients</p>
        <h2 id="clients-h" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Operators we said <span className="emph">yes</span> to.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-7">
              <blockquote className="text-sm leading-relaxed text-ivory/90">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-ivory-muted">{t.role}</p>
                <p className="mt-2 text-xs font-medium text-funded">{t.placed}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-h" className="container-c py-20">
        <p className="eyebrow">Questions</p>
        <h2 id="faq-h" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Straight answers.</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {f.q}
                <span className="text-gold transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm text-ivory-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-c py-20">
        <div className="card relative overflow-hidden p-10 text-center sm:p-16">
          <p className="eyebrow">One desk · 100+ partners</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
            Bring us the file banks <span className="emph">said no</span> to.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory-muted">
            Twenty minutes with a partner. No credit pull. $100K minimum approval, guaranteed.
          </p>
          <Link href={site.cta.href} className="btn-primary mt-8 text-base">{site.cta.label}</Link>
        </div>
      </section>
    </>
  );
}
