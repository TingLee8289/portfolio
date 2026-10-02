import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { LanguageProvider } from './LanguageContext';
import { CONTENT } from './content';
import { getPageTitle, ROUTES } from './routeMeta';

export { ROUTES };

// Prerendered pages use the default locale (zh); the client switches to the
// visitor's preferred locale after hydration.
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
  const t = CONTENT.zh;
  return { html, title: getPageTitle(url, t), description: t.ui.seo.description };
}
