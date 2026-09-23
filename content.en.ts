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
        { text: "Built a scheduled monitoring system that automatically sends email/SMS alerts when DB or log conditions are met." },
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
  projects: [
    {
      title: "Direct Carrier Billing Platform (DCBP)",
      subtitle: "Telecom Direct-Carrier-Billing & Multi-Channel Payment Platform / Core Architecture & API Gateway",
      description: "An integrated platform for OTT subscriptions, parking-fee collection, and prayer-lamp donations, connecting multiple core telecom billing systems and exposing highly available APIs to external vendors.",
      features: [
        "Built OpenSearch API latency dashboards for real-time tracking of API and DB call durations across nodes, dramatically speeding up incident diagnosis",
        "Introduced Spec-Driven Development (SDD) and automated front-end/back-end testing (Playwright, Selenium, JUnit)",
        "Refactored project APIs using Design Patterns, significantly speeding up onboarding of third-party integrations and reducing logic errors",
        "Built a highly reliable scheduled monitoring system that automatically sends Email/SMS alerts when DB anomalies or log keywords cross defined thresholds"
      ],
      explanation: "As Taiwan Mobile's core billing platform, this system handles direct-carrier billing for mobile numbers and supports high-concurrency telecom payment deductions. Built on a microservices architecture with Kubernetes and Argo CD for continuous integration and delivery, with high availability and agile extensibility maintained through an OpenSearch monitoring stack and Design Pattern-driven refactoring.",
      role: "Senior Engineer (Requirements Analysis, Architecture Design, Development, Testing & Operations)",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "OpenSearch", "Docker", "Kubernetes", "Argo CD", "Playwright", "Selenium", "JUnit", "SDD"],
      demoUrl: "https://dcb.oppay.tw/",
      image: "https://dcb.oppay.tw/logo/logo_dcb.svg"
    },
    {
      title: "AI Meeting Note",
      subtitle: "Multilingual Speech-to-Text Platform / Notification Center & Push Service",
      description: "A multilingual speech-to-text meeting-transcription platform helping businesses and individuals achieve highly accurate voice recording and intelligent organization.",
      features: [
        "Designed and developed a cross-platform Notification Center push API",
        "Architected a cross-device real-time push and read-status sync mechanism for Web and App scenarios",
        "Supported high-concurrency real-time notification delivery with precise multi-device state synchronization"
      ],
      explanation: "Built the core notification architecture for a smart meeting-transcription platform, connecting multi-terminal real-time push mechanisms so users can seamlessly receive transcription-progress notifications across desktop web and mobile app — delivering a truly consistent cross-device experience.",
      role: "Senior Engineer (System Analysis, Push Architecture Design, API Development)",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "Push Notification", "Kubernetes", "Multi-Device Sync"],
      demoUrl: "https://www.twmsolution.com/ebgp/ai_votexai",
      image: "https://twmprod.meeting.t-mchat.com/img/nav-logo.png"
    },
    {
      title: "Photolithography Anomaly Detection System",
      subtitle: "Photolithography Non-Correctable Error Ink-Out System (TSMC)",
      description: "A wafer photolithography anomaly detection and auto-exclusion system built for TSMC's 12-inch R&D fab 3nm & 5nm advanced processes.",
      features: [
        "Reduced potential reliability-failure risk by ~1/3 (<0.2% yield loss)",
        "High-precision algorithmic detection and spatial ink-out marking of photolithography non-correctable errors",
        "Proven effective and later officially adopted by other TSMC fabs"
      ],
      explanation: "In advanced 3nm and 5nm R&D processes, photolithography non-correctable errors can lead to reliability failures during packaging and test. A self-developed spatial recognition and detection system identifies and excludes defective regions early, contributing meaningfully to stable ramp-up of advanced processes.",
      role: "Process Integration Engineer / System Developer",
      techStack: ["Python", "Algorithm", "Photolithography", "Yield Optimization", "SPC", "TSMC 3nm/5nm R&D"]
    },
    {
      title: "SAS EG Automated Data Pipeline & SPC Chart Platform",
      subtitle: "Systematized SPC Chart & Auto Report (TSMC)",
      description: "An automated daily large-scale data-retrieval, statistical process control (SPC) charting, and auto-report-generation system for TSMC's advanced processes.",
      features: [
        "Reduced manual effort by ~95%, freeing up significant engineer productivity",
        "Automatically retrieved and cleaned massive volumes of measurement data from production line databases on a daily schedule",
        "Improved SPC chart quality and anomaly-trend detection sensitivity through standardized charting logic"
      ],
      explanation: "What previously required engineers to spend hours each day manually querying, charting, and compiling process-control reports was transformed into a fully automated data pipeline via SAS EG scheduling and automation scripts, ensuring daily R&D and production decisions were backed by real-time, standardized, and highly accurate data.",
      role: "Process Integration Engineer / Automation Developer",
      techStack: ["SAS EG", "Automation", "Data Pipelines", "SPC Analysis", "Yield Management"]
    },
    {
      title: "8-inch BCD Process NTO & Inline / WAT Measurement System",
      subtitle: "New Tape-Out & Inline / WAT Platform (VIS)",
      description: "Process integration, New Tape-Out (NTO) flow setup, and electrical measurement systems for VIS's 8-inch 0.4um BCD commercial and automotive-grade products.",
      features: [
        "Established a complete New Tape-Out (NTO) process flow standard and inline/WAT electrical measurement programs",
        "Rapidly diagnosed and resolved WAT and yield excursion root causes",
        "Met stringent voltage-tolerance and interference-resistance reliability standards for automotive and commercial chips"
      ],
      explanation: "Responsible for 0.4um BCD high-voltage process integration for automotive electronics and power-management ICs, establishing a complete standard from wafer measurement through yield monitoring, ensuring smooth pilot runs and consistently meeting automotive-grade yield targets for new products.",
      role: "Process Integration Engineer",
      techStack: ["0.4um BCD", "WAT Testing", "NTO Process", "Inline Measurement", "Yield Excursion"]
    }
  ],
  ui: {
    nav: {
      info: "Info",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
    },
    sections: {
      about: { heading: "About Me" },
      skills: { heading: "Skills" },
      experience: { heading: "Experience" },
      education: { heading: "Education" },
    },
    hero: {
      welcomeComment: "# Welcome to my portfolio",
      loadingLabel: "Loading:",
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
