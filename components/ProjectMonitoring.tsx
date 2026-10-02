import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Lock, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Illustrative rule configuration. All names, emails and numbers are made up.
const RULE_EXAMPLE = `{
  "ruleId": "timeout-errors-3d",
  "source": "LOG",
  "query": "level:ERROR AND message:timeout",
  "window": { "unit": "DAY", "value": 3 },
  "threshold": { "operator": ">", "count": 5 },
  "recipients": [
    { "name": "Alice", "email": "alice@example.com", "phone": "0900-000-001" },
    { "name": "Bob",   "email": "bob@example.com",   "phone": "0900-000-002" }
  ],
  "channels": ["EMAIL", "SMS"],
  "suppression": { "enabled": true, "unit": "MINUTE", "value": 60 }
}`;

const SectionTitle: React.FC<{ index: string; children: React.ReactNode }> = ({ index, children }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-vscode-accent font-mono text-lg">{index}</span>
    <h2 className="text-2xl font-bold text-white">{children}</h2>
    <div className="h-px bg-white/10 flex-1"></div>
  </div>
);

const ProjectMonitoring: React.FC = () => {
  const { t } = useLanguage();
  const c = t.monitoringCase;
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

        {/* 03 Rules */}
        <section className="mb-16">
          <SectionTitle index="03.">{c.rules.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.rules.intro}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {c.rules.fields.map((field) => (
              <div key={field.name} className="rounded-lg bg-white/5 border border-white/5 px-4 py-3">
                <dt className="font-mono text-sm text-vscode-function">{field.name}</dt>
                <dd className="text-sm text-gray-400 mt-0.5">{field.desc}</dd>
              </div>
            ))}
          </dl>

          <h3 className="font-mono text-sm uppercase tracking-widest text-vscode-comment mb-4">
            {c.rules.scenariosHeading}
          </h3>
          <ul className="space-y-3 mb-10">
            {c.rules.scenarios.map((s) => (
              <li key={s.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 glass-panel rounded-lg px-5 py-4 border border-white/5">
                <span className="font-mono text-vscode-accent w-20 shrink-0">{s.label}</span>
                <span className="text-gray-200">{s.text}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-mono text-sm uppercase tracking-widest text-vscode-comment mb-3">
            {labels.configTitle}
          </h3>
          <pre className="overflow-x-auto rounded-lg bg-vscode-sidebar border border-white/10 p-4 sm:p-5 text-xs sm:text-sm font-mono text-vscode-string leading-relaxed">
            <code>{RULE_EXAMPLE}</code>
          </pre>
          <p className="text-xs text-gray-500 mt-2">{labels.configNote}</p>
        </section>

        {/* 04 Suppression */}
        <section className="mb-16">
          <SectionTitle index="04.">{c.suppression.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.suppression.intro}</p>
          <ul className="space-y-3">
            {c.suppression.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-gray-300 leading-relaxed">
                <span className="text-vscode-accent font-mono">&gt;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 05 Locking */}
        <section>
          <SectionTitle index="05.">{c.locking.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.locking.intro}</p>

          {/* Two workers, one lock */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-10">
            <div className="rounded-lg border border-vscode-class/40 bg-vscode-class/10 p-4 flex items-start gap-3">
              <Check className="w-5 h-5 text-vscode-class shrink-0 mt-0.5" />
              <span className="text-sm text-gray-200">{labels.lockWorkerA}</span>
            </div>
            <div className="flex justify-center" aria-hidden="true">
              <div className="w-12 h-12 rounded-full bg-vscode-accent/20 border border-vscode-accent/50 flex items-center justify-center">
                <Lock className="w-5 h-5 text-vscode-accent" />
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
              <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-400">{labels.lockWorkerB}</span>
            </div>
          </div>

          <ul className="space-y-3">
            {c.locking.points.map((point, i) => (
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

export default ProjectMonitoring;
