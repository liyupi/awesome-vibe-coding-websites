---
name: "3D Colosseum History Explorer"
colors:
  parchment: "#EEEAE0"
  stone: "#C7B79B"
  deep_stone: "#8F8068"
  ink: "#303B38"
  accent: "[ACCENT]"
  rule: "#CFC9BA"
typography:
  exhibit_titles: { family: "Newsreader", weights: [400, 500] }
  body_and_interface: { family: "DM Sans", weights: [400, 500, 600] }
spacing: "8px unit; 24px outer desktop gutters, 20px mobile; 24px panel gaps. Stage gets most space. Header 72px; notes rail 300px. Body 15–17px with 1.5 line-height. Avoid tiny legend text."
radius: "2–4px controls; stage has clean square edges and fine border; notes are a rail, not pill cards."
---

# 3D Colosseum History Explorer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Parchment** `#EEEAE0` — Canvas and page ground
- **Stone** `#C7B79B` — Limestone model
- **Deep stone** `#8F8068` — Crevices and weathered masonry
- **Ink** `#303B38` — Readable text
- **Accent** `[ACCENT]` — Active features and section cut
- **Rule** `#CFC9BA` — Technical dividers

## Typography
- **Exhibit titles** — Newsreader (OFL), weights 400/500. Self-host the font files.
- **Body and interface** — DM Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px unit; 24px outer desktop gutters, 20px mobile; 24px panel gaps. Stage gets most space. Header 72px; notes rail 300px. Body 15–17px with 1.5 line-height. Avoid tiny legend text.
- Radius: 2–4px controls; stage has clean square edges and fine border; notes are a rail, not pill cards.

## Motion
- Orbit and pinch zoom follow direct input with gently damped controls. No automatic orbit on load.
- State changes interpolate structure and materials over 350–600ms; slider follows user continuously.
- Hotspot/tour camera movement is 900ms smooth and cancelable. Reduced motion uses immediate updates and user-advanced tour stops.

## Imagery
All imagery is original code: layered elliptical masonry, true open arcades, stepped seating, arena planks, below-floor corridor network, canopy panels/masts and procedural limestone grain. No photography or downloaded models. Clear warm daylight, subtle shadows and grounded geometry must supply a high-craft visual anchor on the first screen.

## Tone
Precise, curious, readable US English; distinguish observation from interpretation and label figures approximate.

---
Inspired by Code-built amphitheater in a reasoning-effort study by @Paras Tiwari — https://spectrumailab.com/blog/gpt-6-1-sol-reasoning-effort-test-2026
— Prompt by VibeFather · https://vibefather.ai/t/3d-colosseum-history-explorer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
