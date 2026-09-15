// Todo el contenido proviene del resumen de clase del estudiante.

export const navItems = [
  { id: "contexto", label: "Contexto" },
  { id: "causas", label: "Causas" },
  { id: "semana", label: "Semana de Mayo" },
  { id: "junta", label: "Primera Junta" },
  { id: "moreno-saavedra", label: "Moreno vs Saavedra" },
  { id: "gobiernos", label: "Gobiernos" },
  { id: "cadena", label: "La cadena" },
  { id: "fechas", label: "Fechas" },
  { id: "practica", label: "Práctica" },
  { id: "examen", label: "Examen" },
];

// ───────────────────────── Contexto: crisis de la monarquía
export const crisisSteps = [
  {
    year: "1805",
    title: "Batalla de Trafalgar",
    text: "España estaba aliada con Francia. La flota franco-española fue derrotada por Gran Bretaña.",
    icon: "anchor",
  },
  {
    year: "1806",
    title: "Bloqueo continental",
    text: "Napoleón lo estableció con el objetivo de debilitar económicamente a Gran Bretaña.",
    icon: "ban",
  },
  {
    year: "1808",
    title: "Fernando VII cautivo",
    text: "Las tropas francesas entraron en España. Napoleón obligó a Fernando VII a renunciar y puso a su hermano José Bonaparte en el trono.",
    icon: "crown",
  },
  {
    year: "→",
    title: "Juntas de gobierno",
    text: "Muchos españoles no reconocieron al nuevo rey. Se formaron juntas para resistir y gobernar en nombre de Fernando VII.",
    icon: "users",
  },
];

// ───────────────────────── Causas
export const causas = [
  {
    id: "borbonicas",
    title: "Reformas borbónicas",
    short: "Descontento",
    color: "sun",
    emoji: "📜",
    points: [
      "Provocaron un fuerte resentimiento en la población americana, especialmente entre los criollos.",
      "Se aumentaron los impuestos.",
      "Se desplazó a los criollos de muchos cargos importantes.",
      "Los criollos tenían cada vez menos participación en el gobierno de los territorios americanos.",
    ],
    formula: "Reformas borbónicas → descontento",
  },
  {
    id: "inglesas",
    title: "Invasiones inglesas",
    short: "Experiencia y poder",
    color: "cel",
    emoji: "⚔️",
    points: [
      "Demostraron que las autoridades coloniales eran incapaces de defender Buenos Aires por sí mismas.",
      "Los criollos participaron en la defensa de la ciudad y organizaron milicias.",
      "Adquirieron experiencia militar.",
      "Demostraron que podían organizarse y defenderse sin depender completamente de las autoridades españolas.",
    ],
    formula: "Invasiones inglesas → los criollos ganan experiencia y poder",
  },
  {
    id: "crisis",
    title: "Crisis de la monarquía española",
    short: "Vacío de poder",
    color: "rose",
    emoji: "👑",
    points: [
      "Las tropas francesas invadieron España y Fernando VII fue tomado prisionero.",
      "La caída de la autoridad española produjo un problema de legitimidad.",
      "Si el rey no podía gobernar, ¿quién tenía derecho a hacerlo?",
      "Esto generó un vacío de poder que favoreció los movimientos revolucionarios.",
    ],
    formula: "Crisis española → Fernando VII cautivo y aparece un vacío de poder",
  },
];

