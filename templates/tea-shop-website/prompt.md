# Tea Shop Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A quiet one-page shop for [BRAND], a loose-leaf tea shop in [CITY] selling [SPECIALTY]. Warm paper ground, muted green and clay, a serif voice. Six teas filter by type and caffeine, each with flavor-note chips; a query-routed product page carries a brewing guide and a working steep timer; sampler sets and a sample subscription close the page.

- Audience: People who own a good pot and a window seat — tea drinkers in [CITY] who read tasting notes before prices and gift samplers to friends.
- Goal: Move a visitor from curiosity to a shortlist: browse by type or caffeine, open a tea, run its steep timer, and save it to a local shelf.
- Tone: Quietly sensory: honey, woodsmoke, orchid — flavors first, facts second, never salesy. The copy never hurries the reader.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react + react-dom 18 (MIT), motion (motion.dev) 11 (MIT), lucide-react (ISC), @fontsource/lora, @fontsource/alegreya-sans, @fontsource/spline-sans-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Two HTML pages at the project root: index.html (entry src/main.tsx) and tea.html (entry src/tea.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions.input { main: 'index.html', tea: 'tea.html' } }. Never copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './tea.html', './src/**/*.{ts,tsx}']. theme.extend.colors maps paper, kraft, ink, olive, clay, clayDeep, stone, rule.
  - src/fonts.ts imports @fontsource/lora/400.css, 600.css, @fontsource/lora/400-italic.css, @fontsource/alegreya-sans/400.css, 500.css, 700.css, and @fontsource/spline-sans-mono/400.css, 500.css. Import fonts.ts from both entries.
  - Global CSS in src/index.css: body background paper with a subtle warm paper-grain (inline SVG feTurbulence data-URI at 2.5% opacity); selection clay on paper; focus-visible outline 2px clay.
  - src/content.ts holds every string: teas array (slug, name, type green, black, oolong, herbal, white; caffeinated boolean; notes array of three; price per 100g; steepSeconds, tempC, leafGrams, steeps; image; alt; whyLine), sets array, subscription copy, brewBasics, address, hours. Rewrite this file when the variables change.
  - src/lib/brand.ts: brandSlug from [BRAND]; localStorage key `${brandSlug}:shelf` storing an array of tea slugs.
  - src/tea.tsx reads new URLSearchParams(location.search).get('id'); unknown or missing id renders the first tea (Hearth Amber) — never an empty or not-found state.
  - Steep timer: a plain React component (setInterval 250ms, ends exactly at 00:00, pause and reset, a thin clay progress ring via SVG stroke-dashoffset). It makes no sound, sends no notification, and stops clean when the tab is hidden (visibilitychange pauses the tick, not the display).
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView, fade + 14px rise, 550ms, 80ms stagger), TeaCard.tsx, FilterBar.tsx, Sets.tsx, BrewBasics.tsx, Subscribe.tsx, Footer.tsx; on tea.html BrewGuide.tsx, SteepTimer.tsx, ShelfButton.tsx.
  - public/favicon.svg: a 64px code-drawn steaming teacup outline in clay on paper. Download the six photos from Assets into public/images/ before building; write ASSETS.md at the project root.
  - dist/ holds index.html, tea.html, hashed JS/CSS, the woff2 fonts, favicon.svg and six webp images. Keep it under 20 MB.

## Variables
- [BRAND] — Shop name (default: "Amber & Ash"). Invented tea shop name. Wordmark, titles, brandSlug (localStorage keys) and every mention. Never a real tea brand or estate.
- [CITY] — City (default: "Burlington, Vermont"). Where the shop is. Appears in the hero eyebrow, the subscription line and the footer address. Real cities are fine.
- [SPECIALTY] — Specialty line (default: "small-lot oolong and black teas"). What the shop is known for. Used in the hero sub-line and the subscription copy. Keep it lowercase and specific.
- [SUB_PRICE] — Subscription price (default: "$19/month"). Sample price string for the monthly tin, explained as sample copy with no payments taken on the page.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/tea-shop-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#F4EDDE` — Page ground everywhere — warm paper carrying a whisper of grain.
- Kraft `#EAE0C9` — Alternate section bands, tea cards, the brewing guide panel.
- Ink `#2F2A22` — Primary text: headlines, body, prices, buttons on light.
- Olive `#6F7A4F` — Muted green: eyebrows, type chips, links, the timer ring at rest.
- Clay `#B26840` — Accent: CTAs, running timer ring, selected filters, note-chip borders, focus ring.
- Clay Deep `#96532F` — Clay hover and pressed state.
- Stone `#8B8171` — Secondary text: captions, brewing labels, the quiet footnotes.
- Rule `#D9CCB0` — 1px hairlines: card borders, set rows, footer divider.

