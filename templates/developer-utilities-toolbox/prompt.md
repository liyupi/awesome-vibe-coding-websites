# Developer Utilities Toolbox

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a tactile, high-craft browser-local developer utilities suite with 15 genuinely working utilities, each living on its own hash route with synced document title and utility description. Every operation runs 100% locally in the browser with zero network calls or uploads.

- Audience: Software engineers, frontend developers, SREs, and designers who need fast, distraction-free encoding, formatting, diffing, regex testing, color contrast checking, and hashing without pasting sensitive data into ad-heavy websites.
- Goal: Open directly into an immediately usable split workbench on desktop and a clean single-column utility view on mobile, with a persistent sidebar tool directory, favorites and recent history persisted in localStorage, a Cmd+K / Ctrl+K command palette, and seamless light/dark switching.
- Tone: Technical stationery: crisp hairline borders, generous breathing room, exact tabular monospace readouts, punchy lime highlights, and zero marketing fluff.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build.sourcemap: false in vite.config.ts.
  - Configure darkMode: 'class' in tailwind.config.js with Space Grotesk as display font, Inter as sans font, and JetBrains Mono as mono font.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Keep all brand copy, utility metadata, and default sample inputs in src/data/tools.ts.
  - Persist favorites, recent tool history, and theme preference in localStorage under namespaced keys derived from [BRAND].

## Variables
- [BRAND] — App Name (default: "BenchKit"). Short name displayed in the sidebar header, page titles, and command palette.
- [TAGLINE] — Short Tagline (default: "15 local developer utilities. Zero uploads."). Concise subtitle shown on the home directory and privacy banner.
- [DOMAIN_HINT] — Local Domain Label (default: "benchkit.local"). Used inside sample JSON, JWT, URL, and email snippets.
- [SUPPORT_EMAIL] — Sample Contact Email (default: "ops@benchkit.local"). Sample email used in payloads and footer.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/developer-utilities-toolbox in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper White `#FBFBF9` — Light mode primary canvas background
- Sheet White `#FFFFFF` — Elevated workbench panels and cards in light mode
- Ink Black `#15171A` — Primary text, active pills, and crisp structural borders
- Slate Muted `#59606B` — Secondary labels, descriptions, and line numbers (WCAG AA)
- Electric Lime `#A3E635` — Active route indicator, primary action highlights, and local-safe pulse
- Deep Moss `#3F6212` — High-contrast accent text on light lime surfaces
- Obsidian Dark `#101215` — Dark mode primary canvas background
- Graphite Panel `#171B20` — Dark mode elevated cards and editor wells

### Typography
- Display & Tool Headings: Space Grotesk (OFL), weights 500/600/700
- UI Body & Labels: Inter (OFL), weights 400/500/600
- Code, Payloads & Tabular Metrics: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Compact engineering grid: 264px fixed desktop sidebar with 24px–32px main workspace padding, 16px panel gutters, and 12px inner toolbar rhythm.
- Radius: Crisp 8px containers, 6px inputs and buttons, 999px status pills.
- Motion: 140ms ease-out hover highlights and active lime rail slide on sidebar items
- Motion: 160ms scale-and-fade entrance on the Cmd+K command palette modal
- Motion: Brief 1.2s lime checkmark confirmation state on Copy buttons
- Motion: Respect prefers-reduced-motion by disabling transforms and transitions
- Imagery: Pure code-drawn technical UI: crisp Lucide icons, precision SVG contrast gauges, sample inline geometric SVG for Image-to-Data-URI, and subtle dot-grid paper texture on empty/overview headers.

## Pages & Sections
### All Utilities Directory — [BRAND] (`#/`)
1. **Persistent App Shell (Header + Sidebar + Command Palette)** — Left sidebar (collapsible drawer on mobile) showing [BRAND] geometric mark, '100% Local · Nothing Uploaded' lime-dot privacy badge, instant search trigger button showing '⌘K', Pinned Favorites section, Recent History section (last 5 used tools), and all 15 utilities grouped into 5 categories: Formatting & Code, Encoding & Web, Security & Crypto, Text & Regex, Design & Time. Top bar shows current route breadcrumb, quick '⌘K Jump' pill, and Light/Dark theme toggle.
   Layout: Fixed 264px left rail on desktop (lg:flex) with 1px ink/10 hairline divider; sticky 56px top bar with single-line controls and mobile menu drawer button.
   Motion: Smooth 140ms sidebar active state highlight and instant keyboard navigation in the Cmd+K modal (Up/Down/Enter/Esc).
2. **Workbench Overview Hero & Quick Launch Grid** — Concise technical banner with [BRAND] title, [TAGLINE], live count of 15 local utilities, quick search/filter bar, Pinned Favorites strip, and a structured 3-column bento directory of all 15 tools with category tags, one-line descriptions, star/favorite buttons, and an embedded interactive 'Quick Scratchpad' preview card showing live JSON/Hash/Base64 detection.
   Layout: Subtle dot-grid paper header card followed by category filter pills and a responsive 1/2/3-column card grid.
   Motion: Crisp border-ink hover lift on utility cards with lime corner index badges.

