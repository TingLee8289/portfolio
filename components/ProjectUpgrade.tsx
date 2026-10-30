import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Illustrative code. Class names and paths are made up.
const BEFORE_EXAMPLE = `import javax.servlet.http.HttpServletRequest;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
        .antMatchers("/public/**").permitAll()
        .anyRequest().authenticated();
  }
}`;

const AFTER_EXAMPLE = `import jakarta.servlet.http.HttpServletRequest;

@Configuration
public class SecurityConfig {
  @Bean
  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(auth -> auth
        .requestMatchers("/public/**").permitAll()
        .anyRequest().authenticated());
    return http.build();
  }
}`;

const SectionTitle: React.FC<{ index: string; children: React.ReactNode }> = ({ index, children }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-vscode-accent font-mono text-lg">{index}</span>
    <h2 className="text-2xl font-bold text-white">{children}</h2>
    <div className="h-px bg-white/10 flex-1"></div>
  </div>
);

const CodeBlock: React.FC<{ label: string; code: string }> = ({ label, code }) => (
  <div className="min-w-0">
    <h3 className="font-mono text-sm uppercase tracking-widest text-vscode-comment mb-3">{label}</h3>
    <pre className="overflow-x-auto rounded-lg bg-vscode-sidebar border border-white/10 p-4 text-xs sm:text-sm font-mono text-vscode-string leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
);

const ProjectUpgrade: React.FC = () => {
  const { t, lp } = useLanguage();
  const c = t.upgradeCase;
  const labels = t.ui.projectsPage;

  return (
    <article className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={lp('/projects')}
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {labels.backToProjects}
        </Link>

        {/* Header */}
        <header className="mb-16">
          <img
            src="/projects/upgrade-jdk17.webp"
            alt={c.imageAlt}
            width={1672}
            height={941}
            className="w-full aspect-video object-cover rounded-xl mb-10"
          />
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

        {/* 02 Changes */}
        <section className="mb-16">
          <SectionTitle index="02.">{c.changes.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.changes.intro}</p>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {c.changes.items.map((item) => (
              <div key={item.name} className="rounded-lg bg-white/5 border border-white/5 px-4 py-3">
                <dt className="font-mono text-sm text-vscode-function">{item.name}</dt>
                <dd className="text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</dd>
              </div>
            ))}
          </dl>

          <h3 className="font-bold text-white mb-3">{c.sample.heading}</h3>
          <p className="text-gray-300 leading-relaxed mb-6">{c.sample.intro}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CodeBlock label={c.sample.beforeLabel} code={BEFORE_EXAMPLE} />
            <CodeBlock label={c.sample.afterLabel} code={AFTER_EXAMPLE} />
          </div>
          <p className="text-xs text-gray-500 mt-2">{c.sample.note}</p>
        </section>

        {/* 03 Testing */}
        <section className="mb-16">
          <SectionTitle index="03.">{c.testing.heading}</SectionTitle>
          <p className="text-gray-300 leading-relaxed mb-8">{c.testing.intro}</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.testing.steps.map((step, i) => (
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

        {/* 04 Outcome */}
        <section>
          <SectionTitle index="04.">{c.outcome.heading}</SectionTitle>
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

export default ProjectUpgrade;
