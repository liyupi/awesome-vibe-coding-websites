---
name: "Liquid Glass Product Page"
colors:
  paper: "#f2f0eb"
  paper_deep: "#e8e5de"
  ink: "#141417"
  graphite: "#2b2b31"
  muted: "#6f6d69"
  line: "rgba(20,20,23,0.14)"
  glass_fill: "linear-gradient(135deg, rgba(255,255,255,0.34), rgba(255,255,255,0.12))"
  glass_rim: "rgba(255,255,255,0.62)"
  iris_peach: "#ffb8a3"
  iris_blue: "#b9c8ff"
  iris_mint: "#c9f2dc"
typography:
  display_headlines_wordmark_big_numerals_prices: { family: "Newsreader Variable (opsz axis, roman + italic)", weights: [300, 400] }
  text_body_buttons_nav: { family: "Geist Variable", weights: [400, 500] }
  mono_eyebrows_spec_labels_counters_chips: { family: "Geist Mono Variable", weights: [400] }
spacing: "8px base unit. Container max-width 1280px with side gutter clamp(16px, 3.2vw, 48px). Section vertical padding clamp(96px, 14vh, 168px). H1 clamp(56px, 8.2vw, 132px) Newsreader 300, line-height 0.92, letter-spacing -0.03em. H2 clamp(44px, 6vw, 104px) Newsreader 300, line-height 0.95, letter-spacing -0.025em. The italic phrase in every heading is Newsreader 300 italic. Body Geist 400 16px / 1.6 (15px under 768px). Eyebrows Geist Mono 400 11px, uppercase, letter-spacing 0.16em, Muted, preceded by a 28px × 1px currentColor hairline at 60% opacity with a 12px gap."
radius: "Large glass panels 32px, cards and photo tiles 24px, chips, buttons, segmented controls and the nav bar fully rounded (999px), the lens is a circle. Primary buttons are 44px tall pills, padding 0 22px, Geist 500 13px."
---

# Liquid Glass Product Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#f2f0eb` — Page background, loader background, text on Ink buttons
- **Paper Deep** `#e8e5de` — Alternating section background (Press, FAQ), image placeholders while loading
- **Ink** `#141417` — Headlines, body text on glass, primary pill buttons, hairline fills, cursor dot
- **Graphite** `#2b2b31` — Primary button hover
- **Muted** `#6f6d69` — Body text on Paper, eyebrows, spec labels, captions
- **Line** `rgba(20,20,23,0.14)` — Hairlines, spec row borders, ghost button border, FAQ dividers
- **Glass Fill** `linear-gradient(135deg, rgba(255,255,255,0.34), rgba(255,255,255,0.12))` — Background of every .glass surface
- **Glass Rim** `rgba(255,255,255,0.62)` — 1px border of glass surfaces and the inset top highlight
- **Iris Peach** `#ffb8a3` — Dispersion tint, only inside the conic rim gradient
- **Iris Blue** `#b9c8ff` — Dispersion tint, only inside the conic rim gradient
- **Iris Mint** `#c9f2dc` — Dispersion tint, only inside the conic rim gradient

## Typography
- **Display (headlines, wordmark, big numerals, prices)** — Newsreader Variable (opsz axis, roman + italic) (OFL), weights 300/400. Self-host the font files.
- **Text (body, buttons, nav)** — Geist Variable (OFL), weights 400/500. Self-host the font files.
- **Mono (eyebrows, spec labels, counters, chips)** — Geist Mono Variable (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1280px with side gutter clamp(16px, 3.2vw, 48px). Section vertical padding clamp(96px, 14vh, 168px). H1 clamp(56px, 8.2vw, 132px) Newsreader 300, line-height 0.92, letter-spacing -0.03em. H2 clamp(44px, 6vw, 104px) Newsreader 300, line-height 0.95, letter-spacing -0.025em. The italic phrase in every heading is Newsreader 300 italic. Body Geist 400 16px / 1.6 (15px under 768px). Eyebrows Geist Mono 400 11px, uppercase, letter-spacing 0.16em, Muted, preceded by a 28px × 1px currentColor hairline at 60% opacity with a 12px gap.
- Radius: Large glass panels 32px, cards and photo tiles 24px, chips, buttons, segmented controls and the nav bar fully rounded (999px), the lens is a circle. Primary buttons are 44px tall pills, padding 0 22px, Geist 500 13px.

## Motion
- Easing: --ease-out cubic-bezier(0.16, 1, 0.3, 1) for reveals and springs back; --ease-io cubic-bezier(0.77, 0, 0.18, 1) for the loader exit and panel swaps.
- Rise-in: elements marked data-rise start at opacity 0 and translateY(24px) and animate to rest over 900ms --ease-out when 20% visible (Motion whileInView, once). Siblings stagger by 80ms via a CSS variable --i.
- Headline split: every H1/H2 is split into words, each word inside an overflow-hidden inline-block; words rise from translateY(105%) to 0 over 1000ms --ease-out with a 50ms stagger.
- Glass specular: one shared window pointermove listener (throttled with requestAnimationFrame) writes --mx and --my (pointer position relative to each visible .glass element, in percent) and --rim (angle in degrees from the element center to the pointer). The highlight and the brightest rim point therefore always face the cursor. Elements more than 600px from the pointer ease back to --mx 30%, --my 0%, --rim -45deg over 600ms.
- Magnetic buttons: elements with data-magnetic move up to 6px toward the pointer while it is within 24px of their box, using a Motion spring (stiffness 220, damping 18); they spring back on leave.
- Custom cursor (pointer: fine only): an 8px Ink dot that tracks exactly and a 40px ring (1px Ink at 35%) that follows with a spring (stiffness 300, damping 28). Over elements with data-cursor='Label' the ring grows to 92px, becomes a .glass circle and shows the label in Geist Mono 10px uppercase. The native cursor is hidden (cursor: none on html) except over inputs, where the text cursor shows and the custom cursor hides.
- Reduced motion (prefers-reduced-motion: reduce): no loader count (it fades out after 200ms), no headline split, rise-ins become 200ms fades, no parallax, no lens, no magnetic movement, no hotspot pulse, specular fixed at its rest position, the Story chapters switch with an opacity-only crossfade and the product image does not move.

## Imagery
Real photography of the product, its materials and the product in a room, warm and soft, always shown full-bleed or in 24px-radius tiles and never with drop shadows. Six product photos are made for this template and hosted by the template author; three CC0 photos (light through glass, a prism spectrum, window light on a white surface) add material context. All UI chrome over photos is glass. Everything else (favicon, the elevation drawing, icons, hotspot markers) is drawn in SVG or comes from lucide-react. No illustrations, gradients blobs or 3D scenes.

## Tone
Quiet, precise and tactile, like a maker's catalogue. Short sentences, real numbers, no hype words (no revolutionary, game-changing, next-level, unleash). One italic emphasis phrase per headline.

---
Inspired by Aether One — Liquid Glass (Opus 5.5 showcase by Miler) by @ohmiler — https://ohmiler.github.io/opus-5.5/liquid-glass-landing/
— Prompt by VibeFather · https://vibefather.ai/t/liquid-glass-product-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
