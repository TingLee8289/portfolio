import { LucideIcon } from 'lucide-react';

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

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary?: string;
  description: string[];
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