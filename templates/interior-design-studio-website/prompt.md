# Interior Design Studio Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page website for [STUDIO], an interior design studio in [CITY] making rooms [STYLE_WORDS], working on [SCOPES]. It must sell with transformations: two before/after sliders (drag and keyboard), services with deliverables, a five-step process, a six-project gallery, a materials strip and a consultation form that confirms client-side. One page: index.html with sections (#transformations, #services, #process, #work, #consult). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Homeowners 35–60 planning a renovation or a fresh start, plus small hospitality owners. They browse at night with a glass of wine, drag every slider they find, and email the studio whose before/afters and process feel calm and organized.
- Goal: Produce consultation requests. Within ten seconds a visitor sees a finished room and a slider begging to be dragged; within two minutes they've seen the transformation, the process and the form.
- Tone: Warm and exact, like the studio's own design briefs: specific materials and room names, no 'curated luxe sanctuary', one dry joke about feature walls.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/albert-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (bone, greige, card, espresso, umber, bronze, bronze-deep, sage-gray, rule, night) and fontFamily display ['Fraunces Variable', 'Georgia', 'serif'], sans ['Albert Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 6px and add maxWidth { container: '1200px' }.
  - In src/fonts.ts import '@fontsource-variable/fraunces' (with italic axis) and '@fontsource-variable/albert-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, service, step, project, swatch, form label and image path, typed), src/lib/brand.ts (studioSlug = [STUDIO] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = studioSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with studioSlug + ':').
  - The BeforeAfter component is hand-rolled: a relative frame with the after image full-size and the before image clipped by clip-path inset(0 X% 0 0)... reversed so dragging right reveals more 'after'; a centered handle line with a circular grip (ChevronsLeftRight icon); pointerdown+move drag with a 4px threshold, ArrowLeft/Right keys stepping 5%, Home/End snapping; role='slider' with aria-valuenow/min/max and a text label ('Reveal before: 40%'). No library.
  - State: src/store/consult.ts is a tiny external store (useSyncExternalStore) holding { room, budget, timeline, name, email, note, sent } persisted to localStorage key studioSlug + ':consult'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx; Hero.tsx, BeforeAfter.tsx, Transformations.tsx, Services.tsx (ServiceCard.tsx), Process.tsx (StepRow.tsx), Gallery.tsx (ProjectCard.tsx, Lightbox.tsx), MaterialsStrip.tsx, ConsultForm.tsx (BudgetPills.tsx, SentCard.tsx). src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F4F0E8'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[STUDIO] — Interior design in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [STUDIO] — Studio name (default: "Fieldhouse & Vale"). Invented studio name. Used in the wordmark, title, footer, email (hello@ + studioSlug without hyphens + .com) and localStorage keys. Never a real studio.
- [CITY] — City (default: "Portland, Oregon"). Where the studio works. Used in the title, hero line, projects' neighborhoods and the footer. Real cities fine; streets invented.
- [STYLE_WORDS] — Style words (default: "warm, quiet and collected"). Three adjectives describing the studio's look ('warm, quiet and collected'). Drives the hero line, the materials strip caption and the process voice.
- [SCOPES] — Scope of work (default: "whole homes and single rooms"). What the studio takes on ('whole homes and single rooms', 'inns, restaurants and beach houses'). Drives the services intro, gallery project types and the consult form's room options.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/interior-design-studio-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Bone `#F4F0E8` — Page background throughout.
- Greige `#EAE4D9` — Alternate section background (Services, Gallery), hover fill.
- Card `#FCFAF6` — Service cards, the consult panel, sent card.
- Espresso `#2E2721` — Headlines, body text, icon color.
- Umber `#655A4E` — Secondary text, captions, eyebrows, step numbers.
- Bronze `#A87C4F` — The one accent: slider handles and lines, primary buttons, selected pills, focus ring, swatch frame.
- Bronze Deep `#8C663F` — Hover and pressed states, the timeline's filled rule.
- Sage Gray `#8B9084` — Quiet second color: 'before' labels, closed states, captions on photos.
- Rule `#DDD5C7` — 1px hairlines, card borders, input borders, gallery dividers.
- Night `#221D18` — Footer, photo overlays (as rgba(34,29,24,x)).

