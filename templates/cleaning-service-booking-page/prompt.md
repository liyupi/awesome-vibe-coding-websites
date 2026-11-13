# Cleaning Service Booking Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page booking page for [BRAND], a home cleaning crew serving [CITY], base visit $[BASE] plus per-room math. It must quote and book in one scroll: steppers for bedrooms and bathrooms, frequency pills with discounts, add-on toggles, the standard checklist, a 14-day date picker with time windows, and a booking summary that captures name and address and confirms client-side. One page: index.html with sections (#calculator, #checklist, #book). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Busy households and renters 28–55 comparing two cleaners on their phones. They want a trustworthy price in twenty seconds, what's included in plain words, and a date without a phone call.
- Goal: Produce the booking. Within ten seconds a visitor sees the price promise and the calculator; within one minute they see their own total and a date they like.
- Tone: Fresh, plain and a little bubbly — clean windows, clear words. Concrete inclusions, no 'deep-clean masterpiece' fluff, one joke about baseboards.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/poppins (OFL-1.1), @fontsource-variable/plus-jakarta-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (white-page, mist, card, sky-ink, sky-deep, sky-mist, slate, citrus, citrus-deep, good, rule) and fontFamily display ['Poppins', 'system-ui', 'sans-serif'], sans ['Plus Jakarta Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 16px and add maxWidth { container: '1140px' }.
  - In src/fonts.ts import '@fontsource/poppins/500.css', '@fontsource/poppins/700.css' and '@fontsource-variable/plus-jakarta-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, rate, add-on, checklist item, time window, review and image path, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com', phoneDigits for tel:), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':'), src/lib/quote.ts (pure math: quote({bedrooms, bathrooms, frequency, addons[]}) — base $[BASE] + $28/bedroom + $19/bathroom, frequency multiplier once 1.0 / biweekly 0.85 / weekly 0.75, add-ons flat; returns line items + total).
  - State: src/store/booking.ts is a tiny external store (useSyncExternalStore) holding the whole draft { bedrooms, bathrooms, frequency, addons[], date, window, name, address, note } and the booked flag, persisted to localStorage key brandSlug + ':booking'. The summary and confirmation read from it.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx; Hero.tsx (SparkleBadge.tsx drawn), Calculator.tsx (Stepper.tsx, FrequencyPills.tsx, AddonToggle.tsx, QuoteLine.tsx), Checklist.tsx, DatePicker.tsx (DayChips.tsx, WindowChips.tsx), SummaryPanel.tsx (BookingForm.tsx, Confirmed.tsx), TrustStrip.tsx, Reviews.tsx. src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBFDFF'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — Home cleaning in [CITY], priced in 20 seconds</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the four images. Keep it under 8 MB.

## Variables
- [BRAND] — Company name (default: "Suds & Sun"). Invented cleaning company name. Used in the wordmark, title, footer, email (hello@ + brandSlug without hyphens + .com) and localStorage keys. Never a real company or franchise.
- [CITY] — City (default: "Denver, Colorado"). Where the crew works. Used in the hero, reviews' neighborhoods and the footer. Real cities fine; streets invented.
- [BASE] — Base visit price (default: "89"). The base price in dollars as digits — plus $28 per bedroom and $19 per bathroom in the quote math. Every price on the page derives from this number in src/lib/quote.ts.
- [FOCUS] — What gets cleaned (default: "family homes and apartments"). One lowercase phrase for the clientele. Drives the hero line, checklist voice and reviews. Keep it concrete ('family homes and apartments', 'small offices and studios').
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/cleaning-service-booking-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- White Page `#FBFDFF` — Page background throughout.
- Mist `#EFF4F8` — Alternate section background (Checklist, Reviews), chips, hover fills.
- Card `#FFFFFF` — Calculator card, summary panel, add-on tiles, confirmation.
- Sky Ink `#1F5FA8` — Primary: headlines' accent color, primary buttons, selected pills, focus ring.
- Sky Deep `#174A85` — Primary hover, footer background.
- Sky Mist `#E3EFFA` — Selected chip fills, stepper wells, the summary's total strip.
- Slate `#5A6B7A` — Secondary text, captions, eyebrows, unselected labels.
- Citrus `#F2A93B` — The one warm accent: the live price figure, add-on prices, sparkles, 'save' badges, the confirmed stamp.
- Citrus Deep `#D98F1F` — Citrus hover, discount pill text.
- Good `#2E9E6B` — Checklist checks, the trust strip icons, the confirmation check.
- Rule `#DDE6EC` — 1px hairlines, card borders, input borders.

