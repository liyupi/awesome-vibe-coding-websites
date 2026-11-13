---
name: "Fireworks Show Maker"
colors:
  midnight: "#080B14"
  panel: "#101624"
  raised: "#171F31"
  line: "#293249"
  ink: "#F4F6FC"
  muted: "#99A5BC"
  violet: "#9D8CFF"
  solar: "#FFCA6B"
  coral: "#FF6F91"
  lagoon: "#64D9FF"
  mint: "#75E6B2"
typography:
  brand_show_title_dialog_title_and_major_control_labels: { family: "Sora", weights: [500, 600, 700] }
  buttons_shell_descriptions_fields_and_general_interface_text: { family: "Inter", weights: [400, 500, 600] }
  timecodes_ruler_ticks_track_labels_coordinates_and_keyboard_hints: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base unit. Header height is 64px with 18px horizontal padding; panel padding is 16px; control gaps are 8px; section gaps are 12px. Shell rows are 64px high, inputs 36px on desktop and at least 44px on touch screens, and the timeline is 220px high on desktop."
radius: "Use 6px for panels and dialogs, 4px for buttons, inputs, shell rows, and timeline events, and 2px for small swatches. Reserve fully round shapes for status dots, toggle knobs, and the canvas position marker; avoid floating pill cards."
---

# Fireworks Show Maker — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight** `#080B14` — Application background and the deepest canvas sky
- **Panel** `#101624` — Library, inspector, timeline, and transport surfaces
- **Raised** `#171F31` — Selected controls, event blocks, and dialog surface
- **Line** `#293249` — One-pixel separators, ruler marks, and input borders
- **Ink** `#F4F6FC` — Primary labels, headings, and Pearl shells
- **Muted** `#99A5BC` — Secondary labels and inactive icons
- **Violet** `#9D8CFF` — Primary action, selection outline, playhead, and Violet shells
- **Solar** `#FFCA6B` — Solar shells and warm building windows
- **Coral** `#FF6F91` — Coral shells and destructive-action hover only
- **Lagoon** `#64D9FF` — Lagoon shells and cool water reflections
- **Mint** `#75E6B2` — Mint shells and ready-state indicator

## Typography
- **Brand, show title, dialog title, and major control labels** — Sora (OFL), weights 500/600/700. Self-host the font files.
- **Buttons, shell descriptions, fields, and general interface text** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Timecodes, ruler ticks, track labels, coordinates, and keyboard hints** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Header height is 64px with 18px horizontal padding; panel padding is 16px; control gaps are 8px; section gaps are 12px. Shell rows are 64px high, inputs 36px on desktop and at least 44px on touch screens, and the timeline is 220px high on desktop.
- Radius: Use 6px for panels and dialogs, 4px for buttons, inputs, shell rows, and timeline events, and 2px for small swatches. Reserve fully round shapes for status dots, toggle knobs, and the canvas position marker; avoid floating pill cards.

## Motion
- Start a muted ambient preview after 600ms so the first screen becomes a living show without audio; any edit pauses it. The primary Play with sound action restarts at zero, enables audio, and plays the actual timeline.
- Launch shells along a slightly curved 0.9–1.2 second trajectory, then simulate burst particles with gravity of 0.055 canvas-heights per second squared, velocity drag of 0.985 per 60Hz step, and 1.4–3.2 second lifetimes according to shell type.
- Draw each particle's previous six positions as a fading tapered trail and mirror live bursts into the bottom 22% water band with low-alpha, vertically stretched streaks; do not use a prerecorded animation.
- Keep interface transitions between 120 and 160ms with opacity and at most 4px translation. The playhead and dragged events follow input directly without easing; toasts enter and exit over 160ms.
- When prefers-reduced-motion is set, do not autoplay. Render a representative static tableau at 22 seconds, remove interface transitions and ambient twinkling, and use half the particles with shorter trails only after explicit playback.

## Imagery
Use no photographs or generated bitmap images. Draw the original skyline, water, shell previews, position marker, and a small four-ray brand spark entirely with Canvas 2D, CSS, and inline SVG. The skyline is an invented cluster of varied rectangular towers, setbacks, rooftop antennas, scattered warm windows, and haze; include no identifiable landmark. Use Lucide only for familiar interface icons. There are no people, mascots, external illustrations, or audio files.

## Tone
Nocturnal, precise, and quietly festive: a pro-tool interface with luminous color rather than a cartoon arcade. Use concise US English, concrete control labels, and no marketing sections.

---
— Prompt by VibeFather · https://vibefather.ai/t/fireworks-show-maker · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
