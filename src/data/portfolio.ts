// ─────────────────────────────────────────────────────────────
// All editable portfolio content lives here.
// Replace the [PLACEHOLDER] values with real information.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: "Mohammad Bagheri",
  role: "Senior Full-Stack & AI Engineer",
  eyebrow: "SENIOR FULL-STACK & AI ENGINEER",
  headline: "Building Scalable Software & Intelligent Digital Products",
  subheadline:
    "10+ years of experience building modern web applications, enterprise systems, and AI-powered products with .NET, React, Next.js, and modern AI technologies.",
  intro:
    "I'm a Senior Full-Stack Engineer focused on building production-grade software across the backend, frontend, architecture, and AI layers. I combine deep experience in the .NET ecosystem and modern React/Next.js development with practical experience integrating AI into real-world applications.",
  location: "[YOUR LOCATION]",
  email: "[your@email.com]",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/[username]" },
  { label: "LinkedIn", href: "https://linkedin.com/in/[username]" },
  { label: "Email", href: `mailto:${personal.email}` },
];

export const about = {
  headline: "10+ Years of Building Software",
  paragraphs: [
    "I'm a Senior Full-Stack Developer with more than a decade of experience designing and building production software.",
    "My background spans the entire software development lifecycle — from system architecture and backend engineering to frontend development, APIs, databases, deployment, performance optimization, and increasingly, AI-powered applications.",
    "I specialize in the .NET ecosystem, React, and Next.js, while also working with modern AI technologies to bring intelligent capabilities into real-world products.",
  ],
  highlights: [
    { value: "10+ Years", label: "Professional Experience" },
    { value: "Full-Stack", label: "End-to-End Engineering" },
    { value: "AI", label: "Intelligent Applications" },
    { value: "Architecture", label: "Scalable Systems" },
  ],
};

export const expertise = [
  {
    title: "Full-Stack Engineering",
    body: "Designing and building complete production applications across frontend, backend, APIs, databases, and infrastructure.",
  },
  {
    title: ".NET Engineering",
    body: "Building robust enterprise applications, APIs, and backend services using C#, .NET, and ASP.NET Core.",
  },
  {
    title: "React & Next.js",
    body: "Building fast, scalable, accessible and production-ready modern web applications.",
  },
  {
    title: "AI Engineering",
    body: "Integrating AI capabilities into applications and building intelligent product experiences using modern AI and LLM technologies.",
  },
  {
    title: "Software Architecture",
    body: "Designing maintainable, modular and scalable architectures for complex systems.",
  },
  {
    title: "Technical Problem Solving",
    body: "Turning complex business requirements and engineering challenges into reliable, maintainable software.",
  },
];

export const ai = {
  title: "Engineering with AI",
  description:
    "Beyond traditional software engineering, I work with AI technologies to build applications that can understand, generate, automate, and assist.",
  capabilities: [
    "LLM integration",
    "Generative AI",
    "AI-powered features",
    "AI APIs",
    "Intelligent search",
    "Retrieval-Augmented Generation (RAG)",
    "AI agents",
    "Prompt engineering",
    "Structured AI outputs",
    "AI-assisted workflows",
    "Natural language interfaces",
    "AI integration into existing applications",
  ],
  useCases: [
    {
      title: "AI Assistants",
      body: "Natural-language interfaces that help users interact with applications.",
    },
    {
      title: "Intelligent Search",
      body: "Semantic and AI-powered search experiences.",
    },
    {
      title: "Document Intelligence",
      body: "Extracting, understanding and summarizing information from documents.",
    },
    {
      title: "AI Automation",
      body: "Automating repetitive workflows using AI.",
    },
    {
      title: "RAG Applications",
      body: "Connecting LLMs to private or domain-specific knowledge.",
    },
    {
      title: "AI-Powered SaaS",
      body: "Embedding intelligent capabilities directly into modern SaaS products.",
    },
  ],
};

export const stack = [
  {
    category: "Backend",
    items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "AI",
    items: [
      "Generative AI",
      "LLMs",
      "AI APIs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Embeddings",
      "Vector Search",
    ],
  },
  {
    category: "Data",
    items: ["SQL", "Relational Databases", "Entity Framework", "Data Modeling"],
  },
  {
    category: "Engineering",
    items: [
      "Software Architecture",
      "System Design",
      "Clean Architecture",
      "API Design",
      "Performance Optimization",
      "Testing",
      "CI/CD",
      "Git",
    ],
  },
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  architecture: string;
};

