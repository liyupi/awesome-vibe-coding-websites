# Resume Builder Web App

> Edit your experience beside the printed page, check its reading order, and save a copy to take with you.

<a href="https://vibefather.ai/templates/resume-builder-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/resume-builder-web-app/8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4/webp.f57c8a46e5.webp" width="100%" alt="Resume Builder Web App — Live Resume Editor with Print Preview built by GPT-6 Astra and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/resume-builder-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A resume can look finished until one extra bullet pushes an education entry onto a second page. This workspace puts the editor and the actual sheet of paper side by side. The opening sample belongs to an exhibit designer who turns museum research into rooms people can explore. Expand Experience and change the number of listening stations in one of her installations. The same sentence changes on the sheet as you type.

Three layouts give the material different priorities. Classic leaves a generous measure for a narrative application, Sidebar groups supporting details into a narrow column, and Technical packs short roles and projects close together. Each works on Letter or A4 paper. You can hide an unfinished section, move a project ahead of employment, or add a custom section for a fellowship. The page indicator tells you when the content crosses a sheet boundary. The plain-text view lets you read every visible section in sequence before you print.

Career coaches can replace the sample with a recent graduate’s coursework and campus responsibilities. An independent designer could start with installations, fabrication skills, and short contracts. The sample identity, working history, and project vocabulary can all change while the editor keeps its forest-green drawing board and warm paper controls. On a phone, switching between Edit and Preview keeps each field and each sheet within reach. Changes save in the browser on the current device. Exporting a JSON copy preserves the editable sections and layout settings for another session, while the print action opens a clean copy of the selected paper layout for saving as a PDF.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Web App](../../types/web-app.md) |
| Style | [Editorial](../../styles/editorial.md), [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS |
| Pages | 1 |
| Built with | [GPT-6 Astra](../../models/gpt-6-astra.md) in Codex, [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/resume-builder-web-app?case=8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/resume-builder-web-app/8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4/shot_desktop.161ce28382.webp" width="100%" alt="Resume Builder Web App — Museum exhibit designer, built by GPT-6 Astra in Codex"></a><br>
<b>Museum exhibit designer</b><br>
<sub>Built by <b>GPT-6 Astra</b> in Codex · <a href="https://vibefather.ai/templates/resume-builder-web-app?case=8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/resume-builder-web-app?case=3b5a0820-594d-48f7-bc52-d273200581dc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/resume-builder-web-app/3b5a0820-594d-48f7-bc52-d273200581dc/shot_desktop.2b334e68af.webp" width="100%" alt="Resume Builder Web App — Food program coordinator, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Food program coordinator</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/resume-builder-web-app?case=3b5a0820-594d-48f7-bc52-d273200581dc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Editor name | Quirefield |
| `[CANDIDATE]` | Candidate name | Mira Calder |
| `[PROFESSION]` | Target role | Exhibit Designer |
| `[CAREER_FOCUS]` | Career focus | Accessible museum exhibits, tactile interpretation, and small touring installations |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add resume-builder-web-app` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A career coach: set BRAND to your practice name, replace the sample with a recent graduate's coursework and campus roles, and keep the plain-text view for reviewing reading order.
- An independent designer: start from installations, fabrication skills and short contracts, and add a custom section for client references.
- A student applying for internships: set PROFESSION to the target role, hide the Workshops section until it is finished, and export JSON between sessions.
- A food program coordinator: use CAREER_FOCUS to write kitchen and volunteer roles, then switch to Sidebar so supporting skills sit in a narrow column.

## FAQ

### How do I change the sample resume to my own name and job title?
Open the Contact section in the Resume sections panel and edit the name, target role, location and email fields. The sheet updates as you type. For a different career entirely, change the BRAND, CANDIDATE, PROFESSION and CAREER_FOCUS variables in the prompt before building, so the employers, skills, education and project wording match your field rather than the exhibit designer sample.

### Can I add a section that isn't in the default resume, like certifications or a fellowship?
Yes. The Add section button in the Resume sections panel creates a custom titled section with a text field and bullets, which you can name Certifications, Fellowships or anything else. Custom sections behave like the built-in ones: drag them into position, hide them while unfinished, and they appear in the printed sheet and the plain-text reading view when visible.

### How does the resume builder keep my content to one page?
The page indicator on the preview board tells you when content crosses a sheet boundary, so you can see the moment an extra bullet pushes an entry onto a second page. You can then shorten a highlight, hide an unfinished section, or switch between Classic, Sidebar and Technical layouts, which give the same material different amounts of space.

### Where is my resume saved, and what happens if I switch computers?
Changes save in the browser on the current device, and the header shows a Saved on this device status. To move the resume elsewhere, use File and Export JSON, which preserves the editable sections and layout settings; Import JSON restores them in another session. The print action opens a clean copy of the selected paper layout for saving as a PDF.

### What does the plain-text view do, and why should I check it before printing?
The plain-text view shows every visible section in sequence, so you can read the resume the way an applicant tracking system or a screen reader might encounter it. It confirms that hidden sections stay out of the output and that the order of roles, projects and skills still makes sense before you print or export the sheet.

### How do I build a resume builder web app with AI?
Copy the prompt from this page or run npx vibefather add resume-builder-web-app, replace [BRAND], [CANDIDATE], [PROFESSION] and [CAREER_FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Resume Builder Web App demo?
The Museum exhibit designer case was built by GPT-6 Astra in Codex; the Food program coordinator case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Resume Builder Web App template use?
Resume Builder Web App is a single-page site built with React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Resume Builder Web App template for a client or a business?
The Resume Builder Web App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Resume Builder Web App template work on mobile?
Yes. Every Resume Builder Web App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Resume Builder Web App on VibeFather](https://vibefather.ai/templates/resume-builder-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
