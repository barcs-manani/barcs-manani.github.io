# Portfolio template — customization notes

Single-file, no build step: `index.html` has everything inline (CSS + JS), so you can
push it straight to GitHub Pages.

## Positioning choice (read this first)

Your resume is EEE on paper but software dev in practice. The template leans into that
on purpose instead of hiding it:

- **Hero, About, Skills, Projects** all lead with the software stack (FastAPI, React,
  PostgreSQL) — that's what a dev hiring manager scans for first.
- **Experience** puts Tripzoori and Safaricom front and center as a normal timeline.
  The four earlier EEE internships (EMS Consultants, Goldmarx, Eaton, Kenafric) are
  collapsed into a `<details>` "Earlier engineering foundations" toggle — present and
  honest, but not competing for attention with your dev work.
- **Engineering toolkit** (MATLAB, KiCAD, Proteus, TIA Portal) gets its own skills card,
  visually secondary (amber label instead of teal), so it reads as "extra depth" rather
  than "actually an EE."
- The **framing copy** (hero subhead, About paragraphs, terminal panel) explicitly turns
  the EEE degree into a differentiator — "systems thinking," "hardware-constraint
  fluency" — rather than something to explain away. Recruiters read this as a strength
  if you say it like one.

Adjust that balance if you disagree — e.g. drop the terminal's `background.txt` line, or
un-collapse the foundations section, if you'd rather de-emphasize EEE further.

## What to edit before publishing

Search the file for `EDIT:` comments — they mark every spot that needs your input:

1. **Résumé link** — the "Download résumé" button points to `./resume.pdf`. Add that
   file to the repo root (or delete the button).
2. **Project #3** — currently a placeholder card. Swap in a real personal/side project
   (even a small finished one). If you don't have one yet, a good weekend project: take
   something from your Tripzoori work and rebuild a small standalone version of it, or
   package one of your automation scripts as a proper repo with a README.
3. **LinkedIn** — not included since none was in your resume. Add a `<a>` next to the
   GitHub link in the Contact section if you have one.
4. **Copy tone** — the About section and terminal intro are a first draft based on your
   resume. Read it out loud and adjust anything that doesn't sound like you.

## Structure

```
index.html   — everything (markup, styles, script)
README.md    — this file
```

If you'd rather split it into `style.css` / `script.js` for a more typical repo layout,
copy the `<style>` block contents into `style.css`, the `<script>` block contents into
`script.js`, and replace them in `index.html` with:

```html
<link rel="stylesheet" href="style.css">
...
<script src="script.js"></script>
```

## Deploying to GitHub Pages

1. Create a repo (either `barcs-manani.github.io` for a root-domain site, or any
   other name for a project site).
2. Push `index.html` (and `resume.pdf` if you add it) to the `main` branch.
3. In the repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. Your site goes live at `https://barcs-manani.github.io/` (or
   `https://<username>.github.io/<repo-name>/` for a project repo).

## Design notes

- Palette: dark ink background, teal "signal" accent (nods to circuits/traces —
  a deliberate link to your EEE background, not just a color choice), amber used
  sparingly for the secondary/engineering-toolkit content.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (terminal/labels/tags).
- Signature element: the experience timeline is styled as a signal trace with glowing
  nodes — ties the "engineer → developer" narrative into the visual design itself.
- Respects `prefers-reduced-motion`; keyboard focus states are visible throughout.
