import Link from "next/link";
import { services, industries, site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="hairline mt-24 bg-ink">
      <div className="container-c grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">Credify</p>
          <p className="mt-3 max-w-xs text-sm text-ivory-muted">{site.tagline} Capital for operators denied by banks and platforms.</p>
          <p className="mt-4 text-sm">
            <a href={site.phoneHref} className="hover:text-gold-hi">{site.phone}</a><br />
            <a href={site.emailHref} className="hover:text-gold-hi">{site.email}</a>
          </p>
        </div>
        <nav aria-label="Financing">
          <p className="eyebrow mb-3">Financing</p>
          <ul className="space-y-2 text-sm text-ivory-muted">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href="/#services" className="hover:text-gold-hi">{s.title}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Industries">
          <p className="eyebrow mb-3">Industries</p>
          <ul className="space-y-2 text-sm text-ivory-muted">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}><Link href={`/solutions#${i.slug}`} className="hover:text-gold-hi">{i.name}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="eyebrow mb-3">Company</p>
          <ul className="space-y-2 text-sm text-ivory-muted">
            <li><Link href="/#why" className="hover:text-gold-hi">Why Credify</Link></li>
            <li><Link href="/#process" className="hover:text-gold-hi">How It Works</Link></li>
            <li><Link href="/#clients" className="hover:text-gold-hi">Clients</Link></li>
            <li><Link href="/apply" className="hover:text-gold-hi">Apply</Link></li>
          </ul>
        </nav>
      </div>
      <div className="hairline">
        <div className="container-c flex flex-col gap-3 py-6 text-xs text-ivory-muted md:flex-row md:items-center md:justify-between">
          <p>© {2026} Credify. All rights reserved.</p>
          <p className="max-w-2xl">
            Credify is a financing facilitator, not a lender or bank. Capital is provided by third-party lending partners; terms vary by file and lender. Not a commitment to lend. Approval guarantee applies only to files formally accepted onto the desk.
          </p>
        </div>
      </div>
    </footer>
  );
}
