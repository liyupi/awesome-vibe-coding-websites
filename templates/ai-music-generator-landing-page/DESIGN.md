---
name: "AI Music Generator Landing Page"
colors:
  magenta: "#FF2EC4"
  cyan: "#00F0FF"
  lime: "#C5FF47"
  near_black: "#070811"
  panel: "#17192C"
  white: "#F8FAFF"
typography:
  display: { family: "Space Grotesk", weights: [700] }
  body: { family: "Inter", weights: [400, 700] }
spacing: "1200px max, 48px desktop/20px mobile gutters; 8px unit, 96px/60px section spacing. Hero display 88px/52px; product panel 620px wide; normal text 16–18px."
radius: "28px player stage, 16px cards, 12px inputs, pill chips; thin cyan separators with opaque dark surfaces under text."
---

# AI Music Generator Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Magenta** `#FF2EC4` — Large first-screen holographic left disc. WCAG relative-luminance calculations: #070811 text on #FF2EC4: 6.12:1; #070811 text on #00F0FF: 14.17:1; #070811 text on #C5FF47: 16.89:1; #F8FAFF text on #070811: 19.12:1; #F8FAFF text on #17192C: 16.59:1. Use these pairs for every normal-size label/body/button. Decorative overlaps/gradients carry no text; readable text gets a solid backing.
- **Cyan** `#00F0FF` — Large first-screen holographic right ribbon.
- **Lime** `#C5FF47` — Third gradient stop, buttons and sound accents.
- **Near black** `#070811` — Main stage, readable dark labels on bright chips.
- **Panel** `#17192C` — Opaque application reading surface.
- **White** `#F8FAFF` — Body and headings on dark surfaces.

## Typography
- **Display** — Space Grotesk (OFL), weights 700. Self-host the font files.
- **Body** — Inter (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 1200px max, 48px desktop/20px mobile gutters; 8px unit, 96px/60px section spacing. Hero display 88px/52px; product panel 620px wide; normal text 16–18px.
- Radius: 28px player stage, 16px cards, 12px inputs, pill chips; thin cyan separators with opaque dark surfaces under text.

## Motion
- Holographic art moves max 12px across 8s with an explicit Pause visuals toggle; no changing full-screen brightness.
- Waveform and 48 spectrum bars display real analyzer values capped at 30fps, with a slow .12 interpolation. No sound means flat line/zero bars. Reduced motion changes to a still waveform plus a numeric playback time and a single stable level meter refreshed at 2Hz.

## Imagery
No raster photos. Draw large original magenta→cyan→lime ribbons/discs in SVG/CSS over near-black; holographic gradients occupy at least 40% first screen behind/around an opaque music application preview. Each track has original code-drawn waveform/geometry artwork using the same palette. Album artwork has no real artist, logo or copied cover. UI itself is a high-craft hero anchor with actual prompt chips, timeline and controls.

## Tone
Musically literate and precise; label every demo boundary close to its control.

---
— Prompt by VibeFather · https://vibefather.ai/t/ai-music-generator-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
