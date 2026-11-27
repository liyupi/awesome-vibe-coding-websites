# City Transit & Route Planner App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A crisp Swiss-style responsive mobile-first urban metro & bus transit companion PWA ([BRAND]) for the fictional coastal city of [CITY_NAME]. Mobile (<768px) uses a bottom 4-tab bar (Route, Lines, Nearby, Saved); desktop renders a split interactive SVG metro map + itinerary console. No fake phone shell.

- Audience: Daily urban commuters, visitors navigating metro lines, and civic transit teams prototyping mobile-first wayfinding web apps.
- Goal: Help commuters plan routes across 18 stations, inspect live countdown departures, and save frequent trips in seconds.
- Tone: Swiss precision, unmistakable color-coded hierarchy, calm and reliable.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/inter (400, 500, 600, 700) and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Model all 18 fictional coastal stations, 3 metro lines (Blue Bay, Amber Pier, Emerald Ridge), interchange hubs, and real shortest-time / fewest-transfer pathfinding in src/data/transitGraph.ts.
  - Persist saved trips and quick home/work shortcuts in localStorage.
  - Never draw a fake phone bezel; render full-viewport responsive layouts across mobile (<768px) and desktop (>=768px).

## Variables
- [BRAND] — Transit app name (default: "HarborLine"). Fictional transit companion PWA name
- [CITY_NAME] — Fictional coastal city (default: "Port Maris"). City displayed in header and map legend
- [HOME_STATION] — Saved Home station (default: "Seaview Terrace"). Quick commute Home preset
- [WORK_STATION] — Saved Work station (default: "Central Harbor"). Quick commute Work preset
- [SINGLE_FARE] — Standard metro fare (default: "$2.75"). Fare estimate shown on route cards
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/city-transit-route-planner-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Swiss Transit White `#F8FAFC` — Primary clean canvas
- Card Pure White `#FFFFFF` — Route itinerary and departure panels
- Transit Charcoal `#0F172A` — Primary typography, station rings, and high-contrast pills
- Metro Blue Line `#0284C7` — Blue Bay Line route stroke, primary CTAs, and active tabs
- Amber Pier Line `#D97706` — Amber Pier Line route stroke and service advisory highlight
- Emerald Ridge Line `#059669` — Emerald Ridge Line stroke and On-Time live badges

### Typography
- Swiss neo-grotesque signage and UI: Inter (OFL), weights 400/500/600/700
- Departure countdowns, platform numbers, and route durations: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Mobile (<768px) stacks compact route controls above interactive map and itinerary with 80px clearance above the fixed 64px bottom tab bar. Desktop (>=1024px) displays a top Swiss nav bar + split workspace (left 420px itinerary/controls + right flexible interactive zoomable SVG metro map).
- Radius: 14px for route and station cards, 10px for inputs and zoom controls, 999px for line code badges (B1, A2, E3) and countdown pills.
- Motion: Smooth animated SVG route path highlight along the planned segments.
- Motion: Subtle pulsing emerald dot on live minute countdown badges.
- Motion: Respects prefers-reduced-motion; all content visible immediately.
- Imagery: 100% crisp code-drawn Swiss transit graphics: zoomable 18-station geometric SVG metro schematic with coastline tint, interchange double-rings, animated route highlight, and Lucide transit icons.

## Pages & Sections
### [BRAND] — [CITY_NAME] Transit & Route Planner (`index.html`)
1. **Adaptive Navigation & Service Status Strip** — Mobile (<768px): compact [BRAND] · [CITY_NAME] top bar with Service Status pill + fixed bottom 4-tab bar (Route, Lines, Nearby, Saved). Desktop (>=768px): sleek Swiss top navigation bar with live service advisory ticker ('Blue & Emerald normal · Amber Pier +3 min near Lighthouse Dock').
   Layout: Full-viewport Swiss utility PWA shell; zero fake phone frame.
2. **Route Planner & Interactive Zoomable 18-Station SVG Metro Map** — Origin & Destination selectors across 18 fictional coastal stations with one-tap Swap button, 'Fastest' vs 'Fewest Transfers' toggle, and quick Home/Work shortcut chips ([HOME_STATION] <-> [WORK_STATION]). Displays computed step-by-step boarding itinerary (line badge, boarding station, stop count, transfer platform cue, estimated duration, [SINGLE_FARE] fare) + 'Save Trip' toggle. Paired directly with the zoomable (+ / - / Reset) interactive SVG Metro Map highlighting the active route; tapping any station opens its live departure countdown drawer/card.
   Layout: Split panel on desktop (itinerary left, interactive map right); stacked route card + interactive map on mobile.
3. **Lines View — Network Directory & Service Alerts** — Shows all 3 color-coded metro lines (B1 Blue Bay Line, A2 Amber Pier Line, E3 Emerald Ridge Line) with live status pills, headway frequency (every 4–6 min), and clickable ordered station lists that inspect departures.
   Layout: 3-column line grid on desktop; stacked expandable cards on mobile.
4. **Nearby Stops & Saved Commutes Views** — Nearby tab lists 5 closest metro & express bus stops with walking distance and animated live arrival countdown minutes (e.g., 2 min, 6 min, 11 min). Saved tab provides one-tap Home ([HOME_STATION]) and Work ([WORK_STATION]) commute launchers plus user-saved trips persisted in localStorage.
   Layout: 2-column responsive card grids on desktop; single-column feed on mobile.

## Assets
- icon: Install lucide-react (ISC) for train, bus, arrow-up-down swap, zoom in/out, bookmark, and alert icons.
- font: Self-host Inter and JetBrains Mono via @fontsource packages (OFL).
- image: Interactive 18-station coastal metro schematic is rendered purely in inline SVG. Zero external photos or map tiles.

## Don'ts
- No fake phone bezel or narrow mobile container on desktop viewports.
- No real city names, real transit agencies, or external map tile APIs.
- No hardcoded calendar dates; use live relative departure countdowns (e.g., '3 min', '8 min').
- No CDN scripts, Google Fonts links, or source maps; always set base: './'.
- No horizontal overflow on 390x844 mobile or 1440x900 desktop.
- No mention of VibeFather or competitors except the optional [CREDIT] slot.

---
— Prompt by VibeFather · https://vibefather.ai/t/city-transit-route-planner-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
