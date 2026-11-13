---
name: "Ceramics Shop Product Page"
colors:
  bone: "#F4EFE6"
  paper: "#FBF8F3"
  sand: "#E3D8C6"
  ink: "#2B2420"
  muted: "#6E625A"
  terracotta: "#B4532F"
  terracotta_dark: "#9A4426"
  clay_foot: "#C8A27C"
  coffee: "#3B2418"
  glaze_oat: "#E6D9C2"
  glaze_ember: "#B4573A"
  glaze_moss: "#7A8260"
  glaze_tide: "#5B7380"
  glaze_coal: "#3A3330"
typography:
  display_product_name_section_headings_prices_big_rating_number_story_statement: { family: "Fraunces Variable", weights: [400, 500] }
  text_body_ui_labels_buttons_nav_captions: { family: "Inter Variable", weights: [400, 500, 600] }
spacing: "8px base grid. Container max-width 1240px, centered, horizontal padding 24px on mobile and 40px from 1024px up. Section vertical padding 112px on desktop and 72px on mobile. Card padding 28px (20px on mobile). Grid gap 24px, hero column gap 64px. Type scale: H1 product name Fraunces 500 48px/1.05 desktop, 36px mobile, letter-spacing -0.02em, font-variation-settings 'opsz' 96, 'SOFT' 50. Section H2 Fraunces 400 40px/1.1 desktop, 30px mobile. Card titles Fraunces 500 22px. Body Inter 400 16px/1.65. Small labels Inter 500 12px uppercase with 0.12em tracking, in Muted."
radius: "Gallery stage 28px; cards, accordion panels and drawer line thumbnails 20px; thumbnails 14px; buttons, steppers, swatches, badges and toast fully rounded (9999px). The drawer has no radius on its outer edge."
---