// Placeholder career history — replace with real roles.
export const experience: Experience[] = [
  {
    title: "Senior Full-Stack Engineer",
    company: "[COMPANY NAME]",
    location: "[LOCATION / REMOTE]",
    dates: "[2021] — Present",
    description:
      "Lead engineer on a production platform spanning .NET services and a React/Next.js frontend, with responsibility for architecture decisions and delivery quality.",
    responsibilities: [
      "Own end-to-end delivery of features across backend services, APIs and the web client",
      "Define architecture and technical standards for a multi-team codebase",
      "Introduce AI-assisted capabilities where they improve real user workflows",
      "Mentor engineers through design reviews and pairing",
    ],
    achievements: [
      "[PLACEHOLDER] Reduced critical endpoint latency through query and caching work",
      "[PLACEHOLDER] Led modernization of a legacy module into a clean, testable architecture",
    ],
    technologies: ["C#", "ASP.NET Core", "React", "Next.js", "TypeScript", "SQL"],
    architecture:
      "Layered clean architecture with clear domain boundaries, typed API contracts and incremental modernization of legacy components.",
  },
  {
    title: "Full-Stack Developer",
    company: "[COMPANY NAME]",
    location: "[LOCATION]",
    dates: "[2017] — [2021]",
    description:
      "Built and maintained enterprise web applications and internal platforms used daily by business teams.",
    responsibilities: [
      "Designed REST APIs and relational data models",
      "Implemented frontend applications with React and TypeScript",
      "Improved reliability through testing and CI/CD pipelines",
    ],
    achievements: [
      "[PLACEHOLDER] Delivered a core business module adopted across departments",
      "[PLACEHOLDER] Cut release cycle time by automating build and deployment",
    ],
    technologies: ["C#", ".NET", "Entity Framework", "React", "SQL Server"],
    architecture:
      "Service-oriented backend with shared domain libraries and a component-driven frontend.",
  },
  {
    title: "Software Developer",
    company: "[COMPANY NAME]",
    location: "[LOCATION]",
    dates: "[2014] — [2017]",
    description:
      "Developed features across the stack for customer-facing web products and internal tooling.",
    responsibilities: [
      "Implemented backend services and database schemas",
      "Built responsive interfaces with JavaScript and modern frameworks",
      "Supported production systems and resolved performance issues",
    ],
    achievements: [
      "[PLACEHOLDER] Rebuilt a reporting pipeline for significantly faster processing",
    ],
    technologies: ["C#", "ASP.NET", "JavaScript", "SQL"],
    architecture: "Monolithic application with gradual extraction of reusable services.",
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  challenges: string;
  architecture: string;
  technologies: string[];
  aiCapabilities?: string;
  results: string;
  github?: string;
  demo?: string;
  tags: string[];
};

export const projectFilters = ["All", ".NET", "React", "Next.js", "AI", "Full-Stack"];

// Placeholder projects — replace with real work.
export const projects: Project[] = [
  {
    name: "Enterprise SaaS Platform",
    tagline: ".NET + React + SQL",
    description:
      "Multi-tenant business platform with role-based access, billing and reporting.",
    problem:
      "[PLACEHOLDER] Teams relied on fragmented tools with no shared source of truth.",
    role: "Lead full-stack engineer and architect",
    challenges:
      "Tenant isolation, permission modeling and keeping reporting queries fast as data grew.",
    architecture:
      "ASP.NET Core API with clean architecture layering, SQL Server with tenant-scoped access, React SPA.",
    technologies: ["C#", "ASP.NET Core", "React", "SQL Server"],
    results: "[PLACEHOLDER] Consolidated several internal tools into one platform.",
    github: "#",
    demo: "#",
    tags: [".NET", "React", "Full-Stack"],
  },
  {
    name: "AI-Powered Knowledge Platform",
    tagline: "Next.js + AI + RAG",
    description:
      "Knowledge base where users ask questions in natural language and get grounded answers.",
    problem: "[PLACEHOLDER] Documentation was large and hard to search meaningfully.",
    role: "Full-stack and AI engineer",
    challenges:
      "Chunking strategy, retrieval quality, response grounding and keeping answers traceable to sources.",
    architecture:
      "Next.js frontend, retrieval service over a vector index, LLM generation with citation of retrieved sources.",
    technologies: ["Next.js", "TypeScript", "Vector Search", "LLM APIs"],
    aiCapabilities: "RAG pipeline, embeddings, structured outputs, source citation",
    results: "[PLACEHOLDER] Reduced time spent searching internal documentation.",
    github: "#",
    demo: "#",
    tags: ["Next.js", "AI", "Full-Stack"],
  },
  {
    name: "Intelligent Document Processing",
    tagline: ".NET + AI + document processing",
    description:
      "Pipeline that ingests documents, extracts structured data and summarizes content.",
    problem: "[PLACEHOLDER] Manual data entry from documents was slow and error-prone.",
    role: "Backend and AI engineer",
    challenges:
      "Reliable extraction across inconsistent formats and validating model output before persistence.",
    architecture:
      "ASP.NET Core ingestion services, queue-based processing, AI extraction step with schema validation.",
    technologies: ["C#", ".NET", "SQL", "AI APIs"],
    aiCapabilities: "Structured extraction, summarization, validation of model output",
    results: "[PLACEHOLDER] Reduced manual processing effort for document-heavy workflows.",
    github: "#",
    tags: [".NET", "AI"],
  },
  {
    name: "High-Scale Web Application",
    tagline: "ASP.NET Core + React + SQL",
    description: "Customer-facing application serving high traffic with strict latency goals.",
    problem: "[PLACEHOLDER] Growth exposed bottlenecks in the existing architecture.",
    role: "Senior engineer focused on performance and architecture",
    challenges: "Query optimization, caching strategy and safe incremental refactoring.",
    architecture:
      "Stateless API instances behind a load balancer, layered caching, tuned relational schema.",
    technologies: ["ASP.NET Core", "React", "SQL", "Caching"],
    results: "[PLACEHOLDER] Improved response times under peak load.",
    demo: "#",
    tags: [".NET", "React", "Full-Stack"],
  },
  {
    name: "AI Assistant",
    tagline: "Next.js + LLM + RAG",
    description:
      "In-product assistant that answers questions and performs actions through natural language.",
    problem: "[PLACEHOLDER] Users struggled to discover features in a complex product.",
    role: "Full-stack and AI engineer",
    challenges: "Tool calling reliability, guardrails and streaming UX.",
    architecture:
      "Next.js chat interface, server-side orchestration layer, tool execution with typed contracts.",
    technologies: ["Next.js", "TypeScript", "LLM APIs"],
    aiCapabilities: "AI agents, tool calling, prompt engineering, streaming responses",
    results: "[PLACEHOLDER] Improved feature discovery and support deflection.",
    github: "#",
    tags: ["Next.js", "AI"],
  },
  {
    name: "Business Management Platform",
    tagline: ".NET + React + SQL",
    description: "Operations platform covering scheduling, inventory and reporting.",
    problem: "[PLACEHOLDER] Operations ran on spreadsheets with no audit trail.",
    role: "Full-stack engineer",
    challenges: "Complex domain rules, data integrity and reporting performance.",
    architecture: "Domain-driven .NET backend with a modular React frontend.",
    technologies: ["C#", ".NET", "React", "SQL"],
    results: "[PLACEHOLDER] Replaced manual processes with auditable workflows.",
    tags: [".NET", "React", "Full-Stack"],
  },
];

export const beyondCode = {
  title: "Beyond the Code",
  description:
    "Senior engineering is less about writing more code and more about the decisions that keep software understandable, reliable and able to change.",
  areas: [
    "Architecture",
    "System Design",
    "Scalability",
    "Maintainability",
    "Security",
    "Performance",
    "API Design",
    "Developer Experience",
    "AI Integration",
  ],
  layers: [
    { name: "Frontend", detail: "React / Next.js" },
    { name: "API Layer", detail: "ASP.NET Core" },
    { name: "Application Layer", detail: "Use cases, orchestration" },
    { name: "Domain Layer", detail: "Business rules, entities" },
    { name: "Infrastructure Layer", detail: "Persistence, integrations" },
  ],
  leaves: [
    { name: "SQL Database", detail: "Relational storage" },
    { name: "AI Services", detail: "LLM / RAG" },
  ],
};

export const philosophy = [
  {
    title: "Simple Over Clever",
    body: "Prefer clear and maintainable solutions over unnecessary complexity.",
  },
  {
    title: "Architecture Matters",
    body: "Good architecture enables teams and products to evolve safely.",
  },
  {
    title: "Production First",
    body: "Software should be reliable, observable, secure and maintainable in the real world.",
  },
  {
    title: "AI Where It Creates Value",
    body: "Use AI where it genuinely improves the product or workflow, rather than adding AI for its own sake.",
  },
  {
    title: "Continuous Learning",
    body: "Modern engineering requires continuously adapting to new technologies and approaches.",
  },
];

export const metrics = [
  { value: "10+", label: "Years Experience" },
  { value: "Full-Stack", label: "Engineering" },
  { value: "AI", label: "Application Development" },
  { value: "End-to-End", label: "Product Development" },
];

export const contact = {
  headline: "Have a challenging problem to solve?",
  description:
    "Whether it's building a scalable web application, modernizing an existing system, or adding meaningful AI capabilities to a product, let's talk.",
};

export const education = [
  {
    title: "[DEGREE]",
    institution: "[INSTITUTION]",
    dates: "[YEARS]",
  },
];

export const certifications = [{ title: "[CERTIFICATION]", issuer: "[ISSUER]", year: "[YEAR]" }];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "AI", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
