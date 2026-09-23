import React from 'react';
import { PROJECT_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Briefcase, ArrowRight, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const EXPERIENCE_DATA = t.experience;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-vscode-accent font-mono text-xl">03.</span>
          <h2 className="text-3xl font-bold text-white">{t.ui.sections.experience.heading}</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((job, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">

              <div className="md:flex items-start gap-10 group">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-vscode-accent bg-vscode-bg group-hover:bg-vscode-accent transition-colors"></div>
                  {idx !== EXPERIENCE_DATA.length - 1 && <div className="w-0.5 h-full bg-white/10 min-h-[150px] my-2"></div>}
                </div>

                {/* Content */}
                <div className="flex-1 glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors border-l-4 border-l-vscode-accent/50 hover:border-l-vscode-accent">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      {job.logo && (
                        <div className="w-12 h-12 rounded-lg bg-white p-1.5 shrink-0 flex items-center justify-center border border-white/10 shadow-sm overflow-hidden">
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                          <span>{job.company}</span>
                          <span className="text-vscode-accent font-mono">| {job.role}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="font-mono text-sm sm:text-base text-gray-400 bg-vscode-bg px-3 py-1 rounded-full border border-white/5 self-start sm:self-center shrink-0">
                      {job.period}
                    </div>
                  </div>

                  {job.summary && (
                    <p className="text-gray-300 text-base leading-relaxed mb-4">{job.summary}</p>
                  )}

                  <ul className="space-y-3 mb-6">
                    {job.description.map((bullet, dIdx) => {
                      const link = bullet.projectId ? PROJECT_LINKS[bullet.projectId] : undefined;
                      return (
                        <li key={dIdx} className="flex items-start text-gray-300 text-base leading-relaxed">
                          {!bullet.projectId && (
                            <ArrowRight className="w-4 h-4 text-vscode-accent mr-3 mt-1 shrink-0" />
                          )}
                          <div>
                            {bullet.projectId ? (
                              <>
                                {link ? (
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-vscode-class font-semibold bg-vscode-accent/10 border border-vscode-accent/20 px-2 py-0.5 rounded mr-2 text-base font-mono inline-flex items-center gap-1.5 mb-1 sm:mb-0 hover:bg-vscode-accent/20 hover:border-vscode-accent transition-colors"
                                  >
                                    <img src={link.logo} alt="" className="w-4 h-4 rounded-sm object-contain" />
                                    {bullet.projectLabel}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  <span className="text-vscode-class font-semibold bg-vscode-accent/10 border border-vscode-accent/20 px-2 py-0.5 rounded mr-2 text-base font-mono inline-block mb-1 sm:mb-0">
                                    {bullet.projectLabel}
                                  </span>
                                )}
                                <span>{bullet.text}</span>
                              </>
                            ) : (
                              <span>{bullet.text}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {job.tech && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {job.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-xs font-mono text-vscode-string">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
