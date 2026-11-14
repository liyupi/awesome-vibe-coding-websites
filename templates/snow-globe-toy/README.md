# Snow Globe Toy

> Shake a miniature world, watch the snow settle, and leave a message on its brass base.

<a href="https://vibefather.ai/templates/snow-globe-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/snow-globe-toy/36e48929-b683-4720-90d8-71800c61ef66/webp.7086a7a446.webp" width="100%" alt="Snow Globe Toy — Interactive 3D Snow Globe with Physics built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/snow-globe-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Snow Globe Toy is a single-page interactive keepsake built around a procedural Three.js miniature. Visitors drag the globe in quick arcs, press a shake button, or explicitly enable phone tilt to stir the snow. Each flake slows, drifts downward, and settles onto the tiny landscape. The scene selector switches among a warm cabin, a rocky lighthouse, and an original city without replacing the globe or reloading the page.

The visual treatment combines a deep spruce room, luminous glass, turned walnut, and a brass message plaque. All three worlds are modeled from simple geometry, with warm windows, textured snow, tiny trees, and carefully scaled details. The interface stays quiet and solid around the object rather than covering it in floating cards. A large central canvas makes the globe the first-screen focus on desktop and mobile.

Personalization is immediate: typing a short message redraws the plaque on the front of the base. Scene names, collection title, headline, brand, audience, and default message are centralized variables, so the same toy can become a fireside winter collection or a storybook snow gift. The alternate case demonstrates that content change without altering the renderer.

This template suits creators, designers, educators, and developers who want a small playful experience rather than a conventional landing page. Pointer, touch, keyboard, and button controls provide alternatives to motion sensors. Sensor permission is never requested automatically, reduced-motion behavior remains functional, and a drawn fallback covers unavailable WebGL. Fonts and icons are bundled locally, there are no external models or images, and the finished site is a static build with no account, backend, analytics, or asset requests to third parties.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md), [Glass](../../styles/glass.md), [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, Generative / Canvas, 3D / WebGL |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS + three + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/snow-globe-toy?case=36e48929-b683-4720-90d8-71800c61ef66&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/snow-globe-toy/36e48929-b683-4720-90d8-71800c61ef66/shot_desktop.75d8e41cd3.webp" width="100%" alt="Snow Globe Toy — Fireside winter keepsake, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Fireside winter keepsake</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/snow-globe-toy?case=36e48929-b683-4720-90d8-71800c61ef66&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/snow-globe-toy?case=b58305b1-56c6-4b8a-af11-ababd3bb2cff&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/snow-globe-toy/b58305b1-56c6-4b8a-af11-ababd3bb2cff/shot_desktop.f87c7ca0e9.webp" width="100%" alt="Snow Globe Toy — Storybook snow wishes, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Storybook snow wishes</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/snow-globe-toy?case=b58305b1-56c6-4b8a-af11-ababd3bb2cff&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Keepsake brand | Flurryfield |
| `[COLLECTION_NAME]` | Collection name | The Pocket Winter Collection |
| `[HEADLINE]` | Welcome headline | Shake up a little wonder. |
| `[BASE_MESSAGE]` | Default base message | For your quiet moments |
| `[SCENE_SET]` | Three scene names | Ember Cabin, Beacon Point, Lantern City |
| `[AUDIENCE]` | Audience | daydreamers and creative gift-givers |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add snow-globe-toy` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A boutique greeting card shop: set BRAND and COLLECTION_NAME to your winter line, rename SCENE_SET to your three card scenes, and set BASE_MESSAGE to your shop greeting.
- A museum gift shop: point HEADLINE at your seasonal keepsake, use the lighthouse and city scenes as exhibit themes, and write the plaque message as a collectible edition note.
- A wedding stationer: set BRAND to the couple, rename SCENE_SET to their three shared places, and use BASE_MESSAGE for their names and date-free greeting.
- A design studio portfolio: keep the cabin scene, rename SCENE_SET to three project worlds, and write the helper copy for AUDIENCE as a playful studio introduction.

## FAQ

### How do visitors shake the snow globe on a phone, and does it need motion sensor permission?
Visitors can drag the globe in quick arcs, press the Shake globe button, or tap Enable tilt to use phone motion. The Snow Globe Toy template only shows the tilt button when DeviceOrientationEvent is available on a touch device, and it requests permission only from that button press. If permission is denied or sensors are missing, dragging and the button still work and a plain status message appears.

### Can I put my own message on the brass plaque at the bottom of the snow globe?
Yes. Typing into the message field redraws the brass plaque on the front of the base, up to 28 characters. The Snow Globe Toy template also uses BASE_MESSAGE as a variable, so you can set a default message that appears before anyone types. The plaque text is drawn in Fraunces and updates only when the message changes.

### What are the three scenes inside the snow globe and can I rename them?
The Snow Globe Toy template includes a warm cabin with fir trees and a fence, a lighthouse on rocks with a lantern room, and an original city of narrow towers. The SCENE_SET variable holds three comma-separated names mapped in that cabin, lighthouse, city order, so you can rename them for a collection without changing the models or reloading the page.

### Does the snow globe work for visitors who prefer reduced motion or have no WebGL?
The Snow Globe Toy template respects prefers-reduced-motion: snow starts settled, idle drift and glass shimmer are removed, and Shake globe produces one restrained flurry before the flakes rest. If WebGL fails to start, an inline SVG snow globe fallback keeps scene selection, message editing and a CSS flake burst usable, so the page is never blank.

### Is the Snow Globe Toy template free, and what do I get with Pro?
The Snow Globe Toy template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives members the full prompt and the source code of the demos. The page shows the brief, stack and variables publicly either way.

### How do I build a snow globe toy with AI?
Copy the prompt from this page or run npx vibefather add snow-globe-toy, replace [BRAND], [COLLECTION_NAME], [HEADLINE] and [BASE_MESSAGE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Snow Globe Toy demo?
The Fireside winter keepsake case was built by Kimi K3.1 Pro in Kimi Code; the Storybook snow wishes case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Snow Globe Toy template use?
Snow Globe Toy is a single-page site built with React and Three.js, with drag & physics, generative / canvas and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Snow Globe Toy template for a client or a business?
The Snow Globe Toy prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Snow Globe Toy template work on mobile?
Yes. Every Snow Globe Toy build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Snow Globe Toy on VibeFather](https://vibefather.ai/templates/snow-globe-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
