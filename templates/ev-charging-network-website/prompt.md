# EV Charging Network Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page marketing site for an EV charging network, all visuals drawn in SVG/CSS: a hero anchored by a stylized city map with pulsing station dots and live filters (speed, connector, availability) that re-light the map, a mono stats strip, per-kWh pricing with a day/night rate bar and tariff table, a CSS phone-mock app preview with a filling battery ring, a fleet section, and a client-side host-a-charger form.

- Audience: EV charging networks and energy startups, e-mobility and infrastructure products, plus the studios building for them.
- Goal: Show the network working before asking for anything: let visitors play with the map and filters, understand pricing in ten seconds, trust the app flow, then convert — drivers to the app pitch, businesses to fleet contact, property owners to the host form.
- Tone: Technical, calm, exact — short lines, real numbers, mono labels; the confidence of infrastructure, not the hype of startups.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest ev-charging-network-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/space-grotesk and @fontsource/jetbrains-mono as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors graphite #101214, raised #17191D, gridline #24282D, volt #3CE97E, voltdeep #17603A, cloud #E8ECEF, steel #8A939B, amber #E0A63F; fontFamily display 'Space Grotesk' and mono 'JetBrains Mono'; radius scale trimmed to sm 4px and DEFAULT 8px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/CityMap.tsx: the stylized invented city — one SVG, viewBox 0 0 800 600: vertical street lines every 100px and horizontals every 75px (stroke gridline, 1px), two diagonal avenues, one river path (stroke raised, 10px, curving top-right to bottom-left); stations render from the fixed sample array in content.ts (14 entries: id, x, y, name, speed 'standard'|'fast'|'rapid', connector 'ccs'|'type2', state 'available'|'busy'|'offline'); each dot is a 5px circle (available volt, busy amber, offline steel) with an animated pulse ring (SVG circle r 5→16, opacity 0.6→0, 2.4s, delayed index×170ms).
  - src/components/BatteryRing.tsx: a 120px SVG ring (stroke volt, 8px, track gridline) whose stroke-dasharray animates 0→68% over 1.8s with Motion whileInView once.
  - Hairline grid texture utility in src/index.css: .bg-grid — repeating-linear-gradient 1px gridline every 48px at 45% opacity over the graphite ground — applied to the map panel and the app section backdrop.
  - src/lib/motion.ts: shared variants — reveal (opacity 0→1, y 18→0, 500ms ease-out, 70ms stagger, whileInView once) — with useReducedMotion falling back to plain 200ms opacity fades and no pulses.
  - Keep every user-facing string and all sample data (brand, city, rate rows, stations array, stats, fleet cards, host copy, emails) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — EV Charging in [CITY]</title> plus a drawn-in-code favicon.svg (a volt-green bolt on the graphite ground); no other meta work.

## Variables
- [BRAND] — Network name (default: "Ampline"). Invented network name used for the wordmark, station IDs (AM-101…), tariffs and contact emails (from content.ts).
- [CITY] — City name (default: "Norhaven"). The invented metro the demo map and copy describe ('the [CITY] grid', '[STATIONS] stations across [CITY]').
- [RATE] — Headline rate (default: "$0.34 / kWh"). The daytime pay-as-you-go rate — hero-pricing anchor, day/night bar label and tariff table; the unit follows the product (content.ts rewrites copy for per-minute products).
- [STATIONS] — Station count (default: "412"). The network-wide sample count in the stats strip and hero label; the map itself always shows the 14 sample dots.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/ev-charging-network-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Graphite `#101214` — Page ground everywhere — dark blue-graphite, never pure #000.
- Raised `#17191D` — Map panel ground, phone mockup, form panels, the river in the map.
- Grid line `#24282D` — Street lines, hairlines, borders, the background grid texture, ring track.
- Volt `#3CE97E` — The one electric green: available stations, pulse rings, CTAs, active filter chips, the battery ring, price accents.
- Volt deep `#17603A` — Pressed and filled states on volt: chip fills, day-rate bar block, hover borders.
- Cloud `#E8ECEF` — Primary text — cool off-white for headlines and body.
- Steel `#8A939B` — Secondary text, meta rows, offline stations, mono captions.
- Amber `#E0A63F` — Strictly functional: busy stations and the night-rate block — never decorative.

