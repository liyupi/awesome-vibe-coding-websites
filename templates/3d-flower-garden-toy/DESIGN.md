---
name: "3D Flower Garden Toy"
colors:
  sky: "#DDEDE6"
  cream: "#FFFDF4"
  ink: "#1F342B"
  moss: "#526C59"
  meadow: "#84A96B"
  soil: "#8A6A4F"
  sun: "#F2C14E"
  coral: "#E78072"
  lavender: "#9B8AC4"
  petal_blue: "#82B6C9"
typography:
  display_wordmark_welcome_headline_and_dialog_title_use_fraunces_variable_with_soft_optical_character_not_italics: { family: "Fraunces", weights: [600, 700] }
  interface_and_instructions_buttons_wind_values_flower_names_help_and_toasts_use_dm_sans_variable_with_tabular_numerals_for_the_bloom_count: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base unit. Desktop top bar is 72px high with 32px horizontal padding; intro sits 28px below it at left 32px and is at most 350px wide. Bottom dock is centered 24px above the viewport edge, maximum width 880px, 16px padding and 12px gaps. At 390px, top bar is 60px with 16px padding, intro is left/right 16px and at most 300px wide, and the dock is 12px above the safe-area-aware bottom edge with two compact rows. Headline uses clamp(36px, 4.4vw, 62px) at 0.98 line height; wordmark 22px; intro body 15px/1.55; controls 13–14px; mobile headline 36px. Every interactive target is at least 44 by 44px."
radius: "18px on the dock and dialogs, 12px on flower buttons and the reset popover, 10px on small icon buttons, and 999px on the bloom counter and toast. Use 1px Ink at 12% opacity borders and broad soft shadows; avoid glassmorphism-heavy blur stacks."
---

# 3D Flower Garden Toy — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sky** `#DDEDE6` — Page and renderer clear color; pale eucalyptus daylight.
- **Cream** `#FFFDF4` — Control panels, dialogs, primary text fields and daisy petals.
- **Ink** `#1F342B` — Headings, body text, icons and dark UI details.
- **Moss** `#526C59` — Secondary copy, inactive icons, stems and muted labels.
- **Meadow** `#84A96B` — Main grass top with subtle procedural value variation.
- **Soil** `#8A6A4F` — Cut-earth side of the floating garden island.
- **Sun** `#F2C14E` — Selected flower background, focus rings and flower centers; always pair with Ink text.
- **Coral** `#E78072` — Default cup-flower petals and its selector swatch.
- **Lavender** `#9B8AC4` — Default bell-flower petals and its selector swatch.
- **Petal Blue** `#82B6C9` — Default star-flower petals and its selector swatch.

## Typography
- **Display: wordmark, welcome headline and dialog title; use Fraunces Variable with soft optical character, not italics** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **Interface and instructions: buttons, wind values, flower names, help and toasts; use DM Sans Variable with tabular numerals for the bloom count** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit. Desktop top bar is 72px high with 32px horizontal padding; intro sits 28px below it at left 32px and is at most 350px wide. Bottom dock is centered 24px above the viewport edge, maximum width 880px, 16px padding and 12px gaps. At 390px, top bar is 60px with 16px padding, intro is left/right 16px and at most 300px wide, and the dock is 12px above the safe-area-aware bottom edge with two compact rows. Headline uses clamp(36px, 4.4vw, 62px) at 0.98 line height; wordmark 22px; intro body 15px/1.55; controls 13–14px; mobile headline 36px. Every interactive target is at least 44 by 44px.
- Radius: 18px on the dock and dialogs, 12px on flower buttons and the reset popover, 10px on small icon buttons, and 999px on the bloom counter and toast. Use 1px Ink at 12% opacity borders and broad soft shadows; avoid glassmorphism-heavy blur stacks.

## Motion
- Initial meadow is already present on first render; do not hide it behind a loading screen or long intro. UI panels fade in over 180ms without translating the 3D scene.
- Plant growth follows the two-stage 480ms stem and 360ms petal sequence with 55ms per-flower stagger defined in Setup.
- Wind is continuous but subtle: at 35% the tips lean and recover by roughly 0.08–0.16 world units using two sine frequencies and per-instance phase, never a synchronized side-to-side rocking of the whole island.
- Selected flower buttons fill Sun and their tiny SVG bloom turns 6 degrees over 140ms; hover raises buttons at most 1px.
- The planting cursor is a thin Cream-and-Ink ring projected onto the ground; valid placement shows a small six-dot clump preview, invalid placement dims the ring without planting.
- Dialogs fade with a 120ms scrim and 160ms scale from 0.98 to 1; toasts fade and rise 4px for 160ms, remain for 2.4 seconds, then fade.
- Camera damping is limited to OrbitControls; there is no autoplay rotation, scroll-jacking, parallax page, confetti or celebratory particle burst.
- Reduced motion freezes idle sway and makes growth immediate as defined in Setup; functionality and visible state feedback remain intact.

## Imagery
No photographs, raster textures, downloaded models or generated-image files. The high-craft first-screen anchor is the interactive Three.js botanical diorama itself: asymmetric cut-earth island, four original procedural flower families, instanced grass, soft shadows and a warm sky. Use original inline SVG for the four selector glyphs and favicon, and locally bundled Lucide for utility icons. No people, characters, landmarks or branded objects.

## Tone
Quietly joyful and observant, like a one-page field notebook. Use short, plain instructions and gentle feedback; no scores, streaks, currency, competitive mechanics, or exaggerated claims.

---
Inspired by 3D Flower Garden Toy — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/3d-flower-garden-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
