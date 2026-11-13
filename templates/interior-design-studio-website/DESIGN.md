---
name: "Interior Design Studio Website"
colors:
  bone: "#F4F0E8"
  greige: "#EAE4D9"
  card: "#FCFAF6"
  espresso: "#2E2721"
  umber: "#655A4E"
  bronze: "#A87C4F"
  bronze_deep: "#8C663F"
  sage_gray: "#8B9084"
  rule: "#DDD5C7"
  night: "#221D18"
typography:
  display_h1_h2_h3_project_names_step_titles_the_wordmark: { family: "Fraunces", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_form_fields_captions_tabular_numerals_where_numbers_appear: { family: "Albert Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.6vw, 88px) Fraunces 500, line-height 1.02; H2 clamp(30px, 4vw, 52px) Fraunces 500; H3 22px Fraunces 600; italic phrases in headings use Fraunces italic (marked with *asterisks*, rendered <em>); lead Albert Sans 400 18px / 1.7 Espresso at 90%; body 16px / 1.75 (max-width 64ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.18em Umber with a 24px x 1px Bronze line; caption 13px Umber. Buttons: height 52px, Albert Sans 700 14px. Primary: Bronze fill, Card text. Secondary: 1px Espresso/40% border, Espresso text. Inputs: height 50px, 1px Rule border, Card fill, focus Bronze border. Focus ring everywhere: 2px Bronze outline with 3px offset."
radius: "6px on cards, buttons, inputs, pills and photos — architectural. 999px only for pills and the slider grip."
---

# Interior Design Studio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Bone** `#F4F0E8` — Page background throughout.
- **Greige** `#EAE4D9` — Alternate section background (Services, Gallery), hover fill.
- **Card** `#FCFAF6` — Service cards, the consult panel, sent card.
- **Espresso** `#2E2721` — Headlines, body text, icon color.
- **Umber** `#655A4E` — Secondary text, captions, eyebrows, step numbers.
- **Bronze** `#A87C4F` — The one accent: slider handles and lines, primary buttons, selected pills, focus ring, swatch frame.
- **Bronze Deep** `#8C663F` — Hover and pressed states, the timeline's filled rule.
- **Sage Gray** `#8B9084` — Quiet second color: 'before' labels, closed states, captions on photos.
- **Rule** `#DDD5C7` — 1px hairlines, card borders, input borders, gallery dividers.
- **Night** `#221D18` — Footer, photo overlays (as rgba(34,29,24,x)).

## Typography
- **Display: H1, H2, H3, project names, step titles, the wordmark** — Fraunces (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals where numbers appear** — Albert Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.6vw, 88px) Fraunces 500, line-height 1.02; H2 clamp(30px, 4vw, 52px) Fraunces 500; H3 22px Fraunces 600; italic phrases in headings use Fraunces italic (marked with *asterisks*, rendered <em>); lead Albert Sans 400 18px / 1.7 Espresso at 90%; body 16px / 1.75 (max-width 64ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.18em Umber with a 24px x 1px Bronze line; caption 13px Umber. Buttons: height 52px, Albert Sans 700 14px. Primary: Bronze fill, Card text. Secondary: 1px Espresso/40% border, Espresso text. Inputs: height 50px, 1px Rule border, Card fill, focus Bronze border. Focus ring everywhere: 2px Bronze outline with 3px offset.
- Radius: 6px on cards, buttons, inputs, pills and photos — architectural. 999px only for pills and the slider grip.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for sliders' snap and form swap. Unhurried — interiors reward patience.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and settle over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 90ms.
- Hero: the room photo scales 1.04→1.0 over 2600ms; the headline rises 20px with 140ms stagger; a thin Bronze rule under the eyebrow draws outward.
- Before/after: the handle is draggable with 1:1 pointer tracking (no easing while dragging — honesty); on release it stays exactly where left; keyboard steps animate 120ms --ease-io; a small 'drag' hint label beside the grip fades out after the first interaction. The slider line carries a soft Night/20% shadow.
- Process timeline: a 1px Rule base with a Bronze fill that grows as the section scrolls (scaleY, useScroll on the list); each step's number fills Bronze as it reaches 60% view; rows settle with the standard reveal.
- Gallery: photos scale 1.02 on hover with a caption bar rising from the bottom edge; clicking opens the Lightbox (Night overlay at 85%, image max 84vh, caption in Bone, arrows + Escape navigate, focus returns to the invoking card) with a 260ms fade.
- Materials strip: swatches stagger in 60ms each, drawn as CSS blocks with a Bronze hairline frame; hovering a swatch lifts it 3px and shows its label.
- Consult form: budget pills fill Greige→Bronze on select (150ms); invalid submit shakes 4px once with inline hints; sending swaps the panel to the SentCard (300ms --ease-io) with a drawn Bronze envelope flap closing once.
- Links: .link-draw grows a 1px currentColor underline over 300ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no hero scale, no staggered reveals (appear), no snap animation (keys jump), no flap draw; color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Warm real photography, all six made for this template in one consistent style: soft natural light, greige-bone palette with bronze accents and one sage plant, no people (no faces, no hands). The two before/after pairs share their camera angle exactly: 'before' rooms dated and empty (old wallpaper, bare bulbs, worn carpet), 'after' rooms styled and warm — matched compositions so the reveal reads true. Gallery images are finished rooms from varied angles. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 6px corners, no shadow; photos on Bone get a 1px Rule outline. Captions in Albert Sans 13px Umber. Drawn in code: the slider handle and line, swatch blocks, step numbers, the envelope stamp and the favicon. Icons: lucide-react only, stroke width 1.5.

## Tone
Warm and exact, like the studio's own design briefs: specific materials and room names, no 'curated luxe sanctuary', one dry joke about feature walls.

---
— Prompt by VibeFather · https://vibefather.ai/t/interior-design-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
