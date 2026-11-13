# Self Storage Facility Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the self-storage facility run by manager [FOUNDER] in [CITY], open [EXPERIENCE]. The page leads with a drawn-to-scale size guide (choose what you're storing, see the unit drawn with box outlines and the recommended size), then a filterable unit grid, a three-step reservation flow with relative move-in timing and no payment, concrete security and access facts, a supplies-shop teaser, a drawn location map and reviews. Bold royal blue and sunflower on white; bright photos of corridors and roll-up doors with no readable signage. All units, prices and reviews are invented sample data.

- Audience: Primary: renters, movers and small-business owners around [CITY] comparing storage — people unsure what size they need and wary of paying before they see the unit. Secondary: RV/boat storage and mailbox businesses adapting the unit table.
- Goal: Move a visitor from 'what size do I even need' to a held reservation: answer the size question visually in one screen, show real-feeling monthly prices and availability, then let them hold a unit without payment.
- Tone: Cheerful front-counter English — plain, helpful, mildly funny about the chaos of moving. Numbers visible, no fine-print tricks.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/sora (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display and fontFamily.body both 'Sora'.
  - Self-host Sora weights 400, 600, 700, 800 through @fontsource/sora, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals, the size-guide draw-in and the reservation stepper; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, size-guide presets (label, unit size, items with footprints in feet, fit verdict), unit types (id, size, dims, sqft, monthly price, climate, driveUp, note, sample availability), security items, supplies items, directions text, reviews, reservation copy. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Size guide, exactly: one SVG scale of 22 px per foot for every preset; the unit outline drawn as a blue rectangle with dimension labels (e.g. 10×20); items inside as rounded sunflower-tinted rectangles with 12px labels — Studio 5×10: queen mattress 5×7, 6 boxes 2×2, bike 6×2 (fit: 'snug but honest'); 1-bed 10×10: mattress 5×7, sofa 7×3, dining set 6×4, 10 boxes (fit: 'room to spare'); 2-bed home 10×20: everything above plus washer/dryer 3×3 each, 20 boxes, dresser 4×2 (fit: 'the garage, relocated'); Garage/stock 10×30: two pallets 4×4, shelving run 10×1.5, workbench 6×2, 30 boxes (fit: 'a small warehouse'). Items draw in staggered 120ms after the outline; the recommended size badge (sunflower chip) and fit verdict appear last, with a 'See 10×20 units →' link that filters the grid to that size.
  - Unit grid, exactly nine units: 5×5 $39 indoor; 5×10 $62 indoor; 5×10 $78 climate; 10×10 $98 indoor; 10×10 $124 climate; 10×15 $139 drive-up; 10×20 $176 drive-up; 10×20 $215 climate; 10×30 $248 drive-up. Filters: size chips (Small ≤5×10 / Medium 10×10–10×15 / Large 10×20 / XL 10×30), climate toggle, drive-up toggle, max-price slider $30–$260; live result count ('7 of 9 units'); sort by price low→high or high→low; any active filter shows a 'Clear filters' chip; zero-result state shows the clear chip, never an empty page. Each card: dims in Sora 700, sqft, monthly price big, Climate / Drive-up tags, availability chip ('3 open' / 'Waitlist'), sunflower 'Reserve' button.
  - Reservation flow, exactly: step 1 shows the chosen unit (or 'first available 10×10' if entered from the nav) with a monthly total; step 2 move-in timing chips — 'As soon as possible' / 'In 2–4 weeks' / 'Next month' / 'Just pricing for now' (the last one switches the CTA to 'Ask a question' behavior but stays local); step 3 name, phone, email with inline validation, then success: a code like 'RSV-8241' in Sora 800, 'Held for 48 hours — the manager calls to confirm. No payment is taken in this demo; this reservation lives in this browser only.' Persist the reservation to localStorage under [BRAND_SLUG]-reservation.
  - Draw the location as an inline SVG map: facility block in royal blue with roll-up door ticks, the access road, two invented landmarks labeled ('Route 9 interchange', 'the grain elevator'), and a dashed approach path; driving copy beside it: 'From the Route 9 interchange, two lights past the grain elevator, turn into the blue row — the office is the second door.' A 15-foot-truck note: 'Drive-up lanes fit a 15-foot box truck with room to drop ramp.'
  - Use only these lucide-react icons: Phone, Box, Boxes, Warehouse, Thermometer, Truck, Camera, Lightbulb, Clock, ShieldCheck, KeyRound, MapPin, ChevronRight, ChevronLeft, ArrowRight, Menu, X, CheckCircle2, Star, Lock, CalendarCheck, Search.
  - Persist the size-guide choice and the reservation to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the royal-blue square with a sunflower roll-up-door mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Facility name (default: "Storewell Self Storage"). Invented facility name; a roll-up-door logomark is derived from it in code.
- [CITY] — City (default: "Lakemont"). Where the facility is; appears in hero, map labels, directions and footer.
- [FOUNDER] — Manager (default: "Rosa Whitcomb"). Invented site manager, named in hero and reservation copy.
- [PHONE] — Phone (default: "(555) 388-2040"). Office line; links as tel: with digits only.
- [EXPERIENCE] — Years open (default: "9 years"). Plain phrase like '9 years'; used in hero and reviews copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/self-storage-facility-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Royal blue `#2445FF` — Brand: header, links, unit outlines, map fills
- Blue deep `#1A35CC` — Footer ground and dark panels
- Sunflower `#FFC83D` — CTAs, badges, highlights, item rectangles in the size guide
- Sunflower tint `#FFF3D4` — Chips, notes, selected states
- Cloud `#F5F7FB` — Light section ground
- White `#FFFFFF` — Cards and panels
- Ink `#161B2C` — Headings and body on light
- Steel `#5A6377` — Secondary text
- Hairline `#E2E6EF` — Hairline rules and card borders

### Typography
- Display and body: everything: Sora (OFL), weights 400/600/700/800

### Layout & motion
- Spacing: Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced royal-blue eyebrow over a Sora 800 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Friendly warehouse: 14px cards, 10px chips and inputs, pill CTAs; photos 14px.
- Motion: Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Motion: The size guide's items draw in staggered 120ms after the outline, the badge and verdict last; grid cards stagger 40ms.
- Motion: The reservation stepper slides between steps 220ms; the held-code pops 1.1× on success.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Bright, clean facility photography from one shoot: a well-lit indoor corridor of roll-up doors, a small unit with neatly stacked boxes, an open drive-up unit with furniture, a supplies stack, the entrance at dusk, and facility rows from outside — no people, no readable unit numbers or signage, no vehicles with plates.

## Pages & Sections
### [BRAND] — Self storage in [CITY] (`index.html`)
1. **Header and hero** — Header (white at 94% with backdrop blur, 72px): roll-up-door logomark (royal-blue square with a sunflower door line) + [BRAND] in Sora 800 18px; nav anchors Size guide, Units, Reserve, Security, Visit; right: phone chip Phone icon + [PHONE] (tel:) and sunflower pill 'Reserve a unit'. At 390px: logomark + name, phone icon button, menu button on one line; anchors in a white dropdown. Hero: cloud ground; left copy (columns 1–6): eyebrow royal blue 'SELF STORAGE — [CITY], OFF ROUTE 9'; H1 Sora 800 ink 'The garage called. It wants the house back.'; paragraph steel 16px '[FOUNDER] runs 340 units, sweeps the corridors daily, and answers the phone before the third ring — [EXPERIENCE] of keeping [CITY]'s extras dry, lit and behind a coded gate.'; sunflower pill 'Find my size' (anchor to size guide) and blue-outline pill 'See units & prices' (anchor); chips: 'No payment to reserve' · 'Gate 6a–10p daily' · 'Month-to-month'. Right (columns 7–12): the corridor photo in a 14px frame 4:3 with a floating white card overlapping bottom-left: Boxes icon, '340 units · 9 sizes', 'From $39/mo' in Sora 800 royal blue, 12px steel 'Sample availability shown.'
   Layout: 12-column grid; floating card offset -18px; mobile stacks copy then photo.
   Motion: Photo settles from 1.03; copy rises 14px staggered 70ms; the price counts up once.
2. **Size guide** — White band, the signature section. Eyebrow 'WHAT SIZE DO I NEED?' (royal blue); title 'Drawn to scale, not to guesswork.' Four preset chips (Studio apartment / 1-bedroom / 2-bedroom home / Garage & business stock); the SVG panel (cloud ground, 14px radius) shows the chosen unit drawn to one scale — royal-blue outline with dimension labels, sunflower-tinted item rectangles with labels (queen mattress, sofa, washer, boxes…), animated in staggered 120ms; a sunflower badge 'Recommended: 10×20' and the fit verdict in Sora 700 ink ('The garage, relocated.') appear last, then a blue link 'See 10×20 units →' that filters and scrolls to the grid. A 13px steel note: 'One scale for every preset — 22 pixels to the foot, so compare honestly.'
   Layout: Chips above the panel, full-width; panel max-width 900px centered, min-height 380px; on mobile the SVG scales down with labels at minimum 11px.
   Motion: Outline draws 400ms, items stagger 120ms, badge and verdict rise 12px last; preset switches replay the sequence.
3. **Unit grid** — Cloud band. Eyebrow 'UNITS & PRICES' (royal blue); title 'Nine sizes, every number visible.' Filter rail (white panel): size chips (Small / Medium / Large / XL), 'Climate control' and 'Drive-up access' toggles, max monthly price slider $30–$260, sort select (Price low→high default, high→low); live count '9 of 9 units'; 'Clear filters' chip appears when active. Nine unit cards (white, 14px radius, hairline): dims in Sora 800 18px ('10×20'), sqft + note ('Drive-up — back right in') in 13px steel, monthly price in Sora 800 royal blue '$176 /mo', tags 'Climate' (blue chip) and 'Drive-up' (sunflower chip), availability chip ('3 open' green-ish blue text / 'Waitlist' steel), sunflower 'Reserve' button prefilling the flow with that unit.
   Layout: 3-column grid (2 under 1024px, 1 under 640px); filter rail is a left column on desktop (260px) and a collapsible 'Filters' drawer on mobile; zero-result state shows the clear chip.
   Motion: Cards stagger 40ms on filter change with a 180ms crossfade; Reserve buttons pop 1.05× on press.
4. **Reservation flow** — White band. Eyebrow 'RESERVE — NO PAYMENT' (royal blue); title 'Hold a unit in three steps.' A stepper (white panel, max-width 760px): step dots 1–2–3 with labels (Unit / Timing / Details). Step 1 — the chosen unit summary card (dims, tags, '$176 /mo') with a change-select back to the grid; total line 'First month: $176 (sample)'. Step 2 — move-in timing chips: 'As soon as possible' / 'In 2–4 weeks' / 'Next month' / 'Just pricing for now' with a one-line note under each ('units held 48 hours', 'we'll watch inventory', 'ask us about waitlists', 'no unit held — we'll answer questions'). Step 3 — Name (required), Phone (required), Email (required), inline validation (2px royal-blue borders, 13px notes, no native popups), blue pill 'Hold my unit'. Success replaces the panel: CheckCircle2 royal blue, code 'RSV-8241' in Sora 800 24px, 'Held for 48 hours — [FOUNDER] calls to confirm and takes no payment over the phone either. This demo stores the reservation in this browser only.' and an outline pill 'Reserve another'. Persists to localStorage.
   Layout: Stepper slides between steps 220ms; steps keep min-height to avoid jumps; mobile 1-column with 96px bottom padding clear of the sticky bar.
   Motion: Step slide 220ms; held-code pops 1.1×; success crossfades with a 12px rise.
5. **Security and access** — Cloud band. Eyebrow 'SECURITY & ACCESS' (royal blue); title 'Locked, lit, and swept daily.' Six fact cards (white, icon in sunflower-tint circle): 'Coded gate 6a–10p' — 'Your code, your log — every entry recorded.' (KeyRound); 'Cameras on every corner' — 'Fourteen of them, kept 30 days.' (Camera); 'Alarmed units' — 'Indoor units individually alarmed; drive-up rows on sensors.' (ShieldCheck); 'Lit like a parking lot' — 'LEDs on motion after hours.' (Lightbulb); 'Manager on site' — '[FOUNDER]'s office is the second door, weekdays 9a–6p, Saturdays 9a–2p.' (Clock); 'Disc locks at the office' — 'The one lock bolt cutters hate; $18, cut-resist tested.' (Lock).
   Layout: 3×2 card grid (2-column under 900px, 1-column under 640px).
   Motion: Cards rise 14px staggered 60ms.
6. **Supplies shop** — White band with the supplies photo left (4:3, 14px frame) and items right: title 'Boxes on the way in, too.' Four item rows (hairline dividers): 'Small box 16×12×12 — $2.50'; 'Medium box 18×18×16 — $3.75'; 'Wardrobe box with bar — $12'; 'Queen mattress bag — $9'. A sunflower-tint note card: 'Reserved a unit? Show the code at the office — 10% off supplies on move-in day.' 13px steel footer: 'Prices are sample data for this demo.'
   Layout: Photo 5 columns, items 7; mobile stacks photo first.
   Motion: Items fade in staggered 70ms; note card rises last.
7. **Visit and directions** — Cloud band. Eyebrow 'FIND US' (royal blue); title 'Two lights past the grain elevator.' Left (7 columns): the inline SVG map — facility block in royal blue with sunflower roll-up door ticks along two rows, the access road in steel, labeled landmarks 'Route 9 interchange' and 'Grain elevator', a dashed blue approach path with an arrow. Right (5 columns): address '2100 Row Nine Road, [CITY]' (MapPin); directions paragraph 'From the Route 9 interchange, two lights past the grain elevator, turn into the blue row — the office is the second door.'; truck note with Truck icon: 'Drive-up lanes fit a 15-foot box truck with room to drop the ramp.'; office hours 'Weekdays 9a–6p · Sat 9a–2p · gate daily 6a–10p'; phone [PHONE] (tel:).
   Layout: Map 4:3; mobile map then info; map labels never overlap the road lines.
   Motion: The approach path draws in 600ms on entry; door ticks stagger 40ms.
8. **Reviews** — White band. Eyebrow 'FROM THE ROW'; title 'Neighbors with full garages.' Three quote cards (cloud ground, blue quote mark): five royal-blue stars; 16px ink quote; 13px steel footer. 'The size guide told me 10×20; I fit with room to walk. The guide is smarter than my tape measure.' — Priya & Sam, move across town. 'Gate code worked at 5:58 a.m. on moving day. That's when you learn if a facility is real.' — Theo W., drive-up row. 'My business stock sat for two years, dry and dust-swept. Rosa even accepted a delivery for me once.' — Dana K., 10×30 unit. Disclaimer 12px steel: 'Sample reviews for this template demo.'
   Layout: Three cards in a row (1-column under 900px); middle lifts 12px on desktop.
   Motion: Cards rise 14px staggered 80ms.
9. **Footer** — Blue-deep band. Column 1: door logomark + [BRAND] in Sora 800 white; 13px #B9C6F2 lines '2100 Row Nine Road, [CITY]', 'Office [PHONE] (tel:)', 'Gate daily 6a–10p'. Column 2 'Facility': anchors Size guide, Units, Security, Visit. Column 3 'Small print': 'Sample site for a template — units, prices and reviews invented', 'No payment is collected anywhere in this demo', and the optional [CREDIT] link in sunflower. Mobile sticky bar (under 768px): fixed bottom blue-deep 96% + blur; sunflower pill 'Call' (tel:) and white-outline pill 'Reserve' (anchor), safe-area padding.
   Layout: Footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Corridor. Download https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/hero-corridor.webp to public/images/hero-corridor.webp. Alt: 'A bright, clean storage corridor with roll-up doors.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Small unit interior. Download https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/unit-small.webp to public/images/unit-small.webp to be saved as public/images/unit-small.webp. Alt: 'A small storage unit with neatly stacked moving boxes.' Supporting image near the size guide. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Drive-up unit. Download https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/unit-driveup.webp to public/images/unit-driveup.webp. Alt: 'An open drive-up storage unit with furniture inside.' Supporting image near the unit grid. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Supplies. Download https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/supplies.webp to public/images/supplies.webp. Alt: 'A neat stack of new moving boxes and packing supplies.' The supplies-shop image. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Entrance. Download https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/gate.webp to public/images/gate.webp. Alt: 'The storage facility entrance at dusk with a lit access lane.' Supporting image in the security band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Facility rows. Download https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/facility-rows.webp to public/images/facility-rows.webp. Alt: 'Rows of drive-up storage units with blue doors in daylight.' Supporting image near visit/directions. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup. No other icon source.
- font: Sora (OFL) self-hosted through @fontsource/sora; no CDN font loading.

## Don'ts
- No real storage brands, franchises or their logos and slogans; [BRAND], prices, availability and reviews are invented sample data.
- No real truck-rental brands or vehicles; the truck note stays generic, and photos show no vehicles with readable plates.
- No real lock, camera or security-hardware brands; equipment is described generically.
- Photos show corridors, units and supplies only — no people, no faces, no readable unit numbers, signage or brand marks.
- Prices are per-month sample rates; the reservation flow takes no payment anywhere and says so, and the held code is a demo artifact stored locally.
- No dates tied to the real clock: no calendar widgets, no specific month names, no copyright year; timing options stay relative ('in 2–4 weeks', 'held 48 hours').
- Forms are local-only samples: no submit to any server, no APIs, no analytics. Persist to localStorage only and validate restored data.
- The size guide uses one SVG scale across presets — never redrawn sizes that mislead; fit verdicts stay plain-language and honest.
- Filters must never leave an empty grid without the 'Clear filters' affordance.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource package only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, draw-ins, staggered cards, stepper slides and pops, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the reservation's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/self-storage-facility-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
