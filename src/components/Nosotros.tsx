import { ShieldCheck, Wrench, Clock, MapPin, Building2, Layers, Droplets, Snowflake, Zap } from "lucide-react";

const confianza = [
  { icon: ShieldCheck, titulo: "Certificados SEC",       desc: "Instalaciones autorizadas y seguras" },
  { icon: Wrench,      titulo: "Maquinaria profesional", desc: "Equipos de última generación" },
  { icon: Clock,       titulo: "Puntualidad",            desc: "Respetamos tu tiempo siempre" },
  { icon: Building2,   titulo: "Hogar y empresas",       desc: "Residencial, comercial e industrial" },
  { icon: MapPin,      titulo: "Santiago y alrededores", desc: "Cobertura en toda la región" },
  { icon: Layers,      titulo: "Soluciones integrales",  desc: "Las tres áreas bajo una sola empresa" },
];

const serviciosIcons = [
  { icon: Droplets,  label: "Gasfitería",     color: "#D93025", bg: "#FEF2F2" },
  { icon: Snowflake, label: "Climatización",  color: "#0EA5E9", bg: "#E0F2FE" },
  { icon: Zap,       label: "Electricidad",   color: "#F59E0B", bg: "#FEF3C7" },
];

export default function Nosotros() {
  return (
    <div id="nosotros">
      {/* ── Parte 1: Por qué elegirnos — fondo navy ── */}
      <section
        style={{
          background: "#0C1F3A",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{
              color: "rgba(96,165,250,0.9)",
              fontSize: "0.76rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}>
              Por qué elegirnos
            </p>
            <h2 style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              letterSpacing: "-0.03em",
              color: "#fff",
            }}>
              Trabajo profesional,<br />resultados que duran
            </h2>
          </div>

          {/* Lista editorial — sin tarjetas, con divisores sutiles */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ columnGap: "3rem" }}
          >
            {confianza.map(({ icon: Icon, titulo, desc }, i) => (
              <div
                key={titulo}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.1rem",
                  padding: "1.35rem 0",
                  borderBottom: i < confianza.length - (confianza.length % 2 === 0 ? 2 : 1) ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid rgba(96,165,250,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={18} color="#60A5FA" />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#F1F5F9",
                    marginBottom: "0.2rem",
                  }}>
                    {titulo}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.62)",
                    lineHeight: 1.45,
                  }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parte 2: Quiénes somos — fondo blanco ── */}
      <section
        style={{
          background: "#fff",
          padding: "5rem 1.5rem",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem 5rem",
          alignItems: "center",
        }}>
          {/* Texto empresa */}
          <div>
            <p style={{
              color: "#1E6FD9",
              fontSize: "0.76rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: "0.6rem",
            }}>
              Quiénes somos
            </p>
            <h3 style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.03em",
              color: "#0F172A",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}>
              Una empresa técnica<br />comprometida con tu tranquilidad
            </h3>
            <p style={{
              color: "#475569",
              fontSize: "0.98rem",
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
            }}>
              En Soluciones Integrales M&amp;N entregamos servicios profesionales de gasfitería,
              climatización y electricidad para hogares, comercios y empresas. Trabajamos con
              maquinaria profesional, compromiso y atención responsable para entregar soluciones
              seguras y bien ejecutadas, desde reparaciones puntuales hasta trabajos de
              instalación y mantenimiento.
            </p>
          </div>

          {/* Composición visual: tres servicios, con ícono de color */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {serviciosIcons.map(({ icon: Icon, label, color, bg }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  rowGap: "0.6rem",
                  gap: "1.1rem",
                  background: "#F8FAFE",
                  border: "1px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "1rem 1.25rem",
                  borderLeft: `3px solid ${color}`,
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={21} color={color} />
                </div>
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#0F172A",
                }}>
                  {label}
                </span>
                <span style={{
                  marginLeft: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  background: `${color}14`,
                  border: `1px solid ${color}40`,
                  borderRadius: 100,
                  padding: "0.3rem 0.7rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  color,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}>
                  <ShieldCheck size={12} />
                  SEC certificado
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
