---
name: "Physics Playground Landing Page"
colors:
  paper: "#FBF6EC"
  paper_deep: "#F3EADA"
  card: "#FFFDF8"
  ink: "#1A1714"
  ink_soft: "#5B544B"
  rule: "#E4D9C6"
  tomato: "#FF5A36"
  butter: "#FFC93C"
  mint: "#34D399"
  sky: "#4D8DFF"
  grape: "#A77BFF"
  tomato_tint: "#FFE1D8"
  butter_tint: "#FFF1C7"
  mint_tint: "#D5F6E9"
  sky_tint: "#DCE8FF"
  grape_tint: "#ECE3FF"
typography:
  display_letter_blocks_section_headings_prices_wordmark: { family: "Bricolage Grotesque Variable", weights: [600, 700, 800] }
  text_body_copy_buttons_nav_faq: { family: "Figtree Variable", weights: [400, 500, 600, 700] }
  mono_chip_labels_like_frame_12_code_tags_in_vignettes_eyebrow_labels: { family: "JetBrains Mono", weights: [500] }
spacing: "8px base. Container max-width 1200px with 24px side padding (16px under 640px). Sections use 112px vertical padding on desktop and 72px on mobile. Card gaps 24px (16px mobile). Section headings: eyebrow (mono 13px uppercase, letter-spacing 0.08em, ink-soft) 12px above an h2 in Bricolage 800, 56px/1.0 desktop and 36px/1.05 mobile, letter-spacing -0.02em, then a 18px Figtree intro paragraph (max-width 560px, ink-soft) 16px below."
radius: "Everything is chunky and rounded: letter blocks 18px (10px on mobile), chips and buttons 999px pills except square chips 14px, cards 24px, the hero arena frame 28px, the sign-up panel 32px, inputs 999px. Every bordered element uses a 3px ink border."
---

# Physics Playground Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **paper** `#FBF6EC` — Page background and arena background (warm off-white canvas)
- **paper-deep** `#F3EADA` — Alternate section background (features, FAQ), input fills
- **card** `#FFFDF8` — Card and white chip fills
- **ink** `#1A1714` — All outlines (3px), hard offset shadows, headings and body text, footer background
- **ink-soft** `#5B544B` — Secondary text, captions, meta labels
- **rule** `#E4D9C6` — Hairline dividers inside cards and the FAQ
- **tomato** `#FF5A36` — Primary candy: primary buttons, Share chip, first letter in the color cycle
- **butter** `#FFC93C` — Candy: marquee band, featured pricing card, sign-up band background
- **mint** `#34D399` — Candy: toggle track, success states, comment chip
- **sky** `#4D8DFF` — Candy: cursor tag, links on hover, letter color cycle
- **grape** `#A77BFF` — Candy: second cursor tag, badges, letter color cycle
- **tomato-tint** `#FFE1D8` — Vignette background tint for tomato-accent feature cards
- **butter-tint** `#FFF1C7` — Vignette background tint for butter-accent cards
- **mint-tint** `#D5F6E9` — Vignette background tint for mint-accent cards
- **sky-tint** `#DCE8FF` — Vignette background tint for sky-accent cards
- **grape-tint** `#ECE3FF` — Vignette background tint for grape-accent cards

## Typography
- **Display: letter blocks, section headings, prices, wordmark** — Bricolage Grotesque Variable (OFL), weights 600/700/800. Self-host the font files.
- **Text: body copy, buttons, nav, FAQ** — Figtree Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Mono: chip labels like 'Frame 12', code tags in vignettes, eyebrow labels** — JetBrains Mono (OFL), weights 500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Container max-width 1200px with 24px side padding (16px under 640px). Sections use 112px vertical padding on desktop and 72px on mobile. Card gaps 24px (16px mobile). Section headings: eyebrow (mono 13px uppercase, letter-spacing 0.08em, ink-soft) 12px above an h2 in Bricolage 800, 56px/1.0 desktop and 36px/1.05 mobile, letter-spacing -0.02em, then a 18px Figtree intro paragraph (max-width 560px, ink-soft) 16px below.
- Radius: Everything is chunky and rounded: letter blocks 18px (10px on mobile), chips and buttons 999px pills except square chips 14px, cards 24px, the hero arena frame 28px, the sign-up panel 32px, inputs 999px. Every bordered element uses a 3px ink border.

## Motion
- Hero drop-in: letters spawn in reading order, 90 ms apart, from y = -140 to -620 px above the arena top with a random angle of +/-0.15 rad, then chips spawn 70 ms apart after the last letter at random x positions; all falling, bouncing and settling comes from the physics engine, not CSS.
- Buttons press like stickers: hover translate(-2px,-2px) with shadow 4px to 6px over 120ms ease-out; active translate(2px,2px) with shadow 0 over 60ms.
- Grabbed bodies lift: inner wrapper scale 1.06 and shadow offset 10px while held, spring back to 1.0 and 6px over 180ms cubic-bezier(.34,1.56,.64,1) on release.
- Marquee band scrolls left continuously at 40 s per loop, pauses on hover.
- Section headings and cards enter with a 'pop' when 20% visible: from translateY(24px) scale(0.96) opacity 0 to rest over 520ms cubic-bezier(.34,1.56,.64,1), cards staggered 70ms; triggered once by IntersectionObserver.
- Feature vignettes drop their pieces when the card enters view, then loop: after all pieces sleep and 5 s pass without interaction, pieces shrink to scale 0 over 200ms and re-drop.
- Pricing toggle knob slides with a 260ms overshoot easing; price digits roll vertically (old value slides up and out, new value slides up from below) over 250ms.
- Testimonial cards rest at small rotations (-2deg, 1.5deg, -1deg) and straighten to 0deg with translateY(-4px) on hover over 200ms.
- prefers-reduced-motion: no drop-in, no tilt, no Shake, no idle loops, no marquee movement, no pop-ins, no digit rolls. Hero and vignette pieces render pre-settled in a composed layout; dragging still works and released pieces settle under normal gravity.

## Imagery
The hero's visual anchor is the framed physics arena itself: a polished, invented canvas-app mock (dotted grid, mini toolbar, candy letter blocks and UI chips with thick outlines and hard shadows), never typography on a flat background. All UI chips, vignette pieces, icons and decorative shapes are drawn in code with HTML/CSS and Lucide icons; no screenshots of any real design tool and no product chrome that resembles one. The only raster images are three AI-generated testimonial avatars of fictional people, drawn as one series: flat vector illustration, no outlines, no facial features, warm off-white background with a soft pastel blob, head and shoulders. Portraits are cropped to 64px circles with a 3px ink border.

## Tone
Warm, witty and concrete. Short sentences, real numbers, no buzzwords. The visuals are tactile and sticker-like: chunky rounded blocks, thick near-black outlines, hard offset shadows, candy colors on a warm off-white canvas, bouncy but never chaotic motion.

---
— Prompt by VibeFather · https://vibefather.ai/t/physics-playground-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
