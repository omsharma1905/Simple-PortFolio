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
import { contact, skills } from "@/lib/portfolio-data";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://omsharma.in/#website",
      "url": "https://omsharma.in/",
      "name": "Om Sharma",
      "alternateName": "Om Sharma Portfolio",
      "description":
        "Explore Om Sharma's portfolio featuring software development, AI-powered applications, full-stack projects, technical experiments, and innovative digital products.",
      "inLanguage": "en-IN",
      "author": {
        "@id": "https://omsharma.in/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://omsharma.in/#profilepage",
      "url": "https://omsharma.in/",
      "name": "Om Sharma | Software Developer & AI Project Builder",
      "description":
        "Explore Om Sharma's portfolio featuring software development, AI-powered applications, full-stack projects, technical experiments, and innovative digital products.",
      "inLanguage": "en-IN",
      "mainEntity": {
        "@id": "https://omsharma.in/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://omsharma.in/#person",
      "name": "Om Sharma",
      "url": "https://omsharma.in/",
      "jobTitle": "Full Stack Developer",
      "description":
        "Full Stack Developer building modern web applications with React, Node.js, MongoDB, and TypeScript.",
      "sameAs": [contact.github, contact.linkedin, contact.twitter],
      "knowsAbout": skills,
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Om Sharma | Software Developer & AI Project Builder" },
      {
        name: "description",
        content:
          "Explore Om Sharma's portfolio featuring software development, AI-powered applications, full-stack projects, technical experiments, and innovative digital products.",
      },
      {
        property: "og:title",
        content: "Om Sharma | Software Developer & AI Project Builder",
      },
      {
        property: "og:description",
        content:
          "Explore Om Sharma's portfolio featuring software development, AI-powered applications, full-stack projects, technical experiments, and innovative digital products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://omsharma.in/" },
      { property: "og:site_name", content: "Om Sharma" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Om Sharma | Software Developer & AI Project Builder",
      },
      {
        name: "twitter:description",
        content:
          "Explore Om Sharma's portfolio featuring software development, AI-powered applications, full-stack projects, technical experiments, and innovative digital products.",
      },
      { name: "twitter:creator", content: "@bugdev01" },
      { name: "twitter:site", content: "@bugdev01" },
    ],
    links: [{ rel: "canonical", href: "https://omsharma.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homeJsonLd),
      },
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
