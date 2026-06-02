import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { FundingCalculator } from "@/components/funding-calculator";
import { faqSchema } from "@/lib/seo";
import { stats, comparison, steps, services, testimonials, faqs, unlocks, ctaImage, heroImage, site } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-40 contrast-125 saturate-50 brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{ background: "radial-gradient(60% 65% at 26% 36%, rgba(16,185,129,0.28), rgba(16,185,129,0.06) 46%, transparent 74%)" }}
        />
        <div className="container-c relative flex min-h-[88vh] flex-col items-center justify-center pb-16 pt-24 text-center">
          <p className="eyebrow animate-fade-up">Denied Elsewhere · $100K Minimum Approval · Guaranteed</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            Making the <span className="emph">impossible</span> possible.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/80">
            We place capital for operators banks and platforms denied. Funded in days, not quarters.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Link href={site.cta.href} className="btn-primary text-base transition-transform active:scale-[0.98]">{site.cta.label}</Link>
            <p className="text-sm text-ivory-muted">60-second reply · No credit pull · $100K minimum, guaranteed</p>
          </div>
        </div>
      </section>

      {/* INSTRUMENT MARQUEE */}
      <div className="relative overflow-hidden border-y border-line bg-ink-2/40 py-5">
        <div className="flex w-max animate-marquee items-center gap-6 will-change-transform">
          {[...services, ...services].flatMap((s, i) => [
            <span key={`s-${i}`} className="whitespace-nowrap text-base font-bold uppercase tracking-wide text-ivory/85">
              {s.title}
            </span>,
            <span key={`d-${i}`} aria-hidden className="money-glow text-xl font-bold">$</span>,
          ])}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>

      {/* WHAT YOUR CAPITAL UNLOCKS — aspirational image bento */}
      <section aria-labelledby="unlocks-h" className="container-c py-24">
        <h2 id="unlocks-h" className="max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
          The capital to do the thing they said <span className="emph">no</span> to.
        </h2>
        <p className="mt-4 max-w-xl text-ivory-muted">
          Funding is not the goal. This is. Here is what your approval actually buys.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {unlocks.map((u, i) => (
            <article
              key={u.title}
              className={`group relative flex min-h-[300px] items-end overflow-hidden rounded-card border border-line ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <Image
                src={u.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-45 saturate-50 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
              <div className="relative p-7">
                <h3 className="font-display text-xl font-semibold">{u.title}</h3>
                <p className="mt-2 max-w-md text-sm text-ivory/75">{u.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FUNDING CALCULATOR */}
      <section id="calculator" aria-labelledby="calc-h" className="container-c py-24">
        <div className="flex items-center gap-3">
          <span aria-hidden className="text-sm tracking-[0.25em] text-gold-hi">★★★★★</span>
          <p className="eyebrow">Check Your Options</p>
        </div>
        <h2 id="calc-h" className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
          How much funding can you <span className="emph">qualify</span> for?
        </h2>
        <p className="mt-4 max-w-xl text-ivory-muted">
          Tell us about your business and see what products you may be eligible for. No credit pull, no obligation.
        </p>
        <div className="mt-12">
          <FundingCalculator />
        </div>
      </section>

      {/* STATS / TRACK RECORD */}
      <section aria-labelledby="track" className="container-c py-20">
        <h2 id="track" className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Approved where <span className="emph">others</span> denied you.
        </h2>
        <p className="mt-4 max-w-2xl text-ivory-muted">
          Banks underwrite by credit score. Platforms underwrite by template. We read the actual business, match it to the right lender, and fund it.
        </p>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-2 p-7 transition-colors hover:bg-ink-2/60">
              <dt className="font-display text-4xl font-semibold text-gold-hi">{s.value}</dt>
              <dd className="mt-1 text-sm font-medium text-ivory">{s.label}</dd>
              <dd className="mt-2 text-sm text-ivory-muted">{s.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* WHY / COMPARISON */}
      <section id="why" aria-labelledby="why-h" className="container-c py-20">
        <h2 id="why-h" className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Built for deals banks <span className="emph">won't</span> touch.
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
        <h2 id="process-h" className="font-display text-3xl font-semibold sm:text-4xl">
          Your path from <span className="emph">denied</span> to funded.
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="card p-6 transition-colors hover:border-gold/40">
              <span className="font-display text-3xl font-semibold text-gold">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-ivory-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="services-h" className="container-c py-20">
        <h2 id="services-h" className="font-display text-3xl font-semibold sm:text-4xl">
          Twelve ways to make it <span className="emph">possible.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-ivory-muted">
          Whatever shape the file's in, we have the instrument that fits. Every approval starts at $100K. Guaranteed.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.slice(0, 5).map((s, i) => (
            <article key={s.slug} className={`card p-7 transition-colors hover:border-gold/40 ${i === 0 ? "lg:col-span-2" : ""}`}>
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-ivory-muted">{s.body}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-gold">{s.meta}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
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
        <h2 id="clients-h" className="font-display text-3xl font-semibold sm:text-4xl">
          From <span className="emph">no</span> to funded.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-7">
              <span aria-hidden className="text-sm tracking-[0.25em] text-gold-hi">★★★★★</span>
              <blockquote className="mt-4 text-sm leading-relaxed text-ivory/90">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                <Image src={t.avatar} alt={t.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ivory-muted">{t.role}</p>
                </div>
                <p className="ml-auto text-xs font-medium text-funded">{t.placed}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-h" className="container-c py-20">
        <h2 id="faq-h" className="font-display text-3xl font-semibold sm:text-4xl">Straight answers.</h2>
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

      {/* CTA BAND — full-bleed freedom image */}
      <section className="container-c py-20">
        <div className="relative flex min-h-[360px] items-center overflow-hidden rounded-card border border-line">
          <Image src={ctaImage} alt="" fill sizes="100vw" className="object-cover opacity-35 saturate-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="relative max-w-2xl p-10 sm:p-16">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              Ready to turn <span className="emph">no</span> into yes?
            </h2>
            <p className="mt-4 max-w-md text-ivory/80">
              One last call before you give up. If you haven’t been turned down by at least one bank or platform, try them first. We’re built for what comes after.
            </p>
            <Link href="/apply" className="btn-primary mt-8 text-base transition-transform active:scale-[0.98]">Start Your Application</Link>
            <p className="mt-4 text-sm text-ivory-muted">60-second reply · No credit pull · $100K minimum, guaranteed</p>
          </div>
        </div>
      </section>
    </>
  );
}
