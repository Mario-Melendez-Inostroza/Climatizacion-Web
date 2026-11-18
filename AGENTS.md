# AGENTS.md — Soluciones Integrales M&N

Guía de entrada para agentes de IA (Claude Code u otros) y para cualquier persona que abra este repositorio. Es corta a propósito: el detalle está en docs/ia/.

## Qué es
Landing page de Soluciones Integrales M&N: gasfitería, climatización y electricidad en Santiago y alrededores.
Sitio en vivo: https://climatizacion-web.vercel.app/

## Stack
React + TypeScript + Vite + Tailwind CSS + React Router. Despliegue en Vercel. Solo frontend: no hay backend propio en este repositorio.

## Comandos
    npm install
    npm run dev       # servidor de desarrollo
    npm run build     # build de producción
    npm run preview   # previsualizar el build

## Estructura
- src/ : código fuente (componentes, páginas, estilos)
- public/ : archivos estáticos (imágenes e iconos)
- docs/ia/ : contexto, reglas, roadmap y decisiones para trabajar con IA

## Antes de empezar una tarea, leer
1. docs/ia/CONTEXTO.md (el negocio y sus límites)
2. docs/ia/REGLAS.md (qué se puede y qué no)
3. docs/ia/ROADMAP.md (estado real y lo pendiente)
4. docs/ia/DECISIONES.md (por qué está hecho así)

## Antes de dar algo por terminado
- npm run build termina sin errores (el build ejecuta tsc --noEmit y copia index.html a 404.html para las rutas de la SPA)
- Se revisó en móvil y en escritorio
- No hay secretos ni datos reales de personas en el código
- Se actualizó ROADMAP.md o DECISIONES.md si algo cambió