### JSON Formatter & Validator — [BRAND] (`#/json`)
1. **JSON Formatter & Validator Workbench** — Preloaded realistic sample JSON payload for [BRAND], live syntax validation with exact error line/column indicator, Format (2 spaces / 4 spaces), Minify, Sort Keys alphabetically, Validate, Clear, Load Sample, and Copy Output controls, plus live byte size, key count, and nesting depth stats.
   Layout: Two-column side-by-side monospace editor on desktop, stacked on mobile, with a compact action toolbar and status footer.
   Motion: Instant green/lime valid pill or crimson syntax-error banner transition.

### Base64 Encode & Decode — [BRAND] (`#/base64`)
1. **Base64 UTF-8 & URL-Safe Workbench** — Bidirectional Encode / Decode mode toggle, URL-safe base64 option (- and _ without padding), full UTF-8 multi-byte support, swap input/output button, sample payload loader, byte-delta badge, and copy button.
   Layout: Split two-pane workbench with direction toggle bar and live character/byte counters.
   Motion: Swap animation feedback and instant live conversion as you type.

### URL Encoder & Query Parser — [BRAND] (`#/url`)
1. **URL Encode/Decode & Structured Query Parameter Editor** — Toggle between encodeURIComponent and full URI encoding, decode panel, plus an interactive parsed breakdown showing Protocol, Host, Pathname, Hash, and an editable key-value Query Parameters table that rebuilds the URL live.
   Layout: Top URL bar and encode/decode split pane above a clean structured component and query-param table.
   Motion: Live row add/remove transitions in the query parameter editor.

### JWT Decoder & Inspector — [BRAND] (`#/jwt`)
1. **JSON Web Token Inspector** — Preloaded valid demo JWT signed for [DOMAIN_HINT], color-coded three-segment token view (Header, Payload, Signature), formatted JSON Header and Payload cards with human-readable claim explanations (iss, sub, iat, exp, scope), expiration status badge, and an explicit note that signature verification requires your secret offline.
   Layout: Left raw JWT input with color-segmented preview ribbon; right stacked Header, Payload, and Claims Summary cards.
   Motion: Instant segment highlighting as the token is edited.

### Regex Tester & Match Highlighter — [BRAND] (`#/regex`)
1. **Regular Expression Tester** — Pattern input with interactive flag toggles (g, i, m, s, u), quick preset chips (Email, Semantic Version, IPv4, Hex Color, ISO Time), live test string editor with inline lime-highlighted match overlay, match count badge, and structured Capture Groups breakdown table.
   Layout: Full-width pattern bar over a split live-highlighted test surface and match/capture groups inspector.
   Motion: Immediate match highlight updates on every keystroke.

### Text Diff Viewer — [BRAND] (`#/diff`)
1. **Line-by-Line Text Diff Workbench** — Original and Modified monospace text inputs preloaded with a realistic config comparison, real LCS line-by-line diff engine with Unified and Split view modes, Ignore Whitespace toggle, added/removed/unchanged line counters, and copyable unified patch output.
   Layout: Dual input panes above a full-width color-coded diff viewer with crisp +/- gutters.
   Motion: Instant diff recomputation with subtle tinting for inserted and removed lines.

### UUID & Password Generator — [BRAND] (`#/uuid`)
1. **Crypto UUID v4 & High-Entropy Password Generator** — Uses browser crypto.getRandomValues(): batch UUID v4 generator (1–25 at once, uppercase/no-hyphens toggles, copy all) alongside a cryptographic Password Generator with length slider (8–64), character set toggles, ambiguous-character exclusion, live entropy bit calculation, and strength meter.
   Layout: Two balanced cards side-by-side on desktop (UUID batch panel and Password generator panel), stacked on mobile.
   Motion: Smooth strength-meter bar fill and copy feedback states.

### Color Converter & WCAG Contrast Checker — [BRAND] (`#/color`)
1. **Color Format Converter & Accessibility Contrast Lab** — Interactive color picker and editable HEX, RGB, and HSL inputs with instant sync, curated palette swatches, foreground vs. background swap button, live WCAG 2.1 contrast ratio readout, AA/AAA Pass/Fail badges for Normal Text, Large Text, and UI Components, and live typography preview card.
   Layout: Left color converter inputs + swatch strip; right live contrast preview card with AA/AAA compliance matrix.
   Motion: Smooth background/foreground color transitions when adjusting sliders or swapping.

### Unix Timestamp Converter — [BRAND] (`#/timestamp`)
1. **Epoch & Timezone Converter** — Live ticking current Unix timestamp (seconds & milliseconds) with Pause/Copy controls, Epoch-to-Human converter (auto-detects seconds vs. ms), Human-to-Epoch builder (local and UTC ISO-8601), relative offset readout, and multi-timezone table (UTC, New York, London, Tokyo, Sydney).
   Layout: Top live-clock strip over two converter cards and a compact multi-zone readout table.
   Motion: Subtle lime pulse dot when live clock is running.

