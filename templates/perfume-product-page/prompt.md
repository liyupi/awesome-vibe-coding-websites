# Perfume Product Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for one invented perfume: a blush-and-amber soft-sensual identity, a macro glass-bottle hero on blush silk, an editorial mood strip, an animated SVG scent pyramid that unfolds top-heart-base on scroll, a how-to-wear note, a size picker with live price and a discovery-set upsell, and quiet sample reviews.

- Audience: Indie perfume houses, beauty and body-care single-product brands, candle and scent studios, and the designers building their launch pages.
- Goal: Sell the mood before the molecule: let the imagery and the unfolding pyramid carry the visitor down the page, then convert gently through a size picker and a discovery-set offer — with demo buttons that promise nothing.
- Tone: Soft, sensual, a little literary — short poetic lines that describe feelings, not chemistry; honest about being sample copy.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL), @fontsource/josefin-sans (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest perfume-product-page -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/cormorant-garamond and @fontsource/josefin-sans as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors blush #F7E4E0, blushdeep #EFCFC9, silk #FDF8F5, amber #C9863B, amberlight #E0B273, iris #9C7F96, cocoa #4A3833, rosesmoke #A98F88; fontFamily display 'Cormorant Garamond' and sans 'Josefin Sans'; radius: pill 999px and panel 18px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/ScentPyramid.tsx: the pyramid drawn in SVG, viewBox 0 0 600 420 — apex at (300,30), base from (120,390) to (480,390), split by hairlines at y=150 and y=270 into three bands: TOP fills blush #F7E4E0, HEART fills blushdeep #EFCFC9, BASE fills a linear gradient amberlight #E0B273 → amber #C9863B; every band stroked by hairlines of amber at 40% opacity; each band has two ingredient chips floating beside it (pill, silk ground, cocoa text) connected by 1px amber leader lines.
  - src/lib/motion.ts: shared variants — reveal (opacity 0→1, y 22→0, 800ms cubic-bezier(0.16,1,0.3,1), 100ms stagger, whileInView once), unfold (scaleX 0→1, origin center, 900ms ease-out) — with useReducedMotion rendering the pyramid fully unfolded and static, and plain 200ms fades elsewhere.
  - Silk gradient utility in src/index.css: .bg-silk — a soft linear-gradient(150deg, #FDF8F5 0%, #F7E4E0 55%, #EFCFC9 100%) used as the page's ground wash behind sections.
  - Keep every user-facing string (house, fragrance, tagline, mood captions, note layers, sizes and prices, set copy, reviews, how-to-wear lines) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — [PERFUME], Eau de Parfum</title> plus a drawn-in-code favicon.svg (a single amber droplet on the blush ground); no other meta work.

## Variables
- [BRAND] — House name (default: "Maison Verane"). Invented perfume house for the wordmark, page title and label lines.
- [PERFUME] — Fragrance name (default: "Aurelle"). The single fragrance this page sells — hero headline, buy section and title.
- [PRICE_MID] — Mid-size price (default: "$145"). The 50 ml default size's price in the size picker; the small and large sizes price from content.ts around it.
- [SET_PRICE] — Discovery set price (default: "$32"). The upsell card's sample price for the three-vial discovery set, credited toward a full bottle.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/perfume-product-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Blush `#F7E4E0` — Page ground — soft pink porcelain, the whole site's wash.
- Blush deep `#EFCFC9` — Alternate surfaces, the pyramid's heart band, chip hovers.
- Silk `#FDF8F5` — Panels, cards, ingredient chips, size chips at rest — warm near-white.
- Amber `#C9863B` — The primary accent: CTAs, active size chip, hairline golds, the pyramid base, leader lines.
- Amber light `#E0B273` — Hover and gradient end; underline accents on links.
- Iris mauve `#9C7F96` — Secondary accent: quiet links, the heart-note chips, captions' hover.
- Cocoa `#4A3833` — Primary text — warm dark brown, never black.
- Rose smoke `#A98F88` — Secondary text: intros, captions, sample notes.

### Typography
- Display — fragrance name, headlines, prices (airy serif, often italic): Cormorant Garamond (OFL), weights 500/600
- Text — body, labels, chips (airy geometric sans, tracked labels in uppercase): Josefin Sans (OFL), weights 300/400

### Layout & motion
- Spacing: Soft and generous: sections py-32 (128px) desktop / py-20 mobile; content max-w-5xl — a narrow, intimate column; the hero keeps 120px clear around the bottle; body copy capped at 48ch; hairlines are amber at 35% opacity.
- Radius: Round and gentle: 999px pills on buttons, chips and size pickers; 18px on panels, images and the upsell card; nothing square.
- Motion: Hero: the bottle photograph parallaxes at 0.06 of scroll and slowly scales 1.03→1 over 2.5s on load; the fragrance name fades up 300ms behind it.
- Motion: Scent pyramid: each band unfolds with scaleX 0→1 from center (900ms ease-out) as it crosses 40% of the viewport, top first, then heart, then base; each band's ingredient chips slide in beside it 150ms later, connected by leader lines that draw in (500ms).
- Motion: Mood strip: the three photographs fade up staggered 120ms and drift 0.04 parallax; captions fade last.
- Motion: Size picker: switching chips cross-fades the price line (300ms) and fills the active chip amber with silk text (250ms); the demo bag button shows its inline note with a 300ms fade.
- Motion: Reveals: sections, quotes and cards fade up (y 22→0, 800ms cubic-bezier(0.16,1,0.3,1)) with 100ms stagger via Motion whileInView, once.
- Motion: prefers-reduced-motion: the pyramid renders fully unfolded and static with all chips visible, parallax and load-scale off, every reveal a plain 200ms opacity fade.
- Imagery: One warm studio session: soft editorial still-life photography — the glass bottle with a strictly blank label on draped blush silk, folds of blush satin, rough amber resin, a single iris blossom, the amber stopper in macro, three sample vials — all in the same blush-and-amber grade, one warm diffused light, soft rose shadows, airy high-key warmth, gentle filmic softness, shallow depth of field. No people, no readable text anywhere, no logos. The six photographs are generated by VibeFather and downloaded into public/images.

## Pages & Sections
### [BRAND] — [PERFUME], Eau de Parfum (`index.html`)
1. **Header** — Fixed top bar, 64px, transparent over the hero. Left: the [BRAND] wordmark in Cormorant Garamond 600 18px cocoa, uppercase, tracked 0.22em. Right (desktop): anchor links 'The scent', 'Notes', 'How to wear', 'Worn by' in Josefin Sans 300 13px uppercase tracked 0.14em rose smoke → cocoa on hover; then a quiet pill 'Shop the bottle' (amber ground, silk text) → #buy. Mobile: wordmark + pill + lucide menu/x toggle opening a silk panel with the four links stacked.
   Layout: position fixed, z-40; after 80px of scroll the bar gains the silk ground at 85% opacity, a soft blur and a 1px blush-deep bottom hairline (300ms).
   Motion: Ground and hairline fade in at the threshold; mobile panel slides down 250ms; link hovers shift color 200ms.
2. **Hero — the bottle** — Split hero. Left: label in Josefin 300 12px uppercase tracked 0.2em iris: 'EAU DE PARFUM · [BRAND]'; the fragrance name in Cormorant Garamond 500 italic, clamp(4.5rem, 10vw, 8rem), cocoa: '[PERFUME]'; descriptor line, Cormorant 500 24px rosesmoke: 'an amber that whispers before it warms.'; body Josefin 300 16px rosesmoke max-w 44ch: 'Orris and cashmere wood folded into amber — worn close, noticed late. Batch-made in small numbers; every note and price on this page is sample copy for the demo.' CTAs: 'Choose your size' (amber pill, silk text) → #buy; 'Read the notes' (iris link with amber-light underline) → #notes. Right: public/images/bottle-hero.webp, a heavy glass bottle on draped blush silk with amber refractions, in a 24px-radius frame bleeding to the right viewport edge.
   Layout: 12-column grid, min-h 92vh: text columns 1–6 (self-center), photograph columns 7–12 full-height (object-cover, aspect 3:4 crop). Mobile: photo first (420px), text below.
   Motion: The bottle photo scales 1.03→1 over 2.5s and parallaxes at 0.06; label, name, descriptor, body and CTAs fade up in sequence (100ms stagger from 300ms); reduced motion: static photo, single fade.
3. **The mood strip** — Label 'THE MOOD' in amber; one line, Cormorant italic 24px cocoa: 'Lamplight on silk, an hour after the door closes.' Three photographs in a row, each with a tiny Josefin caption beneath: mood-silk.webp — 'silk'; mood-amber.webp — 'amber resin'; mood-iris.webp — 'iris'. Hairline amber rules close the strip.
   Layout: 3-column grid (stacked on mobile), 24px gaps; images 4:3, 18px radius; captions 12px uppercase tracked rose smoke, centered.
   Motion: Photographs fade up staggered 120ms with a 0.04 parallax; captions fade in last; reduced motion: plain fades.
4. **The notes — scent pyramid** — id=notes. Label 'THE NOTES'; headline Cormorant 26px cocoa: 'Three hours, three accords.' The ScentPyramid centered, with each band's ingredients and a poetic line revealed beside it: TOP — 'the first ten minutes' — 'Pink pepper · bergamot chiffon · pear skin — bright, a little cheeky.' HEART — 'the hours that follow' — 'Orris butter · warm rose · saffron thread — soft skin, lamplight.' BASE — 'what stays on the scarf' — 'Amber resin · cashmere wood · vanilla husk — quiet, sweet, gone too soon.' Footnote Josefin 12px rose smoke: 'Eau de parfum, sample concentration; notes are invented sample copy.'
   Layout: Pyramid 600px wide centered; the three poetic lines sit in a left column that scrolls beside it (label + line per layer, aligned to each band's activation); on mobile the pyramid stacks above the three lines.
   Motion: Bands unfold top→heart→base as they cross 40% of the viewport (900ms each); ingredient chips slide in 150ms later with drawing leader lines; the matching poetic line brightens from rose smoke to cocoa when its layer activates; reduced motion: pyramid fully unfolded, all lines cocoa, static.
5. **How to wear** — Label 'HOW TO WEAR'; two quiet rules on hairlines, Cormorant 22px cocoa with Josefin 14px rose smoke beneath: 'One spray on the wrist, one behind the ear — never rub.' — 'warmth carries amber; friction flattens it.' / 'Give it twenty minutes on skin before you judge it.' — 'the pear leaves, the orris arrives, the amber stays.' A closing hairline note, Josefin 12px rose smoke: 'Sample guidance for the demo.'
   Layout: Two 6-column halves separated by a 1px amber hairline at 35%; mobile stacks.
   Motion: Rules fade up staggered 150ms; nothing else moves.
6. **The bottle — size picker and set** — id=buy. Label 'THE BOTTLE'; headline Cormorant: 'Choose your size.' Left: three size chips (silk pills, active = amber ground with silk text): '10 ML — $48' / '50 ML — [PRICE_MID]' (default) / '100 ML — $215'; beneath, the price line in Cormorant 600 32px cocoa that updates with the selection, and a pill button 'Add to bag — demo' (amber) with a lucide shopping-bag icon; clicking it shows an inline note (300ms fade, Josefin 13px rose smoke): 'Demo button — this template has no checkout. Nothing is for sale.' Beside the chips, bottle-detail.webp as a 1:1 macro of the amber stopper (18px radius). Right, the upsell card on silk with an 18px radius: 'The discovery set' in Cormorant 24px, set-trio.webp (1:1) of three vials, copy Josefin 300 15px rosesmoke: 'Three 2 ml sprays, [SET_PRICE] — fully credited toward your first full bottle.' and a quiet link 'Add the set — demo' that shows the same inline note.
   Layout: 12-column grid: picker + detail photo columns 1–7 (photo 4 cols), upsell card columns 8–12. Mobile stacks picker, photo, then card.
   Motion: Chips cross-fade the price (300ms) and fill amber (250ms); the inline note fades in and stays; card fades up; reduced motion: color-only transitions.
7. **Worn by — reviews** — Label 'WORN BY'; three quiet quote lines, Cormorant italic 22px cocoa, each with a Josefin 13px rose smoke attribution: 'It smells like the inside of a jewelry box.' — Rowan M. / 'Warm without being loud — my winter signature.' — Amara T. / 'The pear opening is joy; then it goes soft and amber.' — Dee P. Footnote: 'Invented reviews — sample copy.'
   Layout: Three quotes in a single column with 1px amber hairlines between, max-w-3xl centered; stacked always.
   Motion: Quotes fade up staggered 160ms.
8. **Footer** — 1px blush-deep top hairline. Left: the [BRAND] wordmark and one line Josefin 300 13px rose smoke: 'An invented house — every note, price and review on this page is sample copy.' Right: anchor links 'The scent · Notes · How to wear · The bottle' in cocoa; optional [CREDIT] link. No dates, no social row.
   Layout: py-12, max-w-5xl, flex row wrapping to column on mobile.
   Motion: None.

## Assets
- image: Download https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/bottle-hero.webp to public/images/bottle-hero.webp. Alt: 'A heavy glass perfume bottle with a blank label standing on draped blush silk, amber light refracting through the glass.' Used as the hero anchor (3:4 crop). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/mood-silk.webp to public/images/mood-silk.webp. Alt: 'Folds of blush silk satin spilling across the frame in warm light.' Mood strip (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/mood-amber.webp to public/images/mood-amber.webp. Alt: 'Rough golden amber resin pieces glowing honey-warm on an ivory surface.' Mood strip (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/mood-iris.webp to public/images/mood-iris.webp. Alt: 'A single iris blossom resting on blush silk in mauve and amber tones.' Mood strip (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/bottle-detail.webp to public/images/bottle-detail.webp. Alt: 'Macro of the amber glass stopper and bottle shoulder with a blank label edge.' Used beside the size picker (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/set-trio.webp to public/images/set-trio.webp. Alt: 'Three small glass sample vials with blank labels in a row on blush silk.' Used in the discovery-set card (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: lucide-react (ISC) via npm — shopping-bag on the demo bag button, arrow-down in the hero's secondary CTA, arrow-right in links, menu and x for the mobile header. No other iconography: no emoji, no star ratings, no bottle logos.
- font: @fontsource/cormorant-garamond (OFL, weights 500 and 600, plus the 500 italic) and @fontsource/josefin-sans (OFL, weights 300 and 400), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and the six photographs in ASSETS.md at the project root: path, source, generator or author, license.

## Don'ts
- No backend, no network calls, no analytics, no checkout or payment: the buy buttons are demo anchors that show an inline 'nothing is for sale' note, and all prices are invented sample copy.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react, photographs from public/images; never hotlink, never use Unsplash/Pexels/Pixabay or placeholder-image services.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ under 20 MB by compressing each photograph to ≤ 350 KB WebP.
- Single page with anchor navigation only; must render cleanly at 1440×900 and 390×844 with zero console errors, and respect prefers-reduced-motion (pyramid fully unfolded and static, parallax and load-scale off, plain fades).
- No real perfume houses, fragrances, noses or ingredient trademarks: the house, scent name, notes, prices and reviews are invented, and [BRAND]/[PERFUME] are used everywhere names appear.
- No ingredient, dermatological or performance claims: copy stays poetic and sample-honest — no 'long-lasting', 'hypoallergenic', 'clean' or clinical language, and the concentration line stays labeled sample.
- Photographs show the bottle, silk and botanicals only — no people; every label is strictly blank (no readable text on any bottle or vial), no logos anywhere; if a generated image ever shows a face or writing, replace it.
- No real dates or years: reviews carry no dates, and no publish or launch dates appear anywhere.
- Keep the soft-sensual direction locked: blush grounds with silk-soft gradients, one amber accent, iris-mauve secondary, cocoa text, Cormorant over Josefin, pills and 18px radii; no dark mode, no neon, no hard shadows, nothing faster than a 300ms interface transition.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [BRAND], [PERFUME], [PRICE_MID] or [SET_PRICE] change, rewrite the notes, mood captions and reviews to fit the new product instead of leaving amber perfume copy under a candle.
- List every third-party file (two Fontsource families, lucide icons, six photographs) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/perfume-product-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
