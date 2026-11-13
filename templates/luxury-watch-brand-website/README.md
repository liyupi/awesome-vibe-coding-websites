# Luxury Watch Brand Website <sup>PRO</sup>

> A quiet-luxury watch brand site with a craft scroll story and a dial-and-strap configurator.

<a href="https://vibefather.ai/templates/luxury-watch-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/luxury-watch-brand-website/eb8a2603-0e64-4ebf-b192-47237585a967/webp.68ade610de.webp" width="100%" alt="Luxury Watch Brand Website — Watch Brand with Configurator built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/luxury-watch-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page site for an independent luxury watch brand, in black, steel and one champagne accent. The first screen is an extreme macro of an original dress-watch dial — champagne indices catching a single studio light on near-black — with a refined serif headline and mono technical labels beneath it. The landing page then earns the price: an editorial house strip with quiet sample facts, a craft section that steps through the movement part by part as you scroll — mainspring, gear train, escapement, balance wheel — each with a diagram drawn in code and annotation lines that draw themselves in, and a collection grid of three model lines, each with its own macro photograph and mono spec row. The second page is a query-routed model detail: without a query it opens on the first model, and its configurator live-updates a watch drawn entirely in SVG — dial options recolor the face, strap options restyle the band, the sample price recomputes — next to a mono specification table and a viewing request link. A boutique appointment form with an invented-city select saves to local storage only and says so. Marcellus carries the display voice over Jost text and IBM Plex Mono spec labels, on hairline rules rather than cards. Motion is slow and expensive-feeling — 800ms reveals, gentle hero parallax, one softly oscillating balance wheel — with calm static fallbacks under prefers-reduced-motion. Every watch design is original and generic; no real maker, model or dial text appears anywhere. Swap brand, origin, entry price and service promise in one content file.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Luxury](../../styles/luxury.md), [Dark](../../styles/dark.md) |
| Effects | Parallax, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/luxury-watch-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/luxury-watch-brand-website?case=eb8a2603-0e64-4ebf-b192-47237585a967&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/luxury-watch-brand-website/eb8a2603-0e64-4ebf-b192-47237585a967/shot_desktop.3c2b9d2565.webp" width="100%" alt="Luxury Watch Brand Website — Luxury watch brand, built by GLM-5.3 in ZCode"></a><br>
<b>Luxury watch brand</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/luxury-watch-brand-website?case=eb8a2603-0e64-4ebf-b192-47237585a967&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/luxury-watch-brand-website?case=55a10bb9-4f4d-4247-89cc-627bde49cbde&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/luxury-watch-brand-website/55a10bb9-4f4d-4247-89cc-627bde49cbde/shot_desktop.5f5836625f.webp" width="100%" alt="Luxury Watch Brand Website — Diver watch microbrand, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Diver watch microbrand</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/luxury-watch-brand-website?case=55a10bb9-4f4d-4247-89cc-627bde49cbde&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Averlind |
| `[ORIGIN]` | Workshop town | Greysen |
| `[PRICE_FROM]` | Entry price | $4,900 |
| `[WARRANTY]` | Service promise | 8 years |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/luxury-watch-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An independent microbrand: set BRAND and ORIGIN to your label and workshop, then replace the three collection models, their dial and strap options and spec rows in the content file.
- A vintage watch dealer: keep the macro dial hero, swap the craft scroll steps for restoration stages and point the viewing request link at your appointment calendar.
- A leather strap maker: use the configurator with strap options only, set PRICE_FROM to your entry band and rewrite the movement section around leather and stitching.
- A design studio pitching a watch client: set BRAND to the client's name, replace the boutique cities with their stockists and keep the SVG configurator as the working prototype.

## FAQ

### How does the watch configurator on the Luxury Watch Brand Website work?
The model detail page draws a watch entirely in SVG and updates it live as you pick options. Dial choices (charcoal, champagne, slate) recolor the face, strap choices (black calf, chestnut calf, steel) restyle the band, and the sample price recomputes from the base price plus each option's delta. A mono specification table and a viewing request link sit beside it.

### What do I need to change first in the Luxury Watch Brand Website template?
Swap the four variables in the content file: BRAND for the wordmark and page titles, ORIGIN for the workshop town, PRICE_FROM for the entry price, and WARRANTY for the service promise. The copy is written for the defaults, so rewrite every headline, label and paragraph for your own values at the same length and tone. The collection models, boutiques and cities also live in the same content file.

### Can I use the Luxury Watch Brand Website template for a client project?
Commercial and client use of the Luxury Watch Brand Website template needs Pro. The template is a Pro one: its brief, stack and variables are public, the full prompt and the demo source code come with Pro membership. Free templates' prompts and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0.

### What is the craft scroll story on the Luxury Watch Brand Website?
The landing page steps through the movement part by part as you scroll: mainspring, gear train, escapement and balance wheel. Each part gets a diagram drawn in code, with mono annotation labels connected by thin leader lines that draw themselves in. Reveals run at 800ms with gentle hero parallax, and prefers-reduced-motion swaps them for calm static fallbacks.

### Where does the boutique appointment form send the data on the Luxury Watch Brand Website?
The boutique appointment form on the Luxury Watch Brand Website saves to local storage only, and the form says so. It has an invented-city select and no backend, server code or external APIs behind it. To receive real requests, connect the form to your own mailing list or booking service, or point the viewing request link at your own contact channel.

### How do I build a luxury watch brand website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add luxury-watch-brand-website, replace [BRAND], [ORIGIN], [PRICE_FROM] and [WARRANTY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Luxury Watch Brand Website demo?
The Luxury watch brand case was built by GLM-5.3 in ZCode; the Diver watch microbrand case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Luxury Watch Brand Website template use?
Luxury Watch Brand Website is a 2-page site built with Tailwind CSS, Motion and React, with parallax, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Luxury Watch Brand Website template free to use?
Luxury Watch Brand Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Luxury Watch Brand Website template work on mobile?
Yes. Every Luxury Watch Brand Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Luxury Watch Brand Website on VibeFather](https://vibefather.ai/templates/luxury-watch-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
