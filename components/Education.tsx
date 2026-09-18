import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-vscode-accent font-mono text-xl">04.</span>
          <h2 className="text-3xl font-bold text-white">Education</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* Timeline List (matching Where I've Worked layout) */}
        <div className="space-y-12">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              
              <div className="md:flex items-start gap-10 group">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-vscode-accent bg-vscode-bg group-hover:bg-vscode-accent transition-colors"></div>
                  {idx !== EDUCATION_DATA.length - 1 && <div className="w-0.5 h-full bg-white/10 min-h-[150px] my-2"></div>}
                </div>

                {/* Content */}
                <div className="flex-1 glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors border-l-4 border-l-vscode-accent/50 hover:border-l-vscode-accent">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      {edu.logo && (
                        <div className="w-12 h-12 rounded-lg bg-white p-1.5 shrink-0 flex items-center justify-center border border-white/10 shadow-sm overflow-hidden">
                          <img 
                            src={edu.logo} 
                            alt={edu.school} 
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                          <span>{edu.school}</span>
                          <span className="text-vscode-accent font-mono text-sm sm:text-base">| {edu.degree}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="font-mono text-sm sm:text-base text-gray-400 bg-vscode-bg px-3 py-1 rounded-full border border-white/5 self-start sm:self-center shrink-0">
                      {edu.period}
                    </div>
                  </div>

                  {edu.description && (
                    <ul className="space-y-3 mb-6">
                      {edu.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start text-gray-300 text-sm leading-relaxed">
                          <ArrowRight className="w-4 h-4 text-vscode-accent mr-3 mt-1 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {edu.tags && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {edu.tags.map((t, tIdx) => (
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

export default Education;
