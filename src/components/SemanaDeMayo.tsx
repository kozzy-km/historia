import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Key, Play, Pause } from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Reveal, Callout } from "./ui";
import { semanaDeMayo } from "../data/content";

export function SemanaDeMayo() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const step = semanaDeMayo[idx];

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % semanaDeMayo.length), 4500);
    return () => clearInterval(t);
  }, [playing]);

  return (
    <Section id="semana" tone="white">
      <SectionHeader
        number="03"
        eyebrow="Semana de Mayo"
        title={
          <>
            Del 18 al 25 de mayo de 1810, <span className="text-cel-600">día por día</span>
          </>
        }
        lead="La Semana de Mayo fue la serie de acontecimientos ocurridos en Buenos Aires entre el 18 y el 25 de mayo de 1810. Recorré los días clave con las flechas o dejalo en automático."
      />

      <Reveal>
        <div className="card overflow-hidden">
          {/* Selector de días */}
          <div className="border-b border-ink/8 bg-paper px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-1 items-center gap-1 overflow-x-auto scrollbar-none sm:gap-2">
                {semanaDeMayo.map((d, i) => {
                  const active = i === idx;
                  const done = i < idx;
                  return (
                    <button
                      key={d.day}
                      onClick={() => {
                        setIdx(i);
                        setPlaying(false);
                      }}
                      className={clsx(
                        "group relative flex shrink-0 items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors",
                        active ? "bg-white shadow-soft ring-1 ring-ink/8" : "hover:bg-white/60",
                      )}
                    >
                      <span
                        className={clsx(
                          "grid h-10 w-10 place-items-center rounded-lg font-serif text-lg font-semibold transition-colors",
                          active
                            ? "bg-ink text-sun-400"
                            : done
                              ? "bg-cel-100 text-cel-700"
                              : "bg-white text-ink/50 ring-1 ring-ink/8",
                        )}
                      >
                        {d.day}
                      </span>
                      <span className="hidden sm:block">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">mayo</span>
                        <span className={clsx("block text-sm font-semibold", active ? "text-ink" : "text-ink/60")}>
                          {d.label}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setPlaying((p) => !p)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white text-ink hover:bg-paper-2"
                aria-label={playing ? "Pausar" : "Reproducir"}
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
            {/* barra progreso */}
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ink/8">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cel-400 to-cel-600"
                animate={{ width: `${((idx + 1) / semanaDeMayo.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="grid lg:grid-cols-[1fr_320px]">
            <div className="relative min-h-[300px] p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.day}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="mb-4 flex items-baseline gap-3">
                    <span className="font-serif text-6xl font-semibold leading-none text-cel-600 sm:text-7xl">{step.day}</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted">de mayo de 1810</span>
                  </div>
                  <h3 className="text-2xl font-bold text-ink sm:text-3xl">{step.title}</h3>
                  <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-2">{step.text}</p>
                  <div className="mt-6 inline-flex items-start gap-3 rounded-xl border border-sun-400/40 bg-sun-100/70 px-4 py-3">
                    <Key size={16} className="mt-0.5 shrink-0 text-sun-600" />
                    <p className="text-sm font-medium text-ink">{step.key}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center gap-2">
                <button
                  onClick={() => setIdx((i) => Math.max(0, i - 1))}
                  disabled={idx === 0}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink disabled:opacity-40"
                >
                  <ChevronLeft size={16} /> Anterior
                </button>
                <button
                  onClick={() => setIdx((i) => Math.min(semanaDeMayo.length - 1, i + 1))}
                  disabled={idx === semanaDeMayo.length - 1}
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
                >
                  Siguiente <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Panel lateral: el Cabildo Abierto */}
            <aside className="border-t border-ink/8 bg-paper p-6 lg:border-l lg:border-t-0">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">La cuestión central del 22</p>
              <p className="font-serif text-xl font-semibold leading-snug text-ink">
                ¿Debía seguir gobernando Cisneros si la autoridad española que lo había designado ya no existía?
              </p>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-white p-4 ring-1 ring-ink/8">
                  <p className="text-xs font-bold uppercase tracking-wider text-cel-600">Respuesta de la mayoría</p>
                  <p className="mt-1 text-sm text-ink-2">El poder debía volver al pueblo.</p>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-ink/8">
                  <p className="text-xs font-bold uppercase tracking-wider text-sun-600">Concepto</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Retroversión de la soberanía</p>
                  <p className="mt-1 text-sm text-ink-2">
                    Ante la ausencia de una autoridad legítima, la soberanía vuelve al pueblo.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout tone="cel" title="Cómo lo decís en el examen · ¿Qué pasó el 25 de mayo?">
          «Cisneros renunció y se formó la Primera Junta, el primer gobierno patrio de Buenos Aires.»
        </Callout>
      </Reveal>
    </Section>
  );
}
