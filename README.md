# AboEsmail Coaching

Bilingual Arabic/English React + Vite site configured for the `m7md-3bdo/abo_esmail` GitHub Pages project.

```sh
npm install
npm run dev
```

Build: `npm run build`. Preview: `npm run preview`.

Set repository Settings → Pages → Source to GitHub Actions. The included `.github/workflows/deploy.yml` publishes pushes to `main`.

See `START_HERE_AR.md` for Arabic upload instructions. Upload the contents of this project to the repository root, including `.github`. Do not upload node_modules or dist.

`vite.config.js` sets `/abo_esmail/`; React Router and image URLs use the Vite base. Post-build entry pages support direct links and refreshes for each package. The source remains client-side routed without full page reloads on internal navigation.

Source: src/main.jsx, src/style.css, src/Dumbbell.jsx. Assets: public/assets.

The 3D object requires WebGL; an interactive SVG/CSS fallback is included. Social preview display is controlled by each platform and needs the deployed public URL. No deployment has been performed by downloading this ZIP.
