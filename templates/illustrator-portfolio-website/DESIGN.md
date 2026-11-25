---
name: "Illustrator Portfolio Website"
colors:
  paper: "#FBF6EC"
  paperdeep: "#F1E6CC"
  ink: "#22223B"
  tomato: "#E4572E"
  teal: "#2A9D8F"
  mustard: "#E9B44C"
typography:
  display_headlines_and_wordmark: { family: "Shantell Sans Variable", weights: [400, 700] }
  body_ui: { family: "Work Sans Variable", weights: [400, 500, 600] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-5; vertical rhythm in multiples of 8px."
radius: "Artwork frames rounded-[18px]; chips and buttons rounded-full; the print mat is square-cornered with a 10px paper border."
---

# Illustrator Portfolio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **paper** `#FBF6EC` — Page ground and text on tomato or teal
- **paperDeep** `#F1E6CC` — Cards, caption plates, form panel
- **ink** `#22223B` — Text, hand-drawn lines, primary buttons
- **tomato** `#E4572E` — First accent: hero block, highlighter marks, commission button and band
- **teal** `#2A9D8F` — Second accent: underlines, chips, process band, offset frames
- **mustard** `#E9B44C` — Small highlights only: stars, dots, active size pill

## Typography
- **Display / headlines and wordmark** — Shantell Sans Variable (OFL), weights 400/700. Self-host the font files.
- **Body / UI** — Work Sans Variable (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-5; vertical rhythm in multiples of 8px.
- Radius: Artwork frames rounded-[18px]; chips and buttons rounded-full; the print mat is square-cornered with a 10px paper border.

## Motion
- Scroll reveals: sections fade up 20px over 450ms, once (Motion whileInView). Content is visible by default; reveals only enhance it.
- Hover on an artwork: the frame lifts 6px and its offset colour block slides 4px (200ms ease-out).
- Gallery filter change: leaving tiles fade out 150ms, entering tiles fade up 250ms with a 40ms stagger.
- Lightbox: backdrop fades 200ms, panel scales from 0.97; switching process stages cross-fades 250ms.
- Cart drawer slides in from the right 250ms; quantity changes and the subtotal update instantly.
- prefers-reduced-motion: no reveals, lift or slide; the lightbox and cart appear instantly.

## Imagery
Gouache-and-ink illustration with visible brush texture and loose black ink linework in tomato, teal, mustard, ochre and ink on warm cream paper; five finished pieces that look painted by one hand. One candid studio photograph taken from behind. Thumbnails, pencil lines and colour roughs are derived from the finished artwork in code (SVG filters); decorative paper shapes and icons are drawn in code. No stock photos, no clip art, no readable text inside images.

## Tone
Warm, plain and a little playful, like a note written on the back of a sketch: short sentences, concrete details about paint and paper, no art-speak.

---
— Prompt by VibeFather · https://vibefather.ai/t/illustrator-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
