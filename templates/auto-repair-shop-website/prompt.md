# Auto Repair Shop Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A two-page website for [SHOP], an independent repair shop in [CITY] — [SPECIALTY] — reachable at [PHONE]. It must earn trust fast: services with price ranges and durations, a plain warranty, reviews that name the car and the job, a noise-diagnosis FAQ, and a booking form that captures the vehicle and the story. Pages: index.html, booking.html. Everything runs in the browser; nothing is submitted anywhere.

- Audience: Drivers 25–70 who fear being upsold: commuters with aging cars, parents of first cars, the person recording a mysterious hum. They want prices before the visit, a warranty in writing, and to feel like the shop has seen worse.
- Goal: Book the bay. Within ten seconds a visitor sees the price honesty, the warranty and the phone number; within two minutes they recognize their noise in the FAQ and open the booking form.
- Tone: Straight-talking shop counter: short sentences, exact ranges ('$180–320 depending on pads'), light humor about cars and none about customers.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/barlow-condensed (OFL-1.1), @fontsource/barlow (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Two real HTML pages at the project root: index.html (entry src/main-home.tsx) and booking.html (entry src/main-booking.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), booking: resolve(__dirname, 'booking.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './booking.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (shop-white, mist, steel, steel-deep, ink, slate, safety, safety-deep, good, rule) and fontFamily display ['Barlow Condensed', 'Arial Narrow', 'sans-serif'], sans ['Barlow', 'system-ui', 'sans-serif'], mono ['Barlow Condensed', 'ui-monospace', 'monospace'] (price ranges use Barlow Condensed with tabular numerals). Set borderRadius DEFAULT to 6px and add maxWidth { container: '1200px' }.
  - In src/fonts.ts import '@fontsource/barlow-condensed/500.css', '@fontsource/barlow-condensed/600.css' and '@fontsource/barlow/400.css', '@fontsource/barlow/600.css'; import src/fonts.ts and src/index.css from both entry files.
  - File layout: src/content.ts (every string, service, range, review, FAQ answer, hour and image path, typed), src/lib/brand.ts (shopSlug = [SHOP] lowercased with every run of non-alphanumeric characters replaced by '-', phoneDigits = [PHONE] digits only for tel:, emailDomain = shopSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with shopSlug + ':').
  - State: src/store/booking.ts is a tiny external store (useSyncExternalStore) holding the draft { name, phone, make, model, year, plate, service, day, story } and the sent flag, persisted to localStorage key shopSlug + ':booking'. The confirmation card renders from it; 'Book another' clears.
  - Components in src/components/: Header.tsx (phone number prominent), Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, TireRule.tsx (a drawn tread-pattern divider); home: Hero.tsx, Services.tsx (ServiceRow.tsx with RangeTag.tsx), WarrantyStrip.tsx, Reviews.tsx, NoiseFaq.tsx; booking: BookingForm.tsx (VehicleFields.tsx, ServiceSelect.tsx, DayChips.tsx, StoryField.tsx), Confirmed.tsx. src/pages/Home.tsx and Booking.tsx compose them; both pages render Header and Footer.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. Both HTML files: lang en, <meta name='theme-color' content='#F6F5F1'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index.html '<title>[SHOP] — Honest auto repair in [CITY]</title>', booking.html '<title>Book a bay — [SHOP]</title>'. booking.html opened directly shows the empty form, never an error.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the two HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [SHOP] — Shop name (default: "Ferris & Son Auto"). Invented shop name. Used in the wordmark, titles, footer, email (service@ + shopSlug without hyphens + .com) and localStorage keys. Never a real shop or chain.
- [CITY] — City (default: "Columbus, Ohio"). Where the shop is. Used in the hero, reviews' neighborhoods and the footer. Real cities fine; streets invented.
- [PHONE] — Phone (default: "(614) 555-0189"). The shop line, formatted with a 555 exchange. Used huge in the header and hero, and as the tel: link built from digits.
- [SPECIALTY] — Specialty line (default: "brakes, diagnostics and honest advice"). One lowercase phrase naming what the shop is known for. Drives the hero line, the first service group's framing and one FAQ answer.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/auto-repair-shop-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Shop White `#F6F5F1` — Page background on both pages.
- Mist `#ECEBE4` — Alternate section background (Services, FAQ), hover fill.
- Steel `#2E4A62` — Primary: headlines' ink tone, primary buttons, selected chips, focus ring.
- Steel Deep `#22394C` — Primary hover, footer background, the warranty strip's ink.
- Ink `#20242A` — Body text, service names, icon color.
- Slate `#5B6470` — Secondary text, captions, eyebrows, range tails.
- Safety `#F2B705` — The one accent: price ranges, the warranty badge, selected day, focus-visible details, the tire-rule treads.
- Safety Deep `#C99A04` — Safety hover and pressed states.
- Good `#2E7D4F` — The confirmation check, 'open now' dot, warranty checks.
- Rule `#D9D7CF` — 1px hairlines, card borders, input borders, dividers.

### Typography
- Display: H1, H2, H3, service names, the phone number, price ranges, the wordmark — Barlow Condensed, workhorse caps: Barlow Condensed (OFL), weights 500/600
- Text and UI: body, buttons, form fields, FAQ answers, captions: Barlow (OFL), weights 400/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(46px, 7vw, 92px) Barlow Condensed 600 uppercase, line-height 0.98; H2 clamp(32px, 4.4vw, 54px) Barlow Condensed 600 uppercase; H3 22px Condensed 600; the phone in the header Condensed 600 24px tabular; lead Barlow 400 18px / 1.65 Ink at 90%; body 16px / 1.7 (max-width 64ch); eyebrow Barlow 600 12px uppercase letter-spacing 0.18em Slate; caption 13px Slate; price ranges Condensed 600 20px with the range dash in Safety. Buttons: height 52px, Barlow 600 14px uppercase letter-spacing 0.06em. Primary: Steel fill, Shop White text. Secondary: 1px Ink border, Ink text. Inputs: height 50px, 1px Rule border, white fill, focus Steel border. Focus ring everywhere: 2px Steel outline with 3px offset.
- Radius: 6px on cards, buttons, inputs, chips and photos. 999px only for pills, badges and the open-now dot.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap and FAQ. Shop-floor steady — nothing bounces.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 600ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Motion: Hero: the bay photo scales 1.04→1.0 over 2400ms; the headline rises 18px; the phone number ticks in last with a Safety underline draw.
- Motion: Service rows: hover fills Mist and the price range slides 6px right with a Safety tick; the 'Book' pill fades in at the right edge linking ./booking.html?service=<slug>.
- Motion: Warranty strip: the badge draws once (stroke-dashoffset) when scrolled into view; the three checks stagger 60ms.
- Motion: Noise FAQ: accordions open height 0→auto 300ms --ease-io; the sound glyph (Squeal/Knock/Hum/Grind drawn waveforms in SVG) animates its waveform once per open (off under reduced motion).
- Motion: Booking form: day chips fill Steel on select (150ms); invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) with the Good check drawing and a Safety 'IN THE BOOK' tag stamping in -6deg→-2deg.
- Motion: Tire rules: the tread divider slides in as the section enters view (600ms, once).
- Motion: Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no scales, draws, staggers or stamps; everything renders at rest. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Workshop photography, all six made for this template in one consistent style: clean independent-shop bays, warm work light with steel-blue shadows, generic de-badged cars (no logos, no readable plates — plates blank or obscured), tools, tires and parts. Never a person (no faces, no hands). No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 6px corners, no shadow; photos on Shop White get a 1px Rule outline. Captions in Barlow 13px Slate. Drawn in code: the tire-tread rules, the noise waveforms (four SVG glyphs), the warranty badge, the IN THE BOOK stamp, chips and the favicon. Icons: lucide-react only, stroke width 2.

## Pages & Sections
### Home (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([SHOP] = Ferris & Son Auto, [CITY] = Columbus, Ohio, [PHONE] = (614) 555-0189, [SPECIALTY] = brakes, diagnostics and honest advice). Put every string, range and list in src/content.ts and render from it; both pages share one content file. If any variable value differs, rewrite the hero, all service names/ranges, warranty lines, reviews and FAQ answers so they are specific and believable for the new shop, keeping the same structure and counts (9 services in 3 groups, 3 warranty points, 3 reviews, 4 noise answers). All mechanics, drivers and figures are invented. Hours: Mon–Fri 7:30–18:00, Sat 8:00–14:00, Sun closed. Services (group · name · range · duration): Maintenance: 'Oil & filter service' $65–110 '45 min'; 'Brake pads & rotors' $180–320 per axle '90 min'; 'Full inspection' $0 '40 min — free, always'. Repair: 'Diagnostics (check-engine)' $95 '60 min, credited toward the fix'; 'Timing belt' $620–940 'full day'; 'Suspension work' $240–600 'quoted before we start'. Tires: 'New tires, mounted & balanced' $95/tire +parts '45 min each'; 'Flat repair' $25–45 '30 min'; 'Alignment' $89 '50 min'.
   Layout: n/a
   Motion: n/a
2. **Header (all pages)** — Left: the wordmark '[SHOP]' (Barlow Condensed 600 20px uppercase) over 'Independent · Est. line: two generations of Ferrises' (10px uppercase Slate) linking ./index.html. Right nav (Barlow 600 14px): 'Services' → ./index.html#services, 'The noise FAQ' → ./index.html#noise, 'Book a bay' → ./booking.html; then the phone '[PHONE]' in Condensed 600 24px as a tel: link with a Safety underline. Under 820px: wordmark + phone + a Menu icon opening a Mist full-screen menu.
   Layout: Sticky top, height 76px, Shop White/95% blur, Rule border — the phone never hides.
3. **Hero** — Two columns. Left: eyebrow 'INDEPENDENT REPAIR · [CITY]'; H1 'WE FIX CARS.' / '*AND EXPLAIN THEM.*'; lead (max-width 520px): '[SPECIALTY] — printed ranges, a written warranty, and a shop where the answer to ''do I need this?'' is sometimes no.'; primary 'Book a bay' → ./booking.html and the phone as a second-line tel: link; trust row: 'Free inspections, always'; '24-month warranty, in writing'; 'Same-day on most repairs'. Right: bay-clean.webp (4:3) with the caption 'Bay two, Tuesday, before the rush'. The sub-lead is capitalized ('Brakes, diagnostics and honest advice.'); the H1 sets non-italic in two lines; the warranty and free-inspection ticks are 14-16px.
   Layout: Shop White background, vertical padding 104px top; left 6 cols, right 5 cols offset 1.
4. **Services** — Section id='services'. Eyebrow 'SERVICES & REAL RANGES' and H2 'PRICES BEFORE YOU PARK.' Three group cards (Maintenance / Repair / Tires) on Mist with the nine services as rows: name (Condensed 600 18px), the range in Safety ('$180–320' with 'per axle' tails in Slate), duration right ('90 min'). Each row's hover reveals 'Book →' linking ./booking.html?service=<slug>. Under the grid: 'Ranges are honest starting points — we call before anything leaves the estimate.' + the TireRule divider. Each service row is a grid with a fixed name column, a fixed right-aligned price column (tabular-nums) and a duration column - prices never overlap names and never wrap one word per line; prices set in Ink 20px with Safety yellow reserved for the dash and tick only. Cards top-align (align-items:start) with even heights; the tires photo sits in its own grid cell with a caption; no stray empty bands above the section.
   Layout: Three columns 24px gap (stacked under 900px); rows 1px Rule-divided, 16px padding; ranges Condensed 600 20px tabular.
5. **Warranty strip** — A Steel Deep band with the drawn Safety badge left: '24 MONTHS / 24,000 MILES' and three points (Good checks, white text): 'Parts and labor, both covered — no asterisk about ''normal driving'''; 'Written on every invoice, transferable if you sell the car'; 'Good anywhere we are, and we are only here'. A right caption: 'The warranty is the review we write ourselves.' The three checks share equal 1fr columns with a narrower headline column and the footnote under the headline, so the strip balances.
   Layout: Full-width band, vertical padding 56px; badge 96px, three columns of points with 1px white/15% dividers.
6. **Reviews** — Eyebrow 'FROM THE COUNTER' and H2 'DRIVERS, QUOTED.' Three cards: '"Quoted a range on the phone, billed under the bottom of it. I asked them to check something else; they said it didn''t need checking. Who does that?"' — 'Marta G. · 2014 hatchback · brake job'; '"They showed me the worn part next to the new one and let me take a photo. My group chat voted it car of the month."' — 'Devon R. · 2018 crossover · suspension'; '"The hum was a wheel bearing. The other shop said ''probably fine.'' Ferris said ''three weeks, then expensive.'' It was three weeks."' — 'June & Art T. · 2012 sedan · wheel bearing'.
   Layout: Shop White background; three columns 24px gap on Card with Rule borders; quote Barlow 16px / 1.7, attribution Slate 13px with car and job in Steel 600.
7. **Noise FAQ** — Section id='noise'. Eyebrow 'WHAT''S THAT NOISE?' and H2 'FOUR SOUNDS, FOUR ANSWERS.' Accordions with drawn waveforms: 'A squeal when braking' — 'Classic worn pads. If it just started, that''s the good week to come in — the rotors may still be fine. Two minutes on the lift, no charge to look.' 'A knock from the engine' — 'That one we don''t guess about. Could be a lifter, could be worse; knocking gets a same-day diagnostic and a phone call before any wrench moves.' 'A hum that changes with speed' — 'Usually a wheel bearing or a tire. If the hum changes when you sway the car gently at speed, lean bearing — bring it in, that''s not a drive-it-for-months sound.' 'A grind in turns or gears' — 'Grind is the sound of metal meeting metal without a plan. Stop driving it hard, book the bay, and tell us exactly when it happens — the story is half the diagnosis.' Closing line: 'Still not sure? Call [PHONE] and make the noise at us. Everyone does.'
   Layout: Mist background; rows on Card Rule-bordered; waveform glyph 40px left, question Condensed 600 20px, answer Barlow 15.5px / 1.7 max-width 64ch, Plus icon right. Container max-width 780px.
8. **Footer** — Steel Deep background. Three columns: 1) wordmark + '[SHOP]' over 'Independent repair · [CITY] · Two Ferrises and a lift'. 2) 'The shop': '2210 Kilborn Ave, [CITY]', service@ + emailDomain, [PHONE] tel:. 3) 'Hours': Mon–Fri 7:30–18:00, Sat 8:00–14:00, Sun closed; 'Loaner shovels for winter, free'. Bottom line: '© [SHOP]. Ranges are real, so is the coffee.'
   Layout: Vertical padding 64px, 3 columns, bottom line 32px below a white/15% rule. Under 768px: stacked.

