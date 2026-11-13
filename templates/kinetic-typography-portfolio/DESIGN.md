---
name: "Kinetic Typography Portfolio"
colors:
  ink: "#0B0B0C"
  ink_2: "#141416"
  paper: "#F2EFE8"
  paper_dim: "#A9A59C"
  line: "#2A2A2D"
  hot: "#FF4A1C"
  hot_deep: "#C7330F"
typography:
  display_name_project_titles_giant_headings_transition_word_uppercase_with_tracking_0_02em_and_line_height_0_82_rest_state_wght_800_wdth_100_animated_across_wght_100_900_and_wdth_50_150_through_css_variables: { family: "Anybody Variable (@fontsource-variable/anybody, wdth axis file)", weights: [100, 300, 500, 800, 900] }
  body_copy_and_paragraphs_at_17px_desktop_16px_mobile_line_height_1_55_max_width_60ch: { family: "Inter Variable (@fontsource-variable/inter)", weights: [400, 500, 600] }
  labels_indexes_01_08_meta_keys_nav_buttons_uppercase_12px_letter_spacing_0_08em: { family: "JetBrains Mono Variable (@fontsource-variable/jetbrains-mono)", weights: [400, 600] }
spacing: "12-column grid with 24px gutters and 40px outer margins on desktop (max width none; type runs edge to edge inside the margins). On mobile: 4 columns, 16px gutters, 16px margins. Section vertical padding is clamp(96px, 14vw, 200px). Leave a lot of negative space: text blocks sit on columns 7–12 or 2–7, never centered blocks of copy. Every list row is separated by a 1px #2A2A2D rule."
radius: "0 everywhere: sharp rectangles for images, cards, buttons and chips. The only round shapes are the rotating circular badge and the 8px status dot."
---

# Kinetic Typography Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0B0B0C` — Page background on every page
- **Ink 2** `#141416` — Raised panels, project card backgrounds, menu overlay
- **Paper** `#F2EFE8` — Primary text and giant display type
- **Paper dim** `#A9A59C` — Secondary text, mono labels, meta values
- **Line** `#2A2A2D` — 1px hairline rules between list rows and grid cells
- **Hot** `#FF4A1C` — The single accent: badge, marquee band, transition panel, hover underline, focus rings and active filter chip
- **Hot deep** `#C7330F` — Pressed and hover state of hot buttons, shadow tone inside the code-drawn stills

## Typography
- **Display: name, project titles, giant headings, transition word. Uppercase with tracking -0.02em and line-height 0.82. Rest state wght 800 / wdth 100; animated across wght 100–900 and wdth 50–150 through CSS variables** — Anybody Variable (@fontsource-variable/anybody, wdth axis file) (OFL), weights 100/300/500/800/900. Self-host the font files.
- **Body copy and paragraphs at 17px desktop / 16px mobile, line-height 1.55, max width 60ch** — Inter Variable (@fontsource-variable/inter) (OFL), weights 400/500/600. Self-host the font files.
- **Labels, indexes (01–08), meta keys, nav, buttons. Uppercase 12px, letter-spacing 0.08em** — JetBrains Mono Variable (@fontsource-variable/jetbrains-mono) (OFL), weights 400/600. Self-host the font files.

## Spacing & shape
- Spacing: 12-column grid with 24px gutters and 40px outer margins on desktop (max width none; type runs edge to edge inside the margins). On mobile: 4 columns, 16px gutters, 16px margins. Section vertical padding is clamp(96px, 14vw, 200px). Leave a lot of negative space: text blocks sit on columns 7–12 or 2–7, never centered blocks of copy. Every list row is separated by a 1px #2A2A2D rule.
- Radius: 0 everywhere: sharp rectangles for images, cards, buttons and chips. The only round shapes are the rotating circular badge and the 8px status dot.

