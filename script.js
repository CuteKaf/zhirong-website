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
  .map((link) => {
    const href = link.getAttribute("href") || "";
    return href.startsWith("#") ? document.querySelector(href) : null;
  })
  .filter(Boolean);
let lastHash = window.location.hash;

const englishText = {
  "智融 | 制造业具身智能赋能平台": "Zhirong | Embodied Intelligence Platform for Manufacturing",
  "智融 | 具身智能应用平台": "Zhirong | Embodied Intelligence Application Platform",
  "解决方案 | 智融": "Solutions | Zhirong",
  "技术能力 | 智融": "Technology | Zhirong",
  "近期活动 | 智融": "Activities | Zhirong",
  "关于我们 | 智融": "About Us | Zhirong",
  "联系我们 | 智融": "Contact Us | Zhirong",
  "首页": "Home",
  "解决方案": "Solutions",
  "技术能力": "Technology",
  "关于我们": "About Us",
  "行业痛点": "Pain Points",
  "智融方案": "Approach",
  "智能大脑": "Intelligent Core",
  "硬件协同": "Hardware Partners",
  "工业场景": "Use Cases",
  "近期活动": "Activities",
  "微信联系": "WeChat",
  "联系我们": "Contact Us",
  "制造业具身智能，先解决现场数据与工艺经验": "Embodied intelligence for manufacturing starts with field data and process know-how",
  "制造业具身智能，从现场数据开始": "Embodied intelligence for manufacturing starts with field data",
  "智融面向先进制造场景，先构建数智化底座与工位智能，再逐步导入具身数据采集、机器人执行单元和人机协作闭环。": "Zhirong serves advanced manufacturing scenarios by first building digital intelligence foundations and workstation intelligence, then introducing embodied data collection, robotic execution units and human-robot collaboration loops.",
  "查看解决方案": "View Solutions",
  "查看近期活动": "View Activities",
  "制造业具身智能落地，首先要补齐数据、流程与人才基础": "Industrial embodied intelligence first needs data, process and talent foundations",
  "智融不把“通用机器人替代一切”作为第一步，而是从客户现场已经存在的工艺、设备、人员经验和数据断点切入。": "Zhirong does not start from a promise that general-purpose robots replace everything. We begin with existing process knowledge, equipment, human expertise and data gaps at customer sites.",
  "现场数据难采": "Field data is hard to collect",
  "复杂工位缺少稳定、低成本、可复用的数据采集流程。": "Complex workstations lack stable, low-cost and reusable data collection workflows.",
  "工艺经验难沉淀": "Process know-how is hard to retain",
  "SOP、设备状态和人员经验分散，难以持续训练和复盘。": "SOPs, equipment status and human expertise are scattered, making training and review difficult.",
  "智能部署难闭环": "Intelligent deployment is hard to close",
  "单点模型或硬件交付，很难覆盖评测、接管和长期迭代。": "Single models or hardware deliveries rarely cover evaluation, takeover and long-term iteration.",
  "从数智化底座到具身执行，采用可验证的渐进路径": "From digital foundation to embodied execution through a verifiable path",
  "工位智能体": "Workstation Agents",
  "围绕培训、质检、运维、操作指导形成现场应用。": "Build site applications around training, quality inspection, maintenance and operation guidance.",
  "具身数据采集": "Embodied Data Collection",
  "通过遥操、共享自主和多模态采集构建训练闭环。": "Build training loops through teleoperation, shared autonomy and multimodal collection.",
  "机器人执行单元": "Robotic Execution Units",
  "在 ROI 明确的工位逐步导入执行系统。": "Gradually introduce execution systems in workstations with clear ROI.",
  "进入解决方案": "Open Solutions",
  "查看技术能力": "View Technology",
  "技术能力围绕真实工位闭环，而不是单一模型演示": "Technology built around real workstation loops, not single-model demos",
  "团队已有 XR/AR 遥操、共享自主采集、触觉视觉融合、少样本技能学习和人机协作研究积累。": "The team has research foundations in XR/AR teleoperation, shared-autonomy collection, tactile-visual fusion, few-shot skill learning and human-robot collaboration.",
  "XR/AR 遥操": "XR/AR Teleoperation",
  "提升示教效率与复杂任务可采集性。": "Improve teaching efficiency and the collectability of complex tasks.",
  "多模态数据": "Multimodal Data",
  "连接图像、动作、力触觉和工艺记录。": "Connect images, actions, force/tactile signals and process records.",
  "服务操作指导、异常提示和人工接管。": "Support operation guidance, exception alerts and human takeover.",
  "保留数据、追溯、安全约束和现场反馈。": "Preserve data, traceability, safety constraints and site feedback.",
  "查看活动详情": "View Activity Details",
  "了解团队": "About the Team",
  "联系合作": "Contact for Collaboration",
  "网站栏目": "Site Sections",
  "重点方向": "Focus Areas",
  "让制造现场的数据和经验，变成可用的智能能力": "Turn factory data and human know-how into usable intelligence",
  "让现场的数据和经验，变成可用的智能能力": "Turn site data and human know-how into usable intelligence",
  "智融与先进制造企业一起梳理设备数据、工艺流程和人员操作经验，建设知识系统、培训工具和工位辅助应用，并在合适场景验证机器人执行。": "Zhirong works with advanced manufacturers to organize equipment data, process workflows and operator know-how, then build knowledge systems, training tools and workstation assistance before validating robotic execution in suitable scenarios.",
  "智融由中国科学院香港创新研究院张云波教授团队推动，与先进制造企业一起梳理设备数据、工艺流程和人员操作经验，建设知识系统、培训工具和工位辅助应用，并在合适场景验证机器人执行。": "Zhirong is driven by Professor Yunbo Zhang's team at the Hong Kong Institute of Science & Innovation, Chinese Academy of Sciences, working with advanced manufacturers to organize equipment data, process workflows and operator know-how, build knowledge systems, training tools and workstation assistance, and validate robotic execution in suitable scenarios.",
  "智融由中国科学院香港创新研究院张云波教授团队推动，与产业客户一起梳理设备数据、工艺流程和人员操作经验，建设知识系统、培训工具和工位辅助应用，并在合适场景验证机器人执行。": "Zhirong is driven by Professor Yunbo Zhang's team at the Hong Kong Institute of Science & Innovation, Chinese Academy of Sciences, working with industry partners to organize equipment data, process workflows and operator know-how, build knowledge systems, training tools and workstation assistance, and validate robotic execution in suitable scenarios.",
  "很多智能化项目，真正卡在现场资料和操作经验": "Many smart manufacturing projects get stuck at site data and operator know-how",
  "制造企业并不缺概念，缺的是能贴近工位、能被一线人员使用、能持续沉淀数据和知识的工具。": "Manufacturers do not lack concepts. They need tools that fit real workstations, can be used by frontline teams and keep accumulating data and knowledge.",
  "很多团队并不缺概念，缺的是能贴近工位、能被一线人员使用、能持续沉淀数据和知识的工具。": "Many teams do not lack concepts. They need tools that fit real workstations, can be used by frontline staff and keep accumulating data and knowledge.",
  "资料分散": "Scattered site materials",
  "设备状态、工艺文件、图像视频和质检记录分散在不同系统里。": "Equipment status, process documents, images, videos and inspection records are scattered across different systems.",
  "经验依赖个人": "Experience depends on individuals",
  "老师傅的判断和操作细节难以被新员工快速学习和复用。": "Experienced workers' judgment and operating details are hard for new employees to learn and reuse quickly.",
  "复杂操作难复制": "Complex operations are hard to replicate",
  "装配、检测、分拣和运维任务需要数据、流程和执行系统一起配合。": "Assembly, inspection, sorting and maintenance tasks require data, workflows and execution systems to work together.",
  "我们先做几件真正能落地的事": "We start with work that can actually be deployed",
  "整理现场数据": "Organize site data",
  "把设备、图像、工艺和人员操作记录接入统一的知识底座。": "Connect equipment, images, process data and operator records into a unified knowledge base.",
  "沉淀工艺知识": "Capture process know-how",
  "把 SOP、异常经验和操作步骤变成可查询、可培训的内容。": "Turn SOPs, exception experience and operating steps into searchable and trainable content.",
  "辅助人员操作": "Assist frontline operations",
  "用 XR/AI 培训、质检提示和工位助手降低学习与出错成本。": "Use XR/AI training, inspection prompts and workstation assistants to reduce learning and error costs.",
  "验证机器人执行": "Validate robotic execution",
  "在清晰场景中验证机械臂、末端执行器和工位软件协同。": "Validate robotic arms, end effectors and workstation software in clearly defined scenarios.",
  "技术服务现场，而不是停在演示视频里": "Technology for the factory floor, not just demo videos",
  "团队围绕遥操采集、触觉视觉融合、少样本技能学习和人机协作，持续把研究能力连接到制造工位。": "The team connects research in teleoperation collection, tactile-visual fusion, few-shot skill learning and human-robot collaboration to real manufacturing workstations.",
  "团队围绕遥操采集、触觉视觉融合、少样本技能学习和人机协作，持续把研究能力连接到真实场景。": "The team connects research in teleoperation collection, tactile-visual fusion, few-shot skill learning and human-robot collaboration to real-world scenarios.",
  "让专家示教和远程协作更直观。": "Make expert teaching and remote collaboration more intuitive.",
  "把图像、动作、力触觉和工艺记录放在同一条线上。": "Put images, actions, force/tactile signals and process records on the same line.",
  "给一线人员提供操作提示、异常说明和培训支持。": "Provide frontline teams with operation prompts, exception explanations and training support.",
  "让每次验证都有记录、反馈和改进依据。": "Give each validation a record, feedback and basis for improvement.",
  "智融团队亮相 EAC 2026，分享具身智能赋能智能制造路径": "Zhirong team presents embodied intelligence for smart manufacturing at EAC 2026",
  "在上海举办的 EAC2026 自动驾驶与具身智能产业展览会上，张云波教授团队在自动驾驶与具身智驾产业展区进行主题分享，并介绍智融面向制造现场的数据采集与智能化工作。": "At EAC2026 in Shanghai, Professor Yunbo Zhang's team gave a themed sharing session in the autonomous driving and embodied intelligent driving area, introducing Zhirong's work in data collection and factory-floor intelligence.",
  "智融参加第五届上合组织成员国青年创新创业大赛大湾区预选赛": "Zhirong joins the Greater Bay Area preliminary round of the 5th SCO Member States Youth Innovation and Entrepreneurship Competition",
  "团队围绕制造业具身智能数据采集平台、工位智能和机器人执行验证进行项目展示，并持续把科研能力连接到真实制造场景。": "The team presented its manufacturing embodied-intelligence data collection platform, workstation intelligence and robotic execution validation, continuing to connect research capabilities with real manufacturing scenarios.",
  "团队围绕具身智能数据采集平台、工位智能和机器人执行验证进行项目展示，并持续把科研能力连接到真实场景。": "The team presented its embodied-intelligence data collection platform, workstation intelligence and robotic execution validation, continuing to connect research capabilities with real-world scenarios.",
  "来自科研团队，也走向真实产线": "From research teams to real production lines",
  "来自科研团队，也走向真实场景": "From research teams to real-world scenarios",
  "智融由中科院香港创新研究院张云波教授团队推动，把 XR/AR、人机协作和机器人学习研究积累带到真实产业场景中。": "Zhirong is driven by Professor Yunbo Zhang's team at HKISI, CAS, bringing XR/AR, human-robot collaboration and robot-learning research into real industry scenarios.",
  "智融由中科院香港创新研究院张云波教授团队推动，结合智能制造、XR/AR、人机协作和机器人学习积累，服务先进制造企业的现场智能化升级。": "Zhirong is driven by Professor Yunbo Zhang's team at HKISI, CAS, combining smart manufacturing, XR/AR, human-robot collaboration and robot learning experience to support factory-floor intelligence upgrades.",
  "智融由中科院香港创新研究院张云波教授团队推动，结合 XR/AR、人机协作和机器人学习积累，服务产业客户的现场智能化升级。": "Zhirong is driven by Professor Yunbo Zhang's team at HKISI, CAS, combining XR/AR, human-robot collaboration and robot learning experience to support on-site intelligence upgrades for industry clients.",
  "研发团队来自中国科学院香港创新研究院，持续把科研能力连接到真实制造场景。": "The R&D team comes from the Hong Kong Institute of Science & Innovation, Chinese Academy of Sciences, and continues to connect research capability with real manufacturing scenarios.",
  "研发团队来自中国科学院香港创新研究院，持续把科研能力连接到真实场景。": "The R&D team comes from the Hong Kong Institute of Science & Innovation, Chinese Academy of Sciences, and continues to connect research capability with real-world scenarios.",
  "我们帮助制造企业，把现场经验变成可用系统": "We help manufacturers turn site experience into usable systems",
  "我们帮助客户，把现场经验变成可用系统": "We help organizations turn site experience into usable systems",
  "沟通具体场景": "Discuss Your Scenario",
  "从资料整理、人员培训、操作指导到机器人执行验证，智融围绕真实工位做能被一线使用的工具。": "From material organization and staff training to operation guidance and robotic execution validation, Zhirong builds tools that frontline teams can use at real workstations.",
  "现场资料整理": "Site material organization",
  "把设备状态、工艺文件、质检记录和操作视频整理成可查询的知识库。": "Organize equipment status, process documents, inspection records and operation videos into a searchable knowledge base.",
  "培训与操作指导": "Training and operation guidance",
  "用 XR/AI 工具帮助新员工理解步骤、识别风险、减少对口口相传的依赖。": "Use XR/AI tools to help new employees understand steps, identify risks and reduce reliance on oral transfer.",
  "复杂操作数据采集": "Complex operation data collection",
  "通过遥操、共享自主和触觉视觉融合，把真实操作过程转化为可训练数据。": "Use teleoperation, shared autonomy and tactile-visual fusion to turn real operations into trainable data.",
  "工位级机器人验证": "Workstation-level robot validation",
  "针对装配、检测、分拣等明确场景，验证机械臂、末端和软件协同效果。": "Validate robotic arms, end effectors and software collaboration in clear scenarios such as assembly, inspection and sorting.",
  "先把现场跑顺，再谈更深的自动化": "Stabilize the site workflow before deeper automation",
  "很多企业真正需要的第一步，是把数据、流程和人员经验整理清楚。等工位任务、验收标准和数据来源稳定后，机器人执行才有可靠基础。": "For many companies, the first step is to organize data, workflows and human expertise. Robotic execution has a reliable basis only after workstation tasks, acceptance criteria and data sources become stable.",
  "把人、数据和机器人接到同一个工作流里": "Put people, data and robots into one workflow",
  "智融的技术能力不是为了展示单点算法，而是为了让制造现场的示教、采集、培训、评测和执行能够接得起来。": "Zhirong's technology is not for showcasing isolated algorithms, but for connecting teaching, collection, training, evaluation and execution on the factory floor.",
  "智融的技术能力不是为了展示单点算法，而是为了让真实场景的示教、采集、培训、评测和执行能够接得起来。": "Zhirong's technology is not for showcasing isolated algorithms, but for connecting teaching, collection, training, evaluation and execution in real-world scenarios.",
  "不是先谈模型，而是先把复杂制造任务变成高质量数据": "We do not start with talking about models. We start by turning complex manufacturing tasks into high-quality data.",
  "智融的技术路线，围绕同一条数据闭环展开：从遥操采集进入制造现场，用共享自主提升示教效率，用触觉与视觉补足复杂任务信息，再把这些过程沉淀成可迁移的具身模型能力。": "Zhirong's technical route unfolds around one data loop: entering the factory floor through teleoperation collection, improving teaching efficiency with shared autonomy, enriching complex-task information with tactile and visual signals, and then turning those processes into transferable embodied-model capability.",
  "智融的技术路线，围绕同一条数据闭环展开：从遥操采集进入真实现场，用共享自主提升示教效率，用触觉与视觉补足复杂任务信息，再把这些过程沉淀成可迁移的具身模型能力。": "Zhirong's technical route unfolds around one data loop: entering real-world environments through teleoperation collection, improving teaching efficiency with shared autonomy, enriching complex-task information with tactile and visual signals, and then turning those processes into transferable embodied-model capability.",
  "遥操采集": "Teleoperation collection",
  "先把复杂任务稳定记录下来，让真实操作成为数据入口。": "First record complex tasks in a stable way, making real operations the entry point for data.",
  "共享自主": "Shared autonomy",
  "把低风险动作交给系统辅助，让长流程示教更稳、更省人力。": "Let the system assist low-risk actions so long-sequence teaching becomes steadier and less labor-intensive.",
  "触觉增强": "Tactile enhancement",
  "把视觉之外的接触信息采进来，支撑柔性物体和精细操作任务。": "Bring in contact information beyond vision to support deformable objects and fine manipulation tasks.",
  "视频学习": "Video learning",
  "把任务过程转成可迁移、可复用、可训练的第一视角模型能力。": "Turn the task process into egocentric model capability that is transferable, reusable and trainable.",
  "评测部署": "Evaluation and deployment",
  "让训练结果回到真实工位，在验证中继续优化数据与系统。": "Bring training results back to real workstations and keep improving data and systems through validation.",
  "每一个阶段，都对应可以被看见的技术证据": "Every stage is backed by technical evidence that can be seen",
  "这些图不是装饰，而是这条技术路线在实验、采集和模型阶段已经展开的具体证明。": "These images are not decoration. They are concrete proof that this route is already unfolding across experiments, collection and model development.",
  "XR 遥操采集，让复杂制造任务第一次真正可采": "XR teleoperation collection makes complex manufacturing tasks truly collectable for the first time",
  "XR 遥操采集，让复杂任务第一次真正可采": "XR teleoperation collection makes complex tasks truly collectable for the first time",
  "通过所见即所得的遥操界面，把专家示教、任务理解和数据记录放进同一套工作流。复杂任务不再只是经验，而能被稳定地记录、复现和沉淀。": "Through a what-you-see-is-what-you-get teleoperation interface, expert teaching, task understanding and data recording enter one workflow. Complex tasks are no longer just experience; they can now be recorded, reproduced and retained in a stable way.",
  "面向复杂装配、非结构化工位和远程示教场景": "For complex assembly, unstructured workstations and remote teaching scenarios",
  "让真实操作过程成为高质量数据入口": "Turn real operating processes into a high-quality data entry point",
  "把“难采”问题转化为技术壁垒与能力起点": "Turn the 'hard to collect' problem into a technical barrier and capability starting point",
  "阶段演示视频": "Stage demo video",
  "点击展开，查看 XR 遥操采集在真实任务中的演示过程。": "Click to expand and watch XR teleoperation collection in a real task scenario.",
  "共享自主，让长流程示教更稳，也更高效": "Shared autonomy makes long-sequence teaching steadier and more efficient",
  "在采集工作流中加入风险引导和辅助控制后，复杂装配不再完全依赖持续人工控制。人负责关键判断，系统负责可辅助的部分，示教效率和稳定性同步提升。": "After adding risk guidance and assisted control into the collection workflow, complex assembly no longer relies entirely on continuous manual control. People handle critical judgment while the system assists where possible, improving both efficiency and stability.",
  "适合长流程装配与双臂协同任务": "Suitable for long-sequence assembly and bimanual collaboration tasks",
  "降低示教疲劳与人力成本": "Reduce teaching fatigue and labor cost",
  "让采集过程从“能做”走向“可持续做”": "Move collection from merely possible to sustainably repeatable",
  "点击展开，查看共享自主如何进入复杂任务采集流程。": "Click to expand and see how shared autonomy enters the collection workflow for complex tasks.",
  "触觉增强，让接触丰富任务不只靠“看”来完成": "Tactile enhancement lets contact-rich tasks rely on more than sight alone",
  "面对柔性物体、精细接触和复杂操作，单纯依赖视觉往往不够。我们把触觉和视觉一起引入遥操与采集，让多模态信息真正服务于复杂任务成功率。": "For deformable objects, fine contact and complex manipulation, vision alone is often not enough. We bring tactile and visual signals together into teleoperation and collection so multimodal information truly improves success on difficult tasks.",
  "服务接触丰富、需要精细控制的工位任务": "Serve contact-rich workstation tasks that require fine control",
  "提升多模态数据采集的稳定性与可解释性": "Improve the stability and interpretability of multimodal data collection",
  "点击展开，查看触觉辅助遥操在接触丰富任务中的表现。": "Click to expand and watch tactile-assisted teleoperation in contact-rich tasks.",
  "第一视角模型，让任务过程沉淀成可以迁移的模型能力": "Egocentric models turn task processes into transferable model capability",
  "在稳定示教和多模态数据基础上，第一视角视频不再只是记录材料，而会进一步转化为可训练、可复用、可迁移的具身模型能力。": "On top of stable teaching and multimodal data, egocentric video stops being just recorded material and becomes trainable, reusable and transferable embodied-model capability.",
  "点击展开，查看第一视角任务执行与模型相关演示。": "Click to expand and watch an egocentric task-execution and model-related demonstration.",
  "让复杂任务第一次真正可采": "Make complex tasks truly collectable for the first time",
  "通过所见即所得的遥操界面，把专家示教、任务理解和数据记录放进同一套工作流。": "Use a what-you-see-is-what-you-get teleoperation interface to place expert teaching, task understanding and data recording into one workflow.",
  "让长流程示教更稳，也更高效": "Make long-sequence teaching steadier and more efficient",
  "风险引导和辅助控制进入采集过程后，复杂装配不再完全依赖持续人工控制。": "Once risk guidance and assisted control enter collection, complex assembly no longer depends entirely on continuous manual control.",
  "让接触丰富任务不只靠“看”来完成": "Make contact-rich tasks rely on more than just seeing",
  "把触觉和视觉一起引入遥操与采集，服务柔性物体、精细接触和复杂操作任务。": "Bring tactile and visual signals together into teleoperation and collection for deformable objects, fine contact and complex manipulation tasks.",
  "让任务过程沉淀成可以迁移的模型能力": "Turn task processes into model capability that can transfer",
  "在稳定示教和多模态数据基础上，把第一视角视频转成更可训练、更可复用的具身模型能力。": "On top of stable teaching and multimodal data, turn egocentric video into embodied-model capability that is easier to train and reuse.",
  "实验现场，是这条路线继续向前推进的起点": "The lab floor is where this route keeps moving forward",
  "从触觉驱动遥操架构，到桌面任务、第一视角执行和真实物体采集，技术路线不是停留在概念上，而是在一项项任务里继续被打磨。": "From tactile-driven teleoperation architecture to tabletop tasks, egocentric execution and real-object collection, this route does not remain at the concept level. It keeps being refined task by task.",
  "从可采集、可复现到可部署的技术路线": "A technical route from collectable to reproducible to deployable",
  "我们把技术路线拆成四个连续阶段：先让复杂任务能够被稳定采集，再提高示教效率与数据质量，随后引入触觉等多模态信息，最后把这些数据转成具身模型能力。": "We break the route into four connected stages: first make complex tasks stably collectable, then improve teaching efficiency and data quality, then add tactile and other multimodal signals, and finally turn the data into embodied-model capability.",
  "先建立数据入口，再逐步走向模型与部署": "Build the data entry point first, then move toward models and deployment",
  "这条路线不是从抽象算法开始，而是从制造现场真实存在的复杂操作出发，围绕遥操、共享自主、触觉增强和第一人称视频学习建立连续工具链。": "This route does not begin with abstract algorithms. It begins with real complex operations on the factory floor and builds a continuous toolchain around teleoperation, shared autonomy, tactile enhancement and egocentric video learning.",
  "XR 遥操数采": "XR teleoperation data collection",
  "AI 辅助示教": "AI-assisted teaching",
  "触觉多模态采集": "Tactile multimodal collection",
  "第一视角具身模型": "Egocentric embodied models",
  "四个技术阶段，围绕同一条数据闭环": "Four technical stages around one data loop",
  "遥操采集": "Teleoperation collection",
  "共享自主": "Shared autonomy",
  "触觉增强": "Tactile enhancement",
  "视频学习": "Video learning",
  "评测部署": "Evaluation and deployment",
  "基于 XR 遥操的数据采集方案": "XR-teleoperation-based data collection",
  "第一步先解决“复杂任务难采”的问题。通过所见即所得的 XR 遥操界面，把专家示教、任务理解和数据记录放进同一套系统里。": "The first step is to solve the problem that complex tasks are hard to collect. A what-you-see-is-what-you-get XR teleoperation interface puts expert teaching, task understanding and data recording into one system.",
  "适合复杂装配、非结构化工位和远程示教场景": "Suitable for complex assembly, unstructured workstations and remote teaching scenarios",
  "兼顾数据采集效率和系统易用性": "Balances data-collection efficiency and system usability",
  "把数据难采、质量不稳定的问题变成技术入口": "Turns hard-to-collect, unstable-quality data into a technical entry point",
  "XR 遥操界面把人、任务和数据记录直接连在一起。": "The XR teleoperation interface directly connects people, tasks and data recording.",
  "AI 辅助遥操的数据采集工作流": "AI-assisted teleoperation data-collection workflow",
  "在采集工作流中加入共享自主和风险引导，让长时域、复杂装配任务不再完全依赖人工持续控制，降低示教疲劳和人力成本。": "By adding shared autonomy and risk guidance into the collection workflow, long-horizon complex assembly tasks no longer depend entirely on continuous manual control, reducing teaching fatigue and labor cost.",
  "适合长流程装配与双臂协同任务": "Suitable for long-sequence assembly and bimanual collaboration tasks",
  "通过风险引导提高示教稳定性": "Improves teaching stability through risk guidance",
  "把辅助驾驶式采集带到制造现场": "Brings driver-assist-style collection to the factory floor",
  "共享自主让低风险动作自动化，高风险动作仍由人掌控。": "Shared autonomy automates low-risk motions while high-risk motions remain under human control.",
  "触觉辅助柔性物体遥操数据采集": "Tactile-assisted teleoperation for deformable-object data collection",
  "面对接触丰富、柔性物体和精细操作任务，单纯依赖视觉往往不够。我们把触觉和视觉信号一起引入遥操流程，提升复杂任务成功率。": "For contact-rich tasks, deformable objects and fine manipulation, vision alone is often not enough. We bring tactile and visual signals together into teleoperation to improve task success.",
  "适合接触丰富、需要精细控制的工位任务": "Suitable for contact-rich workstation tasks requiring fine control",
  "提升多模态数据采集的稳定性和可解释性": "Improves the stability and interpretability of multimodal data collection",
  "为后续具身模型训练提供更高质量样本": "Provides higher-quality samples for later embodied-model training",
  "触觉与视觉结合后，柔性物体和接触任务的示教成功率明显提升。": "Once tactile and visual signals are combined, teaching success rises clearly for deformable objects and contact-rich tasks.",
  "基于第一人称视频的具身模型": "Embodied models based on egocentric video",
  "在有了稳定的示教和多模态数据之后，下一步是把技能分解、迁移和重组，让模型减少对海量重复遥操和标注的依赖。": "With stable teaching and multimodal data in place, the next step is to decompose, transfer and recombine skills so the model depends less on massive repeated teleoperation and labeling.",
  "支持第一视角学习、技能分解与基础技能迁移": "Supports first-person learning, skill decomposition and basic skill transfer",
  "降低对海量遥操数据和重复示教的依赖": "Reduces dependence on large amounts of teleoperation data and repeated teaching",
  "让训练结果更接近真实工位部署需求": "Brings training results closer to real workstation deployment needs",
  "第一视角视频与任务执行信号结合后，可以更高效地支撑具身模型学习。": "When egocentric video is combined with execution signals, it can support embodied-model learning more efficiently.",
  "实验与验证图集": "Experiment and validation gallery",
  "这些图来自团队现有技术基础页，展示了从遥操实验到具体任务验证的过程。": "These images come from the team's existing technical-foundation slides and show the path from teleoperation experiments to concrete task validation.",
  "触觉驱动遥操架构与训练接口。": "Tactile-driven teleoperation architecture and training interfaces.",
  "桌面场景下的机器人实验验证。": "Robot validation in a desktop scenario.",
  "第一视角任务执行与路径观察。": "Egocentric task execution and path observation.",
  "针对真实工位物体的实验采集画面。": "Experimental collection footage for real workstation objects.",
  "实验环境中的视角记录与动作验证。": "Viewpoint recording and action validation in the lab environment.",
  "少样本技能学习": "Few-shot skill learning",
  "现场评测": "On-site evaluation",
  "制造现场的数据与工位智能": "Factory data and workstation intelligence",
  "现场数据与工位智能": "Site data and workstation intelligence",
  "与产业伙伴现场交流": "On-site exchange with industry partners",
  "以香港研发资源连接内地制造场景": "Connecting Hong Kong R&D resources with mainland manufacturing scenarios",
  "以香港研发资源连接内地产业场景": "Connecting Hong Kong R&D resources with mainland industry scenarios",
  "团队依托香港科研与转化平台，同时联动深圳/广州工程化资源和南京/长三角制造场景，服务客户现场的数据整理、培训辅助和机器人验证需求。": "The team draws on Hong Kong research and translation platforms while linking Shenzhen/Guangzhou engineering resources and Nanjing/Yangtze River Delta manufacturing scenarios to support site data organization, training assistance and robot validation.",
  "团队依托香港科研与转化平台，同时联动深圳/广州工程化资源和南京/长三角场景验证资源，服务客户现场的数据整理、培训辅助和机器人验证需求。": "The team draws on Hong Kong research and translation platforms while linking Shenzhen/Guangzhou engineering resources and Nanjing/Yangtze River Delta scenario-validation resources to support site data organization, training assistance and robot validation.",
  "联系我们，聊聊你的制造现场": "Contact us to discuss your factory floor",
  "联系我们，聊聊你的真实场景": "Contact us to discuss your real-world scenario",
  "先进装备、轨道交通、高端系统、工业检测、装配与运维场景。": "Advanced equipment, rail transit, high-end systems, industrial inspection, assembly and maintenance scenarios.",
  "如果你的团队正在处理工艺资料分散、人员培训成本高、复杂操作难复制或机器人验证难落地的问题，可以从一次具体场景沟通开始。": "If your team is dealing with scattered process materials, high training costs, hard-to-replicate operations or difficult robot validation, we can start with one specific scenario.",
  "哪些资料最难整理？哪些操作最依赖老师傅？哪些工位适合先做培训、质检或操作辅助？哪些机器人验证值得先做小样板？": "Which materials are hardest to organize? Which operations depend most on experienced workers? Which workstations should start with training, inspection or operation assistance? Which robot validations are worth prototyping first?",
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
  "EAC 2026 上海：自动驾驶与具身智能产业交流": "EAC 2026 Shanghai: Autonomous Driving and Embodied Intelligence Industry Exchange",
  "2026 年 5 月 28-29 日，EAC2026 自动驾驶与具身智能产业展览会在上海汽车会展中心举行。智融团队在自动驾驶与具身智驾产业展区进行知识分享，介绍面向智能制造场景的具身智能工作。": "On May 28-29, 2026, EAC2026 Autonomous Driving and Embodied Intelligence Industry Exhibition was held at the Shanghai Automobile Exhibition Center. The Zhirong team shared knowledge in the autonomous driving and embodied intelligent driving area, introducing its embodied intelligence work for smart manufacturing scenarios.",
  "智融近期活动与产业交流": "Zhirong Recent Activities and Industry Exchange",
  "记录团队参加赛事、展会和产业交流的阶段性进展，持续展示智融围绕制造业具身智能数据采集、工位智能和机器人执行验证的工作。": "A record of the team's recent competitions, exhibitions and industry exchanges, showing Zhirong's ongoing work in manufacturing embodied-data collection, workstation intelligence and robotic execution validation.",
  "记录团队参加赛事、展会和产业交流的阶段性进展，持续展示智融围绕具身智能数据采集、工位智能和机器人执行验证的工作。": "A record of the team's recent competitions, exhibitions and industry exchanges, showing Zhirong's ongoing work in embodied-data collection, workstation intelligence and robotic execution validation.",
  "第五届上合组织成员国青年创新创业大赛大湾区预选赛项目展示": "Project presentation at the Greater Bay Area preliminary round of the 5th SCO Member States Youth Innovation and Entrepreneurship Competition",
  "上合大赛大湾区预选赛现场照片": "SCO competition Greater Bay Area preliminary round photos",
  "智融制造业具身智能数据采集平台展示": "Zhirong manufacturing embodied-intelligence data collection platform presentation",
  "智融具身智能数据采集平台展示": "Zhirong embodied-intelligence data collection platform presentation",
  "智融团队展示制造业具身数据价值": "Zhirong team presents the value of manufacturing embodied data",
  "智融团队展示具身数据价值": "Zhirong team presents the value of embodied data",
  "智融团队介绍具身数据采集路径": "Zhirong team introduces embodied data collection pathways",
  "2026 / 大湾区预选赛": "2026 / Greater Bay Area Preliminary Round",
  "智融团队参加第五届上合组织成员国青年创新创业大赛大湾区预选赛，围绕制造业具身智能数据采集平台、工位智能和机器人执行验证进行项目展示。": "The Zhirong team joined the Greater Bay Area preliminary round of the 5th SCO Member States Youth Innovation and Entrepreneurship Competition, presenting its manufacturing embodied-intelligence data collection platform, workstation intelligence and robotic execution validation.",
  "智融团队参加第五届上合组织成员国青年创新创业大赛大湾区预选赛，围绕具身智能数据采集平台、工位智能和机器人执行验证进行项目展示。": "The Zhirong team joined the Greater Bay Area preliminary round of the 5th SCO Member States Youth Innovation and Entrepreneurship Competition, presenting its embodied-intelligence data collection platform, workstation intelligence and robotic execution validation.",
  "上合组织成员国青年创新创业大赛大湾区预选赛": "SCO Member States Youth Innovation and Entrepreneurship Competition Greater Bay Area preliminary round",
  "围绕制造业具身智能数据采集、工位辅助和产业落地进行项目展示。": "A project presentation around manufacturing embodied-data collection, workstation assistance and industrial deployment.",
  "围绕具身智能数据采集、工位辅助和产业落地进行项目展示。": "A project presentation around embodied-data collection, workstation assistance and industrial deployment.",
  "EAC2026 具身智能赋能智能制造主题分享现场": "EAC2026 theme sharing on embodied intelligence for smart manufacturing",
  "EAC2026 具身智能主题分享现场": "EAC2026 embodied-intelligence theme sharing",
  "EAC2026 现场照片": "EAC2026 on-site photos",
  "EAC2026 张云波教授现场交流": "Professor Yunbo Zhang at EAC2026",
  "EAC2026 具身智驾产业展区交流": "EAC2026 embodied intelligent driving industry area exchange",
  "EAC2026 展区现场沟通": "EAC2026 on-site discussion",
  "2026.05.28-29 / 上海汽车会展中心": "2026.05.28-29 / Shanghai Automobile Exhibition Center",
  "具身智能赋能智能制造：挑战、路径与应用前景": "Embodied Intelligence Empowering Smart Manufacturing: Challenges, Pathways and Application Prospects",
  "具身智能：挑战、路径与应用前景": "Embodied Intelligence: Challenges, Pathways and Application Prospects",
  "张云波教授团队围绕制造业现场数据、工艺经验、人机协作与机器人执行闭环，分享了具身智能在智能制造中的落地路径，并与自动驾驶、具身智驾产业链伙伴开展现场交流。": "Professor Yunbo Zhang's team shared a deployment pathway for embodied intelligence in smart manufacturing around field data, process know-how, human-robot collaboration and robotic execution loops, and exchanged views with partners across the autonomous driving and embodied intelligent driving value chain.",
  "分享围绕现场数据、工艺经验、人机协作与机器人执行展开，介绍团队如何把具身智能研究连接到真实场景，并与自动驾驶、具身智驾产业链伙伴开展现场交流。": "The sharing focused on site data, process know-how, human-robot collaboration and robotic execution, showing how the team connects embodied-intelligence research to real-world scenarios while exchanging ideas with partners across the autonomous driving and embodied intelligent driving value chain.",
  "沟通活动合作": "Discuss Event Collaboration",
  "自动驾驶与具身智驾产业展区知识分享": "Knowledge Sharing in the Autonomous Driving and Embodied Intelligent Driving Area",
  "结合汽车智能化产业链对感知、决策和场景落地的关注，展示具身智能与智能制造融合的应用前景。": "Connecting with the intelligent vehicle industry's focus on perception, decision-making and scenario deployment, the session presented application prospects for integrating embodied intelligence with smart manufacturing.",
  "面向制造业的具身数据与工位智能": "Embodied Data and Workstation Intelligence for Manufacturing",
  "围绕数智化底座、XR/AI 培训、工位智能体和机器人执行单元，讨论从演示走向真实工位验证的路径。": "The discussion covered digital intelligence infrastructure, XR/AI training, workstation agents and robotic execution units, focusing on the path from demos to validation at real workstations.",
  "现场交流与产业连接": "On-site Exchange and Industry Connection",
  "与自动驾驶、机器人、传感器与系统集成领域伙伴交流，探索具身智能在先进制造与产业培训中的合作机会。": "The team exchanged with partners in autonomous driving, robotics, sensors and system integration, exploring collaboration opportunities for embodied intelligence in advanced manufacturing and industrial training.",
  "科研牵引，产业场景驱动": "Research-led and industry-scenario driven",
  "智融由中科院香港创新研究院张云波教授团队推动，团队长期关注智能制造、XR/AR、人机协作、机器人学习与具身智能。公司当前更强调从真实制造场景切入，先做可验证的数智化与场景智能，再逐步进入系统级具身部署。": "Zhirong is driven by Professor Yunbo Zhang's team at the Hong Kong Institute of Science & Innovation, CAS. The team has long focused on smart manufacturing, XR/AR, human-robot collaboration, robot learning and embodied intelligence. The company emphasizes entering through real manufacturing scenarios, building verifiable digital and scenario intelligence before moving into system-level embodied deployment.",
  "张云波教授": "Prof. Yunbo Zhang",
  "创始人 / CEO": "Founder / CEO",
  "创始人 / 首席科学家": "Founder / Chief Scientist",
  "肖琴琴博士": "Dr. Qinqin Xiao",
  "联合创始人 / CEO": "Co-founder / CEO",
  "邓熊希文博士": "Dr. Xiongxiwen Deng",
  "机器人遥操作与数据闭环专家": "Robotic Teleoperation and Data-Loop Expert",
  "王雪婷博士": "Dr. Xueting Wang",
  "人机协作与机器人学习研究专家": "Human-Robot Collaboration and Robot Learning Expert",
  "陈辰睿": "Chen Chenrui",
  "端到端系统工程与生成式 AI 工程师": "End-to-End Systems and Generative AI Engineer",
  "樊镇": "Fan Zhen",
  "工程落地与系统交付工程师": "Engineering Delivery and System Implementation Engineer",
  "中科院香港创新研究院研究员，由中国科学院香港创新研究院与中国科学院工业人工智能研究所（南京）联合引进，曾任美国罗切斯特理工学院终身副教授。": "Researcher at HKISI, CAS, jointly introduced by HKISI and the Institute of Industrial Artificial Intelligence, CAS (Nanjing). Former tenured associate professor at Rochester Institute of Technology.",
  "美国罗切斯特大学博士、数据科学硕士，长期从事 XR/AI 相关研究与系统开发，负责公司经营管理、市场拓展与 XR/AI 产品化。": "PhD from the University of Rochester with an MS in Data Science. Long focused on XR/AI research and system development, leading company operations, market development and XR/AI productization.",
  "RealHand（灵心巧手北美分部）主任科学家，曾在 TikTok Robotics Lab 领导研发团队，主导 XRoboToolkit 遥操作系统开发。": "Chief Scientist at RealHand North America. Previously led an R&D team at TikTok Robotics Lab and drove development of the XRoboToolkit teleoperation system.",
  "RealHand（灵心巧手北美分部）主任科学家，曾任 TouchTronix 机器人触觉项目研发主管，聚焦多模态交互、具身智能与制造任务融合。": "Chief Scientist at RealHand North America. Former robotics tactile project R&D lead at TouchTronix, focusing on multimodal interaction, embodied intelligence and manufacturing-task integration.",
  "RealHand（灵心巧手北美分部）主任科学家，曾任 TouchTronix 机器人触觉项目研发主管，聚焦多模态交互、具身智能与复杂任务融合。": "Chief Scientist at RealHand North America. Former robotics tactile project R&D lead at TouchTronix, focusing on multimodal interaction, embodied intelligence and complex-task integration.",
  "具备软硬一体的全栈研发经验，长期面向工业非结构化作业关键问题开展研发，擅长将生成式 AI 与系统工程结合。": "Full-stack hardware-software R&D experience, with long-term work on key problems in unstructured industrial operations and strengths in combining generative AI with systems engineering.",
  "北京交通大学机械电子工程本科、新加坡国立大学机械工程硕士，曾在百度和中国中车青岛四方参与项目，聚焦视觉感知、动作理解与人机协作。": "BEng in Mechatronics from Beijing Jiaotong University and MSc in Mechanical Engineering from the National University of Singapore. Project experience at Baidu and CRRC Qingdao Sifang, focusing on vision perception, action understanding and human-robot collaboration.",
  "香港研发与转化资源": "Hong Kong R&D and translation resources",
  "深圳 / 广州工程化协同": "Shenzhen / Guangzhou engineering collaboration",
  "南京 / 长三角制造场景验证": "Nanjing / Yangtze River Delta scenario validation",
  "扫码联系肖博士，沟通产线痛点与合作场景": "Scan to contact Dr. Xiao and discuss production-line pain points and collaboration scenarios",
  "适合围绕数智化底座、工位智能体、XR/AI 培训、具身数据采集与机器人执行单元开展初步需求沟通。": "Suitable for initial discussions on digital intelligence infrastructure, workstation agents, XR/AI training, embodied data collection and robotic execution units.",
  "肖博士微信": "Dr. Xiao's WeChat",
  "扫码添加，了解项目与合作方式": "Scan to connect and learn about the project and collaboration options",
  "产线方案咨询": "Production-Line Consultation",
  "场景方案咨询": "Scenario Consultation",
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
  "应用与推广 | 智融": "Applications & Adoption | Zhirong",
  "应用与推广": "Applications & Adoption",
  "生态合作": "Ecosystem",
  "智融围绕真实场景推进合作转化、试点验证与技术传播；以下内容用于展示当前应用基础、公开线索与生态协同情况。": "Zhirong advances real-world adoption through collaboration, pilot validation and technical communication. This page presents the current application base, public signals and ecosystem coordination.",
  "智融正在把具身智能数据采集、工位智能与机器人执行验证带入真实应用场景，连接核心伙伴、产业客户、高校实验室与区域创新网络。": "Zhirong is bringing embodied-data collection, workstation intelligence and robotic execution validation into real application scenarios, connecting core partners, industry clients, university labs and regional innovation networks.",
  "核心伙伴、企业客户与高校客户协同驱动": "Core Partners, Enterprise Clients and University Collaboration",
  "面向真实落地的应用网络": "An Application Network Built for Real Deployment",
  "已形成覆盖核心生态、企业场景与高校应用场景的合作基础，为首批标杆场景落地、产品验证与后续复制提供支撑。": "We have established a collaborative base across core ecosystem partners, enterprise scenarios and university applications to support initial flagship deployments, product validation and broader replication.",
  "围绕底层硬件协同、产业场景验证、科研教学应用与商业试点转化，智融已形成可持续拓展的应用基础，为首批标杆场景落地和后续复制提供支撑。": "Around hardware collaboration, industry scenario validation, research and teaching applications, and commercial pilot conversion, Zhirong has built an application base that can continue to scale and support flagship deployments.",
  "底层能力共建与关键硬件协同": "Co-building Core Capabilities and Hardware Integration",
  "共建具身智能底层能力": "Co-building Core Embodied Intelligence Capabilities",
  "企业客户与产业伙伴": "Enterprise Clients and Industry Partners",
  "真实工位、产业场景与商业转化": "Real Workstations, Industry Scenarios and Commercial Conversion",
  "连接真实工位与商业验证": "Connecting Real Workstations with Commercial Validation",
  "面向机器人与具身智能企业，智融持续推进数据采集、工位智能和执行验证能力在真实场景中的导入。": "For robotics and embodied-intelligence companies, Zhirong continues to introduce data collection, workstation intelligence and execution validation into real-world scenarios.",
  "当前网络覆盖 Skild AI、Feather Robotics、1X、Neura Robotics、deepreach、artly、NVIDIA、福莱新材等产业相关方。": "The current network covers industry-related parties including Skild AI, Feather Robotics, 1X, Neura Robotics, deepreach, artly, NVIDIA and Fulai New Materials.",
  "高校客户与合作伙伴": "University Clients and Academic Collaborators",
  "科研验证、教学应用与人才合作": "Research Validation, Teaching Applications and Talent Collaboration",
  "支撑科研验证与人才培养": "Supporting Research Validation and Talent Development",
  "外部引用与复现线索": "Public References and Reproduction Signals",
  "公开项目中的技术回响": "Technical Echoes in Public Projects",
  "以下内容用于说明公开项目中的技术路线线索与团队成员的相关经历，不等同于合作伙伴或官方联合发布。": "The following material highlights technical signals visible in public projects and relevant team experience. It should not be interpreted as a formal partnership or joint official release.",
  "围绕 XR 遥操作、具身数据采集与人形机器人控制，团队成员的过往工作经验正在产业与高校公开项目中形成可见的技术延展。": "Around XR teleoperation, embodied-data collection and humanoid robot control, team members' prior work is forming visible technical extensions in public industry and university projects.",
  "公开线索": "Public Signal",
  "技术延展": "Technical Extension",
  "英伟达 SONIC 与斯坦福 TWIST": "NVIDIA SONIC and Stanford TWIST",
  "根据内部汇报材料，团队骨干成员邓熊希文博士在 TikTok PICO 实习期间自主完成相关遥操作方案，并在后续公开项目语境中形成可辨识的技术线索。": "According to internal presentation materials, team member Dr. Deng Xiongxiwen independently completed the relevant teleoperation solution during his internship at TikTok PICO, later forming identifiable technical signals in subsequent public projects.",
  "团队骨干成员邓熊希文博士在 TikTok PICO 实习期间完成相关遥操作方案，相关技术路线随后在 NVIDIA SONIC 与 Stanford TWIST 等公开项目语境中被看见，体现了智融团队在遥操作数采方向的连续积累。": "Team member Dr. Deng Xiongxiwen completed the relevant teleoperation solution during his internship at TikTok PICO. The related technical route later appeared in the public context of NVIDIA SONIC, Stanford TWIST and other projects, reflecting Zhirong's continuous accumulation in teleoperation data collection.",
  "查看 SONIC 页面": "View SONIC",
  "查看 TWIST 页面": "View TWIST",
  "产业公开项目": "Industry Public Project",
  "高校公开项目": "University Public Project",
  "NVIDIA GEAR-SONIC 公开展示了面向人形机器人的遥操作能力，体现该类技术路线在产业侧的传播价值与应用想象空间。": "NVIDIA GEAR-SONIC publicly demonstrates teleoperation capabilities for humanoid robots, showing the communication value and application potential of this technical route on the industry side.",
  "Stanford TWIST 公开展示了 whole-body teleoperation 相关研究成果，也进一步呈现遥操作路线在高校科研、复现验证与学术传播中的延展价值。": "Stanford TWIST publicly demonstrates research results related to whole-body teleoperation, further showing the value of this route for university research, reproduction validation and academic communication.",
  "香港研发、广深工程化与南京场景验证共同支撑": "Hong Kong R&D, Greater Bay Area Engineering, and Nanjing Scenario Validation",
  "从香港的国际研发与资源连接，到广深的工程化与产业化推进，再到南京 / 长三角的工业 AI 与场景验证，智融正在形成面向真实落地的协同网络。": "From international R&D and resource connectivity in Hong Kong, to engineering and industrialization in Guangzhou and Shenzhen, and onward to industrial AI and scenario validation in Nanjing and the Yangtze River Delta, Zhirong is building a collaborative network for real deployment.",
  "智融以香港科研资源为起点，联动广深工程化能力与南京 / 长三角场景验证资源，形成面向真实应用落地的区域协同网络。": "Starting from Hong Kong research resources, Zhirong links engineering capabilities in Guangzhou and Shenzhen with scenario-validation resources in Nanjing and the Yangtze River Delta to build a regional collaboration network for real application deployment.",
  "区域协同布局": "Regional Coordination Layout",
  "协同网络": "Collaborative Network",
  "网络外延：": "Network Extension:",
  "连接中科院体系、港穗深高校合作资源，并持续关注 NVIDIA、TikTok PICO 北美 Lab 及多所高校实验室的公开技术交流。": "Connect CAS resources and Hong Kong-Guangzhou-Shenzhen university collaboration resources, while continuing to track public technical exchanges from NVIDIA, TikTok PICO North America Lab and multiple university laboratories.",
  "从伙伴协同到场景共创，再走向产品验证与付费试点": "From Partner Coordination to Co-created Scenarios, Then Product Validation and Paid Pilots",
  "当前目标是支撑首批 1-2 个标杆场景落地，并形成可复用的行业解决方案模板。": "The current goal is to support the deployment of the first one to two flagship scenarios and build reusable industry solution templates.",
  "智融以清晰场景切入，以可验证交付推进试点转化，逐步沉淀可复用的行业解决方案模板。": "Zhirong starts from clearly defined scenarios and advances pilot conversion through verifiable delivery, gradually building reusable industry solution templates.",
  "核心伙伴协同": "Core Partner Coordination",
  "客户导入": "Client Introduction",
  "场景共创": "Scenario Co-creation",
  "产品验证": "Product Validation",
  "付费试点": "Paid Pilot",
  "方案定制化": "Solution Customization",
  "沟通合作场景": "Discuss Collaboration Scenarios",
  "查看团队背景": "View Team Background",
};

