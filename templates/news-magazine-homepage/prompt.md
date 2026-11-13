# News Magazine Homepage

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A two-page magazine for [PAPER], the weekly paper covering [BEAT] in [CITY]. The front page: masthead, a lead story with a wide photo, a secondary rail, three section fronts (city / culture / business) and a newsletter box; article pages (?a=<slug>) carry readable typography, a fact box and related stories. Pages: index.html, article.html?a=<slug> (first article without one). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Readers who still read: locals with a coffee and twenty minutes, and skimmers who want the lead story fast. The page must feel like an institution, not a feed.
- Goal: Read the lead story and subscribe to the newsletter. Within ten seconds the visitor sees the nameplate, the lead headline and the photo; within two minutes they're mid-article.
- Tone: Weekly-paper dry: plain declaratives, gentle wit, no clickbait. Headlines carry the paper's voice.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/playfair-display (OFL-1.1), @fontsource/pt-serif (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors). Two real HTML pages at the project root: index.html (entry src/main-index.tsx), article.html (entry src/main-article.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), article: resolve(__dirname, 'article.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './article.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper, panel, line, line-2, ink, softink, red, red-deep, red-mist, slateink, good) and fontFamily display ['Playfair Display', 'Georgia', 'serif'], serif ['PT Serif', 'Georgia', 'serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 2px and add maxWidth { container: '1280px', read: '680px' }.
  - In src/fonts.ts import '@fontsource/playfair-display/700.css', '@fontsource/playfair-display/900.css', '@fontsource/pt-serif/400.css', '@fontsource/pt-serif/700.css', '@fontsource/pt-serif/400-italic.css' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from both entry files.
  - File layout: src/content.ts (the paper: nameplate, kicker, edition line, sections, articles — { slug, section, kicker, headline, standfirst, byline, photo?, photoAlt, body: string[] (paragraphs), pullQuote?, factBox: { title, rows: [label, value][] }?, related: string[] }, every string typed), src/lib/brand.ts (paperSlug = [PAPER] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = paperSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, key paperSlug + ':news'), src/lib/route.ts (reads ?a=, resolves or falls back to the first article — never not-found).
  - State: src/store/newsletter.ts is a tiny external store (useSyncExternalStore) holding { email, sent } persisted to localStorage.
  - Components in src/components/: Masthead.tsx (Nameplate.tsx, SectionBar.tsx), SlimBar.tsx (appears after the masthead scrolls away), Footer.tsx, NewsletterBox.tsx; front page: LeadStory.tsx, SecondaryRail.tsx (RailItem.tsx), SectionFront.tsx (FrontCard.tsx, HeadlineRow.tsx); article: ArticleHeader.tsx, ArticleBody.tsx (DropCap.tsx, PullQuote.tsx, FactBox.tsx), RelatedList.tsx. Pages: src/pages/Front.tsx, Article.tsx.
  - DropCap: the first paragraph's first letter is set in Playfair 900 at ~3.4em, floated left with 8px right margin, Red. PullQuote: PT Serif italic 24px between hairlines, Red rules 3px top. FactBox: a Line-bordered box in the article flow (desktop: floated right at 300px) with mono-ish Inter 600 labels.
  - SlimBar: fixed top, 48px, Paper at 95% blur, appears (translateY -100%→0, 200ms) once the masthead's bottom passes the viewport top; carries the nameplate small, the section anchors and Subscribe.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FAF8F2'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[PAPER] — [CITY]'s weekly</title>; article.html sets document.title on load.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the two HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and six images. Keep it under 9 MB.

