# Business-Financing Website Research — Best vs Worst
*Vertical corrected from "credit repair" → business financing/lending (getcredify.io's actual industry). Sourced via Firecrawl search + homepage scrapes, plus CFPB/PIRG/ABA predatory-lending guidance.*

## Top 5 BEST (category-leading sites — what to emulate)

| # | Site | Why it's best (design + UX + trust) |
|---|------|--------------------------------------|
| 1 | **Bluevine** (bluevine.com) | Clean fintech system, single dominant CTA, instant clarity on product + rate ranges, strong trust band (FDIC/partners), fast LCP. Minimal cognitive load. |
| 2 | **Lendio** (lendio.com) | Marketplace positioning made obvious ("apply once, compare offers"), real social proof (reviews/ratings), funding calculator, transparent process steps. |
| 3 | **OnDeck** (ondeck.com) | Crisp product cards (line of credit vs term loan), explicit amounts/terms, "how it works" in 3 steps, clear eligibility up front (no dark patterns). |
| 4 | **Fundbox** (fundbox.com) | Modern SaaS aesthetic, benefit-led copy, frictionless "see your funds" flow, accessibility and mobile-first layout. |
| 5 | **Funding Circle US** (fundingcircle.com/us) | Authority/trust signals (press, stats), straightforward rate + term disclosure, dedicated-support messaging that mirrors Credify's "strategist" angle. |

### Shared traits of the BEST (the playbook → bake into the rebuild)
- **One primary CTA repeated** (apply / get a quote) — never competing buttons.
- **Specificity = trust:** real numbers (amounts, terms, time-to-fund, approval rates) instead of vague claims.
- **Transparent process** shown as 3–4 numbered steps.
- **Legit social proof:** named clients, ratings, press, partner logos.
- **Eligibility/requirements stated honestly** before the form.
- **Fast & accessible:** strong Core Web Vitals, semantic HTML, keyboard-navigable forms, visible labels.
- **Soft-pull / "no credit impact" reassurance** near the form.
- **Schema:** Organization, FinancialService/LoanOrCredit, FAQPage, BreadcrumbList.

## Bottom 5 WORST (anti-patterns to AVOID — typical predatory MCA-broker sites)
*Characterized from CFPB complaints, PIRG, ABA, and LA County predatory-lending guidance. Representing the pattern, not naming small operators.*

| # | Anti-pattern site type | Why it's worst |
|---|------------------------|----------------|
| 1 | **"Guaranteed approval, bad credit OK" lead-farms** | No real lender; harvests PII, sells leads. Fake urgency, no company info. |
| 2 | **Hidden-cost MCA brokers** | No rates/terms anywhere; "factor rates" obscured; APR never shown — a top CFPB complaint. |
| 3 | **Stock-photo template clones** | Generic ThemeForest layout, no real proof, broken links, no SSL/security signals. |
| 4 | **Pop-up/exit-intent spam sites** | Multiple competing CTAs, countdown timers, autoplay, intrusive interstitials (Google ranking penalty). |
| 5 | **Thin one-pagers with no trust** | No physical address, no team, no licensing/disclosures, no privacy policy — fails E-E-A-T and YMYL trust. |

### Shared failures of the WORST (the do-NOT list)
- Vague/absent pricing; hidden fees; no APR.
- "Guaranteed" claims with no basis; manufactured urgency.
- No company identity, address, team, or licensing.
- Multiple competing CTAs + intrusive pop-ups.
- Slow, bloated, inaccessible; no schema; thin content.
- Aggressive PII capture before giving any value.

## Best → Worst distinction → Rebuild principles
| Dimension | BEST does | WORST does | → Credify rebuild rule |
|---|---|---|---|
| Pricing | Real ranges/terms | Hidden | Show amount ranges + terms per instrument |
| Trust | Stats, proof, identity | None | Stats band, named clients, address, disclosures |
| CTA | One, repeated | Many + pop-ups | Single "Get Your Custom Quote", no pop-ups |
| Claims | Specific, provable | "Guaranteed", fake | Keep "$100K min" but back with track record |
| Process | 3–4 clear steps | Opaque | Keep 4-step "denied → funded" |
| Forms | Honest, no-credit-pull, accessible | PII trap | Multi-step, "no credit pull", optional fields |
| Perf/SEO | Fast, schema, semantic | Bloated | Next.js SSG, CWV budget, full schema, GEO |

## Compliance note (YMYL/financial)
Financial services is **Your-Money-Your-Life** — Google holds it to the highest E-E-A-T bar. The rebuild must include: clear company identity + contact, disclosures/disclaimers, privacy policy, and honest claims. The existing site's "Guaranteed" language should be substantiated (track-record stats) to stay on the right side of both Google and regulators.