### Typography
- Display — wordmark, H1, H2, tea names, set names. Lora serif, sentence case, line-height 1.25; flavor notes use the italic: Lora (OFL), weights 400/600
- Text — body, buttons (500, 0.04em tracking), captions, FAQ answers: Alegreya Sans (OFL), weights 400/500/700
- Figures — the steep timer digits, brewing numbers, prices: Spline Sans Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Calm and generous: 128px desktop section rhythm (80px mobile), 1120px container, 32px padding, body line-height 1.7. Grid gap 24px; product page 6/6 split with a 56px gutter.
- Radius: Soft but not bubbly: 10px on cards and panels, 999px on chips and buttons, 8px on images.
- Motion: Slow like steam: reveals fade and rise 14px over 550ms with 80ms stagger; nothing bounces.
- Motion: Filtering re-flows the tea grid with Motion layout animations at 380ms.
- Motion: A thin steam wisp — one SVG path drifting upward on a 4s loop — sits at the hero's bottom edge; under prefers-reduced-motion it is a static curl.
- Motion: The steep timer ring drains smoothly (SVG stroke-dashoffset) and the digits breathe once per second at 4% opacity while running; pause freezes both instantly.
- Motion: Note chips and swatch-like type chips crossfade 220ms on selection; reduced-motion makes every animation instant.
- Imagery: One warm-graded shoot: every photograph is tea — pouring liquor with steam, dry leaves on linen or dark wood, clay pots and dishes — in soft warm side window light, amber and clay tones, shallow depth of field, 50-85mm macro feel. No people, no readable packaging, no logos.

## Pages & Sections
### [BRAND] — teas by type, sets and a monthly tin (`index.html`)
1. **Header** — Sticky header on Paper, 1px Rule hairline after 12px of scroll. Left: wordmark [BRAND] in Lora 600 20px, Ink. Center nav (desktop): Teas, Sets, The Monthly Tin — Alegreya Sans 500 14px, Stone to Ink on 180ms, scrolling to anchors. Right: 'My shelf' text link with a Bookmark icon and the live count from localStorage. Mobile: wordmark plus burger (two 1.5px Ink lines) opening a full-screen Paper overlay with anchors in Lora 26px.
   Layout: Single row, 1120px container, 18px vertical padding.
   Motion: Hairline fades in on scroll; overlay fades and rises 12px in 240ms.
2. **Hero** — Split hero: left 6 columns carry hero-pour.webp (tea mid-pour into a glass cup, steam curling through window light) at 4:3 rounded 8px; right 6 columns, copy vertically centered. Eyebrow '[BRAND] — TEA SHOP IN [CITY]' in Alegreya Sans 700 12px uppercase 0.2em Olive. H1 in Lora 400 clamp(40px, 5vw, 60px), Ink: 'Slow hours, good leaves.' Sub in Alegreya Sans 400 16px Stone, max 46ch: '[SPECIALTY], weighed by the scoop at the counter and brewed with patience at home. Every tea ships with its brewing card — and its timer is on this page.' CTAs side by side: 'Shop teas' (clay fill, paper text, 999px) and 'See the sets' (ghost, 1px Ink border). Under the CTAs a quiet line in Stone 13px with a Timer icon: 'Each tea page runs a steep timer while you wait.'
   Layout: 6/6 split; mobile stacks the photo above the copy with 24px padding.
   Motion: Copy staggers in at 550ms each, 80ms apart; the steam wisp (one SVG curl, 4s loop) drifts at the photo's bottom edge; the photo itself never moves.
