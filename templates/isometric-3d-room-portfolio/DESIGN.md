---
name: "Isometric 3D Room Portfolio"
colors:
  day_backdrop_top: "#FDE8D7"
  day_backdrop_bottom: "#E4E0F6"
  night_backdrop_top: "#121836"
  night_backdrop_bottom: "#2B2459"
  wall_left_day_night: "#F6E6D3 / #3A3F6E"
  wall_right_day_night: "#EFD7C0 / #30355F"
  floor_day_night: "#D8B28C / #3C3452"
  rug: "#9DCBB6"
  wood: "#C98D5E"
  shelf_blue: "#8FA7D6"
  coral: "#F08A6B"
  butter: "#FFD27A"
  lilac: "#C8B6FF"
  guitar_amber: "#E9A23B"
  leaf: "#6FAF7E"
  screen_ink: "#1E2238"
  screen_glow: "#7CE0D3"
  lamp_light: "#FFC873"
  panel_day: "#FFF9F2"
  panel_night: "#1B2047"
  ink: "#2C2433"
  ink_muted: "#6E6475"
  night_text: "#F3EEFF"
  hairline: "#EADBCB"
typography:
  display_name_chip_panel_titles_hover_labels_intro_line: { family: "Fredoka (Fontsource variable)", weights: [500, 600] }
  text_bios_card_copy_buttons_nav: { family: "Figtree (Fontsource variable)", weights: [400, 500, 600] }
  mono_eyebrows_stack_chips_track_durations_contact_values: { family: "JetBrains Mono (Fontsource)", weights: [400, 500] }
spacing: "Overlay inset 24px desktop / 16px mobile. Panel padding 28px desktop / 20px mobile, 20px gaps between panel blocks, 10–14px gaps inside lists. 4px base scale (4, 8, 10, 12, 14, 16, 20, 24, 28, 40)."
radius: "Overlay pills 999px; panels 24px; cards and images 18px; thumbnails 12px; 3D RoundedBox radius 0.06–0.12 world units so everything looks soft and toy-like."
---

# Isometric 3D Room Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Day backdrop top** `#FDE8D7` — Top stop of the daytime page gradient behind the canvas (peach).
- **Day backdrop bottom** `#E4E0F6` — Bottom stop of the daytime page gradient (lavender).
- **Night backdrop top** `#121836` — Top stop of the night gradient.
- **Night backdrop bottom** `#2B2459` — Bottom stop of the night gradient.
- **Wall left day / night** `#F6E6D3 / #3A3F6E` — Left wall (x = -5 plane) day and night colors.
- **Wall right day / night** `#EFD7C0 / #30355F` — Right wall (z = -5 plane), slightly darker than the left wall.
- **Floor day / night** `#D8B28C / #3C3452` — Floor slab top; floor edge/sides use #B98F69 / #2A2440.
- **Rug** `#9DCBB6` — Round rug; night tone #4A6B78.
- **Wood** `#C98D5E` — Desk top, bookshelf frame edges, picture frames, chair seat; darker wood #A26C43 for legs.
- **Shelf blue** `#8FA7D6` — Bookshelf body and the mailbox body.
- **Coral** `#F08A6B` — Primary accent: mailbox flag, active nav item, play button, CTA buttons, focus ring in day mode.
- **Butter** `#FFD27A` — Lamp shade, book spines, music note particles.
- **Lilac** `#C8B6FF` — Book spines, beanbag, project thumbnail tints.
- **Guitar amber** `#E9A23B` — Guitar body top; sides and back #B86B2A, neck #7A4A2A.
- **Leaf** `#6FAF7E` — Plant leaves; pot #E7C9B0.
- **Screen ink** `#1E2238` — Monitor screen background and night panel text on light chips.
- **Screen glow** `#7CE0D3` — Code bars on the monitor, monitor point light at night, night-mode focus ring.
- **Lamp light** `#FFC873` — Lamp point light and fairy-light emissive color at night.
- **Panel day** `#FFF9F2` — Panel and chip surfaces in day mode (at 94% opacity with 12px backdrop blur).
- **Panel night** `#1B2047` — Panel and chip surfaces in night mode (at 92% opacity with 12px backdrop blur).
- **Ink** `#2C2433` — Primary text in day mode.
- **Ink muted** `#6E6475` — Secondary text in day mode; night secondary text is #A9A6CC.
- **Night text** `#F3EEFF` — Primary text in night mode.
- **Hairline** `#EADBCB` — Day borders and dividers; night borders #343B72.

