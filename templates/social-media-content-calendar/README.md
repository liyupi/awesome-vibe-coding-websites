# Social Media Content Calendar <sup>PRO</sup>

> Plan four weeks of posts, try four formats, and move a draft from its first idea to the calendar.

<a href="https://vibefather.ai/templates/social-media-content-calendar?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/social-media-content-calendar/dfb54b60-e32d-4c1d-9b67-961bc3d635fe/webp.46c368918b.webp" width="100%" alt="Social Media Content Calendar — Colorful Post Planner with Live Previews built by GPT-6 Astra"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/social-media-content-calendar?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A tape dispenser sits under the studio lights, the caption has a first draft, and someone still has to decide when the post goes out. This calendar puts those decisions in one place. It opens on four weeks of content for a small stationery maker, with a photograph of the next scheduled post and a grid of ideas, drafts and finished pieces. Pink, blue and yellow tickets distinguish the campaigns. The weekly view gives each post a place within the day.

Open a ticket to work on the caption beside its preview. You can check how the same image crops to a square or a tall video cover, break an explanation into a text thread, or write a longer professional post. A character count follows your edits. Saved hashtag sets keep recurring tags together. If a shoot slips, move the ticket to another day or choose a new week and daypart in the editor. The board picks up the change, and your plan is still there when you reopen the browser.

A media contact sheet shows which posts use each photograph. The sample insights view lets you inspect a publishing slot and see which published pieces collected the most saves. A CSV export includes your edited captions and schedule for a handoff. To adapt the planner for your shop, give the cycle a name, set three campaigns and replace the five stationery photographs with your own product shoot. The grid works equally well for a collection launch or a sequence of packing and workshop stories.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [Web App](../../types/web-app.md) |
| Style | [Editorial](../../styles/editorial.md), [Playful](../../styles/playful.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite + React + TypeScript + Vanilla CSS + lucide-react |
| Pages | 4 |
| Built with | [GPT-6 Astra](../../models/gpt-6-astra.md) in Codex |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/social-media-content-calendar?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/social-media-content-calendar?case=dfb54b60-e32d-4c1d-9b67-961bc3d635fe&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/social-media-content-calendar/dfb54b60-e32d-4c1d-9b67-961bc3d635fe/shot_desktop.b83af4015f.webp" width="100%" alt="Social Media Content Calendar — Home desk launch, built by GPT-6 Astra in Codex"></a><br>
<b>Home desk launch</b><br>
<sub>Built by <b>GPT-6 Astra</b> in Codex · <a href="https://vibefather.ai/templates/social-media-content-calendar?case=dfb54b60-e32d-4c1d-9b67-961bc3d635fe&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Workspace brand | Clip Orchard |
| `[CYCLE_NAME]` | Planning cycle | The Desk Edit |
| `[AUDIENCE]` | Reader | people setting up their first home desk |
| `[CAMPAIGNS]` | Campaign names | Color Drop / Bench Notes / Desk Rituals |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/social-media-content-calendar?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A ceramics studio launching a seasonal collection: set the brand and cycle to your kiln opening, name three campaigns for glazes, process and studio life, and swap the five photographs for your own pots.
- A freelance photographer planning client work: rewrite the audience for small brands you shoot for, turn the campaigns into shoot types, and use the media contact sheet to see which images appear in more than one post.
- A bakery running a weekly menu: rename the cycle after your season, set campaigns for new bakes, behind the counter and customer stories, and move tickets when a bake slips a day.
- A solo marketer handing work to a freelancer: edit captions and schedule in the calendar, then export the CSV so the writer has the exact text and slots to work from.

## FAQ

### How do I change the brand, planning cycle and campaigns in the Social Media Content Calendar template?
The Social Media Content Calendar template is driven by four text variables: the workspace brand, the planning cycle name, the audience and three campaign names. Set the brand to your studio name, rename the cycle for your collection, describe who the posts are for and give three short campaign names in pink, blue and yellow order. Then rewrite every headline, caption and label to match, since the shipped copy is written for a stationery maker.

### Can I replace the stationery photographs with my own product shoot?
Yes. The Social Media Content Calendar template uses local images with stable media IDs and fixed dimensions, and the sample cycle includes five stationery photographs. Swap those files for your own product shots, keep the same dimensions so the crops stay clean, and update the media contact sheet so it still shows which posts use each photograph.

### Where do saved captions and scheduled posts go after I close the browser?
Edits in the Social Media Content Calendar template persist in versioned localStorage through a single local data adapter. Captions, media selections, saved hashtag sets, moved tickets and the current editor draft survive a reload, and the template gives feedback if a save fails. There is no backend or external API, so the plan lives in that browser rather than on a shared server.

### How does the CSV export work and what does it include?
The Social Media Content Calendar template builds a UTF-8 CSV file in the browser and downloads it, with no server involved. The export carries your edited captions and the schedule, so a writer, photographer or client can pick up the plan elsewhere. Campaign names carry through to the CSV as well, which keeps a handoff readable when several campaigns run in the same cycle.

### What can I do inside a post ticket in the Social Media Content Calendar template?
Opening a ticket in the Social Media Content Calendar template puts the caption beside its preview. You can check how one image crops to a square or a tall video cover, break an explanation into a text thread, write a longer professional post and watch a character count follow your edits. Saved hashtag sets keep recurring tags together, and if a shoot slips you move the ticket to another day or pick a new week and daypart.

### How do I build a social media content calendar with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add social-media-content-calendar, replace [BRAND], [CYCLE_NAME], [AUDIENCE] and [CAMPAIGNS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Social Media Content Calendar demo?
The Home desk launch case was built by GPT-6 Astra in Codex. Each build used the published prompt with nothing added.

### What tech stack and pages does the Social Media Content Calendar template use?
Social Media Content Calendar is a 4-page site built with React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Social Media Content Calendar template free to use?
Social Media Content Calendar is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Social Media Content Calendar template work on mobile?
Yes. Every Social Media Content Calendar build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Social Media Content Calendar on VibeFather](https://vibefather.ai/templates/social-media-content-calendar?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
