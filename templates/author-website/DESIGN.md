---
name: "Author Website"
colors:
  vellum: "#F2EDE3"
  paper: "#FBF8F1"
  ink: "#1E2A26"
  muted_ink: "#626A62"
  oxblood: "#873F38"
  moss: "#87957F"
  hairline: "#D6CCBC"
  faded_ochre: "#C4A46A"
typography:
  display_and_literary_quotations: { family: "Fraunces Variable", weights: [400, 500, 600] }
  body_navigation_forms_and_metadata: { family: "Source Sans 3", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base scale, a 1280px maximum content width, 48px desktop gutters and 20px mobile gutters. Major sections have 112px vertical padding on desktop and 72px on mobile. Keep prose between 62ch and 68ch, use 1px rules to organize dense information, and maintain at least 16px between interactive controls."
radius: "Use square page edges and book covers, 2px corners on buttons, inputs and the portrait frame, and fully rounded shapes only for tiny genre or format labels. Avoid floating pill-shaped cards and large soft shadows."
---

# Author Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Vellum** `#F2EDE3` — Main page background and generous negative space
- **Paper** `#FBF8F1` — Reading surfaces, the header and alternating editorial bands
- **Ink** `#1E2A26` — Primary text, dark footer and primary buttons
- **Muted Ink** `#626A62` — Metadata, captions and secondary copy
- **Oxblood** `#873F38` — Links, active rules, small labels and the primary accent
- **Moss** `#87957F` — Secondary book-cover geometry and quiet illustrative details
- **Hairline** `#D6CCBC` — One-pixel borders, separators and input outlines
- **Faded Ochre** `#C4A46A` — Sparse cover accents only, never body text or large backgrounds

## Typography
- **Display and literary quotations** — Fraunces Variable (OFL), weights 400/500/600. Self-host the font files.
- **Body, navigation, forms and metadata** — Source Sans 3 (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base scale, a 1280px maximum content width, 48px desktop gutters and 20px mobile gutters. Major sections have 112px vertical padding on desktop and 72px on mobile. Keep prose between 62ch and 68ch, use 1px rules to organize dense information, and maintain at least 16px between interactive controls.
- Radius: Use square page edges and book covers, 2px corners on buttons, inputs and the portrait frame, and fully rounded shapes only for tiny genre or format labels. Avoid floating pill-shaped cards and large soft shadows.

## Motion
- On the home hero, reveal the eyebrow, headline, copy and actions with a 90ms stagger over 600ms while the portrait settles from scale 1.025 to 1; content must remain visible when JavaScript is unavailable.
- Reveal major sections once as they enter the viewport, moving from opacity 0 and translateY 20px over 500ms; never hide the whole page before an observer fires.
- Give book covers a restrained pointer tilt of at most 4 degrees, translateY(-6px) and a narrow paper-edge highlight over 180ms; reset on pointer leave and disable tilt on touch devices.
- Update the excerpt reading-progress rule with native scroll position, animate accordions and mobile navigation over 160–220ms, and move focus correctly when they open or close.
- Use smooth anchor scrolling only under prefers-reduced-motion: no-preference; under reduce, remove reveals, tilt, parallax and nonessential transitions without disabling reading progress or controls.

## Imagery
Use one supplied, professionally lit editorial photograph of a completely fictional author at a writing desk as the hero, about-page and press-kit portrait. It is a reusable placeholder: retain the supplied local file across variable cases and update its alt text to [BRAND]. All four book jackets are original inline SVG compositions built from geometric lines, contour paths, circles and typographic title/author text; each has its own palette and motif but the same trim ratio and fine paper grain. Do not add other photographs, recognizable people, existing cover art, retailer marks or decorative stock illustration.

## Tone
Warm, observant, intelligent and quietly intimate. Use precise sensory details and short editorial sentences, never breathless marketing, fabricated acclaim, generic inspirational language or literary clichés.

---
— Prompt by VibeFather · https://vibefather.ai/t/author-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
