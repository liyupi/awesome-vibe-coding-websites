# Independent Pharmacy Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the independent pharmacy owned by pharmacist [FOUNDER] in [CITY], [EXPERIENCE] on the same corner. The page is fresh — green, white, tangerine — with a refill request (Rx number, pickup or delivery, window), transfer-your-prescription steps and a local form, vaccine and health-service bookings with slot chips, a ZIP delivery-area checker against a drawn map, extra services, hours with a pharmacist line, and a short FAQ. Photos show a bright counter and plain-label shelves. No medical advice or drug claims anywhere; all data is sample.

- Audience: Primary: neighborhood households deciding whether to leave the chain — checking delivery, transfers and whether the pharmacist actually talks to people. Secondary: compounding and health-supply shops re-pointing services.
- Goal: Move a visitor from 'do they even deliver' to a submitted refill, transfer or vaccine booking: answer delivery in one tap, make the refill take seconds, and keep the phone number one thumb away everywhere.
- Tone: Counter-friendliness in writing — brisk, warm, a little small-talk. Questions about medicines always route to the pharmacist, never to web copy.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/rubik (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display and fontFamily.body both 'Rubik'.
  - Self-host Rubik weights 400, 500, 600, 700 through @fontsource/rubik, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals and status pops; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, refill copy, transfer steps, services with slot chips, the delivery ZIP list and zone copy, extra services, hours, FAQ pairs. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Refill request, exactly: Rx number input (placeholder 'RX-004821', basic pattern RX-######), your name, pickup-or-delivery segmented control, time-window chips (Morning 9–12 / Afternoon 12–4 / Evening 4–7); submit validates inline and shows success 'Request sent — we'll text when it's ready' plus adds the refill to 'My refills' (a local list under [BRAND_SLUG]-refills showing Rx number, method, window and a 'Requested' chip — demo statuses, never auto-advancing, with a note 'This demo list lives in your browser only').
  - Delivery checker, exactly: a ZIP input (5 digits) checked against the invented in-zone list ['55501','55502','55503','55504','55505','55506','55507','55508']; in-zone → green success 'Yes — same-day windows before 4 p.m., seven days'; out-of-zone → tangerine note 'Not yet on the van routes — pickup is always ready, and we'll hold it at the counter'; the drawn SVG map shows the zone as a green blob over invented streets with the pharmacy marked.
  - Transfer steps, exactly four: 01 'Bring or call in your current bottles' — 'Names and pharmacy are enough; you don't need the paperwork.'; 02 'We call them for you' — 'Usually done the same business day.'; 03 'We check stock and insurance' — 'If something needs ordering, you hear it from a person.'; 04 'First fill ready, texts thereafter' — 'Enroll in med sync and everything lands on one day.'; ending in a local request form (name, phone, current pharmacy name, number of prescriptions chips 1–5+) with success 'Transfer started (demo) — [FOUNDER]'s team calls to confirm details.'
  - Vaccines and services, exactly five with slot chips: 'Flu shot' — walk-in or slot; 'Shingles' — slot; 'Pneumonia' — slot; 'Travel health consult' — slot; 'Blood pressure check' — walk-in only. Booking form: service select, slot chips (Morning 9–12 / Midday / Late afternoon), name, phone; success 'Booked (demo) — we text a confirmation.' Footer disclaimer: 'We book the service; the pharmacist answers every health question in person or by phone — this site gives no medical advice.'
  - Use only these lucide-react icons: Phone, Pill, Truck, Clock, MapPin, CheckCircle2, CalendarCheck, ArrowRight, Menu, X, Heart, Package, ClipboardList, Syringe, Stethoscope, MessageCircle, Search.
  - Persist the refill list and bookings to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the five generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the green rounded square with a white cross-free pill mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Pharmacy name (default: "Linden Row Pharmacy"). Invented pharmacy name; a pill logomark is derived from it in code.
- [CITY] — City (default: "Alderwood"). Where the store is; appears in hero, delivery map and footer.
- [FOUNDER] — Owner-pharmacist (default: "Phuong Tran"). Invented pharmacist-owner, named in hero and transfer copy.
- [PHONE] — Phone (default: "(555) 774-8890"). Store line; links as tel: with digits only.
- [EXPERIENCE] — Years (default: "12 years"). Plain phrase like '12 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/independent-pharmacy-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Pharmacy green `#14A06F` — Primary: header accents, links, success states, zone map
- Green deep `#0D7A54` — Dark bands and footer ground
- Tangerine `#FF8A3D` — CTAs, highlights, out-of-area notes
- Tangerine tint `#FFEFE4` — Chips and highlight panels
- Green tint `#E6F6EF` — Info panels and success chips
- White `#FFFFFF` — Page ground and cards
- Ink `#1F2A26` — Headings and body
- Steel `#5A6A63` — Secondary text
- Hairline `#E3EBE7` — Hairline rules and card borders

### Typography
- Display and body: everything: Rubik (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced green eyebrow over a Rubik 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Counter-friendly: 14px cards, 10px chips and inputs, pill CTAs; photos 14px.
- Motion: Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Motion: Refill success and delivery-check results pop 1.05×; the zone blob on the map draws its outline 400ms on section entry.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Bright pharmacy photography from one shoot: a modern counter in white and green, clean white shelves with plain-label bottles and boxes, two pharmacist portraits in white coats (fictional, varied), and a small green delivery van — no readable product labels, no brand marks, no people beyond the portraits.

## Pages & Sections
### [BRAND] — Pharmacy in [CITY] (`index.html`)
1. **Header and hero** — Header (white at 95% with backdrop blur, 72px): pill logomark (green rounded square with a white capsule glyph) + [BRAND] in Rubik 700 18px; nav anchors Refills, Transfers, Vaccines, Delivery, Hours; right: phone chip Phone icon + [PHONE] (tel:) and tangerine pill 'Request a refill'. At 390px: logomark + name, phone icon button, menu button on one line; anchors in a white dropdown. Hero: left copy (columns 1–6): eyebrow green 'INDEPENDENT PHARMACY — [CITY]'; H1 Rubik 700 ink 'The counter where they know your name.'; paragraph steel 'Pharmacist [FOUNDER] has run this corner for [EXPERIENCE] — refills by text, deliveries by van, and every question answered by a person in a white coat.'; tangerine pill 'Request a refill' (anchor) and green-outline pill 'Check delivery' (anchor); chips: 'Open till 8 p.m.' · 'Walk-in flu shots' · 'Pet prescriptions too'. Right (columns 7–12): the counter photo in a 14px frame 4:3 with a floating white card overlapping bottom-left: Pill icon, 'Refills ready for pickup: 23', 'Average wait: 9 minutes' in Rubik 700 green, 12px steel 'Sample board.'
   Layout: 12-column grid; floating card offset -18px; mobile stacks copy then photo.
   Motion: Photo settles from 1.03; copy rises 14px staggered 70ms.
2. **Refill request** — Green-tint band, the signature section. Eyebrow 'REFILLS' (green); title 'Ten seconds, no portal.' Form (white panel, max-width 720px): Rx number (required, placeholder 'RX-004821'), your name (required), pickup-or-delivery segmented control, time-window chips; green pill 'Send request'. Validation inline (2px green borders, 13px notes), no native popups. Success: CheckCircle2 green, 'Request sent — we'll text when it's ready.' and the refill appears in 'My refills' below (list card: Rx number, method, window, 'Requested' chip, 12px note 'Demo list — lives in this browser only'). A steel link under the form: 'Out of refills? Call [PHONE] — we handle renewals with your prescriber (no web medical advice, ever).'
   Layout: Two-column field rows desktop; 1-column mobile with 96px bottom padding clear of the sticky bar.
   Motion: Success pops 1.05×; list rows slide in 160ms.
3. **Transfer your prescriptions** — White band. Eyebrow 'SWITCH TO US' (green); title 'Four steps, and we do the calling.' Four step cards in a row with green numerals: 01 'Bring or call in your bottles' — 'Names and your current pharmacy are enough.'; 02 'We call them' — 'Usually done the same business day.'; 03 'Stock & insurance checked' — 'If something needs ordering, you hear it from a person.'; 04 'First fill, then texts' — 'Med sync can land everything on one day.' The transfer form (green-tint panel): name (required), phone (required), current pharmacy name (required), 'How many prescriptions?' chips (1 / 2–3 / 4–5 / 5+); tangerine pill 'Start my transfer'; success 'Transfer started (demo) — [FOUNDER]'s team calls to confirm details.'
   Layout: Steps 4-across (2×2 under 900px); form max-width 640px below.
   Motion: Steps rise 14px staggered 70ms; form success pops.
4. **Vaccines and health services** — Green-tint band. Eyebrow 'CLINIC SERVICES' (green); title 'Slots, not waiting rooms.' Five service rows (white cards, hairline): 'Flu shot' — 'walk-in or slot · most insurance covers it, we verify before you sit'; 'Shingles' — 'slot · two-dose schedules managed for you'; 'Pneumonia' — 'slot'; 'Travel health consult' — 'slot · destination-specific, bring the itinerary'; 'Blood pressure check' — 'walk-in only · free, always'. Booking form beneath: service select, slot chips (Morning 9–12 / Midday / Late afternoon), name, phone; green pill 'Book it'; success 'Booked (demo) — we text a confirmation.' Disclaimer 13px steel under the form: 'We book services; the pharmacist answers every health question in person or by phone. This site gives no medical advice.'
   Layout: Rows max-width 720px; booking form beside or below (stacked on mobile).
   Motion: Rows fade in 60ms apart; slots pop 1.05× when selected.
5. **Delivery checker** — White band. Eyebrow 'DELIVERY' (green); title 'Does the van reach you?' Left (5 columns): the drawn SVG map — invented street grid, the pharmacy as a green pin, the delivery zone as a green blob covering the in-zone area, the van photo as a small card overlapping the map's corner. Right (7 columns): ZIP input (5 digits) + green pill 'Check'; in-zone result (green-tint panel): 'Yes — same-day windows before 4 p.m., seven days a week.'; out-of-zone (tangerine-tint): 'Not yet on the van routes — pickup is always ready, and we'll hold it at the counter.'; a steel line: 'Sample zone for this demo — call to double-check edges.'
   Layout: 5/7 columns; mobile stacks map then checker; input + button on one row.
   Motion: Zone blob outline draws 400ms on entry; result panels pop 1.05×.
6. **Extra services** — Green-tint band. Eyebrow 'ALSO AT THE COUNTER' (green); title 'The things chains forgot.' Four cards: 'Med sync' — 'All your prescriptions land on one pickup day each month.'; 'Blister packs' — 'Sorted by time of day — a game changer for parents and caregivers.'; 'Pet prescriptions' — 'Same pharmacist, smaller patients; we stock the vet favorites generically.'; 'Canes, braces & supplies' — 'Fitted at the counter, billed where insurance allows.' Each with an icon (Package, ClipboardList, Heart, Stethoscope).
   Layout: Four cards 2×2 (1-column under 700px).
   Motion: Cards rise 14px staggered 60ms.
7. **Hours and the pharmacist line** — White band with the shelves photo as a wide 14px banner. Eyebrow 'HOURS' (green); title 'Open when the neighborhood needs us.' Hours table (two columns): Mon–Fri 8a–8p · Sat 9a–6p · Sun 9a–5p; a line under: 'The pharmacist answers the phone until close — [PHONE] (tel:). After hours, the message line routes emergencies to the on-call partner store.'
   Layout: Banner 21:9; hours table max-width 560px; centered.
   Motion: Banner fades in; table rows stagger 50ms.
8. **FAQ** — Green-tint band. Eyebrow 'QUICK ANSWERS' (green); title 'What people ask at the counter.' Six accordion rows: 'Do you take my insurance?' — 'Most regional plans, and we verify before filling so nothing surprises you — bring the card once.'; 'Generic or brand?' — 'Generic by default where your prescriber allows; we flag any meaningful difference to you, not the other way around.'; 'Can you blister-pack my mom's twelve medications?' — 'Yes — sorted by time of day, delivered if you like, reviewed with you every refill.'; 'Pets, really?' — 'Really. Vets send them here; we compound where the dose needs it.'; 'Delivery?' — 'Eight ZIPs same-day before 4 p.m.; the checker above knows.'; 'Do I need an appointment for a flu shot?' — 'Walk in. Slots exist for the planners.'
   Layout: Accordion max-width 720px; one row open at a time; 44px tap targets.
   Motion: Rows expand 200ms; chevrons rotate.
9. **Footer** — Green-deep band. Column 1: pill logomark + [BRAND] Rubik 700 white; 13px #BEE3D3 lines '48 Linden Row, [CITY]', '[PHONE] (tel:)', 'Mon–Fri 8a–8p · Sat 9a–6p · Sun 9a–5p'. Column 2 'Store': anchors Refills, Transfers, Vaccines, Delivery. Column 3 'Small print': 'Sample site for a template — services, hours and reviews invented', 'No medical advice on this site; ask the pharmacist', optional [CREDIT] link in tangerine. Mobile sticky bar (under 768px): fixed bottom green-deep 96% + blur; tangerine pill 'Call' (tel:) and white-outline pill 'Refill' (anchor), safe-area padding.
   Layout: Footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Counter. Download https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/hero-counter.webp to public/images/hero-counter.webp. Alt: 'A bright modern pharmacy counter with green accents.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Shelves. Download https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/shelves.webp to public/images/shelves.webp. Alt: 'Clean white pharmacy shelves with plain-label bottles.' The hours banner. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Pharmacist portrait one. Download https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/pharmacist-1.webp to public/images/pharmacist-1.webp. Alt: 'Portrait of a fictional pharmacist in a white coat at the counter.' Used beside the transfer or refill band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Pharmacist portrait two. Download https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/pharmacist-2.webp to public/images/pharmacist-2.webp. Alt: 'Portrait of a fictional pharmacy technician in a white coat.' Used beside the clinic services band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Delivery van. Download https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/delivery-van.webp to public/images/delivery-van.webp. Alt: 'A small green pharmacy delivery van at the curb.' Overlapping the delivery map. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup. No other icon source.
- font: Rubik (OFL) self-hosted through @fontsource/rubik; no CDN font loading.

## Don'ts
- No medical advice, drug claims, dosing or interaction guidance anywhere on the page — every health question routes to 'ask the pharmacist'; the disclaimer states the site gives no medical advice.
- No real or invented drug names (brand or generic) in copy, placeholders or photos; Rx numbers are sample patterns and bottles are plain-label.
- No real pharmacy chains, brands, insurers, discount programs or vaccine makers named; everything is generic and invented.
- Photos show counters, shelves, van and portraits only — no readable product labels, packaging text or brand marks; portraits are fictional, varied people.
- The delivery zone is a sample on invented streets — no real map tiles, no real ZIP-to-service claims; the page says the zone is a sample.
- Refill, transfer and booking flows are local demos that say so — never implying transmission to a pharmacy system, prescriber or insurer.
- No dates tied to the real clock: time windows are relative, no calendar dates, no copyright year.
- Forms are local-only samples: no submit to any server, no APIs, no analytics. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource package only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the five generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, pops, slides and the zone draw, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the refill form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/independent-pharmacy-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
