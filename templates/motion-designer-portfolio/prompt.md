# Motion Designer Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A portfolio for a fictional motion designer where the work moves. A showreel hero drawn live in code (kinetic shapes and type, 20 seconds, with play / pause and a sound toggle), a grid of projects whose thumbnails loop on hover, case pages that break an animation down frame by frame with a scrubber, easing curves and storyboard frames, a services and rates section, a tools strip, and contact. Every animation respects reduced motion with a still poster. Off-black, acid yellow and electric violet; a bold grotesk.

- Audience: Creative directors, product teams and festival organizers who hire motion designers, and designers who want a portfolio that demonstrates timing.
- Goal: Convince in the first twenty seconds that the designer understands motion, then lead to a case page and a contact form.
- Tone: Confident, quick and exact. Short lines, timecodes and frame counts instead of adjectives.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/archivo (OFL-1.1), @fontsource-variable/space-grotesk (OFL-1.1), @fontsource-variable/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors black #111111, acid #E8FF3A, violet #6A4CFF, violetLight #A394FF, white #F4F4F0, grey #8A8A94, line #2A2A30; fontFamily display 'Archivo Variable', sans 'Space Grotesk Variable', mono 'JetBrains Mono Variable'.
  - src/reel/draw.ts holds pure drawing functions: drawReel(ctx, t, w, h) for the 20-second loop, drawThumbnail(kind, ctx, t, w, h) for the six project loops and drawCase(ctx, t, w, h) for the case animation; t is seconds, so any frame can be rendered on demand for scrubbing and storyboards.
  - Easing lives in src/reel/easing.ts as pure functions (cubic-bezier solver, ease-out-back, spring), reused by the player, the curve cards and the canvas scenes.
  - A small hash router reads location.hash: #/ (home), #/work, #/work/<slug>; scroll to top on route change. No router library.
  - All copy, projects, services, rates and tools live in src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Motion designer's name (default: "Marta Ives")
- [CITY] — Studio city (default: "Rotterdam")
- [HERO_PROJECT] — Featured project title (default: "Neon Transit")
- [DAY_RATE] — Day rate for product and UI motion (default: "$650")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/motion-designer-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/motion-designer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/motion-designer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
