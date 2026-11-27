---
name: "Marketing Campaign Strategy Deck"
colors:
  crisp_snow: "#FAFAFA"
  deep_ink: "#121214"
  vivid_coral: "#FF4D4F"
  sunshine_yellow: "#FACC15"
  light_graphite: "#E4E4E7"
  muted_zinc: "#52525B"
typography:
  bold_display_headings: { family: "Bricolage Grotesque", weights: [600, 700, 800] }
  body_copy_and_ui: { family: "Inter", weights: [400, 500, 600, 700] }
  budgets_ratios_and_slide_numbers: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "Desktop frames each 16:9 slide cleanly inside 100dvh (max 1320px, 44px padding) above a 56px bottom presentation bar. Mobile (<768px) reflows cleanly to single-column cards with >=44px touch controls and zero horizontal overflow."
radius: "12px for persona and metric cards, 8px for toggles and Gantt bars, 999px for channel badges."
---

# Marketing Campaign Strategy Deck — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Crisp Snow** `#FAFAFA` — Primary bright slide canvas
- **Deep Ink** `#121214` — Display headings, bold contrast cards, and primary text
- **Vivid Coral** `#FF4D4F` — Primary campaign energy accent, active scenario bars, and hero anchor
- **Sunshine Yellow** `#FACC15` — Highlight markers, milestone blocks, and secondary callout tags (paired only with #121214 ink for high contrast)
- **Light Graphite** `#E4E4E7` — Crisp 1px borders and chart gridlines
- **Muted Zinc** `#52525B` — Secondary captions and metadata

## Typography
- **Bold display headings** — Bricolage Grotesque (OFL), weights 600/700/800. Self-host the font files.
- **Body copy and UI** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Budgets, ratios, and slide numbers** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Desktop frames each 16:9 slide cleanly inside 100dvh (max 1320px, 44px padding) above a 56px bottom presentation bar. Mobile (<768px) reflows cleanly to single-column cards with >=44px touch controls and zero horizontal overflow.
- Radius: 12px for persona and metric cards, 8px for toggles and Gantt bars, 999px for channel badges.

## Motion
- Snappy 200ms slide cross-translate transitions honoring prefers-reduced-motion.
- Smooth animated SVG bar widths when switching between Balanced, Paid-Heavy, and Organic budget scenarios.
- Interactive persona tab highlight and readiness checklist completion progress animation.
- All slide content renders visible immediately with no clip-path reveal traps.

## Imagery
Bold code-drawn campaign graphics: geometric hardware silhouette schematic on the cover, SVG full-funnel diagram, animated SVG budget allocator bars, 8-week Gantt visual, and Lucide icons. Zero external photos.

## Tone
Sharp, energetic, metric-backed, consumer-savvy, and structured.

---
— Prompt by VibeFather · https://vibefather.ai/t/marketing-campaign-strategy-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
