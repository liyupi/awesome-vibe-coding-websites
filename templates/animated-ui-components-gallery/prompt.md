# Animated UI Components Gallery

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a sleek dark Pro gallery of 30 original animated UI components titled [BRAND] with subheadline [TAGLINE] and live visitor-changeable accent color defaulting to [DEFAULT_ACCENT] (#7C5CFF) on a near-black (#0A0A0B) and neutral-grey studio canvas. Include all 30 working interactive demos written from scratch: Magnetic Button, Spotlight Card, Text Scramble, Split-Letter Reveal, Animated Icon Beams, Infinite Logo Marquee, Conic Gradient Border, Magnifying Dock, Number Ticker, 3D Tilt Card, Cursor Trail Pad, Ripple & Confetti Button, Scroll-Stacking Cards, Animated Sliding Tabs, Aurora Mesh Background, Glowing Interactive Grid, Morphing Pill Toast, Typewriter Terminal, Image Comparison Slider, Shimmer Skeleton Loader, Hold-to-Confirm Button, Floating Badge Orbit, Elastic Toggle Switch, Flip-Clock Countdown, Pulse Radar Ping, Accordion Smooth Reveal, Radial Command Wheel, Live Audio Bars Meter, Kinetic Pricing Toggle, and Holographic Foil Chip. Provide a featured live Workbench with Speed (0.5×–2.5×), Intensity (20%–100%), and Accent sliders, Light/Dark preview surface toggle, copyable React + Tailwind snippet tab, one-click 'Copy as Prompt' button, search bar, 6 category filters, and a keyboard-accessible ⌘K command palette.

- Audience: Frontend developers, design engineers, and indie builders hunting for polished drop-in landing-page micro-interactions.
- Goal: Let visitors play with live tactile animations on frame one, customize speed/color/intensity on the fly, and copy production React + Tailwind code or AI prompts in one click.
- Tone: Razor-sharp developer studio—restrained near-black chrome letting every glowing interactive component steal the spotlight.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Author metadata, categories, clean React + Tailwind copyable snippets, and 'Copy as Prompt' specs for all 30 components in src/data/componentsCatalog.ts.
  - Implement all 30 genuine interactive component previews in src/components/LiveDemos.tsx driven dynamically by accentColor, speed, intensity, and surfaceTheme ('dark' | 'light') props.
  - Build the sticky header with live accent color swatches + custom picker, featured interactive Workbench, 30-card live gallery grid, and ⌘K keyboard command palette modal in src/App.tsx.

## Variables
- [BRAND] — Gallery Name (default: "KineticKit"). Animated UI component library brand name
- [TAGLINE] — Hero Tagline (default: "30 original animated React & Tailwind components built for instant drop-in."). Concise gallery subtitle
- [DEFAULT_ACCENT] — Default Accent Hex (default: "#7C5CFF"). Initial accent color swatch visitors can change live
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/animated-ui-components-gallery in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/animated-ui-components-gallery?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/animated-ui-components-gallery · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
