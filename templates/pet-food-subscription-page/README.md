# Pet Food Subscription Page

> Friendly pet food page with a plan-building quiz, live portions and prices, all client-side.

<a href="https://vibefather.ai/templates/pet-food-subscription-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/pet-food-subscription-page/0680225a-5114-487c-a4db-ccac071f0cac/webp.07efd5964e.webp" width="100%" alt="Pet Food Subscription Page — Pet Food Plan Builder built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/pet-food-subscription-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a friendly, colorful subscription page for a pet food brand: a warm cream ground, two playful accents — fetch orange and grass green — chunky rounded type, and happy studio portraits of pets with no people in frame. The hero is a delighted dog mid-grin under the brand name, promising food built around one animal at a time. It suits fresh, air-dried or kibble brands, cat or dog, and any subscription product that personalizes a plan in one interaction. The core of the page is a plan builder: species, age band, a weight slider and activity level feed a live panel that shows portion size in cups, daily calories, delivery cadence and price per day, each number springing into place as the inputs change. A bowl visualization fills to match the portion, a fresh/frozen toggle rewrites the recipe line, and the saved plan lives in the browser with an honest note that it is a sample calculation, not veterinary advice. Ingredient cards, a three-step delivery strip and reviews from named pets round out the page. Everything runs client-side on React, Tailwind and Motion; fonts are self-hosted and photographs bundled. Four variables — brand, food style, delivery area and base day rate — rewrite the copy from one content file. Springs stay bouncy on desktop, calm on mobile, and prefers-reduced-motion gets instant updates. Six matching studio photographs ship with the template, all one warm cream shoot with no packaging text and no logos.

| | |
|---|---|
| Category | [More Landing Pages](../../README.md#more-landing-pages) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/pet-food-subscription-page?case=0680225a-5114-487c-a4db-ccac071f0cac&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/pet-food-subscription-page/0680225a-5114-487c-a4db-ccac071f0cac/shot_desktop.b2cef04172.webp" width="100%" alt="Pet Food Subscription Page — Fresh dog food brand, built by GLM-5.3 in ZCode"></a><br>
<b>Fresh dog food brand</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/pet-food-subscription-page?case=0680225a-5114-487c-a4db-ccac071f0cac&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/pet-food-subscription-page?case=a3a95bb9-643b-41c2-b145-09860f34a43c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/pet-food-subscription-page/a3a95bb9-643b-41c2-b145-09860f34a43c/shot_desktop.4815eb749b.webp" width="100%" alt="Pet Food Subscription Page — Cat food subscription, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Cat food subscription</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/pet-food-subscription-page?case=a3a95bb9-643b-41c2-b145-09860f34a43c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Tail & Tummy |
| `[FOOD_STYLE]` | Food style | fresh-frozen bowls |
| `[DELIVERY_AREA]` | Delivery area | Denver metro |
| `[BASE_DAY_RATE]` | Base day rate | $2.90 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add pet-food-subscription-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A raw pet food co-op: set BRAND to your kitchen name, FOOD_STYLE to raw or air-dried, and point the delivery strip at your pickup days instead of courier windows.
- A cat-only subscription box: keep the species step but default it to cat, rewrite the ingredient cards for fish and poultry, and swap the hero portrait for a cat on the cream backdrop.
- A regional kibble brand: set DELIVERY_AREA to your counties, adjust BASE_DAY_RATE to your per-day price, and turn the reviews into named local pets with their breeds.
- A vet clinic offering nutrition plans: keep the plan builder as a portion calculator, rewrite the FAQ note to say plans are reviewed by your clinic team, and link the CTA to a booking form.

## FAQ

### How does the plan builder on the Pet Food Subscription Page calculate portions and price?
The Pet Food Subscription Page plan builder runs a fixed formula in the browser. Species, age band, a weight slider and activity level feed a calculation: daily calories from weight and activity factors, cups rounded to the nearest quarter, and price per day from the base day rate scaled by calories and food style. The panel shows portion in cups, daily calories, delivery cadence and price per day, and the bowl fills to match the portion.

### What do the four variables change on the Pet Food Subscription Page?
The Pet Food Subscription Page rewrites its copy from four variables in one content file. BRAND sets the wordmark, titles and the localStorage key for saved plans. FOOD_STYLE changes the hero eyebrow, recipe line and ingredients intro. DELIVERY_AREA appears in the hero, review bylines and footer. BASE_DAY_RATE anchors the live price math for a 1,000 kcal adult dog on the frozen plan.

### Is the saved pet plan stored on a server or only in the browser?
The Pet Food Subscription Page saves the built plan in the browser's localStorage under a key built from the brand name. Nothing is sent to a server, and there is no backend or external API. The page also shows an honest note that the calculation is a sample, not veterinary advice, so visitors understand the plan is a demonstration until a real checkout exists.

### Can I switch the Pet Food Subscription Page from dog food to cat food?
The Pet Food Subscription Page ships with a species step that already covers dogs and cats, and the live demos include a cat food subscription built from the same prompt. To focus on cats, set BRAND and FOOD_STYLE for your cat range, rewrite the hero and ingredient copy, and swap the bundled photographs for cat portraits shot on the same warm cream backdrop.

### What is included with the free Pet Food Subscription Page template?
The Pet Food Subscription Page is a free template with one page. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives access to the source code of the demos. The page ships with six studio photographs, self-hosted fonts and a client-side React, Tailwind CSS and Motion build.

### How do I build a pet food subscription page with AI?
Copy the prompt from this page or run npx vibefather add pet-food-subscription-page, replace [BRAND], [FOOD_STYLE], [DELIVERY_AREA] and [BASE_DAY_RATE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Pet Food Subscription Page demo?
The Fresh dog food brand case was built by GLM-5.3 in ZCode; the Cat food subscription case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Pet Food Subscription Page template use?
Pet Food Subscription Page is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Pet Food Subscription Page template for a client or a business?
The Pet Food Subscription Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Pet Food Subscription Page template work on mobile?
Yes. Every Pet Food Subscription Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More More Landing Pages](../../README.md#more-landing-pages) · [Pet Food Subscription Page on VibeFather](https://vibefather.ai/templates/pet-food-subscription-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
