# Liquid Glass Product Page <sup>PRO</sup>

> A liquid-glass preorder page for premium hardware: refractive panels over product photos, specs and editions.

<a href="https://vibefather.ai/templates/liquid-glass-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/meniscus/3eb3df01-6006-4d7c-81d6-a8a840642a3f/webp.e1c9a712d7.webp" width="100%" alt="Liquid Glass Product Page — Liquid Glass Product Landing Page built by Claude Opus 5.5, Claude Sonnet 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/liquid-glass-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Meniscus is a single-page product launch site for a physical object that is meant to be looked at. The default build sells Tide, an invented hand-blown glass room speaker from a small Portland studio, and walks a visitor from first impression to a refundable preorder deposit without leaving the page. It suits hardware founders running a first production batch, design-led device brands, crowdfunding campaigns that want their own page, and studios pitching a product concept to clients.

The look is built around glass that behaves like glass. Every panel, chip and pricing card sits on a warm off-white stage or over real product photography, blurs and slightly bends what is behind it, and carries a thin iridescent rim whose brightest point turns toward your cursor. In Chromium browsers the edges refract through an SVG displacement map generated for each panel's exact size; other browsers get a clean frosted version of the same surface. Headlines use Newsreader with one italic phrase per heading, body text uses Geist, and specs and labels use Geist Mono.

The page opens with a counting loader, then a full-bleed hero with a magnifying glass lens that follows the pointer. A pinned four-chapter story moves the product across the screen while glass cards explain the body, sound, light and controls. After that come a materials grid, a room photo with tappable glass hotspots, a twelve-row spec sheet beside a line drawing that draws itself, three editions, a preorder panel with live totals and an FAQ.

To adapt it, change the brand, product name, what the product is, the starting price and the shipping window, then swap the six product photos for your own. Layout, glass recipe, type and motion stay as written, and all copy lives in one content file.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Glass](../../styles/glass.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Cursor Effects, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/liquid-glass-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/liquid-glass-product-page?case=3eb3df01-6006-4d7c-81d6-a8a840642a3f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/meniscus/3eb3df01-6006-4d7c-81d6-a8a840642a3f/shot_desktop.c241f4a425.webp" width="100%" alt="Liquid Glass Product Page — Glass room speaker, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Glass room speaker</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/liquid-glass-product-page?case=3eb3df01-6006-4d7c-81d6-a8a840642a3f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/liquid-glass-product-page?case=2f932c79-1b6f-4009-9a5a-53ef75e7eb86&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/liquid-glass-product-page/2f932c79-1b6f-4009-9a5a-53ef75e7eb86/shot_desktop.dd92aa998d.webp" width="100%" alt="Liquid Glass Product Page — Cold brew tower, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Cold brew tower</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/liquid-glass-product-page?case=2f932c79-1b6f-4009-9a5a-53ef75e7eb86&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/liquid-glass-product-page?case=89dc8bdc-f96b-411d-a68c-a0e7a4d82a34&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/liquid-glass-product-page/89dc8bdc-f96b-411d-a68c-a0e7a4d82a34/shot_desktop.597a69b55f.webp" width="100%" alt="Liquid Glass Product Page — Glass room speaker, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Glass room speaker</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/liquid-glass-product-page?case=89dc8bdc-f96b-411d-a68c-a0e7a4d82a34&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Nacre |
| `[PRODUCT]` | Product name | Tide |
| `[PRODUCT_KIND]` | What the product is | hand-blown glass room speaker |
| `[PRICE]` | Starting price | $649 |
| `[SHIP_WINDOW]` | Shipping window | Ships in early spring |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/liquid-glass-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A small-batch coffee roaster: set PRODUCT to your cold brew tower, change PRODUCT_KIND to a glass brewing tower, swap the six photos and rewrite the four story chapters around extraction.
- A design-led audio startup: keep BRAND as your studio name, set PRICE and SHIP_WINDOW to your first batch, and replace the spec sheet rows with driver, enclosure and finish details.
- A lighting studio pitching a concept: set PRODUCT to your pendant lamp, change PRODUCT_KIND to a hand-blown glass pendant, and use the editions section for three sizes or finishes.
- A crowdfunding campaign that wants its own page: point the preorder panel at your refundable deposit, set SHIP_WINDOW to your delivery estimate and rewrite the FAQ for backer questions.

## FAQ

### What is the Liquid Glass Product Page template and what does it include?
The Liquid Glass Product Page template is a single-page preorder site for a physical product, built around glass panels that blur and refract what sits behind them. The page includes a counting loader, a full-bleed hero with a cursor-following magnifying lens, a pinned four-chapter product story, a materials grid, a room photo with tappable glass hotspots, a twelve-row spec sheet beside a self-drawing line drawing, three editions, a preorder panel with live totals, an FAQ and a footer. All copy lives in one content file.

### How do I change the product, brand and price in the Liquid Glass Product Page template?
Set BRAND, PRODUCT, PRODUCT_KIND, PRICE and SHIP_WINDOW in the template's content file, then rewrite every headline, paragraph, spec and FAQ answer for the new product. The default copy is written for a hand-blown glass room speaker starting at $649, and the other two edition prices and the preorder totals are calculated relative to that starting price, so recalculate them when PRICE changes. Swap the six product photos for your own and keep the glass recipe, type and motion as they are.

### Can I use the Liquid Glass Product Page template for a client's product launch?
Yes, with Pro. The Liquid Glass Product Page is a Pro template: the brief, stack and variables are public, the full prompt is available to Pro members, and the source code of the demos comes with Pro. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use only, so commercial and client work needs Pro. Once you have it, you can adapt the page for a client's hardware launch and ship it as a static site.

### How does the glass effect work and what happens in browsers that don't support it?
Every panel, chip and pricing card in the Liquid Glass Product Page is a glass surface that blurs what is behind it and carries a thin iridescent rim whose brightest point turns toward your cursor. In Chromium browsers the edges refract through an SVG displacement map generated for each panel's exact size; other browsers get a clean frosted version of the same surface. Headlines use Newsreader with one italic phrase per heading, body text uses Geist, and specs and labels use Geist Mono.

### What do I need to prepare before building the Liquid Glass Product Page?
Before building the Liquid Glass Product Page, decide the product, what it is, the starting price and the shipping window, because those five variables drive every chapter, spec, FAQ answer and image. Prepare six product photographs, a spec sheet of twelve rows, three edition names and prices, and the FAQ answers buyers read before paying a deposit. Choose a physical object with a visible material story, since the layout is built around large product photography and glass panels floating over it.

### How do I build a liquid glass product page with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add liquid-glass-product-page, replace [BRAND], [PRODUCT], [PRODUCT_KIND] and [PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Liquid Glass Product Page demo?
The Glass room speaker case was built by Claude Opus 5.5 in Cursor; the Cold brew tower case was built by Claude Sonnet 5.5 in Cursor; the Glass room speaker case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Liquid Glass Product Page template use?
Liquid Glass Product Page is a single-page site built with Tailwind CSS, Motion and React, with scroll animation, cursor effects and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Liquid Glass Product Page template free to use?
Liquid Glass Product Page is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Liquid Glass Product Page template work on mobile?
Yes. Every Liquid Glass Product Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Aether One — Liquid Glass (Opus 5.5 showcase by Miler)](https://ohmiler.github.io/opus-5.5/liquid-glass-landing/) by @ohmiler
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Liquid Glass Product Page on VibeFather](https://vibefather.ai/templates/liquid-glass-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
