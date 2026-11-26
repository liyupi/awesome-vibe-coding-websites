# Mechanical Keyboard Configurator <sup>PRO</sup>

> Shape a working keyboard in 3D, hear its switches and compare two builds.

<a href="https://vibefather.ai/templates/mechanical-keyboard-configurator?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/mechanical-keyboard-configurator/80b7609f-06d5-4837-903c-072e7f9833ec/webp.7f62677ecc.webp" width="100%" alt="Mechanical Keyboard Configurator — Interactive 3D Switch and Keycap Studio built by GPT-6.2 Astra and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/mechanical-keyboard-configurator?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A keyboard changes character one component at a time. This interactive workbench lets visitors assemble a mechanical keyboard, turn it under a pair of studio lights and play it before placing a simulated order. The first view presents a complete board. A warm key field and a single orange escape key give the viewer a point of reference as they move from a compact layout to a tenkeyless one.

The parts inspector keeps finish, plate, switch and keycap decisions close to the object. Swatches describe the actual materials on the model, with the price difference alongside each choice. A side view exposes the plate and the profile of the sculpted caps. Visitors can pull up the typing test to hear a linear, tactile or clicky switch. The sound comes from short synthesized envelopes. The test counts the words and errors in the text actually entered.

A build can be saved on the device or shared in a link that reconstructs the same choices for another visitor. A comparison sheet puts two boards, their prices and their differing parts side by side. An itemized local order closes the experience. A keyboard maker can adapt the catalog, material definitions and pricing table in one place. A product designer can use the geometry and finish controls to explore how the same small set of parts reads in different combinations.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
| Style | [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, 3D / WebGL, Micro-interactions |
| Stack | React 19 + Vite + Vanilla CSS + Three.js |
| Pages | 1 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Astra](../../models/gpt-6-2-astra.md) in Codex, <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/mechanical-keyboard-configurator?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/mechanical-keyboard-configurator?case=80b7609f-06d5-4837-903c-072e7f9833ec&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/mechanical-keyboard-configurator/80b7609f-06d5-4837-903c-072e7f9833ec/shot_desktop.3d2beb2841.webp" width="100%" alt="Mechanical Keyboard Configurator — Studio keyboard, built by GPT-6.2 Astra in Codex"></a><br>
<b>Studio keyboard</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Astra in Codex · <a href="https://vibefather.ai/templates/mechanical-keyboard-configurator?case=80b7609f-06d5-4837-903c-072e7f9833ec&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/mechanical-keyboard-configurator?case=7137f71b-db9f-4e94-85dd-5156fa4e8c50&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/mechanical-keyboard-configurator/7137f71b-db9f-4e94-85dd-5156fa4e8c50/shot_desktop.f4f5672b97.webp" width="100%" alt="Mechanical Keyboard Configurator — Foundry keyboard, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Foundry keyboard</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/mechanical-keyboard-configurator?case=7137f71b-db9f-4e94-85dd-5156fa4e8c50&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Keyboard studio | Relay Capworks |
| `[BOARD]` | Board family | Relay One |
| `[COLORWAY]` | Default keycap set | Workshop Cream |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/mechanical-keyboard-configurator?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A custom keyboard builder: set BRAND to your workshop, BOARD to your flagship layout and swap the catalog for your plates, switches and keycap sets.
- A keycap artisan shop: keep the 3D workbench, replace COLORWAY with your latest sculpted set and point the comparison sheet at two of your own colorways.
- A product design studio portfolio: use the geometry and finish controls to show how one set of parts reads across layouts, and link the order flow to a contact form.
- A keyboard retail store: fill the pricing table with your real component prices and let the shared build link double as a wishlist customers send to friends.

## FAQ

### How does the switch sound preview work in the Mechanical Keyboard Configurator template?
The Mechanical Keyboard Configurator template includes a typing test that plays short synthesized sound envelopes for linear, tactile and clicky switches. Visitors type into a text field, hear the switch they selected and see the words and errors counted from what they actually entered. The sound is generated locally in the browser, so no audio files or external services are needed.

### Can visitors save a keyboard build and share it with someone else?
Yes. In the Mechanical Keyboard Configurator template a build can be saved on the visitor's device or packed into a shareable link. Opening that link reconstructs the same layout, finish, plate, switch and keycap choices for the next visitor. A comparison sheet then places two boards, their prices and their differing parts side by side, and an itemized local order closes the flow.

### What can I customize in the Mechanical Keyboard Configurator template for my own keyboard brand?
The Mechanical Keyboard Configurator template is driven by one catalog. Set BRAND, BOARD and COLORWAY to your studio name, board family and default keycap set, then edit the catalog, material definitions and pricing table in one place to match your real parts. Every swatch, section, render and cart snapshot reads from that catalog, so a change to a finish or switch appears throughout the experience.

### Can I use the Mechanical Keyboard Configurator for client work or a commercial keyboard shop?
Commercial and client use of the Mechanical Keyboard Configurator template needs Pro. Pro members see the full prompt and get the source code of the demos. The published brief, stack and variables are visible to everyone, and every DESIGN.md is free for personal, non-commercial use under CC BY-NC 4.0. The template ships as one page built with React, Vite, Vanilla CSS and Three.js.

### Which parts of the Mechanical Keyboard Configurator should I change first?
Start with the catalog: replace the default board family, keycap set and switch options with the parts you actually sell, and align the pricing table so each swatch shows the right difference. Then rewrite the headlines and labels for your brand and check the side view, typing test and comparison sheet with your own combinations. Keep the studio lighting and the single orange escape key as the visual reference point.

### How do I build a mechanical keyboard configurator with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add mechanical-keyboard-configurator, replace [BRAND], [BOARD] and [COLORWAY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Mechanical Keyboard Configurator demo?
The Studio keyboard case was built by GPT-6.2 Astra in Codex; the Foundry keyboard case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Mechanical Keyboard Configurator template use?
Mechanical Keyboard Configurator is a single-page site built with React and Three.js, with drag & physics, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Mechanical Keyboard Configurator template free to use?
Mechanical Keyboard Configurator is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Mechanical Keyboard Configurator template work on mobile?
Yes. Every Mechanical Keyboard Configurator build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Mechanical Keyboard Configurator on VibeFather](https://vibefather.ai/templates/mechanical-keyboard-configurator?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
