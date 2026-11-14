# Flower Anatomy 3D Explainer

> Explore a living 3D flower, reveal each part, follow pollen, and test what you learned.

<a href="https://vibefather.ai/templates/flower-anatomy-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/flower-anatomy-3d-explainer/01637441-c72d-419e-b271-3244e088a0ae/webp.b65833fff0.webp" width="100%" alt="Flower Anatomy 3D Explainer — Interactive 3D Flower Anatomy Lesson built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/flower-anatomy-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Flower Anatomy 3D Explainer is a single-page botany lesson built around an original, procedurally modeled flower rather than a video or a downloaded model. Learners can orbit the specimen, zoom into its structures, lift six tepals away in measured steps, and select attached labels to understand the stamens, stigma, style, ovary, and ovules. A dedicated pollination chapter separates pollen transfer from pollen-tube growth and fertilization, while a five-question quiz closes the lesson with immediate feedback and a score.

The visual direction resembles a bright specimen workstation: warm ivory surfaces, deep botanical green, coral floral geometry, golden pollen, fine rules, and compact scientific labels. The flower remains the visual anchor throughout, so the experience feels like handling a teaching model rather than reading a succession of cards. It suits educators creating a classroom demonstration, students reviewing plant reproduction, and developers looking for an educational Three.js interface with meaningful controls.

The template is designed for adaptation through three variables: brand, specimen, and audience. The default lesson uses an Oriental lily; the alternate case uses a tulip, preserving the six-tepal structure while changing the model's colors, proportions, descriptions, and quiz wording. All lesson content and specimen parameters live together for replacement. The stack is Vite, React, TypeScript, Three.js, and vanilla CSS, with local open-license fonts and icons. No photographs, generated images, external models, APIs, or backend are required. Touch controls, keyboard alternatives, reduced-motion storyboards, and a WebGL fallback are part of the brief, making the result practical as a static teaching page as well as a visually distinctive demo.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Drag & Physics, 3D / WebGL, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS + Three.js + lucide-react |
| Pages | 3 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/flower-anatomy-3d-explainer?case=01637441-c72d-419e-b271-3244e088a0ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/flower-anatomy-3d-explainer/01637441-c72d-419e-b271-3244e088a0ae/shot_desktop.5427299a5d.webp" width="100%" alt="Flower Anatomy 3D Explainer — Oriental lily anatomy, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Oriental lily anatomy</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/flower-anatomy-3d-explainer?case=01637441-c72d-419e-b271-3244e088a0ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/flower-anatomy-3d-explainer?case=f4df1564-f0b4-490d-a8e4-6867c35b766b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/flower-anatomy-3d-explainer/f4df1564-f0b4-490d-a8e4-6867c35b766b/shot_desktop.529ffd2ff1.webp" width="100%" alt="Flower Anatomy 3D Explainer — Tulip anatomy, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Tulip anatomy</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/flower-anatomy-3d-explainer?case=f4df1564-f0b4-490d-a8e4-6867c35b766b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Lesson brand | Petal Atlas |
| `[SPECIMEN]` | Flower specimen | Oriental lily |
| `[AUDIENCE]` | Learner audience | Curious beginners |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add flower-anatomy-3d-explainer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A high school biology teacher: set BRAND to your course name, set AUDIENCE to first-year students, and rewrite the quiz questions to match your plant reproduction unit.
- A university botany lab: keep the lily SPECIMEN, set AUDIENCE to undergraduates, and tighten the labels to use proper floral terminology in the dissection steps.
- A nature museum kiosk: set BRAND to the exhibit name, keep the calm tone, and point visitors to the pollination chapter as a short standalone walkthrough.
- A horticulture club or garden society: switch SPECIMEN to a flower your members grow, adjust its colors and proportions, and reframe the quiz as a friendly self-check.

## FAQ

### What does the Flower Anatomy 3D Explainer actually teach a learner?
The Flower Anatomy 3D Explainer teaches introductory flower structure and reproduction on a single page. Learners orbit and zoom a code-generated specimen, lift six tepals in a four-state dissection to expose the ovary, select labels for the stamens, stigma, style, ovary and ovules, then follow a four-stage pollination sequence and finish a five-question quiz with immediate feedback and a score.

### How do I change the flower from a lily to a different specimen?
Set the SPECIMEN variable and rewrite everything that depends on it. The template keeps lesson copy, quiz wording, specimen colors and model parameters together in one content file, so changing SPECIMEN means updating the tepal proportions, material colors, descriptions and the alt strings that name the flower. The tulip demo shows the same six-tepal structure with different colors, proportions and copy.

### Is the 3D flower a downloaded model or a video?
The flower in the Flower Anatomy 3D Explainer is modeled procedurally in code with Three.js, not downloaded and not filmed. Every visual is generated: the tepals, stamens, pistil, pollen grains, ovary cutaway, leader lines, floor shadow and wordmark. No photographs, generated images, external models, HDRIs or APIs are involved, so the page runs as static files with no backend.

### How do the dissection and pollination interactions work for someone who cannot drag?
The Flower Anatomy 3D Explainer brief requires every core action to work with mouse, touch and keyboard, so dissection steps have Previous, Next and Reset controls and labels are selectable. Pollination offers play, pause, previous, next, replay and 0.5x or 1x speed. With reduced motion enabled, the entrance tween, camera moves and particle travel are removed and pollination becomes four static storyboard states with the same copy.

### What should I edit first to make this lesson fit my own class?
Start with the three variables: BRAND for the lesson name, AUDIENCE for the vocabulary and quiz wording, and SPECIMEN for the flower and its geometry. Then rewrite the labels, explanations and five quiz questions for your students, and add the visible note that geometry, structure sizes, pollen counts and timing are simplified. The copy lives in one content file so it can be swapped without touching the 3D scene.

### How do I build a flower anatomy 3D explainer with AI?
Copy the prompt from this page or run npx vibefather add flower-anatomy-3d-explainer, replace [BRAND], [SPECIMEN] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Flower Anatomy 3D Explainer demo?
The Oriental lily anatomy case was built by Kimi K3.1 Pro in Kimi Code; the Tulip anatomy case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Flower Anatomy 3D Explainer template use?
Flower Anatomy 3D Explainer is a 3-page site built with React and Three.js, with drag & physics, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Flower Anatomy 3D Explainer template for a client or a business?
The Flower Anatomy 3D Explainer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Flower Anatomy 3D Explainer template work on mobile?
Yes. Every Flower Anatomy 3D Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Flower Anatomy 3D Explainer](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Flower Anatomy 3D Explainer on VibeFather](https://vibefather.ai/templates/flower-anatomy-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