### Typography
- Display and body — headlines, bullets, form labels (technical grotesque): Space Grotesk (OFL), weights 500/700
- Mono — station readouts, filter chips, stats, prices, section labels (uppercase, tracked 0.12em): JetBrains Mono (OFL), weights 400/500/700

### Layout & motion
- Spacing: Dense and engineered: sections py-24 (96px) desktop / py-16 (64px) mobile; content max-w-6xl px-6/px-10; panels carry 24px padding with 1px gridline hairlines; the map panel is the only full-height element.
- Radius: Small and technical: 4px on chips, inputs and buttons, 8px on panels and the phone mockup; no pills, no large rounding.
- Motion: Map pulse: each available station's ring expands r 5→16 with opacity 0.6→0 over 2.4s, staggered by index×170ms — the city feels powered, not busy.
- Motion: Filter re-light: changing any filter chip transitions matching dots to full volt with pulses and non-matching dots to 15% opacity with pulses stopped (300ms); counts in the legend update.
- Motion: Dot hover: the station scales to 1.3 (150ms) and its mono tooltip card fades in above; leaving fades it out (120ms).
- Motion: Battery ring: animates stroke-dasharray 0→68% over 1.8s ease-out, once, when the app section enters; the kWh counter ticks up alongside it.
- Motion: Reveals: sections and cards fade up (y 18→0, 500ms ease-out) with 70ms stagger via Motion whileInView, once.
- Motion: Filter and form chips toggle to volt ground with graphite text (200ms); host-form steppers tick with a small y-bounce.
- Motion: prefers-reduced-motion: all pulses and the ring animation off (ring renders at 68% instantly), reveals become plain 200ms opacity fades, tooltips appear without motion.
- Imagery: Zero photography — everything is drawn in code on the graphite ground: the stylized city map (thin street grid, river, pulsing station constellation) is the hero anchor; the app preview is a CSS phone mockup; the rate bar and battery ring are SVG. Hairline grid textures back the panels. The only imagery is the network itself, lit in one electric green.

## Pages & Sections
### [BRAND] — EV Charging in [CITY] (`index.html`)
1. **Header** — Fixed top bar, 64px, graphite ground with a 1px gridline bottom hairline. Left: the [BRAND] wordmark in Space Grotesk 700 20px cloud, preceded by a small lucide zap in volt. Right (desktop): anchor links 'Map', 'Pricing', 'App', 'Fleet', 'Host' in JetBrains Mono 13px steel → cloud on hover; then the CTA 'Get the app' (volt ground, graphite text, 4px radius) → #app. Mobile: wordmark + CTA + lucide menu/x toggle opening a raised panel with the five links stacked in mono.
   Layout: position fixed, z-40, backdrop blur over the hero map behind it.
   Motion: Mobile panel slides down 250ms; link hover shifts steel → cloud (150ms); the zap icon never animates.
2. **Hero — live station map** — Left block: mono label in volt, tracked: '[STATIONS] STATIONS · [CITY] GRID · SAMPLE DATA'; headline Space Grotesk 700, clamp(2.75rem, 6vw, 4.75rem), cloud: 'The city, charged.' Sub, Space Grotesk 400 17px steel, max-w 44ch: 'Find a fast charger on the way, not across town. Filter by speed, connector and availability — this demo map runs on invented sample data.' Two CTAs: 'See pricing' (volt ground) → #pricing; 'Host a charger' (outline, gridline border) → #host. Right: the map panel — CityMap.tsx on a raised ground with the .bg-grid texture, 8px radius, 1px gridline border, filling the section height (min 560px desktop / 420px mobile). Docked to the panel's bottom on a raised strip: three filter groups in mono 12px — SPEED [All / Standard 22 / Fast 50 / Rapid 150], CONNECTOR [All / CCS / Type 2], AVAILABILITY [All / Available now]; active chips are volt ground with graphite text. Legend bottom-right, mono 11px steel: '● AVAILABLE ● BUSY ● OFFLINE — SAMPLE DATA'. Hovering any dot opens a mono tooltip: 'AM-117 · OLD MILL RD' / 'RAPID 150 KW · CCS' / '● AVAILABLE — SAMPLE'.
   Layout: 12-column grid, min-h 92vh: text columns 1–5 (self-center), map panel columns 6–12 (self-stretch). Mobile: map first (420px), text below; filter chips scroll horizontally.
   Motion: Dots pulse on load, staggered; filter changes re-light the map in 300ms; dot hover scales 1.3 with a tooltip fade; reduced motion: static dots, instant filters.
