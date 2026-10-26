import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          accent="blue"
        />

        <Reveal>
          <div className="relative grid gap-6 border-t border-border py-8 md:grid-cols-12">
            <div className="md:col-span-1">
              <span className="text-fluid-xs font-medium text-muted-foreground">
                01
              </span>
            </div>

            <div className="relative hidden md:col-span-1 md:block">
              <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500" />
              <span className="absolute left-1/2 top-4 h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-border" />
            </div>

            <div className="md:col-span-7">
              <a
                href="https://www.prepstat.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-fluid-h3 font-display font-semibold text-foreground"
              >
                PREPSTAT
                <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

              <p className="mt-1 text-fluid-body text-muted-foreground">
                Web Developer Intern
              </p>

              <p className="mt-4 max-w-2xl text-fluid-body text-muted-foreground">
                Built and improved responsive web experiences, frontend
                interfaces, and modern application workflows.
              </p>

              <p className="mt-4 text-fluid-xs text-muted-foreground">
                React · JavaScript · Responsive UI · Performance
              </p>
            </div>

            <div className="md:col-span-3 md:text-right">
              <span className="text-fluid-xs text-muted-foreground">
                MAY–JUL 2025
              </span>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                2 MONTHS
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}