## Variables
- [PAPER] — Paper name (default: "The Marlow Ledger"). The invented paper's name, 'The …' style works well. Drives the nameplate, titles, footer and email (news@ + paperSlug without hyphens + '.com'). Never a real publication.
- [CITY] — City (default: "Marlow"). The invented city the paper covers. Real invented-sounding city; drives headlines, bylines' datelines and the kicker. Invented cities keep the demo safe.
- [BEAT] — Coverage (default: "city hall, the riverfront and the people who use both"). One lowercase phrase naming the paper's beat. Rewrites the kicker, section blurbs and the newsletter pitch. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/news-magazine-homepage in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#FAF8F2` — Page background throughout — aged newsprint warm.
- Panel `#FFFFFF` — Newsletter box, fact box.
- Line `#D9D4C7` — 1px hairlines: the grid, rules, dividers.
- Line 2 `#1E1B16` — The masthead's 2px bold rule and section-front top rules.
- Ink `#1E1B16` — Headlines and body ink.
- Soft Ink `#5D594E` — Standfirsts, bylines, captions, eyebrows.
- Red `#B3282D` — The one accent: kicker bars, drop caps, pull-quote rules, links, primary buttons, focus ring.
- Red Deep `#8E1F23` — Hover and pressed states.
- Red Mist `#F6E7E4` — Section label chips, selected states.
- Slate Ink `#1A1210` — Text on red fills.
- Good `#3E7A52` — Newsletter success line.

### Typography
- Display: the nameplate, lead headline, section-front headlines — Playfair Display, heavy and institutional: Playfair Display (OFL), weights 700/900
- Article serif: article body, standfirsts, pull quotes — PT Serif: PT Serif (OFL), weights 400/700
- Sans: kickers, bylines, section bars, captions, UI — Inter: Inter (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1280px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; article reading column max 680px with a 34ch held measure. The front page is a 12-column grid, column gap 24px, ruled by 1px Line dividers (real borders, not gaps — the newspaper look). Section vertical rhythm: 40px between fronts. Type scale: nameplate Playfair 900 clamp(44px, 7vw, 84px) letter-spacing -0.01em; lead headline Playfair 900 clamp(32px, 4.6vw, 56px) line-height 1.04; front-card headlines Playfair 700 24px; headline rows PT Serif 700 17px; standfirst PT Serif italic 17px Soft Ink; article body PT Serif 18px / 1.75; kicker Inter 600 11px uppercase letter-spacing 0.18em Red; byline Inter 500 12.5px Soft Ink; captions Inter 400 12.5px Soft Ink. Buttons: height 44px, Inter 600 13.5px; primary Red fill with white text. Inputs: height 44px, Panel fill, 1px Line border, focus Red border + 2px offset ring. Focus everywhere: 2px Red outline, 3px offset.
- Radius: 2px everywhere — print, not app. The newsletter box and fact box also 2px.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). A paper settles; nothing bounces.
- Motion: Reveal: story blocks rise 8px over 450ms as they enter (Motion whileInView, once); the front page staggers by grid row (60ms).
- Motion: Lead photo: settles from scale 1.02 over 1400ms once, then rest.
- Motion: Headline hovers: PT Serif headline rows shift their Red index bar 4px right (140ms) and the headline ink holds — underline only via .link-draw on links.
- Motion: SlimBar: translateY -100%→0 over 200ms when triggered; hides again when the masthead returns.
- Motion: Newsletter submit: crossfades to the Good line over 240ms (220ms out).
- Motion: Article page: the header block settles 8px; the drop cap and pull quote reveal with their paragraphs; the fact box slides 6px.
- Motion: prefers-reduced-motion: reduce — no reveals, no photo settle, no bar shifts; everything at rest. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: Six documentary editorial photographs made for this template in one consistent style: available light, candid scenes of an invented city — a riverfront market morning, a city-hall stairwell, a print shop press, a small venue crowd (faces indistinct), a main street at dusk, a library reading room. No readable text, no logos, no identifiable people (crowd faces stay indistinct). Photos object-fit cover, 2px corners, 1px Line outline; captions in Inter 12.5px Soft Ink with a sample credit 'Ledger staff photo (fictional)'. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Pages & Sections
### Front page (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([PAPER] = The Marlow Ledger, [CITY] = Marlow, [BEAT] = city hall, the riverfront and the people who use both). Put every string, article and caption in src/content.ts and render from it. If any variable differs, rewrite every headline, standfirst, byline and body so they are specific and believable for that paper and city, keeping the same structure and counts (1 lead + 2 rail stories + 3 fronts × (1 card + 3 headline rows), 6 articles with full bodies, 1 newsletter box, article pages for all six). Articles (slug · section · kicker · headline · standfirst · byline · photo): 'ferry-morning' city 'RIVERFRONT' 'The 6:10 ferry is Marlow's quietest institution' 'Two hundred commuters, one kettle, and a deckhand who knows every name' 'By Rosa Feld · Ledger staff' ferry-morning.webp; 'council-vote' city 'CITY HALL' 'Council votes tonight on the riverwalk lighting plan' 'Seven years, three surveys, one final yes-or-no' 'By Tomas Ruiz · Ledger staff' (no photo); 'press-room' culture 'THE CRAFT' 'The last press in Marlow still smells like ink' 'A family shop, two Heidelbergs, and a stubborn love of paper' 'By Amara Osei · Ledger staff' press-room.webp; 'venn-club' culture 'NIGHTLIFE' 'The Venn Club turned its basement into a listening room' 'No phones, no bar chatter — just the band and forty chairs' 'By Luis Park · Ledger staff' venue-crowd.webp; 'main-street' business 'MAIN STREET' 'Four new storefronts, one cautious spring' 'Marlow's main street is filling up — carefully' 'By Dana Whitfield · Ledger staff' main-street.webp; 'reading-room' culture 'QUIET BEAT' 'The reading room that stayed open late' 'A librarian, a chess set, and the town's unofficial office' 'By Rosa Feld · Ledger staff' reading-room.webp. Every article's body: 5–7 paragraphs of invented but plausible weekly-paper reporting; the lead and one front card get pull quotes and fact boxes (lead fact box: 'The vote at a glance' with rows Tonight 7 PM / Item 12-A / Seats 7; press-room fact box: 'The shop by the numbers' with rows Presses 2 / Years running 41 / Staff 3). All names, quotes and figures are invented sample content; no real people or events. The edition line under the nameplate is static sample text: 'Vol. XII · The weekly edition · Marlow' — no dates, no clock.
   Layout: n/a
   Motion: n/a
