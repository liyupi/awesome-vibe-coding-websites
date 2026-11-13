---
name: "WebGL Gradient SaaS Landing Page"
colors:
  canvas: "#FBFAF8"
  surface: "#FFFFFF"
  mist: "#F3F1EE"
  line: "#E6E2DC"
  ink: "#0E1525"
  ink_soft: "#3A4458"
  muted: "#6B7487"
  logo_gray: "#8A92A3"
  iris: "#5B4BFF"
  iris_tint: "#EEEBFF"
  positive: "#12A26B"
  positive_tint: "#E6F6EE"
  caution: "#D98B06"
  caution_tint: "#FFF4DB"
  negative: "#E5484D"
  negative_tint: "#FDECEC"
  gradient_cream: "#FFF1E4"
  gradient_apricot: "#FF9E7A"
  gradient_lilac: "#B39DFF"
  gradient_glacier: "#8FD3FF"
  gradient_butter: "#FFE08A"
  gradient_seafoam: "#9EECD0"
typography:
  display_h1_h2_prices_big_numbers_tab_titles_quotes_instrument_sans_variable_h1_600_clamp_44px_6vw_84px_1_02_letter_spacing_0_035em_h2_600_clamp_34px_4vw_56px_1_06_0_03em_h3_600_22px_1_25_0_015em: { family: "Instrument Sans", weights: [500, 600] }
  text_body_17px_1_6_400_ui_15px_500_buttons_15_5px_600_eyebrows_13px_600_uppercase_with_0_08em_tracking_in_iris_inter_variable_with_cv11: { family: "Inter", weights: [400, 500, 600, 700] }
  mono_amounts_and_ids_in_panels_tabular_code_card_13px_1_7_step_numbers_12px_timestamps_jetbrains_mono_variable: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "8px base. Container max-width 1200px, side padding 24px (20px under 640px). 12-column grid, 24px gutter. Sections: padding-block 128px desktop, 88px under 768px. Header 72px tall. Card padding 32px desktop / 24px mobile. Panel inner padding 20px."
radius: "Pill (9999px) for all buttons, chips, toggles and tabs on mobile. 20px for floating product panels and small cards. 28px for bento cards, pricing cards and the tab panel stage. 32px for the final CTA frame. 12px for small tiles inside panels, 6px for table status chips."
---

# WebGL Gradient SaaS Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#FBFAF8` — Page background, header background after scroll (at 78% opacity), footer
- **Surface** `#FFFFFF` — Cards, pricing cards, active tab card, solid panel backgrounds
- **Mist** `#F3F1EE` — Testimonials band background and the feature-tab panel stage
- **Line** `#E6E2DC` — Hairlines, card rings, dividers, outlined buttons
- **Ink** `#0E1525` — Headlines, primary pill buttons, code card background
- **Ink Soft** `#3A4458` — Body text, nav links
- **Muted** `#6B7487` — Secondary text, inactive tab titles, captions
- **Logo Gray** `#8A92A3` — Customer wordmarks in the logo strip
- **Iris** `#5B4BFF` — Single UI accent: eyebrows, text links, chart lines, check icons, focus ring base
- **Iris Tint** `#EEEBFF` — Chip backgrounds with Iris text
- **Positive** `#12A26B` — Done states, positive deltas, status dot
- **Positive Tint** `#E6F6EE` — Positive chip backgrounds
- **Caution** `#D98B06` — In-review states, flagged variance, needs-receipt
- **Caution Tint** `#FFF4DB` — Caution chip backgrounds
- **Negative** `#E5484D` — Blocked states only
- **Negative Tint** `#FDECEC` — Blocked chip background
- **Gradient Cream** `#FFF1E4` — Shader base color and CSS fallback base
- **Gradient Apricot** `#FF9E7A` — Mesh gradient hue 1; progress arcs start
- **Gradient Lilac** `#B39DFF` — Mesh gradient hue 2; chart area fills
- **Gradient Glacier** `#8FD3FF` — Mesh gradient hue 3
- **Gradient Butter** `#FFE08A` — Mesh gradient hue 4
- **Gradient Seafoam** `#9EECD0` — Mesh gradient hue 5

## Typography
- **Display: H1, H2, prices, big numbers, tab titles, quotes (Instrument Sans Variable). H1 600 clamp(44px, 6vw, 84px)/1.02, letter-spacing -0.035em. H2 600 clamp(34px, 4vw, 56px)/1.06, -0.03em. H3 600 22px/1.25, -0.015em.** — Instrument Sans (OFL), weights 500/600. Self-host the font files.
- **Text: body 17px/1.6 400, UI 15px 500, buttons 15.5px 600, eyebrows 13px 600 uppercase with 0.08em tracking in Iris (Inter Variable with cv11)** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Mono: amounts and IDs in panels (tabular), code card 13px/1.7, step numbers 12px, timestamps (JetBrains Mono Variable)** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Container max-width 1200px, side padding 24px (20px under 640px). 12-column grid, 24px gutter. Sections: padding-block 128px desktop, 88px under 768px. Header 72px tall. Card padding 32px desktop / 24px mobile. Panel inner padding 20px.
- Radius: Pill (9999px) for all buttons, chips, toggles and tabs on mobile. 20px for floating product panels and small cards. 28px for bento cards, pricing cards and the tab panel stage. 32px for the final CTA frame. 12px for small tiles inside panels, 6px for table status chips.

## Motion
- Two easings only: entrance [0.16, 1, 0.3, 1] (expo out) for reveals and load-in, swap [0.22, 1, 0.36, 1] for tab, carousel and price changes.
- Section reveal: every section's header block and its main grid fade and rise from opacity 0, y 24px to 1, 0 over 0.7s when 20% enters the viewport (whileInView, viewport once). Grid children stagger 0.06s.
- Hover: cards lift y -4px with shadow-card -> shadow-lift over 0.25s; primary buttons darken to #1F2940 and lift 1px; arrow icons inside links slide 3px right.
- Hero gradient flows continuously and slowly (one full visual cycle takes about 40 seconds) and bends toward the cursor with eased lag; it pauses whenever the hero is off screen or the tab is hidden.
- Floating panels: load-in with stagger, idle bob 6px, pointer tilt on a spring, scroll parallax at three different speeds (details in Hero).
- Logo marquee 38s linear loop, pauses on hover. Metrics count up once over 1.4s.
- prefers-reduced-motion: CSS gradient instead of the shader, no parallax, tilt, bob, marquee, count-up or auto-advance; reveals become a plain 0.2s opacity fade.

## Imagery
No photographs and no bitmap files at all. Everything visual is drawn in code: the WebGL mesh gradient (with a CSS radial-gradient fallback), glass product panels built from HTML and inline SVG with invented data, SVG charts and progress rings, code-drawn customer wordmarks, gradient initials avatars (no faces) and Lucide icons. The look comes from soft pastel color, frosted white glass, crisp near-black type and layered shadows.

## Tone
Calm, confident, specific. Short declarative sentences, concrete numbers, no hype words, no exclamation marks, no emoji. Reads like software made by people who have run a month-end close themselves.

---
— Prompt by VibeFather · https://vibefather.ai/t/webgl-gradient-saas-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
