# Startup Pitch Deck Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A 12-slide investor pitch deck built as a single-page website for [BRAND], an invented seed-stage startup offering [PRODUCT]. Full-screen slides move with arrow keys, space, Page Up/Down, the mouse wheel, touch swipes and a dot rail; every slide has its own hash link (#/1 to #/12). Market, traction, business model and financial charts are hand-drawn SVG that animate when their slide opens. Pressing P opens a presenter window with current and next slide, speaker notes, a timer and a clock that stays in sync with the audience window through BroadcastChannel. Pressing O shows an overview grid. Printing outputs one landscape slide per page on a light theme with charts in their final state.

- Audience: Investors receiving the deck link before or after a meeting, on a laptop or a phone; the founder presenting it live on a second screen. The company sells to [AUDIENCE].
- Goal: Let a founder send one link that opens on any slide, reads well on a phone, presents cleanly with notes and a timer, and prints to a tidy PDF for a data room, so that investors understand the opportunity and reply to [CONTACT_EMAIL] about the [ROUND].
- Tone: Calm, confident and specific, like a well-rehearsed seed pitch: short declarative headlines, concrete numbers, no buzzwords or exclamation marks. Editorial dark styling with generous whitespace and one electric accent.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react, react-dom 18 (MIT), vite 5, @vitejs/plugin-react (MIT), typescript (Apache-2.0), tailwindcss 3.4, postcss, autoprefixer (MIT), @tailwindcss/container-queries (MIT), motion (motion.dev, import from motion/react) (MIT), lucide-react (ISC), @fontsource/instrument-serif (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource-variable/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with Vite's react-ts template; package.json scripts: dev = vite, build = tsc -b && vite build, preview = vite preview.
  - vite.config.ts: base './', build.sourcemap false, build.outDir 'dist', no public/src copying.
  - tailwind.config.ts: content ['./index.html', './src/**/*.{ts,tsx}'], plugins [require('@tailwindcss/container-queries')], extend colors from CSS variables (ink, surface, raised, rule, paper, muted, faint, accent, accent-deep) and fontFamily display 'Instrument Serif', sans 'Inter Variable', mono 'JetBrains Mono Variable'.
  - Define every color as a CSS variable on :root in src/styles/globals.css (dark values) and override them in @media print (light values) inside src/styles/print.css.
  - Import the three Fontsource packages once in src/main.tsx (@fontsource/instrument-serif/400.css and 400-italic.css, @fontsource-variable/inter, @fontsource-variable/jetbrains-mono).
  - Keep all deck copy, chart data, speaker notes and per-slide target times in one file, src/content/deck.ts, exporting the variable values (brand, product, audience, round, contactEmail) and an array of 12 slide objects { id, label, notes, targetSeconds, ...slide-specific data }. Slide components only read from it.
  - Folder layout: src/slides/Slide01Title.tsx … Slide12Closing.tsx, src/components (Chrome, DotRail, Toolbar, Overview, Thumbnail, CountUp, Presenter), src/lib (useDeckNavigation.ts, useHashRoute.ts, sync.ts), src/styles (globals.css, print.css).
  - Every slide component takes { active: boolean, isStatic: boolean } props: active triggers its enter animations, isStatic renders the final state with no motion (used for thumbnails, print and reduced motion).
  - Write a CountUp component that animates a number from 0 to its target with Motion's animate() when active, keeps the original string's prefix, suffix and decimals ('$9.6B', '7.8%', '$392K'), and renders the final string when isStatic.
  - Charts are hand-written SVG components with viewBox coordinates; put any HTML text labels in an absolutely positioned overlay so text never stretches.
  - Read prefers-reduced-motion with Motion's useReducedMotion and pass isStatic-like behavior: slide transitions become instant cuts and charts render fully drawn.
  - Create ASSETS.md at the project root listing the fonts and icon set with package name, source URL and license.

## Variables
- [BRAND] — Startup name (default: "Ladingly"). Invented company name shown as the wordmark, in the title tag and footer.
- [PRODUCT] — One-line product description (default: "Freight invoice auditing that catches carrier overbilling before you pay"). Used as the title-slide subhead; the slide copy and chart data are rewritten around it.
- [AUDIENCE] — Target customers (default: "mid-market shippers spending $2M to $50M a year on freight"). Lowercase phrase that follows 'For' on the title slide and 'Built for' on the solution slide.
- [ROUND] — Round being raised (default: "$3.2M seed"). Amount and stage, shown on the title, ask and closing slides.
- [CONTACT_EMAIL] — Founder contact email (default: "founders@ladingly.example"). Shown as a mailto link on the closing slide; keep an .example domain for demos.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/startup-pitch-deck-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/startup-pitch-deck-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/startup-pitch-deck-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
