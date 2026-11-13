---
name: "Coastal Real Estate Agency Website"
colors:
  sand: "#F6F1E9"
  shell: "#FFFDF9"
  sea_ink: "#13262F"
  driftwood: "#6B6359"
  hairline: "#E2D9CB"
  tide_teal: "#2F6F6A"
  tide_teal_dark: "#245652"
  coral: "#D9694A"
  sea_foam: "#DCE8E4"
  sea: "#BFD5D8"
typography:
  display_wordmark_h1_h3_prices_on_detail_page_big_stats_fraunces_variable_with_font_variation_settings_opsz_96_on_headings_40px_and_opsz_24_below_letter_spacing_0_02em_on_h1_h1_64_68_desktop_40_44_mobile_h2_44_50_desktop_32_38_mobile_h3_24_30: { family: "Fraunces", weights: [400, 500, 600] }
  text_body_17_28_ui_15_22_buttons_15_weight_600_nav_15_weight_500: { family: "Instrument Sans", weights: [400, 500, 600] }
  labels_and_figures_eyebrow_labels_12px_uppercase_letter_spacing_0_12em_facts_rows_plan_dimensions_map_labels_calculator_outputs_badge_text: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1240px, side padding 20px mobile, 40px desktop. Sections are 112px apart on desktop and 72px on mobile. Card grid gap 28px desktop, 20px mobile. Card inner padding 20px. Header height 72px desktop, 64px mobile."
radius: "Cards and images 14px (photo inside a card is rounded only at the top); buttons and inputs 10px; chips and badges 999px; the hero search bar 16px; lightbox image 6px."
---

# Coastal Real Estate Agency Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sand** `#F6F1E9` — Page background
- **Shell** `#FFFDF9` — Cards, filter bar, form fields, sidebar
- **Sea ink** `#13262F` — Body text, headings, dark bands (stats, valuation, footer), Sold badge, lightbox backdrop at 94% opacity
- **Driftwood** `#6B6359` — Secondary text, captions, fact labels
- **Hairline** `#E2D9CB` — 1px borders, table rules, dividers, floor-plan inner walls
- **Tide teal** `#2F6F6A` — Primary buttons, links, active chips, For sale badge, focus rings, principal bar, map streets highlight
- **Tide teal dark** `#245652` — Button hover and pressed states
- **Coral** `#D9694A` — Under offer badge, listing pin on the map, saved heart fill, interest bar in the calculator
- **Sea foam** `#DCE8E4` — Map land, neighbourhood chips, floor-plan room fill on hover, empty-state art
- **Sea** `#BFD5D8` — Map water, floor-plan outer glazing marks

## Typography
- **Display: wordmark, H1–H3, prices on detail page, big stats. Fraunces Variable with font-variation-settings 'opsz' 96 on headings ≥ 40px and 'opsz' 24 below; letter-spacing -0.02em on H1. H1 64/68 desktop, 40/44 mobile; H2 44/50 desktop, 32/38 mobile; H3 24/30.** — Fraunces (OFL), weights 400/500/600. Self-host the font files.
- **Text: body 17/28, UI 15/22, buttons 15 weight 600, nav 15 weight 500.** — Instrument Sans (OFL), weights 400/500/600. Self-host the font files.
- **Labels and figures: eyebrow labels 12px uppercase letter-spacing 0.12em, facts rows, plan dimensions, map labels, calculator outputs, badge text.** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, side padding 20px mobile, 40px desktop. Sections are 112px apart on desktop and 72px on mobile. Card grid gap 28px desktop, 20px mobile. Card inner padding 20px. Header height 72px desktop, 64px mobile.
- Radius: Cards and images 14px (photo inside a card is rounded only at the top); buttons and inputs 10px; chips and badges 999px; the hero search bar 16px; lightbox image 6px.

## Motion
- Reveal on scroll: every section block fades from opacity 0 and translateY(16px) to 0 over 600ms cubic-bezier(0.2, 0.7, 0.2, 1) when 15% visible; children in grids stagger by 80ms; runs once.
- Hero: background image scales from 1.06 to 1 over 1600ms ease-out on load; headline and search bar fade up 200ms and 350ms after load.
- CountUp: market stat numbers count from 0 to their value over 1200ms easeOutCubic when first visible, using tabular numerals.
- Cards: on hover the photo scales to 1.04 over 500ms and the card gains shadow 0 12px 32px rgba(19,38,47,0.10) and translateY(-2px) over 250ms.
- Filtering: when results change the grid cards fade in from opacity 0 over 250ms with 40ms stagger; the result count updates instantly.
- Lightbox: backdrop fades in over 200ms, image fades and scales from 0.98 to 1 over 250ms; switching photos crossfades over 200ms.
- Floor-plan tab switch crossfades the SVG over 200ms; hovering a room fills it with Sea foam over 150ms.
- Calculator: the principal/interest bar segments animate their width over 300ms when values change.
- Form confirmation replaces the form with a 250ms fade and a check icon that draws its stroke over 400ms.
- prefers-reduced-motion: no transforms, no count-up (show final numbers), no hero zoom; only instant state changes.

## Imagery
Real photographs make the agency feel like a working business. Ten exterior photos of real but anonymous houses (CC0 / public domain, from Flickr and Wikimedia Commons), one CC0 bay photo for the town section, and six AI-generated photos hosted for this template: the harbour hero and five interiors (living room, kitchen, bedroom, bathroom, garden room) shared by every listing's gallery. Listing card photos are cropped 4:3 with object-fit cover and object-position center 60%. Everything else is drawn in code: floor plans, neighbourhood map, empty-state house outline, monograms, the price-by-area bar chart and the favicon (a teal rounded square with a white saltbox-roof house outline, 32×32 SVG). No people in any image, and no visible signs, house numbers or brand names.

## Tone
Calm, local and specific, like an agency that has worked the same streets for twenty years. Short sentences, concrete numbers, no hype words (no 'stunning', 'dream home', 'luxury living'). Prices and facts are always exact.

---
— Prompt by VibeFather · https://vibefather.ai/t/coastal-real-estate-agency-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
