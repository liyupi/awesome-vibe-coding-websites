# Product Launch Keynote Slides

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A cinematic 14-slide product launch keynote that runs as a static website. [BRAND] announces [PRODUCT], its new [PRODUCT_CATEGORY], from a browser tab. Pure black stage, one idea per slide, oversized type, one spotlit product. The visible craft is shared-element morphing: the same product image, the product name, a stat card and the price glide, scale and reposition from one slide to the next instead of cutting. Pacing: opening tease, the reveal, three feature beats, the numbers, price and date, then a one-word closing slide. The default product is an invented portable home battery: a free-standing coral column with one glowing seam.

- Audience: Founders, product marketers and small teams announcing something tangible, who want to present a launch from a link and full screen in a browser rather than from a slide tool's export.
- Goal: Hold a room for ten minutes: build tension, reveal the product, make three claims stick, land the price and the date, and end on one word. Every slide must also work on its own through its deep link.
- Tone: Confident, unhurried, spare. Short declarative lines, one thought at a time, concrete numbers instead of adjectives. No exclamation marks, no marketing superlatives.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react, react-dom 18 (MIT), vite 5, @vitejs/plugin-react (MIT), typescript (Apache-2.0), tailwindcss 3.4, postcss, autoprefixer (MIT), motion (motion.dev, import from motion/react) (MIT), lucide-react (ISC), @fontsource-variable/bricolage-grotesque (OFL-1.1), @fontsource-variable/inter-tight (OFL-1.1), @fontsource-variable/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with Vite's react-ts template; package.json scripts: dev = vite, build = tsc -b && vite build, preview = vite preview.
  - vite.config.ts: base './', build.sourcemap false, build.outDir 'dist'.
  - tailwind.config.ts: content ['./index.html', './src/**/*.{ts,tsx}'], extend colors black #000000, coral #FF4B2B, ultraviolet #5B2EFF, white #FFFFFF, ash #A6A6B3, graphite #14141C, hairline #2A2A36, and fontFamily display 'Bricolage Grotesque Variable', sans 'Inter Tight Variable', mono 'JetBrains Mono Variable'.
  - Import the three Fontsource packages once in src/main.tsx.
  - src/styles/globals.css: html, body and #root are 100% tall, background #000000, color #FFFFFF, overflow hidden, overscroll-behavior none, user-select none. Define the sizing unit there: :root { --u: 1cqw; --min: 11px } and @media (max-aspect-ratio: 1/1) { :root { --u: 2.1cqw } }. Overview tiles set --min: 0px.
  - All type, gaps and offsets inside a slide are multiples of --u through a helper u(n) that returns 'calc(var(--u) * n)'. Any text smaller than 1.7u uses max(var(--min), u(n)). Unregistered custom properties resolve at the point of use, so the same slide component scales correctly inside the stage and inside a small overview tile.
  - Stage sizing, not scaling: the stage element gets its real size through CSS, landscape width min(100vw, 100dvh * 16 / 9) with aspect-ratio 16 / 9, portrait (max-aspect-ratio: 1/1) width min(100vw, 100dvh * 9 / 16) with aspect-ratio 9 / 16, container-type: size, overflow hidden, position relative, centered in the viewport with flex. Never fit the stage with CSS transform: scale(), because shared-element measurements would then be wrong.
  - src/content/deck.ts holds all copy, variable values and image paths; src/content/poses.ts holds the actor pose table for both orientations. Components only read from these two files. Slide count and builds per slide live in deck.ts as an array of 14 entries { id, builds }.
  - Folder layout: src/slides/Slide01.tsx to Slide14.tsx (copy layer only), src/components (Stage, ActorLayer, ProductActor, TextActor, CountUp, Build, Hud, ProgressBar, ClickZones, Overview), src/lib (useDeck.ts for slide, build, hash and input handling; usePose.ts reading the orientation with matchMedia).
  - Every slide component and ActorLayer take { slide, build, isStatic }: isStatic renders the final state with all builds visible, no layoutId and no animation. It is used by overview tiles and by reduced motion.
  - Read prefers-reduced-motion with Motion's useReducedMotion. When true: actors render without layoutId, slide changes are a plain 300ms opacity crossfade, CountUp shows the final value, builds appear with opacity only, no slow image drift.
  - CountUp uses Motion's animate() to tween from the previous value (0 on slide entry) to the target, keeps prefix, suffix, commas and decimals from the source string ('$1,490', '2.4'), and sets font-variant-numeric: tabular-nums on Inter Tight so the digits do not jitter.
  - Preload all six images on mount with new Image() so morphs never flash an empty frame.
  - Add public/favicon.svg: a black rounded square with one horizontal coral line. Page title is '[BRAND] [PRODUCT] launch keynote'.
  - Create ASSETS.md at the project root listing each image, font and icon set: path or package, source URL, author and license.

## Variables
- [BRAND] — Company name (default: "Norvane")
- [PRODUCT] — Product name, one short word that works set huge (default: "Cinder"). Keep it under 10 characters.
- [PRODUCT_CATEGORY] — What the product is, in lowercase (default: "home battery")
- [PRICE] — Launch price (default: "$1,490"). Currency symbol plus number; it is counted up on the price slide.
- [SHIP_DATE] — Date the product ships or goes on sale (default: "March 18")
- [CLOSING_WORD] — The single word on the last slide, with its period (default: "Charged."). Keep it under 10 characters.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/product-launch-keynote-slides in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/product-launch-keynote-slides?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/product-launch-keynote-slides · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
