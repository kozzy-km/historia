import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { clsx } from "clsx";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "paper",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "white" | "ink";
}) {
  return (
    <section
      id={id}
      className={clsx(
        "relative scroll-mt-20 py-20 sm:py-28",
        tone === "white" && "bg-white",
        tone === "ink" && "bg-ink text-white",
        className,
      )}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  number,
  eyebrow,
  title,
  lead,
  dark,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-12 max-w-3xl sm:mb-16">
      <div className="mb-4 flex items-center gap-3">
        <span
          className={clsx(
            "font-serif text-sm font-semibold tabular-nums",
            dark ? "text-sun-400" : "text-sun-600",
          )}
        >
          {number}
        </span>
        <span className={clsx("h-px w-10", dark ? "bg-white/20" : "bg-ink/15")} />
        <span className={clsx("eyebrow", dark && "!text-cel-300")}>{eyebrow}</span>
      </div>
      <h2
        className={clsx(
          "h-display text-3xl leading-[1.1] sm:text-5xl",
          dark && "!text-white",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={clsx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-ink-2",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export function Callout({
  icon,
  title,
  children,
  tone = "sun",
  className,
}: {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
  tone?: "sun" | "cel" | "rose" | "leaf";
  className?: string;
}) {
  const tones = {
    sun: "border-sun-400/40 bg-sun-100/70 text-ink",
    cel: "border-cel-300/60 bg-cel-50 text-ink",
    rose: "border-rose-ink/30 bg-[#fdf0f1] text-ink",
    leaf: "border-leaf/30 bg-[#eef7f1] text-ink",
  };
  return (
    <div className={clsx("rounded-2xl border px-5 py-4", tones[tone], className)}>
      <div className="flex gap-3">
        {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
        <div className="min-w-0">
          {title && <p className="mb-1 text-sm font-bold">{title}</p>}
          <div className="text-[15px] leading-relaxed text-ink-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Tag({
  children,
  color = "cel",
  className,
}: {
  children: ReactNode;
  color?: "cel" | "sun" | "rose" | "leaf" | "ink";
  className?: string;
}) {
  const colors = {
    cel: "bg-cel-100 text-cel-800",
    sun: "bg-sun-100 text-sun-600",
    rose: "bg-[#fbe4e7] text-rose-ink",
    leaf: "bg-[#e2f2e8] text-leaf",
    ink: "bg-ink text-white",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
        colors[color],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Sun({ className }: { className?: string }) {
  // Sol estilizado (decorativo)
  const rays = Array.from({ length: 32 });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g transform="translate(100 100)">
        {rays.map((_, i) => {
          const a = (i * 360) / rays.length;
          const straight = i % 2 === 0;
          return (
            <g key={i} transform={`rotate(${a})`}>
              {straight ? (
                <polygon points="0,-46 4,-88 -4,-88" fill="currentColor" />
              ) : (
                <path d="M0,-46 C6,-60 -6,-74 2,-86 L-2,-86 C-8,-74 4,-60 0,-46 Z" fill="currentColor" />
              )}
            </g>
          );
        })}
        <circle r="38" fill="currentColor" />
      </g>
    </svg>
  );
}
