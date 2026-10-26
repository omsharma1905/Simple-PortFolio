import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { contact } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="container-portfolio">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#EC4899]" />
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#EC4899]">
              Contact
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1] tracking-[-0.03em] text-foreground">
            Let's build something <span className="text-[#EC4899]">great</span> together.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Have a project in mind, an opportunity to share, or just want to say hi? My inbox is
            always open.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} copy />
          <ContactRow label="GitHub" value="github.com/omsharma" href={contact.github} />
          <ContactRow label="LinkedIn" value="linkedin.com/in/omsharma" href={contact.linkedin} />
          <ContactRow label="Resume" value="Download PDF" href={contact.resume} />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  copy = false,
}: {
  label: string;
  value: string;
  href: string;
  copy?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy");
    }
  };

  return (
    <div className="group flex items-center justify-between gap-4 py-6 md:py-7">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-10">
        <div className="w-24 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="link-underline text-lg text-foreground md:text-xl"
        >
          {value}
        </a>
      </div>
      <div className="flex items-center gap-2">
        {copy ? (
          <button
            onClick={handleCopy}
            aria-label="Copy"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
          </button>
        ) : null}
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={`Open ${label}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
        >
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
