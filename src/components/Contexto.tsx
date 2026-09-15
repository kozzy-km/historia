import { motion } from "motion/react";
import { Anchor, Ban, Crown, Users, HelpCircle, ArrowRight } from "lucide-react";
import { Section, SectionHeader, Reveal, Callout } from "./ui";
import { crisisSteps } from "../data/content";

const icons = { anchor: Anchor, ban: Ban, crown: Crown, users: Users } as const;

export function Contexto() {
  return (
    <Section id="contexto" tone="white">
      <SectionHeader
        number="01"
        eyebrow="Contexto"
        title={
          <>
            Todo empieza con una <span className="text-cel-600">crisis en España</span>
          </>
        }
        lead="La Revolución de Mayo fue un proceso revolucionario ocurrido en Buenos Aires en mayo de 1810, que produjo la caída del virrey y la formación de un nuevo gobierno. Para entender por qué ocurrió, hay que mirar primero lo que pasaba en Europa."
      />

      {/* Línea de crisis */}
      <div className="relative">
        <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cel-200 via-cel-300 to-rose-ink/40 lg:left-0 lg:top-[3.25rem] lg:h-px lg:w-full lg:bg-gradient-to-r" />
        <div className="grid gap-6 lg:grid-cols-4">
          {crisisSteps.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            const last = i === crisisSteps.length - 1;
            return (
              <Reveal key={s.title} delay={i} className="relative">
                <div className="mb-4 flex items-center gap-3 lg:flex-col lg:items-start">
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    className={`relative z-10 grid h-12 w-12 place-items-center rounded-2xl border shadow-soft ${
                      last ? "border-rose-ink/30 bg-[#fdf0f1] text-rose-ink" : "border-cel-200 bg-white text-cel-600"
                    }`}
                  >
                    <Icon size={20} />
                  </motion.span>
                  <span className="font-serif text-2xl font-semibold text-ink/80 tabular-nums">{s.year}</span>
                </div>
                <div className="card card-lift h-full p-5">
                  <h3 className="mb-2 text-base font-bold text-ink">{s.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-2">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* La pregunta */}
      <div className="mt-16 grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-lift sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cel-500/30 blur-3xl" />
            <HelpCircle className="mb-5 text-sun-400" size={28} />
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cel-300">El problema que surgió</p>
            <h3 className="h-display !text-white text-3xl sm:text-4xl">
              Si el rey legítimo está cautivo… <span className="text-sun-400">¿quién debe gobernar?</span>
            </h3>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/75">
              En España se formaron <strong className="text-white">juntas de gobierno</strong> para organizar la
              resistencia y gobernar en nombre de Fernando VII. Pero la pregunta también llegó a América: se empezó a
              discutir quién tenía derecho a gobernar los territorios americanos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium">
              <span className="rounded-full bg-white/10 px-3 py-1.5">Rey cautivo</span>
              <ArrowRight size={16} className="text-white/40" />
              <span className="rounded-full bg-white/10 px-3 py-1.5">Juntas en España</span>
              <ArrowRight size={16} className="text-white/40" />
              <span className="rounded-full bg-sun-400 px-3 py-1.5 text-ink">¿Y en América?</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            <Callout tone="cel" title="Fijate en esto">
              La Revolución de Mayo <strong>inició un proceso</strong>. No fue un solo día: empieza el 25 de mayo de 1810
              y termina con la declaración de independencia el 9 de julio de 1816 en el Congreso de Tucumán.
            </Callout>
            <div className="card flex-1 p-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Glosario rápido</p>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Virrey</dt>
                  <dd className="text-ink-2">Autoridad española que gobernaba en Buenos Aires. En 1810 era Baltasar Hidalgo de Cisneros.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Criollos</dt>
                  <dd className="text-ink-2">Población americana desplazada de los cargos importantes por las reformas borbónicas.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Junta</dt>
                  <dd className="text-ink-2">Grupo que asume el gobierno ante la ausencia del rey, gobernando en su nombre.</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
