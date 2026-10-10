# Kentank — Premium Water Storage Solutions

A responsive, multi-page marketing site for Kentank (water storage tanks, Kenya), built as a faithful replica of the original site with updated contact details.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **motion**, and **lucide-react**.

## Pages

| Route        | Description                                             |
| ------------ | ------------------------------------------------------- |
| `/`          | Home — hero, product preview, about, why-choose, CTA    |
| `/products`  | Full catalogue of all 10 tanks (1,000L – 10,000L)       |
| `/about`     | Company story, video, stats                             |
| `/contact`   | Contact details + WhatsApp quote form                   |

## Editing content

All copy, products, prices, and contact details live in **`lib/site.ts`** — edit that one file to change phone numbers, email, product prices, or descriptions.

Media (images + video) lives in `public/media/`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploying to Vercel

**Option A — Vercel CLI (fastest for a `*.vercel.app` link):**

```bash
npm i -g vercel
vercel login      # authenticate in your browser
vercel            # first run: answer the prompts, creates a preview URL
vercel --prod     # promote to your production vercel.app URL
```

**Option B — GitHub + Vercel dashboard:**

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.

No configuration is required; the project builds cleanly with the default Next.js preset.

## Contact details in use

- Phone: +254 714 749328 / 0756 556 104
- Email: rmoulderskenya@gmail.com
- WhatsApp: wired to +254 714 749328
