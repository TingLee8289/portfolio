import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Illustrative log lines for one request. All names and numbers are made up.
const LOG_EXAMPLE = `{"traceId":"a1b2c3d4","type":"API","api":"GET /orders/{id}","durationMs":1280}
{"traceId":"a1b2c3d4","type":"EXTERNAL","target":"POST payment-service/query","durationMs":310}
{"traceId":"a1b2c3d4","type":"EXTERNAL","target":"POST payment-service/query","durationMs":295}
{"traceId":"a1b2c3d4","type":"EXTERNAL","target":"POST payment-service/query","durationMs":302}
{"traceId":"a1b2c3d4","type":"DB","sqlId":"selectOrderItemByOrderId","durationMs":12}
{"traceId":"a1b2c3d4","type":"DB","sqlId":"selectOrderItemByOrderId","durationMs":11}
{"traceId":"a1b2c3d4","type":"DB","sqlId":"selectOrderItemByOrderId","durationMs":13}`;

const SectionTitle: React.FC<{ index: string; children: React.ReactNode }> = ({ index, children }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-vscode-accent font-mono text-lg">{index}</span>
    <h2 className="text-2xl font-bold text-white">{children}</h2>
    <div className="h-px bg-white/10 flex-1"></div>
  </div>
);

const ProjectLatency: React.FC = () => {
  const { t } = useLanguage();
  const c = t.latencyCase;
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

        {/* Header */}
        <header className="mb-16">
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

        {/* 02 Flow */}
        <section className="mb-16">
          <SectionTitle index="02.">{c.flow.heading}</SectionTitle>
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

        {/* 03 Panels */}
        <section className="mb-16">
          <SectionTitle index="03.">{c.panels.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.panels.intro}</p>
          <ul className="space-y-3">
            {c.panels.items.map((item) => (
              <li key={item.name} className="glass-panel rounded-lg px-5 py-4 border border-white/5">
                <h3 className="font-mono text-vscode-function mb-1">{item.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 04 Sample log */}
        <section className="mb-16">
          <SectionTitle index="04.">{c.sample.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-6">{c.sample.intro}</p>
          <pre className="overflow-x-auto rounded-lg bg-vscode-sidebar border border-white/10 p-4 sm:p-5 text-xs sm:text-sm font-mono text-vscode-string leading-relaxed">
            <code>{LOG_EXAMPLE}</code>
          </pre>
          <p className="text-xs text-gray-500 mt-2">{c.sample.note}</p>
        </section>

        {/* 05 Outcome */}
        <section>
          <SectionTitle index="05.">{c.outcome.heading}</SectionTitle>
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

export default ProjectLatency;
