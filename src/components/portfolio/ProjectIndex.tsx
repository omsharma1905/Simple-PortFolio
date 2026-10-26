
import { useState, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

type Detail = {
  tagline: string;
  about: string;
  features: string[];
  challenge: string;
  learned: string;
};

const details: Record<string, Detail> = {
  VizPilot: {
    tagline: "A data visualization platform for turning raw data into insight.",
    about:
      "VizPilot is a data visualization dashboard that transforms raw business data into meaningful, interactive visualizations. It supports multiple data formats, automatically profiles datasets, recommends suitable visualization formats, and renders charts through a deterministic visualization engine.",
    features: [
      "CSV, XLSX, PDF & DOCX data ingestion",
      "Automatic dataset profiling",
      "Intelligent visualization recommendations",
      "Support for multiple visualization formats",
      "Deterministic visualization engine",
      "Interactive charts powered by ECharts",
    ],
    challenge:
      "Building a reliable pipeline that could handle different dataset structures, understand the characteristics of the data, recommend suitable visualizations, and keep the final rendering deterministic and predictable.",
    learned:
      "Data profiling, visualization intelligence, deterministic rendering, schema validation, ECharts, and designing modular data-processing pipelines.",
  },

  CampusFix: {
    tagline: "A smart campus infrastructure and maintenance platform.",
    about:
      "CampusFix is a centralized platform for managing campus infrastructure, assets, complaints, departments, technicians, and maintenance operations. It is designed to replace fragmented manual complaint workflows while creating a foundation for smarter and predictive campus maintenance.",
    features: [
      "Centralized campus asset management",
      "QR-based asset identity",
      "Complaint lifecycle tracking",
      "Technician work queues",
      "Campus hierarchy & department management",
      "Maintenance analytics",
    ],
    challenge:
      "Designing the platform as more than a complaint-management system by creating a scalable architecture that can support organizations, campuses, departments, assets, users, roles, and future predictive maintenance capabilities.",
    learned:
      "Layered architecture, domain-driven feature organization, authentication foundations, repository patterns, role-based access concepts, and designing scalable SaaS systems.",
  },

  "Multi-Agent Travel Planner": {
    tagline: "A collaborative AI system for planning complete trips.",
    about:
      "A multi-agent travel planning system where specialized AI agents collaborate to turn a travel request into a structured and personalized itinerary. Each agent can focus on a specific part of the planning process, with their outputs coordinated into a single travel plan.",
    features: [
      "Multi-agent travel planning",
      "Specialized agents for different planning tasks",
      "Collaborative itinerary generation",
      "Structured travel recommendations",
      "Personalized trip planning",
      "End-to-end travel planning workflow",
    ],
    challenge:
      "Coordinating multiple specialized agents while keeping their outputs consistent, useful, and aligned with the original travel requirements.",
    learned:
      "Multi-agent system design, agent orchestration, structured outputs, prompt engineering, and coordinating specialized AI workflows.",
  },
};

const displayName: Record<string, string> = {
  VizPilot: "VIZPILOT",
  CampusFix: "CAMPUSFIX",
  "Multi-Agent Travel Planner": "MULTI-AGENT TRAVEL PLANNER",
};

export function ProjectIndex() {
  const [open, setOpen] = useState<string | null>(null);
  const uid = useId();

  return (
    <div className="relative">
      <div className="border-t border-border">
        {projects.map((p) => {
          const d = details[p.name];
          const isOpen = open === p.name;
          const panelId = `${uid}-${p.number}`;

          return (
            <div key={p.number} className="border-b border-border">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : p.name)}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-[clamp(0.75rem,3vw,2rem)] py-[clamp(1.5rem,4vw,2.5rem)] text-left transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link/50 sm:grid-cols-[3.5rem_1fr_auto]"
              >
                <span className="text-fluid-sm pt-1 font-display tabular-nums text-muted-foreground">
                  {p.number}
                </span>

                <span className="min-w-0">
                  <span className="text-fluid-h2 block font-display font-semibold tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground group-focus-visible:text-foreground">
                    {displayName[p.name] ?? p.name.toUpperCase()}
                  </span>

                  <span className="text-fluid-body mt-2 block max-w-md text-muted-foreground">
                    {d?.tagline}
                  </span>

                  <span className="text-fluid-xs mt-3 block text-muted-foreground">
                    {p.tech.join(" · ")}
                  </span>

                  {p.status === "Active" ? (
                    <span className="text-fluid-xs mt-3 inline-flex items-center gap-1.5 text-link">
                      <span className="h-1.5 w-1.5 rounded-full bg-link" />
                      active
                    </span>
                  ) : null}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                  }}
                  className="mt-2 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                >
                  <ArrowRight size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && d ? (
                  <motion.div
                    id={panelId}
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 26,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-[2.5rem_1fr] gap-[clamp(0.75rem,3vw,2rem)] pb-[clamp(2rem,5vw,3rem)] sm:grid-cols-[3.5rem_1fr]">
                      <div aria-hidden="true" />

                      <div className="min-w-0">
                        <Block title="About">
                          <p className="text-fluid-sm text-muted-foreground">
                            {d.about}
                          </p>
                        </Block>

                        <Block title="Built with">
                          <p className="text-fluid-sm text-foreground">
                            {p.tech.join(" · ")}
                          </p>
                        </Block>

                        <Block title="Key features">
                          <ul className="text-fluid-sm space-y-1.5 text-muted-foreground">
                            {d.features.map((feature) => (
                              <li key={feature} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </Block>

                        <Block title="Challenge">
                          <p className="text-fluid-sm text-muted-foreground">
                            {d.challenge}
                          </p>
                        </Block>

                        <Block title="What I learned">
                          <p className="text-fluid-sm text-muted-foreground">
                            {d.learned}
                          </p>
                        </Block>

                        <div className="mt-7 flex flex-wrap items-center gap-5">
                          <a
                            href={p.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                          >
                            Live Demo <ArrowUpRight size={14} />
                          </a>

                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                          >
                            <Github size={14} />
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-7">
      <div className="text-fluid-xs mb-2 font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
        {title}
      </div>
      {children}
    </div>
  );
}