### Book a bay (`booking.html`)
1. **Masthead** — Solid header. Eyebrow 'BOOK A BAY', H1 'TELL US ABOUT THE CAR.', lead: 'Five fields and the story in your own words. We confirm by phone before anything is ordered — usually the same afternoon.'
   Layout: Shop White background, vertical padding 136px top + 48px, bottom hairline. H1 max-width 760px.
2. **Booking form** — A Card panel: contact row (name, phone); VehicleFields (make select: common generic makes — 'Compact (Civic-class)', 'Sedan', 'SUV/Crossover', 'Truck', 'Van', 'Electric' — plus model and year inputs and a plate input with the placeholder 'Plate (or ''none yet'')'); ServiceSelect (the nine services, preselected via ?service=<slug> from the home rows; opened plain defaults to 'Diagnostics (check-engine)'); DayChips (the next 7 weekdays; Sat shorter hours noted; Sun disabled 'closed'); StoryField (a textarea with the placeholder 'The noise, the leak, the light on the dash — when it happens and what it sounds like. Sound effects welcome.'); primary 'Send to the shop' with caption 'Saved in this browser — the real page would ring the shop phone. Nothing is sent here.' Confirmed: the Good check drawing, the Safety 'IN THE BOOK' stamp, 'Thanks, [NAME].' 'We''ll call [PHONE] to confirm [DAY] for the [SERVICE].' the story echoed in quotes, and 'Book another' clearing the form. Persisted in localStorage.
   Layout: Mist background; panel max-width 680px, 28px padding, Rule border, 6px radius; two-column contact row stacks under 560px.
