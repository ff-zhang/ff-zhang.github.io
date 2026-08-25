# ff-zhang.github.io

Personal academic site — a static page styled as a terminal, built with
[Astro](https://astro.build). Served at <https://ff-zhang.github.io>.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/
npm run check    # type-check .astro/.ts
```

Requires Node 22.12 or newer (Astro 7).

## Adding content

Everything on the page comes from `src/content/`; the templates read it and
nothing else needs editing.

### A publication

Add a BibTeX entry to [`src/content/papers.bib`](src/content/papers.bib). The
file's header comment documents every supported field and carries a template
to copy. Beyond standard BibTeX:

| field | meaning |
| --- | --- |
| `pdf` | bare filename → `public/papers/<name>.pdf`, or a full URL |
| `arxiv` | bare arXiv id → `https://arxiv.org/abs/<id>`, or a full URL |
| `doi` | bare DOI → `https://doi.org/<doi>`, or a full URL |
| `code` / `slides` / `video` / `website` | full URLs |
| `award` | free text, rendered as a highlighted badge |
| `keywords` | `not-published` files it under *Preprints & workshop papers*; `selected` marks it as selected |

Entries are grouped by year, newest first, and any author matching the
aliases in `src/lib/site.ts` is bolded.

A malformed `.bib` **fails the build** with the offending line number. This is
deliberate: Astro's `file()` loader swallows parser errors and would otherwise
publish a site with an empty publication list, so `astro.config.mjs` parses the
bibliography in a `config:setup` hook where a throw actually stops the build.

### News, education, projects

Edit `news.yaml`, `education.yaml`, or `projects.yaml` in `src/content/`. Each
has a schema in [`src/content.config.ts`](src/content.config.ts) — the build
fails on a missing or mistyped field.

### Site-wide details

Name, email, links, and the section list live in
[`src/lib/site.ts`](src/lib/site.ts).

## How it works

The page is fully static: all content is in the HTML, so it works with
JavaScript disabled and is readable by search engines. The command bar at the
bottom (`help`, `ls`, `cd <section>`, `open cv`, `theme <name>`, `clear`) is
progressive enhancement — every command is a shortcut for something already
reachable by scrolling or clicking, and the bar hides itself when the script
does not run.

Themes live in `src/styles/tokens.css` and are selected by a `data-theme`
attribute on `<html>`, persisted to `localStorage` and restored by an inline
script before first paint.

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes via the official GitHub Pages actions.

> **One-time setup:** in Settings → Pages, the source must be set to
> **GitHub Actions** (not the `gh-pages` branch).
