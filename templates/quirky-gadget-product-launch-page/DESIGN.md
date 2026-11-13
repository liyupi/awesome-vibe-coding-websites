---
name: "Quirky Gadget Product Launch Page"
colors:
  primary_red: "#FF3B30"
  sunflower_yellow: "#FFD60A"
  cobalt: "#2F5BFF"
  mint: "#A8F0CF"
  white: "#FFFFFF"
  ink: "#15151A"
typography:
  display_product_wordmark_and_section_headings: { family: "Fredoka", weights: [500, 600] }
  body_labels_navigation_controls_and_data_sheet: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base. Desktop max content width 1320px, 48px side padding, 24px grid gaps, and 96–104px between major sections. At 390px use 20px side padding, 20px gaps and 56–64px section padding. Body 16–18px at line-height 1.55–1.65, max 58 characters per line. Never shrink body text to fit a dense colored card. Keep header and first copy concise enough that the product starts within the mobile first viewport."
radius: "3px Ink borders throughout. Buttons and data sheets 12px radius, feature cards 22px, photography frames 16px, small tags 8px. Offset hard shadows 6–10px Ink with no blur; use true soft lighting only for the 3D product shadow. Big Memphis circles and pills are intentional geometric ornaments, not generic rounded UI cards."
---

# Quirky Gadget Product Launch Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Primary red** `#FF3B30` — Large left hero field and final preorder panel; use Ink #15151A for all normal text on it. Also the default product shell.
- **Sunflower yellow** `#FFD60A` — Large right hero field, specification section, selected accents and order sheet; Ink #15151A text only.
- **Cobalt** `#2F5BFF` — Huge hero disk, full what-it-does section, active primary controls and persistent bar; white #FFFFFF text on these blue backgrounds.
- **Mint** `#A8F0CF` — Front hub, broad FAQ section, third feature card and geometric accents. Pair with Ink #15151A.
- **White** `#FFFFFF` — Header, photography/story and finish-selection sections, first feature card. Main reading text Ink #15151A.
- **Ink** `#15151A` — All outlines and hard shadows; normal body on red/yellow/mint/white. Never substitute pale gray text for the readable palette.

## Typography
- **Display, product wordmark and section headings** — Fredoka (OFL), weights 500/600. Self-host the font files.
- **Body, labels, navigation, controls and data sheet** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base. Desktop max content width 1320px, 48px side padding, 24px grid gaps, and 96–104px between major sections. At 390px use 20px side padding, 20px gaps and 56–64px section padding. Body 16–18px at line-height 1.55–1.65, max 58 characters per line. Never shrink body text to fit a dense colored card. Keep header and first copy concise enough that the product starts within the mobile first viewport.
- Radius: 3px Ink borders throughout. Buttons and data sheets 12px radius, feature cards 22px, photography frames 16px, small tags 8px. Offset hard shadows 6–10px Ink with no blur; use true soft lighting only for the 3D product shadow. Big Memphis circles and pills are intentional geometric ornaments, not generic rounded UI cards.

## Motion
- Use original CSS/IntersectionObserver bouncy reveal choreography with small 24–28px travel and a single overshoot. Each section appears once; never put reading text in an endless marquee.
- Actual pointer movement rotates original Three.js geometry; keyboard viewpoint controls provide equivalent access. Tab click advances the front dial and text state. No drag-to-spin photograph trick.
- No continuously moving backgrounds. Idle product may give one 6-degree welcome tilt after 600ms, then stay still until input. Visible actions remain usable with all motion disabled.
- Respect prefers-reduced-motion everywhere: no idle tilt, bounce, inertia, confetti, or animated scrolling; instant state changes and direct model manipulation remain available.
- Performance targets: keep main interactions responsive on mobile, cap render resolution, stop offscreen rendering, and never block scrolling with canvas pointer capture for vertical gestures.

## Imagery
Three generated studio product photographs form one shoot: the same small unbranded rounded triangular red shell with flat base, cobalt ribbed front ring, mint center hub, one yellow pill tab on its upper-right shoulder, and thin dark seam. Materials are satin molded plastic, light is a large softbox from upper left, colors are exact red #FF3B30 / yellow #FFD60A / cobalt #2F5BFF / mint #A8F0CF with white. Images have no text, logos, packaging labels, faces, or recognizable people. The lineup additionally shows cobalt-shell and mint-shell finishes; controls retain their same colors. Download the three supplied images locally; use photography for story, detail, and finish lineup while the first-screen anchor is a polished real code-built 3D version of the same shape. Memphis squiggles, dots, gadget miniatures, and confetti are original SVG/CSS/Three.js, not stock graphics. No extra external models, icons, or background textures.

## Tone
Warm, matter-of-fact absurdity: dry little jokes about a tiny object, never corporate productivity claims. Short sentences, specific tactile verbs, and candid explanations of what the local demo does. All copy is US English.

---
Inspired by Quirky Gadget Product Launch Page by @GlanceHall — https://glancehall.com/blog/coding-agents/codex-projects
— Prompt by VibeFather · https://vibefather.ai/t/quirky-gadget-product-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
