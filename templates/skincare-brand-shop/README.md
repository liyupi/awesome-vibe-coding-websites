# Skincare Brand Shop

> Apothecary-clean skincare shop with a routine-builder quiz, ingredient-first product pages, bundles and a cart.

<a href="https://vibefather.ai/templates/skincare-brand-shop?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/skincare-brand-shop/f60d66f0-1c9c-4964-8571-27f17655d736/webp.df4aa1197c.webp" width="100%" alt="Skincare Brand Shop — Skincare Shop with Routine Quiz built by GLM-5.3"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/skincare-brand-shop?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page website for a skincare brand: the clinical-warm promise over a texture close-up with a routine-builder CTA; a four-question quiz (skin type, main concern, routine time, scent preference) that assembles a recommended three-step routine with live prices; six products with key actives; a product detail view with full ingredient list, how-to-use steps and a texture photo; two bundles with per-item savings; an ingredient glossary strip explaining five actives in plain words; and a cart drawer with quantity steppers and a client-side checkout stub. The default content follows an invented minimal skincare line, but the structure suits any small cosmetics or personal-care brand: change the name, products and actives and every section still reads true. The look is apothecary clean: bone and clay tones, deep olive ink, one blush accent, high-contrast serif headlines over a soft sans, generous whitespace and drawn botanical accents. Photography shows bottles, droppers and texture close-ups — no faces or skin close-ups, cosmetic language only, no medical claims. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/skincare-brand-shop?case=f60d66f0-1c9c-4964-8571-27f17655d736&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/skincare-brand-shop/f60d66f0-1c9c-4964-8571-27f17655d736/shot_desktop.d14571e64c.webp" width="100%" alt="Skincare Brand Shop — Minimal skincare line, built by GLM-5.3 in ZCode"></a><br>
<b>Minimal skincare line</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/skincare-brand-shop?case=f60d66f0-1c9c-4964-8571-27f17655d736&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Meridian Botanics |
| `[CITY]` | City | Portland, Oregon |
| `[SKIN_FOCUS]` | Skin focus | barrier-first skincare |
| `[HERO_NOTE]` | Hero note | six ingredients, all pronounceable |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add skincare-brand-shop` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A small-batch soap maker: set [BRAND] to your workshop name, swap the six skincare products for bar soaps and balms, and rewrite the quiz around skin type and scent.
- An esthetician launching a private-label line: keep the routine-builder quiz, replace the actives glossary with your own five ingredients, and point the bundles at your starter sets.
- A personal-care creator selling a single hero serum: reduce the product roster to your one formula plus refills, and rewrite the ingredient glossary to explain that formula in plain words.
- A men's grooming brand: set [SKIN_FOCUS] to your philosophy, replace the texture photos with your packaging, and rewrite the quiz questions for shave and post-shave routines.

## FAQ

### How does the routine-builder quiz on the Skincare Brand Shop template work?
The Skincare Brand Shop template's quiz asks four questions: skin type, main concern, routine time and scent preference. Answers feed a recommendation rule that assembles a three-step routine from the six products, with live prices in the result panel. Visitors can then add the routine to the cart drawer. The quiz is a front-end interaction only; nothing is submitted to a server.

### What do I need to change to turn the Skincare Brand Shop into my own skincare line?
The Skincare Brand Shop template keeps every string, product, ingredient, quiz question, bundle and image path in one content file. Change the brand name, city, skin focus and hero note variables, then rewrite the six products with your own actives, percentages and ingredient lists. Replace the two bundles and the five glossary actives, and swap the bottle and texture photos. The sections and layout stay as they are.

### Does the Skincare Brand Shop template include a working checkout?
The Skincare Brand Shop template has a cart drawer with quantity steppers and a checkout stub that confirms client-side only. Nothing is submitted or charged anywhere, and the site runs entirely in the browser with no backend. To take real payments you would connect your own checkout or payment provider; the template gives you the cart, product data and order summary to build from.

### What product page details does the Skincare Brand Shop template show?
Each product in the Skincare Brand Shop template opens a detail view with the full ingredient list, how-to-use steps and a texture photo. Product cards show key actives, and the detail view is reached by a query parameter so a specific product can be linked directly. The default content follows an invented minimal skincare line, but the structure suits any small cosmetics or personal-care brand.

### Is the Skincare Brand Shop template free, and can I use it for a cosmetics business?
The Skincare Brand Shop template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client use, including a real cosmetics or personal-care business, needs Pro, which also gives you the full prompt and the demo source code. The Pro page shows the brief, stack and variables publicly.

### How do I build a skincare brand shop with AI?
Copy the prompt from this page or run npx vibefather add skincare-brand-shop, replace [BRAND], [CITY], [SKIN_FOCUS] and [HERO_NOTE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Skincare Brand Shop demo?
The Minimal skincare line case was built by GLM-5.3 in ZCode. Each build used the published prompt with nothing added.

### What tech stack and pages does the Skincare Brand Shop template use?
Skincare Brand Shop is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Skincare Brand Shop template for a client or a business?
The Skincare Brand Shop prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Skincare Brand Shop template work on mobile?
Yes. Every Skincare Brand Shop build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Skincare Brand Shop on VibeFather](https://vibefather.ai/templates/skincare-brand-shop?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
