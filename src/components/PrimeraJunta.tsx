import { motion } from "motion/react";
import { Crown, Flag, Shield, Landmark } from "lucide-react";
import { Section, SectionHeader, Reveal, Tag } from "./ui";
import { primeraJunta } from "../data/content";

const actionIcons = [Crown, Flag, Shield];

function initials(name: string) {
  const parts = name.split(" ").filter((p) => p.length > 2);
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}

export function PrimeraJunta() {
  return (
    <Section id="junta">
      <SectionHeader
        number="04"
        eyebrow="Primera Junta"
        title={
          <>
            El <span className="text-cel-600">primer gobierno patrio</span>
          </>
        }
        lead="La Primera Junta fue el primer gobierno patrio formado en Buenos Aires después de la Revolución de Mayo, el 25 de mayo de 1810."
      />

      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        {/* Integrantes */}
        <Reveal>
          <div className="card p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Landmark size={18} className="text-cel-600" />
                <p className="text-sm font-bold text-ink">Integrantes</p>
              </div>
              <Tag color="ink">9 miembros</Tag>
            </div>

            {/* Presidente */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-cel-900 p-5 text-white"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sun-400/25 blur-2xl" />
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sun-400 font-serif text-xl font-bold text-ink">
                  {initials(primeraJunta.presidente)}
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sun-400">Presidente</p>
                  <p className="text-xl font-bold">{primeraJunta.presidente}</p>
                  <p className="text-sm text-white/70">Postura moderada · prudencia</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {primeraJunta.integrantes.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-ink/8 bg-paper p-3 text-center"
                >
                  <span
                    className={`mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full font-serif text-sm font-bold ${
                      m.tag ? "bg-rose-ink text-white" : "bg-cel-100 text-cel-800"
                    }`}
                  >
                    {initials(m.name)}
                  </span>
                  <p className="text-[13px] font-semibold leading-tight text-ink">{m.name}</p>
                  {m.tag && <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-rose-ink">{m.tag}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Qué hizo */}
        <Reveal delay={1}>
          <div className="flex h-full flex-col gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">¿Qué hizo la Primera Junta?</p>
            {primeraJunta.acciones.map((a, i) => {
              const Icon = actionIcons[i];
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="card card-lift flex gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cel-50 text-cel-600">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{a.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">{a.text}</p>
                  </div>
                </motion.div>
              );
            })}
            <div className="mt-auto rounded-2xl border border-dashed border-ink/15 p-5 text-sm text-ink-2">
              <span className="font-semibold text-ink">Dato que confunde: </span>
              la Junta gobernaba <em>en nombre de Fernando VII</em>. Todavía no se hablaba de independencia; el rey estaba
              prisionero.
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
