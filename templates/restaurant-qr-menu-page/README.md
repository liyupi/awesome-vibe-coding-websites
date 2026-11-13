# Restaurant QR Menu Page

> A warm mobile-first QR menu with allergen filters, a server tally and call-waiter.

<a href="https://vibefather.ai/templates/restaurant-qr-menu-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/restaurant-qr-menu-page/81b4d688-f331-4fe9-8a4a-be11630d5e58/webp.c7f3cf79fa.webp" width="100%" alt="Restaurant QR Menu Page — QR Menu with Allergen Filters built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/restaurant-qr-menu-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A mobile-first digital menu for the QR code on the table, built like a warm bistro paper menu rather than an app. The 390px phone is the primary design; on desktop the same single column simply centers with quiet hairlines — there is no second layout. The page opens on an overhead photograph of the house signature under warm bistro light, with the restaurant's wordmark and a table chip above it. Sticky category tabs scroll-spy the menu; an avoid-list of allergen chips (gluten, dairy, nuts, shellfish) dims everything that does not match, with an honest disclaimer that tags are guidance, not guarantees. Dishes come in two honest row styles: photographed rows with a square thumb and a terracotta add button, and classic text rows with dotted leaders to the price, like a real paper menu. Tapping any dish opens a bottom-sheet detail with a larger photo, allergen chips and a quantity stepper. The running order is a tally, not a checkout: a fixed bottom bar counts items and total, and its sheet presents a clean list to show the server, with a call-waiter button that changes to a show-this-screen state — no network claims anywhere. Everything persists in local storage only. Cream paper ground, walnut ink, one terracotta accent, Lora over Asap; sheets slide, tabs underline, nothing else moves, and prefers-reduced-motion gets plain fades. Swap brand, table label and service note in one content file; the second demo case turns the menu into a wine-bar counter card.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Restaurant](../../types/restaurant.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/restaurant-qr-menu-page?case=81b4d688-f331-4fe9-8a4a-be11630d5e58&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/restaurant-qr-menu-page/81b4d688-f331-4fe9-8a4a-be11630d5e58/shot_desktop.059ff1a105.webp" width="100%" alt="Restaurant QR Menu Page — Bistro QR menu, built by GLM-5.3 in ZCode"></a><br>
<b>Bistro QR menu</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/restaurant-qr-menu-page?case=81b4d688-f331-4fe9-8a4a-be11630d5e58&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/restaurant-qr-menu-page?case=6503b8cd-d92e-43d7-8c9b-de6d87ea5386&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/restaurant-qr-menu-page/6503b8cd-d92e-43d7-8c9b-de6d87ea5386/shot_desktop.9d89c8b47a.webp" width="100%" alt="Restaurant QR Menu Page — Wine bar counter card, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Wine bar counter card</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/restaurant-qr-menu-page?case=6503b8cd-d92e-43d7-8c9b-de6d87ea5386&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Restaurant name | Rue Noisette |
| `[TABLE]` | Table label | Table 7 |
| `[SERVICE]` | Service note | Service included |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add restaurant-qr-menu-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighbourhood bistro: set BRAND to your name, TABLE to each table's number, and replace the five sample categories and dish lines with your own menu and prices.
- A wine bar: turn the categories into sparkling, white, red and by-the-glass, rewrite dish rows as bottle and glass entries, and keep the allergen chips for sulphites.
- A café counter: change TABLE to a stool or counter label, shorten the category list to coffee, pastries and lunch, and set SERVICE to your counter-service note.
- A studio building for restaurants: duplicate the content file per client, keep the terracotta and walnut palette, and swap the signature hero photo for each venue's own dish.

## FAQ

### How do the allergen filters work on the Restaurant QR Menu Page?
The Restaurant QR Menu Page shows an avoid-list of allergen chips for gluten, dairy, nuts and shellfish. Selecting a chip dims every dish that does not match to 35% opacity with grayscale and disables its add button, while matching dishes stay full colour. An on-page disclaimer states that the tags are guidance, not guarantees, so guests should still confirm with staff.

### How does a guest send their order to the server with this QR menu template?
The Restaurant QR Menu Page keeps a running tally, not a checkout. A fixed bottom bar counts items and total, and tapping it opens a sheet with a clean list the guest shows to the server. A call-waiter button switches to a show-this-screen confirmation. Everything is stored in local storage only, so no order is transmitted anywhere.

### What do I need to change in the Restaurant QR Menu Page template for my own restaurant?
The Restaurant QR Menu Page keeps all user-facing strings and the whole menu in one content file. Set BRAND to your restaurant name, TABLE to the label for that QR code's table, and SERVICE to your service note. Then replace the five categories and each dish's name, description, price, allergens and optional photo, plus the footer address and hours.

### Can the Restaurant QR Menu Page template be used as a wine list or bar menu instead of a food menu?
The Restaurant QR Menu Page works as a wine-bar counter card, and one of its live demos is exactly that. Because categories and dishes all come from the content file, you can replace the five food categories with wine sections, rewrite each dish line as a glass or bottle entry, and keep the allergen chips, tally and call-waiter behaviour as they are.

### Does the Restaurant QR Menu Page template need a backend or internet connection to work?
The Restaurant QR Menu Page builds to static files with no backend, server code or external APIs. The order tally persists in local storage on the guest's phone, and the call-waiter button is a screen state rather than a network request. You can host the built files on any static host and the menu loads as a normal web page.

### How do I build a restaurant QR menu page with AI?
Copy the prompt from this page or run npx vibefather add restaurant-qr-menu-page, replace [BRAND], [TABLE] and [SERVICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Restaurant QR Menu Page demo?
The Bistro QR menu case was built by GLM-5.3 in ZCode; the Wine bar counter card case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Restaurant QR Menu Page template use?
Restaurant QR Menu Page is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Restaurant QR Menu Page template for a client or a business?
The Restaurant QR Menu Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Restaurant QR Menu Page template work on mobile?
Yes. Every Restaurant QR Menu Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Restaurant QR Menu Page on VibeFather](https://vibefather.ai/templates/restaurant-qr-menu-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
