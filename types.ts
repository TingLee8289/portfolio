import { LucideIcon } from 'lucide-react';

export type Locale = 'zh' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface SkillItem {
  name: string;
  color?: string; // For syntax highlighting feel
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface SkillGroup {
  title: string;
  categories: SkillCategory[];
}

export interface ExperienceBullet {
  text: string;
  projectId?: string;
  detailPath?: string; // Internal route with a full write-up of this bullet
  projectLabel?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary?: string;
  description: ExperienceBullet[];
  tech?: string[];
  logo?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  location?: string;
  period?: string;
  logo?: string;
  description?: string[];
  tags?: string[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  chineseName: string;
  title: string;
  subTitle: string;
  tagline: string;
  about: string[];
  email: string;
  phone: string;
  github: string;
  english: string;
  logo: string;
}

export interface UIStrings {
  nav: {
    info: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
  };
  sections: {
    about: { heading: string };
    skills: { heading: string };
    experience: { heading: string };
    projects: { heading: string };
    education: { heading: string };
  };
  projectsPage: {
    viewCase: string;
    backToProjects: string;
    roleLabel: string;
    techLabel: string;
    configTitle: string;
    configNote: string;    lockWorkerA: string;
    lockWorkerB: string;
    workTag: string;
    personalTag: string;
  };
  hero: {
    welcomeComment: string;
    headlineRole: string;
    headlineName: string;
    headlineTail: string;
    cta: string;
    location: string;
  };
  joke: {
    fileName: string;
    comment: string;
    loading: string;
    another: string;
  };
  footer: {
    rights: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  tech: string[];
  problem: { heading: string; body: string[] };
  flow: { heading: string; steps: { title: string; desc: string }[] };
  rules: {
    heading: string;
    intro: string;
    fields: { name: string; desc: string }[];
    scenariosHeading: string;
    scenarios: { label: string; text: string }[];
  };
  suppression: { heading: string; intro: string; points: string[] };
  locking: { heading: string; intro: string; points: string[] };
}

export interface FlowCase {
  imageAlt: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  tech: string[];
  problem: { heading: string; body: string[] };
  flow: { heading: string; steps: { title: string; desc: string }[] };
  features: { heading: string; intro: string; items: { name: string; desc: string }[] };
  outcome: { heading: string; points: string[] };
}

export interface PizzaCase {
  imageAlt: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  tech: string[];
  demo: { caption: string };
  problem: { heading: string; body: string[] };
  features: { heading: string; intro: string; items: { name: string; desc: string }[] };
  messaging: {
    heading: string;
    intro: string;
    channels: { name: string; role: string; points: string[] }[];
  };
  flow: { heading: string; steps: { title: string; desc: string }[] };
  reliability: { heading: string; intro: string; items: { name: string; desc: string }[] };
  planning: { heading: string; intro: string; items: { name: string; desc: string }[] };
  outcome: { heading: string; points: string[] };
}

export interface LatencyCase {
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  tech: string[];
  problem: { heading: string; body: string[] };
  flow: { heading: string; steps: { title: string; desc: string }[] };
  panels: { heading: string; intro: string; items: { name: string; desc: string }[] };
  sample: { heading: string; intro: string; note: string };
  outcome: { heading: string; points: string[] };
}

export interface UpgradeCase {
  imageAlt: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  tech: string[];
  problem: { heading: string; body: string[] };
  changes: { heading: string; intro: string; items: { name: string; desc: string }[] };
  sample: { heading: string; intro: string; beforeLabel: string; afterLabel: string; note: string };
  testing: { heading: string; intro: string; steps: { title: string; desc: string }[] };
  outcome: { heading: string; points: string[] };
}

export interface PortfolioContent {
  personalInfo: PersonalInfo;
  stats: StatItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  monitoringCase: CaseStudy;
  socialNotionCase: FlowCase;
  pizzaCase: PizzaCase;
  latencyCase: LatencyCase;
  upgradeCase: UpgradeCase;
  ui: UIStrings;
}