// Renders every route in both languages to static HTML after `vite build` +
// `vite build --ssr`, and writes sitemap.xml with hreflang alternates.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const SITE_URL = 'https://tingwtlee.dev';
const LOCALES = ['zh', 'en'];
const HREFLANG = { zh: 'zh-Hant', en: 'en' };

const { render, ROUTES, localizePath } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const absUrl = (route, locale) => SITE_URL + localizePath(route, locale);

// Canonical points at the page itself; alternates link the zh/en pair, with zh
// as the default for other languages.
const alternateLinks = (route) =>
  [
    ...LOCALES.map((l) => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${absUrl(route, l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${absUrl(route, 'zh')}" />`,
  ].join('\n');

for (const route of ROUTES) {
  for (const locale of LOCALES) {
    const url = localizePath(route, locale);
    const { html, title, description } = render(url);
    const page = template
      .replace(/<html lang="[^"]*"/, `<html lang="${HREFLANG[locale]}"`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`)
      .replace(
        /(<meta name="description" content=")[^"]*(")/,
        `$1${escapeAttr(description)}$2`
      )
      .replace(
        '</head>',
        `<link rel="canonical" href="${absUrl(route, locale)}" />\n${alternateLinks(route)}\n</head>`
      )
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (page === template) throw new Error(`Prerender made no changes for ${url}`);

    const outFile = url === '/' ? path.join(distDir, 'index.html') : path.join(distDir, url, 'index.html');
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, page);
    console.log(`prerendered ${url}`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${ROUTES.flatMap((route) =>
  LOCALES.map((locale) => `  <url>
    <loc>${absUrl(route, locale)}</loc>
${[...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${absUrl(route, l)}" />`),
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl(route, 'zh')}" />`].join('\n')}
  </url>`)
).join('\n')}
</urlset>
`;
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('wrote sitemap.xml');

await rm(ssrDir, { recursive: true, force: true });
