# Management Consulting Firm Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [FIRM], a management consulting firm in [CITY] focused on [SPECIALTY], [ENGAGEMENTS]+ engagements (sample). It must read like the partners talk: five practice areas, six insights posts, three anonymized cases with sample figures, four partner portraits (AI-generated fictional people), a trust strip, and an engagement request confirming client-side. One page: index.html with sections (#practices, #insights, #cases, #people, #contact). Everything runs in the browser; nothing is submitted anywhere.

- Audience: CEOs and COOs of $10M–$200M companies who need senior help but distrust big-firm theaters. They skim for evidence of thinking: sharp posts, anonymized cases with numbers, partners who sound like operators.
- Goal: Start the engagement conversation. Within ten seconds a visitor knows the specialty; within two minutes they've read one insight and one case and opened the contact form.
- Tone: Partner-voice: short declaratives, real trade-offs, occasional dry wit. Never 'synergies'. Sample labels on every number.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/spectral (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (offwhite, mistpaper, inknavy, steel, steel-mist, slate, rule, brassline) and fontFamily display ['Spectral', 'Georgia', 'serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 2px and add maxWidth { container: '1200px' }.
  - In src/fonts.ts import '@fontsource/spectral/500.css', '@fontsource/spectral/600.css' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, practice, post, case, partner, stat and image path, typed), src/lib/brand.ts (firmSlug = [FIRM] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = firmSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with firmSlug + ':').
  - State: src/store/engagement.ts is a tiny external store (useSyncExternalStore) holding { area, company, name, email, note, sent } persisted to localStorage key firmSlug + ':engagement'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), SectionRule.tsx (hairline + small-caps label), Footer.tsx; Hero.tsx, Practices.tsx (PracticeCard.tsx numbered), Insights.tsx (PostCard.tsx), Cases.tsx (CaseCard.tsx with MetricRow.tsx), People.tsx (PartnerCard.tsx), TrustStrip.tsx, EngagementForm.tsx (AreaSelect.tsx, Confirmed.tsx). src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBFAF6'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[FIRM] — [SPECIALTY] consulting in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the four images. Keep it under 8 MB.

## Variables
- [FIRM] — Firm name (default: "Cardinal Measure"). Invented firm name. Used in the wordmark, title, footer, email (partners@ + firmSlug without hyphens + .com) and localStorage keys. Never a real firm.
- [CITY] — City (default: "Boston, Massachusetts"). Where the firm is. Used in the title, hero line and footer. Real cities fine.
- [SPECIALTY] — Specialty (default: "strategy and pricing"). Two words naming the practice's center. Drives the title, the first practice card's weight and one case. Lowercase.
- [ENGAGEMENTS] — Engagements count (default: "140"). The sample engagements figure, as digits. Used once in the trust strip with a (sample) label. Keep it 60–300.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/management-consulting-firm-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Offwhite `#FBFAF6` — Page background throughout.
- Mistpaper `#F1EFE8` — Alternate section background (Insights, Trust), hover fill.
- Inknavy `#1C2B36` — Headlines and body ink, footer background, hero overlay.
- Steel `#3E6680` — Primary: accents, buttons, selected states, metric figures, focus ring.
- Steel Mist `#E4EBF0` — Selected chips, card washes.
- Slate `#5F6E78` — Secondary text, captions, section labels.
- Rule `#DDD9CF` — 1px hairlines, card borders, input borders.
- Brassline `#A98A54` — Quiet second color: practice numbers, case tick rules, small-caps flourishes.

