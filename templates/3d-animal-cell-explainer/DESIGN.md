---
name: "3D Animal Cell Explainer"
colors:
  warm_paper: "#FAF4E8"
  deep_ink: "#1E1B3A"
  riso_coral: "#FF7B6B"
  riso_mint: "#6FD3B8"
  riso_butter: "#FFD66B"
  cream_card: "#FFFDF7"
typography:
  editorial_display_organelle_headings: { family: "Fraunces", weights: [600, 700] }
  plain_language_captions_ui: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] }
  micrometer_scale_bars_atlas_codes: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "Sticky 60px paper-and-ink header, 1280px max-width split workspace where the sticky 3D cutaway cell sits beside the scrollable organelle field guide on desktop and stacks cleanly at top on 390px mobile."
radius: "14px for risograph specimen cards with 2px crisp ink border and offset hard ink shadow; full-pill buttons for organelle chips and mode toggles."
---

# 3D Animal Cell Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm Paper** `#FAF4E8` — Primary risograph paper background and 3D stage canvas
- **Deep Ink** `#1E1B3A` — Primary typography, crisp 3D cell ink outlines, and card borders
- **Riso Coral** `#FF7B6B` — Nucleus, mitochondria accents, active pills, and protein pathway trail
- **Riso Mint** `#6FD3B8` — Plasma membrane cutaway shell, Golgi highlights, and correct quiz states
- **Riso Butter** `#FFD66B` — ATP energy sparks, lysosomes, scale bar callouts, and interactive tags
- **Cream Card** `#FFFDF7` — Clean elevated reading cards and organelle inspection deck

## Typography
- **Editorial Display & Organelle Headings** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **Plain-Language Captions & UI** — Plus Jakarta Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **Micrometer Scale Bars & Atlas Codes** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Sticky 60px paper-and-ink header, 1280px max-width split workspace where the sticky 3D cutaway cell sits beside the scrollable organelle field guide on desktop and stacks cleanly at top on 390px mobile.
- Radius: 14px for risograph specimen cards with 2px crisp ink border and offset hard ink shadow; full-pill buttons for organelle chips and mode toggles.

## Motion
- Smooth camera fly-in damping when clicking any of the 10 organelles in the index or scrolling past its field note card.
- Continuous organelle micro-animations: vesicles budding off the Golgi trans face, golden ATP energy sparks orbiting mitochondria cristae, ribosomes beading nascent peptide chains on rough ER, and channel proteins pulsing along the membrane.
- Follow-a-Protein guided mode smoothly animates a luminous coral-gold protein cargo bead along a 3D spline from nuclear chromatin → rough ER → transport vesicle → Golgi stack → secretory vesicle → plasma membrane exit.
- Under prefers-reduced-motion, freeze ambient organelle motion and snap camera focus cleanly without sweeping inertia.

## Imagery
100% procedural Three.js cutaway 3D animal cell with risograph-grain CanvasTexture fills and crisp deep-ink outlines—zero external 3D models or bitmaps.

## Tone
Warm, curious, classroom-clear, and scientifically honest—simplified for intuition and clearly labeled as such.

---
Inspired by Interactive 3D Animal Cell Risograph Model by @kevin_t_ngo — https://autoshowcaser.com/
— Prompt by VibeFather · https://vibefather.ai/t/3d-animal-cell-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
