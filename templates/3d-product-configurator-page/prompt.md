# 3D Product Configurator Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page 3D product configurator for [BRAND]'s [PRODUCT_NAME] [PRODUCT_TYPE]. A large procedural 3D model sits on a pinned studio stage: drag to rotate, pick a two-tone finish, a cushion material and a live engraving that is drawn onto the ear-cup plate; the price recalculates with an odometer. Scrolling keeps the stage pinned and takes the headphones apart into eight labeled parts, then puts them back together, before features, a grouped spec table, reviews, an FAQ and a live build summary. Add to cart opens a drawer with a snapshot of the exact configuration.

- Audience: [AUDIENCE] who want to see exactly what they are buying and make it theirs before paying [BASE_PRICE] or more.
- Goal: Get the visitor to configure a pair and add it to the cart, while proving build quality and repairability through the exploded view and the spec table.
- Tone: Calm, precise and practical, like a well-labeled workshop. Short sentences, real numbers, no superlatives; technical labels in mono, warmth in the reviews.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react@18 + react-dom@18 (MIT), three@0.169.0 (MIT), @react-three/fiber@8.17 (v8 line, React 18) (MIT), @react-three/drei@9.121 (Environment, Lightformer, ContactShadows, Html, Line, RoundedBox) (MIT), gsap@3.12+ with ScrollTrigger (GSAP Standard License (free, commercial use allowed)), zustand@4.5 (MIT), lucide-react (ISC), tailwindcss@3.4 + postcss + autoprefixer (MIT), vite@5 + @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/bricolage-grotesque (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1), @fontsource/instrument-serif (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One page: index.html at the project root with entry src/main.tsx. <title> is '[PRODUCT_NAME] by [BRAND] — Configure yours'. Favicon: public/favicon.svg, a 32×32 SVG of a #17181B filled circle with a 3px #F3F1EC ring inset 7px (no letters, no logo).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, chunkSizeWarningLimit 1600 }. Do not copy src/ into dist/.
  - Tailwind 3.4 via PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts extend colors with every Design color in kebab-case (paper, stage, stage-edge, surface, surface-2, ink, muted, line, line-strong, footer, footer-text) plus accent: 'rgb(var(--accent) / <alpha-value>)'. fontFamily display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono', 'ui-monospace', 'monospace'], serif ['Instrument Serif', 'Georgia', 'serif']. maxWidth container '1200px'.
  - src/index.css: @tailwind base/components/utilities; :root { --accent: 53 87 212; } (Graphite accent as space-separated RGB); body bg #F3F1EC, color #17181B, font Inter, -webkit-font-smoothing antialiased; .tabular { font-variant-numeric: tabular-nums } ; the drag-hint and scroll-cue keyframes live here; a @media (prefers-reduced-motion: reduce) block disables them.
  - src/fonts.ts imports '@fontsource-variable/bricolage-grotesque', '@fontsource-variable/inter', '@fontsource/jetbrains-mono/400.css', '@fontsource/jetbrains-mono/500.css', '@fontsource/instrument-serif/400.css' and '@fontsource/instrument-serif/400-italic.css'; import it first in src/main.tsx.
  - File layout: src/content.ts (every string, option, price delta, spec row, part label, review, FAQ entry and footer fact, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased, non-alphanumerics to '-'; email = 'care@' + brandSlug without hyphens + '.com'; basePrice = the digits of [BASE_PRICE] parsed as a number), src/lib/price.ts (total and line items from a config), src/lib/useReducedMotion.ts (matchMedia hook), src/store/config.ts, src/store/cart.ts, src/store/scene.ts, src/three/ (Headphones.tsx, parts/*.tsx, materials.ts, engravingTexture.ts, knitTexture.ts, StageCanvas.tsx, Labels.tsx, useDragRotate.ts), src/components/ (Header, Stage, ConfiguratorPanel, PriceOdometer, FeatureStrip, Specs, Reviews, Faq, BuildBand, Footer, CartDrawer, MobileBuyBar).
  - State with zustand: config store { colorId: 'graphite', cushionId: 'leather', engraving: 'For long nights', engraveStyle: 'serif', setters }; cart store { items: CartItem[], open: boolean, add(config, thumbnail), setQty(id, n), remove(id), openDrawer(), closeDrawer() } where adding an identical config (same color, cushion, engraving text and style) increases quantity instead of adding a line; scene store { phase: 'configure' | 'inside' | 'after', setPhase } that is only written when the phase changes. Scroll progress p and explode value e are NOT React state: keep them in a mutable module object sceneRef = { p: 0, e: 0 } in src/store/scene.ts that ScrollTrigger writes and useFrame reads.
  - Register ScrollTrigger once in src/main.tsx (gsap.registerPlugin(ScrollTrigger)). Call ScrollTrigger.refresh() after fonts load (document.fonts.ready) and on resize; kill all triggers on unmount.
  - Canvas: <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }} camera={{ fov: 32, position: [0, 0.15, 6.2], near: 0.1, far: 50 }} onCreated sets gl.toneMapping = ACESFilmicToneMapping, toneMappingExposure 1.0, outputColorSpace SRGBColorSpace>. The canvas is transparent; the backdrop is CSS. Expose gl, scene and camera to the Add to cart handler through a small ref module (src/three/glRef.ts) so the snapshot can be taken outside the Canvas tree.
  - Never use drei Environment presets or files (they download from a CDN). Lighting is only the Lightformer rig and two lights described under Design imagery.
  - package.json scripts: dev 'vite', build 'tsc -b && vite build', preview 'vite preview'.

## Variables
- [BRAND] — Brand name (default: "Orvane"). Invented audio brand. Used in the header wordmark, <title>, footer, support email (care@ + brandSlug without hyphens + .com) and the cart line. Never a real headphone or electronics brand.
- [PRODUCT_NAME] — Product name (default: "Tern"). Short invented model name, one or two words. It is the giant H1 on the stage and appears in the price summary, cart line, part-diagram heading and build band. No real model names.
- [PRODUCT_TYPE] — Product type (default: "wireless over-ear headphones"). Lowercase noun phrase. Drives the stage eyebrow, the canvas aria-label and the spec emphasis. The 3D model is always an over-ear headphone, so keep it a kind of over-ear headphone (studio, gaming, kids, travel, DJ).
- [BASE_PRICE] — Base price (default: "$329"). US dollars with a $ sign, whole number. Parsed as the base price; option deltas (+$20 finish, +$15 / +$25 cushions, +$15 engraving) are added on top. Rewrite the deltas only if they look out of proportion.
- [AUDIENCE] — Who it is for (default: "people who wear headphones for hours: editors, night-shift workers and remote developers"). Shapes the stage subline, feature emphasis, the three reviewers and the FAQ answers.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/3d-product-configurator-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/3d-product-configurator-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/3d-product-configurator-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
