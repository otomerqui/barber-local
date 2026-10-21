// ─────────────────────────────────────────────────────────────
// All site content lives here (hardcoded, Spanish, prices in COP).
// Replace the placeholder values for each client.
// Photos: swap any Unsplash URL for a local file, e.g. "/images/hero.jpg"
// (put files in /public/images and remove the Unsplash host from next.config.ts if unused).
// ─────────────────────────────────────────────────────────────

const unsplash = (id: string, w = 800) => `https://images.unsplash.com/${id}?w=${w}&q=80`;

export const site = {
  name: "Barbería ES",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Barbería premium: cortes, degradados, cuidado de la barba y afeitado con toalla caliente. Reserva tu cita en línea.",
  phone: "+57 300 000 0000",
  address: "Parque de la 93, Cra. 11 #93D-80",
  cityState: "Chapinero, Bogotá",
  hours: [
    { day: "Lun – Vie", time: "9AM – 8PM" },
    { day: "Sábado", time: "9AM – 6PM" },
    { day: "Domingo", time: "10AM – 4PM" },
  ],
  social: {
    ig: "https://www.instagram.com/",
    fb: "https://www.facebook.com/",
  } as Record<string, string>,
  footerTagline:
    "Donde la tradición se une al arte. Servicios de barbería de primera calidad basados en la habilidad, la dedicación y el arte del corte perfecto.",
  credit: { label: "En la Web Pro", url: "https://www.enlawebpro.online/" },
};

export const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "yourname";

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address}, ${site.cityState}`,
)}&output=embed`;

export const hero = {
  image: "/img/barber-hero.webp",
  tag: "Barbería premium",
  line1: "EL ARTE",
  line2: "DEL",
  line3: "Corte perfecto",
  subtitle: "Donde la tradición se une a la precisión. Cada visita es un ritual, cada corte es una obra maestra.",
  cta: "Reserva ahora",
  stats: [
    { num: "12+", label: "Años de actividad" },
    { num: "4K+", label: "Clientes satisfechos" },
    { num: "8", label: "Barberos expertos" },
  ],
};

export const marquee = [
  "Cortes de primera calidad",
  "Afeitado con toalla caliente",
  "Cuidado de la barba",
  "Tratamiento capilar",
  "Coloración del cabello",
  "Degradados y taper",
];

export const about = {
  tag: "Nuestra historia",
  title: "Respetamos la tradición de la barbería clásica.",
  description:
    "Nacidos de la pasión por el oficio, desde 2012 marcamos la pauta en barbería de alta calidad. Combinamos técnicas tradicionales con un estilo moderno: cada cliente sale luciendo y sintiéndose de maravilla.",
  year: "2012",
  imageMain: "/img/main-image.webp",
  imageMainAlt: "Barbero trabajando",
  imageAccent: "/img/accent-image.webp",
  imageAccentAlt: "Herramientas de barbería",
  features: [
    { label: "Precisión", text: "Cada corte se realiza con una atención al detalle propia de un cirujano." },
    { label: "Experiencia", text: "Más de una década de barbería refinada y de alta calidad." },
    { label: "Productos", text: "Líneas de cuidado personal de alta gama utilizadas por profesionales." },
    { label: "Atmósfera", text: "Un espacio diseñado para la comodidad, la artesanía y la conversación." },
  ],
};

export type Service = {
  slug: string;
  name: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  /** Price in Colombian pesos */
  price: number;
  duration: string;
  featured?: boolean;
  image: string;
  /** Slug of the matching Cal.com event type: cal.com/<username>/<calSlug> */
  calSlug: string;
};

