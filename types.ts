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

export interface ProjectItem {
  title: string;
  subtitle?: string; // New field for the second line
  description: string; // Used for "System"
  features?: string[]; // Used for "Features"
  explanation?: string; // Used for "Project Description"
  role?: string;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
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
    education: string;
  };
  sections: {
    about: { heading: string };
    skills: { heading: string };
    experience: { heading: string };
    education: { heading: string };
  };
  hero: {
    welcomeComment: string;
    loadingLabel: string;
  };
  footer: {
    rights: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export interface PortfolioContent {
  personalInfo: PersonalInfo;
  stats: StatItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  ui: UIStrings;
}