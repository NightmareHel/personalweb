"use client";

import { motion } from "motion/react";

const highlights = [
  { label: "Penn State Hackathon 2025", value: "Winner" },
  { label: "Degree", value: "B.S. Computer Science, Temple University" },
  { label: "Focus", value: "AI Agents & Multiagent Systems" },
  { label: "Experience", value: "SAP AI Dev Team (Intern)" },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
          className="text-xs tracking-widest uppercase mb-3"
        >
          About
        </p>
        <h2
          style={{ color: "var(--text-primary)" }}
          className="text-3xl font-bold mb-12"
        >
          Background
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p
              style={{ color: "var(--text-secondary)" }}
              className="text-base leading-7 mb-4"
            >
              I&apos;m an AI developer focused on building systems that actually work in
              the real world: agents that take action, multiagent pipelines that
              coordinate, and infrastructure that multiplies output.
            </p>
            <p
              style={{ color: "var(--text-secondary)" }}
              className="text-base leading-7 mb-4"
            >
              Currently finishing my CS degree at Temple University while
              interning on the AI dev team at SAP. I won the Penn State Hackathon
              2025 with DroughtGuard, an AI-powered drought prediction and alert
              system.
            </p>
            <p
              style={{ color: "var(--text-secondary)" }}
              className="text-base leading-7"
            >
              I freelance in AI engineering: agents, automation, LLM
              integrations, and I&apos;m actively building my portfolio toward a
              full-time AI/ML engineering role.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                className="rounded-lg px-5 py-4"
              >
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                  className="text-xs mb-1"
                >
                  {h.label}
                </p>
                <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium">
                  {h.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
