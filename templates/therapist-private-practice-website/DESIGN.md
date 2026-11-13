---
name: "Therapist Private Practice Website"
colors:
  sand: "#F6F1E7"
  warmhaze: "#EFE8DA"
  card: "#FDFBF6"
  warmink: "#3B352C"
  taupe: "#7A7163"
  sage_soft: "#A9B49C"
  sage_deep: "#6F7D62"
  rose_quiet: "#C99A94"
  rose_deep: "#B07D76"
  rule: "#E2DAC8"
typography:
  display_h1_h2_h3_the_therapist_name_fee_figure_the_wordmark_lora_warm_and_human: { family: "Lora", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_form_fields_captions_tabular_numerals_for_the_fee: { family: "Nunito Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1040px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow with two-column hero and fees. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px — the most generous spacing of any page this practice has seen. Type scale: H1 clamp(38px, 5.6vw, 64px) Lora 500, line-height 1.08; H2 clamp(26px, 3.6vw, 42px) Lora 500; H3 20px Lora 600; italic phrases in headings use Lora 500 italic (marked *asterisks*, rendered <em>); lead Nunito 400 17.5px / 1.7 Warmink at 90%; body 16px / 1.8 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.18em Taupe; caption 13px Taupe. Buttons: height 50px, Nunito 700 14px. Primary (contact CTA): Sage Deep fill, Card text. Quiet secondary: 1px Warmink/30% border, Warmink text. Inputs: height 50px, 1px Rule border, Card fill, focus Sage Deep border. Focus ring everywhere: 2px Sage Deep outline with 3px offset."
radius: "18px on cards, buttons, inputs, photos and the contact panel — soft corners, nothing sharp on this page. 999px only for pills and dots."
---

# Therapist Private Practice Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sand** `#F6F1E7` — Page background throughout — warm, quiet.
- **Warmhaze** `#EFE8DA` — Alternate section background (Areas, First session), hover fill, chips.
- **Card** `#FDFBF6` — Area cards, fee rows, the contact panel, sent note.
- **Warmink** `#3B352C` — Headlines and body text, icon color.
- **Taupe** `#7A7163` — Secondary text, captions, eyebrows, fee labels.
- **Sage Soft** `#A9B49C` — Quiet second color: step numbers, area glyph fills, gentle rules.
- **Sage Deep** `#6F7D62` — Primary buttons, selected states, focus ring, the sent-note check.
- **Rose Quiet** `#C99A94` — The one warm accent: the contact CTA, italic emphasis marks, the rose detail in photos' captions, hover ticks.
- **Rose Deep** `#B07D76` — Rose hover and pressed.
- **Rule** `#E2DAC8` — 1px hairlines, card borders, input borders, dividers.

## Typography
- **Display: H1, H2, H3, the therapist name, fee figure, the wordmark — Lora, warm and human** — Lora (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals for the fee** — Nunito Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1040px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow with two-column hero and fees. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px — the most generous spacing of any page this practice has seen. Type scale: H1 clamp(38px, 5.6vw, 64px) Lora 500, line-height 1.08; H2 clamp(26px, 3.6vw, 42px) Lora 500; H3 20px Lora 600; italic phrases in headings use Lora 500 italic (marked *asterisks*, rendered <em>); lead Nunito 400 17.5px / 1.7 Warmink at 90%; body 16px / 1.8 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.18em Taupe; caption 13px Taupe. Buttons: height 50px, Nunito 700 14px. Primary (contact CTA): Sage Deep fill, Card text. Quiet secondary: 1px Warmink/30% border, Warmink text. Inputs: height 50px, 1px Rule border, Card fill, focus Sage Deep border. Focus ring everywhere: 2px Sage Deep outline with 3px offset.
- Radius: 18px on cards, buttons, inputs, photos and the contact panel — soft corners, nothing sharp on this page. 999px only for pills and dots.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. The slowest, gentlest motion of any D-group page — 900ms reveals, nothing bounces, nothing loops.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(10px) and settle over 900ms --ease-out when 20% visible (Motion whileInView, viewport once). Siblings stagger 100ms.
- Hero: the room photo fades in from 96% opacity over 1400ms (no scale — nothing lurches); the H1 lines rise 14px with 180ms stagger; the italic emphasis word draws a 2px Rose Quiet underline once.
- Area cards: hover lifts 2px only; the small glyph (a leaf, a bridge, a knot — drawn SVGs) fills Sage Soft on hover. No pulses anywhere on this page.
- First-session steps: the connecting hairline draws downward as the section scrolls (scaleY); step numbers fade in sequentially, 80ms apart, once.
- Fee rows: the fee figure counts once on reveal (600ms, gentle); the sliding-scale line fades in last.
- Contact form: invalid submit shakes 3px once (the gentlest shake) with a kind inline line ('An email address helps the reply find you'); sending swaps to SentNote (360ms --ease-io) — a drawn Sage Deep check scaling in softly, 'Thank you, [NAME].' 'A reply usually comes within two days — no newsletters, no follow-up sequence.' and 'Write again' clearing gently. Persisted in localStorage.
- Links: .link-draw grows a 1px currentColor underline over 320ms on hover and focus-visible.
- prefers-reduced-motion: reduce — everything renders at rest (no reveals, no draws, no count); color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Calm real photography, all four made for this template in one consistent style: soft natural light, warm sand and sage tones, empty rooms — an armchair by a window, tea things, plants, a hallway. Never a person (no faces, no hands, no silhouettes); no readable text. Every photo uses object-fit cover with the object-position given under Assets, 18px corners, no shadow; photos on Sand get a 1px Rule outline. Captions in Nunito 13px Taupe. Drawn in code: the area glyphs (leaf, bridge, knot, wave, stone, path), step numbers, the sent-check, chips and the favicon. Icons: lucide-react only, stroke width 1.5, used sparingly.

## Tone
Warm, unhurried, first-person. Plain words for hard things; no clinical vocabulary without a plain-language companion; no cheerfulness about pain.

---
— Prompt by VibeFather · https://vibefather.ai/t/therapist-private-practice-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
