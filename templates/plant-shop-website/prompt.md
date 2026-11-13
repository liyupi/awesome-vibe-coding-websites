# Plant Shop Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A warm one-page shop for [BRAND], a plant shop in [CITY] with six houseplants on the shelf. Sunlit botanical photography, a filterable plant grid (light, care, pet-safe), a find-your-plant quiz, and a query-routed product page with a care card, pot pairing and a local wishlist. A quiet hand-delivery note within [DELIVERY_RADIUS] closes the page.

- Audience: Apartment gardeners and first-time plant parents in [CITY] — especially cat and dog owners who need to know what is safe to bring home.
- Goal: Match a visitor to a plant that will survive their window and their pets, then move them to the product page and the local wishlist.
- Tone: Friendly neighborhood expert: warm, specific, a little green-thumbed humor. Never botanical Latin for its own sake, never preachy.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react + react-dom 18 (MIT), motion (motion.dev) 11 (MIT), lucide-react (ISC), @fontsource/baloo-2, @fontsource/nunito (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Two HTML pages at the project root: index.html (entry src/main.tsx) and plant.html (entry src/plant.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions.input { main: 'index.html', plant: 'plant.html' } }. Never copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './plant.html', './src/**/*.{ts,tsx}']. theme.extend.colors maps cream, white, leaf, leafDeep, clay, claySoft, bark, ink, rule.
  - src/fonts.ts imports @fontsource/baloo-2/600.css, 700.css and @fontsource/nunito/400.css, 600.css, 700.css. Import fonts.ts from both entries.
  - Global CSS in src/index.css: body background cream; selection leaf on cream; focus-visible outline 2px clay; rounded everything per Design.
  - src/content.ts holds every string: plants array (slug, name, latin? optional common only, light bright, medium, low; care easy, moderate; petSafe boolean; price; image; alt; care card lines; pot pairings; whyLine for the quiz), quizSteps, careGuides, deliveryNote, address, hours. Rewrite this file when the variables change.
  - src/lib/brand.ts: brandSlug from [BRAND]; localStorage key `${brandSlug}:wishlist` storing an array of plant slugs.
  - src/plant.tsx reads new URLSearchParams(location.search).get('id'); unknown or missing id renders the first plant (monstera) — never an empty or not-found state.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView, fade + 16px rise, 450ms, 70ms stagger), PlantCard.tsx, FilterBar.tsx, Quiz.tsx, CareGuides.tsx, DeliveryNote.tsx, Footer.tsx; on plant.html CareCard.tsx, PotPairing.tsx, WishlistButton.tsx.
  - public/favicon.svg: a 64px code-drawn single terracotta pot with two leaf shapes in leaf green. Download the six photos from Assets into public/images/ before building; write ASSETS.md at the project root.
  - dist/ holds index.html, plant.html, hashed JS/CSS, the woff2 fonts, favicon.svg and six webp images. Keep it under 20 MB.

## Variables
- [BRAND] — Shop name (default: "Fern & Forth"). Invented plant shop name. Wordmark, titles, brandSlug (localStorage keys) and every mention. Never a real garden chain or delivery brand.
- [CITY] — City (default: "Savannah, Georgia"). Where the shop is. Appears in the hero eyebrow, the delivery note and the footer address. Real cities are fine.
- [DELIVERY_RADIUS] — Delivery radius (default: "15 miles"). How far the shop hand-delivers. Used in the hero sub-line and the delivery note at the bottom.
- [SIGNER] — Shop note signer (default: "Maya Okonkwo"). The invented owner who signs the delivery note — 'founder & waterer-in-chief'. Adds a human voice without a photo.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/plant-shop-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Cream `#FBF4E4` — Page ground everywhere — warm cream, sun-washed.
- White `#FFFFFF` — Cards, the quiz panel, care cards — clean but warm against the cream.
- Leaf `#2F5D3E` — Primary green: headings, buttons, links, the filled heart on wishlist.
- Leaf Deep `#234931` — Green hover and pressed state.
- Clay `#C4704B` — Terracotta accent: prices, the pet-safe paw badge, quiz progress, focus ring, tag chips.
- Clay Soft `#F2E0D2` — Chip and badge fills, the delivery-note band, selected filter states.
- Bark `#6D5F4E` — Secondary text: eyebrows, captions, care-guide body.
- Ink `#2C2A24` — Primary text on light grounds.
- Rule `#E8DEC9` — 1px hairlines: card borders, footer divider, filter underline.

