import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, Users, Info, Check } from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Reveal, Callout } from "./ui";
import { gobiernos } from "../data/content";

export function Gobiernos() {
  const [activeId, setActiveId] = useState(gobiernos[0].id);
  const active = gobiernos.find((g) => g.id === activeId)!;
  const activeIdx = gobiernos.findIndex((g) => g.id === activeId);

  return (
    <Section id="gobiernos" tone="white">
      <SectionHeader
        number="06"
        eyebrow="Gobiernos 1810 → 1816"
        title={
          <>
            Cómo cambió el gobierno <span className="text-cel-600">año a año</span>
          </>
        }
        lead="Después de la Primera Junta, el proceso siguió con distintas formas de gobierno hasta llegar a la independencia. Tocá cada etapa de la línea de tiempo."
      />

      {/* Línea de tiempo horizontal */}
      <Reveal>
        <div className="relative mb-8">
          <div className="absolute left-0 right-0 top-[22px] hidden h-0.5 bg-ink/10 md:block" />
          <motion.div
            className="absolute left-0 top-[22px] hidden h-0.5 bg-gradient-to-r from-cel-500 to-sun-400 md:block"
            animate={{ width: `${(activeIdx / (gobiernos.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 160, damping: 26 }}
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {gobiernos.map((g, i) => {
              const isActive = g.id === activeId;
              const done = i < activeIdx;
              return (
                <button key={g.id} onClick={() => setActiveId(g.id)} className="group relative text-left md:text-center">
                  <span
                    className={clsx(
                      "relative z-10 mx-0 mb-3 grid h-11 w-11 place-items-center rounded-full border-2 bg-white font-serif text-sm font-bold transition-all md:mx-auto",
                      isActive
                        ? "scale-110 border-transparent text-white shadow-lift"
                        : done
                          ? "border-cel-400 text-cel-700"
                          : "border-ink/15 text-ink/50 group-hover:border-ink/40",
                    )}
                    style={isActive ? { background: g.color } : undefined}
                  >
                    {i + 1}
                  </span>
                  <span className={clsx("block text-[11px] font-bold uppercase tracking-wider", isActive ? "text-ink" : "text-muted")}>
                    {g.year}
                  </span>
                  <span className={clsx("block text-[13px] font-semibold leading-tight", isActive ? "text-ink" : "text-ink/60")}>
                    {g.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Panel */}
      <Reveal>
        <div className="card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-[1.3fr_1fr]"
            >
              <div className="p-6 sm:p-9">
                <div className="mb-1 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: active.color }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: active.color }}>
                    {active.year}
                  </span>
                </div>
                <h3 className="h-display text-3xl sm:text-4xl">{active.name}</h3>
                <p className="mt-1 text-base text-muted">{active.tagline}</p>

                <ul className="mt-6 space-y-3">
                  {active.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i }}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink-2"
                    >
                      <span
                        className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"
                        style={{ background: active.color }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {active.warning && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-7 flex items-center gap-3 rounded-2xl border-2 border-rose-ink/40 bg-[#fdf0f1] px-5 py-4"
                  >
                    <AlertTriangle className="shrink-0 text-rose-ink" size={22} />
                    <p className="text-lg font-bold text-rose-ink">{active.warning}</p>
                  </motion.div>
                )}
              </div>

              <aside className="flex flex-col gap-4 border-t border-ink/8 bg-paper p-6 lg:border-l lg:border-t-0">
                {active.people && (
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/8">
                    <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                      <Users size={14} /> {active.people.label}
                    </div>
                    <ul className="space-y-2">
                      {active.people.names.map((n) => (
                        <li key={n} className="flex items-center gap-3 text-sm font-semibold text-ink">
                          <span
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-serif text-xs text-white"
                            style={{ background: active.color }}
                          >
                            {n.split(" ").filter((p) => p.length > 2)[0]?.[0]}
                          </span>
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {active.extra && (
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/8">
                    <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                      <Info size={14} /> Para entenderlo
                    </div>
                    <p className="font-semibold text-ink">{active.extra.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{active.extra.text}</p>
                  </div>
                )}
                {!active.people && !active.extra && (
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/8 text-sm text-ink-2">
                    Con esto cierra el proceso que empezó el 25 de mayo de 1810.
                  </div>
                )}
                <div className="mt-auto flex gap-2">
                  <button
                    disabled={activeIdx === 0}
                    onClick={() => setActiveId(gobiernos[activeIdx - 1].id)}
                    className="flex-1 rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink disabled:opacity-40"
                  >
                    ← Anterior
                  </button>
                  <button
                    disabled={activeIdx === gobiernos.length - 1}
                    onClick={() => setActiveId(gobiernos[activeIdx + 1].id)}
                    className="flex-1 rounded-xl bg-ink px-3 py-2 text-sm font-semibold text-white disabled:opacity-40"
                  >
                    Siguiente →
                  </button>
                </div>
              </aside>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      {/* Diagrama estructural: quién manda en cada etapa */}
      <Reveal className="mt-14">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
          Cómo se organizaba el poder ejecutivo
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Juntas",
              sub: "Primera Junta → Junta Grande",
              dots: 9,
              growTo: 9,
              text: "Gobierno colegiado. La Primera Junta tenía 9 miembros; con los diputados del interior creció y pasó a ser Junta Grande.",
              color: "#3383c4",
            },
            {
              name: "Triunviratos",
              sub: "Primer y Segundo Triunvirato",
              dots: 3,
              text: "El poder se concentra en tres personas. El Segundo (1812) convoca la Asamblea del Año XIII.",
              color: "#d99a13",
            },
            {
              name: "Directorio",
              sub: "Director Supremo",
              dots: 1,
              text: "Desde 1814, el Poder Ejecutivo queda en una sola persona. Primero: Gervasio Antonio de Posadas.",
              color: "#b23a48",
            },
          ].map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card card-lift p-6"
            >
              <div className="mb-4 flex min-h-[44px] flex-wrap items-center gap-1.5">
                {Array.from({ length: b.dots }).map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + j * 0.05, type: "spring", stiffness: 300, damping: 18 }}
                    className="h-4 w-4 rounded-full"
                    style={{ background: b.color }}
                  />
                ))}
                {b.growTo && <span className="ml-1 text-xs font-semibold text-muted">+ interior</span>}
              </div>
              <p className="text-lg font-bold text-ink">{b.name}</p>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: b.color }}>
                {b.sub}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Callout tone="rose" title="Lo más importante de la Asamblea del Año XIII">
          Asamblea del Año XIII = <strong>grandes reformas</strong> (títulos de nobleza, tortura, libertad de vientres,
          Escudo, Himno, bandera), <strong>pero NO declaró la independencia</strong>. La independencia llega recién el 9 de
          julio de 1816.
        </Callout>
      </Reveal>
    </Section>
  );
}
