# Product Review Blog

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a two-page review publication for [BRAND], an invented independent site that rates [CATEGORY] for [AUDIENCE]. The identity is trusted editorial: clean white ground, ink text, one confident green reserved for scores and picks, Newsreader serif headlines, generous table typography with mono numerals, and a warm paper tint for bands. The home page anchors on a stacked best-of card display — the winner's photo, circular score badge, and ribbon — under a serif headline, followed by the disclosure band, a sortable six-product comparison table with a best-pick ribbon and rows that open review pages, a buying guide with a how-we-score card, and a local newsletter box. Review pages carry the four-sub-score breakdown, pros and cons, and a verdict box.

- Audience: [AUDIENCE] comparison-shopping the category, plus affiliate publishers, niche-review bloggers, and creators adapting the format to any product list.
- Goal: Take a skeptic from headline to confident pick in two minutes: prove the rigor with visible scores and methods up front, let them sort the table their own way, hand them the verdict on one page, and capture the newsletter locally without pretending anything is sent.
- Tone: Calm, specific, and self-aware — a consumer-magazine testing desk that happens to be fictional. Concrete observations over adjectives, honest cons for every pro, and an always-visible disclosure that every score on the page is an invented sample.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/newsreader (OFL-1.1), @fontsource/figtree (OFL-1.1), @fontsource/spline-sans-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', and build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below and fontFamily.display 'Newsreader', fontFamily.body 'Figtree', fontFamily.mono 'Spline Sans Mono'; enable tabular numerals for the mono family in CSS.
  - Self-host Newsreader 600 and 700 plus italic 400, Figtree 400/500/600/700, and Spline Sans Mono 500/700 through @fontsource packages imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (useReducedMotion, AnimatePresence) for the hero card settle, table re-sort, bar fills, and section reveals; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: publication strings, the six product records (id slug, name, best-for tag, price, photo path, four sub-scores, overall, two review paragraphs, pros, cons, verdict), guide steps, scoring weights, FAQ, newsletter copy. When variable values change, rewrite the dependent copy there; overall scores are stored as exact numbers, not recomputed.
  - Store these exact sample figures: Fernway Ceramic No. 2 brew 9.6 / ease 9.2 / build 9.0 / value 9.4 / overall 9.4; Copperline Glass Cone 9.2 / 9.0 / 8.6 / 9.3 / 9.1; Halcyon Steel Dripper 8.8 / 8.6 / 9.4 / 8.1 / 8.7; Brewer & Oakes Classic 8.4 / 9.0 / 7.8 / 9.2 / 8.5; Northline Twin-Cup 8.4 / 8.0 / 8.6 / 7.5 / 8.2; Pinecrest Porcelain Tower 8.8 / 7.2 / 8.8 / 6.4 / 8.1.
  - Make the comparison table sortable: clicking Brew quality, Ease, Build, Value, or Overall toggles descending then ascending, reorders rows, and marks the active header with the ArrowUpDown glyph filled in score green; the Product column never sorts.
  - Route review.html by reading ?id= with URLSearchParams, matching product slugs, and always falling back to the first product — never a not-found state. 'Read the next review' cycles through the table order and wraps.
  - Persist the newsletter signup to localStorage under the key [BRAND_SLUG] + '-newsletter'; validate restored JSON and recover silently.
  - Download the six generated product photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - Use only these lucide-react icons: Check, X, ArrowRight, ArrowUpDown, Info.
  - A plain <title> of '[BRAND] — [CATEGORY], scored' and a favicon (a green circle with a white check) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Publication name (default: "Morning Filter"). Invented review publication; the masthead, newsletter name and storage key derive from it.
