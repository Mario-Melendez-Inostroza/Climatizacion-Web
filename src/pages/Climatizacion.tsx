import ServicePage from "@/components/ServicePage";
import { servicios } from "@/data/servicios";
import fotoAireAcondicionado from "@/img/Climatizacion/aire_acondicionado.webp";

const s = servicios.find((x) => x.ruta === "/climatizacion")!;

const galeria = [
  { src: fotoAireAcondicionado, nombre: "Instalación de aire acondicionado", width: 800, height: 450 },
];

export default function Climatizacion() {
  return (
    <ServicePage
      titulo={s.nombre}
      descripcion="Instalación, mantenimiento y reparación de sistemas de clima para hogar, comercio e industria."
      acento={s.acento}
      items={s.items}
      imagen={s.imagen}
      galeria={galeria}
    />
  );
}
