import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { FloatingNavbar } from "@/components/portfolio/FloatingNavbar";
import { Footer } from "@/components/portfolio/Footer";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Reveal } from "@/components/portfolio/Reveal";
import { ProjectIndex } from "@/components/portfolio/ProjectIndex";
import { SideProjects } from "@/components/portfolio/SideProjects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Om Sharma" },
      {
        name: "description",
        content:
          "A collection of products Om Sharma has built using modern web technologies — React, Node.js, MongoDB, and TypeScript.",
      },
      { property: "og:title", content: "Projects — Om Sharma" },
      {
        property: "og:description",
        content: "Selected work by Om Sharma — Full Stack Developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />
      <main>
        <section className="pt-[clamp(7rem,16vw,10rem)] pb-[clamp(2rem,5vw,3.5rem)]">
          <div className="container-portfolio">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-x-0.5"
                />
                Back to Home
              </Link>
            </motion.div>

            <SectionHeading eyebrow="Selected Work" title="Projects." accent="pink" />
            <Reveal>
              <p className="text-fluid-lead max-w-2xl text-muted-foreground">
                A few things I&apos;ve built, broken, rebuilt, and learned from.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-[clamp(3rem,7vw,4.5rem)]">
          <div className="container-portfolio">
            <ProjectIndex />
          </div>
        </section>

        <section className="pb-[clamp(5rem,12vw,8rem)]">
          <div className="container-portfolio">
            <SectionHeading eyebrow="Side Projects" title="Side Projects." accent="blue" />
            <Reveal className="mb-[clamp(1.5rem,3vw,2rem)]">
              <p className="text-fluid-sm max-w-2xl text-muted-foreground">
                Smaller experiments, ideas, and things I&apos;ve built along the way.
              </p>
            </Reveal>
            <SideProjects />
          </div>
        </section>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}