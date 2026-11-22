# Pathfinding Algorithms Visualizer

> Interactive grid, hex, maze, and city-road pathfinding lab comparing BFS, Dijkstra, Greedy Best-First, and A* with live pseudocode.

<a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/pathfinding-algorithms-visualizer/e1271149-f631-4fa3-bd29-ac3429803200/webp.3772876593.webp" width="100%" alt="Pathfinding Algorithms Visualizer — Interactive Pathfinding Algorithms Visualizer built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/pathfinding-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

An interactive computer-science monograph and sandbox showing how maps and games find shortest paths. Paint Walls, Mud (cost 3), and Water (cost 6), toggle between Square Grid and Hex Grid, drag Start and Goal pins, and run BFS, Dijkstra, Greedy Best-First, and A* individually or side-by-side with step controls, frontier teal (#2BB3A3) and visited lavender (#B9A7FF) heatmaps, glowing orange paths (#FF7A1A), live explored-node and path-cost counters, and live line-highlighted pseudocode. Includes dedicated views for Heuristics Compared (Manhattan, Euclidean, Chebyshev), a Recursive Maze Generator, and Weighted Routing on a Code-Drawn City Road Map.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Tool](../../types/tool.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md), [Clean](../../styles/clean.md) |
| Effects | Micro-interactions, Interactive Canvas |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 4 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?case=e1271149-f631-4fa3-bd29-ac3429803200&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/pathfinding-algorithms-visualizer/e1271149-f631-4fa3-bd29-ac3429803200/shot_desktop.8cbd8f9bac.webp" width="100%" alt="Pathfinding Algorithms Visualizer — GraphCraft Lab (Square &amp; Hex Edition), built by Gemini 4 Neon in Antigravity"></a><br>
<b>GraphCraft Lab (Square &amp; Hex Edition)</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?case=e1271149-f631-4fa3-bd29-ac3429803200&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Lab Name | GraphCraft Lab |
| `[SUBTITLE]` | Subtitle | How Maps & Games Find the Shortest Route |
| `[CITY_NAME]` | Fictional City Map Name | Northbridge |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add pathfinding-algorithms-visualizer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A university algorithms course: set [BRAND] to the module name and [SUBTITLE] to the week's topic, then paint obstacle presets that match each lecture's exercise.
- A game studio onboarding deck: rename [BRAND] to your studio and use the Square Grid sandbox to show how A* handles weighted terrain in your level design.
- A coding bootcamp demo day: set [CITY_NAME] to your city and use the road map view to walk visitors through A* versus Dijkstra on a familiar street network.
- An educator's classroom page: keep the Maze view as a warm-up, then have students compare Manhattan and Euclidean heuristics on the same obstacle field.

## FAQ

### Is the Pathfinding Algorithms Visualizer template free to use?
The Pathfinding Algorithms Visualizer template is free for personal, non-commercial use under CC BY-NC 4.0. The prompt and every DESIGN.md are free to read and adapt for learning. Commercial or client work, including source code of the demos, needs a VibeFather Pro license. You can install it with the VibeFather CLI command and start editing the four views right away.

### What can I change first in the Pathfinding Algorithms Visualizer template to make it my own?
Start with the four variables: set [BRAND] to your lab or course name, [SUBTITLE] to the question your site answers, and [CITY_NAME] to the fictional city used in the road map view. Then rewrite the headlines and explainer copy for your audience. The grid, hex, maze and city views keep their layout and colors, so the fastest path to a distinct site is new copy and new obstacle presets.

### How do I add a wine club signup to a winery website built with AI?
This page is about the Pathfinding Algorithms Visualizer, not a winery site. The template has no signup form or mailing list section, so a wine club form would need to be added separately. If you want a winery site, look at the winery and restaurant templates on VibeFather instead. For this template, the useful edits are the four views, the brush costs and the algorithm labels.

### Which pathfinding algorithms does the Pathfinding Algorithms Visualizer template demonstrate?
The Pathfinding Algorithms Visualizer template demonstrates BFS, Dijkstra, Greedy Best-First and A*, each runnable alone or in Side-by-Side Comparison mode on the same map. The Heuristics Compared view adds Manhattan, Euclidean and Chebyshev distance with selectable weight multipliers. The Maze view generates Recursive Backtracker, Prim's and weighted terrain mazes, and the City view races A* against Dijkstra on a code-drawn road network.

### How do I turn the Pathfinding Algorithms Visualizer into a teaching tool for a computer science course?
Set [BRAND] to your course or department name, [SUBTITLE] to the lecture topic, and [CITY_NAME] to a fictional place your students will recognize. Use the sandbox to paint walls, mud at cost 3 and water at cost 6, then step through the line-highlighted pseudocode while students predict the next frontier. The maze and city views give you ready-made exercises on weighted search and heuristic choice.

### How do I build a pathfinding algorithms visualizer with AI?
Copy the prompt from this page or run npx vibefather add pathfinding-algorithms-visualizer, replace [BRAND], [SUBTITLE] and [CITY_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Pathfinding Algorithms Visualizer demo?
The GraphCraft Lab (Square & Hex Edition) case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Pathfinding Algorithms Visualizer template use?
Pathfinding Algorithms Visualizer is a 4-page site built with React, Tailwind CSS and Typescript, with micro-interactions and interactive canvas. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Pathfinding Algorithms Visualizer template for a client or a business?
The Pathfinding Algorithms Visualizer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Pathfinding Algorithms Visualizer template work on mobile?
Yes. Every Pathfinding Algorithms Visualizer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Pathfinding Algorithms Visualizer on VibeFather](https://vibefather.ai/templates/pathfinding-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
