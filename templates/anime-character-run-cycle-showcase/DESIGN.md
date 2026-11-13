---
name: "Anime Character Run Cycle Showcase"
colors:
  paper: "#F6F1E8"
  card: "#FFFCF8"
  ink: "#1C1917"
  muted: "#6B645C"
  persimmon: "#E25B2A"
  line: "#E4D8C8"
  cyclorama: "#F6F0E6"
  floor: "#E7D9C8"
  outline: "#1A1423"
  skin: "#E7B48A"
  hair: "#1B3A4B"
  uniform: "#E2A322"
  shoe: "#2A2926"
  sole: "#C9C3B6"
typography:
  display: { family: "Fraunces", weights: [500, 700] }
  text: { family: "Figtree", weights: [400, 600] }
  mono: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base. Header 56px on desktop and auto on mobile, at least 52px. Phase rail 336px with 20px padding. Dock 84px tall, 16px from the stage edges. Studio column max 1120px with 48px top padding and 24px side padding, 16px on mobile. Cards use 16px padding."
radius: "2px on buttons, cards, the dock and photo frames. Swatches are circles. No large pills and no soft glow."
---

# Anime Character Run Cycle Showcase — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F6F1E8` — Page background
- **Card** `#FFFCF8` — Header, dock, rail and studio cards
- **Ink** `#1C1917` — Text, focus rings and swatch selection
- **Muted** `#6B645C` — Secondary text and inactive tick labels
- **Persimmon** `#E25B2A` — Active control, current link, clinic chip, active phase rule
- **Line** `#E4D8C8` — Borders, scrubber track and photo frames
- **Cyclorama** `#F6F0E6` — Studio backdrop behind the runner
- **Floor** `#E7D9C8` — Lane floor
- **Outline** `#1A1423` — Toon edge on the runner
- **Skin** `#E7B48A` — Fixed skin color
- **Hair** `#1B3A4B` — Default hair swatch, Ink
- **Uniform** `#E2A322` — Default singlet, Marigold
- **Shoe** `#2A2926` — Racing-flat upper
- **Sole** `#C9C3B6` — Stone-colored sole

## Typography
- **Display** — Fraunces (OFL), weights 500/700. Self-host the font files.
- **Text** — Figtree (OFL), weights 400/600. Self-host the font files.
- **Mono** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Header 56px on desktop and auto on mobile, at least 52px. Phase rail 336px with 20px padding. Dock 84px tall, 16px from the stage edges. Studio column max 1120px with 48px top padding and 24px side padding, 16px on mobile. Cards use 16px padding.
- Radius: 2px on buttons, cards, the dock and photo frames. Swatches are circles. No large pills and no soft glow.

## Motion
- The cycle is 0.80 seconds at 1x. Slow motion multiplies the clock by 0.35. Phase is a loop from 0 to 1.
- Camera presets ease for 480ms with an in-out cubic. OrbitControls damping stays on. Reduced motion cuts instead.
- Hair and the waist tie lag their parents with exponential slerp. Reduced motion snaps them.
- Control color changes take 120ms. Reduced motion removes those transitions. No page-transition animation.

## Imagery
The hero is the code-built runner in a plaster cyclorama, large in the first screen, with empty space and light around the figure rather than type on a flat field. No photograph is used as a backdrop or as a texture. Staff photographs appear only on the studio page, as three waist-up working shots from one room: soft window light from the left, plaster walls, an oak table, muted ink, cream and indigo clothes. They are placeholders the next studio can replace.

## Tone
Calm, concrete, practical US English. Short teaching sentences. No slogans and no hype.

---
Inspired by Procedural cat-girl run cycle comparison by @NegevTV_ — https://github.com/negevtvx/grok-vs-opus-catgirl-run
— Prompt by VibeFather · https://vibefather.ai/t/anime-character-run-cycle-showcase · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
