# Cinematographer Portfolio Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A portfolio for a fictional director of photography. A cinematic hero cycling through graded film stills with letterbox bars and a slow push-in; a project list laid out as a credits roll (title, director, format, year); project pages with a stills grid, a lighting breakdown diagram drawn in code (camera, key, fill, practicals) and gear notes; a reel section; representation contact; and a downloadable CV. Stills share one grade with tungsten highlights and teal shadows; people appear from behind or in silhouette. Deep black #0B0B0C, tungsten amber #F2A541 and teal shadow #1E5F74.

- Audience: Directors, producers and commercial production companies choosing a director of photography.
- Goal: Convince through the images in the first screen, prove the thinking on a lighting breakdown, then get a reel request or a CV download.
- Tone: Sparse and sure. Credits, formats and reasons. No film-school adjectives.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/syne (OFL-1.1), @fontsource-variable/dm-sans (OFL-1.1), @fontsource/space-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors black #0B0B0C, blackSoft #151517, amber #F2A541, teal #1E5F74, tealLight #5FB3C9, warm #EDE6D8, grey #8C8880, line #26262A; fontFamily display 'Syne', sans 'DM Sans Variable', mono 'Space Mono'.
  - src/components/Letterbox.tsx crops any still to 2.39:1 with deep black bars above and below (aspect-ratio 2358 / 1080 on the frame, object-cover on the image).
  - src/components/LightingDiagram.tsx draws the top-down lighting breakdown as inline SVG (set, camera with view cone, lights with beam cones, practicals, subject) from data in content.ts; no diagram libraries.
  - A small hash router reads location.hash: #/ (home), #/work, #/work/<slug>; scroll to top on route change. No router library.
  - All copy, projects, stills, lighting setups, gear notes, credits and CV text live in src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Cinematographer's name (default: "Rafael Mendes")
- [CITY] — Base city (default: "Lisbon")
- [FEATURED_FILM] — Featured project title (default: "Night Shift")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/cinematographer-portfolio-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/cinematographer-portfolio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/cinematographer-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
