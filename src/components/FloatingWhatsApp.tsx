import { WhatsAppIcon } from "@/components/BrandIcons";
import { contacto } from "@/data/servicios";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={contacto.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 100,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered
          ? "0 8px 32px rgba(37,211,102,0.45)"
          : "0 4px 20px rgba(37,211,102,0.3)",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "scale(1.1)" : "scale(1)",
      }}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
