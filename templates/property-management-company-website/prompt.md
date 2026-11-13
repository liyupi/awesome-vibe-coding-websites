# Property Management Company Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the residential property management firm led by managing broker [FOUNDER] in [CITY], managing 340 doors over [EXPERIENCE]. The page runs two clear paths: owners (services, a transparent fee table, a rental income estimator with visible math, testimonials with numbers, a rental analysis form) and tenants (a filterable rentals grid, apply steps, and a maintenance request flow saving to a local list with statuses). Warm brick and ink navy on sand; photography of managed homes and the leasing office. All fees, listings and people are invented sample data.

- Audience: Two audiences, both local: owners — landlords with one to ten doors weighing management fees against their own weekends; and tenants — renters hunting a home who want the listing, the steps and a working maintenance form without creating an account.
- Goal: Owners: reach the rental analysis form with the fee structure and estimator having already answered the money question. Tenants: reach an application with a listing chosen, and trust that maintenance gets handled.
- Tone: Straightforward broker English — warm but numerate. Fees explained like an adult conversation; tenant copy plain and quick.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/source-serif-4 (OFL-1.1), @fontsource/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Source Serif 4' and fontFamily.body 'Inter'.
  - Self-host Source Serif 4 weights 600 and 700 and Inter weights 400, 500, 600, 700 through @fontsource/source-serif-4 and @fontsource/inter, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals and estimator tweens; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, owner services, fee rows, estimator defaults, testimonials, the eight rental listings (title, beds, baths, sqft, rent, type, photo key, availability chip), apply steps, maintenance categories and urgencies, seeded sample requests, towns with unit counts, analysis form copy. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Income estimator math, exactly: inputs — monthly rent slider $800–$5,000 (default $2,100), vacancy weeks per year 0–8 (default 3), management fee 6–12% (default 8.5%), maintenance reserve 3–10% (default 5%); computed — gross annual = rent × 12; vacancy cost = rent ÷ 4.33 × weeks; collected = gross annual − vacancy cost; management fee cost = collected × fee%; reserve cost = collected × reserve%; net annual = collected − management fee cost − reserve cost; net monthly = net annual ÷ 12, all rounded to whole dollars; the output panel shows net monthly big plus a line list ('Gross $25,200', 'Vacancy (3 wks) −$1,455', 'Management 8.5% −$2,023', 'Reserve 5% −$1,187') and a footnote 'Sample math on sample assumptions — not a guarantee of income.' Persist inputs to localStorage under [BRAND_SLUG]-estimator.
  - The fee table, exactly five rows: 'Leasing fee' — '75% of one month's rent' — 'paid only when a tenant signs'; 'Management' — '8.5% of collected rent' — 'never charged on vacancy'; 'Renewal' — '$250' — 'when the same tenant re-signs'; 'Maintenance coordination' — 'included' — 'vendors at our volume rates, markup $0'; 'Lease-out guarantee' — 're-lease free' — 'if a tenant we placed breaks the lease in the first six months'.
  - The rentals grid, exactly eight listings with fields (title like 'Craftsman on Alder Ave', beds, baths, sqft, rent, type, availability chip): mix houses and townhomes across the invented towns, photos assigned from the generated set (exteriors and interior reused across listings deterministically by index), filters — beds chips (Any / 1 / 2 / 3+), price max slider $1,200–$3,600, type chips (House / Townhome) — with a live count ('6 of 8 homes') and 'Clear filters' when active; zero-result state shows the clear chip. Each card: photo 4:3, rent in Source Serif 700 brick, beds/baths/sqft row, availability chip ('Available now' sand-ground / 'Mid-month' steel), navy 'View & apply' link scrolling to apply steps with the home's title preselected.
  - The maintenance flow, exactly: form — property select (the eight listings), category chips (Plumbing / Electrical / Appliance / HVAC / General), urgency chips (Routine — 'scheduled within a week' / Urgent — '48 hours' / Emergency — 'call [PHONE] now' with the emergency selection showing the call line instead of the form), description textarea, optional photo note; submit adds the request to 'My requests' with status 'Submitted', timestamp-free, persisted to localStorage under [BRAND_SLUG]-requests; the list ships with two seeded sample requests ('Furnace filter', status 'Done'; 'Kitchen faucet drip', status 'Scheduled') so the UI is never empty, labeled 'sample' in 12px; each row shows status steps (Submitted → Scheduled → Done) with the current step highlighted; statuses do not auto-advance.
  - Draw the service-area map as an inline SVG on sand: six navy town dots sized by unit count with labels ('Ellsworth — 120 doors', 'Harlow Corners — 64', 'Dunmor — 58', 'Pierpont — 42', 'Kettle Falls — 34', 'Alder Flat — 22'), thin brick connector roads, a brick star at [CITY].
  - Use only these lucide-react icons: Phone, KeyRound, Wrench, FileText, ShieldCheck, CheckCircle2, Star, MapPin, ChevronRight, ArrowRight, Menu, X, Home, Users, ClipboardList, AlertTriangle, Droplets, Zap, Thermometer.
  - Persist the estimator inputs, maintenance requests and analysis form to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the navy square with a brick key mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Firm name (default: "Tandem House Property Co."). Invented firm name; a key logomark is derived from it in code.
- [CITY] — City (default: "Ellsworth"). The firm's home base; the map star and office address use it.
- [FOUNDER] — Managing broker (default: "Marcus Fielder"). Invented broker, named in hero and testimonial copy.
- [PHONE] — Phone (default: "(555) 228-6614"). Office and emergency line; links as tel: with digits only.
- [EXPERIENCE] — Years managing (default: "16 years"). Plain phrase like '16 years'; used in hero and about copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/property-management-company-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/property-management-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/property-management-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