2. **Masthead and section bar** — The Nameplate: '[PAPER]' centered (Playfair 900), the kicker line 'Covering [BEAT]' (Inter 500 12px Soft Ink) above, and the edition line below (Inter 400 12px Soft Ink), between two 2px Line 2 rules (4px apart, the classic double rule). SectionBar beneath: CITY / CULTURE / BUSINESS / NEWSLETTER as Inter 600 12px uppercase links with Red hover underlines, separated by 1px Line pipes.
   Layout: Paper background; masthead block 96px tall centered; section bar 40px with Line top/bottom borders.
3. **Lead story and secondary rail** — A ruled 8:4 split. Left (8 cols): LeadStory — kicker bar (Red 3px left rule + Inter 600 kicker), the headline (Playfair 900), standfirst (PT Serif italic), the wide photo (16:9, caption), byline, and a two-paragraph teaser ending with a Red 'Continue reading →' link to the article page. Right (4 cols, Line left border): SecondaryRail — 'TOP STORIES THIS WEEK' eyebrow; two RailItems (headline + standfirst, hairline-divided) and the NewsletterBox at the rail's foot.
   Layout: Paper background; the split carries a 1px Line vertical divider; 40px vertical padding above.
4. **Section fronts** — Three SectionFronts stacked, each opened by a 2px Line 2 top rule and a section header (Playfair 700 20px name left, 'More from [section] →' Inter 600 12px Red right). Each front: a 5:7 split — FrontCard (photo 4:3 or 3:2, kicker, Playfair 700 24px headline, standfirst, byline) and three HeadlineRows (Red index bars 01–03, PT Serif 700 17px headlines, 12px Soft Ink bylines) with hairlines. City front uses council-vote as its card (no photo: a 4:3 Line-tinted placeholder panel with the section wordmark and 'Photo to come — the artist is on strike (sample)' caption); culture front's card is press-room; business front's card is main-street. Rows pull from the remaining articles.
   Layout: Paper background; 40px between fronts; the fronts share the 12-column grid.
