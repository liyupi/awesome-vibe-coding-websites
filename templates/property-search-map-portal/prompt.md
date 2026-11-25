# Property Search Map Portal

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A home search portal: a split list and map view (the map is drawn in code with price pins and clusters); filters synced to the URL; a listing page with a photo gallery, facts, a price history chart, school and commute cards and a mortgage estimate; saved homes and saved searches; and a tour request form. 40 fictional listings with photographs from one shoot of interiors and exteriors, with no house numbers or signs. White, deep teal #0F4C5C, coral pins #FF6F59 and sand #F4E9D8.

- Audience: Independent brokerages and property startups that want a search experience without a map service, and developers building a listings product.
- Goal: Let a visitor filter forty homes in seconds, open a listing, estimate the monthly cost and request a tour.
- Tone: Calm and factual, like a good agent's email: prices, measurements and minutes, no real-estate exclamations.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/source-serif-4 (OFL-1.1), @fontsource-variable/public-sans (OFL-1.1), @fontsource/dm-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors teal #0F4C5C, tealSoft #E3EEF0, coral #FF6F59, sand #F4E9D8, white #FFFFFF, ink #14252B, muted #5A6B70, line #E3E8E6, park #DCE8D4, water #BFDCE2; fontFamily display 'Source Serif 4 Variable', sans 'Public Sans Variable', mono 'DM Mono'.
  - src/components/Map.tsx renders the map as one inline SVG with viewBox 0 0 1000 700: sand blocks, white streets, a water band, three park shapes and neighbourhood labels from src/data/map.ts; pins are SVG groups positioned by each listing's x and y. Pan and zoom use a transform on one group, clamped so the map cannot be dragged away.
  - A small hash router reads location.hash; the search route keeps its filters in the hash query (#/search?price=300-800&beds=3&type=house&sort=newest&neigh=larchmont). src/lib/params.ts converts filters to and from that query with history.replaceState, so a search can be bookmarked and shared.
  - src/data/seed.ts holds the 40 listings, neighbourhoods, schools and commute lines; src/store/usePortal.ts is a reducer for filters, zoom, selection, saved homes and saved searches, persisting saved homes and searches to localStorage under the key [BRAND_SLUG]-portal, where [BRAND_SLUG] is [BRAND] lowercased with hyphens.
  - src/lib/mortgage.ts exports the estimate as a pure function; the price history chart is inline SVG drawn from the listing's history.
  - All copy, listings, filter options, tour slots and form labels live in src/content.ts and src/data/seed.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Portal name (default: "Hearthway Homes")
- [CITY] — City (default: "Rivermont")
- [AGENT_NAME] — Agent who runs the tours (default: "Dana Whitfield")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/property-search-map-portal in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/property-search-map-portal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/property-search-map-portal · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
