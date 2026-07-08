"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
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
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(153,27,27,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
          className="text-xs mb-3 tracking-wide"
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
          className="text-base mb-10 max-w-lg leading-7"
        >
          Open to AI engineering roles, freelance projects, and collaboration.
          Based in Philadelphia, available for remote or tri-state area work.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <motion.a
            href="mailto:sidhant31032004@gmail.com"
            style={{ backgroundColor: "var(--accent)" }}
            className="px-6 py-3 rounded-lg text-white text-sm font-semibold inline-block"
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Send Email
          </motion.a>
          <motion.a
            href="https://github.com/nightmarehel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            className="px-6 py-3 rounded-lg text-sm font-medium inline-block"
            whileHover={{ borderColor: "#991b1b", color: "#e2e8f0" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sidhant-kumar-4144b6256/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            className="px-6 py-3 rounded-lg text-sm font-medium inline-block"
            whileHover={{ borderColor: "#991b1b", color: "#e2e8f0" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            LinkedIn
          </motion.a>
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
