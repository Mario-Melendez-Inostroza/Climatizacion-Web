import ServicePage from "@/components/ServicePage";
import { servicios } from "@/data/servicios";
import fotoCalefont from "@/img/gasfiteria_1.webp";
import fotoLavaplatos from "@/img/destape_lavaplatos.webp";
import fotoPiletas from "@/img/destape_piletas.webp";
import fotoRedAguaGas from "@/img/instalacion_red_agua_gas.webp";
import fotoDesague from "@/img/instalacion_desgue.webp";
import fotoFugaCanheria from "@/img/reparacion_fugas.webp";
import fotoGasTrazador from "@/img/deteccion_fugas_electricas.webp";

const s = servicios.find((x) => x.ruta === "/gasfiteria")!;

const galeria = [
  { src: fotoCalefont, nombre: "Reparación de calefont", width: 800, height: 902 },
  { src: fotoGasTrazador, nombre: "Detección de fugas con gas trazador", width: 720, height: 1600 },
  { src: fotoLavaplatos, nombre: "Destape de lavaplatos", width: 800, height: 1422 },
  { src: fotoPiletas, nombre: "Destape de pileta", width: 800, height: 1067 },
  { src: fotoDesague, nombre: "Instalación de desagüe", width: 800, height: 1326 },
  { src: fotoFugaCanheria, nombre: "Reparación de fuga en cañería", width: 800, height: 1423 },
  { src: fotoRedAguaGas, nombre: "Instalación de red de agua y gas", width: 800, height: 1422 },
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
