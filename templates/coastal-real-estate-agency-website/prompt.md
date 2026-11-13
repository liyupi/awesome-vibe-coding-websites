# Coastal Real Estate Agency Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A three-page static website for [BRAND], an independent estate agency that sells homes in one coastal town, [TOWN], on [REGION]. Pages: home (index.html), all listings with filters and sort (listings.html), and a listing detail page selected by query parameter (listing.html?id=<listing-id>). Ten invented homes with real CC0 exterior photographs, shared AI-generated interior photographs, SVG floor plans, an SVG neighbourhood map, a mortgage calculator, a client-side viewing-request form, agent cards with monograms, market stats, recently sold homes and a valuation call to action. All copy and all listing data live in one content file, src/content.ts. The copy below is written for the default variable values; if the variable values differ, rewrite every piece of copy, listing name, street and neighbourhood so it fits the new values, keeping the same structure, lengths and numbers of items.

- Audience: People buying or selling a home in [TOWN]: local families moving up or down, second-home buyers from the city, and owners who want a valuation before they decide to sell.
- Goal: Make visitors browse and filter homes, open a listing, request a viewing, or book a free valuation. Viewing requests and valuation requests are the two conversions.
- Tone: Calm, local and specific, like an agency that has worked the same streets for twenty years. Short sentences, concrete numbers, no hype words (no 'stunning', 'dream home', 'luxury living'). Prices and facts are always exact.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react 18 (MIT), react-dom 18 (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL-1.1), @fontsource/instrument-sans (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1), vite 5 + @vitejs/plugin-react (MIT), tailwindcss 3.4 + postcss + autoprefixer (MIT), typescript (Apache-2.0)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest (React + TypeScript template). package.json script build = tsc -b && vite build.
  - Three HTML entry files at the project root: index.html, listings.html, listing.html. Each one loads its own entry: src/pages/home.tsx, src/pages/listings.tsx, src/pages/listing.tsx. Each sets <title>[BRAND] · Homes for sale in [TOWN]</title> (the listing page replaces it at runtime with '<street address> · [BRAND]') and links public/favicon.svg.
  - vite.config.ts: base './', build.sourcemap false, build.rollupOptions.input = { index: 'index.html', listings: 'listings.html', listing: 'listing.html' }. No router library: each page is a separate React root.
  - tailwind.config.ts: content ['./*.html', './src/**/*.{ts,tsx}']; extend colors with sand #F6F1E9, shell #FFFDF9, ink #13262F, drift #6B6359, line #E2D9CB, teal #2F6F6A, tealdark #245652, coral #D9694A, foam #DCE8E4, sea #BFD5D8; fontFamily display ['Fraunces Variable', 'Georgia', 'serif'], sans ['Instrument Sans', 'system-ui', 'sans-serif'], mono ['IBM Plex Mono', 'ui-monospace', 'monospace']; maxWidth container 1240px.
  - src/main.css: @tailwind base/components/utilities, import the Fontsource CSS (fraunces variable; instrument-sans 400, 500, 600; ibm-plex-mono 400, 500) from src/fonts.ts, body bg-sand text-ink font-sans antialiased, keyframes for the hero zoom and lightbox fade, and a @media (prefers-reduced-motion: reduce) block that disables all animations and transitions.
  - src/content.ts holds every string, the agency details, the four agents, the ten listings (with photo paths, gallery, plan id, map coordinates, description and features), the points of interest for the map, the market stats and the testimonials. Components never contain hard-coded copy.
  - Shared components in src/components/: Header, Footer, ListingCard, StatusBadge, FactsRow, Reveal (IntersectionObserver wrapper), CountUp, Lightbox, FloorPlan, NeighbourhoodMap, MortgageCalculator, ViewingForm, ValuationBand, Monogram, FilterBar.
  - src/lib/format.ts: formatPrice(n) uses Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }) prefixed with [CURRENCY] (e.g. $1,185,000); formatCompact(n) gives $1.19M or $705k for chart labels.
  - src/lib/params.ts: read and write URLSearchParams with history.replaceState so filters survive reload and share; no page reloads on filter change.
  - Saved homes: a heart button on each card toggles the listing id in localStorage key 'saved-homes'; the header shows a small count badge next to a heart icon when at least one home is saved.
  - Download every image listed in Assets into public/images/ with curl before building, and create ASSETS.md at the project root listing each file's path, source URL, author and license.

## Variables
- [BRAND] — Agency name (default: "Hartwell & Rye"). Invented agency name; shown as a serif wordmark.
- [TOWN] — Town (default: "Port Ellery"). The one town the agency covers. Invent it; do not use a real town.
- [REGION] — Coast or region (default: "the Calder Coast"). Used in the hero subline and footer.
- [CURRENCY] — Currency symbol (default: "$"). Prefix for every price; areas stay in sq ft for $ and switch to m² for other currencies.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/coastal-real-estate-agency-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/coastal-real-estate-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/coastal-real-estate-agency-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
