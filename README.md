# Blake Baird — Portfolio

The live site (`/`) is a self-contained prototype at `public/ProfessionalPortfolio.html`, served in place of a Next.js page via a rewrite in `next.config.mjs`. It's a single-page app — About/Work/Resume/Contact are all client-side state within that one file, not separate routes.

Everything else in this repo is Next.js 15 + TypeScript + Tailwind, but its only real job today is the backend: the `/api/contact` route (Resend) that the live prototype's contact form posts to, plus `next.config.mjs` redirecting the old pre-redesign routes (`/about`, `/projects`, `/resume`, `/contact`) to `/` so old links and search results land somewhere real instead of showing stale content.

## Setup

```bash
npm install
cp .env.example .env.local
# Add your Resend API key to .env.local (optional - form works without it in dev)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx             # Root layout — fonts + metadata only, no nav/footer
  not-found.tsx           # 404 page
  opengraph-image.tsx     # OG image generation
  api/contact/route.ts    # Contact form API (uses Resend), called by the live prototype
next.config.mjs           # Rewrites "/" to the static prototype; redirects old routes to "/"
public/
  ProfessionalPortfolio.html  # The actual live site
  images/, assets/            # Images and the résumé PDF it references
```

## Editing the live site

`public/ProfessionalPortfolio.html` is not typical source you hand-edit freely — it's a single JSON-embedded template string inside a self-unpacking bundle (fonts/images are base64-encoded in a manifest elsewhere in the same file). Content (bio copy, project write-ups, nav, résumé, etc.) all lives inside that one embedded HTML/CSS/JS template.

## Contact form setup (Resend)

1. Sign up at [resend.com](https://resend.com) — free tier covers 3,000 emails/month
2. Create an API key from the dashboard
3. Add it to `.env.local` (local dev) and to your Vercel project's Environment Variables (production):
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
4. (Recommended) Verify a domain so emails come from `you@yourdomain.com` instead of `onboarding@resend.dev`. Until then, you can only send to the email address your Resend account itself uses.
5. In `app/api/contact/route.ts`, update the `from` field to use your verified domain

The route also has a honeypot check (a hidden `company` field the live form includes) to silently drop basic bot spam without sending an email or touching the Resend quota.

## Deploy

The site is ready to deploy to Vercel:

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `RESEND_API_KEY` as an environment variable
4. Deploy

## Tech

- Next.js 15 (App Router) — routing/redirects + the `/api/contact` route
- Resend (contact form)
- The live page itself is plain HTML/CSS/vanilla JS, not React
