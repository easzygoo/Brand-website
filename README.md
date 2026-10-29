# EaszyGoo — Brand Website

The official brand website for **EaszyGoo**, a hyperlocal fresh vegetable and fruit delivery platform connecting customers, local vendors, and delivery partners.

Frontend only: Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons. There is no backend, database, authentication, or payment integration, and the site is separate from the EaszyGoo mobile apps.

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage: hero, about preview, the three apps, how it works, why EaszyGoo, call to action |
| `/about` | Brand story, mission and vision, the problem, how the apps connect, values |
| `/contact` | Enquiry categories and contact form (preview mode, see below) |
| `/privacy-policy` | Draft privacy policy with table of contents |
| `/terms-and-conditions` | Draft terms and conditions with table of contents |
| any other path | Branded 404 page |

## Development

Requires Node.js 24 (pinned via `engines` so Vercel builds on the same major version).

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build && npm start
```

## Deploying to Vercel

1. Import the GitHub repository in Vercel. [`vercel.json`](vercel.json) pins the framework to Next.js, so the build works even if the project's Framework Preset is set to something else.
2. Optional: set the `NEXT_PUBLIC_SITE_URL` environment variable to the final domain, such as `https://www.example.com`. If it's unset, the site uses Vercel's production domain for canonical URLs, Open Graph tags, `robots.txt` and `sitemap.xml`.
3. Deploy. Every page is statically prerendered.

## Editing business details

All company-specific information lives in [`src/config/site.ts`](src/config/site.ts):

- `contactConfig`: public email, phone, address, privacy contact, and `formEndpoint`. Values left `null` are **hidden**; the site never shows placeholder contact details.
- `socialLinks`: social profiles. An empty list means no social links are shown.
- `appsConfig`: verified Google Play and App Store links for each app. While these are `null`, each app shows "Public download coming soon".
- `legalConfig`: draft date, effective date, and registered legal entity name used by the legal pages.

### Contact form

While `contactConfig.formEndpoint` is `null`, the form validates input but **sends nothing**. It tells the visitor plainly that their message was not sent. To connect a backend, set `formEndpoint` to a URL that accepts a JSON `POST` of `{ name, email, category, message }`.

### Legal pages

The Privacy Policy and Terms are **drafts and have not been legally reviewed**. Highlighted `[To confirm: …]` markers show company facts and policy decisions that still need to be resolved. Have the text reviewed and set `legalConfig.effectiveDate` before you treat these pages as final.

## Project structure

```
src/
  app/                 routes, root layout, icons, robots and sitemap
  components/
    layout/            Header, Footer
    home/              HeroSection, AboutPreview, AppShowcase, AppMockups, HowItWorks, FeatureGrid, FinalCta
    contact/           ContactForm, enquiry categories
    legal/             LegalLayout
    ui/                Button, Container, SectionHeading, PageHero, Logo, ReviewNote
  config/site.ts       central business configuration
  lib/metadata.ts      per-page SEO and Open Graph helper
public/
  brand/               official EaszyGoo logo (wordmark and app icon)
  images/              produce artwork
  og-image.png         social sharing image
```

The app visuals on the homepage are hand-built design previews with sample content. They are not screenshots of released apps.
