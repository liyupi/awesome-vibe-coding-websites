---
name: "Construction Company Website"
colors:
  scaffold_white: "#F7F8F9"
  mist: "#EDF0F2"
  card: "#FFFFFF"
  blueprint: "#1F3A5F"
  blueprint_deep: "#162B47"
  blueprint_mist: "#E4EAF2"
  ink: "#23272C"
  slate: "#5B6670"
  safety: "#F26B21"
  safety_deep: "#D5560E"
  rule: "#D9DEE3"
  good: "#2F855A"
typography:
  display_h1_h2_service_names_project_names_from_prices_the_wordmark_barlow_condensed_sturdy_and_workmanlike: { family: "Barlow Condensed", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_prices_and_spans: { family: "Barlow", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(44px, 6.6vw, 84px) Barlow Condensed 600 uppercase, line-height 0.98; H2 clamp(30px, 4vw, 50px) Condensed 600 uppercase; service names Condensed 600 22px; from-prices Condensed 600 24px Safety tabular; lead Barlow 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Barlow 700 12px uppercase letter-spacing 0.18em Slate; caption 13px Slate. Buttons: height 52px, Barlow 700 14px uppercase letter-spacing 0.06em. Primary: Blueprint fill, Card text. Quote CTA: Safety fill, Card text. Secondary: 1px Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Blueprint border. Focus ring everywhere: 2px Blueprint outline with 3px offset."
radius: "4px on cards, buttons, inputs, chips and photos — site-plan corners. 999px only for pills and filter chips."
---

# Construction Company Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Scaffold White** `#F7F8F9` — Page background throughout.
- **Mist** `#EDF0F2` — Alternate section background (Services, Process), chips, hover fill.
- **Card** `#FFFFFF` — Project cards, the quote panel, sent state.
- **Blueprint** `#1F3A5F` — Primary: headlines' ink, primary buttons, selected chips, step numbers, focus ring.
- **Blueprint Deep** `#162B47` — Hover and pressed, footer background.
- **Blueprint Mist** `#E4EAF2` — Selected chip fills, icon wells, dimension ticks.
- **Ink** `#23272C` — Body text, icon color.
- **Slate** `#5B6670` — Secondary text, captions, eyebrows, unavailable states.
- **Safety** `#F26B21` — The one accent: the quote CTA, from-prices, filter active, dimension numbers, focus-visible extras.
- **Safety Deep** `#D5560E` — CTA hover and pressed.
- **Rule** `#D9DEE3` — 1px hairlines, card borders, input borders, blueprint grid lines.
- **Good** `#2F855A` — Credential ticks, sent check, warranty note.

## Typography
- **Display: H1, H2, service names, project names, from-prices, the wordmark — Barlow Condensed, sturdy and workmanlike** — Barlow Condensed (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for prices and spans** — Barlow (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(44px, 6.6vw, 84px) Barlow Condensed 600 uppercase, line-height 0.98; H2 clamp(30px, 4vw, 50px) Condensed 600 uppercase; service names Condensed 600 22px; from-prices Condensed 600 24px Safety tabular; lead Barlow 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Barlow 700 12px uppercase letter-spacing 0.18em Slate; caption 13px Slate. Buttons: height 52px, Barlow 700 14px uppercase letter-spacing 0.06em. Primary: Blueprint fill, Card text. Quote CTA: Safety fill, Card text. Secondary: 1px Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Blueprint border. Focus ring everywhere: 2px Blueprint outline with 3px offset.
- Radius: 4px on cards, buttons, inputs, chips and photos — site-plan corners. 999px only for pills and filter chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and gallery shuffles; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Level and sure.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 650ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 65ms.
- Hero: the project photo scales 1.03→1.0 over 2000ms; the H1 rises 14px; a dimension-line rule draws under the eyebrow once with Safety tick numbers.
- Service cards: hover slides a 2px Blueprint rule from the left and the from-price ticks up 2px.
- Gallery filtering: cards use Motion layout popLayout (200ms out / 380ms glide); the live count crossfades; the empty state reads 'No projects in that combination yet — the portfolio grows weekly.'
- Project cards: hover lifts 3px and the category chip fills Blueprint.
- Process: the connector line draws downward as the section scrolls; step numbers pop in sequence.
- Quote form: chips fill Blueprint Mist→Blueprint on select (150ms); invalid submit shakes 4px with inline labels; sending swaps to Sent (300ms --ease-io) — a drawn Safety 'ON THE BOARD' job-ticket stamp rotating in -6deg→-2deg, 'Got it, [NAME].' 'We call within two business days to schedule the walkthrough.' selection echo, 'Edit the request' pre-filled. Persisted in localStorage.
- Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, draws, shuffles or stamps; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography, all six made for this template in one consistent style: crisp daylight, finished craftsmanship and honest jobsite detail — generic unbranded tools and materials, no logos. The site-lead portrait is an AI-generated fictional person (hard hat under arm, plans in hand) — a placeholder a real firm swaps for its own lead's photo. No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 4px corners, no shadow. Captions in Barlow 13px Slate. Drawn in code: the favicon, dimension-line dividers, the job-ticket stamp, chips and the filter dots. Icons: lucide-react only, stroke width 2.

## Tone
Straight builder-talk: short sentences, exact numbers, pride without shouting. One joke about dust.

---
— Prompt by VibeFather · https://vibefather.ai/t/construction-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
