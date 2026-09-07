import ServicePage from "@/components/ServicePage";
import { servicios } from "@/data/servicios";
import fotoPinzaAmperimetrica from "@/img/deteccion_fugas_con_gas_trazador.jpeg";

const s = servicios.find((x) => x.ruta === "/electricidad")!;

const galeria = [
  { src: fotoPinzaAmperimetrica, nombre: "Medición eléctrica con pinza amperimétrica" },
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
    />
  );
}
