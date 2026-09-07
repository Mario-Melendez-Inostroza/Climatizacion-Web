import { Link } from "react-router-dom";
import logoImg from "@/img/logo-footer.webp";
import { servicios, contacto } from "@/data/servicios";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/BrandIcons";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F172A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3.5rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
              <img
                src={logoImg}
                alt="M&N Soluciones Integrales"
                width={38}
                height={38}
                loading="lazy"
                decoding="async"
                style={{ width: 38, height: 38, objectFit: "contain", borderRadius: 8 }}
              />
              <div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#fff", letterSpacing: "-0.03em" }}>
                  M&amp;N
                </div>
                <div style={{ fontSize: "0.58rem", color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
                  Soluciones Integrales
                </div>
              </div>
            </div>
            <p style={{ color: "#64748B", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", fontStyle: "italic", marginBottom: "1.25rem", lineHeight: 1.55 }}>
              "Tu tranquilidad, nuestro trabajo"
            </p>
            {/* Redes sociales — ícono y color reales de cada marca, enlace pendiente (sin inventar URLs) */}
            <div style={{ display: "flex", gap: "0.65rem" }}>
              <span
                title="Instagram — próximamente"
                aria-label="Instagram (próximamente)"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                  opacity: 0.9,
                }}
              >
                <InstagramIcon />
              </span>
              <span
                title="Facebook — próximamente"
                aria-label="Facebook (próximamente)"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "#1877F2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                  opacity: 0.9,
                }}
              >
                <FacebookIcon />
              </span>
              <a
                href={contacto.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "#25D366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <WhatsAppIcon size={17} />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#94A3B8", marginBottom: "1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Servicios
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {servicios.map((s) => (
                <li key={s.nombre}>
                  <Link
                    to={s.ruta}
                    style={{ color: "#64748B", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                  >
                    {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#94A3B8", marginBottom: "1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Contacto
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              <li>
                <a href={contacto.whatsappHref} target="_blank" rel="noreferrer"
                  style={{ color: "#64748B", fontSize: "0.88rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
                  WA: {contacto.whatsapp}
                </a>
              </li>
              <li>
                <a href={contacto.telefonoHref}
                  style={{ color: "#64748B", fontSize: "0.88rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
                  Tel: {contacto.telefono}
                </a>
              </li>
              <li style={{ color: "#64748B", fontSize: "0.88rem", fontFamily: "'Inter', sans-serif" }}>
                {contacto.ubicacion}
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "#334155", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif" }}>
            © 2026 M&amp;N Soluciones Integrales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
