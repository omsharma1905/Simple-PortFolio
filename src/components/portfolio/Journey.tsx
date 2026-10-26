import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { journey, accentClasses } from "@/lib/portfolio-data";

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="container-portfolio">
        <SectionHeading eyebrow="Timeline" title="Learning journey." accent="yellow" />

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border md:left-[15px]" />
          <div className="space-y-14">
            {journey.map((entry, i) => {
              const a = accentClasses[entry.accent];
              return (
                <Reveal key={entry.year} delay={i * 0.08}>
                  <div className="relative pl-12 md:pl-16">
                    <div className="absolute left-0 top-2 flex items-center justify-center">
                      <span className={`h-3 w-3 rounded-full ${a.dot} ring-4 ring-background`} />
                    </div>
                    <div className="grid gap-6 md:grid-cols-12">
                      <div className="md:col-span-3">
                        <div
                          className={`font-display text-4xl font-semibold ${a.text} md:text-5xl`}
                        >
                          {entry.year}
                        </div>
                      </div>
                      <ul className="space-y-2 md:col-span-9">
                        {entry.items.map((item) => (
                          <li key={item} className="text-lg text-foreground md:text-xl">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
