"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ python sid.py",
  "",
  'role       = "AI Engineer"',
  'university = "Temple University, CS \'26"',
  'focus      = ["LLMs", "Multi-Agent Systems", "Automation"]',
  'highlight  = "Penn State Hackathon 2025, 1st Place"',
  'status     = "Open to AI Engineering roles"',
  "# Let's build something.",
];

function TerminalBox() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const done = currentLine >= LINES.length;

  useEffect(() => {
    if (done) return;
    const line = LINES[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), 38);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, line === "" ? 80 : 120);
      return () => clearTimeout(t);
    }
  }, [currentChar, currentLine, done]);

  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  const partialLine = done ? null : LINES[currentLine].slice(0, currentChar);

  return (
    <div
      className="w-full max-w-2xl rounded-lg overflow-hidden text-left"
      style={{ border: "1px solid #3f0000", backgroundColor: "#0a0000" }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ backgroundColor: "#130000", borderBottom: "1px solid #3f0000" }}
      >
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
        <span
          className="ml-3 text-xs"
          style={{ color: "#6b1a1a", fontFamily: "var(--font-geist-mono)" }}
        >
          sk@portfolio: ~
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="p-5 min-h-[220px]"
        style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.8rem", lineHeight: "1.75" }}
      >
        {displayedLines.map((line, i) => (
          <div key={i} style={{ color: line.startsWith("$") ? "#f87171" : line.startsWith("#") ? "#6b7280" : line === "" ? undefined : "#fca5a5" }}>
            {line || " "}
          </div>
        ))}
        {!done && (
          <div style={{ color: partialLine?.startsWith("$") ? "#f87171" : partialLine?.startsWith("#") ? "#6b7280" : "#fca5a5" }}>
            {partialLine}
            <span style={{ opacity: cursorVisible ? 1 : 0, color: "#991b1b" }}>█</span>
          </div>
        )}
        {done && (
          <span style={{ opacity: cursorVisible ? 1 : 0, color: "#991b1b" }}>█</span>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center gap-8">
        <div>
          <p
            style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
            className="text-xs mb-3 tracking-widest uppercase"
          >
            AI Developer · Philadelphia, PA
          </p>
          <h1
            style={{ color: "var(--text-primary)" }}
            className="text-5xl sm:text-6xl font-bold tracking-tight leading-none"
          >
            Sidhant Kumar
          </h1>
        </div>

        <TerminalBox />

        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="#projects"
            style={{ backgroundColor: "var(--accent)" }}
            className="px-6 py-3 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See My Work
          </a>
          <a
            href="#contact"
            style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
            className="px-6 py-3 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            className="px-6 py-3 rounded-lg text-sm font-medium hover:border-red-800 hover:text-white transition-all"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}