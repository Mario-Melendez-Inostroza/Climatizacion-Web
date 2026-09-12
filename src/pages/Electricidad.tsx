import ServicePage from "@/components/ServicePage";
import { servicios } from "@/data/servicios";
import fotoPinzaAmperimetrica from "@/img/Gasfiteria/deteccion_fugas_con_gas_trazador.webp";
import fotoTableroAdvertencia from "@/img/Electricidad/tablero_advertencia.webp";
import fotoCableadoTablero from "@/img/Electricidad/cableado_tablero.webp";
import fotoTableroIndustrial from "@/img/Electricidad/tablero_industrial.webp";
import fotoCanalizacionElectrica from "@/img/Electricidad/canalizacion_electrica.webp";

const s = servicios.find((x) => x.ruta === "/electricidad")!;

const galeria = [
  { src: fotoPinzaAmperimetrica, nombre: "Medición eléctrica con pinza amperimétrica", width: 800, height: 600 },
  { src: fotoTableroAdvertencia, nombre: "Mantención de tablero eléctrico", width: 720, height: 1280 },
  { src: fotoCableadoTablero, nombre: "Cableado y conexión de tablero eléctrico", width: 800, height: 1067 },
  { src: fotoTableroIndustrial, nombre: "Instalación de tablero eléctrico industrial", width: 720, height: 1280 },
  { src: fotoCanalizacionElectrica, nombre: "Canalización eléctrica en obra", width: 800, height: 800 },
];

export default function Electricidad() {
  return (
    <ServicePage
      titulo={s.nombre}
      descripcion="Instalaciones eléctricas seguras y certificadas para tu hogar o empresa."
      acento={s.acento}
      items={s.items}
      imagen={s.imagen}
      galeria={galeria}
      rutaActual={s.ruta}
    />
  );
}
