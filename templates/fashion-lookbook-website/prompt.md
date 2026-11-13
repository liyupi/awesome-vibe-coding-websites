# Fashion Lookbook Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page high-fashion lookbook: a full-bleed silhouette cover under oversized condensed type, vertical scroll driving pinned horizontal chapters of editorial look frames with slower-drifting chapter titles, code-drawn look-detail overlays with garment credits, an honest campaign-film placeholder, a typographic collection-notes interlude, and invented stockists.

- Audience: Independent fashion labels, editorial and campaign studios, and portfolio photographers presenting work in chapters.
- Goal: Read like an issue, not a website: carry the visitor sideways through the collection with scroll, let them open any look for its credits, and leave with the label's name set in their memory.
- Tone: austere, declarative, magazine-flat — captions like credits, notes like manifestos; no exclamation, no softness in the words.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/oswald (OFL), @fontsource/manrope (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest fashion-lookbook-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/oswald and @fontsource/manrope as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors ink #111214, graphite #1B1D21, fogline #2E3136, bone #EDEDEA, ash #6E7176, and accent var(--accent) (bind --accent in :root from content.ts); fontFamily display 'Oswald' and sans 'Manrope'; default radius 0 everywhere.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/hooks/useHorizontalChapters.ts: the core choreography — the outer wrapper's height is set to calc(100vh + (trackWidth - viewportWidth) px) measured from refs on mount and resize; a sticky 100vh child pins the track; Motion's useScroll on the wrapper drives useTransform(scrollYProgress, [0,1], [0, -(trackWidth - viewportWidth) px]) applied as the track's translateX (linear, no spring); chapter title blocks get a second transform at 0.6 of that speed; each frame's inner image gets a translateX of -6%→6% across the chapter's own progress.
  - src/components/LookOverlay.tsx: full-screen fixed overlay (graphite at 96%, z-50) — photograph at 3:4 on the left (max-h 78vh), spec card on the right (bone text on graphite, hairline fogline rules), accent look number, close X; opens on frame click, closes on X, Escape and backdrop.
  - The campaign film placeholder is drawn in code: a graphite frame with a 64px accent play triangle (SVG), the caption 'CAMPAIGN FILM — PLACEHOLDER' and a subline 'The film slot is a drawn placeholder; no video ships with this demo.' Clicking does nothing but nudge the glyph 2px.
  - src/lib/motion.ts: reveal variants (opacity 0→1, y 30→0, 900ms cubic-bezier(0.16,1,0.3,1), 120ms stagger, whileInView once) with useReducedMotion falling back to plain fades and — for the chapters — to a vertical stacked layout with no pinning and no transforms.
  - Keep every user-facing string and data set (label, collection, season, accent hex, chapters array {number, title, frames[{image, look, caption, credits[]}]}, notes, stockists, footer copy) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — [COLLECTION]</title> plus a drawn-in-code favicon.svg (a small accent-colored square on the ink ground); no other meta work.

## Variables
- [BRAND] — Label name (default: "Stille"). Invented fashion label for the wordmark, page title and footer.
- [COLLECTION] — Collection name (default: "Monolith"). The collection title set in oversized type on the cover and echoed through chapters and notes.
- [SEASON] — Season label (default: "Autumn–Winter"). Static season label next to the label name (no years, no real dates).
- [ACCENT] — Collection accent (default: "#D8461F"). The one accent color, applied as a CSS variable: chapter numbers, progress line, play glyph, links, look tags. Change it and the whole issue re-inks.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/fashion-lookbook-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/fashion-lookbook-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/fashion-lookbook-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
