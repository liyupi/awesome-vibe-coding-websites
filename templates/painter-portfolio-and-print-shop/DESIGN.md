---
name: "Painter Portfolio and Print Shop"
colors:
  paper: "#F3EFE6"
  canvas: "#FFFDF8"
  forest_ink: "#20372E"
  charcoal: "#292A27"
  sage: "#9AA48F"
  terracotta: "#A94F37"
  muted_text: "#676A61"
  hairline: "#D3CCBE"
typography:
  display_and_artist_statements: { family: "Fraunces", weights: [400, 500, 600] }
  body_navigation_buttons_and_forms: { family: "Manrope", weights: [400, 500, 600, 700] }
  artwork_metadata_dimensions_prices_and_counters: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 12-column desktop grid, max-width 1360px, 48px desktop gutters, 24px tablet gutters, and 20px mobile gutters. Section padding is 112px desktop and 72px mobile. Hero copy uses 24px internal spacing; artwork captions sit 14px below images. Use an 8px base spacing scale and keep reading columns at 62–68 characters."
radius: "Artwork, image mats, forms, and buttons are square with 0–2px radii; only availability badges, filter chips, and small cart-count indicators may be fully rounded. Avoid floating rounded-card compositions and heavy shadows."
---

# Painter Portfolio and Print Shop — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F3EFE6` — Primary page background with a subtle CSS noise texture at 2 percent opacity.
- **Canvas** `#FFFDF8` — Image mats, forms, drawers, and alternating editorial bands.
- **Forest Ink** `#20372E` — Primary text, dark buttons, footer background, and strong borders.
- **Charcoal** `#292A27` — Body copy and artwork information where forest green would be too colorful.
- **Sage** `#9AA48F` — Selected filters, quiet decorative fields, and secondary illustration accents; never body text on Paper.
- **Terracotta** `#A94F37` — Availability accents, focus rings, small underlines, and active states with accessible contrast.
- **Muted Text** `#676A61` — Secondary copy and metadata on Paper or Canvas.
- **Hairline** `#D3CCBE` — One-pixel dividers, input borders, image outlines, and grid rules.

## Typography
- **Display and artist statements** — Fraunces (OFL), weights 400/500/600. Self-host the font files.
- **Body, navigation, buttons, and forms** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.
- **Artwork metadata, dimensions, prices, and counters** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 12-column desktop grid, max-width 1360px, 48px desktop gutters, 24px tablet gutters, and 20px mobile gutters. Section padding is 112px desktop and 72px mobile. Hero copy uses 24px internal spacing; artwork captions sit 14px below images. Use an 8px base spacing scale and keep reading columns at 62–68 characters.
- Radius: Artwork, image mats, forms, and buttons are square with 0–2px radii; only availability badges, filter chips, and small cart-count indicators may be fully rounded. Avoid floating rounded-card compositions and heavy shadows.

## Motion
- On the home hero, reveal headline lines through vertical masks over 560ms with 80ms stagger; fade the studio image from opacity 0 and scale 1.025 to 1 over 850ms, then reveal the smaller artwork inset after a 180ms delay.
- Reveal section headings and artwork cards with a 24px upward translation and opacity transition over 600ms, staggered by 70ms only on first viewport entry. Never hide content indefinitely if IntersectionObserver is unavailable.
- Open the gallery lightbox with a 180ms backdrop fade and image scale from 0.985 to 1. Next/previous changes crossfade in 140ms without moving the controls.
- Slide the cart drawer in from the right over 260ms with a 180ms overlay fade. Animate quantity totals with a subtle 120ms opacity change, not bouncing badges.
- Crossfade print frame treatments over 160ms while the image dimensions remain fixed. Filtered gallery items use a 180ms fade and immediate, stable grid reflow.
- Under prefers-reduced-motion, remove masked entrances, scaling, smooth scrolling, and stagger; render content immediately and keep state changes readable with near-instant opacity transitions.

## Imagery
Use exactly six locally hosted generated assets: one wide editorial working-studio photograph and five original abstract acrylic and oil-pastel paintings. The painter is fictional and seen from behind with no visible face. Paintings share warm ivory, sage, terracotta, charcoal, and muted cobalt with layered palette-knife texture and soft north-window light. Show painting assets straight-on and uncropped on detail pages; use intentional object-fit cropping only for cards and the hero. Frame and mat previews are CSS treatments around the same artwork, not extra images. Never add signatures, watermarks, real artworks, real likenesses, stock photos, or named-artist imitation.

## Tone
Quiet, observant, tactile, and confident. Write like an artist explaining materials and process in plain US English; avoid grand claims, sales pressure, generic inspirational copy, and references to real people or institutions.

---
— Prompt by VibeFather · https://vibefather.ai/t/painter-portfolio-and-print-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
