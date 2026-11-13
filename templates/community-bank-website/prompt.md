# Community Bank Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the community bank serving [CITY] for [EXPERIENCE], led by president [FOUNDER]. The page presents personal, business and lending services around two working tools: a loan calculator with a code-drawn amortization chart, and a CD ladder builder with a blended-rate and maturity schedule. A sample rates table, a stylized branch-and-ATM map with hours, a switch-to-us checklist and a security center complete the page. Rates are sample data with an as-of note; the site never names real institutions, never claims deposit insurance, and never offers financial advice. All branches, ATMs and figures are invented.

- Audience: Primary: households and small businesses around [CITY] choosing between a local institution and a megabank app — people who want better rates visible, a branch they can walk into, and no dark-pattern account openings. Secondary: credit unions and local lenders adapting the tools.
- Goal: Move a visitor from 'is the local bank actually competitive' to a started conversation: show the numbers first (rates and tools with visible math), prove the branches exist, make switching feel like five checklist items, then offer the short contact form.
- Tone: Plain, unhurried banker's English — explains numbers the way a good branch manager would across a desk. Informative, never advice; confident, never sales-y.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/lora (OFL-1.1), @fontsource/public-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Lora' and fontFamily.body 'Public Sans'.
  - Self-host Lora weights 600 and 700 and Public Sans weights 400, 500, 600, 700 through @fontsource/lora and @fontsource/public-sans, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals and number tweens; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, services, rates table rows (product, term, APY, note), calculator defaults, CD rung rates, branches and ATMs with hours, checklist steps, security tips, stats, form options. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Loan calculator math, exactly: monthly = P × r(1+r)^n ÷ ((1+r)^n − 1) with r = rate ÷ 1200, n = term months; controls: amount slider $5,000–$600,000 (default $320,000 mortgage-style), rate slider 3.0%–9.0% step 0.05 (default 6.40%), term chips 120 / 180 / 240 / 360 months (default 360); outputs: monthly payment, total interest, total paid, all rounded to whole dollars; the chart is a hand-rolled SVG of two series over time — remaining balance line and cumulative-interest area — recomputed at 24 evenly spaced points, redrawn with a 250ms transition; footnote 'Sample math, not an offer.'
  - CD ladder builder math, exactly: deposit input $5,000–$500,000 step $1,000 (default $25,000) split evenly across four rungs — 12-month 4.00% APY, 24-month 3.85%, 36-month 3.70%, 60-month 3.55%; each rung's maturity value = share × (1 + APY ÷ 12) ^ months; blended APY = average of rung APYs weighted by share (equal shares → simple average); outputs: blended APY, each rung's row (term, APY, share, maturity value), total value if all four run through their terms, and a schedule note 'a rung matures every 12 months — roll each into a new 60-month CD to keep the ladder walking'; persist inputs to localStorage under [BRAND_SLUG]-ladder.
  - Draw the branch map as a stylized inline SVG on a paper panel: a simplified street grid, a river curve, three brass branch markers (evergreen pins with brass cores) labeled with branch names, six gold ATM dots; filter chips (All / Branches / ATMs only) toggle marker visibility; each branch's hours sit in a list beside the map; a sample note 'Hours shown for this demo — holiday hours post in-branch.' No real map tiles, no real geography.
  - The switch-to-us checklist is interactive: five items ('Open your [BRAND] account online or in-branch — 15 minutes', 'Move your direct deposit (we give your payroll department the form)', 'Point your bill-pay and auto-pays at the new account', 'Let checks and card charges clear for two weeks', 'Close the old account and ask for a written confirmation'), checkboxes persist to localStorage under [BRAND_SLUG]-switch with a '3 of 5' progress chip.
  - Use only these lucide-react icons: Phone, Landmark, PiggyBank, Briefcase, Home, Car, ShieldCheck, Lock, AlertTriangle, CheckCircle2, MapPin, Clock, ChevronRight, ArrowRight, Menu, X, Calculator, TrendingUp, Users, FileCheck.
  - Persist the ladder inputs, checklist state and the contact form to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the five generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the evergreen square with a brass coin mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Bank name (default: "Almstead Community Bank"). Invented bank name; a brass-coin logomark is derived from it in code.
- [CITY] — Town (default: "Calverton"). The bank's home town; appears in hero, branches, map labels and footer.
- [FOUNDER] — President (default: "Ellen Marchetti"). Invented bank president, named in hero and about copy.
- [PHONE] — Phone (default: "(555) 664-1000"). Branch line; links as tel: with digits only.
- [EXPERIENCE] — Years serving (default: "93 years"). Plain phrase like '93 years'; used in hero and stats copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/community-bank-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/community-bank-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/community-bank-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
