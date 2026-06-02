// Single source of truth — carried over from getcredify.io, restructured for the rebuild.

export const site = {
  name: "Credify",
  domain: "https://getcredify.io",
  tagline: "Making the impossible possible.",
  phone: "(212) 555-0142",
  phoneHref: "tel:+12125550142",
  email: "Fund@getcredify.io",
  emailHref: "mailto:Fund@getcredify.io",
  cta: { label: "Get Your Custom Quote", href: "/apply" },
};

export const heroStats = "1,280 files banks said no to. 1,280 we said yes to. $840M placed. $100K minimum approval, guaranteed.";

export const stats = [
  { value: "$100K", label: "Minimum approval", note: "Every accepted file starts here. We only take files we know we can place." },
  { value: "$840M+", label: "Capital delivered", note: "Placed across 1,280 operators denied elsewhere first." },
  { value: "99%", label: "Approval rate", note: "Of accepted files close at the quoted terms. We vet the lender before we vet you." },
  { value: "100+", label: "Capital partners", note: "Private lenders who underwrite the files banks won't." },
];

export const comparison = {
  headers: ["", "Banks & Platforms", "Credify"],
  rows: [
    ["Time to Fund", "30–90 days", "24 hrs – 6 days"],
    ["Application", "2–3 hours", "Under 4 minutes"],
    ["Capital Sources", "5–10 products", "100+ private partners"],
    ["Dedicated Strategist", "No", "Yes"],
    ["Credit Requirement", "700+ FICO", "No minimum floor"],
    ["Approval Guarantee", "No", "$100K minimum"],
  ],
};

export const steps = [
  { n: "01", title: "Submit Your File", body: "Send what you have. Tax returns, denial letters, bank statements. Fifteen minutes. No pitch decks." },
  { n: "02", title: "Strategy Call", body: "A Credify partner maps a path through the denials. We know which lenders fund which files." },
  { n: "03", title: "Matched to a Lender", body: "We route your file to the partner most likely to close. No spray-and-pray. One match." },
  { n: "04", title: "Funded", body: "Wire hits your account. $100K minimum, guaranteed. Your partner stays on through year-end." },
];

export type Service = { slug: string; title: string; group: string; tag: string; body: string; meta: string };

export const services: Service[] = [
  { slug: "working-capital-lines", title: "Working Capital Lines", group: "Working Capital", tag: "Flagship · $100K to $10M", meta: "12 to 36 mo · revolving", body: "Revolving credit priced to your actual cash flow, not your credit score. Draw on demand, repay as revenue clears. For operators banks call “too volatile.”" },
  { slug: "term-loans", title: "Term Loans", group: "Term & SBA", tag: "Instrument II", meta: "12 to 60 mo", body: "Fixed amortization for operators building balance sheets banks can’t read yet. No prepayment penalties." },
  { slug: "bridge-loans", title: "Bridge Loans", group: "Working Capital", tag: "Instrument III", meta: "Same week", body: "Same-week capital for closings that can’t wait four weeks on a bank’s schedule." },
  { slug: "equipment-asset-finance", title: "Equipment & Asset Finance", group: "Asset & Real Estate", tag: "Instrument IV", meta: "Collateralized", body: "Collateralized placements when liquid capital is tight and the machine still has to be on the floor Monday." },
  { slug: "commercial-real-estate", title: "Commercial Real Estate", group: "Asset & Real Estate", tag: "Instrument V", meta: "Senior / Mezz", body: "Senior and mezzanine structures for properties banks flag as “complex.” Underwritten by the asset, not the algorithm." },
  { slug: "business-line-of-credit", title: "Business Line of Credit", group: "Working Capital", tag: "Instrument VI", meta: "Revolving", body: "Flexible revolving access for payroll, inventory, and the gaps between invoices." },
  { slug: "accounts-receivable-financing", title: "Accounts Receivable Financing", group: "Working Capital", tag: "Instrument VII", meta: "Against AR", body: "Turn unpaid invoices into working capital today instead of waiting net-60." },
  { slug: "credit-stacking", title: "0% Credit Stacking", group: "Working Capital", tag: "Instrument VIII", meta: "0% intro", body: "Stacked 0% introductory business credit lines for founders who qualify — cash-equivalent capital, no interest during the intro window." },
  { slug: "asset-based-lending", title: "Asset Based Lending", group: "Asset & Real Estate", tag: "Instrument IX", meta: "Against assets", body: "Borrow against inventory, equipment, or receivables when cash flow alone won’t clear underwriting." },
  { slug: "sba-loans", title: "SBA Loans", group: "Term & SBA", tag: "Instrument X", meta: "Up to 25 yr", body: "Government-backed term financing at the lowest available rates for operators who fit the profile." },
  { slug: "personal-loans", title: "Personal Loans", group: "Asset & Real Estate", tag: "Instrument XI", meta: "Personal", body: "Personal capital options for founders bootstrapping before the business qualifies on its own." },
  { slug: "short-term-business-loans", title: "Short Term Business Loans", group: "Term & SBA", tag: "Instrument XII", meta: "3 to 18 mo", body: "Fast, short-duration capital for a specific opportunity with a clear payoff window." },
];

