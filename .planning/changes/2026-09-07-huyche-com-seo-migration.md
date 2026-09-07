# huyche.com SEO Migration

## Scope

- Migrated all portfolio SEO signals from `huyche.site` to the production
  canonical host `https://www.huyche.com`.
- Preserved the existing React, Vite, TanStack Router, query-based i18n, and
  project data architecture.
- Added no runtime dependency.

## Screens updated

- English and Vietnamese home page metadata.
- English and Vietnamese project case-study metadata for projects 1 through 9.
- Generic and project-specific not-found states.
- Social previews for the home page and all project case studies.

## Files updated

- `index.html`
- `package.json`
- `vercel.json`
- `scripts/generate-seo-pages.mjs`
- `public/.htaccess`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/lib/seo.ts`
- `src/routes/index.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/pages/NotFound.tsx`
- `src/components/StructuredData.tsx`
- `src/components/project/NotFound.tsx`

## Behavior and feature changes

- Updated canonical, `hreflang`, Open Graph, X card, image, and JSON-LD URLs to
  `https://www.huyche.com` so all signals match the host currently selected by
  Vercel's production domain redirect.
- Added explicit Open Graph secure image URLs and MIME types.
- Added permanent host-preserving redirects from `huyche.site` and
  `www.huyche.site` to `www.huyche.com` in Vercel and Apache configuration.
- Added Vercel route handling for TanStack Router so direct project URLs no
  longer resolve to a platform 404 after deployment.
- Added a dependency-free post-build generator that creates page-specific HTML
  metadata and stable WebP social images for all projects in the English locale
  data. Social crawlers can now read unique project previews without executing
  JavaScript; React still replaces metadata for Vietnamese `?lang=vi` routes.
- Added word-boundary truncation for project meta descriptions.
- Expanded the sitemap from projects 1-7 to projects 1-9, with 20 total URLs
  and reciprocal English, Vietnamese, and `x-default` annotations.
- Added `noindex, follow` to both not-found views to prevent invalid SPA URLs
  from entering the search index.
- Kept `manifest.json` unchanged because it uses domain-independent root-relative
  URLs and already contains the correct portfolio identity and icons.

## Production findings before deployment

- `https://huyche.com` returned a permanent redirect to
  `https://www.huyche.com`.
- `https://www.huyche.com/projects/1` returned Vercel `404 NOT_FOUND`.
- The production HTML, robots file, sitemap, Open Graph metadata, and structured
  data still referenced `huyche.site`.
- The old `www.huyche.site` host still served the portfolio instead of redirecting
  to the new domain.

## Assumptions

- `https://www.huyche.com` remains the canonical host because that is the target
  selected by the current Vercel domain configuration.
- Both old-domain variants remain attached to the same Vercel project long enough
  for source-controlled redirects to take effect.
- English remains the static fallback language; Vietnamese continues to use the
  existing crawlable `?lang=vi` URL model.

## Verification

- `npm run build` — passed; 2,266 modules transformed and SEO HTML/images generated
  for all 9 project pages.
- ESLint on every changed TypeScript, TSX, and MJS file — passed.
- `xmllint --noout public/sitemap.xml` — passed.
- Automated sitemap/output inventory check — passed for 9 projects and 20 sitemap
  URLs.
- JSON parse check for `package.json`, `public/manifest.json`, and `vercel.json` —
  passed.
- `git diff --check` — passed.
- `npm run lint` — repository-wide lint remains blocked by 25 pre-existing errors
  and 9 warnings in unrelated UI, service, middleware, hook, and Tailwind config
  files. No lint issue is present in the files changed for this task.

## Required deployment follow-up

- Deploy the repository so Vercel applies `vercel.json` and publishes the new
  static SEO files.
- Verify both old-domain variants in Google Search Console, add the new domain
  property, submit `https://www.huyche.com/sitemap.xml`, and use Change of Address.
- Keep old-domain redirects active for at least one year and update high-value
  external profile/backlink URLs to the new domain.
