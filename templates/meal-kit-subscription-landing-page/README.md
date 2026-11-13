# Meal Kit Subscription Landing Page

> Kitchen-fresh meal kit page with a live people × meals plan selector, weekly menu and client-side sign-up.

<a href="https://vibefather.ai/templates/meal-kit-subscription-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/meal-kit-subscription-landing-page/eb2e44a1-d3aa-4a50-ab62-f994aa2fe072/webp.fcaf1d9fc5.webp" width="100%" alt="Meal Kit Subscription Landing Page — Meal Kit Page with Plan Selector built by GLM-5.3"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/meal-kit-subscription-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page landing site for a meal kit subscription: the brand's promise over an overhead dinner photo with the plan selector visible; a people (2/4/6) × meals (3/4/5) selector computing the per-serving price with live sample math; this week's menu of six dishes with times and difficulty; a four-step how-it-works strip; a price-transparency block showing the per-serving math plainly; a sign-up flow (plan, first delivery day chip, contact) confirming client-side; and a trust strip (pause anytime, recyclable packaging, farm sources — sample). The default content follows an invented farm-to-table kit, but the structure suits any meal-prep or grocery subscription. The look is kitchen-fresh editorial: warm white and herb green, one tomato-red accent, confident serif headlines over a friendly sans, overhead food photography and drawn portion dots. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/meal-kit-subscription-landing-page?case=eb2e44a1-d3aa-4a50-ab62-f994aa2fe072&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/meal-kit-subscription-landing-page/eb2e44a1-d3aa-4a50-ab62-f994aa2fe072/shot_desktop.6fe4d0c65f.webp" width="100%" alt="Meal Kit Subscription Landing Page — Farm-to-table meal kit, built by GLM-5.3 in ZCode"></a><br>
<b>Farm-to-table meal kit</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/meal-kit-subscription-landing-page?case=eb2e44a1-d3aa-4a50-ab62-f994aa2fe072&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Hearth & Field |
| `[CITY]` | City | Nashville, Tennessee |
| `[MENU_FOCUS]` | Menu focus | farm-table dinners |
| `[PER_SERVING]` | Base per-serving | 9.40 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add meal-kit-subscription-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local meal-prep service: set [BRAND] to your kitchen, [CITY] to your delivery area, and swap the six dishes for your weekly rotation with real prep times.
- A grocery box subscription: rewrite [MENU_FOCUS] around produce boxes, replace dish cards with box contents, and keep the people by meals selector for portion sizes.
- A plant-based kit brand: set [PER_SERVING] to your base rate, relabel the trust strip around recyclable packaging, and rewrite the menu with vegetable-led dishes.
- A solo founder testing a concept: keep the invented brand and sample math, change [CITY] and the menu, and use the client-side sign-up to gauge interest before building checkout.

## FAQ

### How does the plan selector on the Meal Kit Subscription Landing Page calculate the per-serving price?
The Meal Kit Subscription Landing Page template uses a people (2, 4 or 6) by meals (3, 4 or 5) selector. A pure pricing function takes the base per-serving rate from [PER_SERVING] and applies the larger-plan discount, then shows the weekly total and the per-serving figure with the sample math visible. The numbers count to their new values when you change the plan, and portion dots appear one per person.

### What happens after someone submits the sign-up form on the meal kit template?
The sign-up flow on the Meal Kit Subscription Landing Page confirms entirely in the browser. The visitor picks a plan, a first delivery day chip and enters a name and email; nothing is sent to a server. On submit the form swaps to a joined state with a drawn FIRST BOX stamp, a welcome line using the name, and an echo of the chosen plan, day and per-serving price. The details persist in localStorage under the brand's key, and an Edit control restores the form pre-filled.

### Can I change the meal kit template to sell meal prep or grocery boxes instead of farm-to-table dinners?
Yes. The Meal Kit Subscription Landing Page template keeps every string, dish, price, hour and image path in one content file. Swap [MENU_FOCUS] and [BRAND], rewrite the six dish cards, the how-it-works steps and the trust strip, then adjust [PER_SERVING] to your base rate. The brief says the structure suits any meal-prep or grocery subscription. Layout, colors and motion stay as they are.

### Is the Meal Kit Subscription Landing Page template free to use?
The Meal Kit Subscription Landing Page template is free. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client use needs Pro, and Pro members get the full prompt and the source code of the demos. The page shows the brief, stack and variables publicly.

### What should I change first when adapting the meal kit template for my own brand?
Start with the variables in the prompt: [BRAND], [CITY], [MENU_FOCUS] and [PER_SERVING]. The brand name also drives the wordmark, page title, footer, the hello@ email address and the localStorage keys, so setting it first keeps everything consistent. Then replace the six dish cards and the trust strip, and check that the plan selector math matches your real pricing before publishing.

### How do I build a meal kit subscription landing page with AI?
Copy the prompt from this page or run npx vibefather add meal-kit-subscription-landing-page, replace [BRAND], [CITY], [MENU_FOCUS] and [PER_SERVING] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Meal Kit Subscription Landing Page demo?
The Farm-to-table meal kit case was built by GLM-5.3 in ZCode. Each build used the published prompt with nothing added.

### What tech stack and pages does the Meal Kit Subscription Landing Page template use?
Meal Kit Subscription Landing Page is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Meal Kit Subscription Landing Page template for a client or a business?
The Meal Kit Subscription Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Meal Kit Subscription Landing Page template work on mobile?
Yes. Every Meal Kit Subscription Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Meal Kit Subscription Landing Page on VibeFather](https://vibefather.ai/templates/meal-kit-subscription-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
