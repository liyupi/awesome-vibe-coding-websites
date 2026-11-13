# AI Agent Startup Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A dark, motion-led single-page landing site for [BRAND], [PRODUCT]. A live SVG node graph in the hero shows task cards traveling between six agent nodes; a scroll-pinned Plan, Act, Review section rearranges the same graph for each step; then usage metrics, a feature grid, an integrations wall, pricing with a monthly/annual toggle, FAQ, a closing CTA and a footer.

- Audience: Visitors are [AUDIENCE] evaluating whether to hand repetitive multi-step work to AI agents. They are technical enough to want to see how the agents coordinate and where humans stay in control, and they compare plans before starting a trial.
- Goal: Make the agent workflow understandable in ten seconds without a video, build trust through visible human checkpoints and an audit trail, and drive visitors to start a 14-day free trial (primary CTA 'Start free') or compare plans in the pricing section.
- Tone: Calm, precise and technical. Short declarative sentences, concrete numbers and task names, no hype words, no exclamation marks. The interface feels like a well-instrumented control room: near-black, thin lines, mono labels, one glowing accent.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), gsap 3 (with ScrollTrigger plugin) (GSAP Standard License (free, including commercial use)), lenis (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/space-grotesk (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource-variable/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One page: index.html at the project root with entry src/main.tsx.
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (void, panel, raised, line, line-strong, text, muted, faint, signal, signal-deep, done, done-deep, amber) and fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace']. Add maxWidth { container: '1200px' } and borderRadius { card: '14px', btn: '10px' }.
  - src/fonts.ts imports '@fontsource-variable/space-grotesk', '@fontsource-variable/inter' and '@fontsource-variable/jetbrains-mono'; src/main.tsx imports src/fonts.ts and src/index.css. index.css holds the Tailwind layers, the dot-grid background, the .glass recipe, the 'sweep' and 'pulse' keyframes and a @media (prefers-reduced-motion: reduce) block that disables CSS animations.
  - File layout: src/content.ts (all copy and data, typed), src/lib/brand.ts (brandSlug, taskPrefix, emailDomain), src/lib/useReducedMotion.ts (matchMedia hook), src/lib/motion.ts (registers ScrollTrigger once, creates Lenis unless reduced motion, wires lenis.on('scroll', ScrollTrigger.update), gsap.ticker.add(t => lenis.raf(t * 1000)), gsap.ticker.lagSmoothing(0), exports scrollToId and the shared fadeUp helper), src/graph/geometry.ts (node and edge definitions, edgePath, the hero layout and the three step layouts), src/graph/Graph.tsx (SVG defs with the glow filter, edges, nodes; accepts positions, litEdges and highlighted props), src/graph/TaskCards.tsx and src/graph/useTaskLoop.ts (hero loop), src/components/ (Header.tsx, MobileMenu.tsx, Hero.tsx, HowItWorks.tsx, Metrics.tsx, Sparkline.tsx, Features.tsx, Integrations.tsx, Pricing.tsx, BillingToggle.tsx, Faq.tsx, FinalCta.tsx, Footer.tsx, SectionHeader.tsx, Button.tsx), src/App.tsx composing them in page order.
  - All GSAP and ScrollTrigger instances are created inside useLayoutEffect with gsap.context() and reverted on unmount; call ScrollTrigger.refresh() after fonts load (document.fonts.ready). Use gsap.matchMedia() so the pin only exists at (min-width: 768px) and (prefers-reduced-motion: no-preference).
  - index.html: lang en, <meta name='theme-color' content='#07090D'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — Agent crews for [AUDIENCE]</title>. public/favicon.svg is the logo mark on a #07090D rounded square.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 files and favicon.svg; it should stay under 2 MB.

## Variables
- [BRAND] — Brand name (default: "Orbitask"). Invented product name. Used in the wordmark, title, hero subhead, FAQ, footer, task id prefix (first two letters) and the email domain. Never a real AI company or agent platform.
- [PRODUCT] — What the product is (default: "a multi-agent workspace that turns support and ops tickets into finished work"). One lowercase phrase that completes '[BRAND] is ...'. Drives the hero, the step descriptions, task card titles, features, plan descriptions and FAQ answers.
- [AUDIENCE] — Who it is for (default: "support and operations teams at SaaS companies"). Plural noun phrase. Used in the page title, the footer line and the plan descriptions; the brief's tone adapts to it.
- [AGENT_ROLES] — Six agent roles (default: "Triage, Planner, Researcher, Builder, Reviewer, Dispatcher"). Exactly six comma-separated single-word roles in workflow order: intake first, the fifth reviews, the sixth delivers. They label nodes N1 to N6 in every graph; pick a matching Lucide icon for each.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/ai-agent-startup-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/ai-agent-startup-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/ai-agent-startup-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
