# Kinetic Typography Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a four-page portfolio for [BRAND], a [DISCIPLINE] based in [CITY], where very large variable-font type is the artwork. The name fills the first screen with a studio photo visible inside the letters. On scroll the letters split, stretch on the width axis and re-form. The project index is a list of giant titles that move through weight and width on hover, with a cursor-following preview still. Opening a project plays a full-screen type transition before the case study appears. Pages: index.html (home), work.html (all projects with filters), case.html?slug=… (case study, defaults to the first project) and about.html. All copy, the project list and the clients live in one file, src/content.ts. When the variable values differ from the defaults, rewrite every headline, paragraph, project and client so they fit the new person and discipline. Keep the layout, motion and palette exactly as described.

- Audience: Art directors, producers and brand leads at agencies, studios, broadcasters and festivals who are looking for someone to make [SPECIALTIES]. They skim fast, judge craft from the first screen, and open two or three case studies before they get in touch.
- Goal: Make visitors feel the designer's control of motion within five seconds, get them into at least one case study, and end on a clear way to book: a mailto link and a copy-email button with the booking note [AVAILABILITY].
- Tone: Confident, quiet and precise. Short declarative sentences, first person singular, no buzzwords. The type does the shouting and the copy stays calm. Credits and numbers are specific: real-sounding durations, team sizes and festival names, all invented.

## Stack
- Framework: Vite 5 + vanilla TypeScript, multi-page
- Styling: Tailwind CSS 3.4
- Libraries: vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), gsap (core + ScrollTrigger + Flip) (GSAP Standard License (free, commercial use allowed)), lenis (MIT), lucide (ISC), @fontsource-variable/anybody (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource-variable/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with Vite's vanilla-ts template. Put four HTML entry files at the project root: index.html, work.html, case.html and about.html. Register all four in vite.config.ts under build.rollupOptions.input.
  - vite.config.ts: base './', build.sourcemap false, build.outDir 'dist', and the default esbuild minify. Do not copy src/ into dist/.
  - package.json scripts: "dev": "vite", "build": "tsc --noEmit && vite build", "preview": "vite preview".
  - Fonts: in src/styles/main.css, import '@fontsource-variable/anybody/wdth.css' (family 'Anybody Variable', weight 100–900, stretch 50%–150%), '@fontsource-variable/inter' and '@fontsource-variable/jetbrains-mono'. Never load a font from a CDN.
  - tailwind.config.ts: content ['./*.html', './src/**/*.ts']. Extend colors with ink #0B0B0C, ink-2 #141416, paper #F2EFE8, paper-dim #A9A59C, line #2A2A2D, hot #FF4A1C and hot-deep #C7330F. fontFamily: display ['Anybody Variable', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace'].
  - Drive all display type through CSS custom properties: .vf { font-variation-settings: 'wght' var(--w, 800), 'wdth' var(--x, 100); }. GSAP tweens --w and --x on each element or letter span. Never animate font-weight or font-stretch directly.
  - src/content.ts exports: site (brand, discipline, city, specialties, availability, email built as 'hello@' + brand lowercased with spaces and accents removed + '.studio'), services[], clients[], stats[], experience[], awards[] and projects[]. Each project has slug, title, client, year, category, role, duration, team, tools[], summary, brief, approach, outcome, quote {text, name, title}, stillSeed and accent. Every page renders from this file.
  - src/lib/split.ts: a dependency-free splitter that wraps each character of an element in <span class="ch vf" aria-hidden="true"> inside a wrapper, and sets aria-label with the full text on the wrapper. Do not use any paid GSAP plugin; SplitText is not needed.
  - src/lib/fit.ts: fitText(el) measures the element at font-size 100px and sets its font-size so the line fills its container width exactly. Re-run on resize (debounced 150 ms) and after document.fonts.ready.
  - src/lib/stills.ts: drawStill(canvas, seed, variant, t) draws the code-made motion stills described under Assets. It is pure canvas 2D, scaled by devicePixelRatio and capped at 2.
  - src/lib/transition.ts: the full-screen case transition overlay, shared by every page.
  - src/lib/smooth.ts: start Lenis with lerp 0.1. Call ScrollTrigger.update from lenis.on('scroll') and drive lenis.raf from gsap.ticker; set gsap.ticker.lagSmoothing(0). Skip Lenis entirely under prefers-reduced-motion.
  - Register plugins once in src/lib/gsap.ts with gsap.registerPlugin(ScrollTrigger, Flip) and import gsap from there everywhere.
  - Add `@view-transition { navigation: auto; }` to main.css so supporting browsers cross-fade between pages. The GSAP overlay is the main effect and must work without it.
  - Favicon: an inline SVG file public/favicon.svg with a hot #FF4A1C square and a near-black first initial of [BRAND] set in a heavy wide geometric letter drawn as a path or text. The <title> on each page is '[BRAND] — [DISCIPLINE]', with the page name prefixed on inner pages, e.g. 'Work — [BRAND]'.
  - Write the ASSETS.md file at the project root listing every image file with its path, source URL, author and license.

## Variables
- [BRAND] — Designer or studio name (default: "Oda Brenner"). Two short words read best as giant type, about 8–14 letters in total. It is the hero artwork, the wordmark and the email.
- [DISCIPLINE] — Discipline (default: "Motion designer & type animator"). The line under the name and in the page titles.
- [CITY] — Base city (default: "Rotterdam"). Shown in the hero meta row, the footer and the about page.
- [SPECIALTIES] — What you make (default: "title sequences, brand motion and kinetic identity systems"). Lowercase phrase that drives the intro statement, the services and the invented project list.
- [AVAILABILITY] — Booking note (default: "Booking projects from February 2027"). The rotating hero badge and the contact section.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/kinetic-typography-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/kinetic-typography-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/kinetic-typography-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
