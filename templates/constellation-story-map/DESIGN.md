---
name: "Constellation Story Map"
colors:
  midnight: "#080D1F"
  atlas_indigo: "#101A36"
  story_panel: "#151E38"
  hover_navy: "#1D2948"
  parchment: "#F3E9D2"
  muted_blue: "#AAB5CD"
  antique_gold: "#E4BC72"
  gold_ink: "#241A0D"
  atlas_line: "#35415E"
  star_blue: "#B9CBFF"
typography:
  wordmark_h1_story_names_and_large_guide_quotations: { family: "Newsreader", weights: [400, 500, 600] }
  body_buttons_fields_story_text_help_and_status_messages: { family: "Manrope", weights: [400, 500, 600, 700] }
  date_readout_story_numbers_field_labels_and_coordinate_captions: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base unit. The desktop shell is max-width 1504px with 24px side padding; header is 64px high. Main uses 20px top padding and a 256px / minmax(480px, 1fr) / 320px grid with 16px gaps. The central canvas is 620px high at 1440 × 900, with a separate 76px control bar below. Left introduction uses 48–58px H1 at 1.02 line height; story prose stays near 58–66 characters per line. At 390 × 844 use a 56px header with 16px padding, a compact 120px introduction, a 360px canvas, and normal-flow controls and story below. All interactive targets are at least 44 by 44px, and page content never causes horizontal overflow."
radius: "Use 18px for the sky stage and large panels, 12px for the guide dialog and story diagram, 10px for fields and primary buttons, 8px for constellation rows, and 999px only for compact mode tabs and status pills. Use 1px Atlas line borders and broad soft shadows. Parchment and gold are solid editorial accents; do not turn every surface into translucent glass."
---

# Constellation Story Map — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight** `#080D1F` — Page background, canvas deep field, and scrims.
- **Atlas indigo** `#101A36` — Canvas glow, header, and primary raised surfaces.
- **Story panel** `#151E38` — Story, creation, and guide surfaces.
- **Hover navy** `#1D2948` — Selected fields and hover states.
- **Parchment** `#F3E9D2` — Primary text, story titles, and bright guide stars.
- **Muted blue** `#AAB5CD` — Secondary copy and inactive controls with readable contrast.
- **Antique gold** `#E4BC72` — Active constellation lines, focus rings, selected outlines, and primary-button fill.
- **Gold ink** `#241A0D` — Text on antique-gold buttons.
- **Atlas line** `#35415E` — Hairline borders, coordinate grid, and dividers.
- **Star blue** `#B9CBFF` — Cool star halos and subtle secondary diagram accents.

## Typography
- **Wordmark, H1, story names, and large guide quotations** — Newsreader (OFL), weights 400/500/600. Self-host the font files.
- **Body, buttons, fields, story text, help, and status messages** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.
- **Date readout, story numbers, field labels, and coordinate captions** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit. The desktop shell is max-width 1504px with 24px side padding; header is 64px high. Main uses 20px top padding and a 256px / minmax(480px, 1fr) / 320px grid with 16px gaps. The central canvas is 620px high at 1440 × 900, with a separate 76px control bar below. Left introduction uses 48–58px H1 at 1.02 line height; story prose stays near 58–66 characters per line. At 390 × 844 use a 56px header with 16px padding, a compact 120px introduction, a 360px canvas, and normal-flow controls and story below. All interactive targets are at least 44 by 44px, and page content never causes horizontal overflow.
- Radius: Use 18px for the sky stage and large panels, 12px for the guide dialog and story diagram, 10px for fields and primary buttons, 8px for constellation rows, and 999px only for compact mode tabs and status pills. Use 1px Atlas line borders and broad soft shadows. Parchment and gold are solid editorial accents; do not turn every surface into translucent glass.

## Motion
- Render the complete star field and first selected story immediately, with no splash, loading gate, or blocking intro. The first constellation is already traced; only explicit selection or Trace again starts the 700ms line reveal.
- Dragging follows the pointer directly. Release may continue for at most 550ms with rapidly damped velocity, then stop without overshooting the pan bounds. Zoom changes use a 140ms ease-out transform centered on the canvas.
- Constellation lines reveal as one coherent 700ms easeOutCubic sequence, not a random star chase. The selected guide stars receive one restrained halo expansion over 500ms and the story text crossfades over 160ms.
- Date changes interpolate the illustrative sky over 160ms. Maker points appear with a 160ms radius-and-opacity pulse, while saved and loaded polylines draw over 420ms. No automatic pan follows a selection.
- Buttons, tabs, panels, and dialogs use 120–180ms color, opacity, or at most 4px movement transitions. Reduced motion removes twinkle, momentum, interpolation, line drawing, and nonessential transforms while keeping immediate state feedback.

## Imagery
The high-craft interactive Canvas 2D sky is the visual anchor; use no photographs, generated bitmap images, downloaded atlas maps, image textures, or external constellation art. Layer a deep indigo gradient, fine atlas grid, dashed arcs, 420 deterministic background stars, six original simplified gold figures, cool halos, and 28 maker stars. Use the same point and edge data to draw local SVG diagrams in story cards. The original brand mark and favicon are a simple asymmetric four-point star with one offset dot, not a logo copied from an astronomy product. No people, faces, mascots, zodiac characters, real institutions, or branded telescope imagery.

## Tone
Curious, lyrical, precise, and gently editorial. Treat classical myth as cultural storytelling rather than scientific fact or personal prediction. Use concise US English, concrete interaction feedback, and original modern retellings. Clearly call the star geometry and date behavior illustrative; never imply location-aware observing guidance, live ephemeris data, astrology, or fortune-telling.

---
— Prompt by VibeFather · https://vibefather.ai/t/constellation-story-map · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
