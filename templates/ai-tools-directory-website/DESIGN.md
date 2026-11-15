---
name: "AI Tools Directory Website"
colors:
  canvas: "#111214"
  surface: "#1B1D20"
  raised: "#25282D"
  lime: "#C8F560"
  lilac: "#B9A6FF"
  main_text: "#F5F6F2"
  secondary_text: "#B5B9C1"
  line: "#3D424A"
  ink: "#17210D"
  error: "#FF9E9E"
typography:
  wordmark_headings_tool_names_prices: { family: "Space Grotesk", weights: [500, 600, 700] }
  body_controls_descriptions_and_microcopy: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "4px base rhythm; page gutters 40px desktop, 24px tablet, 20px mobile. Content max-width 1280px. Hero gap 72px; section gaps 48px, never long empty screenfuls. Cards 24px padding, grid gap 20px. Text line-height 1.55; readable body 15–16px and minimum auxiliary copy 12px. Controls at least 44×44px, visible focus 2px lime with 3px offset. Desktop opening view must include real catalog cards, not just a headline."
radius: "Tool and preview cards 16px; controls 10px; pills 999px; inner UI panels 8px. Rounded corners are consistent, never bubbly giant pills for entire sections."
---

# AI Tools Directory Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#111214` — Page canvas and darkest controls.
- **Surface** `#1B1D20` — Normal tool cards and detail panels.
- **Raised** `#25282D` — Inputs, dialogs and selected dark controls.
- **Lime** `#C8F560` — Primary actions, first featured card, headline emphasis and newsletter band; dark text only.
- **Lilac** `#B9A6FF` — Hero preview, second featured card, collection artwork and bundle plan; dark text only.
- **Main text** `#F5F6F2` — Headings and primary text on dark surfaces.
- **Secondary text** `#B5B9C1` — Readable descriptions, labels and helper text on dark surfaces.
- **Line** `#3D424A` — Borders and dividers, with brighter focus ring on interactive surfaces.
- **Ink** `#17210D` — Text and marks on lime and lilac.
- **Error** `#FF9E9E` — Error text on dark surfaces; also show an icon and explanatory words.

## Typography
- **Wordmark, headings, tool names, prices** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Body, controls, descriptions and microcopy** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 4px base rhythm; page gutters 40px desktop, 24px tablet, 20px mobile. Content max-width 1280px. Hero gap 72px; section gaps 48px, never long empty screenfuls. Cards 24px padding, grid gap 20px. Text line-height 1.55; readable body 15–16px and minimum auxiliary copy 12px. Controls at least 44×44px, visible focus 2px lime with 3px offset. Desktop opening view must include real catalog cards, not just a headline.
- Radius: Tool and preview cards 16px; controls 10px; pills 999px; inner UI panels 8px. Rounded corners are consistent, never bubbly giant pills for entire sections.

## Motion
- Use only CSS transitions of 140–180ms for control color, shadow and modest 2–3px movement.
- Show content by default: no initial opacity-zero sections, clip-path reveals, perpetual marquee, parallax or scroll hijacking.
- Reduced motion removes transforms, looping playheads and delayed state updates, preserving all functionality.
- Dialog and sheet transitions must never delay focus, input response or route navigation.

## Imagery
All visuals are original SVG/CSS/HTML. Build 64 distinct deterministic abstract marks using category shape families and individual seeds: leaves for writing, offset rectangles for design, brackets for coding, waveforms for audio, frames for video, connected dots for research, paths for automation and tiles for productivity. No letters in circles as the only identity and no imitation product logos. Use the eight detailed product workspace families specified below. Large lime and lilac visual fields must both be visible in the first desktop screen. No raster images, portraits, network assets or stock placeholders are needed.

## Tone
Curious, concise and editorial. Describe what each tool does in ordinary English, with balanced limitations and specific sample use cases.

---
— Prompt by VibeFather · https://vibefather.ai/t/ai-tools-directory-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
