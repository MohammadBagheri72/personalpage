import { ai } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function AISection() {
  return (
    <section id="ai" className="relative isolate overflow-hidden border-t border-hairline py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-backdrop opacity-60" />
        <div className="absolute inset-x-0 top-0 h-[60vh] halo" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="AI & Intelligent Applications" title={ai.title} description={ai.description} />

        <Reveal delay={80}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {ai.capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {capability}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ai.useCases.map((useCase, i) => (
            <Reveal
              as="li"
              key={useCase.title}
              delay={50 * i}
              className="surface-card relative overflow-hidden p-7"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <h3 className="text-lg font-semibold">{useCase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{useCase.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
