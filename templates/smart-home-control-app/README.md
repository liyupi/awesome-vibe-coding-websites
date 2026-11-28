# Smart Home Control App <sup>PRO</sup>

> Dark frosted connected-home PWA with live lighting sliders, circular thermostat dial, and scenes.

<a href="https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/smart-home-control-app/ca93c67d-0aff-4829-8ddc-fd85de297421/webp.eb8536f46f.webp" width="100%" alt="Smart Home Control App — Dark Connected Smart Home Control PWA built by GLM-5.4 and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Smart Home Control App is a tactile, dark-slate connected home controller PWA engineered for real-time room control across phones, tablets, and desktops. Built with true three-breakpoint responsiveness and zero fake phone shells, mobile screens under 768px display a fixed bottom four-tab bar (Home, Rooms, Scenes, Energy) with horizontal room pills, while larger screens open into a persistent left navigation rail and an architectural bento dashboard. Residents control Living Room, Bedroom, Kitchen, and Studio devices directly: smooth brightness and color-temperature light sliders emit live ambient warm-amber (#FBBF24) to cool-cyan (#38BDF8) glow feedback on each card, while an interactive circular SVG thermostat dial lets users drag or step target temperature across Eco, Heat, and Cool climate modes. One-tap automation Scenes—Morning, Focus, Cinema, and Sleep—cascade coordinated state changes across lights, smart locks, motorized blinds, and climate simultaneously. An Energy view visualizes real-time-feeling hourly kilowatt draw in an interactive SVG area chart paired with per-room load breakdown, and every toggle persists cleanly in localStorage. Customize the home brand, residence name, resident greeting, and climate unit inside src/content.ts.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Mobile App](../../types/mobile-app.md) |
| Style | [Bento Grid](../../styles/bento.md), [Glass](../../styles/glass.md), [Dark](../../styles/dark.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode, <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/smart-home-control-app?case=ca93c67d-0aff-4829-8ddc-fd85de297421&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/smart-home-control-app/ca93c67d-0aff-4829-8ddc-fd85de297421/shot_desktop.be62ee32bb.webp" width="100%" alt="Smart Home Control App — Coastal timber cabin home automation, built by GLM-5.4 in ZCode"></a><br>
<b>Coastal timber cabin home automation</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/smart-home-control-app?case=ca93c67d-0aff-4829-8ddc-fd85de297421&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/smart-home-control-app?case=ce8adbe3-08d5-491b-a87c-0d63812d7638&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/smart-home-control-app/ce8adbe3-08d5-491b-a87c-0d63812d7638/shot_desktop.e21a44f987.webp" width="100%" alt="Smart Home Control App — Connected loft smart home controller, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Connected loft smart home controller</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/smart-home-control-app?case=ce8adbe3-08d5-491b-a87c-0d63812d7638&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Smart home app name | LumaNest |
| `[HOME_NAME]` | Residence name | Alder Ridge Loft |
| `[RESIDENT_NAME]` | Resident greeting name | Marcus Vance |
| `[DEFAULT_TEMP]` | Initial thermostat setpoint | 71°F |
| `[AIR_QUALITY]` | Indoor air quality badge | AQI 18 · Pure |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A smart-lighting brand: set BRAND to your product line and HOME_NAME to a showroom, then relabel the four rooms to match your fixture zones and keep the brightness and color-temperature sliders.
- An IoT design studio: use the Smart Home Control App as a client prototype, rename the Scenes to real routines and replace the hourly Energy data with your device telemetry.
- A property manager for serviced apartments: set HOME_NAME to each unit, swap the resident greeting and use the lock and blinds toggles to demo guest access control.
- A home-automation installer: change the rooms to the rooms you fit most and set DEFAULT_TEMP and AIR_QUALITY to your typical readings so the dashboard feels like the customer's home.

## FAQ

### How do I change the home name, resident greeting and thermostat default in the Smart Home Control App?
The Smart Home Control App template keeps its editable values in one content file: set BRAND to your connected-home app name, HOME_NAME to the residence shown in the header and climate card, RESIDENT_NAME to the greeting name, DEFAULT_TEMP to the starting thermostat setpoint and AIR_QUALITY to your indoor air badge. If your values differ from the defaults, rewrite the surrounding copy to match.

### How do the lighting sliders and thermostat dial work in the Smart Home Control App?
The Smart Home Control App template gives each room card brightness and color-temperature sliders that shift a live glow from warm amber to cool cyan as you drag. The circular SVG thermostat dial can be dragged or stepped through Eco, Heat and Cool modes with arc feedback, and every light, lock, blind and climate change is saved in localStorage so the state survives a reload.

### Can I use the Smart Home Control App template for a client project or a real product prototype?
The Smart Home Control App template is a Pro template, so commercial and client use requires Pro. Pro members see the full prompt and get the demo source code, while free visitors can read the brief, stack and variables. The demo is a front-end prototype with no backend or external APIs, so connect your own device data before shipping it to a client.

### What do the Scenes and Energy views include in the Smart Home Control App?
The Smart Home Control App template ships with four one-tap Scenes named Morning, Focus, Cinema and Sleep, each cascading coordinated changes across lights, smart locks, motorized blinds and climate at once. The Energy view pairs an interactive SVG area chart of hourly kilowatt draw with a per-room load breakdown, so the dashboard reads like a working home rather than a static mockup.

### How do I build a smart home control app with AI using this prompt?
Run the Smart Home Control App prompt in an AI coding agent such as Claude Code, Codex, Cursor or Gemini CLI, or add the template with npx vibefather add smart-home-control-app. The prompt asks for a Vite, React, TypeScript and Tailwind build with four rooms, device state in localStorage and true breakpoint layouts, so the agent produces a working controller instead of a phone mockup.

### How do I build a smart home control app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add smart-home-control-app, replace [BRAND], [HOME_NAME], [RESIDENT_NAME] and [DEFAULT_TEMP] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Smart Home Control App demo?
The Coastal timber cabin home automation case was built by GLM-5.4 in ZCode; the Connected loft smart home controller case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Smart Home Control App template use?
Smart Home Control App is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Smart Home Control App template free to use?
Smart Home Control App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Smart Home Control App template work on mobile?
Yes. Every Smart Home Control App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Smart Home Control App on VibeFather](https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
