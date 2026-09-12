import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function NotFound() {
  useDocumentMeta({
    title: "Página no encontrada | Soluciones Integrales M&N",
    description: "La página que buscas no existe. Vuelve al inicio de Soluciones Integrales M&N.",
    noIndex: true,
  });

  return (
    <div style={{ background: "#fff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "8rem 1.5rem 4rem", textAlign: "center" }}>
        <div>
          <h1 style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            color: "#0F172A",
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
          }}>
            404
          </h1>
          <p style={{ color: "#475569", fontSize: "1.05rem", fontFamily: "'Inter', sans-serif", marginBottom: "2rem" }}>
            No encontramos la página que buscas.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#1E6FD9",
              color: "#fff",
              padding: "0.9rem 1.75rem",
              borderRadius: 10,
              fontSize: "1rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
