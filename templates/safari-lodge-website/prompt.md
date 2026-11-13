# Safari Lodge Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page marketing site for a luxury safari lodge: golden-hour cinematic identity (ochre, olive, charcoal, warm grain), a full-bleed dusk savanna hero, an editorial conservancy strip, a suites gallery of tented suites at dawn and dusk, a vertical day-at-the-lodge timeline, game drive and experience cards with sample pricing, a seasonal rates table, and a client-side inquiry form.

- Audience: Safari lodges, tented camps, wilderness retreats and the studios who build for them; also photo-safari and expedition outfits.
- Goal: Sell the feeling first — golden light, space and quiet — then make planning feel certain: see the suites, live a day at the lodge, understand the seasons and rates, and leave an inquiry.
- Tone: Quiet, warm, unhurried; short declarative sentences with the precision of a field notebook; luxury expressed through restraint and light, never superlatives.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/work-sans (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest safari-lodge-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/fraunces and @fontsource/work-sans as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors charcoal #1C1A16, charcoal-raised #26231D, fieldline #3A372F, ochre #C98A3B, ochre-light #E4B36A, olive #6E6F4C, bone #EFE7D8, sandmist #A79C88; fontFamily display 'Fraunces' and sans 'Work Sans'; set the default borderRadius to 2px (rounded-sm).
  - postcss.config.js: tailwindcss + autoprefixer.
  - Warm grain overlay: in src/index.css define .grain-overlay as a fixed, inset-0, pointer-events-none layer with opacity 0.08, mix-blend-mode soft-light and a repeating background-image built from an inline SVG data URI (feTurbulence type fractalNoise, baseFrequency 0.8, 280px tile); render it once in App above every page and photograph — this warm grain is the signature of the site.
  - src/lib/motion.ts: shared Motion variants — reveal (opacity 0→1, y 26→0, 700ms cubic-bezier(0.16,1,0.3,1), 90ms stagger, whileInView once), hoverLift (y -2px, 200ms) — with useReducedMotion falling back to plain 200ms opacity fades.
  - src/components/Timeline.tsx: the vertical day rail — a 1px fieldline track with five 10px ochre dots that fill as their stop crosses 45% of the viewport (IntersectionObserver, once per stop, 200ms).
  - Keep every user-facing string (brand, conservancy, suites, rates, timeline stops, experiences, inquiry copy, contact email) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — Safari Lodge, [REGION]</title> plus a drawn-in-code favicon.svg (a simple ochre acacia-tree silhouette on the charcoal ground); no other meta work.

## Variables
- [BRAND] — Lodge name (default: "Mopane Reach"). Invented lodge name used for the wordmark, page title, day-at-the-lodge heading and contact email (stay@mopanereach.com, from content.ts).
- [REGION] — Conservancy name (default: "Karoha Conservancy"). The invented private conservancy the lodge sits in — hero label, intro copy and footer line.
- [SUITES] — Number of suites (default: "8"). Small-lodge promise in the hero and intro strip ('[SUITES] tented suites'); the gallery shows three of them.
- [RATE_FROM] — Starting nightly rate (default: "$740"). High-season starting rate — hero sub-line ('stays from [RATE_FROM] per suite, per night') and the Dry season column in the rates table.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/safari-lodge-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/safari-lodge-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/safari-lodge-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
