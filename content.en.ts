import { Layers, Award } from 'lucide-react';
import { PERSONAL_INFO_BASE } from './constants';
import { PortfolioContent } from './types';

export const enContent: PortfolioContent = {
  personalInfo: {
    ...PERSONAL_INFO_BASE,
    title: "Full-Stack Developer | Software Engineering + Semiconductor Process Integration",
    subTitle: "Full-Stack Developer | Software Engineering + Semiconductor Process Integration",
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
        { text: "Upgraded Spring Boot 2.x (JDK 8) to 3.x (JDK 17) to fix vulnerabilities, with AI-written unit and E2E automation tests.", detailPath: "/projects/upgrade-jdk17" },
        { text: "Built OpenSearch API latency dashboards to track API and DB call durations across nodes, accelerating incident diagnosis.", detailPath: "/projects/latency-dashboard" },
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
    role: "Requirements Analysis, Architecture Design, Development, Testing",
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
  upgradeCase: {
    imageAlt: "Illustration of upgrading from Java 8 and Spring Boot 2 to Java 17 and Spring Boot 3",
    title: "The Journey from Java 8 to 17",
    subtitle: "Upgrading the Direct Carrier Billing Platform from JDK 8 + Spring Boot 2 to JDK 17 + Spring Boot 3, with AI-assisted tests as a safety net",
    summary: "To fix vulnerabilities reported by Checkmarx and WhiteSource, the Direct Carrier Billing Platform was upgraded from JDK 8 + Spring Boot 2 to JDK 17 + Spring Boot 3 in one step. Before upgrading, AI was used to fill in unit tests, to list every API and to write test cases for each. AI generated automated test scripts for APIs that can be called repeatedly or rolled back, manual testing covered the APIs that cannot be rolled back, and the regression test passed in full after release.",
    role: "Requirements Analysis, Architecture Design, Development, Testing",
    tech: ["JDK 17", "Spring Boot 3", "Spring Security", "Jakarta EE", "Docker", "Checkmarx", "WhiteSource", "JUnit", "AI-assisted Testing"],
    problem: {
      heading: "The Problem",
      body: [
        "The Direct Carrier Billing Platform connects several billing systems and exposes APIs to external vendors. Checkmarx and WhiteSource scans kept listing vulnerabilities in older dependencies, and a real fix meant moving to versions that are still supported.",
        "This was a major-version upgrade touching the JDK, Spring Boot and Spring Security. Because external vendors call the platform, behaviour must not change after the upgrade, so the tests were built first and the upgrade came after.",
      ],
    },
    changes: {
      heading: "What Had to Change",
      intro: "The upgrade required three main kinds of change:",
      items: [
        { name: "javax.* → jakarta.*", desc: "Spring Boot 3 is built on Jakarta EE, so javax packages across the code had to be moved to jakarta." },
        { name: "Spring Security configuration", desc: "Spring Security 6 removes WebSecurityConfigurerAdapter in favour of a SecurityFilterChain bean, and the authorization syntax changes with it." },
        { name: "Dockerfile", desc: "The base image moves to JDK 17, with the matching build and start-up settings adjusted." },
      ],
    },
    sample: {
      heading: "Rewrite Example",
      intro: "Taking the Spring Security configuration as an example, the old style extends WebSecurityConfigurerAdapter, the new style registers a SecurityFilterChain, and the packages move from javax to jakarta.",
      beforeLabel: "Spring Boot 2",
      afterLabel: "Spring Boot 3",
      note: "Illustrative code. Paths and class names are made up.",
    },
    testing: {
      heading: "Testing Strategy",
      intro: "The risk in an upgrade is behaviour changing silently. Tests were therefore built first as a safety net, then the JDK and Spring Boot were upgraded together, with AI used to cut down the time spent writing tests.",
      steps: [
        { title: "Fill in unit tests", desc: "AI first wrote unit tests for the existing code, so logic changes after the upgrade would surface quickly." },
        { title: "List every API", desc: "AI listed all of the system's APIs and wrote test cases for each one." },
        { title: "Automated scripts", desc: "For APIs that can be called repeatedly or rolled back, AI generated automated test scripts." },
        { title: "Manual testing", desc: "APIs that cannot be rolled back are not suited to repeated automated runs, so they were covered by manual testing." },
        { title: "Upgrade together", desc: "The JDK and Spring Boot were upgraded at the same time, with the three kinds of change above, and tests confirmed the behaviour was unchanged." },
        { title: "Post-release check", desc: "A regression test was run after release and passed in full." },
      ],
    },
    outcome: {
      heading: "Outcome",
      points: [
        "Completed and released the JDK 17 + Spring Boot 3 upgrade, and the post-release regression test passed in full.",
        "Moving to supported versions was the main way of fixing the Checkmarx and WhiteSource findings.",
        "Left behind unit tests and automated API test scripts that can be reused in future upgrades and maintenance.",
      ],
    },
  },
  latencyCase: {
    title: "API Latency Dashboards",
    subtitle: "Tying API, external call and DB timings together by trace ID, with OpenSearch Dashboards to find slow and repeated calls",
    summary: "Filebeat ships logs that share a single trace ID into OpenSearch, and OpenSearch Dashboards trend charts show the latency and call volume of each API, external API and DB call. The team can see at a glance which APIs are slow, which are called most, and which requests call the same external API repeatedly or run N+1 DB queries, without digging through logs one entry at a time.",
    role: "Requirements Analysis, Architecture Design, Development, Testing",
    tech: ["Java", "Spring Boot", "SLF4J MDC", "Filebeat", "OpenSearch", "OpenSearch Dashboards"],
    problem: {
      heading: "The Problem",
      body: [
        "When the system slowed down or misbehaved, the team had to guess which API was responsible and then dig through logs one entry at a time to confirm it, which took a long time.",
        "Three things were hard to see: which APIs respond slowly, which APIs are called most, and which APIs call the same external API repeatedly within one request or run N+1 DB queries.",
        "This dashboard records the timing of every node a request passes through (API, external call, DB) and links them with a single trace ID, turning the question from guessing into looking.",
      ],
    },
    flow: {
      heading: "How It Works",
      steps: [
        { title: "Request arrives", desc: "A trace ID is generated at the entry point and put into MDC, so every log line of that request carries it." },
        { title: "Record node timings", desc: "The API itself, each external API call and each DB call record their own duration and target as structured logs." },
        { title: "Filebeat collects", desc: "Filebeat reads the log files and ships them to OpenSearch." },
        { title: "Index and fields", desc: "Trace ID, type, API name, call target and duration become searchable, aggregatable fields." },
        { title: "Dashboards", desc: "OpenSearch Dashboards shows latency, call counts and repeated calls as trend and summary charts." },
        { title: "Drill down", desc: "From a problem API, use the trace ID to list every external call and SQL statement of that request." },
      ],
    },
    panels: {
      heading: "Three Questions It Answers",
      intro: "Each question has its own set of charts. Trend charts show change over time and make before/after-release comparison easy.",
      items: [
        { name: "Which APIs are slow", desc: "Latency per API (p95 rather than the average), shown as a trend chart. A sudden rise can be compared against release times to find the cause." },
        { name: "Which APIs are called most", desc: "Call counts per API over a time range, to find the busiest APIs and set optimisation priorities." },
        { name: "Which APIs call an external API repeatedly or have N+1", desc: "Per trace ID, count how often the same external API or the same kind of SQL appears within one request. Unusually high counts are the ones to inspect." },
      ],
    },
    sample: {
      heading: "Log Example",
      intro: "Under one trace ID, a request leaves records for the API, an external call and several DB calls. In the example below the same SQL appears repeatedly, the classic N+1 pattern.",
      note: "Illustrative log format. API names, SQL names and numbers are all made up.",
    },
    outcome: {
      heading: "Outcome",
      points: [
        "Slow APIs and high-traffic APIs are ranked and trended on the dashboard, instead of judged by impression.",
        "Repeated external API calls and N+1 DB queries can be counted, with no need to read logs one by one.",
        "Following the trace ID from one request down to each external call and SQL speeds up troubleshooting.",
      ],
    },
  },
  socialNotionCase: {
    imageAlt: "Illustration of a cute robot filing social media posts into a bookmark box",
    title: "Social Posts to Notion via LINE",
    subtitle: "Share a link to a LINE bot; Google Apps Script files it into a Notion database",
    summary: "When you spot a post worth keeping on Facebook, Instagram, Threads or other platforms, just share it to a LINE bot. Google Apps Script detects the source platform, extracts the post's details and writes it to a single Notion database, so everything can later be searched by title, platform, tag and saved date in one place.",
    role: "Personal project (Requirements Analysis, System Design, Development)",
    tech: ["Google Apps Script", "LINE Messaging API", "Notion API", "Webhook", "JavaScript"],
    problem: {
      heading: "The Problem",
      body: [
        "Good content ends up scattered across each platform's own \"save\" or \"bookmark\" feature. Every platform has its own, so finding something later means searching them one by one, and often not finding it at all.",
        "This project funnels saving into a single entry point: share a post to LINE from any app and it lands in Notion automatically, where one database handles search and organisation.",
      ],
    },
    flow: {
      heading: "How It Works",
      steps: [
        { title: "Share a post", desc: "Share the post link from a social app to the LINE bot." },
        { title: "Webhook receives it", desc: "LINE delivers the message event to a Google Apps Script Web App (doPost)." },
        { title: "Detect the platform", desc: "Work out the source platform from the URL and ignore messages that are not links." },
        { title: "Extract details", desc: "Fetch public information such as the page title, summary and thumbnail." },
        { title: "Write to Notion", desc: "Create a record in the database through the Notion API, with platform, link and saved date." },
        { title: "Confirm", desc: "Reply in LINE to say whether saving succeeded, with the reason if it failed." },
      ],
    },
    features: {
      heading: "Database Design",
      intro: "Each post is a structured record in Notion, so content from different platforms can be searched with the same criteria.",
      items: [
        { name: "Title", desc: "Post or page title" },
        { name: "Source platform", desc: "Facebook, Instagram, Threads and so on" },
        { name: "Original link", desc: "Jump straight back to the post" },
        { name: "Summary", desc: "An excerpt of the content for full-text search" },
        { name: "Tags", desc: "Custom categories for filtering" },
        { name: "Saved date", desc: "Sort and review by time" },
      ],
    },
    outcome: {
      heading: "Outcome",
      points: [
        "Saves from several platforms live in one Notion database, leaving a single place to search.",
        "Saving takes one step, \"share to LINE\", without leaving the app you are already in.",
        "Deployed on Google Apps Script, so there is no server to maintain.",
      ],
    },
  },
  pizzaCase: {
    imageAlt: "Pizza factory simulator 3D production line and KPI dashboard",
    demo: { caption: "The dashboard in action: placing an order and following the lot to shipment" },
    title: "Pizza Factory Simulator",
    subtitle: "Industrial Engineering and production planning on a seven-station pizza line: due-date estimation, lot handling and recipe adjustment, with live KPIs",
    summary: "A seven-station pizza line simulated on real message brokers: RabbitMQ carries dispatch commands and Kafka records what happens at each station. A scheduler picks the next job by dispatch rule, and a KPI service computes throughput, WIP, cycle time and the bottleneck in real time, compares them with Industrial Engineering theory, and streams everything to a 3D dashboard.",
    role: "Personal project (Requirements Analysis, System Design, Development, Testing)",
    tech: ["Python", "Kafka", "RabbitMQ", "FastAPI + SSE", "Three.js", "Docker", "Industrial Engineering", "Production Control & Planning"],
    problem: {
      heading: "Background",
      body: [
        "Kafka and message queues both move messages, but from documentation alone the difference between them easily stays abstract: which messages need to be acknowledged as done, and which should be recorded for anyone to replay?",
        "This project gives each one a real job on the same production line, and doubles as practice in Industrial Engineering and production scheduling: the oven is deliberately the slowest station, to see whether the measured numbers match theory.",
      ],
    },
    features: {
      heading: "Key Features",
      intro: "Everything is done from one dashboard, and every change shows up on the line and in the KPIs right away.",
      items: [
        { name: "Place orders", desc: "Place orders by hand with a priority, or let a generator place them at a set arrival rate" },
        { name: "Adjust station recipes", desc: "Change each station's recipe per product and watch the bottleneck and KPIs respond" },
        { name: "Live ETA", desc: "Each order's completion time and due date are estimated from bottleneck capacity and queued WIP" },
        { name: "KPI trend charts", desc: "Throughput, WIP and cycle time over time, to compare before and after a change" },
        { name: "Lot handling", desc: "Track each lot's current station and status, and handle rework caused by breakdowns" },
        { name: "Station performance", desc: "Utilization and activity for every station at a glance, with the current bottleneck highlighted" },
      ],
    },
    messaging: {
      heading: "Commands vs Facts",
      intro: "The system follows one rule: RabbitMQ carries commands, Kafka carries facts. A command has one receiver that must report back when done. A fact only states what already happened, so anyone can read it and replay it.",
      channels: [
        {
          name: "RabbitMQ",
          role: "Commands (please do this)",
          points: [
            "Orders enter workorders.intake, then the scheduler dispatches jobs to each station's station.<id>.jobs queue",
            "Each station uses prefetch 1, handling one job at a time and acking only when done",
            "Failures go to a retry queue with a 5-second TTL; jobs over the retry limit or with an invalid format go to a DLQ",
          ],
        },
        {
          name: "Kafka",
          role: "Facts (this happened)",
          points: [
            "Stations write op_started / op_completed to station.events, partitioned by station",
            "Order lifecycle events go to order.lifecycle, and KPI snapshots to a compacted topic",
            "The scheduler, KPI service and dashboard each read the same events with their own consumer group",
          ],
        },
      ],
    },
    flow: {
      heading: "Life of an Order",
      steps: [
        { title: "Order", desc: "A generator places orders at a set arrival rate, or orders are placed by hand on the dashboard, and sent to RabbitMQ." },
        { title: "Release", desc: "The scheduler records a created event, estimates the ETA and due date, and releases orders by the active dispatch rule." },
        { title: "Dispatch", desc: "The scheduler sends the job to the next station's queue. The seven stations are dough, sauce, cheese, toppings, bake, slice and package." },
        { title: "Process", desc: "The station writes op_started, waits the real cycle time for that product, writes op_completed, then acks." },
        { title: "Hand-off", desc: "Stations never talk to each other. The scheduler reads the completion event from Kafka and dispatches the next step." },
        { title: "Monitor", desc: "The KPI service folds events into live metrics and pushes them to the 3D dashboard over SSE." },
      ],
    },
    reliability: {
      heading: "Reliability",
      intro: "Stations and the scheduler can be interrupted at any moment. The goal is that no work is lost and none is counted twice.",
      items: [
        { name: "Kafka first, then ack", desc: "A station acks only after the completion event is flushed to Kafka. A crash causes redelivery, and event_id dedupe records the work once" },
        { name: "Retry and DLQ", desc: "Temporary failures are re-dispatched through a TTL retry queue; invalid messages go straight to the DLQ instead of retrying forever" },
        { name: "Breakdowns and rework", desc: "Stations can break down and be repaired at random. A failed lot waits in a cool-down queue before returning to the scheduler, so it never blocks the station" },
        { name: "Restart recovery", desc: "On restart the scheduler replays events from Kafka to rebuild WIP and lots in cool-down" },
        { name: "Chaos testing", desc: "A script kills containers at random during a run to check that the line recovers by itself" },
      ],
    },
    planning: {
      heading: "Scheduling and KPIs",
      intro: "Three pizza products take different times at each station, so dispatch rules produce real differences. The oven takes 12 to 14 seconds per pizza while other stations take 3 to 6, making it the bottleneck by design.",
      items: [
        { name: "Dispatch rules", desc: "FIFO, EDD and SPT can be switched live, and the same set of orders can be compared across rules" },
        { name: "Priority and due dates", desc: "Orders carry a priority from 1 to 99; at release the ETA is estimated from the bottleneck and queued WIP, and a due date is derived from it" },
        { name: "Live KPIs", desc: "Throughput, WIP, cycle time (mean, p50, p95) and utilization per station" },
        { name: "Bottleneck detection", desc: "Utilization with hysteresis picks the bottleneck station, so it does not flip back and forth between two stations" },
        { name: "Checks against theory", desc: "With warm-up excluded, measurements are checked against Little's Law (L = λW) and bottleneck capacity" },
      ],
    },
    outcome: {
      heading: "Outcome",
      points: [
        "In an overload test, measured throughput reached 91% of the theoretical bottleneck capacity, inside the expected 75% to 115% band.",
        "About 1,200 Python tests and 250 frontend tests, with integration tests running against real Kafka and RabbitMQ brokers.",
        "Docker starts the brokers, all seven stations and every service with one command, and the same seed reproduces the same orders.",
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
      configNote:"Illustrative configuration only. Names, emails and phone numbers are made up.",
      lockWorkerA: "Worker A: gets the lock, runs the rule",
      lockWorkerB: "Worker B: no lock, does not run",
      workTag: "Work",
      personalTag: "Personal",
    },
    hero: {
      welcomeComment: "# Welcome to my portfolio",
      headlineRole: "Full-Stack Developer |\nSoftware Engineering + Semiconductor Process Integration",
      headlineName: "Wan-Ting Lee",
      headlineTail: "reads problems in data and solves them in code.",
      cta: "See Projects",
      location: "Taoyuan, Taiwan",
    },
    joke: {
      fileName: "joke.tsx",
      comment: "# A random joke, fresh from the database",
      loading: "Loading a joke...",
      another: "Another one",
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