### Typography
- Display — wordmark, H1, H2, plant names, quiz question. Baloo 2, rounded chunky, sentence case, line-height 1.15: Baloo 2 (OFL), weights 600/700
- Text — body, care lines, buttons (600 for labels), captions: Nunito (OFL), weights 400/600/700

### Layout & motion
- Spacing: Friendly and airy: 104px desktop section rhythm (64px mobile), 1200px container, 28px side padding. Grid gap 24px; product page 6/6 split with a 48px gutter.
- Radius: Rounded like the shop: 20px on cards and the quiz panel, 999px on chips, buttons and badges, 16px on images.
- Motion: Gentle, never fast: reveals fade and rise 16px over 450ms with 70ms stagger; mobile shortens to 350ms.
- Motion: Filtering re-flows the grid with Motion layout animations at 320ms so plants glide, not jump.
- Motion: Quiz steps crossfade with a small 12px slide at 320ms; the result card rises 16px with a soft spring (stiffness 200, damping 22).
- Motion: Wishlist heart pops once (scale 1 to 1.2 to 1, 300ms) when saved; pot-pairing selection bounces the price at the same spring.
- Motion: prefers-reduced-motion: every animation becomes an instant state change.
- Imagery: One sunny shoot: every photograph is a live plant in an unglazed terracotta (or pale wood) pot in bright soft window light, cream walls, gentle leaf shadows, pale wood floors and shelves. 50mm eye-level, warm and airy. No people, no readable plant tags, no logos.

## Pages & Sections
### [BRAND] — plants, finder quiz, care and delivery (`index.html`)
1. **Header** — Sticky header on Cream, 1px Rule hairline after 12px of scroll. Left: wordmark [BRAND] in Baloo 2 700 22px, Leaf, with a small terracotta pot glyph (code-drawn SVG, 20px) before the name. Center nav (desktop): Plants, Find a plant, Care — Nunito 600 14px, Bark to Leaf on 150ms, scrolling to anchors. Right: 'My plant list' text link with a Heart icon and the live count from localStorage. Mobile: wordmark plus burger (two 2px Leaf lines) opening a full-screen Cream overlay with anchors in Baloo 2 26px.
   Layout: Single row, 1200px container, 16px vertical padding.
   Motion: Hairline fades in on scroll; overlay fades and rises 12px in 220ms; wishlist count pops on change.
2. **Hero** — Split hero: right 7 columns hold hero-monstera.webp edge-to-edge to the viewport's right edge (rounded 24px on its left corners), the monstera lit by morning window light. Left 5 columns, copy vertically centered: eyebrow '[BRAND] — PLANT SHOP IN [CITY]' in Nunito 700 12px uppercase 0.22em Clay. H1 in Baloo 2 700 clamp(40px, 5.5vw, 64px), Ink: 'Plants that like your window.' Sub in Nunito 400 17px Bark, max 44ch: 'Six easy houseplants matched to your light, your schedule and your pets. Hand-delivered within [DELIVERY_RADIUS] of the shop.' CTAs stacked: 'Shop plants' (Leaf fill, Cream text, 999px) and 'Find my plant — 1 min' (ghost, 1.5px Leaf border). Below, a quiet trust line in Bark 13px with a PawPrint icon: 'Every plant page tells you if it is pet-safe.'
   Layout: 5/7 split; image bleeds right on desktop. Mobile: image on top at 4:3, copy below with 24px padding.
   Motion: Copy staggers in at 450ms each, 70ms apart; the photo scales from 1.03 to 1.0 over 700ms once.
3. **Find-your-plant quiz** — A white panel (rounded 24px, id='find') under the eyebrow 'FIND MY PLANT' and H2 'One minute to the right plant.' Left rail copy in Bark: 'Three questions — answer for the window, not for ambition.' Three steps, one at a time. Step 1 'How is the light?' — three cards with lucide icons: Sun 'Bright — right by a window', CloudSun 'Medium — a bright room, off the glass', Moon 'Low — north-facing or shady'. Step 2 'Do pets share the room?' — 'Yes — they chew things' with PawPrint, 'No — plants are my only leaf-eaters'. Step 3 'How is your memory?' — 'Water me weekly' with Droplets, 'Remind me... eventually' with BellOff. Deterministic scoring: start with the six plants, drop any that fail pets=yes on petSafe, then fail light, then fail attention (calathea and fig need 'weekly'); rank the rest by price ascending and pick the first; ties break alphabetically by slug. Result card: the plant's photo at 4:3, 'Your plant: [name]' in Baloo 2 24px, the why-line from content.ts (e.g. 'Forgiving, pet-safe and happy in medium light — the parlor palm has survived worse than us.'), price in Clay, and two links: 'View the [name]' opening ./plant.html?id=parlor-palm, and 'Start over'.
   Layout: 5/7 split inside the panel, 32px padding, option cards in a 3-column grid rounded 16px.
   Motion: Steps crossfade with a 12px slide at 320ms; a 3-segment Clay progress bar fills; the result rises 16px on a soft spring.
