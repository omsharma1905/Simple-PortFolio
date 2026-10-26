import type { AccentKey } from "@/lib/portfolio-data";
import { accentClasses } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow?: string;
  title: string;
  accent: AccentKey;
}) {
  const a = accentClasses[accent];
  return (
    <Reveal className="mb-[clamp(1.75rem,4vw,2.5rem)]">
      {eyebrow ? (
        <div className="mb-3 flex items-center gap-3">
          <span className={`h-2 w-2 rounded-full ${a.dot}`} />
          <span className={`text-fluid-xs font-medium uppercase tracking-[0.18em] ${a.text}`}>
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="text-fluid-h2 font-display font-semibold text-foreground">{title}</h2>
    </Reveal>
  );
}
