# Running Shoe Product Launch Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND] launching [PRODUCT], an original fictional daily road-running shoe with a square-rounded toe and twin-arch segmented sole. This is a product concept demo with illustrative specifications.

- Audience: Everyday runners who compare fit, construction and practical details.
- Goal: Inspect actual original 3D shoe angles, choose a color and size, use a transparent size guide and preview a local bag; all commerce and drop time are clearly demo-only.
- Tone: Energetic, direct and specific, without medical claims, athlete endorsements or fabricated laboratory results.

## Stack
- Framework: Vite + React + TypeScript
- Styling: Vanilla CSS
- Libraries: vite (MIT), react (MIT), react-dom (MIT), typescript (Apache-2.0), @fontsource/barlow-condensed (OFL-1.1), @fontsource/inter (OFL-1.1), three (MIT)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to ./ and build.sourcemap to false. Use a single src/content.ts for all editable content and fully rewrite its data for variable changes.
  - Implement responsive components and CSS tokens in src/styles.css. Bundle fonts through the listed Fontsource packages; import only the weights actually used.
  - Provide semantic native controls and keyboard/touch alternatives; implement focus-managed dialogs and local-only validated form feedback.
  - Use three.js with original BufferGeometry/Shape/ExtrudeGeometry and local procedural CanvasTexture; no downloaded shoe model, logo, remote HDRI, copyrighted texture or branded silhouette. Configure antialiasing, transparent canvas, ACESFilmicToneMapping, sRGB output and capped DPR<=1.5. Use local neutral hemisphere/directional lights and a soft procedural contact-shadow plane; no external environment.
  - Original model construction: length axis x from -1.45 heel to +1.6 toe; broad squared toe with 0.24 corner radius, width .65 at forefoot/.46 heel, toe upturn .13. Create a lofted mesh upper from cross-sections, not a scaled capsule: ankle opening visible at heel, low vamp, asymmetric six oval side vents; generate a subtle woven procedural texture. Midsole is cream-free volt #E4FF1A with two large original arch recesses under midfoot; outsole consists of 8 separate rounded oblong black tread pods. Add a raised broad lace bridge with 5 short tube lace segments and thick rear loop. Absolutely no swooping logo, trademark stripe, real brand emblem or copied commercial shoe profile. Keep model premium and physically coherent, under 25k triangles.
  - Place model group at origin, provide four angle buttons Side (rotation y=0), Front (y=-1.35), Heel (y=1.65), Top (x=.8,y=.25), with neutral reset. Scroll progress across a 180vh product stage changes y from -.35 to 2.8 and x from .06 to .22. Root geometry stays identical; color changes only materials. Pointer drag and buttons also work; pause scroll control while dragging and restore using a clearly labeled Follow scroll toggle. Static photographic fallback if WebGL unavailable. Reduced motion uses discrete instant angles, never forced scrub.

## Variables
- [BRAND] — Brand (default: "Tervo Run"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [PRODUCT] — Product (default: "Relay Arc"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [WEIGHT_G] — Weight G (default: "242"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [PRICE] — Price (default: "148"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/running-shoe-product-launch-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/running-shoe-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/running-shoe-product-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
