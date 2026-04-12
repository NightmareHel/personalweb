export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--accent-glow)" }}
      />

      <div className="relative z-10 max-w-3xl w-full">
        <p
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-geist-mono)",
          }}
          className="text-sm mb-4 tracking-widest uppercase"
        >
          AI Developer · Philadelphia, PA
        </p>

        <h1
          style={{ color: "var(--text-primary)" }}
          className="text-5xl sm:text-7xl font-bold tracking-tight leading-none mb-6"
        >
          Sidhant
          <br />
          Kumar
        </h1>

        <p
          style={{ color: "var(--text-secondary)" }}
          className="text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
        >
          I build AI agents, multiagent systems, and automation infrastructure.
          CS student at Temple University. Penn State Hackathon 2025 winner.
          Currently building at the intersection of LLMs and real-world systems.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            style={{ backgroundColor: "var(--accent)" }}
            className="px-6 py-3 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="https://github.com/nightmarehel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            className="px-6 py-3 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-white transition-all"
          >
            GitHub
          </a>
          <a
            href="#contact"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            className="px-6 py-3 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-white transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
