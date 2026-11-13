# Eyewear Store Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A bright, minimal shop site for [BRAND], an independent eyewear studio in [CITY] with six small-batch frame designs. One page holds a hero macro, a live-filtered frame grid and exam booking; a query-routed product page carries swatches, lens options and an updating price. One bold accent color does all the work on an off-white paper ground.

- Audience: Design-literate glasses wearers in [CITY] who want frames fitted to their face shape, plus time-poor locals who book a twenty-minute exam online.
- Goal: Move a visitor from browsing to a shortlist: find a frame through filters or the quiz, open its product page, and book an eye exam saved locally.
- Tone: Fashion-editorial calm: short confident lines, no exclamation marks, prices stated plainly. The shop knows what it likes and says so in one breath.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react + react-dom 18 (MIT), motion (motion.dev) 11 (MIT), lucide-react (ISC), @fontsource/space-grotesk, @fontsource/karla (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Two HTML pages at the project root: index.html (entry src/main.tsx) and frame.html (entry src/frame.tsx), both with script tags pointing at their entries.
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions.input { main: 'index.html', frame: 'frame.html' } }. Never copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './frame.html', './src/**/*.{ts,tsx}']. theme.extend.colors maps paper, paperDeep, ink, graphite, accent, accentDeep, rule — accent resolves to #E8582D when [ACCENT] is persimmon and #2749C6 when [ACCENT] is cobalt (see src/lib/theme.ts), and accentDeep is #C24420 / #1D3BA6 respectively.
  - src/fonts.ts imports @fontsource/space-grotesk/500.css, 700.css and @fontsource/karla/400.css, 700.css. Import fonts.ts from both entries.
  - Global CSS in src/index.css: body background paper with a very subtle paper-grain (inline SVG feTurbulence data-URI at 2% opacity); selection ink on paper; focus-visible outline 2px accent.
  - src/content.ts holds every string: frames array (slug, name, shape one of round, rectangular, cat-eye, wire, square, oval; colorway name; faceWidth narrow, medium, wide; price; image; alt; colorways list; lens note), quizSteps, quizResult mapping, dayChips, slots, examFee, address, hours. Copy is rewritten here when the variables change.
  - src/lib/brand.ts: brandSlug from [BRAND] (lowercase, non-alphanumerics to hyphens); localStorage keys `${brandSlug}:tryon` (array of frame slugs) and `${brandSlug}:exam` ({ day, slot }).
  - src/frame.tsx reads new URLSearchParams(location.search).get('id'); if the slug is unknown or missing, render the first frame in content.ts — never an empty or not-found state.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView, fade + 20px rise, 300ms, 60ms stagger), FrameCard.tsx, FilterBar.tsx, Quiz.tsx, ExamBooking.tsx, Footer.tsx; on the product page Swatches.tsx, LensPicker.tsx, SpecTable.tsx.
  - public/favicon.svg: a 64px code-drawn pair of round glasses in accent on paper. Download the six photos from Assets into public/images/ before building; write ASSETS.md at the project root.
  - dist/ holds index.html, frame.html, hashed JS/CSS, the woff2 fonts, favicon.svg and six webp images. Keep it under 20 MB.

## Variables
- [BRAND] — Shop name (default: "Alder & Iris"). Invented eyewear studio name. Wordmark, page titles, brandSlug (localStorage keys) and every mention. Never a real eyewear brand.
- [CITY] — City (default: "Hudson, New York"). Where the studio is. Appears in the hero eyebrow, the exam section and the footer address. Real cities are fine.
- [ACCENT] — Accent color (default: "persimmon"). The single bold accent. persimmon maps to #E8582D, cobalt maps to #2749C6; the rest of the palette is fixed off-white paper.
- [EXAM_FEE] — Exam fee (default: "$65"). Price string for the twenty-minute eye exam, shown in the booking section and the product page fitting note.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/eyewear-store-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#F5F1E8` — Page ground everywhere — warm off-white with a whisper of grain.
- Paper Deep `#EDE7DA` — Cards, the quiz panel, filter chips, footer band.
- Ink `#211F1B` — Primary text: headlines, prices, buttons on paper, frame borders on hover.
- Graphite `#6B665D` — Secondary text: eyebrows, captions, unselected chips, spec labels.
- Accent (persimmon) `#E8582D` — The one bold accent when [ACCENT]=persimmon: CTA fill, quiz progress, selected swatch ring, filter active state, links.
- Accent Deep (persimmon) `#C24420` — Accent hover and pressed state for persimmon.
- Accent (cobalt) `#2749C6` — The accent when [ACCENT]=cobalt — used in exactly the same places.
- Accent Deep (cobalt) `#1D3BA6` — Accent hover and pressed state for cobalt.
- Rule `#DCD4C5` — 1px hairlines: grid dividers, spec table rows, chip borders.

