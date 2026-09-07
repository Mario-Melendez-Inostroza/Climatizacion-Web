import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Gasfiteria from "@/pages/Gasfiteria";
import Climatizacion from "@/pages/Climatizacion";
import Electricidad from "@/pages/Electricidad";
import NotFound from "@/pages/NotFound";

// Al cambiar de ruta, React Router no resetea el scroll (a diferencia de una
// navegación tradicional): sin esto, una página nueva se abre en el mismo
// scrollY donde quedó la anterior. Se omite cuando la navegación trae un
// `scrollTo` (vuelta a una sección del Home), que ya maneja su propio scroll.
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    const scrollTarget = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTarget) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gasfiteria" element={<Gasfiteria />} />
        <Route path="/climatizacion" element={<Climatizacion />} />
        <Route path="/electricidad" element={<Electricidad />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