3. **Teas by type** — id='teas'. Eyebrow 'THE SHELF' and H2 'Six tins, weighed fresh.' Filter bar: two chip groups — Type (All, Green, Black, Oolong, Herbal, White) and Caffeine (Any, Caffeine-free) — as 999px chips, Kraft fill, Ink text, Olive border; active chip inverts to Olive fill with paper text. The six teas, exact data: Hearth Amber — oolong, caffeinated, notes 'honey, toasted grain, orchid', $14/100g; Meadow Steam — green, caffeinated, 'cut grass, sweet pea, hazelnut', $12; Rowan Black — black, caffeinated, 'malt, dark honey, woodsmoke', $11; Roast Moon — oolong, caffeinated, 'charcoal, brown butter, dried fig', $13; Quiet Bloom — herbal, caffeine-free, 'chamomile, honey, apple peel', $10; Cloud Veil — white, caffeinated, 'melon, fresh hay, spring rain', $16. Each card: the tea's photo at 4:3 rounded 8px, name in Lora 600 19px, the three notes as italic chips (Kraft fill, 1px clay border, Lora italic 13px), type and price line in Spline Sans Mono 13px ('$14 / 100 g — oolong'), and 'View tea' linking to ./tea.html?id=… with each tea's slug. Filtering hides non-matching cards and shows 'Showing 2 of 6 teas'; 'Clear' appears once a filter is active.
   Layout: 3-column grid (2 tablet, 1 mobile), 24px gap, cards on Kraft rounded 10px with 20px padding and a 1px Rule border.
   Motion: Cards glide with Motion layout animation at 380ms when filters change; cards reveal on scroll at 550ms with 80ms stagger.
4. **Sampler sets** — id='sets'. Eyebrow 'SETS' and H2 'Begin anywhere.' Three calm rows (not cards), each separated by a Rule hairline: 'First Steeps — three 20 g tins of the gentlest greens and herbals — $24'; 'Oolong Hours — two oolongs and a small clay pot — $38'; 'Caffeine-Free Evenings — three herbals built for after dinner — $28'. Names in Lora 600 22px, descriptions in Alegreya Sans 15px Stone, prices in Spline Sans Mono 16px clay. A quiet line under the rows: 'Sets are wrapped in the same paper as the tins — no ribbon, no fuss.'
   Layout: Single 760px column, left-aligned rows, hairline dividers, 28px row padding.
   Motion: Rows reveal on scroll at 550ms, 80ms stagger.
5. **The Monthly Tin** — id='subscribe'. A full-width band in Kraft rounded 10px with a Package icon in Olive. Heading in Lora 600 22px: 'The Monthly Tin'. Body in Alegreya Sans 15px Stone, max 60ch: 'One 50 g tin chosen to match the month's weather — darker in November, greener in May — posted with its brewing card. [SUB_PRICE], pause or skip whenever you like.' Then the honest line in Stone 13px: 'Sample copy for this template — the page takes no payments and stores nothing.' CTA 'See how it works' scrolls back to the teas; there is no checkout.
   Layout: Centered single column, 680px max width, 44px padding.
   Motion: Reveals once on scroll at 550ms.
6. **Brewing basics** — Three short tips under the eyebrow 'BREWING BASICS' and H2 'Three habits, better tea.' — each with a lucide icon in Olive: Scale 'Weigh, don't guess — 3 g per 150 ml is the whole secret'; Thermometer 'Temperature before leaf — boiling water is for black, not for green'; Timer 'One short rinse wakes rolled oolongs — then start counting'. Titles in Lora 17px, bodies in Alegreya Sans 14px Stone. Caption line: 'General brewing guidance, offered warmly.'
   Layout: 3-column grid, 24px gap, no card background — just icons and text on Paper; stacks on mobile.
   Motion: Reveals on scroll at 550ms with 80ms stagger.
7. **Footer** — 1px Rule hairline, then three columns on Paper: wordmark; '5 Weave Lane, [CITY]' with MapPin, 'Mon–Sat 10:00–18:00' with Clock, '(802) 555-0126' with Phone; nav anchors repeated small. Bottom line in Stone 12px: 'Every tea, note and price on this page is an invented example.' plus the optional [CREDIT] link.
   Layout: Three columns, stacked on mobile with 32px gaps.
   Motion: None — the footer is still.