## Motion
- Default easing is 'expo.out' for reveals and 'power3.inOut' for transitions. Durations: 0.6s micro, 0.9s reveals, 1.2s transitions.
- Hero split and re-form: the hero section is pinned for 180% of the viewport height with ScrollTrigger (scrub 0.8). For progress 0→0.5, each letter of the name moves on x by (index − center) × 6vw and on y by alternating ±18vh, rotates ±8deg, and --x goes from 100 to 50 on even letters and to 150 on odd letters. For progress 0.5→1, every letter returns to x 0, y 0, rotate 0 and --x 100 while --w sweeps 800→300→900. The photo inside the first line scales from 1.15 to 1.
- Intro statement: each word starts at --w 200 and opacity 0.25, then moves to --w 700 and opacity 1, scrubbed word by word as the paragraph crosses from 80% to 30% of the viewport.
- Project row hover (pointer devices only): on enter the title tweens --w 300→900 and --x 70→120 over 0.6s. While hovering, the pointer's x position across the row maps --x linearly from 60 at the left to 140 at the right with gsap.quickTo (duration 0.4). On leave it returns to --w 300 / --x 70. Siblings dim to opacity 0.35.
- Cursor preview: a 360×240 canvas card follows the pointer with gsap.quickTo (x and y, duration 0.5, 'power3'). It reveals with clip-path inset(50% 50% 50% 50%) → inset(0) in 0.5s and rotates ±4deg with horizontal velocity. It swaps the project still as the hovered row changes. Hidden on touch devices.
- Marquee bands: two copies of the content loop horizontally with gsap (xPercent −50, linear, 22s, repeat −1). ScrollTrigger velocity adds to timeScale (1 + |velocity| / 600, clamped at 5) and sets skewX to velocity / −300, clamped at ±12deg. Both ease back to 1 and 0 over 0.8s. Scrolling up reverses the direction.
- Case transition: clicking any project link calls preventDefault and shows the overlay. A hot #FF4A1C panel wipes up from the bottom with clip-path inset(100% 0 0 0) → inset(0) over 0.5s 'power3.inOut'. The project title, set at 28vw in near-black, travels on x from 100vw to −100% of its width over 1.1s while --w goes 100→900 and --x goes 50→150. At 0.9s the page navigates to case.html?slug=…, after writing sessionStorage 'vf-transition' = slug inside try/catch. On case.html load, if the flag is present, the overlay starts fully covering the screen and the title freezes at --w 900. The panel then wipes up and out (inset(0) → inset(0 0 100% 0), 0.7s) as the case header letters rise. Without the flag the case page plays only its header reveal.
- Next-project link: the giant title's --x follows pointer distance to its center, 60 when the pointer is 600px or more away and 150 when it is on top. It is computed every frame from a single pointermove listener and tweened with quickTo.
- Reveal on scroll: images clip in with inset(0 0 100% 0) → inset(0) at 0.9s. Mono labels and paragraphs fade and rise 24px, staggered 0.06s. Each element triggers once at 'top 85%'.
- Code-drawn stills animate slowly with requestAnimationFrame (t advances 0.004 per frame) only while visible, controlled by IntersectionObserver.
- prefers-reduced-motion: reduce. Do not start Lenis, pin, scrub, marquee loops, still animation, the cursor preview or the overlay. Letters sit at rest (--w 800, --x 100), project titles at --w 500, and stills render one static frame. Links navigate immediately. Content appears without fades.

## Imagery
Five photographs of one fictional designer and their studio, all from the same shoot: dim concrete studio, warm tungsten light, one orange-red practical glow, deep shadows, fine film grain. They are generated for this template. Everything else is drawn in code. Each project has a unique canvas still built from the palette (ink, paper, hot, hot deep), so the work feels like frames pulled from a reel. Photos get a subtle CSS treatment: filter contrast(1.05) saturate(0.9), plus a 3% SVG noise overlay across the whole page (an inline feTurbulence SVG set as a fixed pointer-events-none layer at opacity 0.06). No icons beyond a handful of Lucide arrows, plus menu, close, copy and check.

## Tone
Confident, quiet and precise. Short declarative sentences, first person singular, no buzzwords. The type does the shouting and the copy stays calm. Credits and numbers are specific: real-sounding durations, team sizes and festival names, all invented.

---
— Prompt by VibeFather · https://vibefather.ai/t/kinetic-typography-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
