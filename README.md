# Ganapathy Fit Studio — Website

Production-quality demo website for **Ganapathy Fit Studio** (tagline: *FITNESS · STRENGTH · CONFIDENCE*), a neighbourhood gym at 11/7 Ariyamangalam Area, Ganapathy Nagar, Tiruchirappalli, TN 620010, India.

> **Demo notice:** All business details on this site (phone, prices, hours, equipment, amenities, trainers, schedules, offers) are demo/placeholder values carrying visible verification labels. Nothing should be treated as verified until confirmed with the gym. No reviews, ratings, awards or claims are fabricated anywhere on the site.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 (CSS-first `@theme` tokens in `app/globals.css`)
- lucide-react (icons)
- `next/og` for the Open Graph image (`app/opengraph-image.tsx`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (TS + ESLint)
npm run start    # serve production build
npm run lint     # eslint
npm run typecheck
```

## Deploying to Vercel

1. Push this folder to a Git repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
3. Deploy. No environment variables are required for the demo.

## Environment variables (future)

None required today. When wiring a real backend or custom domain, set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical/OG base URL (falls back to `http://localhost:3000`) |
| `FORMSPREE_ENDPOINT` or equivalent | Enquiry form backend (see below) |

## Enquiry form integration

`components/EnquiryForm.tsx` performs a local simulated submit. The seam is `submitEnquiry()` — replace it with one call to:

- **Formspree**: `fetch(FORMSPREE_ENDPOINT, { method: "POST", body: JSON.stringify(data) })`
- **Supabase**: `supabase.from("enquiries").insert(data)`
- **Firebase**: `addDoc(collection(db, "enquiries"), data)`
- **Custom REST/CRM**: any `fetch` to your endpoint`

No keys are hardcoded anywhere.

## Replacing images

All image URLs live in `data/site.ts` under `images`. Swap an Unsplash hotlink for a local path (e.g. `/images/hero.jpg` after adding the file to `public/images/`) — one edit per image, no component changes needed. `next.config.mjs` already allows `images.unsplash.com`.

## Verification checklist (before production publication)

- [ ] Phone number (`+91 94439 55620` is a placeholder/current-listing detail)
- [ ] Full address and Google Maps pin placement (10.8087981, 78.7289075)
- [ ] Opening hours (proposed: Mon–Sat 05:30–21:30, Sun 06:00–12:00)
- [ ] Equipment list per zone
- [ ] Amenities (all 10 marked TO BE CONFIRMED)
- [ ] Membership pricing and inclusions (indicative demo pricing)
- [ ] Class names, times and days (all demo/proposed)
- [ ] Trainer names, photos, qualifications (currently no-name placeholder profiles)
- [ ] Launch offer terms (₹499 first-50 concept — demo/launch concept)
- [ ] Social links (none embedded)
- [ ] Google Business Profile copy (`google-business-profile.txt`) — verify before submission
- [ ] Production photography (replace Unsplash hotlinks in `data/site.ts`)
- [ ] Enquiry form backend (replace `submitEnquiry` seam)
- [ ] `NEXT_PUBLIC_SITE_URL` set for canonical/OG URLs
