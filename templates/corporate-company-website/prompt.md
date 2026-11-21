# Corporate Company Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a multi-page hash-routed enterprise corporate website for [BRAND] (ticker: [TICKER], headquartered in [HQ_CITY], led by CEO [CEO_NAME]), a fictional diversified industrial group spanning Advanced Materials, Electric Rail Systems, and Grid Energy Storage. Combine cohesive twilight industrial photography with deep navy, signal teal, warm white, and copper accents across Overview, Investor Relations, Sustainability, Newsroom, Leadership & Careers, and Inquiry-Routed Contact views.

- Audience: Institutional investors, municipal rail and utility procurement leaders, sustainability analysts, prospective engineering talent, and trade press.
- Goal: Project architectural credibility and operational transparency from the first frame—opening on a full-bleed dusk rail hero and concise statement, then offering verifiable interactive charts, regional offices, progress rings, and routed contact flows.
- Tone: Measured, authoritative, engineering-led corporate prose—specific tonnage, megawatt-hour capacities, and division metrics paired with explicit illustrative sample-data notices on every financial figure.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500) in src/main.tsx.
  - Download all 6 generated dusk architectural WebP images into public/images/ and reference them via relative ./images/<name>.webp paths.
  - Keep all divisions, regional offices, financial sample series, sustainability targets, newsroom articles, leadership bios, and open roles in src/data/corporateData.ts keyed from [BRAND], [TICKER], [HQ_CITY], and [CEO_NAME].
  - Render explicit 'Illustrative sample data' badges on every share-price chart, quarterly table, and financial KPI.

## Variables
- [BRAND] — Industrial Group Name (default: "Valken Industrial Group"). Fictional diversified industrial enterprise name
- [TICKER] — Sample Ticker Symbol (default: "VLKN"). 4-letter fictional exchange ticker
- [HQ_CITY] — Headquarters City (default: "Zurich"). Primary corporate headquarters city
- [CEO_NAME] — Chief Executive Name (default: "Henrik Lindholm"). Fictional group CEO name
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/corporate-company-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/corporate-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/corporate-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
