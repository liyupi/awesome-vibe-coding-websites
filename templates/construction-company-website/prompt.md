# Construction Company Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [COMPANY], a construction and renovation company in [CITY] — [TRADE] for [YEARS] years. It must look like a firm that cleans up after itself: four services with from-pricing, a filterable six-project gallery, a plain safety/credentials strip, a five-step process, and a quote request confirming client-side. One page: index.html with sections (#services, #work, #safety, #process, #quote). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Homeowners 35–65 with a renovation budget and a horror story about their cousin's contractor. They want proof of finished work, straight pricing signals and someone accountable by name.
- Goal: Produce quote requests. Within ten seconds a visitor sees craft and the quote CTA; within two minutes they've filtered the gallery to their project type and opened the form.
- Tone: Straight builder-talk: short sentences, exact numbers, pride without shouting. One joke about dust.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/barlow-condensed (OFL-1.1), @fontsource-variable/barlow (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (scaffoldwhite, mist, card, blueprint, blueprint-deep, blueprint-mist, ink, slate, safety, safety-deep, rule, good) and fontFamily display ['Barlow Condensed', 'Arial Narrow', 'sans-serif'], sans ['Barlow Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 4px and add maxWidth { container: '1200px' }.
  - In src/fonts.ts import '@fontsource/barlow-condensed/500.css', '@fontsource/barlow-condensed/600.css' and '@fontsource-variable/barlow'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, service, project, step, credential, hour and image path, typed), src/lib/brand.ts (companySlug = [COMPANY] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = companySlug without hyphens + '.com', phoneDigits for tel:), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with companySlug + ':'), src/lib/gallery.ts (applyCategory(projects, key)).
  - State: src/store/quote.ts is a tiny external store (useSyncExternalStore) holding { type, budget, timeline, name, phone, email, note, sent } persisted to localStorage key companySlug + ':quote'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, BlueprintRule.tsx (a drawn dimension-line divider); Hero.tsx, Services.tsx (ServiceCard.tsx), Work.tsx (FilterChips.tsx, ProjectCard.tsx), Safety.tsx (CredRow.tsx), Process.tsx (StepRow.tsx), CrewNote.tsx, QuoteForm.tsx (TypeChips.tsx, BudgetPills.tsx, Sent.tsx). src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F7F8F9'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[COMPANY] — [TRADE] in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [COMPANY] — Company name (default: "Rourke & Sons"). Invented company name. Used in the wordmark, title, footer, email (build@ + companySlug without hyphens + '.com') and localStorage keys. Never a real firm.
- [CITY] — City (default: "Pittsburgh, Pennsylvania"). Where the firm works. Used in the title, hero, project neighborhoods and footer. Real cities fine; streets invented.
- [TRADE] — Trade (default: "renovations and additions"). One lowercase phrase naming the core work. Drives the title, the first service card and one case. Keep it plain.
- [YEARS] — Years in business (default: "18"). Two-digit year count. Used once in the trust strip and the hero eyebrow. Keep it 8–40.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/construction-company-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Scaffold White `#F7F8F9` — Page background throughout.
- Mist `#EDF0F2` — Alternate section background (Services, Process), chips, hover fill.
- Card `#FFFFFF` — Project cards, the quote panel, sent state.
- Blueprint `#1F3A5F` — Primary: headlines' ink, primary buttons, selected chips, step numbers, focus ring.
- Blueprint Deep `#162B47` — Hover and pressed, footer background.
- Blueprint Mist `#E4EAF2` — Selected chip fills, icon wells, dimension ticks.
- Ink `#23272C` — Body text, icon color.
- Slate `#5B6670` — Secondary text, captions, eyebrows, unavailable states.
- Safety `#F26B21` — The one accent: the quote CTA, from-prices, filter active, dimension numbers, focus-visible extras.
- Safety Deep `#D5560E` — CTA hover and pressed.
- Rule `#D9DEE3` — 1px hairlines, card borders, input borders, blueprint grid lines.
- Good `#2F855A` — Credential ticks, sent check, warranty note.

