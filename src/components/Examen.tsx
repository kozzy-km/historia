import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareQuote, Eye, PenLine, CheckCircle2, Circle, AlertOctagon } from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Reveal } from "./ui";
import { respuestasExamen } from "../data/content";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function Examen() {
  return (
    <Section id="examen" tone="white">
      <SectionHeader
        number="10"
        eyebrow="Para el examen"
        title={
          <>
            Qué decir <span className="text-cel-600">si te preguntan…</span>
          </>
        }
        lead="No memorices palabra por palabra. Tenés que poder explicar qué pasó y por qué. Practicá escribiendo tu respuesta con tus palabras: te marcamos qué ideas clave incluiste."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {respuestasExamen.map((r, i) => (
          <Reveal key={r.q} delay={i % 2}>
            <ExamCard {...r} trap={r.q.includes("trampa")} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ExamCard({ q, a, keywords, trap }: { q: string; a: string; keywords: string[]; trap?: boolean }) {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const n = normalize(text);
  const hits = keywords.map((k) => n.includes(normalize(k)));
  const count = hits.filter(Boolean).length;
  const pct = text.trim() ? Math.round((count / keywords.length) * 100) : 0;

  return (
    <div className={clsx("card flex h-full flex-col overflow-hidden", trap && "ring-2 ring-rose-ink/30")}>
      <div className={clsx("flex items-start gap-3 border-b border-ink/8 px-6 py-5", trap ? "bg-[#fdf0f1]" : "bg-paper")}>
        <span className={clsx("mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl", trap ? "bg-rose-ink text-white" : "bg-ink text-sun-400")}>
          {trap ? <AlertOctagon size={18} /> : <MessageSquareQuote size={18} />}
        </span>
        <div>
          {trap && <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-ink">Pregunta trampa</p>}
          <h3 className="text-lg font-bold leading-snug text-ink">{q.replace(" (pregunta trampa)", "")}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <label className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
          <PenLine size={13} /> Tu respuesta
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="Escribila con tus palabras…"
          className="w-full resize-none rounded-xl border border-ink/10 bg-paper/60 px-4 py-3 text-[15px] leading-relaxed text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-cel-400 focus:bg-white"
        />

        {/* keywords */}
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Ideas clave</span>
            <span className="text-xs font-semibold text-ink-2">
              {count}/{keywords.length}
            </span>
          </div>
          <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-ink/8">
            <motion.div
              className={clsx("h-full rounded-full", pct === 100 ? "bg-leaf" : "bg-gradient-to-r from-cel-400 to-cel-600")}
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 28 }}
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {keywords.map((k, i) => (
              <span
                key={k}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                  hits[i] ? "border-leaf/30 bg-[#eef7f1] text-leaf" : "border-ink/10 bg-white text-ink-2",
                )}
              >
                {hits[i] ? <CheckCircle2 size={12} /> : <Circle size={12} className="opacity-40" />}
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-col justify-end">
          <button
            onClick={() => setShow((s) => !s)}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-paper"
          >
            <Eye size={15} /> {show ? "Ocultar" : "Ver"} respuesta modelo
          </button>
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <blockquote className="mt-4 border-l-4 border-sun-400 bg-sun-100/50 px-4 py-3 text-[15px] leading-relaxed text-ink-2">
                  {a}
                </blockquote>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
