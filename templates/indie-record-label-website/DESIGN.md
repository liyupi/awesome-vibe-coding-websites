---
name: "Indie Record Label Website"
colors:
  riso_ink: "#17130E"
  paper_cream: "#F3EDDE"
  hot_coral: "#FF4B33"
  deep_violet: "#5B2DB3"
  faded_ink: "#CFC5AC"
typography:
  display_wordmark_titles_prices: { family: "Anton", weights: [400] }
  body_paragraphs_buttons_nav: { family: "Space Grotesk", weights: [400, 500, 700] }
  meta_catalog_numbers_eyebrows_ticker_chips: { family: "Space Mono", weights: [400, 700] }
spacing: "8px base grid. Shell max-width 1200px with 40px desktop and 20px mobile side padding. Header 64px with a 2px ink bottom rule. Sections 96px vertical padding on desktop, 64px on mobile. Catalog grid gap 24px. Tour rows 20px vertical padding split by 1px dividers. Paragraphs max 56 characters per line."
radius: "0px everywhere — paper trimmed square: cards, buttons, chips, inputs and photos all take sharp corners. The only circles on the site are drawn art: the vinyl, artist stamps, dot grids and the logomark ring."
---

# Indie Record Label Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Riso ink** `#17130E` — Ink black: dark bands, hero type, vinyl disc, footer
- **Paper cream** `#F3EDDE` — Riso paper: page ground and card stock
- **Hot coral** `#FF4B33` — Spot color one: CTAs, chips, vinyl label, tour Tickets state
- **Deep violet** `#5B2DB3` — Spot color two: links on ink, sleeve geometry, Sold out chips
- **Faded ink** `#CFC5AC` — Hairlines, dividers, secondary text on paper

## Typography
- **Display: wordmark, titles, prices** — Anton (OFL), weights 400. Self-host the font files.
- **Body: paragraphs, buttons, nav** — Space Grotesk (OFL), weights 400/500/700. Self-host the font files.
- **Meta: catalog numbers, eyebrows, ticker, chips** — Space Mono (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Shell max-width 1200px with 40px desktop and 20px mobile side padding. Header 64px with a 2px ink bottom rule. Sections 96px vertical padding on desktop, 64px on mobile. Catalog grid gap 24px. Tour rows 20px vertical padding split by 1px dividers. Paragraphs max 56 characters per line.
- Radius: 0px everywhere — paper trimmed square: cards, buttons, chips, inputs and photos all take sharp corners. The only circles on the site are drawn art: the vinyl, artist stamps, dot grids and the logomark ring.

## Motion
- The hero vinyl rotates once every 28s, linear, infinite; the animation pauses entirely under prefers-reduced-motion and the record stays fully readable.
- The ink ticker band scrolls one seamless loop every 30s; it pauses on hover and renders static under reduced motion.
- Release sleeves: hover rotates the sleeve 3deg and slides the vinyl 56px out from behind over 240ms ease-out; touch devices toggle the same state on tap; both reset on leave.
- Display headings sit on misregistered coral and violet copies; the offsets settle from 6px to 3px on load and widen by 1px each on hover over 200ms.
- Sections reveal once on scroll with a 16px rise and a 420ms fade, staggered 60ms per card or row; under reduced motion everything appears instantly.
- The cart drawer slides in from the right over 280ms with a 60% ink backdrop; the cart count badge pops to 1.15 scale for 160ms on every add.

## Imagery
Zero photographs — the entire site is drawn in code. Sleeves are seeded generative SVG (two-color geometry, multiply overlaps); the vinyl, artist stamps and logomark are hand-built SVG; riso paper grain is a generated feTurbulence overlay at 6% multiply across the whole page; misregistration is layered color copies on type, never a texture file. No scanned paper, no stock art, no photos of people.

## Tone
Loud but crafted — a screen-printed gig poster that happens to be a website. Short confident lines, mono catalog numbers, zero hype words. Playful about the demo cart, never pretending money changes hands.

---
— Prompt by VibeFather · https://vibefather.ai/t/indie-record-label-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
