# Meal Kit Subscription Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [BRAND], a meal kit brand based in [CITY] serving [MENU_FOCUS], from $[PER_SERVING] per serving (sample math). It must convert through honesty: a people × meals plan selector with live per-serving math, this week's six-dish menu, how-it-works steps, plain price transparency, and a client-side sign-up flow. One page: index.html with sections (#plan, #menu, #how, #join). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Busy households 28–50 comparing kits on per-serving price and menu appeal. They want the math visible, the menu photographed, and the pause button obvious.
- Goal: Produce sign-ups. Within ten seconds a visitor sees a dish and the selector; within two minutes they've built a plan and joined.
- Tone: Farm-table warm: short lines, real ingredients, honest numbers, one joke about leftovers.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/fraunces (OFL-1.1), @fontsource-variable/source-sans-3 (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (warmwhite, linen, card, herb, herb-deep, herb-mist, ink, claygray, tomato, tomato-deep, rule, good) and fontFamily display ['Fraunces', 'Georgia', 'serif'], sans ['Source Sans 3 Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 12px and add maxWidth { container: '1140px' }.
  - In src/fonts.ts import '@fontsource/fraunces/500.css', '@fontsource/fraunces/600.css', '@fontsource/fraunces/500-italic.css' and '@fontsource-variable/source-sans-3'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, dish, price, hour and image path, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':'), src/lib/pricing.ts (pure: priceFor(people, meals) → { weekly, perServing } from the base rate).
  - State: src/store/join.ts is a tiny external store (useSyncExternalStore) holding { people, meals, day, name, email, sent } persisted to localStorage key brandSlug + ':join'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx; Hero.tsx, PlanSelector.tsx (PeoplePicker.tsx, MealsPicker.tsx, PriceReadout.tsx), Menu.tsx (DishCard.tsx), HowItWorks.tsx (StepCard.tsx), Transparency.tsx, JoinForm.tsx (DayChips.tsx, Joined.tsx), TrustStrip.tsx. src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBF7F0'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — [MENU_FOCUS], delivered weekly</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [BRAND] — Brand name (default: "Hearth & Field"). Invented brand name. Used in the wordmark, title, footer, email (hello@ + brandSlug without hyphens + '.com') and localStorage keys. Never a real service.
- [CITY] — City (default: "Nashville, Tennessee"). Where the brand cooks and delivers. Used in the hero, delivery copy and footer. Real cities fine.
- [MENU_FOCUS] — Menu focus (default: "farm-table dinners"). One lowercase phrase naming the menu style. Drives the title, hero line and dish voice. Keep it appetizing and plain.
- [PER_SERVING] — Base per-serving (default: "9.40"). The base per-serving dollars as digits (larger plans discount, computed in pricing.ts). Shown with (sample math) labels. Keep it 7–12.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/meal-kit-subscription-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm White `#FBF7F0` — Page background throughout.
- Linen `#F2EBDD` — Alternate section background (Menu, Trust), chips, hover fill.
- Card `#FFFFFF` — Dish cards, the plan panel, join panel, joined state.
- Herb `#4A6B3A` — Primary: headlines' accents, primary buttons, selected chips, focus ring.
- Herb Deep `#37522C` — Hover and pressed, footer background.
- Herb Mist `#E6EDDD` — Selected chip fills, icon wells, portion dots.
- Ink `#2E2B22` — Headlines and body ink, icon color.
- Clay Gray `#6E6858` — Secondary text, captions, eyebrows, difficulty dots.
- Tomato `#D6552F` — The one warm accent: the join CTA, per-serving figure, day chip active, focus-visible extras.
- Tomato Deep `#B84320` — CTA hover and pressed.
- Rule `#E1D8C6` — 1px hairlines, card borders, input borders, dividers.
- Good `#5E7D4E` — Trust ticks, joined check, veg badges.

### Typography
- Display: H1, H2, H3, dish names, prices, the wordmark — Fraunces, kitchen-table serif: Fraunces (OFL), weights 500/600
- Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for prices: Source Sans 3 (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6vw, 74px) Fraunces 500, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Fraunces 500; dish names Fraunces 600 20px; per-serving figure Fraunces 600 40px Tomato tabular; lead Source Sans 400 17.5px / 1.65 Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.16em Clay Gray; caption 13px Clay Gray. Buttons: height 50px, Source Sans 700 14px. Primary: Herb fill, Card text. Join CTA: Tomato fill, Card text. Secondary: 1px Herb border. Inputs: height 50px, 1px Rule border, Card fill, focus Herb border. Focus ring everywhere: 2px Herb outline with 3px offset.
- Radius: 12px on cards, buttons, inputs, chips and photos. 999px only for pills, portion dots and day chips.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 1, 0.35, 1) for plan updates and the join swap. Kitchen-paced.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Motion: Hero: the dish photo scales 1.04→1.0 over 2200ms; the H1 rises; a small steam squiggle over the bowl draws once (off under reduced motion).
- Motion: Plan selector: people and meals chips fill Herb Mist→Herb on select (150ms); the weekly total and per-serving figure count to new values over 450ms; the portion dots (one per person) pop in sequence.
- Motion: Menu cards: hover lifts 3px and the difficulty dots brighten.
- Motion: How-it-works: the connector line draws with scroll; step numbers pop in sequence.
- Motion: Join form: day chips fill Tomato on select; invalid submit shakes 4px with inline labels; sending swaps to Joined (320ms --ease-io) — a drawn Tomato 'FIRST BOX' stamp scaling in, 'Welcome to the table, [NAME].' plan/day echo with the per-serving line, 'Edit' pre-filled. Persisted in localStorage.
- Motion: Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no scales, draws, counts or pops; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Real overhead food photography, all six made for this template in one consistent style: overhead on warm ceramic, herb-green and tomato-red pops, soft daylight — plated dishes only, no faces, no hands, no readable text. Every photo uses object-fit cover with the object-position given under Assets, 12px corners, no shadow; photos on Warm White get a 1px Rule outline. Captions in Source Sans 13px Clay Gray. Drawn in code: the favicon, portion dots, steam squiggle, the stamp and chips. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Landing (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([BRAND] = Hearth & Field, [CITY] = Nashville, Tennessee, [MENU_FOCUS] = farm-table dinners, [PER_SERVING] = 9.40). Put every string and number in src/content.ts and render from it. If any variable value differs, rewrite the hero, all six dishes, steps, transparency copy and join flow so they are specific and believable for the new brand, keeping the same structure and counts. All dishes, farms and prices are invented with (sample) labels on figures. Pricing rule (in pricing.ts): base per-serving from [PER_SERVING]; per-serving drops 6% at 4 meals and 11% at 5; weekly = perServing × people × meals, rounded to cents; displayed as (sample math). Dishes (name · time · difficulty · note · photo): 'Skillet lemon-chicken thighs' 30 min 2/4 'one pan, two lemons, zero regrets' dish-1; 'Smoky mushroom risotto' 35 min 2/4 'the kind of stirring that counts as meditation' dish-2; 'Seared pork chops, apples' 25 min 3/4 'fall on a plate' dish-3; 'Charred broccoli pasta' 20 min 1/4 'the garlic does the talking' dish-4; 'Butter-baked salmon' 25 min 2/4 'the weeknight flex' dish-5; 'White bean & greens stew' 30 min 1/4 'a bowl with opinions' dish-6. Steps: 'Choose your plan' 'two to six people, three to five dinners'; 'Tuesday delivers' 'an insulated box at the door; the ice pack goes back out same day'; 'Cook from the card' 'every ingredient pre-portioned; recipes are one card, one photo'; 'Pause anytime' 'skipping a week or cancelling is two clicks — no phone calls, no retention maze'. Trust: 'Pause or cancel anytime'; '100% recyclable box (sample)'; 'Farms within a day''s drive (sample)'; 'Leftover-friendly portions'.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[BRAND]' (Fraunces 600 19px) over 'Weekly [MENU_FOCUS] · [CITY]' (10px uppercase Clay Gray) linking ./index.html. Right nav (Source Sans 600 14px): 'Plans' → #plan, 'This week' → #menu, 'How it works' → #how; a small Tomato 'Join' → #join. Under 760px: wordmark + join button.
   Layout: Sticky top, height 70px, Warm White/95% blur, Rule border.
3. **Hero** — Two columns. Left: eyebrow 'FARM-TABLE · WEEKLY · [CITY]'; H1 'Dinner decided' / '*before you''re hungry.*' Lead (max-width 480px): '[BRAND] delivers [MENU_FOCUS] as ready-to-cook kits — chopped, portioned and carded. From $[PER_SERVING] a serving (sample), pauses when you''re away.' Primary 'Build your plan' → #plan and secondary 'See this week' → #menu. Right: dish-1.webp (4:3) with the caption 'Tuesday''s skillet, plated'.
   Layout: Warm White background, vertical padding 100px top; left 6 cols, right 5 cols offset 1.
4. **Plan selector** — Section id='plan'. Eyebrow 'THE PLAN' and H2 'PICK PEOPLE × DINNERS.' The PlanSelector on Card: PeoplePicker (2 / 4 / 6 chips with portion dots) × MealsPicker (3 / 4 / 5 chips); the PriceReadout: per-serving (Tomato 40px tabular) and weekly total, both counting on change with a (sample math) caption; a note 'Per-serving drops as plans grow; delivery is included'. A Tomato 'Join with this plan' → #join carries the selection.
   Layout: Linen background. Panel max-width 680px; chips 2-up wrap; readout hairline-divided.
5. **This week's menu** — Section id='menu'. Eyebrow 'THIS WEEK' and H2 'SIX DINNERS, ONE CARD EACH.' DishCards (photo 4:3, name, time + difficulty dots, one-line note); a caption: 'Menus rotate weekly; this one''s real until it isn''t (sample).'
   Layout: Warm White background. 3x2 grid 20px gap (2 under 900px, 1 under 640px).
6. **How it works, transparency, trust** — Section id='how'. Eyebrow 'HOW IT GOES' and H2 'BOX TO TABLE.' Four StepCards with the connector line. The Transparency block on Linen: a plain breakdown ('$[PER_SERVING] per serving at the base plan; −6% at 4 dinners, −11% at 5 (sample math)') with one sentence on what's included ('ice pack, recipe cards, every chop'). TrustStrip: the four roster ticks. Join section (#join): JoinForm on Card — the plan echo (editable chips inline), DayChips (Tue / Fri), name + email; Tomato 'Join this week' with caption 'Saved in this browser — the real page starts a subscription. Nothing is sent here.' Joined: the FIRST BOX stamp, 'Welcome to the table, [NAME].' plan + day echo, 'Edit' pre-filled. Persisted in localStorage. Footer (Herb Deep, bone text): wordmark, '[MENU_FOCUS] weekly · [CITY]', hello@ + emailDomain; bottom line '© [BRAND]. Prices are sample math; the leftovers are real.'
   Layout: How-it-works max-width 860px; transparency two columns; trust a hairline row; join panel max-width 620px; footer three-part.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-1.webp → public/images/dish-1.webp (Hero, menu card 1; object-position 50% 50%; alt 'Overhead skillet chicken thighs with lemons on ceramic'); https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-2.webp → public/images/dish-2.webp (alt 'Overhead mushroom risotto in a ceramic bowl'); https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-3.webp → public/images/dish-3.webp (alt 'Overhead seared pork chops with apple slices'); https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-4.webp → public/images/dish-4.webp (alt 'Overhead charred broccoli pasta with chili'); https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-5.webp → public/images/dish-5.webp (alt 'Overhead butter-baked salmon with herbs'); https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-6.webp → public/images/dish-6.webp (alt 'Overhead white bean and greens stew'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/fraunces and @fontsource-variable/source-sans-3 (OFL-1.1) and lucide-react (ISC). No faces or hands in any photo; never replace with stock photography.
- icon: lucide-react only: Users, UtensilsCrossed, Truck, Clock, Leaf, Check, Snowflake, Pause, ArrowRight. Stroke width 1.75, 16–24px, color inherits. The portion dots, difficulty dots, steam squiggle, FIRST BOX stamp and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 8 filled #4A6B3A, a Card (#FFFFFF) bowl-glyph with a Tomato (#D6552F) steam line. No other logo: the brand name is always set as type.
- font: Install @fontsource/fraunces and @fontsource-variable/source-sans-3 and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the portion dots, difficulty dots, steam squiggle, stamp, chips and the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to API, no payments or subscriptions: the join flow saves in the browser only (localStorage) and says so.
- All links on this single page are anchors (./index.html#plan, #menu, #how, #join) plus the footer mailto.
- No real meal kit brands or their packaging; prices and per-serving math are invented and labeled (sample); no claim of real farms or delivery coverage.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- No faces or hands in any photo; plated dishes only.
- No dates or years anywhere; day chips are weekday names; the menu is 'this week' without dates; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no scales, draws, counts or pops; everything at rest; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; chips and the form work with keyboard only and visible focus rings.
- Keep copy kitchen-warm: no lorem, no 'chef-inspired'; every dish, price and step lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/meal-kit-subscription-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