### Typography
- Display — wordmark, H1, H2, frame names, prices. Space Grotesk; headlines sentence case with tight -0.01em, eyebrows and labels uppercase with 0.18em tracking: Space Grotesk (OFL), weights 500/700
- Text — body copy, quiz options, buttons (uppercase 0.1em tracking at 13px), captions: Karla (OFL), weights 400/700

### Layout & motion
- Spacing: Airy and editorial: 120px desktop section rhythm (72px mobile), 1240px container, 32px padding. Grid gap 24px; product page uses a 7/5 split with a 64px gutter.
- Radius: Soft but tailored: 14px on cards and the quiz panel, 999px on chips and buttons, 4px on inputs and images.
- Motion: Crisp, never slow: reveals fade and rise 20px over 300ms with 60ms stagger — one beat, done.
- Motion: Filtering re-flows the grid with Motion layout animations at 280ms so cards glide into place instead of jumping.
- Motion: Swatch and lens selection crossfades the paper-tone backdrop behind the product photo in 240ms and the price rolls with a 200ms y-shift.
- Motion: Quiz steps slide horizontally 24px in 260ms with a progress bar that fills in accent.
- Motion: prefers-reduced-motion: every animation above becomes an instant state change.
- Imagery: One studio shoot on paper: every photograph is a frame — invented design, no recognizable silhouette — lying on warm off-white textured paper in soft directional daylight with a gentle long shadow. Macro feel, generous empty paper, no people, no readable text, no logos.

## Pages & Sections
### [BRAND] — frames, finder quiz and exam booking (`index.html`)
1. **Header** — Sticky header on Paper with a 1px Rule bottom hairline after 16px of scroll. Left: wordmark [BRAND] in Space Grotesk 700, 18px, uppercase, 0.18em tracking, Ink, followed by a small accent dot (6px, round) — the only decoration. Center nav (desktop): Frames, Find my frame, Book an exam — Karla 13px uppercase 0.1em tracking, Graphite to Ink on 150ms, scrolling to their anchors. Right: 'Try-on list' text link with a Bookmark icon and a live count of saved frames from localStorage. Mobile: wordmark plus burger (two 1.5px Ink lines) opening a full-screen Paper overlay with anchors in Space Grotesk 24px.
   Layout: Single row, 1240px container, 18px vertical padding; overlay stacks left-aligned and centered.
   Motion: Hairline fades in on scroll; overlay fades and rises 12px in 200ms.
2. **Hero** — Split hero: right 7 columns hold hero-lune-macro.webp edge-to-edge to the viewport's right edge (rounded 4px on its left corners only); left 5 columns carry the copy block vertically centered. Eyebrow '[BRAND] — HAND-FINISHED FRAMES — [CITY]' in Karla 12px uppercase 0.24em Graphite. H1 in Space Grotesk 700, clamp(44px, 6vw, 76px), Ink, -0.01em: 'See sharply. Wear boldly.' Sub in Karla 16px Graphite, max 42ch: 'Six small-batch shapes, cut and fitted in our [CITY] workshop. A twenty-minute exam is [EXAM_FEE]; frames start at $165.' Two CTAs stacked with 12px gap: 'Shop frames' (accent fill, Paper text, 999px, Karla uppercase 13px) and 'Find my frame — 2 min' (ghost, 1px Ink border). Below the CTAs a quiet line in Graphite 13px: 'Free adjustments for the life of the frame.'
   Layout: 5/7 split; image bleeds right on desktop. Mobile: image on top at 4:3, copy below with 24px padding.
   Motion: Copy staggers in (eyebrow, H1, sub, CTAs) at 300ms each, 60ms apart; the photo scales from 1.02 to 1.0 over 600ms once.
3. **Frame finder quiz** — A single panel on Paper Deep, rounded 14px, id='find'. Left rail: eyebrow 'FIND MY FRAME' and H2 'Three questions. One pair.' with a small line in Graphite: 'Answer honestly — nobody sees this but the mirror.' Right: three steps shown one at a time. Step 1 'Which face are you?' — four option cards with lucide icons: Circle 'Oval', Circle 'Round', Square 'Square', Heart 'Heart-shaped'. Step 2 'How loud should they be?' — 'Bold' (Sparkles icon), 'Quiet' (Minus), 'Wire-thin' (Glasses). Step 3 'Material?' — 'Acetate', 'Metal', 'Mixed' as plain cards. A 3-segment accent progress bar sits above the options; Back and Next are Karla uppercase text buttons. The deterministic mapping: Oval+Bold+Acetate -> Vesper; Oval+Quiet+Metal -> Ansel; Round+Bold+Acetate -> Lune; Round+Quiet+Mixed -> Wren; Square+any+Acetate -> Beaumont; Square+Wire-thin+Metal -> Ansel; Heart+Bold -> Vesper; Heart+Quiet+Acetate -> Marrow (first matching rule wins, in that order). Result screen: the recommended frame's photo, 'Your pair: [name]' in Space Grotesk 24px, a why-line from content.ts (e.g. 'Round faces carry geometric acetate — the Lune balances you without shouting.'), price, and two links: 'View the [name]' opening ./frame.html?id=the-lune, and 'Start over'.
   Layout: 5/7 split inside the panel, 32px padding, 999px option cards in a 3-column grid.
   Motion: Steps slide 24px horizontally in 260ms; progress segments fill in accent; the result card scales from 0.96 with a 280ms ease. Reduced-motion: instant swaps.
