# Credify — Rebuild

A unique, fully optimized rebuild of **getcredify.io** (business-financing brokerage), built with **Next.js 14 (App Router) + Tailwind + shadcn-style primitives**. Design direction: "Editorial Fintech" (see `../DESIGN.md`). Competitive playbook: `../RESEARCH.md`.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

## Pages
- `/` — Home (hero, track-record stats, why/comparison, how-it-works, 12 services, clients, FAQ, CTA)
- `/solutions` — 9 industry verticals with challenges + recommended products
- `/apply` — multi-step strategy-call booking form + success state
- `/sitemap.xml`, `/robots.txt`, `/llms.txt` — generated

## getcredify.io component parity ✓
| Original component | Rebuilt as |
|---|---|
| Services mega-menu (3 groups) | `components/site-header.tsx` |
| Hero "Making the impossible possible" | `app/page.tsx` → Hero |
| Track-record stats ($100K/$840M/99%/100+) | Home → Stats |
| "Why Credify" comparison table | Home → Why/Comparison |
| 4-step "denied → funded" process | Home → How It Works |
| 12 financing instruments | `lib/data.ts` → Services |
| Clients / testimonials | Home → Clients |
| Industry Solutions (9 sectors) | `app/solutions` |
| Multi-step apply form (4 sections) | `components/apply-form.tsx` |
| Footer + contact + disclosures | `components/site-footer.tsx` |

## Optimization (vs RESEARCH best-vs-worst)
- Single repeated CTA, no pop-ups; honest "no credit pull" copy.
- Real stats everywhere; YMYL disclosures + company identity in footer.
- JSON-LD: FinancialService, WebSite, FAQPage, BreadcrumbList.
- Metadata + OpenGraph/Twitter; canonical URLs.
- `sitemap.xml`, `robots.txt` (AI crawlers allowed), `llms.txt` for GEO.
- Security headers (HSTS, X-Content-Type-Options, frame, referrer, permissions).
- A11y: skip link, landmarks, labeled fields, focus-visible rings, reduced-motion.
- Perf: static prerender, AVIF/WebP, font-display swap, ~101 kB first-load JS on home.

## Notes / next steps
- Wire the apply form to a real backend/CRM + calendar (currently client-side success state).
- Replace the Unsplash hero with a licensed/branded asset before launch.
- Add a `/privacy` + `/terms` page (linked stubs) for full YMYL compliance.
