import { stack } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function TechStack() {
  return (
    <section className="relative border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Tools I work with day to day"
          description="Grouped by where they sit in the stack, without inflated proficiency claims."
        />

        <div className="mt-14 divide-y divide-hairline border-y border-hairline">
          {stack.map((group, i) => (
            <Reveal
              key={group.category}
              delay={40 * i}
              className="grid gap-4 py-7 sm:grid-cols-[180px_1fr]"
            >
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-hairline bg-surface/50 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
