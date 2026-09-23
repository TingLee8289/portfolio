import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { personalInfo } = t;
  const [line1Text, setLine1Text] = useState('');
  const [line2Text, setLine2Text] = useState('');
  const [windowState, setWindowState] = useState<'visible' | 'minimized' | 'closed'>('visible');
  const [theme, setTheme] = useState<'vscode' | 'darcula'>('vscode');

  const line1 = `> const engineer = new FullStackDeveloper("${personalInfo.name}");`;
  const line2 = `> "${t.ui.hero.loadingLabel} ${personalInfo.tagline}..."`;

  useEffect(() => {
    setLine1Text('');
    setLine2Text('');

    let index1 = 0;
    const timer1 = setInterval(() => {
      index1++;
      setLine1Text(line1.slice(0, index1));
      if (index1 >= line1.length) clearInterval(timer1);
    }, 35);

    // Line 2 types in parallel with line 1 so it's visible immediately
    // instead of waiting for line 1's full typing duration to finish.
    let index2 = 0;
    const timer2 = setInterval(() => {
      index2++;
      setLine2Text(line2.slice(0, index2));
      if (index2 >= line2.length) clearInterval(timer2);
    }, 35);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [line1, line2]);

  const toggleTheme = () => {
    const newTheme = theme === 'vscode' ? 'darcula' : 'vscode';
    setTheme(newTheme);
    if (newTheme === 'darcula') {
      document.body.classList.add('theme-darcula');
    } else {
      document.body.classList.remove('theme-darcula');
    }
  };

  const isVisible = windowState === 'visible';

  return (
    <section
      id="info"
      className={`relative flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${
        isVisible ? 'min-h-screen pt-16 md:pt-0 opacity-100' : 'min-h-0 h-0 opacity-0 pt-0'
      }`}
    >

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-vscode-bg transition-colors duration-300">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vscode-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="w-full max-w-4xl px-4 md:px-8 relative z-10">

        {/* Terminal Window */}
        <div
          className={`glass-panel rounded-lg overflow-hidden shadow-2xl origin-bottom transition-all duration-500 ease-in-out ${
            windowState === 'closed' ? 'opacity-0 scale-95 pointer-events-none' :
            windowState === 'minimized' ? 'opacity-0 scale-0 translate-y-24 pointer-events-none' :
            'animate-fade-in-up'
          }`}
        >
          {/* Terminal Header */}
          <div
            className="bg-vscode-activity px-4 py-2 flex items-center gap-2 border-b border-white/5 transition-colors duration-300"
          >
            <div className="flex gap-2 window-control">
              <div
                onClick={() => setWindowState('closed')}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-600 cursor-pointer transition-colors"
                title="Close"
              ></div>
              <div
                onClick={() => setWindowState('minimized')}
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-600 cursor-pointer transition-colors"
                title="Minimize"
              ></div>
              <div
                onClick={toggleTheme}
                className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-600 cursor-pointer transition-colors group relative"
                title="Toggle Theme"
              >
              </div>
            </div>
            <div className="ml-4 text-xs text-gray-500 font-mono flex-1 text-center pointer-events-none">
              {theme === 'vscode' ? 'developer.tsx' : 'developer.java'}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-10 min-h-[300px] font-mono text-sm md:text-lg">
            <div className="whitespace-pre-wrap leading-relaxed">
              <div className="text-vscode-comment mb-2">{t.ui.hero.welcomeComment}</div>

              {/* Line 1 */}
              <div>
                 <span className="text-vscode-text select-none mr-2">{'>'}</span>
                 {line1Text.length > 2 && (
                   <>
                     <span className="text-vscode-keyword">const </span>
                     <span className="text-vscode-function">engineer </span>
                     <span className="text-vscode-text">= </span>
                     <span className="text-vscode-keyword">new </span>
                     <span className="text-vscode-class">FullStackDeveloper</span>
                     <span className="text-vscode-text">(</span>
                     <span className="text-vscode-string">"{personalInfo.name}"</span>
                     <span className="text-vscode-text">);</span>
                   </>
                 )}
                 {line1Text.length <= 2 && <span>{line1Text}</span>}
              </div>

               {/* Line 2 - typing in parallel with line 1 */}
               {line2Text.length > 0 && (
                 <div className="mt-2">
                    <span className="text-vscode-text select-none mr-2">{'>'}</span>
                    <span className="text-vscode-string">
                      {line2Text.substring(2)}
                    </span>
                    <span className="animate-blink inline-block w-2 h-5 bg-vscode-accent align-middle ml-1"></span>
                 </div>
               )}

            </div>

            <div
              className="mt-8"
              style={{
                opacity: line2Text.length >= line2.length - 5 ? 1 : 0,
                transition: 'opacity 1000ms ease-in-out',
              }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {personalInfo.chineseName} <span className="text-vscode-accent font-mono text-2xl md:text-4xl">"{personalInfo.name}"</span>
              </h1>
              <div className="border-l-4 border-vscode-accent pl-4 mb-6">
                <p className="text-white text-lg md:text-xl font-medium tracking-wide">
                  {personalInfo.title}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {personalInfo.subTitle}
                </p>
              </div>

              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="p-3 rounded bg-white/5 hover:bg-vscode-accent/20 hover:text-white text-gray-400 transition-colors border border-white/5 flex items-center gap-2 text-sm font-mono"
                      title={link.platform}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="hidden sm:inline">{link.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={`flex justify-center mt-12 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#about" className="animate-bounce text-gray-500 hover:text-white transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
