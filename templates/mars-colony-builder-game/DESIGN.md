---
name: "Mars Colony Builder Game"
colors:
  basalt: "#14110F"
  glass: "#1C1814"
  copper: "#E39B54"
  copper_deep: "#A86B38"
  regolith: "#C4784E"
  regolith_mid: "#B56545"
  regolith_dark: "#A85A3C"
  rim: "#5C3428"
  rim_face: "#3F241C"
  dust: "#C4A574"
  parchment: "#F3E6D4"
  clay: "#B7A394"
  sage: "#8FB573"
  ice: "#B7D0D6"
  morale_clay: "#D9896A"
  warning: "#E07A5F"
  panel_ink: "#1C120C"
  array_cell: "#3E4C55"
typography:
  colony_name_win_and_fail_headlines_sol_numeral: { family: "Fraunces", weights: [600, 700] }
  hud_labels_help_buttons_and_body: { family: "Outfit", weights: [400, 500, 600] }
  stock_numbers_forecast_and_bed_counts: { family: "IBM Plex Mono", weights: [500] }
spacing: "A 4px unit. The page is 100dvh and does not scroll. Desktop at 1100px and wider uses two 320px glass columns over a full-bleed canvas, with 20px column padding and 24px top and bottom crater insets. Below 1100px, including 390px, the canvas is the top region and a bottom sheet holds the HUD, with 12px sheet padding, 48px button heights, and safe-area insets. The center habitat stays in the open canvas between the columns."
radius: "12px glass panels, 14px dialogs, 10px buttons, 999px forecast chips and stock tracks. The canvas is square-cornered and full bleed. World shapes are diamonds, domes, and masts, not rounded app icons."
---

# Mars Colony Builder Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Basalt** `#14110F` — Page background, canvas void, and dialog scrim base
- **Glass** `#1C1814` — HUD panels at 90 percent opacity with a 14px backdrop blur
- **Copper** `#E39B54` — The single accent: habitat dome, primary button, selection, focus ring, panel border at 35 percent
- **Copper deep** `#A86B38` — Habitat skirt, pressed button, and dome shadow
- **Regolith** `#C4784E` — Lightest basin floor tile
- **Regolith mid** `#B56545` — Middle basin floor tile
- **Regolith dark** `#A85A3C` — Darkest basin floor tile
- **Rim** `#5C3428` — Crater wall top
- **Rim face** `#3F241C` — Crater wall south face, doors, and greenhouse base
- **Dust** `#C4A574` — Haze particles, storm veil, and boulder highlight
- **Parchment** `#F3E6D4` — Primary text and habitat window
- **Clay** `#B7A394` — Secondary text, solar mast, and inactive tool labels
- **Sage** `#8FB573` — Oxygen bar and greenhouse panes
- **Ice** `#B7D0D6` — Water bar and drill bore
- **Morale clay** `#D9896A` — Morale bar
- **Warning** `#E07A5F` — Stocks under 25, invalid cells, and Advance anyway
- **Panel ink** `#1C120C` — Text on copper buttons
- **Array cell** `#3E4C55` — Solar panel fill

## Typography
- **Colony name, win and fail headlines, sol numeral** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **HUD labels, help, buttons, and body** — Outfit (OFL), weights 400/500/600. Self-host the font files.
- **Stock numbers, forecast, and bed counts** — IBM Plex Mono (OFL), weights 500. Self-host the font files.

## Spacing & shape
- Spacing: A 4px unit. The page is 100dvh and does not scroll. Desktop at 1100px and wider uses two 320px glass columns over a full-bleed canvas, with 20px column padding and 24px top and bottom crater insets. Below 1100px, including 390px, the canvas is the top region and a bottom sheet holds the HUD, with 12px sheet padding, 48px button heights, and safe-area insets. The center habitat stays in the open canvas between the columns.
- Radius: 12px glass panels, 14px dialogs, 10px buttons, 999px forecast chips and stock tracks. The canvas is square-cornered and full bleed. World shapes are diamonds, domes, and masts, not rounded app icons.

## Motion
- Dust is the only continuous motion: 32 seeded particles drift right at 0.6 CSS pixels per frame and wrap the crater bounds. A storm raises the count to 64 and adds a flat Dust veil at 0.18 alpha.
- When motion is allowed, stock fills ease width over 160ms. Overlays fade opacity over 140ms with no travel greater than 8px. Buttons do not bounce.
- With prefers-reduced-motion, draw no particles, snap stock fills, use instant overlays, and keep a storm as the flat Dust veil only. Placement, removal, and sol resolution stay immediate.
- Stop the animation frame while the tab is hidden. Do not shake the canvas, flash the veil, or autoplay sound.

## Imagery
Draw the crater, rim, boulders, four structure types, selection, dust, storm veil, favicon, and build-bar glyphs in canvas and inline SVG. No photographs, generated images, downloaded textures, or sprites. The first screen's anchor is the centered habitat dome on the rust basin, with the glass HUD already readable around it.

## Tone
Calm, practical, and a little dry, like a field log from a small survey. Short US English, concrete yields, no exclamation marks, no epic colonization slogans, and no jokes about abandoning anyone on a planet.

---
— Prompt by VibeFather · https://vibefather.ai/t/mars-colony-builder-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
