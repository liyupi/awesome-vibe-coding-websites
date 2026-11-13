---
name: "Personal Chef Service Website"
colors:
  ember_black: "#171210"
  raised_ember: "#211814"
  candle_amber: "#D9A05B"
  cream: "#F4ECDD"
  taupe: "#A2937F"
  hairline_ember: "#33291F"
typography:
  display_chef_name_headlines_menu_names_quote: { family: "Cormorant Garamond", weights: [500, 600] }
  body_paragraphs_courses_forms_buttons: { family: "Karla", weights: [300, 400, 500, 600] }
spacing: "8px base grid. Shell max-width 1080px with 32px desktop and 20px mobile side padding. Header 72px. Sections 104px vertical padding on desktop, 72px on mobile. Course lists at 14px row spacing with hairline dividers; prose max 58 characters per line."
radius: "2px everywhere — near-square, fine-dining restraint: cards, buttons, inputs, photos. The only curves are the slider thumb, the round numeral dots on the timeline, and the amber keyline offset frames on photographs."
---

# Personal Chef Service Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ember black** `#171210` — Page ground
- **Raised ember** `#211814` — Cards, calculator panel, form panel
- **Candle amber** `#D9A05B` — The one accent: rules, links, slider, tier rings, key numerals
- **Cream** `#F4ECDD` — Primary text
- **Taupe** `#A2937F` — Secondary text, metadata, course descriptions
- **Hairline ember** `#33291F` — Dividers, card borders, timeline track

## Typography
- **Display: chef name, headlines, menu names, quote** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Body: paragraphs, courses, forms, buttons** — Karla (OFL), weights 300/400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Shell max-width 1080px with 32px desktop and 20px mobile side padding. Header 72px. Sections 104px vertical padding on desktop, 72px on mobile. Course lists at 14px row spacing with hairline dividers; prose max 58 characters per line.
- Radius: 2px everywhere — near-square, fine-dining restraint: cards, buttons, inputs, photos. The only curves are the slider thumb, the round numeral dots on the timeline, and the amber keyline offset frames on photographs.

## Motion
- Calculator updates crossfade the per-guest rate, supplement line and total over 200ms whenever the slider or tier changes; the slider thumb carries a soft amber focus ring.
- The four-step timeline draws its horizontal amber track left-to-right over 800ms on first reveal, numerals fading in sequence at 120ms intervals.
- Photographs settle from scale 1.02 over 600ms as their sections reveal; sections rise 14px with a 480ms fade, staggered 60ms — slow and quiet, nothing bouncy.
- The inquiry success panel crossfades in over 240ms with a Check icon.
- Under prefers-reduced-motion every animation becomes an instant state change; the calculator, slider and form stay fully functional.

## Imagery
Six photographs from one candlelit shoot: near-black warm shadows, a single candlelight key, deep amber highlights, painterly chiaroscuro, 50mm macro lens, shallow depth of field, dark vignette. Subjects are plated dishes, table settings, kitchen details, and hands at work cropped at the wrist — no identifiable faces, no readable text or logos anywhere in frame.

## Tone
Quiet confidence — a chef who lets the food talk. Short warm sentences, no exclamation marks, prices stated plainly, the demo calculator honest about being sample rates. Intimate but never precious.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-chef-service-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
