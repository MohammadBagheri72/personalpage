import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personal, socials } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const icons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

const nodes = [
  { x: 12, y: 28 },
  { x: 28, y: 62 },
  { x: 44, y: 22 },
  { x: 58, y: 70 },
  { x: 72, y: 34 },
  { x: 88, y: 58 },
];

function TechBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop grid-drift" />
      <div className="absolute inset-x-0 top-0 h-[70vh] halo" />
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {nodes.map((node, i) => {
          const next = nodes[i + 1];
          return next ? (
            <line
              key={`l-${i}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="var(--primary)"
              strokeWidth="0.08"
              opacity="0.35"
            />
          ) : null;
        })}
        {nodes.map((node, i) => (
          <circle
            key={`n-${i}`}
            cx={node.x}
            cy={node.y}
            r="0.45"
            fill="var(--cyan)"
            style={{ animation: `pulse-node ${4 + i}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <TechBackdrop />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">{personal.eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold sm:text-6xl lg:text-7xl">
            Building Scalable Software &amp; <span className="text-gradient">Intelligent</span>{" "}
            Digital Products
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personal.subheadline}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl border-l border-border pl-5 text-sm leading-relaxed text-muted-foreground">
            {personal.intro}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Let's Talk
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <ul className="mt-10 flex flex-wrap items-center gap-5">
            {socials.map((social) => {
              const Icon = icons[social.label as keyof typeof icons] ?? Mail;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="size-4" />
                    {social.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
