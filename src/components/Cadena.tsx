import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Link2 } from "lucide-react";
import { clsx } from "clsx";
import { Section, SectionHeader, Callout } from "./ui";
import { cadena } from "../data/content";

const highlights = new Set(["25 de mayo de 1810", "9 de julio de 1816 → Declaración de la Independencia"]);

const groups: Record<number, string> = {
  0: "Causa lejana",
  3: "Revolución",
  5: "Primeros gobiernos",
  9: "Nuevas formas de gobierno",
  13: "Meta",
};

export function Cadena() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <Section id="cadena">
      <SectionHeader
        number="07"
        eyebrow="La historia en una sola cadena"
        title={
          <>
            No estudies los temas <span className="text-cel-600">como si fueran independientes</span>
          </>
        }
        lead="Cada cosa lleva a la siguiente. Si entendés esta cadena, entendés todo el tema. Bajá despacio y mirá cómo se conecta."
      />

      <div ref={ref} className="relative mx-auto max-w-2xl">
        {/* línea de fondo y línea animada */}
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-ink/10 sm:left-1/2 sm:-translate-x-1/2" />
        <motion.div
          className="absolute left-[19px] top-4 w-0.5 origin-top bg-gradient-to-b from-cel-500 via-cel-400 to-sun-400 sm:left-1/2 sm:-translate-x-1/2"
          style={{ scaleY: line, height: "calc(100% - 2rem)" }}
        />

        <ol className="space-y-5">
          {cadena.map((item, i) => {
            const hl = highlights.has(item);
            const left = i % 2 === 0;
            const group = groups[i];
            return (
              <li key={item} className="relative">
                {group && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-3 pl-12 text-[10px] font-bold uppercase tracking-[0.2em] text-muted sm:pl-0 sm:text-center"
                  >
                    {group}
                  </motion.div>
                )}
                <div className={clsx("relative flex items-center gap-4 sm:gap-0", left ? "sm:flex-row" : "sm:flex-row-reverse")}>
                  <motion.div
                    initial={{ opacity: 0, x: left ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    className={clsx("order-2 flex-1 sm:order-none sm:w-1/2", left ? "sm:pr-10 sm:text-right" : "sm:pl-10")}
                  >
                    <div
                      className={clsx(
                        "inline-block rounded-2xl border px-5 py-3.5 text-[15px] font-semibold leading-snug",
                        hl
                          ? "border-transparent bg-ink text-white shadow-lift"
                          : "card text-ink",
                      )}
                    >
                      {hl && <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-sun-400">Fecha clave</span>}
                      {item}
                    </div>
                  </motion.div>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className={clsx(
                      "order-1 z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-4 border-paper font-serif text-xs font-bold sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
                      hl ? "bg-sun-400 text-ink" : "bg-cel-500 text-white",
                    )}
                  >
                    {i + 1}
                  </motion.span>
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mx-auto mt-14 max-w-2xl">
        <Callout tone="cel" icon={<Link2 size={18} className="text-cel-600" />} title="Truco para explicarlo">
          Contá la historia como una cadena de «por eso»: el rey queda prisionero, <em>por eso</em> hay un vacío de
          poder; <em>por eso</em> el Cabildo Abierto discute si Cisneros debe seguir; <em>por eso</em> renuncia y se
          forma la Primera Junta; <em>por eso</em>… y así hasta 1816.
        </Callout>
      </div>
    </Section>
  );
}
