import ServicePage from "@/components/ServicePage";
import { servicios } from "@/data/servicios";
import fotoCalefont from "@/img/gasfiteria_1.jpeg";
import fotoLavaplatos from "@/img/destape_lavaplatos.jpeg";
import fotoPiletas from "@/img/destape_piletas.jpeg";
import fotoRedAguaGas from "@/img/instalacion_red_agua_gas.jpeg";
import fotoDesague from "@/img/instalacion_desgue.jpeg";
import fotoFugaCanheria from "@/img/reparacion_fugas.jpeg";
import fotoGasTrazador from "@/img/deteccion_fugas_electricas.jpeg";

const s = servicios.find((x) => x.ruta === "/gasfiteria")!;

const galeria = [
  { src: fotoCalefont, nombre: "Reparación de calefont" },
  { src: fotoGasTrazador, nombre: "Detección de fugas con gas trazador" },
  { src: fotoLavaplatos, nombre: "Destape de lavaplatos" },
  { src: fotoPiletas, nombre: "Destape de pileta" },
  { src: fotoDesague, nombre: "Instalación de desagüe" },
  { src: fotoFugaCanheria, nombre: "Reparación de fuga en cañería" },
  { src: fotoRedAguaGas, nombre: "Instalación de red de agua y gas" },
];

export default function Gasfiteria() {
  return (
    <ServicePage
      titulo={s.nombre}
      descripcion="Soluciones completas en agua, desagüe y gas, ejecutadas por técnico autorizado SEC."
      acento={s.acento}
      items={s.items}
      imagen={s.imagen}
      galeria={galeria}
    />
  );
}
