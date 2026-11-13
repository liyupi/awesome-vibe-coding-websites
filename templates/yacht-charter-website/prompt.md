# Yacht Charter Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A two-page yacht charter site with a crisp nautical identity — navy ground, white panels, brass hairlines, deck-gray mono labels: a bright sea-light hero of a yacht at anchor, a filterable four-yacht fleet grid with layout animation, a query-routed yacht detail page with specs and an SVG deck plan, sample itineraries on an illustrated route map with numbered stops, and a locally saved quote request.

- Audience: Crewed charter houses, brokers and boutique fleets, and the studios building for them.
- Goal: Take a visitor from the postcard to the plan: browse the fleet, filter to their party, study a deck plan, imagine a route, and leave a quote request — with every rate and route honestly labeled as sample data.
- Tone: Chart-table precise and salt-cured: short declarative lines, mono numbers, no adjectives doing the work of a photograph.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/archivo (OFL), @fontsource/roboto-mono (Apache-2.0)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest yacht-charter-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/archivo and @fontsource/roboto-mono as dependencies.
  - vite.config.ts: base './', build.sourcemap false, and build.rollupOptions.input with TWO entries — index.html and yacht.html — so one command builds both pages.
  - tailwind.config.js: extend colors navy #12263A, navyraised #1B3350, white #FCFBF7, deckline #D8DCE0, deckgray #8C959D, brass #B98F4E, brasslight #D3AC6C, ink #1B2B3A, haze #9FB4C2; fontFamily sans 'Archivo' and mono 'Roboto Mono'; radius: panel 6px and pill 999px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/FleetGrid.tsx: the filterable grid — three filter groups as mono chips (TYPE: All/Sailing/Motor · GUESTS: All/Up to 8/9–12 · CABINS: All/4+/6+); matching yachts render inside Motion's AnimatePresence with layout animations so cards visibly re-sort (350ms); non-matching cards leave with a 40% scale fade.
  - src/components/RouteMap.tsx: an illustrated chart drawn in SVG, viewBox 0 0 800 460, on a white panel — a generic invented coastline as a deck-gray filled landmass along the top-left, four small islands, a light-blue-gray sea wash (5% deckgray), a faint 40px lat/long grid, and the active itinerary as a dotted brass route path (stroke-dasharray 2 8) with numbered brass stop circles; stop positions come from content.ts; switching itineraries crossfades the route (300ms) and redraws the dotted path.
  - src/components/DeckPlan.tsx: a top-down deck plan drawn in SVG, viewBox 0 0 720 220, on a white panel — the hull as an elongated rounded outline (ink stroke 2px, white fill), a swim platform at the stern, cockpit, salon and galley as deck-gray-tinted rects with deckline strokes, four cabins as 90×70 rects (two port, two starboard) and a bow suite at the fore; every region labeled in Roboto Mono 11px with 1px brass leader lines; cabin count is a prop so each yacht renders its own count (the flagship's geometry is the fixed reference layout).
  - src/lib/motion.ts: calm variants — reveal (opacity 0→1, y 20→0, 700ms cubic-bezier(0.16,1,0.3,1), 100ms stagger, whileInView once) — with useReducedMotion making layout re-sorting instant and route swaps plain fades.
  - Keep every user-facing string and data set (brand, waters, port, entry rate, fleet array {id, name, type, meters, guests, cabins, rate, photo, blurb}, itineraries {id, title, nights, stops[{n, name, line, at{x,y}}], path}, quote copy, contact) in src/content.ts; both pages read from it so values swap in one place.
  - yacht.html reads the id from location.search (?id=aletia) and maps it to the fleet array; with no id or an unknown id it shows the FIRST yacht (the flagship), never an empty or not-found state. Links between pages are file names: ./yacht.html?id=aletia and ./index.html#quote. index.html: <title>[BRAND] — Crewed Charters in [WATERS]</title>; yacht.html: <title>[BRAND] — Yacht name</title> (dynamic); one shared drawn-in-code favicon.svg (a brass anchor-less dot-and-line mark — a simple brass circle on navy).

## Variables
- [BRAND] — Charter house (default: "Saltcrest Charters"). Invented charter house for the wordmark, page titles and contact email (from content.ts).
- [WATERS] — Waters (default: "the Vela Isles"). The invented cruising ground — hero label, itinerary intro and footer ('[WATERS]' is a fictional archipelago, never a real coastline).
- [PORT] — Home port (default: "Port Selene"). The invented base port where charters embark and the itineraries start.
- [WEEK_FROM] — Entry weekly rate (default: "€38,000"). The flagship's sample weekly rate — fleet card, yacht detail price line and hero sub-line ('from [WEEK_FROM] per week, all-inclusive, sample rate').
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/yacht-charter-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/yacht-charter-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/yacht-charter-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
