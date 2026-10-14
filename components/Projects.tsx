import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { ui } = t;
  const labels = ui.projectsPage;

  const cases = [
    { to: '/projects/monitoring', data: t.monitoringCase, image: undefined, imageAlt: '' },
    { to: '/projects/latency-dashboard', data: t.latencyCase, image: undefined, imageAlt: '' },
    {
      to: '/projects/upgrade-jdk17',
      data: t.upgradeCase,
      image: '/projects/upgrade-jdk17.webp',
      imageAlt: t.upgradeCase.imageAlt,
    },
    {
      to: '/projects/social-notion',
      data: t.socialNotionCase,
      image: '/projects/social-notion.webp',
      imageAlt: t.socialNotionCase.imageAlt,
    },
  ];

  const isTwoColumn = cases.length % 2 === 0;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-vscode-accent font-mono text-xl">04.</span>
          <h1 className="text-3xl font-bold text-white">{ui.sections.projects.heading}</h1>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/*
          Odd number of projects: one per row. Even number: two per row on wider screens.
          In the two-column layout each card is a subgrid spanning 6 shared rows, so the
          image, title, subtitle, summary, tags and link line up across a row of cards.
        */}
        <div className={`grid grid-cols-1 gap-8 ${isTwoColumn ? 'lg:grid-cols-2 lg:gap-y-0' : ''}`}>
          {cases.map(({ to, data, image, imageAlt }) => (
            <Link
              key={to}
              to={to}
              className={`group glass-panel rounded-xl p-6 sm:p-8 border-2 border-white/25 hover:border-vscode-accent transition-colors ${
                isTwoColumn ? 'flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-6 lg:mb-8' : 'flex flex-col'
              }`}
            >
              {image && (
                <img
                  src={image}
                  alt={imageAlt}
                  width={1672}
                  height={941}
                  loading="lazy"
                  className="w-full aspect-video object-cover rounded-lg mb-6 lg:row-start-1"
                />
              )}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 lg:row-start-2">{data.title}</h2>
              <p className="text-vscode-accent font-mono text-sm mb-4 lg:row-start-3">{data.subtitle}</p>
              <p className="text-gray-300 leading-relaxed max-w-3xl mb-6 lg:row-start-4">{data.summary}</p>
              <div className="flex flex-wrap content-start gap-2 mb-6 lg:row-start-5">
                {data.tech.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-gray-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 justify-self-start text-white font-semibold group-hover:text-vscode-accent transition-colors lg:row-start-6">
                {labels.viewCase}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
