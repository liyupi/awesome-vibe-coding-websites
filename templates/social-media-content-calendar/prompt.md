# Social Media Content Calendar

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build the social planning room for [BRAND], a small stationery maker. The team is preparing [CYCLE_NAME], a four-week editorial cycle for [AUDIENCE]. Open directly onto a working content calendar with a photographic next-post strip, a busy Monday–Sunday grid and one-click access to each draft.

- Audience: A content lead, shop owner or photographer who needs to see what has been shot, written and scheduled.
- Goal: Let one person edit a real post, check its format, move it to another slot, find it on the board after a reload and download the updated plan.
- Tone: Use plain US English and short, specific titles. Write like the maker who knows why the tray lip is rounded and why the tape roll lifts out.

## Stack
- Framework: Vite + React + TypeScript
- Styling: Vanilla CSS
- Libraries: lucide-react (ISC), @fontsource/bricolage-grotesque (OFL-1.1), @fontsource/dm-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './', disable production source maps and resolve hash routes from index.html. Put copy, seed data, file paths and variable defaults together in src/content.ts.
  - Use a single local data adapter for reading and updating posts, media selections, saved hashtag sets and the current editor draft. Initialize the cycle only on first use. Keep a stable post ID across moves. Persist edits in versioned localStorage and give useful feedback if a save fails.
  - Use local images with stable media IDs and fixed dimensions. For CSV download, create a UTF-8 Blob client-side.

## Variables
- [BRAND] — Workspace brand (default: "Clip Orchard"). Use the name of your stationery studio in the masthead and mock post bylines.
- [CYCLE_NAME] — Planning cycle (default: "The Desk Edit"). Name one undated four-week editorial collection.
- [AUDIENCE] — Reader (default: "people setting up their first home desk"). Write post titles, captions and saved tags for these readers.
- [CAMPAIGNS] — Campaign names (default: "Color Drop / Bench Notes / Desk Rituals"). Give three short names in pink, blue and yellow order. Carry them through filters, cards and CSV.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/social-media-content-calendar in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/social-media-content-calendar?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/social-media-content-calendar · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
