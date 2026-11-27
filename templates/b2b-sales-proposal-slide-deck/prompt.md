# B2B Sales Proposal Slide Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
An interactive 12-slide enterprise B2B sales proposal web deck prepared by fictional workflow automation vendor [BRAND] for prospect [PROSPECT]. Designed for executive briefings and champion self-review, featuring an interactive SVG architecture inspector, live ROI payback calculator, 90-day rollout plan, pricing & SLA matrix, and full presenter tooling.

- Audience: Enterprise VPs of Operations, Procurement leads, IT architects, and B2B account executives presenting tailored software proposals.
- Goal: Align executive stakeholders on the problem cost, technical fit, financial payback, implementation timeline, and commercial terms to advance the deal to signature.
- Tone: Confident, analytical, concise, boardroom-ready; concrete operational metrics without hype or vague buzzwords.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL), @fontsource/ibm-plex-mono (OFL), @fontsource/fraunces (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/ibm-plex-mono (400, 500, 600) locally in src/main.tsx.
  - Keep all slide copy, metrics, architecture nodes, pricing tiers, and speaker notes in src/data/deck.ts so replacing variables updates the entire deck.
  - Configure @media print in src/index.css with @page { size: landscape; margin: 0; }, hiding navigation chrome and modals while printing every slide in a clean 16:9 container with break-after: page.
  - Persist current slide index in the URL hash (#/slide/1 through #/slide/12) and support keyboard shortcuts (ArrowRight, ArrowLeft, Space, Home, End, G, N, F, Escape) plus horizontal touch swipe.

## Variables
- [BRAND] — Vendor brand name (default: "RelayWorks"). Fictional B2B software vendor name
- [PROSPECT] — Prospect company name (default: "Meridian Freight"). Fictional client company being pitched
- [PRODUCT_CATEGORY] — Solution category (default: "Enterprise Workflow Automation"). Short descriptor of what the vendor sells
- [ACV_RANGE] — Target annual contract value (default: "$84,000 / year"). Anchor commercial figure on cover and pricing slides
- [CONTACT_EMAIL] — Account executive email (default: "enterprise@relayworks.example"). Fictional contact address on closing slide
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/b2b-sales-proposal-slide-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Ivory Canvas `#F8F7F4` — Primary slide background and stage surface
- Slate Ink `#0F172A` — Primary headlines, body text, and dark executive contrast blocks
- Royal Cobalt `#2563EB` — Primary accent, active diagram paths, interactive controls, and hero visual anchor
- Emerald Outcome `#10B981` — ROI gains, SLA guarantees, positive deltas, and verified badges
- Warm Stone `#E6E4DD` — Hairline borders, card dividers, and grid tracks
- Muted Slate `#475569` — Secondary captions, axis labels, and metadata

### Typography
- Display serif headings: Fraunces (OFL), weights 600/700
- UI and body copy: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Metrics, codes, and slide counters: IBM Plex Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Desktop uses a centered 16:9 stage (max 1320px wide, 48px horizontal / 40px vertical inner padding) with disciplined whitespace above a 56px bottom presentation bar. Mobile (<768px) switches to full-width scrollable slide cards with 20px padding and stacked single-column layouts.
- Radius: 12px for metric and tier cards, 8px for diagram nodes and buttons, 999px for status pills.
- Motion: Crisp horizontal slide cross-translate (220ms cubic-bezier(0.22, 1, 0.36, 1)) between slides, disabled under prefers-reduced-motion.
- Motion: Animated SVG data-flow pulse along active connectors when inspecting architecture nodes.
- Motion: Smooth number transitions on ROI calculator readouts as sliders move.
- Motion: All slide content renders visible by default without scroll-clip traps.
- Imagery: 100% code-drawn vector visuals: architectural pipeline diagrams, SVG bar and payoff charts, geometric cover artwork with live deal summary panel, and crisp Lucide iconography. No photographs or external images.

## Pages & Sections
### [BRAND] × [PROSPECT] — Enterprise Proposal Deck (`index.html`)
1. **Presentation Shell & Presenter Tooling** — Persistent minimal top bar (brand monogram + [BRAND] × [PROSPECT] breadcrumb, slide chapter pill, Print PDF button) and fixed bottom control bar (Prev/Next buttons, slide counter 01 / 12 in mono, clickable 12-segment progress bar, Grid overview toggle G, Speaker notes + timer toggle N, Fullscreen toggle F). Pressing G opens a 4x3 responsive slide thumbnail grid showing each slide's number, title, and miniature visual preview; clicking any tile jumps directly to that slide. Pressing N opens a non-blocking presenter notes drawer at the bottom or right with tailored talking points for the active slide plus a live Start/Pause/Reset presentation timer.
   Layout: Full-viewport stage on desktop (100dvh, centered 16:9 canvas with clean surround and zero overflow); vertical single-column deck flow on mobile (<768px) with swipe support and >=44px touch targets.
   Motion: Fast slide crossfade + 16px directional slide transition; smooth drawer slide-in for Notes (N) and scale-fade for Overview Grid (G).
2. **Slide 01 — Title & Executive Account Summary** — Left column: category eyebrow '[PRODUCT_CATEGORY] PROPOSAL', bold headline 'Eliminate 14,200 Hours of Manual Operations Across [PROSPECT]', crisp executive subtitle prepared for [PROSPECT] Leadership, and 3 key value pills (4.2-month payback, 99.95% SLA, 90-day live rollout). Right column visual anchor: a dark slate (#0F172A) executive dossier card accented in royal cobalt (#2563EB) and emerald (#10B981) showing Prepared For [PROSPECT], Target Scope (420 seats across 4 regions), Proposed Investment ([ACV_RANGE]), Projected Year-1 Net Value ($312,000), and a live SVG mini-sparkline of operational cycle-time reduction.
   Layout: Asymmetric 7/5 split grid on desktop with bold royal cobalt vertical accent bar and crisp emerald metric tags; cleanly stacked on mobile.
   Motion: Subtle SVG stroke draw on the mini cycle-time curve on load.
3. **Slide 02 — Executive Agenda & Decision Outcomes** — Headline 'What We Will Align On Today'. Four numbered narrative pillars (01 Operational Bottlenecks, 02 Target Architecture & Security, 03 Live Financial Payback Model, 04 90-Day Rollout & Commercial Terms) with concise owner tags (Ops, IT Security, Finance, Procurement) and a bottom summary strip stating the target signature milestone and pilot kickoff window.
   Layout: 4-column horizontal numbered cards on desktop with top cobalt rule accents; 1-column list on mobile.
4. **Slide 03 — Client Pain-Point Breakdown** — Headline 'Where Manual Handoffs Drain [PROSPECT] Margin'. Left side: 4 structured bottleneck cards discovered during scoping (Invoice Reconciliation Lag — 18.4 hrs/week; Multi-ERP Order Re-keying — 6.2% error rate; Exception Escalation Blind Spots — 41 hrs average resolution; Audit Evidence Assembly — 3 weeks per quarter). Right side: code-drawn horizontal SVG cost-breakdown bar chart totaling $428,000/yr in avoidable operational drag, with clickable highlight per bottleneck.
   Layout: 6/6 split grid with interactive bottleneck selection highlighting the corresponding SVG bar.
5. **Slide 04 — Strategic Shift: Before vs After** — Headline 'From Fragmented Spreadsheets to Event-Driven Execution'. Side-by-side comparison cards: 'Current State' (muted warm stone header, 5 concrete friction points with amber/slate markers) vs 'With [BRAND]' (royal cobalt & emerald header, 5 measurable target-state outcomes including <12s exception routing and automated audit trail), plus a central directional delta strip showing -74% manual touchpoints.
   Layout: 2-column comparison with centered delta callout strip; stacked cleanly on mobile.
6. **Slide 05 — Interactive Solution Architecture Diagram** — Headline 'Zero-Disruption Integration With Your Existing Stack'. An interactive SVG distributed architecture diagram with 5 clickable nodes connected by animated directional paths: (1) Source Systems (ERP, WMS, EDI), (2) [BRAND] Ingestion Gateway, (3) Policy & AI Triage Engine, (4) Human-in-the-Loop Approval Hub, and (5) Audit Ledger & Analytics Sink. Clicking any node highlights its upstream/downstream connectors in cobalt/emerald and updates the inspector panel below with exact protocol specs, p99 latency, failover behavior, and encryption details.
   Layout: Full-width interactive SVG canvas (top 60%) paired with a structured 3-column inspector bar (bottom 40%); scrollable SVG container or compact node selector tabs on mobile.
   Motion: Animated dashed pulse moving along connected paths of the selected node.
7. **Slide 06 — Interactive ROI & Time-Saved Calculator** — Headline 'Model [PROSPECT] Payback Under Your Own Assumptions'. Left panel: three interactive sliders with live mono readouts — Operations Team Size (20 to 500 staff, default 120), Blended Hourly Cost ($35 to $140/hr, default $68/hr), and Weekly Manual Hours Automated per Person (1.5 to 10 hrs, default 4.5 hrs), plus a scenario preset strip (Conservative / Expected / Aggressive). Right panel: live computed KPI cards (Annual Hours Reclaimed, Gross Productivity Value, Net Year-1 Return after [ACV_RANGE], Payback Period in Months highlighted in emerald) and a dynamic SVG 12-month cumulative cash-flow curve marking the break-even month.
   Layout: 5/7 split grid on desktop; stacked sliders above live chart and summary cards on mobile.
8. **Slide 07 — 90-Day Phased Rollout Timeline** — Headline 'Production Value in 90 Days Without Halting Operations'. Three interactive phase columns (Days 1–30: Connect & Shadow Mode; Days 31–60: Controlled Automation Wave 1; Days 61–90: Full Scale & Governance Handover) rendered over a horizontal SVG milestone Gantt bar. Clicking a phase reveals the exact weekly deliverables, [BRAND] solutions-team hours, and [PROSPECT] IT lift (under 6 hrs/week).
   Layout: Horizontal SVG timeline bar above 3 selectable phase cards and a bottom responsibility-split strip.
9. **Slide 08 — Commercial Options: 3-Tier Pricing & SLA Comparison** — Headline 'Transparent Commercial Tiers Aligned to Volume'. Three side-by-side plan cards: Core Operations ($54,000/yr, up to 150 seats, 99.9% SLA, 4h response), Enterprise Scale (recommended, highlighted with cobalt border and badge, [ACV_RANGE], up to 450 seats, 99.95% SLA, dedicated TAM, 1h response), and Global Dedicated ($132,000/yr, unlimited seats, 99.99% SLA, single-tenant VPC, 15m response). Includes a Billing Term toggle (Annual vs 2-Year Lock -12%) that recalculates tier prices live.
   Layout: 3-column pricing & SLA matrix with live term toggle above; stacked cards on mobile.
10. **Slide 09 — Anonymized Customer Outcome Metrics** — Headline 'Proven Results Across Similar Logistics & Industrial Teams'. Three anonymized enterprise outcome case cards (North American Cold-Chain Carrier — 68% faster invoice close; European Component Distributor — $490K annual error reduction; Pacific Maritime Broker — 3.6-month full payback) paired with a grouped SVG before/after cycle-time comparison chart.
   Layout: Top 3-column outcome cards with bold emerald KPI callouts; bottom SVG before/after grouped bar chart.
11. **Slide 10 — Enterprise Security & Compliance Posture** — Headline 'Built for Regulated Enterprise Security Reviews'. Four structured control pillars with clean geometric compliance shields drawn in code (SOC 2 Type II Audited, ISO 27001 Aligned, Regional Data Residency EU/US, Zero-Retention Data Processing), plus a security architecture checklist covering SAML 2.0 SSO, RBAC, AES-256 at rest, TLS 1.3 in transit, and immutable webhook signing.
   Layout: 2x2 compliance pillar grid on the left (7 cols) + dark slate security-spec summary card on the right (5 cols).
12. **Slide 11 — Mutual Action Plan & Risk Mitigation** — Headline 'Clear Path From Proposal Review to Go-Live'. A 5-step interactive Mutual Action Plan checklist table (Security Packet Sign-Off, Sandbox ERP Connector Test, Commercial Redlines, Executive Sponsorship Approval, Kickoff Workshop) showing Owner ([BRAND] vs [PROSPECT]), Target Window (Week 1–5), and interactive status toggles so reps can update milestones live during the call.
   Layout: Structured responsive table/card list with live completion progress indicator.
13. **Slide 12 — Next Steps & Executive Sign-Off CTA** — Headline 'Ready to Launch the 30-Day Sandbox Pilot?'. Dark slate (#0F172A) closing stage accented with cobalt and emerald geometric grid lines. Displays 3 concrete immediate actions (Schedule Technical Deep-Dive, Provision Isolated Sandbox, Finalize Order Form), account team contact details ([CONTACT_EMAIL], Solutions Architect & Enterprise AE), a 'Copy Executive Summary' button that copies a plain-text deal recap to clipboard with confirmation feedback, and a 'Print / Export PDF' button.
   Layout: Centered high-contrast executive closing slide with 3 action cards and footer contact strip.

## Assets
- icon: Install lucide-react (ISC) for slide navigation, security shields, diagram icons, and UI controls.
- font: Self-host Fraunces, Plus Jakarta Sans, and IBM Plex Mono via @fontsource packages (OFL).
- image: All charts, architecture diagrams, compliance shields, and cover visuals are drawn cleanly in inline SVG and CSS. Zero external images or CDN requests.

## Don'ts
- No backend, API calls, external CDN scripts, or Google Fonts links.
- No real software vendors, prospect brands, compliance certifier trademarks, or real customer names.
- No source maps in production build (build.sourcemap = false) and always use relative asset paths (base: './').
- No cramped text walls or clipped 16:9 stages; mobile (<768px) must reflow cleanly with zero horizontal overflow.
- No dates that tie the presentation to a stale calendar year; use relative timeframes (Day 1–90, Week 1–5, Year 1).
- No invisible scroll-triggered sections or clip-path reveal traps; every slide renders immediately when active.
- No mention of VibeFather or any other template platform anywhere in the deck except the optional [CREDIT] slot.

---
— Prompt by VibeFather · https://vibefather.ai/t/b2b-sales-proposal-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
