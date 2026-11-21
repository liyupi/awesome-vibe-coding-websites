---
name: "Fluid Simulation Agency Website"
colors:
  obsidian_void: "#050505"
  carbon_surface: "#101015"
  acid_green: "#B6FF3B"
  hot_pink: "#FF3EA5"
  electric_ultramarine: "#3B5BFF"
  chalk_white: "#F5F5F7"
typography:
  display_wordmark_section_headlines: { family: "Syne", weights: [700, 800] }
  body_copy_navigation: { family: "Space Grotesk", weights: [400, 500, 600] }
  shader_telemetry_indices: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "Full-viewport interactive hero (min-h-screen) with 64px transparent-to-obsidian sticky top bar, 1280px max-width editorial container, and generous 96px section breathing room."
radius: "14px for case study cards and inquiry panels; full-pill capsules for Fluid Settings chip and discipline tags."
---

# Fluid Simulation Agency Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Obsidian Void** `#050505` — Primary full-bleed canvas and page background
- **Carbon Surface** `#101015` — Selected work cards, process steps, settings popover, and contact form
- **Acid Green** `#B6FF3B` — Primary electric fluid dye, active badges, and primary CTA highlight
- **Hot Pink** `#FF3EA5` — Secondary electric fluid dye, hover states, and award highlights
- **Electric Ultramarine** `#3B5BFF` — Tertiary fluid swirl dye, secondary indicators, and depth gradients
- **Chalk White** `#F5F5F7` — Primary display typography and high-contrast body text

## Typography
- **Display Wordmark & Section Headlines** — Syne (OFL), weights 700/800. Self-host the font files.
- **Body Copy & Navigation** — Space Grotesk (OFL), weights 400/500/600. Self-host the font files.
- **Shader Telemetry & Indices** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Full-viewport interactive hero (min-h-screen) with 64px transparent-to-obsidian sticky top bar, 1280px max-width editorial container, and generous 96px section breathing room.
- Radius: 14px for case study cards and inquiry panels; full-pill capsules for Fluid Settings chip and discipline tags.

## Motion
- Real-time WebGL fluid velocity and dye advection stirred continuously by mouse/touch movement, plus multi-dye burst splashes on click or tap.
- Giant studio wordmark rendered as a crisp SVG cutout mask overlay over the glowing WebGL fluid layer so live electric ink ripples directly inside the letterforms.
- Scroll-linked dye palette shifting: Hero (Acid + Pink + Ultramarine), Selected Work (Pink + Ultramarine), Services (Acid + Cyan), Process (Ultramarine + Violet), Awards/Contact (Acid + Warm Gold).
- Automatic off-screen pause when the hero canvas scrolls out of view (with a subtle fixed ambient fluid ribbon toggleable or running only while visible), plus reduced-motion and low-power CSS gradient fallback.

## Imagery
Real-time custom WebGL fluid simulation canvas in the hero paired with four original code-drawn animated generative previews for Selected Work case studies (parametric wave mesh, kinetic typography matrix, refractive audio prism, spatial transit topology).

## Tone
Confident, kinetic, tactile, and art-directed—crisp engineering precision paired with bold typographic poise.

---
Inspired by WebGL Fluid Simulation Studio Hero by @PavelDoGreat — https://paveldogreat.github.io/WebGL-Fluid-Simulation/
— Prompt by VibeFather · https://vibefather.ai/t/fluid-simulation-agency-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
