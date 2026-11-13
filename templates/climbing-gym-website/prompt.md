# Climbing Gym Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page climbing gym site with a chalk-white identity: a colorful-wall hero with heavy condensed type, an SVG wall-and-route overview filterable by grade band, day passes and memberships in a quiet comparison, a client-side intro-course booking form, a sample events strip, and an opening-hours block with a seven-day busy-times heat chart.

- Audience: Climbing and bouldering gyms, and the studios building for them; also any facility that sells sessions by grade, level or lane.
- Goal: Get a visitor off the couch and into chalk: show the walls, let them find routes at their grade, price a visit in five seconds, and book the intro course — all honestly labeled as sample data where it is.
- Tone: Direct, dry, a little stoked — gym-beta energy: short lines, concrete numbers, zero fitness-cliché filler.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/anton (OFL), @fontsource/public-sans (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest climbing-gym-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/anton and @fontsource/public-sans as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors chalk #F2F1EC, concrete #E4E2DB, chalkline #D6D3C9, ink #23252A, slate #6B6E76, neon #E61C7D, neondeep #C41366; fontFamily display 'Anton' and sans 'Public Sans'; radius: chip 4px only.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/WallMap.tsx: a stylized elevation of the gym drawn in SVG, viewBox 0 0 1000 360 — four wall profiles as concrete-gray polygons (a slab leaning left, a vertical face, a 30° overhang, a roof section), each wall's routes as clusters of five to seven 7px hold circles in the route's tape color placed along an arc, with a small grade chip ('V1', 'V4', 'V7') at the cluster start; walls and routes come from a fixed array in content.ts; a grade-band filter prop (all | v0-2 | v3-5 | v6+) dims non-matching clusters to 15% opacity with grayscale (200ms) and stops their pointer events.
  - src/components/BusyChart.tsx: a seven-day heat strip in SVG — 7 columns (Mon–Sun) × 6 time slots (07, 10, 14, 17, 20, 22) of 44px cells whose fill is chalk at 0% to neon at 85% alpha per a fixed sample intensity array (0–1) in content.ts; hover a cell to show 'FRI 17:00 — PACKED (SAMPLE)' in a tiny tooltip.
  - Grade chips and session chips share one component: 4px radius, 13px Public Sans 700 uppercase, active = neon ground with chalk text (150ms).
  - src/lib/motion.ts: snappy variants — reveal (opacity 0→1, y 16→0, 400ms ease-out, 60ms stagger, whileInView once), pop (scale 0.92→1, 150ms) — with useReducedMotion falling back to 150ms opacity fades and no zooms.
  - Keep every user-facing string and data set (gym, district, prices, hours, walls array {name, profile, routes[{grade, tape, points}]}, busy array, events, form copy) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — Climbing in [DISTRICT]</title> plus a drawn-in-code favicon.svg (a single neon hold-dot on the chalk ground); no other meta work.

## Variables
- [BRAND] — Gym name (default: "The Chalk Room"). Invented gym name for the wordmark, hero headline, page title and contact email (from content.ts).
- [DISTRICT] — District (default: "the Old Glassworks"). Where the gym lives — hero stats row, address line and footer ('climbing in [DISTRICT]').
- [DAY_PASS] — Day pass price (default: "$18"). The single-visit price in the passes comparison and the hero CTA line.
- [WALL_SIZE] — Wall size (default: "13,000 sq ft"). The scale claim in the hero stats row ('[WALL_SIZE] of wall, reset weekly').
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/climbing-gym-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Chalk `#F2F1EC` — Page ground everywhere — light warm-gray chalk white.
- Concrete `#E4E2DB` — Raised surfaces: comparison panel, form panel, wall-map ground.
- Chalk line `#D6D3C9` — Hairlines, table rules, borders, chart cell strokes.
- Ink `#23252A` — Primary text — slate near-black for Anton headlines and body.
- Slate `#6B6E76` — Secondary text: descriptions, meta, sample notes.
- Neon magenta `#E61C7D` — The single accent: grade chips, busy heat, CTAs, active filters, event tags — never decorative.
- Neon deep `#C41366` — Pressed and hover states on neon.

### Typography
- Display — gym name, headlines, wall names, big numbers (heavy condensed, uppercase, tight leading): Anton (OFL), weights 400
- Text — body, chips, table, form labels (labels uppercase tracked 0.1em): Public Sans (OFL), weights 400/500/700

### Layout & motion
- Spacing: Athletic and efficient: sections py-24 (96px) desktop / py-16 mobile; content max-w-6xl px-6/px-10; hairlines instead of boxes; the wall map gets full content width and 80px of clear space around it.
- Radius: Hard corners to match the type: 0px on images and panels, 4px on chips and inputs, pills only on the two CTAs.
- Motion: Snappy reveals: sections, cards and rows fade up (y 16→0, 400ms ease-out) with 60ms stagger via Motion whileInView, once — the sport's tempo, not a spa's.
- Motion: Grade filter: non-matching route clusters dim to 15% opacity with grayscale and their chips hollow out (200ms); matching clusters stay in full tape color with neon grade chips.
- Motion: Busy chart: cells fill from chalk to neon alpha on first reveal with a 30ms per-cell stagger (fast wave, ~1.3s total); hover shows the sample tooltip.
- Motion: Hero: the wall photo zooms 1.04→1 over 1.5s; the Anton headline snaps up 120ms later; the stats row slides in from the left.
- Motion: Chips toggle in 150ms; the intro form's saved note pops (150ms); pass rows highlight neon on hover of their column.
- Motion: prefers-reduced-motion: no zoom, no chart wave (cells render final instantly), all reveals become 150ms opacity fades.
- Imagery: One gym, one light: indoor climbing photography with bright even gym light and cool daylight from high windows, fine chalk dust drifting in the air, colorful holds on light gray walls, high-contrast energetic framing. Climbers appear only from behind or as silhouettes with faces not identifiable — small on walls, backs to the camera. No readable text anywhere in frame (no banners, boards or route tags with writing), no logos, no brand-identifiable gear marks. The six photographs are generated by VibeFather and downloaded into public/images.

## Pages & Sections
### [BRAND] — Climbing in [DISTRICT] (`index.html`)
1. **Header** — Fixed top bar, 60px, chalk ground at 92% opacity with a 1px chalkline bottom hairline. Left: the [BRAND] wordmark in Anton 20px ink, uppercase. Right (desktop): anchor links 'Walls', 'Passes', 'Learn', 'Hours' in Public Sans 700 13px uppercase tracked 0.1em slate → ink on hover; then a neon pill 'Book intro course' (chalk text) → #learn. Mobile: wordmark + pill + lucide menu/x toggle opening a chalk panel with the four links stacked.
   Layout: position fixed, z-40.
   Motion: Mobile panel snaps down 200ms; link hover 150ms; the pill presses to neondeep.
2. **Hero — the wall** — Full-bleed wide shot of a colorful bouldering wall (public/images/wall-wide.webp) with two climbers small on it, seen from behind. Label in Public Sans 700 12px uppercase tracked 0.16em neon: 'BOULDERING · TOP ROPE · TRAINING ROOM — [DISTRICT]'. Headline in Anton, clamp(3.5rem, 9vw, 7rem), ink, two lines: 'STRONG HANDS. / SOFT LANDING.' Sub, Public Sans 400 17px slate, max-w 46ch: 'Every wall reset weekly, every grade from first-timer to project. Come chalk up — day pass [DAY_PASS], gear rental included.' CTAs: 'Get a day pass' (neon pill) → #passes; 'See the walls' (ink outline) → #walls. Stats row beneath on a chalkline top rule, Public Sans 700 13px uppercase: '[WALL_SIZE] OF WALL · 120 ROUTES (SAMPLE) · RESETS EVERY WEEK'.
   Layout: min-h 92vh; photo absolute inset-0 object-cover object-center; light scrim linear-gradient(180deg, rgba(242,241,236,0.20) 0%, rgba(242,241,236,0.05) 40%, rgba(242,241,236,0.96) 100%); text block bottom-left, columns 1–9, padding-bottom 88px.
   Motion: Photo zooms 1.04→1 over 1.5s; label, headline, sub and CTAs snap up staggered 80ms from 200ms; the stats row slides in; reduced motion: static, one fade.
3. **Walls and routes — the grade map** — id=walls. Label 'THE WALLS' neon; heading Anton clamp(2rem, 4.5vw, 3.25rem) ink: 'FOUR WALLS. PICK YOUR GRADE.' Filter row: grade chips 'ALL', 'V0–2', 'V3–5', 'V6+' (active = neon). The WallMap SVG full width on a concrete ground panel (1px chalkline border): four wall profiles labeled beneath in Anton 16px ink — 'THE SLAB', 'THE FACE', 'THE PROW', 'THE ROOF' — each carrying its route clusters in tape colors with grade chips. A right-aligned sample note, Public Sans 12px slate: 'SAMPLE SET — 120 ROUTES ACROSS 4 WALLS, REFRESHED WEEKLY IN DEMO ONLY.' Beside the map (desktop), holds-macro.webp as a 1:1 accent crop with the caption 'FRESH SET, FRIDAY MORNING'.
   Layout: 12-column grid: map columns 1–9, macro photo + caption columns 10–12; mobile stacks map then photo.
   Motion: Filtering dims non-matching clusters to 15% + grayscale (200ms); grade chips pop 150ms; the map reveals with a 400ms rise; reduced motion: instant filter states.
4. **Passes and memberships** — id=passes. Label 'PASSES' neon; heading: 'PAY HOW YOU CLIMB.' A quiet comparison on a concrete panel: three columns — 'DAY PASS' '[DAY_PASS]' (per visit), 'MONTHLY' '$69' (per month), 'ANNUAL' '$590' (per year, 'two months free' tag in neon) — with four hairline rows: 'All walls & training room' (all three check), 'Gear rental' (check / check / check), 'Guest passes' (— / 1 per month / 2 per month), 'Intro course discount' (— / 20% / 20%). Under the panel, Public Sans 12px slate: 'Sample pricing for the demo — nothing is for sale here.' Beside the panel, climber-silhouette.webp (3:4) with the caption 'THE PROW AT 19:00'.
   Layout: 12-column grid: photo columns 1–4, comparison columns 5–12; the table is a 4-column CSS grid (row labels + three plans) on hairlines; mobile stacks photo above.
   Motion: The table fades up; hovering a plan column tints its header neon (150ms); rows reveal staggered 60ms.
5. **Learn — intro course** — id=learn. Label 'LEARN' neon; heading: 'NEVER TIED IN? NINETY MINUTES.' Copy, Public Sans 16px slate max-w 42ch: 'Harness, knots, top-rope belay and how to fall without apology. Small groups, one coach, chalk included — you leave climbing on your own rope.' The form on a concrete panel (labels Public Sans 700 13px ink; inputs chalk ground, chalkline border, 4px radius): name; email; session chips ('Tuesday evening', 'Saturday morning', 'Sunday afternoon' — single select); party size stepper 1–4. Button 'Save my spot' (neon). On submit: save to localStorage key 'introCourse' and show the inline note (150ms pop, slate 13px): 'Saved on this device only — this demo form sends nothing. Call the front desk to confirm.' Beside the form, gym-training.webp (4:3) with the caption 'THE TRAINING ROOM, QUIET AT NOON'.
   Layout: 12-column grid: photo columns 1–5, form columns 6–12; mobile stacks photo above form.
   Motion: Chips and stepper toggle 150ms; the saved note pops; reduced motion: fades only.
6. **Events strip** — Label 'EVENTS' neon; heading: 'THE ROOM AFTER DARK.' Three rows on hairlines, each with a neon pattern tag, an Anton 20px ink title and a Public Sans 14px slate line: 'WEEKLY — Set Night' — 'Watch the routes go up; old problems come down at 21:00.' / 'MONTHLY — Send Social' — 'Fresh set, loud playlist, first-timers welcome.' / 'QUARTERLY — Comp Night' — 'Flash format, all grades, one very loud room (sample).' Side image climber-behind.webp (3:4) with the caption 'CHALKING UP, 19:40'. Footnote: 'Sample events — patterns, not dates.'
   Layout: 12-column grid: rows columns 1–8, photo columns 9–12; mobile stacks.
   Motion: Rows snap up staggered 60ms; tags pop once on reveal.
7. **Hours and busy times** — id=hours. A wide band: lanes-wide.webp (16:9, 34vh, object-cover) with the caption 'TOP-ROPE LANES, MORNING'. Below, two columns: left, the hours block — Anton 24px 'HOURS' with rows on hairlines 'MON–FRI 07:00–23:00 · SAT 09:00–21:00 · SUN 09:00–21:00' and the address line '7 Foundry Street, [DISTRICT] · hello@thechalkroom.com'; right, the BusyChart heat strip (Mon–Sun × six slots) with the legend 'QUIET → PACKED (SAMPLE)' — a chalkline-to-neon gradient bar with slate end labels.
   Layout: Band full-width; hours and chart side by side in 6-column halves; the chart scrolls horizontally on narrow screens.
   Motion: Cells wave in on reveal (30ms stagger); hover tooltip; reduced motion: cells render final instantly.
8. **Footer** — 1px chalkline top rule. Left: the [BRAND] wordmark in Anton 16px and one line Public Sans 13px slate: 'An invented gym — routes, prices, busy-times and events on this page are sample copy.' Right: anchor links 'Walls · Passes · Learn · Hours' in slate; optional [CREDIT] link. No dates, no social row.
   Layout: py-12, max-w-6xl, flex row wrapping to column on mobile.
   Motion: None.

## Assets
- image: Download https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/wall-wide.webp to public/images/wall-wide.webp. Alt: 'A wide colorful bouldering wall with two small climbers seen from behind.' Used full-bleed as the hero anchor (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/holds-macro.webp to public/images/holds-macro.webp. Alt: 'Macro of colorful climbing holds on a light gray wall with chalk dust in the air.' Accent beside the wall map (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/climber-silhouette.webp to public/images/climber-silhouette.webp. Alt: 'A climber in silhouette on an overhanging wall against bright gym light.' Passes section (3:4). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/gym-training.webp to public/images/gym-training.webp. Alt: 'A training corner with hangboards and rings under bright gym light, no people.' Intro course section (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/climber-behind.webp to public/images/climber-behind.webp. Alt: 'A climber seen from behind chalking up at the wall base, face not visible.' Events strip (3:4). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/lanes-wide.webp to public/images/lanes-wide.webp. Alt: 'Top-rope lanes with a single small climber high on the wall.' Hours band (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: lucide-react (ISC) via npm — check and minus in the comparison table, plus and minus on the stepper, arrow-right in CTAs, clock and map-pin in the hours block, calendar in the events tags, menu and x for the mobile header. No other iconography: no emoji, no gym-chain logos, no hold-maker marks.
- font: @fontsource/anton (OFL, weight 400) and @fontsource/public-sans (OFL, weights 400, 500, 700), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and the six photographs in ASSETS.md at the project root: path, source, generator or author, license.

## Don'ts
- No backend, no bookings backend, no payments, no network calls: the intro-course form saves to localStorage only with its honest inline note, and nothing anywhere checks out.
- No real climbing gyms, chains, hold or gear brands, or competitions: the gym, walls, routes, events and prices are invented, and no brand-identifiable gear or logo appears in any photo.
- Grades, route sets, route counts, busy-times and event patterns are sample data and stay labeled as such; no dates tied to the real clock — hours are static patterns, events are weekly/monthly/quarterly patterns, no publish dates or years.
- Photographs show climbers only from behind or as silhouettes with no identifiable faces, and no readable text, banners or logos anywhere in frame; if a generated image ever shows a face or writing, replace it.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react, photographs from public/images; never hotlink, never use Unsplash/Pexels/Pixabay or placeholder-image services.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ under 20 MB by compressing each photograph to ≤ 400 KB WebP.
- Single page with anchor navigation; must render cleanly at 1440×900 and 390×844 with zero console errors; the grade filter and busy chart must be operable by keyboard (chips are buttons) and every animation must respect prefers-reduced-motion (no zoom or heat wave; 150ms fades).
- Keep the chalk-and-neon direction locked: chalk/concrete light ground, ink text, ONE electric magenta accent used only for meaning (grades, busy heat, CTAs, tags), Anton over Public Sans, hard corners; no dark mode, no second neon color, no glassmorphism, no gradients outside the chart's intensity fills.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [BRAND], [DISTRICT], [DAY_PASS] or [WALL_SIZE] change, rewrite wall names, events and pricing rows to fit the new gym instead of leaving roped-gym copy under a bouldering-only brand.
- List every third-party file (two Fontsource families, lucide icons, six photographs) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/climbing-gym-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