export const serviceGroups = ["Working Capital", "Term & SBA", "Asset & Real Estate"] as const;

export type Industry = { slug: string; name: string; flagship?: boolean; blurb: string; challenges: string[]; products: string[]; range: string };

export const industries: Industry[] = [
  { slug: "real-estate", name: "Real Estate", flagship: true, range: "Same-week close · $250K to $25M", blurb: "Investors and property managers need flexible capital for acquisitions, renovations, and portfolio growth. We connect you with lenders who price by the asset, not the algorithm.", challenges: ["Property acquisition and fix-and-flip projects", "Commercial real estate investments", "Renovation and construction costs", "Portfolio leverage when banks pull lines"], products: ["Bridge Loans", "Commercial Real Estate", "Line of Credit", "SBA Loans", "Asset Based Lending"] },
  { slug: "construction", name: "Construction", range: "$100K to $10M", blurb: "From equipment purchases to project financing, we help construction companies secure the capital to take on bigger jobs and grow their fleet.", challenges: ["Equipment and fleet expansion", "Project mobilization costs", "Slow progress-payment cycles", "Bonding and working capital"], products: ["Equipment Financing", "Working Capital Lines", "Bridge Loans", "AR Financing"] },
  { slug: "healthcare", name: "Healthcare", range: "$100K to $10M", blurb: "Practices and clinics fund expansion, equipment, and the gap between care delivered and insurance paid.", challenges: ["Medical equipment acquisition", "Insurance reimbursement lag", "Practice expansion and buildout", "Staffing and payroll cycles"], products: ["Equipment Financing", "AR Financing", "Term Loans", "SBA Loans"] },
  { slug: "retail", name: "Retail / E-commerce", range: "$100K to $5M", blurb: "Inventory-heavy operators fund seasonal buys and growth without surrendering margin to their bank’s calendar.", challenges: ["Seasonal inventory buys", "Marketplace cash-flow timing", "Store expansion", "Marketing and growth capital"], products: ["Working Capital Lines", "0% Credit Stacking", "Short Term Loans", "AR Financing"] },
  { slug: "restaurants", name: "Restaurants", range: "$100K to $3M", blurb: "Owners fund buildouts, equipment, and the slow seasons banks refuse to underwrite.", challenges: ["Buildout and renovation", "Kitchen equipment", "Seasonal revenue swings", "Multi-location expansion"], products: ["Equipment Financing", "Working Capital Lines", "Bridge Loans", "SBA Loans"] },
  { slug: "trucking", name: "Trucking & Logistics", range: "$100K to $10M", blurb: "Fleet operators finance trucks, fuel, and the 60-day gap before the broker pays.", challenges: ["Truck and trailer acquisition", "Fuel and maintenance float", "Factoring and AR timing", "Fleet expansion"], products: ["Equipment Financing", "AR Financing", "Asset Based Lending", "Working Capital Lines"] },
  { slug: "manufacturing", name: "Manufacturing", range: "$250K to $25M", blurb: "Producers fund machinery, raw materials, and large purchase orders banks consider too lumpy.", challenges: ["Machinery and tooling", "Raw material purchasing", "Large PO financing", "Facility expansion"], products: ["Equipment Financing", "Asset Based Lending", "Working Capital Lines", "Term Loans"] },
  { slug: "home-services", name: "Home Services", range: "$100K to $3M", blurb: "HVAC, plumbing, electrical, and contracting firms fund trucks, crews, and growth.", challenges: ["Fleet and equipment", "Seasonal demand swings", "Payroll during ramp", "Marketing for new markets"], products: ["Equipment Financing", "Working Capital Lines", "0% Credit Stacking", "Short Term Loans"] },
  { slug: "professional-services", name: "Professional Services", range: "$100K to $5M", blurb: "Firms and agencies fund hiring, technology, and the gap between billable work and collected fees.", challenges: ["Hiring ahead of revenue", "Technology investment", "Receivables timing", "Acquisition and buyout"], products: ["AR Financing", "Working Capital Lines", "Term Loans", "SBA Loans"] },
];

