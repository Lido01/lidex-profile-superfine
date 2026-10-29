// Single source of truth config built strictly from resume data.
// System Architect | AI Agent & Automation Engineer | Full-Stack Developer
// High performance, no icons/emojis, clean editorial typography.

export const personalData = {
  name: "Lidetu",
  handle: "@techfocus_hub",
  githubUsername: "Lido01",
  role: "System Architect | AI Agent & Automation Engineer | Full-Stack Developer",
  subRole: "Backend Python Developer @ ASTU // LangGraph & RAG // Distributed Systems",
  location: "Nazrēt, Ethiopia [ASTU] // Global Remote",
  availability: "AVAILABLE FOR HIGH-IMPACT BACKEND & AGENTIC ARCHITECTURES",
  statusLine: "ASTU BACKEND PYTHON DEVELOPER // ALX AFRICA CERTIFIED",
  summary: "Skilled Software App & Automation Agentic Developer with no tech stack limits. Proven track record in developing efficient, high-performance backend systems, optimizing architecture, and ensuring continuous availability of critical APIs. Proficient in Relational and No-SQL databases, LLMs (LangGraph, LangChain), and RAG pipelines.",
  education: {
    degree: "Bachelor of Engineering in Software Engineering",
    institution: "Adama Science and Technology University (ASTU)",
    location: "Nazrēt, Ethiopia",
    period: "2023 — Present"
  },
  channels: {
    telegram: "https://t.me/techfocus_hub",
    github: "https://github.com/Lido01",
    buildr: "https://buildr.mikaelen.site/z-break",
    email: "lidosinafanis@gmail.com"
  },
  metrics: [
    { label: "Community Builders", value: "165+", detail: "Tech Focus Hub" },
    { label: "Weekly Insights", value: "04", detail: "Deep Architecture Dives" },
    { label: "Consecutive Cadence", value: "06 WK", detail: "Active Posting Streak" },
    { label: "Backend API SLA", value: "99.9%", detail: "High-Throughput Uptime" }
  ]
};

export const skillsCategorized = [
  {
    category: "Backend & Systems",
    items: ["Python", "FastAPI", "Django REST", "Java", "PostgreSQL", "NoSQL", "Docker", "CI/CD Pipelines", "Redis"]
  },
  {
    category: "Agentic AI & LLMs",
    items: ["LangGraph", "LangChain", "RAG Architecture", "Vector Databases", "Telegram Bot Automation", "Autonomous Agents"]
  },
  {
    category: "Full-Stack & Hardware",
    items: ["React", "HTML5 / CSS3", "Tailwind CSS", "Three.js / WebGL", "Arduino Firmware", "Microcontroller Circuits"]
  },
  {
    category: "Methodology & Leadership",
    items: ["System Architecture", "Agile & Scrum Delivery", "Team Leadership", "Peer Code Reviews", "Requirement Translation"]
  }
];

export const experienceData = [
  {
    period: "11/2024 — PRESENT",
    role: "Backend Python Developer",
    organization: "Adama Science & Technology University (ASTU)",
    location: "Nazrēt, Ethiopia",
    summary: "Developing and maintaining critical software applications, contributing to multiple university systems, and leading backend engineering teams to deliver on time.",
    highlights: [
      "Designed and developed backend services deployed across university academic departments.",
      "Collaborated with cross-functional teams to translate academic requirements into functional web solutions.",
      "Implemented continuous integration (CI) processes and participated in peer code reviews.",
      "Engineered high-performance relational database schemas ensuring minimal query latency."
    ]
  },
  {
    period: "07/2022 — 08/2022",
    role: "Hardware & Firmware Project Lead",
    organization: "Bonga University STEM Center",
    location: "Bonga, Ethiopia",
    summary: "Led team engineering hardware components, embedded firmware, and traffic light detection architecture.",
    highlights: [
      "Designed and implemented hardware components functioning via invoked sensor triggers.",
      "Built Arduino-based Digital Clock and Traffic Light Detector systems.",
      "Served as project lead coordinating agile delivery and hardware-software integration."
    ]
  }
];

