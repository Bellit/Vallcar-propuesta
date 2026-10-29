// Datos compartidos por las dos propuestas. En el proyecto real saldrán del CMS.

export const contacto = {
  telefono: "938 464 298",
  telefonoHref: "tel:+34938464298",
  telefonoParking: "640 542 128",
  email: "vallcar@vallcar.com",
  direccion: "Crta. de Caldes a Canovelles C-1415b, Km 10.2",
  cp: "08420 Canovelles (Barcelona)",
  referencia: "Junto a la autovía C-17",
  maps: "https://maps.google.com/?q=Vallcar+Canovelles",
  redes: [
    { nombre: "Facebook", url: "https://www.facebook.com/vallcarsa" },
    { nombre: "Instagram", url: "https://instagram.com/vallcarsa" },
  ],
};

export const horario = [
  { dias: "Lunes a viernes", horas: "9:00–13:00 y 16:00–19:30" },
  { dias: "Sábado", horas: "10:00–14:00" },
  { dias: "Domingo", horas: "Cerrado" },
];

const WIX = "https://static.wixstatic.com/media/";
export const foto = (id: string, w = 800, h = 600) =>
  `${WIX}${id}/v1/fill/w_${w},h_${h},al_c,q_80/img.jpg`;

export const fotos = {
  exposicion: "67444e_a977978801604219923e5e9740421342~mv2.jpeg",
  kids470: "67444e_9cef4087eac14c30adf4269dcfcb8109~mv2.jpeg",
  sport455: "67444e_b8b723c0dfab4cc5b51074572a96e46f~mv2.jpeg",
  sport480: "67444e_2d2062c6185643fa9352d1728b61774e~mv2.jpg",
};

export type Tipo = "nueva" | "ocasion" | "remolque";

export interface Caravana {
  slug: string;
  modelo: string;
  serie: string;
  marca: string;
  tipo: Tipo;
  vendida?: boolean;
  plazas: number;
  longitud: string;
  distribucion: string;
  descripcion: string;
  img: string;
}

export const nombreTipo: Record<Tipo, string> = {
  nueva: "Nueva",
  ocasion: "Ocasión",
  remolque: "Remolque",
};

