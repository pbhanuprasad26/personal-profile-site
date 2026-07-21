# Bhanu Prasad Pochannapeta — Personal Site

A production-ready personal brand site built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Statically exported for GitHub Pages.

## Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme tokens, no `tailwind.config.js`)
- **Framer Motion** — scroll reveals, hero sequence, accordions
- **next-themes** — dark/light mode
- **cmdk** — command palette (`⌘K` / `Ctrl+K`)
- **lucide-react** — icons
- **@fontsource** — self-hosted variable fonts (Inter, Inter Tight, JetBrains Mono)

## Folder structure

```
app/
  layout.tsx          Root layout — fonts, metadata, theme provider, skip link
  page.tsx             Assembles all sections in order
  globals.css          Design tokens (color, type, spacing primitives)
  robots.ts             robots.txt generation
  sitemap.ts            sitemap.xml generation
components/
  nav.tsx               Floating nav + mobile menu + theme toggle
  loader.tsx             Load-in sequence
  command-palette.tsx    ⌘K quick navigation
  scroll-progress.tsx    Top progress bar
  back-to-top.tsx         Floating back-to-top button
  section-header.tsx      Shared eyebrow/heading/intro block
  theme-provider.tsx       next-themes wrapper
  footer.tsx
  sections/
    hero.tsx
    executive-summary.tsx   KPI cards
    current-focus.tsx
    journey.tsx              Vertical roadmap
    experience.tsx           Expandable case studies
    projects.tsx
    recognition.tsx          Jessica Witcher recommendation viewer
    knowledge-explorer.tsx    Interactive technical expertise explorer
    tech-ecosystem.tsx
    learning-roadmap.tsx
    vision.tsx
    collaboration.tsx
    education.tsx
    contact.tsx
lib/
  content.ts            All site copy — the single source of truth
  utils.ts               cn() class-merge helper
public/
  portrait.webp           Optimized hero portrait (25KB, resized from original)
  resume-bhanu-prasad-pochannapeta.pdf   Resume download (see Manual Steps)
```

Content lives entirely in `lib/content.ts`. To update any copy — a new role, a new stat, a revised bullet — edit that file only; no component changes needed.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Note: in dev mode the site runs without the `basePath` prefix, so it will not exactly mirror the deployed GitHub Pages URL structure — that only applies to the exported build.

## Building for production / GitHub Pages

```bash
npm run build
```

This produces a fully static site in `out/`. `next.config.ts` sets:

- `output: "export"` — static HTML/CSS/JS, no server required
- `basePath: "/personal-profile-site"` — required because GitHub Pages project sites are served at `https://<user>.github.io/<repo>/`, not the domain root
- `images: { unoptimized: true }` — static export can't run Next's server-side image optimizer

### Deploying to GitHub Pages

1. Push this repository to GitHub as **`personal-profile-site`** under your account (or update `REPO_NAME` in `next.config.ts` and the URLs in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` if you use a different repo name).
2. Run `npm run build`.
3. Deploy the `out/` folder to the `gh-pages` branch (or configure GitHub Pages to serve from a `docs/` folder or via GitHub Actions — either works with a static `out/` folder).
   - Simplest option: install `gh-pages` (`npm i -D gh-pages`), add a script `"deploy": "gh-pages -d out"`, then run `npm run build && npm run deploy`.
4. In the repo's Settings → Pages, confirm the source is set to the branch/folder you deployed to.

If you ever move to a **custom domain** or a **user page** (`pbhanuprasad26.github.io` root repo instead of a project page), set `BASE_PATH` to `""` in `next.config.ts` and update the absolute URLs in the files listed above.

## Manual steps required after download

1. **Contact form**: `components/sections/contact.tsx` has a placeholder Formspree endpoint (`YOUR_FORM_ID`). Create a free form at https://formspree.io, and replace the `FORMSPREE_ENDPOINT` constant with your real endpoint. Until this is done, the form will fail with a visible error message rather than silently losing submissions.
2. **GitHub link**: confirm `person.github` in `lib/content.ts` points to your actual GitHub profile URL.
3. **Resume file**: `public/resume-bhanu-prasad-pochannapeta.pdf` is currently your original, unrevised resume (uploaded during this build). Once you've revised it to match the site's final wording (see the discrepancies flagged earlier — PwC not listed, CriticalRiver bullet scope, state count, portfolio URL), replace this file with the same filename, or update `person.resumeHref` in `lib/content.ts` if you rename it.
4. **Repo name confirmation**: this project assumes the GitHub repo will be named `personal-profile-site` (matching your existing GitHub Pages URL). If you use a different name, update `REPO_NAME` in `next.config.ts` and the absolute URLs in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
5. **PwC section**: `experience` in `lib/content.ts` has a deliberately minimal PwC entry. Expand `responsibilities`, `impact`, and `tech` there once you're able to share engagement details publicly.

## Future updates checklist

- [ ] Swap in the revised resume PDF once finalized
- [ ] Wire up the real Formspree endpoint
- [ ] Expand the PwC case study as engagement scope becomes shareable
- [ ] Add featured GitHub repositories (the GitHub button currently links to your profile only — the codebase is structured so a "Featured Repos" block can be added without restructuring the layout)
- [ ] Add a dedicated Open Graph image for richer social share previews
- [ ] Consider adding the Enrolled Agent (EA) credential to Education once/if earned
- [ ] Revisit `learningRoadmap` and `currentFocus` statuses in `lib/content.ts` periodically — several are marked "in progress" / "exploring" and should move to "applied" as skills mature

## Design decisions worth knowing

- **No mesh gradients / particle effects**: the original brief listed these under "Background," but the same brief's Design Language section asked for Apple/Stripe/Linear-level restraint and explicitly warned against flashy gradients and gimmicky animation. The more specific instruction was followed — the hero uses a subtle form-field hairline grid (grounded in the subject: literal tax form fields) instead.
- **Global Collaboration as a node diagram, not a literal world map**: an accurate, licensed world map graphic wasn't available in this environment, and a decorative one risked looking templated. The three-node connection diagram (Hyderabad / Bangalore / Plano) tells the same distributed-team story with the same restraint as the rest of the site.
- **lucide-react pinned to 0.500.0**: the latest major version (1.x) removed all brand icons (GitHub, LinkedIn, Mail) due to trademark concerns. 0.500.0 is the newest version that both supports React 19 cleanly and still ships those icons.
- **Fonts self-hosted via `@fontsource`, not `next/font/google`**: this build environment can't reach Google Fonts' servers at build time. `@fontsource` packages ship the actual font files locally and are bundled at build time, so the result is functionally identical (same fonts, same performance characteristics) without a runtime dependency on Google's CDN.
- **Portrait re-encoded to WebP**: the uploaded portrait was a 1.7MB PNG. Since static export can't use Next's on-the-fly image optimizer, it's pre-resized and compressed to a 25KB WebP at build time instead.
