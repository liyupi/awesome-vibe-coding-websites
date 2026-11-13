# Solar Installer Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [COMPANY], a residential solar installer serving [SEGMENT] around [CITY], sample utility rate $[RATE]/kWh. It must convert through honesty: a live savings calculator (bill slider, roof select → system size, yearly savings, payback), how-it-works steps, three financing options, a six-roof gallery, a free assessment form with client-side confirmation, a trust strip and a real-questions FAQ. One page: index.html with sections (#calculator, #how, #financing, #projects, #assessment, #faq). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Homeowners with $150+ bills who have thought about solar for two years and distrust the industry's ads. They want the math visible, the assumptions stated, and someone to admit winter exists.
- Goal: Book the free assessment. Within ten seconds a visitor sees the calculator and a rooftop; within one minute they've moved the slider and seen their payback (sample-labeled).
- Tone: Straightforward and sunny, like the best estimator on the crew: real numbers, stated assumptions, zero pressure. One joke about clouds.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/manrope (OFL-1.1), @fontsource-variable/public-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (sunwhite, skymist, card, navy, navy-deep, navy-mist, slate, amber-sun, amber-deep, rule, good) and fontFamily display ['Manrope Variable', 'system-ui', 'sans-serif'], sans ['Public Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 14px and add maxWidth { container: '1200px' }.
  - In src/fonts.ts import '@fontsource-variable/manrope' and '@fontsource-variable/public-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, step, option, project, FAQ answer, rate and assumption, typed), src/lib/brand.ts (companySlug = [COMPANY] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = companySlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with companySlug + ':'), src/lib/solar.ts (pure math: monthlyKwh = bill/rate; systemKw = clamp(monthlyKwh×12/1450 × roofFactor, 3, 12); cost = systemKw×2900 before credit; yearlySavings = min(monthlyKwh×12×rate, production×rate)×0.92; paybackYears = netCost/yearlySavings; all rounded sensibly; assumptions exported for display).
  - State: src/store/assessment.ts is a tiny external store (useSyncExternalStore) holding { bill: number (from the calculator), roof: string, address, name, email, sent } persisted to localStorage key companySlug + ':assessment'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx; Hero.tsx, Calculator.tsx (BillSlider.tsx, RoofSelect.tsx, SavingsPanel.tsx), HowItWorks.tsx (StepCard.tsx), Financing.tsx (OptionCard.tsx), Projects.tsx (ProjectCard.tsx), TrustStrip.tsx, AssessmentForm.tsx (Confirmed.tsx), Faq.tsx. src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FDFBF6'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[COMPANY] — Solar for [CITY] roofs</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [COMPANY] — Company name (default: "Sunstead Solar"). Invented installer name. Used in the wordmark, title, footer, email (hello@ + companySlug without hyphens + .com) and localStorage keys. Never a real installer.
- [CITY] — City (default: "Denver, Colorado"). Where the crew installs. Used in the hero, gallery neighborhoods and footer. Real cities fine; streets invented.
- [RATE] — Sample utility rate (default: "0.14"). The sample $/kWh rate the calculator assumes (a string like '0.14'). Shown as a stated assumption; drives monthlyKwh and savings math in src/lib/solar.ts. Keep it 0.10–0.30.
- [SEGMENT] — Segment (default: "homeowners"). Who the company serves, lowercase ('homeowners', 'small businesses and warehouses'). Drives the hero line, gallery captions and FAQ voice.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/solar-installer-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Sunwhite `#FDFBF6` — Page background throughout.
- Skymist `#EEF4F8` — Alternate section background (How, Projects), hover fill, chips.
- Card `#FFFFFF` — Calculator panel, financing cards, form, confirmation.
- Navy `#1B3A5C` — Primary: headlines' ink, primary buttons, selected chips, focus ring.
- Navy Deep `#12293F` — Hover, footer background, hero overlay ink.
- Navy Mist `#E3EDF5` — Selected roof option, step number wells, chips.
- Slate `#5A6B78` — Secondary text, captions, eyebrows, assumption lines.
- Amber Sun `#F0A419` — The one accent: the savings figure, sun glyph, selected slider fill, focus-visible details, gallery output numbers.
- Amber Deep `#D08A0A` — Amber hover and pressed.
- Rule `#DEE5EA` — 1px hairlines, card borders, input borders, dividers.
- Good `#2E8B62` — Trust checks, the confirmation check, 'switch-on' accents.

### Typography
- Display: H1, H2, H3, step titles, the savings figure, the wordmark: Manrope (OFL), weights 700/800
- Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals for all math: Public Sans (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.4vw, 80px) Manrope 800, line-height 1.03; H2 clamp(28px, 3.8vw, 46px) Manrope 800; H3 20px Manrope 700; the savings figure Manrope 800 44px Amber tabular; lead Public Sans 400 17.5px / 1.65 Navy at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Public Sans 700 12px uppercase letter-spacing 0.16em Slate; caption 13px Slate. Buttons: height 50px, Public Sans 700 14px. Primary: Navy fill, Card text. Secondary: 1px Navy border, Navy text. Inputs: height 50px, 1px Rule border, Card fill, focus Navy border. Focus ring everywhere: 2px Navy outline with 3px offset.
- Radius: 14px on cards, buttons, inputs, chips, the calculator and photos. 999px only for pills, chips and the sun glyph.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and number changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Bright and confident.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 650ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Motion: Hero: the rooftop photo scales 1.04→1.0 over 2400ms; a small sun glyph rises beside the headline with rays drawing once (off under reduced motion).
- Motion: Calculator: the bill slider's fill tracks the thumb in Amber; every result counts to new values over 500ms --ease-io (tabular holds width); the payback figure ticks with a small underline draw; changing roof select crossfades the system-size line.
- Motion: How-it-works: the step connectors draw left-to-right as the section scrolls (scaleX); step numbers pop sequentially once.
- Motion: Financing cards: hover lifts 3px; the 'best for' line crossfades to a highlighted example.
- Motion: Gallery: photos scale 1.02 on hover with the output number ticking Amber; cards reveal staggered.
- Motion: Assessment: invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn sun+roof stamp scaling in and 'We''ll call within two days' with the bill echoed from the calculator.
- Motion: Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no scales, draws, counts or pops (instant values); color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Sunlit real photography, all six made for this template in one consistent style: big skies, rooftops with dark panels, warm light — houses from the street, array details, inverters and clean installs; never a person (no faces, no hands). No readable text or signage; panels are generic (no manufacturer marks). Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on Sunwhite get a 1px Rule outline. Captions in Public Sans 13px Slate. Drawn in code: the sun glyph, slider, step connectors, the stamp, chips and the favicon. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Solar (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([COMPANY] = Sunstead Solar, [CITY] = Denver, Colorado, [RATE] = 0.14, [SEGMENT] = homeowners). Put every string, number and list in src/content.ts and render from it. If any variable value differs, rewrite the hero, calculator copy and assumptions, steps, options, gallery and FAQ so they are specific and believable for the new installer, keeping the same structure and counts (5 steps, 3 financing options, 6 projects, 6 FAQs). All figures are sample math with stated assumptions (rate $[RATE]/kWh, 1,450 kWh/kW-year production, $2.90/W gross cost, assumptions listed under the calculator); no real subsidies cited as fact. Projects (name · size · first-year output · note): 'The Maple Street roof' 8.2 kW 11.9 MWh 'south-facing, half the block envies it'; 'The Fern hollow bungalow' 5.6 kW 8.1 MWh 'complex roof, patient design'; 'The Eastside duplex' 11.4 kW 16.3 MWh 'two meters, one happy landlord'; 'The Cedar court reroof' 7.8 kW 11.2 MWh 'panels after shingles, in one week'; 'The Lakeside modern' 10.2 kW 14.6 MWh 'flat roof, tilted rows'; 'The Willow garage-first' 4.4 kW 6.2 MWh 'started small, added later'.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark — sun glyph + '[COMPANY]' (Manrope 800 18px) over 'Residential solar · [CITY]' (10px uppercase Slate) — linking ./index.html. Right nav (Public Sans 600 14px): 'Savings' → #calculator, 'How it works' → #how, 'Financing' → #financing, 'Projects' → #projects, and a Navy 'Free assessment' → #assessment. Under 820px: wordmark + assessment button.
   Layout: Sticky top, height 72px, Sunwhite/95% blur, Rule border.
3. **Hero with calculator** — Two columns. Left: eyebrow 'SOLAR FOR [CITY] ROOFS'; H1 'Your roof is' / '*already paying rent.*'; lead (max-width 520px): 'To somebody. [COMPANY] makes it pay you instead — panels, paperwork and the utility dance, handled by two crews who answer their phones.'; three quick facts with Good checks: '25-year panel warranty'; 'Permit and interconnect filed for you'; 'Production guarantee, in writing'. Right: the Calculator on Card — BillSlider ('$120'→'$400/mo', default $220), RoofSelect (Small 'fits ~6 kW' / Medium 'fits ~9 kW' / Large 'fits ~12 kW+'), and the SavingsPanel: 'System size' '8.1 kW'; 'Yearly savings' '$1,860' (Amber 800 44px); 'Payback' '≈ 11 years' with the caption 'Sample math — assumes $[RATE]/kWh, 1,450 kWh/kW-yr, net of the federal credit. Your assessment gets real numbers.' A primary 'Get my free assessment' → #assessment button under the panel.
   Layout: Sunwhite background, vertical padding 104px top; left 5 cols, right 6 cols offset 1. Slider 52px-tall row; results stack with hairline dividers.
4. **How it works** — Section id='how'. Eyebrow 'FROM CALL TO SWITCH-ON' and H2 'Five steps, no mystery.' StepCards: 1) ClipboardList 'Free assessment' — '45 minutes on your roof and your bill; you get a real quote, not a brochure.' 2) PencilRuler 'Design & proposal' — 'Panel layout, production estimate, one page of numbers you can check.' 3) FileCheck 'Permits & paperwork' — 'We file with the city and the utility; you sign twice and water the lawn.' 4) Wrench 'Installation day' — 'One day, usually; two crews, no roof juggling, magnets in the gutter for nails.' 5) Zap 'Switch-on' — 'Permission to operate, app on your phone, first sunny Saturday smugness included.' A continuous connector runs through the step number wells (behind the numbers), not stubs peeking at card tops; card borders lighten or drop; under 760px the steps stack single-column with a vertical connector.
   Layout: Skymist background. Five cards in a row with drawing connectors (stack 2x3 under 1024px); numbers in 44px Navy Mist circles.