// Order matters: the featured service renders first, the rest follow (same logic as the WP theme).
export const services: Service[] = [
  {
    slug: "barba",
    name: "Dar forma y estilo a la barba",
    tag: "Cuidado de la barba",
    shortDesc: "Perfilado preciso, toalla caliente y aceite para una barba definida.",
    longDesc:
      "Diseñamos la forma que mejor va con tu rostro: perfilado con navaja, recorte a medida, toalla caliente y aceite para dejar la barba suave y definida.",
    price: 25000,
    duration: "30 min",
    featured: true,
    image: unsplash("photo-1621605815971-fbc98d665033"),
    calSlug: "dar-forma-barba",
  },
  {
    slug: "acondicionamiento",
    name: "Aplicaciones de acondicionamiento y aceite",
    tag: "Cuidado capilar",
    shortDesc: "Hidratación profunda para cabello y barba.",
    longDesc:
      "Tratamiento de acondicionamiento con aceites seleccionados que hidratan, suavizan y devuelven el brillo al cabello y a la barba.",
    price: 25000,
    duration: "30 min",
    image: unsplash("photo-1503951914875-452162b0f3f1"),
    calSlug: "acondicionamiento-aceite",
  },
  {
    slug: "corte-estandar",
    name: "Cortes estándar para hombres y niños",
    tag: "Cortes y degradados clásicos",
    shortDesc: "El corte de siempre, bien hecho, para toda la familia.",
    longDesc:
      "Corte a tijera o a máquina con acabado limpio en cuello y contornos. Ideal para hombres y niños que buscan un look prolijo y fácil de mantener.",
    price: 30000,
    duration: "30 min",
    image: unsplash("photo-1599351431202-1e0f0137899a"),
    calSlug: "corte-estandar",
  },
  {
    slug: "degradados",
    name: "Degradados y cortes rapados",
    tag: "Degradados",
    shortDesc: "Degradados precisos, de piel a corte medio.",
    longDesc:
      "Degradados difuminados y cortes rapados con transiciones limpias, líneas definidas y un acabado de precisión.",
    price: 35000,
    duration: "45 min",
    image: unsplash("photo-1585747860715-2ba37e788b70"),
    calSlug: "degradado-rapado",
  },
  {
    slug: "cabello-largo",
    name: "Mantenimiento del cabello largo",
    tag: "Cabello largo",
    shortDesc: "Puntas, forma y cuidado para melenas largas.",
    longDesc:
      "Recorte de puntas, definición de la forma y tratamiento para mantener el cabello largo saludable, con movimiento y sin perder largo.",
    price: 40000,
    duration: "45 min",
    image: unsplash("photo-1622286342621-4bd786c2447c"),
    calSlug: "cabello-largo",
  },
];

export const gallery = [
  { image: unsplash("photo-1503951914875-452162b0f3f1", 900), alt: "El arte", label: "EL ARTE" },
  { image: unsplash("photo-1599351431202-1e0f0137899a", 600), alt: "Barbas", label: "BARBAS" },
  { image: unsplash("photo-1621605815971-fbc98d665033", 600), alt: "Precisión", label: "PRECISIÓN" },
  { image: unsplash("photo-1585747860715-2ba37e788b70", 600), alt: "Tradición", label: "TRADICIÓN" },
  { image: unsplash("photo-1622286342621-4bd786c2447c", 600), alt: "Estilo", label: "ESTILO" },
  { image: unsplash("photo-1519500528352-2d1460418d41", 600), alt: "Cuidado", label: "CUIDADO" },
];

// Placeholder team. Replace names, photos and years with the real barbers.
export const barbers = [
  { name: "Andrés Rojas", role: "Barbero", experience: "8 años", photo: unsplash("photo-1507003211169-0a1dd7228f2d", 600), instagram: "", facebook: "" },
  { name: "Camilo Vargas", role: "Hair stylist", experience: "6 años", photo: unsplash("photo-1500648767791-00dcc994a43e", 600), instagram: "", facebook: "" },
  { name: "Julián Torres", role: "Barbero", experience: "10 años", photo: unsplash("photo-1472099645785-5658abf4ff4e", 600), instagram: "", facebook: "" },
  { name: "Mateo Pardo", role: "Hair stylist", experience: "4 años", photo: unsplash("photo-1519085360753-af0119f7cbe7", 600), instagram: "", facebook: "" },
];

export const testimonials = [
  {
    text: "La mejor experiencia en una barbería que he tenido. Julián se tomó su tiempo, escuchó exactamente lo que quería y superó todas mis expectativas. El afeitado con toalla caliente es imprescindible.",
    author: "Andrés H.",
    meta: "Cliente habitual desde 2019",
    stars: 5,
    avatar: unsplash("photo-1568602471122-7832951cc4c5", 100),
  },
  {
    text: "La atención al detalle aquí es inigualable. Recordaron mis preferencias desde la primera visita y el ambiente invita a quedarse todo el día. Una auténtica barbería para caballeros.",
    author: "Santiago R.",
    meta: "Cliente habitual desde 2021",
    stars: 5,
    avatar: unsplash("photo-1506794778202-cad84cf45f1d", 100),
  },
  {
    text: "He visitado barberías de todo el mundo y esta es, sin duda, la mejor. El degradado que hace Camilo es técnicamente impecable. Buena música, bebidas frías y una conversación aún mejor.",
    author: "Carlos M.",
    meta: "Cliente habitual desde 2018",
    stars: 5,
    avatar: unsplash("photo-1531746020798-e6953c6e8e04", 100),
  },
];

/** 25000 -> "$25.000" (Colombian peso formatting, deterministic on server and client) */
export const formatCOP = (n: number) => `$${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
