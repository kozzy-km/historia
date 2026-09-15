import { motion } from "motion/react";
import { ArrowDown, Sparkles, Clock3, ListChecks, Brain } from "lucide-react";
import { Sun } from "./ui";

const stats = [
  { icon: Clock3, label: "Período", value: "1810 → 1816" },
  { icon: ListChecks, label: "Temas", value: "11 bloques" },
  { icon: Brain, label: "Práctica", value: "Quiz · Flashcards · Orden" },
];

const words = ["Entendé", "la", "Revolución", "de", "Mayo", "de", "punta", "a", "punta."];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* fondo */}
      <div className="grid-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="pointer-events-none absolute -right-24 top-16 -z-10 h-[420px] w-[420px] text-sun-400/70 sm:-right-10 sm:h-[560px] sm:w-[560px]"
      >
        <Sun className="sun-spin h-full w-full drop-shadow-[0_10px_40px_rgba(234,181,58,0.35)]" />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[70vh] bg-[radial-gradient(ellipse_at_top,#d9ebf8_0%,transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ink-2 shadow-soft backdrop-blur"
        >
          <Sparkles size={14} className="text-sun-500" />
          Historia · Revolución de Mayo y proceso de independencia
        </motion.div>

        <h1 className="h-display max-w-4xl text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="mr-[0.25em] inline-block"
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {w === "Mayo" ? <span className="text-cel-600">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2"
        >
          Una guía visual, paso a paso, para entender <strong className="font-semibold text-ink">qué pasó y por qué</strong>:
          de la crisis de la monarquía española al 25 de mayo de 1810, y de ahí hasta la declaración de la
          independencia del 9 de julio de 1816. Sin memorizar de más: explicándolo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contexto"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Empezar a estudiar
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#practica"
            className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white px-6 py-3 text-sm font-semibold text-ink shadow-soft transition-colors hover:bg-paper-2"
          >
            Ir directo a la práctica
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="card flex items-center gap-3 px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cel-50 text-cel-600">
                <s.icon size={18} />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">{s.label}</span>
                <span className="block text-sm font-semibold text-ink">{s.value}</span>
              </span>
            </div>
          ))}
        </motion.div>

        {/* La idea clave */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 max-w-3xl rounded-2xl border border-sun-400/40 bg-gradient-to-br from-sun-100 to-white p-5 shadow-soft"
        >
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-sun-600">Antes de empezar · la idea clave</p>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div>
              <p className="font-serif text-2xl font-semibold text-ink">25 de mayo de 1810</p>
              <p className="text-sm text-ink-2">Comienza el proceso revolucionario. Cae el virrey y se forma la Primera Junta.</p>
            </div>
            <span className="hidden text-2xl text-ink/30 sm:block">≠</span>
            <div>
              <p className="font-serif text-2xl font-semibold text-ink">9 de julio de 1816</p>
              <p className="text-sm text-ink-2">Se declara la independencia en el Congreso de Tucumán.</p>
            </div>
          </div>
          <p className="mt-3 text-sm font-medium text-ink">
            Revolución de Mayo e Independencia <span className="hl">no son lo mismo</span>. La Revolución fue un paso
            fundamental hacia la independencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
