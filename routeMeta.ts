import { Locale, PortfolioContent } from './types';

// Chinese lives at the root (/about), English under /en (/en/about).
export const EN_PREFIX = '/en';

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`) ? 'en' : 'zh';
}

export function stripLocale(pathname: string): string {
  return getLocaleFromPath(pathname) === 'en' ? pathname.slice(EN_PREFIX.length) || '/' : pathname;
}

export function localizePath(path: string, locale: Locale): string {
  if (locale === 'zh') return path;
  return path === '/' ? EN_PREFIX : `${EN_PREFIX}${path}`;
}

export const ROUTES = [
  '/',
  '/about',
  '/skills',
  '/experience',
  '/projects',
  '/projects/monitoring',
  '/projects/upgrade-jdk17',
  '/projects/latency-dashboard',
  '/projects/social-notion',
  '/projects/pizza-factory-simulator',
  '/education',
] as const;

const NAV_KEY_BY_PATH: Record<string, 'about' | 'skills' | 'experience' | 'projects' | 'education'> = {
  '/about': 'about',
  '/skills': 'skills',
  '/experience': 'experience',
  '/projects': 'projects',
  '/education': 'education',
};

export function getPageTitle(localizedPathname: string, t: PortfolioContent): string {
  const pathname = stripLocale(localizedPathname);
  if (pathname === '/projects/monitoring') return `${t.monitoringCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/upgrade-jdk17') return `${t.upgradeCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/latency-dashboard') return `${t.latencyCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/social-notion') return `${t.socialNotionCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/pizza-factory-simulator') return `${t.pizzaCase.title} | ${t.ui.seo.title}`;
  const navKey = NAV_KEY_BY_PATH[pathname];
  return navKey ? `${t.ui.nav[navKey]} | ${t.ui.seo.title}` : t.ui.seo.title;
}
