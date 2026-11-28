# Travel Itinerary & Packing App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A sunlit editorial responsive mobile-first trip companion PWA ([BRAND]) seeded with a fictional 5-day coastal getaway to [DESTINATION] for [TRAVELERS] ([TRIP_DURATION], [TRIP_BUDGET] budget). Mobile (<768px) uses a bottom 4-tab bar (Itinerary, Budget, Packing, Places); desktop displays a sidebar + split timeline & coastal route map/details layout. No fake phone bezel.

- Audience: Leisure travelers, couples, and travel planners organizing multi-day trips, budgets, and packing lists offline.
- Goal: Keep day-by-day schedules, booking references, currency conversions, and packing readiness effortless to update on the move.
- Tone: Sunlit, serene, editorial, organized coastal optimism.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/plus-jakarta-sans (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Download all 6 cohesive golden-hour coastal travel WebPs into public/images/ and reference via ./images/...
  - Seed all 5 days (Day 1–Day 5) of itinerary stops, trip expenses, categorized packing items, and 6 saved coastal places in src/data/tripSeed.ts; persist all mutations in localStorage.

## Variables
- [BRAND] — Travel app name (default: "CovePass"). Fictional travel companion PWA name
- [DESTINATION] — Coastal destination (default: "Cala Sol Coast"). Fictional Mediterranean getaway
- [TRAVELERS] — Travelers label (default: "Elena & Marco"). Displayed in trip header
- [TRIP_BUDGET] — Trip budget cap (default: "$2,800"). Budget target in USD
- [TRIP_DURATION] — Trip duration tag (default: "5 Days · 4 Nights"). Relative duration without calendar dates
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/travel-itinerary-packing-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/travel-itinerary-packing-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/travel-itinerary-packing-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