3. **Reassurance strip** — Under the form: three quiet lines with checks — 'No deposit to book'; 'We call with the number before parts move'; 'Ride home within ten minutes of the shop, on the house'. Then the TireRule divider and one centered line: 'Prefer voices? [PHONE], Mon–Fri 7:30–6.'
   Layout: Mist continues; strip 72px padding; centered line 40px below.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/bay-clean.webp → public/images/bay-clean.webp (Hero; object-position 50% 55%; alt 'A clean workshop bay with a generic car on a lift, warm work lights'); https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/brakes-job.webp → public/images/brakes-job.webp (Services side; alt 'New brake rotor and caliper on a workbench'); https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/diag-screen.webp → public/images/diag-screen.webp (Noise FAQ side; alt 'A diagnostic tablet on a scanner cart, screen showing abstract gauge shapes'); https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/tires-stack.webp → public/images/tires-stack.webp (Services tires group; alt 'A neat stack of new tires in the shop'); https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/tools-wall.webp → public/images/tools-wall.webp (Booking side; alt 'A pegboard wall of organized wrenches and sockets'); https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/coffee-counter.webp → public/images/coffee-counter.webp (Reviews side; alt 'A small waiting counter with a coffee pot and two chairs'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/barlow-condensed and @fontsource/barlow (OFL-1.1) and lucide-react (ISC). Never replace photos with stock sites or images with people, faces, readable plates, car badges or tool branding.
- icon: lucide-react only: Wrench, Gauge, Disc (brake), CircleDot (tire), PhoneCall, Clock, Check, Plus, X, Car, CalendarDays, ArrowRight. Stroke width 2, 16–24px, color inherits. The tire-tread rules, the four noise waveforms, the warranty badge, the IN THE BOOK stamp and the favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 6 filled #2E4A62, a Shop White wrench glyph with a Safety (#F2B705) spark. No other logo: the shop name is always set as type.
- font: Install @fontsource/barlow-condensed and @fontsource/barlow and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the tire-tread dividers, the four noise waveform glyphs, the warranty badge, the IN THE BOOK stamp, day chips and the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the booking saves in the browser only (localStorage) and the form says so; tel: links are built from [PHONE].
- Every internal link points to a file name (./index.html, ./index.html#services, ./index.html#noise, ./booking.html, ./booking.html?service=brakes) — never to a bare directory; booking.html opened plain shows the empty form.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- No real shops, chains, parts brands or car brands; cars in photos stay generic and de-badged with blank plates; no people, faces or hands; no readable signage.
- No dates or years anywhere except the generational shop line; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no scales, waveform animations, stamps or staggers; everything renders at rest.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; the form, selects and chips work with keyboard only and visible focus rings.
- Keep copy concrete: no lorem, no dealer-speak; every range, hour and duration lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/auto-repair-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
