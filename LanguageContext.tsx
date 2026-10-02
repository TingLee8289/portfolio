import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Locale, PortfolioContent } from './types';
import { CONTENT } from './content';

const STORAGE_KEY = 'portfolio-lang';
const SUPPORTED: Locale[] = ['zh', 'en'];
const DEFAULT_LOCALE: Locale = 'zh';

function isLocale(value: string | null): value is Locale {
  return value !== null && (SUPPORTED as string[]).includes(value);
}

function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const queryLang = new URLSearchParams(window.location.search).get('lang');
  if (isLocale(queryLang)) return queryLang;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;

  const nav = window.navigator.language?.toLowerCase() ?? '';
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('en')) return 'en';

  return DEFAULT_LOCALE;
}

function writeLocaleToUrl(locale: Locale) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', locale);
  window.history.replaceState(window.history.state, '', url);
}

interface LanguageContextValue {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Locale>(DEFAULT_LOCALE);

  const setLanguage = useCallback((lang: Locale) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
    writeLocaleToUrl(lang);
  }, []);

  // Start from DEFAULT_LOCALE so the first client render matches the
  // prerendered HTML, then switch to the visitor's resolved locale
  // (?lang=, localStorage, navigator) and keep the URL in sync.
  useEffect(() => {
    const resolved = resolveInitialLocale();
    setLanguageState(resolved);
    writeLocaleToUrl(resolved);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const queryLang = new URLSearchParams(window.location.search).get('lang');
      if (isLocale(queryLang) && queryLang !== language) {
        setLanguageState(queryLang);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [language]);

  const t = CONTENT[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
