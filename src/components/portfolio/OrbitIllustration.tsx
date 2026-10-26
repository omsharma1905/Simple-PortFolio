import { motion, useReducedMotion } from "framer-motion";

const orbitItems = [
  { label: "<>", angle: 0, radius: 43, highlight: true },
  { label: "{ }", angle: 120, radius: 43 },
  { label: "/>", angle: 240, radius: 43 },
];

const particles = [
  { x: 18, y: 28, size: 2 },
  { x: 82, y: 22, size: 1.5 },
  { x: 88, y: 70, size: 2 },
  { x: 16, y: 76, size: 1.5 },
  { x: 67, y: 10, size: 1.5 },
  { x: 32, y: 91, size: 2 },
];

export function OrbitIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const infinite = {
    repeat: Infinity,
    ease: "linear" as const,
  };

  return (
    <motion.div
      aria-hidden
      className="
        relative mx-auto aspect-square
        w-[clamp(150px,36vw,240px)]
        select-none
      "
      animate={
        shouldReduceMotion
          ? undefined
          : { y: [0, -8, 0] }
      }
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Ambient glow */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[38%] w-[38%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[var(--color-link)]
          opacity-[0.06]
          blur-2xl
        "
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [0.9, 1.15, 0.9], opacity: [0.04, 0.08, 0.04] }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer orbit */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={
          shouldReduceMotion
            ? undefined
            : { rotate: 360 }
        }
        transition={{
          duration: 32,
          ...infinite,
        }}
      >
        <defs>
          <linearGradient
            id="outerOrbitGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-link)"
              stopOpacity="0.7"
            />
            <stop
              offset="45%"
              stopColor="var(--color-border)"
              stopOpacity="0.2"
            />
            <stop
              offset="100%"
              stopColor="var(--color-muted-foreground)"
              stopOpacity="0.5"
            />
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r="91"
          fill="none"
          stroke="url(#outerOrbitGradient)"
          strokeWidth="0.8"
          strokeDasharray="1 7"
          opacity="0.8"
        />

        {/* Outer nodes */}
        <circle
          cx="100"
          cy="9"
          r="3.2"
          fill="var(--color-link)"
        />

        <circle
          cx="191"
          cy="100"
          r="2"
          fill="var(--color-muted-foreground)"
          opacity="0.7"
        />

        <circle
          cx="36"
          cy="35"
          r="1.8"
          fill="var(--color-link)"
          opacity="0.5"
        />
      </motion.svg>

      {/* Middle orbit */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={
          shouldReduceMotion
            ? undefined
            : { rotate: -360 }
        }
        transition={{
          duration: 23,
          ...infinite,
        }}
      >
        <ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="55"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="0.8"
          opacity="0.75"
        />

        <circle
          cx="100"
          cy="45"
          r="2.4"
          fill="var(--color-muted-foreground)"
          opacity="0.7"
        />

        <circle
          cx="30"
          cy="100"
          r="2.4"
          fill="var(--color-link)"
          opacity="0.65"
        />
      </motion.svg>

      {/* Inner orbit */}
      <motion.div
        className="absolute inset-[18%] rounded-full border border-border/50"
        animate={
          shouldReduceMotion
            ? undefined
            : { rotate: 360 }
        }
        transition={{
          duration: 18,
          ...infinite,
        }}
      >
        <span
          className="
            absolute -right-1 top-1/2
            h-1.5 w-1.5
            -translate-y-1/2
            rounded-full
            bg-[var(--color-link)]
            shadow-[0_0_10px_var(--color-link)]
          "
        />
      </motion.div>

      {/* Floating code symbols */}
      <motion.div
        className="absolute inset-0"
        animate={
          shouldReduceMotion
            ? undefined
            : { rotate: 360 }
        }
        transition={{
          duration: 26,
          ...infinite,
        }}
      >
        {orbitItems.map((item) => {
          const rad = (item.angle * Math.PI) / 180;

          const x =
            50 + item.radius * Math.cos(rad - Math.PI / 2);

          const y =
            50 + item.radius * Math.sin(rad - Math.PI / 2);

          return (
            <motion.span
              key={item.label}
              className="
                absolute
                flex items-center justify-center
                font-display
                text-[clamp(10px,2.5vw,13px)]
                font-semibold
              "
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                color: item.highlight
                  ? "var(--color-link)"
                  : "var(--color-muted-foreground)",
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : { rotate: -360 }
              }
              transition={{
                duration: 26,
                ...infinite,
              }}
            >
              <span
                className={
                  item.highlight
                    ? "drop-shadow-[0_0_8px_var(--color-link)]"
                    : ""
                }
              >
                {item.label}
              </span>
            </motion.span>
          );
        })}
      </motion.div>

      {/* Micro particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="
            absolute rounded-full
            bg-[var(--color-muted-foreground)]
          "
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.15, 0.7, 0.15],
                  scale: [0.7, 1.2, 0.7],
                }
          }
          transition={{
            duration: 2.5 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
        />
      ))}

      {/* Center system */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="
            relative
            flex
            h-[clamp(3.25rem,9vw,4rem)]
            w-[clamp(3.25rem,9vw,4rem)]
            items-center
            justify-center
            rounded-full
            border
            border-border
            bg-surface/70
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            backdrop-blur-md
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.045, 1],
                }
          }
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner ring */}
          <span
            className="
              absolute inset-[5px]
              rounded-full
              border
              border-[var(--color-link)]
              opacity-20
            "
          />

          {/* Center dot */}
          <span
            className="
              absolute
              top-1/2 left-1/2
              h-1
              w-1
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[var(--color-link)]
              opacity-70
            "
          />

          <span className="relative font-display text-sm font-semibold tracking-tight text-foreground">
            OS
          </span>
        </motion.div>
      </div>

      {/* Tiny orbit label */}
      <span
        className="
          absolute
          bottom-[4%]
          left-1/2
          -translate-x-1/2
          font-mono
          text-[8px]
          uppercase
          tracking-[0.28em]
          text-muted-foreground/50
        "
      >
        build · create · ship
      </span>
    </motion.div>
  );
}