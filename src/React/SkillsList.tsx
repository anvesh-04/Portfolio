import { useState, type ReactElement } from "react";

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "text-[var(--sec)] flex-shrink-0",
  "aria-hidden": true,
};

const CategoryIcons: Record<string, ReactElement> = {
  "Backend & System Design": (
    <svg {...iconProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  "Frontend Engineering": (
    <svg {...iconProps}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </svg>
  ),
  "Algorithms & Problem Solving": (
    <svg {...iconProps}>
      <circle cx="5" cy="6" r="3" />
      <circle cx="19" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M7.5 7.8 10.5 15.6" />
      <path d="M16.5 7.8 13.5 15.6" />
      <path d="M8 6h8" />
    </svg>
  ),
};

const skills: Record<string, string[]> = {
  "Backend & System Design": [
    "RESTful APIs with Node.js and Express.js",
    "MongoDB data modelling and Redis caching",
    "Distributed middleware with atomic Lua scripts",
    "Authentication and admin dashboards",
  ],
  "Frontend Engineering": [
    "React dashboards with real-time conflict detection",
    "Live API traffic and throttling metrics from MongoDB logs",
    "Responsive HTML5 / CSS3 layouts, mobile-first",
    "Client-side state wired to Express REST APIs",
  ],
  "Algorithms & Problem Solving": [
    "400+ DSA problems solved; Pupil rank on Codeforces",
    "Graph Coloring for conflict-free round-robin scheduling",
    "Kahn's Algorithm (topological sort) for knockout ordering",
    "Token Bucket, Sliding Window and Fixed Window rate limiting",
    "Mentored 80+ students in C / Java as a DSA Teaching Assistant",
  ],
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(
    "Backend & System Design"
  );

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;
          const panelId = `skills-panel-${category.replace(/\W+/g, "-")}`;

          return (
            <li key={category} className="w-full">
              <div className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left transition-all border border-[var(--white-icon-tr)] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleItem(category)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-[var(--white-icon-tr)] transition-colors"
                >
                  {CategoryIcons[category]}
                  <div className="flex items-center gap-2 flex-grow justify-between">
                    <span className="block truncate text-[var(--white)] text-base md:text-lg">
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </button>

                <div
                  id={panelId}
                  hidden={!isOpen}
                  className={`transition-all duration-300 px-4 ${
                    isOpen ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                    {items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="pl-1 text-[var(--sec)]">•</span>
                        <span className="pl-3">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
