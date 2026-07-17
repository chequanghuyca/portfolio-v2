# Portfolio Landing Redesign

## Scope

Redesigned the main portfolio landing page to position Huy Che as a Senior
Software Engineer while preserving the existing React, TypeScript, Vite,
TanStack Router, i18n, project data, and project-detail architecture.

## Screens updated

- Home / hero
- About and professional experience
- Skills and engineering capabilities
- Featured projects
- Contact and footer
- Mobile navigation
- Social link preview

## Files updated

- `src/pages/Index.tsx`
- `src/components/home/Navigation.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/About.tsx`
- `src/components/home/Skills.tsx`
- `src/components/home/Projects.tsx`
- `src/components/home/Contact.tsx`
- `src/components/home/Footer.tsx`
- `src/components/canvas/ParticleNetwork.tsx`
- `src/components/scroll/ScrollEffects.tsx`
- `src/hooks/project/useQueryGetAllProject.ts`
- `src/hooks/useViewport.ts`
- `src/i18n/locales/en.json`
- `src/i18n/locales/vi.json`
- `src/routes/index.tsx`
- `src/index.css`
- `index.html`
- `public/og.png`
- `src/assets/projects/*/*-sign.webp`

## Behavior and feature changes

- Introduced an "engineering observatory" visual direction with deep cacao,
  warm sand, earth-gold, and terracotta accents. Green and cyan were removed
  from the landing-page UI, canvas, metadata theme colors, and social card.
- Rebuilt the hero around large editorial typography, a personal portrait,
  technical system details, and a pointer-responsive canvas network.
- Added entrance animations and an expertise marquee.
- Reframed the experience section around concise production impact and
  practical engineering principles.
- Replaced logo-heavy skill cards with maintainable capability rows and a
  curated production stack.
- Added desktop-only CSS sticky project cards while preserving existing i18n
  project data and external project links. Per-frame JavaScript scroll scaling
  and opacity transforms were removed to prevent scroll jank; mobile cards use
  normal document flow.
- Rebuilt the contact area as a clear availability and collaboration call to
  action.
- Added keyboard-friendly mobile navigation, a skip link, semantic sections,
  accessible link labels, and reduced-motion fallbacks.
- Updated page title, descriptions, Open Graph metadata, X metadata, theme
  color, and structured job title for Senior Software Engineer positioning.
- Added a bespoke `1200x630` social card at `public/og.png`.
- Added optimized 1600px WebP project thumbnails while preserving the original
  PNG sources. The seven sign images now total roughly 463 KB instead of
  roughly 25 MB in the production output.

## Follow-up polish: Earth palette and project performance

- Reworked the full landing-page palette around `#160d0a` cacao, `#e8a44a`
  earth-gold, `#d46b45` terracotta, and warm cream surfaces.
- Recolored the particle canvas, logo presentation, browser theme, manifest,
  and Open Graph card so no green or cyan remains in the rendered experience.
- Replaced the text-only `HC` brand mark in the header with the existing logo
  asset and increased the desktop navigation text to 14px.
- Promoted section kickers such as `03 Featured Projects` into high-contrast
  capsule labels with a distinct numbered badge.
- Increased project technology badges to 12.16px on desktop and 10.88px on
  small mobile screens, with larger padding, stronger weight, and gold-tinted
  contrast.
- Reduced the desktop sticky-card stage and card heights, removed scroll-linked
  transforms, and kept the mobile project list completely static for smoother
  scrolling.
- Checked the landing page at 1440x1000 and 390x844. Both viewports have no
  horizontal overflow; project cards resolve to `sticky`/`transform: none` on
  desktop and `static`/`transform: none` on mobile.

## Follow-up fix: Hero clipping and mobile overlap

- Removed the original full-viewport hero scale transform and its 150vh scene,
  avoiding horizontal clipping after browser zoom, resize, or breakpoint
  changes.
- Removed the compensating negative margin before the content sections because
  the hero no longer uses a 150vh sticky wrapper.
- Delayed the full desktop navigation until the `lg` breakpoint and the CV
  button until `xl`; narrower web/tablet widths now use the compact menu rather
  than forcing all header controls onto one row.
- Reduced and repositioned the portrait below 768px, placed it behind the hero
  title, and reserved a clear gap above the lead paragraph. The measured
  portrait/lead overlap at 390px and 420px changed from 51px to 0px.
- Added explicit full-width and horizontal clipping constraints to the landing
  shell and hero layout.
