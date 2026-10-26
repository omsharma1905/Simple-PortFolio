import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { FloatingNavbar } from "@/components/portfolio/FloatingNavbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { FeaturedWork } from "@/components/portfolio/FeaturedWork";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Om Sharma — Full Stack Developer" },
      {
        name: "description",
        content:
          "Om Sharma is a Full Stack Developer building modern web applications with React, Node.js, MongoDB, and TypeScript.",
      },
      { property: "og:title", content: "Om Sharma — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Om Sharma — Full Stack Developer building useful products with the MERN stack and TypeScript.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Skills />
        <Experience />
        <CTA />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
