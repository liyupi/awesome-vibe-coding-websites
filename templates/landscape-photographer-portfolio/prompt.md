# Landscape Photographer Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A portfolio for a fictional landscape and editorial photographer (not weddings). Full-bleed photo series (coastlines, deserts, alpine lakes, night skies) with keyboard and swipe navigation, a lightbox with capture details, a map of where each series was shot, a print shop with paper and size options, licensing enquiries, workshops with dates, and a short journal. Photographs are generated in one consistent muted, atmospheric look. Near-black gallery #0F0F10, warm white and a quiet ochre accent #C9A227; a refined serif.

- Audience: Photo editors, collectors who buy prints, and photographers looking for a field workshop.
- Goal: Let the photographs carry the first screen, then lead to a series, a print order, a licensing enquiry or a workshop place.
- Tone: Quiet and exact, like a caption written in a hut after a long walk: place names, weather and light, no grand statements.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL-1.1), @fontsource-variable/figtree (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors night #0F0F10, nightSoft #19191B, warm #F5F1E8, stone #A8A39A, ochre #C9A227, line #2C2C2F; fontFamily display 'Cormorant Garamond', sans 'Figtree Variable', mono 'IBM Plex Mono'.
  - src/components/Viewer.tsx is the shared full-bleed viewer: it takes a list of photographs and handles ArrowLeft / ArrowRight keys (only while it has focus or the pointer is over it), pointer and touch swipes, a cross-fade between photographs and an index counter.
  - A small hash router reads location.hash: #/ (home), #/series, #/series/<slug>, #/prints, #/workshops, #/journal, #/about; scroll to top on route change. No router library.
  - The map is an inline SVG drawn in code (coast line, contour lines, mountain and water marks) with one ochre pin per series; no map service or tiles.
  - All copy, photographs, series, print options, workshops, journal entries and form options live in src/content.ts as typed objects; components never hard-code copy.
  - The cart persists to localStorage under the key [BRAND_SLUG]-cart, where [BRAND_SLUG] is [BRAND] lowercased with hyphens.

## Variables
- [BRAND] — Photographer's name (default: "Greta Lindholm")
- [CITY] — Home town (default: "Bozeman")
- [HERO_TITLE] — Title of the featured photograph (default: "Sea Stack, First Light")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/landscape-photographer-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- night `#0F0F10` — Page ground
- nightSoft `#19191B` — Panels, cards, cart drawer
- warm `#F5F1E8` — Text, buttons with night text
- stone `#A8A39A` — Secondary text, capture details
- ochre `#C9A227` — The quiet accent: eyebrows, pins, active states, the solid call-to-action plate
- line `#2C2C2F` — Hairlines

### Typography
- Display / titles and pull quotes: Cormorant Garamond (OFL), weights 300/500
- Body / UI: Figtree Variable (OFL), weights 400/500
- Mono / capture details, index counter, captions: IBM Plex Mono (OFL), weights 400

### Layout & motion
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1240px] px-6; gallery gaps 24px; 8px rhythm.
- Radius: Corners are square: 0px on images, cards and buttons; the details panel has 4px.
- Motion: Viewer: photographs cross-fade 700ms; the caption text fades 300ms after the image has settled.
- Motion: Scroll reveals: sections fade up 16px over 500ms, once (Motion whileInView); content is visible by default.
- Motion: Hover on a thumbnail: it brightens from 80% to 100% and gains a 1px ochre line at the bottom (200ms).
- Motion: prefers-reduced-motion: photographs switch with a 150ms fade, no reveals, no hover motion.
- Imagery: Landscape photographs with one consistent look: muted natural colours, deep blacks, soft atmospheric light, long exposures on water, medium-format clarity with fine grain. No people in the landscape photographs; one working shot of the photographer from behind. No text, watermarks, logos or recognizable buildings or landmarks in any image.