### Typography
- Display: H1, H2, H3, section labels, the price figure, the wordmark: Poppins (OFL), weights 500/700
- Text and UI: body, buttons, checklist, form fields, captions; tabular numerals for all prices: Plus Jakarta Sans (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 5.8vw, 72px) Poppins 700, line-height 1.06; H2 clamp(28px, 3.8vw, 44px) Poppins 700; H3 20px Poppins 500; the live price Poppins 700 40px Citrus tabular; lead Plus Jakarta 400 17px / 1.65; body 15.5px / 1.7 (max-width 64ch); eyebrow Plus Jakarta 700 12px uppercase letter-spacing 0.14em Slate; caption 13px Slate. Buttons: height 50px, Plus Jakarta 700 14.5px. Primary: Sky Ink fill, Card text. Secondary: 1px Sky Ink border, Sky Ink text. Inputs: height 50px, 1px Rule border, Card fill, focus Sky Ink border. Focus ring everywhere: 2px Sky Ink outline with 3px offset.
- Radius: 16px on cards, the calculator, buttons, inputs, add-on tiles and the summary. 999px only for pills, steppers, badges and sparkles.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and price changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the confirmation swap. Fresh and quick.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 600ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Motion: Price line: every quote change counts the total to its new value over 400ms --ease-io (tabular-nums hold width); changed line items flash a Sky Mist background 300ms once.
- Motion: Steppers: the number pops 1.0→1.15→1.0 on each step (200ms); the +/- buttons are 40px circles.
- Motion: Frequency pills: the selected pill fills Sky Ink with the 'save 15%' / 'save 25%' badge in Citrus scaling in (240ms).
- Motion: Add-on tiles: toggling sweeps a Citrus check across the tile (a 240ms width reveal) and the price line item slides in.
- Motion: Date chips: selecting fills Sky Mist with a Sky Ink ring; unavailable days sit at 40% with a strike; the whole strip scrolls horizontally with snap.
- Motion: Checklist: the Good checks draw once when scrolled into view (stroke-dashoffset, 40ms stagger).
- Motion: Confirmation: the panel swaps with a 280ms --ease-io slide; the drawn stamp (Citrus 'BOOKED' ring) scales in with one soft overshoot; sparkles (small drawn 4-point stars) pop once around it.
- Motion: Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no counting (instant values), no sweeps, pops or draws; color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Bright, airy real photography, all four made for this template in one consistent style: daylight rooms, white and sky-blue with citrus accents, mid-clean details (no before/after diptychs — just fresh rooms). Never a person — rooms, sinks, folded towels, caddies. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 16px corners, no shadow; photos on White get a 1px Rule outline. Captions in Plus Jakarta Sans 13px Slate. Drawn in code: the sparkles, the stamp, stepper glyphs, checks and the favicon. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Booking (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([BRAND] = Suds & Sun, [CITY] = Denver, Colorado, [BASE] = 89, [FOCUS] = family homes and apartments). Put every string, rate and list in src/content.ts and render from it. If any variable value differs, rewrite the hero, checklist, add-ons, reviews and form copy so they are specific and believable for the new crew, keeping the same structure and counts (4 steppers-baked rows is really 2 steppers; 4 add-ons; 8 checklist items; 5 date-window rows; 3 reviews). All households, cleaners and figures are invented. Rate math (src/lib/quote.ts): base $[BASE] + $28/bedroom + $19/bathroom; frequency once ×1.0, biweekly ×0.85, weekly ×0.75; add-ons flat: inside oven $39, interior windows $49, inside fridge $29, laundry load $19. Time windows: 8–11, 11–2, 2–5 (daily). Trust: insured and bonded; same two cleaners every visit; all supplies included (hypoallergenic on request); satisfaction re-clean within 48 hours.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark — a drawn sparkle glyph in Citrus + '[BRAND]' (Poppins 700 19px) over 'Cleaning for [FOCUS] · [CITY]' (10px uppercase Slate) — linking ./index.html. Right: nav 'Pricing' → #calculator, 'What''s included' → #checklist, 'Reviews' → #reviews, and a small Sky Ink 'Book a clean' → #book. Under 820px: wordmark + book button.
   Layout: Sticky top, height 72px, White/92% blur, Rule border.
3. **Hero** — Two columns. Left: eyebrow 'CLEANING FOR [FOCUS] IN [CITY]'; H1 'A fair price.' / '*Then a cleaner house.*'; lead (max-width 500px): 'Move two sliders and the number is real — base $[BASE], rooms on top, less when we come regularly. No calls, no ''someone will contact you'', just a date you pick.'; primary 'Price my clean' → #calculator and secondary 'What''s included' → #checklist; trust row (three small Good checks): 'Insured & bonded'; 'Same cleaners every visit'; 'We bring everything'. Right: kitchen-clean.webp (4:3) with a small Citrus sparkle badge 'spotless, not sterile' pinned to its corner.
   Layout: White background, vertical padding 112px top; left 6 cols, right 5 cols offset 1.
4. **Calculator** — Section id='calculator'. Eyebrow 'THE 20-SECOND PRICE' and H2 'Your clean, your math.' One Card panel in two rows: Row 1 — Steppers: 'Bedrooms' (1–6, default 2) and 'Bathrooms' (1–4, default 1) side by side, each with −/+ circles and the count in Poppins 700 28px; FrequencyPills: 'Once' (no badge), 'Every 2 weeks' (save 15% badge), 'Weekly' (save 25% badge). Row 2 — AddonToggle tiles (icon, name, price): 'Inside the oven' $39 (Flame); 'Interior windows' $49 (AppWindow); 'Inside the fridge' $29 (Refrigerator); 'Laundry, one load' $19 (Shirt). The QuoteLine pinned to the panel's foot: 'Your visit' line items (base + rooms + add-ons − frequency discount shown as '−15% every 2 weeks') and the live total '≈ $131 per visit' (Poppins 700 40px Citrus) with the caption 'before discounts when regular; sample math for this template'.
   Layout: Mist background. Panel max-width 720px on Card, 24px padding, 16px radius; steppers in Sky Mist wells; add-ons as 2x2 tiles (16px radius, toggle check top-right).
5. **Checklist** — Section id='checklist'. Eyebrow 'EVERY CLEAN INCLUDES' and H2 'The plain-words list.' Eight items in two columns with Good checks: 'Kitchen: counters, sink, stovetop, and that thing on top of the fridge'; 'Bathrooms: scrubbed, polished, and the mirror you avoid'; 'Floors: vacuumed then mopped, corners included'; 'Dusting: shelves, sills, and baseboards (yes, the baseboards)'; 'Beds made with the linens you leave out'; 'Trash out, bins relined'; 'Knick-knacks lifted and replaced, not dusted around'; 'A note card if we noticed anything (a bulb out, a drip, a heroic spider)'. A side image (bathroom-clean.webp, 4:3) with the caption 'The mirror test: no streaks, no excuses.'
   Layout: White background. Checklist 7 cols, image 4 cols offset 1. Under 900px: stacked.
6. **Date picker and booking** — Section id='book'. Eyebrow 'PICK A DAY' and H2 'When should we come?' The DatePicker: DayChips — the next 14 days (weekday + day number; Sundays disabled at 40% with 'we rest' tooltip; the day fully booked in the sample seeded data struck), then WindowChips '8–11am · 11–2pm · 2–5pm'. The SummaryPanel (sticky right, or below on mobile): line items from the store (rooms, frequency with its discount, each add-on), the total, then fields — name, address, gate/parking note (optional), phone; primary 'Book it' with the caption 'This demo saves your booking in this browser — the real page would confirm by text.' On submit (name + address + date + window required): Confirmed — the Citrus 'BOOKED' stamp scaling in with sparkles, 'See you [DAY], [WINDOW].' (Poppins 26px), the summary echo, 'Bring nothing. Do nothing. It''s handled.' and 'Change my booking' returning to the form pre-filled. Persisted in localStorage.
   Layout: Mist background. Two columns: picker 7 cols, summary 4 cols offset 1 sticky top 96px. Under 1024px: stacked, summary not sticky.
7. **Trust strip and reviews** — TrustStrip (White band, three Good-checked items): 'Insured, bonded, background-checked'; 'The same two cleaners, every visit'; 'Supplies included — hypoallergenic on request'. Section id='reviews'. Eyebrow 'HOUSEHOLDS, QUOTED' and H2 'Three kitchens, three opinions.' Cards: 1) '"They charge what the slider said. In this economy, that''s romance."' — 'Marisol T. · Wash Park · every 2 weeks'. 2) '"The same two people every time — the dog has stopped filing complaints."' — 'Dan & Priya · Highlands · weekly'. 3) '"I read the checklist to my teenager as a threat. It worked on both of them."' — 'Jules R. · Park Hill · once a month'.
   Layout: White background; three cards 24px gap on Card, quote 16.5px / 1.7, attribution 13px Slate with the neighborhood in Citrus Deep.
