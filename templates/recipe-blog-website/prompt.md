# Recipe Blog Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A two-page recipe blog by [COOK], a home cook writing about [ANGLE]: a filterable home grid and recipe pages (?r=<slug>) with a live servings scaler, ingredient checklist, per-step timers, a print view, the cook's about block and an honest subscribe line. Pages: index.html, recipe.html?r=<slug> (first recipe without one). Everything runs in the browser; nothing is submitted anywhere.

- Audience: People cooking tonight with a phone propped against the flour tin: they scale servings with two taps, tick ingredients off while shopping, and set a timer without leaving the page.
- Goal: Cook the recipe. Within ten seconds a visitor sees a dish they'd eat; within two minutes they've scaled the recipe to four and started a timer.
- Tone: Kitchen-table warm: one small story per recipe, exact grams, no fuss. One joke about doing the dishes.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/fraunces (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors). Two real HTML pages at the project root: index.html (entry src/main-index.tsx), recipe.html (entry src/main-recipe.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), recipe: resolve(__dirname, 'recipe.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './recipe.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (cream, panel, line, ink, softink, tomato, tomato-deep, tomato-mist, sage, slateink, good) and fontFamily display ['Fraunces', 'Georgia', 'serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 12px and add maxWidth { container: '1200px', read: '760px' }.
  - In src/fonts.ts import '@fontsource/fraunces/400.css', '@fontsource/fraunces/600.css', '@fontsource/fraunces/400-italic.css' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from both entry files.
  - File layout: src/content.ts (cook profile, recipes — { slug, title, blurb, course: 'mains'|'pasta'|'salads'|'baking', diets: string[], time: minutes, difficulty: 'easy'|'medium', serves, heroImage, heroAlt, story: string[], ingredients: { qty?: number, unit?: string, item: string }[], steps: { text, minutes?: number }[] }, every string typed), src/lib/brand.ts (cookSlug = [COOK] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = cookSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys cookSlug + ':checks:<recipe>' and ':sub'), src/lib/scale.ts (scaleQty(qty, factor) with sensible rounding — grams and ml to whole numbers near 10, spoons to halves, countable to whole; never render 0.87 eggs), src/lib/route.ts (reads ?r=, resolves or falls back to the first recipe — never not-found).
  - State: src/store/checks.ts is a tiny external store (useSyncExternalStore) holding checked ingredient indexes per recipe persisted to localStorage; src/store/timers.ts holds per-step timer state { remaining, running } driven by one 1s interval (the tick is information — it continues under reduced motion, without animations); src/store/sub.ts holds the subscribe line state.
  - Components in src/components/: Header.tsx, Footer.tsx, SubscribeLine.tsx; home: LeadCard.tsx, FiltersBar.tsx (CourseChips, DietChips), RecipeGrid.tsx (RecipeCard.tsx with TimeChip.tsx, DifficultyDots.tsx, DietTag.tsx), AboutCook.tsx; recipe: RecipeHero.tsx, ServingsScaler.tsx (stepper +/-), IngredientList.tsx (CheckRow.tsx), MethodList.tsx (StepRow.tsx with StepTimer.tsx), PrintButton.tsx, RelatedRecipes.tsx. Pages: src/pages/Home.tsx, Recipe.tsx.
  - ServingsScaler: a stepper (− / count / +, bounds 1–12) with a live label 'Serves 4'; every ingredient quantity recomputes through scaleQty as the stepper moves; fractional-impossible items round up with the count highlighted once (140ms pop).
  - StepTimer: when a step has minutes, a chip '12 min' beside it starts a timer on click — the chip becomes a mono countdown (mm:ss) with Pause/Reset; at zero it flips to a Good 'Done — check it' state with a gentle one-time ring animation (skipped under reduced motion).
  - Print view: a dedicated print stylesheet (@media print in index.css) that hides the header, filters, timers UI, scaler stepper and footer, and outputs the recipe as one clean sheet: title, meta line, ingredients in two columns, numbered steps; page margins 15mm. PrintButton (window.print()) lives in the recipe header.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBF6EC'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[COOK] — recipes</title>; recipe.html sets document.title on load.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the two HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and six images. Keep it under 9 MB.

## Variables
- [COOK] — Cook name (default: "June Halloran"). The invented cook's name. Used in the wordmark, about block, footer and email (hello@ + cookSlug without hyphens + '.com'). Never a real cook or food writer.
- [ANGLE] — Blog angle (default: "weeknight cooking that survives a Tuesday"). One lowercase phrase naming the blog's angle. Rewrites the hero line, the about block and each recipe's story so they fit. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/recipe-blog-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Cream `#FBF6EC` — Page background throughout — warm kitchen light.
- Panel `#FFFFFF` — Cards, ingredient panel, scaler.
- Line `#E7DECB` — 1px hairlines: card borders, dividers, checked rows.
- Ink `#26221A` — Headlines and body ink, icons.
- Soft Ink `#6E6656` — Blurbs, meta, captions, eyebrows.
- Tomato `#C8442E` — The one accent: primary buttons, active chips, checked ticks, timer running, focus ring, links.
- Tomato Deep `#A63623` — Hover and pressed primary.
- Tomato Mist `#F9E8E1` — Selected chip fills, diet tags, timer done tint.
- Sage `#7C8A5A` — Diet tag green (vegetarian), difficulty dots' filled state.
- Slate Ink `#231109` — Text on tomato fills.
- Good `#4C8A54` — Timer done, subscribe success, check ticks.

### Typography
- Display: H1, recipe titles, the wordmark, italic story lines — Fraunces, warm kitchen serif: Fraunces (OFL), weights 400/600
- Text and UI: body, steps, forms, timers; tabular numerals for quantities and countdowns: Inter (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; reading column max 760px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 clamp(34px, 4.8vw, 58px) Fraunces 600, line-height 1.06; recipe titles clamp(28px, 3.8vw, 44px) Fraunces 600; card titles Fraunces 600 20px; lead 17px Inter 400 / 1.65 at 90%; body 15.5px / 1.7; story paragraphs Fraunces italic 18px / 1.7; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; meta and captions 13px Soft Ink; quantities Inter 600 15px tabular. Buttons: height 46px, Inter 600 14px; primary Tomato fill with white text, ghost 1px Line border on Panel. Inputs: height 46px, Panel fill, 1px Line border, focus Tomato border + 2px offset ring. Focus everywhere: 2px Tomato outline, 3px offset.
- Radius: 12px on cards and panels; 10px on buttons, inputs, chips; 999px for pills and timer chips.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Kitchen-calm: quick, small moves.
- Motion: Reveal: cards and blocks rise 10px over 500ms as they enter (Motion whileInView, once); grid staggers 50ms per card.
- Motion: LeadCard: its photo settles from scale 1.02 over 1200ms once.
- Motion: Filtering: chips fill Tomato Mist with a 140ms ease; cards dim 20% and sink 2px when filtered out (180ms); the count line crossfades.
- Motion: ServingsScaler: quantity changes crossfade 120ms; an item rounding up pops its count once (140ms).
- Motion: CheckRow: the tick draws (SVG stroke, 160ms) and the text takes a soft strike; unchecking reverses.
- Motion: StepTimer: the countdown's digits swap without animation (tabular width holds); 'Done' flips the chip to Tomato Mist with a single ring pulse (skipped under reduced motion).
- Motion: Subscribe: crossfades to the Good line (240ms).
- Motion: Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no reveals, settles, pops or pulses; the tick keeps counting (information); color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: Six editorial food photographs made for this template in one consistent style: natural daylight, linen and ceramic surfaces, finished home-cooked dishes — a braised tomato butter pasta, a roast chicken platter, a grain salad bowl, a greens-and-egg skillet, and a plum cake slice. No people (except the cook's portrait), no readable text, no logos, no brand-name packaging. The cook portrait is an AI-generated fictional person (a woman in her 30s at a kitchen counter, natural working shot, not resembling any real individual). Photos object-fit cover, 12px corners; cards get a 1px Line outline. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Pages & Sections
### Recipe home (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([COOK] = June Halloran, [ANGLE] = weeknight cooking that survives a Tuesday). Put every string, recipe and step in src/content.ts and render from it. If any variable differs, rewrite the hero line, the about block, all six recipes (titles, stories, ingredients, steps) so they are specific and believable for that blog, keeping the same structure and counts (5 recipes, 6–9 ingredients each, 4–6 steps each, at least four steps carrying timer minutes). Recipes (slug · title · course · diets · time · difficulty · serves · image): 'tomato-butter-pasta' 'Tomato Butter Pasta for Tired People' pasta ['vegetarian'] 25 easy 4 pasta.webp; 'sheet-pan-chicken' 'Sheet-Pan Chicken, Two Lemons' mains [] 50 easy 4 chicken.webp; 'farro-salad' 'Farro Salad with Everything Green' salads ['vegetarian'] 35 medium 4 salad.webp; 'greens-eggs' 'Greens and Eggs, One Skillet' mains ['vegetarian','gluten-free'] 20 easy 2 skillet.webp; 'plum-cake' 'Brown Butter Plum Cake' baking ['vegetarian'] 65 medium 8 cake.webp. Each recipe's story: 2 short Fraunces-italic paragraphs in the cook's voice (sample: the pasta's story begins 'The title is the recipe.'). Ingredients in grams/ml/countable units so the scaler shines (e.g. 400 g rigatoni; 60 g butter; 3 cloves garlic; 1 lemon). Steps with minutes where timers belong (e.g. pasta: 'boil the pasta 11 min', 'crisp the butter 3 min'). All quantities, times and stories are invented sample content. AboutCook: the portrait, '[COOK]' (Fraunces 600 22px), the line 'Home cook. Writes about [ANGLE].' and two sentences ('I cook in a small kitchen with one good knife and strong opinions about Tuesday.' / 'Everything here is tested at least twice — once for us, once for you (sample).'), plus the SubscribeLine.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[COOK]' (Fraunces 600 20px) over 'RECIPES · [ANGLE]' (10px uppercase Soft Ink). Right (Inter 500 14px): 'Recipes' → #recipes, 'About' → #about. Under 720px: wordmark only.
   Layout: Sticky top, 64px, Cream at 95% with backdrop blur, Line bottom border.
3. **Hero and lead card** — Eyebrow 'COOKED THIS WEEK'; H1 'Dinner, without the drama.'; lead 'Five recipes that respect a weeknight — exact grams, honest times, and one pan where one pan will do.' The LeadCard (tomato-butter-pasta): a wide 16:9 photo left (7 cols), the recipe block right (5 cols) — course chip, title (Fraunces 600 34px), blurb, the meta row (TimeChip 25 min · DifficultyDots easy · Serves 4 · DietTag vegetarian), a primary 'Cook this one' → ./recipe.html?r=tomato-butter-pasta, and a ghost 'Jump to all recipes' → #recipes.
   Layout: Cream background; LeadCard is a Panel card with Line border, 16px radius; 96px top padding.
4. **Recipe grid with filters** — Section id='recipes'. Eyebrow 'THE RECIPE BOX'; H2 'Five keepers, filterable.' FiltersBar: CourseChips (All / Mains / Pasta / Salads / Baking) and DietChips (Vegetarian / Gluten-free), multi-select for diets, single for course; the count line 'Showing 5 of 5'. RecipeGrid: 3-column RecipeCards (5 cards) (photo 4:3, course chip, title, blurb, meta row with TimeChip and DifficultyDots and DietTags) linking recipe pages.
   Layout: Cream background; 3 columns 24px gap (2 under 1000px, 1 under 640px).
5. **About and footer** — Section id='about': the portrait (3:4, 4 cols) with the caption 'June, mid-tasting (fictional cook, real opinions)'; the bio block (7 cols, offset 1) per the roster, ending with the SubscribeLine ('One email when a new keeper lands' — input + 'Subscribe', small print 'Demo: saved in this browser only', success Good line). Footer: left wordmark + 'hello@' + emailDomain; right '© [COOK]. Recipes are invented sample content — cook them anyway.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: About two-column; footer 72px, Line top border.

### Recipe (`recipe.html`)
1. **Recipe view** — Reads ?r=<slug>; with no query the first recipe (tomato-butter-pasta) renders. RecipeHero: breadcrumb '← All recipes' → ./index.html#recipes; title (H1); the meta row (TimeChip · DifficultyDots · Serves base · DietTags); the story paragraphs (Fraunces italic); PrintButton (ghost, 'Print this recipe') right-aligned. Below, a 5:7 split: IngredientList (sticky on desktop) — the ServingsScaler at its head, then CheckRows ('400 g' tabular + item), a 'Clear checks' ghost link, and a footnote 'Checks save in this browser'; MethodList — StepRows (numbered 01–06, text, StepTimer chip when minutes exist), the last row closing with the dishes joke ('Done. The dishes still exist — sorry.'). RelatedRecipes at the foot: 'Also good' — three RecipeCards from the remaining recipes. document.title set from the recipe title on load.
   Layout: Cream background; ingredients 5 cols (sticky, Panel card), steps 7 cols; stacked under 900px with ingredients first; footer as home.

## Assets
- image: Template photos made for this design (free to redistribute with the template), one kitchen-editorial style: natural daylight, linen and ceramics, no readable text, no logos, no people. Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/pasta.webp → public/images/pasta.webp (Lead + recipe hero; alt 'Tomato butter pasta in a ceramic bowl'); https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/chicken.webp → public/images/chicken.webp (Sheet-pan chicken card + hero; alt 'Roast chicken with lemons on a sheet pan'); https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/salad.webp → public/images/salad.webp (Farro salad card + hero; alt 'A grain salad with herbs and greens'); https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/skillet.webp → public/images/skillet.webp (Greens and eggs card + hero; alt 'Greens and eggs in a cast-iron skillet'); https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/cake.webp → public/images/cake.webp (Plum cake card & hero; alt 'A slice of plum cake on a ceramic plate'); https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/cook-portrait.webp → public/images/cook-portrait.webp (About block; alt 'Portrait of the cook at her kitchen counter'). Six files in total; the portrait is an AI-generated fictional person, not resembling any real individual.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row per photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/fraunces and @fontsource-variable/inter (OFL-1.1) and lucide-react (ISC). State that the cook portrait is an AI-generated fictional person and recipes are invented originals.
- icon: lucide-react only: ArrowLeft, Check, Clock, Minus, Pause, Play, Plus, Printer, RotateCcw, Timer. Stroke width 1.75, 14–22px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #C8442E, a white drawn pot glyph with a lid handle. No brand logos.
- font: Install @fontsource/fraunces and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: check ticks, difficulty dots, timer chips, the favicon. No other bitmaps beyond the seven photos.

## Don'ts
- No backend, no form submission, no fetch to API: checks, timers state and the subscribe line persist in localStorage only, and the copy says so; printing is a stylesheet, not a service.
- Every internal link points to a file name or anchor (./index.html, ./index.html#recipes, ./recipe.html?r=plum-cake) — never to a bare directory; recipe.html without a query shows the first recipe, never an error.
- No real food bloggers, chefs, publications or their recipes; all recipes, stories, quantities and times are invented originals with ordinary techniques.
- No nutrition or health claims; no medical language; 'gluten-free' appears only as a recipe tag on recipes written without gluten ingredients.
- The cook portrait is an AI-generated fictional person, not resembling any real individual; other photos contain no people, no readable text, no logos, no brand-name packaging.
- No dates or timestamps from the real clock ('Cooked this week' is static sample copy); nothing prints today's date or years.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 9 MB.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no reveals, pops or pulses; the timer keeps counting and flipping digits (information); color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; scaler, checks, timers, print and filters work with keyboard only and visible focus rings.
- Keep quantities sane when scaling: never 0.87 eggs or 13 g of saffron — scaleQty rounds countables to whole and small-quantity spices cap sensibly; every string lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/recipe-blog-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
