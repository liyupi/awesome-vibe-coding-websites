---
name: "AI Agent Startup Landing Page"
colors:
  void: "#07090D"
  panel: "#0D1218"
  raised: "#121922"
  line: "#1E2833"
  line_strong: "#2B3846"
  text: "#E8EEF5"
  muted: "#8A97A8"
  faint: "#566375"
  signal: "#2EE6D6"
  signal_deep: "#14A99C"
  done: "#8B7CFF"
  done_deep: "#5B4BDB"
  amber: "#F5B84B"
typography:
  display_h1_h2_step_titles_tier_names_card_titles_the_wordmark: { family: "Space Grotesk", weights: [500, 600] }
  text_body_leads_nav_buttons_faq_form_fields: { family: "Inter", weights: [400, 500, 600] }
  mono_eyebrows_node_labels_task_ids_and_chips_metric_values_prices_billing_lines_footnotes: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "8px base grid. Container max-width 1200px with 20px (mobile) / 32px (>=640px) side padding. Section padding 128px top and bottom on desktop, 88px below 768px. Card padding 28-32px, grid gaps 12-20px, header 64px tall."
radius: "Cards and panels 14px, CTA panel 20px, buttons and inputs 10px, integration tiles 12px, monograms and icon tiles 10px, task cards 10px, chips, pills and the billing toggle 999px."
---

# AI Agent Startup Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#07090D` — Page background, input background, text on Signal buttons.
- **Panel** `#0D1218` — Node cores, card base (as rgba(13,18,24,0.72) in the glass recipe), toggle track.
- **Raised** `#121922` — Icon tiles, monograms, toggle thumb, eyebrow pill fill, hover fills.
- **Line** `#1E2833` — 1px borders, dividers, base edge strokes, rail track.
- **Line Strong** `#2B3846` — Node strokes, button outlines, input borders, logo connector lines.
- **Text** `#E8EEF5` — Headlines, body emphasis, metric values, prices.
- **Muted** `#8A97A8` — Body copy, leads, nav links, node labels, queued chips.
- **Faint** `#566375` — Mono meta text, task ids, footnotes, column titles.
- **Signal** `#2EE6D6` — The one electric accent: active paths and their glow, running chips, primary buttons, eyebrows, checks, rail fill, highlighted nodes, sparklines, focus rings.
- **Signal Deep** `#14A99C` — Primary button hover and pressed state; end stop of the edge glow gradient.
- **Done** `#8B7CFF` — Second hue for completed work: done chips, finished-task dots, Reviewer badge, 'Save 20%' badge, end of the headline gradient.
- **Done Deep** `#5B4BDB` — Secondary glow behind the hero graph (as rgba(139,124,255,0.11)) and pressed state of violet elements.
- **Amber** `#F5B84B` — Only for the 'review' task status and form validation messages.

## Typography
- **Display: H1, H2, step titles, tier names, card titles, the wordmark** — Space Grotesk (OFL), weights 500/600. Self-host the font files.
- **Text: body, leads, nav, buttons, FAQ, form fields** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrows, node labels, task ids and chips, metric values, prices, billing lines, footnotes** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Container max-width 1200px with 20px (mobile) / 32px (>=640px) side padding. Section padding 128px top and bottom on desktop, 88px below 768px. Card padding 28-32px, grid gaps 12-20px, header 64px tall.
- Radius: Cards and panels 14px, CTA panel 20px, buttons and inputs 10px, integration tiles 12px, monograms and icon tiles 10px, task cards 10px, chips, pills and the billing toggle 999px.

## Motion
- Performance rule: animate only transform and opacity on HTML (plus SVG stroke-opacity, transform and path d inside the graph); target 60fps; never animate layout properties or box-shadow directly (use pseudo-element opacity).
- Lenis smooth scroll (duration 1.1, default easing) synced to ScrollTrigger through the GSAP ticker; not created under reduced motion.
- Hero graph loop on requestAnimationFrame with getPointAtLength, paused off screen and in hidden tabs.
- Pinned Plan/Act/Review section: ScrollTrigger pin, scrub 0.6, snap to step labels; node positions tweened and edge paths recomputed every frame.
- Entrance: fade up 24px, 0.7s power3.out, stagger 0.08s, once per element.
- Counters and sparkline draw on enter; pricing numbers tween on toggle; CSS keyframe glow sweep across the integrations wall every 6s.
- prefers-reduced-motion: no Lenis, no pin (stacked steps with static graphs), static hero graph with parked cards, no loops or pulses, values shown at final state.

## Imagery
No photographs or bitmaps. Everything visual is drawn in code: the node graphs, glow filters, dot grid, radial glows, sparklines, decorative CTA graph, logo mark and favicon, with Lucide icons for agent roles, features and UI glyphs. Integration tiles use two-letter monograms of invented tool names, never real logos.

## Tone
Calm, precise and technical. Short declarative sentences, concrete numbers and task names, no hype words, no exclamation marks. The interface feels like a well-instrumented control room: near-black, thin lines, mono labels, one glowing accent.

---
— Prompt by VibeFather · https://vibefather.ai/t/ai-agent-startup-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
