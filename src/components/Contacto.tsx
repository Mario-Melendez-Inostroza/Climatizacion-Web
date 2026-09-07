import { Phone, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { contacto } from "@/data/servicios";

export default function Contacto() {
  const cards = [
    { icon: WhatsAppIcon, label: "WhatsApp",   valor: "+56 9 5339 4409",      href: contacto.whatsappHref },
    { icon: Phone,         label: "Teléfono",   valor: "+56 9 3128 6291",      href: "tel:+56931286291" },
    { icon: MapPin,        label: "Cobertura",  valor: "Santiago y alrededores", href: undefined },
  ];

  return (
    <section
      id="contacto"
      style={{
        background: "linear-gradient(150deg, #071228 0%, #0C1F3A 50%, #0D2248 100%)",
        padding: "5.5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Detalles visuales de acento */}
      <div aria-hidden style={{
        position: "absolute",
        top: "10%", right: "-80px",
        width: 280, height: 280,
        borderRadius: "50%",
        background: "rgba(30,111,217,0.12)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        bottom: "5%", left: "-60px",
        width: 220, height: 220,
        borderRadius: "50%",
        background: "rgba(14,165,233,0.08)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p style={{
          color: "rgba(96,165,250,0.85)",
          fontSize: "0.76rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          marginBottom: "0.6rem",
        }}>
          Contáctanos
        </p>
        <h2 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          letterSpacing: "-0.03em",
          color: "#fff",
          marginBottom: "0.65rem",
        }}>
          ¿Necesitas una solución técnica?
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "1rem",
          lineHeight: 1.65,
          fontFamily: "'Inter', sans-serif",
          marginBottom: "3rem",
        }}>
          Cuéntanos qué necesitas y te orientamos.
        </p>

        {/* Cards de contacto */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {cards.map(({ icon: Icon, label, valor, href }) => {
            const inner = (
              <div
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 14,
                  padding: "1.4rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.55rem",
                  transition: "background 0.2s",
                  cursor: href ? "pointer" : "default",
                }}
                onMouseEnter={(e) => { if (href) (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.13)"; }}
                onMouseLeave={(e) => { if (href) (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)"; }}
              >
                <Icon size={20} color="rgba(255,255,255,0.75)" />
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {label}
                </span>
                <span style={{ color: "#fff", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif", fontWeight: 500, lineHeight: 1.4 }}>
                  {valor}
                </span>
              </div>
            );
            return href ? (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                {inner}
              </a>
            ) : <div key={label}>{inner}</div>;
          })}
        </div>

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
            padding: "1rem 2.25rem",
            borderRadius: 10,
            fontSize: "1.05rem",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
            boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <WhatsAppIcon size={22} />
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}
