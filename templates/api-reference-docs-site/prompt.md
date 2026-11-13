# API Reference Docs Site

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A one-page API reference for [BRAND], the JSON API for [PRODUCT], at version [VERSION]. Three columns: endpoint navigation with instant search, a reading column with a getting-started block and eight endpoint blocks (parameters, tabbed code samples with copy, response examples), and an on-this-page rail. One page, index.html; search, tabs, copy and collapse all run in the browser.

- Audience: A developer pasting their first request within five minutes: they want the base URL, an API-key line, honest parameter tables and copy-paste samples that actually match the schema.
- Goal: First successful call fast. Within ten seconds the visitor sees the base URL and install command; within two minutes they have copied a curl sample and found the endpoint they came for via search.
- Tone: Documentation-plain: short declarative sentences, no marketing voice, one dry joke in the errors block.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/ibm-plex-sans (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors), then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper, panel, line, ink, softink, blue, blue-deep, blue-mist, get, post, patch, del, codebg, codetext, codestring, codekey, codecomment) and fontFamily sans ['IBM Plex Sans Variable', 'system-ui', 'sans-serif'], mono ['IBM Plex Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 8px and add maxWidth { container: '1440px', read: '760px' }.
  - In src/fonts.ts import '@fontsource-variable/ibm-plex-sans' and '@fontsource/ibm-plex-mono/400.css' plus '500.css' and '600.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, endpoint, parameter row, code line, response and error, typed — endpoints: { id, group, method, path, title, desc, params: { name, type, required, default, desc }[], samples: { curl, js, py }, response: { status, body }[] }), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', baseUrl = 'https://api.' + brandSlug without hyphens + '.dev/' + [VERSION], npmPackage = '@' + brandSlug without hyphens + '/client', keyHeader = 'Authorization: Bearer ' + brandSlug.toUpperCase() without hyphens + '_KEY'). Every URL, package name and command in content.ts is built from these helpers — nothing hard-codes the brand.
  - src/lib/search.ts (score(query, endpoint) matching against title, path, group, param names and descriptions; returns ranked ids), src/lib/clipboard.ts (copy(text) using navigator.clipboard with a textarea fallback).
  - State: src/store/docs.ts is a tiny external store (useSyncExternalStore) holding { query, activeEndpoint, copiedKey } — no persistence needed; search state resets on load.
  - Components in src/components/: Header.tsx (with the inline SearchBox.tsx), EndpointNav.tsx (NavGroup.tsx, NavItem.tsx), OnThisPage.tsx (AnchorRow.tsx), GettingStarted.tsx (InstallLine.tsx with CopyButton.tsx), EndpointBlock.tsx (MethodChip.tsx, PathLine.tsx, ParamTable.tsx, CodeTabs.tsx with TabButton.tsx and CopyButton.tsx, ResponseBlock.tsx with StatusChip.tsx and JsonView.tsx), ErrorsBlock.tsx, Footer.tsx. src/pages/Docs.tsx composes them.
  - CodeTabs: three tab buttons (curl / JavaScript / Python), roving tabindex with arrow keys, panels swapped with a 160ms crossfade; the CopyButton copies the active tab's raw text (kept in a hidden string, not scraped from the DOM) and shows a Check icon for 1.2s.
  - Syntax highlighting is hand-rolled: samples are stored as plain strings and rendered by a tiny tokenizer in src/lib/highlight.ts (regex spans for strings, numbers, keys, comments and flags) into colored spans — no highlighter dependency.
  - JsonView: pre-styled pretty JSON with the same tokenizer; a response header row carries StatusChip(s) (200 / 400) and a collapse toggle (rotating chevron) that animates max-height 240ms.
  - Search: typing in the SearchBox filters the left nav live (non-matching items dim to 30% and sink), Enter focuses the first match's block, Escape clears; with an active query, non-matching EndpointBlocks in the reading column fade to 25% and a sticky 'N results · clear' bar shows above the column. All client-side.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FAFAF8'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] API — [VERSION] reference</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 4 MB.

## Variables
- [BRAND] — API name (default: "Ledgerline"). The invented API's name, one word. Drives the wordmark, title, base URL (api.<brand>.dev), npm package (@<brand>/client), key header and every sample command. Never a real API.
- [PRODUCT] — What it serves (default: "expense data for small teams"). One lowercase phrase naming the domain. Rewrites the getting-started copy, group descriptions and endpoint one-liners. Keep it concrete.
- [VERSION] — API version (default: "v1"). The path prefix and version chip, like 'v1'. Keeps every sample URL consistent; no dates.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/api-reference-docs-site in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/api-reference-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/api-reference-docs-site · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
