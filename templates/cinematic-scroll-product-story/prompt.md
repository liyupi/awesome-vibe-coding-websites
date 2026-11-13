# Cinematic Scroll Product Story

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page product launch site for [PRODUCT], an [PRODUCT_TYPE] from the invented maker [BRAND], told like a short film: six full-bleed scenes pin and crossfade as you scroll, with parallax depth layers, letterboxed captions that type in, specs that count up, a final multi-angle reveal of the bike and a sticky preorder panel with color and size choice.

- Audience: Urban commuters aged 28–50 who are ready to replace a second car or a long transit ride, care about design and want hard numbers (range, weight, charge time) before putting down a deposit.
- Goal: Make the visitor feel the ride first, then convince with numbers, then convert: reserve [PRODUCT] with a refundable [DEPOSIT] deposit in the color and size they picked.
- Tone: Cinematic, quiet and confident. Short declarative captions like film subtitles, concrete times and distances, no exclamation marks, no buzzwords.

## Stack
- Framework: Vite 5 + vanilla TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: gsap 3 (core, ScrollTrigger, MotionPathPlugin) (GSAP Standard 'no charge' license (free, commercial use allowed)), lenis (MIT), lucide (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), typescript (Apache-2.0), @fontsource/barlow-condensed (OFL-1.1), @fontsource-variable/manrope (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the vanilla-ts template. One page: index.html at the project root with <div id='app'>, entry src/main.ts.
  - vite.config.ts: base './', build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.ts']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (night, charcoal, ash, bone, haze, dusk, ember, volt) and fontFamily display ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'], sans ['"Manrope Variable"', 'system-ui', 'sans-serif'], mono ['"IBM Plex Mono"', 'ui-monospace', 'monospace'].
  - src/fonts.ts imports '@fontsource/barlow-condensed/600.css', '@fontsource/barlow-condensed/800.css', '@fontsource-variable/manrope', '@fontsource/ibm-plex-mono/400.css', '@fontsource/ibm-plex-mono/500.css'; main.ts imports src/fonts.ts and src/style.css (Tailwind layers, the caption cursor keyframes, the scroll-cue keyframes and a @media (prefers-reduced-motion: reduce) block).
  - File layout: src/content.ts (all copy, scenes, captions, stats, angles, swatches, sizes, FAQ, image paths, seeded art data), src/lib/brand.ts (brandSlug, email, storage keys), src/lib/storage.ts (safe localStorage get/set in try/catch), src/render.ts (builds all markup from content), src/scenes/art.ts (inline SVG generators for haze, ridge, rain, contours, route, elevation profile, light streaks, grain), src/film.ts (master timeline), src/typing.ts, src/countup.ts, src/header.ts, src/preorder.ts, src/faq.ts, src/reduced.ts.
  - gsap.registerPlugin(ScrollTrigger, MotionPathPlugin) once in src/film.ts. Create Lenis only when reduced motion is off; call ScrollTrigger.refresh() after all images in #film have loaded (Promise over img.decode()).
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names. The build itself never fetches anything.
  - index.html: lang en, <meta name='theme-color' content='#0A0B0D'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[PRODUCT] by [BRAND] — Preorder</title>. Body background #0A0B0D so nothing flashes white.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 8 MB.

## Variables
- [BRAND] — Brand (default: "Corvel"). Invented maker name. Used in the wordmark, eyebrow, timecode bar, footer, email (hello@ + brandSlug + .com) and localStorage keys. Never a real bike or vehicle brand.
- [PRODUCT] — Product name (default: "Arc 7"). Invented model name shown huge in Scene 01, in the reveal, the preorder panel and the title. Short (one or two words) so it fits the H1.
- [PRODUCT_TYPE] — Product type (default: "electric commuter bike"). Lowercase phrase for what it is. Drives the lead, the panel line and all spec and caption rewrites. Keep it a bicycle so the included bike images still fit; for another product, replace the six images with your own.
- [PRICE] — Price (default: "$2,890"). Full price with currency symbol. The monthly line is computed from it (÷ 24, rounded up).
- [DEPOSIT] — Deposit (default: "$100"). Refundable reservation amount shown on the CTA, in the confirmation and in the FAQ.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/cinematic-scroll-product-story in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/cinematic-scroll-product-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/cinematic-scroll-product-story · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
