import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type DnaItem = {
  id: string;
  marker: string;
  label: string;
  statement: string;
  details: string[];
};

const dna: DnaItem[] = [
  {
    id: "build",
    marker: "BUILD",
    label: "I build",
    statement: "real-world products.",
    details: ["Productivity platforms", "Role-based dashboards", "Full-stack web applications"],
  },
  {
    id: "stack",
    marker: "STACK",
    label: "I use",
    statement: "React · TypeScript · Node.js · Express · MongoDB",
    details: [
      "Started with HTML, CSS and JavaScript",
      "Grew into React and TypeScript",
      "Now shipping end to end on the MERN stack",
    ],
  },
  {
    id: "think",
    marker: "THINK",
    label: "I care about",
    statement: "clean code, useful experiences, real problems.",
    details: [
      "Code the next person can pick up",
      "Interfaces that stay out of the way",
      "Edge cases treated as features",
    ],
  },
  {
    id: "currently",
    marker: "NOW",
    label: "Currently",
    statement: "building Some more Projects.",
    details: [
      "SafariX — a multi-agent journey planner",
      "VizPilot — a interactive data visualisation dashboard",
      "CampusFix AI — A Smart Campus Asset Management and Predictive Maintenance System",
      "Learning by shipping, not by tutorials",
    ],
  },
  {
    id: "next",
    marker: "NEXT",
    label: "Looking for",
    statement: "opportunities to build, contribute, and grow.",
    details: [
      "Full Stack Developer roles",
      "Teams that ship useful software",
      "Work worth showing up for",
    ],
  },
];

export function About() {
  const [active, setActive] = useState<string>("build");

  return (
    <section id="about" className="section-pad">
      <div className="container-portfolio">
        <SectionHeading eyebrow="About" title="Developer DNA." accent="orange" />

        <div className="flex gap-[clamp(1rem,3vw,1.75rem)]">
          {/* Signal rail */}
          <div aria-hidden className="relative flex w-3 shrink-0 flex-col items-center pt-[0.6em]">
            <span className="absolute top-[0.9em] bottom-[0.9em] w-px bg-border" />
            {dna.map((item) => {
              const isActive = item.id === active;
              return (
                <div key={item.id} className="relative flex flex-1 justify-center">
                  <span
                    className={`mt-[0.55em] h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "scale-150 bg-link" : "bg-muted-foreground/50"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          <ul className="flex-1 space-y-[clamp(1.25rem,3vw,2rem)]">
            {dna.map((item, i) => {
              const isActive = item.id === active;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-label={`${item.label} ${item.statement}`}
                    onMouseEnter={() => setActive(item.id)}
                    onFocus={() => setActive(item.id)}
                    onClick={() => setActive(item.id)}
                    className={`group block w-full cursor-pointer rounded-sm text-left transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link ${
                      isActive ? "opacity-100" : "opacity-55 hover:opacity-100"
                    }`}
                  >
                    <span className="text-fluid-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </span>

                    <span className="text-fluid-h3 mt-1 block font-display font-semibold text-foreground">
                      {item.statement}
                    </span>

                    <span
                      className={`mt-2 block h-px origin-left bg-link transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          key="details"
                          className="block overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <span className="text-fluid-sm mt-3 block space-y-1 text-muted-foreground">
                            {item.details.map((d) => (
                              <span key={d} className="block">
                                {d}
                              </span>
                            ))}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
