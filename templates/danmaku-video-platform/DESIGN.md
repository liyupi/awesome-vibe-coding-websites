---
name: "Danmaku Video Platform"
colors:
  canvas: "#0B0D12"
  surface: "#141821"
  raised: "#1B2230"
  line: "#2B3444"
  text: "#F5F2E9"
  muted: "#9AA5B6"
  amber: "#F2C14E"
  coral: "#F27D62"
typography:
  display_film_titles_and_wordmark: { family: "Space Grotesk", weights: [500, 600, 700] }
  interface_descriptions_and_comments: { family: "Inter", weights: [400, 500, 600] }
  timecodes_counts_and_density_labels: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "Use a 4px base unit. Cap the main shell at 1500px with 40px desktop gutters, 24px tablet gutters, and 16px mobile gutters. Header height is 72px desktop and 64px mobile. Use 24px card padding, 32px section gaps, and 48px between the featured area and feed; keep dense metadata at 8px line gaps."
radius: "Use 18px for media cards and the player, 14px for panels, 10px for buttons and inputs, and full pills only for compact filters and status badges. Media corners stay crisp; use 1px Line borders instead of heavy shadows."
---

# Danmaku Video Platform — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#0B0D12` — Page background and player letterbox
- **Surface** `#141821` — Cards, navigation, and conversation panel
- **Raised** `#1B2230` — Inputs, hovered cards, and control menus
- **Line** `#2B3444` — One-pixel borders and inactive timeline bars
- **Text** `#F5F2E9` — Primary text and high-contrast danmaku
- **Muted** `#9AA5B6` — Metadata, timestamps, and secondary labels
- **Amber** `#F2C14E` — Primary actions, active states, playhead, and density peaks
- **Coral** `#F27D62` — Creator comments and small conversational highlights

## Typography
- **Display, film titles, and wordmark** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Interface, descriptions, and comments** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Timecodes, counts, and density labels** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Cap the main shell at 1500px with 40px desktop gutters, 24px tablet gutters, and 16px mobile gutters. Header height is 72px desktop and 64px mobile. Use 24px card padding, 32px section gaps, and 48px between the featured area and feed; keep dense metadata at 8px line gaps.
- Radius: Use 18px for media cards and the player, 14px for panels, 10px for buttons and inputs, and full pills only for compact filters and status badges. Media corners stay crisp; use 1px Line borders instead of heavy shadows.

## Motion
- Render each film from normalized playback time so seeking produces the same frame immediately; cap scene animation at 30fps while keeping controls responsive.
- Move danmaku with horizontal transforms in collision-aware lanes. Pause freezes every comment, seeking re-evaluates active comments, and changing speed adjusts comment travel consistently.
- Use 160ms view fades, 180ms card-image scale from 1 to 1.025, 140ms button state changes, and a 220ms drawer slide. Never animate large blur filters.
- With prefers-reduced-motion, load the player paused on a composed frame, disable automatic comment motion and preview loops, remove reveal transforms, and allow explicit manual playback.

## Imagery
Use the six listed generated editorial photographs only as local 16:9 thumbnails and featured-media artwork. Their consistent petrol-blue shadows, amber light, and fine grain are the photographic signature. The watch player must instead render original animated scenes in Canvas 2D; never place a static thumbnail behind fake playback. Use abstract code-drawn channel monograms rather than portraits, mascots, anime, or recognizable people.

## Tone
Warm, observant, and culturally curious rather than loud or juvenile. Use compact, specific editorial copy and believable viewer reactions. The interface should feel energetic because the conversation moves, while the underlying layout stays calm and readable.

---
— Prompt by VibeFather · https://vibefather.ai/t/danmaku-video-platform · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
