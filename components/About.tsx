"use client";

import { motion } from "motion/react";

const highlights = [
  { label: "Penn State Hackathon 2025", value: "1st Place Winner" },
  { label: "Degree", value: "B.S. Computer Science, Temple University" },
  { label: "Focus", value: "AI Agents & Multiagent Systems" },
  { label: "Experience", value: "SAP AI Dev Team, Intern" },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Depth layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(153,27,27,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="mb-12">
          <p
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
            className="text-xs mb-3 tracking-wide"
          >
            About
          </p>
          <h2
            style={{ color: "var(--text-primary)" }}
            className="text-3xl font-bold"
          >
            Background
          </h2>
        </div>

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

          <div className="flex flex-col gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                className="rounded-lg px-5 py-4"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.08 }}
                viewport={{ once: true }}
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
                <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold">
                  {h.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