### Cron Expression Explainer — [BRAND] (`#/cron`)
1. **5-Field Cron Parser & Next Runs Simulator** — Editable 5-field cron expression input (minute, hour, day-of-month, month, day-of-week), clickable preset chips (Every 5 min, Weekday 09:00, Nightly Backup, Monthly 1st), plain-English human translation, field-by-field breakdown cards, and computed next 5 scheduled execution times.
   Layout: Prominent monospace cron input bar, large English explanation callout, 5-column field breakdown, and upcoming schedule list.
   Motion: Field card highlights corresponding to each cron token.

### Markdown Live Preview — [BRAND] (`#/markdown`)
1. **Split Markdown Editor & Sanitized HTML Preview** — Preloaded realistic README snippet for [BRAND], toolbar buttons for Bold, Italic, Code, Heading, Link, Quote, and List, real client-side Markdown-to-HTML renderer supporting headings, bold/italic/inline-code, fenced code blocks, tables, blockquotes, lists, and horizontal rules, word/reading-time counters, and Copy HTML / Copy Markdown actions.
   Layout: Resizable or balanced 50/50 split editor and styled prose preview on desktop, tabbed or stacked on mobile.
   Motion: Instant live preview updates as Markdown is edited.

### Image to Data URI Encoder — [BRAND] (`#/image-uri`)
1. **Local Image to Base64 Data URI Converter** — Drag-and-drop and click file picker for PNG, SVG, WebP, and JPEG files (100% local FileReader), plus a one-click 'Load Sample Graphic' button using an inline code-drawn geometric emblem so visitors can test immediately. Displays thumbnail preview, dimensions, raw vs. encoded byte size, and copyable Data URI, CSS background-image, and HTML img snippets.
   Layout: Left dropzone & preview metadata card; right multi-format snippet output with tabs (Data URI / CSS / HTML).
   Motion: Lime dashed border glow on file drag-over.

### Case Converter — [BRAND] (`#/case`)
1. **Multi-Format Identifier & Text Case Converter** — Single text input that simultaneously computes and displays 10 formats with one-click Copy buttons: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, Title Case, Sentence case, dot.case, path/case, and Constant Header-Case, plus word/character/line counters.
   Layout: Top monospace source textarea over a clean 2-column grid of live-converted format cards.
   Motion: Instantaneous synchronized updates across all 10 output cards.

### Lorem Ipsum Generator — [BRAND] (`#/lorem`)
1. **Configurable Placeholder Copy Generator** — Mode selector (Paragraphs, Sentences, Words, Technical Specs), count slider (1–20), toggle for 'Start with classic opening' or 'Engineering flavor', optional HTML <p> wrapper toggle, instant Regenerate button, word/character count readout, and one-click Copy.
   Layout: Compact control bar above a clean readable output sheet with copy button.
   Motion: Crisp regeneration refresh feedback.

### Web Crypto Hash Generator — [BRAND] (`#/hash`)
1. **Browser-Native SHA Digest & HMAC Workbench** — Uses native Web Crypto API (crypto.subtle.digest) to compute live SHA-1, SHA-256, SHA-384, and SHA-512 digests simultaneously for any text input or dropped local file, with Uppercase/Lowercase hex toggle, Base64 digest view, and an interactive Verify Checksum comparator input that lights up lime on match.
   Layout: Top input textarea & local file drop chip over stacked digest rows and a checksum verification bar.
   Motion: Instant lime verified badge when comparator matches any computed digest.

## Assets
- icon: Installed via npm package lucide-react (ISC license); crisp 1.75px stroke technical icons across sidebar, toolbars, and command palette.
- font: Installed via @fontsource/space-grotesk, @fontsource/inter, and @fontsource/jetbrains-mono (OFL); bundled locally by Vite.
- image: Code-drawn inline SVG inside src/data/tools.ts used for the brand mark and the Image-to-Data-URI one-click sample loader.

## Don'ts
- Do not make any external network requests, CDN font loads, or third-party API calls — every utility must run 100% locally in the browser.
- Do not fake or stub any of the 15 utilities; every tool must perform genuine real-time computation on arbitrary user input.
- Do not hard-code calendar dates or copyright years anywhere in the UI chrome; timestamp tools must compute dynamically from input or current epoch.
- Do not include source maps or copy src/ files into dist/; keep vite base set to './'.
- Do not allow horizontal overflow at 1440x900 desktop or 390x844 mobile — always apply min-w-0 and break-all/overflow-x-auto inside code and output boxes.
- Do not mention any real third-party developer utility sites or brands.

---
— Prompt by VibeFather · https://vibefather.ai/t/developer-utilities-toolbox · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