// ───────────────────────── Semana de Mayo
export const semanaDeMayo = [
  {
    day: "18",
    label: "Llegan las noticias",
    title: "Empieza todo",
    text: "Llegaron noticias de que la situación política en España había empeorado y que la autoridad que gobernaba en nombre de Fernando VII había desaparecido. Esto provocó discusiones entre los habitantes de Buenos Aires.",
    key: "La noticia dispara la crisis en Buenos Aires.",
  },
  {
    day: "22",
    label: "Cabildo Abierto",
    title: "El gran debate",
    text: "Los criollos exigieron un Cabildo Abierto para debatir qué hacer frente a la crisis. Se discutió si el virrey Baltasar Hidalgo de Cisneros debía continuar gobernando, ya que la autoridad española que lo había designado ya no existía. La mayoría sostuvo que el poder debía volver al pueblo.",
    key: "Retroversión de la soberanía: sin autoridad legítima, la soberanía vuelve al pueblo.",
  },
  {
    day: "24",
    label: "Junta con Cisneros",
    title: "El intento fallido",
    text: "Se intentó formar una junta que todavía mantenía a Cisneros como presidente. Esto provocó rechazo entre los revolucionarios, porque consideraban que no solucionaba el problema. La propuesta fracasó.",
    key: "Mantener a Cisneros no resolvía nada → rechazo.",
  },
  {
    day: "25",
    label: "Primera Junta",
    title: "Nace el primer gobierno patrio",
    text: "La presión de los grupos revolucionarios aumentó. Finalmente, Cisneros renunció y se formó un nuevo gobierno: la Primera Junta.",
    key: "25 de mayo de 1810 = formación de la Primera Junta.",
  },
];

// ───────────────────────── Primera Junta
export const primeraJunta = {
  presidente: "Cornelio Saavedra",
  integrantes: [
    { name: "Mariano Moreno", role: "Integrante", tag: "revolucionario" },
    { name: "Juan José Paso", role: "Integrante" },
    { name: "Manuel Belgrano", role: "Integrante" },
    { name: "Juan José Castelli", role: "Integrante" },
    { name: "Miguel de Azcuénaga", role: "Integrante" },
    { name: "Manuel Alberti", role: "Integrante" },
    { name: "Domingo Matheu", role: "Integrante" },
    { name: "Juan Larrea", role: "Integrante" },
  ],
  acciones: [
    {
      title: "Gobernaba en nombre de Fernando VII",
      text: "Aunque el rey se encontraba prisionero.",
    },
    {
      title: "Extender la revolución",
      text: "Conseguir que otras ciudades reconocieran al nuevo gobierno.",
    },
    {
      title: "Organizar fuerzas militares",
      text: "Para defender la revolución, y envió expediciones hacia distintos territorios.",
    },
  ],
};

// ───────────────────────── Moreno vs Saavedra
export const morenoSaavedra = {
  moreno: {
    name: "Mariano Moreno",
    postura: "Posición más revolucionaria",
    ideas: [
      "Consideraba necesario realizar cambios profundos.",
      "Quería avanzar con mayor rapidez.",
      "Se opuso a incorporar a la Junta a representantes del interior: la Junta debía conservar una estructura más reducida.",
    ],
    final:
      "El conflicto debilitó su posición. Renunció y posteriormente murió durante un viaje hacia Gran Bretaña.",
  },
  saavedra: {
    name: "Cornelio Saavedra",
    postura: "Postura más moderada",
    ideas: [
      "Prefería avanzar con mayor prudencia.",
      "Quería evitar cambios demasiado rápidos.",
      "Presidente de la Primera Junta.",
    ],
    final:
      "Con la incorporación de los diputados del interior, la Primera Junta se transformó en la Junta Grande.",
  },
};

// ───────────────────────── Gobiernos 1810 → 1816
export type Gobierno = {
  id: string;
  year: string;
  name: string;
  tagline: string;
  color: string;
  bullets: string[];
  people?: { label: string; names: string[] };
  warning?: string;
  extra?: { title: string; text: string };
};

