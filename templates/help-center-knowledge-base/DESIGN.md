---
name: "Help Center Knowledge Base"
colors:
  warm_white: "#FBFAF7"
  panel: "#FFFFFF"
  line: "#E7E4DC"
  ink: "#1E2126"
  soft_ink: "#5D6167"
  trust_blue: "#2C55E0"
  blue_deep: "#1F40B4"
  blue_mist: "#EDF1FD"
  good: "#3E8E5A"
  warn: "#C24141"
typography:
  text_and_display_h1_h2_body_ui_figtree_friendly_grotesque: { family: "Figtree", weights: [400, 500, 600] }
  mono_kbd_shortcut_chips_slugs_in_breadcrumbs: { family: "IBM Plex Mono", weights: [400] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; the reading column max 720px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 (home search heading) 34px Figtree 600; article H1 30px 600; H2 in articles 20px 600 with 28px top margin; body 16px / 1.7 Ink; summaries 15px / 1.65 Soft Ink; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; breadcrumbs 13px Soft Ink. Buttons: height 46px, Figtree 600 14px; primary Trust Blue fill with white text, secondary 1px Line border on Panel. Inputs: height 46px (search 56px), Panel fill, 1px Line border, focus Trust Blue border + 2px offset ring. Focus everywhere: 2px Trust Blue outline, 3px offset."
radius: "8px on cards, inputs, buttons, votes; 999px for chips."
---

# Help Center Knowledge Base — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FBFAF7` — Page background throughout.
- **Panel** `#FFFFFF` — Result cards, category cards, forms, votes.
- **Line** `#E7E4DC` — 1px hairlines everywhere; borders, table rows, dividers.
- **Ink** `#1E2126` — Headings, body, icons.
- **Soft Ink** `#5D6167` — Summaries, captions, breadcrumbs, eyebrows.
- **Trust Blue** `#2C55E0` — The one accent: links, focused input ring, active chips, primary buttons, category icons.
- **Blue Deep** `#1F40B4` — Hover and pressed states.
- **Blue Mist** `#EDF1FD` — Active chips, hovered result rows, vote selected fill.
- **Good** `#3E8E5A` — Success lines, the helpful vote, contact confirmation.
- **Warn** `#C24141` — Validation errors only.

## Typography
- **Text and display: H1, H2, body, UI — Figtree, friendly grotesque** — Figtree (OFL), weights 400/500/600. Self-host the font files.
- **Mono: kbd shortcut chips, slugs in breadcrumbs** — IBM Plex Mono (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; the reading column max 720px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 (home search heading) 34px Figtree 600; article H1 30px 600; H2 in articles 20px 600 with 28px top margin; body 16px / 1.7 Ink; summaries 15px / 1.65 Soft Ink; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; breadcrumbs 13px Soft Ink. Buttons: height 46px, Figtree 600 14px; primary Trust Blue fill with white text, secondary 1px Line border on Panel. Inputs: height 46px (search 56px), Panel fill, 1px Line border, focus Trust Blue border + 2px offset ring. Focus everywhere: 2px Trust Blue outline, 3px offset.
- Radius: 8px on cards, inputs, buttons, votes; 999px for chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Help centers should feel like a paper drawer: quiet.
- Home: the search card rises 12px on load (500ms); category cards reveal with a 60ms stagger as they enter.
- InstantResults: the results panel fades and drops 4px into place (160ms); the active arrow-key row fills Blue Mist with a 120ms ease; suggestion chips lift 1px on hover.
- Category page: article rows reveal with a 40ms stagger; row hover shifts the title Trust Blue and slides a 16px Line arrow in from the left (160ms).
- Article page: the prose column settles 8px on load; the TocRail's active dot slides between headings on scroll (200ms); section anchors offset for the sticky header.
- VoteWidget: button icons pop 1→1.15→1 on press (140ms); the thank-you line crossfades 200ms.
- Contact form: submit crossfades the panel to the confirmation (240ms); error text fades in under fields (160ms).
- Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no reveals, no sliding dots, no arrow slides; everything sits at rest and works. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs, no illustrations, no people, no avatars (article bylines stay uncredited — 'the [BRAND] team'): the design is typography, hairlines and lucide category icons on Blue Mist wells. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Tone
Service-desk warm: plain words, numbered steps, zero corporate hedging. One gentle joke per category at most.

---
— Prompt by VibeFather · https://vibefather.ai/t/help-center-knowledge-base · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
