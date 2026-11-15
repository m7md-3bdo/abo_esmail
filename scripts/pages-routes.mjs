import { mkdir, readFile, writeFile } from 'node:fs/promises';
const html = await readFile('dist/index.html', 'utf8');
const origin = 'https://m7md-3bdo.github.io/abo_esmail/';
// Real entry files let GitHub Pages serve direct package links and refreshes.
const routes = [['basic','Basic'],['standard','Standard'],['premium','Premium'],['training','Training Plan']];
for (const [slug, name] of routes) {
  const route = `packages/${slug}`;
  await mkdir(`dist/${route}`, { recursive: true });
  const content = html
    .replace(/<title>.*?<\/title>/, `<title>${name} | AboEsmail Coaching</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${name} | AboEsmail Coaching`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${name} | AboEsmail Coaching`)
    .replace(`rel="canonical" href="${origin}"`, `rel="canonical" href="${origin}${route}/"`)
    .replace(`property="og:url" content="${origin}"`, `property="og:url" content="${origin}${route}/"`);
  await writeFile(`dist/${route}/index.html`, content);
}
await writeFile('dist/404.html', html);
await writeFile('dist/.nojekyll', '');
console.log('Created direct-entry pages for all four packages.');