export const gobiernos: Gobierno[] = [
  {
    id: "primera-junta",
    year: "1810–1811",
    name: "Primera Junta",
    tagline: "Primer gobierno patrio",
    color: "#3383c4",
    bullets: [
      "Formada el 25 de mayo de 1810 tras la renuncia de Cisneros.",
      "Presidida por Cornelio Saavedra.",
      "Gobernaba en nombre de Fernando VII, aunque estaba prisionero.",
      "Buscó extender la revolución y organizó fuerzas militares.",
    ],
    people: { label: "Presidente", names: ["Cornelio Saavedra"] },
  },
  {
    id: "junta-grande",
    year: "1811",
    name: "Junta Grande",
    tagline: "Se suman los diputados del interior",
    color: "#2f855a",
    bullets: [
      "A fines de 1810 se decidió incorporar a representantes de las ciudades del interior.",
      "Primera Junta → incorporación de diputados del interior → Junta Grande.",
      "Enfrentó numerosos problemas: diferencias políticas y dificultades para organizar el nuevo gobierno.",
      "Las campañas militares y los conflictos con los opositores a la revolución complicaban la situación.",
      "Terminó siendo reemplazada por otra forma de gobierno.",
    ],
    extra: {
      title: "¿Por qué había conflictos por la organización?",
      text: "Había que decidir quién debía ejercer el poder, cómo debía organizarse el gobierno, qué participación tendrían las ciudades del interior y qué relación tendría Buenos Aires con los demás territorios.",
    },
  },
  {
    id: "triunviratos",
    year: "1811–1812",
    name: "Triunviratos",
    tagline: "Primer y Segundo Triunvirato",
    color: "#d99a13",
    bullets: [
      "Después de la disolución de la Junta Grande se formó el Primer Triunvirato.",
      "En 1812 cayó el Primer Triunvirato y se formó el Segundo Triunvirato.",
      "El Segundo Triunvirato permitió avanzar hacia nuevas medidas políticas.",
      "Su hecho más importante: convocó a la Asamblea General Constituyente de 1813.",
    ],
    people: {
      label: "Segundo Triunvirato",
      names: ["Juan José Paso", "Nicolás Rodríguez Peña", "Antonio Álvarez Jonte"],
    },
  },
  {
    id: "asamblea",
    year: "1813",
    name: "Asamblea del Año XIII",
    tagline: "Grandes reformas… pero sin independencia",
    color: "#7c3aed",
    bullets: [
      "Se reunió en Buenos Aires en 1813.",
      "Objetivo: discutir la organización política del territorio y avanzar en las transformaciones de la Revolución.",
      "Eliminó los títulos de nobleza.",
      "Suprimió símbolos e instituciones del orden colonial.",
      "Eliminó los instrumentos de tortura.",
      "Tomó medidas contra la esclavitud y estableció la libertad de vientres.",
      "Estableció el Escudo Nacional y el Himno Nacional, y adoptó la bandera creada por Manuel Belgrano.",
    ],
    warning: "NO declaró la independencia.",
    extra: {
      title: "¿Qué significa libertad de vientres?",
      text: "Los hijos de mujeres esclavizadas nacidos desde ese momento serían considerados libres. No es lo mismo que la abolición inmediata: la esclavitud no desapareció completamente en ese momento.",
    },
  },
  {
    id: "directorio",
    year: "1814",
    name: "Directorio",
    tagline: "El poder en una sola persona",
    color: "#b23a48",
    bullets: [
      "Creado en 1814 tras la Asamblea del Año XIII, porque los conflictos políticos continuaron.",
      "Reemplazó al sistema del Triunvirato.",
      "Concentró el Poder Ejecutivo en una sola persona: el Director Supremo.",
      "Enfrentó conflictos políticos internos, problemas con sectores opositores, dificultades militares y la necesidad de organizar un gobierno estable.",
      "El proceso continuó hasta la declaración de independencia de 1816.",
    ],
    people: {
      label: "Directores Supremos",
      names: ["Gervasio Antonio de Posadas (primero)", "Carlos María de Alvear"],
    },
  },
  {
    id: "independencia",
    year: "9 de julio de 1816",
    name: "Declaración de la Independencia",
    tagline: "Congreso de Tucumán",
    color: "#1f6aa8",
    bullets: [
      "La independencia se declaró en el Congreso de Tucumán.",
      "Es el final del proceso que había empezado el 25 de mayo de 1810.",
      "Revolución de Mayo (1810) e Independencia (1816) NO son lo mismo.",
    ],
  },
];

// ───────────────────────── Medidas de la Asamblea (para la actividad de clasificación)
export const medidasAsamblea = [
  { text: "Eliminó los títulos de nobleza", ok: true },
  { text: "Estableció la libertad de vientres", ok: true },
  { text: "Eliminó los instrumentos de tortura", ok: true },
  { text: "Estableció el Escudo y el Himno Nacional", ok: true },
  { text: "Adoptó la bandera creada por Belgrano", ok: true },
  { text: "Suprimió símbolos e instituciones coloniales", ok: true },
  { text: "Declaró la independencia", ok: false },
  { text: "Abolió la esclavitud de inmediato", ok: false },
];

