import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { monitoringCase: featured, ui } = t;
  const labels = ui.projectsPage;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-vscode-accent font-mono text-xl">04.</span>
          <h1 className="text-3xl font-bold text-white">{ui.sections.projects.heading}</h1>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* Featured case study */}
        <Link
          to="/projects/monitoring"
          className="group block glass-panel rounded-xl p-6 sm:p-8 border-2 border-white/25 hover:border-vscode-accent transition-colors"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{featured.title}</h2>
          <p className="text-vscode-accent font-mono text-sm mb-4">{featured.subtitle}</p>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">{featured.summary}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tech.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-gray-300 border border-white/5">
                {tech}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-vscode-accent transition-colors">
            {labels.viewCase}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
