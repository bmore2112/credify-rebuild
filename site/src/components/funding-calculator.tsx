"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/data";

const INPUT =
  "w-full rounded-card border border-line bg-ink px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold";

const industries = [
  "Construction", "Real Estate", "Automotive", "Finance & Insurance", "Healthcare",
  "Retail", "Restaurant / Food Service", "Technology", "Professional Services",
  "Transportation", "Manufacturing", "Other",
];
const timeOptions = ["< 6 mo", "6-12 mo", "1-3 yr", "3+ yr"];
const typeOptions = ["LLC", "S-Corp", "C-Corp", "Sole Prop"];

const usd = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const TIME_FACTOR: Record<string, number> = { "< 6 mo": 0.5, "6-12 mo": 0.75, "1-3 yr": 1.0, "3+ yr": 1.25 };
const INDUSTRY_FACTOR: Record<string, number> = {
  "Real Estate": 1.1, Healthcare: 1.1, Manufacturing: 1.05, Technology: 1.05,
  Retail: 0.9, "Restaurant / Food Service": 0.9,
};

function estimate(revenue: number, credit: number, time: string, type: string, industry: string) {
  const creditFactor = 0.6 + 0.8 * ((credit - 500) / 300); // ~0.6 to 1.4
  const timeFactor = TIME_FACTOR[time] ?? 1;
  const typeFactor = type === "Sole Prop" ? 0.85 : 1;
  const industryFactor = INDUSTRY_FACTOR[industry] ?? 1;
  const raw = revenue * 3 * creditFactor * timeFactor * typeFactor * industryFactor;
  const clamped = Math.min(10_000_000, Math.max(100_000, raw)); // $100K floor, $10M cap
  return Math.round(clamped / 5000) * 5000;
}

function eligibleProducts(revenue: number, credit: number, time: string, industry: string) {
  const set = new Set<string>(["Working Capital Lines", "Business Line of Credit"]);
  if (credit >= 660) { set.add("Term Loans"); set.add("SBA Loans"); }
  if (revenue >= 50_000) set.add("Term Loans");
  if (time === "< 6 mo" || time === "6-12 mo") { set.add("0% Credit Stacking"); set.add("Short Term Business Loans"); }
  if (industry === "Real Estate") { set.add("Commercial Real Estate"); set.add("Bridge Loans"); }
  if (["Construction", "Manufacturing", "Transportation"].includes(industry)) set.add("Equipment & Asset Finance");
  if (["Healthcare", "Professional Services", "Transportation"].includes(industry)) set.add("Accounts Receivable Financing");
  return Array.from(set).slice(0, 6);
}

function Slider({ label, value, min, max, step, onChange, format }: {
  label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium">{label}</label>
        <span className="font-display text-lg font-semibold text-gold-hi">{format(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full cursor-pointer accent-gold"
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-xs text-ivory-muted">
        <span>{format(min)}</span><span>{format(max)}</span>
      </div>
    </div>
  );
}

function Choice({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o} type="button" onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${value === o ? "border-gold bg-gold/10 text-gold-hi" : "border-line text-ivory/70 hover:border-gold/40"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export function FundingCalculator() {
  const [revenue, setRevenue] = useState(30_000);
  const [credit, setCredit] = useState(680);
  const [industry, setIndustry] = useState("Construction");
  const [time, setTime] = useState("1-3 yr");
  const [type, setType] = useState("LLC");

  const total = useMemo(() => estimate(revenue, credit, time, type, industry), [revenue, credit, time, type, industry]);
  const products = useMemo(() => eligibleProducts(revenue, credit, time, industry), [revenue, credit, time, industry]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Inputs */}
      <div className="card space-y-6 p-7">
        <Slider label="Monthly Revenue" value={revenue} min={5000} max={200000} step={1000} onChange={setRevenue} format={usd} />
        <Slider label="Credit Score" value={credit} min={500} max={800} step={5} onChange={setCredit} format={(v) => String(v)} />
        <div>
          <label htmlFor="calc-industry" className="mb-2 block text-sm font-medium">Industry</label>
          <select id="calc-industry" value={industry} onChange={(e) => setIndustry(e.target.value)} className={`${INPUT} cursor-pointer`}>
            {industries.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <Choice label="Time in Business" options={timeOptions} value={time} onChange={setTime} />
        <Choice label="Business Type" options={typeOptions} value={type} onChange={setType} />
      </div>

      {/* Result */}
      <div className="card flex flex-col p-7">
        <p className="text-sm text-ivory-muted">Estimated Total Funding</p>
        <p className="mt-2 font-display text-5xl font-semibold tabular-nums text-gold-hi sm:text-6xl" aria-live="polite">
          {usd(total)}
        </p>
        <p className="mt-2 text-sm text-ivory-muted">Based on your profile. Every accepted file starts at $100K, guaranteed.</p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ivory">Products you may be eligible for</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {products.map((p) => (
              <li key={p} className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-gold-hi">{p}</li>
            ))}
          </ul>
        </div>

        <Link href={site.cta.href} className="btn-primary mt-7 w-full">{site.cta.label}</Link>

        <p className="mt-5 text-[11px] leading-relaxed text-ivory-muted">
          <span className="font-semibold text-ivory/70">Disclaimer:</span> Estimates are for informational and illustrative purposes only and do not constitute a loan offer, pre-approval, or guarantee of funding. Actual qualification, amounts, rates, terms, and eligibility vary by lender, product, credit history, business financials, collateral, and industry. Not financial advice.{" "}
          <a href={site.emailHref} className="text-gold hover:text-gold-hi">Submit an inquiry</a> for a personalized assessment.
        </p>
      </div>
    </div>
  );
}
