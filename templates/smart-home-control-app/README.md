# Smart Home Control App <sup>PRO</sup>

> Dark frosted connected-home PWA with live lighting sliders, circular thermostat dial, and scenes.

<a href="https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/smart-home-control-app/ce8adbe3-08d5-491b-a87c-0d63812d7638/webp.9073cb8b79.webp" width="100%" alt="Smart Home Control App — Dark Connected Smart Home Control PWA built by Gemini 4 Neon"></a>

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
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
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

- An IoT hardware startup: set the brand and home name to your product, then rework the room cards to show your own device types and sensor readouts.
- A smart-home installer: rename the residence to the client's home, keep the Scenes for their routines and adjust the Energy view to their tariff.
- A property manager: use the residence name for each unit, swap rooms for the building's zones and link the lock controls to your access process.
- A connected-home design portfolio: keep the dark frosted dashboard, change the greeting to your studio name and show the Scene cascades as interaction studies.

## FAQ

### How do I change the brand name, home name and resident greeting in the Smart Home Control App?
The Smart Home Control App template keeps its copy in one content file, so you edit the brand name (default LumaNest), the residence name (default Alder Ridge Loft) and the resident greeting (default Marcus Vance) in a single place rather than hunting through components. The same file holds the thermostat setpoint, the air quality badge and every headline, so swap those values and the header, climate card and dashboard text follow.

### Can the Smart Home Control App template be used for a client project or a real product?
The Smart Home Control App template is a Pro template. Commercial and client use needs Pro, and Pro members get the full prompt plus the demo source code. Free templates' prompts and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, but this one is Pro, so treat it as a paid starting point for a real connected-home product or a client build.

### What do the lighting sliders and thermostat dial actually do in the demo?
In the Smart Home Control App demo, brightness and color-temperature sliders emit live warm-amber to cool-cyan glow feedback on each room card, and the circular SVG thermostat dial can be dragged or stepped to set a target temperature across Eco, Heat and Cool modes. Room devices, locks, blinds and the four Scenes all update on screen, and every toggle persists in localStorage so a reload keeps your state.

### How do the Scenes and the Energy view work in the Smart Home Control App?
The Smart Home Control App template ships four one-tap Scenes (Morning, Focus, Cinema and Sleep) that cascade coordinated changes across lights, smart locks, motorized blinds and climate at once. The Energy view shows an interactive SVG area chart of hourly kilowatt draw with a per-room load breakdown. Scene state and device toggles persist in localStorage, so the demo behaves like a controller rather than a static mockup.

### How do I add the Smart Home Control App to my project with the VibeFather command?
Run npx vibefather add smart-home-control-app to pull the Smart Home Control App template into your project. It is built with Vite, React, TypeScript and Tailwind CSS and produces static files with no backend or external APIs, so you can host the built output anywhere that serves static files. Pro membership is required, and the demo was built by Gemini 4 Neon with Antigravity.

### How do I build a smart home control app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add smart-home-control-app, replace [BRAND], [HOME_NAME], [RESIDENT_NAME] and [DEFAULT_TEMP] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Smart Home Control App demo?
The Connected loft smart home controller case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Smart Home Control App template use?
Smart Home Control App is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Smart Home Control App template free to use?
Smart Home Control App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Smart Home Control App template work on mobile?
Yes. Every Smart Home Control App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Smart Home Control App on VibeFather](https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