### Typography
- Display: H1, H2, H3, project names, step titles, the wordmark: Fraunces (OFL), weights 500/600
- Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals where numbers appear: Albert Sans (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.6vw, 88px) Fraunces 500, line-height 1.02; H2 clamp(30px, 4vw, 52px) Fraunces 500; H3 22px Fraunces 600; italic phrases in headings use Fraunces italic (marked with *asterisks*, rendered <em>); lead Albert Sans 400 18px / 1.7 Espresso at 90%; body 16px / 1.75 (max-width 64ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.18em Umber with a 24px x 1px Bronze line; caption 13px Umber. Buttons: height 52px, Albert Sans 700 14px. Primary: Bronze fill, Card text. Secondary: 1px Espresso/40% border, Espresso text. Inputs: height 50px, 1px Rule border, Card fill, focus Bronze border. Focus ring everywhere: 2px Bronze outline with 3px offset.
- Radius: 6px on cards, buttons, inputs, pills and photos — architectural. 999px only for pills and the slider grip.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for sliders' snap and form swap. Unhurried — interiors reward patience.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and settle over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 90ms.
- Motion: Hero: the room photo scales 1.04→1.0 over 2600ms; the headline rises 20px with 140ms stagger; a thin Bronze rule under the eyebrow draws outward.
- Motion: Before/after: the handle is draggable with 1:1 pointer tracking (no easing while dragging — honesty); on release it stays exactly where left; keyboard steps animate 120ms --ease-io; a small 'drag' hint label beside the grip fades out after the first interaction. The slider line carries a soft Night/20% shadow.
- Motion: Process timeline: a 1px Rule base with a Bronze fill that grows as the section scrolls (scaleY, useScroll on the list); each step's number fills Bronze as it reaches 60% view; rows settle with the standard reveal.
- Motion: Gallery: photos scale 1.02 on hover with a caption bar rising from the bottom edge; clicking opens the Lightbox (Night overlay at 85%, image max 84vh, caption in Bone, arrows + Escape navigate, focus returns to the invoking card) with a 260ms fade.
- Motion: Materials strip: swatches stagger in 60ms each, drawn as CSS blocks with a Bronze hairline frame; hovering a swatch lifts it 3px and shows its label.
- Motion: Consult form: budget pills fill Greige→Bronze on select (150ms); invalid submit shakes 4px once with inline hints; sending swaps the panel to the SentCard (300ms --ease-io) with a drawn Bronze envelope flap closing once.
- Motion: Links: .link-draw grows a 1px currentColor underline over 300ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no hero scale, no staggered reveals (appear), no snap animation (keys jump), no flap draw; color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Warm real photography, all six made for this template in one consistent style: soft natural light, greige-bone palette with bronze accents and one sage plant, no people (no faces, no hands). The two before/after pairs share their camera angle exactly: 'before' rooms dated and empty (old wallpaper, bare bulbs, worn carpet), 'after' rooms styled and warm — matched compositions so the reveal reads true. Gallery images are finished rooms from varied angles. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 6px corners, no shadow; photos on Bone get a 1px Rule outline. Captions in Albert Sans 13px Umber. Drawn in code: the slider handle and line, swatch blocks, step numbers, the envelope stamp and the favicon. Icons: lucide-react only, stroke width 1.5.

## Pages & Sections
### Studio (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([STUDIO] = Fieldhouse & Vale, [CITY] = Portland, Oregon, [STYLE_WORDS] = warm, quiet and collected, [SCOPES] = whole homes and single rooms). Put every string and number in src/content.ts and render from it. If any variable value differs, rewrite the hero, services, steps, projects, swatches and form copy so they are specific and believable for the new studio, keeping the same structure and counts (2 before/after pairs, 3 services, 5 steps, 4 projects, 6 swatches). All projects, clients and budgets are invented. Facts: two principals (Ines Vale, Margot Fieldhouse — the studio's name order is theirs to argue about); studio at '12 Alder Court, [CITY]'; consults free, 45 minutes; budget bands in the form: under 10k, 10–35k, 35–75k, 75k+; timelines: 'as soon as', 'this season', 'just exploring'.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[STUDIO]' (Fraunces 600 20px, letter-spacing 0.02em) linking ./index.html. Right nav (Albert Sans 600 14px): 'Transformations' → #transformations, 'Services' → #services, 'Process' → #process, 'Work' → #work, and a small Bronze 'Book a consult' → #consult. Under 820px: wordmark + consult button, nav hidden.
   Layout: Sticky top, height 72px, transparent over the hero then Bone/94% blur with a Rule border.
3. **Hero** — Full-bleed hero-living.webp (92svh, min 640px). Eyebrow (Bone): 'INTERIOR DESIGN · [CITY]'. H1 in two lines: 'Rooms that feel' / '*like they were always yours.*' Lead (Bone at 88%, max-width 540px): '[STUDIO] designs [STYLE_WORDS] interiors for [SCOPES] — from one stubborn room to the whole floor plan, with a process you can follow line by line.' One primary button 'Start with a consult' → #consult. Bottom-left caption with a small drawn slider glyph: 'Scroll — the before/afters below are draggable.'
   Layout: Photo object-position 50% 60%; overlay gradient Night 0.35→0.05→0.75; content anchored bottom-left 120px up.
4. **Transformations** — Section id='transformations'. Eyebrow 'BEFORE & AFTER' and H2 'Drag the line. That''s the pitch.' Two BeforeAfter frames stacked with 48px gaps: 1) 'The Ladd''s Addition living room' — before-living.webp / hero-living.webp (same angle): before shows dated wallpaper, a bare bulb, wall-to-wall beige carpet; after shows warm greige walls, oak floors, a linen sofa and a sage plant. Caption row: 'Scope: full room · 5 weeks' and the line 'The radiator stayed; everything else found better work.' 2) 'The Alberta kitchen nook' — before-kitchen.webp / after-kitchen.webp: before shows cream laminate counters and heavy curtains; after shows oak counters, open shelving, brass sconces. Caption: 'Scope: surfaces + lighting · 3 weeks' and 'Same footprint, better posture.'
   Layout: Bone background. Frames 16:9, container width, 6px radius, 1px Rule border; labels 'BEFORE'/'AFTER' pinned top corners (Albert Sans 700 11px on Night/60% chips). Captions under each frame in a two-part row.
