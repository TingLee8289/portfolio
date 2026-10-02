// Renders every route to static HTML after `vite build` + `vite build --ssr`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, ROUTES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const route of ROUTES) {
  const { html, title, description } = render(route);
  const page = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${escapeAttr(description)}$2`
    )
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  if (page === template) throw new Error(`Prerender made no changes for ${route}`);

  const outFile = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route, 'index.html');
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, page);
  console.log(`prerendered ${route}`);
}

await rm(ssrDir, { recursive: true, force: true });
