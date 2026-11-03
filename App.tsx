import React, { useEffect } from 'react';
import { RouteObject, useLocation, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useLanguage } from './LanguageContext';
import { EN_PREFIX, getPageTitle, stripLocale } from './routeMeta';
import { trackEvent } from './analytics';

import About from './components/About';
import TechStack from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectMonitoring from './components/ProjectMonitoring';
import ProjectSocialNotion from './components/ProjectSocialNotion';
import ProjectLatency from './components/ProjectLatency';
import ProjectUpgrade from './components/ProjectUpgrade';
import ProjectPizza from './components/ProjectPizza';

// Every page is served at its plain path (zh) and under /en (en).
const LOCALE_PREFIXES = ['', EN_PREFIX];
const PAGES: [string, React.ReactElement][] = [
  ['/', <Hero />],
  ['/about', <About />],
  ['/skills', <TechStack />],
  ['/experience', <Experience />],
  ['/projects', <Projects />],
  ['/projects/monitoring', <ProjectMonitoring />],
  ['/projects/upgrade-jdk17', <ProjectUpgrade />],
  ['/projects/latency-dashboard', <ProjectLatency />],
  ['/projects/social-notion', <ProjectSocialNotion />],
  ['/projects/pizza-factory-simulator', <ProjectPizza />],
  ['/education', <Education />],
];

const ROUTE_OBJECTS: RouteObject[] = [
  ...LOCALE_PREFIXES.flatMap((prefix) =>
    PAGES.map(([path, element]) => ({ path: path === '/' ? prefix || '/' : prefix + path, element }))
  ),
  { path: '*', element: <Hero /> },
];

// Scroll reset, per-page <title>/description and GA4 page_view on route change.
const RouteEffects: React.FC = () => {
  const { pathname } = useLocation();
  const { language, t } = useLanguage();

  // Switching language keeps the scroll position; only a new page resets it.
  const page = stripLocale(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.title = getPageTitle(pathname, t);
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.ui.seo.description);
  }, [pathname, language, t]);

  useEffect(() => {
    trackEvent('page_view', {
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  // Case study pages: scroll depth at 25/50/75% (GA4 enhanced measurement already sends 90%).
  useEffect(() => {
    if (!page.startsWith('/projects/')) return;
    const remaining = [25, 50, 75];
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = (window.scrollY / scrollable) * 100;
      while (remaining.length && percent >= remaining[0]) {
        trackEvent('scroll_depth', { percent: remaining.shift() });
      }
      if (!remaining.length) window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [page]);

  return null;
};

const App: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = stripLocale(pathname) === '/';
  const routes = useRoutes(ROUTE_OBJECTS);

  return (
    <div className="min-h-screen bg-vscode-bg text-vscode-text flex flex-col md:flex-row">
      <RouteEffects />
      <Navbar />
      <main className="flex-1 md:ml-16 w-full flex flex-col">
          <div key={pathname} className="flex-1 animate-fade-in-up">
            {routes}
          </div>
        {!isHome && <Footer />}
      </main>
    </div>
  );
};

export default App;
