# Fashion Online Store <sup>PRO</sup>

> Four-page fashion storefront with filterable collections, variant product pages, a cart drawer and a mock checkout.

<a href="https://vibefather.ai/templates/fashion-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/fashion-online-store/4a4dd574-4bb6-4841-83cb-2236363d986f/webp.a7951ad33d.webp" width="100%" alt="Fashion Online Store — Fashion Store with Cart Drawer built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/fashion-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A four-page storefront for a small fashion label: a campaign home with new arrivals and a materials strip, a shop page with category, size and color filters plus sorting, product pages with galleries, color and size variants, quantity and a size guide, an about page telling the label's story, a slide-over cart drawer with a free-shipping progress bar, and a mock checkout that runs shipping form → review → order placed entirely in the browser. The default content follows an invented linen-and-merino label in Lisbon, but the structure suits any apparel brand: change the label, city, materials and shipping threshold and every product line, filter and policy still reads true. The cart persists in localStorage across pages and reloads; the checkout never charges and says so. The look is quiet luxury: warm white and bone, near-black ink, one muted ochre accent, Playfair Display headlines over Figtree, oversized photography with whisper-quiet motion. Garment photography shows forms, hangers, folds and details — no faces anywhere. To adapt it, swap the variables and rewrite the copy in one content file; products, filters, policies and the announcement bar all read from it.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
| Style | [Minimal](../../styles/minimal.md), [Luxury](../../styles/luxury.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 4 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/fashion-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/fashion-online-store?case=4a4dd574-4bb6-4841-83cb-2236363d986f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/fashion-online-store/4a4dd574-4bb6-4841-83cb-2236363d986f/shot_desktop.0c7958f7e9.webp" width="100%" alt="Fashion Online Store — Linen label in Lisbon, built by GLM-5.3 in ZCode"></a><br>
<b>Linen label in Lisbon</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/fashion-online-store?case=4a4dd574-4bb6-4841-83cb-2236363d986f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/fashion-online-store?case=106e7582-2eb4-4e08-8635-cce354cb7848&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/fashion-online-store/106e7582-2eb4-4e08-8635-cce354cb7848/shot_desktop.d46d1129ac.webp" width="100%" alt="Fashion Online Store — Cotton label in Portland, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Cotton label in Portland</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/fashion-online-store?case=106e7582-2eb4-4e08-8635-cce354cb7848&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Label name | Fold and Grain |
| `[CITY]` | Studio city | Lisbon, Portugal |
| `[MATERIAL]` | Materials | Linen and merino |
| `[SHIP_FREE]` | Free shipping over | 200 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/fashion-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A knitwear studio in Edinburgh: set BRAND and CITY, change MATERIAL to wool and cashmere, and replace the product lines and care facts with your own garment tags.
- A menswear label: keep the quiet layout, rewrite the about story for your workshop and swap the collection filters to your fits, sizes and colorways.
- A slow-fashion newsletter shop: set SHIP_FREE to your threshold, link the newsletter block to your list and use the editorial band for a fabric story.
- A jewellery maker: keep the gallery and variant picker, change MATERIAL to silver and gold, and replace the size guide table with ring and chain measurements.

## FAQ

### How do I change the brand name, city and materials in the Fashion Online Store template?
The Fashion Online Store template is driven by four variables: BRAND, CITY, MATERIAL and SHIP_FREE. Set BRAND to your label name, CITY to your studio city, MATERIAL to exactly two fabrics in title case and SHIP_FREE to a threshold between 100 and 300. The wordmark, page titles, announcement bar, footer, email address, localStorage keys, materials strip, fabric lines and the free-shipping bar all read from these values, so every page updates together.

### Does the Fashion Online Store template take real payments or send orders anywhere?
No. The Fashion Online Store template's checkout is a mock that runs shipping form, review and order placed entirely in the browser, and it says so. Nothing is submitted, stored on a server or charged. The cart is saved in localStorage under a key prefixed with your brand, so it survives reloads and page changes on the same device. To sell for real you would connect the review step to a payment provider.

### Can I use the Fashion Online Store template for a client's clothing brand?
Client work needs a Pro membership, because the Fashion Online Store template is a Pro template. Pro shows the brief, stack and variables publicly and gives members the full prompt plus the source code of the demos. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use only. Once you have Pro access, set BRAND, CITY, MATERIAL and SHIP_FREE to the client's details and rewrite the copy in the single content file.

### What should I change first after building the Fashion Online Store template?
Start with the four variables, then rewrite the content file. The Fashion Online Store template keeps every string, product, variant, color, size, filter, policy, material line and image path in one typed content file, so replacing the invented linen-and-merino label with your own garments is a single pass. After that, check the shop filters and sorting against your real categories, sizes and colors, and set the free-shipping threshold so the cart progress bar reads correctly.

### How do the product variants, size guide and cart drawer work in the Fashion Online Store template?
Product pages in the Fashion Online Store template show a gallery, color swatches, a size picker, a quantity stepper and a size guide accordion with a drawn table. Each cart line is keyed by product, color and size, so the same garment in two sizes stays separate. The slide-over cart drawer shows a free-shipping progress bar based on SHIP_FREE, and the header cart button carries a count badge on every page. The product page reads a query parameter and falls back to the first product.

### How do I build a fashion online store with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add fashion-online-store, replace [BRAND], [CITY], [MATERIAL] and [SHIP_FREE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Fashion Online Store demo?
The Linen label in Lisbon case was built by GLM-5.3 in ZCode; the Cotton label in Portland case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Fashion Online Store template use?
Fashion Online Store is a 4-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Fashion Online Store template free to use?
Fashion Online Store is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Fashion Online Store template work on mobile?
Yes. Every Fashion Online Store build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Fashion Online Store on VibeFather](https://vibefather.ai/templates/fashion-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
