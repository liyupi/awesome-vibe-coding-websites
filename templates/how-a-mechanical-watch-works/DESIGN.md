---
name: "How a Mechanical Watch Works"
colors:
  archival_paper: "#F7F3EA"
  gunmetal_plate: "#2E3440"
  horology_brass: "#C99A3B"
  synthetic_ruby: "#B3123A"
  blued_steel: "#4C78A8"
typography:
  essay_title_chapter_headings_drop_prose: { family: "Newsreader", weights: [400, 500, 600, 700] }
  interactive_controls_diagrams: { family: "Inter", weights: [400, 500, 600] }
  tooth_counts_gear_ratios_beat_telemetry: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Editorial header + chapter jump strip, followed by an asymmetric 12-col sticky workbench (5-col long-read chapters left, 7-col sticky interactive 3D horology figure + controls right) that stacks cleanly with an always-reachable figure bar on 390×844 mobile."
radius: "14px archival blueprint cards with 1px gunmetal hairlines; tactile pill controls for Explode, Cutaway, Slow-Mo, and Wind."
---

# How a Mechanical Watch Works — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Archival Paper** `#F7F3EA` — Warm editorial monograph backdrop
- **Gunmetal Plate** `#2E3440` — Mainplates, primary ink, and precision frames
- **Horology Brass** `#C99A3B` — Machined gear wheels, balance rim, and barrel
- **Synthetic Ruby** `#B3123A` — Low-friction pivot jewels and pallet impulse stones
- **Blued Steel** `#4C78A8` — Heat-blued screws, hairspring, mainspring, and hands

## Typography
- **Essay Title, Chapter Headings & Drop Prose** — Newsreader (OFL), weights 400/500/600/700. Self-host the font files.
- **Interactive Controls & Diagrams** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Tooth Counts, Gear Ratios & Beat Telemetry** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Editorial header + chapter jump strip, followed by an asymmetric 12-col sticky workbench (5-col long-read chapters left, 7-col sticky interactive 3D horology figure + controls right) that stacks cleanly with an always-reachable figure bar on 390×844 mobile.
- Radius: 14px archival blueprint cards with 1px gunmetal hairlines; tactile pill controls for Explode, Cutaway, Slow-Mo, and Wind.

## Motion
- Continuous mechanical ticking, gear-train tooth meshing, escapement lock/unlock stepping, and concentric hairspring breathing.
- Smooth vertical layer separation when dragging the Exploded View slider, and clean half-plane clipping in Cutaway Section mode.
- Winding the crown tightens the mainspring coils and recharges the live Power Reserve meter.
- Respect prefers-reduced-motion by pausing automatic ticking while keeping Time Scrub, Orbit, Explode, and Wind fully interactive.

## Imagery
100% procedural Three.js horology 3D geometry—extruded toothed brass wheels, spiral springs, ruby jewels, blued screws, and automatic rotor.

## Tone
Warm archival monograph—lucid, tactile engineering storytelling with crisp museum-grade precision.

---
— Prompt by VibeFather · https://vibefather.ai/t/how-a-mechanical-watch-works · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
