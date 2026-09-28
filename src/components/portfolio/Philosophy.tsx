import { metrics, philosophy } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Philosophy() {
  return (
    <section className="relative border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Engineering Philosophy" title="How I Build Software" />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.map((item, i) => (
            <Reveal as="li" key={item.title} delay={50 * i} className="surface-card p-7">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </ul>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-border sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal as="li" key={metric.label} delay={40 * i} className="bg-background p-8">
              <p className="text-gradient font-display text-2xl font-semibold">{metric.value}</p>
              <p className="mt-2 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
