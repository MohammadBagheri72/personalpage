import { about } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{about.headline}</h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={60 * (i + 1)}>
                <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 self-start">
          {about.highlights.map((item, i) => (
            <Reveal as="li" key={item.value} delay={60 * i} className="surface-card p-6">
              <p className="font-display text-2xl font-semibold text-foreground">{item.value}</p>
              <p className="mt-2 font-mono text-[0.7rem] tracking-wider text-muted-foreground uppercase">
                {item.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
