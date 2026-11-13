---
name: "Jewelry Online Store"
colors:
  ivory: "#F4EFE6"
  porcelain: "#FFFDF8"
  sand: "#E8DFD1"
  ink: "#211C19"
  taupe: "#6E6258"
  oxblood: "#6F1D2C"
  oxblood_dark: "#50131F"
  antique_gold: "#A17C43"
  rule: "#D8CCBC"
typography:
  display_for_the_text_wordmark_h1_h3_product_names_large_prices_and_engraving_preview: { family: "Cormorant Garamond", weights: [400, 500, 600] }
  body_navigation_buttons_filters_forms_tables_captions_and_numeric_totals: { family: "Manrope", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base unit and a centered 1360px container with 48px desktop, 28px tablet, and 18px mobile side padding. Desktop sections have 104–128px vertical padding, tablet 80px, mobile 56–64px. Use a 12-column grid with 24px gutters. H1 is Cormorant Garamond 500 at clamp(48px, 6vw, 88px), line-height 0.96, letter-spacing -0.025em; H2 clamp(36px, 4vw, 58px), line-height 1.02; H3 26–32px; body Manrope 400 16px/1.75 with a 62ch maximum; lead 18px/1.7. Eyebrows are Manrope 700 11px uppercase with 0.2em tracking. Buttons are 50px high with 24px horizontal padding, Manrope 700 12px uppercase and 0.12em tracking. Inputs are at least 50px high with 16px text. All interactive elements receive a 2px Oxblood focus outline with 3px offset."
radius: "Nearly square editorial geometry: 2px on buttons, inputs, cards, images, drawer, and dialogs; 0px on large editorial bands; 999px only for swatches, count badges, and tiny status dots. Avoid floating rounded-card dashboards and heavy shadows."
---

# Jewelry Online Store — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ivory** `#F4EFE6` — Main page background and photographic negative-space complement.
- **Porcelain** `#FFFDF8` — Cards, forms, drawer, dialogs, and alternating sections.
- **Sand** `#E8DFD1` — Image wells, selected filter backgrounds, and subtle section bands.
- **Ink** `#211C19` — Headlines, body text, primary icons, and dark footer background.
- **Taupe** `#6E6258` — Secondary text, metadata, captions, and placeholder copy.
- **Oxblood** `#6F1D2C` — Primary buttons, active controls, focus rings, and small editorial accents.
- **Oxblood Dark** `#50131F` — Button hover and pressed states.
- **Antique Gold** `#A17C43` — Decorative rules, metal swatches, and non-text accents only.
- **Rule** `#D8CCBC` — Hairline borders, table lines, input borders, and separators.

## Typography
- **Display for the text wordmark, H1–H3, product names, large prices, and engraving preview** — Cormorant Garamond (OFL), weights 400/500/600. Self-host the font files.
- **Body, navigation, buttons, filters, forms, tables, captions, and numeric totals** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit and a centered 1360px container with 48px desktop, 28px tablet, and 18px mobile side padding. Desktop sections have 104–128px vertical padding, tablet 80px, mobile 56–64px. Use a 12-column grid with 24px gutters. H1 is Cormorant Garamond 500 at clamp(48px, 6vw, 88px), line-height 0.96, letter-spacing -0.025em; H2 clamp(36px, 4vw, 58px), line-height 1.02; H3 26–32px; body Manrope 400 16px/1.75 with a 62ch maximum; lead 18px/1.7. Eyebrows are Manrope 700 11px uppercase with 0.2em tracking. Buttons are 50px high with 24px horizontal padding, Manrope 700 12px uppercase and 0.12em tracking. Inputs are at least 50px high with 16px text. All interactive elements receive a 2px Oxblood focus outline with 3px offset.
- Radius: Nearly square editorial geometry: 2px on buttons, inputs, cards, images, drawer, and dialogs; 0px on large editorial bands; 999px only for swatches, count badges, and tiny status dots. Avoid floating rounded-card dashboards and heavy shadows.

## Motion
- Use --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Reveal major blocks once at 15% visibility from opacity 0 and translateY(16px) over 650ms, with 70ms sibling stagger; use Motion whileInView and viewport once.
- The hero image enters at scale 1.035 and settles to 1 over 1600ms; headline lines rise 18px with 100ms stagger. Keep the headline readable immediately and never animate letter spacing.
- Product images scale to 1.025 over 450ms on hover while a fine Oxblood underline draws beneath the product name. Filter changes use Motion layout and AnimatePresence over 250–350ms; the result count crossfades without delaying new results.
- Cart overlay fades to 38% over 240ms and the drawer slides from x 100% to 0 over 360ms. Quantity and total changes crossfade over 180ms. Ring-size and lightbox dialogs fade and scale from 0.985 to 1 over 220ms; trap focus and close on Escape.
- Gallery changes crossfade over 220ms, accordion heights animate over 260ms, checkout steps crossfade with a 12px horizontal shift over 280ms, and the confirmation check draws once over 450ms.
- For prefers-reduced-motion, render all content at rest, remove image scaling, reveals, layout animation, sliding, and check drawing; preserve immediate state changes and color-only hover feedback.

## Imagery
Use six photorealistic luxury editorial studio photographs generated specifically for this template. Every frame shares warm ivory travertine, deep oxblood silk, antique-gold highlights, soft directional light from upper left, delicate long shadows, and medium-format macro clarity. Jewelry is generic and unbranded: no signatures, recognizable trademarked designs, readable stamps, text, logos, people, faces, or hands. Use object-fit cover with intentional object-position, 2px corners, and no decorative shadows. The home hero must be a large photographic scene, never type alone. Icons come only from lucide-react at 1.5px stroke. Draw the favicon, swatches, focus states, progress line, ring-size table, gift-wrap diagram, and confirmation check in code.

## Tone
Intimate, precise, and assured. Use concise sensory language and concrete product facts rather than superlatives, urgency, or generic luxury clichés.

---
— Prompt by VibeFather · https://vibefather.ai/t/jewelry-online-store · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
