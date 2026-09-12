import ServicePage from "@/components/ServicePage";
import { servicios } from "@/data/servicios";
import fotoAireAcondicionado from "@/img/Climatizacion/aire_acondicionado.webp";
import fotoSplitDormitorio1 from "@/img/Climatizacion/split_dormitorio_1.webp";
import fotoSplitDormitorio2 from "@/img/Climatizacion/split_dormitorio_2.webp";
import fotoSplitBalcon from "@/img/Climatizacion/split_balcon.webp";
import fotoUnidadExteriorMuro from "@/img/Climatizacion/unidad_exterior_muro.webp";
import fotoUnidadExteriorCubierta from "@/img/Climatizacion/unidad_exterior_cubierta.webp";
import fotoUnidadExteriorPatio from "@/img/Climatizacion/unidad_exterior_patio.webp";
import fotoUnidadExteriorTecho from "@/img/Climatizacion/unidad_exterior_techo.webp";

const s = servicios.find((x) => x.ruta === "/climatizacion")!;

const galeria = [
  { src: fotoAireAcondicionado, nombre: "Instalación de aire acondicionado", width: 800, height: 450 },
  { src: fotoSplitDormitorio1, nombre: "Instalación de split en dormitorio", width: 800, height: 1067, focus: "center 22%" },
  { src: fotoSplitDormitorio2, nombre: "Instalación de equipo split", width: 800, height: 1067, focus: "center 30%" },
  { src: fotoSplitBalcon, nombre: "Instalación de split en balcón", width: 800, height: 1067, focus: "center 34%" },
  { src: fotoUnidadExteriorMuro, nombre: "Instalación de unidad exterior en muro", width: 800, height: 1067, focus: "center 26%" },
  { src: fotoUnidadExteriorCubierta, nombre: "Instalación de unidad exterior bajo cubierta", width: 800, height: 1067, focus: "center 32%" },
  { src: fotoUnidadExteriorPatio, nombre: "Instalación de unidad exterior en patio", width: 800, height: 1067, focus: "center 68%" },
  { src: fotoUnidadExteriorTecho, nombre: "Instalación de unidad exterior en techo", width: 800, height: 1067, focus: "center 46%" },
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
