---
name: "Y2K Chrome Fashion Drop Page"
colors:
  void: "#07060D"
  ultraviolet: "#160B36"
  electric_cyan: "#27F2FF"
  hot_pink: "#FF2FB3"
  lilac: "#B79CFF"
  acid_yellow: "#E8FF3A"
  chrome_light: "#F2F5FC"
  steel: "#A9B0C6"
typography:
  display_section_headlines_product_names_marquee_and_the_outlines_of_the_3d_wordmark_uppercase_with_0_02em_tracking_h2_is_clamp_34px_5vw_72px_at_1_02_line_height: { family: "Unbounded", weights: [700, 900] }
  text_body_at_17px_1_55_buttons_at_15px_weight_600_form_inputs: { family: "Hanken Grotesk", weights: [400, 500, 600] }
  mono_countdown_digits_stickers_prices_size_chips_spec_labels_ticket_labels_are_uppercase_at_12px_with_0_08em_tracking: { family: "Martian Mono", weights: [500, 700] }
spacing: "8px base. Sections use 120px vertical padding on desktop and 72px on mobile. Content max-width is 1320px with 40px gutters on desktop and 16px on mobile. Card gap is 24px."
radius: "Everything is a capsule or a soft window: 999px on buttons, chips and countdown panels, 28px on product cards, 20px on pill windows, 16px on inputs. Stickers keep their die-cut shapes."
---

# Y2K Chrome Fashion Drop Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#07060D` — Page ground, hero, carousel, lookbook, footer; text on holographic surfaces
- **Ultraviolet** `#160B36` — Ground for the piece detail and rules sections, so the page shifts color as it scrolls
- **Electric Cyan** `#27F2FF` — Hero light sweep, wireframe globe, focus rings, in-stock dots, cyan stickers
- **Hot Pink** `#FF2FB3` — Hero light sweep, low-stock states, pink stickers, lookbook color tile
- **Lilac** `#B79CFF` — Middle of the holographic gradient, floor grid, secondary borders
- **Acid Yellow** `#E8FF3A` — Tail of the holographic gradient and the loudest stickers. Small doses only
- **Chrome Light** `#F2F5FC` — Primary text on dark grounds, sticker outlines
- **Steel** `#A9B0C6` — Secondary text and labels on dark grounds

## Typography
- **Display: section headlines, product names, marquee, and the outlines of the 3D wordmark. Uppercase with -0.02em tracking. H2 is clamp(34px, 5vw, 72px) at 1.02 line height** — Unbounded (OFL), weights 700/900. Self-host the font files.
- **Text: body at 17px/1.55, buttons at 15px weight 600, form inputs** — Hanken Grotesk (OFL), weights 400/500/600. Self-host the font files.
- **Mono: countdown digits, stickers, prices, size chips, spec labels, ticket. Labels are uppercase at 12px with 0.08em tracking** — Martian Mono (OFL), weights 500/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Sections use 120px vertical padding on desktop and 72px on mobile. Content max-width is 1320px with 40px gutters on desktop and 16px on mobile. Card gap is 24px.
- Radius: Everything is a capsule or a soft window: 999px on buttons, chips and countdown panels, 28px on product cards, 20px on pill windows, 16px on inputs. Stickers keep their die-cut shapes.

## Motion
- Wordmark: continuous ripple through the shader, plus damped tilt toward the cursor (rotation y up to 0.22 rad, x up to 0.14 rad, THREE.MathUtils.damp with lambda 4). On touch devices it sways slowly on sin(t*0.4) instead.
- Hero light: the three radial gradients drift by up to 6% over 18s, alternating, in CSS.
- Countdown digits: each changed digit slides in from y -12px over 200ms with Motion AnimatePresence.
- Marquee: CSS translateX(0 to -50%) over 28s linear, paused on hover.
- Product cards: perspective tilt up to 6deg and a holographic sheen following the pointer, 120ms transition.
- Stickers: spring pop on hover (scale 1.14, stiffness 520, damping 14) with a small corner fold appearing.
- Sections: content fades up 24px over 500ms with Motion whileInView, once, staggered by 60ms.
- Pixel stars twinkle with steps(3) over 2.4s. Globe meridians animate scaleX 1 to -1 over 14s with stagger, which reads as a spin.
- prefers-reduced-motion: wordmark renders once with frameloop 'demand' and no ripple or tilt, marquee is static, drift, twinkle, globe, confetti and fade-ups are off, digits swap instantly and sheen sits still at 25% opacity.

## Imagery
One shoot throughout: garments and models under cyan and magenta rim light on a near-black seamless backdrop, glossy and high contrast, so photos melt into the page ground. Six generated photos: four products and two lookbook frames. Everything else is drawn in code: the 3D wordmark, gradients, stickers, globes, pixel stars, floor grid, the locked fifth card.

## Tone
Loud, glossy and a little cocky, with short sentences and specific numbers. It sounds like a small crew that knows its run sizes, not a retailer. No exclamation marks, no 'elevate', no 'curated'.

---
— Prompt by VibeFather · https://vibefather.ai/t/y2k-chrome-fashion-drop-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
