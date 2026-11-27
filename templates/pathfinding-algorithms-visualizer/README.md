# Pathfinding Algorithms Visualizer

> Interactive grid, hex, maze, and city-road pathfinding lab comparing BFS, Dijkstra, Greedy Best-First, and A* with live pseudocode.

<a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/pathfinding-algorithms-visualizer/e1271149-f631-4fa3-bd29-ac3429803200/webp.3772876593.webp" width="100%" alt="Pathfinding Algorithms Visualizer — Interactive Pathfinding Algorithms Visualizer built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/pathfinding-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

An interactive computer-science monograph and sandbox showing how maps and games find shortest paths. Paint Walls, Mud (cost 3), and Water (cost 6), toggle between Square Grid and Hex Grid, drag Start and Goal pins, and run BFS, Dijkstra, Greedy Best-First, and A* individually or side-by-side with step controls, frontier teal (#2BB3A3) and visited lavender (#B9A7FF) heatmaps, glowing orange paths (#FF7A1A), live explored-node and path-cost counters, and live line-highlighted pseudocode. Includes dedicated views for Heuristics Compared (Manhattan, Euclidean, Chebyshev), a Recursive Maze Generator, and Weighted Routing on a Code-Drawn City Road Map.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Tool](../../types/tool.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md), [Clean](../../styles/clean.md) |
| Effects | Interactive Canvas, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 4 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?case=e1271149-f631-4fa3-bd29-ac3429803200&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/pathfinding-algorithms-visualizer/e1271149-f631-4fa3-bd29-ac3429803200/shot_desktop.8cbd8f9bac.webp" width="100%" alt="Pathfinding Algorithms Visualizer — GraphCraft Lab (Square &amp; Hex Edition), built by Gemini 4 Neon in Antigravity"></a><br>
<b>GraphCraft Lab (Square &amp; Hex Edition)</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?case=e1271149-f631-4fa3-bd29-ac3429803200&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?case=9a20a83b-3e97-4a7a-bbf4-31e9cd6ca3b2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/pathfinding-algorithms-visualizer/9a20a83b-3e97-4a7a-bbf4-31e9cd6ca3b2/shot_desktop.59b70f2857.webp" width="100%" alt="Pathfinding Algorithms Visualizer — RouteLogic Studio (Heuristic Explorer), built by GPT-6.2 Sol in Codex"></a><br>
<b>RouteLogic Studio (Heuristic Explorer)</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Sol in Codex · <a href="https://vibefather.ai/templates/pathfinding-algorithms-visualizer?case=9a20a83b-3e97-4a7a-bbf4-31e9cd6ca3b2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A university algorithms course: set BRAND to your module name, SUBTITLE to graph search, and rewrite the explainer copy to match your lecture order and pseudocode.
- A game development studio: use the maze and hex grid views as a tuning sandbox, and rename BRAND to your engine tools label so designers can test weighted terrain costs.
- A coding bootcamp: set CITY_NAME to your campus city and use the road map view as a lesson on weighted routing before students implement Dijkstra themselves.
- A computer science club or open day demo: keep the pre-solved A* opening frame, set SUBTITLE to a plain-language question, and let visitors paint walls and drag pins.

## FAQ

### Is there a free pathfinding visualizer template I can build with AI?
Yes. The Pathfinding Algorithms Visualizer template on VibeFather is free, and its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. You can add it with the command npx vibefather add pathfinding-algorithms-visualizer, then have an AI coding agent build the four views: the grid and hex sandbox, the heuristics comparison, the maze generator and the city road map.

### Which algorithms can students compare in the Pathfinding Algorithms Visualizer template?
The Pathfinding Algorithms Visualizer template runs BFS, Dijkstra, Greedy Best-First and A* on both a Square Grid and an Offset Hex Grid. Students can run one algorithm or use Side-by-Side Comparison mode to watch two run in lockstep on the same map, with live Nodes Explored, Frontier Size and Path Cost counters and line-highlighted pseudocode beside the grid.

### How do I turn the Pathfinding Algorithms Visualizer into a teaching site for my own course?
Set BRAND to your course or lab name and SUBTITLE to the topic you teach, then rewrite the explanatory copy in the content file so the sandbox, heuristics, maze and city views match your syllabus. The pseudocode explainer, weighted terrain brushes and maze generators stay as they are, so students can still paint mud and water, drag pins and step through each algorithm.

### What does the city road map view in the Pathfinding Algorithms Visualizer show?
The city view draws a procedural SVG road network for the fictional city set in CITY_NAME, with river bridges, avenues and clickable intersections. You pick a start and destination, toggle bridge congestion to add a 3x travel weight, and watch Weighted A* against Dijkstra compute the fastest route with explored intersection markers and turn-by-turn edge distance totals.

### How do I change the brand name and city in the Pathfinding Algorithms Visualizer template?
The Pathfinding Algorithms Visualizer template exposes three variables: BRAND for the lab name, SUBTITLE for the short header line and CITY_NAME for the code-drawn city road network. Replace them in the prompt before you build, then update the matching headlines and labels in the single content file so every view reads consistently for your own lab or classroom.

### How do I build a pathfinding algorithms visualizer with AI?
Copy the prompt from this page or run npx vibefather add pathfinding-algorithms-visualizer, replace [BRAND], [SUBTITLE] and [CITY_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Pathfinding Algorithms Visualizer demo?
The GraphCraft Lab (Square & Hex Edition) case was built by Gemini 4 Neon in Antigravity; the RouteLogic Studio (Heuristic Explorer) case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Pathfinding Algorithms Visualizer template use?
Pathfinding Algorithms Visualizer is a 4-page site built with React, Tailwind CSS and Typescript, with interactive canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Pathfinding Algorithms Visualizer template for a client or a business?
The Pathfinding Algorithms Visualizer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Pathfinding Algorithms Visualizer template work on mobile?
Yes. Every Pathfinding Algorithms Visualizer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Pathfinding Algorithms Visualizer on VibeFather](https://vibefather.ai/templates/pathfinding-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
