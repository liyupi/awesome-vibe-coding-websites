# Meal Planner & Grocery List App

> Fresh linen responsive weekly meal planner PWA with dynamic servings scaler and aisle grocery list.

<a href="https://vibefather.ai/templates/meal-planner-grocery-list-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/meal-planner-grocery-list-app/ad6d859f-7df8-4edf-acdf-5b9fa5c5af8c/webp.bc7f52f2f8.webp" width="100%" alt="Meal Planner &amp; Grocery List App — Weekly Meal Planner &amp; Grocery List PWA built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/meal-planner-grocery-list-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Meal Planner & Grocery List App is a sunlit, kitchen-friendly responsive weekly meal planning and smart grocery checklist PWA crafted for home cooks and busy households. Adapting natively across all screen sizes with zero fake phone frames, mobile viewports under 768px use a clean four-tab bottom navigation bar (Plan, Recipes, Groceries, Pantry), while desktop screens open into a full-height sidebar and a split weekly meal calendar alongside a live aisle-grouped grocery list. Six cohesive sunlit home-cooking photographs anchor the recipe library across Breakfast, Lunch, and Dinner slots for Monday through Sunday. Tapping any planned meal opens a quick Swap Meal sheet to substitute another recipe, or launches the full Recipe Detail view featuring a dynamic servings multiplier (1× to 6×) that scales ingredient quantities live alongside a step-by-step cook-mode checklist. One tap on Send Week to Grocery List aggregates ingredients cleanly into Produce, Dairy, Pantry, and Bakery supermarket aisles with strikethrough check-offs and a custom item input, all persisted in localStorage. Styled in fresh linen (#FBF9F4) and forest ink (#1B2A22) accented by herb green (#2D6A4F) and tomato red (#DC4A2D), it self-hosts Fraunces, Plus Jakarta Sans, and JetBrains Mono. Customize the kitchen brand, household name, and default servings inside src/content.ts.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Mobile App](../../types/mobile-app.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/meal-planner-grocery-list-app?case=ad6d859f-7df8-4edf-acdf-5b9fa5c5af8c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/meal-planner-grocery-list-app/ad6d859f-7df8-4edf-acdf-5b9fa5c5af8c/shot_desktop.3b27e18998.webp" width="100%" alt="Meal Planner &amp; Grocery List App — Home kitchen weekly meal planner, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Home kitchen weekly meal planner</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/meal-planner-grocery-list-app?case=ad6d859f-7df8-4edf-acdf-5b9fa5c5af8c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/meal-planner-grocery-list-app?case=4969345a-5b36-490d-80ab-c05cd63fd317&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/meal-planner-grocery-list-app/4969345a-5b36-490d-80ab-c05cd63fd317/shot_desktop.f195793cc6.webp" width="100%" alt="Meal Planner &amp; Grocery List App — Mediterranean family dinner planner, built by GLM-5.4 in ZCode"></a><br>
<b>Mediterranean family dinner planner</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/meal-planner-grocery-list-app?case=4969345a-5b36-490d-80ab-c05cd63fd317&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Meal app name | BasilNote |
| `[HOUSEHOLD_NAME]` | Household greeting | Clara & Ben's Kitchen |
| `[DEFAULT_SERVINGS]` | Default servings | 2 Servings |
| `[WEEK_LABEL]` | Planner heading | Weekly Table Plan |
| `[MARKET_NOTE]` | Grocery tip | Grouped cleanly by supermarket aisle |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add meal-planner-grocery-list-app` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A personal meal-prep coach: set BRAND to your service name and HOUSEHOLD_NAME to each client, then swap the six seeded recipes for your own prep menus and servings.
- A Mediterranean family kitchen: use the GLM-5.4 demo direction, rewrite WEEK_LABEL and MARKET_NOTE for your table, and replace the recipe library with family dishes.
- A small recipe blog or creator: keep the Recipes gallery, replace the six dish photos and copy with your published recipes, and let readers scale servings before cooking.
- A shared household planner: set HOUSEHOLD_NAME to the flat or family, adjust DEFAULT_SERVINGS, and seed the Pantry tab with the staples that household actually keeps.

## FAQ

### How does the meal planner turn a week of meals into a grocery list?
The Meal Planner & Grocery List App template includes a Send Week to Grocery List action. It collects the ingredients from every meal planned Monday through Sunday and sorts them into Produce, Dairy, Pantry and Bakery aisles. On desktop the list appears in the live grocery rail beside the calendar; on mobile it fills the Groceries tab. Check-offs and custom items are saved in localStorage.

### Can the recipe quantities adjust when I cook for more people?
Yes. Opening any of the six recipes in the Meal Planner & Grocery List App template shows a servings stepper from 1x to 6x, and every ingredient quantity scales live as you change it. The same sheet has a checkable step-by-step Cook Mode. Set the starting multiplier with the DEFAULT_SERVINGS variable, which defaults to 2 Servings.

### What can I customize in the Meal Planner & Grocery List App template?
The Meal Planner & Grocery List App template keeps its editable copy in one content file. Set BRAND for the app name, HOUSEHOLD_NAME for the greeting in the header, DEFAULT_SERVINGS for the starting recipe multiplier, WEEK_LABEL for the calendar heading and MARKET_NOTE for the grocery list subtitle. The six recipes, seven-day plan and pantry staples are seeded data you can replace with your own.

### Is the Meal Planner & Grocery List App template free to download and use?
The Meal Planner & Grocery List App is a free template on VibeFather. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial work, client projects and the demo source code need Pro. The brief, stack and variables are public, and the full prompt is available to Pro members.

### How do I run the Meal Planner & Grocery List App template on my own computer?
Add the Meal Planner & Grocery List App template to a project with the VibeFather CLI command npx vibefather add meal-planner-grocery-list-app, then install and start it with your usual Vite commands. It builds to static files in dist/ with no backend, server code or external APIs, so the planner, grocery list and pantry toggles all run in the browser and persist in localStorage.

### How do I build a meal planner & grocery list app with AI?
Copy the prompt from this page or run npx vibefather add meal-planner-grocery-list-app, replace [BRAND], [HOUSEHOLD_NAME], [DEFAULT_SERVINGS] and [WEEK_LABEL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Meal Planner & Grocery List App demo?
The Home kitchen weekly meal planner case was built by Gemini 4 Neon in Antigravity; the Mediterranean family dinner planner case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Meal Planner & Grocery List App template use?
Meal Planner & Grocery List App is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Meal Planner & Grocery List App template for a client or a business?
The Meal Planner & Grocery List App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Meal Planner & Grocery List App template work on mobile?
Yes. Every Meal Planner & Grocery List App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Meal Planner & Grocery List App on VibeFather](https://vibefather.ai/templates/meal-planner-grocery-list-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
