---
name: "Ebook Sales Landing Page"
colors:
  paper: "#FBF7EF"
  cream: "#F3EDE0"
  card: "#FFFFFF"
  ink: "#201B14"
  soft_ink: "#5C544A"
  amber: "#B7521E"
  amber_deep: "#93411A"
  amber_mist: "#F6E4D7"
  rule: "#E7DFCF"
  moss: "#6B7F4F"
  cover_navy: "#223042"
typography:
  display_h1_h2_tier_names_chapter_titles_the_cover_title_italic_pull_quotes_fraunces_warm_ink_serif_with_soft_terminals: { family: "Fraunces", weights: [400, 600] }
  text_and_ui_body_buttons_forms_captions_chapter_metadata_tabular_numerals_for_page_counts_and_prices: { family: "Public Sans", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 5.6vw, 68px) Fraunces 600, line-height 1.08; H2 clamp(26px, 3.4vw, 40px) Fraunces 600; chapter titles Fraunces 600 21px; lead Public Sans 400 17.5px / 1.65 Ink at 90%, max-width 54ch; body 15.5px / 1.7; eyebrow Public Sans 600 12px uppercase letter-spacing 0.16em Soft Ink; caption 13px Soft Ink. Buttons: height 48px, Public Sans 600 14px; primary Amber fill with Paper text, secondary 1px Ink border on Card. Inputs: height 48px, 1px Rule border, Card fill, focus Amber border + 2px offset ring. Focus everywhere: 2px Amber outline, 3px offset."
radius: "8px on cards, buttons, inputs, chips and photos. 10px on the cover mockup and tier cards."
---

# Ebook Sales Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#FBF7EF` — Page background throughout.
- **Cream** `#F3EDE0` — Alternate section background (Sample, Reviews), chip fills, hover fill.
- **Card** `#FFFFFF` — Cards, tier cards, FAQ rows, form input fill.
- **Ink** `#201B14` — Headlines and body ink, icon color.
- **Soft Ink** `#5C544A` — Secondary text, eyebrows, captions, chapter promises.
- **Amber** `#B7521E` — Primary: chapter numbers, links, primary buttons, highlighted tier border, stars, focus ring.
- **Amber Deep** `#93411A` — Hover and pressed primary.
- **Amber Mist** `#F6E4D7` — Selected chip fills, 'Most popular' chip background.
- **Rule** `#E7DFCF` — 1px hairlines, card borders, input borders.
- **Moss** `#6B7F4F` — Checkmarks in tier features and trust rows.
- **Cover Navy** `#223042` — The cover spine, the eyebrow chip on the cover face, dark pull-quote text on cream.

## Typography
- **Display: H1, H2, tier names, chapter titles, the cover title, italic pull-quotes — Fraunces, warm ink serif with soft terminals** — Fraunces (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, buttons, forms, captions, chapter metadata; tabular numerals for page counts and prices** — Public Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 5.6vw, 68px) Fraunces 600, line-height 1.08; H2 clamp(26px, 3.4vw, 40px) Fraunces 600; chapter titles Fraunces 600 21px; lead Public Sans 400 17.5px / 1.65 Ink at 90%, max-width 54ch; body 15.5px / 1.7; eyebrow Public Sans 600 12px uppercase letter-spacing 0.16em Soft Ink; caption 13px Soft Ink. Buttons: height 48px, Public Sans 600 14px; primary Amber fill with Paper text, secondary 1px Ink border on Card. Inputs: height 48px, 1px Rule border, Card fill, focus Amber border + 2px offset ring. Focus everywhere: 2px Amber outline, 3px offset.
- Radius: 8px on cards, buttons, inputs, chips and photos. 10px on the cover mockup and tier cards.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the cover tilt. Bookshop-calm.
- Reveal: sections wrapped in <Reveal> start opacity 0, translateY(14px) and settle over 700ms --ease-out at 15% viewport (Motion whileInView, once). Siblings stagger 70ms.
- Hero: the cover mockup enters from rotateY(-40deg) opacity 0 to its resting pose over 900ms; the H1 lines rise 12px; the trust row fades last.
- Cover tilt: pointer over the hero lerps rotation as described in Setup; leaving snaps back to resting over 300ms.
- Chapters: rows reveal in order; hover raises the amber chapter number 2px and slides a 24px amber underline under the title.
- Sample form: submit swaps the form for a check line with a 260ms crossfade; the small print stays visible.
- Reviews: cards reveal with a 60ms stagger; stars fill amber one by one on first view (40ms apart).
- Pricing: the highlighted tier lifts 6px on hover; feature checkmarks draw in (SVG stroke) on first view.
- FAQ: rows expand with a 240ms height ease; the plus icon rotates 45deg to a cross.
- Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no tilt, no entrance rotations, no star or checkmark drawing; content sits at rest immediately; color and border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
Four photographs, all made for this template in one warm editorial style: cream and amber tones, soft daylight, paper texture. The cover art is abstract layered-paper geometry with no readable text — the title and author are typeset in CSS on the mockup so they follow the variables. The author portrait is an AI-generated fictional person (a woman in her 40s at a writing desk, natural working shot, not resembling any real individual). No logos, no readable text, no brand marks in any photo; other photos contain no people. Every photo object-fit cover, 8px corners; photos on Paper get a 1px Rule outline. Icons: lucide-react only, stroke width 1.75. The favicon and the star row are drawn SVG.

## Tone
Warm, plain and confident, like a well-made colophon. No hype words, no 'unleash', one dry joke per screen at most.

---
— Prompt by VibeFather · https://vibefather.ai/t/ebook-sales-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