4. **Frame grid** — id='frames'. Eyebrow 'THE DRAWER' and H2 'Six shapes, fitted to you.' Filter bar beneath, sticky under the header on scroll: three chip groups — Shape (All, Round, Rectangular, Cat-eye, Wire, Square, Oval), Color (Any, Tortoise, Crystal, Black, Gold, Slate, Honey), Face width (Any, Narrow, Medium, Wide) — as 999px Karla 13px chips, Paper ground with Rule border; active chip inverts to Ink text with a 2px accent border. The six frames, with exact data: The Lune — round, tortoise, narrow, $185; Vesper — cat-eye, crystal, narrow, $240; Marrow — rectangular, black, medium, $195; Ansel — wire (round), gold, medium, $165; Beaumont — square, slate, wide, $265; Wren — oval, honey, narrow, $175. Each card: photo on paper at 4:3, name in Space Grotesk 18px, a color dot, shape and face-width tags in Graphite 12px uppercase, price in Space Grotesk 16px, and 'View' linking to ./frame.html?id=the-lune and each frame's slug. Filtering hides non-matching cards and shows a count line 'Showing 2 of 6 frames'; 'Clear filters' appears once anything is active. Under the grid, one quiet line in Graphite: 'Also in the drawer this month: two steel aviators we fit in store only — ask at the bench.'
   Layout: 3-column grid (2 on tablet, 1 on mobile), 24px gap, cards on Paper Deep rounded 14px with 20px padding.
   Motion: Cards glide with Motion layout animation at 280ms when filters change; count line crossfades; cards reveal on scroll at 300ms with 60ms stagger.
5. **Book an eye exam** — id='exam'. Two columns on Paper Deep: left copy — eyebrow 'EYE EXAMS', H2 'Twenty minutes, no dilution.', body in Karla 15px Graphite: 'A full sight test with our in-house optician, [EXAM_FEE], Tuesday to Saturday. Bring your current pair; leave with a prescription you can read without squinting.' and the honest note 'Demo site — your pick is saved on this device only.' Right: booking card — day chips TUE WED THU FRI SAT (999px, Space Grotesk 13px), five sample slots 09:20, 10:00, 11:40, 14:20, 15:00 as outline buttons, and a summary line 'Thu — 10:00 — [EXAM_FEE]'. Button 'Hold this time' saves { day, slot } to localStorage under `${brandSlug}:exam` and swaps to a confirmation: Check icon, 'Held on this device', 'Nothing was booked or sent. Call the shop to confirm.', and a 'Change' link that restores the form pre-filled.
   Layout: 5/7 split, card rounded 14px on Paper with Rule border, 28px padding; stacks on mobile.
   Motion: Chips scale 0.97 on press; selection crossfades 180ms; confirmation fades in 240ms.
6. **Footer** — Rule hairline, then three columns on Paper: wordmark with accent dot; '118 Warren Street, [CITY]' with MapPin, 'Tue–Sat 10:00–18:00' with Clock, '(518) 555-0148' with Phone; nav anchors repeated small. Bottom line in Graphite 12px: 'All frames, fittings and prices are invented examples for this template.' plus the optional [CREDIT] link.
   Layout: Three columns, stacked on mobile; 64px section padding.
   Motion: None — the footer is still.

