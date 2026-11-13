# Video Production Company Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original five-page static website for [BRAND], an invented video production company in [LOCATION] specializing in [SPECIALTY]. Its centerpiece is a full-viewport showreel made by crossfading generated film stills, supported by a filterable six-project portfolio, query-driven project case studies, a studio page, and a client-side project brief. The default identity is Aster & Frame, a director-led commercial and branded-documentary studio; rewrite every project, client, service, price, and detail to fit the supplied variables.

- Audience: The site serves [AUDIENCE]. Primary visitors want to assess visual craft, understand relevant services and likely budgets, inspect complete project stories, and prepare a useful inquiry without creating an account.
- Goal: Make the portfolio immediately cinematic, prove range through six distinct projects, explain scope and process in concrete terms, and turn qualified visitors toward the work archive or project-brief flow. All interactions must work from static files with no server.
- Tone: Assured, tactile, concise, and director-led. Use specific production language and practical details rather than agency clichés, awards, inflated results, or grandiose claims. All brands, clients, people, projects, addresses, prices, and testimonials are fictional.

## Stack
- Framework: Vite 6 + React 19 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/instrument-serif (OFL-1.1), @fontsource-variable/manrope (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite with base './' and build.rollupOptions.input entries for index.html, work.html, project.html, studio.html, and brief.html; set sourcemap to false and keep all source files outside public/.
  - Give each HTML body a data-page value and let src/main.tsx mount the matching React page component. Share the header, footer, reel modal, buttons, and reveal primitives without adding a router.
  - Put every editable string and all sample data in src/content.ts: variables, navigation, client wordmarks, project records, filter labels, services, sample prices, credits, addresses, process steps, FAQs, and form options. Rewrite the complete content model when variable values change; never leave commercial-film examples in an event-film case.
  - Represent each project with id, title, client, category, image, alt, summary, challenge, approach, deliverables, credits, duration, shootDetails, and accentPosition. Use URLSearchParams only on project.html and fall back to the first project for a missing or unknown id.
  - Import Instrument Serif, Manrope Variable, and IBM Plex Mono from the listed Fontsource packages in src/index.css. Configure Tailwind 4 theme tokens for the specified colors, fonts, spacing, and keyframes; do not load any font stylesheet from a remote host.
  - Wrap the app in MotionConfig with reducedMotion='user'. Use local React state for the hero reel, reel modal, project filters, mobile navigation, FAQ accordions, and brief form; no persistence or network calls are required.
  - Download the six generated images into public/images and reference them with relative './images/<file>' paths. Create ASSETS.md at the project root with every image URL, target path, generation credit, font package, and icon license.
  - Use Lucide icons only for familiar controls such as Play, Pause, ArrowUpRight, X, Menu, Check, Copy, and ChevronDown. The studio and client identities are text wordmarks, not logo assets.
  - Ensure the production build emits only static deployable files to dist/, uses relative asset URLs, stays under 20 MB, and runs without console errors at 1440×900 and 390×844.

## Variables
- [BRAND] — Studio name (default: "Aster & Frame"). An invented production-company name used as a plain-text wordmark.
- [TAGLINE] — Hero tagline (default: "Make the story move."). A short original line that can break across two display lines.
- [LOCATION] — Studio location (default: "Portland, Oregon"). City and region shown in the hero, studio details, and footer.
- [SPECIALTY] — Production specialty (default: "Commercials and branded documentaries"). The studio's primary offer; adapt projects and services to match.
- [AUDIENCE] — Primary clients (default: "marketing leads, founders, and creative teams"). The visitors the copy and project examples should address.
- [CONTACT_EMAIL] — Contact email (default: "hello@asterandframe.example"). Used only in visible contact text and an explicit mailto link; the form itself never transmits.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/video-production-company-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/video-production-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/video-production-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
