# Brand Guidelines Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A living brand book for a fictional company: the logo with clear space and misuse examples; a colour system with copyable values and contrast ratings; a type scale with live specimens; iconography; illustration and photography principles; motion principles with live demos (easing curves you can play); voice and tone with do and don't pairs; component previews; templates; and a downloads page. Sidebar navigation, search, light and dark. Deep blue #0D1B3D and electric yellow #FFE14D.

- Audience: Designers, marketers and engineers on a team that needs one place where the brand is written down and kept current.
- Goal: Let anyone find a rule in seconds, copy a value, see a specimen live and download a usable asset.
- Tone: Precise and helpful, like good documentation: short rules, concrete examples, no branding mysticism.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/unbounded (OFL-1.1), @fontsource-variable/outfit (OFL-1.1), @fontsource/space-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: darkMode 'class'; extend colors ink #0D1B3D, signal #FFE14D, harbor #1F4E8C, white #FFFFFF, mist #F4F6FA, cloud #DDE3EE, steel #5B6478; all theme colours are used through CSS variables defined in src/index.css so the light and dark themes swap by changing the class on <html>.
  - src/components/Mark.tsx renders the logo mark as an inline SVG path; src/components/Wordmark.tsx sets the wordmark in the display face. No logo image files.
  - A small hash router reads location.hash: #/ (overview), #/logo, #/colour, #/type, #/icons, #/imagery, #/motion, #/voice, #/components, #/templates, #/downloads; a route may carry an anchor (#/colour:contrast) that scrolls to a subsection and flashes it; scroll to top on route change otherwise. No router library.
  - src/lib/contrast.ts exports relativeLuminance(hex) and contrastRatio(a, b) using the WCAG formula; src/lib/download.ts exports helpers that turn an SVG node, a canvas or a text string into a downloaded file in the browser.
  - src/search.ts builds the search index from content.ts: every section and subsection with its title, keywords and route.
  - All copy, sections, rules, swatches, type styles, icons list, easings, voice pairs, components and downloads live in src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Company name (default: "Osier"). Used in the wordmark, the cover and every download file name via [BRAND_SLUG].
- [TAGLINE] — One line about the company (default: "Scheduling software for busy clinics")
- [VERSION] — Version label of the book (default: "3.2")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/brand-guidelines-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/brand-guidelines-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/brand-guidelines-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
