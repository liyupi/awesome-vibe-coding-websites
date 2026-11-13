# City Tourism Guide Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a vibrant single-page destination guide for [BRAND], an invented coastal city. A colorful street-photo hero, four color-coded things-to-do blocks (Eat, See, Do, Relax), an illustrated neighborhood map with area cards, ready-made 1/2/3-day itineraries, a season-labeled events marquee, and a trip-planner shortlist that saves stops in the browser.

- Audience: Independent travelers planning a few days in [BRAND] — [AUDIENCE] — plus destination marketers and travel creators who need a guide-style page that reads like a magazine.
- Goal: Let visitors browse stops by mood, learn the neighborhoods, follow a ready-made day plan, and save their own shortlist locally, so the guide works as a tool rather than a brochure.
- Tone: Sunny magazine voice: specific, opinionated, warm. Concrete stops with honest one-liners, no tourism-board clichés. Rewrite every stop, neighborhood and event to fit the supplied variables.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL), @fontsource/karla (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Vite with base './', React 18, TypeScript and Tailwind CSS 3.4; vite.config sets base './' and build.sourcemap: false.
  - Keep all stops, neighborhoods, itineraries, events and page copy in src/content.ts, derived from the variable values so one file rewrites the whole guide.
  - Import @fontsource-variable/fraunces (wght 600, 900) and @fontsource/karla (400, 500, 700) in src/main.tsx; map them to the heading and body fonts in tailwind.config.js.
  - Define the Paper, Cream, Ink, Coral, Teal and Sunflower color tokens in tailwind.config.js; shared keyframes (marquee, pop, bob) live in src/index.css.
  - Run the trip planner with React state plus localStorage under the key trip-shortlist.v1; no routing or state-management libraries.
  - Draw the neighborhood map, sun glyph, compass and favicon as original inline SVG; the favicon is a 32px sunflower square with a coral sun.
  - Set a plain document title from [BRAND] and the favicon above; add no other metadata.

## Variables
- [BRAND] — City name (default: "Solmara"). The invented coastal city; used in the wordmark, hero headline, copy and footer.
- [KNOWN_FOR] — Known for (default: "citrus groves, fishing piers and a lighthouse point"). What the city is famous for; drives the hero kicker, stops and neighborhood flavor.
- [AUDIENCE] — Who visits (default: "weekend wanderers, food lovers and young families"). The travelers the guide speaks to; rewrite stops and itineraries for them.
- [SIGNATURE_EVENT] — Signature event (default: "Marigold Lantern Regatta"). The city's headline seasonal event, named in the events strip and the itineraries.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/city-tourism-guide-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#F8F1E0` — Warm paper page ground and quiet sections.
- Cream `#FFFDF4` — Card surfaces, chips and stop rows on paper.
- Ink `#2E2B25` — Headlines, body text, the Relax block and the footer ground.
- Coral `#F0654A` — Eat block, primary CTA, events marquee band, count badge.
- Teal `#177E76` — See block, links, itinerary number circles, map dots.
- Sunflower `#F4B942` — Do block, highlight badges, sun glyph, scroll cue.

### Typography
- Display / headlines: Fraunces Variable (OFL), weights 600/900
- Body / UI text: Karla (OFL), weights 400/500/700

### Layout & motion
- Spacing: Magazine rhythm: 96px section padding on desktop and 64px on mobile, one 1200px container, 32px grid gaps, a 72px sticky header; the hero fills 92vh.
- Radius: Sharp editorial: 0px on color blocks and photos, 4px on chips and inputs, 999px only on pill buttons and count badges.
- Motion: Scroll reveals: sections and cards fade up 24px over 0.5s with Motion whileInView, staggered 60-80ms per card.
- Motion: Events marquee slides left on a 38s linear loop, pauses on hover and focus, and renders static under prefers-reduced-motion.
- Motion: Planner feedback: the Plus button flips to Check with a 150ms scale pop and fires a small toast reading Saved to your shortlist; the count badge pops on each change.
- Motion: Card hover: block photos scale 1.04 and color-block headers shift 4px up; everything calms under prefers-reduced-motion.
- Imagery: Six sunny street photographs in one warm golden grade — street, market, lighthouse, harbor, cove, plaza — with no readable signage, no logos, and people only distant or from behind. Everything else is drawn: a hand-inked SVG city map, sun glyph, compass and favicon in the same palette.

## Pages & Sections
### [BRAND] city guide with trip planner (`index.html`)
1. **Header and navigation** — Left, the wordmark: [BRAND] set in Fraunces 900 with a small sunflower sun glyph drawn in SVG. Center navigation: Things to do, Neighborhoods, Itineraries, Events. Right, a pill button labeled Shortlist that stays hidden until the first stop is saved, then shows a coral count badge. On mobile the nav collapses into a Menu button that opens a paper panel with the same anchors and closes after selection.
   Layout: Sticky 72px header on Paper; a 1px ink bottom rule and a 4px shadow appear after 24px of scroll. Shared 1200px container. Anchors are ./index.html#things, #districts, #itineraries and #events.
   Motion: Bottom rule and shadow fade in on scroll; the Shortlist pill slides down the first time a stop is saved.
2. **Hero with colorful street photo** — Full-bleed hero-street.webp with a warm paper gradient rising through the bottom third. Kicker in Karla 700 uppercase teal: An independent guide to a city built on [KNOWN_FOR]. The city name [BRAND] fills the width in Fraunces 900 (clamp 96px to 180px, Ink). Subline: Forty-two stops, six neighborhoods, one very good lighthouse. Two CTAs: coral pill Start with one perfect day and ink-outline pill Browse things to do. Bottom-left, three cream stat chips: 42 stops, 6 neighborhoods, 3 itineraries.
   Layout: 92vh section, photo covers; the headline block sits lower left on the paper wash so it never fights the sky; the chip row wraps under the subline on mobile. Alt text: A colorful coastal street with coral, teal and yellow facades sloping toward the sea.
   Motion: Headline rises 32px and fades in on load over 0.7s; stat chips stagger in 80ms apart; a thin sunflower scroll-cue arrow bobs at the bottom edge.
3. **Things to do: color-coded blocks** — Headline: Things to do, four ways. Sub: Tap the plus on anything that sounds like you; the shortlist keeps it. A 2x2 grid of full-color blocks, each with its category in Fraunces 900, one photo and five stops. Eat (Coral, eat-market.webp): Roe & Embers — sardines grilled at the pier counter; The Marigold Room — custard tarts, eaten standing; Fish Market Row — tuna tostadas from seven in the morning; Casa Lupa — citrus-cured everything, order the small plates; Pier 9 Coffee — an iced carajillo on the seawall. See (Teal, see-lighthouse.webp): Lighthouse Point — 118 steps, worth every one; The Old Cannery Murals — nine walls, nine painters; Museum of Salt — small, strange, perfect; The Grove Gate arch on Fennel Street; Mussel Rocks at sunset — bring a sweater. Do (Sunflower, do-harbor.webp): Kayak the harbor at first light — glass water, working boats; Saturday boatyard market — go early; Tide-pooling at Cape Sol — low tide only; Bike the Coast Line, pier to lighthouse; Night swimming at Gull Cove — brave and wonderful. Relax (Ink with Cream text, relax-cove.webp): The hammock lawn at Fig Grove; A two-hour lunch at Pier 9; The seawall benches between Piers 8 and 10; The cliff steps down to Shell Beach — go slow; The evening paseo — everyone out, nobody rushing. Every stop row carries a round Plus button that toggles to a Check once saved.
   Layout: 2x2 grid at 1200px, single column on mobile; blocks are flush and sharp-cornered; each photo sits as a 4:3 card top-left with the stop list beside it, stacking under the photo on mobile; stop rows are 56px with hairline Cream rules.
   Motion: Blocks reveal whileInView with an 80ms stagger; photos scale 1.04 on hover; Plus flips to Check with a 150ms pop and a toast reading Saved to your shortlist.
4. **Neighborhoods: illustrated map and area cards** — Headline: Six neighborhoods, forty minutes apart on foot. Left, a hand-drawn SVG map of the invented city: an indented coastline with harbor and pier lines, thin ink streets, sunflower dots for each area, a small compass rose and a paper-grain fill; hovering a dot lifts its label. Right, four cards on Cream. The Pier Quarter — fish counters, a ferry horn, the best morning walk in town; best for: first morning, seafood, people-watching. Marigold Old Town — painted shutters, tiny plazas, the custard-tart line; best for: an easy afternoon, gifts, gelato. Lighthouse Point — wind, viewpoints, 118 steps down to Mussel Rocks; best for: sunrise, a long talk, the photo. Fig Grove — the green bit: hammocks, market sheds, Sunday picnics; best for: kids, shade, doing nothing.
   Layout: Two columns at desktop, map at 55% and stacked cards at 45%; the map is an original inline SVG, never map tiles or an embedded map service; each card lists three best-for chips tinted with its map-dot color.
   Motion: Map dots pulse once when the section enters view; cards reveal with a 70ms stagger; hovering a card softly enlarges its matching map dot.
5. **Itineraries: one, two or three days** — Headline: Ready-made days. Sub: Every stop saves to your shortlist with one tap. A tab row switches three columns. One perfect day: golden-hour swim at Gull Cove; custard tarts at The Marigold Room; tuna tostadas at Fish Market Row; the Cannery Murals in the cool of the afternoon; 118 steps up Lighthouse Point; sardines at Roe & Embers; the evening paseo. A slow weekend: Day 1 — market breakfast, kayak the harbor, the hammock lawn, dinner at Pier 9; Day 2 — Old Town plazas, Museum of Salt, Shell Beach by the cliff steps, sunset at Mussel Rocks. The full [BRAND]: Day 1 as above; Day 2 — Cape Sol tide pools, the Grove Gate, the gelato mile; Day 3 — bike the Coast Line, the boatyard market, one last lighthouse. Stops carry day-part tags (morning, midday, golden hour, after dark) — never clock times — and each row ends with the same Plus-to-Check control.
   Layout: A sticky tab row (1 day, 2 days, 3 days) above three equal columns; only the selected column is visible and the tab row persists at the top on scroll; on mobile the same tab row switches stacked columns; every numbered stop row is 48px with a teal number circle.
   Motion: Column switches crossfade over 0.3s; number circles fill teal as rows enter; Plus-Check pop matches Things to do.
6. **Seasonal events marquee** — A full-width Coral band. In Fraunces 900 Cream, the strip reads: SPRING — [SIGNATURE_EVENT], two hundred paper lanterns down the harbor; SUMMER — Salt & Citrus Festival, juice everywhere; AUTUMN — The Slow Fish Supper, one long table on the pier; WINTER — Grove Lights Night Market; IN BETWEEN — Sunday pier concerts. A small Karla caption pinned at the band's edge: Season samples — no dates, ever.
   Layout: A 64px band between the itineraries and the footer; content repeats twice for a seamless loop; the caption sits outside the scrolling track.
   Motion: Marquee slides left on a 38s linear loop, pauses on hover and focus, and is static under prefers-reduced-motion.
7. **Trip planner: sticky bar and shortlist drawer** — Once anything is saved, a sticky bar docks to the bottom: Shortlist — n stops, with an Open button. The drawer slides in from the right on Cream: stops grouped under their category dot colors, each with a Remove control, plus a Clear all link and the note Saved in this browser only — nothing is sent anywhere. Empty state: Nothing saved yet — tap any plus to start. The count updates everywhere at once and survives reloads via localStorage (key trip-shortlist.v1).
   Layout: A fixed bottom bar with a 24px-inset card on mobile; the drawer is a 420px right panel with a scrim overlay, closable with Esc, a scrim tap or a Close button; focus is trapped inside while open.
   Motion: The bar rises into view over 0.4s; the drawer slides in over 0.35s ease-out; removing a stop collapses its row height smoothly.
8. **Footer** — Ink ground, Cream text. A large Fraunces 900 [BRAND] wordmark, then: An independent guide to the city — written, walked and photographed by people who live here. Address: 14 Harbor Line, The Pier Quarter, [BRAND]. Small print row: The shortlist lives in your browser; season labels, not dates. Anchors repeated: Things to do, Neighborhoods, Itineraries, Events. The optional [CREDIT] link goes last.
   Layout: A single centered column about 96px tall; the small print sits on one hairline-ruled row.

## Assets
- image: Template photos made for this design, free to redistribute with the template. Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/hero-street.webp → public/images/hero-street.webp (Hero; alt A colorful coastal street with coral, teal and yellow facades sloping toward the sea); https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/eat-market.webp → public/images/eat-market.webp (Eat block; alt An open-air market with citrus crates and fresh fish under paper lanterns); https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/see-lighthouse.webp → public/images/see-lighthouse.webp (See block; alt A whitewashed lighthouse with a coral lantern room above teal water); https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/do-harbor.webp → public/images/do-harbor.webp (Do block; alt Kayaks and dinghies on glassy harbor water beside a wooden pier); https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/relax-cove.webp → public/images/relax-cove.webp (Relax block; alt A quiet cove with striped umbrellas and a hammock between pines); https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/plaza-oldtown.webp → public/images/plaza-oldtown.webp (Neighborhoods; alt An old-town plaza with painted shutters and cafe tables under a tree).
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row per photo (source media.vibefather.ai, made for this template; author VibeFather; license Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template), plus rows for @fontsource-variable/fraunces and @fontsource/karla (OFL-1.1) and lucide-react (ISC). No people identifiable in any photo; no readable signage, no logos.
- icon: lucide-react (ISC) for UI strokes only: Plus, Check, X, MapPin, ArrowRight, ArrowDown, Compass, Sun (stroke width 2, 18-24px, color inherits). The city map, sun glyph, compass rose, marquee separators and the favicon are original inline SVG drawn for this template; no other icon packs, no brand marks.
- font: Install @fontsource-variable/fraunces and @fontsource/karla and import them in src/main.tsx as listed in Setup; Vite bundles the woff2 files into dist/. Never load fonts from fonts.googleapis.com or any CDN.
- image: Drawn in code: the hand-inked neighborhood map (coastline, piers, streets, dots, compass rose, paper grain), category sun glyph, scroll cue and favicon are original inline SVG. No other bitmaps beyond the six photos; no map tiles, no embedded map services.

## Don'ts
- Do not copy or reference any real destination guide, tourism board, city, landmark, museum, business or festival; the city, streets, stops, events and map are entirely invented.
- Do not show identifiable faces, readable signage, brand logos or recognizable products in photography; people appear only distant or from behind, in images and alt text alike.
- Do not put dates, years, clock times or date pickers anywhere; events are season-labeled samples and itineraries use day-part words only.
- Do not turn the planner into a service: no accounts, no sync, no email capture, no booking, no payments; it is localStorage only and visibly labeled Saved in this browser only.
- Do not add a backend, server code, API routes, databases, auth, form submission, third-party APIs or analytics; the site runs as static files.
- Do not use stock-photo sites, placeholder-image services, hotlinked assets, CDN scripts, CDN stylesheets or external font URLs; only the six generated photos downloaded into public/images/ plus code-drawn SVG.
- Do not load commercial fonts or fonts from Google or Adobe CDNs; self-host Fraunces and Karla through Fontsource only.
- Do not ship source maps or src/ inside dist/, exceed 20 MB in dist/, use absolute asset paths, or change the fixed build command npm run build.
- Do not use bare-directory internal links; the single page stays at index.html with ./index.html# anchors.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings; a plain [BRAND] title and the favicon are enough.
- Do not leave dead controls: every plus, check, remove, clear, drawer close, tab switch and mobile menu must respond locally; the marquee pauses on hover and all motion respects prefers-reduced-motion.
- Do not allow console errors, horizontal overflow or tap targets under 44px at 1440x900 and 390x844.

---
— Prompt by VibeFather · https://vibefather.ai/t/city-tourism-guide-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
