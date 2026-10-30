import React, { createContext, useContext, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Locale, PortfolioContent } from './types';
import { CONTENT } from './content';
import { getLocaleFromPath, localizePath, stripLocale } from './routeMeta';

interface LanguageContextValue {
  language: Locale;
  // Prefixes an internal path with the current locale (/about -> /en/about).
  lp: (path: string) => string;
  t: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// The locale comes from the URL (/en/... is English, everything else Chinese),
// so each language has its own indexable URL and the prerendered HTML always
// matches the first client render.
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const language = getLocaleFromPath(pathname);

  // Old links used ?lang=en / ?lang=zh; move them onto the path-based URL.
  useEffect(() => {
    const params = new URLSearchParams(search);
    const queryLang = params.get('lang');
    if (queryLang !== 'zh' && queryLang !== 'en') return;
    params.delete('lang');
    const rest = params.toString();
    navigate(localizePath(stripLocale(pathname), queryLang) + (rest ? `?${rest}` : '') + hash, { replace: true });
  }, [navigate, pathname, search, hash]);

  const lp = useCallback((path: string) => localizePath(path, language), [language]);

  const t = CONTENT[language];

  return (
    <LanguageContext.Provider value={{ language, lp, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
