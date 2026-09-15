import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Shuffle,
  Trophy,
  ListOrdered,
  Layers,
  HelpCircle,
  Scale,
  ChevronUp,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Reveal } from "./ui";
import { quiz, flashcards, cadena, medidasAsamblea } from "../data/content";

type Tab = "quiz" | "flash" | "orden" | "asamblea";

const tabs: { id: Tab; label: string; icon: typeof HelpCircle; desc: string }[] = [
  { id: "quiz", label: "Quiz", icon: HelpCircle, desc: "12 preguntas con explicación" },
  { id: "flash", label: "Flashcards", icon: Layers, desc: "Tarjetas para repasar" },
  { id: "orden", label: "Ordená la cadena", icon: ListOrdered, desc: "Armá la secuencia" },
  { id: "asamblea", label: "¿Lo hizo la Asamblea?", icon: Scale, desc: "Verdadero o falso" },
];

export function Practica() {
  const [tab, setTab] = useState<Tab>("quiz");

  return (
    <Section id="practica">
      <SectionHeader
        number="09"
        eyebrow="Práctica"
        title={
          <>
            Ahora <span className="text-cel-600">ponete a prueba</span>
          </>
        }
        lead="Leer no alcanza: recordar es lo que fija. Cuatro actividades cortas, todas con corrección inmediata."
      />

      <Reveal>
        <div className="mb-6 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={clsx(
                  "relative flex items-center gap-3 rounded-2xl border p-4 text-left transition-all",
                  active ? "border-transparent bg-ink text-white shadow-lift" : "card card-lift border-ink/8 text-ink",
                )}
              >
                <span className={clsx("grid h-10 w-10 shrink-0 place-items-center rounded-xl", active ? "bg-white/10 text-sun-400" : "bg-cel-50 text-cel-600")}>
                  <t.icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold">{t.label}</span>
                  <span className={clsx("block truncate text-xs", active ? "text-white/60" : "text-muted")}>{t.desc}</span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "quiz" && <Quiz />}
          {tab === "flash" && <Flashcards />}
          {tab === "orden" && <OrdenarCadena />}
          {tab === "asamblea" && <AsambleaVF />}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