### Typography
- Display: H1, H2, practice titles, case names, partner names, the wordmark — Spectral serif, boardroom sharp: Spectral (OFL), weights 500/600
- Text and UI: body, labels, buttons, forms, captions; tabular numerals for metrics: Inter (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 84px under 1024px, 64px under 640px — a memo's whitespace. Type scale: H1 clamp(44px, 6.4vw, 84px) Spectral 500, line-height 1.04; H2 clamp(30px, 4vw, 50px) Spectral 500; practice titles 22px Spectral 600; metric figures Spectral 600 40px Steel tabular; lead Inter 400 17.5px / 1.65 Inknavy at 90%; body 15.5px / 1.7 (max-width 64ch); section labels Inter 700 11px uppercase letter-spacing 0.22em Slate; caption 13px Slate. Buttons: height 50px, Inter 700 14px. Primary: Steel fill, Offwhite text. Secondary: 1px Inknavy border. Inputs: height 50px, 1px Rule border, Offwhite fill, focus Steel border. Focus ring everywhere: 2px Steel outline with 3px offset.
- Radius: 2px on cards, buttons, inputs and photos — memo corners. 999px only for pills and the area-select chips.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Measured, partner-paced.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 700ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Motion: Hero: the war-room photo darkens slightly and settles; the H1 lines rise 16px with 130ms stagger; a 1px Brassline rule draws under the specialty word.
- Motion: Practice cards: the brass numbers count 01–05 in sequence once; hover slides a 2px Steel rule from the left.
- Motion: Insights grid: cards reveal with a 4px rise; hover underlines the title with a drawn rule and the read-time ticks Brassline.
- Motion: Cases: metric figures count up once on view (600ms); the (sample data) caption never animates.
- Motion: Partners: portraits scale 1.03 on hover and the one-liner crossfades in.
- Motion: Engagement: area chips fill Steel Mist→Steel on select; invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn Steel 'RECEIVED' memo-stamp scaling in, 'Thank you, [NAME].' and 'A partner replies within two business days — with questions, not a deck.'
- Motion: Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no counts, draws, scales or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Real photography, all four made for this template in one consistent style: overcast-window boardrooms, ink-navy world, senior-calm. The hero shows a partner war-room session (AI-generated fictional people mid-discussion around a document table — no readable text); partner portraits are AI-generated fictional consultants in the same light; one detail photo shows a marked-up document (abstract markings, no readable words). No client logos anywhere, no readable text. Every photo uses object-fit cover with the object-position given under Assets, 2px corners, no shadow. Captions in Inter 13px Slate. Drawn in code: the favicon, practice numbers, the RECEIVED stamp, chips and metric rows. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Firm (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([FIRM] = Cardinal Measure, [CITY] = Boston, Massachusetts, [SPECIALTY] = strategy and pricing, [ENGAGEMENTS] = 140). Put every string and figure in src/content.ts and render from it. If any variable value differs, rewrite the hero, all five practices, six insights titles+lines, three cases and metrics, four partners, trust strip and contact copy so they are specific and believable for the new firm, keeping the same structure and counts. All clients anonymized to sector; every metric carries '(sample data)'. Practices: 1 'Strategy' 'where to play, what to refuse — decided in weeks, not quarters'; 2 'Pricing' 'the profit lever nobody pulls; we pull it with data'; 3 'Operations' 'throughput, quality, and the meetings that block both'; 4 'Org design' 'fewer layers, clearer owners, kinder exits'; 5 'Due diligence' 'the operational truth behind the data room'. Insights (title · line · read): 'The Pricing Audit Nobody Runs' 'a 3-week self-diagnostic most $50M companies have never done' 7 min; 'Strategy Is a Refusal List' 'the one-page memo we ask every client to write' 5 min; 'Your Org Chart Is a Pricing Decision' 'why layer count shows up in gross margin' 6 min; 'The Meeting Inventory' 'cutting 30% of standing meetings, safely' 4 min; 'Diligence Beyond the Spreadsheet' 'walking the floor before signing' 8 min; 'Renewals Are a Product' 'treating churn as a design brief' 6 min. Cases: 'Food & beverage, $60M revenue' 'pricing architecture for a premium grocery brand' — '+4.2 pts gross margin in 2 quarters (sample)'; 'Industrial services, 400 field techs' 'dispatch and routing redesign' — '−18% response time, same headcount (sample)'; 'Software, Series C' 'post-acquisition org integration' — '6-week integration, zero attrition of leads (sample)'. Partners: 'p-elena.webp' 'Elena Vasquez' 'Managing partner · strategy' 'Ex-operator; allergic to 60-slide decks.'; 'p-james.webp' 'James Okafor' 'Partner · pricing' 'Econometrician who explains it over coffee.'; 'p-sunna.webp' 'Sunna Kim' 'Partner · operations' 'Factory floors, data rooms, no theatrics.'; 'p-diego.webp' 'Diego Marín' 'Partner · diligence' 'Reads balance sheets like floor plans.'. Trust strip: '[ENGAGEMENTS]+ engagements (sample)'; '6 senior consultants, no pyramid staffing'; 'Sectors: food, industrial, software'; 'Avg. engagement: 8 weeks'.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[FIRM]' (Spectral 600 19px) linking ./index.html. Right nav (Inter 600 13px uppercase letterspaced): 'Practices' → #practices, 'Insights' → #insights, 'Cases' → #cases, 'People' → #people; a small Steel 'Start an engagement' → #contact. Under 760px: wordmark + contact button.
   Layout: Sticky top, height 70px, Offwhite/95% blur, Rule border.
3. **Hero** — Full-bleed warroom.webp (88svh, min 600px) under an Inknavy gradient. Eyebrow (bone at 70%): 'MANAGEMENT CONSULTING · [CITY]'. H1 two lines: 'Senior thinking,' / '*on an 8-week clock.*' Lead (bone at 85%, max-width 520px): '[FIRM] is six partners who have run the operations we now improve — [SPECIALTY], priced flat, staffed senior, finished on time.' Primary 'Start an engagement' → #contact and secondary-on-photo 'Read the insights' → #insights. Bottom strip on Inknavy/70%: 'Flat fees, agreed up front' · 'Partners do the work' · '[ENGAGEMENTS]+ engagements (sample)'.
   Layout: Photo object-position 50% 45%; gradient Inknavy 0.55→0.2→0.9; content anchored bottom-left 112px up.
4. **Practices** — Section id='practices'. SectionRule 'PRACTICES'. Five numbered cards in an editorial row layout (brass 01–05): the roster practices with title and line. A quiet caption: 'Every engagement starts with a two-week diagnostic — priced flat, useful even if you stop there.'
   Layout: Offwhite background. Five cards in a staggered 12-col layout (3+2 rows), hairline-bordered on Mistpaper; numbers Brassline Spectral 28px.
5. **Insights** — Section id='insights'. SectionRule 'INSIGHTS'. A 3x2 grid of PostCards: title (Spectral 600 19px), line (15px Slate), read-time caption; hover draws the underline rule. A text link 'All writing lives here — the archive is the pitch deck' (placeholder '#').
   Layout: Mistpaper background; 3 columns 20px gap (2 under 900px, 1 under 640px); cards Rule-bordered on Offwhite.
6. **Cases** — Section id='cases'. SectionRule 'CASES (ANONYMIZED)'. Three CaseCards: sector line (small-caps Slate), engagement title (Spectral 22px), one MetricRow with the sample figure counting up (Spectral 40px Steel tabular) and '(sample data)' caption. A closing line: 'References available under NDA — the numbers above are illustrative composites.'
   Layout: Offwhite background; three columns 24px gap; metrics hairline-topped.
7. **People** — Section id='people'. SectionRule 'PEOPLE'. Four PartnerCards: portrait (4:3, hover scale 1.03), name, role small-caps, one-liner crossfading on hover. A note: 'The people who sell the work do the work. No pyramid, no bait-and-switch.'
   Layout: Mistpaper background; four columns 24px gap; portraits Rule-outlined, 2px radius.
8. **Trust, contact and footer** — TrustStrip on Offwhite: the four roster stats in a hairline row, tabular numerals, sample-labeled. Section id='contact'. SectionRule 'CONTACT'. EngagementForm on Card: AreaSelect (the five practices as chips), company, name, email, note (placeholder 'What''s the problem, in two sentences?'); primary 'Request the conversation' with caption 'Saved in this browser — the real page emails the partners. Nothing is sent here.' Confirmed: the RECEIVED stamp, 'Thank you, [NAME].' 'A partner replies within two business days — with questions, not a deck.' area echo, 'Edit' pre-filled; persisted in localStorage. Footer (Inknavy, bone text): wordmark, '[SPECIALTY] consulting · [CITY]', partners@ + emailDomain, anchors; bottom line '© [FIRM]. Case figures are sample composites.'
   Layout: Trust hairline row 56px; form max-width 620px; footer three-part with the bottom line over a bone/10% rule.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/warroom.webp → public/images/warroom.webp (Hero; object-position 50% 45%; alt 'Partners mid-discussion around a document table, fictional consultants'); https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-elena.webp → public/images/p-elena.webp (Partner Elena; alt 'Elena Vasquez, a fictional consultant'); https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-james.webp → public/images/p-james.webp (Partner James; alt 'James Okafor, a fictional consultant'); https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-sunna.webp → public/images/p-sunna.webp (Partner Sunna; alt 'Sunna Kim, a fictional consultant'); https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-diego.webp → public/images/p-diego.webp (Partner Diego; alt 'Diego Marín, a fictional consultant'); https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/document-detail.webp → public/images/document-detail.webp (Cases side small; alt 'A marked-up document with abstract annotations'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/spectral and @fontsource-variable/inter (OFL-1.1) and lucide-react (ISC). All people in photos are AI-generated fictional consultants per the portrait rules; no client logos or readable text anywhere.
- icon: lucide-react only: ArrowUpRight, ArrowRight, Check, Plus. Stroke width 1.75, 16–24px, color inherits — used sparingly. The practice numbers, RECEIVED stamp, chips and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 square filled #1C2B36, a Brassline (#A98A54) measuring-rule glyph (a diagonal with two ticks). No other logo: the firm name is always set as type.
- font: Install @fontsource/spectral and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: practice numbers, the RECEIVED stamp, chips, metric rules and the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the engagement request saves in the browser only (localStorage) and says so.
- All links on this single page are anchors (./index.html#practices, #insights, #cases, #people, #contact) plus the footer mailto.
- No real firms, clients or identifiable engagement outcomes: cases stay anonymized to sector with (sample data) composites; no client logos or wordmark-style marks of any kind.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 8 MB.
- Partner portraits are AI-generated fictional people, not any real individual; no readable text in any photo; document annotations stay abstract.
- No dates or years anywhere; insights carry read-times, not dates; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no counts, draws, scales or staggers; everything at rest; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; chips and the form work with keyboard only and visible focus rings.
- Keep copy partner-voiced: no lorem, no 'synergies'; every metric and stat lives in src/content.ts with its sample label.

---
— Prompt by VibeFather · https://vibefather.ai/t/management-consulting-firm-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
