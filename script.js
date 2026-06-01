const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const stage = document.querySelector("[data-parallax-stage]");
const machine = document.querySelector("[data-parallax-machine]");
const zrbot = document.querySelector(".zrbot-widget");
const zrbotToggle = document.querySelector("[data-zrbot-toggle]");
const langButtons = [...document.querySelectorAll("[data-lang]")];
const links = [...document.querySelectorAll(".site-nav a")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let lastHash = window.location.hash;

const englishText = {
  "智融 | 制造业具身智能赋能平台": "Zhirong | Embodied Intelligence Platform for Manufacturing",
  "行业痛点": "Pain Points",
  "智融方案": "Approach",
  "智能大脑": "Intelligent Core",
  "硬件协同": "Hardware Partners",
  "工业场景": "Use Cases",
  "近期活动": "Activities",
  "微信联系": "WeChat",
  "联系我们": "Contact Us",
  "制造业具身智能，先解决现场数据与工艺经验": "Embodied intelligence for manufacturing starts with field data and process know-how",
  "现场数据难采、工艺经验难沉淀、复杂操作难复制。智融先从数智化底座与场景智能进入，再逐步导入具身执行系统。": "Factory data is hard to collect, process know-how is hard to retain, and complex operations are hard to replicate. Zhirong starts with a digital intelligence foundation and scenario applications, then gradually introduces embodied execution systems.",
  "查看行业痛点": "View Pain Points",
  "了解智融方案": "Explore Our Approach",
  "现场数据": "Field Data",
  "工艺知识": "Process Knowledge",
  "人机协作": "Human-Robot Collaboration",
  "具身执行": "Embodied Execution",
  "制造业具身智能落地，首先受制于数据、底座与人才": "Industrial embodied intelligence is first constrained by data, infrastructure and talent",
  "先进制造企业通常不会一步到位采购通用机器人。更现实的路径，是先把现场数据、流程知识和人员经验整理成可计算、可训练、可复用的基础设施。": "Advanced manufacturers rarely start by buying a general-purpose robot. A more realistic path is to turn field data, process knowledge and human expertise into computable, trainable and reusable infrastructure.",
  "高质量具身数据难获取": "High-quality embodied data is hard to collect",
  "接触丰富、长时域装配和柔性操作任务，往往缺少稳定、低成本、可复用的数据采集流程。": "Contact-rich, long-horizon assembly and flexible manipulation tasks often lack stable, low-cost and reusable data collection workflows.",
  "缺少具身就绪型数据底座": "Lack of embodied-ready data infrastructure",
  "设备状态、图像视频、力触觉、人类动作和工艺记录分散在不同系统中，难以支撑持续训练和部署。": "Equipment status, images, video, force and tactile signals, human actions and process records are scattered across systems, making continuous training and deployment difficult.",
  "复合型人才与训练体系不足": "Insufficient cross-disciplinary talent and training",
  "制造现场需要理解工艺、机器人、AI 和人机协作的复合能力，单一软件或硬件交付很难形成长期闭环。": "Manufacturing sites need teams that understand process engineering, robotics, AI and human collaboration. A single software or hardware delivery rarely creates a long-term loop.",
  "智融方案：从数采和知识底座切入，逐步走向具身部署": "Zhirong approach: start with data and knowledge infrastructure, then move toward embodied deployment",
  "数智化底座": "Digital Intelligence Foundation",
  "数据接入、治理、知识沉淀、SOP 和工艺智能化。": "Data access, governance, knowledge capture, SOPs and process intelligence.",
  "场景智能应用": "Scenario Intelligence",
  "XR 辅助、工位智能体、质检分析、培训平台与操作指导。": "XR assistance, workstation agents, quality analysis, training platforms and operation guidance.",
  "人本具身智能": "Human-Centered Embodied AI",
  "围绕真实工位，把模型、交互、末端执行和部署评测连接起来。": "Connect models, interaction, end effectors and deployment evaluation around real workstations.",
  "教育与人才培养": "Education and Talent Development",
  "面向职业教育、产业培训和中小学具身智能课程形成第二增长曲线。": "Build a second growth curve through vocational education, industrial training and K-12 embodied AI curricula.",
  "项目定位：制造业具身智能赋能平台": "Positioning: an embodied intelligence platform for manufacturing",
  "行业痛点：数据、底座与人才瓶颈": "Pain points: data, infrastructure and talent bottlenecks",
  "落地路径：先底座，再场景，后执行": "Deployment path: foundation first, scenarios next, execution last",
  "智能大脑：把任务、数据与现场反馈接成闭环": "Intelligent core: connect tasks, data and site feedback into a closed loop",
  "这里不夸大单一模型能力，而是展示可落地的控制逻辑：任务拆解、过程记录、异常提示、人工接管和现场评测。": "The focus is not on overstating a single model, but on deployable control logic: task decomposition, process records, exception alerts, human takeover and on-site evaluation.",
  "面向制造现场的任务理解与安全约束": "Task understanding and safety constraints for manufacturing sites",
  "系统围绕 SOP、工艺步骤和设备状态建立任务上下文，在遥操、半自主和自动执行之间保留清晰切换路径。": "The system builds task context around SOPs, process steps and equipment status, keeping clear transitions between teleoperation, shared autonomy and automated execution.",
  "保留数据、评测与追溯接口": "Preserve interfaces for data, evaluation and traceability",
  "支持人工确认和异常接管": "Support human confirmation and exception takeover",
  "围绕具体工位逐步验证，而不是一次性承诺通用替代": "Validate workstation by workstation instead of promising universal replacement upfront",
  "从高质量采集到模型评测的连续工具链": "A continuous toolchain from high-quality collection to model evaluation",
  "团队已有 XR/AR 遥操、共享自主采集、触觉视觉融合、少样本技能学习等研究积累，官网先聚焦可验证的能力方向。": "The team has research foundations in XR/AR teleoperation, shared-autonomy collection, tactile-visual fusion and few-shot skill learning. The public site focuses on verifiable capability directions.",
  "采集": "Collect",
  "治理": "Govern",
  "训练": "Train",
  "评测": "Evaluate",
  "部署": "Deploy",
  "硬件协同：围绕工位需求组合本体、末端与系统能力": "Hardware collaboration: combine bodies, end effectors and system capabilities around workstation needs",
  "当前官网以能力与生态协同展示为主。具体型号、负载、精度等参数，应在样机定型和客户场景验证后再更新。": "The current site focuses on capabilities and ecosystem collaboration. Specific model, payload and precision parameters should be updated after prototype finalization and customer validation.",
  "机械臂工作单元": "Robotic Arm Workcell",
  "面向装配、检测、分拣和实验验证场景，支持与视觉、夹爪、力控和工位软件协同。": "For assembly, inspection, sorting and experimental validation, supporting integration with vision, grippers, force control and workstation software.",
  "灵心巧手合作": "Lingxin Dexterous Hand Collaboration",
  "围绕灵巧末端、柔性操作、触觉/视觉融合和复杂操作数据采集探索协同。": "Explore collaboration around dexterous end effectors, flexible manipulation, tactile/visual fusion and complex operation data collection.",
  "天太机器人合作": "Tiantai Robotics Collaboration",
  "围绕机器人本体、工位执行单元与制造场景落地，推进软硬件协同验证。": "Advance software-hardware validation around robot bodies, workstation execution units and manufacturing deployment.",
  "工业级落地场景：从执行端到数字化底座的全链路验证": "Industrial deployment scenarios: end-to-end validation from execution to digital foundation",
  "优先选择可付费、可验收、可复制的场景，以数智化和场景智能进入客户，再逐步扩展到具身执行系统。": "Prioritize scenarios that can be paid for, accepted and replicated. Enter customers through digital intelligence and scenario applications, then expand into embodied execution systems.",
  "车间自动化分拣": "Workshop Sorting Automation",
  "面向小物件抓取、分类整理、异常提示和人工接管，逐步积累可训练的操作数据。": "For small-object picking, classification, exception alerts and human takeover, gradually accumulating trainable operation data.",
  "废料与物料分类": "Waste and Material Classification",
  "结合视觉识别、机械执行和工艺规则，探索高重复、强环境约束任务的柔性控制。": "Combine vision recognition, mechanical execution and process rules to explore flexible control for repetitive, constrained tasks.",
  "轨道交通与高端装备": "Rail Transit and Advanced Equipment",
  "围绕复杂装配、检测、运维和数字化改造，服务大型装备制造中的工位级智能闭环。": "Support workstation-level intelligence loops in large-equipment manufacturing across complex assembly, inspection, maintenance and digital transformation.",
  "三维可视化与培训": "3D Visualization and Training",
  "通过 XR/AI 培训、操作指导和现场数据可视化，帮助企业沉淀人员经验与流程知识。": "Use XR/AI training, operation guidance and site-data visualization to help companies retain human expertise and process knowledge.",
  "近期活动：展会、路演与产业交流持续更新": "Latest activities: exhibitions, roadshows and industry exchanges",
  "这里用于沉淀智融近期参加的展会、产业路演、客户交流与课程活动。后续可按时间更新活动照片、展位信息、合作动态与回顾内容。": "This section captures Zhirong's recent exhibitions, industry roadshows, customer exchanges and course activities. Activity photos, booth details, collaboration updates and recaps can be added over time.",
  "智融近期活动展示图": "Zhirong latest activities showcase",
  "制造业具身智能解决方案展示": "Manufacturing embodied intelligence solution showcase",
  "面向先进制造、轨道交通、高端装备与工业教育场景，展示数智化底座、工位智能体、XR/AI 培训和机器人执行单元的组合方案。": "For advanced manufacturing, rail transit, high-end equipment and industrial education scenarios, showcase a combined solution spanning digital intelligence infrastructure, workstation agents, XR/AI training and robotic execution units.",
  "预约交流": "Book a Discussion",
  "展会与路演信息": "Exhibitions and Roadshows",
  "可更新展会名称、展位号、参展日期、演示主题与现场照片。": "Update exhibition names, booth numbers, dates, demo themes and on-site photos.",
  "产业客户交流": "Industry Customer Exchanges",
  "记录围绕产线痛点、数据底座、工位智能体和具身执行系统的合作沟通。": "Record collaboration discussions around production-line pain points, data infrastructure, workstation agents and embodied execution systems.",
  "教育与培训活动": "Education and Training Activities",
  "更新职业教育、中小学具身智能课程、XR/AI 实训平台相关活动。": "Update activities related to vocational education, K-12 embodied AI courses and XR/AI training platforms.",
  "科研牵引，产业场景驱动": "Research-led and industry-scenario driven",
  "智融由中科院香港创新研究院张云波教授团队推动，团队长期关注智能制造、XR/AR、人机协作、机器人学习与具身智能。公司当前更强调从真实制造场景切入，先做可验证的数智化与场景智能，再逐步进入系统级具身部署。": "Zhirong is driven by Professor Yunbo Zhang's team at the Hong Kong Institute of Science & Innovation, CAS. The team has long focused on smart manufacturing, XR/AR, human-robot collaboration, robot learning and embodied intelligence. The company emphasizes entering through real manufacturing scenarios, building verifiable digital and scenario intelligence before moving into system-level embodied deployment.",
  "张云波教授": "Prof. Yunbo Zhang",
  "创始人 / 首席科学家": "Founder / Chief Scientist",
  "肖琴琴博士": "Dr. Qinqin Xiao",
  "联合创始人 / CEO": "Co-founder / CEO",
  "香港研发与转化资源": "Hong Kong R&D and translation resources",
  "深圳 / 广州工程化协同": "Shenzhen / Guangzhou engineering collaboration",
  "南京 / 长三角制造场景验证": "Nanjing / Yangtze River Delta scenario validation",
  "扫码联系肖博士，沟通产线痛点与合作场景": "Scan to contact Dr. Xiao and discuss production-line pain points and collaboration scenarios",
  "适合围绕数智化底座、工位智能体、XR/AI 培训、具身数据采集与机器人执行单元开展初步需求沟通。": "Suitable for initial discussions on digital intelligence infrastructure, workstation agents, XR/AI training, embodied data collection and robotic execution units.",
  "肖博士微信": "Dr. Xiao's WeChat",
  "扫码添加，了解项目与合作方式": "Scan to connect and learn about the project and collaboration options",
  "产线方案咨询": "Production-Line Consultation",
  "制造业具身智能赋能平台": "Embodied Intelligence Platform for Manufacturing",
  "产品线": "Product Lines",
  "解决方案": "Solutions",
  "生态合作": "Ecosystem",
  "关于我们": "About Us",
  "团队背景": "Team Background",
  "商务合作": "Business Cooperation",
  "车间分拣": "Workshop Sorting",
  "高端装备": "Advanced Equipment",
  "XR/AI 培训": "XR/AI Training",
  "灵心巧手": "Lingxin Dexterous Hand",
  "天太机器人": "Tiantai Robotics",
  "中科院香港创新研究院": "Hong Kong Institute of Science & Innovation, CAS",
  "香港主体地址：正式登记信息待更新": "Hong Kong entity address: official registration details to be updated",
};

const traditionalPhrases = [
  ["赋能平台", "賦能平台"],
  ["近期活动", "近期活動"],
  ["路演", "路演"],
  ["展会", "展會"],
  ["展位", "展位"],
  ["参展", "參展"],
  ["活动", "活動"],
  ["照片", "照片"],
  ["合作动态", "合作動態"],
  ["回顾", "回顧"],
  ["预约交流", "預約交流"],
  ["解决", "解決"],
  ["现场", "現場"],
  ["工艺", "工藝"],
  ["场景", "場景"],
  ["机器人", "機器人"],
  ["系统", "系統"],
  ["先进", "先進"],
  ["企业", "企業"],
  ["采购", "採購"],
  ["现实", "現實"],
  ["路径", "路徑"],
  ["人员", "人員"],
  ["经验", "經驗"],
  ["计算", "計算"],
  ["训练", "訓練"],
  ["复用", "複用"],
  ["基础设施", "基礎設施"],
  ["质量", "質量"],
  ["获取", "獲取"],
  ["长时域", "長時域"],
  ["装配", "裝配"],
  ["任务", "任務"],
  ["缺少", "缺少"],
  ["稳定", "穩定"],
  ["流程", "流程"],
  ["就绪", "就緒"],
  ["设备", "設備"],
  ["图像", "圖像"],
  ["视频", "視頻"],
  ["人类", "人類"],
  ["动作", "動作"],
  ["记录", "記錄"],
  ["难以", "難以"],
  ["支撑", "支撐"],
  ["持续", "持續"],
  ["部署", "部署"],
  ["复合", "複合"],
  ["单一", "單一"],
  ["软件", "軟件"],
  ["硬件", "硬件"],
  ["形成", "形成"],
  ["长期", "長期"],
  ["闭环", "閉環"],
  ["应用", "應用"],
  ["导入", "導入"],
  ["数据接入", "數據接入"],
  ["知识", "知識"],
  ["沉淀", "沉澱"],
  ["智能化", "智能化"],
  ["操作", "操作"],
  ["指导", "指導"],
  ["围绕", "圍繞"],
  ["真实", "真實"],
  ["模型", "模型"],
  ["交互", "交互"],
  ["执行", "執行"],
  ["评测", "評測"],
  ["连接", "連接"],
  ["面向", "面向"],
  ["职业教育", "職業教育"],
  ["中小学", "中小學"],
  ["课程", "課程"],
  ["增长", "增長"],
  ["智融方案", "智融方案"],
  ["行业痛点", "行業痛點"],
  ["智能大脑", "智能大腦"],
  ["硬件协同", "硬件協同"],
  ["工业场景", "工業場景"],
  ["联系我们", "聯絡我們"],
  ["微信联系", "微信聯絡"],
  ["制造业", "製造業"],
  ["具身智能", "具身智能"],
  ["数智化", "數智化"],
  ["场景智能", "場景智能"],
  ["数据", "數據"],
  ["底座", "底座"],
  ["人才", "人才"],
  ["团队", "團隊"],
  ["项目", "項目"],
  ["质检", "質檢"],
  ["培训", "培訓"],
  ["产线", "產線"],
  ["联系", "聯絡"],
  ["扫码", "掃碼"],
  ["添加", "加入"],
  ["了解", "了解"],
  ["业务", "業務"],
  ["产品", "產品"],
  ["关于我们", "關於我們"],
  ["解决方案", "解決方案"],
  ["生态合作", "生態合作"],
  ["团队背景", "團隊背景"],
  ["商务合作", "商務合作"],
  ["车间", "車間"],
  ["分拣", "分揀"],
  ["高端装备", "高端裝備"],
  ["灵心巧手", "靈心巧手"],
  ["天太机器人", "天太機器人"],
  ["中国科学院香港创新研究院", "中國科學院香港創新研究院"],
  ["中科院香港创新研究院", "中科院香港創新研究院"],
  ["香港主体地址：正式登记信息待更新", "香港主體地址：正式登記資料待更新"],
];

const traditionalChars = {
  与: "與",
  为: "為",
  个: "個",
  业: "業",
  东: "東",
  两: "兩",
  严: "嚴",
  丰: "豐",
  临: "臨",
  为: "為",
  举: "舉",
  义: "義",
  习: "習",
  书: "書",
  买: "買",
  乱: "亂",
  了: "了",
  争: "爭",
  于: "於",
  云: "雲",
  产: "產",
  亲: "親",
  亿: "億",
  从: "從",
  仑: "侖",
  仓: "倉",
  仪: "儀",
  们: "們",
  优: "優",
  会: "會",
  传: "傳",
  伤: "傷",
  体: "體",
  余: "餘",
  复: "複",
  够: "夠",
  备: "備",
  处: "處",
  头: "頭",
  对: "對",
  导: "導",
  将: "將",
  尔: "爾",
  层: "層",
  岛: "島",
  师: "師",
  应: "應",
  废: "廢",
  开: "開",
  异: "異",
  张: "張",
  强: "強",
  归: "歸",
  当: "當",
  录: "錄",
  径: "徑",
  待: "待",
  总: "總",
  态: "態",
  恢: "恢",
  息: "息",
  恶: "惡",
  惯: "慣",
  感: "感",
  户: "戶",
  执: "執",
  扩: "擴",
  扫: "掃",
  承: "承",
  技: "技",
  报: "報",
  拟: "擬",
  拣: "揀",
  拥: "擁",
  挥: "揮",
  换: "換",
  损: "損",
  据: "據",
  探: "探",
  接: "接",
  推: "推",
  提: "提",
  握: "握",
  搭: "搭",
  摄: "攝",
  改: "改",
  数: "數",
  断: "斷",
  无: "無",
  时: "時",
  显: "顯",
  智: "智",
  暂: "暫",
  术: "術",
  机: "機",
  权: "權",
  条: "條",
  来: "來",
  极: "極",
  标: "標",
  样: "樣",
  栈: "棧",
  桥: "橋",
  检: "檢",
  楼: "樓",
  槛: "檻",
  横: "橫",
  步: "步",
  汇: "匯",
  沟: "溝",
  没: "沒",
  治: "治",
  泽: "澤",
  测: "測",
  济: "濟",
  浏: "瀏",
  涉: "涉",
  淀: "澱",
  深: "深",
  渐: "漸",
  温: "溫",
  湾: "灣",
  源: "源",
  滞: "滯",
  滤: "濾",
  点: "點",
  烦: "煩",
  烧: "燒",
  热: "熱",
  然: "然",
  爱: "愛",
  物: "物",
  状: "狀",
  独: "獨",
  环: "環",
  现: "現",
  琴: "琴",
  电: "電",
  画: "畫",
  疗: "療",
  监: "監",
  码: "碼",
  础: "礎",
  确: "確",
  研: "研",
  碍: "礙",
  礼: "禮",
  种: "種",
  科: "科",
  称: "稱",
  稳: "穩",
  究: "究",
  空: "空",
  竞: "競",
  端: "端",
  笔: "筆",
  筛: "篩",
  管: "管",
  简: "簡",
  类: "類",
  系: "系",
  约: "約",
  级: "級",
  线: "線",
  组: "組",
  细: "細",
  织: "織",
  经: "經",
  结: "結",
  统: "統",
  续: "續",
  维: "維",
  缺: "缺",
  网: "網",
  置: "置",
  群: "群",
  者: "者",
  联: "聯",
  肖: "肖",
  胁: "脅",
  能: "能",
  舰: "艦",
  节: "節",
  苏: "蘇",
  范: "範",
  获: "獲",
  营: "營",
  落: "落",
  融: "融",
  补: "補",
  表: "表",
  装: "裝",
  视: "視",
  览: "覽",
  觉: "覺",
  规: "規",
  览: "覽",
  触: "觸",
  计: "計",
  认: "認",
  讲: "講",
  记录: "記錄",
  论: "論",
  评: "評",
  试: "試",
  询: "詢",
  该: "該",
  详: "詳",
  语: "語",
  说: "說",
  请: "請",
  调: "調",
  谈: "談",
  谋: "謀",
  谢: "謝",
  象: "象",
  负: "負",
  败: "敗",
  质: "質",
  购: "購",
  贴: "貼",
  赛: "賽",
  轨: "軌",
  转: "轉",
  软: "軟",
  轮: "輪",
  辅: "輔",
  辑: "輯",
  边: "邊",
  还: "還",
  进: "進",
  远: "遠",
  连: "連",
  适: "適",
  选: "選",
  递: "遞",
  通: "通",
  遥: "遙",
  部: "部",
  采: "採",
  释: "釋",
  里: "裏",
  针: "針",
  链: "鏈",
  销: "銷",
  错: "錯",
  闭: "閉",
  问: "問",
  间: "間",
  阶: "階",
  队: "隊",
  阳: "陽",
  难: "難",
  集: "集",
  需: "需",
  面: "面",
  项: "項",
  页: "頁",
  领: "領",
  风: "風",
  验: "驗",
  高: "高",
};

const convertToTraditional = (value) => {
  let output = value;
  traditionalPhrases.forEach(([from, to]) => {
    output = output.split(from).join(to);
  });
  return [...output].map((char) => traditionalChars[char] || char).join("");
};

const translateValue = (value, lang) => {
  if (lang === "en") return englishText[value] || value;
  if (lang === "zh-HK") return convertToTraditional(value);
  return value;
};

const translatedAttributes = ["alt", "aria-label", "title"];
const textNodes = [];

const collectTextNodes = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("script, style, .language-switch")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const match = node.nodeValue.match(/^(\s*)(.*?)(\s*)$/s);
    textNodes.push({
      node,
      leading: match?.[1] || "",
      source: match?.[2] || node.nodeValue.trim(),
      trailing: match?.[3] || "",
    });
  }
};

const applyLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.title = translateValue("智融 | 制造业具身智能赋能平台", lang);

  const description =
    lang === "en"
      ? "Zhirong builds deployable smart manufacturing solutions around field data, process knowledge, human collaboration and embodied execution."
      : translateValue("智融面向先进制造业，围绕现场数据、工艺知识、人机协作与具身执行能力，建设可落地的智能制造解决方案。", lang);

  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);

  textNodes.forEach(({ node, leading, source, trailing }) => {
    node.nodeValue = `${leading}${translateValue(source, lang)}${trailing}`;
  });

  document.querySelectorAll("[alt], [aria-label], [title]").forEach((element) => {
    translatedAttributes.forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      const sourceAttr = `data-i18n-${attr}`;
      if (!element.hasAttribute(sourceAttr)) {
        element.setAttribute(sourceAttr, element.getAttribute(attr));
      }
      element.setAttribute(attr, translateValue(element.getAttribute(sourceAttr), lang));
    });
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("zr-lang", lang);
};

collectTextNodes();
applyLanguage(localStorage.getItem("zr-lang") || "zh-CN");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

toggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

const scrollToTarget = (hash, updateHistory = true) => {
  const target = document.querySelector(hash);
  if (!target) return false;

  body.classList.remove("nav-open");
  toggle?.setAttribute("aria-expanded", "false");
  target.scrollIntoView({ behavior: "auto", block: "start" });
  if (updateHistory) history.pushState(null, "", hash);
  return true;
};

