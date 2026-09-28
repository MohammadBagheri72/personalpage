import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="A decade of shipping production software"
          description="Roles described by engineering responsibility and impact. Placeholder details are marked and easy to replace."
        />

        <ol className="mt-14 space-y-6 border-l border-hairline pl-6 sm:pl-10">
          {experience.map((role, i) => (
            <Reveal as="li" key={`${role.company}-${i}`} delay={50 * i} className="relative">
              <span
                aria-hidden
                className="absolute top-8 -left-[1.9rem] size-2 rounded-full bg-primary sm:-left-[2.9rem]"
              />
              <article className="surface-card p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{role.title}</h3>
                    <p className="mt-1 text-sm text-primary">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">{role.dates}</p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[0.68rem] tracking-[0.18em] text-foreground uppercase">
                      Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {role.responsibilities.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                          — {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[0.68rem] tracking-[0.18em] text-foreground uppercase">
                      Key Achievements
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {role.achievements.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                          — {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-6 border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="text-foreground">Architecture: </span>
                  {role.architecture}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-hairline px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
