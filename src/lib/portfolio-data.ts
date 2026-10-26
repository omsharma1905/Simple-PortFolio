export type Project = {
  number: string;
  name: string;
  description: string;
  tech: string[];
  status: "Active" | "Completed";
  demoUrl: string;
  githubUrl: string;
  accent: AccentKey;
};

export type AccentKey = "blue" | "orange" | "pink" | "green" | "yellow";

export const accentClasses: Record<AccentKey, { text: string; bg: string; dot: string }> = {
  blue: { text: "text-muted-foreground", bg: "bg-foreground", dot: "bg-muted-foreground" },
  orange: { text: "text-muted-foreground", bg: "bg-foreground", dot: "bg-muted-foreground" },
  pink: { text: "text-muted-foreground", bg: "bg-foreground", dot: "bg-muted-foreground" },
  green: { text: "text-muted-foreground", bg: "bg-foreground", dot: "bg-muted-foreground" },
  yellow: { text: "text-muted-foreground", bg: "bg-foreground", dot: "bg-muted-foreground" },
};

export const projects: Project[] = [
  {
    number: "01",
    name: "VizPilot",
    description:
      "A data visualization platform that transforms raw business data into meaningful visualizations, with support for multiple data formats, automatic data profiling, visualization recommendations, and interactive charts.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ECharts"],
    status: "Active",
    demoUrl: "#",
    githubUrl: "https://github.com/omsharma1905/VizPilot",
    accent: "blue",
  },
  {
    number: "02",
    name: "CampusFix",
    description:
      "A smart campus infrastructure and maintenance platform for managing assets, complaints, departments, technicians, QR-based asset identity, maintenance workflows, and analytics.",
    tech: ["TanStack Start", "React", "TypeScript", "Tailwind CSS"],
    status: "Active",
    demoUrl: "#",
    githubUrl: "https://github.com/omsharma1905/CampusFix-AI",
    accent: "blue",
  },
  {
    number: "03",
    name: "Multi-Agent Travel Planner",
    description:
      "An AI-powered travel planning system where specialized agents collaborate to understand travel requirements, research different aspects of a trip, and build a structured personalized itinerary.",
    tech: ["Next.js", "React", "TypeScript", "AI"],
    status: "Active",
    demoUrl: "https://safarix-v2.vercel.app/",
    githubUrl: "https://github.com/omsharma1905/Multi-Agent-Travel-Planner",
    accent: "blue",
  },
];

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "REST APIs",
  "Python",
  "Java"
];

export const journey = [
  { year: "2025", items: ["HTML", "CSS", "JavaScript"], accent: "yellow" as AccentKey },
  {
    year: "2026",
    items: ["Git & GitHub", "React", "MERN Stack", "Full Stack Projects"],
    accent: "green" as AccentKey,
  },
];

export type SideProject = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: "completed" | "in-progress";
};

export const sideProjects: SideProject[] = [
  {
    id: "safarix",
    name: "SafariX",
    description:
      "An AI-powered travel planning platform that generates complete travel itineraries with destinations, hotels, restaurants, estimated costs, visiting hours, and location details in one place.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Google OAuth",
      "Google Places API",
      "Gemini API",
      "Firebase",
    ],
    githubUrl: "https://github.com/omsharma1905/SafariX",
    status: "completed",
  },

  {
    id: "eventora",
    name: "Eventora",
    description:
      "An AI-powered event management platform that provides a centralized place for organizers to publish events and users to discover, create, and manage events.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "Convex",
      "JWT",
    ],
    githubUrl: "https://github.com/omsharma1905/Eventora",
    status: "completed",
  },

  {
    id: "booknify-ai",
    name: "Booknify AI",
    description:
      "An AI-powered eBook generation platform that lets users create, edit, store, and download digital books with AI-assisted content generation and PDF/DOCX export.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "Google Gemini API",
    ],
    githubUrl: "https://github.com/omsharma1905/booknify-ai",
    status: "completed",
  },
];

export const contact = {
  email: "om.sharma@example.com",
  github: "https://github.com/omsharma1905",
  linkedin: "https://www.linkedin.com/in/om-sharma1905/",
  twitter: "https://x.com/bugdev01",
  resume: "/resume.pdf",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];