5. **Financing** — Section id='financing'. Eyebrow 'THREE WAYS TO PAY' and H2 'Money, plainly.' OptionCards: 'Solar loan' — '$0 down' — 'Fixed rate over 20 years; the loan payment usually lands under the old bill from month one.' — 'Best for: staying 10+ years, wants the tax credit'. 'Lease / PPA' — '$0 down' — 'We own the panels, you buy the power at a lower rate; simple, no credit at tax time.' — 'Best for: maximum simplicity'. 'Cash' — 'Payback fastest' — 'One check, shortest payback, best lifetime savings; the roof works for you, not the bank.' — 'Best for: the patience of a saint and the cash of one'. Caption: 'All figures sample; the proposal shows your three options side by side.'
   Layout: Sunwhite background. Three columns 24px gap; cards on Card Rule-bordered; the headline figure Manrope 800 28px; 'Best for' line in Navy 600 13px.
6. **Projects and trust** — Section id='projects'. Eyebrow 'RECENT ROOFS' and H2 'Six of the last fifty.' ProjectCards (photo, name, '8.2 kW · 11.9 MWh first year (sample)', one-liner) → the six from the roster, photos round-robin from the set. TrustStrip under: three items with Good checks — 'NABCEP-certified installers (invented badge, real standards)'; '25-year equipment and 10-year workmanship warranty'; 'We handle the utility interconnection, including the hold music'.
   Layout: Skymist background. 3x2 gallery 20px gap (2 under 900px); trust strip a hairline-bounded row of three on Sunwhite.
