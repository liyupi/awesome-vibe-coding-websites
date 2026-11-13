# Retro Desktop OS Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page portfolio for [OWNER_NAME], a [DISCIPLINE] based in [CITY], presented as a fictional late-90s desktop operating system called "[BRAND] Shell". A short typed boot log leads into a teal-gray desktop with pixel icons, a bottom taskbar with a live clock and a start menu. Content lives in beveled windows (About, Work, Showreel, Contact, Scraps). You can drag, focus, minimize, maximize and close them. Each project in the Work file browser opens its own window with a looping preview drawn in CSS, SVG or canvas. On mobile the desktop becomes a stacked list of accordion windows above a fixed taskbar. The look is original: warm bevels, cream window bodies, muted teal-gray wallpaper and one tangerine accent. It uses no real OS branding, palette, icons or copy.

- Audience: Studios, agencies and art directors hiring a freelance [DISCIPLINE]. They have a minute to spare and like to explore a site before they read it.
- Goal: Make the visitor open at least one project window and see a loop play, then make it easy to reach [CONTACT_EMAIL] from the Contact window or the start menu.
- Tone: Playful, nerdy and warm. Short lines with a deadpan humor about frames, curves and render times. The copy never imitates real operating system messages.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (MIT), @fontsource/pixelify-sans (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1), @fontsource/silkscreen (OFL-1.1), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest (template react-ts), then install motion, the three @fontsource packages, and tailwindcss@3.4 postcss autoprefixer as dev dependencies; run npx tailwindcss init -p.
  - vite.config.ts: base './', build.outDir 'dist', build.sourcemap false. The defaults minify the build and keep src/ out of dist/.
  - main.tsx imports @fontsource/pixelify-sans/400.css, 500.css and 700.css, @fontsource/ibm-plex-mono/400.css, 500.css and 600.css, and @fontsource/silkscreen/400.css.
  - tailwind.config.js theme.extend.colors: desk #4F7E7A, deskDot #46716D, chrome #CBC5B7, hi #FFFCF3, lo #6E695F, edge #24211C, cream #F3ECDD, creamDim #E4DBC8, ink #1F1D1A, slate #24323A, stage #1A2228, idle #8F8A80, accent #FF6A2B, accentDeep #C94A16, plum #6E5F78, olive #6F7656.
  - tailwind.config.js theme.extend.fontFamily: display ['Pixelify Sans', 'monospace'], pixel ['Silkscreen', 'monospace'], mono ['IBM Plex Mono', 'monospace'].
  - In src/index.css @layer components, define .bevel-out (box-shadow: inset 1px 1px 0 #FFFCF3, inset -1px -1px 0 #24211C, inset 2px 2px 0 #E9E2D2, inset -2px -2px 0 #6E695F), .bevel-in (the same four shadows with light and dark swapped) and .win-shadow (box-shadow 4px 4px 0 rgba(20,24,22,.35)).
  - Put every keyframe (blink, caret, preview loops, scraps-out) in src/index.css. Respect @media (prefers-reduced-motion: reduce) by setting animation: none on all of them.
  - Keep all copy, the six projects, the boot log lines, the scraps and the dialog text in src/content.ts. If the variable values differ from the defaults, rewrite all of that copy for the new person and discipline, keeping the same lengths and structure.
  - Put the window manager in src/os/useWindowManager.ts: useReducer holding a map of windows {id, kind, open, minimized, maximized, x, y, w, h, z, prevRect} plus a zCounter. Actions are OPEN, CLOSE, FOCUS, MINIMIZE, TOGGLE_MAX, MOVE. FOCUS sets z = ++zCounter, and the focused window is the open, non-minimized one with the highest z.
  - Implement drag yourself in src/os/Window.tsx with pointer events on the title bar: pointerdown calls setPointerCapture and stores the offset, pointermove dispatches MOVE inside requestAnimationFrame, and pointerup releases. Clamp so at least 80px of the title bar stays inside the desktop and the title bar never goes above y=0. Disable drag while maximized and below 768px.
  - Each project preview is its own component in src/previews/ with props {playing: boolean}. Canvas previews use requestAnimationFrame, scale for devicePixelRatio, and cancel the frame loop when playing is false or the component unmounts.
  - Draw the pixel icons in src/os/icons.tsx as 16x16 string grids (one char per pixel mapped to a palette) rendered as SVG <rect>s with shape-rendering='crispEdges', displayed at 48x48.
  - public/favicon.svg is a 16x16 pixel loop mark: a tangerine ring with a cream play triangle. The document <title> is '[BRAND] Shell — [OWNER_NAME], [DISCIPLINE]'.
  - Write ASSETS.md at the project root. It states that all icons, previews and wallpaper are code-drawn and lists the three Fontsource fonts with OFL-1.1.

## Variables
- [BRAND] — Studio / OS name (default: "Loopwork"). Shown as '[BRAND] Shell' in boot log, start menu banner and desktop watermark
- [OWNER_NAME] — Your name (default: "Juno Halvorsen")
- [DISCIPLINE] — Discipline (default: "Motion designer"). Drives About copy and project types
- [CITY] — City (default: "Rotterdam")
- [CONTACT_EMAIL] — Contact email (default: "hello@loopwork.example")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/retro-desktop-os-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/retro-desktop-os-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/retro-desktop-os-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
