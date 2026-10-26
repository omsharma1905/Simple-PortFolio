import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLocation, useNavigate } from "@tanstack/react-router";
import {
  Home,
  User,
  FolderGit2,
  Wrench,
  Briefcase,
  Github,
  Linkedin,
  Moon,
  Sun,
} from "lucide-react";
import { contact } from "@/lib/portfolio-data";

type SectionId = "hero" | "about" | "projects" | "skills" | "experience";

type SectionItem = {
  type: "section";
  id: SectionId;
  label: string;
  Icon: typeof Home;
};

type LinkItem = {
  type: "link";
  id: string;
  label: string;
  href: string;
  Icon: typeof Home;
  external?: boolean;
};

type ToggleItem = { type: "toggle"; id: "theme"; label: string };

type Item = SectionItem | LinkItem | ToggleItem;

const groups: Item[][] = [
  [
    { type: "section", id: "hero", label: "Home", Icon: Home },
    { type: "section", id: "about", label: "About", Icon: User },
    { type: "section", id: "projects", label: "Projects", Icon: FolderGit2 },
    { type: "section", id: "skills", label: "Skills", Icon: Wrench },
    { type: "section", id: "experience", label: "Experience", Icon: Briefcase },
  ],
  [
    {
      type: "link",
      id: "github",
      label: "GitHub",
      href: contact.github,
      Icon: Github,
      external: true,
    },
    {
      type: "link",
      id: "linkedin",
      label: "LinkedIn",
      href: contact.linkedin,
      Icon: Linkedin,
      external: true,
    },
  ],
  [{ type: "toggle", id: "theme", label: "Toggle theme" }],
];

function Tooltip({ label, visible }: { label: string; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.span
          role="tooltip"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-xs font-medium text-[#111827] shadow-[0_6px_20px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
        >
          {label}
        </motion.span>
      ) : null}
    </AnimatePresence>
  );
}

function NavbarItem({
  label,
  active,
  onClick,
  href,
  external,
  children,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  children: ReactNode;
}) {
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const showTip = hover || focused;

  const common =
    "relative inline-flex h-[clamp(2.375rem,9vw,2.75rem)] w-[clamp(2.375rem,9vw,2.75rem)] items-center justify-center rounded-full text-white/75 outline-none transition-colors duration-200 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60";

  const inner = (
    <>
      <AnimatePresence>
        {active ? (
          <motion.span
            layoutId="pill-active"
            className="absolute inset-0 rounded-full bg-white/15"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        ) : null}
      </AnimatePresence>
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-white/0"
        animate={{
          backgroundColor: hover && !active ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="relative z-[1] inline-flex"
        animate={{ scale: hover ? 1.08 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.span>
      <Tooltip label={label} visible={showTip} />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        aria-label={label}
        className={common}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={common}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {inner}
    </button>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isLight = saved === "light";
    setDark(!isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    // next=true means dark → remove light class
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <NavbarItem label={dark ? "Light mode" : "Dark mode"} onClick={toggle}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          {dark ? (
            <Sun
              size={18}
              className="h-[clamp(1rem,3.6vw,1.125rem)] w-[clamp(1rem,3.6vw,1.125rem)]"
            />
          ) : (
            <Moon
              size={18}
              className="h-[clamp(1rem,3.6vw,1.125rem)] w-[clamp(1rem,3.6vw,1.125rem)]"
            />
          )}
        </motion.span>
      </AnimatePresence>
    </NavbarItem>
  );
}

export function FloatingNavbar() {
  const [active, setActive] = useState<SectionId>("hero");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";
  const onProjects = location.pathname === "/projects";

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - lastY.current;
    if (y < 80) setHidden(false);
    else if (delta > 8) setHidden(true);
    else if (delta < -8) setHidden(false);
    lastY.current = y;
  });

  useEffect(() => {
    if (!onHome) {
      setActive(onProjects ? "projects" : "hero");
      return;
    }
    const ids: SectionId[] = ["hero", "about", "projects", "skills", "experience"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [onHome, onProjects]);

  const scrollTo = (id: SectionId) => {
    if (id === "projects") {
      if (!onProjects) navigate({ to: "/projects" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!onHome) {
      navigate({ to: "/", hash: id === "hero" ? undefined : id });
      if (id === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 24 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="fixed bottom-[clamp(1rem,3vw,1.75rem)] left-1/2 z-[60] -translate-x-1/2"
      role="navigation"
      aria-label="Primary"
    >
      <div
        className="flex max-w-[calc(100vw-1.5rem)] items-center gap-[clamp(0rem,0.4vw,0.25rem)] rounded-full border border-white/10 bg-[rgba(15,15,15,0.82)] px-[clamp(0.375rem,1.5vw,0.75rem)] py-[clamp(0.375rem,1.2vw,0.5rem)] shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
        style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      >
        {groups.map((group, gi) => (
          <div key={gi} className="flex items-center gap-[clamp(0rem,0.4vw,0.25rem)]">
            {group.map((item) => {
              if (item.type === "section") {
                const Icon = item.Icon;
                return (
                  <NavbarItem
                    key={item.id}
                    label={item.label}
                    active={active === item.id}
                    onClick={() => scrollTo(item.id)}
                  >
                    <Icon
                      size={18}
                      className="h-[clamp(1rem,3.6vw,1.125rem)] w-[clamp(1rem,3.6vw,1.125rem)]"
                    />
                  </NavbarItem>
                );
              }
              if (item.type === "link") {
                const Icon = item.Icon;
                return (
                  <NavbarItem
                    key={item.id}
                    label={item.label}
                    href={item.href}
                    external={item.external}
                  >
                    <Icon
                      size={18}
                      className="h-[clamp(1rem,3.6vw,1.125rem)] w-[clamp(1rem,3.6vw,1.125rem)]"
                    />
                  </NavbarItem>
                );
              }
              return <ThemeToggle key={item.id} />;
            })}
            {gi < groups.length - 1 ? (
              <span
                aria-hidden
                className="mx-[clamp(0.125rem,0.8vw,0.375rem)] h-5 w-px bg-white/10"
              />
            ) : null}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
