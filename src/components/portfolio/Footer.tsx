export function Footer() {
  return (
    <footer className="pb-[clamp(6rem,14vw,7.5rem)] pt-6">
      <div className="container-portfolio">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="text-fluid-xs text-muted-foreground">
            © {new Date().getFullYear()} Om Sharma. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="text-fluid-xs text-muted-foreground">
            <span>Inspired by </span>
            <a
              href="https://amritwt.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-baseline underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Amrit Rai
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}