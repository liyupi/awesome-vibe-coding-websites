# Logistics and Freight Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page B2B site for [BRAND], an invented freight carrier moving loads along [TRADE_LANE] and beyond. The hero pairs a heavy uppercase Archivo Black headline with a code-drawn world map: abstract landmasses, six invented hubs, and animated road (dashed), sea (curved solid) and air (arcing) routes that draw on load and then pulse between hubs, flashing hub rings on arrival. An amber marquee ticker runs under the hero. Sections: services by mode (road, sea, air) on warm sand panels with drawn vehicle icons and capacity chips; a tracking widget that takes the prefilled sample code [TRACKING_CODE] and reveals a local journey-day status timeline; a coverage band with count-up stats and industry chips; and a quote form that validates and confirms entirely client-side. Footer lists three invented hub addresses and [DISPATCH_LINE]. Static site, no backend; the form never posts anywhere.

- Audience: Shipping managers at small and mid-size manufacturers, e-commerce operations teams, and procurement leads comparing carriers on one corridor. Also founders of freight forwarders, 3PLs and moving companies who want a loud, trustworthy one-pager.
- Goal: Get a quote request and prove reliability in the same minute: the visitor tracks the sample shipment in five seconds, believes the network is real, and lands on the quote form with a mode already in mind.
- Tone: Bold and plain-spoken, trucker-confident. Short lines, concrete numbers, no logistics jargon, no exclamation marks. Headlines shout in caps; body copy talks like a dispatch desk that answers on the first ring.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), tailwindcss (MIT), motion (MIT), vite (MIT), typescript (Apache-2.0), @fontsource/archivo-black (OFL-1.1), @fontsource/archivo (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template, then install tailwindcss 3.4, motion and the three Fontsource packages.
  - vite.config.ts: base './', build { outDir: 'dist', sourcemap: false, assetsInlineLimit: 0 }. Do not copy src/ into dist/.
  - tailwind.config.js: content covers index.html and src/**/*.{ts,tsx}; theme.extend.colors maps exact tokens: navy #0f1e30, navdeep #13263c, navraise #1b3149, sand #e9d9b8, sandlight #f4ead4, onink #1c2c3f, amber #ffb100, amberdeep #e09600, steel #93a6ba, hairline 'rgba(233,217,184,0.22)', hairdark 'rgba(28,44,63,0.18)'; theme.extend.fontFamily: display ['Archivo Black','sans-serif'], text ['Archivo','sans-serif'], mono ['JetBrains Mono','monospace'].
  - Fonts imported in src/main.ts: @fontsource/archivo-black/400.css, @fontsource/archivo/400.css, @fontsource/archivo/500.css, @fontsource/archivo/600.css, @fontsource/jetbrains-mono/400.css, @fontsource/jetbrains-mono/700.css.
  - File layout: src/content.ts holds every string (hero, ticker items, services, sample shipment journey, stats, industries, hubs, footer); src/map-data.ts exports HUBS and ROUTES with exact coordinates and path data; src/components/ holds Header, Hero, RouteMap, Ticker, Services, Tracker, Coverage, QuoteForm, Footer; src/App.tsx composes them; src/index.css carries keyframes (marquee, pulse-dot, hub-flash, node-pulse) and reduced-motion overrides.
  - Route animation: measure each route path once with getTotalLength(); draw-in uses stroke-dashoffset over 1.1 s with 120 ms stagger; pulse dots use getPointAtLength in one shared rAF loop (7/9/11 s lap times), paused when the map is off-screen or the tab hidden. Under prefers-reduced-motion, routes render fully drawn and pulses rest at each path midpoint.
  - Tracking and quote widgets are pure client state: submit handlers call preventDefault, run local validation, and never fetch or post. Unknown tracking codes show the inline not-found message with a 'use the sample' button.
  - Scroll reveals use motion/react whileInView with once: true, viewport { margin: '-10% 0px' }; counters run once over 0.9 s.
  - All copy lives in src/content.ts. When any variable value differs from the defaults, rewrite the copy there to fit the new brand, lane, code and dispatch line, keeping the same lengths, structure and tone.
  - public/favicon.svg is hand-written as described in the Document section. <title>[BRAND]</title>, lang 'en'. Write ASSETS.md at the project root listing the three Fontsource packages (OFL-1.1) and the original favicon; no other third-party files exist.

## Variables
- [BRAND] — Carrier name (default: "Copperline Freight"). Wordmark, <title>, footer; tracking-code prefix and reference numbers suggest its initials.
- [TRADE_LANE] — Main corridor (default: "Longshore Bay-Cedar Mesa-Harbor Nine"). Three invented hub names joined by hyphens; appears in the hero eyebrow, ticker and services copy.
- [TRACKING_CODE] — Sample tracking code (default: "CL-4471-2209-CM"). Prefilled in the tracking widget; the whole sample journey is written for it.
- [DISPATCH_LINE] — Dispatch contact line (default: "Dispatch desk +1 (555) 014-8890 - staffed 24/7"). Shown in the hero and footer; one line, mono.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/logistics-and-freight-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Navy `#0f1e30` — Page ground: deep navy everywhere except sand panels
- Navy deep `#13263c` — Map panel fill, tracker panel fill, footer band
- Navy raise `#1b3149` — Abstract landmasses on the map, raised chips on navy
- Sand `#e9d9b8` — Warm sand panels (services, quote form), sea routes, primary outline text on navy
- Sand light `#f4ead4` — Input fills and hover state on sand panels; body text on navy at 85%
- On ink `#1c2c3f` — Text on sand panels, drawn vehicle icons, form text
- Amber `#ffb100` — The accent: hub dots, air arcs and pulse dots, CTA fills, counters, current timeline node, ticker ground
- Amber deep `#e09600` — CTA hover, focus rings on sand, inline error text
- Steel `#93a6ba` — Secondary text on navy, road routes (dashed), meta lines
- Hairline `rgba(233,217,184,0.22)` — 1px rules and borders on navy
- Hairline dark `rgba(28,44,63,0.18)` — 1px rules and borders on sand panels

### Typography
- Display (hero headline, section headlines, stat numbers, panel titles): Archivo Black (OFL), weights 400
- Text (body copy, buttons, chips, form labels): Archivo (OFL), weights 400/500/600
- Mono (eyebrows, hub codes, tracking codes, ticker, small print): JetBrains Mono (OFL), weights 400/700

### Layout & motion
- Spacing: 8px rhythm. Sections py-24 (desktop) / py-14 (mobile); container max-w-[1200px] px-6 (px-5 mobile). Hero pt-28 pb-20 with the ticker strip butted against its bottom. Panels p-8 (p-5 mobile). Mono eyebrows 12px uppercase, letter-spacing 0.14em. Display caps use no extra tracking (tight, heavy); line-height 0.95 on the hero, 1.05 on section headlines.
- Radius: 0 on panels, chips, buttons, inputs, timeline nodes (squares) and rules - the brutalist edge. Only the drawn vehicle icons, pulse dots and hub rings are round. No shadows; depth comes from the navy-sand contrast.
- Motion: Global feel: bold and quick. Entrances 0.45-0.6 s, cubic-bezier(.2,.8,.2,1), short staggers (60-120 ms).
- Motion: Hero headline lines slide up from 32px with a 60 ms stagger over 0.45 s; the map draws 1.1 s after 200 ms, routes staggered 120 ms; pulse dots start after the draw completes.
- Motion: Pulse dots travel each route on 7/9/11 s loops (road/sea/air) via getPointAtLength in one rAF loop; when a dot is within 12px of an endpoint hub, that hub's ring flashes (scale 1 to 1.8, opacity 1 to 0, 600 ms).
- Motion: Ticker marquee: one duplicated track translating -50% over 28 s linear infinite; pauses on hover; under reduced motion it shows a single static row.
- Motion: Coverage counters count once over 0.9 s ease-out on first view (98.4 from 0.0 with one decimal); reduced motion renders final values.
- Motion: Tracking timeline: nodes pop scale 0.9 to 1 with 90 ms stagger once revealed; the current node's amber square carries a looping ring pulse (2 s).
- Motion: Hover micro-interactions: sand service panels grow a 3px amber top rule (scaleX) and nudge up 2px; industry chips fill sand with navy text; CTA buttons darken to Amber deep and shift down 1px.
- Motion: prefers-reduced-motion: routes fully drawn, pulses at path midpoints, marquee static, counters and timelines in final states, entrances as opacity fades only.
- Imagery: Everything is drawn in code: the stylized world map with abstract landmasses, hubs and three route types (SVG, exact data below), the three vehicle icons (48px stroke SVGs), timeline nodes and chips, the confirmation check, and the favicon. No photographs, no people, no map tiles, no external images. The look is flat shapes, 1px rules and heavy type in exactly the eleven tokens above.

## Pages & Sections
### Home (single page) (`index.html`)
1. **Document and header** — <title>[BRAND]</title>, lang 'en'. Favicon public/favicon.svg: 32x32 square (no rounding) filled Navy with a 2px Sand border, containing a 14px amber diagonal route polyline from (7,24) to (25,8) with two 3px square nodes at its ends. Header: wordmark '[BRAND]' in Archivo Black 16px Sand uppercase with a 6px amber square after it; nav links Services, Track, Coverage, Quote (Archivo 600 13px uppercase Steel, hover Sand); CTA block 'GET A QUOTE' (Amber fill, On-ink text, square corners) anchoring to #quote; a mono 11px Steel line under the bar on desktop only: [DISPATCH_LINE].
   Layout: Sticky header, top 0, z 50, bg navy/90 with backdrop blur 6px and a 1px Hairline bottom border. Height 64px (the dispatch line sits as a thin 28px strip above the bar on desktop, hidden on mobile). Mobile: links collapse behind a mono 'MENU' button toggling a Navy panel; CTA stays visible.
   Motion: Header appears solid after 16px of scroll (transparent over hero first). Menu panel drops 8px and fades. Nav links shift from Steel to Sand on hover.
2. **Hero with route map** — Eyebrow mono 12px uppercase Amber: 'FREIGHT NETWORK - [TRADE_LANE]'. Headline Archivo Black caps clamp(56px, 8vw, 116px), line-height 0.95, three lines: 'HEAVY THINGS.' 'FAR PLACES.' 'ON TIME.' - the third line in Amber, first two in Sand light. Body Archivo 400 17px/1.65 Steel, max-w-[440px]: '[BRAND] runs 940 truckloads a week along the corridor, hands freight to ships at Harbor Nine and puts the urgent rest on planes out of Gate City. Booked in minutes. Tracked in one place.' CTAs: solid amber 'Get a freight quote' (On-ink text) anchoring to #quote; outline sand 'Track a shipment' (1.5px Sand border, Sand text) anchoring to #track. Mono 12px Steel line under the CTAs: [DISPATCH_LINE].
   Layout: 2-col grid (5/7) at >= 1024px: copy left, map panel right; single column below (copy first). min-h-[88vh], items center, pt-24 pb-16.
   Motion: Headline lines slide up 32px, 60 ms stagger, 0.45 s; eyebrow and body fade 0.3 s after; map panel fades in at 0.97 scale, then its routes draw (see Route map).
3. **Route map (hero anchor)** — A map panel: SVG viewBox 0 0 980 620, fill Navy deep, 1px Hairline border, with a mono 11px Steel corner label top-left 'NETWORK MAP - ILLUSTRATIVE' and a legend bottom-left of three items (18px line sample + mono 10px label): ROAD (Steel dashed), SEA (Sand solid), AIR (Amber solid). LANDMASSES: five abstract rounded blobs (60-180px across) in Navy raise with 1px Hairline strokes, placed asymmetrically - invented shapes, not a real map. HUBS (8px Amber squares with a 1px Sand ring, mono 10px Sand codes beside): LSB Longshore Bay (150,300), CMD Cedar Mesa (430,240), HRB Harbor Nine (760,320), GAT Gate City (620,140), SUN Sunfall (250,480), KNO Knotley (700,500). ROAD routes (Steel, 2px, dash 8 6): M150,300 C230,260 340,250 430,240 (LSB-CMD); M430,240 C500,210 560,180 620,140 (CMD-GAT); M430,240 C520,270 640,290 760,320 (CMD-HRB); M430,240 C380,320 300,400 250,480 (CMD-SUN). SEA routes (Sand, 2px, solid): M150,300 C300,430 600,450 760,320 (LSB-HRB); M150,300 C260,520 480,540 700,500 (LSB-KNO). AIR routes (Amber, 2.5px, solid arcs): M620,140 Q690,40 760,320 (GAT-HRB); M620,140 Q380,40 150,300 (GAT-LSB); M620,140 Q710,230 700,500 (GAT-KNO). Pulse dots r 4: Steel on road, Sand on sea, Amber on air.
   Layout: Panel w-full max-w-[640px] aspect [980/620] in the hero right column; on mobile full width under the copy (min 320px wide). Legend sits inside the panel bottom-left with a Navy-deep/80 backing strip.
   Motion: Draw-in on load: every path stroke-dashoffset animates to 0 over 1.1 s, staggered 120 ms in the order road, sea, air; hub squares pop scale 0.6 to 1 first (100 ms stagger). Then pulse dots loop on 7/9/11 s laps; a hub's ring flashes when a dot arrives within 12px. Off-screen or hidden tab: the shared rAF loop pauses. Reduced motion: routes fully drawn, dots at midpoints.
4. **Ticker strip** — Full-width amber band (height 44px) butted under the hero, mono 700 12px uppercase Navy: '148 ACTIVE ROUTES / 23 COUNTRIES / 11 HUBS / FTL - LTL / FCL - LCL / NEXT-FLIGHT-OUT / REEFER / FLATBED / 98.4% ON-TIME /' repeated twice as one track so the loop is seamless.
   Layout: overflow hidden, the track is an inline-flex row of two identical spans, whitespace nowrap, py-3.
   Motion: Track translates x 0 to -50% over 28 s linear infinite; pauses on hover (and on focus-within for keyboard). Reduced motion: static, single row clipped at the container.
5. **Services by mode** — Anchor id 'services'. Eyebrow mono 'HOW WE MOVE IT', headline Archivo Black caps clamp(34px, 4.4vw, 56px) Sand light 'PICK A MODE. / WE DO THE REST.' Three sand panels (0 radius, 1px Hairline-dark border, p-8), each with a drawn icon top-left, title Archivo Black 22px On-ink caps, two-line body Archivo 15px On-ink at 80%, a mono 12px Amber-deep concrete number, and capacity chips (1.5px On-ink border, mono 11px uppercase On-ink). ROAD - icon: truck (cab rect 6,20 w20 h14 rx2; trailer rect 30,18 w16 h18; four r3 wheels at y38; 2.5px On-ink stroke, fill none) - title 'ROAD' - body 'Full and partial truckloads up and down [TRADE_LANE], dock to dock, one dispatcher the whole way.' - chips FTL, LTL, TEAM DRIVE - number '940 POWER UNITS'. SEA - icon: ship (hull path M6,30 L42,30 L36,42 L12,42 Z; three 8x5 container rects stacked on deck; two wave polylines beneath; same stroke) - title 'SEA' - body 'Containers weekly out of Longshore Bay, reefers watched, paperwork handled before the gangway.' - chips FCL, LCL, REEFER - number '2 SAILINGS / WEEK'. AIR - icon: plane (fuselage line 8,26 to 40,26; swept wing path M24,8 L38,26 L24,22 L10,26 Z; tail fin) - title 'AIR' - body 'Next-flight-out from Gate City for the freight that cannot wait a night. Customs cleared in advance.' - chips NFO, CHARTER, SAME-DAY - number '3 H DOOR-TO-DOOR'. Each panel footer: 'Start here' link (mono 12px, Amber-deep underline) anchoring to #quote.
   Layout: 3-col grid (1-col mobile), gap 24px. Panels equal height; icons 48px.
   Motion: Panels rise on scroll, 100 ms stagger; hover: 3px amber top rule draws (scaleX) and the panel translates up 2px; the icon nudges x +3px.
6. **Tracking widget** — Anchor id 'track'. Eyebrow mono 'TRACK A SHIPMENT', headline 'KNOW WHERE IT IS. / RIGHT NOW.' A Navy-deep panel (1px Hairline border, p-8): mono 12px Sand label 'TRACKING CODE'; input (square, Sand-light fill, On-ink mono 16px, uppercase transform) prefilled with [TRACKING_CODE]; button 'LOCATE SHIPMENT' (Amber fill, On-ink mono 13px). On submit it renders the sample record: header line mono 14px Sand '[TRACKING_CODE] - LONGSHORE BAY to CEDAR MESA - 2 PALLETS / 1,840 LB'; then a five-node timeline (2px Sand-at-20% vertical rail, 14px square nodes): 'DAY 01 - BOOKED - Longshore Bay, dock 14'; 'DAY 01 - PICKED UP - signed BOL #2209'; 'DAY 04 - HUB SCAN - Cedar Mesa cross-dock'; 'DAY 06 - IN TRANSIT - corridor line 2, reefer off, dry on' (CURRENT - Amber node with looping ring pulse); 'DAY 09 - OUT FOR DELIVERY - final mile, liftgate booked'. Footer mono 10px Steel: 'DEMO TRACKER - SAMPLE SHIPMENT DATA, STORED NOWHERE'. Any other code: inline message in Amber-deep mono 12px 'NO SHIPMENT FOUND FOR THAT CODE' plus a text button 'USE THE SAMPLE' that refills [TRACKING_CODE] and reruns.
   Layout: Panel max-w-[720px] centered; timeline nodes pl-10 with the rail at left 20px; each node row py-4: mono 11px day + title Archivo 600 15px Sand light + detail Archivo 14px Steel. Mobile: input and button stack.
   Motion: On reveal, nodes pop scale 0.9 to 1 with 90 ms stagger; the current node's amber ring pulses on a 2 s loop. Submitting re-runs the reveal. Reduced motion: nodes fade in; ring static.
7. **Coverage stats and industries** — Anchor id 'coverage'. Eyebrow mono 'COVERAGE', headline 'THE NETWORK, IN NUMBERS.' Band of four stats between 1px Hairline rules: Archivo Black clamp(48px, 6vw, 88px) Amber numbers with mono 12px Steel labels - '148' ACTIVE ROUTES; '23' COUNTRIES SERVED; '11' FREIGHT HUBS; '98.4%' ON-TIME, TRAILING 12 MONTHS. Under the band: mono 11px Steel eyebrow 'BUILT FOR YOUR FREIGHT' and a chip row (1.5px Sand-at-40 border, mono 12px uppercase Sand): RETAIL + ECOMMERCE, AUTOMOTIVE PARTS, INDUSTRIAL EQUIPMENT, AGRICULTURE, ELECTRONICS, FURNITURE + HOME. Footer note mono 10px Steel: 'ROUTES, HUBS AND FIGURES ARE ILLUSTRATIVE EXAMPLES'.
   Layout: Stats 4-col grid (2-col mobile) py-12; chips flex-wrap gap-3, max-w-[900px].
   Motion: Numbers count up once over 0.9 s on first view (98.4 counts from 0.0, one decimal). Chips fade in 50 ms stagger; hover fills Sand with Navy text.
8. **Quote form** — Anchor id 'quote'. 2-col split: LEFT copy - eyebrow mono 'GET A QUOTE', headline 'QUOTES IN HOURS. / NOT DAYS.'; three bullet lines with 10px amber square markers, Archivo 16px Sand light: 'Lane, mode, weight - that is all we need to start'; 'A named dispatcher replies within 4 business hours'; 'First load gets a corridor intro rate, no contract'. RIGHT: a sand panel (0 radius, 1px Hairline-dark border, p-8) form: MODE segmented control (three square buttons ROAD/SEA/AIR, mono 12px, selected = On-ink fill with Sand-light text); fields ORIGIN, DESTINATION (text), WEIGHT LB (number), EMAIL (email) - labels mono 11px On-ink, inputs Sand-light fill 0 radius; submit 'SEND TO DISPATCH DESK' (Amber fill, On-ink mono 13px). Validation: required origin/destination (min 2 chars), weight > 0, email pattern; errors inline in Amber-deep mono 11px under the field with a 1.5px Amber-deep border. On success the form swaps in place for a confirmation block: a 56px amber square (0 radius) containing a code-drawn check (polyline M18,30 L27,39 L40,22, On-ink 5px stroke), headline Archivo Black 22px On-ink 'REQUEST QUEUED.', body Archivo 15px On-ink at 80%: 'The dispatch desk replies within 4 business hours with a lane quote. Reference QT-2214 (sample).' and a mono 11px On-ink-at-60 line 'THIS FORM RUNS LOCALLY - NOTHING IS SENT'.
   Layout: 2-col grid (5/7) at >= 1024px; stacked below (form after copy). Fields grid 2-col (origin/destination row, weight/email row), gap 16px; segmented control full-width row.
   Motion: Panel slides up 16px on entry; segmented buttons switch with a 0.15 s fill; on success the confirmation fades/slides in 0.3 s (no page change). The submit button is disabled while 'sending' for a fixed 600 ms to feel real - no network call.
9. **Footer** — 1px Hairline top rule on Navy-deep band. Three hub mini-cards (mono 12px Sand code + Archivo 14px Sand-light address): 'LONGSHORE BAY - Dock 14, 88 Pier Avenue'; 'CEDAR MESA - Cross-dock 3, 2101 Fairway Road'; 'HARBOR NINE - Terminal 2B, 6 Quay Street'. Then a row: wordmark + mono 12px Steel [DISPATCH_LINE]. Bottom bar between Hairline rules: mono 10px Steel '[BRAND] - HUBS, ROUTES AND FIGURES ON THIS PAGE ARE ILLUSTRATIVE' and the optional [CREDIT] link.
   Layout: 3-col grid (1-col mobile) gap 24px py-14; dispatch row py-6; bottom bar py-4.
   Motion: Link hover only: Steel to Sand.

## Assets
- font: Self-hosted through Fontsource, imported in src/main.ts: @fontsource/archivo-black (400), @fontsource/archivo (400, 500, 600), @fontsource/jetbrains-mono (400, 700). Vite bundles the woff2 files into dist/. Never load fonts from a CDN.
- icon: No icon library and no icon files. The three vehicle icons (truck, ship, plane) are hand-drawn 48x48 stroke SVGs specified inline in the Services section; arrows and separators are text glyphs (-, /).
- image: No image files at all. Everything visual is drawn in code: the stylized world map with landmasses, hubs and routes (SVG, exact coordinates and path data in the Route map section and src/map-data.ts), vehicle icons, timeline nodes, the confirmation check, chips and rules (CSS), and the favicon (hand-written SVG in public/favicon.svg). No photographs, no map tiles, no external downloads. Write ASSETS.md at the project root listing the three Fontsource packages (OFL-1.1) and the original favicon; no other third-party files exist.

## Don'ts
- No backend of any kind: no server code, API routes, databases, auth, analytics, or forms that submit. The quote form and tracker are client-side only (preventDefault, local state, inline confirmation); no fetch, no XHR, no third-party APIs.
- No real carriers, ports, logistics brands, ship lines or airlines; the company, hubs, lanes, sailings and flights are invented. No carrier logos, no container-line livery colors.
- The world map is stylized and code-drawn: abstract invented landmasses, never real map tiles, satellite imagery, GeoJSON world outlines or a mapping library.
- The tracking widget must stay an honest local demo: keep the 'DEMO TRACKER - SAMPLE SHIPMENT DATA' footer, never imply a live API or real shipments, and keep the not-found path with the 'USE THE SAMPLE' button.
- Stats, fleet numbers and on-time figures are invented samples: keep the 'ILLUSTRATIVE' footnotes on coverage and in the footer. No calendar dates, years or clock times anywhere on the page (journey days are durations, not dates).
- Do not load fonts from fonts.googleapis.com, fonts.gstatic.com or any CDN; Fontsource only. No CDN <script> or <link> tags; every dependency is npm-bundled.
- Production build: minified, build.sourcemap false, no src/ in dist/, relative asset paths (Vite base './'). Internal links are in-page anchors on ./index.html.
- Do not change the stack (Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion) unless the user asks. No WebGL, no UI kits, no Aceternity UI or Tailwind Plus source.
- Use only Archivo Black, Archivo and JetBrains Mono, and only the color tokens in Design. No border radius anywhere except drawn circles (squares are nodes, chips, buttons, panels), no drop shadows, no gradients.
- The map must be deterministic: exact HUBS and ROUTES data given, fixed animation timings, no random values, so two builds produce the same page. Do not add weather, day/night or other random effects.
- Respect prefers-reduced-motion exactly as specified (routes drawn, pulses at midpoints, static ticker, instant counters, fades only). Pause the shared rAF loop when the map is off-screen or the tab is hidden.
- Must work at 1440x900 and 390x844 with zero console errors, no horizontal scroll, keyboard-reachable controls (tab through the segmented control, inputs and buttons) with a visible 2px Amber-deep focus ring.
- Keep dist/ under 20 MB (it should be well under 1 MB); no video, no audio.
- Keep all copy in src/content.ts and rewrite it whenever variable values differ from the defaults; never ship default copy under a changed brand, lane, code or dispatch line. No lorem ipsum, no filler.
- No mention of VibeFather or any template source inside the site except the optional [CREDIT] footer link.

---
— Prompt by VibeFather · https://vibefather.ai/t/logistics-and-freight-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