- [CATEGORY] — Reviewed category (default: "pour-over coffee makers"). The plural product category in plain words; drives the H1, table heading, review copy and buying guide — rewrite those with it.
- [AUDIENCE] — Audience (default: "home brewers upgrading their morning ritual"). A plain-language phrase for who the reviews serve; appears in the hero dek and about line.
- [MOTTO] — Motto (default: "Scored by people who drink the results."). One line of testing creed; appears in the hero dek and the footer.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/product-review-blog in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper white `#FFFFFF` — Page ground, cards, table
- Warm band `#F6F3EC` — Disclosure band, verdict box, newsletter card
- Ink `#1B211D` — Headings, body text, table rules
- Slate green `#55605A` — Secondary text, meta, footnotes
- Score green `#0E7C4A` — Scores, best-pick ribbon, pros checks, primary button
- Green tint `#E3F0E6` — Score badge fills and highlight row tint
- Hairline `#E5E1D4` — Table borders, dividers, card edges
- Muted red `#B0433B` — Cons X icons only, used sparingly

### Typography
- Display: headlines, verdict statements: Newsreader (OFL), weights 400/600/700
- Body: paragraphs, table text, buttons: Figtree (OFL), weights 400/500/600/700
- Numerals: scores, prices, eyebrows, metadata: Spline Sans Mono (OFL), weights 500/700

