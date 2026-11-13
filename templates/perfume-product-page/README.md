# Perfume Product Page

> A blush-and-amber perfume page with an unfolding scent pyramid and mood photography.

<a href="https://vibefather.ai/templates/perfume-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/perfume-product-page/bd5b5e90-6c67-4d7e-ba72-8f877f664d7f/webp.7341b24d9e.webp" width="100%" alt="Perfume Product Page — Perfume Page with Scent Pyramid built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/perfume-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page site for one perfume, built around softness. The first screen is a heavy glass bottle standing on draped blush silk, amber light refracting through the glass — a macro hero with the fragrance name in an airy serif beside it. Scrolling unfolds the scent: an editorial mood strip of silk, amber resin and iris, all graded in the same warm light; then the centerpiece — an animated scent pyramid drawn in SVG. Its three bands open layer by layer as you scroll, top, heart and base, each with its ingredient names and one line of poetry: pear skin and bergamot chiffon at the top, orris and saffron at the heart, amber resin and cashmere wood at the base. A how-to-wear note keeps the voice intimate, the buy section offers a size picker with a live-updating price and a discovery-set upsell card, and three quiet review lines close the page. The demo buy buttons show an inline note instead of a checkout — nothing is for sale. The palette is locked: blush grounds, one amber accent, an iris-mauve secondary, cocoa text; Cormorant Garamond over Josefin Sans with airy tracking; pill buttons, 18px radii, silk-soft gradients and hairline golds. Motion is slow and few — a gentle parallax on the bottle, 800ms reveals, the pyramid's unfolding — all with static fallbacks under prefers-reduced-motion. Every note, price and review is invented sample copy. Swap house, fragrance and prices in one content file; the second demo case turns the same page into a scented-candle product.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Aurora](../../styles/aurora.md), [Minimal](../../styles/minimal.md), [Luxury](../../styles/luxury.md) |
| Effects | Parallax, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/perfume-product-page?case=bd5b5e90-6c67-4d7e-ba72-8f877f664d7f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/perfume-product-page/bd5b5e90-6c67-4d7e-ba72-8f877f664d7f/shot_desktop.17027c59ab.webp" width="100%" alt="Perfume Product Page — Perfume product, built by GLM-5.3 in ZCode"></a><br>
<b>Perfume product</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/perfume-product-page?case=bd5b5e90-6c67-4d7e-ba72-8f877f664d7f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/perfume-product-page?case=df3cbeab-f022-4a31-bfa6-d7675f7d9fd9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/perfume-product-page/df3cbeab-f022-4a31-bfa6-d7675f7d9fd9/shot_desktop.a878a55c13.webp" width="100%" alt="Perfume Product Page — Scented candle product, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Scented candle product</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/perfume-product-page?case=df3cbeab-f022-4a31-bfa6-d7675f7d9fd9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | House name | Maison Verane |
| `[PERFUME]` | Fragrance name | Aurelle |
| `[PRICE_MID]` | Mid-size price | $145 |
| `[SET_PRICE]` | Discovery set price | $32 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add perfume-product-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An indie perfume house launching one signature scent: set BRAND and PERFUME to your label, rewrite the top, heart and base layers with your real notes, and swap the six photographs for your own bottle on silk.
- A scented-candle studio: rename the fragrance to your candle, replace the scent pyramid bands with your wax, wick and burn notes, and update PRICE_MID and SET_PRICE for your sizes and sampler.
- A body-care brand selling a single oil or balm: keep the blush-and-amber palette, rewrite the how-to-wear note for skin application, and turn the discovery-set card into a travel-size trio offer.
- A beauty creator's product launch page: set BRAND to your studio name, use the mood strip captions for your campaign lines, and link the buy section to your own store instead of the demo note.

## FAQ

### How does the scent pyramid on the Perfume Product Page actually work?
The Perfume Product Page draws its scent pyramid in SVG as three bands: top, heart and base. As you scroll and each band crosses 40% of the viewport, it unfolds from the center, top first, then heart, then base, and its ingredient chips slide in beside it connected by amber leader lines. Under prefers-reduced-motion the pyramid renders fully unfolded and static.

### How do I change the perfume name, house and prices in this template?
Set BRAND, PERFUME, PRICE_MID and SET_PRICE, then edit the single content file that holds every user-facing string: house, fragrance, tagline, mood captions, note layers, sizes and prices, discovery-set copy, reviews and how-to-wear lines. BRAND and PERFUME drive the wordmark and page title, PRICE_MID sets the 50 ml default in the size picker, and SET_PRICE sets the discovery-set upsell card.

### Can I turn the Perfume Product Page into a candle or body-care product page?
Yes. The second live demo of the Perfume Product Page, built by DeepSeek V4.1 Flash in DeepSeek Harness, turns the same page into a scented-candle product. You keep the layout, palette and unfolding pyramid and rewrite the content file: swap the fragrance name for the candle name, replace the top, heart and base notes with your scent layers, and update sizes, prices and the discovery-set offer.

### Do the buy buttons on the Perfume Product Page take real orders?
No. The Perfume Product Page demo buy buttons show an inline note instead of a checkout, and nothing is for sale. Every note, price and review is invented sample copy. To sell, connect the size picker and discovery-set card to your own store or checkout, and replace the sample reviews and prices with real ones before publishing.

### What should I change first when adapting the Perfume Product Page for my own brand?
Start with the content file: set BRAND, PERFUME, PRICE_MID and SET_PRICE, then rewrite the hero descriptor, the top, heart and base note layers with their poetic lines, the how-to-wear note and the three review lines. Next replace the six generated photographs in public/images with your own bottle and mood shots in the same blush-and-amber grade, keeping labels blank and text-free.

### How do I build a perfume product page with AI?
Copy the prompt from this page or run npx vibefather add perfume-product-page, replace [BRAND], [PERFUME], [PRICE_MID] and [SET_PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Perfume Product Page demo?
The Perfume product case was built by GLM-5.3 in ZCode; the Scented candle product case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Perfume Product Page template use?
Perfume Product Page is a single-page site built with Tailwind CSS, Motion and React, with parallax, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Perfume Product Page template for a client or a business?
The Perfume Product Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Perfume Product Page template work on mobile?
Yes. Every Perfume Product Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Perfume Product Page on VibeFather](https://vibefather.ai/templates/perfume-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
