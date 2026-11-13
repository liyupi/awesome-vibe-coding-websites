# Kanban Project Board App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page board for [BOARD], the team planning [PROJECT]. Four columns; drag cards between them (hand-rolled pointer DnD) or move them from a keyboard menu; open cards in a detail modal to edit everything; filter by search, label or overdue; add cards inline; it all persists in localStorage and a Reset board action restores the sample board. One page, index.html; nothing leaves the browser.

- Audience: A small team (3–5 invented teammates) and anyone who wants their week visible at a glance: the board must read in five seconds and never lose a card.
- Goal: Make the plan feel handled. Within ten seconds the visitor drags a card and feels the physics; within a minute they've opened a card, ticked a subtask and filtered to overdue.
- Tone: Teammate-casual: card titles are imperative and short, the empty column has one gentle joke.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/bricolage-grotesque (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors), then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (board, panel, card, line, ink, softink, spruce, spruce-deep, spruce-mist, clay, ochre, plum, moss, slateink, good) and fontFamily display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 12px and add maxWidth { shell: '1480px' }.
  - In src/fonts.ts import '@fontsource-variable/bricolage-grotesque' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (board title, teammates, label set, the seeded cards and every label, typed — cards: { id, title, desc, labels: string[], due: 'today'|'tomorrow'|'in 3 days'|'next week'|null, done?: boolean, assignees: string[], checks: { text, done }[] }), src/lib/brand.ts (boardSlug = [BOARD] lowercased with every run of non-alphanumeric characters replaced by '-', storageKey = boardSlug + ':board'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch), src/lib/due.ts (dueSort and overdue flags computed from a fixed demo 'today' anchor — the board ships with a static reference of which cards are overdue, so no live clock is needed: each card's overdue state is part of its data).
  - State: src/store/board.ts is a tiny external store (useSyncExternalStore) holding { columns: { id: 'backlog'|'week'|'progress'|'done', cardIds: string[] }, cards: Record<id, Card>, filters: { q, labels: string[], overdueOnly } } persisted under storageKey; actions: moveCard, addCard, updateCard, deleteCard (with undo payload), toggleCheck, resetBoard.
  - Drag-and-drop in src/lib/dnd.ts + src/components/Board.tsx: hand-rolled with Pointer Events (pointerdown on a card's grab handle → setPointerCapture, pointermove updates a fixed-position ghost, hit-testing against column rects with getBoundingClientRect, pointerdrop commits moveCard). While dragging: the ghost tilts 2deg and gains a soft shadow; the hovered column gets a Spruce Mist wash and its edge glows; the source slot holds a 1px Line placeholder. Auto-scroll the board horizontally when the pointer nears an edge. If the pointer type is touch, require the handle to avoid scrolling conflicts. Under prefers-reduced-motion the ghost follows without tilt or shadow (no animation on drop). Escape cancels a drag in progress.
  - Components in src/components/: Topbar.tsx (Wordmark, ResetButton), FiltersBar.tsx (SearchInput, LabelChip, OverdueToggle), Board.tsx (Column.tsx with ColumnHeader.tsx, Composer.tsx, CardTile.tsx with DueChip.tsx, LabelDot.tsx, AssigneeDots.tsx, CardMenu.tsx), CardModal.tsx (TitleField.tsx, DescField.tsx, LabelPicker.tsx, DuePicker.tsx, CheckList.tsx), Toasts.tsx. src/pages/BoardPage.tsx composes them.
  - CardTile: Panel card, 14px Inter 500 title (2-line clamp), a label row of LabelDots (8px circles with title tooltips), a foot row of DueChip (mono 11px; overdue in Clay, soon in Ochre, done in Moss with a strike) + checklist count ('2/5') + AssigneeDots (18px initials circles, overlapping, two shown then +N). Hover lifts 2px; the grab handle (GripVertical) appears on hover and always on touch.
  - CardMenu: a small dropdown (ChevronDown on the tile): 'Open card', 'Move left', 'Move right', 'Delete'. Keyboard path for everything.
  - CardModal: centered 560px panel over a scrim; traps focus; Escape closes; fields live-save on blur with a subtle saved tick; the CheckList toggles animate strikes; Delete shows an undo toast (3s) before the removal commits.
  - Composer: an '+ Add card' ghost row per column that expands inline into a title input + Add/Cancel (Enter adds and keeps the composer open for the next card).
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#EFEAE0'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BOARD] — board</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 4 MB.

## Variables
- [BOARD] — Board name (default: "Kettle Launch"). The invented board/project name. Used in the wordmark, title tag and localStorage key. Never a real product or company.
- [PROJECT] — What's planned (default: "a small kitchen-goods product launch"). One lowercase phrase naming the effort. Rewrites the topbar blurb, all card titles and subtasks so the board reads true for that project. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/kanban-project-board-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Board `#EFEAE0` — Page background — warm paper.
- Panel `#FBF9F4` — Column background.
- Card `#FFFFFF` — Cards, modal, composer.
- Line `#E2DCCE` — 1px hairlines: column borders, dividers, placeholder outline.
- Ink `#22201B` — Titles, body, icons.
- Soft Ink `#6B665B` — Counts, hints, empty states, placeholder text.
- Spruce `#3E6B5A` — The one accent: buttons, column count chips, focus ring, drag glow.
- Spruce Deep `#2F5346` — Hover and pressed primary.
- Spruce Mist `#E3EBE6` — Drag-hover column wash, selected label chips.
- Clay `#C0603A` — Label 1 and overdue chips.
- Ochre `#C9931B` — Label 2 and due-soon chips.
- Plum `#8B5CB8` — Label 3.
- Moss `#7B8F4A` — Label 4 and done states.
- Slate Ink `#10201A` — Text on spruce fills.
- Good `#4E8D5B` — Success toasts, saved tick.

### Typography
- Display: topbar wordmark, column headers, modal title — Bricolage Grotesque, warm and slightly quirky: Bricolage Grotesque (OFL), weights 400/600
- Text and UI: card titles, body, buttons, due chips — Inter: Inter (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Shell max-width 1480px with 28px padding (16px under 900px). Columns: min-width 300px, gap 20px, horizontal scroll on overflow; column header 40px; cards stack with 12px gaps; cards 14px inner padding. Type scale: wordmark 20px Bricolage 600; column headers 15px Bricolage 600 with mono-like count chips; card titles 14px Inter 500; hints 12.5px Soft Ink; due chips 11px 600 tabular. Buttons: height 36px, Inter 600 13px; primary Spruce fill with Card text, ghost 1px Line border. Inputs: height 38px, Card fill, 1px Line border, focus Spruce border + 2px offset ring. Focus everywhere: 2px Spruce outline, 3px offset.
- Radius: 12px on columns and modal; 10px on cards, composer, buttons; 999px for chips, dots and toasts.
- Motion: Easing: a spring (stiffness 320, damping 28) for card drops; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) elsewhere. The board should feel like paper on felt — quick, no bounce overshoot beyond 2%.
- Motion: Drag: the ghost lifts (scale 1.02, 2deg tilt, soft shadow) over 120ms; the hovered column washes Spruce Mist over 120ms; drop commits with the spring (200ms settle); the vacated slot's placeholder fades in.
- Motion: View load: columns rise 10px staggered 60ms; cards inside stagger 25ms.
- Motion: Card interactions: hover lifts 2px (120ms); the grab handle fades in; ticking a subtask strikes the text (180ms) and pops the count.
- Motion: Move via menu: the card glides to its new column (layout animation, 260ms spring) — the same commit path as a drop.
- Motion: Filters: non-matching cards fade to 22% and sink 2px (160ms) in place — never reflow away; the column counts stay honest ('3 of 7 shown').
- Motion: Modal: scrim fades 160ms; the panel scales 0.97→1 with the spring; Escape reverses both.
- Motion: Toasts: rise 8px in 180ms with a 3s auto-dismiss bar; undo commits immediately when clicked.
- Motion: prefers-reduced-motion: reduce — no tilt/shadow on the ghost, no layout glides (cards jump), no staggers; filters still dim; the board stays fully usable. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: No photographs, no avatars, no logos: assignees are initials dots, labels are colored dots, and every glyph is lucide or inline SVG. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Board (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([BOARD] = Kettle Launch, [PROJECT] = a small kitchen-goods product launch). Put every string, teammate, label and card in src/content.ts and render from it. If any variable differs, rewrite all card titles, descriptions, subtasks and the topbar blurb so they are specific and believable for that project, keeping the same structure and counts (4 columns; 11 cards total — 3 backlog, 3 this week, 3 in progress, 2 done; 4 labels; 4 teammates). Teammates (initials): 'AR' Alina Rios; 'JT' Jonah Tan; 'PV' Priya Verma; 'MB' Marcus Brand. Labels: 'design' Clay; 'copy' Ochre; 'build' Plum; 'ops' Moss. Cards — backlog: 'Photograph the pour-over set' (labels design, ops; due next week; AR; checks: 'borrow backdrop', 'charge lights' 0/2); 'Write the launch note' (copy; due null; JT; 0/3: 'draft', 'edit', 'proofread'); 'Pick packaging insert card' (design; due in 3 days; AR; 0/2). this-week: 'Lock the bundle price' (ops; due tomorrow; MB; 0/2); 'Size chart for enamel mugs' (design; due tomorrow; PV; 1/3); 'Order mailer boxes (200)' (ops; due in 3 days; MB; 0/1). in-progress: 'Build the product page' (build; due tomorrow; JT+PV; 2/5); 'Cut the 20s kettle film' (build; due today, OVERDUE-flagged sample; AR; 1/4); 'Proof the checkout flow' (build; due in 3 days; JT; 0/3). done: 'Choose the name' (copy; done; AR+JT; 3/3, due next week); 'Sign the co-packer' (ops; done; MB; 2/2, due next week). The overdue state ships in the card data (one deliberately overdue card so the filter demonstrates); nothing computes from the real clock.
   Layout: n/a
   Motion: n/a
2. **Topbar** — Left: the wordmark '[BOARD]' (Bricolage 600 20px Ink) over 'Planning [PROJECT]' (12px Soft Ink). Right: a live 'overdue: 1' chip (Clay, only when overdue cards exist and aren't filtered out), a ghost 'Reset board' button (RotateCcw) with a confirm popover ('Restore the sample board? Your changes go away.'), and a saved indicator: a small Good dot 'Saved in this browser'.
   Layout: Sticky top, 64px, Board ground at 92% with backdrop blur, Line bottom border.
3. **Filters bar** — One row under the topbar: SearchInput ('Search cards…', height 38px); the four LabelChips (dot + name; selected fills Spruce Mist with a Spruce border); an OverdueToggle switch ('Only overdue'); and the honest count line 'Showing 11 of 11'. Filters apply live; the count updates as 'Showing 2 of 11'.
   Layout: Flex row, wraps under 900px; sits above the board scroll area, not sticky.
4. **Board and columns** — Four Columns side by side (horizontal scroll on narrow screens): Backlog (dot Soft Ink), This week (Ochre), In progress (Clay), Done (Moss). ColumnHeader: name (Bricolage 600 15px), count chip (12px, Line border), and — only on 'In progress' — a WIP hint chip 'wip 3/4' that turns Clay at 4. Cards stack as CardTiles; each column ends with its Composer ('+ Add card'). The empty filtered state (all cards dimmed) keeps columns in place. Empty column state: 'Nothing here — enjoy it while it lasts.'
   Layout: Columns min-width 300px, Panel fill, 1px Line border, 12px radius, 14px inner padding; the board area scrolls horizontally with a subtle Line scrollbar.
5. **Card modal and toasts** — CardModal: TitleField (Inter 600 17px, contenteditable-style input), DescField (textarea, 3 rows), LabelPicker (the four chips), DuePicker (a select of the five sample options: — / today / tomorrow / in 3 days / next week), CheckList (toggle rows with strike animation, 'Add item' inline), assignee dots (read-only row), and Delete (Ruby ghost) with the undo toast. Toasts stack bottom-center: undo ('Card removed — Undo'), restock-style confirmations for moves made via menu ('Moved to Done'), and reset ('Sample board restored').
   Layout: Modal centered, max-width 560px, Card fill, 20px padding; scrim 32% Ink; toasts max-width 420px.

## Assets
- image: No photographs or downloaded images: dots, chips, tiles and the favicon are drawn in code. Do not fetch or hotlink anything.
- image: Write ASSETS.md at the project root listing the code-drawn assets (label dots, initials dots, due chips, favicon — 'drawn in code, original') and the npm packages: @fontsource-variable/bricolage-grotesque and @fontsource-variable/inter (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react only: Check, ChevronDown, GripVertical, Plus, RotateCcw, Search, Trash2, X. Stroke width 1.75, 14–20px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #3E6B5A, three white rounded columns of differing heights (a board glyph). No brand logos.
- font: Install @fontsource-variable/bricolage-grotesque and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: the board persists to localStorage under the board key; Reset restores the sample board.
- Every internal link points to a file name or in-app action (./index.html) — never to a bare directory; there is exactly one page.
- No real project tools or their UI (Trello, Linear, Jira, Notion, Asana): columns, labels and cards are invented; no 'kanban' vendor marks.
- No drag-and-drop library (dnd-kit, react-beautiful-dnd): pointer events are hand-rolled as specified, with the menu-based keyboard fallback.
- No dates from the real clock: due labels are the fixed sample strings, overdue state ships in card data, and nothing prints today's date or years.
- No photographs, no people, no avatars: assignees are initials dots on label-colored fills.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 4 MB.
- Never mention VibeFather inside the site except a footer credit line 'Built with a VibeFather template' linking https://vibefather.ai in the topbar overflow… — instead put it in the Reset popover's foot, one quiet line.
- Respect prefers-reduced-motion: no tilt/shadow glides or layout animations; drops commit instantly; filters still dim.
- The app must work at 1440x900 desktop and 390x844 mobile (columns stack vertically with a column switcher) with zero console errors; drag, menu moves, modal, filters and composer all work with keyboard only and visible focus rings.
- Accessibility: cards are buttons with aria-labels carrying their state (column, labels, due); drag announces moves via aria-live; the modal traps focus; label colors never carry meaning alone (dots pair with names).

---
— Prompt by VibeFather · https://vibefather.ai/t/kanban-project-board-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
