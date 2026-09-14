# Anvesh Gupta — Portfolio

Personal portfolio site built with [Astro](https://astro.build), React islands and Tailwind CSS.
Static, zero backend services, deploys anywhere that serves files.

**Live:** https://anvesh-gupta.vercel.app _(placeholder — see "Changing the domain" below)_

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
npm run preview  # serve dist/ locally
```

Requires Node.js >= 20.

## Editing your content

**Everything personal lives in [`src/config.ts`](src/config.ts).** You should rarely need to touch
a component to update the site:

| Export         | Controls                                                            |
| -------------- | ------------------------------------------------------------------- |
| `SITE_URL`     | Canonical URL, Open Graph tags, JSON-LD                             |
| `PERSON`       | Name, role, location, email, phone, résumé path, summary            |
| `SOCIALS`      | GitHub, LinkedIn, LeetCode, Codeforces, email — used in hero + footer |
| `STATS`        | The four stat tiles under the hero                                  |
| `PROJECTS`     | Project cards: blurb, cover image, stack, repo, live demo, highlights |
| `EXPERIENCE`   | Experience timeline in the About section                            |
| `EDUCATION`    | Education cards                                                     |
| `ACHIEVEMENTS` | Achievements list                                                   |
| `TECH_WALL`    | The scrolling logo marquee (each `slug` needs `public/svg/<slug>.svg`) |
| `SKILL_GROUPS` | The "Technical skills" grid                                         |

The "What I do?" accordion copy lives in [`src/React/SkillsList.tsx`](src/React/SkillsList.tsx).

### Changing the domain

Set `SITE_URL` in `src/config.ts`, then update the two hard-coded copies in
`public/robots.txt` and `public/sitemap.xml`.

### Adding a project

1. Add an entry to `PROJECTS` in `src/config.ts`.
2. Drop a cover image in `public/projects/`. Covers are cropped to a wide strip
   (`h-52` mobile / `h-72` desktop), so keep artwork edge-to-edge and **don't put text in the
   image** — the card renders the title below it.
3. Omit `preview` and the live-demo button is hidden automatically.

### Replacing the résumé

Replace `public/Anvesh_Gupta_Resume.pdf` and update `PERSON.resume` if you rename it.

## Structure

```
src/
├── config.ts               # all personal data
├── pages/index.astro       # single page: Nav → Home → About → Projects → Contact → Footer
├── layouts/Layout.astro    # <head>, meta/OG/JSON-LD, global CSS + theme tokens
├── components/
│   ├── nav.astro           # floating nav; bottom bar on mobile, scroll-shrink on desktop
│   ├── home.astro          # hero, stat tiles, logo wall, skills accordion
│   ├── experience.astro    # About: summary, experience timeline, skills, achievements, education
│   ├── projects.astro      # project cards
│   ├── contact.astro       # email + copy-to-clipboard, LinkedIn
│   ├── footer.astro        # socials, quick links, CP profiles
│   ├── socialLinks.astro   # shared social icon set
│   └── logoWall.astro      # scrolling tech marquee
└── React/
    ├── SkillsList.tsx      # "What I do?" accordion
    └── LetterGlitch.tsx    # WebGL-free canvas glitch effect
```

## Theme

Colors are CSS custom properties in `src/layouts/Layout.astro`:

```css
--background: #101010;  --sec: #a476ff;  --white: #dfdfdf;
--white-icon: #f3f3f398;  --white-icon-tr: #f3f3f310;
```

Change `--sec` to re-tint the whole site.

## Deploying

`npm run build` outputs a static `dist/`. On Vercel, the framework preset is detected
automatically — build command `npm run build`, output directory `dist`. No environment
variables are required.

### GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys the site automatically on
every push to `main`. Push this repository to GitHub, then enable **Settings → Pages → GitHub
Actions** as the source. The workflow detects project-site paths automatically, so it works
for both `username.github.io` repositories and regular project repositories.

## Credits

Based on the [dark-minimal](https://astro.build/themes/details/dark-minimal/) Astro theme by
[Gothsec](https://github.com/Gothsec/Portfolio), MIT licensed.
