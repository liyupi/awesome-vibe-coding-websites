# 3D Product Configurator Page <sup>PRO</sup>

> Drag a code-built 3D headphone, pick finish, cushions and engraving, then scroll to take it apart.

<a href="https://vibefather.ai/templates/3d-product-configurator-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/3d-product-configurator-page/46e3b8bb-8076-46ea-b84c-06e524014917/webp.aeda8106b6.webp" width="100%" alt="3D Product Configurator Page — 3D Headphone Configurator with Exploded View built by Claude Sonnet 5.5 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/3d-product-configurator-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page product configurator built around a large 3D model of over-ear headphones that is drawn entirely in code. Visitors drag the model to turn it, pick one of four two-tone finishes, choose protein leather, velour or knit mesh cushions, and type a short engraving that appears on the outer ear-cup plate as they type, in a sans, serif or mono style. Every choice updates the model with a short color and material fade, and a price odometer recalculates in the panel and in the header. Keep scrolling and the stage stays pinned while the headphones come apart into eight numbered parts with thin leader lines, then click back together before features, specs, reviews and an FAQ. Add to cart opens a slide-in drawer with a snapshot of the exact build taken from the 3D canvas, a quantity stepper and a subtotal, all in local state.

It suits hardware founders, small audio or gadget brands and developers who want a product page with real state instead of a static hero shot. The look is a quiet studio stage: warm off-white backdrop, a soft contact shadow, neutral type in Bricolage Grotesque and Inter with JetBrains Mono for technical labels, and a single accent color that changes with the finish the visitor picks. No photos or 3D files are needed: geometry, lighting and textures are all procedural. To adapt it, change the brand, product name, product type, base price and audience: the prompt rewrites the specs, option names, part notes, reviews and FAQ to match. The model stays an over-ear headphone, so it suits any headphone line. Scrolling, drag inertia and the idle spin all switch off for visitors who prefer reduced motion, and the exploded view becomes a still labeled diagram.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, Scroll Animation, 3D / WebGL |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + react@18 + three@0.169.0 + @react-three/fiber@8.17 |
| Pages | 1 |
| Built with | [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/3d-product-configurator-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-product-configurator-page?case=46e3b8bb-8076-46ea-b84c-06e524014917&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-product-configurator-page/46e3b8bb-8076-46ea-b84c-06e524014917/shot_desktop.2a5935dd45.webp" width="100%" alt="3D Product Configurator Page — Studio monitor headphones, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>Studio monitor headphones</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/3d-product-configurator-page?case=46e3b8bb-8076-46ea-b84c-06e524014917&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-product-configurator-page?case=168cacc0-afb4-4220-8f7a-6b27a8795587&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-product-configurator-page/168cacc0-afb4-4220-8f7a-6b27a8795587/shot_desktop.2cddf638c5.webp" width="100%" alt="3D Product Configurator Page — Wireless headphones, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Wireless headphones</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/3d-product-configurator-page?case=168cacc0-afb4-4220-8f7a-6b27a8795587&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Orvane |
| `[PRODUCT_NAME]` | Product name | Tern |
| `[PRODUCT_TYPE]` | Product type | wireless over-ear headphones |
| `[BASE_PRICE]` | Base price | $329 |
| `[AUDIENCE]` | Who it is for | people who wear headphones for hours: editors, night-shift workers and remote developers |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/3d-product-configurator-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A studio audio brand: set BRAND and PRODUCT_NAME to your model, keep PRODUCT_TYPE as studio headphones and rewrite the spec rows around impedance and replaceable pads.
- A gaming headset startup: change PRODUCT_TYPE to gaming headphones and rewrite the feature strip and FAQ around mic boom, cushions and long sessions.
- A travel headphone label: set AUDIENCE to frequent flyers and swap the reviews and FAQ to cover folding, battery and noise isolation.
- A kids headphone maker: keep the over-ear model, set a lower BASE_PRICE and simplify the engraving and cushion options to two choices each.

## FAQ

### How does the 3D headphone model work without any product photos or 3D files?
The 3D Product Configurator Page draws the over-ear headphone entirely in code with Three.js and React Three Fiber, so the geometry, lighting, knit texture and engraving texture are all procedural. There are no image assets or model files to upload. Visitors drag the model to turn it, and the finish, cushion and engraving choices update materials on that same model.

### How do I change the base price and the option prices in the configurator?
Set BASE_PRICE to your whole-dollar figure and the configurator recalculates from it. The 3D Product Configurator Page adds fixed deltas on top: a finish upgrade, two cushion options at different amounts and an engraving fee. Those deltas live in the content file, so edit them there if they look out of proportion for your product, and the price odometer in the panel and header follows.

### Can I sell a different kind of headphone with this template, like gaming or studio models?
Yes, as long as it is an over-ear headphone. The 3D Product Configurator Page keeps the same procedural model, so PRODUCT_TYPE can describe studio, gaming, travel, DJ or kids headphones. Change BRAND, PRODUCT_NAME and PRODUCT_TYPE and the prompt rewrites the specs, part labels, reviews and FAQ around that product and audience.

### What happens when a visitor adds a configured pair to the cart?
Add to cart opens a slide-in drawer showing a snapshot of the exact build taken from the 3D canvas, plus a quantity stepper and a subtotal. The 3D Product Configurator Page keeps cart state locally in the browser, and adding an identical configuration increases the quantity instead of creating a second line. Checkout is not included, so connect the drawer to your own store.

### Does the scroll animation and exploded view work for visitors who prefer reduced motion?
The 3D Product Configurator Page respects the reduced-motion setting. For those visitors, scroll pinning, drag inertia and the idle spin all switch off, and the exploded view becomes a still labeled diagram of the eight numbered parts rather than an animated sequence. The configurator options, price and cart drawer still work normally.

### How do I build a 3D product configurator page with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add 3d-product-configurator-page, replace [BRAND], [PRODUCT_NAME], [PRODUCT_TYPE] and [BASE_PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the 3D Product Configurator Page demo?
The Studio monitor headphones case was built by Claude Sonnet 5.5 in Claude Code; the Wireless headphones case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the 3D Product Configurator Page template use?
3D Product Configurator Page is a single-page site built with GSAP, Three.js and React, with drag & physics, scroll animation and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the 3D Product Configurator Page template free to use?
3D Product Configurator Page is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the 3D Product Configurator Page template work on mobile?
Yes. Every 3D Product Configurator Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [3D Product Configurator Page on VibeFather](https://vibefather.ai/templates/3d-product-configurator-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
