# Resume Builder Web App

> Edit your experience beside the printed page, check its reading order, and save a copy to take with you.

<a href="https://vibefather.ai/templates/resume-builder-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/resume-builder-web-app/8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4/webp.f57c8a46e5.webp" width="100%" alt="Resume Builder Web App — Live Resume Editor with Print Preview built by GPT-6 Astra"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/resume-builder-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

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
| Built with | [GPT-6 Astra](../../models/gpt-6-astra.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/resume-builder-web-app?case=8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/resume-builder-web-app/8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4/shot_desktop.161ce28382.webp" width="100%" alt="Resume Builder Web App — Museum exhibit designer, built by GPT-6 Astra in Codex"></a><br>
<b>Museum exhibit designer</b><br>
<sub>Built by <b>GPT-6 Astra</b> in Codex · <a href="https://vibefather.ai/templates/resume-builder-web-app?case=8aa9cb28-cf3b-4f29-b071-e107bc0ca7d4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A career coach working with graduates: set CANDIDATE and PROFESSION to a student, swap the exhibit bullets for coursework and campus roles, and hide sections the student has not filled yet.
- An independent designer: set CAREER_FOCUS to installations and fabrication, replace the sample roles with short contracts, and use the Technical layout to pack projects close together.
- A museum or gallery hiring manager: keep the exhibit vocabulary, rewrite the summary for your own background, and add a custom section for fellowships or workshops.
- A student applying for a first role: set the sample identity to your own name, move Projects ahead of employment, and switch to the Sidebar layout for supporting skills.

## FAQ

### How do I change the sample resume content to my own work history?
The Resume Builder Web App ships with a filled sample for Mira Calder, an exhibit designer, so you can edit it in place. Open each section in the Resume sections panel and rewrite the Role, Organization, Duration and Highlights fields. Contact edits the name, target role, location and email. To change the default identity across the whole app, set BRAND, CANDIDATE, PROFESSION and CAREER_FOCUS in the prompt before building.

### How does the Resume Builder Web App show whether my resume still fits on one page?
The Resume Builder Web App prints the document at physical size on a Letter or A4 sheet, and a page indicator tells you when content crosses a sheet boundary. The preview is the actual paper you will print, so adding a bullet shows its effect on the sheet immediately. The plain-text view lets you read every visible section in sequence before you print or save a PDF.

### What is the difference between the Classic, Sidebar and Technical layouts?
The Resume Builder Web App offers three layouts that give the same material different priorities. Classic leaves a generous measure for a narrative application, Sidebar groups supporting details into a narrow column, and Technical packs short roles and projects close together. Each layout works on Letter or A4 paper, and the selected layout swatch is marked in marigold on the preview board.

### How do I save my resume and move it to another device?
Changes in the Resume Builder Web App save in the browser on the current device, shown by the save status in the header. To move the resume elsewhere, use the File menu and choose Export JSON, which preserves the editable sections and layout settings. Import JSON on another session restores them. The print action opens a clean copy of the selected paper layout to save as a PDF.

### Can a career coach use the Resume Builder Web App to prepare a student's resume?
A career coach can replace the sample with a recent graduate's coursework and campus responsibilities, then use the layouts and page indicator to keep the document to a sensible length. The Resume Builder Web App runs entirely in the browser with no backend, so a coach can work through a resume in one sitting and export a JSON copy for the student to continue.

### How do I build a resume builder web app with AI?
Copy the prompt from this page or run npx vibefather add resume-builder-web-app, replace [BRAND], [CANDIDATE], [PROFESSION] and [CAREER_FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Resume Builder Web App demo?
The Museum exhibit designer case was built by GPT-6 Astra in Codex. Each build used the published prompt with nothing added.

### What tech stack and pages does the Resume Builder Web App template use?
Resume Builder Web App is a single-page site built with React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Resume Builder Web App template for a client or a business?
The Resume Builder Web App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Resume Builder Web App template work on mobile?
Yes. Every Resume Builder Web App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Resume Builder Web App on VibeFather](https://vibefather.ai/templates/resume-builder-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