### Layout & motion
- Spacing: 8px base grid. Shell max-width 1080px with 32px desktop and 20px mobile side padding. Masthead 88px with a 1px ink bottom rule. Sections 88px vertical padding on desktop, 64px on mobile. Table cells 16px vertical padding; prose max 64 characters per line.
- Radius: 2px on cards, buttons, inputs, and photos — near-square editorial. The only circle is the 64px round score badge; the best-pick ribbon is a sharp rectangle.
- Motion: The hero card stack settles from a 6-degree splay to its resting rotations over 500ms on load; the top card lifts 4px on hover.
- Motion: Sorting the table re-renders rows with a 220ms fade-and-rise stagger; the active header underline slides 200ms.
- Motion: Sub-score bars fill from 0 to their value over 600ms once the review header scrolls into view.
- Motion: Sections reveal once on scroll with a 12px rise and a 420ms fade, staggered 60ms.
- Motion: Under prefers-reduced-motion every animation above becomes an instant state change with no movement; all interactions stay fully functional.
- Imagery: One studio set, six shots, one grade: generic unbranded products centered on a warm neutral seamless (#EFEAE2) in soft diffused daylight from the left with a gentle contact shadow, 50mm lens, consistent scale and crop across all six. No text, letters, numbers, logos, or brand marks on any product; no props beyond a few scattered coffee beans where natural; no people.

## Pages & Sections
### [BRAND] — [CATEGORY], scored (`index.html`)
1. **Masthead, hero and disclosure** — Masthead (88px, white, 1px ink bottom rule): [BRAND] in Newsreader 700 with the mono eyebrow 'INDEPENDENT · UNPAID · SAMPLE DATA' tucked under it; nav anchors Compare, Guide, FAQ; right-aligned score-green button 'Subscribe'. Hero: left column — Spline Sans Mono eyebrow 'THE BEST-OF LIST'; H1 in Newsreader 700 'The 6 best [CATEGORY] we've tested.'; dek 'Six products, forty rounds each, one green score that has to be earned. [MOTTO]' written for the defaults; buttons: green solid 'See the comparison table' and text link 'How we score ↓'. Right column — the best-of card stack: three cards fanned like a shortlist, the front card showing the winner's product photo, name 'Fernway Ceramic No. 2', best-for tag 'Best overall', and a 64px circular score badge reading 9.4; the two cards behind peek at 5 and -4 degrees with the second and third products' photos. Disclosure band directly under the hero on the warm band with an Info icon: 'Demo disclosure — [BRAND] is a fictional publication. The products, scores, verdicts and “tested” claims on this page are invented samples for a website template; buttons link nowhere and nothing is earned.'
   Layout: 12-column grid: hero copy in columns 1–7, the card stack in columns 8–12 with the front card at 4:3 and the two behind offset up and rotated. Masthead content shares the shell. Mobile: copy first, then the stack scaled to 78vw with only the front card's badge overlapping its top edge; buttons stack full-width at 48px tall.
   Motion: The stack settles from a 6-degree splay over 500ms on load; the front card lifts 4px on hover; eyebrow, H1, dek and buttons rise 12px in a 60ms stagger; the disclosure band fades in last.
2. **Comparison table** — Spline Sans Mono eyebrow 'THE LINEUP'; Newsreader title 'Compare all six.' Columns: Product (photo thumb, name, best-for tag), Brew quality, Ease of use, Build, Value, Overall, and a trailing ArrowRight. Rows in table order: 'Fernway Ceramic No. 2 — Best overall — $42'; 'Copperline Glass Cone — Best for watching the bed — $34'; 'Halcyon Steel Dripper — Best for travel — $38'; 'Brewer & Oakes Classic — Best budget — $19'; 'Northline Twin-Cup — Best for two — $44'; 'Pinecrest Porcelain Tower — The splurge — $79'. Every score cell is mono with one decimal; the Fernway row carries a green-tint fill, a score-green 'BEST PICK' ribbon tab on its left edge, and its Overall cell set in the 64px badge style. The five score columns sort on header click; the active header shows a filled ArrowUpDown and an underline. Clicking anywhere on a row opens ./review.html?id=fernway-ceramic-no-2 (and the matching slug for the others). Footnote under the table: 'Overall scores weight brew quality 50%, ease of use 20%, build 15%, value 15%. All figures and weights are invented samples.'
   Layout: Full-shell table with 1px hairline rules, 16px cell padding, and the header row in mono uppercase at 12px letter-spaced. Row hover raises a green-tint background. Below 640px the same data renders as stacked cards: photo and name left, the five scores as a mono row, the ribbon on the winner, tapping a card opens the review.
   Motion: Sorting re-renders rows with a 220ms fade-and-rise stagger; the active header underline slides 200ms; rows reveal once in a 40ms stagger on first scroll.
3. **Buying guide and scoring method** — Eyebrow 'BEFORE YOU BUY'; Newsreader title 'Four questions before you spend.' Four numbered steps, each two lines: '01 How many cups a morning? — One sleeper or a household of five changes the size and the price band.'; '02 Paper or cloth filters? — Rib depth and drain speed follow from the filter; decide before the dripper.'; '03 Where will it live? — Counter space, cabinet height, and whether it can stay out full-time.'; '04 What's your ceiling? — Set the budget first; this list proves the $19 cone is genuinely competitive.' Side card on the warm band, eyebrow 'HOW WE SCORE': the four criteria with weights — 'Brew quality 50% · Ease of use 20% · Build 15% · Value 15%' — four thin sample bars, and the line 'Four sub-scores roll up to the overall. Weights and figures are invented samples for this template.'
   Layout: 7/5 split: steps as a single column of numbered rows with mono numerals and hairline dividers; the scoring card sticky on desktop at the column top. Mobile: steps first, then the card.
   Motion: The sample bars fill to 50/20/15/15 over 600ms on reveal; steps reveal in a 60ms stagger.
4. **Newsletter** — Warm band with a centered card: Spline Sans Mono eyebrow 'THE DISPATCH'; Newsreader title 'One email a month. Zero hype.'; copy 'New [CATEGORY] scores, price drops worth knowing, and the occasional retraction — from [BRAND], for [AUDIENCE].' Email input and green 'Subscribe' button. On submit, validate the address locally and swap the form for 'Saved in your browser — this demo doesn't send email.' with a Check icon and a 'Change address' link that restores the form pre-filled.
   Layout: Card max-width 560px, 2px radius, 1px hairline border, 32px padding; input and button inline on desktop, stacked on mobile; the confirmation is aria-live='polite'.
   Motion: The confirmation crossfades in 240ms; the button presses 1px on click; nothing else moves.
5. **FAQ and footer** — FAQ 'Asked before buying.' as four details/summary items: 'Do companies pay for placement?' — 'No. This is a fictional demo publication; scores, verdicts and “tested” claims are invented samples, and no button earns a cent.'; 'Why one decimal place?' — 'The overall is a weighted roll-up of the four sub-scores shown in the table note — all sample math.'; 'Do you keep review samples?' — 'In the demo's story, everything goes back. In reality there is no story: the products are invented.'; 'How often does the table change?' — 'This demo has no schedule and shows no dates — whoever deploys the template rewrites the copy.' Footer on white with a 1px ink top rule: [BRAND] in Newsreader 700 with the motto '[MOTTO]' beneath, nav anchors (Compare, Guide, FAQ, Subscribe), the line 'A fictional review publication built as a website template. Every score on this site is an invented sample.', '© [BRAND]' with no year, and the optional [CREDIT] link.
   Layout: FAQ single column max-width 760px with 1px hairline dividers and a plus/minus rotation on toggle; footer in two rows — brand block left, nav right — stacking on mobile.
   Motion: A 160ms chevron rotation on FAQ toggle with no height animation that could clip text; footer static.

### Review — [BRAND] (`review.html`)
1. **Review header** — Reads ?id= and falls back to the first product; the page title becomes the product name. Breadcrumb link '← All [CATEGORY]' to ./index.html#compare. Left: the product photo at 4:3 in a hairline frame. Right: best-for tag chip in green tint; product name in Newsreader 700 ('Fernway Ceramic No. 2' for the default); price in mono ('$42 · sample'); the 64px circular score badge showing Overall 9.4; the four sub-score bars — Brew quality 9.6, Ease of use 9.2, Build 9.0, Value 9.4 — each a hairline track with a score-green fill, mono label, and mono value; and a text link 'Read the verdict ↓' anchoring down.
   Layout: 12-column grid: photo columns 1–5, scores columns 6–12. Bars are 8px tall with the value right-aligned; badge sits top-right of the name. Mobile: photo first at full width, then the score block.
   Motion: Bars fill from 0 to their value over 600ms when the header enters view; the photo settles from scale 1.02; badge counts up once over 400ms — all instant under reduced motion.
2. **The review** — Two paragraphs per product, written for the defaults and stored in content.ts. Fernway Ceramic No. 2 — paragraph one: 'Forty brews in, the Fernway's thick walls still hold heat like a kiln. The spiral ribs sit high, so the bed drains evenly even on a fast pour, and the throat fits both the bundled carafe and most mugs we tried. It drank a fifteen-second pour window without stalling once.' Paragraph two: 'It is not the cheapest cone on the shelf, and the matte glaze shows water spots if you air-dry it. But five brews in a row landed within half a point of each other on the cupping table — no other cone here came close to that consistency.' For the other five records, write two paragraphs of the same specificity in content.ts (the Copperline's visibility, the Halcyon's packability, the Oakes' price honesty, the Twin-Cup's double spouts, the Pinecrest's aroma).
   Layout: Single column max-width 680px, 64 characters per line, Newsreader 400 italic for the first sentence of each paragraph as a deck effect, hairline divider between paragraphs.
   Motion: Standard once-per-scroll reveal with a 12px rise.