## Typography
- **Display: name chip, panel titles, hover labels, intro line** — Fredoka (Fontsource variable) (OFL), weights 500/600. Self-host the font files.
- **Text: bios, card copy, buttons, nav** — Figtree (Fontsource variable) (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrows, stack chips, track durations, contact values** — JetBrains Mono (Fontsource) (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Overlay inset 24px desktop / 16px mobile. Panel padding 28px desktop / 20px mobile, 20px gaps between panel blocks, 10–14px gaps inside lists. 4px base scale (4, 8, 10, 12, 14, 16, 20, 24, 28, 40).
- Radius: Overlay pills 999px; panels 24px; cards and images 18px; thumbnails 12px; 3D RoundedBox radius 0.06–0.12 world units so everything looks soft and toy-like.

## Motion
- One shared state store drives everything: { focus: null | 'about' | 'projects' | 'music' | 'contact', hovered: string | null, night: boolean, playing: boolean, trackIndex: number }. Hovering an HTML nav item sets hovered to the same id as hovering the 3D object, so both highlight together.
- Easing: GSAP 'power3.inOut' for camera moves, 'power2.out' for hover lift, 'back.out(1.6)' for the intro drop-in. CSS transitions use cubic-bezier(0.22, 1, 0.36, 1).
- Intro (once on load): the room group rises from y -1.2 to 0 and scales 0.92 to 1 over 1.2s power3.out; then the interactive objects (bookshelf, desk set, guitar, mailbox, lamp) drop from y +1.5 into place with a 70ms stagger, 0.6s back.out(1.6). The overlay chips fade in 300ms after.
- Idle life: the room group bobs y ±0.06 on a 6s sine; the plant's leaf group sways ±0.05 rad on a 3.4s sine; 40 dust motes (drei Sparkles, size 2.5, speed 0.25, opacity 0.5, color #FFFFFF by day and #FFC873 by night) drift inside the room volume; the monitor cursor block toggles visibility every 530ms; by day two code-drawn clouds slide across the window sky plane (loop 40s), by night 30 star points twinkle.
- Hover (pointer devices only): object group lifts y +0.15 over 0.25s power2.out, every mesh in it gets emissive #FFFFFF at intensity 0.16 (night: emissive #FFC873 at 0.22), cursor becomes pointer, and a drei <Html> label (pill, Fredoka 500 15px) appears 0.5 units above the object, fading and rising 6px over 180ms. The mailbox flag also rotates up 70 degrees; the guitar tilts 3 degrees.
- Focus: GSAP tweens a proxy { px, py, pz, tx, ty, tz, zoom } over 1.1s power3.inOut; every frame the orthographic camera is placed at proxy position, looks at the proxy target and applies proxy zoom with updateProjectionMatrix(). The panel slides in from the right (desktop: translateX(100%) to 0 over 450ms, starting 350ms into the camera move) or up from the bottom (mobile). Back/close or Escape reverses both, panel first, then camera home.
- Day/night: GSAP tweens a single nightMix value 0 to 1 (or back) over 0.9s power2.inOut; every frame each themed material lerps between its day and night color (THREE.Color.lerpColors), light intensities lerp between their day and night values, and the two backdrop gradient layers crossfade by opacity. The lamp head bulb's emissive intensity goes 0 to 2.5, the lamp point light 0 to 18, fairy lights 0 to 1.8. The UI switch thumb slides 24px and its icon swaps sun/moon with a 90-degree rotate.
- Music playing: the record disc in the Music panel spins (360 degrees per 2.4s, linear), the progress bar advances in real time, and in the room three small butter-colored music notes (code-drawn planes) float up from the amp and fade over 2.2s, looping with 0.7s offsets.
- prefers-reduced-motion: camera moves and the day/night change become instant (duration 0), no intro, no bob, no sway, no Sparkles, no floating notes, no record spin, panels appear without sliding (opacity only, 120ms). Hover keeps the emissive highlight and label but no lift.

## Imagery
The hero is the 3D room itself, a dense, polished diorama that fills the first screen, so there is no hero photo. Everything in the scene is modeled from code primitives (drei RoundedBox, boxes, cylinders, spheres, THREE.ExtrudeGeometry from 2D shapes) with flat meshStandardMaterial (roughness 0.85, metalness 0) and soft shadows. Wall art, the monitor screen and project thumbnails are code-drawn (CanvasTexture or inline SVG) as abstract shapes in the palette: no real posters, album covers, logos or readable brand marks anywhere. The only photographs are two AI-generated images of the fictional owner inside the About panel (a head-and-shoulders portrait and an over-the-shoulder desk shot), both in the same muted pastel peach-and-lavender grade as the room.

## Tone
Warm, playful and precise: a tidy toy diorama with honest, specific copy written in the first person. Short sentences, concrete numbers, no buzzwords.

---
— Prompt by VibeFather · https://vibefather.ai/t/isometric-3d-room-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