// Las unidades marcadas como vendidas no se publican: basta con marcarlas en el CMS.
export const stock: Caravana[] = [
  { slug: "easy-366pe-h", modelo: "Easy 366pe H", serie: "Sterckeman Easy", marca: "Sterckeman", tipo: "nueva", vendida: true, plazas: 4, longitud: "5,3 m", distribucion: "Cama doble y comedor convertible", descripcion: "Compacta y ligera, pensada para remolcar con coches de tamaño medio.", img: "67444e_53abe64757074e2d9fe6d49fadd1f112~mv2.jpeg" },
  { slug: "easy-390cp", modelo: "Easy 390cp", serie: "Pack Anniversary + Pack Look", marca: "Sterckeman", tipo: "nueva", vendida: true, plazas: 3, longitud: "5,95 m", distribucion: "Cama doble y comedor", descripcion: "Unidad con los packs Anniversary y Look.", img: "67444e_0c8e694e4a9849f28f799738f9c82bcd~mv2.jpeg" },
  { slug: "sport-480-cp", modelo: "Sport 480 cp", serie: "Sterckeman Sport", marca: "Sterckeman", tipo: "nueva", plazas: 4, longitud: "7 m", distribucion: "Cama doble y comedor convertible", descripcion: "La gama Sport combina más equipamiento de serie con un exterior de diseño propio.", img: "67444e_2d2062c6185643fa9352d1728b61774e~mv2.jpg" },
  { slug: "easy-470pe-kids", modelo: "Easy 470pe Kid's", serie: "Literas para niños", marca: "Sterckeman", tipo: "nueva", plazas: 6, longitud: "6,65 m", distribucion: "Cama doble, literas y comedor convertible", descripcion: "Pensada para familias: zona de literas independiente para los niños.", img: "67444e_dbf5c0588f394ec6ab62c44520972169~mv2.jpg" },
  { slug: "easy-470pe-kids-anniversary", modelo: "Easy 470pe Kid's", serie: "Pack Anniversary", marca: "Sterckeman", tipo: "nueva", plazas: 6, longitud: "6,65 m", distribucion: "Cama doble, literas y comedor convertible", descripcion: "La 470pe Kid's con el equipamiento extra del Pack Anniversary.", img: "67444e_9cef4087eac14c30adf4269dcfcb8109~mv2.jpeg" },
  { slug: "easy-490pe-kids-anniversary", modelo: "Easy 490pe Kid's", serie: "Pack Anniversary", marca: "Sterckeman", tipo: "nueva", plazas: 6, longitud: "5,7 m", distribucion: "Cama doble, literas y comedor convertible", descripcion: "Seis plazas con literas y nevera XL, con el Pack Anniversary.", img: "67444e_5dc5db9faa9f4b3d8dbf13a353f03a86~mv2.jpeg" },
  { slug: "easy-496pe-kids-2027", modelo: "Easy 496pe Kid's", serie: "Modelo 2027", marca: "Sterckeman", tipo: "nueva", plazas: 6, longitud: "7 m", distribucion: "Cama doble, literas y comedor convertible", descripcion: "La familiar más grande de la gama Easy, ya en versión 2027.", img: "67444e_a977978801604219923e5e9740421342~mv2.jpeg" },
  { slug: "sport-edition-455cp", modelo: "Sport Edition 455cp", serie: "Edición especial", marca: "Sterckeman", tipo: "nueva", plazas: 4, longitud: "6,71 m", distribucion: "Cama doble y comedor convertible", descripcion: "Edición especial con decoración exterior Sport Edition.", img: "67444e_b8b723c0dfab4cc5b51074572a96e46f~mv2.jpeg" },
  { slug: "montana-explorer", modelo: "Montana Explorer", serie: "Remolque tienda", marca: "Comanche", tipo: "remolque", plazas: 4, longitud: "3,55 m", distribucion: "Tienda desplegable con dos camas dobles", descripcion: "Remolque tienda Comanche: ligero, se remolca con casi cualquier coche y se monta en minutos.", img: "67444e_3d518df7204b4a98bea7fddb838308ad~mv2.jpg" },
  { slug: "alize-420cp-ocasion", modelo: "Alize 420cp", serie: "Revisada en nuestro taller", marca: "Sterckeman", tipo: "ocasion", plazas: 4, longitud: "4,97 m", distribucion: "Cama doble y comedor convertible", descripcion: "Unidad de ocasión revisada en nuestro taller antes de la entrega.", img: "67444e_f1dc759da66445faad5915c3ba43f9a7~mv2.jpg" },
];

export const disponibles = stock.filter((c) => !c.vendida);

export const alquiler = [
  { modelo: "Easy 380CE", plazas: 4, camas: "Comedor convertible en cama doble y literas", extras: ["Cocina con frigorífico XL", "Aseo"], img: fotos.sport480 },
  { modelo: "Easy 390CP", plazas: 4, camas: "Cama doble y comedor convertible en cama doble", extras: ["Cocina con frigorífico", "Aseo"], img: fotos.sport455 },
  { modelo: "Easy 470PE Kid's", plazas: 6, camas: "Cama doble, literas y comedor convertible", extras: ["Cocina con frigorífico", "Aseo", "Nevera XL"], img: fotos.kids470 },
  { modelo: "Easy 496PE Kid's", plazas: 6, camas: "Cama doble, literas y comedor convertible", extras: ["Cocina con frigorífico", "Aseo", "Nevera XL", "Visita virtual 360º"], img: fotos.exposicion },
];

export interface Pagina {
  slug: string;
  menu: string;
  titulo: string;
  entradilla: string;
  texto: string[];
  puntos: string[];
  asunto: string;
  img: string;
  lugar?: { nombre: string; detalle: string };
}

