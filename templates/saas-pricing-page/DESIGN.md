---
name: "SaaS Pricing Page"
colors:
  white: "#FFFFFF"
  mist: "#F5F6F8"
  fog: "#EBEDF1"
  ink: "#101319"
  slate_ink: "#565E6C"
  hairline: "#E1E4EA"
  indigo: "#4F46E5"
  indigo_deep: "#4338CA"
  indigo_mist: "#EEF2FF"
  good: "#0E9F6E"
typography:
  display_h1_h2_h3_tier_names_prices_in_large_sizes_the_wordmark: { family: "Space Grotesk", weights: [500, 700] }
  text_and_ui_body_eyebrows_buttons_nav_table_cells_faq_all_money_font_variant_numeric_tabular_nums: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px — a utility page breathes less than a brochure. Type scale: H1 clamp(40px, 5.6vw, 72px) Space Grotesk 700, line-height 1.02, letter-spacing -0.02em; H2 clamp(28px, 3.6vw, 44px) Space Grotesk 700 letter-spacing -0.01em; H3 20px Space Grotesk 700; price figures Space Grotesk 700 44px with tabular-nums; lead Inter 400 17px / 1.65 Ink at 85%; body Inter 400 15.5px / 1.7 (max-width 66ch); eyebrow Inter 600 12px uppercase letter-spacing 0.14em Slate Ink; caption Inter 400 13px Slate Ink. Buttons: height 46px, padding 0 22px, Inter 600 14px. Primary: Indigo fill, White text. Secondary: 1px Ink/20% border, Ink text. Small buttons 34px. Inputs: not needed (no forms except mailto). Focus ring everywhere: 2px Indigo outline with 3px offset."
radius: "12px on cards, the toggle, the slider thumb, chips and the FAQ rows. 999px only for pills (badges, save chip) and the toggle track."
---

# SaaS Pricing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **White** `#FFFFFF` — Page background, tier cards, table header.
- **Mist** `#F5F6F8` — Alternate section background (table, FAQ), input fill, chips.
- **Fog** `#EBEDF1` — Slider track, table row banding, disabled states.
- **Ink** `#101319` — Headlines, body text, table feature names, icon color.
- **Slate Ink** `#565E6C` — Secondary text, captions, eyebrows, per-seat lines.
- **Hairline** `#E1E4EA` — 1px hairlines, card borders, table grid lines.
- **Indigo** `#4F46E5` — The one accent: primary buttons, featured tier ring, toggle active, slider fill, checks, focus ring.
- **Indigo Deep** `#4338CA` — Primary hover and pressed, toggle active dark.
- **Indigo Mist** `#EEF2FF` — Featured tier wash, selected cells, the save-20% chip fill.
- **Good** `#0E9F6E` — The trust strip checks and the enterprise availability dot.

## Typography
- **Display: H1, H2, H3, tier names, prices in large sizes, the wordmark** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, table cells, FAQ, all money (font-variant-numeric tabular-nums)** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px — a utility page breathes less than a brochure. Type scale: H1 clamp(40px, 5.6vw, 72px) Space Grotesk 700, line-height 1.02, letter-spacing -0.02em; H2 clamp(28px, 3.6vw, 44px) Space Grotesk 700 letter-spacing -0.01em; H3 20px Space Grotesk 700; price figures Space Grotesk 700 44px with tabular-nums; lead Inter 400 17px / 1.65 Ink at 85%; body Inter 400 15.5px / 1.7 (max-width 66ch); eyebrow Inter 600 12px uppercase letter-spacing 0.14em Slate Ink; caption Inter 400 13px Slate Ink. Buttons: height 46px, padding 0 22px, Inter 600 14px. Primary: Indigo fill, White text. Secondary: 1px Ink/20% border, Ink text. Small buttons 34px. Inputs: not needed (no forms except mailto). Focus ring everywhere: 2px Indigo outline with 3px offset.
- Radius: 12px on cards, the toggle, the slider thumb, chips and the FAQ rows. 999px only for pills (badges, save chip) and the toggle track.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and number changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the toggle and accordion. Precise, product-grade — small distances, quick settles.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and animate to rest over 500ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 60ms.
- Cycle toggle: the sliding thumb moves 200ms --ease-io with a slight scaleX squash; every price on the page counts to its new value over 400ms --ease-io (tabular-nums hold their width); the save-20% chip fades in only on annual.
- Seat slider: the thumb pops 1.0→1.1→1.0 on grab; the fill tracks instantly; totals count on release or step (200ms). The featured tier's total sits in a slightly larger figure that ticks once when it changes.
- Tier cards: hover lifts 3px with a hairline shadow; the featured card is permanently lifted 6px with a 2px Indigo ring and an Indigo Mist wash.
- Comparison table: the header row sticks under the page header (top 76px) with White/95% and blur; scrolling under it, the active tier's column carries a faint Indigo Mist band; check cells draw their check stroke once when scrolled into view (60ms stagger, disabled under reduced motion).
- FAQ accordions: height 0 to auto, opacity 0 to 1, 260ms --ease-io; Plus rotates 45 degrees into an X.
- Header: sticky from the top, White/90% with blur and a Hairline border always (no hero transparency — this is a utility page).
- Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- prefers-reduced-motion: reduce — disable counting (swap instantly), squash, draws and staggers; keep color/border/shadow hover changes. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
No photography at all — everything drawn in code. The hero's AppPanel is a small SVG product mock (a week strip with shift blocks, a totals sidebar and a cursor dot) using Hairline strokes, Indigo and Mist fills, strictly abstract UI geometry. Checks, dashes, slider, toggle, badges and the favicon are all SVG/CSS. Icons: lucide-react only, stroke width 2.

## Tone
Direct and a little dry, like a pricing page that respects the reader. Concrete numbers, no 'flexible plans for every team' filler, one tasteful joke maximum.

---
— Prompt by VibeFather · https://vibefather.ai/t/saas-pricing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