3. **Pros and cons** — Two columns with a hairline divider. Pros under a score-green Check, four per product — for the Fernway: 'Even extraction across pour speeds'; 'Heat-holding thick ceramic'; 'Fits most carafes and mugs'; 'Consistent cup to cup'. Cons under a muted-red X, two per product — 'Premium price'; 'Matte glaze shows water spots'. Store four pros and two cons per record in content.ts at this density.
   Layout: Two equal columns on desktop, stacked on mobile with Pros first; list rows at 16px spacing; no card chrome, just the divider.
   Motion: Icons pop 1.1 scale in a 40ms stagger on reveal.
4. **Verdict box and next review** — Warm band card: Spline Sans Mono eyebrow 'THE VERDICT'; two sentences in Newsreader 600 — for the Fernway: 'The cone we'd buy with our own money: forgiving, consistent, and built to outlast the counter it sits on. Best for brewers who want one dripper that makes every morning boring in the best way.' Store one verdict per product. Row beneath: a green-outline 'Check price — demo' anchor to '#' and a text link 'Read the next review →' cycling to the next product in table order and wrapping to the first.
   Layout: Card max-width 680px, 2px radius, 1px hairline border, 32px padding; the small-caps demo note 'sample link, goes nowhere' under the anchor at 12px.
   Motion: Card reveals with the standard rise; the next-review link underlines on hover only.
5. **Footer** — The shared footer from the home page repeats verbatim: masthead block with motto, nav anchors, the fictional-publication line, '© [BRAND]' with no year, and the optional [CREDIT] link.
   Layout: Identical to the home footer.
   Motion: Static.