### [BRAND] — a frame, its colorways, lenses and price (`frame.html`)
1. **Product** — Reads ?id= from the URL; unknown or missing id renders the first frame (the Lune). 7/5 split: left, the frame's photo large at 4:3 rounded 4px on a paper-tone backdrop that changes with the selected colorway (backdrop tones live in content.ts, e.g. Lune: tortoise #EFE5D4, smoke #E9E9E6, wine #EFE2DE); beneath it a thin caption 'Photographed on our studio paper — colorways render slightly warmer in daylight.' Right column: shape and face-width eyebrow in Graphite uppercase, frame name in Space Grotesk 700 36px, price line that updates live in Space Grotesk 24px ('$185' then '$185 + $40 lens' when a paid lens is chosen), and a one-line story from content.ts (Lune: 'The quiet round one — 8mm acetate, hand-polished bevel.'). Then 'Colorway' with three swatch dots (the colorway list per frame), selected dot ringed in accent; 'Lens' as three radio cards — 'Standard, included', 'Blue-cut, +$40', 'Sun tint, +$55' — Karla 14px, selected card Ink-bordered; the running total restated on the button: 'Reserve a fitting — $225'. Pressing it adds the frame slug to `${brandSlug}:tryon` and shows an inline note with a Check icon: 'Saved to your try-on list on this device. Bring it in — fittings take ten minutes.'
   Layout: 7/5 split with 64px gutter; swatches and lenses stacked at 24px; mobile stacks photo above details.
   Motion: Colorway change crossfades the backdrop in 240ms; lens selection rolls the price with a 200ms y-shift; the save note slides up 12px in 240ms.
2. **Specs** — A quiet spec table under a Rule hairline, two columns of rows in Karla 14px with Graphite labels and Ink values: 'Width — 138 mm', 'Material — hand-cast acetate', 'Hinge — five-barrel, titanium screw', 'Weight — 21 g', 'Made — fitted in our [CITY] workshop'. Values come from content.ts per frame; keep them plausible and specific. A final line: 'Adjustments are free, forever, in store.'
   Layout: Two-column definition grid inside a 760px column, 1px Rule row dividers.
   Motion: Reveals once on scroll at 300ms.
3. **More frames** — Eyebrow 'ALSO ON THE SHELF' and three related frames (the next three slugs after the current one, wrapping) as compact cards: photo 4:3, name, price, 'View' link to ./frame.html?id=….
   Layout: 3-column grid, 24px gap, same card style as the main grid.
   Motion: Reveals on scroll at 300ms with 60ms stagger.

## Assets
- image: Six studio photographs made for this template, redistributable with it. Download each into public/images/ with curl -L -o before building. https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/hero-lune-macro.webp -> public/images/hero-lune-macro.webp (hero and the Lune's card/product photo; alt 'A round tortoise acetate frame lying on warm off-white paper in soft daylight'); https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-vesper.webp -> public/images/frame-vesper.webp (Vesper; alt 'A smoke-crystal cat-eye frame on warm paper'); https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-marrow.webp -> public/images/frame-marrow.webp (Marrow; alt 'A matte black rectangular frame on warm paper'); https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-ansel.webp -> public/images/frame-ansel.webp (Ansel; alt 'A thin round gold wire frame on warm paper'); https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-beaumont.webp -> public/images/frame-beaumont.webp (Beaumont; alt 'A wide square slate acetate frame on warm paper'); https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-wren.webp -> public/images/frame-wren.webp (Wren; alt 'A small oval honey wire frame on warm paper'). In ASSETS.md credit each: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- icon: lucide-react only: Glasses, Circle, Square, Heart, Sparkles, Minus, ArrowRight, ArrowLeft, Check, Bookmark, MapPin, Clock, Phone. Stroke width 1.75, 16-24px, color inherits. The favicon is code-drawn SVG round glasses in the accent color. No other icon sets.
- font: @fontsource/space-grotesk (500, 700) and @fontsource/karla (400, 700), imported in src/fonts.ts so Vite bundles the woff2 files into dist/. Never load fonts from a CDN.

## Don'ts
- No backend, no APIs, no form submission, no payments: the try-on list and exam hold save to localStorage only and both confirmations say so.
- No real eyewear brands and no recognizable frame silhouettes: the six frames are invented designs with invented names.
- No prescription or medical claims: the exam is described as a demo sight test; the copy never diagnoses, promises or advises beyond booking a fitting.
- Photographs show frames on paper backgrounds only — no models' faces, no hands, no readable text, no logos.
- No calendar dates and no live clock: day chips are the fixed TUE–SAT sample pattern, slots are five fixed sample times.
- Prices are invented samples; say nothing about real availability, insurance or delivery times.
- Self-host everything: fonts via Fontsource, icons via lucide-react, images downloaded into public/images/ — no CDN tags, no analytics.
- Static build: minified, no source maps, no src/ in dist/, one command npm run build, multi-page output with real frame.html in dist/ under 20 MB.
- Every internal link points at a file (./index.html#frames, ./frame.html?id=…); never a bare directory. frame.html without a query shows the first frame, never an empty state.
- Respect prefers-reduced-motion: all crossfades, layout animations and slides become instant.
- Works at 1440×900 and 390×844 with zero console errors; quiz, filters, swatches and booking work with keyboard only and a visible accent focus ring.
- No SEO machinery beyond a plain title with [BRAND]; never mention VibeFather or any real brand inside the site; all copy is invented US English living in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/eyewear-store-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
