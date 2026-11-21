# Particle Morph 3D Landing Page

> Spatial-audio headset product showcase where tens of thousands of GPU particles morph smoothly across five 3D silhouettes on scroll.

<a href="https://vibefather.ai/templates/particle-morph-3d-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/particle-morph-3d-landing-page/5720080b-3112-4119-8634-28317faf526a/webp.7a42626c92.webp" width="100%" alt="Particle Morph 3D Landing Page — 3D Particle Morph Landing Page for Audio built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/particle-morph-3d-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A flagship 3D product landing page for an original spatial-audio headset powered by Three.js and custom GLSL vertex/fragment shaders. As visitors scroll, tens of thousands of glowing GPU particles morph across five procedurally sampled 3D shapes—Nebula, Headset, Sound Wave, Listener Globe, and Brand Emblem—reacting gently to cursor repulsion and shifting color per section. Includes interactive Pricing with a live color picker that recolors the 3D particles, technical specifications, listener reviews, FAQ, and a local demo pre-order flow.

| | |
|---|---|
| Category | [More Landing Pages](../../README.md#more-landing-pages) |
| Site type | [Landing Page](../../types/landing-page.md), Product |
| Style | [Dark](../../styles/dark.md), Futuristic |
| Effects | 3D / WebGL, Particle Morph, Scroll 3d, Webgl Shaders |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/particle-morph-3d-landing-page?case=5720080b-3112-4119-8634-28317faf526a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/particle-morph-3d-landing-page/5720080b-3112-4119-8634-28317faf526a/shot_desktop.ee290fdade.webp" width="100%" alt="Particle Morph 3D Landing Page — Auralis One (Spatial Audio Headset), built by Gemini 4 Neon in Antigravity"></a><br>
<b>Auralis One (Spatial Audio Headset)</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/particle-morph-3d-landing-page?case=5720080b-3112-4119-8634-28317faf526a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Audio Brand Name | Auralis |
| `[PRODUCT_NAME]` | Headset Model Name | Auralis One |
| `[PRICE]` | Starting Price | $389 |
| `[BATTERY_SPEC]` | Battery Headline | 48-Hour Spatial Battery |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add particle-morph-3d-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A spatial-audio startup launching its first headset: set BRAND and PRODUCT_NAME to your model, swap the acoustic spec ledger for your driver and codec figures, and point the pre-order form at your waitlist.
- An industrial design studio pitching a wearable concept: keep the Nebula and Headset morph stages, replace the four feature cards with your materials and form studies, and rename the Studio Bundle to your prototype kit.
- A premium speaker or earbud brand: change the sound-wave section copy to your tuning philosophy, relabel the color picker finishes to your real colorways, and rewrite the listener reviews as press quotes.
- A hardware launch team running a limited drop: set PRICE and BATTERY_SPEC to the drop details, shorten the FAQ to shipping and warranty answers, and use the emblem stage as the countdown backdrop.

## FAQ

### What are the five 3D particle shapes and how do they connect to the page sections?
The Particle Morph 3D Landing Page morphs tens of thousands of GPU particles across five code-sampled silhouettes as you scroll: Scattered Nebula in the hero, Spatial Headset at the acoustic features, Acoustic Sound Wave at the technical specs, Globe of Listeners at the listener reviews, and Studio Emblem at pricing, FAQ and pre-order. A floating shape dock bottom-right lets visitors jump straight to any of the five stages.

### How does the live color picker change the 3D particles on the pricing section?
The Particle Morph 3D Landing Page pricing panel includes a four-finish color picker with Aurora Teal, Ion Violet, Solar Amber and Arctic Pearl. Selecting a finish immediately recolors the 3D GPU particle cloud in real time, so visitors see the headset's colorway reflected in the surrounding particle sculpture while comparing the Standard Edition and Studio Bundle cards.

### What happens to the particle animation for visitors who prefer reduced motion?
The Particle Morph 3D Landing Page respects the prefers-reduced-motion setting. Instead of the continuous scroll-driven morph, each section locks to its clean static target shape with no ongoing jitter, so the Nebula, Headset, Sound Wave, Listener Globe and Brand Emblem still appear as crisp particle silhouettes. The pointer repulsion and harmonic wave ripples are also held steady.

### How do I swap the Auralis headset for my own product and brand?
The Particle Morph 3D Landing Page prompt exposes four variables: BRAND, PRODUCT_NAME, PRICE and BATTERY_SPEC. Set them to your own hardware brand, model, starting price and battery headline, then rewrite every headline, spec line, review and FAQ answer in the same content file so the copy matches your product. The five procedural particle shapes, layout, colors and motion stay as described.

### Does the local pre-order form take real payments or store data on a server?
No. The Particle Morph 3D Landing Page pre-order flow is a local demo reservation saved in the browser's localStorage, with an explicit notice that no real payment is taken. It is there to show the reservation experience for a hardware launch. To collect real orders you would connect the form to your own checkout or mailing list outside the template.

### How do I build a particle morph 3D landing page with AI?
Copy the prompt from this page or run npx vibefather add particle-morph-3d-landing-page, replace [BRAND], [PRODUCT_NAME], [PRICE] and [BATTERY_SPEC] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Particle Morph 3D Landing Page demo?
The Auralis One (Spatial Audio Headset) case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Particle Morph 3D Landing Page template use?
Particle Morph 3D Landing Page is a single-page site built with Three.js, React and Vite, with 3d / webgl, particle morph, scroll 3d and webgl shaders. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Particle Morph 3D Landing Page template for a client or a business?
The Particle Morph 3D Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Particle Morph 3D Landing Page template work on mobile?
Yes. Every Particle Morph 3D Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Particle Morph 3D Product Showcase](https://threejs-journey.com/) by @bruno_simon
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More More Landing Pages](../../README.md#more-landing-pages) · [Particle Morph 3D Landing Page on VibeFather](https://vibefather.ai/templates/particle-morph-3d-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
