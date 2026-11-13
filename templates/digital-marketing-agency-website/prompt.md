# Digital Marketing Agency Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [AGENCY], a [SPECIALTY] agency in [CITY] — eight people, clients that stay. It must sound like a studio that wins pitches: a declaration hero with a client ticker (invented names), five services, three case studies with sample figures that count up (each labeled sample data), a four-step process, five team cards, a three-line manifesto about [MANIFESTO_WORD], and a proposal form confirming client-side. One page: index.html with sections (#services, #work, #process, #team, #proposal). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Founders and marketing leads shortlisting three agencies from a referral thread. They skim for proof, price signals and personality — in that order — and decide in ninety seconds whether an agency sounds expensive or cheap.
- Goal: Get the proposal form filled. Within ten seconds a visitor knows what the agency does and has seen a client name scroll by; within two minutes they've read one case study's numbers and the manifesto.
- Tone: Confident, specific, allergic to fluff. Real verbs, invented-but-believable numbers, one joke about funnels. Never 'we leverage synergies'.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/space-grotesk (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (offblack, coal, bone, paper, ink-soft, lime, lime-deep, lime-mist, rule-dark) and fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 0px — brutal edges — and add maxWidth { container: '1240px' }.
  - In src/fonts.ts import '@fontsource-variable/space-grotesk' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, service, case, figure, step, person, manifesto line and client name, typed), src/lib/brand.ts (agencySlug = [AGENCY] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = agencySlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with agencySlug + ':').
  - State: src/store/proposal.ts is a tiny external store (useSyncExternalStore) holding { budget, services: string[], name, email, note, sent } persisted to localStorage key agencySlug + ':proposal'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, Ticker.tsx (the marquee), Counter.tsx (count-up on view); Hero.tsx, Services.tsx (ServiceTile.tsx), CaseStudies.tsx (CaseCard.tsx with MetricRow.tsx), Process.tsx (StepRow.tsx), Team.tsx (PersonCard.tsx), Manifesto.tsx, ProposalForm.tsx (BudgetPills.tsx, ServiceChips.tsx, SentPanel.tsx). src/pages/Home.tsx composes them.
  - No bitmap images at all — every visual is code: the hero's abstract rising-bars SVG, case-card chart glyphs (mini bar/line/donut shapes), the ticker, avatars as initials blocks and the favicon. Icons: lucide-react only, stroke width 2.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#101112'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[AGENCY] — [SPECIALTY] in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the two photographs. Keep it under 5 MB.

## Variables
- [AGENCY] — Agency name (default: "Brightline Dept."). Invented agency name. Used in the wordmark, title, footer, email (new@ + agencySlug without hyphens + .com) and localStorage keys. Never a real agency.
- [CITY] — City (default: "Brooklyn, New York"). Where the studio is. Used in the title, hero sub-line, team block and footer. Real cities fine.
- [SPECIALTY] — Specialty (default: "growth marketing"). Two words naming the discipline. Drives the title, the services grid's center of gravity and the case studies' metrics. Keep it lowercase.
- [MANIFESTO_WORD] — Manifesto word (default: "proof"). The one word the manifesto orbits ('proof', 'taste', 'momentum'). Used in the manifesto heading and one case-study line. Lowercase, one word.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/digital-marketing-agency-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Offblack `#101112` — Page background — the studio's default light setting is off.
- Coal `#1A1C1E` — Alternate section background (Services, Process), card surfaces.
- Bone `#F4F1E8` — Primary text: headlines, body, buttons on dark.
- Paper `#FBFAF6` — Inverted panels: the proposal form and sent panel flip to light.
- Ink Soft `#8E8B82` — Secondary text, captions, eyebrows, unselected chips.
- Lime `#C8F135` — The one accent: primary buttons, counters, ticker separators, selected chips, focus ring, the metric figures.
- Lime Deep `#A8CC1E` — Lime hover and pressed.
- Lime Mist `#2A2E14` — Selected chip fills on dark, metric wells.
- Rule Dark `#2E3134` — 1px hairlines, card borders, input borders, ticker edges.

