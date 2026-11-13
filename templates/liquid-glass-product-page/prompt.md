# Liquid Glass Product Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page preorder site for [BRAND] [PRODUCT], a [PRODUCT_KIND] made in small batches. The page is a calm, warm off-white stage where every UI surface is liquid glass: blurred, slightly refracting panels with bright rims floating over large product photographs. It opens with a counting loader, shows the product full-bleed with a magnifying lens that follows the cursor, tells the product's story in four pinned scroll chapters, then covers materials, the product in a real room, a full spec sheet, three editions with prices, a preorder panel with a live total, an FAQ and a footer. It must feel like a real small hardware studio taking real reservations: concrete numbers, an invented address, invented press quotes and precise specs.

- Audience: People who buy design-led hardware for their home and are willing to reserve a first-batch product: they care about materials, how it looks in a room and exact specs, and they read the FAQ before paying a deposit.
- Goal: Get the visitor to reserve a unit with a refundable $50 deposit. Primary CTA everywhere: Preorder / Reserve (scrolls to #preorder). Secondary: Hear it in a room (#sound) and the spec sheet (#specs).
- Tone: Quiet, precise and tactile, like a maker's catalogue. Short sentences, real numbers, no hype words (no revolutionary, game-changing, next-level, unleash). One italic emphasis phrase per headline.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/newsreader (OFL-1.1), @fontsource-variable/geist (OFL-1.1), @fontsource-variable/geist-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One page, index.html. Sections are reached by hash anchors: #top, #story, #design, #sound, #specs, #editions, #preorder, #faq.
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer). In tailwind.config.ts add every color under Design to theme.extend.colors (paper, paper-deep, ink, graphite, muted, line) and fontFamily display ['Newsreader Variable', 'Georgia', 'serif'], sans ['Geist Variable', 'system-ui', 'sans-serif'], mono ['Geist Mono Variable', 'ui-monospace', 'monospace'].
  - In src/main.tsx import '@fontsource-variable/newsreader/opsz.css', '@fontsource-variable/newsreader/opsz-italic.css', '@fontsource-variable/geist' and '@fontsource-variable/geist-mono'.
  - File layout: src/content.ts (all copy, prices, specs, FAQ, image paths and alt text), src/styles/glass.css (the .glass recipe, rim, specular and fallback), src/index.css (Tailwind layers, loader and pulse keyframes, reduced-motion overrides), src/lib/liquidMap.ts (displacement map generator), src/lib/pointer.ts (one shared pointer store), src/state/order.ts (selected edition, finish, quantity via a tiny React context).
  - Components: Glass.tsx, LiquidFilter.tsx, Loader.tsx, Nav.tsx, Hero.tsx, Lens.tsx, Press.tsx, Story.tsx, Materials.tsx, Room.tsx, Specs.tsx, Elevation.tsx (the SVG drawing), Editions.tsx, Preorder.tsx, Faq.tsx, Footer.tsx, Cursor.tsx, Magnetic.tsx.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described in the Head section. <title>[BRAND] [PRODUCT] — [PRODUCT_KIND]</title> (capitalize the first letter of the kind), lang en, theme-color #f2f0eb.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the nine images. Keep it under 8 MB.

## Variables
- [BRAND] — Brand name (default: "Nacre"). Studio name. Wordmark in nav, loader and footer, the title and the footer copyright ('[BRAND] Sound Studio' in the default copy).
- [PRODUCT] — Product name (default: "Tide"). Short product name, always shown after the brand ('Nacre Tide') in the hero eyebrow, preorder headline and edition names.
- [PRODUCT_KIND] — What the product is (default: "hand-blown glass room speaker"). Lowercase noun phrase. Drives every chapter, spec, FAQ answer and image. Choose a physical object with a visible material story.
- [PRICE] — Starting price (default: "$649"). Price of the base (Clear) edition. The other two editions and the totals are written relative to it in the default copy; recalculate them when this changes.
- [SHIP_WINDOW] — Shipping window (default: "Ships in early spring"). Short phrase shown in the hero chip, editions and preorder panel.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/liquid-glass-product-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/liquid-glass-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
Inspired by Aether One — Liquid Glass (Opus 5.5 showcase by Miler) by @ohmiler — https://ohmiler.github.io/opus-5.5/liquid-glass-landing/
— Prompt by VibeFather · https://vibefather.ai/t/liquid-glass-product-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
