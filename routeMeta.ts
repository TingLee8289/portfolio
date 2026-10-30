import { PortfolioContent } from './types';

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

export function getPageTitle(pathname: string, t: PortfolioContent): string {
  if (pathname === '/projects/monitoring') return `${t.monitoringCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/upgrade-jdk17') return `${t.upgradeCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/latency-dashboard') return `${t.latencyCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/social-notion') return `${t.socialNotionCase.title} | ${t.ui.seo.title}`;
  if (pathname === '/projects/pizza-factory-simulator') return `${t.pizzaCase.title} | ${t.ui.seo.title}`;
  const navKey = NAV_KEY_BY_PATH[pathname];
  return navKey ? `${t.ui.nav[navKey]} | ${t.ui.seo.title}` : t.ui.seo.title;
}
