# Craft Brewery Taproom Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the brewery and taproom run by head brewer [FOUNDER] in [CITY], [EXPERIENCE] from first kettle. The page looks like the label art: hop green, amber and stout brown screen-print on cream, code-drawn hop cones and trucks. A filterable twelve-beer tap list, a flight builder that fills a drawn paddle, a food-truck weekly rhythm, weekday events, a tours booking, merch and a friendly returning-visitor age gate complete it. Every beer, truck and band name is invented; the site carries a drink-responsibly line and never encourages quantity.

- Audience: Primary: local beer drinkers and visitors deciding where to spend a Thursday evening — people who check the tap list before they drive. Secondary: cideries, meaderies and wine taprooms re-pointing the list and flight builder.
- Goal: Move a visitor from 'what's on tap' to a planned visit: answer the tap-list question in one screen, let the flight builder do the deciding for the undecided, then convert a tour booking or just the trip itself.
- Tone: Brewery-voice English: dry, warm, a little proud of the process. Tasting notes read like the brewer wrote them between kettle turns.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/bitter (OFL-1.1), @fontsource/karla (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Bitter' and fontFamily.body 'Karla'.
  - Self-host Bitter weights 600 and 700 and Karla weights 400, 500, 700 through @fontsource/bitter and @fontsource/karla, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals and the paddle pour-fill; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, the twelve beers (name, style, family, ABV, IBU, note, swatch color), filter options, flight copy, food trucks, events, tour slots, merch items, hours, drink-responsibly line. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - The tap list, exactly twelve beers with fields: 'Millrace Pale' American pale ale 5.2% 38 'Bready start, piney finish.' #D98E2B; 'Fiddleneck IPA' Hazy IPA 6.4% 45 'Citrus-forward, soft landing.' #E0A83C; 'Two Row Lager' Munich helles 4.8% 18 'The lawnmower beer.' #EBC65C; 'Kettle Sour' Berliner weisse 3.6% 8 'Tart, light, picnic-ready.' #F2DE8E; 'Oat Cream Ale' Cream ale 5.6% 15 'Smooth as its name claims.' #DFAF4E; 'Porter's Rest' Robust porter 5.8% 32 'Chocolate, not dessert.' #6B4326; 'Night Shift' Oatmeal stout 6.2% 28 'Roast and a whisper of coffee.' #3A2418; 'Rye the Knot' Rye IPA 6.8% 60 'Spicy rye bite over resin.' #B96A28; 'Harvest Wet Hop' Fresh hop ale 6.9% 40 'One week a year; this is it.' #8FA03A; 'Pilsner Bridge' Bohemian pilsner 4.9% 30 'Crisp, floral, exacting.' #E9CB63; 'Belgian Table' Session saison 4.4% 20 'Peppery, dry, second-pour easy.' #E5C469; 'Barleywine No. 9' English barleywine 9.6% 45 'The sipping chair in a glass.' #8C4A22. Filters: family chips (Ales / Lagers / Dark / Sour & light) and strength chips (Session <5% / Standard / Bold 7%+); live count ('12 of 12'); 'Clear filters' when active; zero-result state shows the clear chip.
  - The flight builder: tap-list rows gain an 'Add to flight' toggle (max 4; a 5th attempt nudges the paddle with a shake and a toast 'Four's the paddle's limit'); an 'Add all four? Try the house flight' preset (Millrace Pale, Night Shift, Kettle Sour, Two Row Lager); the drawn SVG paddle (code: a rounded walnut-brown plank with four taster glasses) fills left to right in selection order, each glass filling with its beer's swatch color over 500ms; summary card lists each beer (name, style, ABV) and '4 × 5 oz pours — $14 sample'; note 'Poured in your order — taproom only.' Persist the selection to localStorage under [BRAND_SLUG]-flight.
  - The age gate renders on first visit only: a full-screen cream overlay with a code-drawn hop cone, the brand mark, 'Old enough to be here?' with two buttons 'Yes — come on in' (sets localStorage [BRAND_SLUG]-age-ok and fades out 250ms) and 'Not yet' (swaps to a friendly panel: 'No worries — the food trucks and root-beer floats are still yours. Come back with an adult.'); returning visitors skip the gate entirely; the gate never blocks the page's scroll restoration once cleared.
  - Draw label-style inline-SVG art in code for: the hop-cone logomark, the food-truck icons (one silhouette each with awning), a tractor-free hop vine border for section rules (two-color overprint: hop green + amber with slight offset), and merch art (tee, hoodie, tulip glass, sticker) — flat shapes, no gradients, no third-party art.
  - Use only these lucide-react icons: Phone, Beer, Clock, MapPin, CalendarCheck, CheckCircle2, ChevronRight, ArrowRight, Menu, X, Users, Music, Truck, Sparkles, Leaf, Star.
  - Persist the age gate, flight selection and tour booking to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the hop-cone mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Brewery name (default: "Fiddleneck Brewing Co."). Invented brewery; the hop-cone logomark is derived from it in code.
- [CITY] — Town (default: "Millrace"). Where the taproom is; appears in hero, hours and footer.
- [FOUNDER] — Head brewer (default: "Sana Iqbal"). Invented head brewer, named in hero and tour copy.
- [PHONE] — Phone (default: "(555) 812-6640"). Taproom line; links as tel: with digits only.
- [EXPERIENCE] — Years brewing (default: "6 years"). Plain phrase like '6 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/craft-brewery-taproom-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Hop green `#5B8C2A` — Brand: eyebrows, active chips, hop art, links
- Hop deep `#3F6520` — Dark green panels and footer ground
- Amber ale `#E09A2D` — Warm accent: prices, highlights, flight summary
- Amber tint `#F7E9CE` — Chips and highlight panels
- Stout brown `#2A1A12` — Dark bands, headings, footer text
- Cream paper `#F6F1E4` — Page ground with a subtle paper-grain CSS texture
- White `#FFFFFF` — Cards on cream
- Ink `#241811` — Body text
- Steel `#6B5F52` — Secondary text
- Hairline `#E4DBC8` — Hairline rules and card borders

### Typography
- Display: headlines, beer names, prices: Bitter (OFL), weights 600/700
- Body: paragraphs, controls, list meta: Karla (OFL), weights 400/500/700

### Layout & motion
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers sit under a two-color hop-vine rule (green over amber, slight offset) with a 13px letter-spaced hop-green eyebrow and a Bitter 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps.
- Radius: Label-friendly: 8px cards, 6px chips, pill CTAs; photos 8px with a 2px stout-brown border like a printed frame.
- Motion: Fade-rise reveals (12px, 500ms, 60ms stagger) via useInView, once.
- Motion: The flight tasters fill bottom-up 500ms each, staggered 150ms in selection order; a rejected fifth selection shakes the paddle 8px twice.
- Motion: Tap rows stagger 40ms on filter change; the age gate fades out 250ms when cleared.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Warm amber-lit craft-brewery photography from one shoot: a taproom with string lights and communal tables, a wall of plain-handled taps, stainless fermentation tanks, a wooden flight of four on the bar, a tulip pour mid-stream, and a strung-lit patio at dusk — no people, no readable tap-handle labels or signage.

## Pages & Sections
### [BRAND] — Taproom in [CITY] (`index.html`)
1. **Age gate** — First visit only, full-screen cream overlay above the page: the code-drawn hop cone, [BRAND] in Bitter 700, 'Old enough to be here?' in Karla 16px, two pill buttons — 'Yes — come on in' (hop green) and 'Not yet' (stout outline). Declining swaps to: 'No worries — the food trucks and root-beer floats are still yours. Come back with an adult.' with a 'Changed my mind' link back. Clearing sets the localStorage flag; returning visitors never see the gate.
   Layout: Centered card max-width 460px; body scroll locked while the gate is visible; the page behind renders normally once cleared.
   Motion: Gate fades out 250ms on acceptance; nothing animates behind it.
2. **Header and hero** — Header (cream at 94% with backdrop blur, 72px): hop-cone logomark + [BRAND] in Bitter 700 18px stout; nav anchors Tap list, Flight, Food trucks, Tours, Visit; right: phone chip Phone icon + [PHONE] (tel:) and hop-green pill 'Book a tour'. At 390px: logomark + name, phone icon button, menu button on one line; anchors in a cream dropdown. Hero: left copy (columns 1–6): eyebrow hop green 'BREWERY & TAPROOM — [CITY]'; H1 Bitter 700 stout 'Twelve taps, one stubborn kettle.'; paragraph steel 'Head brewer [FOUNDER] runs a 10-barrel rig behind the bar — [EXPERIENCE] of small batches, honest styles and a taproom that smells like breakfast for grain nerds.'; hop-green pill 'See the tap list' (anchor), stout-outline pill 'Build a flight' (anchor); chips: 'Tours Saturdays' · 'Food trucks 4 nights' · 'Family-friendly till 8'. Right (columns 7–12): the taproom photo in an 8px frame with the 2px stout border.
   Layout: 12-column grid; mobile stacks copy then photo.
   Motion: Photo settles from 1.03; copy rises 12px staggered 70ms.
3. **Tap list** — Cream band with paper grain. Eyebrow 'ON TAP NOW' (hop green); title 'The board, without the chalk dust.' Filter row: family chips (All / Ales / Lagers / Dark / Sour & light) and strength chips (Any / Session <5% / Standard / Bold 7%+); live count '12 of 12'. List rows (white cards, hairline, 8px): color swatch dot (the beer's color), name in Bitter 700 17px stout, style in Karla 13px steel, ABV and IBU in tabular 13px with a small Beer icon, and the tasting note in Karla 14px ink italic; an 'Add to flight' toggle on the right (hop-green when in the flight, disabled-look with the paddle icon when the flight is full). Footer note 12px steel: 'ABV and IBU are the current batch — the board changes with the kettle.'
   Layout: Single-column list max-width 860px; filters scroll horizontally on mobile; zero-result state shows the clear chip.
   Motion: Rows stagger 40ms on filter change with a 160ms crossfade; the add-to-flight toggle pops 1.05×.
4. **Flight builder** — Stout-brown band, the signature section. Eyebrow 'BUILD A FLIGHT' (amber); title 'Four glasses, your order.' Left (7 columns): the drawn SVG flight paddle — a walnut-brown plank with four taster glasses; glasses fill left to right in selection order, each with its beer's swatch color, a 500ms bottom-up fill staggered 150ms; empty slots show a faint hop outline. Right (5 columns) summary card (cream on stout): 'YOUR FLIGHT' eyebrow amber; each beer (name Bitter 700 16px stout, style + ABV 13px cream); total line '4 × 5 oz pours — $14 sample' in amber; note 12px 'Poured in your order — taproom only.'; buttons: hop-green pill 'Save my flight' (persists; label switches to 'Saved ✓') and an outline pill 'House flight' preset (fills Millrace Pale, Night Shift, Kettle Sour, Two Row Lager). A full-flight 5th attempt shakes the paddle with a toast 'Four's the paddle's limit.'
   Layout: 7/5 columns desktop; stacked mobile with the paddle first; paddle max-width 480px.
   Motion: Taster fills stagger as specified; shake 8px twice on overflow; toast fades after 2.4s.
5. **Food trucks** — Cream band. Eyebrow 'FOOD TRUCKS' (hop green); title 'Dinner parks itself here.' Four truck cards in a row, each with a code-drawn truck silhouette (one awning color each) and a weekday anchor: 'Tuesday — Taco Tangent' — 'Al pastor and a killer elote.'; 'Thursday — Smoke & Ash' — 'Brisket by the pound till it's gone.'; 'Friday — Pierogi Wagon' — 'Buttered, onioned, unregrettable.'; 'Saturday — Brick Oven Bus' — 'Blistered margheritas in ninety seconds.' Footer line 13px steel: 'Trucks park from 5 p.m. — follow the smoke. Schedule is a sample rhythm, not a promise.'
   Layout: Four cards in a row (2×2 under 900px, 1-column under 640px).
   Motion: Cards rise 12px staggered 70ms; truck silhouettes slide in 12px.
6. **Events** — White band. Eyebrow 'THE WEEK' (hop green); title 'Same nights, good crowds.' Four event rows (hairline dividers): 'Tuesdays — Run Club' — '6:30 a.m., 5k, first pour's on the house for runners (it's coffee)'; 'Thursdays — Trivia' — 'Seven rounds, seven dollars, max teams of six'; 'Fridays — Bluegrass on the patio' — 'Two sets, no amps, weather permitting'; 'Sundays — Yoga & a Pint' — '10 a.m. flow on the concrete, first pour after savasana'. Each row icon (Music / Users / Sparkles / Leaf). Note 12px steel: 'Recurring weekly — no tickets, just show up. Sample schedule.'
   Layout: Rows max-width 760px; icons in amber-tint circles.
   Motion: Rows fade in 60ms apart.
7. **Tours and merch** — Cream band, two halves. Left: 'TOURS' eyebrow; title 'The kettle, up close.' Copy: '$12 a head, Saturdays on the hour — the mash-in smell alone is worth it. [FOUNDER] or a brewer walks you grain to glass; 45 minutes, ends with a taster.' Booking form (white panel): party-size chips (2 / 4 / 6 / 8), slot chips (1 p.m. / 2 p.m. / 3 p.m.), Name (required), Phone (required); hop-green pill 'Hold my spot'; success: CheckCircle2, 'SPOT-2231 held — we text a confirmation. This demo stores the booking in this browser only.' Right: 'MERCH' eyebrow; four items with code-drawn art: 'Taproom tee — $28'; 'Kettle hoodie — $52'; 'Tulip glass — $9' tagged 'FLIGHT-APPROVED'; 'Sticker pack — $5'. Note 12px steel: 'Buy at the bar — the online cart is a sign, not a store (sample).'
   Layout: 6/6 columns desktop, stacked mobile; tour form fields two-per-row on desktop.
   Motion: Merch cards rise 12px staggered; success code pops 1.1×.
8. **Visit and footer** — Stout-brown band with the pour-glass photo (8px frame) left and visit info right: 'Find us' — '14 Raceway Lane, [CITY]' (MapPin); hours 'Wed–Thu 4–10 · Fri 3–11 · Sat 12–11 · Sun 12–6'; '[PHONE] (tel:)'; a line 'Kid- and dog-friendly till 8 p.m. — the picnic tables out back know it.' Footer (hop-deep ground): brand + logomark; anchors Tap list, Flight, Tours, Visit; 'Drink responsibly. Sample site — beers, trucks and events invented.' plus the optional [CREDIT] link in amber. Mobile sticky bar (under 768px): fixed bottom hop-deep 96% + blur; hop-green pill 'Hours' (anchor) and amber pill 'Book tour' (anchor), safe-area padding.
   Layout: Photo 5 columns, info 7; footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None in footer; photo rises 12px.

## Assets
- image: Taproom interior. Download https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/hero-taproom.webp to public/images/hero-taproom.webp. Alt: 'A warm taproom with string lights and communal tables.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Taps wall. Download https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/taps-row.webp to public/images/taps-row.webp. Alt: 'A row of tap handles on the bar back.' Supporting image near the tap list. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Tanks. Download https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/tanks.webp to public/images/tanks.webp. Alt: 'Stainless fermentation tanks in warm light.' Used beside the tours block. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Flight on the bar. Download https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/glass-flight.webp to public/images/glass-flight.webp. Alt: 'A wooden flight paddle holding four tasters on the bar.' Supporting image near the flight builder. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Pour. Download https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/pour-glass.webp to public/images/pour-glass.webp. Alt: 'An amber beer pouring into a tulip glass.' Used in the visit band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Patio. Download https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/patio.webp to public/images/patio.webp. Alt: 'A brewery patio with string lights at dusk.' Supporting image near events. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, plus original code-drawn label art: hop-cone logomark, hop-vine section rules, food-truck silhouettes and merch illustrations. No third-party illustration.
- font: Bitter (OFL) and Karla (OFL) self-hosted through @fontsource/bitter and @fontsource/karla; no CDN font loading.

## Don'ts
- This is an alcohol site: the age gate is mandatory (first visit, localStorage, returning visitors skip), copy never encourages quantity or drinking games, and the footer keeps the 'Drink responsibly' line.
- No real breweries, beer names, label art, slogans or festivals; [BRAND], all twelve beers, trucks, events and prices are invented sample data.
- No real hop-cultivar trademarks used as branding; hop character is described generically (piney, citrus-forward).
- No real food trucks, restaurants or musicians; trucks and acts are invented with generic cuisine and genre labels.
- No real dates tied to the clock: food trucks and events anchor to weekdays, tour slots are static chips, no calendar dates, no copyright year.
- Merch is bar-purchase only — never a real cart or checkout; the demo states the online grid 'is a sign, not a store'.
- Forms are local-only samples: no submit to any server, no APIs, no analytics. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- Tap-list filters must never leave an empty list without the 'Clear filters' affordance; the flight builder caps at four with friendly feedback, never a hard block.
- Photos show taps, tanks, glassware and rooms only — no people, no readable tap-handle labels, signage or brand marks.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, taster fills, shakes, staggers and the gate fade, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the tour form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/craft-brewery-taproom-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