3. **Network strip** — A single hairline-topped row of four mono stats, 13px, cloud values with steel labels, separated by 1px gridlines: '[STATIONS] / STATIONS ACROSS THE METRO' · '150 KW / MAX RATE ON RAPID BAYS' · 'CCS + TYPE 2 / CONNECTORS AT EVERY SITE' · '24/7 / PHONE SUPPORT FOR EVERY SESSION'. Beneath, mono 11px steel right-aligned: 'DEMO NETWORK — EVERY NUMBER IS SAMPLE DATA'.
   Layout: max-w-6xl, 4 equal cells with gridline separators (stacked 2×2 on mobile).
   Motion: Cells fade up staggered 70ms; no counters.
4. **Pricing** — id=pricing. Mono label 'PRICING'; headline: 'One price, posted on the pylon.' A 24-hour rate bar drawn in CSS: a full-width 56px bar where 07:00–22:00 is voltdeep (labeled '[RATE]' in mono cloud) and 22:00–07:00 is amber (labeled '$0.21 / kWh'), with hour ticks 00/06/12/18/24 in mono 11px steel below. Under it a three-row tariff table with gridline rules (mono): 'PAY-AS-YOU-GO — [RATE] day · $0.21 night · no membership, tap to charge' / '[BRAND] PLUS — $7.99 / MO · $0.29 day · $0.17 night · lower rates across the metro' / 'FLEET & BUSINESS — CUSTOM · depot and corridor rates · per-kWh invoicing → link to #fleet'. Footnote mono 11px steel: 'Sample rates for the demo — real tariffs vary by site.'
   Layout: Rate bar full content width; table rows as 3-column CSS grids (tier / rates / note) with 1px gridline row rules; mobile stacks the note under each tier.
   Motion: The day block fills from left to right once on reveal (600ms); rows fade up staggered 70ms.
