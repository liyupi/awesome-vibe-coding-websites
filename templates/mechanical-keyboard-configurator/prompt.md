# Mechanical Keyboard Configurator

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a fully interactive mechanical keyboard design studio for [BRAND]. The first frame shows the finished [BOARD] under soft studio lights.

- Audience: Keyboard enthusiasts comparing layouts, acoustics and finishes.
- Goal: Configure, try, save and compare a keyboard, then complete a mock order.
- Tone: Precise industrial product photography translated into procedural geometry. Short, direct labels.

## Stack
- Framework: React 19 + Vite
- Styling: Vanilla CSS
- Libraries: Three.js (MIT)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use a relative Vite base './'. Bundle fonts and scripts locally, minify, and disable source maps.
  - Keep all editable labels, sample content and product names in one content module. Put simulated services in one adapter file.
  - Use Three.js with physically based materials and local procedural lighting. A single catalog drives the renderer, sections, pricing and cart snapshots.

## Variables
- [BRAND] — Keyboard studio (default: "Relay Capworks")
- [BOARD] — Board family (default: "Relay One")
- [COLORWAY] — Default keycap set (default: "Workshop Cream")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/mechanical-keyboard-configurator in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/mechanical-keyboard-configurator?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/mechanical-keyboard-configurator · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
