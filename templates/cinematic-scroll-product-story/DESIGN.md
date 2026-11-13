---
name: "Cinematic Scroll Product Story"
colors:
  night: "#0A0B0D"
  charcoal: "#16181C"
  ash: "#24272D"
  bone: "#ECE6DC"
  haze: "#9A958C"
  dusk: "#E8894A"
  ember: "#B8532A"
  volt: "#C8FF2E"
  letterbox: "#000000"
typography:
  display_h1_h2_the_wordmark_spec_numbers_price_buttons_always_uppercase_condensed_tight_line_height: { family: "Barlow Condensed", weights: [600, 800] }
  text_lead_captions_body_faq_panel_copy: { family: "Manrope", weights: [400, 500, 600] }
  mono_eyebrows_scene_labels_timecode_stat_labels_rail_labels_uppercase_letter_spacing_0_18_0_24em: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1320px, side padding 48px desktop, 32px tablet, 20px under 640px, 12-column grid with 32px gaps. Inside the film everything sits between the letterbox bars (clamp(44px, 9vh, 96px) each) and above the 120px caption band. Normal sections use 120px vertical padding (80px under 640px). Spec number + suffix + label are a tight unit: 4px between number and label."
radius: "Film scenes and images are square-edged (0). Callout cards and the preorder stage and panel 24px (callout 16px). Buttons and swatches are pills or circles (999px). Focus ring: 2px Volt outline with 3px offset."
---

# Cinematic Scroll Product Story — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night** `#0A0B0D` — Page and stage background, text on Volt buttons.
- **Charcoal** `#16181C` — Preorder stage and panel, callout cards, accordion surfaces.
- **Ash** `#24272D` — Giant footer wordmark, inactive tracks, subtle fills.
- **Bone** `#ECE6DC` — Headlines, body text, captions, icons, selected size fill; at 6–18% for hairlines, contours and tracks.
- **Haze** `#9A958C` — Secondary text, mono labels, timecode, FAQ answers.
- **Dusk** `#E8894A` — Warm highlight: scene labels, haze glow, light streaks. Never on numbers or CTAs.
- **Ember** `#B8532A` — Deep warm glow at the bottom of scenes and behind the product.
- **Volt** `#C8FF2E` — The single electric accent, used only for spec numbers, progress fills (header, route, rail, climbing dot), the price and the CTA.
- **Letterbox** `#000000` — Top and bottom film bars.

## Typography
- **Display: H1, H2, the wordmark, spec numbers, price, buttons — always uppercase, condensed, tight line-height** — Barlow Condensed (OFL), weights 600/800. Self-host the font files.
- **Text: lead, captions, body, FAQ, panel copy** — Manrope (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrows, scene labels, timecode, stat labels, rail labels (uppercase, letter-spacing 0.18–0.24em)** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1320px, side padding 48px desktop, 32px tablet, 20px under 640px, 12-column grid with 32px gaps. Inside the film everything sits between the letterbox bars (clamp(44px, 9vh, 96px) each) and above the 120px caption band. Normal sections use 120px vertical padding (80px under 640px). Spec number + suffix + label are a tight unit: 4px between number and label.
- Radius: Film scenes and images are square-edged (0). Callout cards and the preorder stage and panel 24px (callout 16px). Buttons and swatches are pills or circles (999px). Focus ring: 2px Volt outline with 3px offset.

## Motion
- One master GSAP timeline scrubbed by ScrollTrigger (scrub 0.8) over 1380 units pins the stage and drives every crossfade, parallax layer, route draw, climbing dot and angle swap.
- Crossfades between scenes overlap 40 units: incoming autoAlpha 0 → 1 and scale 1.04 → 1, outgoing to 0 and 0.98.
- Parallax depth: back layer moves least (yPercent -6, scale 1.15 → 1.05), mid -14, front -28 or faster, so every scene feels three-deep.
- Captions type at 32ms per character with a blinking block cursor, hold 1.6s, replay when you scroll back into a scene.
- Spec numbers count from 0 in 1.4s (power2.out) when their scene becomes active and reset when it leaves.
- Lenis smooth scrolling (lerp 0.1) wired to ScrollTrigger and the GSAP ticker.
- prefers-reduced-motion: no Lenis, no pinning, no typing or counting — scenes stack statically with final values.

## Imagery
Cinematic and dark: two dusk film stills (ridge road, wet city) and four studio renders of the same ember-orange bike on near-black with amber rim light, all from one generated set. Everything else is drawn in code (haze, ridges, rain, contour map, route, elevation profile, light streaks, grain). Riders are distant faceless silhouettes; no text or logos in any image.

## Tone
Cinematic, quiet and confident. Short declarative captions like film subtitles, concrete times and distances, no exclamation marks, no buzzwords.

---
— Prompt by VibeFather · https://vibefather.ai/t/cinematic-scroll-product-story · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
