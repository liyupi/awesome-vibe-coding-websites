# Pet Food Subscription Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page subscription site for [BRAND], a pet food maker delivering [FOOD_STYLE] across the [DELIVERY_AREA]. A hero pet portrait anchors the page; the plan builder turns species, age, weight and activity into a visible plan — portion cups, calories, cadence and price updating live; ingredients, delivery steps and pet-named reviews close it.

- Audience: Dog and cat owners in the [DELIVERY_AREA] who read labels, worry about portion creep, and will happily trade two minutes for a plan that looks made for their animal.
- Goal: Get a visitor to build a plan in the quiz, watch the numbers move, save it locally, and feel the brand is precise and warm before a real checkout ever exists.
- Tone: Cheerful and straight-talking, like a good vet tech: plain words, real numbers, gentle jokes about pets. Never wiggles around the fact that the math is a sample.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react + react-dom 18 (MIT), motion (motion.dev) 11 (MIT), lucide-react (ISC), @fontsource/fredoka, @fontsource/figtree (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Never copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. theme.extend.colors maps cream, peanut, ink, orange, orangeDeep, grass, grassDeep, rule.
  - src/fonts.ts imports @fontsource/fredoka/500.css, 600.css, 700.css and @fontsource/figtree/400.css, 600.css, 700.css. Import fonts.ts from src/main.tsx.
  - Global CSS in src/index.css: body background cream; selection orange on cream; focus-visible outline 3px orange; chunky shadows via box-shadow 0 4px 0 rgba(43,37,32,0.12) on primary buttons.
  - src/content.ts holds every string: quiz steps, plan labels, ingredients (name, source, blurb), delivery steps, reviews (pet name, breed line, quote, human name), footer data, and the plan formula constants. Rewrite this file when the variables change.
  - src/lib/brand.ts: brandSlug from [BRAND]; localStorage key `${brandSlug}:plan` storing the full plan object. src/lib/plan.ts exports the deterministic calculation: kcal = 70 × (weightKg ^ 0.75) × activityFactor (couch 1.2, regular 1.6, athlete 2.0) × ageFactor (young 1.4, adult 1.0, senior 0.9); cups = kcal / 400, rounded to the nearest quarter; pricePerDay = baseRate × (kcal / 1000) × styleFactor (fresh 1.15, frozen 1.0), baseRate parsed from [BASE_DAY_RATE], shown to two decimals; deliveryPrice = pricePerDay × cadenceDays (14, 28, 42). Convert slider pounds to kg with lb × 0.4536.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView, fade + 18px rise, 420ms, 70ms stagger), PlanBuilder.tsx (SpeciesStep, AgeStep, WeightSlider, ActivityStep, PlanPanel), BowlViz.tsx (SVG bowl that fills to cups/fullCups ratio), Ingredients.tsx, DeliverySteps.tsx, Reviews.tsx, FaqNote.tsx, Footer.tsx.
  - Springs via Motion: type spring stiffness 300 damping 20 on desktop; on mobile (max-width 768px matchMedia) use 300ms tweens instead; prefers-reduced-motion removes all animation but keeps every number correct.
  - public/favicon.svg: a 64px code-drawn bone shape in orange on cream. Download the six photos from Assets into public/images/ before building; write ASSETS.md at the project root.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and six webp images. Keep it under 20 MB.

## Variables
- [BRAND] — Brand name (default: "Tail & Tummy"). Invented pet food brand. Wordmark, titles, brandSlug (localStorage keys) and every mention. Never a real pet food maker or vet chain.
- [FOOD_STYLE] — Food style (default: "fresh-frozen bowls"). What the brand cooks. Appears in the hero eyebrow, the recipe line and the ingredients intro. Keep it lowercase, e.g. fresh-frozen bowls, air-dried kibble.
- [DELIVERY_AREA] — Delivery area (default: "Denver metro"). Where the brand delivers. Used in the hero eyebrow, reviews bylines and the footer address line.
- [BASE_DAY_RATE] — Base day rate (default: "$2.90"). The anchor per-day price for a 1,000 kcal adult dog on the frozen plan; the live math scales it by calories, age, activity and style. Keep the dollar-and-cents format.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/pet-food-subscription-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Cream `#FFF5E8` — Page ground everywhere — warm, like an afternoon kitchen.
- Peanut `#FAE7CD` — Card wells, chips, the plan panel, review cards.
- Ink `#2B2520` — Primary text: headlines, numbers, buttons on light grounds.
- Fetch Orange `#F0761F` — Primary accent: CTAs, slider fill, active step, bowl fill, focus ring.
- Orange Deep `#D25F10` — Orange hover and pressed state.
- Grass Green `#4C9A58` — Second accent: pet-safe and ingredient tags, secondary buttons, check marks, cadence chips.
- Grass Deep `#3B7A45` — Green hover and pressed state.
- Rule `#EFDCC3` — 1px hairlines and card borders, stepper dividers.

