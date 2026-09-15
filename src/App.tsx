import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Contexto } from "./components/Contexto";
import { Causas } from "./components/Causas";
import { SemanaDeMayo } from "./components/SemanaDeMayo";
import { PrimeraJunta } from "./components/PrimeraJunta";
import { MorenoSaavedra } from "./components/MorenoSaavedra";
import { Gobiernos } from "./components/Gobiernos";
import { Cadena } from "./components/Cadena";
import { Fechas } from "./components/Fechas";
import { Practica } from "./components/Practica";
import { Examen } from "./components/Examen";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Contexto />
        <Causas />
        <SemanaDeMayo />
        <PrimeraJunta />
        <MorenoSaavedra />
        <Gobiernos />
        <Cadena />
        <Fechas />
        <Practica />
        <Examen />
      </main>
      <Footer />
    </div>
  );
}
