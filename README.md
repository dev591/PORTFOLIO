# Dev Chalana — Retro Pixel Portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4 and Framer Motion, in a retro pixel-art style.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Edit content

Everything personal lives in **`data/portfolio.ts`**: profile, projects, experience, skills, achievements,
leadership and nav links. No other file needs to change for content updates.

- **Project links:** fill `github` / `demo` for a project; empty strings hide the buttons.
- **Project images:** drop a PNG into `public/images/` and set `image: "/images/your-file.png"` on the project
  (16:9 works best). Without it, the code-drawn pixel scene in `components/pixel-art/scenes.tsx` is shown.
- **Avatar:** set `profile.avatar` to an image in `public/images/` to replace the pixel avatar.
- **Resume:** replace `public/resume/Dev_Chalana_Resume.pdf` (keep the name, or update `profile.resume`).

## Structure

- `app/` — layout (fonts, theme, SEO), home page, `projects/[slug]` case-study pages
- `components/` — sections (Hero, Projects, Experience, Skills, Achievements, About, Contact, Footer, Navbar)
- `components/ui/` — PixelButton, PixelCard/PixelBadge, SectionTitle, Reveal
- `components/pixel-art/` — `Sprite` (char-map → SVG), sprite maps, hand-drawn scenes
- `app/globals.css` — colour tokens (light + dark), grid background, pixel shadows, animations

## Deploy (Vercel, free)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → Add New Project → import the repo → Deploy (no settings needed).
3. Rename the Vercel project to `dev-chalana` so the URL is `dev-chalana.vercel.app` (the sitemap, robots.txt
   and link-preview image assume this). If you end up on a different URL or a custom domain, set the environment
   variable `NEXT_PUBLIC_SITE_URL` (e.g. `https://devchalana.com`) in Vercel → Settings → Environment Variables
   and redeploy.

The link-preview image (`app/opengraph-image.tsx`) uses your photo and the Silkscreen font in `assets/`.
