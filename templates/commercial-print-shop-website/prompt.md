# Commercial Print Shop Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the commercial print shop run by press foreman [FOUNDER] in [CITY], [EXPERIENCE] of ink under the fingernails. The page speaks process color — CMYK accents, registration marks and halftone fields drawn in code — with a product catalog (business cards, flyers, banners, stickers, booklets), an instant quote calculator with visible math, a file-prep checklist, a simulated upload chip, turnaround cutoffs and pickup-or-delivery logistics. Photos show paper stacks and press details. All prices and specs are invented sample data.

- Audience: Primary: small businesses and organizers around [CITY] buying print weekly or once a year — both want a number before a conversation. Secondary: sign makers and promo houses re-pointing the calculator's table.
- Goal: Move a visitor from 'how much for 500 flyers' to a submitted quote request: price it in four taps, trust the specs via the file-prep guide, attach the 'file' and send — with the calculator's exact configuration riding along.
- Tone: Press-floor confidence — brisk, exact, lightly ink-stained humor. Numbers and cutoffs stated like facts because they are.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/archivo-black (OFL-1.1), @fontsource/ibm-plex-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Archivo Black' and fontFamily.body 'IBM Plex Sans'.
  - Self-host Archivo Black (400) and IBM Plex Sans weights 400, 500, 600, 700 through @fontsource/archivo-black and @fontsource/ibm-plex-sans, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals and the quote tween; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, product catalog with specs, the full quote table (unit base per product×size, paper factors, quantity breaks, turnaround multipliers), file-prep items, cutoffs, delivery copy. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Quote table, exactly: unit base at 100 qty and size factor — business cards: 3.5×2 base $0.55, square ×1.15, slim ×1.05; flyers: 4×6 base $0.28, 5.5×8.5 ×1.9, 8.5×11 ×2.8; banners: 2×6 base $22, 3×8 ×2.1, 4×8 ×2.6; stickers: 3" circles base $0.65, squares ×1.05, kiss-cut sheet ×1.4; booklets: 8 pages base $2.40, 16 pages ×1.6, 32 pages ×2.4. Paper/stock chips per product with factors: cards 14 pt matte ×1.0 / 16 pt matte ×1.25 / 16 pt silk +UV ×1.45; flyers 100 lb gloss ×1.0 / 100 lb matte ×1.08 / 80 lb uncoated ×0.95; banners 13 oz vinyl ×1.0 / 15 oz ×1.18 / mesh ×1.3; stickers matte ×1.0 / gloss ×1.05 / holographic ×1.9; booklets 100 lb text ×1.0 / 80 lb uncoated ×1.05. Quantity breaks: 100 ×1.0, 250 ×0.85, 500 ×0.70, 1,000 ×0.55, 2,500 ×0.42. Turnaround: Standard 3 working days ×1.0, Next-day ×1.35, Same-day ×1.8. Price = base × sizeFactor × stockFactor × qty × qtyBreak × turnaround, rounded to whole dollars; the result panel prints each factor ('3.5×2 · 14 pt matte', '$0.55 × 1.00 × 500 × 0.70', 'Next-day × 1.35') and the per-unit final. Persist inputs to localStorage under [BRAND_SLUG]-quote.
  - Draw the CMYK devices in code: a registration mark (crosshair circle) as bullets and the logomark; a four-swatch CMYK bar under the header; halftone dot fields (CSS radial-gradient patterns) at 6% opacity behind the calculator and footer bands; headline misregistration via text-shadow (magenta left 2px, cyan right 2px) on display headings only.
  - The file-upload chip is honestly simulated: a dashed drop-chip with Upload icon; clicking attaches a fixed sample chip 'menu-flyers-v3.pdf · 8.2 MB' with an X to remove and a 12px note 'Demo attachment — nothing uploads.' No real file input that sends data.
  - Use only these lucide-react icons: Phone, Upload, FileText, Ruler, Layers, Scissors, BookOpen, Timer, Truck, Store, CheckCircle2, ChevronRight, ArrowRight, Menu, X, Calculator, Package, Droplets.
  - Persist the quote config and the quote request to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the five generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the black square with the registration-mark crosshair) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Shop name (default: "Regmark Print Co."). Invented shop name; a registration-mark logomark is derived from it in code.
