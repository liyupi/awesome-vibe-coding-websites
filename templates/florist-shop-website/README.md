# Florist Shop Website

> Florist shop with a bouquet catalogue, size and vase options, delivery date picker, gift message and a client-side cart.

<a href="https://vibefather.ai/templates/florist-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/florist-shop-website/9cbd696e-ca93-4710-b68d-7909f55c1db1/webp.4447190aec.webp" width="100%" alt="Florist Shop Website — Florist Shop with Delivery built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/florist-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page flower shop: a hero with the shop's promise beside a bucket-of-stems photograph and a live same-day cutoff clock (order before 2pm); a bouquet catalogue of eight arrangements with seasonal notes, three sizes (posey, bouquet, abundant) whose prices update live, and a vase toggle; a delivery date picker for the next seven days with Sundays closed and a same-day chip that disappears after the cutoff; a gift message field whose drawn notecard preview updates as you type; a slide-over cart drawer with size-and-vase line variants, quantity steppers and the chosen date per line; a subscriptions strip, three reviews, and flower care in three lines. The checkout is an honest client-side confirmation — nothing is charged, and the page says so. The default content follows an invented corner florist, but the structure suits any flower or gift shop: change the shop name, city, cutoff hour and price base and every bouquet, note and date still reads true. The look is garden-fresh editorial: soft blush and cream, deep green ink, one poppy accent, Lora headlines over Albert Sans, with ribbon and ticket details drawn in SVG and loose botanical spacing. Photography is one consistent generated set: buckets, stems, wrapped bouquets and shop corners, no people. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/florist-shop-website?case=9cbd696e-ca93-4710-b68d-7909f55c1db1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/florist-shop-website/9cbd696e-ca93-4710-b68d-7909f55c1db1/shot_desktop.c562120f77.webp" width="100%" alt="Florist Shop Website — Neighborhood corner florist, built by GLM-5.3 in ZCode"></a><br>
<b>Neighborhood corner florist</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/florist-shop-website?case=9cbd696e-ca93-4710-b68d-7909f55c1db1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/florist-shop-website?case=84118317-eafd-457e-8748-a6a30085afd9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/florist-shop-website/84118317-eafd-457e-8748-a6a30085afd9/shot_desktop.239e67cd64.webp" width="100%" alt="Florist Shop Website — Studio florist in Brooklyn, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Studio florist in Brooklyn</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/florist-shop-website?case=84118317-eafd-457e-8748-a6a30085afd9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[SHOP]` | Shop name | Petals & Post |
| `[CITY]` | City | Portland, Maine |
| `[CUTOFF]` | Same-day cutoff | 2pm |
| `[BASE_PRICE]` | Bouquet base price | 42 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add florist-shop-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A wedding florist: set SHOP and CITY, replace the eight bouquets with ceremony and table arrangements, and keep the delivery date picker for event dates.
- A plant and gift shop: keep the cart drawer and gift message notecard, but swap bouquets for potted plants and add vase-free options in the size picker.
- A subscription flower service: use the subscriptions strip as the main offer, set BASE_PRICE to your weekly box and point the bouquet catalogue at add-on stems.
- A farmers market stall: set CUTOFF to your market morning, shorten the delivery days and rewrite the care block for seasonal stems and pickup.

## FAQ

### How do I change the same-day cutoff hour and base bouquet price on the Florist Shop Website?
The Florist Shop Website template drives its countdown, date picker and bouquet prices from two variables: CUTOFF, written like 2pm, and BASE_PRICE, the standard bouquet size price in digits. Set CUTOFF between noon and 4pm and every bouquet's posey and abundant sizes recalculate from its own base around that figure. Change both in the content file and the cutoff banner, same-day chip and catalogue stay consistent.

### Does the Florist Shop Website template take real payments?
No. The Florist Shop Website template ends in a client-side confirmation: the cart drawer collects sizes, vases, dates and gift messages, then says plainly that nothing is charged. Everything runs in the browser and nothing is submitted anywhere. To take money you would connect the cart to your own payment and order system, which the template does not include.

### How does the delivery date picker and gift message work on the Florist Shop Website?
The Florist Shop Website template shows the next seven days as day chips, marks Sundays closed and offers a same-day chip that disappears once the CUTOFF hour passes. The gift message field sits with a drawn notecard preview that updates as you type, and the chosen date and message are stored per cart line, editable later in the slide-over drawer.

### Is the Florist Shop Website template free to use?
The Florist Shop Website prompt and its DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial work, including building a shop site for a paying client, needs Pro. Pro templates show the brief, stack and variables publicly and the full prompt to Pro members, and source code of the demos comes with Pro.

### What should I edit first to make the Florist Shop Website template my own shop?
Start with the four variables: SHOP for the wordmark, title, footer and email; CITY for delivery copy and reviews; CUTOFF for the countdown and same-day chip; BASE_PRICE for the bouquet price base. Then rewrite the copy in the single content file, including the eight bouquets, seasonal notes, three reviews and flower care lines, keeping the same length and tone.

### How do I build a florist shop website with AI?
Copy the prompt from this page or run npx vibefather add florist-shop-website, replace [SHOP], [CITY], [CUTOFF] and [BASE_PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Florist Shop Website demo?
The Neighborhood corner florist case was built by GLM-5.3 in ZCode; the Studio florist in Brooklyn case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Florist Shop Website template use?
Florist Shop Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Florist Shop Website template for a client or a business?
The Florist Shop Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Florist Shop Website template work on mobile?
Yes. Every Florist Shop Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Florist Shop Website on VibeFather](https://vibefather.ai/templates/florist-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
