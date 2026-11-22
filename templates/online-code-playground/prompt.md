# Online Code Playground

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a full-featured in-browser HTML, CSS, and JavaScript code playground with syntax-highlighted resizable panes, HTML tag autocomplete, a sandboxed live iframe preview, a real-time console panel reporting logs and errors with line numbers, 5 starter templates (including a live 3D Three.js scene with Three.js bundled locally), layout switching, localStorage autosave, URL-encoded sharing, real .zip export, and a gallery of 12 seeded interactive pens.

- Audience: Frontend engineers, creative coders, web design instructors, and students prototyping UI micro-interactions, canvas animations, CSS art, and Three.js scenes directly in the browser.
- Goal: Open directly into an active, visually impressive live code-and-preview split workspace running a kinetic starter sketch immediately on load, with instant switching to starter templates or the 12-pen gallery.
- Tone: Precision dark studio IDE: razor-sharp syntax colors, crisp hairline dividers, punchy tangerine run actions, and mint live-execution status telemetry.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: three (MIT), lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build.sourcemap: false in vite.config.ts.
  - Bundle a local UMD/IIFE Three.js build at public/vendor/three-sandbox.js from the installed three npm package so sandboxed iframe previews run Three.js offline with zero CDN calls.
  - Import @fontsource/space-grotesk (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Keep all brand labels, 5 starter templates, and 12 seeded gallery pens inside src/data/pens.ts.
  - Implement a pure TypeScript CRC32 store-only ZIP archive builder in src/utils/zipAndShare.ts for real .zip export of index.html, style.css, and script.js.

## Variables
- [BRAND] — Playground Name (default: "SparkBench"). Displayed in the top IDE bar, document titles, and exported README.
- [TAGLINE] — Short Subtitle (default: "Live HTML, CSS, JS & bundled Three.js playground."). Shown on the Gallery banner and starter metadata.
- [DEFAULT_AUTHOR] — Default Creator Handle (default: "Devon Park"). Author name shown on newly created sketches and gallery attribution.
- [EXPORT_PREFIX] — ZIP Filename Prefix (default: "sparkbench-pen"). Base filename used when exporting a project archive.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/online-code-playground in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Editor Dark `#111318` — Primary application shell and code pane canvas
- Panel Slate `#181C24` — Toolbars, tab strips, console header, and gallery cards
- Deep Well `#0C0E12` — Code editor gutter and live console viewport
- Tangerine Run `#FF7A1A` — Primary Run button, active split handle, and accent badges
- Mint Success `#3DDC97` — Autosave indicator, execution ok badge, and log highlights
- Signal Rose `#FF5C72` — Runtime console errors and warnings
- Chalk Text `#E9EDF5` — High-contrast primary UI and code text
- Steel Muted `#8B95A7` — Line numbers, secondary labels, and metadata

### Typography
- Workspace Brand & Gallery Headings: Space Grotesk (OFL), weights 600/700
- Controls & Labels: Inter (OFL), weights 400/500/600
- Code Editors, Line Numbers & Console: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Full-viewport IDE workbench: 52px top command bar, 36px pane headers, draggable 6px split divider, and collapsible 180px console drawer.
- Radius: Crisp 8px editor cards, 6px toolbar buttons, 999px status and tag pills.
- Motion: Smooth 150ms hover highlights on toolbar buttons and layout switcher pills
- Motion: Subtle mint pulse on the autosave dot when code changes are persisted to localStorage
- Motion: Instant live iframe re-render with execution duration readout in milliseconds
- Motion: Respect prefers-reduced-motion across transitions and gallery card hover states
- Imagery: Pure code-drawn IDE interface: live animated HTML/Canvas/Three.js preview inside the sandboxed iframe, plus crisp miniature live-style geometric SVG/CSS visual thumbnails for all 12 seeded gallery pens.

## Pages & Sections
### Workspace — [BRAND] (`#/editor`)
1. **Top IDE Command Bar** — [BRAND] emblem and editable current Pen Title input, primary tangerine 'Run' button (Cmd/Ctrl+Enter), Auto-Run toggle switch, Starter Template dropdown (Canvas Particle Wave, 3D Three.js Scene, CSS Kinetic Art, Interactive Form, Blank), Layout Switcher (Side-by-Side, Stacked, Preview Focus), mint 'Saved' autosave indicator, 'Share URL' button (encodes HTML/CSS/JS into URL hash and copies link), 'Export .zip' button (downloads real archive containing index.html, style.css, script.js), and 'Gallery (12)' route switcher.
   Layout: Compact single-row sticky top bar on desktop; clean two-row wrapping control bar on 390px mobile with zero overflow.
   Motion: Tactile active feedback on Run, Share URL copied toast, and mint autosave flash.
2. **Resizable Syntax-Highlighted Code Editor Panes** — Tabbed or split HTML, CSS, and JavaScript editors with synchronized line-number gutters, real-time syntax colorization overlay (tags, attributes, selectors, keywords, strings, comments), Tab-key 2-space indentation, and interactive HTML tag autocomplete dropdown when typing '<' (e.g. div, section, canvas, button, form, svg) that inserts matching opening and closing tags.
   Layout: Left resizable pane (desktop drag handle from 28% to 72% width) featuring language tabs with live byte/line counts and optional 3-pane vertical stack toggle.
   Motion: Smooth drag-resize handle highlight in tangerine #FF7A1A.
3. **Live Sandboxed Preview & Line-Numbered Console Panel** — Sandboxed iframe (srcdoc) rendering the user's HTML, CSS, and JS—with locally bundled Three.js injected automatically whenever the sketch uses THREE. Captures console.log, console.warn, console.error, and uncaught window.onerror / unhandledrejection events with exact script line numbers via postMessage, displaying timestamped entries with Clear Console, filter pills, and execution status badge in mint #3DDC97.
   Layout: Right pane split vertically between live preview frame and collapsible bottom console drawer.
   Motion: Live execution badge flashes mint with elapsed ms on each run.

### 12 Seeded Pens Gallery — [BRAND] (`#/gallery`)
1. **Gallery Header & Category Filters** — Concise dark editorial header with [BRAND] title, [TAGLINE], search input, category filter pills (All, Canvas, Three.js 3D, CSS Art, Interactive UI, Games & Audio), and quick 'Back to Editor' button.
   Layout: Full-width dark slate banner above a single-line category filter strip.
   Motion: Instant client-side filtering across all 12 seeded pens.
2. **12 Seeded Pens Interactive Grid** — 12 original, genuinely runnable seeded pens covering Canvas animations, Three.js 3D scenes, CSS kinetic art, interactive calculators/forms, audio synths, and mini-games. Each card displays a distinct code-drawn preview visual, title, category tag, creator handle, line counts, and an 'Open in Editor' button that loads its HTML/CSS/JS immediately into #/editor and runs it live.
   Layout: Responsive 1/2/3-column card grid on #181C24 slate cards with crisp 1px white/10 borders.
   Motion: Subtle tangerine border highlight and elevation shift on hover.

## Assets
- icon: Installed via npm package lucide-react (ISC license) for IDE controls, layout icons, console badges, and export actions.
- font: Installed via @fontsource/space-grotesk, @fontsource/inter, and @fontsource/jetbrains-mono (OFL); bundled locally by Vite.
- image: Locally bundled Three.js runtime built from npm package three (MIT) into public/vendor/three-sandbox.js plus code-drawn SVG thumbnails for gallery pens.

## Don'ts
- Do not load Three.js, fonts, or any scripts from external CDNs — bundle Three.js locally from npm.
- Do not reference CodePen, JSFiddle, CodeSandbox, StackBlitz, or any third-party playground brand.
- Do not fake the ZIP download or URL sharing — generate a valid .zip binary containing index.html, style.css, and script.js, and decode shared projects directly from the URL hash on load.
- Do not hard-code calendar dates or copyright years in the UI.
- Do not allow horizontal overflow at 1440x900 desktop or 390x844 mobile.
- Do not ship source maps or copy src/ into dist/; keep vite base set to './'.

---
— Prompt by VibeFather · https://vibefather.ai/t/online-code-playground · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
