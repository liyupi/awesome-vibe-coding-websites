---
name: "Senior Living Community Website"
colors:
  ivory: "#F7F3EA"
  paper: "#FFFDF8"
  evergreen: "#183C34"
  soft_pine: "#52665D"
  sage: "#DEE7D9"
  clay: "#984B34"
  honey: "#E6B65C"
  linen_line: "#CBD1C5"
typography:
  display_section_headings_and_large_quotations: { family: "Fraunces Variable", weights: [500, 600, 700] }
  body_navigation_controls_tables_and_numbers: { family: "Atkinson Hyperlegible", weights: [400, 700] }
spacing: "Use a centered 1200px maximum container with 32px desktop gutters and 20px mobile gutters. Build on an 8px base grid. Desktop sections have 96px vertical padding and mobile sections 64px. The hero has 48px top and 64px bottom padding. Cards use 24–32px padding, form rows 20px gaps, and body copy a maximum measure of 68 characters."
radius: "Use 28px corners for hero and gallery photography, 20px for major panels and dialogs, 14px for cards and inputs, and full pills only for text-size, filter, and time-slot controls. Use 1px Linen Line borders and very restrained shadows rather than floating every section."
---

# Senior Living Community Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ivory** `#F7F3EA` — Main page canvas and warm negative space.
- **Paper** `#FFFDF8` — Header, cards, form controls, menus, and lightbox surfaces.
- **Evergreen** `#183C34` — Primary text, dark buttons, footer, active controls, and strong icon strokes.
- **Soft Pine** `#52665D` — Secondary copy at 16px or larger; never use for faint microtype.
- **Sage** `#DEE7D9` — Selected tabs, care highlights, schedule rows, and soft information panels.
- **Clay** `#984B34` — Small editorial accents, underlines, and secondary emphasis; pair with Ivory or Paper text only where contrast passes.
- **Honey** `#E6B65C` — Active marker and small decorative highlight behind Evergreen text, never body text on Ivory.
- **Linen Line** `#CBD1C5` — One-pixel borders, input outlines, comparison rules, and separators.

## Typography
- **Display, section headings, and large quotations** — Fraunces Variable (OFL), weights 500/600/700. Self-host the font files.
- **Body, navigation, controls, tables, and numbers** — Atkinson Hyperlegible (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a centered 1200px maximum container with 32px desktop gutters and 20px mobile gutters. Build on an 8px base grid. Desktop sections have 96px vertical padding and mobile sections 64px. The hero has 48px top and 64px bottom padding. Cards use 24–32px padding, form rows 20px gaps, and body copy a maximum measure of 68 characters.
- Radius: Use 28px corners for hero and gallery photography, 20px for major panels and dialogs, 14px for cards and inputs, and full pills only for text-size, filter, and time-slot controls. Use 1px Linen Line borders and very restrained shadows rather than floating every section.

## Motion
- Reveal major sections once with Motion whileInView: opacity 0 to 1 and y 14 to 0 over 420ms, stagger direct children by 60ms, viewport amount 0.16.
- Use 180–220ms transitions for tabs, gallery filtering, mobile navigation, accordion height, buttons, and focus states; never delay reading while animation completes.
- Open the gallery lightbox with a 180ms opacity and 8px scale transition; support Escape, left/right arrows, focus trapping, and restoring focus to the originating thumbnail.
- Crossfade the selected care detail, dining menu, and floor-plan drawing over 180ms while keeping panel dimensions stable enough to avoid layout jumps.
- When prefers-reduced-motion is enabled, remove transforms and smooth scrolling, show final states immediately, and keep every interaction functional.

## Imagery
Use six coordinated photorealistic editorial images generated specifically for this template. The shared look is soft late-morning light, muted sage, cream, honey oak, and terracotta, realistic residential materials, subtle 35mm film grain, and calm documentary composition. Show an operating community through spaces, activities, and meals rather than institutional corridors or posed clinical scenes. People are fictional, varied in age and ethnicity, and photographed only from behind or at a distance with no recognizable face. The hero is a spacious courtyard scene, never a face close-up. Download every image locally and list each in ASSETS.md with the supplied generated-asset credit. Do not add other photographs, logos, readable signs, watermarks, or branded objects.

## Tone
Warm, calm, respectful, and concrete. Speak to residents as independent adults, never as patients or children. Use plain US English, specific routines and inclusions, no fear-based selling, no clinical promises, and no exaggerated claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/senior-living-community-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
