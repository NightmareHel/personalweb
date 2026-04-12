const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
  },
  {
    category: "AI / ML",
    skills: [
      "LLMs",
      "Claude API",
      "OpenAI API",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "RAG",
      "Agentic Pipelines",
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "Tailwind CSS",
      "Git",
      "Docker",
    ],
  },
  {
    category: "Integrations & APIs",
    skills: [
      "MCP (Model Context Protocol)",
      "Gmail API",
      "Telegram API",
      "Canvas API",
      "Google Drive API",
      "REST APIs",
    ],
  },
  {
    category: "Concepts",
    skills: [
      "Systems Design",
      "Automation Architecture",
      "SCRUM / Agile",
      "Version Control",
      "Network Security",
      "Digital Forensics",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
          className="text-xs tracking-widest uppercase mb-3"
        >
          Skills
        </p>
        <h2
          style={{ color: "var(--text-primary)" }}
          className="text-3xl font-bold mb-12"
        >
          Technical Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              className="rounded-xl p-5"
            >
              <p
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-geist-mono)",
                }}
                className="text-xs mb-4 tracking-wide"
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    className="text-xs px-2 py-1 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
