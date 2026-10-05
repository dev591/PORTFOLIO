// All personal content for the site lives here. Edit this file to update the portfolio.

export type SceneId = "drone" | "handshake" | "hospital" | "paper";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  badge?: string;
  tech: string[];
  summary: string;
  highlights: string[];
  scene: SceneId;
  /** Optional image in /public/images (e.g. "/images/pramana.png"); overrides the code-drawn scene. */
  image?: string;
  /** Leave empty to hide the button. */
  github: string;
  demo: string;
  featured: boolean;
};

export const profile = {
  /** Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL on Vercel if you use a custom domain. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-chalana.vercel.app",
  name: "Dev Chalana",
  shortName: "Dev",
  role: "Generative AI Engineer",
  location: "Hyderabad, Telangana, India",
  email: "devchalana135@gmail.com",
  phone: "+91 95872 00001",
  linkedin: "https://linkedin.com/in/dev-chalana",
  github: "https://github.com/dev591",
  resume: "/resume/Dev_Chalana_Resume.pdf",
  /** Optional avatar in /public/images; falls back to a pixel avatar. */
  avatar: "/images/dev-chalana.jpg",
  lookingFor: "Generative AI internship",
  summary:
    "Generative AI engineer and B.Tech CSE (Data Science & AI) undergrad at NMIMS Hyderabad, certified in agentic AI engineering by IIT Mandi. I build and ship RAG and multi-agent systems end to end, from hackathon prototype to something that holds up under judging.",
  stats: [
    { value: "4", label: "AI Projects" },
    { value: "2", label: "Hackathons" },
    { value: "4", label: "Certifications" },
  ],
};

export const education = {
  school: "Narsee Monjee Institute of Management Studies (NMIMS), Hyderabad",
  degree: "B.Tech, CSE – Data Science & AI",
  graduation: "Expected July 2028",
};

export const projects: Project[] = [
  {
    slug: "pramana",
    title: "PRAMANA",
    tagline: "AI Digital Twin for UAV Engine Health",
    badge: "SIH 2026 · Internal Winner",
    tech: ["Python", "Physics Model (MVEM)", "Autoencoder + Classifier", "WebSocket", "React", "3D Viz", "Ollama"],
    summary:
      "A real-time digital twin and fault-diagnosis system for aero piston engines in MALE UAVs, built for DRDO's Smart India Hackathon 2026 problem statement.",
    highlights: [
      "A physics-based engine model streams live telemetry; an ML layer (autoencoder anomaly gate + fault classifier) catches faults before a threshold alarm would and localises them to a cylinder.",
      "Measured on held-out test installations: 94.5% recall on faulty runs and 98.6% top-1 diagnosis accuracy, with 15/15 fault types detected live.",
      "Fully offline AI assistant (Ollama, Whisper, Kokoro) explains the twin's state from real telemetry and never makes the land/continue decision itself.",
      "Owned the frontend end to end, including the live 3D engine visualization that judges called out as a highlight of the demo.",
      "Won the internal selection hackathon; the team now represents NMIMS Hyderabad at the main Smart India Hackathon 2026.",
    ],
    scene: "drone",
    github: "https://github.com/dev591/sih2026",
    demo: "",
    featured: true,
  },
  {
    slug: "mandate",
    title: "Mandate",
    tagline: "Agentic Commerce Negotiation Platform",
    badge: "Razorpay Hackathon · Track 1",
    tech: ["Python", "FastAPI", "OpenAI API", "Next.js", "TypeScript", "Razorpay SDK"],
    summary:
      "A simulated marketplace where one buyer agent negotiates against multiple seller agents to find the best deal, using a custom Intent/Cart/Payment mandate protocol.",
    highlights: [
      "Hash-chained audit trail with a cart-hash lock before payment; demoed a live tamper-and-reject scenario to prove the guarantee under judging.",
      "Built and shipped solo in a round-the-clock sprint against a hard deadline.",
      "Backend on FastAPI + OpenAI API + Razorpay test-mode SDK; frontend on Next.js, TypeScript and Tailwind.",
    ],
    scene: "handshake",
    github: "https://github.com/dev591/razorpay",
    demo: "",
    featured: true,
  },
  {
    slug: "vela",
    title: "Vela",
    tagline: "Medical Assistance App for Indian Hospitals",
    tech: ["RAG", "Google ADK", "Python"],
    summary:
      "An assistant that answers patient and staff questions from hospital documents using a RAG pipeline on Google ADK.",
    highlights: [
      "Structured, chunked and indexed source documents so responses reference the correct source.",
      "Cut manual lookup time for hospital staff and patients.",
    ],
    scene: "hospital",
    github: "https://github.com/dev591/new-vela-",
    demo: "",
    featured: true,
  },
  {
    slug: "skeptic-agent",
    title: "Skeptic Agent",
    tagline: "Adversarial Research Verification Engine",
    badge: "Capstone · 100% Local",
    tech: ["Python", "FastAPI", "Ollama (qwen2.5)", "PyMuPDF", "Three.js", "GSAP"],
    summary:
      "A local, privacy-first AI agent that reads research papers like a hostile peer reviewer — deconstructing claims, auditing methodology and surfacing hidden flaws. Zero cloud calls.",
    highlights: [
      "Runs three sequential adversarial audits on an uploaded PDF: key assertion and evidence strength, methodology tracker, and hidden flaws with targeted peer-review questions.",
      "Verification loop with JSON repair, strict schema validation and auto re-prompting; descriptive schema prompts cut malformed responses from the 1.5B model by over 90%.",
      "Live progress streams to an on-page terminal over NDJSON; dashboard built with Three.js and GSAP, all assets vendored so the page makes no external requests.",
    ],
    scene: "paper",
    github: "https://github.com/dev591/ai-research-skeptic-agent",
    demo: "",
    featured: true,
  },
];

