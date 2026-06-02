"use client";

import Link from "next/link";
import { useState } from "react";
import { services, serviceGroups, site } from "@/lib/data";

const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/#process" },
  { label: "Why Credify", href: "/#why" },
  { label: "Clients", href: "/#clients" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/85 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <div className="container-c flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
          Credify
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          <div className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
            <button
              className="flex items-center gap-1 text-sm text-ivory/90 hover:text-gold-hi"
              aria-expanded={mega}
              onClick={() => setMega((v) => !v)}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="mt-0.5"><path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" /></svg>
            </button>
            {mega && <MegaMenu />}
          </div>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-ivory/90 hover:text-gold-hi">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href={site.cta.href} className="btn-primary">{site.cta.label}</Link>
        </div>

        <button
          className="btn-ghost px-4 py-2 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink lg:hidden">
          <div className="container-c flex flex-col gap-1 py-4">
            <Link href="/#services" className="py-2 text-ivory/90" onClick={() => setOpen(false)}>Services</Link>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-2 text-ivory/90" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
            <Link href={site.cta.href} className="btn-primary mt-3" onClick={() => setOpen(false)}>{site.cta.label}</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 pt-3">
      <div className="card grid grid-cols-4 gap-6 p-6 shadow-2xl">
        {serviceGroups.map((group) => (
          <div key={group}>
            <p className="eyebrow mb-3">{group}</p>
            <ul className="space-y-2">
              {services.filter((s) => s.group === group).map((s) => (
                <li key={s.slug}>
                  <Link href={`/#services`} className="text-sm text-ivory/80 hover:text-gold-hi">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="rounded-card bg-ink p-4">
          <p className="eyebrow mb-2">Not sure?</p>
          <p className="font-display text-lg leading-tight">Let a partner pick.</p>
          <p className="mt-2 text-xs text-ivory-muted">Tell us the file. We’ll match it to the lender most likely to fund it.</p>
          <Link href="/apply" className="btn-primary mt-4 w-full px-4 py-2 text-xs">Get a custom quote</Link>
        </div>
      </div>
    </div>
  );
}
