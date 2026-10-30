import { Layers, Award } from 'lucide-react';
import { PERSONAL_INFO_BASE } from './constants';
import { PortfolioContent } from './types';

export const zhContent: PortfolioContent = {
  personalInfo: {
    ...PERSONAL_INFO_BASE,
    title: "Full-Stack Developer | Software Engineering + Semiconductor Process Integration",
    subTitle: "全端開發工程師 ｜ 軟體工程 + 半導體製程整合",
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
        { text: "升級 Spring Boot 2.x (JDK8) 至 3.x (JDK17) 以修補弱點，並以 AI 補齊單元測試與 E2E 自動化測試。", detailPath: "/projects/upgrade-jdk17" },
        { text: "建置 OpenSearch API Latency Dashboards，並追蹤各節點 API、DB 呼叫耗時，加速異常排查效率。", detailPath: "/projects/latency-dashboard" },
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
    role: "需求分析、架構設計、開發、測試",
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
  upgradeCase: {
    imageAlt: "Java 8 與 Spring Boot 2 升級為 Java 17 與 Spring Boot 3 的插畫",
    title: "Java 8 到 17 的升級之旅",
    subtitle: "大哥付隨帳收從 JDK 8 + Spring Boot 2 升級至 JDK 17 + Spring Boot 3，以 AI 輔助補齊測試作為安全網",
    summary: "為修補 Checkmarx、WhiteSource 掃描出的弱點，將大哥付隨帳收同時從 JDK 8 + Spring Boot 2 升級至 JDK 17 + Spring Boot 3。升級前先請 AI 補齊單元測試，並列出所有 API、為每支 API 撰寫測試案例；可重複呼叫或可 rollback 的 API 由 AI 產生自動化測試腳本，無法 rollback 的 API 則以手動測試補足，上線後 Regression Test 全數通過。",
    role: "需求分析、架構設計、開發、測試",
    tech: ["JDK 17", "Spring Boot 3", "Spring Security", "Jakarta EE", "Docker", "Checkmarx", "WhiteSource", "JUnit", "AI 輔助測試"],
    problem: {
      heading: "要解決的問題",
      body: [
        "大哥付隨帳收是串接多套帳務系統、並提供 API 給外部廠商的平台。Checkmarx 與 WhiteSource 的掃描持續列出舊版相依套件的弱點，要根本修補，需要升級到仍受支援的版本。",
        "這是一次跨大版本的升級，影響範圍包含 JDK、Spring Boot 與 Spring Security。因為平台會被外部廠商呼叫，升級後行為不能改變，所以先把測試補齊，再進行升級。",
      ],
    },
    changes: {
      heading: "主要的調整項目",
      intro: "這次升級需要處理的改動主要有三類：",
      items: [
        { name: "javax.* → jakarta.*", desc: "Spring Boot 3 改用 Jakarta EE，程式中的 javax 套件需要全面改為 jakarta。" },
        { name: "Spring Security 設定", desc: "Spring Security 6 移除 WebSecurityConfigurerAdapter，改以 SecurityFilterChain Bean 設定，授權的寫法也一併調整。" },
        { name: "Dockerfile", desc: "基底映像改為 JDK 17，並調整對應的建置與啟動設定。" },
      ],
    },
    sample: {
      heading: "改寫範例",
      intro: "以 Spring Security 設定為例，舊寫法繼承 WebSecurityConfigurerAdapter，新寫法改為註冊 SecurityFilterChain，套件也從 javax 換成 jakarta。",
      beforeLabel: "Spring Boot 2",
      afterLabel: "Spring Boot 3",
      note: "示意用的寫法，路徑與類別名稱皆為假資料。",
    },
    testing: {
      heading: "測試策略",
      intro: "升級的風險在於行為被悄悄改變。因此先建立測試作為安全網，再同時升級 JDK 與 Spring Boot，並善用 AI 縮短補測試的時間。",
      steps: [
        { title: "補齊單元測試", desc: "先請 AI 為既有程式補齊單元測試，讓升級後能快速發現邏輯改變。" },
        { title: "列出所有 API", desc: "請 AI 列出系統所有 API，並為每支 API 撰寫測試案例。" },
        { title: "自動化測試腳本", desc: "針對可重複呼叫、或可以 rollback 的 API，請 AI 產生自動化測試腳本。" },
        { title: "手動測試", desc: "無法 rollback 的 API 不適合反覆自動化執行，改以手動測試補足。" },
        { title: "同時升級", desc: "JDK 與 Spring Boot 同時升級，完成上述三類調整後，以測試驗證行為一致。" },
        { title: "上線後驗證", desc: "上線後執行 Regression Test，全數通過。" },
      ],
    },
    outcome: {
      heading: "成果",
      points: [
        "完成 JDK 17 + Spring Boot 3 升級並上線，上線後 Regression Test 全數通過。",
        "升級至仍受支援的版本，作為修補 Checkmarx、WhiteSource 弱點的主要手段。",
        "留下單元測試與 API 自動化測試腳本，可供日後升級與維護重複使用。",
      ],
    },
  },
  latencyCase: {
    title: "API Latency 儀表板",
    subtitle: "以 Trace ID 串起 API、外部呼叫與 DB 耗時，用 OpenSearch Dashboards 找出慢 API 與重複呼叫",
    summary: "透過 Filebeat 收集帶有同一個 Trace ID 的 Log，送進 OpenSearch，並以 OpenSearch Dashboards 的趨勢圖呈現各 API、外部 API 與 DB 的耗時與呼叫次數。團隊可以直接看到哪些 API 偏慢、哪些 API 呼叫最頻繁，以及哪些請求重複呼叫同一支外部 API 或出現 N+1 DB query，不必再逐筆翻 Log 排查。",
    role: "需求分析、架構設計、開發、測試",
    tech: ["Java", "Spring Boot", "SLF4J MDC", "Filebeat", "OpenSearch", "OpenSearch Dashboards"],
    problem: {
      heading: "要解決的問題",
      body: [
        "系統變慢或出現異常時，只能憑印象猜是哪支 API，再逐筆翻 Log 確認，排查很花時間。",
        "具體來說有三件事看不到：哪些 API 回應偏慢、哪些 API 呼叫次數最多，以及哪些 API 在一次請求裡重複呼叫同一支外部 API，或出現 N+1 DB query。",
        "這個儀表板把每次請求經過的各個節點（API、外部呼叫、DB）的耗時都記錄下來，並以同一個 Trace ID 串起來，讓問題從「猜」變成「看得到」。",
      ],
    },
    flow: {
      heading: "運作流程",
      steps: [
        { title: "請求進入", desc: "每個請求在入口產生 Trace ID，放進 MDC，讓同一個請求的所有 Log 都帶有它。" },
        { title: "記錄各節點耗時", desc: "API 本身、外部 API 呼叫、DB 呼叫各自記錄耗時與目標，輸出成結構化 Log。" },
        { title: "Filebeat 收集", desc: "Filebeat 讀取 Log 檔案，送進 OpenSearch。" },
        { title: "建立索引與欄位", desc: "Trace ID、類型、API 名稱、呼叫目標與耗時都成為可查詢、可聚合的欄位。" },
        { title: "儀表板呈現", desc: "OpenSearch Dashboards 以趨勢圖與統計圖呈現耗時、呼叫次數與重複呼叫。" },
        { title: "往下追蹤", desc: "從異常的 API 用 Trace ID 查出該次請求的每一個外部呼叫與 SQL。" },
      ],
    },
    panels: {
      heading: "三個要回答的問題",
      intro: "每個問題對應一組圖表，用趨勢圖觀察變化，也方便比對上線前後。",
      items: [
        { name: "哪些 API 回應偏慢", desc: "依 API 統計耗時（建議看 p95 而不是平均值），以趨勢圖呈現。耗時突然上升，可以對照上線時間找原因。" },
        { name: "哪些 API 呼叫最多", desc: "依時間範圍統計各 API 的呼叫次數，找出流量最大的 API，作為優化優先順序的參考。" },
        { name: "哪些 API 重複呼叫外部 API 或有 N+1", desc: "以 Trace ID 為單位，統計同一個外部 API 或同一種 SQL 在一次請求內出現的次數，次數異常多的就是需要檢查的對象。" },
      ],
    },
    sample: {
      heading: "Log 範例",
      intro: "同一個 Trace ID 下，一次請求會留下 API、外部呼叫與多筆 DB 呼叫的紀錄。下面的例子中，同一種 SQL 重複出現，就是典型的 N+1。",
      note: "示意用的 Log 格式，API 名稱、SQL 名稱與數值皆為假資料。",
    },
    outcome: {
      heading: "成果",
      points: [
        "慢 API 與高流量 API 可以直接在儀表板看到排名與趨勢，不再靠印象判斷。",
        "重複呼叫外部 API 與 N+1 DB query 可以被統計出來，不必逐筆翻 Log。",
        "以 Trace ID 從單一請求往下追到每個外部呼叫與 SQL，加速異常排查。",
      ],
    },
  },
  socialNotionCase: {
    imageAlt: "可愛機器人把社群貼文收藏進書籤收納盒的插畫",
    title: "社群貼文一鍵收藏到 Notion",
    subtitle: "以 LINE 轉發連結，透過 Google Apps Script 自動整理並存入 Notion 資料庫",
    summary: "在 Facebook、Instagram、Threads 等不同社群平台看到想留存的貼文時，只要分享到 LINE 機器人，Google Apps Script 就會辨識來源平台、擷取貼文資訊，並寫入 Notion 資料庫統一管理，之後可用標題、平台、標籤與收藏日期集中搜尋。",
    role: "個人專案（需求分析、系統設計、開發）",
    tech: ["Google Apps Script", "LINE Messaging API", "Notion API", "Webhook", "JavaScript"],
    problem: {
      heading: "要解決的問題",
      body: [
        "好內容散落在各個社群平台的「收藏」、「儲存」功能裡，每個平台各自一套，想回頭找時要逐一翻找，往往找不到。",
        "這個專案把「收藏」收斂到同一個入口：在任何 App 把貼文分享到 LINE，就會自動存進 Notion，用同一套資料庫搜尋與整理。",
      ],
    },
    flow: {
      heading: "運作流程",
      steps: [
        { title: "分享貼文", desc: "在社群 App 把貼文連結分享給 LINE 機器人。" },
        { title: "Webhook 接收", desc: "LINE 將訊息事件送到 Google Apps Script 部署的 Web App（doPost）。" },
        { title: "辨識平台", desc: "從網址判斷來源平台，並過濾非連結的訊息。" },
        { title: "擷取資訊", desc: "取得頁面標題、摘要與縮圖等公開資訊。" },
        { title: "寫入 Notion", desc: "透過 Notion API 在資料庫建立一筆紀錄，並帶入平台、連結與收藏日期。" },
        { title: "回覆確認", desc: "透過 LINE 回覆是否收藏成功，失敗時提示原因。" },
      ],
    },
    features: {
      heading: "資料庫欄位設計",
      intro: "每筆貼文在 Notion 中都是一筆結構化紀錄，讓不同平台的內容能用同一套條件搜尋。",
      items: [
        { name: "標題", desc: "貼文或頁面標題" },
        { name: "來源平台", desc: "Facebook、Instagram、Threads 等" },
        { name: "原始連結", desc: "可直接點回原貼文" },
        { name: "摘要", desc: "貼文內容節錄，方便全文搜尋" },
        { name: "標籤", desc: "自訂分類，方便篩選" },
        { name: "收藏日期", desc: "依時間排序與回顧" },
      ],
    },
    outcome: {
      heading: "成果",
      points: [
        "多個平台的收藏集中在同一個 Notion 資料庫，搜尋入口只剩一個。",
        "收藏動作只需「分享到 LINE」一步，不必離開原本使用的 App。",
        "使用 Google Apps Script 部署，不需自行維護伺服器。",
      ],
    },
  },
  pizzaCase: {
    imageAlt: "披薩工廠模擬器的 3D 產線與 KPI 儀表板畫面",
    demo: { caption: "儀表板實際運作畫面" },
    title: "披薩工廠模擬器",
    subtitle: "IE & PC Planning 應用於七站式披薩產線：交期估算、批次處理與配方調整，並即時監控 KPI",
    summary: "用真實的 Kafka + RabbitMQ 訊息流驅動一條可觀察的七站式披薩產線：RabbitMQ 負責派工指令，Kafka 記錄每一站發生的事件。排程器依派工規則決定下一張工單，KPI 服務即時計算 throughput、WIP、cycle time，並呈現在 3D 儀表板上。",
    role: "個人專案（需求分析、系統設計、開發、測試）",
    tech: ["Python", "Kafka", "RabbitMQ", "FastAPI + SSE", "Three.js", "Docker", "IE", "PC Planning"],
    problem: {
      heading: "專案緣起",
      body: [
        "這是一個個人學習專案，靈感來自一首童謠〈Pizza Party〉及我過去的工作經驗。",
        "融合 IE 的產線指標、PC 的排程派工、Kafka 事件流、RabbitMQ 指令佇列等主題，打造一個能實際跑起來、看得到過程的披薩工廠。",
      ],
    },
    features: {
      heading: "主要功能",
      intro: "所有操作都在同一個儀表板上完成，調整後可以馬上看到產線與 KPI 的變化。",
      items: [
        { name: "下單", desc: "在儀表板手動下單並設定優先度，也可以讓產生器依到達率自動下單" },
        { name: "調整機台 Recipe", desc: "調整各站對不同品項的 recipe，觀察瓶頸與 KPI 隨之改變" },
        { name: "即時計算 ETA", desc: "依瓶頸產能與排隊中的 WIP 估算每張訂單的完成時間與交期" },
        { name: "KPI 趨勢圖", desc: "throughput、WIP、cycle time 隨時間變化，方便比較調整前後的差異" },
        { name: "Lot Handling", desc: "追蹤每個 lot 所在的站點與狀態，處理機台故障造成的重工" },
        { name: "機台 Performance", desc: "各站使用率與處理狀況一目了然，並標示目前的瓶頸站" },
      ],
    },
    messaging: {
      heading: "訊息分工：指令 vs 事實",
      intro: "整個系統只有一條規則：RabbitMQ 傳指令，Kafka 傳事實。指令有明確的接收者，做完要回報；事實只描述已發生的事，誰都可以讀，也可以重播。",
      channels: [
        {
          name: "RabbitMQ",
          role: "指令（請你去做）",
          points: [
            "工單進入 workorders.intake，排程器再派工到各站的 station.<id>.jobs",
            "每站 prefetch 1，一次只處理一張，處理完才 ack",
            "失敗進入 TTL 5 秒的 retry queue，超過次數或格式錯誤則進 DLQ",
          ],
        },
        {
          name: "Kafka",
          role: "事實（已經發生）",
          points: [
            "站點寫入 op_started / op_completed 到 station.events，以站名分區",
            "訂單生命週期寫入 order.lifecycle，KPI 快照寫入 compact topic",
            "排程器、KPI、儀表板各自用獨立的 consumer group 讀同一份事件",
          ],
        },
      ],
    },
    flow: {
      heading: "一張訂單的流程",
      steps: [
        { title: "下單", desc: "產生器依到達率自動下單，或在儀表板手動下單，工單送進 RabbitMQ。" },
        { title: "投料", desc: "排程器記錄 created 事件，估算 ETA 與交期後，依派工規則決定投料順序。" },
        { title: "派工", desc: "排程器把工作派到下一站的 jobs queue，七站依序是擀麵團、上醬、起司、配料、烘烤、切片、裝盒。" },
        { title: "加工", desc: "站點寫入 op_started，依品項的 cycle time 實際等待，完成後寫入 op_completed 再 ack。" },
        { title: "交接", desc: "站與站之間不直接溝通，由排程器讀到 Kafka 的完成事件後，再派下一站。" },
        { title: "監控", desc: "KPI 服務從事件折疊出即時指標，經 SSE 推到 3D 儀表板。" },
      ],
    },
    reliability: {
      heading: "可靠性設計",
      intro: "站點和排程器都可能在任何時候被中斷，設計目標是工作不遺失，也不會重複計算。",
      items: [
        { name: "先 Kafka 後 ack", desc: "完成事件 flush 到 Kafka 後才 ack；中途 crash 會重送，再以 event_id 去重，同一件工作只記一次" },
        { name: "Retry 與 DLQ", desc: "暫時性失敗走 TTL retry queue 重派，無效訊息直接進 DLQ，不會無限重試" },
        { name: "機台故障與重工", desc: "可模擬站點隨機停機與修復；失敗的 lot 進入冷卻佇列再回到排程，不會卡住站點" },
        { name: "重啟還原", desc: "排程器重啟時從 Kafka 重播事件，重建在製品與冷卻中 lot 的狀態" },
        { name: "Chaos 測試", desc: "以腳本在運行中隨機砍掉容器，驗證產線能自行恢復" },
      ],
    },
    planning: {
      heading: "排程與 KPI",
      intro: "三種披薩品項在各站的加工時間不同，讓派工規則之間有實際差異可以比較；烘烤站每片 12 到 14 秒，其他站 3 到 6 秒，是刻意設計的瓶頸。",
      items: [
        { name: "派工規則", desc: "FIFO、EDD、SPT 可即時切換，同一組訂單能比較不同規則的 KPI" },
        { name: "優先度與交期", desc: "工單有 1 到 99 的優先度；投料時依瓶頸與排隊 WIP 估算 ETA，並推算交期" },
        { name: "即時 KPI", desc: "throughput、WIP、cycle time（平均、p50、p95）與各站使用率" },
        { name: "瓶頸判定", desc: "以使用率搭配遲滯（hysteresis）判定瓶頸站，避免在兩站之間來回跳動" },
        { name: "理論值對照", desc: "排除暖機期後，以 Little's Law（L = λW）與瓶頸產能檢查量測值" },
      ],
    },
    outcome: {
      heading: "成果",
      points: [
        "超載測試中，實測 throughput 為理論瓶頸產能的 91%，落在預設的 75% 到 115% 範圍內。",
        "約 1,200 個 Python 測試與 250 個前端測試，整合測試直接連真實的 Kafka 與 RabbitMQ。",
        "Docker 一鍵啟動 broker、七個站點與所有服務，同一個 seed 可重現相同的訂單。",
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
      configNote: "示意用的設定概念，姓名、Email 與電話皆為假資料。",      lockWorkerA: "執行者 A：取得 lock，執行規則",
      lockWorkerB: "執行者 B：未取得 lock，不執行",
      workTag: "工作",
      personalTag: "個人",
    },
    hero: {
      welcomeComment: "# Welcome to my portfolio",
      headlineRole: "全端開發工程師",
      headlineName: "李宛庭",
      headlineTail: "用資料看問題，用程式解問題。",
      cta: "查看專案",
      location: "Taoyuan, Taiwan",
    },
    joke: {
      fileName: "joke.tsx",
      comment: "# 從資料庫隨機抽一則笑話",
      loading: "笑話載入中...",
      another: "再來一則",
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
