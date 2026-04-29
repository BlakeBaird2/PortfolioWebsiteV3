# Blake Baird — Portfolio

Editorial portfolio site built with Next.js 15, TypeScript, and Tailwind CSS. Design system based on the "Editorial Portfolio" spec (Newsreader serif + Manrope sans, warm parchment background, terracotta accent).

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
  layout.tsx          # Root layout with fonts, nav, footer
  page.tsx            # Home (hero + about + disciplines)
  globals.css         # Design tokens and component styles
  projects/
    page.tsx          # Projects index
    [slug]/page.tsx   # Dynamic project detail
  resume/page.tsx     # Resume page
  contact/page.tsx    # Contact page
  api/contact/route.ts  # Contact form API (uses Resend)
components/
  Navigation.tsx      # Sticky nav with mobile menu
  Footer.tsx          # Dark footer
  ContactForm.tsx     # Client-side form with success/error states
lib/
  projects.ts         # Project data — single source of truth
```

## Editing content

- **Projects:** edit `lib/projects.ts` — adding/removing entries automatically updates the index page and creates new detail routes
- **Resume:** edit `app/resume/page.tsx` directly
- **Hero/About:** edit `app/page.tsx` directly
- **Contact info:** edit `app/contact/page.tsx` and `components/Footer.tsx`

## Contact form setup (Resend)

1. Sign up at [resend.com](https://resend.com) — free tier covers 3,000 emails/month
2. Create an API key from the dashboard
3. Add it to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
4. (Recommended) Verify a domain so emails come from `you@yourdomain.com` instead of `onboarding@resend.dev`. Until then, you can only send to your own email address.
5. In `app/api/contact/route.ts`, update the `from` field to use your verified domain

## Deploy

The site is ready to deploy to Vercel:

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `RESEND_API_KEY` as an environment variable
4. Deploy

## Design tokens

The full design system is in `tailwind.config.ts`. Key tokens:

- **Colors:** `parchment` (#faf9f7), `ink` (#1a1c1b), `ink-soft` (#444748), `terracotta` (#9a452c), `rule-soft` (#e3e2e0)
- **Typography:** Newsreader serif for headlines, Manrope sans for body
- **Spacing:** 8px unit base — `stack-sm` (16px), `stack-md` (40px), `stack-lg` (80px), `section` (120px)
- **Container:** 1280px max-width, 64px safe margin

## Tech

- Next.js 15 (App Router, React Server Components)
- TypeScript
- Tailwind CSS
- Resend (contact form)
- Google Fonts via `next/font`
