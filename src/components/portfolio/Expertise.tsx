import { expertise } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Expertise() {
  return (
    <section id="expertise" className="relative border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Core Expertise"
          title="What I Do"
          description="Six areas where I spend most of my engineering time."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => (
            <Reveal as="li" key={item.title} delay={50 * i} className="surface-card group p-7">
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
