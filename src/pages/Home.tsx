import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Nosotros from "@/components/Nosotros";
import Clientes from "@/components/Clientes";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [location.state]);

  return (
    <div style={{ background: "#fff", minHeight: "100%" }}>
      <Navbar />
      <Hero />
      <Servicios />
      <Nosotros />
      <Clientes />
      <Contacto />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
