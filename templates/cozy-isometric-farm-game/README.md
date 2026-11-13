# Cozy Isometric Farm Game

> Grow a tiny garden through gentle days, with every crop and coin saved in your browser.

<a href="https://vibefather.ai/templates/cozy-isometric-farm-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/cozy-isometric-farm-game/b7da2b77-755c-4009-88b1-d0c437cc2de6/webp.886fac82dd.webp" width="100%" alt="Cozy Isometric Farm Game — Cozy Isometric Farm Game with Day Cycle built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/cozy-isometric-farm-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Cozy Isometric Farm Game is a complete, small-scale browser game built around a 6×6 field rather than a marketing page. The first screen is the playable farm: a warm SVG diorama with distinct soil states, animated crops, a changing sky, and compact controls for tools, seeds, coins, and the current day. Players till grass, plant seeds, water their crops, end the day to advance growth, and harvest ripe produce for coins. A tiny shop turns those coins back into seeds, creating a clear loop that works equally well with a mouse or a tap.

The template suits creators, developers, and indie makers who want a friendly game that can be understood without a tutorial or a backend. React and TypeScript keep the tile state, inventory, crop timing, and shop transactions predictable, while inline SVG and vanilla CSS provide the isometric artwork. Nothing depends on a remote service. Versioned localStorage saving restores the field after a reload, and a deliberate reset flow lets a player start over.

The visual direction uses rounded geometry, textured-looking SVG details, soft valley colors, and short tactile reactions for watering, planting, buying, and harvesting. The day advances only when the player chooses, so the game remains calm and straightforward to test. Keyboard-operable tiles, large touch targets, responsive layouts, and reduced-motion behavior are part of the specification rather than optional additions.

Adapt the default valley farm by changing five content variables: the game brand, farm name, setting, currency label, and three crop names. The alternate lunar-greenhouse case demonstrates how the same mechanics and layout can support a different invented world. Crop definitions, interface copy, notifications, and labels stay centralized in one content file, making further reskinning practical without rewriting the game engine.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Playful](../../styles/playful.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript 5 + Vanilla CSS + inline SVG + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/cozy-isometric-farm-game?case=b7da2b77-755c-4009-88b1-d0c437cc2de6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/cozy-isometric-farm-game/b7da2b77-755c-4009-88b1-d0c437cc2de6/shot_desktop.497423d298.webp" width="100%" alt="Cozy Isometric Farm Game — Valley kitchen garden, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Valley kitchen garden</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/cozy-isometric-farm-game?case=b7da2b77-755c-4009-88b1-d0c437cc2de6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/cozy-isometric-farm-game?case=fb95b6d5-9855-42fe-9801-e06692a44937&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/cozy-isometric-farm-game/fb95b6d5-9855-42fe-9801-e06692a44937/shot_desktop.d767042a7a.webp" width="100%" alt="Cozy Isometric Farm Game — Lunar greenhouse, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Lunar greenhouse</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/cozy-isometric-farm-game?case=fb95b6d5-9855-42fe-9801-e06692a44937&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Game brand | Mossy Acres |
| `[FARM_NAME]` | Farm name | Brindlebrook Farm |
| `[SETTING]` | Setting | a sheltered valley beside a slow river |
| `[CURRENCY]` | Currency label | sun coins |
| `[CROPS]` | Three crop names | Carrot, Turnip, Strawberry |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add cozy-isometric-farm-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A classroom teacher: set BRAND and FARM_NAME to your class garden, rename CROPS to what you grow, and use the shop prices to talk about counting coins.
- A hobby gardening club: set SETTING to your allotment, swap the three crops for your members' favorites, and rename CURRENCY to a club token.
- An indie game maker testing a hook: keep the mechanics, set SETTING to a fictional world, and rewrite the help and dialog copy for that world.
- A museum family activity: set BRAND to the exhibit, use CROPS tied to local produce, and change the introductory copy to match the setting.

## FAQ

### How do I change the crops, farm name and currency in the Cozy Isometric Farm Game?
The Cozy Isometric Farm Game template keeps everything you would rename in one content file: the game brand, farm name, setting, currency label and three crop names. Set BRAND, FARM_NAME, SETTING, CURRENCY and CROPS to your own values, then rewrite the interface copy, notifications and dialog text that mention them. Crop colors and distant scenery adapt to CROPS and SETTING, while the field geometry and mechanics stay as specified.

### Does the Cozy Isometric Farm Game save progress if a player closes the browser?
The Cozy Isometric Farm Game template saves progress in versioned localStorage on the player's own device, so the field, inventory, coins and current day return after a reload. Nothing is sent to a server and no account is needed. A deliberate reset flow lets a player start over, and saved data is validated before it is restored.

### Can I reskin the Cozy Isometric Farm Game into a different world or theme?
Yes. The Cozy Isometric Farm Game template ships an alternate lunar-greenhouse demo that shows the same mechanics and layout supporting a different invented setting. You change the setting, crop names, crop colors and decorative scenery while keeping the palette roles, composition and exact field geometry. The lunar greenhouse demo was built by DeepSeek V4.1 Flash in DeepSeek Harness, and the valley kitchen garden by Kimi K3.1 Pro in Kimi Code.

### What can players actually do in the Cozy Isometric Farm Game?
Players work a 6×6 isometric field with four tools: they till grass, plant seeds, water crops, end the day to advance growth and harvest ripe produce for coins. A small shop turns those coins back into seeds, which closes the loop. The day only moves when the player chooses, so a session stays calm and there is no tutorial or backend to get through.

### How do I get the Cozy Isometric Farm Game prompt and source code?
The Cozy Isometric Farm Game template is a free template, so its prompt and DESIGN.md are available for personal, non-commercial use under CC BY-NC 4.0. Commercial or client use needs Pro, and Pro members also get the full prompt and the source code of the demos. You can add the template to a project with the VibeFather command line.

### How do I build a cozy isometric farm game with AI?
Copy the prompt from this page or run npx vibefather add cozy-isometric-farm-game, replace [BRAND], [FARM_NAME], [SETTING] and [CURRENCY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Cozy Isometric Farm Game demo?
The Valley kitchen garden case was built by Kimi K3.1 Pro in Kimi Code; the Lunar greenhouse case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Cozy Isometric Farm Game template use?
Cozy Isometric Farm Game is a single-page site built with React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Cozy Isometric Farm Game template for a client or a business?
The Cozy Isometric Farm Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Cozy Isometric Farm Game template work on mobile?
Yes. Every Cozy Isometric Farm Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Cozy Isometric Farm Game on VibeFather](https://vibefather.ai/templates/cozy-isometric-farm-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