### [BRAND] — a tea, its brewing guide and steep timer (`tea.html`)
1. **Product** — Reads ?id=; unknown or missing id renders Hearth Amber. 6/6 split. Left: the tea's photo at 4:3 rounded 8px; beneath it a caption in Stone 13px: 'Shot on the shop counter — your tin will be weighed, not staged.' Right column: type eyebrow in Olive uppercase ('OOLONG — CAFFEINATED' or 'HERBAL — CAFFEINE-FREE'), tea name in Lora 400 40px Ink, the three flavor notes as italic chips, price line in Spline Sans Mono '$14 / 100 g'. Then the brewing guide panel (Kraft, rounded 10px, 24px padding): three rows with lucide icons — Thermometer 'Temperature — 85°C'; Scale 'Leaf — 3 g per 150 ml'; Timer 'Time — 3:00, up to 3 steeps' — values come from content.ts per tea (Hearth Amber 85°C, 3:00; greens 75°C, 2:30; herbals 100°C, 6:00; whites 80°C, 4:00; blacks 95°C, 3:30; Roast Moon 90°C, 3:30). Below, the working steep timer: large mm:ss digits in Spline Sans Mono 500 56px, a thin clay progress ring (80px SVG circle) draining as it runs, and three quiet buttons — Start/Pause (toggles label), Reset (back to the tea's preset), and the label 'steeping [name]' in Stone 12px. Button 'Save to my shelf' adds the slug to `${brandSlug}:shelf` and shows an inline Check note: 'Saved on this device — a demo shelf, nothing ordered.'
   Layout: 6/6 split, 56px gutter; guide and timer stacked on the right; mobile stacks photo first.
   Motion: Digits breathe at 4% opacity once per second while running; the ring drains smoothly; Start/Pause and Reset act instantly; the save note slides up 12px in 240ms; reduced-motion keeps the timer fully functional but static-looking.
2. **Related teas** — Eyebrow 'ALSO ON THE SHELF' and three related teas (the next three slugs after the current one, wrapping) as compact cards: photo 4:3, name, notes line, price, 'View tea' link to ./tea.html?id=….
   Layout: 3-column grid, 24px gap, same card style as the main grid.
   Motion: Reveals on scroll at 550ms with 80ms stagger.

## Assets
- image: Six warm-graded tea photographs made for this template, redistributable with it. Download each into public/images/ with curl -L -o before building. https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/hero-pour.webp -> public/images/hero-pour.webp (hero and Hearth Amber's card/product photo; alt 'Amber tea pouring into a glass cup, steam curling through warm window light'); https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-green.webp -> public/images/leaf-green.webp (Meadow Steam; alt 'Dry green tea leaves scattered on oatmeal linen'); https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-black.webp -> public/images/leaf-black.webp (Rowan Black; alt 'Twisted black tea leaves on dark walnut wood in warm side light'); https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-oolong.webp -> public/images/leaf-oolong.webp (Roast Moon; alt 'Rolled oolong tea balls in a small clay dish on linen'); https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-herbal.webp -> public/images/leaf-herbal.webp (Quiet Bloom; alt 'Dried chamomile flowers on warm linen'); https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-white.webp -> public/images/leaf-white.webp (Cloud Veil; alt 'Slender white tea needles on a warm ceramic plate'). In ASSETS.md credit each: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- icon: lucide-react only: Timer, Thermometer, Scale, Package, Bookmark, Check, MapPin, Clock, Phone, ArrowRight. Stroke width 1.75, 16-24px, color inherits. The steam wisp and the teacup favicon are code-drawn SVG. No other icon sets.
- font: @fontsource/lora (400, 600, 400-italic), @fontsource/alegreya-sans (400, 500, 700) and @fontsource/spline-sans-mono (400, 500), imported in src/fonts.ts so Vite bundles the woff2 files into dist/. Never load fonts from a CDN.

## Don'ts
- No backend, no APIs, no form submission, no payments: the shelf saves to localStorage only and the subscription is explained as sample copy.
- No real tea brands, estates or importers; shop name, tea names, tasting notes and prices are invented.
- No health claims of any kind — copy stays sensory (taste, smell, warmth) and the brewing card never promises effects.
- The steep timer is a local utility only: no sound, no notifications, no background behavior beyond the visible countdown.
- Photographs show tea, leaves, pots and pours only — no people's faces, no hands, no readable packaging, no logos.
- No calendar dates and no live clock: hours are fixed sample strings, the subscription copy names months as examples only; the site never shows today's date.
- tea.html without a query shows the first tea, never an empty or not-found state.
- Self-host everything: fonts via Fontsource, icons via lucide-react, images downloaded into public/images/ — no CDN tags, no analytics.
- Static build: minified, no source maps, no src/ in dist/, one command npm run build, multi-page output with real tea.html in dist/ under 20 MB.
- Every internal link points at a file (./index.html#teas, ./tea.html?id=…); never a bare directory.
- Respect prefers-reduced-motion: no steam loop, no breathing digits; the timer itself stays functional.
- Works at 1440×900 and 390×844 with zero console errors; filters, timer buttons and shelf save work with keyboard only and a visible clay focus ring.
- No SEO machinery beyond a plain title with [BRAND]; never mention VibeFather or any real brand inside the site; all copy is invented US English living in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/tea-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
