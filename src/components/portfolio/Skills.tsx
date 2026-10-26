import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-portfolio">
        <SectionHeading eyebrow="Toolkit" title="Skills" accent="blue" />

        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag inline-flex items-center rounded-full px-[clamp(0.75rem,1.6vw,0.875rem)] py-[clamp(0.35rem,0.8vw,0.45rem)] text-[clamp(0.75rem,1.1vw,0.9375rem)] font-medium leading-none tracking-tight"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
