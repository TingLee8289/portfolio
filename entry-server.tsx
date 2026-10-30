import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { LanguageProvider } from './LanguageContext';
import { CONTENT } from './content';
import { getLocaleFromPath, getPageTitle, ROUTES } from './routeMeta';

export { ROUTES };
export { localizePath } from './routeMeta';

// The locale comes from the URL: /about renders Chinese, /en/about English.
export function render(url: string) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StaticRouter>
    </React.StrictMode>
  );
  const locale = getLocaleFromPath(url);
  const t = CONTENT[locale];
  return { html, locale, title: getPageTitle(url, t), description: t.ui.seo.description };
}
