---
name: "Generative Art Studio Website"
colors:
  ink_violet: "#160A33"
  deep_violet: "#2A1A5E"
  hot_coral: "#FF4D3D"
  acid_yellow: "#E6FF2E"
  electric_teal: "#14E0C8"
  ultramarine: "#1B10A8"
  moon: "#F4EFFF"
  lilac: "#C4B9E6"
  panel: "rgba(22, 10, 51, 0.88)"
typography:
  display_h1_h2_wordmark_prices_in_the_configurator_css_family_syne_variable_h1_clamp_44px_7_4vw_112px_line_height_0_98_letter_spacing_0_02em_h2_clamp_32px_4_4vw_64px_line_height_1_02: { family: "Syne", weights: [700, 800] }
  text_paragraphs_buttons_faq_css_family_instrument_sans_variable_body_17px_line_height_1_55_16px_on_phones_buttons_15px_weight_600: { family: "Instrument Sans", weights: [400, 500, 600] }
  mono_instrument_panels_seeds_parameter_tables_captions_nav_css_family_martian_mono_variable_11px_on_desktop_12px_on_phones_uppercase_labels_with_letter_spacing_0_08em_line_height_1_5: { family: "Martian Mono", weights: [300, 400, 500] }
spacing: "8 px base. 12-column grid, max width 1360 px, 24 px gutters, 16 px side gutter on phones. Sections are min-height 100svh on desktop, auto with 72 px vertical padding on phones. Panels have 24 px padding (16 px on phones). Art always bleeds to the viewport edge; only content sits on the grid."
radius: "0 on art, frames, cards and panels. 2 px on buttons, inputs and chips. Panels get a 1 px border of rgba(244, 239, 255, 0.22). No shadows on UI; only framed prints cast a shadow on the wall."
---

# Generative Art Studio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink Violet** `#160A33` — Site base, panel backing, text on bright buttons, footer
- **Deep Violet** `#2A1A5E` — Raised surfaces, input fields, chip backgrounds, default wall color
- **Hot Coral** `#FF4D3D` — Secondary buttons (Ink Violet text), large display accents, cart count badge. Never small text on panels
- **Acid Yellow** `#E6FF2E` — Primary buttons (Ink Violet text), highlighted H1 line, focus rings, active states, progress bar
- **Electric Teal** `#14E0C8` — Mono data values in panels, links, selected chip outline
- **Ultramarine** `#1B10A8` — Alternate raised surface in the gallery overlay and cart header
- **Moon** `#F4EFFF` — Primary text on violet, print mat color
- **Lilac** `#C4B9E6` — Secondary text and mono labels on violet
- **Panel** `rgba(22, 10, 51, 0.88)` — Backing for all text over art, with backdrop-filter: blur(14px). Hero headline lines use solid #160A33

## Typography
- **Display: H1, H2, wordmark, prices in the configurator. CSS family 'Syne Variable'. H1 clamp(44px, 7.4vw, 112px) line-height 0.98 letter-spacing -0.02em; H2 clamp(32px, 4.4vw, 64px) line-height 1.02** — Syne (OFL), weights 700/800. Self-host the font files.
- **Text: paragraphs, buttons, FAQ. CSS family 'Instrument Sans Variable'. Body 17px line-height 1.55, 16px on phones. Buttons 15px weight 600** — Instrument Sans (OFL), weights 400/500/600. Self-host the font files.
- **Mono: instrument panels, seeds, parameter tables, captions, nav. CSS family 'Martian Mono Variable'. 11px on desktop, 12px on phones, uppercase labels with letter-spacing 0.08em, line-height 1.5** — Martian Mono (OFL), weights 300/400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8 px base. 12-column grid, max width 1360 px, 24 px gutters, 16 px side gutter on phones. Sections are min-height 100svh on desktop, auto with 72 px vertical padding on phones. Panels have 24 px padding (16 px on phones). Art always bleeds to the viewport edge; only content sits on the grid.
- Radius: 0 on art, frames, cards and panels. 2 px on buttons, inputs and chips. Panels get a 1 px border of rgba(244, 239, 255, 0.22). No shadows on UI; only framed prints cast a shadow on the wall.

## Motion
- Art is the main motion. On load, Regenerate and scroll entry, each canvas fills with its palette background and draws progressively: hero complete in about 2.4 s, others in about 2-3 s.
- Instrument panel values change instantly on Regenerate. The draw percent counts up and a 2 px Acid Yellow progress bar fills, then the render time in ms appears.
- Text panels rise 16 px and fade in over 400 ms ease-out when they enter the viewport, staggered by 80 ms. All are forced visible 2500 ms after route load so nothing stays hidden.
- Route change: a 180 ms opacity fade on the main content. The cart drawer slides in over 260 ms. The piece overlay fades in over 200 ms.
- Print shop: changing size animates the framed print's width over 320 ms ease-in-out; changing frame cross-fades the frame style over 200 ms.
- Regenerate button icon spins once per press (500 ms). Buttons shift 1 px up on hover. Gallery cards show a 2 px Acid Yellow outline on hover and focus.
- prefers-reduced-motion: render every canvas in final mode without visible stroke drawing and blit the finished frame in one paint. Disable panel rise, route fade, icon spin and frame animation. Regenerate still works.

## Imagery
All artwork is drawn live on canvas by this site's own code. There are no stored art files. Art palettes, in this exact order, as background then four inks. 0 Furnace: #2A0636, #FF2E63, #FFB800, #FF7A1A, #FFF1D6. 1 Ink Riot: #160A33, #FF4D3D, #E6FF2E, #14E0C8, #F4EFFF. 2 Deep Reef: #03203A, #14E0C8, #2E7BFF, #E6FF2E, #FF6FB5. 3 Acid Bloom: #0B2A16, #C8FF00, #00E58A, #FF4D9D, #F6F7D8. 4 Ultra: #1B10A8, #FF5A36, #FFE500, #39F3D0, #F2F0FF. 5 Hot Paper: #FF4D3D, #160A33, #E6FF2E, #1B10A8, #FFF4E8. The only photographs are three generated documentary shots of the fictional artist and her workshop, shown with a 1 px Acid Yellow border. The wall scene and favicon are drawn in SVG.

## Tone
Dry, exact, a little funny. A workshop that keeps good notes. Short sentences, real numbers, no art-speak and no talk of magic.

---
— Prompt by VibeFather · https://vibefather.ai/t/generative-art-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
