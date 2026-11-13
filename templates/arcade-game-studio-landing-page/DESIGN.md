---
name: "Arcade Game Studio Landing Page"
colors:
  night_navy: "#0b0d1f"
  screen_black: "#05060f"
  cabinet_panel: "#141836"
  bezel_edge: "#2a2f5c"
  hot_magenta: "#ff2e88"
  phosphor_green: "#39ff8a"
  score_amber: "#ffb627"
  phosphor_white: "#e6e8ff"
  dim_lavender: "#8a8fb8"
  far_skyline: "#1b1f4a"
typography:
  display_headings_buttons_nav_hud_labels_scores_always_uppercase_letter_spacing_0_04em: { family: "Press Start 2P", weights: [400] }
  body_paragraphs_card_descriptions_form_text_fine_print_sentence_case_base_size_22px_desktop_20px_mobile_line_height_1_25: { family: "VT323", weights: [400] }
spacing: "4px pixel unit, and every dimension is a multiple of 4. Container max-width 1240px with 32px side padding (20px under 720px). Section vertical padding 120px desktop / 72px mobile. Grid gaps 32px desktop / 20px mobile. Display sizes: H1 clamp(26px, 4vw, 52px) line-height 1.3; H2 clamp(18px, 2.4vw, 28px); labels and buttons 12px; HUD canvas text 8px."
radius: "0 everywhere. Corners are 'rounded' only by stepped pixel notches: a 4px ring made of four box-shadows (0 -4px 0 0, 0 4px 0 0, -4px 0 0 0, 4px 0 0 0 in the border color), which leaves the four corner pixels empty. The only true curvature is the CRT screen glass: border-radius 18px / 14px."
---

# Arcade Game Studio Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night navy** `#0b0d1f` — Page background (--bg)
- **Screen black** `#05060f` — Canvas sky, ticker band, hard drop shadows, text on magenta buttons (--screen)
- **Cabinet panel** `#141836` — Cabinet bezel, score board, cards and form panels (--panel)
- **Bezel edge** `#2a2f5c` — Pixel border rings, dividers, game ground (--edge)
- **Hot magenta** `#ff2e88` — The single primary accent: primary buttons, marquee title glow, hover shadows, error text (--magenta)
- **Phosphor green** `#39ff8a` — Secondary accent: OUT NOW status, success messages, ground highlight line, blinking cursors, new-score highlight (--green)
- **Score amber** `#ffb627` — Small highlights only: scores, stat numbers, IN DEVELOPMENT status, the lantern, the moon (--amber)
- **Phosphor white** `#e6e8ff` — Primary text and stars (--ink)
- **Dim lavender** `#8a8fb8` — Secondary text, placeholders, chimney obstacles (--muted)
- **Far skyline** `#1b1f4a` — Distant city silhouette in the game background and the studio illustration

## Typography
- **Display: headings, buttons, nav, HUD, labels, scores (always uppercase, letter-spacing 0.04em)** — Press Start 2P (OFL), weights 400. Self-host the font files.
- **Body: paragraphs, card descriptions, form text, fine print (sentence case, base size 22px desktop / 20px mobile, line-height 1.25)** — VT323 (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: 4px pixel unit, and every dimension is a multiple of 4. Container max-width 1240px with 32px side padding (20px under 720px). Section vertical padding 120px desktop / 72px mobile. Grid gaps 32px desktop / 20px mobile. Display sizes: H1 clamp(26px, 4vw, 52px) line-height 1.3; H2 clamp(18px, 2.4vw, 28px); labels and buttons 12px; HUD canvas text 8px.
- Radius: 0 everywhere. Corners are 'rounded' only by stepped pixel notches: a 4px ring made of four box-shadows (0 -4px 0 0, 0 4px 0 0, -4px 0 0 0, 4px 0 0 0 in the border color), which leaves the four corner pixels empty. The only true curvature is the CRT screen glass: border-radius 18px / 14px.

## Motion
- Buttons (.px-btn): stepped 4px ring plus a hard 6px drop shadow (0 10px 0 0 #05060f, beneath the ring). Hover: translateY(-2px). Active: translateY(6px) and the drop shadow is removed, so the button visibly presses down. Transition 80ms steps(2).
- CRT flicker on the cabinet screen: an ::after overlay that animates opacity between 0.96 and 1 in steps(3) over 0.18s, infinite. A rolling bright band (an 80px-tall linear-gradient of rgba(230,232,255,0.05)) travels top to bottom every 7s, linear, infinite.
- Page-wide scanlines: a fixed, pointer-events:none overlay (repeating-linear-gradient 0–2px transparent, 2–3px rgba(0,0,0,0.18)) at opacity 0.5 above everything except the initials dialog.
- Blinking text (PRESS START, cursors, CONTINUE? countdown): opacity toggles 1/0 with steps(1) over 1s.
- Section headings type on when they first enter the viewport (IntersectionObserver, threshold 0.4). Characters appear one at a time over 400ms total behind a green block cursor that blinks 3 times and then disappears.
- Cartridge cards reveal in 4 steps (steps(4)) from translateY(24px) opacity 0 to rest over 320ms, staggered 80ms per card.
- Ticker marquee: a track holding two copies of the content animates translateX(0 → -50%) over 40s linear infinite and pauses on hover.
- Newsletter success: 24 code-generated 8×8 squares (magenta, green, amber, white) burst from the button with random angles, travel 60–140px with gravity and fade out over 900ms.
- Studio stat numbers count up from 0 in 10 discrete steps over 600ms when first visible.
- prefers-reduced-motion: reduce turns off flicker, rolling band, blinking, type-on (text shows instantly), card reveals, marquee (items wrap statically and centered), confetti, count-ups, canvas screen shake and the game-over flash. Static scanlines and vignette stay. The game is still playable but never auto-starts and the starfield does not twinkle.

## Imagery
Everything is original pixel art drawn in code: canvas sprites from string grids in sprites.ts, and SVG <rect> grids (shape-rendering crispEdges) for the cartridge label art, the studio scene, the pixel coin logo, the ticker star and the arrow and hand hint icons. Use only the palette above. Characters are original and abstract, with no resemblance to any existing game character, sprite or tileset. No photos, no bitmaps.

## Tone
Playful, warm and confident. Arcade-cabinet language (INSERT COIN, PLAYER 1, CONTINUE?) in short uppercase display lines, with friendly, plain sentences in the body. Never cynical, never corporate.

---
— Prompt by VibeFather · https://vibefather.ai/t/arcade-game-studio-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
