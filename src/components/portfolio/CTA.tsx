import { motion } from "framer-motion";
import { contact } from "@/lib/portfolio-data";

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="section-pad">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span
            aria-hidden
            className="mb-6 inline-block h-1.5 w-10 rounded-full bg-foreground/15"
          />
          <h2 id="cta-heading" className="text-fluid-h3 text-balance font-semibold text-foreground">
            Let&apos;s build something amazing together.
          </h2>
          <p className="text-fluid-sm mt-4 max-w-md text-muted-foreground">
            Say hello on{" "}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="story-link cursor-pointer text-link transition-colors hover:text-link-hover"
            >
              LinkedIn
            </a>{" "}
            or connect with me on{" "}
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="story-link cursor-pointer text-link transition-colors hover:text-link-hover"
            >
              X
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
