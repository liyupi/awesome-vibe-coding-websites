# Space Tech Startup Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page marketing site for [BRAND], an invented space company whose [CONSTELLATION] project delivers [SERVICE]. A two-layer parallax star field (one canvas, fixed behind the whole page) sets the ground. The hero is anchored by an animated orbit diagram: a graticule planet, three thin elliptical orbits, code-drawn satellites with fading signal-blue telemetry trails, and mono telemetry labels ticking simulated values. Sections follow: mission overview with key numbers, a spacecraft spec table in mono (labeled design targets, simulated), a stylized coverage globe with pinging ground stations and orbit arcs, a vertical launch-manifest rail with six invented milestones and status chips (no dates), a text-only invented investors row, a careers strip with three roles, and a footer. Static site, no backend, no forms; CTAs are mailto links. Everything is drawn in code.

- Audience: Enterprise operations and IoT teams evaluating remote connectivity, aerospace partners, early-stage investors, and engineers deciding where to work next. Also founders of any mission-driven hardware startup who want a credible deep-space presence.
- Goal: Make the mission feel real, funded and recruiting-ready in one scroll: the reader should understand what [CONSTELLATION] does, believe the engineering is disciplined (specs labeled as targets, telemetry labeled simulated), and end on the capacity or careers CTA.
- Tone: Mission-control calm. Short declarative sentences, tracked-caps labels, concrete sample numbers, no exclamation marks, no cosmic cliches. The copy sounds like a good flight director briefing a customer.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), tailwindcss (MIT), motion (MIT), vite (MIT), typescript (Apache-2.0), @fontsource-variable/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/space-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template, then install tailwindcss 3.4, motion and the three Fontsource packages.
  - vite.config.ts: base './', build { outDir: 'dist', sourcemap: false, assetsInlineLimit: 0 }. Do not copy src/ into dist/.
  - tailwind.config.js: content covers index.html and src/**/*.{ts,tsx}; theme.extend.colors maps exact tokens: void #05070d, panel #0b111c, panelraise #101826, star #e9eef6, dim #8a97ab, hairline 'rgba(233,238,246,0.14)', signal #4db8ff, signalorb 'rgba(77,184,255,0.28)'; theme.extend.fontFamily: display ['Space Grotesk Variable','sans-serif'], text ['Inter','sans-serif'], mono ['Space Mono','monospace'].
  - Fonts imported in src/main.ts: @fontsource-variable/space-grotesk, @fontsource/inter/400.css, @fontsource/inter/500.css, @fontsource/space-mono/400.css, @fontsource/space-mono/700.css.
  - File layout: src/content.ts holds every string (hero, telemetry labels, mission copy, spec rows, coverage regions, milestones, investors, roles, footer); src/starfield.ts (canvas star layers); src/components/ holds Header, Hero, OrbitDiagram, StarField, Mission, Spacecraft, Coverage, GlobeMap, Manifest, Investors, Careers, Footer; src/App.tsx composes them; src/index.css carries keyframes and reduced-motion overrides.
  - Star field: one fixed canvas behind the page, DPR-aware (min 2), layers A (230 stars, r 0.4-1.1, alpha 0.25-0.6, drift -1.2 px/s, scroll parallax 0.12x) and B (80 stars, r 1.2-2.2, alpha 0.5-0.95, drift -2.4 px/s, parallax 0.3x; 12 of them twinkle on sine periods 2-5 s). Regenerate the same star layout every load from a fixed seeded PRNG (seed 20260104, mulberry32), never Math.random, so builds are deterministic. Loop paused when the tab is hidden.
  - Orbit satellites and telemetry run on one requestAnimationFrame clock shared via a small useTick hook; values update on a 900 ms interval. Under prefers-reduced-motion render one static frame at t = 0 and stop.
  - Scroll reveals use motion/react whileInView with once: true, viewport { margin: '-12% 0px' }; the manifest rail draw is a useScroll scrub on the section.
  - All copy lives in src/content.ts. When any variable value differs from the defaults, rewrite the copy there to fit the new brand, constellation, service and site, keeping the same lengths, structure and tone.
  - public/favicon.svg is hand-written as described in the Document section. <title>[BRAND]</title>, lang 'en'. Write ASSETS.md at the project root listing the three Fontsource packages (OFL-1.1) and the original favicon; no other third-party files exist.

## Variables
- [BRAND] — Company name (default: "Solvane Orbital"). Wordmark, <title>, footer and mailto links built from it (capacity@<brand-slug>.example).
- [CONSTELLATION] — Project or constellation name (default: "Kestrel Array"). Two words; used in the hero eyebrow, mission headline and manifest entries.
- [SERVICE] — What the constellation delivers (default: "direct-to-site telemetry backhaul"). Lower-case noun phrase used inside sentences, e.g. 'orbital propellant transfer and storage'.
- [HQ_LINE] — Site line (default: "Hangar 4, Longshore Airfield, Port Meribel"). Footer address; its last segment is the location shown on careers role cards.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/space-tech-startup-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/space-tech-startup-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/space-tech-startup-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
