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
    configNote: string;
    lockWorkerA: string;
    lockWorkerB: string;
  };
  hero: {
    welcomeComment: string;
    headlineRole: string;
    headlineName: string;
    headlineTail: string;
    cta: string;
    location: string;
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

export interface PortfolioContent {
  personalInfo: PersonalInfo;
  stats: StatItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  monitoringCase: CaseStudy;
  ui: UIStrings;
}