export const experience = [
  {
    role: "AI Engineering Trainee — Agentic AI Program",
    org: "Indian Institute of Technology (IIT) Mandi",
    period: "2 months",
    points: [
      "Completed a certified, project-based program in generative and agentic AI engineering, building working retrieval and multi-agent pipelines over document and tabular data.",
      "Applied guardrails and LLM evaluation methods to check output quality and reduce unsafe responses.",
    ],
  },
  {
    role: "Generative AI & Testing Support",
    org: "RAG-based ERP Product",
    period: "Industry project",
    points: [
      "Supported implementation of generative AI features on a live ERP product, including retrieval over internal business documents so users could ask questions in plain language.",
      "Worked with the testing team to validate data flows and AI responses, reproducing and logging defects against expected results.",
      "Collaborated with engineers and testers on ambiguous requirements, escalating blockers and proposing fixes.",
    ],
  },
];

export const skills = [
  {
    group: "Generative AI",
    items: ["RAG", "Vectorless RAG", "Agentic Workflows", "Multi-Agent Systems", "Deep Agents", "Prompt Engineering", "Guardrails", "LLM Evals", "LLM Gateways", "Vector DBs & Embeddings"],
  },
  { group: "Frameworks", items: ["LangChain", "LangGraph", "Google ADK", "FastAPI", "Next.js"] },
  { group: "Languages", items: ["Python", "C++", "C", "TypeScript", "JavaScript", "Java", "Node.js", "HTML/CSS"] },
  { group: "Data", items: ["Pandas", "NumPy", "SQL", "DBMS", "EDA", "Power BI (DAX)", "Excel"] },
  { group: "Cloud & Practices", items: ["AWS", "Git & GitHub", "DSA", "System Design Basics", "Manual Testing"] },
];

export const achievements = [
  { title: "Smart India Hackathon 2026", detail: "Internal selection winner — representing NMIMS Hyderabad", kind: "trophy" as const },
  { title: "Razorpay Hackathon", detail: "Track 1 · Agentic Commerce — built Mandate solo", kind: "trophy" as const },
  { title: "Certified AI / Agentic AI Engineer", detail: "IIT Mandi", kind: "cert" as const },
  { title: "AWS Certification — Machine Learning", detail: "Amazon Web Services", kind: "cert" as const },
  { title: "Data Analytics Job Simulation", detail: "Deloitte Australia · Forage", kind: "cert" as const },
  { title: "Data Science Job Simulation", detail: "British Airways · Forage", kind: "cert" as const },
];

export const leadership = [
  {
    role: "Secretary, Science & Technology and E-Cell",
    org: "IIT Mandi",
    detail: "Coordinate technical and entrepreneurship events, working with participants and faculty.",
  },
  {
    role: "Founding Member",
    org: "Algorand Bharat x NMIMS Club",
    detail: "Helped establish the club and run member sessions.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home", icon: "home" },
  { href: "#projects", label: "Works", icon: "briefcase" },
  { href: "#experience", label: "Quests", icon: "scroll" },
  { href: "#about", label: "About", icon: "user" },
  { href: "#contact", label: "Contact", icon: "mail" },
] as const;
