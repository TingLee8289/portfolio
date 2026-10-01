import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useLanguage } from './LanguageContext';

const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const NAV_KEY_BY_PATH: Record<string, 'about' | 'skills' | 'experience' | 'education'> = {
  '/about': 'about',
  '/skills': 'skills',
  '/experience': 'experience',
  '/education': 'education',
};

// Scroll reset, per-page <title>/description and GA4 page_view on route change.
const RouteEffects: React.FC = () => {
  const { pathname } = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const navKey = NAV_KEY_BY_PATH[pathname];
    const title = navKey ? `${t.ui.nav[navKey]} | ${t.ui.seo.title}` : t.ui.seo.title;
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.ui.seo.description);
  }, [pathname, language, t]);

  useEffect(() => {
    window.gtag?.('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen bg-vscode-bg text-vscode-text flex flex-col md:flex-row">
      <RouteEffects />
      <Navbar />
      <main className="flex-1 md:ml-16 w-full flex flex-col">
        <Suspense fallback={null}>
          <div key={pathname} className="flex-1 animate-fade-in-up">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<TechStack />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="*" element={<Hero />} />
            </Routes>
          </div>
        </Suspense>
        {!isHome && <Footer />}
      </main>
    </div>
  );
};

export default App;
