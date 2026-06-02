"use client";

import Link from "next/link";
import { useState } from "react";

// Exact getcredify.io Services menu: 3 columns of 4, plus a help panel + foot link
const menuGroups = [
  { eyebrow: "Working Capital", items: ["Business Line of Credit", "AR Financing", "0% Credit Stacking", "Bridge Loans"] },
  { eyebrow: "Term & SBA", items: ["SBA Loans", "Long Term Loans", "Short Term Loans", "Small Business Loans"] },
  { eyebrow: "Asset & Real Estate", items: ["Equipment Financing", "Asset Based Lending", "Commercial Real Estate", "Personal Loans"] },
];

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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 py-5">
      <div className="grid w-full max-w-[1120px] grid-cols-[1fr_auto_1fr] items-center gap-6 rounded-full border border-white/[0.12] bg-white/[0.05] py-2 pl-6 pr-2 backdrop-blur-xl backdrop-saturate-150">
        {/* Wordmark */}
        <Link href="/" className="justify-self-start font-display text-[19px] font-bold normal-case tracking-tight text-ivory">
          Credify
        </Link>

        {/* Center links */}
        <nav aria-label="Primary" className="hidden items-center gap-7 justify-self-center md:flex">
          <div className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
            <button
              className="flex items-center gap-1 text-[13.5px] text-ivory/80 transition-colors hover:text-ivory"
              aria-expanded={mega}
              onClick={() => setMega((v) => !v)}
            >
              Services
              <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden className="mt-0.5 opacity-70"><path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" /></svg>
            </button>
            {mega && <MegaMenu />}
          </div>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[13.5px] text-ivory/80 transition-colors hover:text-ivory">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA / mobile toggle (single right cell) */}
        <div className="justify-self-end">
          <Link
            href="/apply"
            className="hidden h-10 items-center rounded-full border border-white/55 bg-ink/60 px-5 text-[13px] font-medium text-ivory backdrop-blur-md transition-colors hover:bg-white/10 md:inline-flex"
          >
            Get Started
          </Link>
          <button
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-ivory md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="absolute inset-x-4 top-[84px] rounded-card border border-line bg-ink/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            <Link href="/#services" className="py-2 text-ivory/85" onClick={() => setOpen(false)}>Services</Link>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-2 text-ivory/85" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
            <Link href="/apply" className="btn-primary mt-3" onClick={() => setOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 pt-4">
      <div
        className="rounded-[18px] p-px"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04))",
          boxShadow: "0 24px 60px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <div className="rounded-[17px] bg-ink/95 p-6 backdrop-blur-xl">
          <div className="grid grid-cols-4 gap-6">
            {menuGroups.map((g) => (
              <div key={g.eyebrow}>
                <p className="mb-2 pl-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ivory-muted">{g.eyebrow}</p>
                <ul className="space-y-0.5">
                  {g.items.map((item) => (
                    <li key={item}>
                      <Link href="/#services" className="block rounded-lg px-2.5 py-1.5 text-sm text-ivory/80 transition-colors hover:bg-white/5 hover:text-ivory">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col rounded-[12px] bg-white/[0.03] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ivory-muted">Not sure?</p>
              <p className="mt-1 font-display text-base font-bold normal-case">Let a partner pick.</p>
              <p className="mt-1 text-xs text-ivory-muted">Tell us the file. We’ll match it to the lender most likely to fund it.</p>
              <Link href="/apply" className="mt-auto pt-3 text-[13px] font-medium text-gold-hi hover:text-gold">Get a custom quote →</Link>
            </div>
          </div>
          <div className="mt-5 border-t border-line pt-4">
            <Link href="/#services" className="text-[13px] text-ivory/70 transition-colors hover:text-ivory">View all financing types →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
