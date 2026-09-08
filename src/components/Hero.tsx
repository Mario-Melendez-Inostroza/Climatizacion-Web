import { ChevronDown, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { contacto } from "@/data/servicios";
import heroBg from "@/img/Imagen_hero.webp";

const serviciosTitulo = ["Gasfitería", "Climatización", "Electricidad"];

export default function Hero() {
  const scrollToServicios = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
        background: "#0C1F3A",
      }}
    >
      {/* Fondo: foto real del cliente — tuberías/gasfitería, climatización y tablero eléctrico en una sola escena.
          Es la imagen LCP de la página: se carga como <img> (no CSS background) con fetchPriority="high"
          y sin lazy-load para que el navegador la priorice desde el primer instante.
          object-fit: cover llena siempre el 100% del hero (ancho y alto), tanto en desktop como en mobile,
          recortando los bordes según haga falta en vez de dejar espacio vacío. */}
      <img
        src={heroBg}
        alt="Técnicos de Soluciones Integrales M&N trabajando en gasfitería, climatización y electricidad"
        width={1672}
        height={941}
        fetchPriority="high"
        decoding="async"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {/* Overlay navy: da legibilidad al texto sin ocultar la fotografía */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(7,18,40,0.6) 0%, rgba(7,18,40,0.42) 45%, rgba(7,18,40,0.7) 100%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(5,12,28,0.55) 0%, rgba(5,12,28,0.15) 60%, transparent 100%)",
        }}
      />

      <div style={{ maxWidth: 900, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge SEC */}
        <div
          className="fade-up fade-up-delay-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            background: "rgba(8,16,35,0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            borderRadius: 100,
            padding: "0.35rem 1rem",
            marginBottom: "1.75rem",
            color: "#fff",
            fontSize: "0.76rem",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
          }}
        >
          <ShieldCheck size={13} />
          Técnicos Certificados SEC
        </div>

        {/* Título: tres áreas con colores diferenciados */}
        <h1
          className="fade-up fade-up-delay-2"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 4.6vw, 3.4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "0.85rem",
            maxWidth: "100%",
          }}
        >
          {serviciosTitulo.map((label, i) => (
            <span key={label}>
              {label}
              {i < serviciosTitulo.length - 1 && (
                <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}> · </span>
              )}
            </span>
          ))}
        </h1>

        {/* Subtítulo fuerte */}
        <p
          className="fade-up fade-up-delay-2"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
            color: "rgba(255,255,255,0.92)",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Soluciones técnicas para tu hogar y empresa
        </p>

        {/* Descripción */}
        <p
          className="fade-up fade-up-delay-3"
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            maxWidth: 560,
            margin: "0 auto 2.25rem",
          }}
        >
          Técnicos certificados SEC, maquinaria profesional y atención
          en Santiago y alrededores.
        </p>

        {/* CTAs */}
        <div
          className="fade-up fade-up-delay-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.85rem",
            justifyContent: "center",
          }}
        >
          <a
            href={contacto.whatsappHref}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              background: "#25D366",
              color: "#fff",
              padding: "0.9rem 1.75rem",
              borderRadius: 10,
              fontSize: "1rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <WhatsAppIcon size={20} />
            Contactar por WhatsApp
          </a>
          <button
            onClick={scrollToServicios}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              background: "#1E6FD9",
              color: "#fff",
              padding: "0.9rem 1.75rem",
              borderRadius: 10,
              fontSize: "1rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px rgba(30,111,217,0.35)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1558B0"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#1E6FD9"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Ver servicios
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