## Pages & Sections
### Home (`index.html`)
1. **Site header** — Left: wordmark [BRAND] in Cormorant Garamond 500 24px warm with letter-spacing. Center nav: Series (→ #/series), Prints (→ #/prints), Workshops (→ #/workshops), Journal (→ #/journal), About (→ #/about), Figtree 400 14px stone, hover warm. Right: a lucide shoppingBag button with a count badge when the cart has items. A thin 1px line under the header.
   Layout: Sticky 64px bar over the hero: transparent until the page scrolls, then night/90 with backdrop blur and a bottom hairline line; inner max-w-[1240px]. Mobile: wordmark, cart button and menu button stay on one line at 390px; the menu opens a full-screen night drawer with the links stacked.
   Motion: Header tint fades in 300ms after 40px of scroll; drawer fades in 200ms.
2. **Featured photograph — full-bleed viewer** — A viewer filling the first screen (minus the header) cycling through five photographs from content.ts: [HERO_TITLE] — Coastlines — public/images/hero-coast.webp (16:9), alt 'Sea stacks in smooth water at first light, seen from a black sand shore'; 'Fog on the Headland' — Coastlines — public/images/coast-cliffs.webp (4:3), alt 'Fog clearing from grass-topped cliffs above a grey sea'; 'Last Light on the Dunes' — Deserts — public/images/desert-dunes.webp (4:3), alt 'Sand dunes with long shadows under the last warm light'; 'Still Water, High Snow' — Alpine lakes — public/images/alpine-lake.webp (3:4), alt 'A jagged snow peak mirrored in an alpine lake at sunrise'; 'The River of Stars' — Night skies — public/images/night-sky.webp (16:9), alt 'The Milky Way over a dark mountain lake'. Over the photograph: a gradient from transparent to night across the bottom 60%; bottom-left an eyebrow IBM Plex Mono 12px uppercase tracking-widest ochre 'LANDSCAPE AND EDITORIAL PHOTOGRAPHY', the title in Cormorant Garamond 300 at clamp(44px, 6vw, 96px) warm, and a mono caption stone with series and place; bottom-right a solid ochre plate with night mono text '01 / 05' and prev / next arrow buttons; a 'Details' button (warm outline) opens the details panel. Clicking the photograph opens it too: a lightbox with the photograph and a side panel listing capture details from content.ts, e.g. for the first photograph 'Medium format · 45 mm · f/8 · 1/60 s · ISO 100 · tripod', plus place, weather and a one-line note, and links 'Buy as a print' (→ #/prints) and 'View the series' (→ #/series/coastlines).
   Layout: h-[calc(100vh-64px)]; the active photograph is an absolutely positioned img with object-cover; text block max-w-[720px] with 48px padding. On mobile the plate and arrows sit below the caption. Every title here sits on the gradient scrim and keeps WCAG AA contrast.
   Motion: Cross-fade 700ms between photographs; ArrowLeft / ArrowRight keys and swipes move back and forward; an 8-second timer advances the viewer until the visitor interacts. Under reduced motion there is no timer.
3. **Series grid** — H2 Cormorant Garamond 300 56px warm 'Four series, one long walk.' Four cards: Coastlines — 'North Atlantic · 2 photographs' (cover hero-coast.webp); Deserts — 'High dune country · 1 photograph' (cover desert-dunes.webp); Alpine lakes — 'Northern ranges · 1 photograph' (cover alpine-lake.webp); Night skies — 'Dark-sky reserves · 1 photograph' (cover night-sky.webp). Each links to #/series/<slug>.
   Layout: grid md:grid-cols-2 lg:grid-cols-4 gap-6; covers at 4:5 object-cover; captions beneath in Figtree 15px stone with the title in Cormorant Garamond 500 28px warm.
   Motion: Hover as described in motion; cards fade up staggered 80ms.
4. **Where the series were shot** — H2 'Where these were made.' Left: the code-drawn SVG map on nightSoft with contour lines in line and one ochre pin per series, labelled 'North Atlantic coast', 'High dune country', 'Northern ranges', 'Dark-sky reserve'. Right: a list of the four places with a mono line each: 'Coastlines — 62 days on the shore over three years.'; 'Deserts — Two springs, one truck.'; 'Alpine lakes — Nine mornings above the tree line.'; 'Night skies — Thirty clear nights, four of them good.'
   Layout: lg:grid-cols-[58%_42%] gap-12 items-center; map at 16:10.
   Motion: Pins fade in staggered 120ms when the map enters the view; hovering a list row enlarges its pin.
5. **Prints and workshop teaser** — Two blocks. Prints: H2 'Prints, made to last.'; line stone: 'Editions of 25 on cotton, baryta or fibre papers, from $180.'; button 'Browse prints' (warm fill, night text → #/prints). Workshops: H2 'Walk out with me.'; line stone: 'Small groups, long days, honest critique.'; three mono lines: 'April 17–20 · Coastlines field workshop · $1,450', 'July 9–12 · Alpine lakes · $1,600 · waitlist', 'October 3–6 · Night skies · $1,250'; button 'See dates' (ochre fill, night text → #/workshops).
   Layout: grid md:grid-cols-2 gap-6; each block on nightSoft, p-10.
   Motion: Blocks fade up staggered 90ms.
6. **Journal teaser and footer** — H2 'Field notes.' Three journal entries as text rows with a small thumbnail each: 'Waiting for fog' (coast-cliffs.webp), 'The coldest sunrise' (alpine-lake.webp), 'What the dark sounds like' (night-sky.webp), each with one line and a link to #/journal. Footer: wordmark [BRAND], nav repeat, small print 13px stone: 'Landscape and editorial photography · [CITY]' and 'Photographs, places, prices and workshops on this site are invented sample content.' plus [CREDIT].
   Layout: Journal rows py-5 with 1px line separators; footer grid md:grid-cols-3 gap-8 py-12 with a 1px top hairline.
   Motion: Rows fade up staggered 70ms.

### Series pages (`#/series`)
1. **Series viewer** — Shows the series for the slug in the hash (#/series/coastlines, #/series/deserts, #/series/alpine-lakes, #/series/night-skies); opened as #/series with no slug it shows the first series. A full-bleed viewer with the series' photographs: Coastlines has hero-coast.webp and coast-cliffs.webp; the other three have their one photograph. Top-left: eyebrow ochre 'SERIES'; title Cormorant Garamond 300 clamp(48px, 6vw, 104px) warm on a gradient scrim at the top; bottom-left a caption with photograph title and place; bottom-right arrows and a mono index.
   Layout: h-[calc(100vh-64px)]; same viewer component and caption treatment as the home page.
   Motion: Cross-fade 700ms, arrow keys and swipes; no timer on series pages.
2. **Field notes** — H2 'Field notes.' Three short paragraphs for the default series: 'I came for the stacks and stayed for the fog. On the north shore it arrives without warning and leaves the same way, and the best photograph is usually made in the ten minutes it takes to clear.' 'Everything here is a long exposure on a tripod, mostly around half a minute, because the sea should look like it remembers being still.' 'Both photographs were made within an hour's walk of the same parking place. That is not a secret; the tide is.' The other series have three shorter paragraphs each.
   Layout: max-w-[640px] py-16, Figtree 18px stone with the first line in warm.
   Motion: Fade up 500ms.
3. **In this series and place** — Left: 'In this series' thumbnails of the series' photographs with titles, each seeking the viewer. Right: the series' pin on a small copy of the SVG map and a mono line with days spent; buttons 'License a photograph' (→ #/about#licensing) and 'Buy as a print' (→ #/prints).
   Layout: lg:grid-cols-2 gap-12 py-16.
   Motion: Thumbnails hover as described in motion.

### Print shop (`#/prints`)
1. **Prints header** — H1 'Prints.'; line stone: 'Every photograph on this site, in editions of 25, signed and numbered on the back.' A mono note 13px stone: 'Sample shop: nothing is charged and no order is placed.'
   Layout: py-16.
   Motion: Fade up 400ms.
2. **Print grid, options and cart** — Five prints in a grid, each with the photograph, title, series and 'Edition of 25'. A dialog opens from 'Choose options' with two groups of square toggle buttons: paper — Cotton matte +$0, Baryta gloss +$40, Fibre satin +$60 — and size — 40 × 60 cm $180, 60 × 90 cm $320, 100 × 150 cm $760 — and a live price line in Cormorant Garamond 500 32px warm; button 'Add to cart' (ochre fill, night text). The cart slides in from the right: line items with thumbnail, title, paper and size in mono, a minus / plus stepper, line total and remove; subtotal; a line 'Free shipping on orders over $400' with a thin ochre progress bar; button 'Checkout'. Checkout replaces the drawer content with a check panel: 'Sample checkout. No payment was taken and no order was placed.' and a button 'Keep browsing'.
   Layout: Grid md:grid-cols-3 gap-6; dialog centred max-w-[520px] on nightSoft; drawer fixed right w-[400px] max-w-full h-full nightSoft over a night/70 backdrop. State persists under [BRAND_SLUG]-cart.
   Motion: Drawer slides in 250ms; price line updates instantly; stepper presses scale to 0.96.

### Workshops (`#/workshops`)
1. **Workshops list** — H1 'Workshops.'; line stone: 'Four days, six people, one region. We walk, we shoot, we look at the pictures together.' Three cards: 'April 17–20 — Coastlines field workshop — North Atlantic coast — $1,450 — 4 places left'; 'July 9–12 — Alpine lakes — Northern ranges — $1,600 — Sold out, join the waitlist'; 'October 3–6 — Night skies — Dark-sky reserve — $1,250 — 6 places left'. Each card has its cover photograph, an itinerary of four mono lines ('Day 1 — Arrival, sunset shoot', 'Day 2 — Dawn shoot, edit session', 'Day 3 — Full day on location', 'Day 4 — Dawn shoot, farewell lunch') and a button 'Request a place' (warm outline) or 'Join the waitlist' for the sold-out one.
   Layout: grid md:grid-cols-3 gap-6; covers at 16:10.
   Motion: Cards fade up staggered 90ms.
2. **Place request** — Clicking a button opens a dialog with the workshop name, fields Name, Email and 'A few lines about you' textarea, and 'Send request'. Name, a valid email and a message of 20+ characters are required; errors show in ochre under the field. On success the form is replaced by: 'Thanks, <name>. This is a sample form, so nothing was sent.'
   Layout: Dialog max-w-[520px] on nightSoft; inputs with a 1px line border, square corners, warm text, 2px ochre focus ring.
   Motion: Dialog fades in 200ms.

### Journal (`#/journal`)
1. **Journal entries** — H1 'Field notes.' Three entries, each with a thumbnail, a title in Cormorant Garamond 500 36px warm, a mono place line and two paragraphs read in full on the page: 'Waiting for fog' — North Atlantic coast: 'The forecast said clear, which on this coast means fog by nine. I set up on the headland anyway and waited three hours for the sea to come back.' 'When it did, it came back one rock at a time. The photograph was made in the middle of that, and it is softer than anything I have made since.'; 'The coldest sunrise' — Northern ranges: 'Minus fourteen at the lake, the tripod legs freezing to the jetty. I kept one glove off and paid for it.' 'The mountain came out pink for four minutes. The lake held still the whole time, which is the only reason the picture exists.'; 'What the dark sounds like' — Dark-sky reserve: 'It is never quiet. There is water, wind in the pines, and once, very close, an owl.' 'I made a forty-second exposure for the stars and a second one for the lake, and the sound is in there somewhere.'
   Layout: Entries stacked with 1px line separators, thumbnail at 4:3 max-w-[420px] beside the text on desktop and above it on mobile; py-16.
   Motion: Entries fade up staggered 90ms.

### About and licensing (`#/about`)
1. **About** — Left: public/images/photographer.webp (4:3), alt 'The photographer from behind, standing beside a tripod on a ridge above a foggy valley at dawn'. Right: eyebrow 'ABOUT'; H1 'Greta Lindholm' set as [BRAND]; three paragraphs: 'I am a landscape and editorial photographer based in [CITY]. I work slowly, on foot, and mostly within an hour of a parked truck.' 'The pictures on this site come from four long projects over the last few years, on coasts, in dunes, above the tree line and after dark.' 'I do not photograph weddings. I do photograph the places people go to remember how small they are.' A mono list 'Selected clients': 'Northlight Travel Almanac', 'The Outdoor Quarterly', 'Harbor & Peak Outfitters', 'Stonebridge Editions'.
   Layout: lg:grid-cols-2 gap-12 items-center py-16.
   Motion: Text fades up staggered 90ms; the photograph settles from scale 1.03.
2. **Licensing enquiry** — id="licensing". H2 'License a photograph.'; line stone: 'Editorial and commercial licences, priced by use.' A form: 'Photograph' select (the five titles), 'Use' radio pills (Editorial / Commercial / Personal), 'Territory' select (One country / Worldwide), 'Duration' select (3 months / 1 year / Unlimited), Name, Email, 'Tell me about the project' textarea, and 'Send enquiry' (ochre fill, night text). A photograph, use, name, a valid email and a message of 20+ characters are required; errors show in ochre. On success: 'Thanks, <name>. This is a sample form, so nothing was sent.'
   Layout: max-w-[720px] pb-24; inputs with a 1px line border on nightSoft, square corners, 2px ochre focus ring.
   Motion: Success panel fades in 200ms.

## Assets
- image: Five landscape photographs and one working shot, generated by VibeFather, downloaded into public/images/ and used nowhere else: hero-coast.webp (16:9), coast-cliffs.webp (4:3), desert-dunes.webp (4:3), alpine-lake.webp (3:4), night-sky.webp (16:9), photographer.webp (4:3). Each downloads from https://media.vibefather.ai/assets/6aaed27d-397d-47c7-8164-a3adcf1cc748/<file>; alt text is given in the sections above. Credit in ASSETS.md: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- image: The map is drawn in code as inline SVG (coast line, contour lines, pins); no map tiles or map services.
- icon: lucide-react npm package (ISC): menu, x, shoppingBag, plus, minus, check, chevronLeft, chevronRight, arrowRight. No other icon sets, no brand logos anywhere.
- font: Fontsource packages (OFL-1.1): @fontsource/cormorant-garamond (300 and 500), @fontsource-variable/figtree and @fontsource/ibm-plex-mono, imported in main.tsx. No font CDN links.

## Don'ts
- No backend: no server code, API routes, databases, auth, or forms that submit anywhere. The checkout, workshop requests and licensing form are local samples that say so in their confirmation.
- Photographs, titles, places, clients, publications, prices and workshops are invented sample content; no real photographers, galleries, magazines or brands may be named or imitated.
- No wedding, portrait or event photography; landscape photographs show no people, and the working shot shows the photographer from behind, never a front-facing close-up.
- Images carry no text, watermarks, logos or recognizable landmarks; all photographs keep one muted, atmospheric look.
- No map services or tiles: the map is inline SVG drawn in code.
- Self-host everything: fonts via Fontsource packages, images downloaded into the project, no CDN script or link tags, no Google Fonts, no analytics.
- Vite base './' with relative asset paths; internal links are anchors (#/series, #/prints) or real file names, never bare directories; #/series opened without a slug shows the first series.
- Production build minified with no source maps; dist/ under 20 MB.
- prefers-reduced-motion: no auto-advance timer, reveals or hover motion; photographs switch with a short fade. Never hide a whole element with clip-path or zero opacity while waiting for an in-view trigger.
- Every title over a photograph sits on the gradient scrim and keeps WCAG AA contrast; small text on night is warm or stone, and ochre is used for eyebrows at 12px mono only with letter-spacing, pins and solid plates with night text.
- Arrow keys change the photograph only while the viewer is focused or hovered, so the rest of the page still scrolls with the keyboard.
- Tailwind opacity utilities use the default scale (for example /70, /90); custom steps are written as arbitrary values.
- No SEO work: a plain <title> with [BRAND] and a favicon are enough; no meta descriptions, Open Graph tags, JSON-LD or sitemaps.
- No copied code, copy, imagery or fonts from any reference site; no brand names in template names, slugs, copy or alt text.

---
— Prompt by VibeFather · https://vibefather.ai/t/landscape-photographer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
