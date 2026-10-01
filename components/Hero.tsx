import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';

const outlineStyle: React.CSSProperties = {
  WebkitTextStroke: '1.5px var(--vscode-text)',
  color: 'transparent',
};

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const { personalInfo, ui } = t;
  const { hero } = ui;

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col px-5 sm:px-8 pt-20 md:pt-8 pb-6">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 right-[12%] w-[420px] h-[420px] bg-vscode-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-purple-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Top row */}
      <div className="relative z-10 flex items-center justify-end font-mono text-xs tracking-widest uppercase text-gray-400">
        <span>{hero.location}</span>
      </div>

      {/* Headline */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-10 animate-fade-in-up">
        <h1 className={`${language === 'zh' ? 'font-display-zh' : 'font-display'} font-bold leading-[1.05] tracking-tight text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-8xl`}>
          <span className="block" style={outlineStyle}>{hero.headlineRole}</span>
          <span
            className="block mt-1 sm:mt-2 italic"
            style={{ WebkitTextStroke: '0', color: 'var(--vscode-accent)' }}
          >
            {hero.headlineName}
          </span>
          <span className="block mt-1 sm:mt-2 text-[0.6em] leading-[1.2]" style={outlineStyle}>
            {hero.headlineTail}
          </span>
        </h1>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex justify-end">
        <Link
          to="/experience"
          className="group inline-flex items-center gap-3 border-b-2 border-white pb-1 text-2xl sm:text-4xl font-bold italic text-white hover:text-vscode-accent hover:border-vscode-accent transition-colors"
        >
          {hero.cta}
          <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 mt-8 flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-wide uppercase text-gray-500">
        <span>© {new Date().getFullYear()} {personalInfo.name} {ui.footer.rights}</span>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link, i) => {
            const Icon = link.icon;
            const external = link.url.startsWith('http');
            return (
              <React.Fragment key={link.platform}>
                {i > 0 && <span aria-hidden="true">/</span>}
                <a
                  href={link.url}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  title={link.platform}
                  aria-label={link.platform}
                  className="hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
