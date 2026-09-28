import { useState } from "react";
import { beyondCode } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function Architecture() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Architecture & Engineering"
          title={beyondCode.title}
          description={beyondCode.description}
        />

        <Reveal delay={60}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {beyondCode.areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="surface-card p-6 sm:p-10">
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-primary uppercase">
              Reference architecture
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
              {beyondCode.layers.map((layer) => (
                <div key={layer.name} className="flex w-full flex-col items-center gap-3">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(layer.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(layer.name)}
                    onBlur={() => setActive(null)}
                    className={cn(
                      "w-full max-w-xl rounded-lg border px-5 py-4 text-center transition-all duration-300",
                      active === layer.name
                        ? "border-primary bg-primary/10"
                        : "border-hairline bg-surface/50",
                    )}
                  >
                    <span className="block text-sm font-medium text-foreground">{layer.name}</span>
                    <span className="mt-1 block font-mono text-xs text-muted-foreground">
                      {layer.detail}
                    </span>
                  </button>
                  <span aria-hidden className="h-6 w-px bg-border" />
                </div>
              ))}

              <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
                {beyondCode.leaves.map((leaf) => (
                  <button
                    key={leaf.name}
                    type="button"
                    onMouseEnter={() => setActive(leaf.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(leaf.name)}
                    onBlur={() => setActive(null)}
                    className={cn(
                      "rounded-lg border px-5 py-4 text-center transition-all duration-300",
                      active === leaf.name
                        ? "border-primary bg-primary/10"
                        : "border-hairline bg-surface/50",
                    )}
                  >
                    <span className="block text-sm font-medium text-foreground">{leaf.name}</span>
                    <span className="mt-1 block font-mono text-xs text-muted-foreground">
                      {leaf.detail}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
