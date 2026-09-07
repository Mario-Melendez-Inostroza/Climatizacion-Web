import { useNavigate } from "react-router-dom";
import { Droplets, Snowflake, Zap, ArrowRight } from "lucide-react";
import { servicios } from "@/data/servicios";
import { useState } from "react";

const iconMap = { droplets: Droplets, snowflake: Snowflake, zap: Zap };

export default function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        background: "#F1F5F9",
        padding: "5rem 1.5rem",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            color: "#1E6FD9",
            fontSize: "0.76rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}>
            Nuestros servicios
          </p>
          <h2 style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.03em",
            color: "#0F172A",
          }}>
            Soluciones completas para cualquier necesidad técnica
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {servicios.map((s) => <ServiceCard key={s.nombre} servicio={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ servicio }: { servicio: (typeof servicios)[number] }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[servicio.icono];

  return (
    <div
      onClick={() => navigate(servicio.ruta)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.22s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
      }}
    >
      {/* Borde de color superior */}
      <div style={{
        height: 6,
        background: servicio.acento,
      }} />

      <div style={{ padding: "1.75rem" }}>
        {/* Ícono destacado, con fondo degradado sutil del color de acento */}
        <div style={{
          width: 60,
          height: 60,
          borderRadius: 16,
          background: `linear-gradient(145deg, ${servicio.acento}22 0%, ${servicio.acento}08 100%)`,
          border: `1px solid ${servicio.acento}28`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
          transition: "transform 0.2s",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}>
          <Icon size={28} color={servicio.acento} />
        </div>

        <h3 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: "1.2rem",
          letterSpacing: "-0.02em",
          color: "#0F172A",
          marginBottom: "0.5rem",
        }}>
          {servicio.nombre}
        </h3>

        <p style={{
          color: "#64748B",
          fontSize: "0.9rem",
          lineHeight: 1.65,
          fontFamily: "'Inter', sans-serif",
          marginBottom: "1.5rem",
        }}>
          {servicio.descripcion}
        </p>

        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.3rem",
          color: servicio.acento,
          fontSize: "0.85rem",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
        }}>
          Ver servicio
          <ArrowRight
            size={14}
            style={{ transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}
          />
        </span>
      </div>
    </div>
  );
}