## Assets
- image: Winner's product photo. Download https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/fernway-ceramic.webp to public/images/fernway-ceramic.webp. Alt: 'A matte ivory ceramic pour-over dripper on a glass carafe against a warm neutral backdrop.' Used in the hero stack's front card, the comparison table, and the Fernway review page. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Second product photo. Download https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/copperline-glass.webp to public/images/copperline-glass.webp. Alt: 'A clear glass pour-over dripper with a slim copper ring resting on a carafe.' Used in the hero stack's back card, the table row, and the Copperline review. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Third product photo. Download https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/halcyon-steel.webp to public/images/halcyon-steel.webp. Alt: 'A brushed stainless-steel folding pour-over dripper standing on a small steel mug.' Used in the hero stack's back card, the table row, and the Halcyon review. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Fourth product photo. Download https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/brewer-oakes.webp to public/images/brewer-oakes.webp. Alt: 'A speckled stoneware pour-over dripper in an oatmeal glaze on a glass carafe.' Used in the table row and the Brewer & Oakes review. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Fifth product photo. Download https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/northline-twin.webp to public/images/northline-twin.webp. Alt: 'A wide double ceramic dripper resting over two small ceramic cups.' Used in the table row and the Northline review. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Sixth product photo. Download https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/pinecrest-tower.webp to public/images/pinecrest-tower.webp. Alt: 'A tall porcelain pour-over tower on a turned walnut base.' Used in the table row and the Pinecrest review. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Install lucide-react (ISC) and use only Check, X, ArrowRight, ArrowUpDown, and Info. Draw no brand logos; the score badge is type in a circle, not an icon. Record the package and license in ASSETS.md.
- font: Self-host Newsreader 400 (with italic), 600 and 700 through @fontsource/newsreader (OFL-1.1). Record the package and license in ASSETS.md; do not use a font CDN.
- font: Self-host Figtree 400/500/600/700 through @fontsource/figtree (OFL-1.1). Record the package and license in ASSETS.md; do not use a font CDN.
- font: Self-host Spline Sans Mono 500/700 through @fontsource/spline-sans-mono (OFL-1.1) with tabular numerals enabled for score columns. Record the package and license in ASSETS.md; do not use a font CDN.

## Don'ts
- No real products, brands, review publications, or stores: every product name, price, score, verdict and 'tested' claim is invented, and the disclosure band plus footer say so prominently.
- Product photos are AI-generated generic objects on neutral backgrounds with no readable branding, labels, text or logos; all six must share the one studio set — same seamless, same light, same scale.
- No dates or years anywhere: no 'updated' stamps, no publication dates, no copyright year, no relative-time logic against the visitor's clock.
- The newsletter is local-only: no form submits anywhere, no services, no APIs, no analytics; persist to localStorage and validate restored data.
- 'Check price' and ticket-style anchors link to '#' only, clearly labeled as demo; never fake a real storefront or affiliate redirect.
- No backend, server code, databases, auth, or external requests. Static output in dist/ from the single build command with relative paths.
- Self-host fonts through the listed Fontsource packages only; never load Google Fonts, Adobe Fonts, or any CDN stylesheet or script.
- No source maps in production, no src/ copied into dist/, keep dist/ under 20 MB, and keep Vite's base relative.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services, or hotlinked files; use only the six generated photos.
- Every internal link is a file name (./index.html#compare, ./review.html?id=…) or in-page anchor, never a bare directory; review.html opened without an id shows the first product, never a not-found state.
- Keep score green exclusively for scores, picks, and pros — never for generic decoration; cons use muted red icons only.
- The comparison table must stay keyboard- and screen-reader-usable: sortable headers are buttons with aria-sort, rows are focusable links, and re-sorting never traps focus.
- Respect prefers-reduced-motion: bar fills, badge counts, and row re-sorts become instant state changes; every interaction stays functional.
- Keep all copy in US English and derive the newsletter storage key and slugs from [BRAND] and [BRAND_SLUG] so alternate variable values never leave default-brand remnants.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps, or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- The site must render at 1440×900 and 390×844 with zero console errors, including the query-routed review page and the mobile card layout of the table.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-review-blog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
