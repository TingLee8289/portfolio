import { Layers, Award } from 'lucide-react';
import { PERSONAL_INFO_BASE } from './constants';
import { PortfolioContent } from './types';

export const zhContent: PortfolioContent = {
  personalInfo: {
    ...PERSONAL_INFO_BASE,
    title: "Full-Stack Developer | Semiconductor Industry Background",
    subTitle: "全端開發工程師 ｜ 半導體先進製程背景",
    tagline: "Bridging Semiconductor Precision with Modern Full-Stack Engineering",
    about: [
      "　　擁有半導體先進製程整合與現代全端軟體架構的雙重專業背景。於台積電及世界先進擔任製程整合工程師期間，深刻體會到自動化系統為團隊節省大量人力與時間成本的價值，進而跨領域轉職投入軟體開發。",
      "　　現任台灣大哥大資深工程師，負責網站系統需求分析、架構設計、程式開發、測試及維運工作。"
    ],
  },
  stats: [
    { value: "9+ 年跨領域專業累積", label: "半導體先進製程整合 + 現代全端軟體開發", icon: Layers },
    { value: "英語精通能力", label: "TOEIC 955 / TOEFL 94", icon: Award }
  ],
  education: [
    {
      school: "瑞典林雪平大學 Linköpings Universitet (LiU)",
      degree: "材料物理與奈米科技 英文學程碩士 (M.S. in Materials Physics & Nanotechnology)",
      location: "瑞典",
      period: "2014.09 – 2016.08",
      logo: "/logos/liu.png",
    },
    {
      school: "國立清華大學 National Tsing Hua University (NTHU)",
      degree: "材料科學與工程學系 學士 (B.S. in Materials Science & Engineering)",
      location: "台灣",
      period: "2011.09 – 2014.08",
      logo: "/logos/nthu.png",
    }
  ],
  experience: [
    {
      company: "台灣大哥大",
      role: "資深工程師 Senior Software Engineer",
      period: "2022.06 – 至今",
      logo: "/logos/taiwanmobile.png",
      summary: "負責網站系統需求分析、架構設計、程式開發、測試及維運工作。",
      description: [
        { projectId: "dcbp", projectLabel: "大哥付隨帳收", text: "OTT 申辦、停車代收、點燈祈福整合平台，串接多套帳務系統並提供外部廠商 API。" },
        { text: "建置 OpenSearch API Latency Dashboards，並追蹤各節點 API、DB 呼叫耗時，加速異常排查效率。" },
        { text: "導入 SDD (Spec-Driven Development) 開發流程及前後端自動化測試 (Playwright, Selenium, JUnit)。" },
        { text: "導入 Design Patterns 重構專案 API，加快後續服務接入速度並降低邏輯錯誤。" },
        { text: "建立排程監控與告警系統，於 DB、Log 符合設定條件時自動發送 email 或簡訊通知。", detailPath: "/projects/monitoring" },
        { projectId: "aiMeetingNote", projectLabel: "AI 聽寫大哥", text: "提供多國語音轉文字之記錄平台。" },
        { text: "開發通知中心推播功能 API，因應 Web／App 多裝置情境設計全裝置推播及已讀機制。" }
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "OpenSearch", "Docker", "Kubernetes", "Argo CD", "Playwright", "Selenium", "JUnit", "SDD", "Design Patterns"]
    },
    {
      company: "台積電",
      role: "製程整合工程師 Process Integration Engineer",
      period: "2019.10 – 2021.10",
      logo: "/logos/tsmc.svg",
      summary: "12 吋先進製程研發廠 (R&D FAB) 3nm & 5nm 製程整合經驗。",
      description: [
        { text: "開發微影製程異常區域偵測判定系統（photolithography non-correctable error ink-out system），減少 ~1/3 潛在可靠性失效風險（<0.2% yield loss），並成功被他廠導入使用。" },
        { text: "使用 SAS EG 自動化每日撈取資料及繪製圖表作業（systematized SPC chart & auto report），減少約 95% 人力時間成本，並透過標準化提高圖表品質。" }
      ],
      tech: ["Python", "SAS EG", "Photolithography Ink-out System", "SPC", "WAT", "Yield Optimization", "3nm/5nm R&D"]
    },
    {
      company: "世界先進",
      role: "製程整合工程師 Process Integration Engineer",
      period: "2016.12 – 2019.06",
      logo: "/logos/vis.png",
      summary: "8 吋 0.4um BCD 商用 & 車用產品製程整合經驗。",
      description: [
        { text: "建置 NTO (New Tape-Out) 製程流程與 inline／WAT 量測程式。" },
        { text: "WAT 與良率 (Yield) excursion 問題排除，確保晶圓出貨品質與可靠性指標達標。" }
      ],
      tech: ["0.4um BCD Process", "Automotive & Commercial", "NTO", "Inline Measurement", "WAT", "Yield Excursion"]
    }
  ],
  monitoringCase: {
    title: "排程監控與告警系統",
    subtitle: "針對 DB 與 Log 的條件監控，自動發送 Email 與簡訊通知",
    summary: "針對 DB 與 Log 兩種資料源，依可設定的監控規則排程檢查，條件成立時自動通知指定人員。每條規則的資料源、時間範圍、門檻與告警人員都能獨立調整，同一位人員在同一個通知管道上設有抑制時間，避免重複打擾，並以分散式 lock 避免同一規則被重複執行。",
    role: "Senior Engineer（需求分析、架構設計、開發、測試）",
    tech: ["Java", "Spring Boot", "PostgreSQL", "OpenSearch", "Distributed Lock", "Scheduler", "Email", "SMS"],
    problem: {
      heading: "要解決的問題",
      body: [
        "系統出現異常時，如果只靠人工查詢資料庫或翻找 Log，很容易延遲發現。",
        "這個系統把「查什麼、查哪裡、多久內超過幾筆、要通知誰」變成可設定的規則，由排程自動檢查，條件成立時立刻通知相關人員。",
        "另一個問題是告警過度打擾：條件持續成立時，如果每一輪排程都通知，同一批人會不斷收到重複的通知。因此系統提供抑制機制，讓同一人、同一通知管道在抑制時間內不會被重複通知。"
      ],
    },
    flow: {
      heading: "運作流程",
      steps: [
        { title: "排程觸發", desc: "依各規則的排程時間，逐條觸發檢查。" },
        { title: "取得 Lock", desc: "先取得該規則的分散式 lock，確保同一時間只有一個執行者處理這條規則。" },
        { title: "載入規則", desc: "讀取規則設定：資料源、查詢條件、時間範圍、門檻與告警人員。" },
        { title: "查詢資料源", desc: "DB 規則查詢 PostgreSQL；Log 規則透過 OpenSearch 查詢。" },
        { title: "判斷條件", desc: "統計時間範圍內的筆數，判斷是否超過門檻。" },
        { title: "檢查抑制時間", desc: "針對每位告警人員與每個通知管道，檢查抑制時間內是否已通知過，已通知過就跳過。" },
        { title: "發送通知", desc: "條件成立時，依規則設定寄送 Email 或簡訊給尚未被抑制的告警人員，並記錄通知時間。" },
        { title: "釋放 Lock", desc: "處理完成後釋放 lock。" },
      ],
    },
    rules: {
      heading: "彈性的監控規則",
      intro: "每條規則都是一份獨立的設定，不同規則可以有不同的資料源、時間範圍、門檻與告警人員。",
      fields: [
        { name: "資料源", desc: "DB 或 Log" },
        { name: "查詢條件", desc: "要統計哪些資料或哪些 Log" },
        { name: "時間範圍", desc: "例如最近 3 天、最近 7 天" },
        { name: "門檻", desc: "例如超過 5 筆" },
        { name: "告警人員", desc: "每位人員各自的姓名、Email 與電話" },
        { name: "通知方式", desc: "Email、簡訊" },
        { name: "是否啟用抑制", desc: "可選擇要不要啟用抑制機制" },
        { name: "抑制時間", desc: "同一人、同一管道通知後，多久內不再通知" },
      ],
      scenariosHeading: "調整規則的例子",
      scenarios: [
        { label: "今天", text: "三天內的資料超過 5 筆，就通知。" },
        { label: "明天", text: "改為七天內的資料超過 5 筆，才通知。" },
      ],
    },
    suppression: {
      heading: "抑制重複通知",
      intro: "條件持續成立時，每一輪排程都會判斷為異常。如果每一輪都通知，告警人員會不斷被重複打擾。因此每條規則可以設定抑制時間。",
      points: [
        "每條規則可以設定是否啟用抑制；沒有啟用時，不會做抑制判斷。",
        "啟用後，以「同一位告警人員＋同一個通知管道」為單位判斷。",
        "在抑制時間內已經通知過，就不會再通知，直到抑制時間結束。",
        "同一個人的 Email 與簡訊分開計算，不會互相影響。",
      ],
    },
    locking: {
      heading: "多執行緒與分散式 Lock",
      intro: "排程可能同時在多個執行緒、多個節點上被觸發。如果同一條規則被同時執行，同一個異常就會被重複檢查、重複通知。",
      points: [
        "以規則為單位取得分散式 lock，同一時間只有一個執行者能處理該規則。",
        "沒有取得 lock 的執行者不會執行該規則，因此不會重複發送通知。",
        "不同規則之間互不影響，仍然可以平行執行。",
      ],
    },
  },
  ui: {
    nav: {
      info: "資訊",
      about: "關於",
      skills: "技能",
      experience: "工作經歷",
      projects: "專案",
      education: "學歷",
    },
    sections: {
      about: { heading: "關於我" },
      skills: { heading: "技能" },
      experience: { heading: "工作經歷" },
      projects: { heading: "專案" },
      education: { heading: "學歷" },
    },
    projectsPage: {
      viewCase: "查看專案說明",
      backToProjects: "返回專案列表",
      roleLabel: "角色",
      techLabel: "使用技術",
      configTitle: "規則設定範例",
      configNote: "示意用的設定概念，姓名、Email 與電話皆為假資料。",
      lockWorkerA: "執行者 A：取得 lock，執行規則",
      lockWorkerB: "執行者 B：未取得 lock，不執行",
    },
    hero: {
      welcomeComment: "# Welcome to my portfolio",
      headlineRole: "全端開發工程師",
      headlineName: "李宛庭",
      headlineTail: "用資料看問題，用程式解問題。",
      cta: "查看工作經歷",
      location: "Taoyuan, Taiwan",
    },
    footer: {
      rights: "All Rights Reserved",
    },
    seo: {
      title: "李宛庭 Wan-Ting Lee | 全端開發工程師",
      description: "李宛庭（Wan-Ting Lee）的個人作品集，擁有半導體產業背景的全端開發工程師（台灣大哥大、台積電、世界先進）。",
    },
  },
};
