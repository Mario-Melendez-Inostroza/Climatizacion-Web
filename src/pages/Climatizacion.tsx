import ServicePage from "@/components/ServicePage";
import { servicios } from "@/data/servicios";
import fotoAireAcondicionado from "@/img/aire_acondicionado.jpeg";

const s = servicios.find((x) => x.ruta === "/climatizacion")!;

const galeria = [
  { src: fotoAireAcondicionado, nombre: "Instalación de aire acondicionado" },
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