// ───────────────────────── La cadena completa
export const cadena = [
  "Crisis de la monarquía española",
  "Fernando VII queda prisionero",
  "Crisis de autoridad en América",
  "Semana de Mayo",
  "25 de mayo de 1810",
  "Primera Junta",
  "Conflictos entre Moreno y Saavedra",
  "Junta Grande",
  "Conflictos por la organización política",
  "Triunviratos",
  "Segundo Triunvirato (1812)",
  "Asamblea del Año XIII (1813)",
  "Directorio (1814)",
  "9 de julio de 1816 → Declaración de la Independencia",
];

// ───────────────────────── Fechas clave
export const fechas = [
  { date: "1806", event: "Primera invasión inglesa" },
  { date: "1807", event: "Segunda invasión inglesa" },
  { date: "1808", event: "Crisis de la monarquía española / Fernando VII queda prisionero" },
  { date: "1810", event: "Revolución de Mayo" },
  { date: "22 de mayo de 1810", event: "Cabildo Abierto" },
  { date: "25 de mayo de 1810", event: "Primera Junta" },
  { date: "1810–1811", event: "Primera Junta" },
  { date: "1811", event: "Junta Grande" },
  { date: "1812", event: "Segundo Triunvirato" },
  { date: "1813", event: "Asamblea del Año XIII" },
  { date: "1814", event: "Directorio" },
  { date: "9 de julio de 1816", event: "Declaración de la Independencia" },
];

// ───────────────────────── Quiz
export type QuizQ = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