### Typography
- Display — wordmark, H1, H2, plan numbers, step questions. Fredoka, chunky rounded, sentence case, line-height 1.15: Fredoka (OFL), weights 500/600/700
- Text — body, option labels, reviews (600 for names), captions: Figtree (OFL), weights 400/600/700

### Layout & motion
- Spacing: Big and friendly: 104px desktop section rhythm (64px mobile), 1160px container, 28px padding. Cards 24px gap; the plan builder is a 6/6 split with a 40px gutter; buttons are 52-56px tall.
- Radius: Chunky rounds: 24px on cards and the plan panel, 999px on buttons, chips and badges, 20px on images.
- Motion: Bouncy but polite: quiz steps slide 28px with a spring (stiffness 300, damping 20); mobile uses 300ms tweens instead.
- Motion: Plan numbers (cups, kcal, price) spring into place on every input change — old value exits up, new value enters from below, 240ms.
- Motion: The bowl SVG fills with orange to the portion ratio on the same spring; switching species swaps the bowl art with a 240ms crossfade.
- Motion: Primary buttons have a chunky 0 4px 0 shadow that flattens on press; chips scale 0.96 on press.
- Motion: Reveals fade and rise 18px over 420ms with 70ms stagger; prefers-reduced-motion makes every animation an instant state change.
- Imagery: One bright studio shoot: every photograph is a pet or its food on a warm cream seamless backdrop — soft even light with a warm golden cast, joyful expressions, gentle floor shadow. No people, no hands, no readable packaging, no logos.

## Pages & Sections
### [BRAND] — build your pet's plan (`index.html`)
1. **Header** — Sticky header on Cream, 1px Rule hairline after 12px of scroll. Left: wordmark [BRAND] in Fredoka 600 22px, Ink, with a small code-drawn paw glyph in orange before the name. Center nav (desktop): The Plan, Ingredients, Delivery, Reviews — Figtree 600 14px, Ink at 70% to full on 150ms, scrolling to anchors. Right: CTA 'Build a plan' (orange fill, cream text, 999px, chunky shadow). Mobile: wordmark plus burger (two 2px Ink lines) opening a full-screen Cream overlay with anchors in Fredoka 26px and the CTA at the bottom.
   Layout: Single row, 1160px container, 16px vertical padding.
   Motion: Hairline fades in on scroll; overlay fades and rises 12px in 200ms.
2. **Hero** — Split hero: right 6 columns hold hero-dog.webp (a scruffy terrier mix mid-grin on the cream backdrop) bleeding to the viewport's right edge, rounded 24px on its left corners. Left 6 columns, copy vertically centered. Eyebrow '[BRAND] — [FOOD_STYLE] FOR DOGS AND CATS — [DELIVERY_AREA]' in Figtree 700 12px uppercase 0.14em, orange. H1 in Fredoka 700 clamp(40px, 5.5vw, 64px), Ink: 'One bowl, built for one body.' Sub in Figtree 400 17px Ink at 80%, max 46ch: 'Tell us about your pet — portion, calories and price appear before your coffee cools. Plans start around [BASE_DAY_RATE] a day.' CTAs: 'Build your plan — 60 sec' (orange fill) and 'Read the recipe' (ghost, 1.5px Ink border) scrolling to ingredients. Trust row of three mini-badges with icons in grass: Check 'Cooked weekly', Snowflake 'Arrives frozen', PawPrint 'Pet-safe ingredients list'.
   Layout: 6/6 split; image bleeds right on desktop. Mobile: image on top at 4:3, copy below with 24px padding.
   Motion: Copy staggers in at 420ms each, 70ms apart; the photo scales from 1.03 to 1.0 over 600ms once; the trust badges pop in sequence after the CTAs.
