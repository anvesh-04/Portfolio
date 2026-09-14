/**
 * Single source of truth for every piece of personal data on the site.
 * Change a value here and it updates everywhere: meta tags, JSON-LD, nav, sections.
 */

export const SITE_URL =
  import.meta.env.PUBLIC_SITE_URL || "https://anvesh-gupta.vercel.app";

export const PERSON = {
  name: "Anvesh Gupta",
  role: "Full-Stack Developer",
  location: "Jaipur, India",
  email: "anshgupta.4k@gmail.com",
  phone: "+91 9045488096",
  resume: "/Anvesh_Gupta_Resume.pdf",
  tagline:
    "Building distributed, algorithmically-optimized systems on the MERN stack — from graph-based scheduling engines to Redis-backed rate limiters.",
  summary:
    "Full-stack developer specializing in the MERN stack with hands-on experience designing distributed, algorithmically-optimized backend systems. Competitive programmer (Codeforces Pupil, 400+ DSA problems solved) with applied expertise in graph algorithms and system design.",
} as const;

export const SOCIALS = {
  github: "https://github.com/anvesh-04",
  linkedin: "https://www.linkedin.com/in/anvesh-gupta-905b41282",
  leetcode: "https://leetcode.com/u/Anvesh_Gupta12/",
  codeforces: "https://codeforces.com/profile/a1nsh",
  email: `mailto:${PERSON.email}`,
} as const;

export const STATS = [
  { value: "400+", label: "DSA problems solved" },
  { value: "Pupil", label: "Codeforces rank" },
  { value: "Top 25", label: "Hack4Delhi, nationwide" },
  { value: "80+", label: "Students mentored" },
] as const;

export interface Project {
  title: string;
  blurb: string;
  image: string;
  stack: string[];
  repo: string;
  preview?: string;
  status: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Algorithmic Tournament & Fixture Engine",
    blurb:
      "Automated sports scheduling that turns a list of teams into a conflict-free tournament calendar using graph coloring and topological sort.",
    image: "/projects/tournament-engine.svg",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    repo: "https://github.com/anvesh-04/tournament-engine",
    preview: "https://tournament-engine-eight.vercel.app/",
    status: "Deployed",
    highlights: [
      "100% conflict-free round-robin fixtures — zero team double-bookings — via a Graph Coloring algorithm.",
      "Chronologically valid knockout brackets with zero dependency violations, resolved with Kahn's Algorithm (topological sort).",
      "React dashboard with real-time conflict detection backed by custom Express REST validation.",
    ],
  },
  {
    title: "Distributed Rate Limiter Middleware",
    blurb:
      "A framework-agnostic Node.js middleware implementing four rate-limiting strategies on an atomic, Redis-backed storage layer.",
    image: "/projects/rate-limiter.svg",
    stack: ["Node.js", "Express.js", "Redis", "Lua", "React", "MongoDB"],
    repo: "https://github.com/anvesh-04/mern-rate-limiter",
    status: "Open source",
    highlights: [
      "Four strategies — Token Bucket, Sliding Window Counter, Sliding Window Log and Fixed Window — tuned for memory use and burst tolerance.",
      "Race conditions eliminated across distributed deployments through Redis Lua scripts guaranteeing atomic operations.",
      "Live MERN dashboard visualizing API traffic and throttling metrics aggregated from MongoDB request logs.",
    ],
  },
];

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Teaching Assistant — Data Structures & Algorithms",
    org: "The LNM Institute of Information Technology",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Mentored 80+ undergraduates in DSA, resolving code-level doubts, reviewing submissions and guiding algorithm optimization in C and Java.",
      "Prepared students for technical interviews by structuring targeted problem sets and walkthroughs of core algorithmic patterns.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "2024 – Present",
    points: [
      "Delivered full-stack client web applications, building authentication, RESTful APIs and admin dashboards with React, Node.js, Express.js and MongoDB.",
    ],
  },
  {
    role: "Club Coordinator — Volleyball Club",
    org: "The LNM Institute of Information Technology",
    period: "May 2025 – Present",
    points: [
      "Organized tournaments spanning 32 teams and 192 players, planning logistics and scheduling for events including Conquest'25.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "The LNM Institute of Information Technology",
    detail: "B.Tech, Computer & Communication Engineering",
    period: "Aug 2023 – May 2027",
    score: "CGPA 7.92 / 10",
  },
  {
    school: "Shriji Baba Saraswati Vidya Mandir",
    detail: "Higher & Senior Secondary",
    period: "",
    score: "Class XII 95.4% · Class X 95%",
  },
] as const;

export const ACHIEVEMENTS = [
  "Ranked in the Top 25 teams nationwide at Hack4Delhi, a national-level hackathon organized by NSUT.",
  "Solved 400+ Data Structures & Algorithms problems across competitive programming platforms.",
  "Achieved Pupil rank on Codeforces, reflecting strong algorithmic problem-solving ability.",
  'Selected participant, Smart India Hackathon 2025 — developed "Van Sarthi," an AI-powered forest atlas.',
] as const;

/** Icons shown in the scrolling logo wall. Each entry must have `/public/svg/<slug>.svg`. */
export const TECH_WALL = [
  { slug: "cpp", label: "C++" },
  { slug: "c", label: "C" },
  { slug: "java", label: "Java" },
  { slug: "javaScript", label: "JavaScript" },
  { slug: "react", label: "React" },
  { slug: "nodejs", label: "Node.js" },
  { slug: "express", label: "Express" },
  { slug: "mongodb", label: "MongoDB" },
  { slug: "redis", label: "Redis" },
  { slug: "lua", label: "Lua" },
  { slug: "HTML5", label: "HTML5" },
  { slug: "CSS3", label: "CSS3" },
  { slug: "git", label: "Git" },
  { slug: "vercel", label: "Vercel" },
] as const;

export const SKILL_GROUPS = {
  Languages: ["C", "C++", "Java", "JavaScript", "Lua"],
  Frontend: ["React.js", "HTML5", "CSS3", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "RESTful APIs", "System Design"],
  Databases: ["MongoDB", "Redis"],
  "Tools & Concepts": [
    "Git",
    "GitHub",
    "Vercel",
    "Graph Coloring",
    "Topological Sort",
  ],
} as const;
