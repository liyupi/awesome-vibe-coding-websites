---
name: "Theme Park Website"
colors:
  cream: "#FFF8F0"
  bubblegum: "#FF7DA5"
  sky: "#79C7F2"
  lemon: "#FFD23F"
  mint: "#7BD9B0"
  grape_ink: "#4A3560"
  lilac: "#8E7AAE"
  snow: "#FFFFFF"
typography:
  display_park_name_headlines_zone_names_ticket_prices_chunky_rounded: { family: "Fredoka", weights: [500, 600, 700] }
  text_body_chips_ride_blurbs_checklist_labels_uppercase_tracked_0_08em: { family: "DM Sans", weights: [400, 500, 700] }
spacing: "Playful and roomy: sections py-24 (96px) desktop / py-16 mobile; content max-w-6xl px-6/px-10; chunky cards carry 24px padding and generous 24px gaps; the map panel gets full content width with 32px of clear space."
radius: "Chunky everywhere: 24px on cards and the map panel, 14px on chips and inputs, 999px pills on buttons, 32px blob radii on zone shapes; nothing square."
---

# Theme Park Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FFF8F0` — Page ground everywhere — warm candy-shop cream.
- **Bubblegum** `#FF7DA5` — Zone 1 (Candy Canyon) and the primary accent: CTAs, active chips, the flagged ticket.
- **Sky** `#79C7F2` — Zone 2 (Sky Harbor); secondary chips and info tints.
- **Lemon** `#FFD23F` — Zone 3 (Lemon Grove); highlight tags, the hours strip's sun icon.
- **Mint** `#7BD9B0` — Zone 4 (Mint Meadow); success states, added-to-plan checks.
- **Grape ink** `#4A3560` — Primary text and all SVG outlines — deep grape, never black.
- **Lilac** `#8E7AAE` — Secondary text, the map's entrance strip, meta lines.
- **Snow** `#FFFFFF` — Cards, panels, ride-dot strokes — crisp white against cream.

## Typography
- **Display — park name, headlines, zone names, ticket prices (chunky rounded)** — Fredoka (OFL), weights 500/600/700. Self-host the font files.
- **Text — body, chips, ride blurbs, checklist (labels uppercase tracked 0.08em)** — DM Sans (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: Playful and roomy: sections py-24 (96px) desktop / py-16 mobile; content max-w-6xl px-6/px-10; chunky cards carry 24px padding and generous 24px gaps; the map panel gets full content width with 32px of clear space.
- Radius: Chunky everywhere: 24px on cards and the map panel, 14px on chips and inputs, 999px pills on buttons, 32px blob radii on zone shapes; nothing square.

## Motion
- Map dots pop in on load (scale 0.6→1, spring stiffness 260 damping 18, staggered 40ms) — the park switching its lights on.
- Filters: non-matching dots and ride cards dim to 15% with grayscale (250ms); matching items bounce once (scale 1→1.04→1); counts in the mono-ish caption update instantly.
- Ride popover: card pops from its dot (scale 0.8→1 spring) and closes on outside click, Escape or its X.
- Add-to-plan: the checklist row pops in with a six-shape Confetti burst (600ms, once per add); move up/down slides rows 200ms.
- Reveals: sections and cards rise (y 22→0, 500ms ease-out) with 70ms stagger via Motion whileInView, once; ticket cards land with a small overshoot.
- prefers-reduced-motion: no pops, springs or confetti; dots and cards render at rest; filters switch instantly; all reveals become 200ms opacity fades.

## Imagery
Zero photography — the whole park is flat-vector code drawing: candy-colored zone blobs, geometric landmarks (wheel, looping coaster, carousel), simple tree and crowd dots without faces, tiny ride glyphs, and confetti shapes. Everything shares one flat-illustration language: 2px grape outlines, flat fills, no gradients, no textures, no characters or mascots with faces.

## Tone
Joy-forward and a little sugary, but never shouty — puns allowed, exclamation rationed; the colors shout so the copy can stay friendly.

---
— Prompt by VibeFather · https://vibefather.ai/t/theme-park-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
