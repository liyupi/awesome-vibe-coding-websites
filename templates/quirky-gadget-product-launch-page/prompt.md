# Quirky Gadget Product Launch Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a single-page English launch site for [BRAND] and its original pocket gadget [PRODUCT]. Default content describes a manual tiny-victory celebration device, with an original rounded triangular shell, ribbed front dial, mint hub, and yellow click tab. Give it a decisive Memphis identity: primary red #FF3B30, sunflower yellow #FFD60A, cobalt #2F5BFF, mint #A8F0CF, white, black outlines and chunky hand-drawn geometry. The hero is actual draggable 3D, supported by three coherent studio product photographs further down the page. The site is a fictional concept demonstration with honest local-only reservation behavior.

- Audience: [AUDIENCE]; users should understand [RITUAL] in a few seconds and get a satisfying small interaction without a tutorial.
- Goal: Let visitors rotate the product, try its two tactile controls, understand its low-stakes purpose, select a finish, and save or remove an explicitly local demo preorder. Keep the same structure, exact color identity, geometry, and assets when the variables change.
- Tone: Warm, matter-of-fact absurdity: dry little jokes about a tiny object, never corporate productivity claims. Short sentences, specific tactile verbs, and candid explanations of what the local demo does. All copy is US English.

## Stack
- Framework: Vite 6 + React 19 + TypeScript 5
- Styling: Vanilla CSS
- Libraries: vite (MIT), react and react-dom (MIT), typescript (Apache-2.0), three@0.170.0 (MIT), @fontsource/fredoka (OFL-1.1), @fontsource/dm-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use React with TypeScript, one index.html, and Vite base ./; npm run build runs tsc -b followed by vite build. Keep sourcemap false and use relative paths for every bundled resource.
  - Install Three.js locally and bundle it; use no CDN, remote module loader, external model, texture, HDRI, 3D asset, or third-party API. Build the original product from Three.js primitives and a rounded triangle Shape/ExtrudeGeometry.
  - Self-host Fredoka weights 500/600 and DM Sans weights 400/500/600/700 through Fontsource CSS imports; use Latin-only font files when possible. Put palette, spacing, shadows, media queries, and keyframes in src/styles.css.
  - Keep every variable value, headline, feature, outcome, finish, specification row, FAQ answer, price, and image descriptor in one src/content.ts file. React components consume this file; do not scatter product-specific content in JSX.
  - Write section copy for the default values provided here. When any variable changes, rewrite every dependent string including status outcomes, model instructions, buttons, technical jokes, FAQ answers, reservation summary, footer, and alt text to suit [PRODUCT], [RITUAL], and [AUDIENCE]. Preserve shared physical geometry and finishes so the supplied photographs remain accurate.
  - For a low-stakes choice-helper [RITUAL], use the supplied alternate headline; replace wins with five editable options defaulting to Make something / Take a walk / Call a friend / Try a new route / Rest for a bit. Hero tab chooses the next option and reports One possible next step: followed by it. Feature cards become Set five options / Roll a maybe / Take the next step. Story headline: A small nudge for the gloriously undecided. Story copy explains that the dial offers a playful suggestion for harmless choices, not advice or a prediction. Spec heading: A highly unofficial tie-breaker. Humorous rows become Choice capacity — Five perfectly harmless maybes; Decision authority — Yours, entirely; Maximum certainty — Comfortably imaginary. Preorder headline: Leave a little room for maybe. Never retain celebration-only copy under the choice-helper values.
  - Create a code-drawn triangular favicon and a plain document title of [PRODUCT] by [BRAND]. No SEO metadata tasks or hidden build instructions.
  - Use native scroll anchors within ./index.html and meaningful ids hero, what-it-does, specs, colors, questions, preorder. No bare-directory links, missing routes, or external checkout.
  - Use one shared state for selected finish, model dial step, and local reservation. localStorage access must be guarded; storage failure falls back to memory with accurate feedback. Nothing is sent over the network.
  - Create ASSETS.md at the root listing all supplied images with exact URL, target path, generation credit, and redistribution note, plus Fontsource fonts and code-authored SVG/Three.js artwork. Keep dist below 20 MB and ship no source maps or src directory.

## Variables
- [BRAND] — Brand (default: "Small Racket"). An invented maker name; the wordmark is typeset, never a copied logo.
- [PRODUCT] — Pocket product (default: "Pocket Hooray"). The name of an original manual gadget. Keep the shared rounded-triangle shell, ribbed dial, mint hub, and yellow tab so the supplied photographs remain accurate.
- [HEADLINE] — Hero headline (default: "Small win. Big little fuss."). A short two-part headline; break after the first sentence.
- [RITUAL] — What the gadget does (default: "A palm-sized manual celebration gadget for noticing everyday wins. Roll the ribbed dial, give the yellow tab a click, and carry the feeling with you."). The purpose and three-step ritual. Rewrite all related feature copy, action labels, FAQ, humorous specifications, sample outcomes, and preorder summary when this changes.
- [AUDIENCE] — Who it is for (default: "habit builders, desk wanderers, and anyone who finally sent that email"). A concrete audience for this low-stakes pocket gadget.
- [PRICE] — Concept unit price (default: "$24"). A fictional displayed unit price in USD. It appears as concept-demo pricing, never a real charge.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/quirky-gadget-product-launch-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/quirky-gadget-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
Inspired by Quirky Gadget Product Launch Page by @GlanceHall — https://glancehall.com/blog/coding-agents/codex-projects
— Prompt by VibeFather · https://vibefather.ai/t/quirky-gadget-product-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