- [CITY] — City (default: "Ironbridge"). Where the shop is; appears in hero, pickup copy and footer.
- [FOUNDER] — Foreman (default: "Sal Dominguez"). Invented press foreman, named in hero and file-prep copy.
- [PHONE] — Phone (default: "(555) 887-2214"). Counter line; links as tel: with digits only.
- [EXPERIENCE] — Years (default: "23 years"). Plain phrase like '23 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/commercial-print-shop-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#F9F9F7` — Page ground
- Black `#161616` — Text, footer ground, structure
- Cyan `#00AEEF` — Process accent 1: links, size chips, calculator highlights
- Magenta `#EC008C` — Process accent 2: CTAs, tags, registration shadows
- Yellow `#FFF200` — Process accent 3: fills and tags on black only — never small text on white
- Cyan tint `#E5F6FD` — Selected chips and panels
- Steel `#5B5F63` — Secondary text
- Hairline `#E4E4E0` — Hairline rules and card borders

### Typography
- Display: headlines, prices: Archivo Black (OFL), weights 400
- Body: paragraphs, controls, tables: IBM Plex Sans (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers sit under a CMYK swatch rule with a 13px letter-spaced steel eyebrow and an Archivo Black title at clamp(26px, 3vw, 42px); cards 24px padding, 20px gaps.
- Radius: Die-cut corners: 2px on cards and chips, 0 on buttons — registration-sharp; photos 2px with a 1px black border.
- Motion: Fade-rise reveals (12px, 450ms, 50ms stagger) via useInView, once — press-brisk.
- Motion: The quote price tweens 150ms on change; factor rows highlight cyan-tint as they recalculate; the upload chip scales in from 0.96.
- Motion: Halftone fields and misregistration shadows are static; nothing pulses or slides.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Ink-and-paper photography from one shoot: a press detail with CMYK ink rollers, stacks of fresh paper, fanned printed sheets showing rich process color, die-cut sticker sheets with abstract art, and a bindery corner with saddle-stitched booklets — no people, no readable job tickets, no brand marks.

## Pages & Sections
### [BRAND] — Print shop in [CITY] (`index.html`)
1. **Header and hero** — Header (paper at 95% with backdrop blur, 68px): registration-mark logomark + [BRAND] in Archivo Black 16px black; nav anchors Products, Calculator, File prep, Turnaround, Contact; right: phone chip Phone icon + [PHONE] (tel:) and magenta pill 'Get a quote'. A 4px CMYK bar (equal cyan/magenta/yellow/black segments) runs under the header. At 390px: logomark + name, phone icon button, menu button on one line; anchors in a paper dropdown. Hero: left copy (columns 1–6): eyebrow magenta 'COMMERCIAL PRINT — [CITY], SAME-DAY CAPABLE'; H1 Archivo Black with misregistration shadows 'THE PRICE IS ON THE PAGE.'; paragraph steel 'Foreman [FOUNDER] runs two presses and a bindery — [EXPERIENCE] of ink, pressure and deadlines. The calculator below prices like we do: every factor visible.'; magenta pill 'Run the calculator' (anchor) and black-outline pill 'See products' (anchor); chips: 'Same-day by 11 a.m.' · 'Counter pickup' · 'File check, free'. Right (columns 7–12): the press-detail photo in a 2px black-border frame 4:3 with a yellow-on-black sticker chip overlapping top-right: 'CMYK + 1 spot, no problem.'
   Layout: 12-column grid; chip offset -14px; mobile stacks copy then photo.
   Motion: Photo settles from 1.03; copy rises 12px staggered 60ms.
2. **Product catalog** — Paper band. Eyebrow 'PRODUCTS' (magenta); title 'Five things, printed properly.' Five cards (white, hairline): 'Business cards' — '3.5×2 and friends · 14–16 pt · matte, silk or +UV' — 'from $55 / 100'; 'Flyers' — '4×6 to 8.5×11 · 80–100 lb · gloss, matte, uncoated' — 'from $24 / 100'; 'Banners' — '2×6 to 4×8 · 13–15 oz vinyl or mesh · hemmed & grommeted' — 'from $22 each'; 'Stickers' — '3" circles to kiss-cut sheets · matte, gloss or holo' — 'from $65 / 100'; 'Booklets' — '8–32 pages · 100 lb text covers · saddle-stitched' — 'from $240 / 100'. Each card: a small code-drawn line icon (Layers, FileText, Ruler, Scissors, BookOpen) and a cyan link 'Quote this →' that presets the calculator.
   Layout: Five cards: 3+2 wrapped rows (2-column under 900px, 1-column under 640px).
   Motion: Cards rise 12px staggered 60ms.
3. **Instant quote calculator** — Black band with a 6% halftone field, the signature section. Eyebrow 'INSTANT QUOTE' (yellow); title 'FOUR CHOICES, ONE NUMBER.' Controls (white panel, left, 6 columns): product chips (the five); size chips per product; paper/stock chips per product; quantity chips (100 / 250 / 500 / 1,000 / 2,500); turnaround chips (Standard · 3 days / Next-day / Same-day). Result panel (black, yellow border, right, 6 columns): the price in Archivo Black yellow at clamp(36px, 4vw, 56px), e.g. '$97'; per-unit line '$0.19 / piece'; the factor list in 13px cyan/white: '3.5×2 · 14 pt matte', '$0.55 × 1.00', '× 500 × 0.70', 'Next-day × 1.35'; footnote 12px steel 'Sample pricing for this template — your file check may adjust specs.'; magenta pill 'Send this quote' scrolling to the request form with the configuration attached. Inputs persist.
   Layout: 6/6 columns desktop; stacked mobile; result panel non-sticky.
   Motion: Price tweens 150ms; factor rows flash cyan-tint 120ms on change; no layout shift.
4. **File prep guide** — Paper band. Eyebrow 'FILE PREP' (cyan); title 'Five checks before you upload.' Checklist rows with registration-mark bullets: 'Bleed — 0.125" on every cut edge' — 'trim lines are where the blade lands; bleed is what keeps it pretty'; 'CMYK, not RGB' — 'convert once with us; the press can't guess your green'; 'Fonts outlined' — 'or embed them; we don't have your cousin's free fonts'; '300 dpi at final size' — 'upscaling a screenshot is how 500 flyers become 500 regrets'; 'Dielines for cut work' — '1 pt stroke on its own layer; kiss-cut or die, we'll match it.' Footer line steel 13px: 'Not sure? Send it anyway — [FOUNDER]'s team checks every file free, and tells you before printing.'
   Layout: Rows max-width 780px, hairline dividers.
   Motion: Rows fade in 50ms apart.
5. **Turnaround promise** — Paper band. Eyebrow 'TURNAROUND' (cyan); title 'Cutoffs, not vibes.' Three cards: 'Same-day' — 'in by 11 a.m., out by 5:30 p.m.' — 'cards, flyers, stickers; files that pass check by 11'; 'Next-day' — 'in by 4 p.m., out the next working day' — 'everything except large-format laminations'; 'Standard' — '3 working days' — 'the friendly price; booklets and banners sometimes 4'. Footer line: 'A press goes down sometimes; if it does, you hear it from us before the deadline does.' with the paper-stack photo as a wide banner.
   Layout: Three cards in a row (1-column under 900px); banner 21:9 beneath.
   Motion: Cards rise 12px staggered 70ms.
6. **Pickup and delivery** — Paper band. Eyebrow 'GETTING IT' (cyan); title 'Counter, van, or courier.' Three rows: 'Counter pickup' — Store icon — 'Walk in, walk out; most orders boxed and waiting in 5 minutes.'; 'Local delivery' — Truck icon — 'Free inside 10 miles of the shop on orders over $150; scheduled morning runs.'; 'Rush courier' — Timer icon — 'When 5:30 is too late; we hand it to a courier and you get a door time.'
   Layout: Three rows max-width 720px; icons in cyan-tint squares.
   Motion: Rows fade in 60ms apart.
7. **Quote request** — Black band with halftone field. Eyebrow 'SEND THE JOB' (yellow); title 'CONFIGURED. ATTACHED. SENT.' Form (white panel, max-width 760px): a config chip at top if the calculator ran ('500 flyers · 5.5×8.5 · 100 lb gloss · Next-day ×' with detach); the simulated upload chip (dashed, 'menu-flyers-v3.pdf · 8.2 MB ×' after click, 12px note 'Demo attachment — nothing uploads.'); Name (required), Company, Phone (required), Email (required); 'Notes for the press' textarea ('e.g. match the navy from last run, PO attached'); magenta pill 'Request this quote'. Validation inline (2px magenta borders, 13px notes), no native popups. Success: CheckCircle2 magenta, 'Quote on the press desk.' Archivo Black, 'We confirm the number and the cutoff within two working hours — file checks come back with screenshots, not shrugs. This demo stores your request in this browser only.' and an outline pill 'Quote another'. Persists to localStorage.
   Layout: Two-column field rows desktop, 1-column mobile with 96px bottom padding clear of the sticky bar.
   Motion: Success crossfades with a 12px rise; upload chip scales from 0.96.
8. **Footer** — Black band with a 6% halftone field and the CMYK bar repeated at its top. Column 1: registration logomark + [BRAND] Archivo Black white 15px; 13px #9A9A9A lines '318 Gear Avenue, Unit 2, [CITY]', '[PHONE] (tel:)', 'Mon–Fri 7:30a–5:30p · Sat 9a–1p'. Column 2 'Shop': anchors Products, Calculator, File prep, Turnaround. Column 3 'Small print': 'Sample site for a template — prices, products and cutoffs invented', optional [CREDIT] link in yellow. Mobile sticky bar (under 768px): fixed bottom black 96% + blur; magenta pill 'Call' (tel:) and white-outline pill 'Quote' (anchor), safe-area padding.
   Layout: Footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Press detail. Download https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/hero-press.webp to public/images/hero-press.webp. Alt: 'A press detail with CMYK ink rollers.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Paper stack. Download https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/paper-stack.webp to public/images/paper-stack.webp. Alt: 'Fresh stacks of paper waiting for the press.' The turnaround banner. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Printed sheets. Download https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/printed-sheets.webp to public/images/printed-sheets.webp. Alt: 'Freshly printed sheets fanned out in rich process color.' Supporting image near the catalog. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Sticker sheets. Download https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/sticker-sheets.webp to public/images/sticker-sheets.webp. Alt: 'Die-cut sticker sheets with abstract colorful art.' Supporting image near the calculator. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Bindery. Download https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/bindery.webp to public/images/bindery.webp. Alt: 'A bindery corner with saddle-stitched booklets stacked.' Supporting image near the products or contact. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup, plus original code-drawn CMYK devices: registration marks, the swatch bar and halftone fields. No other icon source.
- font: Archivo Black (OFL) and IBM Plex Sans (OFL) self-hosted through @fontsource/archivo-black and @fontsource/ibm-plex-sans; no CDN font loading.

## Don'ts
- No real print franchises, press or paper brands and their trademarks; equipment and stocks stay generic (14 pt matte, 13 oz vinyl).
- No real design-software or courier names used as endorsements; file formats and rush delivery stay functional and generic.
- All prices are sample data labeled as such; the calculator prints its factors and never poses as a binding quote.
- The upload chip is simulated: no real file input that sends data, no FormData, no network — the fixed sample chip and honest note ship in the build.
- Yellow is a fill-and-tag accent on black only — never small text on white; body text holds AA contrast everywhere.
- No dates tied to the real clock: turnaround is in working days and clock cutoffs only, no calendar dates, no copyright year.
- Forms are local-only samples: no submit to any server, no APIs, no analytics. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the five generated photos and code-drawn SVG/CSS art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- One price source: the calculator, catalog 'from' prices and copy all derive from the content.ts table; never hard-code a second copy of a number.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, tweens, flashes and pops, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the quote form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/commercial-print-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
