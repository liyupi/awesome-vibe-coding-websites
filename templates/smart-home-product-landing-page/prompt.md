# Smart Home Product Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A one-page, warm-white landing page for [BRAND], [PRODUCT]. The hero is anchored by a large interactive cutaway SVG house: clicking a room (living, kitchen, bedroom, garage) highlights it in the single teal accent and shows that room's devices and its one automation in an info card. Below: a four-fact strip, a six-device lineup paired with a simplified house mini-map that pulses where each device lives, two CSS phone mockups (app dashboard and the [SIGNATURE_SCENE] scene playing device by device), three bundles with sample pricing and a quiet starter note, an FAQ, and a reserve-your-kit email band. Every visual is drawn in code — SVG house, device glyphs, phones, logo, favicon. No photographs anywhere.

- Audience: [AUDIENCE] shopping for their first smart home kit, and hardware founders or indie makers launching a device or sensor product who need a landing page that demonstrates rather than describe.
- Goal: Let visitors feel how the system behaves in two clicks — explore rooms in the cutaway house, watch the [SIGNATURE_SCENE] scene run in the phone — then move them to a bundle and the reserve-email band.
- Tone: Warm, calm and specific. Short sentences, plain verbs, real numbers (lumens, battery months, sample prices). Gently playful but never cute-obsessive; no hype words, no exclamation stacking.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from motion/react) (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/nunito (OFL-1.1), @fontsource-variable/figtree (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One page: index.html at the project root with entry src/main.tsx. package.json scripts: dev 'vite', build 'tsc -b && vite build', preview 'vite preview'.
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. No images ship in this template, so dist/ is JS, CSS, woff2 and favicon only; keep it under 3 MB.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts extend colors with kebab-case keys (cream, shell, panel, sand, line, line-strong, ink, muted, faint, teal, teal-deep, teal-tint), fontFamily display ['Nunito Variable', 'system-ui', 'sans-serif'], sans ['Figtree Variable', 'system-ui', 'sans-serif'], mono ['IBM Plex Mono', 'ui-monospace', 'monospace'], borderRadius { card: '24px', inner: '16px', chip: '10px', house: '28px' }, maxWidth { container: '1160px' }, boxShadow { soft: '0 24px 60px -30px rgba(44,38,32,0.28)', lift: '0 16px 36px -20px rgba(44,38,32,0.22)' }.
  - src/fonts.ts imports @fontsource-variable/nunito (weights 600,700,800), @fontsource-variable/figtree (400,500,600,700) and @fontsource/ibm-plex-mono (400,500,600, weight files 400.css/500.css/600.css); src/main.tsx imports src/fonts.ts and src/index.css. index.css holds the Tailwind layers, body background #FAF6EF and color #2C2620, and a @media (prefers-reduced-motion: reduce) block that shortens CSS animations and transitions to 0.01ms.
  - File layout: src/content.ts (all copy, room data, device data, bundles, FAQ — typed, no copy in components), src/lib/brand.ts (brandSlug, emailDomain, companyName), src/components/houseGeometry.ts (SVG coordinates for the cutaway house and mini map), src/components/ (Header.tsx, MobileMenu.tsx, Hero.tsx, CutawayHouse.tsx, RoomInfo.tsx, FactsStrip.tsx, DeviceLineup.tsx, MiniMap.tsx, AppPreview.tsx, PhoneDashboard.tsx, PhoneScene.tsx, Bundles.tsx, Faq.tsx, CtaBand.tsx, Footer.tsx, Button.tsx, Reveal.tsx), src/App.tsx composing them in page order.
  - src/components/CutawayHouse.tsx renders the geometry described in the Hero section from the ROOMS array in content.ts; it never hard-codes copy. Room selection lives in Hero state (default 'living'); selecting a room (click, Enter or Space) updates the highlight, pins and RoomInfo together.
  - Reveal.tsx wraps sections in Motion whileInView fade-up (opacity 0 -> 1, y 20 -> 0, duration 0.6, ease [0.22, 1, 0.36, 1], viewport once with amount 0.2) and renders children unanimated when reduced motion is on. Wrap the app in MotionConfig reducedMotion='user'.
  - index.html: lang en, <meta name='theme-color' content='#FAF6EF'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — A home that handles itself, gently</title>. public/favicon.svg is the logo mark (teal rounded square with the white cutaway-house glyph).
  - Write ASSETS.md at the project root: state that every visual (house, mini map, device glyphs, phone mockups, logo, favicon) is drawn in code for this project, and list the Fontsource packages (OFL-1.1, https://fontsource.org) and lucide-react (Lucide contributors, ISC, https://lucide.dev). There are no image files.

## Variables
- [BRAND] — Brand name (default: "Hearthlane"). Invented product name. Used in the wordmark, page title, hero subhead, app UI, FAQ, CTA and the email domain. Never a real smart home brand, ecosystem or voice assistant.
- [PRODUCT] — What the product is (default: "a starter smart home system of six small, calm devices"). One lowercase phrase that completes '[BRAND] is ...'. Drives the hero subhead, lineup intro, app copy and FAQ. Any small-device kit fits: sensors, cameras-free security, lighting.
- [AUDIENCE] — Who it is for (default: "first-time homeowners and young families"). Plural noun phrase. Used in the hero subhead, bundles note and footer line; FAQ answers adapt to it.
- [SIGNATURE_SCENE] — Flagship automation name (default: "Leaving Home"). Title case scene name shown in the second phone, the hero ghost button and the app copy. Pick a short named routine (Away Mode, Night Watch) that fits the new brand.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/smart-home-product-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/smart-home-product-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/smart-home-product-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
