import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Lightbulb } from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Reveal, Callout } from "./ui";
import { causas } from "../data/content";

const palette: Record<string, { ring: string; bg: string; text: string; bar: string }> = {
  sun: { ring: "ring-sun-400/50", bg: "bg-sun-100", text: "text-sun-600", bar: "from-sun-400 to-sun-500" },
  cel: { ring: "ring-cel-400/50", bg: "bg-cel-50", text: "text-cel-600", bar: "from-cel-400 to-cel-600" },
  rose: { ring: "ring-rose-ink/40", bg: "bg-[#fdf0f1]", text: "text-rose-ink", bar: "from-rose-ink to-[#d96a76]" },
};

export function Causas() {
  const [openId, setOpenId] = useState<string | null>("borbonicas");

  return (
    <Section id="causas">
      <SectionHeader
        number="02"
        eyebrow="Causas"
        title={
          <>
            Las <span className="text-cel-600">tres causas</span> de la Revolución
          </>
        }
        lead="En el cuadro de causas aparecen tres. Tocá cada tarjeta para ver el detalle. Al final, la fórmula corta para acordarte."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {causas.map((c, i) => {
          const p = palette[c.color];
          const open = openId === c.id;
          return (
            <Reveal key={c.id} delay={i}>
              <motion.button
                layout
                onClick={() => setOpenId(open ? null : c.id)}
                className={clsx(
                  "card card-lift group w-full overflow-hidden text-left transition-shadow",
                  open && `ring-2 ${p.ring}`,
                )}
              >
                <div className={clsx("h-1.5 w-full bg-gradient-to-r", p.bar)} />
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className={clsx("grid h-12 w-12 place-items-center rounded-2xl text-2xl", p.bg)}>{c.emoji}</span>
                    <span className="flex items-center gap-2">
                      <span className={clsx("text-[11px] font-bold uppercase tracking-wider", p.text)}>{c.short}</span>
                      <ChevronDown
                        size={18}
                        className={clsx("text-muted transition-transform duration-300", open && "rotate-180")}
                      />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted">Causa {i + 1} de 3</p>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-5 space-y-2.5 border-t border-ink/8 pt-5">
                          {c.points.map((pt, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.08 * j + 0.1 }}
                              className="flex gap-3 text-[14.5px] leading-relaxed text-ink-2"
                            >
                              <span className={clsx("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", p.text.replace("text-", "bg-"))} />
                              {pt}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </Reveal>
          );
        })}
      </div>

      {/* Fórmula de memoria */}
      <Reveal className="mt-12">
        <div className="card overflow-hidden">
          <div className="flex items-center gap-3 border-b border-ink/8 bg-paper px-6 py-4">
            <Lightbulb size={18} className="text-sun-500" />
            <p className="text-sm font-bold text-ink">Para acordarte de las tres causas</p>
          </div>
          <div className="grid divide-y divide-ink/8 md:grid-cols-3 md:divide-x md:divide-y-0">
            {causas.map((c) => {
              const [a, b] = c.formula.split("→");
              const p = palette[c.color];
              return (
                <div key={c.id} className="flex items-center gap-4 px-6 py-5">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-ink">{a.trim()}</p>
                    <p className={clsx("mt-1 text-sm font-medium", p.text)}>→ {b.trim()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout tone="sun" title="Cómo lo decís en el examen">
          «Hubo varias causas. Las reformas borbónicas generaron descontento entre los criollos, las invasiones inglesas
          demostraron que los criollos podían organizarse y defender Buenos Aires, y la crisis de la monarquía española
          provocó un vacío de poder cuando Fernando VII fue tomado prisionero.»
        </Callout>
      </Reveal>
    </Section>
  );
}
