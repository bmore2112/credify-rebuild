"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const industries = ["Real Estate", "Construction", "Healthcare", "Retail / E-commerce", "Restaurants", "Trucking & Logistics", "Manufacturing", "Home Services", "Professional Services", "Other"];
const capitalRanges = ["$100K – $250K", "$250K – $500K", "$500K – $1M", "$1M – $2.5M", "$2.5M – $5M", "$5M+", "Not sure yet"];
const revenueRanges = ["< $250K", "$250K – $1M", "$1M – $5M", "$5M – $25M", "$25M+", "Pre-revenue"];
const tibRanges = ["< 1 year", "1 – 2 years", "2 – 5 years", "5 – 10 years", "10+ years"];

const steps = [
  { id: "01", label: "Business basics" },
  { id: "02", label: "The ask" },
  { id: "03", label: "Your situation" },
];

// One shared style so every box (input / select / textarea) matches exactly
const INPUT_CLASS =
  "w-full rounded-card border border-line bg-ink px-4 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-ivory-muted focus:border-gold";

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="card p-10 text-center">
        <p className="eyebrow">Calendar invite sent · See you then</p>
        <h2 className="mt-4 font-display text-3xl font-semibold">Booked. <span className="emph">You’re on the calendar.</span></h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ivory-muted">
          A confirmation just hit your inbox with the dial-in for your call. If anything changes, reply to that email. Need to talk sooner? Call{" "}
          <a href={site.phoneHref} className="text-gold-hi">{site.phone}</a> and ask for the desk.
        </p>
      </div>
    );
  }

  return (
    <form
      className="card p-7 sm:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      {/* progress */}
      <ol className="mb-8 flex items-center gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s.id} className="flex flex-1 items-center gap-2">
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${i <= step ? "bg-gold text-ink" : "border border-line text-ivory-muted"}`}>{s.id}</span>
            <span className={`hidden text-xs sm:block ${i === step ? "text-ivory" : "text-ivory-muted"}`}>{s.label}</span>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-line" />}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset className="space-y-4">
          <legend className="font-display text-xl font-semibold">Who’s the operator?</legend>
          <p className="text-sm text-ivory-muted">Just enough to know who’s on the other side of the email. Everything stays on our desk.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" required name="name" autoComplete="name" />
            <Field label="Your role" name="role" hint="optional" />
            <Field label="Business name" required name="business" autoComplete="organization" />
            <Select label="Industry" name="industry" hint="optional" options={industries} placeholder="Pick one…" />
            <Field label="Email" required type="email" name="email" autoComplete="email" />
            <Field label="Phone" name="phone" hint="optional" type="tel" autoComplete="tel" />
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="space-y-4">
          <legend className="font-display text-xl font-semibold">A few markers, so we’re ready.</legend>
          <p className="text-sm text-ivory-muted">All optional. The more we know going in, the more useful the call.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label="Capital range" name="capital" hint="optional" options={capitalRanges} placeholder="Rough estimate…" />
            <Select label="Annual revenue" name="revenue" hint="optional" options={revenueRanges} placeholder="Pick a range…" />
            <Select label="Time in business" name="tib" hint="optional" options={tibRanges} placeholder="Pick a range…" />
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-4">
          <legend className="font-display text-xl font-semibold">Tell us briefly where you’re at.</legend>
          <p className="text-sm text-ivory-muted">A sentence or two on the deal, the timeline, the roadblock. We’ll tailor the call so we don’t waste your twenty minutes.</p>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Your situation <span className="text-ivory-muted">optional</span></span>
            <textarea name="situation" rows={5} className={`${INPUT_CLASS} resize-y`} />
          </label>
          <p className="text-xs text-ivory-muted">🔒 Encrypted · No credit pull</p>
        </fieldset>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          className="btn-ghost px-4 py-2 text-sm disabled:opacity-40"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          Back
        </button>
        {step < steps.length - 1 ? (
          <button type="button" className="btn-primary" onClick={() => setStep((s) => s + 1)}>Continue</button>
        ) : (
          <button type="submit" className="btn-primary">Get Me Funded</button>
        )}
      </div>
    </form>
  );
}

function Field({ label, hint, required, ...props }: { label: string; hint?: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = props.name;
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label} {required ? <span className="text-gold">*</span> : <span className="text-ivory-muted">{hint}</span>}
      </span>
      <input id={id} required={required} {...props} className={INPUT_CLASS} />
    </label>
  );
}

function Select({ label, hint, name, options, placeholder }: { label: string; hint?: string; name: string; options: string[]; placeholder: string }) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-sm font-medium">{label} <span className="text-ivory-muted">{hint}</span></span>
      <div className="relative">
        <select id={name} name={name} defaultValue="" className={`${INPUT_CLASS} cursor-pointer appearance-none pr-11`}>
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-ivory-muted"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </label>
  );
}
