# Marketing Campaign Strategy Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
An 11-slide Go-To-Market and quarterly marketing campaign strategy deck for fictional consumer hardware launch [BRAND] [PRODUCT_NAME] anchored around '[CAMPAIGN_THEME]', featuring clickable persona tabs, an SVG acquisition funnel, an interactive 3-scenario channel budget allocator, and an 8-week launch Gantt timeline.

- Audience: CMOs, growth marketing leads, creative producers, retail buyers, and consumer hardware founders reviewing a launch campaign.
- Goal: Secure budget sign-off and cross-functional alignment on target audiences, channel mix, creative messaging, PR cadence, and launch KPIs.
- Tone: Sharp, energetic, metric-backed, consumer-savvy, and structured.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/bricolage-grotesque (OFL), @fontsource/inter (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/bricolage-grotesque (600, 700, 800), @fontsource/inter (400, 500, 600, 700), and @fontsource/ibm-plex-mono (400, 500, 600) locally in src/main.tsx.
  - Keep all campaign copy, personas, budget scenarios, Gantt tasks, KPIs, and speaker notes in src/data/campaignDeck.ts.
  - Configure @media print in src/index.css with @page { size: landscape; margin: 0; }, hiding toolbar controls and printing all 11 slides one per page.
  - Wire keyboard navigation (ArrowLeft, ArrowRight, Space, Home, End, G, N, F, Escape), touch swipe, and hash slide tracking (#/slide/1..11).

## Variables
- [BRAND] — Hardware brand name (default: "Kinetix Audio"). Fictional consumer hardware maker
- [PRODUCT_NAME] — Flagship product name (default: "Pulse Mini Studio Monitor"). Fictional consumer device being launched
- [CAMPAIGN_THEME] — Campaign big-idea tagline (default: "Studio Sound Anywhere You Set Up"). Hero campaign rallying phrase
- [BUDGET_TOTAL] — Quarterly campaign budget (default: "$450,000"). Total GTM spend across channels
- [LAUNCH_TARGET] — Primary launch goal (default: "18,000 Pre-Orders"). Headline conversion goal on cover and KPI slide
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/marketing-campaign-strategy-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Crisp Snow `#FAFAFA` — Primary bright slide canvas
- Deep Ink `#121214` — Display headings, bold contrast cards, and primary text
- Vivid Coral `#FF4D4F` — Primary campaign energy accent, active scenario bars, and hero anchor
- Sunshine Yellow `#FACC15` — Highlight markers, milestone blocks, and secondary callout tags (paired only with #121214 ink for high contrast)
- Light Graphite `#E4E4E7` — Crisp 1px borders and chart gridlines
- Muted Zinc `#52525B` — Secondary captions and metadata

### Typography
- Bold display headings: Bricolage Grotesque (OFL), weights 600/700/800
- Body copy and UI: Inter (OFL), weights 400/500/600/700
- Budgets, ratios, and slide numbers: IBM Plex Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Desktop frames each 16:9 slide cleanly inside 100dvh (max 1320px, 44px padding) above a 56px bottom presentation bar. Mobile (<768px) reflows cleanly to single-column cards with >=44px touch controls and zero horizontal overflow.
- Radius: 12px for persona and metric cards, 8px for toggles and Gantt bars, 999px for channel badges.
- Motion: Snappy 200ms slide cross-translate transitions honoring prefers-reduced-motion.
- Motion: Smooth animated SVG bar widths when switching between Balanced, Paid-Heavy, and Organic budget scenarios.
- Motion: Interactive persona tab highlight and readiness checklist completion progress animation.
- Motion: All slide content renders visible immediately with no clip-path reveal traps.
- Imagery: Bold code-drawn campaign graphics: geometric hardware silhouette schematic on the cover, SVG full-funnel diagram, animated SVG budget allocator bars, 8-week Gantt visual, and Lucide icons. Zero external photos.

## Pages & Sections
### [BRAND] — [PRODUCT_NAME] GTM Campaign Strategy (`index.html`)
1. **Presentation Shell, Overview Grid (G) & Speaker Notes (N)** — Compact top header (`[BRAND] · GTM STRATEGY`, slide chapter pill, Print PDF button) and fixed bottom control bar (Prev/Next, mono counter `01 / 11`, clickable 11-segment coral progress bar, Overview Grid `G`, Speaker Notes + Timer `N`, Fullscreen `F`). G opens a responsive 11-tile overview grid; N opens slide-specific speaker notes and an elapsed timer.
   Layout: Centered 16:9 stage on desktop; vertical mobile slide view (<768px) with swipe navigation.
2. **Slide 01 — Cover & Campaign Big Idea** — Left (7 cols): sunshine-yellow pill (`GO-TO-MARKET PLAYBOOK · 8 WEEKS`) with #121214 text, bold Bricolage headline '[CAMPAIGN_THEME]', subtitle '[BRAND] [PRODUCT_NAME] Launch Strategy · Total Budget [BUDGET_TOTAL] · Goal [LAUNCH_TARGET]', and 3 punchy launch pillars (Waitlist Momentum, Creator Proof, Retail Drop). Right visual anchor (5 cols): bold deep-ink (#121214) hardware launch poster card featuring a crisp code-drawn geometric acoustic/waveform SVG emblem in vivid coral (#FF4D4F) and sunshine yellow (#FACC15), displaying Launch Window (8 Weeks), Target ROAS (4.2x), and Pre-Order Goal ([LAUNCH_TARGET]).
   Layout: 7/5 bold graphic split on crisp snow background; stacked on mobile.
3. **Slide 02 — Campaign Big Idea & Market Hook** — Headline 'Why Compact Creators Outgrew Plastic Desk Speakers'. Top editorial contrast banner framing the consumer tension vs our product truth, followed by 3 visual proof cards (Acoustic Precision in 1.2L Footprint, Instant USB-C Desk Calibration, Sub-$249 Direct Price Point) accented with coral and yellow badges.
   Layout: Full-width thesis strip above a 3-column proof card grid.
4. **Slide 03 — Interactive Audience Persona Cards** — Headline 'Three High-Intent Buyer Segments'. Clickable tab selector across 3 fictional personas: (1) Bedroom Beatmaker (42% share), (2) Hybrid Video Editor (34% share), and (3) Minimalist Desk Collector (24% share). Selecting a persona updates the detailed dossier panel showing Core Pain, Buying Trigger, Top Objection & Counter-Proof, Priority Channels, and Sample Ad Hook.
   Layout: Top 3 persona selector tabs above a structured 2-column persona profile card.
5. **Slide 04 — Full-Funnel Acquisition Diagram** — Headline 'From 4.8M Qualified Impressions to [LAUNCH_TARGET]'. Code-drawn interactive SVG 4-stage funnel (Awareness: 4.8M Reach -> Consideration: 210K Landing Visits -> Intent: 48K VIP Waitlist -> Conversion: [LAUNCH_TARGET] at 37.5% waitlist close). Clicking any stage highlights its conversion lever, primary creative format, and owner.
   Layout: Horizontal tapered SVG funnel diagram (7 cols) + active stage playbook panel (5 cols); stacked on mobile.
6. **Slide 05 — Interactive Channel Budget Allocator** — Headline 'Stress-Testing Our [BUDGET_TOTAL] Channel Mix'. Interactive scenario toggle (`Balanced` / `Paid-Heavy` / `Organic-Led`) that dynamically updates an SVG horizontal bar chart across 5 channels (Paid Social & Video, Creator Seeding & Sponsorships, Search & Shopping, PR & Launch Events, Lifecycle Email & Referral) and recalculates 3 live summary KPIs: Projected Pre-Orders, Blended CAC, and Expected ROAS.
   Layout: Scenario segmented toggle + 7/5 split between animated SVG budget bars and live forecast cards.
7. **Slide 06 — 8-Week Launch Calendar Gantt Visual** — Headline 'Eight-Week Countdown From Teaser to Drop'. Code-drawn SVG Gantt timeline across Weeks 1–8 with 5 color-coded workstreams: Teaser & Waitlist Gate (Wks 1–3, yellow), Review Unit Seeding (Wks 2–4, coral), Embargo Lift & Creator Blitz (Wks 5–6, ink), VIP Early-Access Drop (Wk 6–7, coral), and Public Retail & Retargeting (Wks 7–8, ink), with clickable milestone markers detailing each week's key deliverable.
   Layout: Full-width responsive SVG Gantt board above a compact milestone detail bar.
8. **Slide 07 — Creative Messaging Pillars** — Headline 'Three Stories Every Asset Must Tell'. Three high-contrast pillar cards: Pillar 01 Honest Sound ('Flat response, zero bass mud'), Pillar 02 Desk-First Industrial Craft ('Machined aluminum that earns its footprint'), and Pillar 03 Plug-and-Play Speed ('Calibrated in 20 seconds over single USB-C'). Each card pairs Headline Hook, Visual Direction, and Best Format (15s vertical demo, comparison carousel, unboxing reel).
   Layout: 3-column card grid with bold numbered headers in coral, yellow, and ink.
9. **Slide 08 — Influencer, Creator & PR Cadence** — Headline 'Orchestrating 45 Creator Drops on Embargo Day'. Left: 3 creator tiers (5 Flagship Tech Reviewers, 15 Mid-Tier Audio Producers, 25 Aesthetic Desk Creators) with unit count, deliverable format, and expected views. Right: 4-step embargo wave timeline (Seed -> Check-In -> Embargo Lift 09:00 EST -> Second-Wave Shorts) showing coordinated reach spikes.
   Layout: 6/6 split with tiered creator cards and stepped PR cadence graphic.
10. **Slide 09 — Launch Offer & Referral Mechanics** — Headline 'Turning Waitlist Sign-Ups Into Launch-Day Advocates'. Explains the 48-hour VIP Early-Bird Window ($30 off + custom braided cable), tiered referral rewards (1 friend = priority batch, 3 friends = desktop isolation pads), and an inline SVG conversion-lift comparison bar showing VIP vs cold traffic.
   Layout: 2-column offer architecture + bottom SVG conversion comparison strip.
11. **Slide 10 — KPI Targets Scorecard** — Headline 'How We Measure Success Week by Week'. Six structured KPI target cards in a 3x2 grid: Pre-Order Volume ([LAUNCH_TARGET]), Waitlist Lead Cost (<$1.90), Landing Conversion Rate (9.4%), Blended Launch ROAS (4.2x), Day-1 Sell-Through (65% of Batch 1), and Earned Media Mentions (35+ tier-1 features), each with Green/Amber/Red guardrail thresholds.
   Layout: 3x2 crisp scorecard grid with mono targets and guardrail indicators.
12. **Slide 11 — Interactive Launch Readiness Checklist** — Headline 'Pre-Flight Sign-Off Before Week 1'. Interactive launch-readiness checklist across 6 cross-functional gates (Hardware QA Samples Locked, Waitlist Page & Tracking Verified, 45 Creator Kits Packed, Paid Creative Variations Approved, Press Kit & Spec Sheet Finalized, Fulfillment Capacity Confirmed) with owner badges, clickable completion checkboxes persisted in localStorage, live readiness progress ring drawn in SVG, and Print PDF / Reset buttons.
   Layout: 8/4 split pairing the interactive checklist with a dark-ink launch readiness ring panel.

## Assets
- icon: Install lucide-react (ISC) for channel icons, checklist gates, and deck controls.
- font: Self-host Bricolage Grotesque, Inter, and IBM Plex Mono via @fontsource packages (OFL).
- image: All funnel graphics, budget charts, Gantt bars, readiness ring, and cover hardware emblem are drawn in inline SVG. Zero external images.

## Don'ts
- No backend, API calls, CDN scripts, or external Google Fonts links.
- No real consumer electronics brands, social platform trademarks/logos, or named real influencers.
- No low-contrast yellow text on white; always pair Sunshine Yellow (#FACC15) backgrounds with Deep Ink (#121214) text.
- No source maps in production build and always use base: './'.
- No horizontal overflow on 390x844 mobile or clipped 16:9 slides on desktop.
- No hardcoded real calendar dates; use Week 1–8 relative schedule labels.
- No mention of VibeFather or competitors except the optional [CREDIT] slot.

---
— Prompt by VibeFather · https://vibefather.ai/t/marketing-campaign-strategy-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