5. **App preview** — id=app. Left copy: mono label 'THE APP'; headline: 'Four taps, no fumbling.' Bullets (Space Grotesk 16px, each with a lucide icon in volt): 'Find — filter by speed and connector' (search), 'Plug — the handle talks to the app' (plug-zap), 'Charge — watch it fill' (battery-charging), 'Pay — one tap, one receipt' (check). Right: a CSS phone mockup on a raised panel with the .bg-grid texture — 280×580px, 8px radius, 1px gridline border, a simple notch; screen shows a session card in mono: 'AM-117 · OLD MILL RD' at top, the BatteryRing at 68% center with '31.4 kWh' beside it, below 'SESSION 24 MIN' and '$10.68 SO FAR' in cloud, and a fake pause bar (gridline fill, volt 68% filled).
   Layout: 12-column grid: copy columns 1–5, phone columns 8–11 (rotate -3deg, 24px drop shadow of pure #000 at 40%). Mobile: phone first, centered, no rotation below 640px.
   Motion: The ring animates 0→68% once on reveal (1.8s) with the kWh counter ticking alongside; the phone straightens from -3deg to 0 on hover (300ms); reduced motion: ring renders full, no counter.
6. **Fleet and business** — id=fleet. Mono label 'FLEET'; headline: 'Vans charge on schedule.' Intro steel: 'Depot charging overnight, rapid bays on the corridors your routes actually use, and one invoice per month.' Three hairline cards: 'Overnight depots' (lucide warehouse) — '22 kW banks sized to your fleet and your off-peak window.' / 'Corridor planning' (route) — 'We model your routes and place rapid bays where the vans empty.' / 'One invoice' (receipt) — 'Per-kWh reporting per vehicle, exported monthly.' CTA line: 'Talk to the fleet desk — fleet@ampline.co' (volt mono link, from content.ts).
   Layout: 3-column card grid with 1px gridline borders, 24px padding, 4px radius; stacked on mobile.
   Motion: Cards fade up staggered 100ms; hover turns the border voltdeep (200ms); icons never animate.
7. **Host a charger** — id=host. Mono label 'HOST'; headline: 'Turn a parking spot into a station.' Left, a mono checklist (lucide check in volt): 'We supply and install the hardware' / 'You keep the spot; we keep it working' / '70% of session revenue, paid monthly — sample terms'. Right, the form on a raised panel (labels Space Grotesk 600 13px cloud; inputs graphite ground, gridline border, 4px radius): name; email; property chips ('Home driveway' / 'Shop lot' / 'Office park', single select); address text input, placeholder 'Rough address is fine'; spots stepper 1–4. Button 'Save my interest' (volt ground). On click: save to localStorage key 'hostInterest' and show an inline note (300ms fade, mono 13px steel): 'Saved on this device only — this demo form sends nothing. When it's real, write host@ampline.co.' Nothing submits anywhere.
   Layout: 12-column grid: checklist columns 1–5, form columns 7–12. Mobile stacks.
   Motion: Chips and steppers transition 200ms; the saved note fades in; reduced motion keeps color-only changes.
8. **Footer** — 1px gridline top hairline. Left: the [BRAND] wordmark with the volt zap, and one mono 12px steel line: 'AN INVENTED DEMO NETWORK FOR [CITY] — EVERY NUMBER ON THIS PAGE IS SAMPLE DATA.' Right: anchor links 'Map · Pricing · App · Fleet · Host' in mono steel; optional [CREDIT] link. No dates, no social row.
   Layout: py-12, max-w-6xl, flex row wrapping to column on mobile.
   Motion: None.

## Assets
- icon: lucide-react (ISC) via npm — zap (brand mark and header), search, plug-zap, battery-charging and check (app bullets), warehouse, route and receipt (fleet cards), check (host checklist), plus/minus (steppers), menu and x (mobile header), arrow-right (CTAs). No other iconography: no emoji, no car logos, no connector-brand marks. Every other visual — the city map, battery ring, phone mockup and rate bar — is drawn in SVG/CSS by the builder following the section specs; no image files are used anywhere.
- font: @fontsource/space-grotesk (OFL, weights 500 and 700) and @fontsource/jetbrains-mono (OFL, weights 400, 500, 700), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and the lucide icon package in ASSETS.md at the project root: path, source, license — there are no image assets to list.

## Don'ts
- No backend, no network calls, no analytics, no payments: the map, availability states, session numbers and stats are static sample data from src/content.ts, visibly labeled SAMPLE, and the host form saves to localStorage only with an inline note saying so — no form ever submits.
- No photography or raster images anywhere: every visual (map, phone mockup, battery ring, rate bar, textures) is drawn in SVG/CSS; never use Unsplash/Pexels/Pixabay, generated photos or placeholder-image services.
- No real map tiles or geodata — no Leaflet, Mapbox or Google Maps: the city is a stylized invented grid drawn in one SVG with fixed coordinates.
- No real charging networks, automakers or connector-brand marks: the network, station names, streets and prices are invented, and [BRAND] is used everywhere a name appears.
- No uptime or availability guarantees or claims: every station state and statistic is sample data and stays labeled as such.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react; no third-party scripts, links or embeds.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ tiny (well under 20 MB — there are no bitmaps).
- Single page with anchor navigation only; must render cleanly at 1440×900 and 390×844 with zero console errors, and respect prefers-reduced-motion (pulses and the ring animation off; plain fades).
- Keep the direction locked: graphite grounds with hairline grid textures, one electric volt green (amber strictly for busy states and the night rate), mono labels, 4/8px radii; no light mode, no glassmorphism, no neon glow beyond the station pulse rings, no gradients outside the rate bar.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [BRAND], [CITY], [RATE] or [STATIONS] change, rewrite station names, tariff rows and units to fit the new network (per-minute pricing for a different product, for example) instead of leaving kWh copy behind.
- List every third-party file (two Fontsource families, lucide icons) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/ev-charging-network-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
