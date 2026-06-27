"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
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
          Contact
        </p>
        <h2
          style={{ color: "var(--text-primary)" }}
          className="text-3xl font-bold mb-4"
        >
          Let&apos;s Talk
        </h2>
        <p
          style={{ color: "var(--text-secondary)" }}
          className="text-base mb-10 max-w-lg"
        >
          Open to AI engineering roles, freelance projects, and collaboration.
          Based in Philadelphia, available for remote or tri-state area work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:sidhant31032004@gmail.com"
            style={{ backgroundColor: "var(--accent)" }}
            className="px-6 py-3 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Send Email
          </a>
          <a
            href="https://github.com/nightmarehel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            className="px-6 py-3 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-white transition-all inline-block"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sidhant-kumar-4144b6256/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            className="px-6 py-3 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-white transition-all inline-block"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div
        style={{ borderTop: "1px solid var(--border)" }}
        className="max-w-5xl mx-auto mt-24 pt-8 flex justify-between items-center"
      >
        <p
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
          className="text-xs"
        >
          Sidhant Kumar · 2026
        </p>
        <p
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
          className="text-xs"
        >
          Philadelphia, PA
        </p>
      </div>
    </motion.section>
  );
}