### Typography
- Display: H1, H2, service names, project names, from-prices, the wordmark — Barlow Condensed, sturdy and workmanlike: Barlow Condensed (OFL), weights 500/600
- Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for prices and spans: Barlow (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(44px, 6.6vw, 84px) Barlow Condensed 600 uppercase, line-height 0.98; H2 clamp(30px, 4vw, 50px) Condensed 600 uppercase; service names Condensed 600 22px; from-prices Condensed 600 24px Safety tabular; lead Barlow 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Barlow 700 12px uppercase letter-spacing 0.18em Slate; caption 13px Slate. Buttons: height 52px, Barlow 700 14px uppercase letter-spacing 0.06em. Primary: Blueprint fill, Card text. Quote CTA: Safety fill, Card text. Secondary: 1px Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Blueprint border. Focus ring everywhere: 2px Blueprint outline with 3px offset.
- Radius: 4px on cards, buttons, inputs, chips and photos — site-plan corners. 999px only for pills and filter chips.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and gallery shuffles; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Level and sure.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 650ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 65ms.
- Motion: Hero: the project photo scales 1.03→1.0 over 2000ms; the H1 rises 14px; a dimension-line rule draws under the eyebrow once with Safety tick numbers.
- Motion: Service cards: hover slides a 2px Blueprint rule from the left and the from-price ticks up 2px.
- Motion: Gallery filtering: cards use Motion layout popLayout (200ms out / 380ms glide); the live count crossfades; the empty state reads 'No projects in that combination yet — the portfolio grows weekly.'
- Motion: Project cards: hover lifts 3px and the category chip fills Blueprint.
- Motion: Process: the connector line draws downward as the section scrolls; step numbers pop in sequence.
- Motion: Quote form: chips fill Blueprint Mist→Blueprint on select (150ms); invalid submit shakes 4px with inline labels; sending swaps to Sent (300ms --ease-io) — a drawn Safety 'ON THE BOARD' job-ticket stamp rotating in -6deg→-2deg, 'Got it, [NAME].' 'We call within two business days to schedule the walkthrough.' selection echo, 'Edit the request' pre-filled. Persisted in localStorage.
- Motion: Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no scales, draws, shuffles or stamps; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Real photography, all six made for this template in one consistent style: crisp daylight, finished craftsmanship and honest jobsite detail — generic unbranded tools and materials, no logos. The site-lead portrait is an AI-generated fictional person (hard hat under arm, plans in hand) — a placeholder a real firm swaps for its own lead's photo. No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 4px corners, no shadow. Captions in Barlow 13px Slate. Drawn in code: the favicon, dimension-line dividers, the job-ticket stamp, chips and the filter dots. Icons: lucide-react only, stroke width 2.

## Pages & Sections
### Company (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([COMPANY] = Rourke & Sons, [CITY] = Pittsburgh, Pennsylvania, [TRADE] = renovations and additions, [YEARS] = 18). Put every string and number in src/content.ts and render from it. If any variable value differs, rewrite the hero, four services, six projects, safety rows, five steps and quote copy so they are specific and believable for the new firm, keeping the same structure and counts. All projects, clients and figures are invented; before/after notes describe work, not addresses. Facts: address '2210 Forge Street, [CITY]' invented; phone (412) 555-0182; office Mon–Fri 7:00–17:00; license 'GC-4471 (invented)'; fully insured, $2M general liability; five-person crew plus licensed subs; two-year workmanship warranty. Services: 'Whole-home renovations' 'kitchens, baths, floors and the walls between them' from $18,000; 'Additions' 'sunrooms, dormers and the permits that come with them' from $45,000; 'Kitchens & baths' 'the two rooms that sell a house and start a marriage debate' from $12,000; 'Exteriors' 'decks, porches, siding and roofs that keep the rain honest' from $6,500. Projects (name · category · note · figure): 'The Squirrel Hill double-gable' Additions 'a dormer that paid for itself in bedrooms' 14 weeks; 'A millworker''s kitchen' Renovation 'quarter-sawn oak, quiet hardware, zero trends' 9 weeks; 'The brick row-house gut' Renovation 'down to the joists, back to better' 16 weeks; 'Forge Street deck & pergola' Exteriors 'steel-footed, snow-rated, dinner-tested' 3 weeks; 'The sunroom that replaced the porch' Additions 'four seasons, one skylight argument, settled' 7 weeks; 'Bathroom, re-plumbed' Renovation 'moved the stack, kept the tile line' 5 weeks. Safety rows: 'Licensed & insured' 'GC-4471 (invented), $2M liability, certificates on request' Good; 'Site safety' 'OSHA-trained crew (generic), dust barriers on every interior job' Good; 'Clean sites' 'broom-clean at day''s end; magnet sweep on nails' Good; 'Two-year warranty' 'workmanship, in writing, on every invoice' Good. Process: 1 'Walkthrough & estimate' 'we measure, listen, and price in ranges before quoting'; 2 'Scope & contract' 'one page of numbers you can hold us to'; 3 'Permits & scheduling' 'we pull them, we sequence them, you get a calendar'; 4 'Build weeks' 'daily photos to your phone, weekly walkthroughs'; 5 'Punch list & clean' 'we leave it better than the drawings, or we aren''t done'.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[COMPANY]' (Condensed 600 20px uppercase) over '[TRADE] · [CITY]' (10px uppercase Slate) linking ./index.html. Right nav (Barlow 600 13px uppercase): 'Services' → #services, 'Our work' → #work, 'Safety' → #safety, 'Process' → #process; a small Safety 'Get a quote' → #quote. Under 780px: wordmark + quote button.
   Layout: Sticky top, height 70px, Scaffold White/95% blur, Rule border.
3. **Hero** — Two columns. Left: eyebrow 'EST. [YEARS] YEARS · [CITY]'; H1 'BUILT RIGHT.' / '*CLEANED UP AFTER.*' Lead (max-width 500px): '[COMPANY] does [TRADE] with a five-person crew, daily photos and a broom-clean site every evening — quoted flat, finished on the calendar we hand you.' Primary 'Get a quote' → #quote and secondary 'See the work' → #work; trust row: 'Flat quotes, in writing'; 'Two-year warranty'; 'Daily photo updates'. Right: work-kitchen.webp (4:3) with the caption 'A millworker''s kitchen, week nine'.
   Layout: Scaffold White background, vertical padding 104px top; left 6 cols, right 5 cols offset 1.
4. **Services** — Section id='services'. Eyebrow 'WHAT WE BUILD' and H2 'FOUR TRADES, ONE CREW.' Four ServiceCards (icon, name, line, from-price): the roster. A caption: 'Every price is a starting point we sharpen after the walkthrough — never a hook.'
   Layout: Mist background. 2x2 grid 20px gap; cards on Card Rule-bordered; from-prices in Safety Condensed.
5. **Work** — Section id='work'. Eyebrow 'RECENT WORK' and H2 'SIX PROJECTS, FILTERED HONESTLY.' FilterChips (All · Renovation · Addition · Exterior) with a live count; six ProjectCards (photo 4:3, name Condensed, note, weeks badge): the roster; reshuffle on filter. A closing line: 'Addresses withheld, references gladly shared — ask on the walkthrough.'
   Layout: Scaffold White background. 3x2 grid 20px gap (2 under 900px); weeks badges as Blueprint-mist pills.
6. **Safety and crew note** — Section id='safety'. Eyebrow 'LICENSED, INSURED, TIDY' and H2 'THE BORING STUFF, DONE RIGHT.' Four CredRows with Good ticks: the roster. Beside them the CrewNote: lead-ray.webp portrait (3:4, blueprint-mist frame) with the caption 'Ray Rourke, site lead — a fictional builder' and the note: 'Ray runs every job you''ve seen above. Ask him about the deck that survived four winters and one graduation party (sample story).' A trust strip under: '[YEARS] years · ~300 projects (sample) · two-year workmanship warranty'.
   Layout: Mist background. Cred rows 7 cols hairline-divided; note 4 cols offset 1 with portrait atop; trust strip a hairline-bounded row.
7. **Process and quote form** — Section id='process'. Eyebrow 'HOW IT GOES' and H2 'FIVE STEPS, NO MYSTERY.' Five StepRows with the drawing connector. Section id='quote'. Eyebrow 'GET A QUOTE' and H2 'TELL US WHAT YOU''RE DREAMING.' QuoteForm on Card: TypeChips (the four services); BudgetPills ('Under $15k' / '$15–50k' / '$50–100k' / '$100k+'); timeline select ('ASAP' / 'This season' / 'Planning ahead'); name + phone + email; note textarea (placeholder 'The room, the problem, the Pinterest board — any of it helps.'); primary Safety 'Request the quote' with caption 'Saved in this browser — the real page emails the office. Nothing is sent here.' Sent: the ON THE BOARD stamp, 'Got it, [NAME].' 'We call within two business days to schedule the walkthrough.' type/budget echo, 'Edit the request' pre-filled. Persisted in localStorage. Footer (Blueprint Deep, bone text): wordmark, '[TRADE] · [CITY] · [YEARS] years', '2210 Forge Street', (412) 555-0182 tel:, build@ + emailDomain; bottom line '© [COMPANY]. Figures are sample data; the dust jokes are real.'
   Layout: Process max-width 760px; the quote panel max-width 640px; footer three-part row with bottom line.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-kitchen.webp → public/images/work-kitchen.webp (Hero, kitchen project card; alt 'A finished craftsman kitchen with oak cabinets and stone counters'); https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-dormer.webp → public/images/work-dormer.webp (Additions cards; alt 'A new dormer gable on a brick family home'); https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-gut.webp → public/images/work-gut.webp (Renovation card; alt 'A gutted row-house interior with new framing exposed'); https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-deck.webp → public/images/work-deck.webp (Exteriors cards; alt 'A steel-footed cedar deck with a pergola at dusk'); https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-bath.webp → public/images/work-bath.webp (Renovation card; alt 'A re-plumbed bathroom with subway tile and brass fixtures'); https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/lead-ray.webp → public/images/lead-ray.webp (Crew note; alt 'Ray Rourke, a fictional builder, hard hat under arm'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/barlow-condensed and @fontsource-variable/barlow (OFL-1.1) and lucide-react (ISC). The site-lead portrait is an AI-generated fictional person per the portrait rules; tools and materials stay generic/unbranded; no readable signage.
- icon: lucide-react only: Hammer, Home, ChefHat, Layers, FileCheck, ShieldCheck, Camera, Broom, Check, Plus. Stroke width 2, 16–24px, color inherits. The dimension-line dividers, the ON THE BOARD stamp, chips and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 square filled #1F3A5F, a Safety (#F26B21) house-gable outline with a Card (#FFFFFF) dimension tick. No other logo: the company name is always set as type.
- font: Install @fontsource/barlow-condensed and @fontsource-variable/barlow and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the dimension-line dividers with Safety ticks, the job-ticket stamp, chips, filter dots and the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the quote request saves in the browser only (localStorage) and says so; tel: links are built from the phone digits.
- All links on this single page are anchors (./index.html#services, #work, #safety, #process, #quote) plus the footer mailto.
- No real firms, clients, addresses or project locations; license and insurance described generically with invented numbers; no OSHA or certification-body logos — ticks and text only.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- The site-lead portrait is an AI-generated fictional person, not any real individual; no other people in photos; no readable text, signage or brand marks on tools, materials or vans.
- No dates or years anywhere except 'EST. [YEARS] YEARS'; projects carry week counts, never dates; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no scales, draws, shuffles or stamps; everything at rest; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; chips, selects and the form work with keyboard only and visible focus rings.
- Keep copy builder-plain: no lorem, no 'dream space' clichés; every price, week and credential lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/construction-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
