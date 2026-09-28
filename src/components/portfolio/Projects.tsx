import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projectFilters, projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="relative border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected engineering work"
          description="Representative placeholder projects showing problem, architecture and outcome. Swap in real work when ready."
        />

        <Reveal delay={60}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {projectFilters.map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={filter === option}
                onClick={() => setFilter(option)}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors",
                  filter === option
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-4 lg:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal as="li" key={project.name} delay={40 * i} className="surface-card p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="font-mono text-xs text-primary">{project.tagline}</p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <dl className="mt-6 space-y-3 border-t border-hairline pt-5 text-sm">
                <Row label="Problem" value={project.problem} />
                <Row label="Role" value={project.role} />
                <Row label="Challenges" value={project.challenges} />
                <Row label="Architecture" value={project.architecture} />
                {project.aiCapabilities ? <Row label="AI" value={project.aiCapabilities} /> : null}
                <Row label="Outcome" value={project.results} />
              </dl>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-hairline px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.github || project.demo ? (
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="size-4" /> Live demo
                    </a>
                  ) : null}
                </div>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
      <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-foreground uppercase">
        {label}
      </dt>
      <dd className="leading-relaxed text-muted-foreground">{value}</dd>
    </div>
  );
}
