# New Home Development Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a warm, architectural Pro real-estate sales site for fictional new-build residential community [COMMUNITY_NAME] by [DEVELOPER_NAME] in [DISTRICT_NAME] (48 townhomes, starting from [STARTING_PRICE]). Anchor the hero with a golden-hour streetscape photograph (`public/images/hero-street.webp`), crisp limestone (#EDE6DA) & deep forest green (#23403A) editorial framing, and quick links to the 48-Lot Site Plan and Walkable 3D Model Home. Build an interactive code-drawn SVG 48-lot master site plan where clicking any lot reveals plot size, orientation, home type, status (Available, Reserved, Sold), and price—with status/orientation/type filters. Present three townhome models (The Ash, The Birch, The Cedar) with switchable level 2D floor plans AND a walkable Three.js 3D model home (Dollhouse 3D orbit + First-Person room walkthrough with clickable room stops and WASD/arrow movement) where buyers toggle live upgrades (Kitchen Finish, Flooring, Flex Space) that recolor 3D surfaces and update the running home total and estimated monthly mortgage live. Include a golden-hour gallery (`showhome-living.webp`, `greenway-path.webp`, `courtyard-terrace.webp`), a Phase 1–4 construction progress timeline (zero calendar dates), a code-drawn neighbourhood commute map, an interactive mortgage estimator, and a localStorage Register-Interest form.

- Audience: Prospective homebuyers, relocating families, and architectural residential developers.
- Goal: Let buyers move effortlessly from browsing golden-hour community photography to picking an exact lot, walking through a 3D model home, customizing finishes with live pricing, and registering interest.
- Tone: Warm, calm, architectural craftsmanship—tactile limestone, oak, terracotta, and transparent pricing.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/fraunces (OFL-1.1), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (500, 600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Download all 4 hosted golden-hour architectural WebP photographs into public/images/ (never hotlink) and document them in ASSETS.md.
  - Build the walkable procedural Three.js 3D model home in src/components/WalkableModelHome3D.tsx supporting both Dollhouse orbit view and First-Person room-to-room walkthrough (Living Room, Chef's Kitchen, Dining Terrace, Upper Flex Study) with soft warm architectural lighting, live material updates when upgrades change, and preserveDrawingBuffer: true.
  - Store all 48 generated lots, 3 home types, level floor-plan geometry, upgrade options, construction phases (Phase 1–4, zero dates), and neighbourhood commute spots in src/data/communityData.ts.

## Variables
- [COMMUNITY_NAME] — Community Name (default: "Alder Row"). Fictional 48-townhome development name
- [DEVELOPER_NAME] — Developer Name (default: "Hearthstone Homes"). Fictional residential builder name
- [DISTRICT_NAME] — District / Neighbourhood (default: "Cedarbrook Valley"). Fictional neighbourhood label
- [STARTING_PRICE] — Starting Price Label (default: "$685,000"). Base townhome starting price
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/new-home-development-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/new-home-development-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/new-home-development-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