3. **Plan builder** — id='plan'. The whole pitch. Left column, one step at a time under the eyebrow 'BUILD THE PLAN' and H2 'Sixty seconds, one honest plan.' Step 1 'Who eats tonight?' — two big option cards with photos: dog (hero-dog crop) and cat (cat-bowl crop), lucide Dog / Cat icons beside labels. Step 2 'Which birthday era?' — chips 'Under a year', 'One to seven', 'Seven-plus' (young, adult, senior). Step 3 'How heavy?' — a range slider from 4 to 120 lb (4 to 20 lb when cat is chosen), orange fill, Ink thumb, live label '34 lb'. Step 4 'Couch pal, daily walker, or athlete?' — three cards with icons Sofa, Footprints, Zap. A progress rail of four dots (orange when done) sits under the steps; Back is a text link; steps auto-advance on selection (the slider advances on Next). Right column: the live plan panel on Peanut, rounded 24px — species and name line ('Your dog's plan'), then four animated figures in Fredoka 600: Portion '1¾ cups a day' (nearest quarter), Energy '940 kcal a day', Cadence — three chips 2 / 4 / 6 weeks (grass fill when active), Price '$3.20 a day — $44.80 per 4-week delivery' (from src/lib/plan.ts). Beneath, the fresh/frozen toggle: two pill buttons Flame 'Fresh, never frozen' and Snowflake 'Frozen at peak' — frozen is default; fresh multiplies price by 1.15 and rewrites the recipe line. The BowlViz SVG (120px) sits in the panel corner, filling orange to cups / 3 cups. Button 'Save my plan' (orange) writes the plan to `${brandSlug}:plan` and reveals the honest note with a grass Check: 'Saved on this device — this is a sample calculation, not veterinary advice. Real plans start with your vet.'
   Layout: 6/6 split, 40px gutter; steps are full-width cards in a 3-column grid inside the left column; the plan panel is sticky at top 96px on desktop. Mobile: steps first, plan panel above them (sticky top) so numbers stay visible.
   Motion: Steps slide on springs; every figure springs on change; the bowl fill springs; the toggle crossfades the recipe line at 200ms; the save note slides up 12px in 240ms.
4. **Ingredients** — id='ingredients'. Eyebrow 'THE RECIPE' and H2 'Short list, real food.' Intro line in Figtree 15px Ink 80%: 'Our [FOOD_STYLE] start with a kitchen, not a factory — four things in the bowl, nothing sprayed on.' Left: ingredients-flat.webp at 4:3 rounded 20px. Right: four ingredient rows, each a grass tag plus a blurb: 'Chicken thigh — from Hallow Farm, Idaho, cooked low'; 'Sweet potato — roasted, never extruded'; 'Carrots and peas — frozen the day they are picked'; 'Salmon oil — a small drizzle for coats'. Footnote in Ink 60% 13px: 'Recipes shown are invented samples for this template — portion math is a sample too.'
   Layout: 5/7 split, 40px gap, rows separated by 1px Rule hairlines; stacks on mobile with the photo first.
   Motion: Rows reveal on scroll at 420ms, 70ms stagger; each tag pops once when it enters.
5. **How delivery works** — Three steps in a row under the eyebrow 'DELIVERY' and H2 'From our freezer to yours.' — each a numbered orange circle (Fredoka 600 20px) with a title and two lines: 1 'Build the plan — sixty seconds, species to slider'; 2 'Boxes ride out on your cadence — sample 2, 4 or 6 weeks across the [DELIVERY_AREA]'; 3 'Thaw, scoop, serve — tubs are dishwasher-safe and stack like books'. Beneath, one honest line in Ink 60% 13px with a Truck icon: 'Delivery cadence here is sample copy — no real schedules are promised.'
   Layout: 3-column grid, 24px gap, no card wells — steps on cream with connecting 1px Rule dashes on desktop; stacks on mobile.
   Motion: Steps reveal on scroll at 420ms, 70ms stagger; the connecting dashes draw once (scaleX 0 to 1, 400ms).
6. **Reviews** — id='reviews'. Eyebrow 'THE JURY' and H2 'Verdicts from the bowl.' Four review cards on Peanut rounded 24px, each with five orange Star icons (12px), a quote in Figtree 400 15px, and a byline in Figtree 600 13px: 'Biscuit, beagle, 4 — “Licks the bowl, then waits by the freezer.” — Dana R.'; 'Pearl, tabby, 9 — “Ate it before the dog could investigate.” — Sam K.'; 'Waffles, corgi, 6 — “The slider said one cup. Waffles disagrees.” — Priya M.'; 'Miso, husky, 3 — “Coat so shiny the neighbors asked.” — Leo T.' All reviews are invented; bylines stay in the [DELIVERY_AREA].
   Layout: 2×2 grid (1 column on mobile), 24px gap, 24px card padding.
   Motion: Cards reveal on scroll at 420ms, 70ms stagger; stars pop in sequence (80ms apart) per card.
7. **Footer** — 1px Rule hairline, then three columns on Cream: wordmark with paw glyph; '88 Ballast Row, [DELIVERY_AREA]' with MapPin, '(303) 555-0187' with Phone; nav anchors repeated small. Bottom line in Ink 60% 12px: 'Every brand, formula, review and price on this page is an invented example — portion output is a sample calculation, not veterinary advice.' plus the optional [CREDIT] link.
   Layout: Three columns, stacked on mobile with 32px gaps.
   Motion: None — the footer is still.

## Assets
- image: Six bright studio photographs made for this template, redistributable with it. Download each into public/images/ with curl -L -o before building. https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/hero-dog.webp -> public/images/hero-dog.webp (hero and the dog species option; alt 'A happy scruffy terrier mix grinning on a warm cream studio backdrop'); https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/cat-bowl.webp -> public/images/cat-bowl.webp (cat species option; alt 'A grey tabby cat leaning toward a ceramic bowl on a cream backdrop'); https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/dog-bowl.webp -> public/images/dog-bowl.webp (plan panel aside; alt 'A stoneware bowl of fresh pet food with visible chicken and vegetables'); https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/ingredients-flat.webp -> public/images/ingredients-flat.webp (ingredients section; alt 'Raw chicken, sweet potato, carrots, peas and a dish of salmon oil laid out on cream'); https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/delivery-box.webp -> public/images/delivery-box.webp (delivery section aside; alt 'A plain unbranded kraft box packed with sealed meal tubs'); https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/dog-play.webp -> public/images/dog-play.webp (reviews section aside; alt 'A small brown mixed-breed dog mid-hop chasing an orange fabric toy'). In ASSETS.md credit each: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- icon: lucide-react only: Dog, Cat, Sofa, Footprints, Zap, Flame, Snowflake, Star, Check, PawPrint, Truck, MapPin, Phone, ArrowRight. Stroke width 2, 16-24px, color inherits. The paw wordmark glyph, the bone favicon and the BowlViz SVG are code-drawn. No other icon sets.
- font: @fontsource/fredoka (500, 600, 700) and @fontsource/figtree (400, 600, 700), imported in src/fonts.ts so Vite bundles the woff2 files into dist/. Never load fonts from a CDN.

## Don'ts
- No backend, no APIs, no form submission, no checkout: the plan saves to localStorage only and the copy says so.
- No veterinary or health claims: the portion output is labeled a sample calculation everywhere it appears, and the save note points to a real vet for real diets.
- No real pet food brands, farms, vets or review sites; formulas, ingredient sources and reviews are invented.
- Photographs show pets and food only — no people, no hands, no readable packaging, no logos.
- No real delivery promises: cadence chips and the delivery strip are sample copy, explicitly labeled.
- No calendar dates and no live clock; the site never shows today's date.
- Self-host everything: fonts via Fontsource, icons via lucide-react, images downloaded into public/images/ — no CDN tags, no analytics.
- Static build: minified, no source maps, no src/ in dist/, one command npm run build, output in dist/ under 20 MB.
- Internal links are anchors into ./index.html (#plan, #ingredients, #delivery, #reviews); never a bare directory.
- Respect prefers-reduced-motion: no springs, no bowl animation, no star pops — every number still updates instantly and correctly.
- Works at 1440×900 and 390×844 with zero console errors; quiz, slider, toggle and save work with keyboard only and a visible orange focus ring.
- The plan formula must match src/lib/plan.ts exactly — deterministic, no randomness, same inputs always produce the same plan.
- No SEO machinery beyond a plain title with [BRAND]; never mention VibeFather or any real brand inside the site; all copy is invented US English living in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/pet-food-subscription-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
