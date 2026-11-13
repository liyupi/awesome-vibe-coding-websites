---
name: "Creator Media Kit Page"
colors:
  canvas: "#F3F0E8"
  paper: "#FFFCF6"
  ink: "#1E241F"
  muted_ink: "#65675F"
  persimmon: "#E86A47"
  soft_persimmon: "#F4C9B9"
  moss: "#68775E"
typography:
  display_headlines_campaign_titles_and_large_pull_quotes: { family: "Newsreader Variable", weights: [400, 500, 600] }
  body_copy_navigation_buttons_and_form_controls: { family: "Inter Variable", weights: [400, 500, 600, 700] }
  statistics_chart_labels_package_prices_and_eyebrows: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base unit, a maximum content width of 1320px, 20px mobile and 48px desktop gutters, and a 12-column desktop grid with 24px gaps. Section padding is 72px mobile and 112px desktop, with compact 32px stat-band spacing. Card padding is 24–32px. Keep reading copy to 62 characters per line and never let large metrics force horizontal overflow."
radius: "Use 2px on small labels, 10px on buttons and inputs, 20px on charts and case cards, and 28px on the hero photograph and large feature panels. Use 999px only for compact filter-like tags. Borders are 1px Ink at 14% opacity; shadows are limited to a subtle 0 12px 36px Ink at 7% on the hero and inquiry panels."
---

# Creator Media Kit Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F0E8` — Primary warm page background and generous negative space
- **Paper** `#FFFCF6` — Chart, form, rate-card, and case-study surfaces
- **Ink** `#1E241F` — Primary text, dark buttons, footer, and strong chart strokes
- **Muted Ink** `#65675F` — Secondary copy and metadata at readable contrast
- **Persimmon** `#E86A47` — Primary graphic accent, chart highlights, selection marks, and dark-text button fills
- **Soft Persimmon** `#F4C9B9` — Secondary chart areas, tags, and quiet highlighted surfaces
- **Moss** `#68775E` — Secondary data series, botanical details, and muted decorative strokes

## Typography
- **Display headlines, campaign titles, and large pull quotes** — Newsreader Variable (OFL), weights 400/500/600. Self-host the font files.
- **Body copy, navigation, buttons, and form controls** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Statistics, chart labels, package prices, and eyebrows** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit, a maximum content width of 1320px, 20px mobile and 48px desktop gutters, and a 12-column desktop grid with 24px gaps. Section padding is 72px mobile and 112px desktop, with compact 32px stat-band spacing. Card padding is 24–32px. Keep reading copy to 62 characters per line and never let large metrics force horizontal overflow.
- Radius: Use 2px on small labels, 10px on buttons and inputs, 20px on charts and case cards, and 28px on the hero photograph and large feature panels. Use 999px only for compact filter-like tags. Borders are 1px Ink at 14% opacity; shadows are limited to a subtle 0 12px 36px Ink at 7% on the hero and inquiry panels.

## Motion
- Reveal major sections once with IntersectionObserver: opacity 0 to 1 and translateY 18px to 0 over 450ms, with a 70ms stagger between siblings and no scroll-jacking.
- When the audience section first enters, count numeric values from zero to their final displayed values over 800ms, scale horizontal bars from the left, and draw the line chart with stroke-dashoffset; screen readers receive final values immediately.
- Buttons, campaign disclosures, chart points, and navigation links respond within 160–220ms using color, underline, arrow translation of 4px, or chevron rotation rather than bouncing.
- Selecting a rate package updates the inquiry selection and scrolls to the form only after the explicit click; the destination field receives a visible focus indicator without unexpected form submission.
- Under prefers-reduced-motion, show final numbers and complete charts immediately, remove reveals and smooth scrolling, and keep every disclosure, selection, tooltip, and form state fully functional.

## Imagery
Use exactly the two coordinated generated photographs listed in Assets: a spacious environmental working portrait as the first-screen anchor and a close crop of the same fictional creator's hands at a worktable in the collaboration section. The person is fictional, does not resemble any real individual, and is shown from behind or by hands only so no face is recognizable. Both images share a lived-in home studio, moss linen, parchment walls, persimmon ceramics, leafy green plants, soft morning window light, and restrained editorial film grain. Draw all three partnership covers locally as original SVG compositions of leaves, arcs, grids, circles, and abstract packaging shapes in Canvas, Persimmon, Soft Persimmon, Moss, and Ink; the invented partner name is the only text. Do not add any other photographs, people, client artwork, external logos, or recognizable product designs.

## Tone
Warm, assured, specific, and editorial; commercially useful without sounding corporate, and transparent about every illustrative statistic, outcome, price, and local-only interaction.

---
— Prompt by VibeFather · https://vibefather.ai/t/creator-media-kit-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
