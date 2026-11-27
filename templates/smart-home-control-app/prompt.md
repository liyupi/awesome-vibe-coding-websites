# Smart Home Control App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A calm dark-slate responsive mobile-first connected home controller PWA ([BRAND]) for [HOME_NAME]. Mobile (<768px) uses a bottom 4-tab bar (Home, Rooms, Scenes, Energy) and horizontal room tabs; desktop opens into a left sidebar + responsive bento dashboard. No fake phone bezel.

- Audience: Homeowners, smart-home enthusiasts, and IoT product designers prototyping tactile multi-room device control interfaces.
- Goal: Deliver instantaneous, physically satisfying lighting, climate, security, and scene automation controls with live visual feedback persisted in localStorage.
- Tone: Calm, architectural, tactile, dark frosted hardware precision.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Store 4 rooms (Living Room, Bedroom, Kitchen, Studio), lighting/climate/lock/blinds state, 4 multi-device Scenes, and hourly power data in src/data/smartHomeSeed.ts; persist all device & scene updates in localStorage.
  - Build an interactive clickable/steppable circular SVG thermostat dial supporting Eco / Heat / Cool modes and live arc feedback.
  - Never wrap the interface in a fake phone bezel; implement true responsive bento layouts across mobile, tablet, and desktop.

## Variables
- [BRAND] — Smart home app name (default: "LumaNest"). Fictional connected home PWA name
- [HOME_NAME] — Residence name (default: "Alder Ridge Loft"). Displayed in header and climate card
- [RESIDENT_NAME] — Resident greeting name (default: "Marcus Vance"). Fictional homeowner profile name
- [DEFAULT_TEMP] — Initial thermostat setpoint (default: "71°F"). Displayed in circular climate dial
- [AIR_QUALITY] — Indoor air quality badge (default: "AQI 18 · Pure"). Environmental telemetry readout
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/smart-home-control-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/smart-home-control-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