- Rechecked 390px, 420px, 925px, 1024px, 1150px, 1280px, and 1440px widths:
  document width equals viewport width and horizontal scroll remains zero.

## Follow-up adjustment: Hero portrait visibility

- Raised the desktop hero portrait by 40px so it sits fully above the lower
  content divider.
- Hid the portrait and its decorative orbit below 768px, leaving the mobile
  headline, supporting copy, and actions unobstructed.

## Follow-up enhancement: Desktop hero motion

- Restored a shorter 135svh cinematic hero scene for desktop only.
- Added scroll-linked vertical parallax and a controlled fade-out while keeping
  horizontal translation and scale disabled, preserving the responsive fix.
- Kept the hero in normal flow with no scroll transforms below 1024px, and
  retained the reduced-motion fallback.
- Preserved the animated particle network, portrait orbits, signal indicator,
  entrance transitions, and expertise marquee.

## Follow-up enhancement: Navigation logo and technology cursor

- Removed the navigation logo color filter so the original asset colors render
  unchanged.
- Added a desktop-only technology crosshair cursor with an immediate center dot
  and a softly interpolated outer targeting ring.
- Added hover and pressed states for links, buttons, inputs, and other
  interactive controls.
- Updates cursor coordinates through direct refs and `requestAnimationFrame`
  rather than React state, avoiding a component render on every pointer event.
- Keeps the native cursor on touch devices, viewports below 1024px, and when
  reduced motion is enabled.

## Follow-up enhancement: Language defaults and selector

- Changed first-visit language detection to use English through `fallbackLng`
  instead of automatically following the browser language.
- Continues restoring an explicit English or Vietnamese choice from
  `localStorage` on later visits.
- Redesigned the desktop language trigger and dropdown with the landing page's
  cacao, cream, earth-gold, mono typography, status indicator, and rounded
  technical controls.
- Replaced the old gray mobile flag buttons with a clear EN/VI segmented
  control that exposes the active language through `aria-pressed`.

## Follow-up enhancement: Skills proficiency and adaptive scroll control

- Added a dedicated proficiency rail for the existing TypeScript, Golang, and
  Rust skills instead of presenting them only as small technology pills.
- Added production-focus descriptions, technical grid surfaces, signal bars,
  hover elevation, and a restrained scan animation without inventing numeric
  proficiency percentages.
- Highlighted the same primary languages inside their original skill-category
  rows for stronger visual hierarchy.
- Increased the persistent contrast, padding, font size, and earth-gold border
  treatment of every technology pill; added an individual lift, glow, and
  restrained light-sweep interaction while keeping primary languages one
  hierarchy level stronger.
- Replaced the basic circular scroll-to-top button with a compact technology
  control containing a scroll-progress ring, rotating targeting detail, TOP
  label, and improved hover/focus states.
- The control samples the rendered background beneath its fixed position and
  switches between earth-gold-on-dark and cacao-on-light color modes to retain
  contrast across dark, cream, and gold sections.
- Scroll progress and background sampling are scheduled through
  `requestAnimationFrame` to avoid excessive work during scrolling.

## Assumptions

- The existing name, contact details, CV, social links, work history, project
  list, and technology claims are the source of truth.
- The current `5+ years` positioning is intentional and should remain
  consistent with the existing content.
- Deployment was not performed because the repository instruction explicitly
  forbids Git commits and pushes, while the Sites publishing workflow requires
  both.

## Verification

- `npm run build` — passed.
- `npx eslint` for all changed TypeScript and TSX files — passed.
- `git diff --check` — passed.
- English and Vietnamese locale JSON parse check — passed.
- `npm run lint` — repository-wide lint remains blocked by 29 pre-existing
  errors in unrelated UI, service, middleware, and config files. No new lint
  errors are present in the changed files.

## SEO hardening: multilingual portfolio and project case studies

### Screens and files updated

- Home: `src/routes/index.tsx`, `src/components/home/Hero.tsx`,
  `src/components/home/Projects.tsx`, `src/components/home/Footer.tsx`, and
  `src/components/LanguageSwitcher.tsx`.
- Project detail: `src/pages/ProjectDetail.tsx`,
  `src/components/StructuredData.tsx`, the project image components, and
  `src/hooks/project/useQueryGetProject.ts`.
- Crawl and discovery: `index.html`, `public/sitemap.xml`,
  `public/robots.txt`, `public/.htaccess`, and `public/manifest.json`.
