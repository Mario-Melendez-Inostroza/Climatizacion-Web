Crea una landing page profesional para "M&N Soluciones Integrales", una empresa 
chilena de servicios técnicos para el hogar y empresas en Santiago, Chile.

CONTEXTO DEL NEGOCIO
Empresa de gasfitería, climatización y electricidad. Trabajos certificados SEC. 
Sus clientes son tanto personas naturales como empresas, en Santiago y alrededores.
Eslogan: "Tu tranquilidad, nuestro trabajo".
Objetivo del sitio: que el visitante entienda rápido qué hacen y contacte por 
WhatsApp en menos de 15 segundos.

STACK Y ARQUITECTURA
- React + TypeScript + Vite
- React Router con 4 rutas: / (home), /gasfiteria, /climatizacion, /electricidad
- Tailwind CSS
- Un componente por sección, en archivos separados dentro de src/components/
- Las páginas de servicio deben compartir un mismo componente de layout 
  reutilizable (ServicePage) que reciba título, descripción, color de acento y 
  lista de servicios como props. No dupliques la estructura tres veces.
- Los datos de servicios en un archivo aparte (src/data/servicios.ts) tipado con 
  TypeScript, para poder editarlos sin tocar el JSX.
- Sin librerías de UI pesadas. Solo lucide-react para íconos.
- Responsive mobile-first. Debe verse impecable en 375px de ancho.

DIRECCIÓN VISUAL
Tema oscuro, industrial y moderno, alineado al logo de la marca.
- Fondo principal: #0A0A0A (negro) con secciones alternas en #121212
- Texto principal: #FFFFFF, texto secundario: #A1A1AA
- Azul agua / gasfitería: #1E6FD9
- Cyan clima / climatización: #38BDF8
- Naranja electricidad: #F59E0B
- Plateado para detalles y bordes: #D4D4D8 a baja opacidad
Tipografía: títulos en Inter o Manrope, peso 700-800, tracking apretado y tamaño 
generoso. Cuerpo en Inter 400-500.
Estilo: bordes redondeados medios (rounded-xl), bordes sutiles de 1px en blanco 
al 8% de opacidad en vez de sombras fuertes, mucho espacio en blanco vertical, 
gradientes suaves solo como acento en los íconos de servicio.
Nada de stock photos ni imágenes: usa solo íconos, color y tipografía.

SECCIONES DEL HOME (en este orden)

1. NAVBAR fija, fondo con blur. Logo M&N a la izquierda (usa texto estilizado 
   "M&N" con "SOLUCIONES INTEGRALES" en pequeño debajo). Links: Servicios, 
   Nosotros, Contacto. Botón WhatsApp destacado a la derecha. En móvil, menú 
   hamburguesa.

2. HERO a pantalla casi completa.
   Título: "Gasfitería, climatización y electricidad en Santiago"
   Subtítulo: "Técnicos certificados SEC. Soluciones rápidas para tu hogar o 
   empresa, con maquinaria profesional y puntualidad."
   Dos botones: "Contactar por WhatsApp" (primario) y "Ver servicios" (secundario, 
   scroll a la sección).
   Debajo, tres badges pequeños en línea: "Certificados SEC", "Santiago y 
   alrededores", "Hogar y empresas".

3. SERVICIOS: tres tarjetas grandes en grilla (1 columna en móvil, 3 en desktop).
   Cada tarjeta: ícono, título, descripción de una línea, y el texto "Ver detalle →".
   La tarjeta completa es clickeable y navega a su ruta.
   - Gasfitería (azul #1E6FD9, ícono de gota o llave) → /gasfiteria
     "Destapes, detección de fugas, calefont y redes de agua y gas."
   - Climatización (cyan #38BDF8, ícono de copo de nieve) → /climatizacion
     "Instalación y mantenimiento de aire acondicionado y equipos industriales."
   - Electricidad (naranja #F59E0B, ícono de rayo) → /electricidad
     "Circuitos, tableros, puntos eléctricos y detección de fallas."
   Cada tarjeta con hover: borde que toma el color de acento del servicio.

4. NOSOTROS: bloque de texto a dos columnas.
   Izquierda, título "Trabajo profesional, resultados que duran".
   Derecha, párrafo: "Somos Nicolás y Jean Pierre. Prestamos servicios integrales 
   en gasfitería, climatización y electricidad, con trabajos ejecutados por 
   técnicos autorizados SEC. Nos mueve el profesionalismo: buena maquinaria, 
   puntualidad y soluciones que quedan bien hechas a la primera."
   Debajo, tres puntos con ícono: "Certificación SEC", "Maquinaria profesional", 
   "Puntualidad garantizada".

5. CONTACTO / CTA final. Fondo con gradiente sutil azul a negro.
   Título: "¿Necesitas una solución hoy?"
   Subtítulo: "Escríbenos y te respondemos con un diagnóstico y presupuesto."
   Datos de contacto en tarjetas:
   - WhatsApp: +56 9 5339 4409 (link wa.me/56953394409)
   - Teléfono: +56 9 3128 6291 (link tel:)
   - Ubicación: Santiago, Chile
   Botón grande de WhatsApp.

6. FOOTER: logo, eslogan "Tu tranquilidad, nuestro trabajo", links a las tres 
   páginas de servicio, íconos de redes sociales (Instagram, Facebook, WhatsApp) 
   con href="#" como placeholder, y copyright "© 2026 M&N Soluciones Integrales".

7. BOTÓN FLOTANTE de WhatsApp fijo abajo a la derecha, visible en todas las rutas.

PÁGINAS DE SERVICIO
Cada una usa el layout compartido: navbar, hero corto con el color de acento del 
servicio, listado de servicios en tarjetas simples (solo ícono de check y texto, 
sin imágenes), CTA de WhatsApp al final, y footer. Botón "← Volver al inicio" 
arriba.

/gasfiteria — "Gasfitería" — acento #1E6FD9
Descripción: "Soluciones completas en agua, desagüe y gas, ejecutadas por técnico 
autorizado SEC."
Servicios:
- Detección de fugas con gas trazador
- Destape de alcantarillado y cámaras
- Limpieza de cañerías
- Instalación y mantenimiento de calefont
- Instalación de redes de agua potable, desagüe y gas (técnico autorizado SEC)
- Cambio e instalación de llaves, sifón, tinas, WC y cambio de sello

/climatizacion — "Climatización" — acento #38BDF8
Descripción: "Instalación, mantenimiento y reparación de sistemas de clima para 
hogar, comercio e industria."
Servicios:
- Instalación y mantenimiento de aire acondicionado
- Reparación de equipos chiller, VRV, fancoil y rooftop
- Instalación de cámaras de frío
- Recarga de gas para todo tipo de equipos y sistemas

/electricidad — "Electricidad" — acento #F59E0B
Descripción: "Instalaciones eléctricas seguras y certificadas para tu hogar o 
empresa."
Servicios:
- Instalación de circuitos completos
- Mantenimiento de tableros
- Cambio de focos
- Instalación de puntos eléctricos
- Detección y reparación de fugas eléctricas

DETALLES FINALES
- Todos los textos en español de Chile.
- Animaciones sutiles de fade-in al hacer scroll, nada exagerado.
- Los números de teléfono deben ser links funcionales (wa.me y tel:).
- Código limpio, componentes pequeños, nombres en español o inglés consistentes.