7. **Free assessment form** — Section id='assessment'. Eyebrow 'THE FREE ASSESSMENT' and H2 'Forty-five minutes, then you''ll know.' A Card panel: the bill pre-filled from the calculator ('$220/mo' editable slider mirror); roof select (synced); address input (placeholder 'Street or cross-streets is enough'); roof age select ('Under 10 years' / '10–20' / 'Time will tell'); name + email; primary 'Request my assessment' with caption 'Saved in this browser — the real page would reach the crew. Nothing is sent here.' Confirmed: the sun+roof stamp, 'Assessment requested.' 'We''ll call within two days to pick a time — morning slots go fast, like the sun.' the bill/roof echo, and 'Edit my request' returning pre-filled. Persisted in localStorage.
   Layout: Sunwhite background; panel max-width 640px, 28px padding, Rule border; slider mirror compact.
8. **FAQ and footer** — Section id='faq'. Eyebrow 'THE HONEST QUESTIONS' and six accordions: 'What about winter?' — 'Panels make less, your bill math already knew that; our estimate uses a full year, not July.'' 2) 'Hail?' — 'Panels are tested with 1-inch hail at 50mph; your car is more nervous than they are. Warranty covers the rest.' 3) 'What if I move?' — 'Loans transfer or settle at sale, leases sign over; we''ve walked three sellers through it this year.' 4) 'Is the payback really ~11 years?' — 'Sample math for a $220 bill. Higher bills shorten it; shading, roof angle and your rate move it — that''s what the assessment measures.' 5) 'Do I need a new roof first?' — 'If the roof has under 10 good years, yes — we''ll say so and can coordinate the reroof (see the Cedar court project).' 6) 'Batteries?' — 'Optional, quoted separately; most bills in [CITY] make sense panels-first, battery-when-prices-drop.' Footer: Navy Deep; three columns: 1) sun wordmark + '[COMPANY]' over 'Residential solar · [CITY] · two crews, one standard'; 2) 'Reach us': '118 Beacon Lane, [CITY]', hello@ + emailDomain, '(303) 555-0178'; 3) 'Around': Savings, How it works, Financing, Projects, FAQ anchors. Bottom line: '© [COMPANY]. Sample math, real sunshine.'
   Layout: FAQ on Sunwhite, rows Rule-divided, question Manrope 700 16.5px, answer 15.5px / 1.7 max-width 66ch, Plus icon right; container 760px. Footer vertical padding 64px, 3 columns, bottom line 32px below a Card/15% rule.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/hero-roof.webp → public/images/hero-roof.webp (Hero; object-position 50% 50%; alt 'A house rooftop with dark solar panels under a big blue sky'); https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/roof-modern.webp → public/images/roof-modern.webp (Gallery; alt 'A modern flat-roof home with tilted panel rows'); https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/roof-bungalow.webp → public/images/roof-bungalow.webp (Gallery; alt 'A bungalow with panels on a complex roofline'); https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/array-detail.webp → array-detail.webp → public/images/array-detail.webp (Gallery/How; alt 'A close detail of panel rows and mounting rail'); https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/inverter-wall.webp → public/images/inverter-wall.webp (How; alt 'A neat wall-mounted inverter and conduit beside a meter'); https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/golden-roof.webp → public/images/golden-roof.webp (Gallery; alt 'Rooftop panels catching golden evening light'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource-variable/manrope and @fontsource-variable/public-sans (OFL-1.1) and lucide-react (ISC). Never replace photos with stock sites or images with people, faces, hands or readable branding.
- icon: lucide-react only: Sun, ClipboardList, PencilRuler, FileCheck, Wrench, Zap, Check, Plus, ArrowRight, MapPin, Phone. Stroke width 1.75, 16–24px, color inherits. The sun glyph with rays, the sun+roof stamp, slider, step connectors and the favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 8 filled #1B3A5C, an Amber (#F0A419) sun with rays over a Card (#FFFFFF) roof line. No other logo: the company name is always set as type; no real certification marks — badges stay generic geometry.
- font: Install @fontsource-variable/manrope and @fontsource-variable/public-sans and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the sun glyph and rays, slider, step connectors, the stamp, chips and the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the calculator is pure client math in src/lib/solar.ts with stated assumptions; the assessment saves in the browser only and says so.
- All links on this single page are anchors (./index.html#calculator, #how, #financing, #projects, #assessment, #faq).
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- No real installers, panel manufacturers, utilities or certification bodies; savings and payback are sample math with assumptions displayed; no photos with people, faces or hands; no readable signage.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no scales, draws, counts or pops; slider and results update instantly; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; slider, selects and form work with keyboard only (arrow keys move the slider) and visible focus rings.
- Keep copy concrete: no lorem, no 'harness the sun'; every rate, step and output figure lives in src/content.ts with its sample label.

---
— Prompt by VibeFather · https://vibefather.ai/t/solar-installer-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
