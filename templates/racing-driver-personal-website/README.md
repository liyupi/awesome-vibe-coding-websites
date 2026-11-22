# Racing Driver Personal Website <sup>PRO</sup>

> Interactive racing driver site with a draggable 3D helmet morphing across 3 season liveries, globe calendar, and live lap telemetry.

<a href="https://vibefather.ai/templates/racing-driver-personal-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/racing-driver-personal-website/6152aaa5-b528-4309-b8fd-a7f3b97f9041/webp.97e75531c4.webp" width="100%" alt="Racing Driver Personal Website — Interactive 3D Helmet Racing Driver Site built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/racing-driver-personal-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

An editorial, gesture-driven personal brand website for a fictional young racing driver. Spin the sculpted Three.js 3D full-face helmet in the hero and watch it smoothly morph between three distinct season liveries as you scroll or switch editions. Explore the Season Dashboard (interactive code-drawn globe circuit calendar, round-by-round results table, and cumulative points chart), scrub a live lap replay around a Grand Prix circuit with real-time speed, gear, RPM, and G-force telemetry, inspect magnetic behind-the-scenes paddock cards, browse fictional partners, add replica helmets and merch to a local demo store cart, and generate a personalized digital Fan Club pass saved to localStorage.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Portfolio](../../types/portfolio.md), [3d Experience](../../types/3d-experience.md) |
| Style | [Dark](../../styles/dark.md), [Editorial](../../styles/editorial.md) |
| Effects | 3D / WebGL, Scroll Scrub |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/racing-driver-personal-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/racing-driver-personal-website?case=6152aaa5-b528-4309-b8fd-a7f3b97f9041&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/racing-driver-personal-website/6152aaa5-b528-4309-b8fd-a7f3b97f9041/shot_desktop.7c5e9a1ded.webp" width="100%" alt="Racing Driver Personal Website — Kaelen Vance #47 (Voltara Motorsport), built by Gemini 4 Neon in Antigravity"></a><br>
<b>Kaelen Vance #47 (Voltara Motorsport)</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/racing-driver-personal-website?case=6152aaa5-b528-4309-b8fd-a7f3b97f9041&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/racing-driver-personal-website?case=0b4f34d2-c75f-4aaf-bef6-5e4a04f3c94d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/racing-driver-personal-website/0b4f34d2-c75f-4aaf-bef6-5e4a04f3c94d/shot_desktop.4882954d65.webp" width="100%" alt="Racing Driver Personal Website — Tomasz Lind #19 (Nordring Racing), built by GPT-6.2 Sol in Codex"></a><br>
<b>Tomasz Lind #19 (Nordring Racing)</b><br>
<sub>Built by <b>GPT-6.2 Sol</b> in Codex · <a href="https://vibefather.ai/templates/racing-driver-personal-website?case=0b4f34d2-c75f-4aaf-bef6-5e4a04f3c94d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[DRIVER_NAME]` | Driver Name | Kaelen Vance |
| `[CAR_NUMBER]` | Racing Number | #47 |
| `[TEAM_NAME]` | Fictional Team Name | Voltara Motorsport |
| `[SERIES_NAME]` | Fictional Series Name | Apex World Touring |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/racing-driver-personal-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A karting or junior formula driver: set DRIVER_NAME, CAR_NUMBER, TEAM_NAME and SERIES_NAME, then swap the three helmet liveries and the eight-track calendar for your own season.
- A sim racing creator: keep the 3D helmet and lap telemetry, replace the results table with your league standings and point the merch store at your own replica gear.
- A motorsport team or sponsor pitch: use the paddock cards and partner strip for your roster and backers, and rewrite the dashboard copy around the team's season.
- A racing school or experience day: rename the Fan Club pass as a booking pass, list your circuits in the globe calendar and set the store to helmets and driving gear.

## FAQ

### What is the draggable 3D helmet in the Racing Driver Personal Website template and how does it morph?
The Racing Driver Personal Website template builds a full-face racing helmet entirely in Three.js code, with no model files. Visitors drag to spin it in the hero, and it morphs between three season liveries, Cobalt Velocity, Safety Flare and Midnight Carbon, as they scroll or click the livery chips. The helmet carries the CAR_NUMBER decal and racing stripes drawn as textures, so changing the number changes the helmet.

### How do I change the driver name, team and car number in this racing driver template?
The Racing Driver Personal Website template exposes four variables: DRIVER_NAME, CAR_NUMBER, TEAM_NAME and SERIES_NAME. Set them to your own driver, number and fictional team and series, then rewrite the headlines, paragraphs and labels in the content file so the copy matches. The helmet number, merch, results table and Fan Club pass all read from those same values.

### Can I use the Racing Driver Personal Website template for a real driver or a client site?
Yes, with Pro. The Racing Driver Personal Website template is a Pro template: its brief, stack and variables are public, and Pro members get the full prompt plus the source code of the demos. Free template prompts and every DESIGN.md are licensed CC BY-NC 4.0 for personal, non-commercial use, so commercial or client work needs Pro. The demo content is fictional, so replace the driver, team, series, partners and store items with real ones.

### What does the Season Dashboard and lap telemetry section include in this template?
The Season Dashboard in the Racing Driver Personal Website template has an interactive code-drawn globe circuit calendar across eight fictional tracks, a round-by-round results table and a cumulative points chart. The On Track section scrubs a lap replay around a code-drawn Grand Prix circuit with live Speed, Gear, RPM and G-Force readouts, driven by scroll or a slider.

### How do the merch cart and Fan Club pass work in the Racing Driver Personal Website template?
The Racing Driver Personal Website template includes a Replica Helmet and Merch store with a working local cart drawer, so visitors add items and check the cart without a backend. A Fan Club generator creates a personalized digital pass and saves it to localStorage in the visitor's browser. Both are front-end demos, so connect the cart to your own checkout and the pass to a real signup list before going live.

### How do I build a racing driver personal website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add racing-driver-personal-website, replace [DRIVER_NAME], [CAR_NUMBER], [TEAM_NAME] and [SERIES_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Racing Driver Personal Website demo?
The Kaelen Vance #47 (Voltara Motorsport) case was built by Gemini 4 Neon in Antigravity; the Tomasz Lind #19 (Nordring Racing) case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Racing Driver Personal Website template use?
Racing Driver Personal Website is a single-page site built with Three.js, React, Vite and Webgl, with 3d / webgl and scroll scrub. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Racing Driver Personal Website template free to use?
Racing Driver Personal Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Racing Driver Personal Website template work on mobile?
Yes. Every Racing Driver Personal Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Racing Driver Personal Website on VibeFather](https://vibefather.ai/templates/racing-driver-personal-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
