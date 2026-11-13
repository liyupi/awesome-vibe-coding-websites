---
name: "Product Changelog Page"
colors:
  warm_white: "#FBFAF7"
  panel: "#FFFFFF"
  line: "#E5E1D8"
  ink: "#1F211C"
  soft_ink: "#5F6258"
  violet: "#6D5BD0"
  violet_deep: "#54469F"
  violet_mist: "#EDEAF9"
  feature: "#2F7D5B"
  improvement: "#3E6B9E"
  fix: "#B0812A"
  breaking: "#B4443C"
  good: "#3E7A52"
typography:
  display_page_title_entry_titles_dm_serif_display_notes_with_personality_serif: { family: "DM Serif Display", weights: [400] }
  text_and_ui_standfirsts_changes_chips_buttons_inter: { family: "Inter", weights: [400, 500, 600] }
  mono_version_chips_anchor_ids_the_feed_chip_shortcut_notes: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "8px base unit. Reading column max-width 760px centered, 32px side padding (20px under 640px). The timeline: a 1px Line rail on the left at 12px with entry dots; entries stack with 56px between; each entry is open (no card boxes) — hairlines only. Type scale: page title 34px DM Serif; entry titles 22px DM Serif; standfirst 15.5px Inter 400 / 1.6 Soft Ink; changes 15px / 1.65 Ink as a bullet list with 6px gaps; version chips mono 13px with 1px Violet border on Panel; tags 11px uppercase 600 letter-spacing 0.08em on their colors at 12% tint; counts 13px mono Soft Ink. Buttons: height 44px, Inter 600 13.5px; primary Violet fill with white text. Input: height 44px, Panel fill, 1px Line border, focus Violet border + 2px offset ring. Focus everywhere: 2px Violet outline, 3px offset."
radius: "8px on chips, buttons, input, panels; 999px for version chips and the feed chip."
---

# Product Changelog Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FBFAF7` — Page background throughout.
- **Panel** `#FFFFFF` — Subscribe panel, chips on hover.
- **Line** `#E5E1D8` — 1px hairlines: the timeline rail, card borders, dividers.
- **Ink** `#1F211C` — Headlines, body, icons.
- **Soft Ink** `#5F6258` — Standfirsts, counts, captions, notes.
- **Violet** `#6D5BD0` — The one accent: version chips' border and text, anchors, links, primary buttons, focus ring, active filter fill.
- **Violet Deep** `#54469F` — Hover and pressed states.
- **Violet Mist** `#EDEAF9` — Active chip fills, tag chips, entry hover tint.
- **Feature** `#2F7D5B` — The 'feature' tag chip color.
- **Improvement** `#3E6B9E` — The 'improvement' tag chip color.
- **Fix** `#B0812A` — The 'fix' tag chip color.
- **Breaking** `#B4443C` — The 'breaking' tag chip color — used sparingly and never alone (tag carries text).
- **Good** `#3E7A52` — Subscribe success, copied check.

## Typography
- **Display: page title, entry titles — DM Serif Display, notes-with-personality serif** — DM Serif Display (OFL), weights 400. Self-host the font files.
- **Text and UI: standfirsts, changes, chips, buttons — Inter** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: version chips, anchor ids, the feed chip, shortcut notes** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Reading column max-width 760px centered, 32px side padding (20px under 640px). The timeline: a 1px Line rail on the left at 12px with entry dots; entries stack with 56px between; each entry is open (no card boxes) — hairlines only. Type scale: page title 34px DM Serif; entry titles 22px DM Serif; standfirst 15.5px Inter 400 / 1.6 Soft Ink; changes 15px / 1.65 Ink as a bullet list with 6px gaps; version chips mono 13px with 1px Violet border on Panel; tags 11px uppercase 600 letter-spacing 0.08em on their colors at 12% tint; counts 13px mono Soft Ink. Buttons: height 44px, Inter 600 13.5px; primary Violet fill with white text. Input: height 44px, Panel fill, 1px Line border, focus Violet border + 2px offset ring. Focus everywhere: 2px Violet outline, 3px offset.
- Radius: 8px on chips, buttons, input, panels; 999px for version chips and the feed chip.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Paper-quiet: nothing over 240ms except entries' first reveal.
- Entries reveal: each block rises 8px over 400ms as it enters (Motion whileInView, once); the rail draws from top on first view (scaleY 0→1, 600ms).
- Filtering: dim/sink 180ms as described; TypeChip fills crossfade 140ms; the count line crossfades 160ms.
- AnchorLink: the icon fades in 140ms on entry hover/focus; the copy→check swap pops 120ms scale.
- Breaking-tag entries: their dot on the rail gets a one-time 4px pulse when first revealed (off under reduced motion).
- Subscribe: crossfade to the Good line 240ms; validation line fades 160ms.
- Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no reveals, no rail draw, no pulse; filters dim instantly (opacity only); everything at rest and usable. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs or illustrations: the page is typography, chips and hairlines; dots, tags and the favicon are drawn in code. Icons: lucide-react only, stroke width 1.75.

## Tone
Release-notes voice: specific, modest, occasionally funny about bugs. Every entry says what changed and why it matters in one line.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-changelog-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
