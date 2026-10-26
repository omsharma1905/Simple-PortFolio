import { useEffect, useRef, useState } from "react";

const START_DATE = "2024-01-01";

function getYearsPassed(): string {
  const start = new Date(START_DATE).getTime();
  const now = Date.now();
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = (now - start) / msPerYear;
  return years.toFixed(8);
}

export function LiveYearsCounter() {
  const [mounted, setMounted] = useState(false);
  const [years, setYears] = useState("0.00000000");
  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    setYears(getYearsPassed());

    const tick = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current >= 80) {
        lastUpdateRef.current = timestamp;
        setYears(getYearsPassed());
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      } else {
        setYears(getYearsPassed());
        lastUpdateRef.current = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {mounted ? years : "0.00000000"}
    </span>
  );
}