4. **Plant grid** — id='plants'. Eyebrow 'ON THE SHELF' and H2 'Six plants, no guesswork.' Filter bar under it, three groups of 999px chips (Clay Soft fill, Bark text; active chip: Leaf fill, Cream text): Light (Any, Bright, Medium, Low), Care (Any, Easy, Moderate), and one Pet-safe toggle chip with PawPrint ('Pet-safe only'). The six plants, exact data: Monstera — bright, easy, not pet-safe, $42; Fiddle-Leaf Fig — bright, moderate, not pet-safe, $56; Snake Plant — low, easy, not pet-safe, $34; Calathea Orbifolia — medium, moderate, pet-safe, $38; Parlor Palm — medium, easy, pet-safe, $28; Watermelon Peperomia — bright, easy, pet-safe, $24. Each card: photo 4:3 rounded 16px, name in Baloo 2 18px, light chip and care chip (12px), a clay PawPrint badge when pet-safe, price in Nunito 700 Clay, and 'View' linking to ./plant.html?id=… with each plant's slug. Filtering hides non-matching cards and shows 'Showing 2 of 6 plants'; 'Clear' appears once a filter is active. One quiet line under the grid in Bark 14px: 'More on the bench this week — spider plant and pothos, in store only.'
   Layout: 3-column grid (2 tablet, 1 mobile), 24px gap, cards on White rounded 20px with 18px padding and a 1px Rule border.
   Motion: Plants glide with Motion layout animation at 320ms when filters change; cards reveal on scroll at 450ms with 70ms stagger.
5. **Care guides** — Three care cards on Cream in a row, each with a lucide icon in Leaf inside a Clay Soft circle: Sprout — 'Water less in winter' — 'Growth slows, so does thirst. Check the top inch of soil before every pour.'; Droplets — 'Repot when roots circle' — 'If roots peek from the drainage hole in spring, go one pot size up — no jumps.'; Wind — 'Dust the leaves monthly' — 'A damp cloth on the leaves is half the fertilizer your plant will ever need.' Titles in Baloo 2 17px, bodies in Nunito 14px Bark, and a caption line under the row: 'General guidance from our bench, not botanical law.'
   Layout: 3-column grid, 24px gap, cards on White rounded 20px, 24px padding; stacks on mobile.
   Motion: Cards reveal on scroll at 450ms, 70ms stagger.
6. **Delivery note** — A quiet full-width band in Clay Soft, rounded 24px, with a Bike icon in Leaf. One line in Nunito 15px Ink, max 62ch: 'We hand-deliver within [DELIVERY_RADIUS] of the shop, Tuesday to Saturday, free over $60 — every plant rides seat-belted in the passenger seat and leaves with its own care card.' Signed in Baloo 2 16px Leaf: '— [SIGNER], [BRAND]'. Beneath, one small honest line in Bark 12px: 'This is a template demo — nothing is ordered or delivered.'
   Layout: Centered single column, 720px max width, 40px padding.
   Motion: Reveals once on scroll at 450ms.
7. **Footer** — 1px Rule hairline, then three columns on Cream: wordmark with pot glyph; '18 Mossing Lane, [CITY]' with MapPin, 'Tue–Sat 9:00–18:00, Sun 10:00–16:00' with Clock, '(912) 555-0164' with Phone; nav anchors repeated small. Bottom line in Bark 12px: 'Every plant, price and promise on this page is an invented example.' plus the optional [CREDIT] link.
   Layout: Three columns, stacked on mobile with 32px gaps.
   Motion: None — the footer is still.

