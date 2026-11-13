# UX Designer Case Study Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a four-entry static portfolio for [BRAND], an invented [DISCIPLINE] working on [PROJECT_SET]. The site comprises a project index, a query-driven long-form case-study page, an about page, and a contact page. Its signature is an editorial evidence board: crisp code-drawn product screens, research annotations, low-fidelity wireframes, and an accessible before/after comparison. Use the exact default project content below when PROJECT_SET is Healthcare and financial tools; otherwise rename and rewrite all projects, research, interface labels, and outcomes to fit the supplied project set while preserving the same structure.

- Audience: Independent UX and product designers, design job seekers, researchers, and small studios that need to explain process and decisions rather than show only finished visuals.
- Goal: Help a recruiter, hiring manager, or prospective client move from a quick project overview to credible process evidence and then to a focused project inquiry.
- Tone: Thoughtful, precise, warm, and evidence-led. Write in first person for the designer, use concrete observations and decisions, avoid agency superlatives, and identify every project and outcome as fictional sample content.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/instrument-serif (OFL), @fontsource-variable/inter (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Configure Vite multi-page entries for index.html, case-study.html, about.html, and contact.html; set base: './' and build.sourcemap: false.
  - Put all variable values, navigation labels, project data, case-study prose, research notes, metrics, about copy, and form options in src/content.ts; rewrite every related content string when the variables change.
  - Create shared Header, Footer, Reveal, ProjectCard, BrowserMock, Wireframe, BeforeAfter, CaseNav, and ContactForm components; each HTML entry mounts its own React root.
  - Use Motion only for transform and opacity reveals; implement reading progress, wireframe selection, accordions, and the comparison slider with local React state and native events.
  - Import the self-hosted Fontsource packages in the shared entry CSS and define the listed palette, typography, spacing, and breakpoints in Tailwind.
  - On case-study.html read the project query parameter, render the matching project, and default to the first project when the parameter is absent or unrecognized.

## Variables
- [BRAND] — Designer name (default: "Mara Voss"). An invented designer name used as the portfolio identity.
- [DISCIPLINE] — Design discipline (default: "Product designer"). A short professional role such as Product designer or UX designer.
- [PROJECT_SET] — Case-study subject set (default: "Healthcare and financial tools"). The connected industries or topics covered by all three projects.
- [LOCATION] — Home base (default: "Portland, Oregon"). City and region shown in the profile and contact details.
- [CONTACT_EMAIL] — Contact email (default: "hello@maravoss.design"). Email address used by the contact links and prepared inquiry.
- [AVAILABILITY] — Availability note (default: "Booking one new engagement"). A short current availability statement.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/ux-designer-case-study-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/ux-designer-case-study-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/ux-designer-case-study-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
