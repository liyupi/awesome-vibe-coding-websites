# Meditation App Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page app landing built purely in code: a slow dawn-to-dusk drifting gradient sky behind a working 4-7-8 breathing circle the visitor can try, then a sessions library preview, a sleep-stories band with a code-drawn waveform, a CSS phone mockup, sample pricing with a monthly/yearly toggle, and quiet testimonials.

- Audience: Meditation, breathwork, sleep and wellness app makers, and the studios who build their launch pages.
- Goal: Let the visitor feel calm in the first ten seconds by trying the breathing circle, then walk them down a quiet page — sessions, sleep stories, the app screen, sample pricing — to a store-style CTA with no checkout.
- Tone: Soft, unhurried, sincere — short sentences that breathe; experiential words like 'settle' and 'rest'; no clinical language, no exclamation marks.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/quicksand (OFL), @fontsource/figtree (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest meditation-app-landing-page -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/quicksand and @fontsource/figtree as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors dawnmist #FDF7F4, cloud #FFFFFF, skyrose #F5DAD3, dawngold #F3CDA9, dusk #CDC8E8, plum #4A4159, mauve #8E8199, stillteal #7AA69C; fontFamily display 'Quicksand' and sans 'Figtree'; radius: card 20px, chip 14px, pill 999px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - Drifting sky in src/index.css: three full-bleed absolute layers — .sky-dawn (linear-gradient 160deg, #FDF7F4 0%, #F5DAD3 45%, #F3CDA9 100%), .sky-day (160deg, #FDF7F4 0%, #E9E7F2 50%, #CDC8E8 100%), .sky-dusk (160deg, #F5DAD3 0%, #CDC8E8 55%, #6B6284 130%) — each on a 180s keyframe loop that crossfades opacity 0→1→0, phases offset 60s apart, ease-in-out; behind them one barely-moving blurred ellipse (.sun, radial-gradient dawn gold at 30% opacity, drifting 40px over the same 180s).
  - src/components/BreathCircle.tsx: the 4-7-8 engine — a phases array [inhale 4s, hold 7s, exhale 8s] driven by setTimeout; the circle (280px, radial-gradient skyrose→dawngold, blur-soft edge) scales 1→1.35 across the inhale (easeInOut), holds with a slow ripple ring, and returns 1→1.35→1 over the exhale; cue words 'Breathe in' / 'Hold, softly' / 'Let it go' crossfade at phase boundaries; an SVG progress arc tracks the current phase; a cycle counter increments after each exhale; Begin toggles to Rest.
  - src/components/Waveform.tsx: 48 rounded bars (3px wide, plum at 35% opacity on the dusk band) whose heights follow a fixed sine array and gently oscillate scaleY ±20% on a 6s staggered loop; a play/pause chip toggles between full and half amplitude.
  - src/lib/motion.ts: shared variants — drift (opacity 0→1, y 20→0, 700ms ease-out, 90ms stagger, whileInView once), lift (y -2px, 300ms) — with useReducedMotion falling back to plain 200ms opacity fades.
  - Keep every user-facing string (brand, sessions, stories, narrators, tiers, testimonials, CTA labels) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — Quiet, daily</title> plus a drawn-in-code favicon.svg (a small stillteal circle ring on the dawnmist ground); no other meta work.

## Variables
- [BRAND] — App name (default: "Stillpoint"). Invented app name used for the wordmark, page title, phone mockup screen and every mention in the copy.
- [PRICE_MONTH] — Monthly price (default: "$9"). The paid tier's monthly price in the pricing section; the yearly toggle shows roughly twelve times this, both sample copy.
- [SESSIONS] — Library size (default: "300"). Sample session count in the library preview intro ('[SESSIONS]+ sessions in the app — six shown here').
- [FREE_MINUTES] — Free daily minutes (default: "10"). The freemium hook: header CTA, hero sub-line and the Free tier row ('[FREE_MINUTES] free minutes a day, no card needed').
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/meditation-app-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Dawn mist `#FDF7F4` — Page ground everywhere — warm porcelain, never pure white.
- Cloud `#FFFFFF` — Cards, panels, phone mockup body, header bar.
- Sky rose `#F5DAD3` — Hero gradient stop, soft tints, the breathing circle's fill.
- Dawn gold `#F3CDA9` — Gradient stop, duration chips, the sun ellipse.
- Dusk lavender `#CDC8E8` — Gradient stop and the sleep-stories band ground.
- Deep plum `#4A4159` — Primary text and headings — quiet dark plum, never black.
- Mauve `#8E8199` — Secondary text: intros, captions, narrator lines.
- Still teal `#7AA69C` — The single accent: Begin button, progress arc, active chips, links.

### Typography
- Display — headlines, brand, prices (quiet rounded): Quicksand (OFL), weights 500/600
- Text — body, cards, chips, cues (relaxed 1.7 line-height): Figtree (OFL), weights 400/500/600

### Layout & motion
- Spacing: Airy beyond habit: sections py-32 (128px) desktop / py-24 (96px) mobile; content max-w-5xl — deliberately narrower than usual; the breathing circle gets a full clear viewport with nothing within 96px of it; body copy capped at 52ch.
- Radius: Soft everywhere: 20px on cards, panels and the phone mockup, 14px on inputs and chips, 999px pills on buttons; the breathing circle is pure geometry with a blurred edge.
- Motion: Drifting sky: the three gradient layers crossfade over a 180s loop (60s phase offsets), with the sun ellipse drifting 40px across it — the page's time moves in minutes, not seconds.
- Motion: Breathing circle: 4-7-8 — scale 1→1.35 over the 4s inhale (easeInOut), a soft ripple ring during the 7s hold, back to 1 over the 8s exhale; cue words crossfade 400ms at each boundary; the progress arc fills per phase; a cycle counter rests bottom-right.
- Motion: Reveals: sections and cards fade up (y 20→0, 700ms ease-out) with 90ms stagger via Motion whileInView, once — nothing snaps.
- Motion: Waveform: bars oscillate scaleY ±20% on a 6s staggered loop; the play chip toggles full/half amplitude with a 600ms ease.
- Motion: Hover: cards and buttons lift 2px (300ms) with a shadow deepening one step; pricing toggle chips crossfade prices (300ms).
- Motion: prefers-reduced-motion: the sky holds a static dawn gradient, the breathing circle stays at rest with the three phases shown as static steps and a working counter, the waveform freezes at half amplitude, all reveals become 200ms opacity fades.
- Imagery: Zero photography: serene CSS gradient skies drifting through dawn, midday and dusk, one soft sun ellipse, and the breathing circle — soft blurred geometry over type. No people, no photos, no starfields, no illustration sets; the calm comes from hue, air and pace.

## Pages & Sections
### [BRAND] — Quiet, daily (`index.html`)
1. **Header** — Fixed top bar on cloud at 80% opacity with a soft blur and no border. Left: the [BRAND] wordmark in Quicksand 600 20px plum. Right (desktop): anchor links 'Breathe', 'Sessions', 'Sleep', 'Pricing' in Figtree 15px mauve → plum on hover; then a pill CTA 'Try [FREE_MINUTES] free minutes' (stillteal ground, cloud text) → #breathe. Mobile: wordmark + CTA + lucide menu/x toggle opening a cloud panel with the four links stacked.
   Layout: position fixed, z-40, h-16.
   Motion: Mobile panel eases down 300ms; link hover color shifts 200ms; nothing else moves.
2. **Hero — the breathing circle** — id=breathe. Full viewport on the drifting sky. Centered stack: label in Figtree 600 12px uppercase tracked 0.18em mauve: 'A QUIET APP FOR LOUD DAYS'; headline Quicksand 500, clamp(2.5rem, 5.5vw, 4.25rem), plum: 'Ten minutes of quiet, wherever the day finds you.'; sub Figtree 17px mauve max-w 46ch: 'Guided sessions, sleep stories and one honest breathing timer. [FREE_MINUTES] free minutes every day — no card, no noise.' Then the BreathCircle: a 280px circle with the cue line under it ('Breathe in', 'Hold, softly', 'Let it go'), the 4-7-8 pattern as three small chips ('4 in · 7 hold · 8 out'), a pill 'Begin' button (stillteal) that becomes 'Rest', and a quiet cycle counter 'cycle 2' in mauve. Bottom center, a soft scroll cue: 'The sessions ↓' in mauve.
   Layout: min-h 100vh, everything centered in a max-w-3xl column; the circle keeps 96px clear on every side; mobile keeps the same order with the circle at 220px.
   Motion: The sky drifts on its 180s loop; on Begin the 4-7-8 timeline runs until Rest; cue words crossfade; reduced motion: static dawn sky, circle at rest, phases as static steps with a working counter.
3. **Sessions preview** — id=sessions. Label 'THE LIBRARY'; headline Quicksand: 'Small sessions for heavy days.' Intro mauve: '[SESSIONS]+ guided sessions in the app — six live here.' Six cloud cards (20px radius, soft shadow) in a 3×2 grid, each: a category tag chip (Focus skyrose tint / Sleep dusk tint / Anxiety dawngold tint), title Quicksand 600 18px plum, one line Figtree 14px mauve, duration chip pill Figtree 12px. Cards: 'Morning settle' — 'Before the phone wakes up.' — FOCUS · 10 MIN / 'Before the inbox' — 'Two minutes, then you open it.' — FOCUS · 2 MIN / 'Sunday sort-out' — 'For the Sunday scaries, gently.' — ANXIETY · 15 MIN / 'Landing the day' — 'A soft floor between work and evening.' — FOCUS · 8 MIN / 'Midnight rain' — 'Rain on a tin roof, nothing else.' — SLEEP · 45 MIN / 'Worry, unpacked' — 'Name it, hold it, set it down.' — ANXIETY · 12 MIN.
   Layout: 3-column grid (2 on tablet, 1 on mobile) with 24px gaps; cards top-aligned.
   Motion: Cards drift up on scroll with 90ms stagger; hover lifts 2px; reduced motion: plain fades.
4. **Sleep stories** — id=sleep. Full-bleed band on the dusk gradient (dusk lavender deepening toward plum at the bottom edge). Left: label 'SLEEP STORIES' mauve; headline in Quicksand, cloud: 'Stories that end before you do.' Body Figtree, cloud at 85%: 'Slow chapters, read by quiet voices, mixed with rain you can turn up.' Story list, three rows separated by hairlines of plum at 15%: 'The Lighthouse Keeper's Ledger — 42 MIN — read by Noa Ellison' / 'A Train Through the Fens — 55 MIN — read by Peter Vance' / 'The Greenhouse at Night — 38 MIN — read by Amara Devi'. Right: the Waveform with a pill chip 'Rain only' and a play/pause chip (stillteal outline) that toggles amplitude.
   Layout: 12-column grid: copy columns 1–6, waveform columns 8–12 (vertically centered); mobile stacks copy then waveform.
   Motion: The band's gradient eases one shade deeper on scroll into it (1s, once); waveform bars oscillate on the 6s loop; play toggles amplitude 600ms; reduced motion: static half-amplitude bars.
5. **App preview** — id=app. Left: a CSS phone mockup — 280×580px, 36px radius, cloud body, soft plum shadow at 10%, a simple notch; screen shows a mini static dawn sky, a resting circle with the stillteal progress arc at 32%, session title 'Morning settle' in Quicksand, a timer line Figtree '3:12 / 10:00', and a pause bar (dusk tint). Right: label 'THE APP'; headline: 'One tap and you're breathing.' Three feature lines (Figtree 16px plum, lucide icons in stillteal): 'One tap, no onboarding maze' (hand) / 'Works offline — plane, tunnel, cottage' (wifi-off) / 'No streaks, no guilt — skip a day, nothing breaks' (feather). CTA pill 'Start with [FREE_MINUTES] free minutes' → #pricing.
   Layout: 12-column grid: phone columns 1–5 (slightly rotated -2deg on desktop, flat on mobile), features columns 7–12 self-center.
   Motion: Phone drifts up on reveal and straightens to 0deg on hover (400ms); the arc is static here; reduced motion: no rotation.
6. **Pricing** — id=pricing. Label 'PRICING'; headline: 'Simple, like it should be.' A monthly/yearly toggle (two pill chips). Two cloud cards side by side: 'Free — forever' — '[FREE_MINUTES] minutes a day, the 4-7-8 timer always unlocked, no card' — price '0' / 'Still — everything' — 'the whole library, sleep stories, offline, monthly' — price '[PRICE_MONTH] / month' or 'roughly [PRICE_MONTH] × 12 a year' when the toggle flips. Small print Figtree 13px mauve: 'Sample pricing for the demo — nothing here takes payment.' CTA under both: pill 'Get [BRAND]' (stillteal).
   Layout: Two cards in a 2-column grid (stacked on mobile), 28px padding, 20px radius; toggle centered above.
   Motion: Toggle crossfades the price line 300ms; cards drift up staggered; reduced motion: prices swap without fade.
7. **Testimonials** — Label 'WHISPERED KINDLY'; three quote cards on cloud, quote in Quicksand 500 19px plum, attribution Figtree 13px mauve: 'It's the only app I never mute.' — Priya S. / 'The 4-7-8 timer alone is worth keeping.' — Dan K. / 'I stopped counting streaks and started resting.' — Marisol T. These are invented sample quotes about experience only.
   Layout: 3-column grid (stacked on mobile), 24px gaps, quotes left-aligned with a small stillteal quotation mark drawn in CSS.
   Motion: Cards drift up staggered 120ms; no other motion.
8. **Footer** — Dawn mist ground with a dusk-tint top hairline. Left: the [BRAND] wordmark and one line Figtree 13px mauve: 'Made slowly. An invented demo app — every number and quote on this page is sample copy.' Right: anchor links 'Breathe · Sessions · Sleep · Pricing' in mauve; optional [CREDIT] link. No dates, no social row.
   Layout: py-12, max-w-5xl, flex row wrapping to column on mobile.
   Motion: None.

## Assets
- icon: lucide-react (ISC) via npm — hand, wifi-off and feather for the app feature lines; target, moon and cloud for session category tags; play and pause for the waveform chip; arrow-down in the hero scroll cue; menu and x for the mobile header. No other iconography: no emoji, no lotus logos, no brand marks. Every other visual — the gradient skies, breathing circle, waveform, progress arc and phone mockup — is drawn in CSS/SVG by the builder following the section specs; no image files are used anywhere.
- font: @fontsource/quicksand (OFL, weights 500 and 600) and @fontsource/figtree (OFL, weights 400, 500, 600), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and the lucide icon package in ASSETS.md at the project root: path, source, license — there are no image assets to list.

## Don'ts
- No backend, no network calls, no analytics, no checkout or subscription payments: pricing is sample copy, the Begin button only runs a local timer, and no form exists to submit anywhere.
- No photography or raster images anywhere: skies are CSS gradients, the circle/waveform/arc are SVG/CSS — never Unsplash/Pexels/Pixabay, generated photos or placeholder-image services.
- No real meditation apps, teachers, narrators or brands: the app, sessions, story titles, narrators, prices and quotes are invented, and [BRAND] is used everywhere a name appears.
- No health or medical claims, implied or stated: copy stays experiential ('settle', 'rest', 'quieter days'); never 'treats', 'cures', 'clinical', or diagnostic language, and testimonials speak only to personal experience.
- No dates, streak counters or real-clock anything: the sky's 180s loop is fixed, not time-of-day aware, and no publish dates or years appear.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react; no third-party scripts, links or embeds.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ tiny (well under 20 MB — there are no bitmaps).
- Single page with anchor navigation only; must render cleanly at 1440×900 and 390×844 with zero console errors; prefers-reduced-motion must give every animation a calm static fallback (static dawn sky, resting circle with static phase steps, frozen waveform, plain fades).
- Keep the serene direction locked: dawn mist grounds, sky rose / dawn gold / dusk lavender gradients, plum text, one stillteal accent, Quicksand over Figtree, pills and 20px radii, huge whitespace; no saturated neon, no dark mode, no glassmorphism cards, and nothing faster than a gentle hover or the 4-second inhale.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [BRAND], [PRICE_MONTH], [SESSIONS] or [FREE_MINUTES] change, rewrite session names, story titles and tier copy to fit the new app instead of leaving meditation copy under another product.
- List every third-party file (two Fontsource families, lucide icons) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/meditation-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
