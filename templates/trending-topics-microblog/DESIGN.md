---
name: "Trending Topics Microblog"
colors:
  canvas: "#F3F0E8"
  surface: "#FFFCF6"
  ink: "#20231F"
  muted: "#6F7269"
  line: "#D9D6CC"
  coral: "#E86A4A"
  coral_dark: "#A63F2A"
  sage: "#DCE8D8"
  forest: "#285846"
  sun: "#F1C75B"
typography:
  display_and_brand: { family: "Bricolage Grotesque Variable", weights: [600, 700, 800] }
  interface_and_post_body: { family: "Inter Variable", weights: [400, 500, 600, 700] }
  heat_scores_counts_timestamps_and_rank_numbers: { family: "IBM Plex Mono", weights: [500, 600] }
spacing: "Use a 4px base unit. The desktop shell is max-width 1360px with 24px outer padding, columns of 216px, minmax(0, 660px), and 312px, and 24px gutters. Cards use 20px padding on desktop and 16px on mobile. Post rows have 16px vertical rhythm; trend rows are 64px tall. At 1440×900, show the full header, composer, first media post, and at least five trend rows without crowding."
radius: "Use 18px for feed and panel cards, 14px for artwork and image previews, 12px for inputs and buttons, and 999px for chips, badges, avatars, and icon-button hover fields. Borders and spacing define the layout; use only a soft 0 10px 30px rgba(32,35,31,0.05) shadow on drawers and the sticky composer when focused."
---

# Trending Topics Microblog — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F0E8` — Warm oat page background with a very subtle CSS dot texture at 3% opacity.
- **Surface** `#FFFCF6` — Cards, header, composer, and drawers.
- **Ink** `#20231F` — Primary text, dark navigation pills, and primary buttons.
- **Muted** `#6F7269` — Metadata, timestamps, secondary labels, and inactive icons.
- **Line** `#D9D6CC` — One-pixel borders, separators, input outlines, and heat-bar tracks.
- **Coral** `#E86A4A` — Heat bars, rank-change highlights, selected reaction accents, and small graphic details.
- **Coral Dark** `#A63F2A` — Accessible coral text, hot-badge text, counter warnings, and focus details on light surfaces.
- **Sage** `#DCE8D8` — New badges, selected filter backgrounds, and gentle illustration fields.
- **Forest** `#285846` — New-badge text, positive rank deltas, and live-simulation labels.
- **Sun** `#F1C75B` — Small hot-badge fields and warm highlights in the SVG artwork; never body text.

## Typography
- **Display and brand** — Bricolage Grotesque Variable (OFL), weights 600/700/800. Self-host the font files.
- **Interface and post body** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Heat scores, counts, timestamps, and rank numbers** — IBM Plex Mono (OFL), weights 500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. The desktop shell is max-width 1360px with 24px outer padding, columns of 216px, minmax(0, 660px), and 312px, and 24px gutters. Cards use 20px padding on desktop and 16px on mobile. Post rows have 16px vertical rhythm; trend rows are 64px tall. At 1440×900, show the full header, composer, first media post, and at least five trend rows without crowding.
- Radius: Use 18px for feed and panel cards, 14px for artwork and image previews, 12px for inputs and buttons, and 999px for chips, badges, avatars, and icon-button hover fields. Borders and spacing define the layout; use only a soft 0 10px 30px rgba(32,35,31,0.05) shadow on drawers and the sticky composer when focused.

## Motion
- On first load, stagger the shell, composer, first post, and trend panel by 40ms with a 240ms opacity and 12px upward reveal; never animate the entire feed for several seconds.
- When local activity changes a ranking, animate row reordering with a 260ms FLIP transition and heat-bar width over 500ms using cubic-bezier(0.22,1,0.36,1); briefly tint only the changed numeric delta.
- New posts enter at the top with a 280ms opacity and -12px transform transition. Toasts fade and translate upward over 180ms, remain for 2.5 seconds, and never cover the composer or mobile navigation.
- Reaction buttons use 160ms color and background transitions with no layout shift. Comment regions expand with opacity and a maximum-height transition while remaining keyboard accessible.
- Hash-page changes crossfade the main column over 180ms and scroll its heading into view without smooth scrolling on mobile. Respect prefers-reduced-motion by removing reveals, FLIP movement, automatic activity, and smooth scrolling.

## Imagery
Draw every visual in code. Use four original 16:9 inline SVG editorial illustrations with flat geometric shapes, crisp 2px ink outlines, restrained coral, sage, sun, and cream fills, and tiny hand-placed texture marks rather than photographs. The scenes are a rain-filled rooftop garden, a shaded neighborhood tree map, evening primroses with abstract pollinators, and a gravel-and-reed pocket wetland. Include no words, logos, recognizable landmarks, real products, or human faces. Generate abstract avatars from circles, arcs, and offset color blocks with a unique seed per fictional account; do not use initials-only avatars, stock portraits, or real likenesses. A compact SVG sparkline in the community-pulse card uses the same visual language. The first-screen media post and dense app UI are the visual anchor.

## Tone
Observant, friendly, specific, and unhurried. Use concise posts about concrete discoveries and works in progress rather than engagement bait, generic motivational copy, or claims of real online activity.

---
— Prompt by VibeFather · https://vibefather.ai/t/trending-topics-microblog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
