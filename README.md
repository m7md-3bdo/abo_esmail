# AboEsmail Coaching

Custom bilingual React/Vite marketing website for Ahmed Esmail. Includes React Router package pages, Arabic RTL / English LTR, full-payment and installment prices, WhatsApp booking links, and a procedural Three.js dumbbell.

## Run

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
```

Deploy `dist/` to a static host with SPA fallback: all application paths should serve `index.html` when no asset matches. No backend or secret keys are required. Domain purchase is optional and separate from hosting. Google Fonts are requested externally; system fallbacks are provided.

## Content

Edit package data and Arabic/English content in `src/main.jsx`, styling in `src/style.css`, and the 3D object in `src/Dumbbell.jsx`. Photos/logo live in `public/assets/`. The WhatsApp number is the `phone` constant. No messages are sent automatically; links open a pre-filled draft.

Standard is labeled “Recommended”, not an unverified bestseller claim. No invented testimonials, credentials or guaranteed results are included.

## Validation

Production build; desktop Arabic and English pages; mobile-width homepage/menu/package navigation; tablet package layout; pricing toggle; Standard installment booking URL; reduced-motion styling and 3D animation preference handling.

## Social sharing and future repository

Planned GitHub repository name: `abo_esmail` (not created by this project).
Open Graph and Twitter card tags are included in the initial HTML, using the supplied branded coaching poster. Social apps control whether and how cards appear; story links are not guaranteed to produce cards. The current owner-private site cannot be crawled by social platforms. Public publication and publicly fetchable images are prerequisites for previews. After choosing a new public origin, replace the canonical, og:url, og:image, og:image:secure_url and twitter:image absolute URLs in index.html. Do not leave preview URLs there on a GitHub deployment.
GitHub Pages project deployment also requires a Vite base path and router/asset configuration for `/abo_esmail/`; current deployment targets the root of the existing Sites host.
