import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  User,
  Code2,
  Briefcase,
  Menu,
  X,
  Terminal,
  GraduationCap,
  FolderKanban
} from 'lucide-react';
import { PERSONAL_INFO_BASE } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.ui.nav.about, href: '/about', icon: User },
    { name: t.ui.nav.skills, href: '/skills', icon: Code2 },
    { name: t.ui.nav.experience, href: '/experience', icon: Briefcase },
    { name: t.ui.nav.projects, href: '/projects', icon: FolderKanban },
    { name: t.ui.nav.education, href: '/education', icon: GraduationCap },
  ];

  // Close the mobile menu when tapping outside it or pressing Escape.
  useEffect(() => {
    if (!isMobileOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!mobileNavRef.current?.contains(e.target as Node)) setIsMobileOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileOpen]);

  const toggleLanguage = () => setLanguage(language === 'zh' ? 'en' : 'zh');
  const languageButtonLabel = language === 'zh' ? 'EN' : '中';
  const languageButtonTitle = language === 'zh' ? 'Switch to English' : '切換為中文';

  return (
    <>
      {/* Desktop Sidebar (Activity Bar Style) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-16 bg-vscode-activity border-r border-white/10 z-50 py-4 justify-between">
        <div className="flex flex-col items-center gap-6">
          <NavLink
            to="/"
            end
            className="p-2 mb-2 group relative"
            aria-label={t.ui.nav.info}
          >
            <Terminal className="w-8 h-8 text-vscode-accent" />
            <span className="absolute left-14 top-2 bg-vscode-sidebar text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
              {t.ui.nav.info}
            </span>
          </NavLink>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `p-3 hover:text-white hover:bg-white/5 border-l-2 hover:border-vscode-accent transition-all group relative ${
                    isActive ? 'text-white border-vscode-accent bg-white/5' : 'text-gray-400 border-transparent'
                  }`
                }
                aria-label={item.name}
              >
                <Icon className="w-6 h-6" />
                {/* Tooltip */}
                <span className="absolute left-14 top-2 bg-vscode-sidebar text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-6 pb-4">
           <button
             onClick={toggleLanguage}
             className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-400 hover:text-white hover:border-vscode-accent font-mono text-[10px] transition-colors"
             aria-label="Toggle language"
             title={languageButtonTitle}
           >
             {languageButtonLabel}
           </button>
           <div className="p-3 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
             <img
               src={PERSONAL_INFO_BASE.logo}
               alt="Settings"
               className="w-8 h-8 rounded-full border-2 border-transparent hover:border-vscode-accent transition-colors object-cover"
             />
           </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav ref={mobileNavRef} className="md:hidden fixed w-full z-50 bg-vscode-bg/90 backdrop-blur-md border-b border-white/10">
        <div className="px-4 h-14 flex items-center justify-between">
          <NavLink to="/" end className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
            <Terminal className="w-6 h-6 text-vscode-accent" />
            <span className="font-mono font-bold text-white">Wan-Ting.dev</span>
          </NavLink>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-300 hover:text-white hover:border-vscode-accent font-mono text-[10px] transition-colors"
              aria-label="Toggle language"
              title={languageButtonTitle}
            >
              {languageButtonLabel}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileOpen && (
          <div className="bg-vscode-sidebar border-b border-white/10 px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `block py-2 hover:text-white font-mono ${isActive ? 'text-white' : 'text-gray-300'}`
                }
              >
                <span className="text-vscode-accent mr-2">#</span>{item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
