import fotoGasfiteria from "@/img/destape_camara_filtracion.jpeg";
import fotoClimatizacion from "@/img/aire_acondicionado.jpeg";
import fotoElectricidad from "@/img/instalacion_focos.jpeg";

export interface Servicio {
  nombre: string;
  descripcion: string;
  acento: string;
  ruta: string;
  icono: "droplets" | "snowflake" | "zap";
  items: string[];
  imagen?: string;
}

export const servicios: Servicio[] = [
  {
    nombre: "Gasfitería",
    descripcion: "Destapes, detección de fugas, calefont y redes de agua y gas.",
    acento: "#D93025",
    ruta: "/gasfiteria",
    icono: "droplets",
    imagen: fotoGasfiteria,
    items: [
      "Detección de fugas con gas trazador",
      "Destape de alcantarillado y cámaras",
      "Limpieza de cañerías",
      "Instalación y mantenimiento de calefont",
      "Instalación de redes de agua potable, desagüe y gas (técnico autorizado SEC)",
      "Cambio e instalación de llaves, sifón, tinas, WC y cambio de sello",
    ],
  },
  {
    nombre: "Climatización",
    descripcion: "Instalación y mantenimiento de aire acondicionado y equipos industriales.",
    acento: "#0EA5E9",
    ruta: "/climatizacion",
    icono: "snowflake",
    imagen: fotoClimatizacion,
    items: [
      "Instalación y mantenimiento de aire acondicionado",
      "Reparación de equipos chiller, VRV, fancoil y rooftop",
      "Instalación de cámaras de frío",
      "Recarga de gas para todo tipo de equipos y sistemas",
    ],
  },
  {
    nombre: "Electricidad",
    descripcion: "Circuitos, tableros, puntos eléctricos y detección de fallas.",
    acento: "#F59E0B",
    ruta: "/electricidad",
    icono: "zap",
    imagen: fotoElectricidad,
    items: [
      "Instalación de circuitos completos",
      "Mantenimiento de tableros",
      "Cambio de focos",
      "Instalación de puntos eléctricos",
      "Detección y reparación de fugas eléctricas",
    ],
  },
];

export const contacto = {
  whatsapp: "+56 9 5339 4409",
  whatsappHref: "https://wa.me/56953394409",
  telefono: "+56 9 3128 6291",
  telefonoHref: "tel:+56931286291",
  ubicacion: "Santiago, Chile",
};
