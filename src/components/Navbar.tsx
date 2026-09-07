import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import logoNavy from "@/img/logo2.0.png";
import logoLight from "@/img/logo2.0-light.png";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (isHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    }
  };

  // Transparente sobre el hero (oscuro), blanca al hacer scroll
  const transparent = !scrolled && isHome;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: transparent ? "rgba(10,20,40,0.15)" : "#ffffff",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: transparent ? "1px solid rgba(255,255,255,0.1)" : "1px solid #E2E8F0",
        boxShadow: transparent ? "none" : "0 1px 8px rgba(15,23,42,0.07)",
        transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={transparent ? logoLight : logoNavy}
            alt="M&N Soluciones Integrales"
            style={{ height: 52, width: "auto", objectFit: "contain", display: "block" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ alignItems: "center", gap: "1.75rem" }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              style={{
                color: transparent ? "rgba(255,255,255,0.88)" : "#475569",
                fontSize: "0.875rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = transparent ? "#fff" : "#1E6FD9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = transparent ? "rgba(255,255,255,0.88)" : "#475569")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/56953394409"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              background: "#25D366",
              color: "#fff",
              padding: "0.5rem 1.1rem",
              borderRadius: 10,
              fontSize: "0.85rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            color: transparent ? "#fff" : "#0F172A",
            cursor: "pointer",
            padding: 4,
            transition: "color 0.3s",
          }}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #E2E8F0",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              style={{
                display: "block",
                color: "#475569",
                fontSize: "1rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid #F1F5F9",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/56953394409"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: "#25D366",
              color: "#fff",
              padding: "0.8rem",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              marginTop: "1.25rem",
            }}
          >
            <WhatsAppIcon size={18} />
            Contactar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
