import { Droplets, Snowflake, Zap } from "lucide-react";

const areas = [
  {
    icon: Droplets,
    nombre: "Gasfitería",
    color: "#1E6FD9",
    bg: "#EBF3FF",
    items: ["Agua · Gas · Desagüe", "Destapes · Fugas · Calefont", "Redes domiciliarias"],
  },
  {
    icon: Snowflake,
    nombre: "Climatización",
    color: "#0EA5E9",
    bg: "#E0F2FE",
    items: ["Aire · Frío · Calefacción", "Split · Chiller · VRV · Fancoil", "Mantenimiento industrial"],
  },
  {
    icon: Zap,
    nombre: "Electricidad",
    color: "#D97706",
    bg: "#FEF3C7",
    items: ["Circuitos · Tableros", "Puntos eléctricos · Focos", "Detección de fallas"],
  },
];

export default function TresAreas() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "4.5rem 1.5rem",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
          <p style={{
            color: "#1E6FD9",
            fontSize: "0.76rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}>
            Soluciones Integrales M&amp;N
          </p>
          <h2 style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
            letterSpacing: "-0.03em",
            color: "#0F172A",
          }}>
            Tres áreas. Una sola empresa.
          </h2>
        </div>

        {/* Grid de áreas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1px",
            background: "#E2E8F0",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {areas.map(({ icon: Icon, nombre, color, bg, items }) => (
            <div
              key={nombre}
              style={{
                background: "#fff",
                padding: "2rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              {/* Ícono */}
              <div style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Icon size={24} color={color} />
              </div>

              {/* Nombre */}
              <div>
                <h3 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  letterSpacing: "-0.02em",
                  color: "#0F172A",
                  marginBottom: "0.65rem",
                }}>
                  {nombre}
                </h3>
                {/* Items */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#64748B",
                        fontSize: "0.85rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: color, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Línea de acento inferior */}
              <div style={{ width: "2rem", height: 3, borderRadius: 2, background: color, marginTop: "auto" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
