# Harbor Town Delivery Game <sup>PRO</sup>

> Drive a tiny van, follow the tram lines, and finish six cozy harbor deliveries before time runs out.

<a href="https://vibefather.ai/templates/harbor-town-delivery-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/harbor-town-delivery-game/cd7e826b-d52d-420c-8e07-454df619c14a/webp.e077af5ca0.webp" width="100%" alt="Harbor Town Delivery Game — Cozy Low-Poly 3D Harbor Driving Game built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/harbor-town-delivery-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Harbor Town Delivery Game is a complete, single-screen browser game rather than a landing page with a 3D decoration. Players steer a small delivery van through a coastal miniature, collect parcels at the depot, and reach six glowing doorways before the shift ends. Tram rails, street signs, a route line, and a live minimap make navigation part of the play, while score, timer, pause, restart, and results states give it a finished game loop.

Kimi-inspired as a broad 3D-game reference, the template uses an original town plan, vehicle, interface, palette, and English copy. Warm low-poly buildings, flat-shaded water, a softly following camera, wheel motion, delivery pulses, and optional synthesized sound keep the scene tactile without downloaded models or image assets. The layout is designed for desktop and portrait mobile play, with keyboard controls, simultaneous multi-touch buttons, clear action prompts, and reduced-motion behavior.

This template suits indie hackers, developers, and designers who want a playable 3D example that can be built as static files. Change the brand, town name, setting, delivery item, or round duration in one content file; the builder rewrites place names, objectives, and scene dressing to fit. An alpine bakery route provides a second content direction without changing the underlying road system or mission logic. The prompt also fixes collision behavior, scoring, route finding, adaptive rendering quality, sound cues, and accessible overlays, so independent builds preserve the same playable structure rather than only a similar screenshot. Everything runs locally with Three.js and TypeScript, with no backend, accounts, tracking, external APIs, or asset-hosting dependency.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Playful](../../styles/playful.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript 5 + Vanilla CSS + three + lucide |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/harbor-town-delivery-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/harbor-town-delivery-game?case=cd7e826b-d52d-420c-8e07-454df619c14a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/harbor-town-delivery-game/cd7e826b-d52d-420c-8e07-454df619c14a/shot_desktop.b62cc6c1d9.webp" width="100%" alt="Harbor Town Delivery Game — Bellbuoy Parcel Run, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Bellbuoy Parcel Run</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/harbor-town-delivery-game?case=cd7e826b-d52d-420c-8e07-454df619c14a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/harbor-town-delivery-game?case=94917aae-631b-4417-bd3a-3986e1ff2b8e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/harbor-town-delivery-game/94917aae-631b-4417-bd3a-3986e1ff2b8e/shot_desktop.4213f6b13d.webp" width="100%" alt="Harbor Town Delivery Game — Fernfall Bakery Route, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Fernfall Bakery Route</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/harbor-town-delivery-game?case=94917aae-631b-4417-bd3a-3986e1ff2b8e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Delivery company | Copper Quay Couriers |
| `[TOWN_NAME]` | Town name | Bellbuoy Bay |
| `[SETTING]` | Setting | harbor town |
| `[DELIVERY_ITEM]` | Delivery item | parcels |
| `[ROUND_SECONDS]` | Shift duration | 180 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/harbor-town-delivery-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local bakery: set BRAND to your shop, TOWN_NAME to your neighborhood, DELIVERY_ITEM to pastries and swap destination names for your regulars' streets.
- A coastal tourism board: keep the harbor SETTING, rename the six doorways after piers and lighthouses, and use the minimap as a playful town map.
- An indie game portfolio: set BRAND to your studio, shorten ROUND_SECONDS for a quick demo, and point the results copy at your other playable projects.
- A team-building icebreaker: use a fictional TOWN_NAME, set DELIVERY_ITEM to office supplies, and share the static build for a timed lunch-break challenge.

## FAQ

### How do I change the town name, brand and delivery item in the Harbor Town Delivery Game template?
The Harbor Town Delivery Game template keeps every proper noun in one content file. Set BRAND to your delivery company, TOWN_NAME to your invented town, SETTING to the world theme, DELIVERY_ITEM to the lowercase plural cargo noun and ROUND_SECONDS to the shift length. The builder then rewrites place names, signs, objectives and scene dressing to match, while the road graph, six-job structure and scoring stay the same.

### How long does a round last and can I make the delivery shift shorter or longer?
A round of the Harbor Town Delivery Game template lasts as long as ROUND_SECONDS says, and the default is 180 seconds. The prompt parses that value as an integer and clamps it between 60 and 600, so you can shorten the shift for a quick arcade feel or stretch it for a more relaxed route. Six deliveries must still be completed before the timer runs out.

### Can I use the Harbor Town Delivery Game for a client project or commercial site?
Commercial and client use of the Harbor Town Delivery Game requires Pro. The template is a Pro template, so its brief, stack and variables are public while the full prompt and the demo source code come with Pro membership. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### What controls does the Harbor Town Delivery Game use on desktop and touch devices?
The Harbor Town Delivery Game template is built for keyboard controls on desktop and simultaneous multi-touch buttons on portrait mobile. It includes clear action prompts, a pause and restart flow, and reduced-motion behavior, so the same driving and delivery loop works on both. The camera follows the van softly, and the live minimap, route line and tram rails help players navigate without reading instructions twice.

### Does the Harbor Town Delivery Game need a backend, accounts or downloaded 3D models?
No. The Harbor Town Delivery Game template runs entirely locally with Three.js and TypeScript and builds to static files, with no backend, accounts, tracking, external APIs or asset-hosting dependency. All buildings, water, the van and the interface are generated in code, and sound is synthesized, so there are no downloaded models or image assets to host.

### How do I build a harbor town delivery game with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add harbor-town-delivery-game, replace [BRAND], [TOWN_NAME], [SETTING] and [DELIVERY_ITEM] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Harbor Town Delivery Game demo?
The Bellbuoy Parcel Run case was built by Kimi K3.1 Pro in Kimi Code; the Fernfall Bakery Route case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Harbor Town Delivery Game template use?
Harbor Town Delivery Game is a single-page site built with Three.js, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Harbor Town Delivery Game template free to use?
Harbor Town Delivery Game is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Harbor Town Delivery Game template work on mobile?
Yes. Every Harbor Town Delivery Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Harbor Town Delivery Game](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Harbor Town Delivery Game on VibeFather](https://vibefather.ai/templates/harbor-town-delivery-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
