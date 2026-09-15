import { ArrowUp } from "lucide-react";
import { Sun } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-16 text-white">
      <Sun className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 text-sun-400/10" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-end sm:px-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cel-300">Resumen en una frase</p>
          <p className="mt-3 max-w-2xl font-serif text-2xl font-semibold leading-snug sm:text-3xl">
            La crisis de la monarquía española abrió un vacío de poder; el 25 de mayo de 1810 Buenos Aires formó su primer
            gobierno patrio, y tras seis años de cambios de gobierno se declaró la independencia el 9 de julio de 1816.
          </p>
          <p className="mt-6 text-sm text-white/50">
            Guía de estudio basada en el resumen de clase. Historia · Revolución de Mayo y proceso de independencia.
          </p>
        </div>
        <a
          href="#top"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          <ArrowUp size={16} /> Volver arriba
        </a>
      </div>
    </footer>
  );
}
