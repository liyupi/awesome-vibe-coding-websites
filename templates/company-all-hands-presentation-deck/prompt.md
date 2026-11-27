# Company All-Hands Presentation Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A lively 11-slide 16:9 interactive monthly company all-hands web deck for [BRAND] ('[DECK_THEME]'), hosted by [HOST_NAME] for [TEAM_SIZE]. Includes KPI sparklines, shipped spotlights, customer quotes, teammate shoutouts, upcoming milestones, and an interactive Q&A upvote board inside the slide, plus full keyboard/swipe nav, G overview grid, N presenter notes + live timer, F fullscreen, and print CSS.

- Audience: Distributed product, engineering, and operations teams running engaging browser-based town halls.
- Goal: Celebrate shipped work, align on company metrics and milestones, and make live Q&A genuinely interactive.
- Tone: Warm, energizing, transparent, and crisp.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/plus-jakarta-sans (400, 500, 600, 700, 800) and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Support ArrowLeft/ArrowRight/Space/Home/End navigation, touch swipe, G overview grid modal, N speaker notes drawer with live session timer, F fullscreen toggle, and clean @media print landscape one-slide-per-page CSS.
  - Hide keyboard shortcut footer hints on <768px mobile and display a thin progress strip + 'Swipe to navigate' helper instead.

## Variables
- [BRAND] — Company name (default: "RelayGrid"). Fictional distributed software company
- [HOST_NAME] — All-hands host (default: "Claire Morales, CEO"). Presenter name on cover
- [DECK_THEME] — Session headline (default: "Building Together Across Six Timezones"). Main cover slide headline
- [TEAM_SIZE] — Team badge (default: "118 Teammates · 6 Timezones"). Cover metadata badge
- [MANTRA] — Closing mantra (default: "Clarity over noise. Craft over rush."). Closing slide team mantra
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/company-all-hands-presentation-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Soft Porcelain `#F7F8FC` — Primary crisp light slide surface
- Midnight Navy `#131B2E` — High-contrast dark cover anchor card, typography, and spotlight frames
- Bright Violet `#7C3AED` — Primary accent pills, sparkline strokes, and Q&A upvote buttons
- Fresh Mint `#14B8A6` — Positive KPI deltas, shipped badges, and milestone checks
- Slate Muted `#64748B` — Subtitles, metadata, and secondary labels

### Typography
- Slide display titles and body: Plus Jakarta Sans (OFL), weights 400/500/600/700/800
- KPI figures, slide counters, and timer: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Full-bleed 16:9 presentation canvas centered with minimal dead margin; bold 52-56px desktop cover headline balanced by a 50%-width midnight navy telemetry anchor card.
- Radius: 20px for 16:9 slide stage, 14px for KPI & spotlight cards, 999px for pills and progress segments.
- Motion: Crisp slide transitions, animated KPI sparklines, and tactile Q&A upvote pop.
- Motion: Respects prefers-reduced-motion; all content visible immediately.
- Imagery: Pure code-drawn presentation graphics: inline SVG KPI trend sparklines, shipped UI wireframe badges, milestone timeline bar, and Lucide icons.

## Pages & Sections
### [BRAND] — Company All-Hands Deck (`index.html`)
1. **11-Slide Interactive All-Hands Deck** — Slide 01 Cover ('[DECK_THEME]', [HOST_NAME], [TEAM_SIZE], midnight navy visual anchor card with live town-hall pulse metrics). Slide 02 Agenda & Highlights. Slide 03 Headline Company Metrics (4 KPI cards with clickable SVG trend sparklines: $14.8M ARR +34%, 99.98% Uptime, 124% NRR, 72 NPS). Slide 04 What We Shipped (3 product spotlight cards with interactive impact toggle). Slide 05 Engineering & Platform Wins (latency drop bar visual). Slide 06 Customer Love Quote Wall (3 fictional customer stories). Slide 07 New Teammates & Work Anniversaries Shoutout Grid. Slide 08 Upcoming 90-Day Milestones Timeline. Slide 09 Team Priorities & Open Roles. Slide 10 Interactive Live Q&A Upvote Board (click to upvote questions + inline input to post a new question right inside the slide). Slide 11 Closing Team Mantra ('[MANTRA]') & Next Sync CTA.
   Layout: 16:9 widescreen slide canvas with top bar, bottom navigation dock (segmented progress, G grid, N notes+timer, F fullscreen, Print PDF).

## Assets
- icon: Install lucide-react (ISC) for arrows, grid, notes, fullscreen, print, upvote thumbs, and milestone icons.
- font: Self-host Plus Jakarta Sans and JetBrains Mono via @fontsource packages (OFL).
- image: All KPI sparklines, latency bars, and timeline visuals are rendered in inline SVG. Zero external photos.

## Don'ts
- No real company names, calendar dates, or real employee photos.
- No CDN links, Google Fonts, or source maps; always set base: './'.
- No keyboard shortcut text hints on <768px mobile; show 'Swipe to navigate' instead.
- No horizontal overflow on 1440x900 desktop or 390x844 mobile.
- No mention of VibeFather or competitors except optional [CREDIT].

---
— Prompt by VibeFather · https://vibefather.ai/t/company-all-hands-presentation-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
