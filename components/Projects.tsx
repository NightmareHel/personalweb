const projects = [
  {
    name: "DroughtGuard",
    tag: "Hackathon Winner — Penn State 2025",
    description:
      "AI-powered drought prediction and alert system. Won Penn State Hackathon 2025. Combines real-time environmental data with ML models to surface actionable drought risk signals.",
    tech: ["Python", "Machine Learning", "AI", "Data Pipeline"],
    href: "https://github.com/nightmarehel",
    featured: true,
  },
  {
    name: "Boardroom",
    tag: "Personal AI Infrastructure",
    description:
      "A fully integrated AI executive assistant and second brain built on Claude Code. Features a custom skills system, persistent memory, and live MCP server connections to Gmail, Canvas, and Google Drive — with more integrations on the roadmap.",
    tech: ["Claude AI", "MCP", "Gmail API", "Canvas API", "TypeScript"],
    href: "https://github.com/nightmarehel",
    featured: false,
    mcpLive: ["Gmail", "Canvas", "Google Drive"],
    mcpPlanned: ["Slack", "Notion", "Linear", "GitHub", "Calendar"],
  },
  {
    name: "AGI Simulation",
    tag: "Academic · Seminar Topics in CS",
    description:
      "Multi-agent system designed to simulate emergent AGI-like behavior through coordinated agent collaboration. Built as a final project exploring the thesis that multi-agent coordination is a viable proto-AGI architecture.",
    tech: ["Python", "Multi-Agent Systems", "LLMs", "Claude AI"],
    href: "https://github.com/nightmarehel",
    featured: false,
  },
  {
    name: "TeleGAssistant",
    tag: "Academic · Software Design",
    description:
      "Telegram-based scheduling and reminder assistant. Built as LLM Engineer on a 4-person team using SCRUM methodology. Handles natural language scheduling, reminders, and task tracking via Telegram.",
    tech: ["Python", "Telegram API", "LLMs", "SCRUM"],
    href: "https://github.com/nightmarehel",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
          className="text-xs tracking-widest uppercase mb-3"
        >
          Projects
        </p>
        <h2
          style={{ color: "var(--text-primary)" }}
          className="text-3xl font-bold mb-12"
        >
          What I&apos;ve Built
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "var(--surface)",
                border: p.featured
                  ? "1px solid var(--accent)"
                  : "1px solid var(--border)",
                boxShadow: p.featured ? "0 0 24px var(--accent-glow)" : "none",
              }}
              className="rounded-xl p-6 hover:border-indigo-400 transition-all group block"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <span
                    style={{ color: "var(--text-primary)" }}
                    className="text-lg font-semibold group-hover:text-indigo-400 transition-colors"
                  >
                    {p.name}
                  </span>
                  {p.featured && (
                    <span
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "white",
                      }}
                      className="ml-3 text-xs px-2 py-0.5 rounded-full font-medium"
                    >
                      Featured
                    </span>
                  )}
                </div>
                <span
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                  className="text-xs whitespace-nowrap"
                >
                  {p.tag}
                </span>
              </div>

              <p
                style={{ color: "var(--text-secondary)" }}
                className="text-sm leading-6 mb-4"
              >
                {p.description}
              </p>

              {p.mcpLive && (
                <div className="mb-4">
                  <p
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
                    className="text-xs mb-2"
                  >
                    MCP Live
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.mcpLive.map((m) => (
                      <span
                        key={m}
                        style={{
                          backgroundColor: "rgba(99,102,241,0.1)",
                          border: "1px solid rgba(99,102,241,0.3)",
                          color: "#a5b4fc",
                        }}
                        className="text-xs px-2 py-0.5 rounded"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {p.mcpPlanned && (
                <div className="mb-4">
                  <p
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
                    className="text-xs mb-2"
                  >
                    Planned Integrations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.mcpPlanned.map((m) => (
                      <span
                        key={m}
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                        }}
                        className="text-xs px-2 py-0.5 rounded"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