5. **Newsletter box and footer** — NewsletterBox (also on article pages): Panel fill, 1px Line border, 2px radius — eyebrow 'THE LEDGER LETTER'; one line 'One email a week: what the council did, what the river did, and one good thing to do Saturday'; email input + primary 'Subscribe'; small print 'Sample form — this demo saves nothing anywhere.'; success: the Good line 'Subscribed (in this browser only) — welcome aboard.' Footer: three columns — the nameplate small + 'news@' + emailDomain; the section bar repeated as links; and '© [PAPER]. Every story on this page is invented sample content.' plus 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: Newsletter box full-width above the footer on the front page (and in-rail on article pages); footer 80px, Line top border.

### Article (`article.html`)
1. **Article view** — Reads ?a=<slug>; with no query the first article (ferry-morning) renders. SlimBar persists at top. ArticleHeader: kicker + section link, the headline (Playfair 900 up to 44px), standfirst, byline row (Inter 12.5px Soft Ink: byline · 'Ledger staff' · '6 min read (sample)'), and the photo with caption when the article has one. ArticleBody: paragraphs in PT Serif 18px/1.75 at a held measure; the DropCap on paragraph one; the PullQuote placed after paragraph three (or the article's own); the FactBox floated right on desktop after paragraph two (in-flow on mobile); inline Red links (.link-draw). After the body: RelatedList ('MORE FROM THE LEDGER' — the article's three related slugs as HeadlineRows) and the NewsletterBox full-width. document.title set from the headline on load.
   Layout: Paper background; reading column max 680px centered; the fact box floats right at 300px with 20px margins; footer as front page.

## Assets
- image: Template photos made for this design (free to redistribute with the template), one documentary style, no readable text, no logos, no identifiable faces. Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/ferry-morning.webp → public/images/ferry-morning.webp (Lead story; alt 'Commuters on a morning river ferry, city skyline behind'); https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/city-hall.webp → public/images/city-hall.webp (Council card / rail; alt 'A city hall stairwell in morning light'); https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/press-room.webp → public/images/press-room.webp (Culture front card; alt 'An old printing press in a small print shop'); https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/venue-crowd.webp → public/images/venue-crowd.webp (Rail item; alt 'A small listening-room audience, faces indistinct in low light'); https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/main-street.webp → public/images/main-street.webp (Business front card; alt 'A small-town main street at dusk with lit storefronts'); https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/reading-room.webp → public/images/reading-room.webp (Culture row; alt 'A quiet library reading room with a chess set'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row per photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/playfair-display, @fontsource/pt-serif and @fontsource-variable/inter (OFL-1.1) and lucide-react (ISC). Note that all people appearing are incidental documentary-style figures with indistinct faces, and all stories are invented.
- icon: lucide-react only: ArrowRight, ArrowUpRight, Check, Mail. Stroke width 1.75, 14–20px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 square filled #1E1B16, a Paper (#FAF8F2) broadsheet glyph (a folded page with two column rules) and a small #B3282D top bar. No brand logos.
- font: Install @fontsource/playfair-display, @fontsource/pt-serif and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the council card's placeholder panel, the favicon, kicker bars, index bars. No other bitmaps beyond the six photos.

## Don'ts
- No backend, no form submission, no fetch to API: the newsletter box saves in the browser only (localStorage) and its small print says so; every link is a file or anchor.
- Every internal link points to a file name (./index.html, ./index.html#city, ./article.html?a=ferry-morning) — never to a bare directory; article.html without a query shows the first article, never an error.
- No real publications, mastheads, cities' real papers or their typography; the paper, city, stories, quotes, bylines and figures are invented sample content.
- No real people or events; no breaking-news or urgency claims; photos carry no readable text, no logos, and no identifiable faces (crowd faces stay indistinct).
- No dates or timestamps from the real clock: the edition line and byline meta are static sample text; nothing prints today's date or years.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 9 MB.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no reveals or settles; everything at rest.
- The site must work at 1440x900 desktop and 390x844 mobile (the grid collapses to a single ruled column, the rail follows the lead, the fact box goes in-flow) with zero console errors; newsletter, section anchors and links work with keyboard only and visible focus rings.
- Hold the measure: article body never exceeds 34ch per column; the density stays broadsheet, never dashboard.

---
— Prompt by VibeFather · https://vibefather.ai/t/news-magazine-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
