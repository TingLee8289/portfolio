import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useLanguage } from './LanguageContext';
import { getPageTitle } from './routeMeta';

import About from './components/About';
import TechStack from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectMonitoring from './components/ProjectMonitoring';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Scroll reset, per-page <title>/description and GA4 page_view on route change.
const RouteEffects: React.FC = () => {
  const { pathname } = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.title = getPageTitle(pathname, t);
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
          <div key={pathname} className="flex-1 animate-fade-in-up">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<TechStack />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/monitoring" element={<ProjectMonitoring />} />
              <Route path="/education" element={<Education />} />
              <Route path="*" element={<Hero />} />
            </Routes>
          </div>
        {!isHome && <Footer />}
      </main>
    </div>
  );
};

export default App;
