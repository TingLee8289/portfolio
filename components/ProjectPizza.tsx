import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SectionTitle: React.FC<{ index: string; children: React.ReactNode }> = ({ index, children }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-vscode-accent font-mono text-lg">{index}</span>
    <h2 className="text-2xl font-bold text-white">{children}</h2>
    <div className="h-px bg-white/10 flex-1"></div>
  </div>
);

const ItemGrid: React.FC<{ items: { name: string; desc: string }[] }> = ({ items }) => (
  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <div key={item.name} className="rounded-lg bg-white/5 border border-white/5 px-4 py-3">
        <dt className="font-mono text-sm text-vscode-function">{item.name}</dt>
        <dd className="text-sm text-gray-400 mt-0.5 leading-relaxed">{item.desc}</dd>
      </div>
    ))}
  </dl>
);

const ProjectPizza: React.FC = () => {
  const { t } = useLanguage();
  const c = t.pizzaCase;
  const labels = t.ui.projectsPage;

  return (
    <article className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {labels.backToProjects}
        </Link>

        {/* Header: the demo video replaces the cover image (the cover is its poster, so it is not shown twice) */}
        <header className="mb-16">
          <figure className="mb-10">
            <video
              src="/projects/pizza-factory-simulator.mp4"
              poster="/projects/pizza-factory-simulator.webp"
              width={1280}
              height={720}
              className="w-full aspect-video rounded-xl bg-black"
              playsInline
              controls
              preload="metadata"
              aria-label={c.imageAlt}
            />
            <figcaption className="mt-3 text-sm text-gray-400">{c.demo.caption}</figcaption>
          </figure>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 leading-tight">{c.title}</h1>
          <p className="text-vscode-accent font-mono text-sm sm:text-base mb-6">{c.subtitle}</p>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-8">{c.summary}</p>
          <dl className="space-y-4 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-mono text-vscode-comment w-24 shrink-0">{labels.roleLabel}</dt>
              <dd className="text-gray-300">{c.role}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-mono text-vscode-comment w-24 shrink-0">{labels.techLabel}</dt>
              <dd className="flex flex-wrap gap-2">
                {c.tech.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-gray-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </header>

        {/* 01 Problem */}
        <section className="mb-16">
          <SectionTitle index="01.">{c.problem.heading}</SectionTitle>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            {c.problem.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* 02 Commands vs facts */}
        <section className="mb-16">
          <SectionTitle index="02.">{c.messaging.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.messaging.intro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.messaging.channels.map((channel) => (
              <div key={channel.name} className="glass-panel rounded-lg p-5 border border-white/5">
                <h3 className="font-bold text-white">{channel.name}</h3>
                <p className="font-mono text-sm text-vscode-accent mb-4">{channel.role}</p>
                <ul className="space-y-2">
                  {channel.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                      <span className="text-vscode-accent font-mono">&gt;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 03 Flow */}
        <section className="mb-16">
          <SectionTitle index="03.">{c.flow.heading}</SectionTitle>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.flow.steps.map((step, i) => (
              <li key={step.title} className="glass-panel rounded-lg p-5 border border-white/5 flex gap-4">
                <span className="font-mono text-vscode-accent text-lg leading-none pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 04 Reliability */}
        <section className="mb-16">
          <SectionTitle index="04.">{c.reliability.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.reliability.intro}</p>
          <ItemGrid items={c.reliability.items} />
        </section>

        {/* 05 Scheduling and KPIs */}
        <section className="mb-16">
          <SectionTitle index="05.">{c.planning.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.planning.intro}</p>
          <ItemGrid items={c.planning.items} />
        </section>

        {/* 06 Outcome */}
        <section>
          <SectionTitle index="06.">{c.outcome.heading}</SectionTitle>
          <ul className="space-y-3">
            {c.outcome.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-gray-300 leading-relaxed">
                <span className="text-vscode-accent font-mono">&gt;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default ProjectPizza;