- SEO utilities and assets: `src/lib/seo.ts`, real multi-size favicon assets,
  manifest icons, a stable public profile image, and optimized WebP UI images.

### Behavior and feature changes

- Replaced duplicated and keyword-stuffed head tags with one concise English
  default metadata set aligned to the Senior Software Engineer positioning.
- Added language-aware title, description, canonical, Open Graph, X card,
  `html[lang]`, and reciprocal `hreflang` values for English and Vietnamese.
- Added crawlable `?lang=vi` URLs while keeping English as the first-visit
  default; the language selector now keeps the visible URL in sync with the
  selected locale.
- Added a valid Schema.org graph for `WebSite`, `ProfilePage`, `ImageObject`,
  and `Person`, plus a language-aware `CreativeWork` entity for every project.
  Removed the inaccurate MIT license and generic programming-language fields
  from project schema.
- Added unique metadata and absolute social images for all seven project case
  studies, with `noindex, follow` on missing project records.
- Added descriptive, crawlable internal links from project cards and the
  footer to all seven project routes.
- Expanded the sitemap from four stale URLs to all 16 English/Vietnamese home
  and project URLs with reciprocal `hreflang` declarations.
- Simplified crawler rules and changed the Apache SPA fallback to rewrite
  client routes to `index.html` with a successful response instead of using a
  custom 404 response.
- Replaced placeholder project-detail copy and incorrect reused images with
  project-specific bilingual descriptions, challenges, features, roles, and
  correct visual assets.
- Added descriptive portrait alt text, fixed the project-detail heading
  hierarchy, lazy-loaded below-the-fold project/gallery media, and prioritized
  the actual hero/LCP images.
- Reduced production image weight without changing the visual identity:
  profile portrait from about 299 KB to 30 KB, navigation logo from about
  494 KB to 34 KB, and the secondary Remoty gallery image from about 2.65 MB
  to 235 KB.

### Verification

- `npm run build` — passed (2,257 modules transformed).
- Targeted `npx eslint` for every SEO-related TypeScript/TSX file — passed.
- `npm run lint` — still blocked only by the existing repository-wide lint
  debt outside the changed SEO files (25 errors and 9 warnings reported).
- `git diff --check` — passed.
- `xmllint --noout public/sitemap.xml` — passed; sitemap contains 16 URLs.
- JSON parsing for manifest and both locale files — passed.
- Static JSON-LD parsing — passed with `WebSite`, `ProfilePage`, `ImageObject`,
  and `Person` nodes.
- Local HTTP verification — `/`, `/projects/6`, `/sitemap.xml`, `/robots.txt`,
  and `/huy-che-profile.webp` all returned HTTP 200 with correct content types.
- Browser-rendered English home, Vietnamese home, and Vietnamese project pages
  each contain one description, one canonical, one H1, valid JSON-LD, correct
  locale alternates, no horizontal overflow, and no console errors.

## Follow-up fix: 2K and ultrawide hero composition

### Screen and files updated

- Home hero and navigation layout at 1920px, 2048px, 2536px, and 2560px.
- `src/index.css` for the root max-width fix and wide-screen scaling.
- `src/components/home/Hero.tsx` and
  `src/components/project/ProjectHero.tsx` for console-clean image markup.

### Behavior changes

- Removed a landing-page reset that forced `max-width: none` onto every
  heading, paragraph, span, and div. That reset had overridden the intended
  Tailwind container limits and pushed hero content to opposite screen edges.
- Restored the intended centered 1600px hero container and 1480px navigation
  container on wide viewports while keeping both fluid below their limits.
- Added a wide-screen-only rule at 1920px and at least 900px tall that scales
  the hero headline from 184px up to 216px and the portrait shell to 512×608px.
- Kept the canvas, sticky parallax, scroll fade, and entrance motion unchanged.
- Removed unsupported `fetchPriority` React props that generated repeated
  development console warnings; eager loading remains on the project hero.

### Verification

- Browser geometry checked at 390×844, 1440×900, 1920×1080, 2048×1080,
  2536×1333, and 2560×1440 with no horizontal overflow.
- At 2536px, navigation resolves to 1480px, hero layout to 1600px, headline to
  about 213px, and portrait shell to 512px.
- Mobile keeps the portrait hidden and the hero in normal flow; desktop keeps
  the sticky hero scene.
- Scroll test at 2048px confirmed the hero parallax transform still responds.
- Browser console after the final render contains no errors or warnings.
- `npm run build` and `git diff --check` — passed.
