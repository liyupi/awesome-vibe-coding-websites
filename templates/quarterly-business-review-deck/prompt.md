# Quarterly Business Review Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A 12-slide executive Quarterly Business Review (QBR) presentation deck for fictional SaaS operations team [BRAND], covering KPI scoreboards, an SVG ARR revenue waterfall, department-filterable OKRs, key wins, risk mitigation, headcount and burn efficiency, and next-quarter priorities.

- Audience: SaaS executives, department VPs, RevOps leads, and board observers reviewing quarterly operating performance.
- Goal: Deliver a transparent, data-dense yet scannable executive summary that highlights quarterly growth drivers, flags operational risks early, and aligns leadership on next-quarter priorities.
- Tone: Crisp, candid, quantitative, executive; plain numbers paired with direct takeaways.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/inter (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600, 700), and @fontsource/ibm-plex-mono (400, 500, 600) locally in src/main.tsx.
  - Centralize all slide metrics, waterfall segments, OKRs, risks, and speaker notes in src/data/qbrData.ts.
  - Configure @media print in src/index.css with @page { size: landscape; margin: 0; }, hiding toolbar chrome and printing all 12 slides cleanly one per page.
  - Sync active slide with URL hash (#/slide/1..12) and wire keyboard shortcuts (ArrowLeft, ArrowRight, Space, Home, End, G, N, F, Escape) plus touch swipe.

## Variables
- [BRAND] — Company name (default: "StrataPulse"). Fictional SaaS company name
- [QUARTER_LABEL] — Review period badge (default: "Q3 Business Review"). Quarter label without hardcoded calendar year
- [HEADLINE_ARR] — Ending ARR figure (default: "$24.8M"). Primary top-line ARR metric on cover and scoreboard
- [TEAM_SCOPE] — Operating scope (default: "Global SaaS Operations"). Scope line on cover slide
- [LEAD_PRESENTER] — Presenter name and title (default: "Elena Vance, COO"). Fictional executive presenter
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/quarterly-business-review-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Studio White `#FFFFFF` — Primary slide background
- Graphite Ink `#111827` — Headlines, primary numbers, and executive contrast panels
- Indigo Signal `#4F46E5` — Primary accent, ARR bars, active filters, and hero visual header
- Warm Amber `#F59E0B` — Attention metrics, at-risk OKRs, and amber highlights
- Soft Mist `#F3F4F6` — Subtle card surfaces and chart grid bands
- Emerald On-Track `#059669` — Positive deltas and on-track traffic lights
- Rose Alert `#E11D48` — Churn, contraction bars, and high-severity risks

### Typography
- Display headings: Space Grotesk (OFL), weights 500/600/700
- Body and tables: Inter (OFL), weights 400/500/600/700
- Financial figures and slide indices: IBM Plex Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Desktop presents a crisp 16:9 studio canvas (max 1320px, 44px padding) framed on a subtle cool-gray surround (#EEF0F4) with a 56px bottom presentation control bar. Mobile (<768px) adapts cleanly into single-column cards with >=44px controls and zero horizontal overflow.
- Radius: 10px for data panels, 6px for department tabs and buttons, 999px for traffic-light status badges.
- Motion: Smooth directional slide transition (200ms ease-out) with prefers-reduced-motion fallback.
- Motion: Smooth count-up polish on the 4 headline KPI scoreboard metrics when Slide 02 becomes active.
- Motion: Hover tooltips and active bar highlighting on SVG waterfall, retention, and burn charts.
- Motion: All content visible by default with no hidden scroll-clip states.
- Imagery: Pure code-drawn Swiss data visuals: SVG ARR waterfall bridge, cohort sparklines, burn/runway dual-axis chart, traffic-light OKR meters, and Lucide icons. Zero external photos.

## Pages & Sections
### [BRAND] — [QUARTER_LABEL] (`index.html`)
1. **Deck Controls, Overview Grid (G) & Speaker Notes (N)** — Clean top header strip with [BRAND] geometric mark, [QUARTER_LABEL] pill, active section tag, and Print PDF button. Bottom control bar with Prev/Next arrows, mono slide counter (01 / 12), clickable 12-segment indigo progress bar, Overview Grid button (G), Speaker Notes + Timer button (N), and Fullscreen button (F). G opens a 12-tile visual overview modal; N opens a speaker-notes panel with executive talking points per slide and a Start/Pause/Reset timer.
   Layout: Fixed 16:9 viewport frame on desktop; fluid vertical single-column slide view on mobile (<768px) with swipe gestures.
2. **Slide 01 — Cover & Executive Snapshot** — Bold indigo (#4F46E5) top accent bar and Swiss split cover. Left side: [QUARTER_LABEL] pill in warm amber (#F59E0B) tint, large headline '[BRAND] Executive Business Review', subtitle '[TEAM_SCOPE] · Presented by [LEAD_PRESENTER]', and a concise 1-line quarter verdict ('Net new ARR beat plan by 11% while burn multiple tightened to 0.8x.'). Right side visual anchor: a rich graphite (#111827) executive summary card displaying Ending ARR ([HEADLINE_ARR]), NRR (118%), Gross Margin (81.4%), and an inline SVG 6-quarter ARR growth step chart glowing in indigo and warm amber.
   Layout: 7/5 asymmetric Swiss grid on desktop; cleanly stacked on mobile.
3. **Slide 02 — Executive KPI Scoreboard** — Headline 'Headline Operating Metrics vs Plan'. Four large KPI cards with animated counter readouts, target attainment progress bars, and quarter-over-quarter deltas: Ending ARR ([HEADLINE_ARR], +14.2% QoQ), Net Revenue Retention (118.4%, +2.1 pts), Gross Logo Churn (4.1%, -0.7 pts improved), and CAC Payback (13.2 months, -1.8 mo vs plan). Bottom strip shows a 3-point CFO commentary summary.
   Layout: 2x2 spacious KPI grid with bold mono metrics and inline SVG trend sparklines; 1-column stack on mobile.
4. **Slide 03 — SVG Revenue Waterfall Chart** — Headline 'ARR Bridge: Strong Expansion Offset Mid-Market Churn'. Interactive code-drawn SVG waterfall chart tracking Beginning ARR ($21.7M) -> New Logo ARR (+$2.9M, indigo) -> Expansion ARR (+$1.6M, emerald) -> Contraction (-$0.5M, amber) -> Churn (-$0.9M, rose) -> Ending ARR ([HEADLINE_ARR], graphite). Clicking or hovering any bar updates a callout strip with deal count, top contributing segment, and variance vs forecast.
   Layout: Wide SVG chart canvas (8 cols) paired with an interactive bar-inspector detail panel (4 cols); stacked on mobile.
5. **Slide 04 — Interactive Department OKR Progress** — Headline 'Quarterly OKR Attainment by Function'. Filter bar across All / Product / Sales / Marketing / CS (each showing count and average attainment). Displays structured objective cards with key-result completion percentages, progress bars, owner initials badge, and color-coded traffic-light pills (On Track — emerald, At Risk — amber, Off Track — rose). Clicking any department filters the board live and updates the top attainment summary bar.
   Layout: Filter pills header + 2-column OKR card grid on desktop; 1-column cards on mobile.
6. **Slide 05 — Go-To-Market & Pipeline Velocity** — Headline 'Enterprise Segment Drove 62% of Net-New Bookings'. Left: SVG horizontal stacked bar chart comparing Segment Bookings (Enterprise, Mid-Market, Self-Serve) against quarterly quota. Right: 3 conversion funnel KPIs (Qualified Pipeline Coverage 3.4x, Enterprise Win Rate 28.5%, Average Sales Cycle 64 days) with amber callout noting mid-market cycle elongation.
   Layout: 7/5 split grid with crisp axis labels and hover readouts.
7. **Slide 06 — Product Delivery & Platform Reliability** — Headline 'Shipped 3 Flagship Releases With 99.97% Uptime'. Top 3 highlight cards (Multi-Region Workflow Sync, Role-Scoped Audit Export, Bulk CSV Importer v2) with adoption percentage meters. Bottom strip: engineering health bar showing Uptime (99.97%), P95 API Latency (118ms), and Support Ticket Deflection (42%).
   Layout: 3-column release showcase above a dark graphite reliability strip.
8. **Slide 07 — Key Wins Gallery** — Headline 'Quarter Highlights Across Customers, Product & Team'. A 6-card visual wins grid featuring concrete milestones (e.g., Largest Multi-Year Expansion $420K ACV, EMEA Hosting Region Go-Live, NPS +11 to 58, Support First-Response Under 14m, Partner Channel 18% of Pipeline, Zero Critical Security Findings), each tagged by department and impact value.
   Layout: 3x2 crisp card gallery with indigo/amber top accent tags; 1-column stack on mobile.
9. **Slide 08 — Customer Health & Retention Cohorts** — Headline 'Enterprise Net Retention Reached 124%'. Code-drawn SVG grouped retention curve comparing SMB, Mid-Market, and Enterprise accounts over 4 quarters with a clickable segment toggle, paired with 3 renewal health callouts (Accounts Renewed On Time 94%, At-Risk Renewal Pool $1.1M, Executive Sponsor Coverage 82%).
   Layout: 7/5 split with interactive SVG multi-line chart on left and renewal health panel on right.
10. **Slide 09 — Risk & Mitigation Matrix** — Headline 'Top Operating Risks & Active Mitigations'. Interactive 2x2 severity/likelihood visual matrix (SVG quadrant plot with numbered risk markers R1–R5) alongside a structured mitigation table listing Risk Title, Owner, Severity pill (High/Medium), and Concrete Action + Target Check-In. Clicking a marker highlights its row.
   Layout: 5/7 split pairing the SVG risk quadrant plot with the actionable mitigation ledger.
11. **Slide 10 — Headcount, Burn & Efficiency Overview** — Headline 'Disciplined Hiring Extended Runway to 34 Months'. Left: SVG dual-bar & line chart comparing Quarterly Net Burn vs Net New ARR over 4 quarters (Burn Multiple improving from 1.3x to 0.8x). Right: Headcount breakdown by function (Engineering 48, GTM 39, Product & Design 16, G&A 11; Total 114 vs 118 plan) with open-req status pills.
   Layout: 7/5 split grid with clean SVG legend and tabular headcount readout.
12. **Slide 11 — Next-Quarter Strategic Priorities Roadmap** — Headline 'Four Non-Negotiable Priorities for Next Quarter'. Four horizontal priority lanes (P1 Enterprise Self-Serve Expansion, P2 Mid-Market Churn Turnaround, P3 AI Reporting Assistant GA, P4 EMEA Commercial Hub) showing executive owner, success metric target, and 3-month execution checkpoints (Month 1, Month 2, Month 3).
   Layout: 4 stacked structured roadmap rows with indigo/amber milestone pills.
13. **Slide 12 — Executive Discussion & Decisions Needed** — Headline 'Decisions Required From Leadership Today'. High-contrast graphite (#111827) closing slide with 3 numbered decision cards (Approve 6 Additional Enterprise AE Reqs, Sign Off Mid-Market Packaging Floor, Confirm EMEA Marketing Budget Shift) featuring interactive 'Logged' status checkboxes for live meeting capture, plus Print PDF and Return to Slide 01 actions.
   Layout: Centered closing stage with 3 decision cards and footer presenter sign-off.

## Assets
- icon: Install lucide-react (ISC) for arrows, status dots, filters, and presentation toolbar controls.
- font: Self-host Space Grotesk, Inter, and IBM Plex Mono via @fontsource packages (OFL).
- image: All charts (ARR waterfall, retention curves, burn multiple, risk matrix, sparklines) are rendered as crisp inline SVGs. No external images.

## Don'ts
- No backend, API calls, CDN scripts, or external Google Fonts links.
- No real company names, public stock tickers, or real executive identities.
- No source maps in production build and always use base: './'.
- No horizontal overflow or cramped tables on 390x844 mobile viewports.
- No hardcoded real-world calendar dates; use Q1–Q4 and Month 1–3 relative markers.
- No hidden scroll-triggered elements; every slide is immediately visible when active.
- No mention of VibeFather or competitors anywhere in the deck except the optional [CREDIT] slot.

---
— Prompt by VibeFather · https://vibefather.ai/t/quarterly-business-review-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
