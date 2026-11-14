# Ceramics Shop Product Page

> A calm single-product shop page where a glaze picker recolors a code-drawn ceramic set in real time.

<a href="https://vibefather.ai/templates/ceramics-shop-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/kiln/57f0c0f3-25f9-40df-97dd-11431b0fae64/webp.b6ee3b40e6.webp" width="100%" alt="Ceramics Shop Product Page — Minimal Single-Product Ecommerce Landing Page with Glaze Color Picker and Cart Drawer built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/ceramics-shop-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Kiln is a single-product shop page for a handmade object. It is built around one interaction: a row of glaze swatches that recolors a code-drawn product render. The default content sells a stoneware pour-over coffee set from an invented studio, Ollan Ceramics. The layout also suits any maker who sells one main item in a few finishes, such as tea sets, planters, candles or lamps.

The page opens on a two-column hero. On the left is a gallery of five SVG views: the full set, a dripper detail, a cup, a glaze close-up and a scale drawing with dimensions. A row of thumbnails sits below it. On desktop you can inspect the render with a magnifying lens, and on phones you tap to zoom. On the right, a sticky buy panel holds the product name, rating, price, glaze swatches, a quantity stepper and the add-to-cart button. Picking a glaze slowly recolors every render on the page, including the piece cards and the cart thumbnails.

The cart runs entirely in the browser. A drawer slides in from the right with line items, quantity steppers, a small add-on, a free-shipping progress bar and a checkout button that only shows a notice. The cart is saved in localStorage, so the demo behaves like a real shop without a backend.

The look is quiet: a bone background, charcoal-brown type, one terracotta accent, Fraunces headings and Inter body text. The stoneware texture comes from SVG noise filters instead of photos, so there are no image licenses to track. Motion is limited to fade-up reveals, rising steam and soft hover lifts, and all of it turns off when the visitor has reduced motion enabled.

To adapt the page, change the brand, product name, list of pieces, price and studio location. Then redraw the SVG pieces with the same gradient and speckle method.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ceramics-shop-product-page?case=57f0c0f3-25f9-40df-97dd-11431b0fae64&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/kiln/57f0c0f3-25f9-40df-97dd-11431b0fae64/shot_desktop.0773655cdf.webp" width="100%" alt="Ceramics Shop Product Page — Ceramic pour-over set, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Ceramic pour-over set</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/ceramics-shop-product-page?case=57f0c0f3-25f9-40df-97dd-11431b0fae64&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ceramics-shop-product-page?case=43e26f00-c9c2-4c7c-ad58-020ffb8f4e1c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/kiln/43e26f00-c9c2-4c7c-ad58-020ffb8f4e1c/shot_desktop.73d690a177.webp" width="100%" alt="Ceramics Shop Product Page — Stoneware tea set, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Stoneware tea set</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/ceramics-shop-product-page?case=43e26f00-c9c2-4c7c-ad58-020ffb8f4e1c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio / brand name | Ollan Ceramics |
| `[PRODUCT_NAME]` | Product name | The Ridgeline Pour-Over Set |
| `[PRODUCT_KIND]` | Product kind | handmade stoneware pour-over coffee set |
| `[SET_PIECES]` | Pieces in the set | dripper, 600 ml server, two 180 ml cups |
| `[PRICE]` | Price (USD, number only) | 148 |
| `[STUDIO_PLACE]` | Studio location | Fernlow Valley |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add ceramics-shop-product-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A candle studio: set BRAND and PRODUCT_NAME to your scent, use SET_PIECES for the jar and lid, and map the glaze swatches to wax colors.
- A plant pot maker: change PRODUCT_KIND to stoneware planter, list the pot and saucer in SET_PIECES, and rewrite the care accordion for drainage and frost.
- A tea ware seller: keep the glaze picker, rename the product to a tea set, and rework the story strip around your STUDIO_PLACE and firing method.
- A single-maker launch page: set PRICE for a limited run, point the reviews and FAQ at your own studio, and keep the free-shipping bar as the cart incentive.

## FAQ

### How does the glaze picker work on the Ceramics Shop Product Page?
The Ceramics Shop Product Page template shows a row of glaze swatches in the sticky buy panel. Choosing one sets the selected glaze's highlight, base and shadow colors as CSS custom properties on the page body, and every SVG render of the product transitions to that color over 600ms. The gallery views, the piece cards and the cart thumbnails all recolor together, so the whole page reflects the finish you picked.

### Do I need product photos to use the Ceramics Shop Product Page template?
No. The Ceramics Shop Product Page template draws all product art as inline SVG: a full set scene, a dripper detail, a cup, a glaze close-up and a scale drawing with dimensions. Stoneware speckle and paper grain come from SVG filters rather than photographs, so there are no image licenses to track. To change the product, redraw the SVG pieces with the same gradient and speckle method.

### What do I change first to turn the Ceramics Shop Product Page into my own shop?
Start with the six variables: BRAND, PRODUCT_NAME, PRODUCT_KIND, SET_PIECES, PRICE and STUDIO_PLACE. They drive the wordmark, page title, product name, eyebrows, the what's-in-the-set cards, the price and the studio location in the story strip and footer. Because the default copy is written for Ollan Ceramics and the Ridgeline Pour-Over Set, rewrite the headlines, reviews, care entries and FAQ to match your own product.

### Does the cart on the Ceramics Shop Product Page actually take payments?
The cart on the Ceramics Shop Product Page runs entirely in the browser. A drawer slides in with line items, quantity steppers, an add-on, a free-shipping progress bar and a checkout button that only shows a notice. Cart contents persist in localStorage under a saved key, so the demo behaves like a real shop across reloads without a backend. Connecting a payment provider is work you add on top of the template.

### Can the Ceramics Shop Product Page sell something other than a coffee set?
Yes. The Ceramics Shop Product Page layout suits any maker who sells one main item in a few finishes, such as tea sets, planters, candles or lamps. Set PRODUCT_KIND and PRODUCT_NAME to the new item, list its parts in SET_PIECES so the what's-in-the-set cards match, and adjust PRICE. Then redraw the SVG pieces and keep the glaze swatches mapped to your real finishes.

### How do I build a ceramics shop product page with AI?
Copy the prompt from this page or run npx vibefather add ceramics-shop-product-page, replace [BRAND], [PRODUCT_NAME], [PRODUCT_KIND] and [SET_PIECES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Ceramics Shop Product Page demo?
The Ceramic pour-over set case was built by Claude Opus 5.5 in Cursor; the Stoneware tea set case was built by Claude Opus 5.5 in Cursor. Each build used the published prompt with nothing added.

### What tech stack and pages does the Ceramics Shop Product Page template use?
Ceramics Shop Product Page is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Ceramics Shop Product Page template for a client or a business?
The Ceramics Shop Product Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Ceramics Shop Product Page template work on mobile?
Yes. Every Ceramics Shop Product Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Ceramics Shop Product Page on VibeFather](https://vibefather.ai/templates/ceramics-shop-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
