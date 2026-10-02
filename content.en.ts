import { Layers, Award } from 'lucide-react';
import { PERSONAL_INFO_BASE } from './constants';
import { PortfolioContent } from './types';

export const enContent: PortfolioContent = {
  personalInfo: {
    ...PERSONAL_INFO_BASE,
    title: "Full-Stack Developer | Semiconductor Industry Background",
    subTitle: "Full-Stack Developer | Semiconductor Industry Background",
    tagline: "Bridging Semiconductor Precision with Modern Full-Stack Engineering",
    about: [
      "I bring a dual background spanning advanced semiconductor process integration and modern full-stack software architecture. While working as a Process Integration Engineer at TSMC and VIS, I saw firsthand how much time and manual effort automated systems could save a team — which led me to make a cross-industry move into software development.",
      "I currently work as a Senior Software Engineer at Taiwan Mobile, responsible for requirements analysis, architecture design, development, testing, and maintenance of web systems."
    ],
  },
  stats: [
    { value: "9+ Years", label: "Cross-Industry Experience: Advanced Semiconductor Process Integration + Modern Full-Stack Development", icon: Layers },
    { value: "Fluent English", label: "TOEIC 955 / TOEFL 94", icon: Award }
  ],
  education: [
    {
      school: "Linköping University (LiU)",
      degree: "M.S. in Materials Physics & Nanotechnology",
      location: "Sweden",
      period: "2014.09 – 2016.08",
      logo: "/logos/liu.png",
    },
    {
      school: "National Tsing Hua University (NTHU)",
      degree: "B.S. in Materials Science & Engineering",
      location: "Taiwan",
      period: "2011.09 – 2014.08",
      logo: "/logos/nthu.png",
    }
  ],
  experience: [
    {
      company: "Taiwan Mobile",
      role: "Senior Software Engineer",
      period: "2022.06 – Present",
      logo: "/logos/taiwanmobile.png",
      summary: "Responsible for requirements analysis, architecture design, development, testing, and maintenance of web systems.",
      description: [
        { projectId: "dcbp", projectLabel: "Direct Carrier Billing Platform", text: "An integrated platform for OTT subscriptions, parking-fee collection, and prayer-lamp donations, connecting multiple billing systems and exposing APIs to external vendors." },
        { text: "Built OpenSearch API latency dashboards to track API and DB call durations across nodes, accelerating incident diagnosis." },
        { text: "Introduced Spec-Driven Development (SDD) and automated front-end/back-end testing (Playwright, Selenium, JUnit)." },
        { text: "Refactored project APIs using Design Patterns, speeding up onboarding of new integrations and reducing logic errors." },
        { text: "Built a scheduled monitoring system that automatically sends email/SMS alerts when DB or log conditions are met.", detailPath: "/projects/monitoring" },
        { projectId: "aiMeetingNote", projectLabel: "AI Meeting Note", text: "A multilingual speech-to-text transcription platform." },
        { text: "Developed notification center push APIs, designing a cross-device push and read-status mechanism for Web and App clients." }
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "OpenSearch", "Docker", "Kubernetes", "Argo CD", "Playwright", "Selenium", "JUnit", "SDD", "Design Patterns"]
    },
    {
      company: "TSMC",
      role: "Process Integration Engineer",
      period: "2019.10 – 2021.10",
      logo: "/logos/tsmc.svg",
      summary: "12-inch 3nm & 5nm process integration experience.",
      description: [
        { text: "Developed a photolithography non-correctable-error ink-out detection system, cutting potential reliability-failure risk by ~1/3 (<0.2% yield loss); the system was later adopted by other fabs." },
        { text: "Automated daily data retrieval and charting with SAS EG (systematized SPC chart & auto report), reducing manual effort by ~95% and improving chart quality through standardization." }
      ],
      tech: ["Python", "SAS EG", "Photolithography Ink-out System", "SPC", "WAT", "Yield Optimization", "3nm/5nm R&D"]
    },
    {
      company: "VIS",
      role: "Process Integration Engineer",
      period: "2016.12 – 2019.06",
      logo: "/logos/vis.png",
      summary: "8-inch 0.4um BCD process integration experience for commercial and automotive products.",
      description: [
        { text: "Built the New Tape-Out (NTO) process flow and inline/WAT measurement programs." },
        { text: "Resolved WAT and yield excursion issues, ensuring wafer shipment quality and reliability targets were met." }
      ],
      tech: ["0.4um BCD Process", "Automotive & Commercial", "NTO", "Inline Measurement", "WAT", "Yield Excursion"]
    }
  ],
  monitoringCase: {
    title: "Scheduled Monitoring & Alerting System",
    subtitle: "Condition-based monitoring of DB and logs, with automatic email and SMS alerts",
    summary: "Runs scheduled checks against two data sources, a database and logs, using configurable monitoring rules, and automatically notifies the right people when a condition is met. Each rule has its own data source, time window, threshold and recipients, a suppression window stops the same person from being notified repeatedly on the same channel, and a distributed lock prevents the same rule from running twice.",
    role: "Senior Engineer (Requirements Analysis, Architecture Design, Development, Testing)",
    tech: ["Java", "Spring Boot", "PostgreSQL", "OpenSearch", "Distributed Lock", "Scheduler", "Email", "SMS"],
    problem: {
      heading: "The Problem",
      body: [
        "When a system misbehaves, relying on people to query the database or dig through logs means problems are noticed late.",
        "This system turns \"what to check, where to check, how many records within what time, and who to notify\" into configurable rules. A scheduler runs them automatically and notifies the right people as soon as a condition is met.",
        "Another problem is over-alerting: while a condition keeps holding, notifying on every scheduler run means the same people keep receiving repeat messages. A suppression mechanism keeps the same person from being notified again on the same channel within the suppression window."
      ],
    },
    flow: {
      heading: "How It Works",
      steps: [
        { title: "Scheduler fires", desc: "Each rule is triggered on its own schedule." },
        { title: "Acquire lock", desc: "Take the rule's distributed lock so only one worker handles that rule at a time." },
        { title: "Load rule", desc: "Read the rule: data source, query, time window, threshold and recipients." },
        { title: "Query the source", desc: "DB rules query PostgreSQL; log rules query OpenSearch." },
        { title: "Evaluate", desc: "Count matches within the time window and compare against the threshold." },
        { title: "Check suppression", desc: "For each recipient and each channel, check whether they were already notified within the suppression window, and skip them if so." },
        { title: "Notify", desc: "When the condition is met, send email or SMS to recipients that are not suppressed, and record the notification time." },
        { title: "Release lock", desc: "Release the lock once processing is done." },
      ],
    },
    rules: {
      heading: "Flexible Monitoring Rules",
      intro: "Every rule is an independent configuration. Different rules can use different data sources, time windows, thresholds and recipients.",
      fields: [
        { name: "Data source", desc: "DB or log" },
        { name: "Query", desc: "Which records or log entries to count" },
        { name: "Time window", desc: "For example the last 3 days or 7 days" },
        { name: "Threshold", desc: "For example more than 5 matches" },
        { name: "Recipients", desc: "Each person's own name, email and phone number" },
        { name: "Channels", desc: "Email, SMS" },
        { name: "Suppression on/off", desc: "Whether suppression is enabled for the rule" },
        { name: "Suppression window", desc: "How long to stay silent after notifying the same person on the same channel" },
      ],
      scenariosHeading: "Example of Changing a Rule",
      scenarios: [
        { label: "Today", text: "Notify when more than 5 records appear within 3 days." },
        { label: "Tomorrow", text: "Change it to notify only when more than 5 records appear within 7 days." },
      ],
    },
    suppression: {
      heading: "Suppressing Repeat Notifications",
      intro: "While a condition keeps holding, every scheduler run sees it as an anomaly. Notifying on every run would keep bothering the same people, so each rule has a configurable suppression window.",
      points: [
        "Each rule can turn suppression on or off; when it is off, no suppression check is made.",
        "When on, suppression is decided per recipient and per channel.",
        "Once someone has been notified on a channel within the window, they are not notified again until the window has passed.",
        "A person's email and SMS are tracked separately and do not affect each other.",
      ],
    },
    locking: {
      heading: "Multithreading & Distributed Lock",
      intro: "The scheduler can fire on several threads and several nodes at once. If the same rule ran concurrently, one anomaly would be checked and notified more than once.",
      points: [
        "A distributed lock is taken per rule, so only one worker can process that rule at a time.",
        "A worker that does not get the lock does not run the rule, so no duplicate notifications are sent.",
        "Different rules do not block each other and can still run in parallel.",
      ],
    },
  },
  ui: {
    nav: {
      info: "Info",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
    },
    sections: {
      about: { heading: "About Me" },
      skills: { heading: "Skills" },
      experience: { heading: "Experience" },
      projects: { heading: "Projects" },
      education: { heading: "Education" },
    },
    projectsPage: {
      viewCase: "Read the case study",
      backToProjects: "Back to projects",
      roleLabel: "Role",
      techLabel: "Tech",
      configTitle: "Example rule configuration",
      configNote: "Illustrative configuration only. Names, emails and phone numbers are made up.",
      lockWorkerA: "Worker A: gets the lock, runs the rule",
      lockWorkerB: "Worker B: no lock, does not run",
    },
    hero: {
      welcomeComment: "# Welcome to my portfolio",
      headlineRole: "A Full-Stack Developer",
      headlineName: "Wan-Ting Lee",
      headlineTail: "reads problems in data and solves them in code.",
      cta: "See Experience",
      location: "Taoyuan, Taiwan",
    },
    footer: {
      rights: "All Rights Reserved",
    },
    seo: {
      title: "Wan-Ting Lee | Full-Stack Developer",
      description: "Portfolio of Wan-Ting Lee, Full-Stack Developer with semiconductor industry background (Taiwan Mobile, TSMC, VIS).",
    },
  },
};
