"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav
      style={{ borderBottom: "1px solid var(--border)" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div
        style={{ backgroundColor: "rgba(10, 10, 15, 0.85)" }}
        className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
      >
        <a
          href="#"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-mono)" }}
          className="text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          sidhant.
        </a>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ color: "var(--text-secondary)" }}
                className="text-sm hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
