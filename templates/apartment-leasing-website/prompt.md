# Apartment Leasing Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a polished single-page leasing website for [BRAND], a [PROPERTY_TYPE] in [LOCATION]. Pair generous architectural photography with an interactive inventory of four floor plans and eight units, an amenity and neighborhood story, and a client-side tour request. Homes are advertised from [STARTING_RENT], tours run [TOUR_HOURS], and the leasing contact is [LEASING_EMAIL].

- Audience: Prospective renters comparing layouts, monthly rent, and move-in timing, followed by small property teams who need a clear, adaptable leasing presence.
- Goal: Help a visitor narrow the inventory to a suitable home, understand daily life at the property, and carry a selected unit into a complete tour request with no backend.
- Tone: Warm, assured, precise, and residential rather than corporate. Use specific details and calm calls to action; avoid pressure tactics, superlatives, and vague luxury claims.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/dm-serif-display (OFL), @fontsource-variable/inter (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set vite.config.ts to use React, base: './', build.outDir: 'dist', and build.sourcemap: false.
  - Configure tailwind.config.ts with content for index.html and src/**/*.{ts,tsx}; define the listed colors and font families as theme tokens.
  - Import the self-hosted font packages in src/main.tsx and global Tailwind directives in src/index.css.
  - Put every headline, paragraph, label, inventory record, amenity, neighborhood item, contact detail, link, and image path in src/content.ts keyed by section.
  - Build small section components and keep filter, selected-unit, accordion, mobile-menu, and tour-form state in React; use Motion for React only for the specified reveals and transitions.
  - Store unit availability as non-negative day offsets from the visitor's current local date, format dates in US English, and derive both the move-in filter and tour calendar from that local date.

## Variables
- [BRAND] — Property name (default: "Alder & Row"). Use an invented residential property name.
- [PROPERTY_TYPE] — Building description (default: "modern brick courtyard residences"). A short lowercase description used in the hero and introduction.
- [LOCATION] — Neighborhood and city (default: "Elm Park, Chicago"). Use a plausible location and adapt the surrounding area copy.
- [STARTING_RENT] — Advertised starting rent (default: "$1,875"). Monthly rent including the currency symbol; keep inventory consistent with it.
- [TOUR_HOURS] — Tour availability (default: "Daily, 9 AM–6 PM"). A concise human-readable schedule.
- [LEASING_EMAIL] — Leasing email (default: "hello@alderandrow.example"). Use an invented address for the fictional property.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/apartment-leasing-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/apartment-leasing-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/apartment-leasing-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
