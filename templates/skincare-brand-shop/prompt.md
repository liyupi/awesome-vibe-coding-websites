# Skincare Brand Shop

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page shop for [BRAND], a small skincare brand focused on [SKIN_FOCUS], known for [HERO_NOTE]. It must feel like an apothecary counter: a routine-builder quiz (four questions → a 3-step routine), six products with actives, a product detail with ingredients and how-to-use, two bundles, an ingredient glossary, and a cart drawer confirming client-side. One page: index.html with sections (#quiz, #products, #bundles, #ingredients). Product detail opens as a query (?p=<slug>, first product without one). Everything runs in the browser; nothing is submitted or charged anywhere.

- Audience: Ingredient-literate buyers 22–45 who read labels and distrust marketing: they want the active, the percentage and the reason, and they'll buy the routine, not the miracle.
- Goal: Sell the routine. Within ten seconds a visitor sees the texture and the quiz CTA; within two minutes they've answered four questions and have three products in the cart.
- Tone: Apothecary-calm: short factual lines, percentages and actives named, one dry joke about 12-step routines.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/cormorant-garamond (OFL-1.1), @fontsource-variable/work-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (bone, clay, card, olive-ink, olive-deep, olive-mist, ink, umber, blush, blush-deep, rule, good) and fontFamily display ['Cormorant Garamond', 'Georgia', 'serif'], sans ['Work Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 2px and add maxWidth { container: '1120px' }.
  - In src/fonts.ts import '@fontsource/cormorant-garamond/500.css', '@fontsource/cormorant-garamond/600.css', '@fontsource/cormorant-garamond/500-italic.css' and '@fontsource-variable/work-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, product, ingredient, quiz question, bundle, hour and image path, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':'), src/lib/quiz.ts (recommend({skin, concern, time, scent}) → three product slugs from the roster rules), src/lib/product.ts (reads ?p=<slug>, returns the product or the first — never a not-found).
  - State: src/store/cart.ts is a tiny external store (useSyncExternalStore) holding lines { slug, qty } plus drawer open state, persisted to localStorage key brandSlug + ':cart'.
  - Components in src/components/: Header.tsx (with CartButton), Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, CartDrawer.tsx (LineRow.tsx); Hero.tsx, Quiz.tsx (QuestionStepper.tsx, ResultPanel.tsx), Products.tsx (ProductCard.tsx), ProductDetail.tsx (IngredientList.tsx, HowToUse.tsx, TextureFigure.tsx), Bundles.tsx (BundleCard.tsx), Glossary.tsx (ActiveCard.tsx), Promise.tsx. src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F6F1E7'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — [SKIN_FOCUS], made simply</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [BRAND] — Brand name (default: "Meridian Botanics"). Invented brand name. Used in the wordmark, title, footer, email (hello@ + brandSlug without hyphens + '.com') and localStorage keys. Never a real brand.
- [CITY] — City (default: "Portland, Oregon"). Where the brand blends and ships from. Used in the hero line, about strip and footer. Real cities fine.
- [SKIN_FOCUS] — Skin focus (default: "barrier-first skincare"). One lowercase phrase naming the brand's philosophy. Drives the hero line, the quiz tone and the glossary intro. Keep it plain-words.
- [HERO_NOTE] — Hero note (default: "six ingredients, all pronounceable"). A short credibility line ([HERO_NOTE]). Used in the hero under the H1 and once in the about strip. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/skincare-brand-shop in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Bone `#F6F1E7` — Page background throughout.
- Clay `#EDE5D6` — Alternate section background (Products, Glossary), chips, hover fill.
- Card `#FFFEFA` — Product cards, the quiz panel, cart drawer.
- Olive Ink `#3B4231` — Headlines and body ink, primary buttons, focus ring.
- Olive Deep `#2B3125` — Hover and pressed, footer background.
- Olive Mist `#E5E9DD` — Selected chip fills, icon wells, active quiz step.
- Ink `#2C2A24` — Secondary headline ink, icon color.
- Umber `#6E6656` — Secondary text, captions, eyebrows, ingredient tails.
- Blush `#D9A795` — The one warm accent: prices, quiz highlight, active ingredient dots, focus-visible extras.
- Blush Deep `#C08A75` — Hover and pressed states.
- Rule `#DFD7C5` — 1px hairlines, card borders, input borders, drawer dividers.
- Good `#5F7D5A` — Cart ticks, vegan badge, in-stock note.

### Typography
- Display: H1, H2, product names, prices, the wordmark — Cormorant Garamond, apothecary serif: Cormorant Garamond (OFL), weights 500/600
- Text and UI: body, eyebrows, buttons, quiz options, forms, captions; tabular numerals for prices: Work Sans (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px — an apothecary's calm. Type scale: H1 clamp(42px, 6.2vw, 78px) Cormorant 500, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Cormorant 500; product names Cormorant 600 24px; prices Cormorant 600 26px Blush tabular; lead Work Sans 400 17.5px / 1.65 Olive Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Work Sans 600 12px uppercase letter-spacing 0.18em Umber; caption 13px Umber. Buttons: height 50px, Work Sans 600 14px. Primary: Olive Ink fill, Card text. Quiz CTA: Blush Deep fill, Card text. Secondary: 1px Olive Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Olive Ink border. Focus ring everywhere: 2px Olive Ink outline with 3px offset.
- Radius: 2px on cards, buttons, inputs, chips and photos — bottle-label corners. 999px only for pills, chips and the cart badge.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and quiz steps; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for drawer and detail swaps. Slow and certain — like a good emulsion.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- Motion: Hero: the texture photo scales 1.04→1.0 over 2400ms; the H1 rises; a drawn sprig beside the eyebrow draws once.
- Motion: Quiz: steps slide 16px horizontally, 280ms --ease-io (AnimatePresence mode 'wait'); option chips fill Olive Mist→Olive Ink on select (150ms); the ResultPanel's three products stagger in 90ms with prices counting up.
- Motion: Product cards: hover lifts 3px and the active dot brightens; clicking opens the detail view crossfading in place.
- Motion: Product detail: the ingredient list rows stagger 40ms; swatch/texture figure crossfades.
- Motion: Cart: adding pops the badge 1→1.3→1; the drawer slides from the right 420ms --ease-out; qty changes count the subtotal over 300ms; checkout stub confirms with a drawn Blush 'ORDER NOTES' seal (this demo stores locally).
- Motion: Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no scales, staggered reveals or counts; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Real photography, all six made for this template in one consistent style: bone-light apothecacy, glass and clay, texture close-ups on slate. Never a face or skin close-up — bottles, droppers, drops and swatches only. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 2px corners, no shadow; photos on Bone get a 1px Rule outline. Captions in Work Sans 13px Umber. Drawn in code: the favicon, sprig accents, active dots, quiz step marks, the seal and chips. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Shop (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([BRAND] = Meridian Botanics, [CITY] = Portland, Oregon, [SKIN_FOCUS] = barrier-first skincare, [HERO_NOTE] = six ingredients, all pronounceable). Put every string and number in src/content.ts and render from it. If any variable value differs, rewrite the hero, all six products and their ingredients, the quiz questions and recommendations, bundles, glossary and cart copy so they are specific and believable for the new brand, keeping the same structure and counts (4 questions, 6 products, 3-step routine, 2 bundles, 5 actives). All products, actives and prices are invented; cosmetic language only — no medical or treatment claims. Products (slug · name · price · active · note): 'gentle-milk' Gentle Milk Cleanser $24 'oat lipids 3%' 'a cream-gel that removes the day without stripping the night'; 'barrier-serum' Barrier Repair Serum $38 'niacinamide 5%' 'the quiet hero; calms visible redness, supports the barrier'; 'petal-mist' Petal Mist Toner $22 'rose distillate' 'eight petals deep; a breath before serum'; 'day-veil' Day Veil SPF Moisturizer $34 'zinc oxide 12%' 'mineral, sheer on every tone, sits under makeup'; 'night-balm' Night Balm $36 'squalane 8%' 'richer than it looks; the morning mirror explains it'; 'eye-cream' Sunday Eye Cream $28 'caffeine 2%' 'for mornings that start before they should'. Bundles: 'The Core Three' $84 'cleanser, serum, SPF — save $12' 'the routine in one number'; 'The Full Shelf' $158 'all six, save $24' 'for the committed and the curious'. Actives glossary: 'Niacinamide' 'calms and clarifies; the 5% here is the sweet spot'; 'Squalane' 'olive-derived, skin-identical softness'; 'Zinc Oxide' 'mineral sun without the ghost; 12%, sheer'; 'Oat Lipids' 'soothing fats that rebuild the barrier'; 'Caffeine' 'depuffs; science, not miracles'. Quiz questions: skin ('Dry', 'Oily', 'Sensitive', 'Normal'), concern ('Redness', 'Texture', 'Dullness', 'Breakouts'), routine ('3 minutes', '10 minutes', 'As long as it takes'), scent ('Unscented', 'Light botanical', 'Warm and herbal').
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[BRAND]' (Cormorant 600 19px) over 'Skincare blended in [CITY]' (10px uppercase Umber) linking ./index.html. Right nav (Work Sans 500 14px): 'Build a routine' → #quiz, 'Shop' → #products, 'Bundles' → #bundles, 'Ingredients' → #ingredients; the CartButton (lucide ShoppingBag + Blush badge). Under 760px: wordmark + cart.
   Layout: Sticky top, height 70px, Bone/95% blur, Rule border.
3. **Hero** — Two columns. Left: eyebrow 'BARRIER-FIRST · SMALL BATCH · [CITY]'; H1 'Skin keeps score.' / '*Feed it plainly.*' Lead (max-width 480px): '[BRAND] makes [SKIN_FOCUS] — [HERO_NOTE]. No twelve-step evenings, no unpronounceable chemistry, no promises your dermatologist would raise an eyebrow at.' Blush CTA 'Build your routine' → #quiz and secondary 'Shop products' → #products; trust row: 'Fragrance optional'; 'Vegan & cruelty-free'; 'Recyclable glass'. Right: texture-drop.webp (4:3) with the caption 'Squalane, dropping slow'.
   Layout: Bone background, vertical padding 104px top; left 6 cols, right 5 cols offset 1.
4. **Routine quiz** — Section id='quiz'. Eyebrow 'THE ROUTINE BUILDER' and H2 'Four questions, three products.' The Quiz card on Card: four steps with option chips; after the last, the ResultPanel: a three-step routine (Cleanse → Treat → Protect) with the recommended products, prices and a total (all three addable to cart at once); caption 'Answer honestly — sensitive skin is a personality, not a flaw.' Retaking starts over.
   Layout: Clay background. Panel max-width 720px; chips wrap 2-up; steps slide; results stagger.
5. **Products and detail** — Section id='products'. Eyebrow 'THE SHELF' and H2 'SIX PRODUCTS, NOTHING TO HIDE.' ProductCards (photo 3:4, name, active pill in Blush, price) opening ProductDetail (?p=<slug>, first product without): detail = large photo, name, price, the full ingredient list (INCI-style, plain names), HowToUse three steps, texture figure (texture-cream.webp or texture-serum.webp reused per type) and 'Add to cart'.
   Layout: Bone background. Grid 3x2 (2 under 900px); detail opens as a full-width Card panel below the grid (scroll into view), closing returns to the grid.
6. **Bundles, glossary, footer** — Section id='bundles'. Eyebrow 'SETS' and H2 'The routine, priced kindly.' Two BundleCards (contents listed, per-item savings, 'Add bundle to cart'). Section id='ingredients'. Eyebrow 'ACTIVES, PLAINLY' and H2 'WHAT'S IN AND WHY.' Five ActiveCards (dot, name, one-line role) with a caption 'INCI lists are on each product page — pronounce them with us.' Footer (Olive Deep, bone text): wordmark, 'Blended in [CITY]', hello@ + emailDomain; bottom line '© [BRAND]. Cosmetic claims only; your skin is your own expert.'
   Layout: Clay (bundles) then Bone (glossary); bundles two columns 24px; glossary a 5-chip row wrapping; footer three-part.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/texture-drop.webp → public/images/texture-drop.webp (Hero; object-position 50% 50%; alt 'A serum drop falling from a glass dropper onto slate'); https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/product-cleanser.webp → public/images/product-cleanser.webp (Gentle Milk card; alt 'A plain cream bottle labeled with blank paper'); https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/product-serum.webp → public/images/product-serum.webp (Barrier Repair card; alt 'A glass serum bottle with a dropper on clay'); https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/product-spf.webp → public/images/product-spf.webp (Day Veil card; alt 'A small mineral SPF tube on bone stone'); https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/texture-cream.webp → public/images/texture-cream.webp (Detail texture, cleanser/balm/eye; alt 'A cream texture swatch on slate'); https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/texture-serum.webp → public/images/texture-serum.webp (Detail texture, serum/mist; alt 'A clear gel serum swatch on slate'). Six files in total. Cards for Petal Mist, Night Balm and Sunday Eye Cream reuse the closest bottle photo with a distinct object-position and crop.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for fonts and icons. Bottle labels in photos must stay blank paper with no readable text; never replace with stock photography or images with faces or skin.
- icon: lucide-react only: Droplets, Leaf, Sun, FlaskConical, ShoppingBag, Plus, Minus, Check, X, ArrowRight. Stroke width 1.75, 16–24px, color inherits. The sprig accents, active dots, quiz step marks, the ORDER NOTES seal and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 6 filled #3B4231, a Card (#FFFEFA) droplet glyph. No other logo: the brand name is always set as type.
- font: Install @fontsource/cormorant-garamond and @fontsource-variable/work-sans and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the sprigs, active dots, quiz step marks, chips, the seal and the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API, no payments: the quiz, cart and checkout stub save in the browser only (localStorage) and the stub says so.
- Product detail opens from the query ?p=<slug> (first product without one) on the same page and never shows an error state.
- All links on this single page are anchors (./index.html#quiz, #products, #bundles, #ingredients) plus the footer mailto.
- No medical, treatment or cure claims — cosmetic appearance language only ('calms visible redness', never 'treats eczema'); percentages are presented as formulation facts.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- No real skincare brands, their packaging or bottle designs; no faces or skin close-ups in any photo; labels in photos stay blank.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no scales, counts, staggers or draws; everything at rest; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; quiz, chips, detail and cart work with keyboard only and visible focus rings.
- Keep copy apothecary-calm: no lorem, no 'miracle'; every ingredient, price and percentage lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/skincare-brand-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
