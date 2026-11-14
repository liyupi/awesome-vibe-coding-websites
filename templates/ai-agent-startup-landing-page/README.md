# AI Agent Startup Landing Page <sup>PRO</sup>

> A dark agent-platform landing page where task cards travel a live node graph and steps pin on scroll.

<a href="https://vibefather.ai/templates/ai-agent-startup-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/ai-agent-startup-landing-page/731bb682-2ef1-44aa-966c-83d9eb71690b/webp.179df1c910.webp" width="100%" alt="AI Agent Startup Landing Page — Dark AI Agent Landing Page with Node Graph built by Claude Opus 5.5, Claude Sonnet 5.5 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/ai-agent-startup-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A dark, single-page landing site for an AI agent startup that shows how the product works instead of describing it. The hero pairs a short pitch with a live node graph: six agent nodes joined by curved, glowing paths, and small task cards that travel between them, stop at a node, change status and move on in an endless loop. Further down, a pinned Plan, Act, Review section holds the screen while the same graph rearranges itself for each step, with a progress rail and crossfading step copy. Then come the standard sections: usage metrics that count up with sparklines, a six-card feature grid, an integrations wall of invented tools with a diagonal glow sweep, three pricing tiers with a monthly and annual toggle that animates prices and shows the saving, an accordion FAQ, a closing call to action and a compact footer.

It suits founders and small teams launching an agent, automation or workflow product who want a page that explains multi-step work at a glance. The look is near-black with a faint dot grid, one cyan accent for active paths, violet for finished tasks, thin borders, glassy cards and monospace labels for agent and task names. The graph is plain inline SVG driven by requestAnimationFrame, GSAP handles the pinned section and counters, and Lenis smooths the scroll. Motion stays on transform and opacity, the graph pauses off screen, and reduced-motion visitors get a static graph and no pinning.

To adapt it, change the brand, the one-line product, the audience and the list of agent roles. Node labels, task cards, metrics, pricing copy and FAQ follow, and all copy lives in one content file, so a support crew can become a finance-close crew, or a research pipeline without touching the layout.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Landing Page](../../types/landing-page.md), [SaaS](../../types/saas.md) |
| Style | [Glass](../../styles/glass.md), [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + gsap + lenis + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/ai-agent-startup-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ai-agent-startup-landing-page?case=731bb682-2ef1-44aa-966c-83d9eb71690b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ai-agent-startup-landing-page/731bb682-2ef1-44aa-966c-83d9eb71690b/shot_desktop.d069d29e32.webp" width="100%" alt="AI Agent Startup Landing Page — Support ops agents, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Support ops agents</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/ai-agent-startup-landing-page?case=731bb682-2ef1-44aa-966c-83d9eb71690b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ai-agent-startup-landing-page?case=2e6396f1-38a0-49a9-b648-8ccc1197f2f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ai-agent-startup-landing-page/2e6396f1-38a0-49a9-b648-8ccc1197f2f5/shot_desktop.4c0ac456ba.webp" width="100%" alt="AI Agent Startup Landing Page — Finance close agents, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>Finance close agents</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/ai-agent-startup-landing-page?case=2e6396f1-38a0-49a9-b648-8ccc1197f2f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ai-agent-startup-landing-page?case=dbf9dd66-de2b-406c-af7a-ec5e50e40bb1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ai-agent-startup-landing-page/dbf9dd66-de2b-406c-af7a-ec5e50e40bb1/shot_desktop.386aeeb3ae.webp" width="100%" alt="AI Agent Startup Landing Page — Support ops agents, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Support ops agents</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/ai-agent-startup-landing-page?case=dbf9dd66-de2b-406c-af7a-ec5e50e40bb1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Orbitask |
| `[PRODUCT]` | What the product is | a multi-agent workspace that turns support and ops tickets into finished work |
| `[AUDIENCE]` | Who it is for | support and operations teams at SaaS companies |
| `[AGENT_ROLES]` | Six agent roles | Triage, Planner, Researcher, Builder, Reviewer, Dispatcher |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/ai-agent-startup-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A finance-close crew: set BRAND and PRODUCT to your close automation, then rename AGENT_ROLES to intake, reconcile, research, post, review and report so the graph shows your ledger workflow.
- A research pipeline for biotech teams: point AUDIENCE at lab and clinical ops, swap the task cards for literature review and data pulls, and rewrite the metrics to match what your pipeline tracks.
- An indie hacker launching an automation tool: keep the dark graph hero, shrink the pricing section to one plan with the monthly and annual toggle, and turn the integrations wall into the APIs you actually connect to.
- A support ops platform: set AGENT_ROLES to Triage, Planner, Researcher, Builder, Reviewer and Dispatcher, then rewrite the FAQ around ticket handoff and human checkpoints for support leads.

## FAQ

### How does the animated node graph on the AI Agent Startup Landing Page work?
The AI Agent Startup Landing Page hero renders six agent nodes in plain inline SVG, joined by curved glowing paths, and small task cards travel between them in an endless loop, stopping to change status before moving on. The graph is driven by requestAnimationFrame, pauses when it scrolls off screen, and switches to a static version for visitors who prefer reduced motion.

### What does the pinned Plan, Act, Review section do on this AI agent landing page?
The Plan, Act, Review section on the AI Agent Startup Landing Page holds the screen while the same node graph rearranges itself for each step, with a progress rail and crossfading step copy. GSAP and ScrollTrigger handle the pin, which only activates on screens wider than 768px and is skipped entirely for reduced-motion visitors.

### How do I change the agent roles and task names to match my own product?
Set AGENT_ROLES to exactly six comma-separated single-word roles in workflow order, intake first, reviewer fifth, dispatcher sixth; they label nodes N1 to N6 in every graph. Node labels, task cards, metrics, pricing copy and FAQ all live in one content file, so renaming the crew and rewriting the copy does not touch the layout.

### Can I use the AI Agent Startup Landing Page for a client project?
Commercial and client use of the AI Agent Startup Landing Page requires Pro. The template is a Pro template, so its brief, stack and variables are public while the full prompt is available to Pro members, and the source code of the demos comes with Pro. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### What should I edit first after generating the AI Agent Startup Landing Page?
Start with the four variables: BRAND for the wordmark, page title, task id prefix and email domain, PRODUCT for the one-line description, AUDIENCE for the page title and plan descriptions, and AGENT_ROLES for the six node labels. Then rewrite the hero pitch, step copy, metrics, feature grid, pricing tiers and FAQ answers in the same content file.

### How do I build an AI agent startup landing page with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add ai-agent-startup-landing-page, replace [BRAND], [PRODUCT], [AUDIENCE] and [AGENT_ROLES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the AI Agent Startup Landing Page demo?
The Support ops agents case was built by Claude Opus 5.5 in Claude Code; the Finance close agents case was built by Claude Sonnet 5.5 in Claude Code; the Support ops agents case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the AI Agent Startup Landing Page template use?
AI Agent Startup Landing Page is a single-page site built with GSAP, React and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the AI Agent Startup Landing Page template free to use?
AI Agent Startup Landing Page is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the AI Agent Startup Landing Page template work on mobile?
Yes. Every AI Agent Startup Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [AI Agent Startup Landing Page on VibeFather](https://vibefather.ai/templates/ai-agent-startup-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