export const quiz: QuizQ[] = [
  {
    q: "¿La Revolución de Mayo declaró la independencia?",
    options: [
      "Sí, el 25 de mayo de 1810.",
      "No. Inició el proceso revolucionario; la independencia se declaró el 9 de julio de 1816.",
      "Sí, pero solo para Buenos Aires.",
      "No, la independencia la declaró la Asamblea del Año XIII.",
    ],
    answer: 1,
    explain:
      "Pregunta trampa. El 25 de mayo de 1810 empieza el proceso; el 9 de julio de 1816 se declara la independencia en el Congreso de Tucumán.",
  },
  {
    q: "¿Cuáles son las tres causas principales de la Revolución de Mayo?",
    options: [
      "Reformas borbónicas, invasiones inglesas y crisis de la monarquía española.",
      "Bloqueo continental, batalla de Trafalgar y Congreso de Tucumán.",
      "Invasiones francesas, Cabildo Abierto y Directorio.",
      "Reformas borbónicas, Asamblea del Año XIII y libertad de vientres.",
    ],
    answer: 0,
    explain:
      "Reformas borbónicas → descontento. Invasiones inglesas → experiencia y poder criollo. Crisis española → vacío de poder.",
  },
  {
    q: "¿Qué pasó el 22 de mayo de 1810?",
    options: [
      "Se formó la Primera Junta.",
      "Se realizó el Cabildo Abierto para discutir si Cisneros debía seguir gobernando.",
      "Renunció Fernando VII.",
      "Se declaró la independencia.",
    ],
    answer: 1,
    explain:
      "En el Cabildo Abierto la mayoría sostuvo que el poder debía volver al pueblo (retroversión de la soberanía).",
  },
  {
    q: "¿Quién presidía la Primera Junta?",
    options: ["Mariano Moreno", "Manuel Belgrano", "Cornelio Saavedra", "Juan José Paso"],
    answer: 2,
    explain: "Cornelio Saavedra era el presidente. Moreno, Belgrano, Paso y otros eran integrantes.",
  },
  {
    q: "¿Cuál era la diferencia entre Moreno y Saavedra?",
    options: [
      "Moreno era moderado; Saavedra, revolucionario.",
      "Moreno era más revolucionario y quería cambios rápidos y profundos; Saavedra era moderado y prefería prudencia.",
      "Los dos querían mantener a Cisneros.",
      "No tenían diferencias, solo rivalidad personal.",
    ],
    answer: 1,
    explain:
      "Moreno = posición revolucionaria, cambios profundos y rápidos. Saavedra = postura moderada, prudencia.",
  },
  {
    q: "¿Cómo se transformó la Primera Junta en Junta Grande?",
    options: [
      "Con la renuncia de Saavedra.",
      "Con la incorporación de diputados de las ciudades del interior.",
      "Con la creación del Directorio.",
      "Con la llegada de tropas francesas.",
    ],
    answer: 1,
    explain:
      "Primera Junta → incorporación de diputados del interior → Junta Grande. Moreno se opuso a esa incorporación.",
  },
  {
    q: "¿Quiénes integraron el Segundo Triunvirato (1812)?",
    options: [
      "Saavedra, Moreno y Belgrano",
      "Posadas, Alvear y Castelli",
      "Juan José Paso, Nicolás Rodríguez Peña y Antonio Álvarez Jonte",
      "Azcuénaga, Alberti y Matheu",
    ],
    answer: 2,
    explain: "Paso, Rodríguez Peña y Álvarez Jonte. Su hecho clave: convocar la Asamblea del Año XIII.",
  },
  {
    q: "¿Qué significa 'libertad de vientres'?",
    options: [
      "La esclavitud quedó abolida de inmediato.",
      "Los hijos de mujeres esclavizadas nacidos desde ese momento serían libres.",
      "Se liberó a todos los esclavos mayores de edad.",
      "Se prohibió el comercio con Gran Bretaña.",
    ],
    answer: 1,
    explain:
      "Es distinto de la abolición inmediata: la esclavitud no desapareció completamente en ese momento.",
  },
  {
    q: "¿Cuál de estas cosas NO hizo la Asamblea del Año XIII?",
    options: [
      "Eliminar los títulos de nobleza",
      "Eliminar los instrumentos de tortura",
      "Declarar la independencia",
      "Establecer el Escudo y el Himno Nacional",
    ],
    answer: 2,
    explain: "Asamblea del Año XIII = grandes reformas, pero NO declaró la independencia.",
  },
  {
    q: "¿Qué cambió con el Directorio en 1814?",
    options: [
      "El poder pasó a un grupo de tres personas.",
      "El Poder Ejecutivo se concentró en una sola persona: el Director Supremo.",
      "Se restauró al virrey Cisneros.",
      "Se disolvió el Congreso de Tucumán.",
    ],
    answer: 1,
    explain:
      "El Directorio reemplazó al Triunvirato. El primer Director Supremo fue Gervasio Antonio de Posadas; después, entre otros, Carlos María de Alvear.",
  },
  {
    q: "¿Dónde y cuándo se declaró la independencia?",
    options: [
      "En Buenos Aires, el 25 de mayo de 1810",
      "En el Congreso de Tucumán, el 9 de julio de 1816",
      "En Buenos Aires, en 1813",
      "En Tucumán, en 1814",
    ],
    answer: 1,
    explain: "9 de julio de 1816, Congreso de Tucumán. Fecha que hay que saber sí o sí.",
  },
  {
    q: "¿Qué demostraron las invasiones inglesas (1806 y 1807)?",
    options: [
      "Que España podía defender Buenos Aires sin ayuda.",
      "Que los criollos podían organizarse, formar milicias y defenderse sin depender totalmente de las autoridades españolas.",
      "Que Napoleón dominaría América.",
      "Que Fernando VII volvería al trono.",
    ],
    answer: 1,
    explain:
      "Las autoridades coloniales no pudieron defender la ciudad; los criollos organizaron milicias y ganaron experiencia militar.",
  },
];

