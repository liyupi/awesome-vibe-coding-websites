# Physics Playground Landing Page

> A design tool landing page whose headline letters and UI chips fall, stack and fly when you grab them.

<a href="https://vibefather.ai/templates/physics-playground-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/physics-playground-landing-page/9126a881-09a8-4bb2-adbf-a16a6d5d143d/webp.1364bd9100.webp" width="100%" alt="Physics Playground Landing Page — Design Tool Landing Page with Live Physics built by Claude Opus 5.5, Claude Sonnet 5.5 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/physics-playground-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

This is a one-page landing site for a design tool where the first screen is something you can play with. Inside a framed canvas window, each letter of the headline and a handful of small interface chips (a share button, a toggle, color swatches, live-cursor name tags, a slider) are separate physical pieces. They drop in one after another, bounce and pile up on the floor of the window. Visitors can grab any piece with a mouse or a finger, fling it across the frame and watch it knock the others over. On phones, tilting the device tips gravity so the pile slides toward the lower edge, with a small Enable tilt button only where the browser asks for permission. The physics is written by hand in plain TypeScript, with no physics library: a fixed-timestep loop, rotated-box collisions, friction, bounce, sleeping pieces and a pause whenever the hero scrolls away. That makes the template a readable lesson as well as a page, and the engine is reused for small looping scenes inside each feature card and for confetti after sign-up. Below the hero the page settles into a familiar order: a scrolling feature band, six feature cards, three pricing plans with a monthly and yearly switch, testimonials with portraits, a sign-up panel and an FAQ. The look is warm off-white with five candy colors, chunky rounded blocks, thick dark outlines and hard offset shadows, set in Bricolage Grotesque and Figtree. It suits founders and small teams launching a creative or productivity tool, and developers who want a hero that people stop to play with. To adapt it, change the brand, the one-line product description, the audience and the falling headline word; the chips, features, plans and answers are rewritten to match while the layout and motion stay the same.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Landing Page](../../types/landing-page.md), [SaaS](../../types/saas.md) |
| Style | [Brutalist](../../styles/brutalist.md), [Playful](../../styles/playful.md) |
| Effects | Drag & Physics, Marquee, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + Tailwind CSS 3.4 + lucide |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/physics-playground-landing-page?case=9126a881-09a8-4bb2-adbf-a16a6d5d143d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/physics-playground-landing-page/9126a881-09a8-4bb2-adbf-a16a6d5d143d/shot_desktop.fe52f830a1.webp" width="100%" alt="Physics Playground Landing Page — Collaborative design canvas, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Collaborative design canvas</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/physics-playground-landing-page?case=9126a881-09a8-4bb2-adbf-a16a6d5d143d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/physics-playground-landing-page?case=0f9133ad-e1bd-4bf7-9ab6-57813f009509&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/physics-playground-landing-page/0f9133ad-e1bd-4bf7-9ab6-57813f009509/shot_desktop.bb67d69864.webp" width="100%" alt="Physics Playground Landing Page — Beat-making app, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Beat-making app</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/physics-playground-landing-page?case=0f9133ad-e1bd-4bf7-9ab6-57813f009509&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/physics-playground-landing-page?case=b60d4481-c4c7-4a1e-9fa5-1def068bc955&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/physics-playground-landing-page/b60d4481-c4c7-4a1e-9fa5-1def068bc955/shot_desktop.abce2af1a8.webp" width="100%" alt="Physics Playground Landing Page — Collaborative design canvas, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Collaborative design canvas</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/physics-playground-landing-page?case=b60d4481-c4c7-4a1e-9fa5-1def068bc955&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Wobblebox |
| `[PRODUCT]` | What the product is | a browser canvas for sketching interface ideas together |
| `[AUDIENCE]` | Who it is for | product designers and the engineers who build their screens |
| `[HERO_WORD]` | Physics headline | SKETCH LOOSE |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add physics-playground-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A creative tool studio: set BRAND and PRODUCT to your app, choose HERO_WORD for your tagline, and swap the chips for your real toolbar buttons and color swatches.
- An indie game launch: point BRAND at the game, set AUDIENCE to players, and rewrite the six feature cards as levels, modes and controls while the physics hero stays.
- A developer education site: keep the hand-written physics engine as the teaching hook, set PRODUCT to your course, and turn the feature cards into lessons.
- A productivity app founder: set HERO_WORD to your product name, replace the pricing plans with your tiers, and rewrite the FAQ around setup and billing questions.

## FAQ

### How do I change the falling headline word and the little UI chips in the physics hero?
The Physics Playground Landing Page template drives the hero from four variables: BRAND, PRODUCT, AUDIENCE and HERO_WORD. Set HERO_WORD to the word whose letters fall and stack, then edit the chip definitions in the content file so the Share button, toggle, swatches, cursor tags and slider match your product. Every string lives in one typed content object, so the hero, features, plans and FAQ all update from the same place.

### What can visitors actually do with the physics pieces on the first screen?
On the Physics Playground Landing Page, every letter of the headline and nine interface chips are separate rigid bodies. Visitors grab any piece with a mouse or finger, fling it across the framed canvas and knock the pile over, and the pieces bounce, stack and settle on the arena floor. On phones, an Enable tilt button lets device tilt redirect gravity so the pile slides toward the lower edge.

### Do I need a physics library to run the falling letters and chips?
No. The Physics Playground Landing Page template writes its physics by hand in plain TypeScript, with no physics library. It uses a fixed-timestep loop, rotated-box collisions, friction, bounce and sleeping pieces, plus a pause whenever the hero scrolls out of view. The same engine also runs the small looping scenes inside each feature card and the confetti after sign-up, so the motion stays consistent across the page.

### How do I turn the physics hero into a launch page for my own product?
Start with the Physics Playground Landing Page template's four variables: set BRAND to your product name, PRODUCT to a one-line description of what you sell, AUDIENCE to the people you are launching to, and HERO_WORD to the word you want falling. Then rewrite the chips so they show your real interface pieces, and replace the six feature cards, three pricing plans, testimonials and FAQ answers with your own. The layout and physics motion stay as they are.

### What should I check on the page before publishing a site built from this template?
Check that the hero still reads clearly once the letters settle, that the six feature cards and three pricing plans match your offer, and that the sign-up panel stores submissions locally as the template intends. Test dragging and throwing on a touchscreen, confirm the Enable tilt button appears only where the browser asks for permission, and make sure the FAQ answers are yours rather than placeholder copy.

### How do I build a physics playground landing page with AI?
Copy the prompt from this page or run npx vibefather add physics-playground-landing-page, replace [BRAND], [PRODUCT], [AUDIENCE] and [HERO_WORD] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Physics Playground Landing Page demo?
The Collaborative design canvas case was built by Claude Opus 5.5 in Claude Code; the Beat-making app case was built by Claude Sonnet 5.5 in Cursor; the Collaborative design canvas case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Physics Playground Landing Page template use?
Physics Playground Landing Page is a single-page site built with Tailwind CSS and Plain HTML, with drag & physics, marquee and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Physics Playground Landing Page template for a client or a business?
The Physics Playground Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Physics Playground Landing Page template work on mobile?
Yes. Every Physics Playground Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Physics Playground Landing Page on VibeFather](https://vibefather.ai/templates/physics-playground-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
