# Ebook Sales Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site that sells one ebook: [TITLE] by [AUTHOR], a practical field guide to [TOPIC], priced at [PRICE]. The hero is a 3D-tilted cover mockup; below it a free-chapter capture, the full chapter list, an inside-peek strip, the author's bio with portrait, a review wall, three pricing tiers and a short FAQ. One page, index.html; everything runs in the browser and nothing is submitted anywhere.

- Audience: Readers who skim the table of contents before the testimonials: professionals and makers deciding in three minutes whether the book solves a problem they have.
- Goal: Sell the ebook and capture sample-chapter emails. Within ten seconds a visitor sees the cover, the promise and the price; within two minutes they have read three chapter lines and hit a buy button.
- Tone: Warm, plain and confident, like a well-made colophon. No hype words, no 'unleash', one dry joke per screen at most.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/public-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template, then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper, cream, card, ink, softink, amber, amber-deep, amber-mist, rule, moss, covernavy) and fontFamily display ['Fraunces Variable', 'Georgia', 'serif'], sans ['Public Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 8px and add maxWidth { container: '1160px' }.
  - In src/fonts.ts import '@fontsource-variable/fraunces' and '@fontsource-variable/public-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, chapter, review, tier, faq and image path, typed), src/lib/brand.ts (authorSlug = [AUTHOR] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = authorSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, key authorSlug + ':sample').
  - State: src/store/sample.ts is a tiny external store (useSyncExternalStore) holding { email, sent } for the sample form, persisted to localStorage.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, StarRow.tsx (drawn SVG stars); Hero.tsx (CoverMock.tsx), SampleStrip.tsx, Chapters.tsx (ChapterRow.tsx), InsidePeek.tsx, AuthorBio.tsx, Reviews.tsx (ReviewCard.tsx), Pricing.tsx (TierCard.tsx), Faq.tsx (FaqRow.tsx). src/pages/Home.tsx composes them.
  - CoverMock: a div in perspective (1200px) holding a preserve-3d card (aspect 3:4, width ~340px desktop / 260px mobile): front face = cover-art.webp with a subtle amber-to-transparent overlay gradient and the typography set in CSS (eyebrow chip 'A FIELD GUIDE', title in Fraunces 600, author at the foot); left edge = a 14px page block (repeating-linear-gradient page lines on Card); right edge = a 10px spine in Cover Navy. Floor shadow: a blurred ellipse that shifts with tilt. Pointer move over the hero rotates the card between -9deg and 9deg on Y and -5deg to 5deg on X (lerped, 120ms out). Default resting pose: rotateY(-16deg) rotateX(4deg) so the page edge reads. prefers-reduced-motion: resting pose only, no pointer tracking.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBF7EF'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[TITLE] — an ebook by [AUTHOR]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the four images. Keep it under 8 MB.

## Variables
- [TITLE] — Book title (default: "The Quiet Craft"). The ebook's title, title case. Appears in the H1, the cover mockup typography, the title tag and every section that names the book. Invented, never a real book.
- [AUTHOR] — Author name (default: "Maren Holt"). The invented author's name. Drives the wordmark, the cover foot, the bio, the footer credit and the email hello@ + authorSlug without hyphens + '.com'. Never a real author.
- [TOPIC] — Topic phrase (default: "making work that lasts"). One lowercase phrase naming what the book teaches. Rewrites the eyebrow, the H1 subline, chapter promises and the author bio hook. Keep it concrete.
- [PRICE] — Ebook price (default: "$19"). The single-copy price with currency symbol. The middle and team tiers derive from it (+$10, ×5 with a discount line) — rewrite those lines if you change it.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/ebook-sales-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#FBF7EF` — Page background throughout.
- Cream `#F3EDE0` — Alternate section background (Sample, Reviews), chip fills, hover fill.
- Card `#FFFFFF` — Cards, tier cards, FAQ rows, form input fill.
- Ink `#201B14` — Headlines and body ink, icon color.
- Soft Ink `#5C544A` — Secondary text, eyebrows, captions, chapter promises.
- Amber `#B7521E` — Primary: chapter numbers, links, primary buttons, highlighted tier border, stars, focus ring.
- Amber Deep `#93411A` — Hover and pressed primary.
- Amber Mist `#F6E4D7` — Selected chip fills, 'Most popular' chip background.
- Rule `#E7DFCF` — 1px hairlines, card borders, input borders.
- Moss `#6B7F4F` — Checkmarks in tier features and trust rows.
- Cover Navy `#223042` — The cover spine, the eyebrow chip on the cover face, dark pull-quote text on cream.

### Typography
- Display: H1, H2, tier names, chapter titles, the cover title, italic pull-quotes — Fraunces, warm ink serif with soft terminals: Fraunces (OFL), weights 400/600
- Text and UI: body, buttons, forms, captions, chapter metadata; tabular numerals for page counts and prices: Public Sans (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 5.6vw, 68px) Fraunces 600, line-height 1.08; H2 clamp(26px, 3.4vw, 40px) Fraunces 600; chapter titles Fraunces 600 21px; lead Public Sans 400 17.5px / 1.65 Ink at 90%, max-width 54ch; body 15.5px / 1.7; eyebrow Public Sans 600 12px uppercase letter-spacing 0.16em Soft Ink; caption 13px Soft Ink. Buttons: height 48px, Public Sans 600 14px; primary Amber fill with Paper text, secondary 1px Ink border on Card. Inputs: height 48px, 1px Rule border, Card fill, focus Amber border + 2px offset ring. Focus everywhere: 2px Amber outline, 3px offset.
- Radius: 8px on cards, buttons, inputs, chips and photos. 10px on the cover mockup and tier cards.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the cover tilt. Bookshop-calm.
- Motion: Reveal: sections wrapped in <Reveal> start opacity 0, translateY(14px) and settle over 700ms --ease-out at 15% viewport (Motion whileInView, once). Siblings stagger 70ms.
- Motion: Hero: the cover mockup enters from rotateY(-40deg) opacity 0 to its resting pose over 900ms; the H1 lines rise 12px; the trust row fades last.
- Motion: Cover tilt: pointer over the hero lerps rotation as described in Setup; leaving snaps back to resting over 300ms.
- Motion: Chapters: rows reveal in order; hover raises the amber chapter number 2px and slides a 24px amber underline under the title.
- Motion: Sample form: submit swaps the form for a check line with a 260ms crossfade; the small print stays visible.
- Motion: Reviews: cards reveal with a 60ms stagger; stars fill amber one by one on first view (40ms apart).
- Motion: Pricing: the highlighted tier lifts 6px on hover; feature checkmarks draw in (SVG stroke) on first view.
- Motion: FAQ: rows expand with a 240ms height ease; the plus icon rotates 45deg to a cross.
- Motion: Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no tilt, no entrance rotations, no star or checkmark drawing; content sits at rest immediately; color and border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: Four photographs, all made for this template in one warm editorial style: cream and amber tones, soft daylight, paper texture. The cover art is abstract layered-paper geometry with no readable text — the title and author are typeset in CSS on the mockup so they follow the variables. The author portrait is an AI-generated fictional person (a woman in her 40s at a writing desk, natural working shot, not resembling any real individual). No logos, no readable text, no brand marks in any photo; other photos contain no people. Every photo object-fit cover, 8px corners; photos on Paper get a 1px Rule outline. Icons: lucide-react only, stroke width 1.75. The favicon and the star row are drawn SVG.

## Pages & Sections
### Ebook sales page (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([TITLE] = The Quiet Craft, [AUTHOR] = Maren Holt, [TOPIC] = making work that lasts, [PRICE] = $19). Put every string, chapter, review, tier, FAQ row and image path in src/content.ts and render from it. If any variable differs, rewrite the H1 subline, all eight chapter lines, the bio, the reviews and the tier names so they are specific and believable for that book, keeping the same structure and counts (8 chapters, 6 reviews, 3 tiers, 4 FAQ rows). Chapters (number · title · promise · pages): 01 'Slow is smooth' 'why haste is the expensive option' 18; 02 'The two lists' 'separating what matters from what merely lists' 24; 03 'Small proof' 'shipping tiny, undeniable things' 26; 04 'The maintenance hour' 'keeping what you built from eating you' 22; 05 'Letters you didn't send' 'writing as a thinking tool' 20; 06 'Quiet noes' 'declining without drama' 19; 07 'Rooms that think' 'making meetings earn their keep' 24; 08 'The long middle' 'staying good for a decade' 31. Reviews (quote · name · role): 'I re-read chapter three before every launch week.' 'Dana Whitfield' 'Product lead'; 'The maintenance hour alone was worth the price.' 'Sam Ortiz' 'Freelance developer'; 'Calm, specific, and mercifully short.' 'Priya Raghavan' 'Design director'; 'It reads like a letter from someone a few years ahead of you.' 'Tomas Lind' 'Startup founder'; 'My whole team got the bundle. The workbook is the quiet hero.' 'Aisha Bello' 'Engineering manager'; 'No filler. I checked.' 'Greg Fontaine' 'Newsletter writer'. Tiers: 'Ebook' [PRICE] — 'PDF + EPUB', 'Free updates for the edition', 'Read in an afternoon'; 'Ebook + Workbook' [PRICE] + $10 — everything in Ebook plus '58-page workbook', 'The twelve-week checklist', chip 'MOST POPULAR' (Amber border, lifted); 'Team pack' [PRICE] ×5 −20% line 'five copies, one invoice' — everything in Ebook plus 'Five copies', 'A short reading-guide PDF', 'One invoice'. FAQ: 'What format is the book?' 'PDF and EPUB, both DRM-free and yours to keep.'; 'Do I get updates?' 'Yes — every revision of this edition lands in your inbox, free.'; 'What if it isn't for me?' 'Write back within 30 days and it's refunded, no form to fill.'; 'Can I buy for my team?' 'The team pack covers five copies on one invoice; write for more.'
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[AUTHOR]' (Fraunces 600 20px) over 'Author — [TITLE]' (10px uppercase Soft Ink). Right nav (Public Sans 500 14px): 'Chapters' → #chapters, 'Author' → #author, 'Reviews' → #reviews, and a compact primary button 'Get the book' → #pricing. Under 720px: wordmark + button only.
   Layout: Sticky top, height 68px, Paper at 95% with backdrop blur, Rule bottom border.
3. **Hero** — Two columns. Left (6 cols): eyebrow 'A FIELD GUIDE TO [TOPIC]'; H1 '[TITLE].' with the last word in Amber; lead 'A practical book about [TOPIC] — 184 pages, eight chapters, zero filler. Written by [AUTHOR], read in one honest afternoon.'; CTA row: primary 'Get the book — [PRICE]' → #pricing, secondary 'Read chapter one free' → #sample; trust row (Moss checks): 'PDF + EPUB', 'Free edition updates', '30-day refunds'. Right (5 cols, offset 1): the CoverMock, with the caption 'Paperback sold out twice; electrons remain.' under it.
   Layout: Paper background, 112px top padding. Cover centered in its column, max-height 520px.
4. **Sample strip** — Section id='sample' on Cream. Left (5 cols): eyebrow 'FREE CHAPTER'; H2 'Chapter one, on the house.'; body 'The whole of Slow is smooth, straight to your inbox. One email, then silence until you ask for more.' Right (6 cols, offset 1): the inline form — email input (placeholder 'you@work.com') + primary button 'Send chapter one' + small print 'Sample store: this demo saves your address in your browser only and sends nothing.' On submit: check line 'Done — chapter one is in your browser's memory (this demo stores nothing anywhere else).'
   Layout: Two-column card on Card with Rule border, 8px radius, 40px inner padding; stacked under 900px.
5. **Chapters** — Section id='chapters'. Eyebrow 'THE TABLE OF CONTENTS'; H2 'Eight chapters, no padding.' Eight ChapterRows: big amber number (Fraunces 600 28px), title (Fraunces 600 21px) with promise under (Public Sans 15px Soft Ink), right-aligned page count (Public Sans 500 14px tabular Soft Ink). Hairline between rows.
   Layout: Paper background; rows are a 48px-tall baseline grid; number column 72px fixed; 2-column chapter layout (4+4) above 1100px, single column below.
6. **Inside peek** — Three pull-quote cards styled like open book pages: Card fill, top rule in Amber 3px, Fraunces italic 400 22px quotes — 'Haste is a tax. You always pay it, usually twice.'; 'The list that matters fits on an index card. The other list is a wishlist wearing a suit.'; 'Maintained things whisper. Neglected things eventually scream.' Each with a chapter chip ('Ch. 01', 'Ch. 02', 'Ch. 05'). Behind the middle card, desk-flatlay.webp as a small tilted photo (10deg, 1px Rule outline).
   Layout: Cream background; 3 columns 24px gap (1 under 800px); middle card raised 12px.
7. **Author** — Section id='author'. Left (4 cols): author-portrait.webp (3:4), 1px Rule outline, caption 'Maren, mid-edit (photo: fictional, like the coffee)'. Right (7 cols, offset 1): eyebrow 'THE AUTHOR'; H2 'Written by a human, edited by several.'; two paragraphs: '[AUTHOR] has spent fourteen years [TOPIC] — first badly, then less badly, lately with something like a system. She writes the newsletter 'Small Proof', read weekly by 40,000 makers (sample figure).' and 'This book is the newsletter's patient older sibling: slower, longer, and it doesn't ask you to forward it to a friend.'; credential ticks (Moss): '14 years in the workshop', 'Newsletter · 40k readers (sample)', 'Two earlier ebooks, both refundable'. Link chip 'Read the newsletter' (href '#' with title 'Demo link').
   Layout: Paper background; portrait column sticky on desktop; stacked under 900px.
8. **Reviews** — Section id='reviews' on Cream. Eyebrow 'EARLY READERS'; H2 'Short sentences from real-seeming people.' Six ReviewCards: StarRow (5 amber SVG stars), quote (Public Sans 400 16px / 1.6), name (Public Sans 600 14px) over role (13px Soft Ink).
   Layout: 3 columns 24px gap (2 under 1024px, 1 under 640px); cards on Card with Rule border and a 4px Amber top rule.
9. **Pricing** — Section id='pricing'. Eyebrow 'GET THE BOOK'; H2 'One book, three honest prices.' Three TierCards as in the roster: the middle one carries the Amber 1.5px border, an Amber Mist 'MOST POPULAR' chip and sits 8px higher. Feature rows use Moss check icons. Primary button per tier: 'Get the ebook', 'Get ebook + workbook', 'Get the team pack' — each a link to #sample with the honest small print under the grid: 'Sample store — nothing charges in this demo; the buttons park you at the free chapter.'
   Layout: Paper background; 3 columns 24px gap (1 under 860px); middle card visually dominant.
10. **FAQ and footer** — FAQ: four FaqRows (plus icon rotating to cross) on Card rows. Footer on Cover Navy (bone text #F4EFE6): left '[AUTHOR]' wordmark + 'hello@' + emailDomain; right two lines '© [AUTHOR]. All rights reserved.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: FAQ on Paper; footer 72px tall, two-part, hairline Rule-dark border top.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/cover-art.webp → public/images/cover-art.webp (the CoverMock face; alt 'Abstract layered-paper cover artwork in navy and amber'); https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/author-portrait.webp → public/images/author-portrait.webp (Author bio; alt 'Portrait of the author at her writing desk'); https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/desk-flatlay.webp → public/images/desk-flatlay.webp (Inside peek backdrop; alt 'Manuscript pages, pencil and coffee on linen'); https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/reader-scene.webp → public/images/reader-scene.webp (Sample strip side image on desktop; alt 'An e-reader resting on a chair-side table'). Four files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row per photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource-variable/fraunces and @fontsource-variable/public-sans (OFL-1.1) and lucide-react (ISC). State that the author portrait is an AI-generated fictional person, not resembling any real individual.
- icon: lucide-react only: ArrowRight, Check, BookOpen, FileDown, Mail, Plus, Users. Stroke width 1.75, 16–24px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #B7521E, a Card (#FFFFFF) open-book glyph (two page rectangles with a center spine). No other logo: the author's name is always set as type.
- font: Install @fontsource-variable/fraunces and @fontsource-variable/public-sans and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the cover mockup's spine and page block (CSS gradients), the StarRow (five inline SVG stars), the favicon. No other bitmaps beyond the four photos.

## Don'ts
- No backend, no form submission, no fetch to API, no payments: the sample form saves in the browser only (localStorage) and the small print says so; buy buttons link to #sample with honest demo copy.
- Every internal link points to a file name or anchor (./index.html, #chapters) — never to a bare directory; there is exactly one page.
- No real books, authors, publishers, bestseller lists or retailer marks (no NYT/Amazon/Kindle/Apple Books badges or logos); the title, author, reviews, reader counts and credentials are invented sample content.
- The cover artwork contains no readable text; the title and author name on the cover are typeset in CSS so they follow the variables.
- The author portrait is an AI-generated fictional person, not resembling any real individual; other photos contain no people; no readable text or logos in any photo.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 8 MB.
- No dates or years anywhere on the page; the site never shows today's date.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no tilt, no entrance rotations, no drawing animations; color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; form, FAQ and buttons work with keyboard only and visible focus rings.
- Keep the tone hype-free: no 'unleash', no 'game-changer'; every string lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/ebook-sales-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
