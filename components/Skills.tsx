"use client";

import { motion } from "motion/react";

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
    category: "Frameworks",
    skills: ["Next.js", "React", "Node.js", "FastAPI", "Tailwind CSS", "Git", "Docker"],
  },
  {
    category: "Integrations",
    skills: [
      "MCP",
      "Gmail API",
      "Telegram API",
      "Canvas API",
      "Google Drive API",
      "REST APIs",
    ],
  },
  {
    category: "Concepts",
    skills: ["Systems Design", "Automation Architecture", "Agentic Architecture", "Network Security"],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
            className="text-xs mb-3 tracking-wide"
          >
            Skills
          </p>
          <h2
            style={{ color: "var(--text-primary)" }}
            className="text-3xl font-bold"
          >
            Technical Stack
          </h2>
        </div>

        <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="flex flex-col sm:flex-row sm:items-start gap-4 py-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <span
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-geist-mono)",
                  minWidth: "140px",
                }}
                className="text-xs pt-1 shrink-0"
              >
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
