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
