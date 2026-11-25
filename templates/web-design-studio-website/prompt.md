# Web Design Studio Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A site for a fictional small studio that designs and builds websites. A hero with a stack of browser windows drawn in code that fan out as the visitor scrolls to show the work; case studies with before / after sliders and measured results shown as sample numbers; fixed-price packages (Launch, Grow, Custom) with what is included; a project calculator (pages, CMS, shop, languages, timeline give a price range and weeks); a process timeline; a template shop of the studio's own starter sites; an FAQ; and a booking form for a discovery call. Paper white, near-black #121212, electric blue #2F5BFF and a lime #C6FF3D for small highlights.

- Audience: Owners of small businesses and independent practices who need a website and want to know what it costs before they email anyone.
- Goal: Show the work in the first screen, make the price easy to estimate, and book a discovery call.
- Tone: Plain, direct and friendly, like a good contractor: prices, weeks and what is included, no agency jargon.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/bricolage-grotesque (OFL-1.1), @fontsource-variable/instrument-sans (OFL-1.1), @fontsource-variable/geist-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors paper #FFFFFF, black #121212, grey #55565C, line #E6E6EA, blue #2F5BFF, blueTint #EEF2FF, lime #C6FF3D; fontFamily display 'Bricolage Grotesque Variable', sans 'Instrument Sans Variable', mono 'Geist Mono Variable'.
  - src/components/BrowserWindow.tsx draws a browser window in code (chrome bar with three dots and a URL pill, then a body built from CSS blocks); src/components/SitePreview.tsx fills it with one project's layout from a small set of block types (nav, headline, image block, card row, footer). No screenshots.
  - The hero is a 220vh-tall section with a sticky inner viewport; Motion useScroll on the section drives the windows' rotation, x and y through useTransform so the fan is tied to scroll position, not to time.
  - src/lib/estimate.ts exports the calculator as a pure function (pages, cms, shop, languages, fast, launchPrice) → { low, high, weeks } so the formula is testable.
  - All copy, projects, case studies, packages, calculator inputs, steps, starters, FAQ and form options live in src/content.ts as typed objects; components never hard-code copy.
  - The calculator's inputs persist to localStorage under the key [BRAND_SLUG]-estimate, where [BRAND_SLUG] is [BRAND] lowercased with hyphens.

## Variables
- [BRAND] — Studio name (default: "Keel Studio")
- [CITY] — Studio city (default: "Seattle")
- [LAUNCH_PRICE] — Price of the Launch package (covers up to five pages) (default: "$3,200")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/web-design-studio-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/web-design-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/web-design-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
