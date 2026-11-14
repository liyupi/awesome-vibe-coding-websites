# Biotech Startup Website

> Lab-clean biotech platform site with a rotating code-drawn molecule, pipeline table and calm science motion.

<a href="https://vibefather.ai/templates/biotech-startup-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/biotech-startup-website/0f81630c-629d-4348-aa9e-51d387481d86/webp.00feb89652.webp" width="100%" alt="Biotech Startup Website — Biotech with Pipeline Table built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/biotech-startup-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Biotech Startup Website is a lab-clean marketing site for an invented protein-design company. The page opens on a white ground with a cool teal accent and generous whitespace, anchored by a large molecule drawn entirely in code: an eighteen-atom ball-and-stick model rendered on canvas, rotating slowly in three dimensions with depth-sorted atoms and bonds. Behind it two faint cell shapes drift, and a fine dot grid keeps the first screen scientific rather than decorative. A platform explainer follows in three moves: the problem, the approach as three numbered steps, and a mechanism panel with a code-drawn circuit diagram, each block carrying one line of technical depth in a mono face. The pipeline is the centerpiece: a full-width table with Discovery, Preclinical, Phase I and Phase II columns, program codes in mono, and pill status chips that pop as their stage column lights up on scroll. Below sit a count-up metrics band, a publications list with invented papers in generically named journals, a team row of monogram tiles and a careers strip with three roles. All copy stays at platform-science level: no medical claims, no efficacy language. Everything is drawn in code, so there are no photographs anywhere, which keeps the page crisp and the build tiny. It suits biotech, ag-biotech, materials and deep-tech startups that need to look scientifically credible to partners, investors and candidates. The default case is a protein-design company; the alternate case is a soil-microbiome startup, showing how brand, platform, focus and program codes swap while the layout holds. Change the variables, rewrite one content file, and the same calm structure serves any lab-adjacent brand.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/biotech-startup-website?case=0f81630c-629d-4348-aa9e-51d387481d86&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/biotech-startup-website/0f81630c-629d-4348-aa9e-51d387481d86/shot_desktop.6dcb086baa.webp" width="100%" alt="Biotech Startup Website — Protein design biotech, built by GLM-5.3 in ZCode"></a><br>
<b>Protein design biotech</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/biotech-startup-website?case=0f81630c-629d-4348-aa9e-51d387481d86&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/biotech-startup-website?case=3ff723b7-612b-43d1-a47b-ad45a0a3b32f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/biotech-startup-website/3ff723b7-612b-43d1-a47b-ad45a0a3b32f/shot_desktop.74ff81be43.webp" width="100%" alt="Biotech Startup Website — Soil microbiome startup, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Soil microbiome startup</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/biotech-startup-website?case=3ff723b7-612b-43d1-a47b-ad45a0a3b32f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Company name | Vantra Biosciences |
| `[PLATFORM]` | Platform name | Loopfold |
| `[FOCUS]` | What the platform works on | protein circuits |
| `[HQ_LINE]` | Headquarters line | 14 Meridian Lane, Cambridge, MA |
| `[PROGRAM_PREFIX]` | Program code prefix | VN- |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add biotech-startup-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A soil-microbiome startup: set BRAND to your company, PLATFORM to your consortium platform, FOCUS to nitrogen-fixing soil consortia and swap the protein programs for field-trial codes.
- A materials science lab spinout: keep the pipeline table but relabel the stages to discovery, bench validation, pilot line and partner trials, and rewrite the mechanism line for your process.
- A biotech recruiting page: keep the hero and team row, expand the three careers roles into full descriptions and point both CTAs at your hiring inbox.
- An early-stage investor one-pager: trim the publications list, keep the count-up metrics band and pipeline table, and set HQ_LINE to your registered office city.

## FAQ

### How do I change the molecule, pipeline stages and program codes in the Biotech Startup Website template?
The Biotech Startup Website template keeps every string in one content file and the molecule's atom and bond data in a separate data file. Set BRAND, PLATFORM, FOCUS, HQ_LINE and PROGRAM_PREFIX in your prompt, then rewrite the hero, approach steps, pipeline rows, metrics, publications, team and roles to match. Program codes are built from PROGRAM_PREFIX, so VN-241 becomes your prefix plus the same numbers. The molecule's 18-atom model is fixed geometry; to show a different compound you edit the atom and bond data, not the canvas code.

### What sections does the Biotech Startup Website template include?
The Biotech Startup Website template is a single page with a hero anchored by a code-drawn rotating molecule over a dot grid, a three-part platform explainer (problem, three-step approach, mechanism diagram), a full-width pipeline table with Discovery, Preclinical, Phase I and Phase II columns, a count-up metrics band, a publications list, a team row of monogram tiles and a careers strip with three roles. The footer carries the headquarters line and both CTAs are mailto links.

### Can I use the Biotech Startup Website template for an ag-biotech or materials company instead of protein design?
Yes. The Biotech Startup Website template ships two demo cases: a protein-design company and a soil-microbiome startup. The soil-microbiome demo shows brand, platform, focus and program codes swapping while the layout holds. For an ag-biotech or materials company, set BRAND, PLATFORM and FOCUS to your science, rewrite the approach steps and mechanism line to your method, and replace the pipeline programs with your own stages. Keep the copy at platform-science level with no medical or efficacy claims.

### Is the Biotech Startup Website template free, and what do I get with Pro?
The Biotech Startup Website template is free. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs Pro, which also gives you the full prompt and the source code of the demos. The brief, stack and variables are shown publicly either way.

### How do I replace the invented publications and team members in the Biotech Startup Website template?
The Biotech Startup Website template keeps publications, team tiles and roles in the same content file as the rest of the copy. Swap the invented paper titles and generic journal descriptors for your own, replace the monogram tiles with your team's initials and names, and edit the three careers roles to your open positions. The location shown on team and role cards comes from the city segment of HQ_LINE, so set that first. The layout and hover motion stay as they are.

### How do I build a biotech startup website with AI?
Copy the prompt from this page or run npx vibefather add biotech-startup-website, replace [BRAND], [PLATFORM], [FOCUS] and [HQ_LINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Biotech Startup Website demo?
The Protein design biotech case was built by GLM-5.3 in ZCode; the Soil microbiome startup case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Biotech Startup Website template use?
Biotech Startup Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Biotech Startup Website template for a client or a business?
The Biotech Startup Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Biotech Startup Website template work on mobile?
Yes. Every Biotech Startup Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Biotech Startup Website on VibeFather](https://vibefather.ai/templates/biotech-startup-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