// ───────────────────────── Flashcards
export const flashcards = [
  { front: "¿Qué fue la Revolución de Mayo?", back: "Proceso revolucionario ocurrido en Buenos Aires en mayo de 1810, que produjo la caída del virrey y la formación de un nuevo gobierno." },
  { front: "Retroversión de la soberanía", back: "Ante la ausencia de una autoridad legítima (el rey cautivo), la soberanía volvía al pueblo. Idea central del Cabildo Abierto del 22 de mayo." },
  { front: "¿Quién era el virrey en mayo de 1810?", back: "Baltasar Hidalgo de Cisneros. Renunció el 25 de mayo." },
  { front: "Presidente de la Primera Junta", back: "Cornelio Saavedra." },
  { front: "Integrantes de la Primera Junta", back: "Saavedra (presidente), Moreno, Paso, Belgrano, Castelli, Azcuénaga, Alberti, Matheu y Larrea." },
  { front: "¿En nombre de quién gobernaba la Primera Junta?", back: "De Fernando VII, aunque este se encontraba prisionero." },
  { front: "Moreno", back: "Posición más revolucionaria: cambios profundos y rápidos. Se opuso a sumar diputados del interior. Renunció y murió en viaje a Gran Bretaña." },
  { front: "Saavedra", back: "Postura más moderada: prudencia y evitar cambios demasiado rápidos." },
  { front: "Junta Grande", back: "Primera Junta + diputados del interior (1811). Tuvo problemas políticos y militares y fue reemplazada por el Primer Triunvirato." },
  { front: "Segundo Triunvirato (1812)", back: "Paso, Rodríguez Peña y Álvarez Jonte. Convocó la Asamblea General Constituyente de 1813." },
  { front: "Asamblea del Año XIII", back: "1813, Buenos Aires. Eliminó títulos de nobleza y tortura, libertad de vientres, Escudo, Himno y bandera. NO declaró la independencia." },
  { front: "Libertad de vientres", back: "Los hijos de mujeres esclavizadas nacidos desde ese momento serían libres. No es abolición inmediata." },
  { front: "Directorio (1814)", back: "Poder Ejecutivo en una sola persona: el Director Supremo. Primero: Gervasio Antonio de Posadas. Luego, entre otros, Carlos María de Alvear." },
  { front: "9 de julio de 1816", back: "Declaración de la Independencia en el Congreso de Tucumán." },
  { front: "Batalla de Trafalgar (1805)", back: "La flota franco-española fue derrotada por Gran Bretaña. Parte de la crisis de la monarquía española." },
  { front: "Bloqueo continental (1806)", back: "Establecido por Napoleón para debilitar económicamente a Gran Bretaña." },
];

// ───────────────────────── Respuestas modelo para el examen
export const respuestasExamen = [
  {
    q: "¿Por qué ocurrió la Revolución de Mayo?",
    a: "Hubo varias causas. Las reformas borbónicas generaron descontento entre los criollos, las invasiones inglesas demostraron que los criollos podían organizarse y defender Buenos Aires, y la crisis de la monarquía española provocó un vacío de poder cuando Fernando VII fue tomado prisionero.",
    keywords: ["reformas borbónicas", "descontento", "invasiones inglesas", "organizarse", "crisis", "vacío de poder", "Fernando VII"],
  },
  {
    q: "¿Qué pasó el 25 de mayo?",
    a: "Cisneros renunció y se formó la Primera Junta, el primer gobierno patrio de Buenos Aires.",
    keywords: ["Cisneros", "renunció", "Primera Junta", "primer gobierno patrio"],
  },
  {
    q: "¿Qué diferencia había entre Moreno y Saavedra?",
    a: "Moreno tenía una posición más revolucionaria y quería avanzar con cambios más profundos, mientras que Saavedra tenía una posición más moderada y prefería avanzar con mayor prudencia.",
    keywords: ["Moreno", "revolucionaria", "cambios profundos", "Saavedra", "moderada", "prudencia"],
  },
  {
    q: "¿Qué fue la Asamblea del Año XIII?",
    a: "Fue una asamblea reunida en 1813 que tomó importantes medidas políticas y sociales, como la libertad de vientres, la eliminación de títulos de nobleza y la prohibición de instrumentos de tortura, pero no declaró la independencia.",
    keywords: ["1813", "libertad de vientres", "títulos de nobleza", "tortura", "no declaró la independencia"],
  },
  {
    q: "¿La Revolución de Mayo declaró la independencia? (pregunta trampa)",
    a: "No. La Revolución de Mayo inició el proceso revolucionario en 1810. La independencia fue declarada el 9 de julio de 1816.",
    keywords: ["No", "1810", "proceso", "9 de julio de 1816"],
  },
];