# Ceramics Shop Product Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Bone** `#F4EFE6` — Page background
- **Paper** `#FBF8F3` — Cards, gallery stage, drawer, accordion panels
- **Sand** `#E3D8C6` — Hairline borders (1px), dividers, announcement bar, rating bar tracks, thumbnail borders
- **Ink** `#2B2420` — Primary text, footer background, selected-swatch ring, toast background
- **Muted** `#6E625A` — Secondary text, captions, metadata
- **Terracotta** `#B4532F` — Single accent: primary buttons, stars, progress fills, links on hover, cart badge
- **Terracotta Dark** `#9A4426` — Primary button hover/active
- **Clay Foot** `#C8A27C` — Unglazed foot band on every SVG piece (shadow side #A88560)
- **Coffee** `#3B2418` — Liquid surface inside cups and server in SVG renders
- **Glaze Oat** `#E6D9C2` — Glaze swatch: hi #F6EFE2, base #E6D9C2, lo #BFAE90
- **Glaze Ember** `#B4573A` — Glaze swatch (default selected): hi #D98A68, base #B4573A, lo #7E3622
- **Glaze Moss** `#7A8260` — Glaze swatch: hi #A3AA86, base #7A8260, lo #535A40
- **Glaze Tide** `#5B7380` — Glaze swatch: hi #8DA3AE, base #5B7380, lo #3C4F59
- **Glaze Coal** `#3A3330` — Glaze swatch: hi #6A5F59, base #3A3330, lo #1F1A18

## Typography
- **Display: product name, section headings, prices, big rating number, story statement** — Fraunces Variable (OFL), weights 400/500. Self-host the font files.
- **Text: body, UI labels, buttons, nav, captions** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Container max-width 1240px, centered, horizontal padding 24px on mobile and 40px from 1024px up. Section vertical padding 112px on desktop and 72px on mobile. Card padding 28px (20px on mobile). Grid gap 24px, hero column gap 64px. Type scale: H1 product name Fraunces 500 48px/1.05 desktop, 36px mobile, letter-spacing -0.02em, font-variation-settings 'opsz' 96, 'SOFT' 50. Section H2 Fraunces 400 40px/1.1 desktop, 30px mobile. Card titles Fraunces 500 22px. Body Inter 400 16px/1.65. Small labels Inter 500 12px uppercase with 0.12em tracking, in Muted.
- Radius: Gallery stage 28px; cards, accordion panels and drawer line thumbnails 20px; thumbnails 14px; buttons, steppers, swatches, badges and toast fully rounded (9999px). The drawer has no radius on its outer edge.

## Motion
- Library: Motion (motion/react). Global easing [0.22, 1, 0.36, 1].
- Scroll reveal: every section's heading block and cards fade up from y 24px, opacity 0 to 1, over 700ms, whileInView with once: true and amount 0.2. Cards in a grid stagger by 80ms.
- Glaze change: the --glaze-hi/base/lo custom properties transition over 600ms ease, so every render shifts color smoothly at the same time. The glaze name label beside 'Glaze —' crossfades over 200ms.
- Gallery view change: AnimatePresence crossfade, opacity plus scale 0.98→1, 300ms.
- Steam: three wavy SVG paths above the dripper and server (in the set and dripper views). Each rises translateY 0→-28px while opacity goes 0→0.55→0 over 6s, looping, with delays of 0s, 2s and 4s. Stroke #FFFFFF, width 6, linecap round, blurred by feGaussianBlur stdDeviation 2.
- Hover lifts: cards translateY -4px and swap shadow-soft for shadow-lift over 200ms. Swatches scale to 1.08. Thumbnails raise their border to Ink at 40% opacity.
- Add to cart: the button label swaps to a Check icon plus 'Added' for 1.4s (crossfade 150ms), then the drawer opens.
- Cart drawer: the panel slides x 100%→0 over 380ms. The overlay fades to rgba(43,36,32,0.4) with backdrop-blur 2px over 250ms. New line items animate height and opacity in, and removed items collapse out (layout animation 250ms).
- Free-shipping bar width animates 500ms whenever the subtotal changes.
- Rating bars animate width from 0 to their value over 900ms when scrolled into view, staggered by 60ms.
- Accordion: content height auto-animates 280ms, and the Plus icon rotates 45° to read as a close mark.
- Toast: slides up 16px and fades in over 250ms at bottom center, stays 3s, then fades out.
- prefers-reduced-motion: reduce (check with useReducedMotion and the CSS media query): no translate or scale animations, steam paths hidden, glaze and gallery changes are instant, the drawer appears with an opacity-only fade of 150ms, and rating bars render at full width.

## Imagery
No bitmaps at all. Every product image is an original inline SVG (viewBox 0 0 800 800) built the same way. Each piece is a simple silhouette path filled with url(#glazeGrad), a horizontal linearGradient going var(--glaze-hi) at 0%, var(--glaze-base) at 45% and var(--glaze-lo) at 100%. The glaze stops about 82% down each piece at a hand-drawn wavy 'dip line', and below it a band of unglazed foot shows in #C8A27C with a #A88560 shadow side. A 'speckle' filter overlays tiny dark iron flecks: feTurbulence fractalNoise baseFrequency 0.85, numOctaves 2, then feColorMatrix to a sparse alpha threshold, colored #3A2A20, at 35% opacity, clipped to the glazed area. A white rim highlight runs along each lip (1.5px stroke, 50% opacity), with a narrow vertical highlight streak (white, 18% opacity, blurred). Each piece sits on a soft ground shadow ellipse (Ink at 18%, blurred 14px). The forms are generic and original. The dripper is a smooth, slightly convex cone with a rolled rim, a flat round base flange and a small half-round loop handle on the right, with no ribs or signature details. The server is a round-bellied carafe with a short pulled spout and a narrowing neck. The cups are low, unhandled tumblers with a slight taper. The gallery stage background is a radial gradient from #FBF8F3 at the center to #EFE7DA at the edges. A fixed full-screen paper-grain overlay (feTurbulence baseFrequency 0.9, numOctaves 2, mix-blend-mode multiply, opacity 0.05, pointer-events none) covers the whole page. Review avatars are initials in circles tinted with their glaze color. There are no faces, people, product photos or logos of any kind.

## Tone
Quiet, warm and plain-spoken, like a potter describing their work at a market stall. Short sentences, concrete numbers (ml, cm, °C, days), no hype words, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/ceramics-shop-product-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
