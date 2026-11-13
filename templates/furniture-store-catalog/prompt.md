# Furniture Store Catalog

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A two-page catalogue for [STORE], a furniture store and workshop in [CITY] — [CRAFT_NOTE], [DELIVERY_NOTE]. It must feel like a showroom: room navigation, a materials filter, product pages with drawn dimension diagrams and swatches, a bag drawer, a craft strip and a store locator. Pages: index.html, product.html?p=<slug> (first product without one). Everything runs in the browser; nothing is submitted anywhere.

- Audience: First-home buyers 28–45 and upgraders who measure their hallways twice. They want dimensions they trust, materials named, and delivery terms without asterisks.
- Goal: Fill the bag and bring visitors to the showroom. Within ten seconds a visitor sees a styled room and the room navigation; within two minutes they've opened a product page and checked the dimensions diagram against their tape measure.
- Tone: Workshop-plain: exact millimetres, honest materials, gentle pride. One joke about instructions.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/zilla-slab (OFL-1.1), @fontsource-variable/archivo (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Two real HTML pages at the project root: index.html (entry src/main-index.tsx) and product.html (entry src/main-product.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), product: resolve(__dirname, 'product.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './product.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (gallerywhite, linen, card, walnut, walnut-deep, walnut-mist, ink, slategray, slate-blue, rule, good) and fontFamily display ['Zilla Slab', 'Georgia', 'serif'], sans ['Archivo Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 6px and add maxWidth { container: '1240px' }.
  - In src/fonts.ts import '@fontsource/zilla-slab/400.css', '@fontsource/zilla-slab/600.css' and '@fontsource-variable/archivo'; import src/fonts.ts and src/index.css from both entry files.
  - File layout: src/content.ts (every string, product, dimension, finish, showroom, hour and image path, typed), src/lib/brand.ts (storeSlug = [STORE] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = storeSlug without hyphens + '.com', phoneDigits for tel:), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with storeSlug + ':'), src/lib/product.ts (reads ?p=<slug>, returns the product or the first — never a not-found), src/lib/filters.ts (applyFilters(products, { room, material })).
  - State: src/store/bag.ts is a tiny external store (useSyncExternalStore) holding lines { slug, finish, qty } plus drawer open state, persisted to localStorage key storeSlug + ':bag'.
  - Components in src/components/: Header.tsx (with BagButton), Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, BagDrawer.tsx (LineRow.tsx); index: Hero.tsx, RoomNav.tsx, FilterBar.tsx (RoomChips.tsx, MaterialChips.tsx), ProductGrid.tsx (ProductCard.tsx), CraftStrip.tsx, Locator.tsx (ShowroomCard.tsx); product: ProductHero.tsx (Gallery.tsx, SwatchPicker.tsx), DimensionsDiagram.tsx (inline SVG with dimension callouts), Details.tsx (Materials.tsx, Care.tsx, Delivery.tsx), Related.tsx. src/pages/Home.tsx and Product.tsx compose them.
  - The DimensionsDiagram is hand-rolled inline SVG: a to-scale front and side elevation of the piece (drawn geometry, not a photo), dimension callout lines with arrows and millimetre labels (Fraunces-free: Archivo tabular), a small scale bar. Finish swatches crossfade the elevation's wood fill.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. Both HTML files: lang en, <meta name='theme-color' content='#FAF8F4'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index.html '<title>[STORE] — Furniture made in [CITY]</title>', product.html '<title>Catalog — [STORE]</title>' (the product page sets document.title on load).
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the two HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [STORE] — Store name (default: "Oakline & Co"). Invented store name. Used in the wordmark, titles, footer, email (hello@ + storeSlug without hyphens + '.com') and localStorage keys. Never a real retailer.
- [CITY] — City (default: "Denver, Colorado"). Where the store and workshop are. Used in the title, hero, locator and footer. Real cities fine; showroom streets invented.
- [CRAFT_NOTE] — Craft note (default: "mortise-and-tenon, no shortcuts"). One lowercase phrase naming the joinery or craft philosophy. Drives the hero line and the craft strip. Keep it workshop-true.
- [DELIVERY_NOTE] — Delivery note (default: "two-person delivery included"). One lowercase phrase about delivery terms. Used in the product page and locator. Keep it plain and generous-sounding.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/furniture-store-catalog in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Gallery White `#FAF8F4` — Page background on both pages.
- Linen `#F0EBE0` — Alternate section background (Craft, Locator), chips, hover fill.
- Card `#FFFFFF` — Product cards, the bag drawer, swatch panel.
- Walnut `#5B4231` — Primary: headlines' accents, primary buttons, selected chips, focus ring.
- Walnut Deep `#402E21` — Hover and pressed, footer background.
- Walnut Mist `#EAE1D5` — Selected chip fills, icon wells, diagram wood fill base.
- Ink `#2C2925` — Headlines and body ink, icon color.
- Slate Gray `#6B655B` — Secondary text, captions, eyebrows, dimension labels.
- Slate Blue `#4A6B7C` — The one cool accent: dimension arrows and labels, swatch selection ring, bag badge, focus-visible extras.
- Rule `#E2DBCC` — 1px hairlines, card borders, input borders, grid lines.
- Good `#5E7D4E` — In-stock ticks, bag check, showroom open dot.

### Typography
- Display: H1, H2, H3, product names, prices, the wordmark — Zilla Slab, workshop serif: Zilla Slab (OFL), weights 400/600
- Text and UI: body, eyebrows, buttons, forms, captions, dimension labels; tabular numerals for dimensions and prices: Archivo (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76% under 1024px, 60px under 640px. Type scale: H1 clamp(42px, 6.2vw, 78px) Zilla 600, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Zilla 600; product names Zilla 600 22px; prices Zilla 600 24px Walnut tabular; lead Archivo 400 17.5px / 1.65 Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Archivo 600 12px uppercase letter-spacing 0.16em Slate Gray; caption 13px Slate Gray. Buttons: height 50px, Archivo 600 14px. Primary: Walnut fill, Card text. Secondary: 1px Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Walnut border. Focus ring everywhere: 2px Walnut outline with 3px offset.
- Radius: 6px on cards, buttons, inputs, chips and photos. 999px only for pills, chips and the bag badge.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and gallery crossfades; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the drawer and swatch swaps. Workshop-steady.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Motion: Hero: the room photo scales 1.03→1.0 over 2200ms; the H1 rises; a dimension-line detail under the eyebrow draws once.
- Motion: Grid filtering: cards use Motion layout popLayout (200ms out / 380ms glide); the live count crossfades; empty state: 'Nothing in that combination — the catalogue grows quarterly.'
- Motion: Product cards: hover lifts 3px and the material chip fills Walnut.
- Motion: Product gallery: thumbnails swap the main photo with a 240ms crossfade.
- Motion: DimensionsDiagram: the elevation draws (stroke-dashoffset) on view; dimension arrows and labels fade in last; swatch change crossfades the wood fill (Slate Blue ring marks the selected finish).
- Motion: Bag: adding pops the badge 1→1.3→1; the drawer slides from the right 420ms --ease-out; qty changes count the subtotal over 300ms; the checkout stub confirms with a drawn Slate Blue 'ORDER LIST' stamp; persisted.
- Motion: Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no scales, draws, counts or glides; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Real styled-room photography, all six made for this template in one consistent style: gallery-white walls, walnut and oak pieces, slate-blue accents, soft daylight — the furniture is the star. Never a person, never a recognizable designer silhouette. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 6px corners, no shadow; photos on Gallery White get a 1px Rule outline. Captions in Archivo 13px Slate Gray. Drawn in code: the favicon, room nav glyphs, the dimensions diagram elevations, swatch chips and the stamp. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Catalog (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([STORE] = Oakline & Co, [CITY] = Denver, Colorado, [CRAFT_NOTE] = mortise-and-tenon, no shortcuts, [DELIVERY_NOTE] = two-person delivery included'). Put every string and number in src/content.ts and render from it; both pages share one content file. If any variable value differs, rewrite the hero, all eight products and their dimensions/finishes, craft strip and locator so they are specific and believable for the new store, keeping the same structure and counts (8 products, 3 finishes each, 3 showrooms). All pieces, dimensions and showrooms are invented. Products (slug · name · room · price · dims W×D×H mm · finishes): 'harlow-sofa' Harlow Three-Seat Sofa living $2,190 2140×920×820 'oak/linen, oak/walnut leather, walnut/linen'; 'mercer-dining-table' Mercer Dining Table dining $1,480 2000×950×750 'oak, walnut, smoked oak'; 'June-bed' Juniper Bed Frame bedroom $1,690 queen 1640×2100×1050 'oak, walnut, ash'; 'atlas-desk' Atlas Writing Desk office $980 1400×700×750 'oak, walnut, oak+steel'; 'rook-bookshelf' Rook Open Bookshelf living $760 900×340×1800 'oak, walnut, ash'; 'fell-bench' Fell Entry Bench living $420 1200×380×450 'oak, walnut, smoked oak'; 'wren-chair' Wren Spindle Chair dining $540 520×560×820 'oak, walnut, ash'; 'lowry-sideboard' Lowry Sideboard dining $1,240 1600×450×800 'oak, walnut, smoked oak'. Finishes carry a price delta where relevant (walnut +10%, smoked oak +8%, leather +15% — sample). Showrooms: 'Foundry Row' '1420 Foundry Row, [CITY]' 'Mon–Sat 10–6' ; 'Highland Yard' '88 Highland Yard' 'Tue–Sun 11–5'; 'Workshop' 'By appointment, Sawyer Street' 'Thu–Fri 9–3'. Craft strip: 'Mortise & tenon joinery' '[CRAFT_NOTE], checked by hand'; 'Solid wood only' 'oak, walnut and ash from managed forests (sample)'; 'Delivered assembled' '[DELIVERY_NOTE], packaging taken away'; '30-day returns' 'unworn, no questions worth asking'.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[STORE]' (Zilla 600 20px) over 'Furniture made in [CITY]' (10px uppercase Slate Gray) linking ./index.html. Right nav (Archivo 500 14px): 'Living' → #catalog, 'Catalog' → #catalog, 'Showrooms' → #showrooms; the BagButton (lucide ShoppingBag + Slate Blue badge). Under 760px: wordmark + bag.
   Layout: Sticky top, height 70px, Gallery White/95% blur, Rule border.
3. **Hero** — Two columns. Left: eyebrow 'WORKSHOP · SHOWROOM · [CITY]'; H1 'Built for the second decade.' / '*Not the first flat-pack.*' Lead (max-width 480px): '[STORE] makes solid-wood furniture with [CRAFT_NOTE]. [DELIVERY_NOTE], dimensions you can trust, and finishes you can feel before you buy.' Primary 'Browse the catalog' → #catalog and secondary 'Visit a showroom' → #showrooms; trust row: 'Solid wood'; '30-day returns'; 'Assembled delivery'. Right: room-living.webp (4:3) with the caption 'The Harlow, in oak and linen'.
   Layout: Gallery White background, vertical padding 104px top; left 6 cols, right 5 cols offset 1.
4. **Catalog** — Section id='catalog'. Eyebrow 'THE CATALOG' and H2 'EIGHT PIECES, FOUR ROOMS.' FilterBar: RoomChips (All / Living / Dining / Bedroom / Office) and MaterialChips (All / Oak / Walnut / Linen / Leather) with a live count; the ProductGrid of eight cards (photo 4:3, room chip, name, material line, price) linking ./product.html?p=<slug>.
   Layout: Gallery White background. 4x2 grid 20px gap (2 under 1000px); chips sticky under the header on scroll.
5. **Craft strip and locator** — CraftStrip on Linen: four tick cards from the roster. Section id='showrooms'. Eyebrow 'SHOWROOMS' and H2 'THREE PLACES TO SIT DOWN.' ShowroomCards (name, address, hours, open dot for showroom one computed from hours): the roster. Footer (Walnut Deep, bone text): wordmark, 'Furniture made in [CITY]', 'hello@ + emailDomain'; bottom line '© [STORE]. Dimensions are millimetres; the opinions are ours.'
   Layout: Craft strip four columns with ticks; locator three columns 24px gap; footer three-part.

### Product (`product.html`)
1. **Product hero** — Reads ?p=<slug>; with no query the first product (harlow-sofa) renders fully (title set on load). Two columns: left the Gallery (main photo from the set by finish, thumbnails: the room photo + detail-joinery.webp + detail-swatch.webp); right: room chip, name (Zilla 26px), price (updating on finish, tabular), SwatchPicker (three finishes with wood/leather dots; walnut +10%, leather +15% — sample), 'Add to bag' primary, in-stock tick 'In stock — 2–3 weeks, [DELIVERY_NOTE]'.
   Layout: Gallery White background; gallery 7 cols, panel 4 cols offset 1 sticky; under 900px stacked.
2. **Dimensions and details** — The DimensionsDiagram: front + side elevation SVG at 1:20 scale, dimension arrows (W/D/H) with tabular-millimetre labels and a scale bar; a caption 'Drawn to scale; bring your tape measure, we''ll wait.' The Details block: Materials (solid wood, finish notes), Care (oil twice a year, coasters encouraged), Delivery ('[DELIVERY_NOTE]; packaging taken away; stairs discussed honestly'). Related: 'Pairs well with' — three ProductCards sharing the room.
   Layout: Diagram 6 cols, details 5 cols offset 1; related full-width hairline-topped below.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-living.webp → public/images/room-living.webp (Hero, Harlow card + gallery; object-position 50% 55%; alt 'A linen sofa and oak shelf in a gallery-white living room'); https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-dining.webp → public/images/room-dining.webp (Dining cards + gallery; alt 'An oak dining table with spindle chairs'); https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-bedroom.webp → public/images/room-bedroom.webp (Juniper Bed card + gallery; alt 'A walnut bed frame in soft morning light'); https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/detail-joinery.webp → public/images/detail-joinery.webp (All galleries; alt 'Close-up of mortise-and-tenon joinery in oak'); https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/detail-swatch.webp → public/images/detail-swatch.webp (All galleries; alt 'Oak, walnut and ash wood samples fanned on linen'); https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-office.webp → public/images/room-office.webp (Atlas desk card + gallery; alt 'An oak writing desk against a slate-blue wall'). Six files in total. Office/bench/bookshelf/sideboard/chair cards reuse the room photos with distinct crops and object-positions.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/zilla-slab and @fontsource-variable/archivo (OFL-1.1) and lucide-react (ISC). No people in any photo; all furniture designs original, no recognizable designer silhouettes.
- icon: lucide-react only: ShoppingBag, Ruler, Truck, Leaf, Check, ArrowRight, MapPin, Clock. Stroke width 1.75, 16–24px, color inherits. The room glyphs, dimension arrows, swatch dots, ORDER LIST stamp and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 square filled #5B4231, a Card (#FFFFFF) tenon-glyph (two interlocking notched rectangles). No other logo: the store name is always set as type.
- font: Install @fontsource/zilla-slab and @fontsource-variable/archivo and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the dimensions diagram (front and side elevations at 1:20, dimension arrows with tabular labels, scale bar), room glyphs, swatch chips and the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to API, no payments: the bag and its checkout stub save in the browser only (localStorage) and say so; tel: links are built from the phone digits.
- Every internal link points to a file name (./index.html, ./index.html#catalog, ./product.html?p=mercer-dining-table) — never to a bare directory; product.html without a query shows the first product, never an error.
- No real furniture brands or retailers; no recognizable designer-chair silhouettes or iconic shapes; all pieces are original geometry with invented names; dimensions are invented sample specs.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- No people or faces in any photo; showrooms and streets invented; no real map tiles.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no scales, draws, counts or glides; everything at rest; color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; chips, swatches and bag work with keyboard only and visible focus rings.
- Keep copy workshop-plain: no lorem, no 'heritage collection'; every dimension, finish and hour lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/furniture-store-catalog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