export const projectsData = [
  {
    id: "telegram-bot-agent",
    index: "01",
    title: "AI Agent Telegram Channel Manager",
    category: "Agentic AI & Automation",
    image: "/projects/ai-telegram-agent.svg",
    tagline: "Autonomous content generation, media synthesis, and scheduled channel distribution.",
    fullDescription: "An intelligent autonomous agent built for complete Telegram channel management. Generates technical markdown posts, synthesizes topical images/videos, and dispatches on precision cron schedules without human intervention.",
    architecture: [
      "LangChain & LangGraph state machine orchestrating content retrieval and drafting",
      "Asynchronous Telegram Bot API integration with webhook health monitoring",
      "Redis job queue ensuring zero-delay scheduled dispatches with automated failover"
    ],
    techStack: ["Python", "LangGraph", "LangChain", "Telegram Bot API", "Redis", "Docker"],
    metric: "99.9% Autonomous Dispatch Uptime",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://t.me/techfocus_hub"
  },
  {
    id: "astu-student-feedback",
    index: "02",
    title: "ASTU Student-Feedback System",
    category: "Institutional Full-Stack",
    image: "/projects/astu-feedback.svg",
    tagline: "Academic evaluation and departmental feedback platform for university staff.",
    fullDescription: "Engineered for Adama Science and Technology University Academic Department. Allows students to evaluate faculty and academic curricula through encrypted, authenticated feedback loops with real-time statistical aggregation.",
    architecture: [
      "Java backend microservice handling concurrent student evaluation submissions",
      "Relational database schema optimized for multidimensional statistical queries",
      "Role-based access control (RBAC) isolating student identities while verifying enrollment"
    ],
    techStack: ["Java", "Spring Boot", "PostgreSQL", "HTML/CSS", "JavaScript"],
    metric: "Institutional University Deployment",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://buildr.mikaelen.site/z-break"
  },
  {
    id: "dylexiflow-platform",
    index: "03",
    title: "DylexiFLOW Assistive Reader",
    category: "Open Source AI & Accessibility",
    image: "/projects/dylexiflow.svg",
    tagline: "Unlocking reading independence and cognitive joy for K-12 students with dyslexia and ADHD.",
    fullDescription: "An open-source assistive reading platform designed to eliminate cognitive fatigue for K-12 students with dyslexia and ADHD. Integrates dynamic typographic spacing, contrast adaptation, and assistive comprehension tools.",
    architecture: [
      "Cognitive wave text formatting adapting syllable segmentation in real-time",
      "Accessibility-first frontend with zero-latency visual adjustments",
      "Open-source modular core inviting community educators and neurodivergent advocates"
    ],
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "Accessibility APIs"],
    metric: "Open-Source K-12 Impact",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://buildr.mikaelen.site/z-break"
  },
  {
    id: "social-media-api",
    index: "04",
    title: "Social-Media-API High-Throughput Engine",
    category: "Backend Python & REST API",
    image: "/projects/social-api.svg",
    tagline: "Scalable social backend for posts, comments, likes, tags, and category CRUD.",
    fullDescription: "A production-ready social networking backend API. Supports user authentication, granular permission scopes, polymorphic tagging, comment hierarchies, and real-time interaction metrics.",
    architecture: [
      "Django REST Framework architecture with decoupled serializers and viewsets",
      "JWT-based session authentication with refresh token rotation",
      "Relational database indexing on hot paths (posts, comments, categories, likes)"
    ],
    techStack: ["Python", "Django REST", "PostgreSQL", "JWT", "Docker"],
    metric: "Sub-25ms Response Latency",
    repoUrl: "https://github.com/Lido01/Alx_DjangoLearnLab.git",
    liveUrl: "https://github.com/Lido01/Alx_DjangoLearnLab"
  },
  {
    id: "mybudget-ecommerce",
    index: "05",
    title: "MyBudget University Exchange",
    category: "Full-Stack E-Commerce",
    image: "/projects/mybudget-ecommerce.svg",
    tagline: "Peer-to-peer campus marketplace for students to buy, sell, and exchange products.",
    fullDescription: "A specialized e-commerce platform built for university students. Enables authenticated campus members to list second-hand academic materials, electronics, and goods with integrated chat and escrow coordination.",
    architecture: [
      "Relational inventory ledger preventing duplicate claims during concurrent checkouts",
      "Real-time student chat messaging for on-campus handover coordination",
      "Lightweight responsive client optimized for low-bandwidth university networks"
    ],
    techStack: ["Python", "FastAPI / Django", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    metric: "Campus Peer-to-Peer Hub",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://buildr.mikaelen.site/z-break"
  },
  {
    id: "stock-mgt-system",
    index: "06",
    title: "Stock Management Institution System",
    category: "Enterprise Backend Architecture",
    image: "/projects/stock-mgt.svg",
    tagline: "Enterprise-grade warehouse inventory tracking with ACID audit trails.",
    fullDescription: "Developed as Backend Architect and Team Lead for a full store stock management institutional platform. Guarantees strict transactional integrity, automated low-stock dispatch notices, and historical audit reports.",
    architecture: [
      "Double-entry ledger database schema ensuring immutable inventory history",
      "Automated stock threshold listeners triggering reorder signals",
      "Role-tiered administrative dashboards with cryptographic audit logging"
    ],
    techStack: ["Python", "PostgreSQL", "Redis", "Docker", "Agile / Scrum"],
    metric: "Team Lead & Lead Architect",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://buildr.mikaelen.site/z-break"
  },
  {
    id: "multi-user-blog",
    index: "07",
    title: "Multi-User Personal Blog Platform",
    category: "Open Source Backend",
    image: "/projects/social-api.svg",
    tagline: "Full-stack personal blogging engine with multi-author publishing workflows.",
    fullDescription: "Open-source multi-user publishing platform. Supports markdown authoring, category filtering, user profile management, and clean REST endpoints.",
    architecture: [
      "MVC architecture built with Python backend, HTML, and CSS",
      "Clean relational mapping between authors, articles, categories, and comments",
      "Git-managed open-source code repository with clear documentation"
    ],
    techStack: ["Python", "HTML5", "CSS3", "SQLite / PostgreSQL", "Git"],
    metric: "Open-Source Capstone Project",
    repoUrl: "https://github.com/Lido01/Capstone_Project.git",
    liveUrl: "https://github.com/Lido01/Capstone_Project"
  },
  {
    id: "automation-barber",
    index: "08",
    title: "Agentic Barber Booking Automation",
    category: "Client Automation Systems",
    image: "/projects/ai-telegram-agent.svg",
    tagline: "Autonomous appointment booking, calendar sync, and customer reminder pipeline.",
    fullDescription: "Commissioned agentic scheduling platform developed for an online client. Coordinates client bookings, prevents double scheduling, and dispatches automated SMS/Telegram reminders.",
    architecture: [
      "Autonomous slot-allocation state machine preventing race condition bookings",
      "Calendar API two-way synchronization with automated rescheduling triggers",
      "Serverless webhook listener executing automated reminder pipelines"
    ],
    techStack: ["Python", "Telegram API", "Google Calendar API", "FastAPI"],
    metric: "Production Client Deployment",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://buildr.mikaelen.site/z-break"
  },
  {
    id: "found-my-soulmate",
    index: "09",
    title: "Found_My_Soulmate Interactive Game",
    category: "Interactive Web Platform",
    image: "/projects/dylexiflow.svg",
    tagline: "Matchmaking & conversational gaming platform with real or virtual companions.",
    fullDescription: "A web-based interactive matchmaking and social game platform where users can connect with registered peers or craft customized virtual conversational companions following compatibility chat assessments.",
    architecture: [
      "Compatibility evaluation algorithm calculating multi-factor affinity scores",
      "Simulated conversational agent loop for virtual companion interactions",
      "Real-time session state management with responsive UI controls"
    ],
    techStack: ["Python", "JavaScript", "WebSockets", "HTML/CSS"],
    metric: "Interactive Web Application",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://buildr.mikaelen.site/z-break"
  },
  {
    id: "arduino-digital-clock",
    index: "10",
    title: "Digital Clock & Traffic Light Detector",
    category: "Embedded Firmware & Hardware",
    image: "/projects/stock-mgt.svg",
    tagline: "Microcontroller clock and automated traffic sensor built at Bonga STEM Center.",
    fullDescription: "Hardware prototype built at Bonga University STEM Center. Combined Arduino microcontroller logic with optical/timing sensors to coordinate automated traffic light sequences alongside digital clock displays.",
    architecture: [
      "Embedded C/C++ firmware running on Arduino microcontroller",
      "Hardware circuit breadboard interfacing timing crystals and LED indicators",
      "State-machine logic managing traffic transition timing and sensor interrupts"
    ],
    techStack: ["Arduino", "Embedded C/C++", "Circuit Design", "Sensors"],
    metric: "Bonga University STEM Innovation",
    repoUrl: "https://github.com/Lido01",
    liveUrl: "https://buildr.mikaelen.site/z-break"
  }
];

