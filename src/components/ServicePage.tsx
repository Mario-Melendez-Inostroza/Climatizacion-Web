import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { contacto } from "@/data/servicios";

interface FotoTrabajo {
  src: string;
  nombre: string;
}

interface ServicePageProps {
  titulo: string;
  descripcion: string;
  acento: string;
  items: string[];
  imagen?: string;
  galeria?: FotoTrabajo[];
}

export default function ServicePage({ titulo, descripcion, acento, items, imagen, galeria }: ServicePageProps) {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero de la página de servicio */}
      <section
        style={{
          paddingTop: "7rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
          background: imagen
            ? undefined
            : `linear-gradient(135deg, ${acento}0F 0%, #F8FAFE 100%)`,
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {imagen && (
          <>
            <div aria-hidden style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
            <div aria-hidden style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${acento}BB 0%, rgba(10,25,60,0.88) 100%)`,
            }} />
          </>
        )}

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: imagen ? "rgba(255,255,255,0.75)" : "#64748B",
              fontSize: "0.85rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              textDecoration: "none",
              marginBottom: "2rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = imagen ? "#fff" : "#1E6FD9")}
            onMouseLeave={(e) => (e.currentTarget.style.color = imagen ? "rgba(255,255,255,0.75)" : "#64748B")}
          >
            <ArrowLeft size={15} />
            Volver al inicio
          </Link>

          <div style={{
            display: "inline-block",
            background: imagen ? "rgba(255,255,255,0.15)" : `${acento}14`,
            border: imagen ? "1px solid rgba(255,255,255,0.25)" : `1px solid ${acento}30`,
            borderRadius: 8,
            padding: "0.3rem 0.85rem",
            marginBottom: "1rem",
            color: imagen ? "#fff" : acento,
            fontSize: "0.75rem",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            Servicio
          </div>

          <h1 style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.04em",
            color: imagen ? "#fff" : "#0F172A",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}>
            {titulo}
          </h1>
          <p style={{
            color: imagen ? "rgba(255,255,255,0.8)" : "#475569",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            fontFamily: "'Inter', sans-serif",
            maxWidth: 580,
          }}>
            {descripcion}
          </p>
        </div>
      </section>

      {/* Listado */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: "1.4rem",
          letterSpacing: "-0.02em",
          color: "#0F172A",
          marginBottom: "1.5rem",
        }}>
          ¿Qué incluye?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {items.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.85rem",
                background: "#F8FAFE",
                border: "1px solid #E2E8F0",
                borderRadius: 10,
                padding: "0.9rem 1.1rem",
              }}
            >
              <CheckCircle2 size={18} color={acento} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ color: "#334155", fontSize: "0.93rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.55 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Galería: fotos reales de trabajos realizados, con el nombre del trabajo debajo de cada una */}
      {galeria && galeria.length > 0 && (
        <section style={{ padding: "0 1.5rem 4rem", maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "-0.02em",
            color: "#0F172A",
            marginBottom: "1.5rem",
          }}>
            Trabajos realizados
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.25rem",
          }}>
            {galeria.map((foto) => (
              <figure
                key={foto.src}
                style={{
                  margin: 0,
                  background: "#F8FAFE",
                  border: "1px solid #E2E8F0",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <img
                  src={foto.src}
                  alt={foto.nombre}
                  style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}
                />
                <figcaption style={{
                  padding: "0.75rem 1rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#334155",
                  borderTop: `3px solid ${acento}`,
                }}>
                  {foto.nombre}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{
        padding: "4rem 1.5rem",
        background: "linear-gradient(135deg, #1558B0 0%, #1E6FD9 100%)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          letterSpacing: "-0.03em",
          color: "#fff",
          marginBottom: "0.65rem",
        }}>
          ¿Necesitas este servicio?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.95rem", fontFamily: "'Inter', sans-serif", marginBottom: "2rem" }}>
          Escríbenos y te respondemos con diagnóstico y presupuesto.
        </p>
        <a
          href={contacto.whatsappHref}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "#25D366",
            color: "#fff",
            padding: "0.95rem 2rem",
            borderRadius: 12,
            fontSize: "1rem",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <WhatsAppIcon size={20} />
          Escribir por WhatsApp
        </a>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
