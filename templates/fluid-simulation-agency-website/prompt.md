# Fluid Simulation Agency Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a dark editorial creative studio homepage for [BRAND] ([CITY]) anchored by a full-viewport real-time WebGL fluid simulation hero. Moving the cursor or dragging a finger stirs electric dyes across obsidian black while clicking triggers vivid fluid splashes, and the giant [BRAND] wordmark sits cut out over the fluid as a luminous mask. As visitors scroll through Selected Work (4 interactive case cards with code-drawn animated previews and detail drawer), Services, Process Timeline, Awards, and Contact, the active fluid palette shifts smoothly per section. Include a floating Fluid Settings chip (palette selector, dye intensity slider, bloom toggle, and low-power mode), off-screen simulation pausing, and a slow gradient fallback for low-power devices or prefers-reduced-motion.

- Audience: Brand directors, product founders, creative technologists, and interactive studios seeking a signature WebGL showcase.
- Goal: Deliver an unforgettable, responsive real-time fluid hero on frame one (seeded immediately with glowing multi-color swirls—never black or empty), then convert curiosity into case exploration and project inquiries.
- Tone: Confident, kinetic, tactile, and art-directed—crisp engineering precision paired with bold typographic poise.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/syne (OFL-1.1), @fontsource/space-grotesk (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/syne (700, 800), @fontsource/space-grotesk (400, 500, 600), and @fontsource/jetbrains-mono (400, 500) in src/main.tsx.
  - Author an original real-time WebGL2/WebGL Eulerian fluid simulation engine in src/fluid/FluidEngine.ts with preserveDrawingBuffer: true, float/half-float or RGBA8 safe fallback, seeded multi-color initial swirls rendered synchronously on frame one, cursor/touch velocity stirring, click radial splashes, dynamic palette interpolation, bloom pass, and IntersectionObserver off-screen pause.
  - Render a clean slow-moving CSS/Canvas radial gradient fallback whenever WebGL is unavailable, low-power mode is enabled, or prefers-reduced-motion is active.
  - Create four original animated Canvas/SVG generative case previews in src/components/WorkPreviews.tsx and keep all studio copy and project data in src/content.ts.

## Variables
- [BRAND] — Studio Name (default: "KINETIK LAB"). Short uppercase studio wordmark rendered as the fluid cutout mask
- [CITY] — Studio Locations (default: "Zurich · Tokyo"). City pair displayed in header telemetry and contact block
- [STUDIO_TAGLINE] — Hero Statement (default: "Real-time digital craft for kinetic brands."). Concise one-line studio positioning statement
- [CONTACT_EMAIL] — Studio Inquiry Email (default: "hello@kinetiklab.studio"). Fictional studio email displayed in the contact section
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/fluid-simulation-agency-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/fluid-simulation-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
Inspired by WebGL Fluid Simulation Studio Hero by @PavelDoGreat — https://paveldogreat.github.io/WebGL-Fluid-Simulation/
— Prompt by VibeFather · https://vibefather.ai/t/fluid-simulation-agency-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
