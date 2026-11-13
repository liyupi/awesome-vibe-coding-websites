---
name: "Cybersecurity SaaS Landing Page"
colors:
  deep_field: "#071114"
  panel_ink: "#0D1C20"
  raised_line: "#173036"
  grid_line: "#28434A"
  mist: "#E8F1EE"
  slate_text: "#93AAA9"
  signal_mint: "#78E0CF"
  alert_coral: "#FF927A"
  button_ink: "#09201F"
typography:
  display_headlines_section_titles_and_large_sample_metrics: { family: "Space Grotesk Variable, self-hosted with @fontsource-variable/space-grotesk", weights: [500, 600, 700] }
  body_copy_navigation_buttons_tabs_and_form_controls: { family: "Inter Variable, self-hosted with @fontsource-variable/inter", weights: [400, 500, 600, 700] }
  eyebrows_map_coordinates_event_metadata_badges_and_small_system_labels: { family: "IBM Plex Mono, self-hosted with @fontsource/ibm-plex-mono", weights: [400, 500] }
spacing: "Use an 8px base grid. Content max-width is 1280px with 40px desktop and 20px mobile gutters. Major sections use 112px desktop and 76px mobile vertical padding. The header is 72px high. Hero copy and visual columns have a 56px gap; panel padding is 24–32px desktop and 18–22px mobile. Keep body measures between 48 and 66 characters."
radius: "Use 4px for tags and small badges, 8px for inputs and buttons, and 12px for major panels. Avoid pill-shaped containers except tiny status dots. Use 1px Grid Line borders and a restrained 0 20px 60px rgb(0 0 0 / 0.24) shadow only on the hero map and demo form."
---

# Cybersecurity SaaS Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep Field** `#071114` — Page background, header, and footer
- **Panel Ink** `#0D1C20` — Map, product viewer, form, and raised section surfaces
- **Raised Line** `#173036` — Selected rows, input backgrounds, and quiet tonal blocks
- **Grid Line** `#28434A` — Borders, coordinate rules, dividers, and inactive tracks
- **Mist** `#E8F1EE` — Primary headings, body text on dark surfaces, and important values
- **Slate Text** `#93AAA9` — Secondary copy, metadata, labels, and inactive controls
- **Signal Mint** `#78E0CF` — Primary buttons, active tabs, resolved events, focus rings, and key data
- **Alert Coral** `#FF927A` — Only investigating events, one alert node, validation errors, and sparse emphasis
- **Button Ink** `#09201F` — Text and icons on Signal Mint buttons

## Typography
- **Display headlines, section titles, and large sample metrics** — Space Grotesk Variable, self-hosted with @fontsource-variable/space-grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Body copy, navigation, buttons, tabs, and form controls** — Inter Variable, self-hosted with @fontsource-variable/inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Eyebrows, map coordinates, event metadata, badges, and small system labels** — IBM Plex Mono, self-hosted with @fontsource/ibm-plex-mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid. Content max-width is 1280px with 40px desktop and 20px mobile gutters. Major sections use 112px desktop and 76px mobile vertical padding. The header is 72px high. Hero copy and visual columns have a 56px gap; panel padding is 24–32px desktop and 18–22px mobile. Keep body measures between 48 and 66 characters.
- Radius: Use 4px for tags and small badges, 8px for inputs and buttons, and 12px for major panels. Avoid pill-shaped containers except tiny status dots. Use 1px Grid Line borders and a restrained 0 20px 60px rgb(0 0 0 / 0.24) shadow only on the hero map and demo form.

## Motion
- Reveal major sections once with Motion whileInView: opacity 0 to 1 and translateY(22px) to 0 over 480ms with a 60ms stagger between direct children; content must remain visible without JavaScript intersection support.
- On the hero map, animate route dash offset over 4.5 seconds and node rings from scale 0.75 to 1.35 with fading opacity over 2.4 seconds. Only one route and one node receive Alert Coral emphasis at a time.
- Advance the simulated highlighted event every 2800ms without adding or removing rows. Pause feed freezes dash, pulse, and interval motion and changes its label to Resume feed; restarting continues from the current event.
- Product views swap with AnimatePresence using 180ms opacity and translateX(10px) transitions inside a stable min-height viewer. Active tab indicator color changes over 160ms; content height must not jump dramatically.
- Buttons translate upward 1px on hover and return on press over 140ms. Accordion answers use 180ms opacity and height transitions, and the mobile menu uses a 160ms fade and 8px downward entrance.
- The request preview replaces the form with a 220ms opacity and 12px rise transition, then moves focus to its heading. Copy request changes its button label to Request copied for 1600ms.
- Under prefers-reduced-motion, remove section reveals, route movement, node pulses, automatic event rotation, smooth scrolling, and transform transitions. Show the complete static feed and final component states immediately.

## Imagery
Use no photographs, generated bitmaps, external maps, stock illustrations, or image placeholders. The hero anchor is a large original SVG operational map: simplified hand-authored continent silhouettes, a subtle dot matrix, longitude and latitude guides, six fixed location nodes, curved routes, crosshair details, and a compact event rail. Draw four distinct product-module interfaces in HTML/CSS/SVG. Use only abstract bracket, node, route, waveform, and ledger motifs; no shields, hooded figures, skulls, padlock clichés, brand logos, or certification seals.

## Tone
Calm, exact, operational, and assured. Use concrete product language and useful detail instead of fear, cinematic hacker clichés, vague superlatives, or unsupported security claims. Treat animated activity as illustrative interface content, never as evidence of real protection or live telemetry.

---
— Prompt by VibeFather · https://vibefather.ai/t/cybersecurity-saas-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
