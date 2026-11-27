# Design System Guidelines Deck <sup>PRO</sup>

> Swiss 12-slide design system deck with click-to-copy color tokens, live type scale, and motion curves.

<a href="https://vibefather.ai/templates/design-system-guidelines-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/design-system-guidelines-deck/6857661f-2409-4d03-b4ef-32d95d34467c/webp.5d62201d31.webp" width="100%" alt="Design System Guidelines Deck — Swiss Interactive Design System Slide Deck built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/design-system-guidelines-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Design System Guidelines Deck is an architectural Swiss-grid 12-slide 16:9 web presentation built for product design teams documenting and presenting a unified visual language. Instead of flat screenshots, every slide embeds live interactive UI specimens right inside the presentation canvas. Attendees can click any color token swatch to copy its hex value and inspect live WCAG AA/AAA contrast ratios, toggle weights and tracking across an interactive typography specimen scale, inspect a geometric spacing and border-radius ruler grid, test live component states (buttons, inputs, badges, and alerts) in real time, scrub animated SVG cubic-bezier motion curves, and compare side-by-side Do vs Don't layout rules. Complete presentation chrome includes keyboard arrows, Spacebar, Home/End, touch swipe, a G-key thumbnail overview grid, an N-key speaker notes drawer with live session timer, F-key fullscreen toggle, and crisp @media print landscape PDF styling. Grounded in pure Swiss white (#FFFFFF) and carbon (#141414) punctuated by signal vermilion (#E63946) and cool architectural gray (#E5E7EB), it self-hosts Space Grotesk, Inter, and JetBrains Mono. Customize the system name, version, lead designer, and brand manifesto in src/content.ts.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Slide Deck](../../types/slides.md) |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/design-system-guidelines-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/design-system-guidelines-deck?case=6857661f-2409-4d03-b4ef-32d95d34467c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/design-system-guidelines-deck/6857661f-2409-4d03-b4ef-32d95d34467c/shot_desktop.cc92029d95.webp" width="100%" alt="Design System Guidelines Deck — Swiss UI design system handbook, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Swiss UI design system handbook</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/design-system-guidelines-deck?case=6857661f-2409-4d03-b4ef-32d95d34467c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/design-system-guidelines-deck?case=f81b34a3-6050-4b8b-a34c-6f161f877603&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/design-system-guidelines-deck/f81b34a3-6050-4b8b-a34c-6f161f877603/shot_desktop.4e1ef2eb2d.webp" width="100%" alt="Design System Guidelines Deck — Industrial hardware brand guidelines, built by GLM-5.4 in ZCode"></a><br>
<b>Industrial hardware brand guidelines</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/design-system-guidelines-deck?case=f81b34a3-6050-4b8b-a34c-6f161f877603&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Design system name | Forma Grid |
| `[SYSTEM_VERSION]` | Spec version badge | v2.4 · Core Foundations |
| `[LEAD_AUTHOR]` | Author credit | Nadia Kowalski, Principal Systems Designer |
| `[MANIFESTO]` | Guiding principle | Precision in geometry, warmth in restraint. |
| `[TOKEN_PREFIX]` | CSS variable prefix | --fg- |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/design-system-guidelines-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A fintech design system team: set BRAND to your system name, TOKEN_PREFIX to your variable prefix, and replace the sample color tokens with your real palette and contrast pairs.
- An agency presenting brand guidelines to a client: set LEAD_AUTHOR to the lead designer, MANIFESTO to the client's principle, and swap the component states for their live UI kit.
- A developer tools company onboarding engineers: keep the type scale and spacing rulers, and rewrite the Do versus Don't slides around your component usage rules.
- A university design course: set BRAND to the course or studio name, LEAD_AUTHOR to the instructor, and use the motion curves and type scale slides as live teaching specimens.

## FAQ

### What interactive specimens are inside the Design System Guidelines Deck slides?
The Design System Guidelines Deck embeds live UI specimens directly in the 12 slides. You can click color token swatches to copy hex values and read WCAG AA/AAA contrast ratios, toggle weights and tracking on an interactive type scale, inspect spacing and border-radius rulers, test button, input, badge and alert states, scrub SVG cubic-bezier motion curves, and compare Do versus Don't layout rules side by side.

### How do I present the Design System Guidelines Deck to a room or over a screen share?
The Design System Guidelines Deck includes full presentation chrome. Use the arrow keys, Spacebar, or Home and End to move between slides, swipe on touch devices, press G for a thumbnail overview grid, press N for speaker notes with a live session timer, and press F for fullscreen. The print stylesheet exports the deck as a landscape PDF for handouts.

### What do I change first when adapting the Design System Guidelines Deck to my company's design system?
Start in the content file and set BRAND to your design system name, SYSTEM_VERSION to your release badge, LEAD_AUTHOR to the presenter, MANIFESTO to your guiding principle, and TOKEN_PREFIX to your CSS variable prefix. Then replace the sample color tokens, type scale, spacing values and component states with your own so the live specimens match your real system.

### Can I use the Design System Guidelines Deck for a client design system presentation?
Commercial and client use of the Design System Guidelines Deck requires Pro. Pro templates show the brief, stack and variables publicly and the full prompt to Pro members, and the source code of the demos comes with Pro. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use under CC BY-NC 4.0.

### Which AI coding agents built the Design System Guidelines Deck live demos?
Two live demos of the Design System Guidelines Deck were built from the same published prompt: a Swiss UI design system handbook made with Gemini 4 Neon in Antigravity, and an industrial hardware brand guidelines version made with GLM-5.4 in ZCode. You can open both demos on the page and compare how each agent interpreted the brief.

### How do I build a design system guidelines deck with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add design-system-guidelines-deck, replace [BRAND], [SYSTEM_VERSION], [LEAD_AUTHOR] and [MANIFESTO] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Design System Guidelines Deck demo?
The Swiss UI design system handbook case was built by Gemini 4 Neon in Antigravity; the Industrial hardware brand guidelines case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Design System Guidelines Deck template use?
Design System Guidelines Deck is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Design System Guidelines Deck template free to use?
Design System Guidelines Deck is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Design System Guidelines Deck template work on mobile?
Yes. Every Design System Guidelines Deck build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Design System Guidelines Deck on VibeFather](https://vibefather.ai/templates/design-system-guidelines-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