const scheduleScrollToHash = (hash) => {
  [0, 80, 260, 620].forEach((delay) => {
    window.setTimeout(() => scrollToTarget(hash, false), delay);
  });
};

[...document.querySelectorAll('a[href^="#"]')].forEach((link) => {
  link.addEventListener("click", (event) => {
    body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");

    const hash = link.getAttribute("href");
    if (hash && hash.length > 1 && document.querySelector(hash)) {
      event.preventDefault();
      scrollToTarget(hash);
    }
  });
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -68% 0px",
    threshold: [0.1, 0.3, 0.6],
  },
);

sections.forEach((section) => observer.observe(section));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

window.addEventListener("load", () => {
  if (window.location.hash) {
    scheduleScrollToHash(window.location.hash);
  }
});

window.addEventListener("hashchange", () => {
  lastHash = window.location.hash;
  if (window.location.hash) {
    scheduleScrollToHash(window.location.hash);
  }
});

window.setInterval(() => {
  if (window.location.hash && window.location.hash !== lastHash) {
    lastHash = window.location.hash;
    scheduleScrollToHash(window.location.hash);
  }
}, 150);

stage?.addEventListener("pointermove", (event) => {
  if (!machine) return;

  const rect = stage.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  machine.style.setProperty("--mx", `${x * 26}px`);
  machine.style.setProperty("--my", `${y * 18}px`);
});

stage?.addEventListener("pointerleave", () => {
  if (!machine) return;
  machine.style.setProperty("--mx", "0px");
  machine.style.setProperty("--my", "0px");
});

zrbotToggle?.addEventListener("click", () => {
  zrbot?.classList.toggle("is-open");
});
