---
name: "Daily Tarot Reading Page"
colors:
  midnight_ink: "#0C0B12"
  raised_aubergine: "#17131E"
  soft_plum: "#241A29"
  parchment: "#F2E8D5"
  muted_lavender: "#B9ACBE"
  antique_gold: "#D5B77D"
  deep_gold_ink: "#21180D"
  hairline_plum: "#433348"
typography:
  display_card_names_and_reading_quotations: { family: "Cormorant Garamond", weights: [500, 600] }
  body_controls_labels_and_interpretation_text: { family: "Manrope", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid. The content shell is max-width 1240px with 32px desktop and 20px mobile side padding. Header height is 76px. Desktop sections have 104px vertical padding; mobile sections have 64px. Hero copy and reading table are separated by 64px on desktop and 36px on mobile. Keep reading prose at 62–68 characters per line."
radius: "Use 28px for large reading and share panels, 18px for physical cards and small content panels, and 999px for segmented controls and buttons. Physical cards have a strict 3:4 aspect ratio, a 1px antique-gold border at 45% opacity, and a soft 0 24px 70px rgba(0,0,0,.38) shadow."
---

# Daily Tarot Reading Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight ink** `#0C0B12` — Page background and share-canvas ground
- **Raised aubergine** `#17131E` — Reading table, dialogs, and elevated panels
- **Soft plum** `#241A29` — Card backs, hover surfaces, and subtle gradient fields
- **Parchment** `#F2E8D5` — Primary text and light card details
- **Muted lavender** `#B9ACBE` — Secondary copy and inactive controls
- **Antique gold** `#D5B77D` — Fine rules, active states, focus rings, and primary-button background
- **Deep gold ink** `#21180D` — Text on antique-gold buttons
- **Hairline plum** `#433348` — Borders and dividers at low visual weight

## Typography
- **Display, card names, and reading quotations** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Body, controls, labels, and interpretation text** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid. The content shell is max-width 1240px with 32px desktop and 20px mobile side padding. Header height is 76px. Desktop sections have 104px vertical padding; mobile sections have 64px. Hero copy and reading table are separated by 64px on desktop and 36px on mobile. Keep reading prose at 62–68 characters per line.
- Radius: Use 28px for large reading and share panels, 18px for physical cards and small content panels, and 999px for segmented controls and buttons. Physical cards have a strict 3:4 aspect ratio, a 1px antique-gold border at 45% opacity, and a soft 0 24px 70px rgba(0,0,0,.38) shadow.

## Motion
- On Shuffle, collapse the six-card fan into a stacked deck over 240ms, split alternating cards left and right in three 180ms passes, then return to a fan over 300ms. Disable controls during the 1.1s sequence and use transform and opacity only.
- On Reveal, move the selected card or cards from the deck into their reading positions over 320ms, then rotate each inner card from rotateY(0deg) showing its back to rotateY(180deg) showing its face over 680ms. Stagger three-card flips by 140ms. Use perspective: 1200px, transform-style: preserve-3d, and backface-visibility: hidden.
- Use restrained 180ms hover lifts of at most 6px, border-color changes, and icon rotations. Never make the whole page drift or add a custom cursor.
- Scroll reveals are optional only for the guide and deck sections: 16px upward movement with a 450ms ease-out transition, once per section, without delaying access to content.
- With prefers-reduced-motion: reduce, remove fan movement, stagger, parallax, smooth scrolling, and 3D rotation. Show the next state immediately with a 100ms opacity change at most; all reading functions remain available.

## Imagery
Use exactly six original generated gouache-and-gold-ink symbolic illustrations, one for each card in [DECK_NAME]. Every image is full-bleed inside a code-built 3:4 card frame with no generated typography or border. The shared visual language is textured midnight indigo, charcoal, dusty plum, parchment, and muted antique gold, with soft candlelit illumination and fine woodblock-like grain. Do not imitate any existing tarot deck. The card back is separately drawn in CSS/SVG from original concentric lines, a central eight-point star, and six small orbital dots; it uses no generated image. The interactive fanned deck is the hero's visual anchor, not typography alone.

## Tone
Quiet, poetic, grounded, and non-directive. Use precise reflection prompts rather than prophecy. Never claim to predict the future or advise on health, money, relationships, or safety. A visible 'For entertainment and reflection only' note is part of the experience, not hidden fine print.

---
— Prompt by VibeFather · https://vibefather.ai/t/daily-tarot-reading-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