export const certificationsData = [
  {
    index: "01",
    title: "Backend Software Development",
    issuer: "ALX Africa",
    credentialId: "ALX-BACKEND-AFRICA",
    date: "Completed",
    image: "/certs/alx-backend.svg",
    tagline: "Advanced mastery in Python, high-performance APIs, databases, and microservices.",
    fullDescription: "Completed intensive professional Backend Web Development program at ALX Africa. Rigorous assessment covered complex backend architecture, relational & NoSQL databases, scalable API design, Docker containerization, and agile engineering workflows.",
    skillsCovered: ["Python Backend", "Django REST Framework", "Relational Databases", "CI/CD & Docker", "API Architecture"]
  },
  {
    index: "02",
    title: "Program Foundation Certification",
    issuer: "ALX Africa",
    credentialId: "ALX-FOUNDATION-AFRICA",
    date: "Certified",
    image: "/certs/alx-foundation.svg",
    tagline: "Foundational mastery of computational thinking, algorithmic logic, and engineering rigor.",
    fullDescription: "Official certification conferred by ALX Africa validating core software engineering foundation, computational problem solving, data structures, and cross-functional agile engineering leadership.",
    skillsCovered: ["Computational Thinking", "Agile Methodologies", "Git Version Control", "Problem Solving", "Peer Collaboration"]
  },
  {
    index: "03",
    title: "Hardware Prototyping & Embedded Systems",
    issuer: "Bonga University STEM Center",
    credentialId: "STEM-BONGA-2022",
    date: "2022",
    image: "/certs/stem-bonga.svg",
    tagline: "Hardware and embedded automation prototyping at Bonga University STEM Center.",
    fullDescription: "Conferred at Bonga University STEM Center for leading hardware development of Arduino microcontroller-based digital clock and traffic light detection systems, coordinating team engineering sprints.",
    skillsCovered: ["Arduino Microcontrollers", "Circuit Architecture", "Sensor Integration", "Firmware Logic", "Hardware Leadership"]
  }
];

export const testimonialsData = [
  {
    index: "01",
    author: "Adama Science & Technology University",
    role: "Academic Department Project Review",
    organization: "ASTU Software Engineering",
    quote: "Lidetu has been instrumental in delivering reliable backend systems across university projects. His grasp of high-availability APIs, clean Python code, and agile teamwork consistently ensures on-time project execution.",
    verification: "ACADEMIC INSTITUTION ENDORSEMENT"
  },
  {
    index: "02",
    author: "ALX Africa Software Peer Reviewers",
    role: "Backend Engineering Cohort",
    organization: "ALX Africa Alumni Network",
    quote: "Working with Lidetu in peer code reviews highlighted his exceptional problem-solving depth. He doesn't just write functional code; he optimizes database queries and architecture to prevent bottlenecks before they occur.",
    verification: "VERIFIED ALX PEER REVIEW"
  },
  {
    index: "03",
    author: "Online Client",
    role: "Business Owner",
    organization: "Barber Automation Project",
    quote: "The automated booking system Lidetu built eliminated our manual scheduling overhead completely. The Telegram bot integration works flawlessly with 24/7 uptime. Highly dependable engineer.",
    verification: "VERIFIED CLIENT TESTIMONIAL"
  }
];
