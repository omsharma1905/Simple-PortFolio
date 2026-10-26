import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function FeaturedWork() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-portfolio">
        <SectionHeading eyebrow="Featured Work" title="Projects." accent="pink" />
        <Reveal>
          <p className="text-fluid-lead max-w-2xl text-muted-foreground">
            I've built several modern web applications — including productivity platforms, hospital
            management systems, and full-stack MERN applications.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6">
            <Link
              to="/projects"
              className="btn-fluid group inline-flex items-center justify-center gap-2 rounded-full bg-foreground font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
            >
              View All Projects
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
