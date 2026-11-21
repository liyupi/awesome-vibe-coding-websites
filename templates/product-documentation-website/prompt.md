# Product Documentation Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a guides-first, three-column developer SDK documentation website for [BRAND] (`[PKG_NAME]`), backed by 18+ local Markdown files bundled directly into the static build. Includes a working v2/v3 version switcher, page-wide synchronized JavaScript/Python/cURL code tabs, an interactive 'Try it' request playground, Cmd+K heading search, scroll-tracked right table of contents, local helpfulness feedback, changelog, and a custom 404 page.

- Audience: Software engineers, developer-experience leads, and technical writers shipping SDK guides and API references.
- Goal: Give visitors an authoritative, fast-scanning documentation site that opens directly on a rich Quickstart guide with live code tabs, steps, callouts, and an interactive request panel right on the first screen.
- Tone: Clear, direct, engineering-first technical writing with concrete payloads, crisp parameter definitions, and zero marketing filler.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/plus-jakarta-sans (600, 700, 800), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Store 18+ real Markdown documentation pages under src/content/docs/*.md and import them statically via import.meta.glob('./content/docs/*.md', { query: '?raw', import: 'default', eager: true }).
  - Parse Markdown front matter, headings, callout blocks (:::note, :::tip, :::warning, :::danger), numbered steps, parameter tables, and synced code-tab groups in src/utils/docParser.ts.
  - Persist preferred code language, active SDK version (v3/v2), color theme (light/dark), and 'Was this page helpful?' votes in src/data/docStorage.ts.

## Variables
- [BRAND] — SDK Brand Name (default: "RelayMesh"). Fictional developer SDK product name
- [PKG_NAME] — Package Slug (default: "relaymesh"). Lowercase npm/pip package and CLI slug
- [API_BASE] — Mock API Base URL (default: "https://api.relaymesh.dev"). Fictional endpoint URL shown in cURL and Try It panels
- [TAGLINE] — SDK One-Line Summary (default: "Low-latency event routing, signed webhooks, and fan-out delivery for modern services."). Short technical subtitle for the intro banner
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/product-documentation-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper White `#FFFFFF` — Primary light-mode reading canvas and header surface
- Soft Rail `#F6F7FB` — Sidebar surface, table headers, and callout fills in light mode
- Graphite Ink `#1C1E26` — Primary text in light mode and dark code-block / dark-mode base surface
- Deep Obsidian `#12141B` — Dark-mode page background with #1C1E26 cards and #F2F4F8 foreground text
- Ultraviolet Accent `#6C4CFF` — Active sidebar item, TOC scroll indicator, primary buttons, and interactive links (lightened to #9B85FF in dark mode for AA contrast)
- Lime Highlight `#C3F53C` — Code syntax highlights, HTTP 200 status badge inside dark graphite code frames, and active code-tab underline
- Amber Caution `#F59E0B` — Warning callouts and v2 deprecation notice pills
- Crimson Alert `#E5484D` — Danger callouts and error status codes

### Typography
- Headings & Display: Plus Jakarta Sans (OFL), weights 600/700/800
- Body Prose & UI: Inter (OFL), weights 400/500/600
- Code, Endpoints & Tables: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Crisp editorial reading grid: 60px sticky top bar, 260px left sidebar, 760px optimal-measure central reading column, 220px right 'On this page' TOC on desktop (1440px); 24px–32px section gaps.
- Radius: 6px for badges, buttons, and search inputs; 10px for dark graphite code frames, callouts, and interactive Try It panels.
- Motion: Smooth 150ms active-indicator glide on sidebar links, synced code tabs, and right-hand TOC highlight.
- Motion: Crisp 160ms expand/collapse on sidebar groups and Cmd+K search modal fade.
- Motion: Respect prefers-reduced-motion across all transitions and smooth-scroll jumps.
- Imagery: Pure code-drawn technical graphics: geometric ultraviolet/lime SVG logo mark for [BRAND], inline SVG request-pipeline architecture diagram on the Quickstart page, crisp Lucide icons for callouts and controls, and high-contrast dark graphite code frames with lime highlights. No external photos.

## Pages & Sections
### Quickstart · [BRAND] Docs (`#/docs/quickstart`)
1. **Top Documentation Bar & Three-Column Shell** — Sticky 60px top header with custom geometric SVG mark + [BRAND] Docs wordmark, top-level links (Guides, API Reference, Changelog, 404 Demo), live Version Switcher dropdown ('v3 (Latest)' / 'v2 (Legacy)' — switching genuinely updates page prose, code examples, endpoint paths `/v3/events` vs `/v2/dispatch`, and shows an Amber v2 notice banner), Cmd+K search trigger button, and Light/Dark theme toggle. Left 260px sidebar lists 5 collapsible groups covering 18+ seeded Markdown pages: Getting Started (Quickstart, Installation, Authentication, Configuration), Core Concepts (Event Routing, Signed Webhooks, Retry Policies, Dead-Letter Queues, Idempotency), SDK Guides (Batch Publishing, Stream Consumers, Edge Middleware, Local Testing), API Reference (Publish Event, Manage Routes, Inspect Deliveries, Webhook Endpoints), and Operations (Rate Limits & Quotas, Error Codes). Right 220px column renders the sticky 'On this page' TOC tracking the reader's scroll position with an Ultraviolet left rail.
   Layout: Three-column CSS grid (`260px minmax(0,1fr) 220px`) inside a 1400px container. Below 1180px the right TOC hides; below 900px the left sidebar collapses into a slide-out 'Docs menu' drawer.
   Motion: Active TOC heading highlights automatically via scroll position listener.
2. **Guides-First Quickstart Article, Synced Code Tabs & Interactive Try It Panel** — Opens with a vibrant Graphite + Ultraviolet + Lime hero strip displaying the SDK badge (`[PKG_NAME] v3.4`), Quickstart headline, [TAGLINE], and an inline SVG architecture flow (`Producer -> Edge Router -> Signed Fan-out -> Retry Queue`). Follows with numbered Steps (1. Install `[PKG_NAME]`, 2. Initialize client, 3. Publish & verify an event) using synchronized language tabs (JavaScript, Python, cURL—clicking Python switches every multi-language code block on the page at once and persists to localStorage) inside dark `#1C1E26` frames with `#C3F53C` lime accent lines and one-click Copy buttons. Includes all four styled Callouts (Note, Tip, Warning, Danger), a structured Parameter Table (name, type, required pill, description), and an interactive 'Try it' Request Panel where users edit JSON payload fields (`topic`, `region`, `idempotencyKey`), pick HTTP method/endpoint, and click 'Send mock request' to receive a realistic mocked JSON response with HTTP 202 status badge and simulated latency readout.
   Layout: Single centered reading column (max 760px) with full-width code blocks, responsive parameter tables inside `overflow-x-auto` frames, and a two-pane Request / Response layout inside the Try It widget.
3. **Page Footer: Helpful Vote, Edit Link & Prev / Next Navigation** — Bottom bar with 'Was this page helpful?' Yes / No buttons persisted per page in localStorage (showing a thank-you confirmation once voted), an 'Edit this page on Git' link pointing to the page's Markdown path (e.g. `src/content/docs/quickstart.md`), side-by-side Previous / Next page cards, and a subtle footer carrying the optional [CREDIT] link.
   Layout: Two-column prev/next cards above a compact footer row; stacked vertically on 390px mobile.

### Publish Event API · [BRAND] Docs (`#/docs/api-publish`)
1. **Endpoint Reference, Parameters & Interactive Playground** — Full API reference page for `POST /v3/events` (switches to `POST /v2/dispatch` when version v2 is selected), complete with request/response parameter tables, synced JS/Python/cURL examples, error code callout, and live interactive Try It panel.
   Layout: Rendered inside the same three-column docs shell.

### Changelog · [BRAND] Docs (`#/changelog`)
1. **Versioned Release Timeline** — Structured SDK changelog covering v3.4 (Latest), v3.2, v3.0 (Major), and v2.8 (Maintenance LTS) with filter pills (All, Features, Breaking, Fixes) and clear migration callouts. Uses version tags and release badges only (no calendar dates).
   Layout: Centered 820px timeline with left version badges and right release cards.

### Page Not Found · [BRAND] Docs (`#/404`)
1. **Helpful 404 Fallback** — Graphic 404 card in Graphite, Ultraviolet, and Lime showing the unmatched path, quick links to Quickstart, API Reference, and Changelog, plus a button to launch the Cmd+K heading search modal.
   Layout: Centered card inside the documentation shell.

## Assets
- icon: Install lucide-react (ISC) for sidebar chevrons, callout icons, search, copy, theme toggle, and version indicators.
- font: Install @fontsource/plus-jakarta-sans, @fontsource/inter, and @fontsource/jetbrains-mono (OFL) and import directly in src/main.tsx.
- image: Draw the [BRAND] geometric mark and the Quickstart event-routing architecture diagram as clean inline SVG components.

## Don'ts
- No real documentation platform or SDK brand names anywhere in copy, code, or sample endpoints.
- No calendar dates, months, or four-digit years anywhere on the rendered pages (changelog uses version numbers and release labels like 'Latest' or 'LTS').
- No backend, remote search APIs, or external CDN scripts/fonts; all 18+ Markdown pages bundle locally.
- No source maps in production build (build.sourcemap: false) and keep dist/ under 20 MB.
- No emoji characters used as UI icons or callout markers; use Lucide icons.
- No clip-path reveal tricks hiding sections until scroll.
- No horizontal page overflow at 1440x900 desktop or 390x844 mobile.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-documentation-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
