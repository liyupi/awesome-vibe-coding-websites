---
name: "Video Production Company Website"
colors:
  ink: "#0B0B0D"
  bone: "#F2EEE7"
  ash: "#AAA49B"
  ember: "#E56B45"
  slate: "#243338"
  line: "#343236"
typography:
  display_headlines_and_italic_editorial_accents: { family: "Instrument Serif", weights: [400] }
  body_copy_navigation_buttons_and_form_controls: { family: "Manrope Variable", weights: [400, 500, 600, 700] }
  project_numbers_timecodes_labels_and_technical_metadata: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base unit and a 12-column desktop grid inside max-width 1440px with 48px side gutters at 1440px, 28px at tablet, and 20px on mobile. Major sections use clamp(88px, 10vw, 156px) vertical padding. Display headlines use clamp(64px, 9.2vw, 148px) with 0.86 line-height; page titles use clamp(56px, 7.4vw, 112px). Keep body measure at 58–68 characters and metadata at 11–12px with 0.12em tracking."
radius: "Keep the visual language almost square: 2px on images, panels, and inputs; 0px on full-bleed media; 999px only on compact filter chips and status pills. Avoid generic rounded card stacks and heavy shadows."
---

# Video Production Company Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0B0B0D` — Primary page background and dark surfaces
- **Bone** `#F2EEE7` — Primary text, reversed buttons, and large display type
- **Ash** `#AAA49B` — Secondary text, metadata, and inactive controls
- **Ember** `#E56B45` — Play control, active filters, links, focus rings, and small highlights
- **Slate** `#243338` — Alternate panels, form fields, and image-placeholder tint
- **Line** `#343236` — Hairline borders, table rules, and control outlines

## Typography
- **Display headlines and italic editorial accents** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Body copy, navigation, buttons, and form controls** — Manrope Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Project numbers, timecodes, labels, and technical metadata** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit and a 12-column desktop grid inside max-width 1440px with 48px side gutters at 1440px, 28px at tablet, and 20px on mobile. Major sections use clamp(88px, 10vw, 156px) vertical padding. Display headlines use clamp(64px, 9.2vw, 148px) with 0.86 line-height; page titles use clamp(56px, 7.4vw, 112px). Keep body measure at 58–68 characters and metadata at 11–12px with 0.12em tracking.
- Radius: Keep the visual language almost square: 2px on images, panels, and inputs; 0px on full-bleed media; 999px only on compact filter chips and status pills. Avoid generic rounded card stacks and heavy shadows.

## Motion
- The hero automatically crossfades three frames every 4800ms with a 1200ms opacity ease and a slow scale from 1.025 to 1. Pause when the tab is hidden or the hero leaves the viewport; reduced-motion users see the first static frame.
- Play the reel opens a fixed modal and advances all six local stills every 1600ms with a 500ms crossfade, chapter label, elapsed frame counter, and thin progress segments. Play, pause, previous, next, close, Escape, focus trapping, and return-focus behavior must work; there is no audio or remote video.
- Reveal section headings, rules, and project rows once on entry with opacity 0 to 1 and y 36px to 0 over 650ms, staggering siblings by 80ms. Remove transforms and delays under prefers-reduced-motion.
- Filter changes animate visible cards with 180ms opacity and 8px vertical movement while updating counts immediately. Project-card images scale to 1.035 over 500ms on hover and their arrow moves 4px diagonally; focus states receive the same emphasis without depending on hover.
- Each HTML page enters with a restrained 250ms opacity fade. Navigation remains native file navigation; do not intercept clicks or imitate a client-side router. Mobile navigation and FAQ accordions use 200ms opacity and height transitions with reduced-motion alternatives.

## Imagery
Use one coherent set of six realistic cinematic photographs with charcoal and slate-teal shadows, burnt-amber practical light, 35mm anamorphic framing, fine grain, and no text, logos, recognizable faces, real people's likenesses, or identifiable landmarks. The hero layers reel-night, reel-dancer, and reel-vessel; the reel modal uses all six. Each project owns its matching still, and case studies reuse that still in deliberate full-frame and detail-crop compositions rather than inventing extra assets. Keep imagery bright enough to read in screenshots while using a left-to-right black gradient only where headline legibility needs it.

## Tone
Assured, tactile, concise, and director-led. Use specific production language and practical details rather than agency clichés, awards, inflated results, or grandiose claims. All brands, clients, people, projects, addresses, prices, and testimonials are fictional.

---
— Prompt by VibeFather · https://vibefather.ai/t/video-production-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
