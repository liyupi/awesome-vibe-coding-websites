# Craft Brewery Taproom Website

> A screen-print label-art brewery site with a filterable tap list and a flight builder that pours in code.

<a href="https://vibefather.ai/templates/craft-brewery-taproom-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/craft-brewery-taproom-website/5185e329-f3da-4dd2-ad6f-242f896e66ae/webp.0efe73f628.webp" width="100%" alt="Craft Brewery Taproom Website — Brewery Site with Flight Builder built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/craft-brewery-taproom-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Craft Brewery Taproom Website is a single-page site for a small brewery and taproom, styled like the brewery's own can labels: hop green, amber ale and dark stout brown on cream paper, with screen-print textures and label-style hop cones, trucks and paddles drawn in code. The tap list carries twelve invented beers with style, ABV, IBU, tasting notes and a color swatch, filterable by style family and strength. The signature tool is the flight builder: pick any four beers and a drawn flight paddle fills with color-coded tasters in your chosen order, with a summary card of names, styles and pour total. Around it: a food-truck weekly rhythm, weekday-anchored events, a tours booking with party size and slots, a merch grid with code-drawn shirt and glass art, and a friendly age gate that remembers returning visitors. It suits breweries, cideries and taprooms of any size. Five variables swap brewery name, town, head brewer, phone and years; every beer, truck and event is invented sample data.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Retro](../../styles/retro.md), [Hand-drawn](../../styles/hand-drawn.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/craft-brewery-taproom-website?case=5185e329-f3da-4dd2-ad6f-242f896e66ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/craft-brewery-taproom-website/5185e329-f3da-4dd2-ad6f-242f896e66ae/shot_desktop.cb7bf16b09.webp" width="100%" alt="Craft Brewery Taproom Website — Brewery taproom, Millrace, built by GLM-5.3 in ZCode"></a><br>
<b>Brewery taproom, Millrace</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/craft-brewery-taproom-website?case=5185e329-f3da-4dd2-ad6f-242f896e66ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/craft-brewery-taproom-website?case=49ae9980-725e-42eb-9992-4c8f6383b7bc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/craft-brewery-taproom-website/49ae9980-725e-42eb-9992-4c8f6383b7bc/shot_desktop.35e4b64ed7.webp" width="100%" alt="Craft Brewery Taproom Website — Brewery taproom, Forgemont, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Brewery taproom, Forgemont</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/craft-brewery-taproom-website?case=49ae9980-725e-42eb-9992-4c8f6383b7bc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brewery name | Fiddleneck Brewing Co. |
| `[CITY]` | Town | Millrace |
| `[FOUNDER]` | Head brewer | Sana Iqbal |
| `[PHONE]` | Phone | (555) 812-6640 |
| `[EXPERIENCE]` | Years brewing | 6 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add craft-brewery-taproom-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A small cidery: set BRAND and CITY to your orchard taproom, rewrite the twelve beers as ciders with their own styles and swatch colors, and keep the flight builder and tours booking.
- A neighborhood taproom with rotating guest taps: replace the invented beer list with your current pours, update the food-truck rhythm to your real weekly schedule, and point PHONE at the bar line.
- A brewery that runs tours and tastings: fill the tour booking slots with your real times and party sizes, name FOUNDER as your head brewer, and set EXPERIENCE to your years brewing.
- A meadery or wine taproom: re-point the filter families to dry, sweet and sparkling, swap the merch grid for your bottles and glasses, and keep the age gate and flight paddle as they are.

## FAQ

### How does the flight builder on the Craft Brewery Taproom Website template work?
The Craft Brewery Taproom Website template lets a visitor pick any four beers from the tap list, and a code-drawn wooden paddle fills with color-coded tasters in the order they were chosen. A summary card lists each beer's name, style and ABV with the sample pour total. A fifth pick shakes the paddle, and the selection is saved in the browser so it survives a reload.

### How do I change the invented beers, food trucks and events to my own brewery's real ones?
All sample content in the Craft Brewery Taproom Website template sits in one content file, so you replace the twelve invented beers, food trucks, events, tour slots and merch items there. Each beer needs a name, style, family, ABV, IBU, tasting note and swatch color so the filters and flight paddle keep working. Trucks and bands are invented in the demo and should be swapped for your real schedule.

### What do the five variables in the Craft Brewery Taproom Website template control?
The Craft Brewery Taproom Website template uses five variables: BRAND sets the brewery name and the hop-cone logomark, CITY places the taproom in the hero, hours and footer, FOUNDER names the head brewer in the hero and tour copy, PHONE builds the taproom phone link, and EXPERIENCE states the years brewing. Every other headline is written for the default values and should be rewritten when yours differ.

### Can I turn the Craft Brewery Taproom Website template into a cidery or meadery site?
Yes. The Craft Brewery Taproom Website template is built for breweries, cideries and taprooms, and the tap list fields carry over directly: swap beer styles for cider or mead styles, keep the family and strength filters, and set each swatch color to the drink's real tone. The flight builder, food-truck rhythm, tours booking and age gate all work the same way for a cidery.

### How does the age gate behave for returning visitors on the Craft Brewery Taproom Website template?
The Craft Brewery Taproom Website template shows a full-screen cream age gate on the first visit only, with a code-drawn hop cone and two choices. Confirming stores the answer in the browser and fades the gate out, so returning visitors go straight to the page. Choosing not yet swaps in a friendly panel pointing to food trucks and root-beer floats instead of blocking the site.

### How do I build a craft brewery taproom website with AI?
Copy the prompt from this page or run npx vibefather add craft-brewery-taproom-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Craft Brewery Taproom Website demo?
The Brewery taproom, Millrace case was built by GLM-5.3 in ZCode; the Brewery taproom, Forgemont case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Craft Brewery Taproom Website template use?
Craft Brewery Taproom Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Craft Brewery Taproom Website template for a client or a business?
The Craft Brewery Taproom Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Craft Brewery Taproom Website template work on mobile?
Yes. Every Craft Brewery Taproom Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Craft Brewery Taproom Website on VibeFather](https://vibefather.ai/templates/craft-brewery-taproom-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
