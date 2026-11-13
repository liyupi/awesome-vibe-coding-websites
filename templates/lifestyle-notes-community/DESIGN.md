---
name: "Lifestyle Notes Community"
colors:
  paper: "#F7F3EC"
  surface: "#FFFCF7"
  ink: "#24251F"
  sage: "#56604D"
  terracotta: "#C96F4A"
  sand: "#E3DACD"
  muted: "#6F7168"
typography:
  display_and_note_titles: { family: "Fraunces Variable", weights: [400, 500, 600] }
  interface_body_and_metadata: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid with a 1360px maximum content width, 40px desktop gutters, 20px mobile gutters, and a 72px desktop header. The discovery hero is a 5/7-column split with 48px between columns, 56px top padding, and 40px bottom padding. Feed cards have 20px text blocks and 28px masonry gaps. Note reading copy is capped at 640px. Mobile uses 24px section gaps and a 64px bottom navigation clearance."
radius: "Use 20px for feature and note cards, 16px for image frames and inputs, 12px for small buttons, and full pills for tags and counters. Keep shadows minimal: 0 12px 36px rgba(36,37,31,0.08) only on the floating carousel controls and mobile navigation."
---

# Lifestyle Notes Community — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F7F3EC` — Page background and primary text on dark buttons
- **Surface** `#FFFCF7` — Cards, carousel controls, and input surfaces
- **Ink** `#24251F` — Headings, body text, and dark primary buttons
- **Sage** `#56604D` — Active filters, follow states, links, and quiet accents
- **Terracotta** `#C96F4A` — Likes, small decorative marks, and image accents; never small text on Paper
- **Sand** `#E3DACD` — Borders, dividers, and inactive controls
- **Muted** `#6F7168` — Secondary text and metadata

## Typography
- **Display and note titles** — Fraunces Variable (OFL), weights 400/500/600. Self-host the font files.
- **Interface, body, and metadata** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid with a 1360px maximum content width, 40px desktop gutters, 20px mobile gutters, and a 72px desktop header. The discovery hero is a 5/7-column split with 48px between columns, 56px top padding, and 40px bottom padding. Feed cards have 20px text blocks and 28px masonry gaps. Note reading copy is capped at 640px. Mobile uses 24px section gaps and a 64px bottom navigation clearance.
- Radius: Use 20px for feature and note cards, 16px for image frames and inputs, 12px for small buttons, and full pills for tags and counters. Keep shadows minimal: 0 12px 36px rgba(36,37,31,0.08) only on the floating carousel controls and mobile navigation.

## Motion
- On first load, fade the hero copy and feature image in over 420ms with a 12px upward offset and a 70ms stagger; do not animate again when returning to the page.
- Use Motion layout animations for masonry filter and search changes, 260ms with easing [0.22,1,0.36,1], while preserving document reading order and focus.
- Move carousel slides horizontally with a 280ms ease-out transition; support pointer swipe with a 45px threshold, touch swipe, arrow buttons, dots, and left/right keyboard keys without autoplay.
- Give like and save controls a 160ms icon fill and 0.92-to-1 scale response, and animate follow-state text with a simple 160ms crossfade.
- Use 180ms fade-and-8px-rise transitions between Notes and Collections and for locally added comments. Disable transforms and smooth scrolling when reduced motion is requested.

## Imagery
Use only the six coordinated local editorial lifestyle photographs listed in assets: morning-table.webp, reading-corner.webp, ceramic-hands.webp, kitchen-ritual.webp, balcony-garden.webp, and creator-portrait.webp. They share warm ivory, muted sage, terracotta, and caramel tones, soft window light, natural grain, and tactile unstyled imperfection. Reuse them deliberately across notes and collection collages with stable aspect-ratio containers and focal-point crops rather than stretching. The featured creator portrait is an entirely fictional adult and must not resemble a real individual. No readable packaging, text, logos, recognizable brands, landmarks, celebrities, or real people's likenesses. Every image gets content-specific US English alt text from src/content.ts; decorative duplicates use empty alt text.

## Tone
Warm, observant, specific, and quietly optimistic. Write like thoughtful people sharing useful details from daily life, never like an engagement farm. Use concise US English, invented names, original conversations, and no claims about real users or online activity.

---
— Prompt by VibeFather · https://vibefather.ai/t/lifestyle-notes-community · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
