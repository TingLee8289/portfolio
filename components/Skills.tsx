import React from 'react';
import { SKILL_GROUPS } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-vscode-activity/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-vscode-accent font-mono text-xl">02.</span>
            <h2 className="text-3xl font-bold text-white">Skills</h2>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <div className="space-y-12">
            {SKILL_GROUPS.map((group, gIdx) => (
              <div key={gIdx}>
                <h3 className="text-sm font-mono uppercase tracking-wider text-vscode-comment mb-5">
                  {'// ' + group.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {group.categories.map((category, idx) => (
                    <div
                      key={idx}
                      className="glass-panel p-8 rounded-xl relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <div className="text-6xl font-mono font-bold text-white">{"{ }"}</div>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-5 font-mono flex items-center gap-2">
                        <span className="text-vscode-keyword text-sm">class</span>
                        <span>{category.title.replace(/[^a-zA-Z0-9]/g, '')}</span>
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, sIdx) => {
                          const Icon = skill.icon;
                          return (
                            <div
                              key={sIdx}
                              className="flex items-center px-4 py-2 rounded bg-vscode-bg border border-white/10 hover:border-vscode-accent transition-colors cursor-default"
                            >
                              {Icon && <Icon className={`w-4 h-4 mr-2 ${skill.color || 'text-gray-400'}`} />}
                              <span className={`font-mono text-sm ${skill.color || 'text-gray-300'}`}>
                                {skill.name}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default TechStack;