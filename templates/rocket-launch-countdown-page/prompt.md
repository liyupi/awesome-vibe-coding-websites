# Rocket Launch Countdown Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page night launch for [BRAND]. The first screen is a code-built rocket and tower on a lit pad, with a live countdown to [LAUNCH_AT] and drag-to-orbit. One shared flight clock replays liftoff, ascent, stage separation, shell opening, and orbit insertion on that same model, and drives the telemetry strip and the mission timeline. A watch-party form confirms on the page and can store the email in localStorage.

- Audience: People following [MISSION], [BRAND]'s flight of [VEHICLE] from [RANGE], and teams who will reuse the page for another premiere by changing the variables.
- Goal: Let the visitor watch the countdown, orbit the vehicle, replay the ascent, and save a watch-party email on this page. Nothing is sent to a server.
- Tone: Calm and concrete, like a small range console. Short sentences, named people, real figures. No slogans, no hype, no webcast catchphrases.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react@18.3.1 + react-dom@18.3.1 (MIT), three@0.169.0 (MIT), @react-three/fiber@8.17.14 (v8 line, React 18) (MIT), @react-three/drei@9.121.3 (OrbitControls only) (MIT), lucide-react (ISC), tailwindcss@3.4 + postcss + autoprefixer (MIT), vite@5 + @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/big-shoulders-display (OFL-1.1), @fontsource/outfit (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One page only: index.html at the project root, entry src/main.tsx. The document title is '[MISSION] — [BRAND]' (default: Wick Line 4 — Quillharbor Launch). Link the favicon with a relative href ./favicon.svg. Include charset and viewport meta only: no description, Open Graph, Twitter, or JSON-LD tags.
  - Install exactly react@18.3.1, react-dom@18.3.1, three@0.169.0, @react-three/fiber@8.17.14, and @react-three/drei@9.121.3. Keep Vite 5, TypeScript, and Tailwind CSS 3.4 from the scaffold. Do not upgrade React to 19, Tailwind to 4, fiber to 9, or drei to 10. Do not install GSAP, Motion, Lenis, zustand, postprocessing, or any UI kit.
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, chunkSizeWarningLimit 1600 }. Do not copy src/ into dist/. package.json scripts: dev is vite, build is tsc -b && vite build, preview is vite preview. If the scaffold's tsconfig has no solution references, use tsc --noEmit && vite build instead, but the command the user runs stays npm run build.
  - Tailwind 3.4 via PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts extend colors with sky #07080C, ink #E7E4DC, muted #9A9488, panel #12141A, line #2A2E36, sodium #E7A04A, cyan #7EE0E6, copper #C4895A. fontFamily display ['Big Shoulders Display', 'Arial Narrow', 'sans-serif'], sans ['Outfit', 'system-ui', 'sans-serif'], mono ['IBM Plex Mono', 'ui-monospace', 'monospace'].
  - src/index.css: Tailwind layers, color-scheme dark, body margin 0, background #07080C, color #E7E4DC, font-family Outfit, -webkit-font-smoothing antialiased. html scroll-behavior smooth. A prefers-reduced-motion block sets scroll-behavior auto and disables the status-dot pulse and the drag-chip fade. Inputs use a 1000px inset box-shadow of #12141A on autofill so the field does not flash white. Focus-visible outline is 2px solid #7EE0E6 with 2px offset. Selection background #7EE0E6, color #07080C.
  - src/fonts.ts imports @fontsource/big-shoulders-display/500.css, 700.css, and 800.css; @fontsource/outfit/400.css, 500.css, and 600.css; @fontsource/ibm-plex-mono/400.css and 500.css. Import fonts.ts first in src/main.tsx. Do not add a fonts.googleapis.com or fonts.gstatic.com link.
  - File layout: src/content.ts (every string, phase, stat, person, and question), src/flight.ts (pure pose, camera, and telemetry functions of t), src/hooks/useReducedMotion.ts, src/hooks/useCountdown.ts, src/scene/LaunchCanvas.tsx, src/scene/Vehicle.tsx, src/scene/Pad.tsx, src/scene/Stars.tsx, src/components/Header.tsx, Countdown.tsx, Telemetry.tsx, FlightControls.tsx, Timeline.tsx, Facts.tsx, Team.tsx, WatchParty.tsx, Questions.tsx, Footer.tsx, and src/App.tsx. The flight clock t and playing live in React state in App.tsx and are passed down. Do not keep a second clock inside the canvas.
  - public/favicon.svg is a 32 viewBox: a rounded rect rx 6 filled #07080C and a circle cx 16 cy 16 r 4 filled #7EE0E6. No letters, no rocket silhouette, no badge.
  - Write ASSETS.md at the project root listing the three Fontsource packages (OFL-1.1, authors as published on the package) and lucide-react (ISC). State that the rocket, pad, tower, plume, stars, and favicon are original code and that the site ships no third-party images or 3D files.

## Variables
- [BRAND] — Launch company (default: "Quillharbor Launch"). Invented company. Header wordmark, footer, watch-party storage key, and the page title. Never a real launch provider.
- [VEHICLE] — Vehicle name (default: "Lodestone"). Invented rocket name. Used in the deck, facts, and status lines. The mesh does not change with this name.
- [MISSION] — Mission name (default: "Wick Line 4"). Invented flight name. It is the H1 and the document title. Keep it short, two or three words plus a number.
- [RANGE] — Range name (default: "Gannet Spit"). Invented coastal range. Eyebrow, address, and deck. Not a real launch-site name.
- [PAYLOAD] — Payload name (default: "Harbor Glass"). Invented instrument name, a proper noun. Deck, facts, and two status lines. Rewrite those sentences if the grammar needs it.
- [LAUNCH_AT] — Window opening (default: "2027-08-21T04:12:00Z"). ISO-8601 UTC instant. Leave the string as written. If a visitor arrives after it, the page leads with replay instead of changing the date.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/rocket-launch-countdown-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/rocket-launch-countdown-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/rocket-launch-countdown-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
