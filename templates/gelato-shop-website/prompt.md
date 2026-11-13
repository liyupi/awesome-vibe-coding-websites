# Gelato Shop Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page marketing site for a small-batch gelato shop: pastel playful identity (cream, pistachio, raspberry, butter) with bold rounded type and drippy SVG shapes, a flavor wall of pastel swatches with dietary filter chips, a build-a-cup configurator with a live SVG cup, a churned-slow strip, two shop locations, and a client-side catering request builder.

- Audience: Neighborhood gelato, froyo, dessert and smoothie-bowl shops, and the designers who build sites for them.
- Goal: Get visitors hungry over the flavor wall, keep them playing with the cup builder until they are invested, then send them into a shop or out with a copied catering request.
- Tone: Sunny, chatty, a little silly — short punchy lines and gentle puns; the playfulness comes from color and shape, never from exclamation marks.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/baloo-2 (OFL), @fontsource/nunito (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest gelato-shop-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/baloo-2 and @fontsource/nunito as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors cream #FFF6EA, milk #FFFDF9, pistachio #CBE3B6, pistachio-deep #A9C98E, raspberry #F4AFC0, raspberry-deep #E790A4, butter #FFE1A0, cocoa #4A3528, latte #8A7565; fontFamily display 'Baloo 2' and sans 'Nunito'; keep Tailwind's default radius scale (chips rounded-2xl, panels rounded-3xl, pills rounded-full).
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/Drip.tsx: a reusable SVG drip divider (a wavy path with three hanging blobs, viewBox 0 0 1440 60, props fill and flip) used under the header, on photo frames and between pastel sections; src/components/Blob.tsx: large absolutely-positioned pastel radial-gradient blobs at 35% opacity behind sections, aria-hidden.
  - src/lib/motion.ts holds the shared motion variants: fadeUp (opacity 0→1, y 24→0, 400ms ease-out, 60ms stagger), squish (whileHover scale 1.04, whileTap 0.96, spring stiffness 400 damping 15), scoopPop (scale 0.6→1 spring); use Motion's useReducedMotion to fall back to plain 200ms opacity fades.
  - Keep every user-facing string (brand, city, sizes, the twelve flavors with name/color/tags, toppings, shops, facts, catering copy) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — Gelato in [CITY]</title> plus a drawn-in-code favicon.svg (three overlapping scoop circles in pistachio, raspberry and butter); no other meta work.

## Variables
- [BRAND] — Shop name (default: "Pastella"). Invented name used in the header, footer, page title, catering summary and email.
- [CITY] — Town (default: "Alder Bay"). The town the shops and catering copy live in ('churned daily in [CITY]', 'two shops in [CITY]').
- [SCOOPS] — Max scoops per cup (default: "3"). Drives the scoop limit in the cup builder, the counter chips and the 'stack up to three scoops' phrasing (spell the number out in copy via content.ts).
- [PRICE_CUP] — Starting cup price (default: "$6"). Shown in the hero sub-line and as the Classica size price in the builder.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/gelato-shop-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Cream `#FFF6EA` — Page ground everywhere; footer ground.
- Milk `#FFFDF9` — Cup body in the SVG, panel fills, chip inner surfaces, input fields.
- Pistachio `#CBE3B6` — Primary pastel surface: hero photo frame, hero blob, active states' tints.
- Pistachio deep `#A9C98E` — Drips, borders and pressed states on pistachio surfaces.
- Raspberry `#F4AFC0` — Secondary pastel surface: shop panel two, tag pills, blob accents.
- Raspberry deep `#E790A4` — Drips and borders on raspberry surfaces; the single drip on the hero cup photo.
- Butter `#FFE1A0` — Third pastel: highlight chips, one blob per section, hero flavor-dot accent.
- Cocoa `#4A3528` — All text and outlines; primary buttons are cocoa grounds with cream text.
- Latte `#8A7565` — Secondary text: intros, captions, the honest allergen note.

### Typography
- Display — headlines, flavor names, prices (chunky rounded): Baloo 2 (OFL), weights 600/700/800
- Text — body, chips, tags, inputs (rounded sans): Nunito (OFL), weights 400/600/700

### Layout & motion
- Spacing: Roomy but bouncy: sections py-24 (96px) desktop / py-16 (64px) mobile; content max-w-6xl px-6/px-10; headings get 8–16px of breathing room below; pastel panels use 32px inner padding so drips never crowd text.
- Radius: Rounded everywhere: 24px (rounded-3xl) on panels and photo frames, 16px (rounded-2xl) on chips, buttons and inputs, 999px pills on filter tags; the only straight lines in the design are the SVG drips hanging down.
- Motion: Hover squish on every chip, button and flavor swatch: scale 1.04 with a spring (stiffness 400, damping 15), whileTap scale 0.96 — implemented once in src/lib/motion.ts.
- Motion: Scroll reveals: sections and grid items fade up (y 24→0, 400ms ease-out) with 60ms stagger via Motion's whileInView, firing once.
- Motion: Hero: the cup photograph bobs slowly (y ±6px, 6s ease-in-out loop) and the two background blobs drift on 20s loops; the flavor-dot row pops in sequentially on load (150ms apart).
- Motion: Flavor wall filter: non-matching swatches animate to opacity 0.25, grayscale 0.6 and scale 0.96 over 250ms; matching chips stay full color.
- Motion: Cup builder: each added scoop pops in (scale 0.6→1 spring); a removed scoop pops out (200ms); the price line slides up 80ms after any change; with two or more scoops a drip path grows below the rim (scaleY 0→1, 350ms).
- Motion: Drip dividers idle: one blob per divider slowly stretches (scaleY 1→1.15) on a 5s loop, staggered per section.
- Motion: prefers-reduced-motion: every loop (bob, blob drift, drip idle) stops, springs become 200ms opacity fades, squish becomes a color shift only.
- Imagery: One studio session throughout: gelato still-life photography on seamless pastel backdrops (pistachio green, raspberry pink, cream, butter yellow), soft diffused daylight from the front-left, one gentle shadow, candy-pastel palette, high-key minimal compositions with lots of empty backdrop. No text or labels in frame, no menu boards, no logos, no people or faces. The six photographs are generated by VibeFather and downloaded into public/images.

## Pages & Sections
### [BRAND] — Gelato in [CITY] (`index.html`)
1. **Header** — Sticky top bar on milk: left the [BRAND] wordmark in Baloo 2 800, 26px, cocoa, followed by a small three-dot scoop mark (pistachio, raspberry, butter circles). Right (desktop): anchor links 'Flavors', 'Build a cup', 'Shops', 'Catering' in Nunito 700 15px cocoa; then a pill button 'Build a cup' (cocoa ground, cream text). Mobile: wordmark + button + a lucide menu/x toggle opening a milk panel with the four links stacked. The whole bar ends in the reusable Drip divider in milk that overlaps the hero below (z-10).
   Layout: position sticky top-0 z-40, h-16, px-6/px-10, max-w-6xl mx-auto contents; the drip SVG sits absolute bottom, width 100%, pointing down.
   Motion: On scroll past 40px the bar gains a soft cocoa 10% bottom shadow (200ms); menu panel slides down 250ms; links squish on hover.
2. **Hero** — Left: a pill tag 'CHURNED DAILY IN [CITY]' (Nunito 700 12px uppercase, butter ground, cocoa text). Headline in Baloo 2 800, clamp(2.75rem, 6vw, 4.5rem), line-height 1.05, cocoa: 'Serious gelato, silly colors.' Sub-line, Nunito 400 18px, latte, max-w 46ch: 'Small-batch gelato in [CITY] — twelve rotating flavors, plant-based options, and a cup you design yourself. Cups from [PRICE_CUP].' CTAs: 'Build your cup' (cocoa pill, cream text, lucide arrow-down) → #build; 'See the flavor wall' (outline pill, cocoa border) → #flavors. Under the CTAs a row of six 14px flavor dots (pistachio, raspberry, butter, mango, blueberry, lemon from content.ts) linking to #flavors. Right: public/images/hero-cup.webp in a 3:4 rounded-3xl frame on a pistachio ground panel, a raspberry-deep Drip hanging off the frame's bottom edge, one pastel Blob behind the top-left corner.
   Layout: 12-column grid, py-24: text columns 1–6 (self-center), photo panel columns 8–12 (max height 520px, object-cover). Mobile: stacked, photo first at 420px tall, then text.
   Motion: Photo bobs ±6px on a 6s loop; blobs drift 20s; headline, sub, CTAs and flavor dots fade up in sequence (60ms stagger, dots 150ms apart); CTAs squish on hover.
3. **Flavor wall** — id=flavors. Heading Baloo 2 800 clamp(2rem,4vw,3rem) cocoa: 'The flavor wall.' Intro Nunito latte: 'Twelve flavors chalked up every morning — swirls, sorbets and one very stubborn fudge.' Filter row of four pills (Nunito 700 14px): 'All', 'Vegan', 'Dairy-free', 'Nut-free' — active pill = cocoa ground/cream text, inactive = milk ground/cocoa border. The wall: twelve swatch chips in a 4×3 grid (2 columns mobile), each chip filled with its flavor color from content.ts: flavor name in Baloo 2 700 20px cocoa, a Drip in the same color's deeper shade along the chip's bottom, and tag pills (milk at 80% opacity, cocoa 11px): Pistachio Cream —; Raspberry Sorbet — vegan, dairy-free, nut-free; Stracciatella — nut-free; Dark Chocolate Fudge — vegan, dairy-free; Salted Caramel — nut-free; Mango Sorbet — vegan, dairy-free, nut-free; Matcha White —; Blueberry Oat — vegan, dairy-free, nut-free; Lemon Basil Sorbet — vegan, dairy-free, nut-free; Hazelnut Crunch —; Coconut Vanilla — vegan, dairy-free; Coffee Toffee — nut-free. Under the grid, Nunito 13px latte: 'Tags describe the recipe, not a certified allergen statement — always ask in shop.'
   Layout: max-w-6xl grid gap-6; chips aspect around 4:5 with 24px inner padding, rounded-3xl.
   Motion: Chips fade up on scroll with 60ms stagger; hover squish lifts a chip 2px; filtering animates non-matching chips to opacity 0.25 + grayscale 0.6 + scale 0.96 (250ms) and they stop taking pointer events.
4. **Churned slow** — Heading: 'Churned slow, served soft.' A row of three photographs on milk frames with playful tilts: gelato-pan.webp (rotate -2deg), scoop-trio.webp (rotate 1.5deg), waffle-cones.webp (rotate -1deg), each rounded-3xl with a Drip under its frame. Facts row of three short lines in Nunito 600 cocoa with Baloo 700 lead-ins: '30% less air — churned slow and dense', '20 minutes — milk travels from the valley dairies to the churn', 'Every Friday — one new flavor gets chalked onto the wall'.
   Layout: py-24; photos row of three (each ~4 columns, heights 260px, object-cover), tilts alternate; facts row is a 3-column grid with 48px gaps, separated from photos by 48px.
   Motion: Photos fade up staggered; hover straightens each tilt to 0deg (300ms) and squishes; facts fade up after the photos.
5. **Build a cup** — id=build. Heading: 'Build your cup.' Intro: 'Pick a size, stack your scoops, dress it up — we will make exactly this at the counter.' Left: the live SVG cup (see layout for geometry) with, underneath, a price line in Baloo 2 700 24px cocoa, e.g. '[PRICE_CUP] · Classica · 3 scoops · hot fudge', and two pill buttons: 'Save my cup' (cocoa) and 'Reset' (outline). Saving writes the choice to localStorage key 'savedCup' and pops an inline chip 'Saved! Show this at the counter.' (butter ground). Right, three steps separated by 24px: Step 1 'SIZE' — two chips, 'Piccolo — 1 scoop — $5' and 'Classica — up to [SCOOPS] scoops — [PRICE_CUP]'. Step 2 'SCOOPS' — the twelve flavors as small color chips with name; clicking adds a scoop of that color to the cup until the size limit (Piccolo 1, Classica [SCOOPS]); a small count badge shows how many of each are in the cup; clicking a scoop in the SVG removes it. Step 3 'TOPPINGS' — four multi-select pills: 'Rainbow sprinkles', 'Pistachio crumble', 'Hot fudge', 'Fresh berries' (+$1 each, reflected in the price line). Below the toppings, berry-toppings.webp as a small 1:1 160px rounded-2xl photo chip, tilted -2deg.
   Layout: 12-column grid: sticky cup column 1–5 (self-start), steps column 7–12. Cup SVG: viewBox 0 0 200 260 — cup body path 'M40 100 L52 220 Q54 236 70 236 L130 236 Q146 236 148 220 L160 100 Z' fill milk, stroke cocoa 6px; rim line from 34,100 to 166,100; scoops are circles r=34 at x=100 stacked at y=96, 62 and 28 (bottom scoop first); each scoop fill = flavor color, stroke cocoa 5px; toppings render on the top scoop at fixed constant positions (sprinkles: eight 8×3 rotated rects; fudge: three small drip arcs; berries: three 6px circles in #B85C74; crumble: seven 3px cocoa dots); with 2+ scoops a drip path grows under the rim. Mobile: cup first (240px wide, not sticky), then steps.
   Motion: Scoops pop in (scale 0.6→1 spring) and pop out (200ms); the drip grows scaleY 0→1 (350ms) when the second scoop lands; price line slides up 80ms after any change; chips and pills squish; the saved chip pops in and auto-fades after 4s.
6. **Shops** — Heading: 'Two shops in [CITY].' Two rounded-3xl panels side by side, each with a Drip on its bottom edge: panel one on pistachio ground — lucide map-pin + 'Old Mill Shop', '14 Ropewalk Lane, Old Mill', clock icon + 'Mon–Thu 12:00–21:00 · Fri–Sun 11:00–23:00', line 'Window seats, and the dog bowl is always full.' Panel two on raspberry ground — map-pin + 'Pier Two Shop', '2b Ferry Slip, Old Harbour', 'Mon–Thu 13:00–21:00 · Fri–Sun 11:00–23:00', line 'The sunset line forms at the window around six.' Text all cocoa, Nunito; shop names Baloo 2 700 24px.
   Layout: Two panels in a 2-column grid (stacked on mobile), 32px padding, drips in pistachio-deep and raspberry-deep.
   Motion: Panels fade up staggered 120ms; hover squish lifts 2px; icons nudge 2px on panel hover.
7. **Catering** — Heading: 'We bring the cart.' Intro: 'Cups, cones and a churn cart for weddings, launches and school fairs across [CITY]. Tell us the shape of your party:' Controls on a milk rounded-3xl panel: a name input (Nunito, rounded-2xl, milk ground, cocoa border, placeholder 'Your name'); event size chips '15 cups', '30 cups', '50 cups'; flavor picks — 'choose up to three' — the same flavor chips from the wall; a cocoa pill button 'Copy request' that writes to the clipboard: 'Hi [BRAND]! I'm {name} — {size} for my event, hoping for {flavors}.' and shows an inline chip 'Copied — paste it into an email to hello@pastella.shop' (butter ground). Above the panel, party-cups.webp as a full-width 16:9 rounded-3xl banner with a Drip. Nothing submits anywhere.
   Layout: Banner (h 320px, object-cover) then the panel max-w-4xl mx-auto; controls stacked with 24px gaps, flavor chips wrap.
   Motion: Banner parallax is not used (calm); panel fades up; chips squish; the copied chip pops in; the clipboard write falls back to selecting the summary text if the clipboard API is unavailable — never to a network call.
8. **Footer** — Cream ground opened by a milk Drip divider at the top. Left: the [BRAND] wordmark with the three-dot scoop mark, and one line in Nunito latte: 'Small-batch gelato · [CITY] · hello@pastella.shop' (email from content.ts, changes with [BRAND]). Right: anchor links 'Flavors · Build a cup · Shops · Catering' in cocoa. Optional [CREDIT] link in latte. No dates, no social icons, no newsletter.
   Layout: py-12, max-w-6xl, flex row wrapping to column on mobile, gap 24px.
   Motion: None.

## Assets
- image: Download https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/hero-cup.webp to public/images/hero-cup.webp. Alt: 'A paper cup with pistachio, raspberry and cream gelato scoops on a pastel green backdrop.' Used as the hero anchor photograph (3:4). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/gelato-pan.webp to public/images/gelato-pan.webp. Alt: 'A metal pan of swirled raspberry sorbet with a spatula.' Used in 'Churned slow' (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/scoop-trio.webp to public/images/scoop-trio.webp. Alt: 'Three gelato scoops — pistachio, vanilla and dark chocolate — in a row.' Used in 'Churned slow' (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/waffle-cones.webp to public/images/waffle-cones.webp. Alt: 'A stack of crisp waffle cones on a pink pastel backdrop.' Used in 'Churned slow' (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/berry-toppings.webp to public/images/berry-toppings.webp. Alt: 'Small bowls of sprinkles, chopped pistachios and fresh berries.' Used beside the toppings step in 'Build a cup' (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/party-cups.webp to public/images/party-cups.webp. Alt: 'Two rows of small gelato cups in pastel colors on a long table.' Used as the catering banner (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: lucide-react (ISC) via npm — arrow-down in the hero CTA, map-pin and clock in the shop panels, check in the saved-cup and copied-request chips, menu and x for the mobile header. No other iconography: no emoji, no food icons, no logo marks.
- font: @fontsource/baloo-2 (OFL, weights 600, 700, 800) and @fontsource/nunito (OFL, weights 400, 600, 700), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and all six photographs in ASSETS.md at the project root: path, source, generator or author, license.

## Don'ts
- No backend, no APIs, no analytics, no payment or ordering: the cup builder persists to localStorage only, and the catering section copies a summary to the clipboard — no form ever submits anywhere.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react, photographs from public/images; never hotlink, never use Unsplash/Pexels/Pixabay or placeholder-image services.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ under 20 MB by compressing each photograph to ≤ 350 KB WebP.
- Single page with anchor navigation only; must render cleanly at 1440×900 and 390×844 with zero console errors, and respect prefers-reduced-motion (bob, drift and drip loops stop; springs become fades).
- No real gelaterias, chains or their branding: shop, flavors, streets and locations are invented, and [BRAND] is used everywhere a name appears.
- Dietary tags are descriptive sample copy only — never an allergen certification or guarantee; the honest note under the flavor wall must stay.
- Photographs contain no readable text, labels, menu boards, logos, or people and faces; if a generated image ever shows writing, replace it.
- No real-clock dates anywhere: 'chalked up every morning' and 'every Friday' are static sample copy; no publish dates, no 'Est.' years, no today() in the UI.
- Keep the pastel direction locked: cream ground with pistachio, raspberry and butter pastels and cocoa text; no dark mode, no neon gradients, no glassmorphism; drippy shapes are drawn SVG paths, never raster images.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [BRAND], [CITY], [SCOOPS] or [PRICE_CUP] change, rewrite flavor names, shop names, hours and the spelled-out scoop count to fit the new shop instead of leaving gelato copy under another brand.
- List every third-party file (two Fontsource families, lucide icons, six photographs) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/gelato-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
