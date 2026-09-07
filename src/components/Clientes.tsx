import { User, Home, Briefcase, Thermometer, Droplets, Store } from "lucide-react";

// Paleta neutra/corporativa: esta sección clasifica tipos de CLIENTE, no áreas de
// servicio, por lo que deliberadamente no usa los colores de gasfitería/climatización/electricidad.
const tipos = [
  { icon: User,        label: "Personas particulares",     color: "#1E6FD9", bg: "#EBF3FF" },
  { icon: Home,        label: "Hogares",                   color: "#1558B0", bg: "#EBF3FF" },
  { icon: Briefcase,   label: "Empresas",                  color: "#0F172A", bg: "#F1F5F9" },
  { icon: Thermometer, label: "Empresas de climatización", color: "#1E6FD9", bg: "#EBF3FF" },
  { icon: Droplets,    label: "Empresas de gasfitería",    color: "#1558B0", bg: "#EBF3FF" },
  { icon: Store,       label: "Comercios y negocios",      color: "#0F172A", bg: "#F1F5F9" },
];

export default function Clientes() {
  return (
    <section
      style={{
        background: "#F1F5F9",
        padding: "5rem 1.5rem",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            A quién atendemos
          </p>
          <h2 style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.03em",
            color: "#0F172A",
            marginBottom: "0.6rem",
          }}>
            Atendemos hogares y empresas
          </h2>
          <p style={{
            color: "#64748B",
            fontSize: "0.95rem",
            fontFamily: "'Inter', sans-serif",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Desde reparaciones puntuales en el hogar hasta contratos de mantenimiento
            para empresas e industria.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1rem" }}
        >
          {tipos.map(({ icon: Icon, label, color, bg }) => (
            <div
              key={label}
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                padding: "1.4rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                boxShadow: "var(--shadow-sm)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 46,
                height: 46,
                borderRadius: 11,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={22} color={color} />
              </div>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#1E293B",
                lineHeight: 1.3,
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
