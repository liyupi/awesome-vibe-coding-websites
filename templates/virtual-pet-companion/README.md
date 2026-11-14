# Virtual Pet Companion

> Care for an original pixel pet, earn coins in mini-games, and unlock outfits saved on this device.

<a href="https://vibefather.ai/templates/virtual-pet-companion?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/virtual-pet-companion/a2c27a78-f8c4-45bc-b368-d5668767ab28/webp.0112927fb9.webp" width="100%" alt="Virtual Pet Companion — Pixel-Art Virtual Pet with Mini-Games built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/virtual-pet-companion?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Virtual Pet Companion is a playable browser toy built around an original pixel-art pet and its miniature habitat. Feeding, playing, cleaning, and resting produce immediate sprite reactions while hunger, mood, cleanliness, and energy change with elapsed real time. Two short mini-games award coins, and a working wardrobe turns those winnings into wearable accessories. The pet, currency, high scores, outfits, and settings persist locally, so returning visitors can continue caring for the same companion.

This template suits developers, creators, students, and designers who want a compact game project, an interactive portfolio piece, or the starting point for a cozy web toy. It demonstrates a persistent simulation, keyboard and touch controls, canvas gameplay, SVG sprite animation, and responsive interface design without accounts or a backend. The main screen keeps the pet large and the care controls close at hand rather than presenting a marketing landing page.

Silkscreen headings, Nunito interface text, deep plum outlines, warm cream panels, and bright meadow accents establish a friendly retro-handheld character. The habitat, pet states, accessories, and mini-game objects are all drawn in code on integer pixel grids. There are no downloaded character sprites, stock images, branded objects, or external media requests.

Change the brand, pet name, species, habitat, or coin name in one content file and rewrite the supporting copy and artwork to fit. The same care loop works for a garden creature, space animal, tiny robot, or other original companion. Mobile layouts retain large touch targets, reduced-motion preferences are respected, and the complete production site builds to static files with local fonts and assets.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md), [Interactive Toy](../../types/toy.md) |
| Style | [Retro](../../styles/retro.md), [Playful](../../styles/playful.md), [Pixel Art](../../styles/pixel.md) |
| Effects | Generative / Canvas, Micro-interactions |
| Stack | Vite 7 + React 19 + TypeScript 5 + Tailwind CSS 3.4 + custom CSS + lucide-react |
| Pages | 3 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/virtual-pet-companion?case=a2c27a78-f8c4-45bc-b368-d5668767ab28&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/virtual-pet-companion/a2c27a78-f8c4-45bc-b368-d5668767ab28/shot_desktop.6c453759a7.webp" width="100%" alt="Virtual Pet Companion — Moss bunny companion, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Moss bunny companion</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/virtual-pet-companion?case=a2c27a78-f8c4-45bc-b368-d5668767ab28&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/virtual-pet-companion?case=00eabf65-540a-46aa-a6ad-5d0b14e25ad1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/virtual-pet-companion/00eabf65-540a-46aa-a6ad-5d0b14e25ad1/shot_desktop.ec296b346f.webp" width="100%" alt="Virtual Pet Companion — Star cat companion, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Star cat companion</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/virtual-pet-companion?case=00eabf65-540a-46aa-a6ad-5d0b14e25ad1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Virtual pet world name | Pocket Meadow |
| `[PET_NAME]` | Pet name | Bramble |
| `[PET_KIND]` | Pet species | moss bunny |
| `[HABITAT]` | Habitat name | Sunpatch Burrow |
| `[COIN_NAME]` | Currency name | acorns |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add virtual-pet-companion` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A classroom coding project: set BRAND to your course name, make PET_KIND a tiny robot, and use the care meters to teach state and time-based decay.
- A creator's portfolio piece: keep the pixel habitat, rename COIN_NAME to your own currency and link the arcade from your work page as a playable sample.
- A garden-themed cozy toy: set HABITAT to a greenhouse, make PET_KIND a snail and rewrite snack names and welcome messages to match.
- A space animal companion: change PET_NAME and PET_KIND to an original creature, restyle the habitat background and swap outfit names for space gear.

## FAQ

### How does the virtual pet's care simulation work in the Virtual Pet Companion template?
The Virtual Pet Companion template tracks four meters — hunger, mood, cleanliness and energy — as numbers from 0 to 100. Feeding, playing, cleaning and resting change them instantly and trigger sprite reactions, while all four decay with real elapsed time, including time the page was closed. The pet never dies or gets ill; at zero it shows a tired sprite and a care prompt.

### What can I change with the BRAND, PET_NAME, PET_KIND, HABITAT and COIN_NAME variables?
The Virtual Pet Companion template resolves its wordmark, document title, storage prefix, pet name, species, habitat and currency from five variables: BRAND, PET_NAME, PET_KIND, HABITAT and COIN_NAME. Change them in the content file and the welcome messages, care reactions, snack names, game rewards and prices follow. The species change also means redrawing the base sprite to match.

### Does the Virtual Pet Companion save progress between visits?
The Virtual Pet Companion template saves the pet's meters, coin balance, owned and equipped outfits, high scores and settings in versioned local storage on the visitor's own device. When someone returns, elapsed decay is applied once and a single 'While you were away' summary appears if a meter changed. There are no accounts and no backend, so progress stays on that browser.

### What mini-games and outfits are included in the Virtual Pet Companion template?
The Virtual Pet Companion template includes two playable mini-games on one responsive canvas and a wardrobe of six wearable items. Both games award the template's coin currency, and coins buy outfits that appear on the pet. High scores persist locally. The arcade and wardrobe are separate hash views that share the same live pet state as the home screen.

### Is the Virtual Pet Companion template free to use for a personal project?
The Virtual Pet Companion template is a free template: its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also unlocks the full prompt and demo source code. The template builds to static files with local fonts and assets, so it can be hosted anywhere that serves static sites.

### How do I build a virtual pet companion with AI?
Copy the prompt from this page or run npx vibefather add virtual-pet-companion, replace [BRAND], [PET_NAME], [PET_KIND] and [HABITAT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Virtual Pet Companion demo?
The Moss bunny companion case was built by Kimi K3.1 Pro in Kimi Code; the Star cat companion case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Virtual Pet Companion template use?
Virtual Pet Companion is a 3-page site built with React and Tailwind CSS, with generative / canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Virtual Pet Companion template for a client or a business?
The Virtual Pet Companion prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Virtual Pet Companion template work on mobile?
Yes. Every Virtual Pet Companion build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Virtual Pet Companion on VibeFather](https://vibefather.ai/templates/virtual-pet-companion?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
