---
name: "Copywriter Portfolio Website"
colors:
  cream: "#FFF8EC"
  edge: "#EFE6D0"
  ink: "#161616"
  muted: "#5C5A52"
  marker: "#B8F35C"
typography:
  display_headlines_and_pull_quotes: { family: "Fraunces Variable", weights: [600, 900] }
  body_ui: { family: "Hanken Grotesk Variable", weights: [400, 500, 600] }
  mono_briefs_labels_numbers: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1160px] px-6; cards p-6 to p-8; 8px rhythm."
radius: "Cards 6px; buttons pill (rounded-full); chips pill; copy-deck card 10px."
---

# Copywriter Portfolio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **cream** `#FFF8EC` — Page ground
- **edge** `#EFE6D0` — Before panels, dividers, card edges
- **ink** `#161616` — Text, buttons, dark band
- **muted** `#5C5A52` — Secondary text on cream and edge
- **marker** `#B8F35C` — The single accent: highlighter strokes behind key words, results chips, links on ink; always behind ink text

## Typography
- **Display / headlines and pull quotes** — Fraunces Variable (OFL), weights 600/900. Self-host the font files.
- **Body / UI** — Hanken Grotesk Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono / briefs, labels, numbers** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1160px] px-6; cards p-6 to p-8; 8px rhythm.
- Radius: Cards 6px; buttons pill (rounded-full); chips pill; copy-deck card 10px.

## Motion
- Scroll reveals: sections fade up 20px over 450ms, once (Motion whileInView); content is visible by default.
- Hero: the marker strokes grow from left to right 600ms after the headline appears; the copy-deck card's 'after' line types in 60ms per character once, then the results chip pops in.
- Sample filter: leaving cards fade 150ms, entering cards fade up 250ms with a 40ms stagger.
- Tone playground: switching voice cross-fades the sentence 200ms and slides the active personality pill's underline.
- prefers-reduced-motion: no reveals, typing or stroke animation; everything is shown in its final state at once.

## Imagery
No photographs and no illustrations. The page is carried by type, a code-drawn copy-deck card, oversized quotation marks and highlighter strokes. Flat cream, ink and highlighter green only; no gradients, shadows or textures beyond a 1px edge line.

## Tone
Plain, exact and a little wry. Short sentences. No marketing adjectives about marketing.

---
— Prompt by VibeFather · https://vibefather.ai/t/copywriter-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
