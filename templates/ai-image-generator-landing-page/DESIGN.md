---
name: "AI Image Generator Landing Page"
colors:
  void: "#0B0B10"
  panel: "#12121A"
  raised: "#1A1A25"
  lifted: "#15141F"
  line: "#FFFFFF14"
  line_strong: "#FFFFFF26"
  text: "#F2F0EC"
  muted: "#A3A1AD"
  faint: "#6B6977"
  violet: "#8E6CFF"
  orchid: "#C86BD8"
  coral: "#FF7A59"
  mint: "#5BD6A0"
  accent_gradient: "linear-gradient(100deg, #8E6CFF 0%, #C86BD8 50%, #FF7A59 100%)"
typography:
  display_h1_clamp_40px_5_4vw_76px_line_height_1_02_letter_spacing_0_035em_weight_650_h2_clamp_34px_4vw_54px_line_height_1_06_letter_spacing_0_03em_weight_600_card_titles_22px_weight_600_big_numbers: { family: "Bricolage Grotesque Variable", weights: [500, 600, 650, 700] }
  text_body_16px_1_6_subheads_17_18px_nav_14px_buttons_14_15px_weight_600: { family: "DM Sans Variable", weights: [400, 500, 600] }
  mono_prompt_text_seeds_section_labels_12px_letter_spacing_0_14em_uppercase_credit_numbers_chips: { family: "JetBrains Mono Variable", weights: [400, 500, 600] }
spacing: "8px base. Container max-width 1200px with 24px side padding (20px below 640px). Sections 112px vertical padding on desktop, 80px on mobile. 12-column grid with 20-48px gaps. Section header blocks have 56px space below them. Cards pad 24-32px."
radius: "Bento tiles, image panel, slider frame and plan cards 24px; step cards and FAQ card 20px; prompt box 20px; gallery tiles 16px; small thumbnails 10px; inputs inside panels 14px; every button, chip, tab and toggle is a full pill (999px)."
---

# AI Image Generator Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **void** `#0B0B10` — Page background, text on gradient buttons
- **panel** `#12121A` — Cards, tiles, prompt box base, chips
- **raised** `#1A1A25` — Inputs, hover fills, checkerboard dark squares
- **lifted** `#15141F` — Highlighted Creator plan background
- **line** `#FFFFFF14` — Hairline borders and dividers (white at 8%)
- **line-strong** `#FFFFFF26` — Glass panel borders, image frames, ghost buttons (white at 15%)
- **text** `#F2F0EC` — Primary text, light buttons, handle line
- **muted** `#A3A1AD` — Body copy, nav links, labels
- **faint** `#6B6977` — Captions, footnotes, mono labels
- **violet** `#8E6CFF` — Gradient start, glows, cursor light
- **orchid** `#C86BD8` — Gradient midpoint
- **coral** `#FF7A59` — Gradient end, section labels, errors, 'Rendering' state
- **mint** `#5BD6A0` — Success states and paid-plan check icons only
- **accent gradient** `linear-gradient(100deg, #8E6CFF 0%, #C86BD8 50%, #FF7A59 100%)` — Used sparingly: primary buttons, focus rings, caret, highlighted plan border, gradient text in H1/H2 phrases and key numbers

## Typography
- **Display: H1 clamp(40px, 5.4vw, 76px) line-height 1.02 letter-spacing -0.035em weight 650; H2 clamp(34px, 4vw, 54px) line-height 1.06 letter-spacing -0.03em weight 600; card titles 22px weight 600; big numbers** — Bricolage Grotesque Variable (OFL), weights 500/600/650/700. Self-host the font files.
- **Text: body 16px/1.6, subheads 17-18px, nav 14px, buttons 14-15px weight 600** — DM Sans Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono: prompt text, seeds, section labels (12px, letter-spacing 0.14em, uppercase), credit numbers, chips** — JetBrains Mono Variable (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Container max-width 1200px with 24px side padding (20px below 640px). Sections 112px vertical padding on desktop, 80px on mobile. 12-column grid with 20-48px gaps. Section header blocks have 56px space below them. Cards pad 24-32px.
- Radius: Bento tiles, image panel, slider frame and plan cards 24px; step cards and FAQ card 20px; prompt box 20px; gallery tiles 16px; small thumbnails 10px; inputs inside panels 14px; every button, chip, tab and toggle is a full pill (999px).

## Motion
- Hero loop: type 30ms/char, hold 450ms, generate 1400ms progress with shimmer, WebGL noise-dissolve morph 1200ms easeInOutCubic, show 2600ms with 1.00 -> 1.04 zoom, erase 12ms/char; pauses off screen and in hidden tabs.
- Blinking gradient caret (1s steps) in the prompt box.
- Cursor-following violet glow and gradient border ring on the prompt box; soft white pointer spotlight on bento tiles (hover devices only).
- Scroll reveals: fade up 24px, 0.6s, ease [0.22, 1, 0.36, 1], once, stagger 0.05-0.1s.
- Gallery: tiles lift 4px and zoom image to 1.04 on hover, prompt overlay fades in; filter changes reflow with Motion layout springs.
- Before/after: one-time hint sweep of the handle when first in view; drag with pointer or keyboard.
- Pricing numbers slide on billing toggle; FAQ answers animate height; CTA collage drifts slowly.
- prefers-reduced-motion: no typing, shader zoom, shimmer, glow, hint sweep, layout animation or drift; hero shows full prompts with a manual 'Next prompt' button and instant image swaps.

## Imagery
Six generated images in one consistent look: cinematic digital renders with photographic realism, dusk light with deep violet shadows and warm coral highlights, soft haze and glowing practical lights, no people and no text. They appear as hero morph targets, step and bento visuals, the before/after subject, gallery tiles and the blurred CTA collage. Four extra gallery tiles are abstract art drawn in canvas with the same violet/orchid/coral palette. All UI mocks (prompt fields, chips, toggles, export panel, batch table) are built in HTML/CSS. No stock photos, no faces, no logos.

## Tone
Calm, confident and concrete. Short sentences, plain verbs, real numbers (render times, pixel sizes, credit costs). No hype words like 'revolutionary', 'unleash' or 'magic'; let the images and the live prompt do the selling.

---
— Prompt by VibeFather · https://vibefather.ai/t/ai-image-generator-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
