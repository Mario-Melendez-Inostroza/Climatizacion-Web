# Soluciones Integrales M·N

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

> Landing page de gasfitería, climatización y electricidad en Santiago.

**Sitio en vivo:** [climatizacion-web.vercel.app/](https://climatizacion-web.vercel.app/)

## Sobre el proyecto

Landing page para una empresa de servicios del hogar y la empresa. Presenta cada línea de servicio en su propia página y lleva al visitante a contactar por WhatsApp.

## Funcionalidades

- Inicio con presentación de la empresa y sus servicios
- Páginas dedicadas: Gasfitería, Climatización y Electricidad
- Página 404 para rutas inexistentes
- Botón flotante de WhatsApp y sección de contacto
- Contenido separado en `src/data` y hooks reutilizables
- Diseño responsive

## Stack

| Capa | Tecnología |
| --- | --- |
| Interfaz | React, TypeScript, lucide-react |
| Enrutamiento | React Router |
| Estilos | Tailwind CSS |
| Build | Vite |
| Hosting | Vercel (con rewrite SPA en `vercel.json`) |

## Estructura del proyecto

```text
src/
├── components/   Navbar, Hero, Nosotros, Clientes, Contacto, Footer...
├── data/         contenido de los servicios
├── hooks/        hooks reutilizables
├── img/          imágenes
└── pages/        Home, Gasfiteria, Climatizacion, Electricidad, NotFound
docs/ia/          contexto y reglas para trabajar con IA
vercel.json       rewrite para rutas de la SPA
```

## Cómo ejecutarlo

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # vista previa del build
```

## Despliegue

El sitio se despliega en **Vercel**: cada push a la rama `main` genera un nuevo despliegue de producción.

## Documentación para trabajo con IA

El repositorio incluye el contexto que necesita un asistente de programación (o un nuevo desarrollador) para trabajar con criterio:

- [`AGENTS.md`](AGENTS.md): reglas y comandos para agentes de IA
- [`docs/ia/CONTEXTO.md`](docs/ia/CONTEXTO.md): objetivo, público y alcance del sitio
- [`docs/ia/REGLAS.md`](docs/ia/REGLAS.md): convenciones de código y de contenido
- [`docs/ia/DECISIONES.md`](docs/ia/DECISIONES.md): decisiones técnicas y su motivo
- [`docs/ia/ROADMAP.md`](docs/ia/ROADMAP.md): próximos pasos
- [`docs/ia/FLUJO-DE-TRABAJO.md`](docs/ia/FLUJO-DE-TRABAJO.md) y [`docs/ia/PROMPTS.md`](docs/ia/PROMPTS.md): flujo de trabajo con IA y plantillas de instrucciones

## Autor

**Mario Meléndez** — Estudiante de Ingeniería en Informática (Duoc UC) · Desarrollo web para pymes con **MM Digital Solutions**.
[Perfil de GitHub](https://github.com/Mario-Melendez-Inostroza)
