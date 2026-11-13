---
name: "Management Consulting Firm Website"
colors:
  offwhite: "#FBFAF6"
  mistpaper: "#F1EFE8"
  inknavy: "#1C2B36"
  steel: "#3E6680"
  steel_mist: "#E4EBF0"
  slate: "#5F6E78"
  rule: "#DDD9CF"
  brassline: "#A98A54"
typography:
  display_h1_h2_practice_titles_case_names_partner_names_the_wordmark_spectral_serif_boardroom_sharp: { family: "Spectral", weights: [500, 600] }
  text_and_ui_body_labels_buttons_forms_captions_tabular_numerals_for_metrics: { family: "Inter", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 84px under 1024px, 64px under 640px — a memo's whitespace. Type scale: H1 clamp(44px, 6.4vw, 84px) Spectral 500, line-height 1.04; H2 clamp(30px, 4vw, 50px) Spectral 500; practice titles 22px Spectral 600; metric figures Spectral 600 40px Steel tabular; lead Inter 400 17.5px / 1.65 Inknavy at 90%; body 15.5px / 1.7 (max-width 64ch); section labels Inter 700 11px uppercase letter-spacing 0.22em Slate; caption 13px Slate. Buttons: height 50px, Inter 700 14px. Primary: Steel fill, Offwhite text. Secondary: 1px Inknavy border. Inputs: height 50px, 1px Rule border, Offwhite fill, focus Steel border. Focus ring everywhere: 2px Steel outline with 3px offset."
radius: "2px on cards, buttons, inputs and photos — memo corners. 999px only for pills and the area-select chips."
---

# Management Consulting Firm Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Offwhite** `#FBFAF6` — Page background throughout.
- **Mistpaper** `#F1EFE8` — Alternate section background (Insights, Trust), hover fill.
- **Inknavy** `#1C2B36` — Headlines and body ink, footer background, hero overlay.
- **Steel** `#3E6680` — Primary: accents, buttons, selected states, metric figures, focus ring.
- **Steel Mist** `#E4EBF0` — Selected chips, card washes.
- **Slate** `#5F6E78` — Secondary text, captions, section labels.
- **Rule** `#DDD9CF` — 1px hairlines, card borders, input borders.
- **Brassline** `#A98A54` — Quiet second color: practice numbers, case tick rules, small-caps flourishes.

## Typography
- **Display: H1, H2, practice titles, case names, partner names, the wordmark — Spectral serif, boardroom sharp** — Spectral (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, labels, buttons, forms, captions; tabular numerals for metrics** — Inter (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 84px under 1024px, 64px under 640px — a memo's whitespace. Type scale: H1 clamp(44px, 6.4vw, 84px) Spectral 500, line-height 1.04; H2 clamp(30px, 4vw, 50px) Spectral 500; practice titles 22px Spectral 600; metric figures Spectral 600 40px Steel tabular; lead Inter 400 17.5px / 1.65 Inknavy at 90%; body 15.5px / 1.7 (max-width 64ch); section labels Inter 700 11px uppercase letter-spacing 0.22em Slate; caption 13px Slate. Buttons: height 50px, Inter 700 14px. Primary: Steel fill, Offwhite text. Secondary: 1px Inknavy border. Inputs: height 50px, 1px Rule border, Offwhite fill, focus Steel border. Focus ring everywhere: 2px Steel outline with 3px offset.
- Radius: 2px on cards, buttons, inputs and photos — memo corners. 999px only for pills and the area-select chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Measured, partner-paced.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 700ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the war-room photo darkens slightly and settles; the H1 lines rise 16px with 130ms stagger; a 1px Brassline rule draws under the specialty word.
- Practice cards: the brass numbers count 01–05 in sequence once; hover slides a 2px Steel rule from the left.
- Insights grid: cards reveal with a 4px rise; hover underlines the title with a drawn rule and the read-time ticks Brassline.
- Cases: metric figures count up once on view (600ms); the (sample data) caption never animates.
- Partners: portraits scale 1.03 on hover and the one-liner crossfades in.
- Engagement: area chips fill Steel Mist→Steel on select; invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn Steel 'RECEIVED' memo-stamp scaling in, 'Thank you, [NAME].' and 'A partner replies within two business days — with questions, not a deck.'
- Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no counts, draws, scales or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography, all four made for this template in one consistent style: overcast-window boardrooms, ink-navy world, senior-calm. The hero shows a partner war-room session (AI-generated fictional people mid-discussion around a document table — no readable text); partner portraits are AI-generated fictional consultants in the same light; one detail photo shows a marked-up document (abstract markings, no readable words). No client logos anywhere, no readable text. Every photo uses object-fit cover with the object-position given under Assets, 2px corners, no shadow. Captions in Inter 13px Slate. Drawn in code: the favicon, practice numbers, the RECEIVED stamp, chips and metric rows. Icons: lucide-react only, stroke width 1.75.

## Tone
Partner-voice: short declaratives, real trade-offs, occasional dry wit. Never 'synergies'. Sample labels on every number.

---
— Prompt by VibeFather · https://vibefather.ai/t/management-consulting-firm-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