const traditionalPhrases = [
  ["赋能平台", "賦能平台"],
  ["技术路线", "技術路線"],
  ["技术阶段", "技術階段"],
  ["技术基础", "技術基礎"],
  ["近期活动", "近期活動"],
  ["路演", "路演"],
  ["展会", "展會"],
  ["展位", "展位"],
  ["参展", "參展"],
  ["参赛", "參賽"],
  ["活动", "活動"],
  ["照片", "照片"],
  ["预选赛", "預選賽"],
  ["大湾区", "大灣區"],
  ["上合组织", "上合組織"],
  ["成员国", "成員國"],
  ["青年创新创业大赛", "青年創新創業大賽"],
  ["项目展示", "項目展示"],
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
  ["复现", "複現"],
  ["长时域", "長時域"],
  ["装配", "裝配"],
  ["任务", "任務"],
  ["缺少", "缺少"],
  ["稳定", "穩定"],
  ["流程", "流程"],
  ["就绪", "就緒"],
  ["设备", "設備"],
  ["图像", "圖像"],
  ["图集", "圖集"],
  ["视频", "視頻"],
  ["第一视角", "第一視角"],
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
  ["博士", "博士"],
  ["教授", "教授"],
  ["创始人", "創始人"],
  ["首席科学家", "首席科學家"],
  ["联合创始人", "聯合創始人"],
  ["邓熊希文", "鄧熊希文"],
  ["陈辰睿", "陳辰睿"],
  ["樊镇", "樊鎮"],
  ["王雪婷", "王雪婷"],
  ["主任科学家", "主任科學家"],
  ["触觉", "觸覺"],
  ["多模态", "多模態"],
  ["触觉", "觸覺"],
  ["视觉", "視覺"],
  ["所见即所得", "所見即所得"],
  ["远程示教", "遠程示教"],
  ["高风险", "高風險"],
  ["低风险", "低風險"],
  ["复杂装配", "複雜裝配"],
  ["生成式", "生成式"],
  ["工程师", "工程師"],
  ["系统工程", "系統工程"],
  ["研发", "研發"],
  ["开发", "開發"],
  ["硕士", "碩士"],
  ["本科", "本科"],
  ["曾任", "曾任"],
  ["曾在", "曾在"],
  ["主导", "主導"],
  ["负责", "負責"],
  ["聚焦", "聚焦"],
  ["落地", "落地"],
  ["交付", "交付"],
  ["视觉感知", "視覺感知"],
  ["动作理解", "動作理解"],
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
  const sourceTitle = document.documentElement.dataset.sourceTitle || document.title;
  document.documentElement.dataset.sourceTitle = sourceTitle;
  document.title = translateValue(sourceTitle, lang);

  const description =
    lang === "en"
      ? "Zhirong builds deployable intelligent solutions around site data, process knowledge, human collaboration and embodied execution."
      : translateValue("智融围绕现场数据、工艺知识、人机协作与具身执行能力，建设可落地的智能化解决方案。", lang);

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

const markActivePage = () => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.startsWith("#")) return;
    const target = href.split("#")[0] || "index.html";
    link.classList.toggle("active", target === current);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.startsWith("#")) {
        link.classList.toggle("active", href === `#${visible.target.id}`);
      }
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
markActivePage();

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
