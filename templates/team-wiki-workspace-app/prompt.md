# Team Wiki Workspace App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a block-based team wiki and lightweight database workspace app called [BRAND], seeded with the operating handbook and [CYCLE_NAME] of [STUDIO_NAME] (led by [LEAD_NAME]). Supports a nested drag-reorderable sidebar page tree, Favorites, Trash, page templates, a '/' slash-command block editor with drag/keyboard reorder, Markdown shortcuts, text selection formatting/comments, an embedded Table/Board/Calendar database with filters and sorting, breadcrumbs, backlinks, Cmd+K search, Export to Markdown, and full localStorage persistence with Undo/Redo.

- Audience: Small product teams, design studios, engineering leads, and founders building an internal wiki or project handbook.
- Goal: Deliver an immediately rich, inhabited workspace opening straight to a full roadmap document with a custom geometric cover banner, interactive checklists, callouts, backlinks, and live multi-view database.
- Tone: Warm, organized, studio-crafted clarity—concrete deliverables, owners, and sprint milestones with zero corporate jargon.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/plus-jakarta-sans (600, 700, 800), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500) in src/main.tsx.
  - Store seeded nested wiki pages, block structures, page templates, and database records in src/data/wikiSeed.ts keyed from [BRAND], [STUDIO_NAME], [LEAD_NAME], and [CYCLE_NAME].
  - Manage workspace state, undo/redo stacks (up to 30 snapshots), and localStorage persistence inside src/data/wikiStore.ts.

## Variables
- [BRAND] — Workspace App Name (default: "Marigold Desk"). Fictional team wiki app name
- [STUDIO_NAME] — Seeded Team Name (default: "Alder & Loom Studio"). Fictional design studio workspace
- [LEAD_NAME] — Workspace Lead (default: "Hana Sato"). Fictional studio director or lead
- [CYCLE_NAME] — Primary Roadmap Title (default: "Autumn Product Roadmap"). First page displayed on load
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/team-wiki-workspace-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/team-wiki-workspace-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/team-wiki-workspace-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
