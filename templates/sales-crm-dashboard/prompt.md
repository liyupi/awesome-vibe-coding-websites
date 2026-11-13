# Sales CRM Dashboard

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page CRM app for [BRAND], the sales tool of [TEAM], a small team selling [FOCUS], denominated in [CURRENCY]. It must be a real app, not a mockup: five-stage pipeline kanban with pointer drag-and-drop and a keyboard alternative, a contacts table with sort/search/filters, a deal drawer with editable fields, notes and an activity timeline, an insights view with SVG charts, and ~40 seeded invented deals persisted in localStorage with reset. One page: index.html as a hash-routed app (#/pipeline, #/contacts, #/insights; #/deal/<id> opens the drawer). Everything runs in the browser; nothing is submitted anywhere.

- Audience: The sales-adjacent builder: indie founders and small-team operators evaluating what a CRM should feel like, plus developers who need an app-shell template with dense data UI done right.
- Goal: Feel like software, not a landing page. Within a minute a visitor drags a deal, opens a drawer, edits a value, reloads, and finds everything exactly where they left it.
- Tone: Terse product copy: button verbs, one-line empty states, no marketing voice anywhere in the app. Sample data carries believable B2B texture.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx) — a hash-routed app (listen to hashchange; parse '#/pipeline', '#/contacts', '#/insights', '#/deal/<id>'; unknown routes land on #/pipeline, never an error).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (canvas, panel, chrome, hairline, ink, ink-soft, indigo, indigo-deep, indigo-mist, good, warn, danger) and fontFamily sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 8px.
  - In src/fonts.ts import '@fontsource-variable/inter' and '@fontsource/jetbrains-mono/400.css', '@fontsource/jetbrains-mono/500.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (stages, owners, seed companies/deals/activities with deterministic seeded generator, chart labels, all copy — typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-'), src/lib/storage.ts (safe localStorage get/set, key brandSlug + ':crm'), src/lib/format.ts (money(cents, [CURRENCY]) with locale formatting; initials(name); ageInDays(fromSeed)); src/lib/router.ts (hash route parse/subscribe).
  - State: src/store/crm.ts is a tiny external store (useSyncExternalStore) holding the whole dataset { deals, contacts, activities } loaded from localStorage or seeded on first run. Actions: moveDeal(id, stage, index), updateDeal(id, patch), addNote(id, text), toggleWon(id) (stage → Won), resetData(). Every action persists. The drawer route (#/deal/<id>) reads the current deal by id — a missing id closes the drawer back to the previous view, never an error.
  - Drag-and-drop is hand-rolled: pointerdown on a card starts a drag (with a 6px threshold), pointermove lifts the card (a fixed-position clone, the origin a 40%-opacity ghost), hit-testing stage columns by bounding rect, pointerup drops; Escape cancels mid-drag. Keyboard: cards are buttons; Enter opens the drawer; Alt+ArrowLeft/Right moves the focused deal a stage (announced via an aria-live region). No dnd library.
  - Charts are hand-rolled SVG: BarChart (revenue by month, 12 bars, axis ticks, hover tooltip), StageBar (horizontal stacked distribution), Sparkline (per-owner). No chart library.
  - Components in src/components/: AppShell.tsx (Sidebar.tsx, TopBar.tsx with SearchInput, FilterMenu, NewDealButton), kanban/ (Pipeline.tsx, StageColumn.tsx, DealCard.tsx, DragLayer.tsx), contacts/ (ContactsTable.tsx, ContactRow.tsx, ContactCard.tsx mobile), drawer/ (DealDrawer.tsx, TimelineList.tsx, EditableValue.tsx, NoteBox.tsx), insights/ (Insights.tsx, BarChart.tsx, StageBar.tsx, TopDeals.tsx, Sparkline.tsx), common/ (Avatar.tsx initials, Badge.tsx, EmptyState.tsx, Toast.tsx). src/pages/App.tsx composes by route.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F7F8FA'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — Sales CRM</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB — no images.

## Variables
- [BRAND] — App name (default: "Pipestack"). Invented CRM name. Used in the title, top bar, footer colophon and localStorage keys. Never a real product.
- [TEAM] — Team name (default: "Northmill Supply"). The invented company using the CRM. Drives the top-bar team label, seeded deal companies' context (they sell to [TEAM]'s market) and the welcome line. Two common words.
- [FOCUS] — What they sell (default: "industrial sensor hardware"). The product being sold — drives seed company names and deal titles ('42-unit sensor rollout'). Keep it concrete B2B.
- [CURRENCY] — Currency (default: "USD"). Three-letter currency code for all money formatting (USD, EUR, GBP). Drives money() formatting of every value, total and chart tick.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/sales-crm-dashboard in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/sales-crm-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/sales-crm-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
