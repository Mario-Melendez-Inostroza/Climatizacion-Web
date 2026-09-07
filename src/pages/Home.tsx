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
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function Home() {
  const location = useLocation();

  useDocumentMeta({
    title: "Soluciones Integrales M&N | Gasfitería, Climatización y Electricidad en Santiago",
    description: "Técnicos certificados SEC en gasfitería, climatización y electricidad para hogares y empresas en Santiago y alrededores.",
  });

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
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
