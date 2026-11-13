---
name: "Bento Grid SaaS Landing Page"
colors:
  cream: "#F6F2EA"
  white: "#FFFFFF"
  sand: "#EFE8DC"
  line: "#E4DCCD"
  line_strong: "#D8CDB9"
  ink: "#1D1B17"
  muted: "#6B6459"
  burnt_orange: "#E8590C"
  burnt_orange_deep: "#C94A08"
  accent_tint: "#FCE6D9"
  avatar_tints: "#EADFCB / #F0DCCF / #DDE3D3 / #E1DDD6"
typography:
  display_hero_headline_section_headings_plan_prices_closing_band_headline: { family: "Fraunces Variable", weights: [400, 500, 600] }
  text_body_nav_buttons_tile_labels_faq: { family: "Inter Variable", weights: [400, 500, 600] }
  numbers_counters_stats_chart_values_kbd_hints_prices_cents_and_units: { family: "Geist Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1200px, centered, horizontal padding 24px (20px under 640px). Section vertical padding 128px desktop, 96px tablet, 72px mobile. Section header to content gap 56px. Bento gap 16px. Card padding 28px (22px mobile). Headings: hero 76px/1.02 desktop, 56px tablet, 42px mobile, Fraunces 500 with letter-spacing -0.02em and font-variation-settings 'opsz' 144. Section h2 52px/1.05 desktop, 36px mobile, Fraunces 500. Body 17px/1.6 Inter 400; tile labels 15px Inter 600; captions 13px Inter 500 muted. Eyebrows 12px Inter 600 uppercase with 0.08em tracking, muted."
radius: "Cards and tiles 28px everywhere (same value for every tile, quote card and pricing card). Inner elements such as chart wells, palette rows and inputs 16px. Closing band and hero glimpse frame 36px. Buttons, pills, toggles, tabs and avatars fully rounded."
---

# Bento Grid SaaS Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#F6F2EA` — Page background
- **White** `#FFFFFF` — Card and tile surfaces, palette panel
- **Sand** `#EFE8DC` — Secondary surfaces: hero glimpse frame, inactive pill track, tile insets, kbd chips
- **Line** `#E4DCCD` — 1px hairline borders on cards, dividers, chart grid lines
- **Line strong** `#D8CDB9` — Card border on hover, toggle off-state track
- **Ink** `#1D1B17` — Primary text, highlighted pricing card, closing band background, toast
- **Muted** `#6B6459` — Secondary text, captions, axis labels
- **Burnt orange** `#E8590C` — The single accent: primary buttons, toggles on, sparkline strokes, active data points, focus ring, one highlighted stat. Never used for large backgrounds.
- **Burnt orange deep** `#C94A08` — Primary button hover and pressed
- **Accent tint** `#FCE6D9` — Eyebrow dot halo, highlighted palette row, featured quote card, sparkline area fill top
- **Avatar tints** `#EADFCB / #F0DCCF / #DDE3D3 / #E1DDD6` — Background circles behind initials in the quote wall, rotated in that order. Initials are drawn in ink.

## Typography
- **Display: hero headline, section headings, plan prices, closing band headline** — Fraunces Variable (OFL), weights 400/500/600. Self-host the font files.
- **Text: body, nav, buttons, tile labels, FAQ** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.
- **Numbers: counters, stats, chart values, kbd hints, prices' cents and units** — Geist Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, horizontal padding 24px (20px under 640px). Section vertical padding 128px desktop, 96px tablet, 72px mobile. Section header to content gap 56px. Bento gap 16px. Card padding 28px (22px mobile). Headings: hero 76px/1.02 desktop, 56px tablet, 42px mobile, Fraunces 500 with letter-spacing -0.02em and font-variation-settings 'opsz' 144. Section h2 52px/1.05 desktop, 36px mobile, Fraunces 500. Body 17px/1.6 Inter 400; tile labels 15px Inter 600; captions 13px Inter 500 muted. Eyebrows 12px Inter 600 uppercase with 0.08em tracking, muted.
- Radius: Cards and tiles 28px everywhere (same value for every tile, quote card and pricing card). Inner elements such as chart wells, palette rows and inputs 16px. Closing band and hero glimpse frame 36px. Buttons, pills, toggles, tabs and avatars fully rounded.

## Motion
- Scroll reveal: every section's direct children fade up (opacity 0→1, y 16→0) over 0.5s with ease [0.22,1,0.36,1], staggered 0.06s. Triggered once when 20% is in view, using Motion whileInView with viewport once.
- Count-up: numbers animate from 0 to their target over 1.4s easeOut with Motion's animate() when 50% of the element enters view (once), formatted with Intl.NumberFormat and tabular numerals so the width never jitters.
- Sparklines: on view and again on every pointerenter, the stroke redraws by animating stroke-dashoffset from the path length to 0 over 0.9s easeOut, and the area fill fades from 0 to 1 over 0.6s.
- Tiles: on hover translateY(-2px), border goes from #E4DCCD to #D8CDB9 and shadow from card to lift over 0.25s.
- Buttons: the primary button darkens to accent-deep on hover and scales to 0.98 on press. An ArrowRight icon in the primary button shifts 3px right on hover.
- Toggles: the thumb slides with a Motion spring (stiffness 500, damping 32) and the track color crossfades over 0.2s.
- Pricing switch: the active pill background slides between options using a shared Motion layoutId. Each price rolls: the old value exits up (y 0→-14, opacity →0) and the new value enters from below (y 14→0) over 0.3s, using AnimatePresence mode popLayout.
- Accordion: height animates from 0 to auto over 0.32s ease [0.22,1,0.36,1] and the content fades in. The plus icon rotates 45° into an ×.
- Command palette: the backdrop fades in over 0.15s and the panel goes from scale 0.96, y 8 to scale 1, y 0 over 0.18s. It reverses on close.
- Nav: after 8px of scroll the background turns from transparent to cream at 80% opacity with backdrop-blur 12px and gains a hairline bottom border, over a 0.2s transition.
- prefers-reduced-motion: no reveals or stagger, counters show final values immediately, sparklines render fully drawn, the price changes without rolling, the accordion and palette open instantly, and the integrations highlight cycle stops.

## Imagery
No photos or bitmaps. All visuals are drawn in code: inline SVG sparklines, bars, a progress ring and a faint dot-grid pattern, plus Lucide icons at 1.75 stroke width. The logo mark is a 24px ink rounded square (radius 7) holding three vertical cream bars of heights 8, 12 and 16px; the tallest bar is burnt orange. It sits next to the wordmark [BRAND] in Fraunces 600 at 21px. Avatars are initials in tinted circles. The closing band has abstract concentric quarter-circle arcs in burnt orange at 22% opacity. There are no mascots, illustrations of people or logos.

## Tone
Calm, plain-spoken, a little warm. Short sentences, concrete numbers, no hype words, no exclamation marks. Feels like a well-made notebook, not a cockpit.

---
— Prompt by VibeFather · https://vibefather.ai/t/bento-grid-saas-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
