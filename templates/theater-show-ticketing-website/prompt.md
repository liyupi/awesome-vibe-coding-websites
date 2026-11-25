# Theater Show Ticketing Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an English box office for [SHOW], an original musical at [BRAND], a fictional 1,100-seat house in [CITY]. Open straight into the lit production and its first three available performances. The interface should feel like opening a beautifully printed theater program after dark.

- Audience: Patrons comparing seats, access arrangements and performance times, plus organizers bringing a group.
- Goal: Turn a particular performance and set of seats into a timed hold, itemized mock order and verifiable local e-ticket. Every visible action works.
- Tone: Literate and welcoming in program copy. Direct and specific about inventory, access and prices.

## Stack
- Framework: Vite + React
- Styling: Vanilla CSS
- Libraries: qrcode (MIT), lucide-react (ISC)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './'; bundle local fonts, photographs and JavaScript without source maps.
  - Keep variable-aware English copy and cast, reviews and access details in one content file. Use these defaults verbatim in A.
  - Put deterministic schedule, seat inventory, holds with absolute expiry timestamps, basket, checkouts and group requests in one localStorage-backed box-office adapter. Bind bookings to performance IDs. Persist confirmed inventory per performance; guard repeated checkout. No network or real payments.
  - Use hash routes. Direct entry defaults to the first performance for seat selection, and includes a recovery path to performances when a basket or order is absent.

## Variables
- [BRAND] — Theater name (default: "Vesper Arch Theatre")
- [SHOW] — Production title (default: "The Gilded Hour")
- [CITY] — Location (default: "Bellcross")
- [ADDRESS] — Entrance address (default: "18 Orison Lane")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/theater-show-ticketing-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/theater-show-ticketing-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/theater-show-ticketing-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