export const paginas: Pagina[] = [
  {
    slug: "taller", menu: "Taller",
    titulo: "Taller para caravanas, autocaravanas y remolques",
    entradilla: "Mantenimiento, reparaciones y gestión completa de la ITV, de todas las marcas.",
    texto: [
      "Disponemos de taller propio especializado en caravanas, autocaravanas y remolques.",
      "Recomendamos una revisión anual: es la mejor forma de evitar problemas de humedad y de frenos, los dos más habituales.",
    ],
    puntos: ["Revisión anual y control de humedades", "Frenos, chasis y lanza", "Gestión de revisiones ITV", "Instalación de accesorios"],
    asunto: "Pedir cita en el taller", img: fotos.sport455,
  },
  {
    slug: "parking", menu: "Parking",
    titulo: "Parking para caravanas, autocaravanas y campers",
    entradilla: "Cubierto y descubierto, con acceso 24 horas, en Lliçà d'Amunt.",
    texto: [
      "Un parking amplio muy cerca de la AP-7, a un paso de Granollers, Montmeló, Mollet del Vallès y Parets del Vallès.",
      "Deja tu vehículo a buen recaudo y despreocúpate hasta el próximo viaje.",
    ],
    puntos: ["Plazas cubiertas y descubiertas", "Acceso 24/7", "Junto a la AP-7", "Información también en el 640 542 128"],
    asunto: "Consultar plazas de parking", img: fotos.exposicion,
    lugar: { nombre: "Lliçà d'Amunt", detalle: "Muy cerca de la AP-7. Te damos la ubicación exacta al reservar." },
  },
  {
    slug: "tienda", menu: "Tienda",
    titulo: "Tienda de accesorios y recambios",
    entradilla: "Miles de referencias para tu caravana y para el camping, en nuestra tienda de Canovelles.",
    texto: [
      "Recambios originales y compatibles para todas las marcas de caravanas y autocaravanas, y mobiliario y accesorios de camping.",
      "Pide por teléfono o en la tienda y te lo enviamos en 24/48 horas a cualquier punto del país.",
    ],
    puntos: ["Recambios para todas las marcas", "Mobiliario y accesorios de camping", "Pedidos por teléfono o en tienda", "Envíos en 24/48 h"],
    asunto: "Consultar un accesorio o recambio", img: fotos.sport480,
  },
  {
    slug: "seguros-y-financiacion", menu: "Seguros y financiación",
    titulo: "Seguros y financiación",
    entradilla: "Te ayudamos a pagar tu caravana y a asegurarla, sin salir de Vallcar.",
    texto: [
      "Gestionamos la financiación para la compra de tu caravana o remolque nuevo.",
      "También te ayudamos a escoger la póliza que mejor se adapta a tu caravana y nos encargamos de los trámites.",
    ],
    puntos: ["Financiación de caravanas y remolques nuevos", "Asesoramiento sobre pólizas", "Gestión de los trámites"],
    asunto: "Consultar seguros o financiación", img: fotos.kids470,
  },
  {
    slug: "quienes-somos", menu: "Quiénes somos",
    titulo: "A vuestro servicio desde 1985",
    entradilla: "Pioneros del caravaning en España e importadores de Sterckeman para todo el país.",
    texto: [
      "Vallcar, S.A. nació de mucho trabajo y esfuerzo desde los inicios del caravaning en España.",
      "Fuimos de los primeros en importar grandes marcas de caravanas como Sterckeman, de la que somos agentes para todo el país. También somos distribuidores oficiales de remolques Comanche.",
      "En Vallcar encontrarás venta, alquiler y reparación de caravanas, autocaravanas y remolques tienda, además de un catálogo enorme de accesorios y recambios.",
    ],
    puntos: ["Agentes de Sterckeman para toda España", "Distribuidores oficiales de remolques Comanche", "Red de distribuidores en todo el país"],
    asunto: "Escribir a Vallcar", img: fotos.exposicion,
  },
];

export const pagina = (slug: string) => paginas.find((p) => p.slug === slug)!;
