---
name: "Interactive Apartment Floor Plan Tour"
colors:
  paper: "#F3F1EA"
  ink: "#242A24"
  olive: "#687459"
  limestone: "#DDD7CA"
  clay: "#BB836A"
  muted_ink: "#666A61"
typography:
  editorial_headlines_and_residence_wordmark: { family: "Cormorant Garamond", weights: [500, 600] }
  body_controls_room_labels_and_unit_facts: { family: "DM Sans", weights: [400, 500, 600] }
spacing: "Desktop outer gutter 48px at 1440px; content max-width 1440px. Header 72px high with a 1px divider. Main heading row 100px high. Explorer uses a minmax(0,1fr) scene plus a 310px sidebar with 24px gap; scene height 590px desktop. Use a disciplined 8px scale, 24px sidebar padding and 40px section spacing. At <=900px stack sidebar beneath scene; at 390px use 20px gutters, 64px header, 36px heading, 400px scene and controls below it. No horizontal page overflow."
radius: "8px control buttons, 14px canvas well, 6px inset fact modules. Avoid pill-heavy cards; use thin rules, square columns and generous quiet space."
---

# Interactive Apartment Floor Plan Tour — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F3F1EA` — Page and canvas surround; a warm architecture-paper ground.
- **Ink** `#242A24` — Headlines, primary text, strong buttons and plan walls.
- **Olive** `#687459` — Selected rooms, active modes and restrained accents.
- **Limestone** `#DDD7CA` — Hairlines, plinth, muted surfaces and secondary backgrounds.
- **Clay** `#BB836A` — Second palette swatch, small room markers and warm scene details.
- **Muted ink** `#666A61` — Secondary copy with readable contrast on paper.

## Typography
- **Editorial headlines and residence wordmark** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Body, controls, room labels and unit facts** — DM Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Desktop outer gutter 48px at 1440px; content max-width 1440px. Header 72px high with a 1px divider. Main heading row 100px high. Explorer uses a minmax(0,1fr) scene plus a 310px sidebar with 24px gap; scene height 590px desktop. Use a disciplined 8px scale, 24px sidebar padding and 40px section spacing. At <=900px stack sidebar beneath scene; at 390px use 20px gutters, 64px header, 36px heading, 400px scene and controls below it. No horizontal page overflow.
- Radius: 8px control buttons, 14px canvas well, 6px inset fact modules. Avoid pill-heavy cards; use thin rules, square columns and generous quiet space.

## Motion
- Default load shows the fully furnished 3D overview immediately, already framed and lit; do not hide the main scene behind loading text or a start button. Keep a small 2D plan / 3D space segmented control visible from first paint.
- Switching 2D plan to 3D space takes 850ms with cubic ease-in-out: camera tilts from top-down into a three-quarter view, wall heights grow from 0.03m to their full heights, and furniture scales upward from floor footprints. Reverse smoothly to the exact same plan footprint. Disable duplicate transitions while one is running, but never lock navigation permanently.
- A selected room changes floor tint, gets a visible outline and its HTML list item gets aria-pressed=true. Camera flights last 850ms, focus the relevant room, keep useful framing and leave the selection card readable. Orbit or wheel/touch manipulation stops the guided tour.
- Guided tour visits Living & dining, Kitchen, Bedroom, Study and Bathroom for about 4 seconds each, showing the active step and previous/next controls. Play changes to Pause, Pause freezes the route, Resume continues it, and Reset view returns to overview. Prevent camera clipping through walls with room-specific positions and constrained orbit angles.
- Lighting changes blend in 650ms; palette colors blend in 450ms. No auto-rotation or perpetual camera movement. Animate only while necessary; a gentle light/shadow state is enough at rest.
- For prefers-reduced-motion, render stable views, change plan/3D, lighting and materials instantly, and make tour advancement deliberate with Next room / Previous room. Keep Play tour usable as stepwise selection rather than involuntary animated flight.

## Imagery
The visual anchor is a richly modeled, original code-built apartment on a low, beveled paper-toned plinth, shown large enough to inspect furnishings from the first screen. Use soft contact shadows, rounded furniture, oak grain from procedural canvas, woven-looking material shading, framed abstract line art drawn in code, leafy potted plants, open window apertures and light through the windows. This is a spatial interaction study, so use no photographs or generated images anywhere. Do not use downloaded source geometry. In plan mode expose clear original SVG wall lines, door arcs, window breaks, dimensions, a north arrow and room labels, all matching the same room data.

## Tone
Precise, calm and welcoming US English. Editorial architecture language, concrete room details and honest demo states. Rewrite every residence-specific sentence for changed variables; keep all copy, room records, materials and unit facts together in src/content.ts.

---
Inspired by Plan to Place — Apartment 01 by @xucidal — https://madewithdots.com/projects/threads-Dd6YgK-iDaQ
— Prompt by VibeFather · https://vibefather.ai/t/interactive-apartment-floor-plan-tour · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