### [BRAND] — a plant, its care card and pot pairings (`plant.html`)
1. **Product** — Reads ?id=; unknown or missing id renders the monstera. 6/6 split: left, the plant's photo at 4:3 rounded 24px on White with a 1px Rule border; beneath it a caption in Bark 13px: 'Photographed on the shop bench — your plant will have its own opinions.' Right column: light and care eyebrow in Clay uppercase, plant name in Baloo 2 700 36px Ink, price in Nunito 700 20px Clay, then the care card — a White rounded 20px panel with three rows, each a lucide icon in Leaf plus label and value from content.ts: Sun 'Light — Bright indirect, near an east window'; Droplets 'Water — Every 7–10 days, top inch dry first'; Droplet 'Humidity — Average home humidity is fine'. Pet-safe status as a badge: clay PawPrint with 'Pet-safe — chewable but not chosen' when true, or Bark 'Keep away from chewers — not pet-safe' when false. Then 'Pair it with a pot' — two pot options as selectable rows (Leaf border when active): 'Terracotta, 6 in — +$14', 'Glazed sage, 6 in — +$18'; the running total shows on the button: 'Add to my plant list — $56'. Pressing it adds the slug to `${brandSlug}:wishlist` and shows an inline note with a Check: 'Saved on this device — a demo list, nothing ordered.'
   Layout: 6/6 split, 48px gutter; stacks on mobile with the photo first.
   Motion: Pot selection bounces the price on a soft spring (stiffness 200, damping 22); the heart in the header pops; the note slides up 12px in 240ms.
2. **Related plants** — Eyebrow 'ALSO HAPPY IN MOST HOMES' and three related plants (the next three slugs after the current one, wrapping) as compact cards: photo 4:3, name, price, 'View' link to ./plant.html?id=….
   Layout: 3-column grid, 24px gap, same card style as the main grid.
   Motion: Reveals on scroll at 450ms with 70ms stagger.

## Assets
- image: Six sunlit plant photographs made for this template, redistributable with it. Download each into public/images/ with curl -L -o before building. https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/hero-monstera.webp -> public/images/hero-monstera.webp (hero and the monstera's card/product photo; alt 'A large monstera in a terracotta pot beside a bright window, leaf shadows on a cream wall'); https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-fig.webp -> public/images/plant-fig.webp (fiddle-leaf fig; alt 'A tall fiddle-leaf fig filling a bright corner'); https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-snake.webp -> public/images/plant-snake.webp (snake plant; alt 'A snake plant in a terracotta pot on a wooden stool in a stripe of window light'); https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-calathea.webp -> public/images/plant-calathea.webp (calathea; alt 'A round-leaved striped calathea in dappled window light'); https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-palm.webp -> public/images/plant-palm.webp (parlor palm; alt 'A feathery parlor palm on a wooden shelf'); https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-peperomia.webp -> public/images/plant-peperomia.webp (watermelon peperomia; alt 'A small striped-leaf peperomia in a clay pot on a windowsill'). In ASSETS.md credit each: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- icon: lucide-react only: Sun, CloudSun, Moon, PawPrint, Droplets, Droplet, BellOff, Sprout, Wind, Bike, Heart, Check, MapPin, Clock, Phone, ArrowRight. Stroke width 2, 16-24px, color inherits. The pot glyph in the wordmark and the favicon are code-drawn SVG. No other icon sets.
- font: @fontsource/baloo-2 (600, 700) and @fontsource/nunito (400, 600, 700), imported in src/fonts.ts so Vite bundles the woff2 files into dist/. Never load fonts from a CDN.

## Don'ts
- No backend, no APIs, no form submission, no ordering: buy and wishlist actions save to localStorage only, with copy that says it is a demo list.
- No real plant shops, delivery brands or plant-food brands; shop name, plant names and prices are invented.
- Care advice stays general sample guidance — no botanical guarantees, no diagnosis of plant problems, no pesticide or fertilizer claims.
- Photographs show plants in pots and shop details only — no people, no readable plant tags, no logos.
- No calendar dates and no live clock: delivery days are the fixed Tue–Sat pattern, hours are fixed sample strings; the site never shows today's date.
- plant.html without a query shows the first plant, never an empty or not-found state.
- Self-host everything: fonts via Fontsource, icons via lucide-react, images downloaded into public/images/ — no CDN tags, no analytics.
- Static build: minified, no source maps, no src/ in dist/, one command npm run build, multi-page output with real plant.html in dist/ under 20 MB.
- Every internal link points at a file (./index.html#plants, ./plant.html?id=…); never a bare directory.
- Respect prefers-reduced-motion: quizzes, springs and layout animations become instant.
- Works at 1440×900 and 390×844 with zero console errors; filters, quiz, pot pairing and wishlist work with keyboard only and a visible clay focus ring.
- No SEO machinery beyond a plain title with [BRAND]; never mention VibeFather or any real brand inside the site; all copy is invented US English living in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/plant-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
