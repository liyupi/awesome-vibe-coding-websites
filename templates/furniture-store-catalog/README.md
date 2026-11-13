# Furniture Store Catalog

> Warm showroom furniture catalogue with room navigation, materials filter, SVG dimension diagrams and a bag drawer.

<a href="https://vibefather.ai/templates/furniture-store-catalog?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/furniture-store-catalog/8d96cd18-64c6-4938-a6a4-a9d9756491c0/webp.33a917d1aa.webp" width="100%" alt="Furniture Store Catalog — Furniture Catalog with Swatches built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/furniture-store-catalog?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page catalogue for a furniture store: a styled living-room hero with the brand's craftsmanship promise; room-based navigation (living, dining, bedroom, office) and a materials filter (oak, walnut, linen, leather); eight original pieces in a product grid; a product page (?p=<slug>, first product without one) with a gallery, a hand-drawn SVG dimensions diagram with dimension callouts, a three-finish swatch picker that updates the name and price, joinery notes and delivery; a bag counter with a simple client-side drawer; a craft strip (joinery, materials, delivery); and a three-showroom store locator with hours. The default content follows an invented workshop brand, but the structure suits any furniture or homeware store. The look is warm showroom: gallery white and walnut, a slate-blue accent, workshop serif headlines over a clean sans, styled-room photography, drawn dimension diagrams and swatch chips. All furniture designs are original — no recognizable designer silhouettes. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/furniture-store-catalog?case=8d96cd18-64c6-4938-a6a4-a9d9756491c0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/furniture-store-catalog/8d96cd18-64c6-4938-a6a4-a9d9756491c0/shot_desktop.12484d9b6c.webp" width="100%" alt="Furniture Store Catalog — Workshop furniture brand, built by GLM-5.3 in ZCode"></a><br>
<b>Workshop furniture brand</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/furniture-store-catalog?case=8d96cd18-64c6-4938-a6a4-a9d9756491c0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/furniture-store-catalog?case=5abe36fb-5306-497a-8b07-e021bedfc121&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/furniture-store-catalog/5abe36fb-5306-497a-8b07-e021bedfc121/shot_desktop.93382f1320.webp" width="100%" alt="Furniture Store Catalog — Scandinavian furniture store, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Scandinavian furniture store</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/furniture-store-catalog?case=5abe36fb-5306-497a-8b07-e021bedfc121&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[STORE]` | Store name | Oakline & Co |
| `[CITY]` | City | Denver, Colorado |
| `[CRAFT_NOTE]` | Craft note | mortise-and-tenon, no shortcuts |
| `[DELIVERY_NOTE]` | Delivery note | two-person delivery included |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add furniture-store-catalog` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local upholstery workshop: set STORE and CITY to your studio, swap the eight pieces for your sofa and chair range, and rename the material chips to your fabrics and frame woods.
- A homeware and lighting shop: keep the room navigation but relabel the rooms, replace the finish swatches with metal and glass options, and rewrite the craft strip around your makers.
- A multi-branch furniture retailer: use the three-showroom locator for your actual addresses and hours, and set DELIVERY_NOTE to your real delivery terms per region.
- An interior design studio selling its own line: set CRAFT_NOTE to your making philosophy, keep the dimension diagrams for custom sizes, and point the bag drawer at a consultation request.

## FAQ

### How do I change the store name, city and delivery terms in the Furniture Store Catalog template?
The Furniture Store Catalog template keeps its settings in four variables: STORE, CITY, CRAFT_NOTE and DELIVERY_NOTE. Set STORE to your shop name and CITY to where your showroom sits; CRAFT_NOTE names your joinery in one lowercase phrase and DELIVERY_NOTE states your delivery terms plainly. All copy, products, finishes, showrooms and image paths live in one content file, so you rewrite the text there without touching the layout.

### How does the materials filter and room navigation work on the Furniture Store Catalog template?
The Furniture Store Catalog template filters its eight original pieces by room and by material at the same time. Room chips cover living, dining, bedroom and office; material chips cover oak, walnut, linen and leather. Visitors combine both to narrow the product grid, and the selected chips fill in walnut mist so the current filter is always visible. To use different rooms or materials, edit the product data in the content file.

### What does the dimension diagram on each furniture product page show?
Each product page in the Furniture Store Catalog template draws a to-scale front and side elevation of the piece as inline SVG, with dimension callout lines, arrows and millimetre labels plus a small scale bar. The diagram is drawn geometry rather than a photo, so measurements stay legible. Choosing a different finish crossfades the wood fill on the elevation, which helps buyers check a piece against their tape measure before ordering.

### Can I sell furniture with this template if I do not have a checkout or payment system?
The Furniture Store Catalog template is a catalogue, not a checkout. Its bag counter opens a client-side drawer that holds lines with finish and quantity and saves them in the browser, but nothing is submitted anywhere and no payment is taken. That suits a workshop that wants visitors to fill a bag and then visit the showroom or contact the store. For real orders you would connect the bag to your own ordering process.

### What should I change first when adapting the Furniture Store Catalog template for my own shop?
Start with the four variables: STORE, CITY, CRAFT_NOTE and DELIVERY_NOTE, which drive the wordmark, titles, hero line, craft strip, product page and store locator. Then replace the eight original pieces and their dimensions, finishes and images in the content file. The three-showroom locator with hours and the craft strip about joinery, materials and delivery are the next places to make the copy your own.

### How do I build a furniture store catalog with AI?
Copy the prompt from this page or run npx vibefather add furniture-store-catalog, replace [STORE], [CITY], [CRAFT_NOTE] and [DELIVERY_NOTE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Furniture Store Catalog demo?
The Workshop furniture brand case was built by GLM-5.3 in ZCode; the Scandinavian furniture store case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Furniture Store Catalog template use?
Furniture Store Catalog is a 2-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Furniture Store Catalog template for a client or a business?
The Furniture Store Catalog prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Furniture Store Catalog template work on mobile?
Yes. Every Furniture Store Catalog build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Furniture Store Catalog on VibeFather](https://vibefather.ai/templates/furniture-store-catalog?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
