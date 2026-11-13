# Interactive Product Tour Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original single-page product tour for [BRAND], a [PRODUCT] for [AUDIENCE]. The page sells through demonstration: a large, fully code-drawn application sits in the hero and guides visitors through three workflow chapters and nine concrete steps. Every chapter ends with a useful recap and a [PRIMARY_CTA] conversion action.

- Audience: SaaS founders, product marketers, and independent software teams who need to explain a multi-step workflow, qualify prospects, and make a product feel understandable before a signup or sales call.
- Goal: Let visitors complete a clear interactive tour at their own pace or with optional autoplay, understand the product's core workflow, and respond to a contextual call to action without leaving the page.
- Tone: Assured, practical, and quietly editorial. Use short sentences, precise product language, and believable sample details; avoid hype, fake customer claims, generic AI phrasing, and jokes.

## Stack
- Framework: Vite 6 + React 19 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/newsreader (OFL), @fontsource-variable/manrope (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Configure vite.config.ts with base: './', build.sourcemap: false, and the Tailwind CSS Vite plugin; the production output is static files in dist/.
  - Import Newsreader Variable, Manrope Variable, and IBM Plex Mono from their local Fontsource packages; do not add a font stylesheet URL.
  - Keep every visitor-facing string, variable value, navigation label, chapter, tooltip, sample project, FAQ, dialog label, and link in src/content.ts. Keep typed tour-step definitions there as well, including targetId and tooltip placement.
  - Implement the tour in src/components/ProductTour.tsx as one explicit state machine: activeChapter, activeStep, chapterComplete, and playbackState ('idle' | 'playing' | 'paused'). Render the original application scenes in src/components/AppCanvas.tsx and resolve hotspot targets through refs or data-tour-target attributes.
  - Define the exact color, type, spacing, radius, shadow, and keyframe tokens in src/index.css and the Tailwind theme. Use Motion for step, panel, dialog, and section transitions; use ordinary React state for application-demo changes.
  - Use a native dialog element for the client-side conversion dialog, including labelled fields, Escape dismissal, focus return, and a local success state. Do not transmit or persist form values.
  - Provide development, build, and preview scripts in package.json. The fixed default build command is npm run build; do not introduce a server, router, state library, or additional component library.

## Variables
- [BRAND] — Invented product brand (default: "Nookline"). Use a short invented name in the wordmark, page title, product copy, dialog, and footer.
- [PRODUCT] — Product category (default: "client approval workspace"). A lowercase description of the product; rewrite the workflow, interface labels, and sample data to suit it.
- [AUDIENCE] — Primary customer audience (default: "independent creative studios"). A plain lowercase audience description used in the hero and supporting copy.
- [PRIMARY_CTA] — Primary call to action (default: "Start a free workspace"). Use the same action in the header, chapter-completion panels, and final CTA; it opens the local demo dialog.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/interactive-product-tour-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/interactive-product-tour-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/interactive-product-tour-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
