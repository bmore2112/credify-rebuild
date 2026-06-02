"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const INPUT =
  "w-full rounded-card border border-line bg-ink px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold";

const industries = ["Real Estate", "Construction", "Healthcare", "Retail / E-commerce", "Restaurants", "Trucking & Logistics", "Manufacturing", "Home Services", "Professional Services", "Other"];
const capitalRanges = ["$100K - $250K", "$250K - $500K", "$500K - $1M", "$1M - $2.5M", "$2.5M - $5M", "$5M+", "Not sure yet"];
const revenueRanges = ["< $250K", "$250K - $1M", "$1M - $5M", "$5M - $25M", "$25M+", "Pre-revenue"];
const tibRanges = ["< 1 year", "1 - 2 years", "2 - 5 years", "5 - 10 years", "10+ years"];

const days = [
  { dow: "Wed", d: "3", mon: "Jun" }, { dow: "Thu", d: "4", mon: "Jun" }, { dow: "Fri", d: "5", mon: "Jun" },
  { dow: "Sat", d: "6", mon: "Jun" }, { dow: "Sun", d: "7", mon: "Jun" }, { dow: "Mon", d: "8", mon: "Jun" },
  { dow: "Tue", d: "9", mon: "Jun" },
];
const slots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

export function ApplyForm() {
  const [done, setDone] = useState(false);
  const [day, setDay] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  if (done) {
    return (
      <div className="card p-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ivory-muted">Calendar invite sent · See you then</p>
        <h2 className="mt-4 font-display text-3xl font-semibold">Booked. <span className="emph">You’re on the calendar.</span></h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ivory-muted">
          A confirmation just hit your inbox with the dial-in for your call. If anything changes, reply to that email. Need to talk sooner? Call{" "}
          <a href={site.phoneHref} className="text-gold-hi">{site.phone}</a> and ask for the desk.
        </p>
      </div>
    );
  }

  return (
    <form className="card divide-y divide-line p-0" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      {/* 01 */}
      <Section n="01" label="Business basics" title="Who’s the operator?" help="Just enough to know who’s on the other side of the email. Everything stays on our desk.">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name" required name="name" autoComplete="name" />
          <Field label="Your role" name="role" hint="optional" />
          <Field label="Business name" required name="business" autoComplete="organization" />
          <Select label="Industry" name="industry" hint="optional" options={industries} placeholder="Pick one…" />
          <Field label="Email" required type="email" name="email" autoComplete="email" />
          <Field label="Phone" name="phone" hint="optional" type="tel" autoComplete="tel" />
        </div>
      </Section>

      {/* 02 */}
      <Section n="02" label="Pick a time" title="When works for you?" help="All times Eastern. Pick a day, then a slot. We’ll send a calendar invite the moment you book.">
        <div className="flex flex-wrap gap-2">
          {days.map((dd) => {
            const id = `${dd.dow} ${dd.d} ${dd.mon}`;
            const active = day === id;
            return (
              <button
                key={id} type="button" aria-pressed={active}
                onClick={() => { setDay(id); setSlot(null); }}
                className={`flex w-16 flex-col items-center rounded-lg border px-2 py-2 transition-colors ${active ? "border-gold bg-gold/10 text-gold-hi" : "border-line text-ivory/70 hover:border-gold/40"}`}
              >
                <span className="text-[11px] uppercase tracking-wide text-ivory-muted">{dd.dow}</span>
                <span className="text-lg font-semibold">{dd.d}</span>
                <span className="text-[11px] uppercase tracking-wide text-ivory-muted">{dd.mon}</span>
              </button>
            );
          })}
        </div>
        {!day ? (
          <p className="mt-4 text-sm text-ivory-muted">Pick a day above to see open times.</p>
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {slots.map((s) => (
              <button
                key={s} type="button" aria-pressed={slot === s} onClick={() => setSlot(s)}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors ${slot === s ? "border-gold bg-gold/10 text-gold-hi" : "border-line text-ivory/70 hover:border-gold/40"}`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </Section>

      {/* 03 */}
      <Section n="03" label="Quick context" title="A few markers, so we’re ready." help="All optional. The more we know going in, the more useful the call. Skip anything you’d rather discuss live.">
        <div className="grid gap-4 sm:grid-cols-2">
          <Select label="Capital range" name="capital" hint="optional" options={capitalRanges} placeholder="Rough estimate…" />
          <Select label="Annual revenue" name="revenue" hint="optional" options={revenueRanges} placeholder="Pick a range…" />
          <Select label="Time in business" name="tib" hint="optional" options={tibRanges} placeholder="Pick a range…" />
        </div>
      </Section>

      {/* 04 */}
      <Section n="04" label="Your situation" title="Tell us briefly where you’re at." help="A sentence or two on the deal, the timeline, the roadblock. We’ll use it to tailor the discovery call, so we don’t waste your twenty minutes.">
        <label htmlFor="situation" className="block">
          <span className="mb-1.5 block text-sm font-medium">Your situation <span className="text-ivory-muted">optional</span></span>
          <textarea id="situation" name="situation" rows={4} className={`${INPUT} resize-y`} />
        </label>
        <p className="mt-4 text-xs text-ivory-muted">🔒 Encrypted · No credit pull</p>
        <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">Get Me Funded</button>
      </Section>
    </form>
  );
}

function Section({ n, label, title, help, children }: { n: string; label: string; title: string; help: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5 p-7">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ivory-muted">{n} / {label}</p>
        <h2 className="mt-2 font-display text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-ivory-muted">{help}</p>
      </div>
      {children}
    </section>
  );
}

function Field({ label, hint, required, ...props }: { label: string; hint?: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = props.name;
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label} {required ? <span className="text-gold-hi">*</span> : <span className="text-ivory-muted">{hint}</span>}
      </span>
      <input id={id} required={required} {...props} className={INPUT} />
    </label>
  );
}

function Select({ label, hint, name, options, placeholder }: { label: string; hint?: string; name: string; options: string[]; placeholder: string }) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-sm font-medium">{label} <span className="text-ivory-muted">{hint}</span></span>
      <div className="relative">
        <select id={name} name={name} defaultValue="" className={`${INPUT} cursor-pointer appearance-none pr-11`}>
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg aria-hidden viewBox="0 0 12 12" className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-ivory-muted">
          <path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </label>
  );
}
