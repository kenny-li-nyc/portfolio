# portfolio

A personal portfolio site styled as a code editor — file explorer on the
left, click a file to open it in a tab. Built as a plain static site
(HTML/CSS/JS, no build step) so it deploys to GitHub Pages with zero
configuration beyond the included GitHub Action.

## Structure

```
index.html              the editor shell (sidebar, tabs, status bar)
assets/style.css         all styling — dark editor theme
assets/script.js         file contents + tab/flip-card behavior — most edits happen here
assets/resume.pdf        placeholder — replace with your real resume
.github/workflows/deploy.yml   CI/CD: deploys to GitHub Pages on every push to main
```

## What to customize before publishing

1. **`assets/script.js`** — the `files` object holds every page's content
   (README, the two automation write-ups, skills). Replace the placeholder
   project details and metrics with your real numbers. Replace `flipSkills`
   and `plainTags` with your actual skills and insight sentences.
2. **`assets/resume.pdf`** — replace the placeholder file with your real
   resume, same filename.
3. **`index.html`** — update the GitHub/LinkedIn links in the sidebar
   footer, and the `<title>`/meta description at the top of the file.
4. Add or remove sidebar files by adding an entry to `files` in
   `script.js` and a matching `<li class="file-item" data-file="...">` in
   `index.html`.

## Deploying

This repo is set up for a **project page** (`username.github.io/portfolio`).

1. Push this repo to GitHub under the name `portfolio` (or whatever name
   you'd like — the URL will follow the repo name).
2. In the repo settings, go to **Settings → Pages → Build and deployment**
   and set the source to **GitHub Actions**.
3. Push to `main` — the included workflow
   (`.github/workflows/deploy.yml`) builds and deploys automatically.
4. Your site will be live at `https://<username>.github.io/portfolio/`.

No build tooling, no dependencies, no Aider/Gemini step required for this
part — it's plain static files, so the workflow above is the entire
pipeline.
