---
name: "Architecture Firm Portfolio"
colors:
  concrete: "#F2F1EE"
  concrete_deep: "#E8E6E1"
  paper: "#FBFAF8"
  ink: "#1A1B1D"
  ink_soft: "#5C5F63"
  rust: "#B0491F"
  rust_deep: "#8F3A17"
  hairline: "#D6D4CE"
  drawing: "#B9B7B0"
typography:
  display_h1_h2_project_names_the_wordmark_typology_filter_labels_archivo_in_wide_uppercase_with_letterspacing: { family: "Archivo", weights: [600, 800] }
  text_and_ui_body_facts_values_captions_buttons_plan_room_labels_numbers_tabular_numerals_for_areas: { family: "IBM Plex Sans", weights: [300, 400, 500] }
spacing: "8px base unit. Container max-width 1280px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 120px desktop, 88px under 1024px, 72px under 640px — architecture breathes at the top of the scale. Section headers carry the SectionNumber system: '01' in Archivo 800 13px Rust + the label in Archivo 600 13px uppercase letterspaced + a 1px Hairline rule running to the container edge. Type scale: H1 clamp(44px, 6.4vw, 92px) Archivo 800 uppercase, line-height 1.0, letter-spacing 0.01em; H2 clamp(30px, 3.8vw, 52px) Archivo 800 uppercase; project names Archivo 800 26px uppercase; lead IBM Plex 300 19px / 1.7 Ink at 92%; body 16px / 1.75 (max-width 64ch); labels IBM Plex 500 11px uppercase letter-spacing 0.22em Ink Soft; facts values IBM Plex 400 15px tabular. Buttons: height 48px, Archivo 600 13px uppercase letter-spacing 0.08em. Primary: Ink fill, Concrete text. Secondary: 1px Ink border, Ink text. Inputs: height 48px, 1px Hairline border, Paper fill, focus Ink border. Focus ring everywhere: 2px Rust outline with 3px offset."
radius: "0px on everything — cards, buttons, inputs, images, the plan panel. The practice draws squares."
---

# Architecture Firm Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Concrete** `#F2F1EE` — Page background throughout.
- **Concrete Deep** `#E8E6E1` — Alternate section background (index rows, awards), hover fills.
- **Paper** `#FBFAF8` — Facts block, inquiry card, plan panel surfaces.
- **Ink** `#1A1B1D` — Headlines, body text, plan lines, icon color.
- **Ink Soft** `#5C5F63` — Secondary text, captions, labels, facts values.
- **Rust** `#B0491F` — The one accent: section numbers, filter active state, plan's dimension ticks, focus ring, inquiry send.
- **Rust Deep** `#8F3A17` — Hover and pressed states.
- **Hairline** `#D6D4CE` — 1px hairlines everywhere: rows, facts grid, plan frame, dividers.
- **Drawing** `#B9B7B0` — Plan hatch fills and furniture strokes (lighter than Ink).

## Typography
- **Display: H1, H2, project names, the wordmark, typology filter labels — Archivo in wide uppercase with letterspacing** — Archivo (OFL), weights 600/800. Self-host the font files.
- **Text and UI: body, facts values, captions, buttons, plan room labels, numbers (tabular numerals for areas)** — IBM Plex Sans (OFL), weights 300/400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1280px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 120px desktop, 88px under 1024px, 72px under 640px — architecture breathes at the top of the scale. Section headers carry the SectionNumber system: '01' in Archivo 800 13px Rust + the label in Archivo 600 13px uppercase letterspaced + a 1px Hairline rule running to the container edge. Type scale: H1 clamp(44px, 6.4vw, 92px) Archivo 800 uppercase, line-height 1.0, letter-spacing 0.01em; H2 clamp(30px, 3.8vw, 52px) Archivo 800 uppercase; project names Archivo 800 26px uppercase; lead IBM Plex 300 19px / 1.7 Ink at 92%; body 16px / 1.75 (max-width 64ch); labels IBM Plex 500 11px uppercase letter-spacing 0.22em Ink Soft; facts values IBM Plex 400 15px tabular. Buttons: height 48px, Archivo 600 13px uppercase letter-spacing 0.08em. Primary: Ink fill, Concrete text. Secondary: 1px Ink border, Ink text. Inputs: height 48px, 1px Hairline border, Paper fill, focus Ink border. Focus ring everywhere: 2px Rust outline with 3px offset.
- Radius: 0px on everything — cards, buttons, inputs, images, the plan panel. The practice draws squares.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and filter shuffles; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the plan draw and inquiry swap. Structural and unhurried.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and settle over 700ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the large project photo scales 1.04→1.0 over 2800ms; the practice name's letters rise with 40ms stagger; the section number '01' ticks in last.
- Index filtering: rows use Motion layout with AnimatePresence mode 'popLayout'; leaving rows fade 180ms, survivors glide 380ms --ease-io; the count crossfades; the empty index (impossible with defaults, still coded) shows 'No work in this typology yet — the folder is honest.' with Reset.
- Index rows: hover fills Concrete Deep and slides a 4px Rust rule in from the left; the photo desaturates 5%.
- Plan draw: when the plan enters view, the walls draw (stroke-dashoffset, 1100ms), then room labels fade in with 60ms stagger, then the Rust dimension ticks pop; hatching fills settle last. Under reduced motion, the plan renders complete.
- Facts block: the values count once on reveal (areas in tabular numerals, 600ms).
- Inquiry: invalid submit shakes 4px with inline labels; sending swaps to the sent state (280ms --ease-io) — a drawn Rust square stamp 'RECEIVED' rotating in 6deg to rest -3deg.
- Awards: rows reveal with a 40ms stagger; the year spans stay static.
- Links: .link-draw grows a 1px Ink underline over 250ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, staggers, draws or counts; everything renders at rest. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Architectural photography, all six made for this template in one consistent shoot: overcast-even light, concrete and pale wood, muted greens, straight-on and one-point perspectives, studio photos are AI-generated fictional people at work (consistent overcast-window light); building photography stays people-free with no readable signage. Every photo uses object-fit cover with the object-position given under Assets, 0px corners (square, like the practice), no shadow; photos on Concrete get a 1px Hairline outline. Captions in IBM Plex 12px Ink Soft. Drawn in code: the per-project floor plans (walls, hatching, furniture strokes, room labels, dimension ticks — pure SVG geometry), the section-number system, the 'RECEIVED' stamp and the favicon. Icons: lucide-react only, stroke width 1.5, used sparingly (ArrowUpRight, Plus, Check, X, ArrowRight).

## Tone
Precise and quiet, like a set of specifications. Short declarative sentences, exact numbers (square meters, years), no poetry about light unless it is structural.

---
— Prompt by VibeFather · https://vibefather.ai/t/architecture-firm-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