8. **Footer** — Sky Deep background, Card-toned text. Three columns: 1) sparkle wordmark + '[BRAND]' over 'Cleaning for [FOCUS] · [CITY]'. 2) 'Reach us': hello@ + emailDomain, (720) 555-0162 tel:, 'Mon–Sat, 8–5'. 3) 'This page': Pricing, What''s included, Reviews, Book a clean anchors. Bottom line: '© [BRAND]. Sample prices; spotless intentions.'
   Layout: Vertical padding 64px, 3 columns, bottom line 32px below a Card/15% rule. Under 768px: stacked.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/kitchen-clean.webp → public/images/kitchen-clean.webp (Hero; object-position 50% 50%; alt 'A bright clean kitchen with a spotless counter and empty sink'); https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/bathroom-clean.webp → public/images/bathroom-clean.webp (Checklist side; alt 'A gleaming bathroom sink with folded white towels'); https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/living-fresh.webp → public/images/living-fresh.webp (Reviews side or trust band; alt 'A tidy living room with plumped cushions and a vacuum-free floor'); https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/caddy-supplies.webp → public/images/caddy-supplies.webp (Booking side; alt 'A cleaning caddy with bottles and folded cloths by a window'). Four files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/poppins and @fontsource-variable/plus-jakarta-sans (OFL-1.1) and lucide-react (ISC). Never replace photos with stock sites or images with people, faces, hands or readable branding.
