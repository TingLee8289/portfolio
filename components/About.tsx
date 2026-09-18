import React from 'react';
import { PERSONAL_INFO, STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-vscode-accent/50 transition-colors border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl lg:text-3xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="p-2.5 bg-vscode-accent/10 rounded-lg text-vscode-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-sans leading-relaxed whitespace-nowrap">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-vscode-accent font-mono text-xl">01.</span>
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* Description */}
        <div className="text-gray-300 leading-relaxed text-base sm:text-lg space-y-5">
          {PERSONAL_INFO.about.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;