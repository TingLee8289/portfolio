import {
  Github,
  Mail,
  Server,
  Database,
  Container,
  Globe,
  Code2,
  FileCode,
  Layout,
  GitBranch,
  Cloud,
  Search,
  BarChart3,
  Cpu,
  Activity,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Languages,
  Palette,
  Braces,
  Atom,
  Layers,
  Zap
} from 'lucide-react';
import { SocialLink, SkillGroup } from './types';

// Locale-invariant contact/identity info shared by every language.
export const PERSONAL_INFO_BASE = {
  name: "Wan-Ting Lee",
  chineseName: "李宛庭",
  email: "tingwtlee@gmail.com",
  phone: "0989-923-005",
  github: "https://github.com/TingLee8289",
  english: "TOEFL 94 / TOEIC 955",
  logo: "/avatar.svg"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: PERSONAL_INFO_BASE.github, icon: Github },
  { platform: "Email", url: `mailto:${PERSONAL_INFO_BASE.email}`, icon: Mail },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Software Engineering",
    categories: [
      {
        title: "Backend",
        skills: [
          { name: "Java", color: "text-orange-400", icon: Code2 },
          { name: "Spring Boot", color: "text-green-400", icon: Server },
          { name: "Python", color: "text-yellow-400", icon: FileCode }
        ]
      },
      {
        title: "Frontend",
        skills: [
          { name: "HTML", color: "text-orange-400", icon: Layout },
          { name: "CSS", color: "text-blue-400", icon: Palette },
          { name: "JavaScript", color: "text-yellow-400", icon: Braces },
          { name: "React", color: "text-cyan-400", icon: Atom },
        ]
      },
      {
        title: "Database & Search",
        skills: [
          { name: "PostgreSQL", color: "text-blue-300", icon: Database },
          { name: "OpenSearch", color: "text-teal-400", icon: Search },
          { name: "Redis", color: "text-red-400", icon: Layers },
          { name: "MySQL", color: "text-sky-400", icon: Database },
        ]
      },
      {
        title: "DevOps",
        skills: [
          { name: "Docker", color: "text-blue-400", icon: Container },
          { name: "Kubernetes (K8s)", color: "text-blue-500", icon: Cloud },
          { name: "Argo CD", color: "text-orange-400", icon: GitBranch },
          { name: "Git", color: "text-red-400", icon: GitBranch },
          { name: "CI/CD Automation", color: "text-emerald-400", icon: Zap },
        ]
      },
      {
        title: "Testing",
        skills: [
          { name: "Playwright", color: "text-green-500", icon: CheckCircle2 },
          { name: "Selenium", color: "text-lime-400", icon: Sliders },
          { name: "JUnit", color: "text-rose-400", icon: CheckCircle2 },
          { name: "Automated Regression", color: "text-teal-300", icon: ShieldCheck },
        ]
      },
      {
        title: "Methodology",
        skills: [
          { name: "RESTful API", color: "text-cyan-400", icon: Globe },
          { name: "Design Patterns", color: "text-purple-400", icon: Layers },
          { name: "Spec-Driven Development (SDD)", color: "text-blue-400", icon: CheckCircle2 },
        ]
      }
    ]
  },
  {
    title: "Semiconductor Engineering",
    categories: [
      {
        title: "Process Analysis",
        skills: [
          { name: "SPC (Statistical Process Control)", color: "text-yellow-400", icon: BarChart3 },
          { name: "WAT (Wafer Acceptance Test)", color: "text-blue-400", icon: Cpu },
          { name: "Yield", color: "text-emerald-400", icon: Activity },
        ]
      }
    ]
  },
  {
    title: "Languages",
    categories: [
      {
        title: "Spoken Languages",
        skills: [
          { name: "Chinese (Native)", color: "text-red-400", icon: Languages },
          { name: "English (TOEFL 94 / TOEIC 955)", color: "text-blue-400", icon: Languages },
        ]
      }
    ]
  }
];

// Stable slugs, not the localized project names, so translated experience
// bullets can still link to the right project badge.
export const PROJECT_LINKS: Record<string, { url: string; logo: string }> = {
  dcbp: { url: "https://dcb.oppay.tw/", logo: "/logos/dcb-favicon.ico" },
  aiMeetingNote: { url: "https://www.twmsolution.com/ebgp/ai_votexai", logo: "/logos/ai-votex.png" },
};