5. **Services** — Section id='services'. Eyebrow 'WHAT WE TAKE ON' and H2 'Three ways to work together.' Cards: 1) 'Full design' — 'From floor plan to final cushion: concept, drawings, sourcing, trades management, install and styling.' — 'Rooms or whole homes · typical 8–14 weeks' — '$180/hr or fixed-fee'. 2) 'The room refresh' — 'One room, three weeks: edit what''s there, re-source the essentials, restyle the shelves you''ve given up on.' — 'Best for living rooms, bedrooms, entries' — 'from $2,400'. 3) 'Color & materials consult' — 'A two-hour visit and a palette you can actually shop: paint, floors, counters, metals, with samples left behind.' — 'Best for pre-reno decisions' — '$340 flat'. A quiet line under the grid: 'Furniture at trade pricing where it exists; the discount is yours, not ours.'
   Layout: Greige background. Three columns 24px gap; cards on Card 1px Rule border 28px padding; title Fraunces 600 22px, deliverables Albert Sans 15px / 1.7, meta rows in Umber 13px with the price in Bronze 600.
6. **Process** — Section id='work'. Eyebrow 'SELECTED WORK' and H2 'Four rooms, four households.' ProjectCards (photo, name, scope line): 1) gallery-dining.webp 'The Irvington dining room' — 'Inherited table, new everything else · refresh'. 2) gallery-bedroom.webp 'The Woodlark primary suite' — 'A calm room for bad sleepers · full design'. 3) hero-living.webp (reused) 'The Ladd''s Addition living room' — 'See the slider above · full design'. 4) after-kitchen.webp (reused) 'The Alberta kitchen nook' — 'See the slider above · refresh'. Clicking opens the Lightbox.
   Layout: Greige background. 2x2 grid 20px gap; cards 16:12 photos with hover caption bars; under 700px: one column.
7. **Work** — Section id='work'. Eyebrow 'SELECTED WORK' and H2 'Six rooms, six households.' ProjectCards (photo, name, scope line): 1) gallery-dining.webp 'The Irvington dining room' — 'Inherited table, new everything else · refresh'. 2) gallery-bedroom.webp 'The Woodlark primary suite' — 'A calm room for bad sleepers · full design'. 3) gallery-bath.webp 'The Tibbetts bath' — 'Tile decisions, finally made · materials consult'. 4) hero-living.webp (reused) 'The Ladd''s Addition living room' — 'See the slider above · full design'. 5) gallery-office.webp 'The spare-room-that-became-an-office' — 'Work from home, minus the sad desk · refresh'. 6) gallery-entry.webp 'The mudroom that admits it' — 'A place for every wet thing · refresh'. Clicking opens the Lightbox.
   Layout: Greige background. 3x2 grid 20px gap; cards 16:12 photos with hover caption bars; under 900px: 2 columns, under 640px: one.
