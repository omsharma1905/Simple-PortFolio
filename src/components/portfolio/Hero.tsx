import { ArrowRight, Download, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/portfolio-data";
import { LiveYearsCounter } from "./LiveYearsCounter";
import { OrbitIllustration } from "./OrbitIllustration";

export function Hero() {
  return (
    <section id="hero" className="relative pt-[clamp(6rem,15vw,8rem)] pb-[clamp(3rem,7vw,5rem)]">
      <div className="container-portfolio relative">
        <div className="hero-grid grid items-center gap-[clamp(2rem,5vw,2.5rem)]">
          {/* Left: text */}
          <div>
            <div
              className="hero-rise mb-5 flex items-center gap-3"
              style={{ animationDelay: "0ms" }}
            >
              <span className="h-2 w-2 rounded-full bg-link" />
              <span className="text-fluid-xs text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            <h1
              className="hero-rise text-fluid-hero font-display font-semibold text-foreground"
              style={{ animationDelay: "40ms" }}
            >
              Hi, I'm Om Sharma.
            </h1>

            <h2
              className="hero-rise text-fluid-hero mt-1 font-display font-semibold text-muted-foreground"
              style={{ animationDelay: "80ms" }}
            >
              Full Stack Developer
            </h2>

            <p
              className="hero-rise text-fluid-sm mt-5 text-muted-foreground"
              style={{ animationDelay: "120ms" }}
            >
              been building products for <LiveYearsCounter /> years
            </p>

            <p
              className="hero-rise text-fluid-lead mt-6 max-w-2xl text-foreground"
              style={{ animationDelay: "160ms" }}
            >
              Building modern web applications with React, Node.js, MongoDB, and TypeScript.
            </p>

            <p
              className="hero-rise text-fluid-body mt-3 max-w-2xl text-muted-foreground"
              style={{ animationDelay: "200ms" }}
            >
              Currently building useful products, exploring modern web technologies, and looking for
              opportunities to create impactful software.
            </p>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-[clamp(0.5rem,1.5vw,0.75rem)]"
              style={{ animationDelay: "260ms" }}
            >
              <Link
                to="/projects"
                className="btn-fluid group inline-flex items-center justify-center gap-2 rounded-full bg-foreground font-medium text-background transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                View Projects
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={contact.resume}
                target="_blank"
                className="btn-fluid inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Download size={15} /> Download Resume
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="btn-fluid inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>

          {/* Right: orbit illustration (desktop only, >750px) */}
          <div className="hero-illustration hero-rise" style={{ animationDelay: "160ms" }}>
            <OrbitIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