export const testimonials = [
  { quote: "Three banks passed. Credify placed $1.2M in nine days and the strategist stayed on through close. They read the business, not the score.", name: "Marcus Delgado", role: "GC, Commercial Construction", placed: "$1.2M placed", avatar: "https://randomuser.me/api/portraits/men/52.jpg" },
  { quote: "We were net-60 and drowning. The AR line bridged the gap the same week. No credit pull, no theater.", name: "Priya Sharma", role: "Founder, Regional Logistics", placed: "$450K AR line", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { quote: "Every platform underwrote us by template and said no. One match here and the wire hit in four days.", name: "Aaron Tillman", role: "Owner, Multi-unit Restaurants", placed: "$2.1M placed", avatar: "https://randomuser.me/api/portraits/men/76.jpg" },
];

const img = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

// What your capital unlocks — the aspirational outcomes (financial freedom)
export const unlocks = [
  { title: "Open the second location", body: "The lease is sitting on your desk. The build-out quote is real. We fund the expansion banks call premature.", image: img("photo-1517248135467-4c7edcad34c4") },
  { title: "Close the building", body: "Bridge capital that moves on the seller's timeline, not a 60-day underwriting queue. Same-week wires.", image: img("photo-1480714378408-67cf0d13bc1b") },
  { title: "Take the job that's too big", body: "Win the contract your balance sheet can't cover yet. We fund the mobilization, you grow into it.", image: img("photo-1503387762-592deb58ef4e") },
  { title: "Keep the fleet moving", body: "Cover fuel, payroll, and the gap before the broker pays. Your wheels never stop on a cash-flow timing issue.", image: img("photo-1469854523086-cc02fe5d8800") },
];

export const ctaImage = img("photo-1469854523086-cc02fe5d8800");
export const heroImage = "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2400&auto=format&fit=crop";

export const faqs = [
  { q: "What does the $100K minimum approval guarantee mean?", a: "Credify only accepts files we are confident we can place. Once a file is accepted onto the desk, we guarantee a minimum approval of $100,000 — that is the floor we underwrite to before we take you on." },
  { q: "Will applying affect my credit score?", a: "No. Our initial review is a soft process with no hard credit pull. A hard inquiry only happens later, with your explicit consent, once you choose to move forward with a specific lender." },
  { q: "How fast can I get funded?", a: "Most accepted files fund within 24 hours to 6 days, depending on the instrument. Bridge capital can move the same week; SBA and real-estate structures take longer." },
  { q: "Do you have a minimum credit score requirement?", a: "No minimum FICO floor. We underwrite the business — cash flow, assets, and the actual file — and match it to the 100+ private partners who fund what banks won't." },
  { q: "What do you need from me to start?", a: "Whatever you have: recent bank statements, tax returns, and any denial letters. Fifteen minutes, no pitch deck. The more context up front, the faster we match you." },
  { q: "What does it cost to apply?", a: "Nothing. The application, strategy call, and lender matching are free. You only proceed if the quoted terms work for you." },
];
