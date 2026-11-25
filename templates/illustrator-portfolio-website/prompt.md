# Illustrator Portfolio Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A portfolio for a fictional editorial and children's-book illustrator. A masonry gallery filterable by client type with a lightbox that shows the process sketches next to the final piece; project pages told as brief, sketches, colour roughs and final; a shop for signed prints with a size picker and a cart; a commission enquiry form with budget, deadline and usage-rights fields; and an about page with a studio photo taken from behind. All artwork is in one gouache-and-ink style on warm paper, tomato, teal and ink.

- Audience: Picture-book editors, art directors at magazines and package designers, plus readers who want a print for their wall.
- Goal: Move a visitor from the first painting to a project page, a print in the cart, or a commission enquiry.
- Tone: Warm, plain and a little playful, like a note written on the back of a sketch: short sentences, concrete details about paint and paper, no art-speak.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/shantell-sans (OFL-1.1), @fontsource-variable/work-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors paper #FBF6EC, paperDeep #F1E6CC, ink #22223B, tomato #E4572E, teal #2A9D8F, mustard #E9B44C; fontFamily display 'Shantell Sans Variable', sans 'Work Sans Variable'.
  - Routing is a small hash router reading location.hash: #/ (home), #/work, #/work/<slug>, #/prints, #/about, #/commission. Scroll to top on route change. No router library.
  - All copy, artworks, projects, print prices, commission rates and form options live in src/content.ts as typed objects; components never hard-code copy.
  - Define one inline SVG <filter id="pencil-lines"> in index.html (feColorMatrix to grayscale with contrast raised, then feConvolveMatrix order 3 with an edge kernel) and apply it with CSS filter: url(#pencil-lines) to draw the pencil stage from a finished artwork.
  - The cart persists to localStorage under the key [BRAND_SLUG]-cart, where [BRAND_SLUG] is [BRAND] lowercased with hyphens.

## Variables
- [BRAND] — Illustrator's name (default: "Wren Kowalski"). Used as the wordmark, in the bio and in the localStorage key via [BRAND_SLUG].
- [CITY] — Studio city (default: "Asheville")
- [HERO_TITLE] — Title of the hero artwork (default: "The Lighthouse Keeper's Lunch")
- [SPECIALTY] — One-line specialty (default: "picture books and editorial")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/illustrator-portfolio-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- paper `#FBF6EC` — Page ground and text on tomato or teal
- paperDeep `#F1E6CC` — Cards, caption plates, form panel
- ink `#22223B` — Text, hand-drawn lines, primary buttons
- tomato `#E4572E` — First accent: hero block, highlighter marks, commission button and band
- teal `#2A9D8F` — Second accent: underlines, chips, process band, offset frames
- mustard `#E9B44C` — Small highlights only: stars, dots, active size pill

### Typography
- Display / headlines and wordmark: Shantell Sans Variable (OFL), weights 400/700
- Body / UI: Work Sans Variable (OFL), weights 400/500/600

### Layout & motion
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-5; vertical rhythm in multiples of 8px.
- Radius: Artwork frames rounded-[18px]; chips and buttons rounded-full; the print mat is square-cornered with a 10px paper border.
- Motion: Scroll reveals: sections fade up 20px over 450ms, once (Motion whileInView). Content is visible by default; reveals only enhance it.
- Motion: Hover on an artwork: the frame lifts 6px and its offset colour block slides 4px (200ms ease-out).
- Motion: Gallery filter change: leaving tiles fade out 150ms, entering tiles fade up 250ms with a 40ms stagger.
- Motion: Lightbox: backdrop fades 200ms, panel scales from 0.97; switching process stages cross-fades 250ms.
- Motion: Cart drawer slides in from the right 250ms; quantity changes and the subtotal update instantly.
- Motion: prefers-reduced-motion: no reveals, lift or slide; the lightbox and cart appear instantly.
- Imagery: Gouache-and-ink illustration with visible brush texture and loose black ink linework in tomato, teal, mustard, ochre and ink on warm cream paper; five finished pieces that look painted by one hand. One candid studio photograph taken from behind. Thumbnails, pencil lines and colour roughs are derived from the finished artwork in code (SVG filters); decorative paper shapes and icons are drawn in code. No stock photos, no clip art, no readable text inside images.

## Pages & Sections
### Home (`index.html`)
1. **Site header** — Left: wordmark [BRAND] in Shantell Sans 700, 22px, ink, followed by a small code-drawn tomato asterisk. Center nav: Work (→ #/work), Prints (→ #/prints), About (→ #/about), Commission (→ #/commission), Work Sans 500 15px ink/70, hover ink with a 3px teal underline. Right: pill button 'Commission me' (tomato fill, paper text) → #/commission.
   Layout: Sticky 64px bar on paper/90 with backdrop blur and a 1px bottom hairline ink/15; inner max-w-[1200px]. Mobile: wordmark, a compact 'Commission' link and a lucide menu button stay on one line at 390px (wordmark may shrink to 18px); the menu opens a full-screen paper drawer with the links stacked.
   Motion: Links underline on hover 150ms; the drawer fades in 200ms.
2. **Hero — one big painting** — Left: eyebrow Work Sans 600 12px uppercase tracking-widest teal 'ILLUSTRATION · [SPECIALTY]'. H1 in Shantell Sans 700 at clamp(44px, 6vw, 84px), ink, line-height 1.02: 'Stories painted in gouache, drawn in ink.' — the word 'gouache' gets a teal hand-drawn underline (SVG path) and 'ink' a tomato highlighter stroke behind it. Paragraph 18px ink/75, max-w-[44ch]: 'I'm [BRAND], an illustrator in [CITY]. Every piece starts as a thumbnail in a sketchbook and ends with more paint on the desk than on the page.' Buttons: 'See the work' (ink pill, paper text → #/work) and 'Order a print' (teal outline pill → #/prints). Right: the hero painting public/images/hero-lighthouse.webp (3:4) in a frame rotated 1.5deg on a solid tomato block offset 20px down and left; alt 'A child in a yellow raincoat sharing sandwiches with a red fox on a lighthouse balcony at dusk'. A caption plate on the frame: '[HERO_TITLE] · Picture book'.
   Layout: lg:grid-cols-[45%_55%] items-center gap-10, min-h-[calc(100vh-64px)], py-16. Painting height clamp(420px, 68vh, 620px), object-cover. On mobile the painting comes first at 4:5, then the text; both fit without horizontal scroll.
   Motion: Headline lines fade up 500ms staggered 90ms; the painting settles from scale 1.03; teal and mustard paper shapes (code-drawn SVG leaf and star) float ±6px on 8s loops, paused under reduced motion.
3. **Selected work — filterable gallery** — H2 Shantell Sans 700 44px ink 'Selected work'; intro line ink/70: 'Five finished pieces, each with its process on show.' Filter chips rounded-full: All, Books, Editorial, Packaging, Murals; active chip ink fill with paper text. Masonry tiles, each an image with a paperDeep caption plate underneath (title in Shantell Sans 700 20px, a teal type tag and a 'View process' link). Data from content.ts: [HERO_TITLE] — Picture book · Books — public/images/hero-lighthouse.webp; 'Bear Weather' — Picture book · Books — public/images/book-bear.webp, alt 'A brown bear reading under a patchwork blanket while rain falls outside a round window'; 'Too Many Tomatoes' — Magazine feature · Editorial — public/images/editorial-kitchen.webp, alt 'A crowded kitchen with oversized vegetables tumbling from a crate'; 'Bramble Preserve' — Label artwork · Packaging — public/images/packaging-jam.webp, alt 'Plump strawberries and leaves arranged around a small preserve jar'; 'Swallows Over Lark Street' — Public mural · Murals — public/images/mural-birds.webp, alt 'A flock of swallows and one large owl flying over terracotta rooftops'. Clicking a tile opens the lightbox: left the final artwork; right a 'Process' panel with four tabs — Thumbnail (six small pencil boxes drawn in SVG), Pencil (the artwork through the #pencil-lines filter on paper), Colour rough (the artwork blurred 8px, saturate 1.25, multiply on paper), Final — with one sentence per tab from content.ts and a link 'Read the project' → #/work/<slug>.
   Layout: Chips row wraps with 8px gaps; CSS columns: 3 columns desktop, 2 tablet, 1 mobile, 24px gap; the 3:4 pieces are taller than the 16:9 one. Lightbox: fixed inset-0 ink/80 backdrop, a paper panel max-w-[1100px] grid-cols-[60%_40%] on desktop and stacked on mobile, prev/next buttons, close button, Esc and backdrop click close it, focus moves into the panel and returns to the tile.
   Motion: Filter animation as described in motion; the lightbox panel scales in 250ms.
4. **Process band** — Solid teal band, paper text. H2 'From thumbnail to final'. Four steps in a row, each with a code-drawn ink-on-paper icon: 'Thumbnail — six tiny boxes until one feels right.', 'Pencil — the chosen box, drawn full size.', 'Colour rough — loose gouache, wrong on purpose.', 'Final — ink lines last, then clean-up.' Button 'Open a project' (paper fill, ink text) → #/work.
   Layout: grid md:grid-cols-4 gap-8, py-20; steps numbered 01–04 in Shantell Sans 700.
   Motion: Steps fade up staggered 80ms.
5. **Prints teaser** — H2 'Take one home'; line ink/70: 'Signed giclée prints in three sizes, from $45.' Three framed prints (hero-lighthouse, editorial-kitchen, mural-birds) with title and 'From $45'. Button 'Browse prints' (ink outline pill) → #/prints.
   Layout: grid md:grid-cols-3 gap-8; frames have a 10px paper mat and a 1px ink/20 border.
   Motion: Frames lift 4px on hover.
6. **Clients and commission call to action** — A quiet row of invented client names set in Shantell Sans 700 ink/50: 'Marlow & Finch Books', 'The Saturday Table', 'Bramble Preserve Co.', 'Fairwater Borough Council'. Below it a full-width tomato band: H2 paper 'Have a story that needs pictures?' and paragraph paper/85: 'Tell me the format, the deadline and where it will be seen. I reply within two days.' Button 'Commission me' (paper fill, tomato text) → #/commission.
   Layout: Client row py-10 with names wrapping and separated by small mustard dots; the band py-20 with text left and button right on desktop, stacked on mobile.
   Motion: The band's text fades up 450ms.
7. **Footer** — Wordmark [BRAND], nav repeat (Work, Prints, About, Commission), and small print 13px ink/60: 'Illustration studio · 14 Mulberry Lane, [CITY]' and 'Artworks, clients and prices on this site are invented sample content.' plus [CREDIT].
   Layout: Grid md:grid-cols-3 gap-8 py-12 with a 1px top hairline ink/15.
   Motion: None.

### Project pages (`#/work`)
1. **Project header** — Shows the project for the slug in the hash (#/work/lighthouse, #/work/bear-weather, #/work/tomatoes, #/work/bramble-preserve, #/work/swallows); opened as #/work with no slug it shows the first project. Eyebrow: type · client in teal uppercase 12px. H1 in Shantell Sans 700 clamp(40px, 5vw, 68px) ink. One-line summary 18px ink/75. The final artwork full width beneath, max height 640px, object-cover, with its alt text. For the first project: eyebrow 'Picture book · Marlow & Finch Books', H1 '[HERO_TITLE]', summary 'A 32-page picture book about a keeper who cooks lunch for whoever sails past.'
   Layout: Same header and container as the home page; py-16; the artwork in a rounded-[18px] frame.
   Motion: Header fades up 400ms; artwork settles from scale 1.02.
2. **Brief and specs** — Left column H2 'The brief' and two short paragraphs written for the default project: 'Marlow & Finch asked for a story that makes an ordinary job feel like an adventure. The keeper had to be warm, a little forgettable to look at, and completely at home far above the sea.' and 'I pitched a lunch shared with a stranger, because sharing food is the quickest way to make two characters care about each other. The publisher approved it on the second thumbnail.' The other four projects have one paragraph each. Right column 'Specs' list: Client, Use, Medium 'Gouache and ink on cold-press paper', Size, Delivery 'Layered TIFF and PDF/X-1a'.
   Layout: lg:grid-cols-[65%_35%] gap-12 py-16; specs as a table with 1px ink/15 row lines.
   Motion: Fade up 400ms.
3. **Process — four stages** — H2 'How it was made'. A row of four stage cards: Thumbnail (six pencil boxes drawn in SVG on a paperDeep card), Pencil (the artwork with the #pencil-lines filter), Colour rough (the artwork blurred 8px with saturate 1.25 on paper), Final (the artwork). Each card has a stage label in Shantell Sans 700 and one sentence: 'Six thumbnails, drawn in ten minutes.', 'The one the editor circled, at full spread size.', 'Three colour notes; this one kept the yellow raincoat.', 'Ink lines last, then two days of clean-up.'
   Layout: grid md:grid-cols-4 gap-6; cards on paperDeep, rounded-[18px], p-4; stage images at 3:4.
   Motion: Cards fade up staggered 80ms.
4. **Next project and index** — 'Next project' card with the following artwork, title and type (wrapping back to the first). Below, 'All projects': the other four as small tiles linking to their pages.
   Layout: Next card grid-cols-[40%_60%] on desktop; index grid md:grid-cols-4 gap-6, py-16.
   Motion: Tiles lift 4px on hover.

### Print shop (`#/prints`)
1. **Prints header** — H1 'Signed prints'; line ink/70: 'Giclée prints on 310 gsm cotton rag, signed and numbered in pencil. Three sizes, shipped flat.' A small note 13px ink/60: 'Sample shop: nothing is charged and no order is placed.'
   Layout: py-16.
   Motion: Fade up 400ms.
2. **Print grid and cart** — Five print cards: artwork, title in Shantell Sans 700 22px, 'Giclée print · open edition', a size picker of three pills — A3 $45, A2 $85, A1 $140 (A3 selected by default; the active pill is mustard) — and a button 'Add to cart' (ink fill). Adding opens the cart drawer: lucide shoppingBag title 'Your cart', line items with thumbnail, title, size, a minus/plus stepper, line total and remove; subtotal in Shantell Sans 700; a free-shipping line 'Add $<amount> for free shipping' under $120 and 'Free shipping unlocked' above it, with a thin progress bar in teal; button 'Checkout'. Checkout replaces the drawer content with a check panel: 'Sample checkout. No payment was taken and no order was placed. In a live shop this step would hand over to a payment provider.' and a button 'Keep browsing'.
   Layout: Grid md:grid-cols-3 gap-8; drawer fixed right, w-[400px] max-w-full, h-full paper, slides over an ink/40 backdrop; the cart icon in the header shows a count badge once something is added. State persists under [BRAND_SLUG]-cart.
   Motion: Drawer slides in 250ms; stepper presses scale to 0.96.

### About (`#/about`)
1. **Studio and bio** — Left: public/images/studio-desk.webp (4:3) in a frame on a teal block offset 20px, alt 'The illustrator at her desk, seen from behind, painting with gouache in a sunlit studio'. Right: eyebrow 'ABOUT'; H1 'Hello from the studio'; three paragraphs: 'I'm [BRAND]. I drew my way through a biology degree, taught for ten years, and then let the sketchbook win. Now I paint for [SPECIALTY] from a drafty studio in [CITY].' 'My work starts on cold-press paper with a dip pen and ends with more gouache than I meant to use. I like ordinary rooms, bad weather and characters who are trying their best.' 'Away from the desk I walk a small opinionated dog named Pip and keep a shelf of picture books that is slowly becoming a wall.' A lucide button 'Commission me' → #/commission.
   Layout: lg:grid-cols-2 gap-12 items-center py-16.
   Motion: Text fades up staggered 90ms; the photo settles from scale 1.03.
2. **How I work** — H2 'How I work'. Three items with code-drawn icons: 'Two rounds of pencil sketches before any colour goes down.', 'Gouache from the tube, ink with a dip pen, no digital brushes.', 'Files delivered as layered TIFF and PDF/X-1a, with the sketches included.'
   Layout: grid md:grid-cols-3 gap-8 py-16 on paperDeep.
   Motion: Items fade up staggered 80ms.

### Commission (`#/commission`)
1. **Commission form** — Left: eyebrow 'COMMISSIONS'; H1 'Tell me about your project'; 'What happens next' as four numbered steps: 'Brief — you send the story, the format and the deadline; I reply with questions within two days.', 'Estimate — a fixed quote based on usage, within three days.', 'Sketches — two pencil directions to choose from, within a week.', 'Final — painted artwork and print-ready files in two to three weeks.' A rate guide table with 1px ink/15 row lines: 'Picture book spread $900–1,400', 'Editorial spot $350–600', 'Editorial full page $700–1,100', 'Packaging illustration $1,200–2,500', 'Mural design $2,500–6,000', and a note 'Starting points for a conversation; the final quote depends on usage and timeline.' Right, a form panel on paperDeep rounded-[18px] p-8: Name, Email, 'Project type' checkboxes (Picture book, Editorial, Packaging, Mural, Other), 'Budget' radio pills (Under $1,000 / $1,000–3,000 / $3,000–8,000 / Over $8,000), 'Deadline' text input (placeholder 'Month and year'), 'Usage rights' checkboxes (Print, Digital, Packaging, Merchandise), 'Tell me about the project' textarea, and a submit button 'Send enquiry' (tomato fill, paper text). Validation: name, a valid email, at least one project type, a budget and a message of 20+ characters are required; errors show inline in tomato under the field. On success the form is replaced by a check panel: 'Thanks, <name>. This is a sample form, so nothing was sent. In a live site this would reach [BRAND] by email.' with a button 'Send another enquiry'.
   Layout: lg:grid-cols-[55%_45%] gap-12 py-16; inputs have a 1px ink/30 border, rounded-[10px], paper background and a 3px teal focus ring; mobile stacks form first.
   Motion: Columns fade up staggered 90ms; the success panel fades and grows 250ms.

## Assets
- image: Five gouache-and-ink illustrations and one studio photograph, generated by VibeFather, downloaded into public/images/ and used nowhere else: hero-lighthouse.webp (3:4), book-bear.webp (4:3), editorial-kitchen.webp (3:4), packaging-jam.webp (1:1), mural-birds.webp (16:9), studio-desk.webp (4:3). Each downloads from https://media.vibefather.ai/assets/e1de19bf-668f-4e4b-9922-4f4fc24e79ca/<file>; alt text is given in the sections above. Credit in ASSETS.md: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- image: Process stages (thumbnails, pencil lines, colour roughs), decorative paper shapes and step icons are drawn in code with SVG and CSS filters; no image files for them.
- icon: lucide-react npm package (ISC): menu, x, arrowRight, arrowUpRight, plus, minus, shoppingBag, check, chevronLeft, chevronRight. No other icon sets, no brand logos anywhere.
- font: Fontsource variable packages (OFL-1.1): @fontsource-variable/shantell-sans and @fontsource-variable/work-sans, imported in main.tsx. No font CDN links.

## Don'ts
- No backend: no server code, API routes, databases, auth, or forms that submit anywhere. The commission form and the checkout are local samples that say so in their confirmation text.
- Artwork, titles, clients, prices and rates are invented sample content; no real publishers, magazines, brands, agencies, awards or illustrators may be named or imitated.
- Images carry no readable text, lettering, logos or signatures; artwork stays in one gouache-and-ink style; the studio photo shows the illustrator from behind, never a front-facing close-up.
- Self-host everything: fonts via Fontsource packages, images downloaded into the project, no CDN script or link tags, no Google Fonts, no analytics.
- Vite base './' with relative asset paths; internal links are anchors (#/work, #/prints) or real file names, never bare directories; #/work opened without a slug shows the first project.
- Production build minified with no source maps; dist/ under 20 MB.
- prefers-reduced-motion: no scroll reveals, floating shapes, lift or drawer slide; content is visible instantly. Never hide a whole element with clip-path or zero opacity while waiting for an in-view trigger.
- Any headline placed over an image sits on a solid plate or a gradient scrim and keeps WCAG AA contrast; body text on paper or paperDeep uses ink.
- Tailwind opacity utilities use the default scale (for example /15, /90); custom steps are written as arbitrary values.
- No SEO work: a plain <title> with [BRAND] and a favicon are enough; no meta descriptions, Open Graph tags, JSON-LD or sitemaps.
- No copied code, copy, imagery or fonts from any reference site; no brand names in template names, slugs, copy or alt text.

---
— Prompt by VibeFather · https://vibefather.ai/t/illustrator-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
