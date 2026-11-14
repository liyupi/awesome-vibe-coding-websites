# Plant Shop Website

> Sunlit plant shop with light and pet-safe filters, care cards, pot pairing and a finder quiz.

<a href="https://vibefather.ai/templates/plant-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/plant-shop-website/32397485-a5c0-4540-9542-a7e3642079a7/webp.e74e705449.webp" width="100%" alt="Plant Shop Website — Plant Shop with Finder Quiz built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/plant-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a lush, sunlit storefront for a neighborhood plant shop: a warm cream ground, deep botanical green, a terracotta accent, and rounded friendly type over photographs that feel like a bright afternoon beside a window. The hero is a large sunlit monstera portrait next to the shop name, promising exactly what the catalog delivers. It suits plant shops, garden studios, bonsai growers, herb sellers and any small shop whose products are living things. The plant grid filters visibly by light need, care level and pet safety — the filter pet owners actually want — re-flowing with a gentle layout animation. A three-question finder quiz (light, pets, attention) ends in one recommended plant with a short why line that links straight to its product page. Product pages are query-routed and open on the first plant when no query is given: a care card with light, water and humidity, pot-pairing suggestions with prices, and a wishlist saved to the browser with an honest note. Care-guide cards and a quiet hand-delivery note signed by the owner close the page. Everything runs client-side on React, Tailwind and Motion, with fonts self-hosted through Fontsource and every photograph bundled with the build. Four variables — brand, city, delivery radius and the signer of the shop note — rewrite all copy from one content file. Motion stays gentle and slows further on mobile, and prefers-reduced-motion gets a fully static page. Six photographs from one imaginary shoot ship with the template: same window light, same cream walls, same terracotta pots, no people, no plant tags.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/plant-shop-website?case=32397485-a5c0-4540-9542-a7e3642079a7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/plant-shop-website/32397485-a5c0-4540-9542-a7e3642079a7/shot_desktop.8db53af23f.webp" width="100%" alt="Plant Shop Website — Sunny corner plant shop, built by GLM-5.3 in ZCode"></a><br>
<b>Sunny corner plant shop</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/plant-shop-website?case=32397485-a5c0-4540-9542-a7e3642079a7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/plant-shop-website?case=b55e9698-c6e4-453a-a78a-4659c38f51d8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/plant-shop-website/b55e9698-c6e4-453a-a78a-4659c38f51d8/shot_desktop.2e6f9b1125.webp" width="100%" alt="Plant Shop Website — Candle studio shop, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Candle studio shop</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/plant-shop-website?case=b55e9698-c6e4-453a-a78a-4659c38f51d8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Shop name | Fern & Forth |
| `[CITY]` | City | Savannah, Georgia |
| `[DELIVERY_RADIUS]` | Delivery radius | 15 miles |
| `[SIGNER]` | Shop note signer | Maya Okonkwo |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add plant-shop-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A bonsai grower: set BRAND to your studio, replace the six houseplants with your trees, and rewrite the care cards for wiring, watering and repotting rhythms.
- A herb seller at a farmers market: keep the light and pet-safe filters, swap the plant grid for culinary herbs, and use DELIVERY_RADIUS for your local drop-off zone.
- A garden studio running workshops: add your class dates to the care-guide cards and set SIGNER to the instructor who signs the closing note.
- A first-time plant parent's gift shop: keep the finder quiz, set CITY and DELIVERY_RADIUS to the recipient's area, and link the wishlist to a gift list.

## FAQ

### How do the light, care and pet-safe filters work on the Plant Shop Website?
The plant grid on the Plant Shop Website filters by three things at once: light need (bright, medium or low), care level (easy or moderate) and pet safety. Selecting a filter re-flows the grid with a gentle Motion layout animation so plants glide into place instead of jumping. The pet-safe filter is the one cat and dog owners reach for first, and every plant page repeats whether that plant is safe to bring home.

### What does the find-your-plant quiz recommend, and how does it link to a product page?
The find-your-plant quiz on the Plant Shop Website asks three questions: how much light the window gets, whether pets share the room, and how much attention the owner wants to give. It ends with one recommended plant and a short why line, and that result links straight to the plant's product page. The quiz panel sits under the heading One minute to the right plant and is reachable from the Find a plant anchor.

### What appears on a plant's product page in this template?
Each product page in the Plant Shop Website shows a care card with light, water and humidity lines, pot-pairing suggestions with prices, and a wishlist button that saves the plant to the browser. Product pages are query-routed, and when no plant is chosen the page opens on the first plant rather than an empty state. The wishlist is stored locally with an honest note that it lives in the browser.

### Which variables do I change to make the Plant Shop Website my own shop?
Four variables rewrite the copy across the Plant Shop Website: BRAND sets the shop name used in the wordmark, titles and the browser wishlist key; CITY places the shop in the hero eyebrow, delivery note and footer address; DELIVERY_RADIUS sets the hand-delivery distance in the hero sub-line and closing note; and SIGNER names the owner who signs the shop note. All four live in one content file.

### Can I turn the Plant Shop Website into a shop for bonsai, herbs or a garden studio?
Yes. The Plant Shop Website suits plant shops, garden studios, bonsai growers, herb sellers and any small shop selling living things. You would rewrite the plants array in the content file with your own names, prices, light and care levels, pet-safety flags, care-card lines and pot pairings, then replace the six bundled photographs with your own shoot. Layout, colors and motion stay as designed.

### How do I build a plant shop website with AI?
Copy the prompt from this page or run npx vibefather add plant-shop-website, replace [BRAND], [CITY], [DELIVERY_RADIUS] and [SIGNER] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Plant Shop Website demo?
The Sunny corner plant shop case was built by GLM-5.3 in ZCode; the Candle studio shop case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Plant Shop Website template use?
Plant Shop Website is a 2-page site built with React, Motion and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Plant Shop Website template for a client or a business?
The Plant Shop Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Plant Shop Website template work on mobile?
Yes. Every Plant Shop Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Plant Shop Website on VibeFather](https://vibefather.ai/templates/plant-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
