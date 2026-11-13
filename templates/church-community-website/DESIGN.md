---
name: "Church Community Website"
colors:
  warm_white: "#FAF7F0"
  stonepaper: "#F0EBE0"
  card: "#FFFFFF"
  teal: "#2F6B5E"
  teal_deep: "#224F45"
  teal_mist: "#E2EEEA"
  ink: "#2C2A24"
  slate: "#6B675D"
  wheat: "#C9A54E"
  rule: "#E4DDCE"
typography:
  display_h1_h2_h3_sermon_titles_group_names_the_wordmark_sorts_mill_goudy_gentle_and_bookish: { family: "Sorts Mill Goudy", weights: [400] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_times: { family: "Source Sans 3", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(42px, 6vw, 72px) Sorts Mill Goudy 400, line-height 1.08; H2 clamp(28px, 3.8vw, 44px) Goudy 400; H3 21px Goudy 400; sermon titles Goudy 19px; lead Source Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.15em Slate; caption 13px Slate. Buttons: height 50px, Source Sans 700 14px. Primary: Teal fill, Card text. Secondary: 1px Teal border. Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset."
radius: "12px on cards, buttons, inputs, chips and photos. 999px only for pills, the open dot and filter chips."
---

# Church Community Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FAF7F0` — Page background throughout.
- **Stonepaper** `#F0EBE0` — Alternate section background (Events, Groups), chips, hover fill.
- **Card** `#FFFFFF` — Sermon rows, event cards, the hello panel.
- **Teal** `#2F6B5E` — Primary: headlines' accents, buttons, selected chips, focus ring, series dots.
- **Teal Deep** `#224F45` — Hover, footer background.
- **Teal Mist** `#E2EEEA` — Selected chip fills, icon wells.
- **Ink** `#2C2A24` — Headlines and body text, icon color.
- **Slate** `#6B675D` — Secondary text, captions, eyebrows, closed states.
- **Wheat** `#C9A54E` — Quiet second color: event weekday squares, group dots, small caps flourishes.
- **Rule** `#E4DDCE` — 1px hairlines, card borders, input borders, dividers.

## Typography
- **Display: H1, H2, H3, sermon titles, group names, the wordmark — Sorts Mill Goudy, gentle and bookish** — Sorts Mill Goudy (OFL), weights 400. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for times** — Source Sans 3 (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(42px, 6vw, 72px) Sorts Mill Goudy 400, line-height 1.08; H2 clamp(28px, 3.8vw, 44px) Goudy 400; H3 21px Goudy 400; sermon titles Goudy 19px; lead Source Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.15em Slate; caption 13px Slate. Buttons: height 50px, Source Sans 700 14px. Primary: Teal fill, Card text. Secondary: 1px Teal border. Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset.
- Radius: 12px on cards, buttons, inputs, chips and photos. 999px only for pills, the open dot and filter chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and filters; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Calm and unhurried — like walking in early.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 80ms.
- Hero: the sanctuary photo brightens 4% while scaling 1.03→1.0 over 2600ms; the H1 rises; a thin wheat rule draws under the welcome word once.
- Services: the open-now dot pulses gently while open (1800ms, off under reduced motion); the today row's teal rule slides in once.
- Sermon filters: chips fill Teal Mist→Teal on select (150ms); rows reshuffle with a popLayout fade (200ms out / 380ms glide); a live count crossfades; the empty filtered archive shows 'Nothing in that combination yet — sermons arrive weekly.'
- Event cards: the wheat weekday square brightens on hover; cards lift 3px.
- Groups: dots pop in sequence when the section enters; hover lifts 2px.
- Hello form: invalid submit shakes 4px with kind inline labels; sending swaps to SaidHello (320ms --ease-io) with a drawn wheat 'HELLO, FRIEND' seal scaling in gently, 'Thanks, [NAME].' '[PASTOR] replies personally — usually within a day.' and 'Say more' pre-filled. Persisted in localStorage.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no pulses, draws, shuffles or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Welcoming light real photography, all four made for this template in one consistent style: morning sanctuary light, brick and warm wood, gathering spaces and tables set for community meals — architectural and human-adjacent, never faces or liturgical-specific symbols. The pastor portrait is an AI-generated fictional person (a warm, mid-forties woman in a mustard cardigan) — a placeholder a real church swaps for its own pastor photo. No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 12px corners, no shadow. Captions in Source Sans 13px Slate. Drawn in code: the favicon, series dots, weekday squares, the seal and chips. Icons: lucide-react only, stroke width 1.75.

## Tone
Warm, plain, hospitable. Short sentences, no insider language without a gloss, gentle humor about parking. Faith expressed in welcome, not vocabulary.

---
— Prompt by VibeFather · https://vibefather.ai/t/church-community-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
