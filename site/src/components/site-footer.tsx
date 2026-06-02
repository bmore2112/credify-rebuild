import Link from "next/link";
import { site } from "@/lib/data";

const company = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/#process" },
  { label: "Why Credify", href: "/#why" },
  { label: "Clients", href: "/#clients" },
];

const servicesLinks = [
  "Business Line of Credit", "SBA Loans", "Equipment Financing", "Bridge Loans",
  "Commercial Real Estate", "AR Financing", "Asset Based Lending", "View all 12 instruments",
];

const headingClass = "text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory-muted";
const linkClass = "text-sm text-ivory/70 transition-colors hover:text-gold-hi";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-ink">
      {/* Giant watermark wordmark behind the columns (matches getcredify.io) */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[20vw] font-bold normal-case leading-none tracking-tight text-ivory/[0.05]"
      >
        Credify
      </p>

      <div className="container-c relative z-10 grid gap-10 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-bold normal-case text-ivory">Credify</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-muted">
            Making the impossible possible. $100K minimum approval, guaranteed. The capital firm for operators denied everywhere else.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ivory/75">
            <span className="h-2 w-2 rounded-full bg-funded shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
            Desk Open · Replying Now
          </span>
        </div>

        {/* Company */}
        <nav aria-label="Company" className="md:col-span-2">
          <p className={headingClass}>Company</p>
          <ul className="mt-4 space-y-2.5">
            {company.map((c) => (
              <li key={c.label}><Link href={c.href} className={linkClass}>{c.label}</Link></li>
            ))}
          </ul>
        </nav>

        {/* Services (two columns of links under one heading) */}
        <nav aria-label="Services" className="md:col-span-3">
          <p className={headingClass}>Services</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {servicesLinks.map((s) => (
              <li key={s}><Link href="/#services" className={linkClass}>{s}</Link></li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <nav aria-label="Connect" className="md:col-span-3">
          <p className={headingClass}>Connect</p>
          <ul className="mt-4 space-y-2.5">
            <li><a href={site.emailHref} className={linkClass}>{site.email}</a></li>
            <li><Link href="/apply" className={linkClass}>Start Application</Link></li>
            <li><Link href="/apply" className={linkClass}>Get Custom Quote</Link></li>
          </ul>
        </nav>
      </div>

      <div className="relative z-10 border-t border-line">
        <div className="container-c py-6 text-xs text-ivory-muted">
          © MMXXVI Credify / {site.email} · Credify is a capital advisory desk. Not a direct lender.
        </div>
      </div>
    </footer>
  );
}