### Typography
- Display: H1, H2, service tiles, case names, metric figures, the wordmark — Space Grotesk at poster sizes, uppercase: Space Grotesk (OFL), weights 500/700
- Text and UI: body, eyebrows, buttons, chips, forms, captions; tabular numerals for all figures: Inter (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 84px under 1024px, 64px under 640px. Type scale: H1 clamp(56px, 10vw, 140px) Space Grotesk 700 uppercase, line-height 0.92, letter-spacing -0.01em; H2 clamp(34px, 4.6vw, 64px) Space Grotesk 700 uppercase; service tile titles 22px Grotesk 700; metric figures Grotesk 700 56px Lime tabular; lead Inter 400 18px / 1.6 Bone at 85%; body 15.5px / 1.7 (max-width 62ch); eyebrow Inter 700 12px uppercase letter-spacing 0.22em Ink Soft; caption 13px Ink Soft. Buttons: height 54px, Inter 700 14px uppercase letter-spacing 0.08em. Primary: Lime fill, Offblack text. Secondary: 1px Bone/30% border, Bone text. Inputs: height 52px, Coal fill, 1px Rule Dark border, Bone text, focus Lime border. Focus ring everywhere: 2px Lime outline with 3px offset.
- Radius: 0px on everything — tiles, buttons, chips, cards, inputs, the form panel. Sharp is the brand.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and counters; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap and ticker pauses. Snappy and declarative.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and settle over 550ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 60ms.
- Motion: Hero: H1 words slide in from alternating sides 24px (staggered 90ms); the abstract rising-bars SVG draws its bars upward 800ms; the Ticker runs at 60px/s below the fold line, pausing on hover, static under reduced motion.
- Motion: Ticker: invented client names in Grotesk 700 uppercase separated by drawn lime squares; duplicated content for a seamless loop.
- Motion: Counters: every case-study metric counts from 0 to its figure on first view (800ms --ease-out, tabular); the % suffix pops in after the count lands.
- Motion: Service tiles: hover inverts the tile to Bone with Offblack text (200ms); the tile's icon rotates 90deg once.
- Motion: Case cards: hover lifts 0 (no lift — brutal) but the card's chart glyph (mini bars/line/donut in Lime) animates its data once per hover.
- Motion: Proposal: budget pills fill Lime Mist with Lime text on select (150ms); service chips toggle individually; invalid submit shakes 5px with inline labels; sending swaps to SentPanel (280ms --ease-io) — the panel flips to Paper with Offblack text, a drawn lime 'SENT' stamp slamming in scale 1.2→1, and the echo of budget + services.
- Motion: Links: .link-draw grows a 1px Bone underline over 220ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no ticker motion (static row), no counters (final figures), no draws or stamps; color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Two AI-generated studio photographs (fictional people) in the offblack-lime world — a war-room session and a team huddle; everything else drawn in code. The hero's rising-bars SVG, case-card chart glyphs (bars, line, donut in Lime strokes), the ticker separators, initials avatar blocks and the favicon are SVG/CSS. No stock, no office photos, no real client logos (the ticker uses invented names only), no platform brand icons. Icons: lucide-react only, stroke width 2.

## Pages & Sections
### Agency (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([AGENCY] = Brightline Dept., [CITY] = Brooklyn, New York, [SPECIALTY] = growth marketing, [MANIFESTO_WORD] = proof). Put every string and figure in src/content.ts and render from it. If any variable value differs, rewrite the hero, all services, all three cases and their metrics, steps, team, manifesto and proposal copy so they are specific and believable for the new agency, keeping the same structure and counts (5 services, 3 cases × 3 metrics, 4 steps, 5 people, 3 manifesto lines, 11 ticker names). All clients, figures and results are invented; every case card carries '(sample data)' once. Ticker names (invented): 'HEARTLINE COFFEE', 'VELOCITY LEGGING CO', 'BRAMBLE GOODS', 'NORTHSPOOL', 'ATLAS & FIG', 'KILOWATT KITCHENS', 'SUNDER WATCHES', 'FOXGLOVE FM', 'MARGIN PRESS', 'TIDEBOUND'. Services: 'Paid acquisition' — 'search, social and the audit that fixes both'; 'Lifecycle email' — 'flows that behave like a person wrote them'; 'SEO & content' — 'compounding pages, not blog confetti'; 'Creative studio' — 'ads people screenshot'; 'Analytics' — 'one dashboard, fewer lies'. Cases: 'Heartline Coffee' — 'subscription launch' — metrics '+41%' 'subscription revenue (sample)', '2.3×' 'return on ad spend (sample)', '-18%' 'churn at 90 days (sample)'; 'Velocity Legging Co' — 'holiday peak' — '4.1×' 'peak ROAS (sample)', '+212%' 'email revenue (sample)', '31k' 'new subscribers (sample)'; 'Bramble Goods' — 'rebrand + relaunch' — '+67%' 'organic traffic (sample)', '1.9×' 'conversion rate (sample)', '12' 'markets entered (sample)'. Studio photos are AI-generated fictional people matching the invented studio (not resembling any real individuals); alts stay 'the studio team, fictional people'.
   Layout: n/a
   Motion: n/a
2. **War room strip** — Full-width photograph studio-warroom.webp (16:9, alt 'The studio team mid-session around a wall of cards, fictional people') directly under the ticker — five people mid-brainstorm around a corkboard wall of cards and printouts (no readable text), marker in hand, offblack-lime world: dark room, one lime accent light, genuine energy. A mono caption bottom-right: 'tuesday, second coffee'.
   Layout: Full-bleed, 16:9 crop, Offblack-to-photo gradient edges so it melts into the page; caption in Inter 12px Ink Soft on a Coal/80% chip.
3. **Header** — Left: the wordmark '[AGENCY]' (Grotesk 700 18px uppercase) with a small lime square before it, linking ./index.html. Nav (Inter 600 13px uppercase): 'Services' → #services, 'Work' → #work, 'Process' → #process, 'Team' → #team; right a Lime 'Start a project' → #proposal. Under 760px: wordmark + start button.
   Layout: Sticky top, height 68px, Offblack/88% blur, Rule Dark border.
4. **Hero** — Eyebrow '[SPECIALTY] · [CITY] · EIGHT HUMANS'. H1: 'GROWTH IS' / 'A PORTFOLIO' / 'OF PROOFS.' (three lines, 'PROOFS.' in Lime). Lead (max-width 540px): 'We plan, ship and measure [SPECIALTY] for brands that are done guessing. Small senior team, big appetite, every number on this page earned twice.' Two CTAs: Lime 'Start a project' → #proposal and secondary 'See the numbers' → #work. Right/below: the rising-bars SVG. The Ticker pinned to the hero's bottom edge scrolling the ten invented client names.
   Layout: Offblack background, vertical padding 128px top; H1 max-width 980px; ticker full-width with Rule Dark top/bottom borders, 44px tall.
5. **Services** — Section id='services'. Eyebrow 'WHAT WE DO' and H2 'FIVE DISCIPLINES, ONE TEAM.' The five ServiceTiles in a 3+2 grid (icons: Target, Mail, FileText, PenTool, BarChart3), each with a title and the one-liner from the roster; hover inverts to Bone. A quiet line under: 'Retainers from $6k/mo; sprints from $9k. Both real numbers (sample pricing for this template).'
   Layout: Coal background. Tiles 1px Rule Dark bordered, 28px padding; the grid is deliberately uneven (2 tiles span wide) for editorial rhythm.
6. **Case studies** — Section id='work'. Eyebrow 'RECEIPTS' and H2 'CASES, WITH NUMBERS.' Three CaseCards: client name (Grotesk 700 26px), the engagement line, its chart glyph (bars for Heartline, line for Velocity, donut for Bramble), and three MetricRows with Counters (Grotesk 56px Lime tabular) — each card footer reads '(sample data)'. A closing line: 'Full case studies with methodology walk-throughs happen on the call — bring [MANIFESTO_WORD], leave with a plan.'
   Layout: Offblack background. Three columns 24px gap; cards on Coal with Rule Dark borders; metrics stack with hairlines.
7. **Process and manifesto** — Section id='process'. Eyebrow 'HOW IT GOES' and four StepRows (numbered in Grotesk 700 32px Lime): 1) 'Audit (weeks 1–2)' — 'every channel, pixel and assumption — we find the leak before we buy a bucket'; 2) 'Plan (week 3)' — 'one page of priorities; if it doesn''t fit on one page, it isn''t a plan'; 3) 'Ship (weeks 4–12)' — 'creative, campaigns and code in weekly increments you can see'; 4) 'Prove (ongoing)' — 'a dashboard your CFO will actually open, and a monthly meeting we prepare for'. The Manifesto (Bone background band, Offblack text — the page's one inversion before the form): H2 'THREE BELIEFS.' — '01 Numbers are the [MANIFESTO_WORD] that survives the meeting.' — '02 Small senior teams beat large junior ones; you will know everyone''s name by week two.' — '03 If a channel can''t explain itself in one sentence, we retire it.'
   Layout: Coal section for process (rows hairline-divided, container 760px); Manifesto full-width Bone band, 96px padding, beliefs as three Grotesk 26px lines with Inter 15px sub-lines.
8. **Team** — Section id='team'. Eyebrow 'THE EIGHT'. A wide photograph team-group.webp (4:3, alt 'Half of the studio team huddled by a monitor, fictional people') sits above the cards — three of the crew around one monitor, dark room with lime screen glow, easy laughter. Then five cards with a sixth tile reading '+3 specialists who prefer the background'. PersonCards (initials block in Lime Mist with Grotesk initials, name, role): 'JR' June Ramírez 'Founder · strategy'; 'TO' Tomas Okafor 'Paid media'; 'AL' Ada Lindqvist 'Creative director'; 'MP' Marcus Peña 'Lifecycle'; 'SY' Sofia Yamada 'Analytics'. One-liners on hover: 'June has killed more funnels than she''s built, on purpose.'; 'Tomas spends the budget like it''s his own — the good version.'; 'Ada''s ads get screenshotted, which is the metric that isn''t on the dashboard.'; 'Marcus writes emails people answer at 11pm.'; 'Sofia''s dashboards have ended three arguments this quarter.'
   Layout: Offblack background. The group photo full container width (4:3) with a Coal caption chip ('the Tuesday review, fictional people'); six-tile grid 16px gap below; initials blocks 72px; one-liners appear on hover/focus with 150ms fade (shown statically on touch).
9. **Proposal form** — Section id='proposal'. Eyebrow 'START A PROJECT' and H2 'TELL US THE AMBITION.' The ProposalForm on Paper (Offblack text — inverted): BudgetPills ('$3–6k/mo' / '$6–12k/mo' / '$12k+/mo' / 'one-off sprint'); ServiceChips (the five, multi-select); name + email; note textarea (placeholder 'What are we growing? Deadlines welcome.'); Lime 'Request a proposal' with caption 'Saved in this browser — the real page would reach the studio. Nothing is sent here.' SentPanel: the lime 'SENT' stamp, 'Received, [NAME].' 'We reply within two working days with questions, then a proposal — in that order.' budget + services echo, and 'Edit the request' returning pre-filled. Persisted in localStorage.
   Layout: Offblack background with the Paper panel max-width 680px, 32px padding, 0px radius; two-column name/email stacks under 560px.
10. **Footer** — Offblack with a Rule Dark top border: left the lime square + '[AGENCY]' over '[SPECIALTY] · [CITY] · since a very good year'; center anchors (Services, Work, Process, Team, Start a project); right 'new@ + emailDomain' and 'Mon–Fri, loudly'. Bottom line: '© [AGENCY]. Case figures are sample data; the confidence is not.'
   Layout: Vertical padding 56px, three-part row, bottom line 28px below a Bone/10% hairline.

## Assets
- image: Template photographs made for this design (free to redistribute with the template): https://media.vibefather.ai/assets/7529c0a6-693b-4a9e-9bc0-3c3e8272b890/studio-warroom.webp → public/images/studio-warroom.webp (The war-room strip under the hero; alt 'The studio team mid-session around a wall of cards, fictional people'); https://media.vibefather.ai/assets/7529c0a6-693b-4a9e-9bc0-3c3e8272b890/team-group.webp → public/images/team-group.webp (Team section; alt 'Half of the studio team huddled by a monitor, fictional people').
- icon: lucide-react only: Target, Mail, FileText, PenTool, BarChart3, ArrowRight, Check, X, Plus. Stroke width 2, 16–24px, color inherits. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 square (0 radius) filled #101112, three Lime (#C8F135) bars of increasing height. No other logo: the agency name is always set as type; no real client logos or platform marks anywhere.
- image: Drawn in code only — no photos, no stock, no external images. The hero rising-bars SVG, case-card chart glyphs (bars/line/donut), ticker separators, initials blocks, the SENT stamp and the favicon are SVG/CSS. Write ASSETS.md listing lucide-react (ISC), @fontsource-variable/space-grotesk and @fontsource-variable/inter (OFL-1.1), noting 'No image assets; all visuals drawn in code.'
- font: Install @fontsource-variable/space-grotesk and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the proposal saves in the browser only (localStorage) and the form says so; case figures are invented sample data labeled as such.
- All links on this single page are anchors (./index.html#services, #work, #process, #team, #proposal).
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 3 MB.
- Portraits and studio photographs are AI-generated fictional people (not resembling any real individual) used as template placeholders; no real people appear anywhere.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: static ticker (no loop), counters show final figures, no stamps or draws; color/border hover inversions stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; pills, chips and form work with keyboard only and visible focus rings (Lime on both backgrounds).
- Keep copy confident and concrete: no lorem, no 'synergies'; every metric, price and belief lives in src/content.ts with its sample label.

---
— Prompt by VibeFather · https://vibefather.ai/t/digital-marketing-agency-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