/* ───────────────────────────── QUIZ ───────────────────────────── */
function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState<boolean[]>([]);

  const q = quiz[i];
  const answered = picked !== null;

  const pick = (idx: number) => {
    if (answered) return;
    setPicked(idx);
    const ok = idx === q.answer;
    if (ok) setScore((s) => s + 1);
    setHistory((h) => [...h, ok]);
  };

  const next = () => {
    if (i + 1 >= quiz.length) {
      setDone(true);
      return;
    }
    setI(i + 1);
    setPicked(null);
  };

  const reset = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
    setHistory([]);
  };

  if (done) {
    const pct = Math.round((score / quiz.length) * 100);
    return (
      <div className="card mx-auto max-w-2xl p-8 text-center sm:p-12">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 16 }}>
          <span className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-sun-100 text-sun-600">
            <Trophy size={36} />
          </span>
        </motion.div>
        <p className="eyebrow justify-center">Resultado</p>
        <h3 className="h-display mt-2 text-5xl">
          {score}
          <span className="text-ink/30">/{quiz.length}</span>
        </h3>
        <p className="mt-3 text-ink-2">
          {pct === 100
            ? "Perfecto. Lo tenés dominado."
            : pct >= 75
              ? "Muy bien. Repasá las que fallaste y listo."
              : pct >= 50
                ? "Vas bien encaminado. Volvé a leer la cadena y las fechas."
                : "Tranqui: releé el contexto, las causas y la cadena, y volvé a intentar."}
        </p>
        <div className="mx-auto mt-6 flex max-w-sm flex-wrap justify-center gap-1.5">
          {history.map((ok, k) => (
            <span key={k} className={clsx("h-2.5 w-6 rounded-full", ok ? "bg-leaf" : "bg-rose-ink")} />
          ))}
        </div>
        <button onClick={reset} className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
          <RotateCcw size={16} /> Volver a hacer el quiz
        </button>
      </div>
    );
  }

  return (
    <div className="card mx-auto max-w-3xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-ink/8 bg-paper px-6 py-3">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
          Pregunta {i + 1} de {quiz.length}
        </span>
        <span className="flex items-center gap-1">
          {quiz.map((_, k) => (
            <span
              key={k}
              className={clsx(
                "h-1.5 w-4 rounded-full transition-colors",
                k < history.length ? (history[k] ? "bg-leaf" : "bg-rose-ink") : k === i ? "bg-ink" : "bg-ink/10",
              )}
            />
          ))}
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8"
        >
          <h3 className="text-xl font-bold leading-snug text-ink sm:text-2xl">{q.q}</h3>
          <div className="mt-6 grid gap-2.5">
            {q.options.map((o, idx) => {
              const isCorrect = idx === q.answer;
              const isPicked = idx === picked;
              return (
                <motion.button
                  key={idx}
                  whileTap={!answered ? { scale: 0.99 } : undefined}
                  onClick={() => pick(idx)}
                  className={clsx(
                    "flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] transition-all",
                    !answered && "border-ink/10 bg-white hover:border-cel-400 hover:bg-cel-50/50",
                    answered && isCorrect && "border-leaf bg-[#eef7f1] text-ink",
                    answered && isPicked && !isCorrect && "border-rose-ink bg-[#fdf0f1] text-ink",
                    answered && !isPicked && !isCorrect && "border-ink/6 opacity-50",
                  )}
                >
                  <span
                    className={clsx(
                      "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold",
                      answered && isCorrect
                        ? "bg-leaf text-white"
                        : answered && isPicked
                          ? "bg-rose-ink text-white"
                          : "bg-paper text-ink-2 ring-1 ring-ink/10",
                    )}
                  >
                    {answered && isCorrect ? <CheckCircle2 size={14} /> : answered && isPicked ? <XCircle size={14} /> : String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{o}</span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className={clsx(
                    "mt-5 rounded-xl border px-4 py-3.5 text-sm leading-relaxed",
                    picked === q.answer ? "border-leaf/30 bg-[#eef7f1] text-ink-2" : "border-sun-400/40 bg-sun-100/70 text-ink-2",
                  )}
                >
                  <span className="font-bold text-ink">{picked === q.answer ? "¡Correcto! " : "No exactamente. "}</span>
                  {q.explain}
                </div>
                <div className="mt-5 flex justify-end">
                  <button onClick={next} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
                    {i + 1 >= quiz.length ? "Ver resultado" : "Siguiente"} <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ───────────────────────────── FLASHCARDS ───────────────────────────── */
function Flashcards() {
  const [order, setOrder] = useState(() => flashcards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const card = flashcards[order[pos]];

  const go = (d: number) => {
    setFlipped(false);
    setTimeout(() => setPos((p) => (p + d + order.length) % order.length), 120);
  };
  const shuffle = () => {
    const arr = [...order];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setOrder(arr);
    setPos(0);
    setFlipped(false);
  };
  const mark = () => {
    setKnown((k) => {
      const n = new Set(k);
      n.has(order[pos]) ? n.delete(order[pos]) : n.add(order[pos]);
      return n;
    });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="font-semibold text-muted">
          Tarjeta {pos + 1} / {order.length} · <span className="text-leaf">{known.size} dominadas</span>
        </span>
        <button onClick={shuffle} className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:bg-paper">
          <Shuffle size={13} /> Mezclar
        </button>
      </div>

      <div className="perspective">
        <motion.div
          onClick={() => setFlipped((f) => !f)}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="preserve-3d relative h-[300px] w-full cursor-pointer select-none sm:h-[320px]"
        >
          {/* frente */}
          <div className="backface-hidden card absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cel-600">Pregunta</span>
            <p className="font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl">{card.front}</p>
            <span className="absolute bottom-5 text-xs font-medium text-muted">Tocá para dar vuelta</span>
            {known.has(order[pos]) && (
              <span className="absolute right-4 top-4 rounded-full bg-[#e2f2e8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-leaf">
                Dominada
              </span>
            )}
          </div>
          {/* dorso */}
          <div
            className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-ink p-8 text-center text-white shadow-lift"
            style={{ transform: "rotateY(180deg)" }}
          >
            <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-sun-400">Respuesta</span>
            <p className="text-[17px] leading-relaxed text-white/90 sm:text-lg">{card.back}</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink hover:bg-paper">
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={mark}
          className={clsx(
            "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
            known.has(order[pos]) ? "bg-leaf text-white" : "border border-ink/10 bg-white text-ink hover:bg-paper",
          )}
        >
          <CheckCircle2 size={16} /> {known.has(order[pos]) ? "La sé" : "Marcar como sabida"}
        </button>
        <button onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* ───────────────────────────── ORDENAR CADENA ───────────────────────────── */
const ordenItems = [
  "Crisis de la monarquía española",
  "Fernando VII queda prisionero",
  "Semana de Mayo",
  "Primera Junta",
  "Junta Grande",
  "Segundo Triunvirato",
  "Asamblea del Año XIII",
  "Directorio",
  "Declaración de la Independencia",
];

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  do {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  } while (a.every((v, i) => v === arr[i]));
  return a;
}

function OrdenarCadena() {
  const [items, setItems] = useState(() => shuffled(ordenItems));
  const [checked, setChecked] = useState(false);

  const move = (from: number, to: number) => {
    if (to < 0 || to >= items.length) return;
    const a = [...items];
    const [it] = a.splice(from, 1);
    a.splice(to, 0, it);
    setItems(a);
    setChecked(false);
  };

  const correct = useMemo(() => items.map((it, i) => it === ordenItems[i]), [items]);
  const allOk = correct.every(Boolean);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-ink/8 bg-paper px-5 py-3">
          <p className="text-sm font-semibold text-ink">Ordená del más antiguo al más reciente</p>
          <button
            onClick={() => {
              setItems(shuffled(ordenItems));
              setChecked(false);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink"
          >
            <Shuffle size={13} /> Mezclar
          </button>
        </div>
        <ul className="divide-y divide-ink/6">
          {items.map((it, i) => (
            <motion.li
              key={it}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className={clsx(
                "flex items-center gap-3 px-4 py-2.5 transition-colors",
                checked && (correct[i] ? "bg-[#eef7f1]" : "bg-[#fdf0f1]"),
              )}
            >
              <span
                className={clsx(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full font-serif text-sm font-bold",
                  checked ? (correct[i] ? "bg-leaf text-white" : "bg-rose-ink text-white") : "bg-paper text-ink-2 ring-1 ring-ink/10",
                )}
              >
                {i + 1}
              </span>
              <span className="flex-1 text-[15px] font-medium text-ink">{it}</span>
              <div className="flex flex-col">
                <button onClick={() => move(i, i - 1)} disabled={i === 0} className="rounded-md p-1 text-ink-2 hover:bg-ink/5 disabled:opacity-30">
                  <ChevronUp size={16} />
                </button>
                <button onClick={() => move(i, i + 1)} disabled={i === items.length - 1} className="rounded-md p-1 text-ink-2 hover:bg-ink/5 disabled:opacity-30">
                  <ChevronDown size={16} />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-3 border-t border-ink/8 bg-paper px-5 py-4">
          <AnimatePresence mode="wait">
            {checked ? (
              <motion.p key={allOk ? "ok" : "no"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={clsx("text-sm font-semibold", allOk ? "text-leaf" : "text-rose-ink")}>
                {allOk ? "¡Perfecto! La cadena está en orden." : `${correct.filter(Boolean).length} de ${items.length} en su lugar. Los rojos están mal ubicados.`}
              </motion.p>
            ) : (
              <p className="text-sm text-muted">Usá las flechas para mover cada hecho.</p>
            )}
          </AnimatePresence>
          <button onClick={() => setChecked(true)} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
            <Sparkles size={15} /> Corregir
          </button>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted">Versión resumida de la cadena de {cadena.length} eslabones de la sección 07.</p>
    </div>
  );
}

/* ───────────────────────────── ASAMBLEA V/F ───────────────────────────── */
function AsambleaVF() {
  const [items] = useState(() => shuffled(medidasAsamblea));
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const total = items.length;
  const answered = Object.keys(answers).length;
  const right = items.filter((it, i) => answers[i] !== undefined && answers[i] === it.ok).length;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card overflow-hidden">
        <div className="border-b border-ink/8 bg-paper px-5 py-4">
          <p className="text-sm font-semibold text-ink">¿Esto lo hizo la Asamblea del Año XIII?</p>
          <p className="text-xs text-muted">Cuidado con las dos trampas clásicas.</p>
        </div>
        <ul className="divide-y divide-ink/6">
          {items.map((it, i) => {
            const a = answers[i];
            const done = a !== undefined;
            const ok = done && a === it.ok;
            return (
              <li key={it.text} className={clsx("flex flex-col gap-3 px-5 py-3.5 sm:flex-row sm:items-center", done && (ok ? "bg-[#eef7f1]" : "bg-[#fdf0f1]"))}>
                <span className="flex-1 text-[15px] font-medium text-ink">{it.text}</span>
                <div className="flex items-center gap-2">
                  {(["Sí", "No"] as const).map((lbl) => {
                    const val = lbl === "Sí";
                    const selected = done && a === val;
                    return (
                      <button
                        key={lbl}
                        disabled={done}
                        onClick={() => setAnswers((p) => ({ ...p, [i]: val }))}
                        className={clsx(
                          "min-w-[60px] rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors",
                          !done && "border-ink/10 bg-white hover:bg-paper",
                          done && selected && ok && "border-leaf bg-leaf text-white",
                          done && selected && !ok && "border-rose-ink bg-rose-ink text-white",
                          done && !selected && "border-ink/6 opacity-40",
                        )}
                      >
                        {lbl}
                      </button>
                    );
                  })}
                  {done && (ok ? <CheckCircle2 size={18} className="text-leaf" /> : <XCircle size={18} className="text-rose-ink" />)}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between border-t border-ink/8 bg-paper px-5 py-4 text-sm">
          <span className="font-semibold text-ink-2">
            {answered}/{total} respondidas · <span className="text-leaf">{right} correctas</span>
          </span>
          {answered === total && (
            <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="text-xs font-semibold text-muted">
              Recordá: NO declaró la independencia y NO abolió la esclavitud de inmediato.
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}
