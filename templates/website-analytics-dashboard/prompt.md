# Website Analytics Dashboard

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a privacy-friendly traffic report for [PUBLICATION], a fictional publication at [DOMAIN]. [BRAND] is its analytics workspace.

- Audience: Independent editors and audience teams.
- Goal: Identify which article, referrer, region and campaign contribute to a change in readership.
- Tone: Calm, analytical, crisp typographic hierarchy with practical editorial language.

## Stack
- Framework: React 19 + Vite
- Styling: Vanilla CSS
- Libraries: none
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use a relative Vite base './'. Bundle fonts and scripts locally, minify, and disable source maps.
  - Keep all editable labels, sample content and product names in one content module. Put simulated services in one adapter file.
  - Create a deterministic 90-day fixture through one replaceable data adapter. Derive all metrics, chart points and ordered funnels from its events.

## Variables
- [BRAND] — Analytics workspace (default: "Index Lantern")
- [PUBLICATION] — Publication (default: "Fieldwork Dispatch")
- [DOMAIN] — Publication domain (default: "fieldwork.example")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/website-analytics-dashboard in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#FFFFFF` — Light report canvas
- Slate `#0F172A` — Text, dark mode surfaces and navigation
- Indigo `#4F46E5` — Primary series, active links and focus
- Soft amber `#F59E0B` — Previous period dashed curve, comparison key and markers with dark labels

### Typography
- Navigation and report titles: Instrument Sans (OFL), weights 400/500/600/700
- Numbers and chart labels: IBM Plex Mono (OFL), weights 400/500

### Layout & motion
- Spacing: 208px navigation, 28px content gutter and 20px internal chart padding. Align all figures on consistent baselines. Collapse the rail into a menu on mobile.
- Radius: 5px controls, 10px panels and 1px separators.
- Motion: Draw the trend immediately and interpolate subsequent changes in under 180ms. Allow keyboard/touch point inspection.
- Motion: Keep real-time counter updates subtle and suppress motion when requested.
- Imagery: Original two-series SVG trend with fine guides, distinct line patterns and a soft indigo fill. Show a genuinely recognizable vector world map with selectable regions, tooltip and adjacent labeled country ranking. Draw small trend lines from actual aggregates.

## Pages & Sections
### Audience overview (`index.html`)
1. **Workspace and time window** — Show [BRAND], the selected publication [PUBLICATION] with [DOMAIN], Overview, Campaigns, Goals & funnels, and Share report. Default to the last 30 of 90 sample days. Choose 7, 30, 90 or a valid custom interval and compare to the preceding equal-length window with an explicit indication when history is incomplete. Save filters, range, goals and theme locally. Use period-relative axis labels such as D1.
   Layout: Use a narrow navigation rail with an original indigo symbol, clear active state and the publication switchboard information. Place the report title, range picker, theme toggle and share action above a compact metric row.
2. **Traffic over time** — Calculate unique visitors, pageviews, views per visit and a live visitor count from seeded anonymous visits. Visitors and Pageviews switch the primary measure, a comparison toggle controls the amber dashed series, a tooltip exposes point values. Simulate realtime visits in the adapter.
   Layout: Give Traffic overview a wide legible plot, labeled axes and a two-part legend. Place the live indicator with the corresponding metric.
3. **Content and audience reports** — Rank pages, referrers, countries, devices and browsers by the selected measure. Derive every block and the country map from the same filtered records. Clicking any row or active country adds a filter chip; adding another dimension intersects the selection. Individual chips and Clear all update all counts and charts. Make empty results reversible.
   Layout: Under the chart place Top pages beside Top referrers, then Countries with a drawn clickable map and ranking, Devices and Browsers. Display meaningful titles and restrained meter bars with exact counts; maintain touch targets.
4. **Privacy** — Use deterministic synthetic sessions with anonymous visit keys, ordered events, relative day slots, country, referrer, device, browser and campaign. Include repeat sessions so visitor and pageview counts differ. No tracker, consent dialogs or client identifiers.
   Layout: A small privacy note belongs with the source information.

### Campaigns (`#/campaigns`)
1. **Campaign report** — Group traffic by UTM campaign, source and medium and show visits, pageviews and goal conversions. Click a row to filter all reports. Keep the active range and chips across navigation.
   Layout: Provide an actionable table with the strongest source first and allow narrow screens to inspect each row.

### Goals & funnels (`#/goals`)
1. **Goal editor** — Seed two working goals including newsletter signup. Add, rename and delete goals with event or path conditions, and calculate completions for the current selection.
   Layout: Pair a named goal list and concise form with live results.
2. **Funnel builder** — Seed a three-step reading funnel. Let the user add, remove, reorder and choose event steps, name and save the funnel. Count sessions that reached each step in order within the same session, and show drop-off and conversion. Recompute under stacked filters.
   Layout: Use scaled horizontal bars on a shared baseline and real counts. Put editing controls alongside each step.

### Public report (`#/share`)
1. **Share view** — Copy a working link encoding the range, all filters and any custom goal/funnel definitions required to reproduce the view on another device. Open in read-only mode without edit controls or access to personal local settings. Direct visits with no parameters show the seeded report.
   Layout: Keep the report title, trend and breakdown tables, with a compact publication header and a Read-only label.

## Assets
- font: Self-host Latin WOFF2 files from @fontsource/instrument-sans and @fontsource/ibm-plex-mono (SIL OFL).
- icon: Draw the publication mark, charts, simplified geographic map and functional glyphs in code. Document geography sources if used.

## Don'ts
- Do not show invented fixed KPI totals, nonfunctional navigation, a labeled empty map or fake share links. Keep the sample entirely local.
- Use only the variable defaults for the default build. No real products, platforms, brands or logos. English copy throughout. No decorative dates or time stamps.
- No backend, auth, external API, CDN or remote font. Use relative local asset URLs and hash routes or HTML files, serve direct links from a subdirectory. Keep the built site under 20 MB with no source maps or source tree.
- Document all fonts, third-party files and code-drawn assets in ASSETS.md. Honor reduced motion, keyboard focus and contrast at AA. At 390px all controls must remain accessible without page overflow. Avoid empty first frames, disabled mock controls and interactions that only change a label.

---
— Prompt by VibeFather · https://vibefather.ai/t/website-analytics-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
