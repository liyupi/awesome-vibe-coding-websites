# Template Library Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page homepage for [BRAND], a library of original vibe-coding website templates. Every template comes with a live demo, the exact prompt that built it and a DESIGN.md, and users paste the prompt into Claude Code, Codex, Cursor or Lovable. The page is dark and technical: a near-black neutral base, hairline borders, mono details and one acid-lime accent. The hero has a wall of auto-scrolling browser-frame cards, each one an invented mini-website drawn entirely in CSS/SVG. After the hero come: How it works (Pick / Copy / Ship), Trending templates, Browse by type with counts, Use it in your agent (CLI / MCP / Skill code tabs), Pro early access with a spots meter, FAQ and a dense footer.

- Audience: Developers, designers and indie makers who build websites with AI coding agents and want a strong starting design plus a prompt that reliably reproduces it.
- Goal: Make visitors understand within five seconds that each template is a working demo plus a prompt they can copy. Then move them to browse templates (primary CTA), set up the CLI/MCP/Skill, or request Pro early access through a mailto link.
- Tone: Precise, calm and crafted. Short declarative sentences, concrete nouns, no hype words (no 'revolutionary', 'supercharge', 'unleash'), no filler. Every heading names what its section covers.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/bricolage-grotesque (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource-variable/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One page: index.html with sections reached by hash anchors (#how, #trending, #types, #agent, #pro, #faq).
  - Tailwind 3.4 via PostCSS (tailwindcss + postcss + autoprefixer). Add the palette below to theme.extend.colors and the three font families to theme.extend.fontFamily (display, sans, mono).
  - Put the marquee keyframes, the aurora, the caret blink and the reduced-motion overrides in src/index.css.
  - vite.config.ts: base './', build { sourcemap: false, outDir: 'dist' }, plugin @vitejs/plugin-react. Do not copy src/ into dist/.
  - dist/ holds index.html, hashed JS/CSS, self-hosted woff2 fonts and favicon.svg. Keep it well under 20 MB (expected under 1 MB).

## Variables
- [BRAND] — Brand name (default: "Lumen Index"). Shown as the text wordmark in the header and footer, in the <title>, the FAQ heading and the copyright line.
- [BRAND_SLUG] — CLI / package slug (default: "lumen-index"). Lowercase slug used in code snippets: npx [BRAND_SLUG], [BRAND_SLUG]-mcp, [BRAND_SLUG]-templates.
- [CONTACT_EMAIL] — Contact email (default: "hello@example.com"). Used by the Pro early-access mailto button and the footer Contact link.
- [SPOTS_TOTAL] — Pro early-access spots (total) (default: "500"). Invented placeholder number for the meter. Not a real figure.
- [SPOTS_CLAIMED] — Pro early-access spots (claimed) (default: "312"). Invented placeholder number. The meter fill is SPOTS_CLAIMED / SPOTS_TOTAL.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/template-library-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Ink `#0a0b0a` — Page background; text color on lime buttons
- Panel `#111311` — Section panels, code panel body, card bodies, eyebrow pill
- Raised `#171a17` — Hover backgrounds, browser-frame chrome bar, active tab
- Line `#232723` — 1px hairline borders and dividers everywhere
- Line Strong `#2f342f` — Button outlines, input-like borders, browser dots, meter track border
- Bone `#ecefe8` — Primary text and headings
- Ash `#9aa197` — Body copy and secondary text
- Smoke `#6b7268` — Mono labels, captions, code comments, URL pills
- Acid `#c6f432` — The only accent: primary CTA fill, step numerals, meter fill, caret, check icons, hover outlines (at 55% opacity). Never used for large areas or body text.
- Acid Dim `#9fc426` — Primary CTA hover fill
- Aurora Green `rgba(104,150,102,0.22)` — Hero-only radial glow, top-left
- Aurora Teal `rgba(47,111,106,0.20)` — Hero-only radial glow, top-right
- Aurora Amber `rgba(170,126,52,0.12)` — Hero-only radial glow, center
- Syntax Teal `#7fb8a8` — Code keys and flags
- Syntax Sand `#d8c08a` — Code strings

### Typography
- Display: H1, H2, card titles, type-list names, footer giant wordmark: Bricolage Grotesque Variable (@fontsource-variable/bricolage-grotesque) (OFL), weights 500/600/700
- Text: body, nav, buttons, FAQ: Inter Variable (@fontsource-variable/inter) (OFL), weights 400/500/600
- Mono: eyebrow, step labels, tags, counts, URL pills, code panel, meter numbers: JetBrains Mono Variable (@fontsource-variable/jetbrains-mono) (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Container max-width 1240px, centered, horizontal padding 24px (20px under 640px). Section vertical padding 128px desktop and 88px mobile. Section header block: mono label, then H2 with a 16px gap, then a 17px Ash intro paragraph (max-width 620px) with a 16px gap, then 48px to the content. Type scale: H1 72px/1.02, weight 600, letter-spacing -0.03em (44px under 640px); H2 48px/1.05, weight 600, -0.025em (34px mobile); card title 18px/1.3, weight 600; body 17px/1.6; hero sub 19px/1.55; mono labels 12px uppercase with letter-spacing 0.08em. Grid gaps are 16px for the demo wall and 20px for the catalog.
- Radius: Browser-frame cards and catalog cards 10px; code panel and Pro panel 14px; buttons 8px; tags, eyebrow and URL pills 999px; mini-site inner shapes 2–4px. No radius larger than 14px except pills.
- Motion: Hero marquee: each demo-wall row is a flex track that contains its card list twice. Each card has margin-right 16px, so translateX(0 → -50%) loops seamlessly. Rows A and C move left; rows B and D move right (animation-direction: reverse). Durations: A 64s, B 76s, C 58s, D 70s, linear, infinite. Hovering a row sets animation-play-state: paused.
- Motion: Hero aurora: three absolutely positioned 60vw circles with radial-gradient(closest-side, color, transparent) and filter: blur(80px). They drift with a 24s ease-in-out infinite alternate keyframe (translate up to ±4% plus scale 1 → 1.08), each with a different delay (0s, -8s, -16s).
- Motion: Eyebrow lime dot pulses its opacity 1 → 0.35 → 1 over 2.4s.
- Motion: Section reveals: Motion whileInView with initial {opacity:0, y:16}, animate {opacity:1, y:0}, duration 0.5s, ease [0.22,1,0.36,1], viewport {once:true, margin:'-80px'}. Children stagger by 0.06s.
- Motion: Catalog and demo cards on hover: translateY(-2px), border-color shifts to rgba(198,244,50,0.55), over 200ms. Catalog filter changes use Motion AnimatePresence with layout: cards fade and scale 0.98 → 1 over 0.25s.
- Motion: Type-list rows on hover: background becomes Raised, the ArrowUpRight icon slides 6px right and turns Acid, and a thumbnail strip opens from height 0 to 76px over 300ms. Desktop (≥1024px) only.
- Motion: Code panel: a lime block caret (8×16px) blinks at the end of the last code line with a 1.1s steps(1) animation. The copy icon swaps Copy → Check for 1.6s.
- Motion: Pro meter: the fill animates width from 0 to the claimed percentage over 1.2s ease-out when it scrolls into view.
- Motion: FAQ: the answer animates height auto with Motion (0.3s). The Plus icon rotates 45° when open.
- Motion: Header: after scrollY > 8, the background goes from transparent to rgba(10,11,10,0.78) with backdrop-filter: blur(10px) and a 1px Line bottom border, over 200ms.
- Motion: prefers-reduced-motion: reduce stops marquees (animation: none; the first card set sits static and tracks get overflow-x: auto), stops aurora drift, the eyebrow pulse and the caret blink (caret stays solid), and makes Motion reveals instant via useReducedMotion. The meter shows its final width immediately.
- Imagery: No photos or bitmaps anywhere. All visuals are code: (1) the hero aurora, built from CSS radial gradients; (2) a faint 64px hairline grid over the hero, built as background-image of two 1px linear-gradients in rgba(236,239,232,0.035) and masked with radial-gradient(ellipse at 50% 20%, black, transparent 70%); (3) twelve invented mini-websites, each a React component drawn with absolutely positioned divs and inline SVG in percentage units so it scales to any card size. Mini-sites use their own muted palettes (cream, terracotta, olive, teal, sand, rust, mustard, charcoal). They never use Acid lime, and there is never blue-purple or purple-pink. They contain no readable text other than the URL pill in the browser chrome. They show no logos, people or characters.

## Pages & Sections
### [BRAND] — Website Templates with Prompts and Live Demos (`/index.html`)
1. **Head** — <title>[BRAND] — Website Templates with Prompts and Live Demos</title>, theme-color #0a0b0a and lang='en'. Favicon: public/favicon.svg, a 32×32 rounded square (rx 7) in #c6f432 with two #0a0b0a vertical bars (x 10 and 18, width 4, heights 14 and 9, bottom-aligned at y 23). This is the logo mark too. It is an invented geometric mark, not any existing logo.
   Layout: Exactly one H1 (hero). Each section uses one H2. Sections are <section id=...> landmarks inside <main>, and the header and footer use <header> and <footer>.
2. **Header (sticky)** — Left: the logo mark (22px, the same SVG as the favicon) followed by the text wordmark '[BRAND]' in Bricolage 600 18px Bone. Center nav (Inter 500 14px Ash, hover Bone): 'How it works' (#how), 'Trending' (#trending), 'Types' (#types), 'Agent setup' (#agent), 'FAQ' (#faq). Right: a ghost link 'Pro early access' (#pro) with a 6px Acid dot before it, and a primary button 'Browse templates' (#trending) with Acid fill, Ink text, Inter 600 14px, height 36px, padding 0 14px, radius 8px, hover Acid Dim.
   Layout: position: sticky; top 0; z-50; height 64px; full width with an inner container of 1240px; flex justify-between, items-center. Under 1024px the center nav and ghost link are hidden and a Lucide Menu button (20px) opens a full-width dropdown panel below the header (Ink background, Line borders, links stacked 48px tall, primary button at the bottom). The icon swaps to X when open. Clicking a link closes the panel.
   Motion: Transparent at the top. After scrollY > 8 it gets the blurred Ink background and a bottom hairline (200ms).
3. **Hero with auto-scrolling demo wall** — Eyebrow pill (mono 12px Smoke, border Line Strong, background Panel, padding 6px 12px): a pulsing 6px Acid dot, then 'New templates every week · prompt + DESIGN.md included'. H1 (Bone): 'Vibe-coding website templates, with the prompt that built them.' Sub (19px Ash, max-width 640px): 'Click through a live demo, copy its exact prompt and DESIGN.md, and paste them into Claude Code, Codex or Cursor. Your agent builds a near-identical site in one run.' CTAs: primary 'Browse templates' with a Lucide ArrowRight icon (height 48px, padding 0 22px, Acid fill, Ink text, Inter 600 16px) linking to #trending; secondary 'How it works' (height 48px, 1px Line Strong border, Bone text, hover background Raised) linking to #how. Below the CTAs, a mono 12px Smoke line: 'WORKS WITH  Claude Code · Codex · Cursor · Lovable' (text only, no logos).

Demo wall: 12 invented mini-sites (the MiniSite component, keyed by id). Every card is a browser frame: a 1px Line border, radius 10px, overflow hidden, background Panel. Its chrome bar is 9% of card height (min 18px) with background Raised, three 5px dots in #3a3f3a at the left (4px gap), and a centered URL pill (46% width, background #0f110f, mono 8–9px Smoke) showing the domain. The viewport below holds the drawing. Recipes (positions in %):
1 fernhouse.demo: bg #efe9dc. Top nav: a dark #1d1b17 bar (18%×3%) at left 6% and three 6% bars at the right. Headline: two #1d1b17 bars, 62% and 44% wide and 9% tall, left 6%, top 24% and 36%. A #c8643b pill 16%×7% at top 52%. At the right, overlapping circles: #c8643b at 30% diameter and #d9c9a8 at 22%.
2 quarry.demo: bg #e8e4d8. A 2×2 grid of blocks with 2px #111 borders, inset 8%. The top-left block is filled #e0b341. Two thick #111 bars sit in the bottom-right block.
3 tidepool.demo: bg #0f2a28. Two centered #e6efe9 bars (58% and 40% wide, 8% tall) at top 20% and 31%. A centered #d39a3a pill (18%×8%) at 45%. A wide #163a37 rounded panel (80%×30%) at the bottom holds three short #5fb3a3 bars.
4 kiln.demo: bg #1a1816. Header bar #d9c9a8 (20%×3%). A 3×2 tile grid (gap 4%) with linear gradients #b5653a→#7a3b22, #d9c9a8→#a8946c, #5b6b4a→#39432d, #c8643b→#e0b341, #3a3f3a→#1d1b17, #a8946c→#5b6b4a.
5 parceldocs.demo: bg #f4f2ec. A left sidebar (22%, border-right #ddd8cb) with seven #c9c4b6 bars of varied widths. Main area: a #1d1b17 title bar, three #c9c4b6 text lines, and a code block #1b1d1b (70%×34%) with short bars in #7fb8a8, #d8c08a and #ecefe8.
6 stillwater.demo: bg #121512. Three pricing columns (26% wide each, Line border). The middle column is raised by 4% with a #8fa05a border and a #8fa05a top bar. Each column has a price bar, four thin lines and a button bar.
7 mothradio.demo: bg #d8cfbd. A centered window (70%×66%) in #efe8da with a 2px #2a2620 border. Its title bar uses repeating-linear-gradient stripes in #2a2620. Inside: an SVG polyline waveform (stroke #2a2620, 1.5) and a small play triangle.
8 gridline.demo: bg #f2f0ea with 1px rgba(0,0,0,0.08) grid lines every 12.5%. A #d9472b block covers the left 40% (full height minus 10% padding). Three stacked #111 bars on the right (80%, 64%, 48% of the remaining width).
9 saltmarsh.demo: sky linear-gradient #e9c88f→#7fa9a0 over the top 60%. A sun circle #f3e3b8 (18%) at left 62% / top 30%. A sea band #2f5d58 over the bottom 40% with three 1px rgba(255,255,255,0.25) wave lines. Two white bars top-left.
10 hexalabs.demo: bg #0b0f0e with a faint dot grid. A centered SVG isometric wireframe cube (hexagon outline plus three inner edges, stroke #5fb3a3, width 1). A small #ecefe8 bar headline bottom-left.
11 pocketarcade.demo: bg #10170f. A 10×6 grid of square cells (#1a2419). Cells lit #9bd36a form a snake path of 9 cells. One #e0b341 cell is the food. A score bar sits top-right.
12 copperline.demo: bg #111311. A left rail of 14% in #171a17 with four small bars. Top row: three KPI cards (Line border), each with a #ecefe8 number bar and an Ash label bar. An SVG line chart polyline (stroke #d39a3a, width 1.5) with an area fill gradient of #d39a3a at 20% fading to 0.
Row orders (each list is rendered twice per track): A = 1,2,3,4,5,6,7,8,9,10,11,12; B = 7,12,9,1,10,4,11,3,6,8,2,5; C = 10,5,8,11,2,9,6,12,1,7,3,4; D = 4,9,6,2,12,11,8,5,7,3,10,1.
   Layout: The section is position: relative and overflow hidden, with padding-top 152px (120px mobile). Behind the content: the aurora layer (z-0, pointer-events none) and the masked hairline grid. Green circle centered at 18% / 8%, teal at 78% / 0%, amber at 55% / 38%. The text block is centered: eyebrow, H1 (max-width 980px, margin-top 24px), sub (margin-top 24px), CTAs (margin-top 36px, gap 12px, wrap), works-with line (margin-top 28px). The demo wall is full-bleed (100vw) with margin-top 72px and rows separated by 16px. Cards are 280×184px at ≥1024px, 240×158px at 640–1023px and 200×132px under 640px. Rows A–D show at ≥1024px; rows A–C below 1024px. Each row gets mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent). A bottom overlay over the last 35% of the wall fades from transparent to Ink so the hero dissolves into the page. The aurora exists only in this section.
   Motion: Marquee rows as described in the design motion list, with pause on row hover and card hover lift. The text block reveals with a stagger (eyebrow, H1, sub, CTAs) on load. Reduced motion makes all of it static.
4. **How it works (#how)** — Mono label 'HOW IT WORKS'. H2: 'How vibe-coding templates work: pick, copy, ship.' Intro: 'Three steps from a demo you like to a site running on your machine.'
Step 01 · PICK. Title: 'Pick a live demo'. Text: 'Open any template and click through the real site before you commit. What you see is what the prompt produces.' Artifact line (mono 12px Smoke, on Panel with a Line border, radius 6px, padding 8px 10px): 'demo/fernhouse → index.html'.
Step 02 · COPY. Title: 'Copy the prompt and DESIGN.md'. Text: 'Each template ships with its complete prompt and a DESIGN.md that fixes colors, type, spacing and motion. One click copies both.' Artifact: 'prompt.md  ·  DESIGN.md'.
Step 03 · SHIP. Title: 'Ship it with your coding agent'. Text: 'Paste into Claude Code, Codex, Cursor or Lovable. The prompt names the stack, sections and copy, so the build lands close to the demo.' Artifact: '$ npm run build  ✓ dist/'.
   Layout: A three-column grid at ≥768px (stacked below) inside a 1px Line top and bottom border. Columns are separated by 1px Line vertical dividers (horizontal dividers when stacked). Each column has 40px padding. Top: step numeral '01' / '02' / '03' in JetBrains Mono 500 40px Acid, then ' / PICK' etc. in mono 12px uppercase Smoke on the same baseline. Then title (Bricolage 600 24px Bone, margin-top 28px), text (Ash 16px, margin-top 12px) and the artifact line (margin-top 24px).
   Motion: Columns reveal with a 0.06s stagger.
5. **Trending templates (#trending)** — Mono label 'TRENDING'. H2: 'Trending website templates this week.' A right-aligned link 'All template types' with ArrowRight goes to #types. Filter pills (mono 12px, height 30px, Line Strong border; the active pill has a Bone border and Bone text, inactive pills are Smoke): All, Landing, Dashboard, Portfolio, Docs, Pricing, 3D. Six cards, each reusing a MiniSite preview:
- Fernhouse: preview 1, tags Landing · Editorial, stack 'Vite + React'
- Copperline: preview 12, tags Dashboard · Dark, 'React + Tailwind'
- Gridline: preview 8, tags Portfolio · Swiss, 'Astro'
- Parcel Docs: preview 5, tags Docs · Minimal, 'Vite + React'
- Stillwater: preview 6, tags Pricing · SaaS, 'React + Tailwind'
- Hexa Labs: preview 10, tags 3D · WebGL, 'three.js'
The first tag of each card decides its filter group. Each card body shows: the name (Bricolage 600 18px), tags as mono 11px pills (Line border, Smoke), and a bottom row with the stack in mono 12px Smoke on the left and a 'Copy prompt' button on the right (Lucide Copy 14px plus a label, Inter 500 13px, Line Strong border, height 30px). The button writes '# <Name> — prompt preview\nBuild the <Name> template described on [BRAND].' to the clipboard (wrapped in try/catch) and switches to Check plus 'Copied' for 1.6s.
   Layout: The header row is flex justify-between with items-end (stacked on mobile). Filter pills sit in a row with a 8px gap, margin-top 32px, and scroll horizontally on mobile. The grid has 3 columns at ≥1024px, 2 at ≥640px and 1 below, with a 20px gap and margin-top 32px. Each card: Line border, radius 10px, Panel background. The preview is a browser frame at aspect-ratio 16/10, flush at the top. The body has 18px padding. Cards are <article> elements and are not links.
   Motion: Hover: lift plus a lime outline at 55% opacity. Filtering uses AnimatePresence with layout fade and scale.
6. **Browse by type (#types)** — Mono label 'BROWSE BY TYPE'. H2: 'Browse templates by type.' Intro: 'From one-screen landings to multi-panel dashboards. Every type comes with prompts tuned for that kind of build.' Eight rows: each has a name, a one-line descriptor, an invented count and three preview ids for the hover strip.
- Landing pages: 'Hero, proof, pricing, CTA.' 28 (1, 3, 9)
- SaaS: 'Product tours and feature grids.' 19 (3, 6, 12)
- Portfolio: 'Case studies and image-led grids.' 16 (4, 8, 1)
- Docs & blog: 'Sidebars, code blocks, long reads.' 11 (5, 2, 8)
- Pricing: 'Plans, toggles and comparison tables.' 8 (6, 3, 12)
- Dashboard: 'Charts, KPIs and dense tables.' 9 (12, 2, 6)
- 3D & WebGL: 'Canvas scenes and shader heroes.' 7 (10, 9, 11)
- Games: 'Tiny playable sites.' 5 (11, 7, 10)
The counts are invented sample numbers.
   Layout: At ≥1024px, a 12-column grid: the left 4 columns hold the section header (position: sticky; top 96px), and the right 8 columns hold the list. Below 1024px it stacks. Each row is an <a href='#trending'> with a 1px Line bottom border (the first row also has a top border) and padding 22px 8px, laid out as a grid with three areas. Left: name (Bricolage 500 28px Bone; 22px mobile) with the descriptor under it (Ash 15px). Right: the count in JetBrains Mono 500 36px Bone (Acid on hover), then an ArrowUpRight 20px in Smoke. Under the name area, the hover strip holds three browser-frame thumbnails, 116×76px each with an 8px gap, at height 0 and overflow hidden until hover.
   Motion: Row hover reveal as described in the motion list, desktop only. Rows reveal with a stagger.
7. **Use it in your agent (#agent)** — Mono label 'AGENT SETUP'. H2: 'Use templates in your coding agent: CLI, MCP or Skill.' Text: 'Search the catalog and pull a prompt without leaving the terminal. Pick the setup your agent already speaks.' Three bullets, each with a Lucide icon in Smoke at 18px: Terminal for 'CLI — search and download prompt.md in one command.', Plug for 'MCP — let the agent query templates as a tool.', BookOpen for 'Skill — a drop-in instruction file for agents that support skills.'
Code panel tabs (Terminal/Plug/BookOpen icon plus label): CLI | MCP | Skill. Tab contents (JetBrains Mono 13.5px/1.7):
CLI:
$ npx [BRAND_SLUG] search "dark saas landing"
$ npx [BRAND_SLUG] get lumen-index --out ./prompt.md
$ claude "Build the site described in ./prompt.md"
MCP (file label 'mcp.json'):
{
  "mcpServers": {
    "[BRAND_SLUG]": {
      "command": "npx",
      "args": ["-y", "[BRAND_SLUG]-mcp"]
    }
  }
}
Skill (file label 'SKILL.md'):
---
name: [BRAND_SLUG]-templates
description: Find a website template and build it from its prompt.
---
# 1. Search the catalog for a template that fits the request.
# 2. Fetch its prompt.md and DESIGN.md.
# 3. Follow the prompt exactly and keep the stack it names.
Syntax colors: the '$' prompt in Acid, commands in Bone, flags and JSON keys in Syntax Teal, strings in Syntax Sand, '#' lines and frontmatter dashes in Smoke. The copy button copies the plain text of the active tab.
   Layout: Two columns at ≥1024px (5/7 split, gap 64px), stacked below. Code panel: radius 14px, Line border, Panel background. Its header bar is 44px tall with a Line bottom border. Tabs sit on the left as buttons (mono 12px; the active tab has a Raised background and Bone text, inactive tabs are Smoke) with role='tablist' and aria-selected. On the right of the header: the file label in mono 11px Smoke and an icon button (Copy → Check, 16px, aria-label 'Copy snippet'). The body has 24px padding, a <pre> with overflow-x auto and min-height 220px. The lime block caret is appended after the last line.
   Motion: Tab content crossfades with opacity over 0.15s. The caret blinks. The copy icon swaps state.
8. **Pro early access (#pro)** — Mono label 'PRO · EARLY ACCESS'. H2: 'Pro early access — limited spots.' Text: 'Pro is for people who ship sites every week. We are opening it in small batches so every early member gets a say in what we build next.' Perks (Lucide Check 16px in Acid): 'Multi-page templates with full prompts', 'New Pro templates on the day they land', 'Vote on the next templates we build', 'DESIGN.md exports as design tokens'. Meter: mono 13px '[SPOTS_CLAIMED] / [SPOTS_TOTAL] spots claimed' on the left and the percentage (rounded) on the right in Acid. The track is 8px tall, background #1d211d with a Line Strong border, radius 999px, and the fill is Acid. Button: 'Request early access' with ArrowRight (primary style, 48px tall), an <a href='mailto:[CONTACT_EMAIL]?subject=Pro%20early%20access'>. Note under it (Smoke 13px): 'No payment now. We email you when your spot opens.'
   Layout: One panel inside the container: radius 14px, Line border, Panel background, padding 56px (28px mobile). Two columns at ≥1024px: copy and perks on the left; meter, button and note on the right, vertically centered. A single subtle 1px top highlight runs along the panel: linear-gradient(90deg, transparent, rgba(198,244,50,0.5), transparent) as a pseudo-element. No glass blur, no gradient background.
   Motion: The meter fill animates in on view. The panel reveals.
9. **FAQ (#faq)** — Mono label 'FAQ'. H2: 'Frequently asked questions about [BRAND] templates.' Six items:
1 'What is a vibe-coding template?' — 'A website design plus the exact prompt that builds it. You hand the prompt to an AI coding agent and it writes the code, instead of you starting from an empty folder.'
2 'Which coding agents work with the prompts?' — 'Any agent that can read a long prompt and edit files: Claude Code, Codex, Cursor, Lovable and similar tools. The prompts name the stack explicitly, so the agent does not have to guess.'
3 'Will my build look exactly like the demo?' — 'Very close. The prompt fixes colors, fonts, sections, copy and motion, and our own demos are generated from the same prompt with nothing added. Small differences between runs are normal.'
4 'What is in the DESIGN.md file?' — 'The design system behind the template: color tokens with roles, type scale, spacing, radius, motion rules and the things to avoid. Keep it in your repo so later edits stay on-style.'
5 'What can I build with a template?' — 'Landing pages, portfolios, docs, dashboards and small games. Every template is original, uses permissively licensed libraries and self-hosted open-source fonts, and lists its license notes on its page.'
6 'Do I need a backend or an account?' — 'No. Every template builds to static files you can host anywhere. You only need an account for Pro features when they open.'
   Layout: Two columns at ≥1024px: the section header on the left (4/12), the accordion on the right (8/12). Each item is a <button aria-expanded> row with a Line bottom border and padding 22px 0. The question is Inter 500 18px Bone with a Plus icon (18px Smoke) at the right. The answer is Ash 16px/1.65 with max-width 640px and padding-bottom 22px. Only one item is open at a time. Item 1 is open by default.
   Motion: Height animation and Plus rotation as described.
10. **Footer** — Top row: the logo mark and '[BRAND]' wordmark, a line in Ash 15px 'Original website templates with the prompts that build them.', and a mono 12px 'Back to top ↑' link to #top on the right. Link columns (heading mono 12px uppercase Smoke, links Inter 14px Ash with Bone on hover, 10px row gap):
Templates — Landing pages, SaaS, Portfolio, Docs & blog, Dashboard (all to #types)
Product — How it works (#how), Trending (#trending), Agent setup (#agent), Pro early access (#pro)
Resources — FAQ (#faq), Prompt format (#how), DESIGN.md guide (#faq), Changelog (./index.html)
Company — About (./index.html), Contact (mailto:[CONTACT_EMAIL]), Terms (./index.html), Privacy (./index.html)
Giant wordmark: '[BRAND]' in Bricolage 700 at clamp(64px, 16vw, 220px), letter-spacing -0.04em, transparent fill with -webkit-text-stroke 1px Line Strong, aria-hidden. Bottom row (mono 12px Smoke): '© 2026 [BRAND]. Original templates; demo content is invented.' on the left; on the right, the optional credit link from the Credit section of this prompt (if any) and 'All demos are static files.'
   Layout: A 1px Line top border, padding-top 72px. The top row is flex justify-between. Columns sit in a 4-column grid at ≥768px and 2 columns below, with margin-top 56px. The giant wordmark is centered with margin-top 72px and line-height 0.8, with overflow hidden so it clips at the bottom edge. The bottom row has a Line top border, padding 20px 0, and flex wrap with justify-between.

## Assets
- font: Install @fontsource-variable/bricolage-grotesque, @fontsource-variable/inter and @fontsource-variable/jetbrains-mono, and import them once in src/main.tsx. Tailwind fontFamily: display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace']. The woff2 files are bundled into dist/ by Vite.
- icon: lucide-react only: ArrowRight, ArrowUpRight, Copy, Check, Plus, Menu, X, Terminal, Plug, BookOpen. Stroke width 1.75, colors from the palette. No emoji anywhere.
- icon: public/favicon.svg, hand-written as described in Head & SEO. A lime rounded square with two Ink bars, also rendered inline as the header and footer logo mark.
- image: None as files. Every visual (aurora, hairline grid, twelve mini-site previews, wireframe cube, chart, waveform) is generated in CSS or inline SVG inside React components (src/components/MiniSite.tsx with one recipe per id 1–12, BrowserFrame.tsx, Aurora.tsx).

## Don'ts
- No backend of any kind: no server code, API routes, databases, auth, analytics or third-party APIs. The Pro button is a mailto link, and no form submits anywhere.
- Do not load fonts from fonts.googleapis.com, fonts.gstatic.com, Adobe Fonts or any CDN. Self-host via Fontsource packages only.
- No CDN <script> or <link> tags. Every script, style, font and icon is bundled locally.
- No source maps in the production build (build.sourcemap: false), and src/ is not copied into dist/.
- Use relative asset paths (Vite base './'). Every internal link is a hash anchor on this page or points to a file name such as ./index.html, never a bare directory.
- Do not change the stack (Vite + React + TypeScript + Tailwind 3.4 + Motion + Lucide + Fontsource) unless the user asks.
- Do not copy any real template marketplace's logo, wordmark, homepage copy, headlines or slogans. The brand appears only as plain text from [BRAND], next to the invented geometric mark described here.
- No real template screenshots, demo thumbnails, photos or bitmaps. Every demo card is an invented mini-site drawn in CSS/SVG.
- No real brand logos, product names, people, mascots or game/anime characters inside the demo wall or anywhere else. Mini-site domains use the invented '.demo' suffix.
- Do not present pricing, spot counts or template counts as real facts. All numbers are invented placeholders from variables or this spec, and no prices are shown.
- No blue-purple or purple-pink gradients, no neon glows, no generic glassmorphism cards (backdrop blur is allowed only on the sticky header bar), no emoji icons.
- Acid lime (#c6f432) is the only accent. Use it only for CTAs, step numerals, meter fill, check icons, caret, the '$' prompt and hover outlines, never for large fills or body text. Mini-sites never use lime.
- Keep the aurora glow in the hero only. No other section gets gradients behind it, apart from the 1px highlight line on the Pro panel.
- No commercial or custom fonts. Use only Bricolage Grotesque, Inter and JetBrains Mono (OFL).
- No dependencies outside the licenses MIT, ISC, BSD, Apache-2.0, 0BSD, CC0, Unlicense (OFL for fonts). No Aceternity UI, Tailwind Plus/Tailwind UI or purchased template code. Write the marquee and every effect from scratch.
- Respect prefers-reduced-motion: stop marquees, aurora drift, pulse and caret blink, and make reveals instant.
- Must render correctly at 1440×900 and 390×844 with zero console errors and no horizontal page scroll (only the marquee tracks and filter pills may overflow inside their own containers).
- Keep dist/ under 20 MB.
- No filler copy, lorem ipsum or hype words. Use the exact headlines and CTAs given here. Exactly one H1.

---
— Prompt by VibeFather · https://vibefather.ai/t/template-library-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
