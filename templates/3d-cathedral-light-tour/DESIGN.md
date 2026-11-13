---
name: "3D Cathedral Light Tour"
colors:
  umber_black: "#12110F"
  walnut_panel: "#1B1916"
  ivory: "#F2ECE1"
  limestone: "#B8AA93"
  dust_gray: "#A69B8B"
  aged_gold: "#D8B26E"
  ruby_glass: "#A83B4B"
  cobalt_glass: "#3D628E"
  teal_glass: "#4C8078"
  amber_glass: "#D9A44A"
typography:
  hero_architectural_stop_titles_and_section_headings: { family: "Newsreader Variable", weights: [400, 500, 600] }
  body_copy_buttons_captions_and_controls: { family: "Inter Variable", weights: [400, 500, 600] }
  stop_numbers_time_readouts_dimensions_and_diagram_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base unit, a maximum content width of 1440px, 40px desktop gutters, and 20px mobile gutters. Ordinary sections use 112px desktop and 76px mobile vertical padding with a 12-column grid and 24px gaps. Keep body measure between 50 and 66 characters. Caption padding is 28px desktop and 20px mobile; light-control gaps are 12–16px. Preserve 72px desktop and 64px mobile header clearance."
radius: "Use 2px on buttons and range controls, 6px on captions and the light console, and no rounding on major sections or field-note rows. Avoid generic floating glass-card grids. Circles are reserved for progress dots and the sun-symbol control."
---

# 3D Cathedral Light Tour — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Umber black** `#12110F` — Page background, deepest architectural shadows, and canvas clear color.
- **Walnut panel** `#1B1916` — Header, caption, light-console, and mobile-menu surfaces at 92–96% opacity.
- **Ivory** `#F2ECE1` — Primary headings, active labels, and high-contrast body copy.
- **Limestone** `#B8AA93` — Procedural stone, secondary headings, and architectural diagrams.
- **Dust gray** `#A69B8B` — Secondary copy and inactive labels at no smaller than 13px.
- **Aged gold** `#D8B26E` — Active stop, range thumb, focus outline, key sun rays, and primary action only.
- **Ruby glass** `#A83B4B` — One abstract stained-glass family and its matching floor projection.
- **Cobalt glass** `#3D628E` — A second abstract stained-glass family and its matching floor projection.
- **Teal glass** `#4C8078` — A third abstract stained-glass family and its matching floor projection.
- **Amber glass** `#D9A44A` — A fourth abstract stained-glass family and warm transmitted-light accents.

## Typography
- **Hero, architectural stop titles, and section headings** — Newsreader Variable (OFL), weights 400/500/600. Self-host the font files.
- **Body copy, buttons, captions, and controls** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.
- **Stop numbers, time readouts, dimensions, and diagram labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit, a maximum content width of 1440px, 40px desktop gutters, and 20px mobile gutters. Ordinary sections use 112px desktop and 76px mobile vertical padding with a 12-column grid and 24px gaps. Keep body measure between 50 and 66 characters. Caption padding is 28px desktop and 20px mobile; light-control gaps are 12–16px. Preserve 72px desktop and 64px mobile header clearance.
- Radius: Use 2px on buttons and range controls, 6px on captions and the light console, and no rounding on major sections or field-note rows. Avoid generic floating glass-card grids. Circles are reserved for progress dots and the sun-symbol control.

## Motion
- On first entry, reveal the hero copy with a 16px rise over 550ms and ease the threshold camera from z=9 to z=7 over 900ms. After entry the camera is controlled only by scroll and deliberate look input; remove both entrance movements when reduced motion is requested.
- Map normalized tour progress 0,0.2,0.4,0.6,0.8,1 directly to the six camera keyframes. Interpolate camera position and look target with smoothstep, then call lookAt; never use time-based triggers that can drift from scroll. Do not hijack the wheel, snap the page, or block native scrolling.
- At each stop, allow horizontal drag to add at most ±30° yaw and vertical drag or pointer movement to add at most ±18° pitch around the current look target. Reset view removes only these offsets. On touchscreens horizontal drag looks around while vertical touch movement continues to scroll the document.
- Time-of-day changes update sun, hemisphere light, glass emissive intensity, spotlights, projection geometry, SVG diagram, and readouts from one timeMinutes value. Smooth visual lighting changes over 180ms unless reduced motion is requested; the displayed numeric value updates immediately and there is no automatic day cycle.
- Use 160–220ms opacity and at most 6px translation for captions, menus, preset buttons, and field-note return links. Active-stop changes must not wait for a long stagger, and all text remains present in the DOM for assistive technology.
- A restrained field of 180 desktop or 60 mobile dust motes may drift slowly inside the light shafts. Stop dust, entrance easing, look smoothing, and lighting interpolation under prefers-reduced-motion; scroll then selects discrete camera states instantly while every stop and manual control remains available.

## Imagery
The only hero visual is an original high-craft procedural Three.js [ARCHITECTURE] interior seen from first-person eye level. The default scene must immediately read as a Gothic nave through repeated clustered piers, pointed arcades, ribbed vaults, tall abstract stained-glass lancets, warm limestone, and colored light across a stone floor. All geometry, glass designs, material variation, dust, and projections are generated in code. No photographs, AI-generated images, downloaded models, HDRIs, texture maps, religious figures, recognizable landmarks, people, or logos are used. Original inline SVG supplies the architectural section and no-WebGL fallback; Lucide supplies only interface icons.

## Tone
Contemplative, precise, welcoming, and visually cinematic. Use short declarative explanations and clearly labeled illustrative dimensions. The experience should feel like an intimate architecture exhibit, not a horror scene, fantasy game, religious service, real-estate listing, or generic landing page.

---
Inspired by 3D Cathedral Light Tour — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/3d-cathedral-light-tour · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
