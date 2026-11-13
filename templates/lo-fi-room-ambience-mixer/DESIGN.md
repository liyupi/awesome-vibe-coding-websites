---
name: "Lo-fi Room Ambience Mixer"
colors:
  night_ink: "#211C2A"
  panel_plum: "#2D2637"
  dusk_wall: "#493C55"
  muted_lavender: "#B9AAC2"
  warm_cream: "#F6E9D2"
  old_paper: "#DFC9A9"
  honey_amber: "#E8AA62"
  ember_coral: "#D87350"
  rain_blue: "#8299B6"
  leaf_sage: "#8FA489"
  walnut: "#765044"
  fine_line: "#51445D"
typography:
  room_invitation_and_large_timer_numerals: { family: "Fraunces Variable", weights: [600, 700] }
  interface_body_copy_buttons_labels_and_dialogs: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
  volume_percentages_timer_presets_and_tiny_status_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base grid with an 8px dominant rhythm. Page maximum width is 1480px; desktop gutters are 28px, tablet 20px, and mobile 14px. Header height is 68px. Intro has 28px top and 24px bottom padding. Workspace columns have a 20px gap. Scene and panel padding is 20px; compact control rows use 10px vertical gaps. Keep 44px minimum pointer targets and at least 8px between adjacent targets."
radius: "Scene card 24px, mixer and dialog panels 20px, preset cards 16px, standard buttons and inputs 12px, small icon buttons 10px, and status pills 999px. SVG furniture uses softly rounded joins rather than sharp geometric corners. Borders are one pixel; avoid nested floating cards and heavy glass effects."
---

# Lo-fi Room Ambience Mixer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night Ink** `#211C2A` — Page background, deepest shadows, and dark text on amber buttons.
- **Panel Plum** `#2D2637` — Mixer, timer, dialog, and saved-mix surfaces.
- **Dusk Wall** `#493C55` — Back wall of the illustrated room and secondary surfaces.
- **Muted Lavender** `#B9AAC2` — Secondary text and inactive icons on dark surfaces.
- **Warm Cream** `#F6E9D2` — Primary text, lampshade, paper, and highlights.
- **Old Paper** `#DFC9A9` — Books, labels, and soft border details.
- **Honey Amber** `#E8AA62` — Primary action, active slider, lamplight, and selected states.
- **Ember Coral** `#D87350` — Flame core, record label, and warm accents; not body text.
- **Rain Blue** `#8299B6` — Window sky, rain streaks, and cool ambient highlights.
- **Leaf Sage** `#8FA489` — Plants, birds' branch, success feedback, and quiet accents.
- **Walnut** `#765044` — Floor, desk, fireplace mantel, and furniture outlines.
- **Fine Line** `#51445D` — One-pixel borders and dividers on dark UI surfaces.

## Typography
- **Room invitation and large timer numerals** — Fraunces Variable (OFL), weights 600/700. Self-host the font files.
- **Interface, body copy, buttons, labels, and dialogs** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Volume percentages, timer presets, and tiny status labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base grid with an 8px dominant rhythm. Page maximum width is 1480px; desktop gutters are 28px, tablet 20px, and mobile 14px. Header height is 68px. Intro has 28px top and 24px bottom padding. Workspace columns have a 20px gap. Scene and panel padding is 20px; compact control rows use 10px vertical gaps. Keep 44px minimum pointer targets and at least 8px between adjacent targets.
- Radius: Scene card 24px, mixer and dialog panels 20px, preset cards 16px, standard buttons and inputs 12px, small icon buttons 10px, and status pills 999px. SVG furniture uses softly rounded joins rather than sharp geometric corners. Borders are one pixel; avoid nested floating cards and heavy glass effects.

## Motion
- Rain streaks fall on three staggered linear loops while droplets creep down the glass. Rain level controls visible streak count, opacity from 0 to 0.8, and duration from 2.8 seconds at high volume to a frozen hidden state at zero.
- Café level raises two cup-steam paths and shortens their drift loop from 5.5 to 2.8 seconds; a tiny spoon glints every 4 seconds only above 35 percent. This is a restrained visual metaphor, not a separate café illustration.
- Fireplace flames scale and skew gently on staggered 700–1200ms loops. Fire level controls flame height, ember opacity, and the amber wash on the nearby floor; zero leaves unlit logs without smoke.
- The vinyl disc rotates once every 1.8 seconds while its level is above zero, with a subtle tonearm bob and two level bars. Reduced motion holds the disc still and uses the label and bars to show the setting.
- Two small generic bird silhouettes on the outdoor branch hop at most once every 5 seconds and leaves sway slowly. Bird level controls their visibility and motion; there are no mascots, speech bubbles, or musical-note particles.
- Buttons and cards respond in 120–180ms with at most 2px translation. Dialogs fade and rise 8px over 180ms. Toasts remain for 2.4 seconds. No scroll-jacking, parallax, autoplay, flashing, infinite text marquee, or cursor follower.
- Under prefers-reduced-motion, remove every ambient and entrance animation, show a complete static room, keep all state cues readable, and leave audio behavior unchanged.

## Imagery
Create one detailed original inline SVG room, viewBox 0 0 1200 760, with no raster images or external illustration. Use a straight-on slightly elevated cutaway composition: large rain window and branch on the left, books and a turntable on a walnut desk in the foreground, steaming cup on a side table, fireplace and amber floor glow on the right, an empty upholstered reading chair, shaded lamp, plants, framed abstract lines, and layered rugs. Add a static low-opacity SVG grain filter and two or three broad color washes for depth; do not animate noise. No people, faces, pets, characters, logos, branded products, recognizable landmarks, copied room compositions, or text baked into the artwork. The complete room is the first-screen visual anchor, not a small decorative thumbnail.

## Tone
Warm, unhurried, concise, and lightly poetic without becoming whimsical or vague. Use practical control labels and small moments of hospitality. Make no medical, sleep, productivity, or mental-health claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/lo-fi-room-ambience-mixer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
