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
        { text: "建立排程監控系統，於 DB、Log 符合設定條件時自動發送 email 或簡訊通知。" },
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
  projects: [
    {
      title: "大哥付隨帳收 Direct Carrier Billing Platform (DCBP)",
      subtitle: "電信隨帳收與多元金流整合平台 / Core Architecture & API Gateway",
      description: "OTT 申辦、停車代收、點燈祈福整合平台，串接多套電信核心帳務系統並提供高可用外部廠商 API。",
      features: [
        "建置 OpenSearch API Latency Dashboards，即時追蹤各節點 API 與 DB 呼叫耗時，倍數加速異常排查",
        "導入 SDD (Spec-Driven Development) 開發流程與前後端自動化測試 (Playwright, Selenium, JUnit)",
        "導入 Design Patterns 重構專案 API，大幅加快後續第三方合作服務接入速度並降低邏輯錯誤",
        "建立高可靠排程監控系統，於 DB 異常或 Log 關鍵字符合觸發門檻時自動即時發送 Email / SMS 告警"
      ],
      explanation: "作為台灣大哥大核心金流平台，串接電信門號隨帳代收代付，支援高並發電信代扣扣款。以微服務架構搭配 Kubernetes 與 Argo CD 實現持續整合與部署，並透過 OpenSearch 監控體系與 Design Patterns 重構維護高可用性與敏捷擴充能力。",
      role: "資深工程師 (需求分析、架構設計、程式開發、測試及維運)",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "OpenSearch", "Docker", "Kubernetes", "Argo CD", "Playwright", "Selenium", "JUnit", "SDD"],
      demoUrl: "https://dcb.oppay.tw/",
      image: "https://dcb.oppay.tw/logo/logo_dcb.svg"
    },
    {
      title: "AI 聽寫大哥 AI Meeting Note",
      subtitle: "多國語音轉文字記錄平台 / Notification Center & Push Service",
      description: "提供多國語言語音轉文字之會議記錄平台，協助企業與個人實現高精準度語音記錄與智能整理。",
      features: [
        "設計並開發跨平台通知中心 (Notification Center) 推播功能 API",
        "因應 Web / App 多裝置跨設備情境，架構全裝置即時推播與已讀狀態同步機制",
        "支援高並發即時通知派送與使用者多端狀態精確同步"
      ],
      explanation: "打造智慧會議記錄平台核心通知架構，串接多終端即時推送機制，讓使用者在電腦網頁版與手機 App 間無縫接收轉錄進度通知與訊息，實現真正全裝置一致的使用者體驗。",
      role: "資深工程師 (系統分析、推播架構設計、API 開發)",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "Push Notification", "Kubernetes", "Multi-Device Sync"],
      demoUrl: "https://www.twmsolution.com/ebgp/ai_votexai",
      image: "https://twmprod.meeting.t-mchat.com/img/nav-logo.png"
    },
    {
      title: "微影製程異常區域偵測判定系統",
      subtitle: "Photolithography Non-Correctable Error Ink-Out System (TSMC)",
      description: "台積電 12 吋 R&D FAB 3nm & 5nm 先進製程專用之晶圓微影異常區域偵測與自動判定排除系統。",
      features: [
        "減少 ~1/3 潛在可靠性失效風險 (<0.2% yield loss)",
        "針對微影不可修正誤差 (Non-correctable error) 進行高精度演算法判定與空間 ink-out 標註",
        "系統成效顯著並成功推廣被台積電其他生產廠區正式導入使用"
      ],
      explanation: "在先進 3nm 與 5nm 研發製程中，微影不可修正誤差可能在封裝測試階段衍生可靠性失效。透過自行開發之空間辨識判定系統，在早期即精準識別並排除瑕疵區域，為先進製程穩定放量做出重要貢獻。",
      role: "製程整合工程師 / 系統開發者",
      techStack: ["Python", "Algorithm", "Photolithography", "Yield Optimization", "SPC", "TSMC 3nm/5nm R&D"]
    },
    {
      title: "SAS EG 自動化數據撈取與 SPC 圖表平台",
      subtitle: "Systematized SPC Chart & Auto Report (TSMC)",
      description: "台積電先進製程自動化每日巨量資料撈取、統計製程管制 (SPC) 圖表繪製與自動化報告生成系統。",
      features: [
        "減少約 95% 人力時間成本，大幅釋放工程師生產力",
        "每日定時自產線資料庫撈取海量量測數據並自動彙整清洗",
        "透過標準化圖表邏輯提高 SPC 圖表品質與異常趨勢偵測靈敏度"
      ],
      explanation: "原先需工程師每日耗時數小時手動查詢、繪製與整理之製程管制報表，透過 SAS EG 排程與自動化腳本轉化為全自動資料流水線，確保每日研發與生產決策獲得即時、標準且高精確度的數據支援。",
      role: "製程整合工程師 / 自動化開發者",
      techStack: ["SAS EG", "Automation", "Data Pipelines", "SPC Analysis", "Yield Management"]
    },
    {
      title: "8 吋 BCD 製程 NTO 與 inline / WAT 量測系統",
      subtitle: "New Tape-Out & Inline / WAT Platform (VIS 世界先進)",
      description: "世界先進 8 吋 0.4um BCD 商用與車用高規格產品製程整合、NTO 流程建立與電性量測系統。",
      features: [
        "建立完整 NTO (New Tape-Out) 製程流程規範與 inline / WAT 電性量測程式",
        "快速進行 WAT 與良率 (Yield) excursion 異常根因排查與製程修復",
        "落實車用與商規晶片對耐壓與抗干擾之高標準可靠度要求"
      ],
      explanation: "負責車用電子與電源管理 IC 所需之 0.4um BCD 高壓製程整合，制定自晶圓量測到良率監控的完整標準，確保新產品順利試產並穩定達成車用級良率門檻。",
      role: "製程整合工程師 / Process Integration Engineer",
      techStack: ["0.4um BCD", "WAT Testing", "NTO Process", "Inline Measurement", "Yield Excursion"]
    }
  ],
  ui: {
    nav: {
      info: "資訊",
      about: "關於",
      skills: "技能",
      experience: "經歷",
      education: "學歷",
    },
    sections: {
      about: { heading: "關於我" },
      skills: { heading: "技能" },
      experience: { heading: "工作經歷" },
      education: { heading: "學歷" },
    },
    hero: {
      welcomeComment: "# Welcome to my portfolio",
      loadingLabel: "Loading:",
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
