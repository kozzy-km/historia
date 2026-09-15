import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Scale, ArrowDown } from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Reveal, Callout } from "./ui";
import { morenoSaavedra } from "../data/content";

export function MorenoSaavedra() {
  const [side, setSide] = useState<"moreno" | "saavedra" | null>(null);
  const m = morenoSaavedra.moreno;
  const s = morenoSaavedra.saavedra;

  return (
    <Section id="moreno-saavedra" tone="ink" className="overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-rose-ink/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cel-500/25 blur-[120px]" />

      <SectionHeader
        dark
        number="05"
        eyebrow="Conflicto interno"
        title={
          <>
            Moreno <span className="text-white/40">vs</span> Saavedra
          </>
        }
        lead="Dentro de la Primera Junta aparecieron diferencias políticas. Pasá el mouse (o tocá) sobre cada lado para enfocarlo."
      />

      <Reveal>
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {/* Moreno */}
          <motion.div
            onMouseEnter={() => setSide("moreno")}
            onMouseLeave={() => setSide(null)}
            onClick={() => setSide(side === "moreno" ? null : "moreno")}
            animate={{ opacity: side === "saavedra" ? 0.45 : 1, scale: side === "moreno" ? 1.02 : 1 }}
            transition={{ duration: 0.35 }}
            className="relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-ink text-white">
                <Zap size={22} />
              </span>
              <span className="rounded-full bg-rose-ink/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ff9aa6]">
                Revolucionario
              </span>
            </div>
            <h3 className="font-serif text-3xl font-semibold text-white">{m.name}</h3>
            <p className="mt-1 text-sm font-medium text-white/60">{m.postura}</p>
            <ul className="mt-6 space-y-3">
              {m.ideas.map((t, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff9aa6]" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-ink/40 p-4 text-sm text-white/75">
              <span className="font-semibold text-white">¿Qué pasó con Moreno? </span>
              {m.final}
            </div>
          </motion.div>

          {/* centro */}
          <div className="flex items-center justify-center lg:flex-col">
            <div className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-ink font-serif text-lg font-bold text-sun-400 shadow-lift">
              VS
            </div>
          </div>

          {/* Saavedra */}
          <motion.div
            onMouseEnter={() => setSide("saavedra")}
            onMouseLeave={() => setSide(null)}
            onClick={() => setSide(side === "saavedra" ? null : "saavedra")}
            animate={{ opacity: side === "moreno" ? 0.45 : 1, scale: side === "saavedra" ? 1.02 : 1 }}
            transition={{ duration: 0.35 }}
            className="relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cel-500 text-white">
                <Scale size={22} />
              </span>
              <span className="rounded-full bg-cel-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cel-300">
                Moderado
              </span>
            </div>
            <h3 className="font-serif text-3xl font-semibold text-white">{s.name}</h3>
            <p className="mt-1 text-sm font-medium text-white/60">{s.postura}</p>
            <ul className="mt-6 space-y-3">
              {s.ideas.map((t, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cel-300" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-ink/40 p-4 text-sm text-white/75">
              <span className="font-semibold text-white">Consecuencia: </span>
              {s.final}
            </div>
          </motion.div>
        </div>
      </Reveal>

      {/* Cómo termina */}
      <Reveal className="mt-10">
        <div className="grid gap-3 md:grid-cols-4">
          {[
            "Diferencias políticas dentro de la Junta",
            "Fines de 1810: se decide incorporar diputados del interior",
            "Moreno se opone (quería una Junta más reducida) y su posición se debilita",
            "Moreno renuncia → la Junta se transforma en Junta Grande",
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={clsx(
                "relative rounded-2xl border p-4 text-sm",
                i === 3 ? "border-sun-400/50 bg-sun-400/10 text-white" : "border-white/10 bg-white/5 text-white/80",
              )}
            >
              <span className="mb-2 block font-serif text-lg text-sun-400">{i + 1}</span>
              {t}
              {i < 3 && (
                <ArrowDown size={16} className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-white/30 md:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Callout tone="sun" title="Cómo lo decís en el examen" className="!bg-white/95">
          «Moreno tenía una posición más revolucionaria y quería avanzar con cambios más profundos, mientras que Saavedra
          tenía una posición más moderada y prefería avanzar con mayor prudencia.»
        </Callout>
      </Reveal>
    </Section>
  );
}
