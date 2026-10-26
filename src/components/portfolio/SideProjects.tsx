import { Github } from "lucide-react";
import { sideProjects } from "@/lib/portfolio-data";

export function SideProjects() {
  return (
    <div className="border-t border-border">
      {sideProjects.map((p, i) => (
        <div
          key={p.id}
          className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-[clamp(0.75rem,3vw,2rem)] border-b border-border py-[clamp(1rem,2.5vw,1.4rem)] sm:grid-cols-[3.5rem_1fr_auto]"
        >
          <span className="text-fluid-xs pt-1 font-display tabular-nums text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0">
            <div className="text-fluid-body flex flex-wrap items-center gap-2 font-medium text-foreground">
              {p.name}

              {p.status === "in-progress" ? (
                <span className="text-fluid-xs inline-flex items-center gap-1.5 text-link">
                  <span className="h-1.5 w-1.5 rounded-full bg-link" />
                  in progress
                </span>
              ) : null}
            </div>

            <p className="text-fluid-sm mt-1 text-muted-foreground">
              {p.description}
            </p>

            <p className="text-fluid-xs mt-1.5 text-muted-foreground/80">
              {p.technologies.join(" · ")}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-1">
            {p.githubUrl ? (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} source code`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github size={16} />
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}