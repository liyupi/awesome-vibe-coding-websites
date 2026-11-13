# Gelato Shop Website

> A pastel gelato shop site with a flavor wall, dietary filters and a build-a-cup SVG configurator.

<a href="https://vibefather.ai/templates/gelato-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/gelato-shop-website/8f676154-e7ba-4319-bca6-3121ffced1de/webp.44614e5d46.webp" width="100%" alt="Gelato Shop Website — Playful Gelato Shop with Flavor Wall built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/gelato-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site for a small-batch gelato shop, built around color. The page opens with a big studio photograph of a loaded cup against a pistachio backdrop, a bold rounded headline, and a row of flavor dots promising what is coming. The heart of the template is the flavor wall: a grid of swatch cards, one per flavor, each in its own pastel color with a drawn drip, its name in chunky rounded type, and dietary tags for vegan, dairy-free and nut-free. Filter chips recolor the wall instantly, dimming everything that does not match. The build-a-cup section is the interactive centerpiece: pick a size, stack up to three scoops by clicking flavor chips, add toppings, and watch a live SVG cup fill with your colors and start to drip. A save button stores the creation locally — there is no ordering system, no payment, nothing to hook up. Around the configurator sit a short churned-slow strip with three photographs and honest numbers, two shop panels with addresses and opening hours, and a catering section that assembles a request summary you can copy into an email. The look is locked: a cream ground with pistachio, raspberry and butter pastels, cocoa text, Baloo 2 display type over Nunito, rounded corners everywhere and drippy SVG shapes hanging off the header, photos and section dividers. Motion is bouncy but calm — hover squish, scoop pops, slow scroll reveals — and it all honors prefers-reduced-motion. Swap brand, city, scoop count and price in one content file; the second demo case turns the same layout into a smoothie bowl bar.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Landing Page](../../types/landing-page.md), [Restaurant](../../types/restaurant.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Playful](../../styles/playful.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/gelato-shop-website?case=8f676154-e7ba-4319-bca6-3121ffced1de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/gelato-shop-website/8f676154-e7ba-4319-bca6-3121ffced1de/shot_desktop.7d0a12f0ca.webp" width="100%" alt="Gelato Shop Website — Gelato shop, built by GLM-5.3 in ZCode"></a><br>
<b>Gelato shop</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/gelato-shop-website?case=8f676154-e7ba-4319-bca6-3121ffced1de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/gelato-shop-website?case=2d868fd9-c951-4da6-8dff-195dda1677dd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/gelato-shop-website/2d868fd9-c951-4da6-8dff-195dda1677dd/shot_desktop.6d2bed276f.webp" width="100%" alt="Gelato Shop Website — Smoothie bowl bar, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Smoothie bowl bar</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/gelato-shop-website?case=2d868fd9-c951-4da6-8dff-195dda1677dd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Shop name | Pastella |
| `[CITY]` | Town | Alder Bay |
| `[SCOOPS]` | Max scoops per cup | 3 |
| `[PRICE_CUP]` | Starting cup price | $6 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add gelato-shop-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A smoothie bowl bar: set BRAND and CITY, swap the twelve flavors for your bowls and toppings, and rename the scoop builder to a bowl builder with your base, fruit and crunch options.
- A neighborhood froyo shop: keep the flavor wall and dietary chips, set SCOOPS to your cup limit and PRICE_CUP to your starting price, and rewrite the churned-slow strip around your daily rotation.
- A bakery that sells ice cream by the pint: use the flavor wall for your pint lineup, link the catering request builder to your events inbox, and replace the two shop panels with your counter address and hours.
- A designer pitching a dessert brand: keep the pastel palette and drippy SVG dividers, set BRAND to the client's name, and rework the honest allergen note in latte text before showing the build-a-cup demo.

## FAQ

### How does the build-a-cup configurator on the Gelato Shop Website template work?
The build-a-cup section lets a visitor pick a size, stack scoops up to the SCOOPS limit by clicking flavor chips, and add toppings. A live SVG cup fills with the chosen colors and starts to drip once two or more scoops are stacked, and a save button stores the creation in the browser. There is no ordering system and no payment to connect.

### Can I filter the flavor wall by vegan, dairy-free or nut-free on this template?
Yes. The Gelato Shop Website template draws its flavor wall as a grid of pastel swatch cards, each carrying dietary tags for vegan, dairy-free and nut-free. Filter chips recolor the wall instantly, dimming and greyscaling every swatch that does not match the selected tag while matching cards keep their full pastel color.

### What is free and what needs Pro on the Gelato Shop Website template?
The Gelato Shop Website template is a free template, so its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, and Pro members also get the source code of the demos. The live demos, the brief, the stack and the variables are visible to everyone.

### How do I change the shop name, city, scoop limit and cup price in the Gelato Shop Website template?
Every value lives in one content file: set BRAND to your shop name, CITY to your town, SCOOPS to the maximum scoops per cup and PRICE_CUP to your starting cup price. The header, hero, cup builder, shops, catering copy and page title all read from that file, so the swap happens in one place.

### Is the Gelato Shop Website template only for gelato, or can it fit other dessert shops?
The Gelato Shop Website template suits any small dessert shop that sells by the scoop or the bowl. One of its two live demos, built by DeepSeek V4.1 Flash in DeepSeek Harness, turns the same layout into a smoothie bowl bar, which shows how far the flavor wall, cup builder and catering sections stretch beyond gelato.

### How do I build a gelato shop website with AI?
Copy the prompt from this page or run npx vibefather add gelato-shop-website, replace [BRAND], [CITY], [SCOOPS] and [PRICE_CUP] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Gelato Shop Website demo?
The Gelato shop case was built by GLM-5.3 in ZCode; the Smoothie bowl bar case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Gelato Shop Website template use?
Gelato Shop Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Gelato Shop Website template for a client or a business?
The Gelato Shop Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Gelato Shop Website template work on mobile?
Yes. Every Gelato Shop Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Gelato Shop Website on VibeFather](https://vibefather.ai/templates/gelato-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
