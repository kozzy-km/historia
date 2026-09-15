import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, EyeOff, RotateCcw, CalendarDays } from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Reveal } from "./ui";
import { fechas } from "../data/content";

type Mode = "ver" | "fechas" | "eventos";

export function Fechas() {
  const [mode, setMode] = useState<Mode>("ver");
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setRevealed((prev) => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });

  const setModeAndReset = (m: Mode) => {
    setMode(m);
    setRevealed(new Set());
  };

  return (
    <Section id="fechas" tone="white">
      <SectionHeader
        number="08"
        eyebrow="Fechas"
        title={
          <>
            Fechas que tenés que saber <span className="text-cel-600">sí o sí</span>
          </>
        }
        lead="Primero leelas. Después activá el modo memoria: se tapa una columna y vos tenés que acordarte antes de destapar."
      />

      <Reveal>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-full border border-ink/10 bg-paper p-1">
            {(
              [
                { id: "ver", label: "Ver todo", icon: Eye },
                { id: "fechas", label: "Tapar fechas", icon: EyeOff },
                { id: "eventos", label: "Tapar eventos", icon: EyeOff },
              ] as { id: Mode; label: string; icon: typeof Eye }[]
            ).map((m) => (
              <button
                key={m.id}
                onClick={() => setModeAndReset(m.id)}
                className={clsx(
                  "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  mode === m.id ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {mode === m.id && (
                  <motion.span layoutId="fechas-mode" className="absolute inset-0 rounded-full bg-white shadow-soft ring-1 ring-ink/8" />
                )}
                <m.icon size={14} className="relative" />
                <span className="relative">{m.label}</span>
              </button>
            ))}
          </div>
          {mode !== "ver" && (
            <button
              onClick={() => setRevealed(new Set())}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink hover:bg-paper"
            >
              <RotateCcw size={14} /> Tapar de nuevo
            </button>
          )}
        </div>
      </Reveal>

      <Reveal>
        <div className="card overflow-hidden">
          <div className="grid grid-cols-[minmax(150px,1fr)_2fr] border-b border-ink/8 bg-paper px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted sm:grid-cols-[220px_1fr]">
            <span className="flex items-center gap-2">
              <CalendarDays size={14} /> Fecha
            </span>
            <span>Acontecimiento</span>
          </div>
          <ul className="divide-y divide-ink/6">
            {fechas.map((f, i) => {
              const hideDate = mode === "fechas" && !revealed.has(i);
              const hideEvent = mode === "eventos" && !revealed.has(i);
              const isKey = f.date.includes("mayo") || f.date.includes("julio");
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => mode !== "ver" && toggle(i)}
                  className={clsx(
                    "grid grid-cols-[minmax(150px,1fr)_2fr] items-center px-5 py-3.5 transition-colors sm:grid-cols-[220px_1fr]",
                    mode !== "ver" && "cursor-pointer hover:bg-paper/70",
                    isKey && "bg-sun-100/40",
                  )}
                >
                  <Cell hidden={hideDate}>
                    <span className={clsx("font-serif text-lg font-semibold tabular-nums", isKey ? "text-cel-700" : "text-ink")}>
                      {f.date}
                    </span>
                  </Cell>
                  <Cell hidden={hideEvent}>
                    <span className="text-[15px] font-medium text-ink-2">{f.event}</span>
                  </Cell>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

function Cell({ hidden, children }: { hidden: boolean; children: React.ReactNode }) {
  return (
    <div className="relative min-h-[28px]">
      <AnimatePresence initial={false}>
        {hidden ? (
          <motion.div
            key="mask"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="absolute inset-y-0 left-0 flex w-[85%] items-center rounded-lg bg-ink/90 px-3 text-[11px] font-bold uppercase tracking-wider text-white/70"
          >
            Tocá para ver
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