8. **Materials strip** — A Bone band: eyebrow 'THE PALETTE, THIS SEASON' and six CSS swatches with labels: 'White oak, matte' (#C9A97F), 'Greige wall, eggshell' (#D9D2C5), 'Linen, undyed' (#E8E2D6), 'Bronze, unlacquered' (#A87C4F), 'Sage, in pots' (#8B9084), 'Espresso, everywhere' (#2E2721). Caption: '[STYLE_WORDS] — the swatches go home with you at the consult.'
   Layout: Full-width band, 96px padding; swatches as 120x84 blocks with 1px Bronze hairline frames, labels 12.5px Umber under, staggering in on view.
9. **Consultation form** — Section id='consult'. Eyebrow 'START HERE' and H2 'A consult is free and forty-five minutes.' Panel on Card: room select (Living room / Kitchen / Primary suite / Bath / Whole home / Something else), BudgetPills (under 10k / 10–35k / 35–75k / 75k+), timeline pills ('as soon as' / 'this season' / 'just exploring'), name + email inputs, note textarea (placeholder 'The room, the problem, the deadline — any of the three helps.'); primary 'Request a consult' with caption 'Saved in this browser — the real page would reach the studio''s inbox. Nothing is charged or sent here.' SentCard: the drawn envelope flap closing, 'Request sent' (Fraunces 26px), 'Thank you, [NAME] — we''ll reply within two days with times.' summary echo (room · budget · timeline), 'Edit the request' returning pre-filled. Persisted in localStorage.
   Layout: Bone background; panel max-width 620px, 32px padding, 1px Rule border, 6px radius; pills 999px Greige with Bronze fill on select.
10. **Footer** — Night background, Bone-toned text. Three columns: 1) wordmark + '[STUDIO]' over 'Interiors [STYLE_WORDS] · [CITY]'. 2) 'Studio': '12 Alder Court, [CITY]', hello@ + emailDomain, 'By appointment, Tue–Sat'. 3) 'Around': Transformations, Services, Process, Work, Book a consult anchors. Bottom line: '© [STUDIO]. Photography made for this template; rooms invented with love.'
   Layout: Vertical padding 72px, 3 columns, bottom line 40px below a Bone/15% rule. Under 768px: stacked.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/hero-living.webp → public/images/hero-living.webp (Site hero AND slider 1 AFTER layer AND Work card 3; object-position 50% 60%; alt 'A warm finished living room with greige walls, oak floors and a linen sofa'); https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/before-living.webp → public/images/before-living.webp (Slider 1 before, same angle; alt 'The same living room before: dated wallpaper, bare bulb and beige carpet'); https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/before-kitchen.webp → public/images/before-kitchen.webp (Slider 2 before; alt 'A dated kitchen nook with cream laminate counters and heavy curtains'); https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/after-kitchen.webp → public/images/after-kitchen.webp (Slider 2 after AND Work card 4, same angle; alt 'The same nook after: oak counters, open shelving and brass sconces'); https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/gallery-dining.webp → public/images/gallery-dining.webp (Work card 1; alt 'A dining room with an inherited wooden table under a modern pendant'); https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/gallery-bedroom.webp → public/images/gallery-bedroom.webp (Work card 2; alt 'A calm primary bedroom in linen and oak'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource-variable/fraunces and @fontsource-variable/albert-sans (OFL-1.1) and lucide-react (ISC). Never replace photos with stock sites or images with people, faces, hands or readable branding.
- icon: lucide-react only: ChevronsLeftRight, ArrowLeft, ArrowRight, X, Check, ArrowUpRight, Ruler, Lamp, Sofa, MapPin, Mail, Clock. Stroke width 1.5, 16–24px, color inherits. The slider grip uses ChevronsLeftRight; the envelope flap, swatch frames and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 5 filled #2E2721, a Bone (#F4F0E8) doorway glyph (an arch) with a Bronze (#A87C4F) door line. No other logo: the studio name is always set as type.
- font: Install @fontsource-variable/fraunces and @fontsource-variable/albert-sans and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the slider handle, line and corner labels, the swatch blocks, step numbers, the envelope flap and the favicon. No other bitmaps; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the consultation saves in the browser only (localStorage) and the form says so; the sliders are pure client state.
- All links on this single page are anchors (./index.html#transformations, #services, #process, #work, #consult).
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 12 MB.
- No real studios, projects, clients or brand-name furniture; no photos with people, faces or hands; no readable text or logos in any frame.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no hero scale, no staggered reveals, no snap animation, no flap draw; sliders remain fully draggable and keyboard-operable; color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; sliders, pills and form work with keyboard only (Arrow keys step the slider, Home/End snap) and every interactive element has a visible focus ring.
- Keep copy concrete: no lorem, no 'curated sanctuary'; every scope, price and week count lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/interior-design-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