- icon: lucide-react only: Flame, AppWindow, Refrigerator, Shirt, Plus, Minus, Check, Sparkles, CalendarDays, Clock, MapPin, Phone, Mail. Stroke width 1.75, 16–24px, color inherits. The sparkles (4-point stars), the 'BOOKED' stamp and the favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 9 filled #1F5FA8, a Card (#FFFFFF) sparkle glyph (4-point star). No other logo: the company name is always set as type.
- font: Install @fontsource/poppins and @fontsource-variable/plus-jakarta-sans and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the sparkles, the BOOKED stamp, stepper glyphs, checklist checks, date chips and the favicon. No other bitmaps beyond the four photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the quote is pure client math in src/lib/quote.ts; the booking and confirmation save in the browser only (localStorage) and the form says so.
- All links on this single page are anchors (./index.html#calculator, #checklist, #book, #reviews).
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 8 MB.
- No real cleaning companies or franchises; no photos with people, faces or hands; no readable text or logos in any frame; prices are clearly sample math.
- No dates or years anywhere; the date picker shows the next 14 days without highlighting today; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no counting, sweeps, pops or draws; keep color/border hover changes.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; steppers, pills, tiles, chips and form work with keyboard only and visible focus rings; the summary stays reachable on mobile (below the picker, not hidden).
- Keep copy concrete: no lorem, no 'deep-clean serenity'; every rate, add-on and window lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/cleaning-service-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
