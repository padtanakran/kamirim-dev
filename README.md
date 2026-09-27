# kamirim-dev

Personal developer resource hub — free Roblox plugins, tools, and more.

**Live site:** [kamirim.github.io](https://kamirim.github.io)

---

## Stack

- **Framework:** [Astro](https://astro.build) (static output)
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions (auto-deploy on push to `main`)
- **Content:** Markdown + JSON (no database, no backend)

## Project Structure

```
src/
├── components/       # Header, Footer, ProjectCard
├── content/
│   └── projects/     # One .md file per project
├── content.config.ts # Astro v5 content collection schema
├── data/
│   ├── categories.json   # Category tabs (add new without touching UI)
│   └── site.json         # Global config: name, email, donations, links
├── i18n/
│   ├── en.json       # English translations
│   ├── th.json       # Thai translations
│   └── index.ts      # t(), localized(), getLang() helpers
├── layouts/
│   └── Base.astro    # HTML shell with SEO meta
├── pages/
│   ├── index.astro        # Homepage
│   ├── about.astro        # About page
│   ├── donate.astro       # Donate page
│   └── projects/
│       ├── index.astro    # Project listing with category tabs
│       └── [slug].astro   # Dynamic project detail pages
└── styles/
    └── global.css    # Design tokens + global styles
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Adding a New Project

1. Create a new file: `src/content/projects/my-project.md`
2. Fill in the frontmatter (see existing projects as reference)
3. Add any images to `public/images/`
4. Commit and push → GitHub Actions auto-deploys

## Adding a New Category

Edit `src/data/categories.json`:

```json
{
  "id": "maps",
  "name": {
    "en": "Maps",
    "th": "แมพ"
  }
}
```

No UI code changes required.

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages.

**Setup required (one-time):**
1. Go to your repo → **Settings** → **Pages**
2. Set source to **GitHub Actions**
3. Push to `main`

## Configuration

All global config lives in `src/data/site.json`:
- Site name, tagline, description
- GitHub and Roblox profile links
- Contact email
- Donation platform links

## Languages

Supports **English** and **Thai**.

- UI strings: `src/i18n/en.json` / `src/i18n/th.json`
- Project content: bilingual fields in frontmatter
- Language stored in `localStorage`
