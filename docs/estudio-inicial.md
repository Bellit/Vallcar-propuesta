# Vallcar: estudio inicial para el rediseño web

Documento de trabajo para preparar el presupuesto. Fecha: 29/10/2026.

Las dos propuestas son webs navegables hechas en Astro: la propuesta A está en `/a/` y la propuesta B en `/b/`. Ver el README para arrancarlas. Usan las fotos actuales de la web de Vallcar y el stock real de octubre de 2026.

---

## 1. Qué es Vallcar y qué tiene que conseguir la web

- **Negocio**: Vallcar, S.A., en Canovelles (Barcelona) desde 1985. Agentes e importadores de caravanas Sterckeman para toda España, distribuidores de remolques Comanche, alquiler de caravanas nuevas, taller, parking (en Lliçà d'Amunt), tienda de accesorios y recambios, seguros y financiación.
- **Público**: familias y parejas, muchas de mediana edad o mayores, del área de Barcelona y del resto de España. También distribuidores de Sterckeman.
- **Trabajo principal de la web**: que el cliente encuentre una caravana del stock y pida precio o visita. En segundo lugar, captar alquileres y citas de taller y parking.

## 2. Análisis de la web actual (vallcar.com)

### Tecnología

- Hecha con **Wix** (`generator: Wix.com Website Builder`).
- La portada carga unos 80 scripts y unos 430 KB de HTML antes de las imágenes. Para una web de este tamaño es mucho peso.
- Las URLs son las que genera Wix por defecto: `/about-1` para Seguros y `/copia-de-puntos-de-venta-sterckeman` para "Configura tu caravana".

### Problemas detectados

| Área | Problema | Impacto |
|---|---|---|
| Navegación | El menú de escritorio solo enseña Inicio, Quiénes somos, Servicios, Nuestras marcas, Contacto y Seguros. **Stock, Alquiler, Taller, Parking y Tienda** no están en el menú visible. | Lo que más vende queda escondido. |
| Portada | Al entrar salta un popup a pantalla completa ("Tenemos lo que buscas") que tapa toda la página. | Es molesto, sobre todo en móvil, y Google penaliza los intersticiales en móvil. |
| Portada | El contenido es mínimo: tres bloques (Caravanas, Remolques, Tienda y taller) y la dirección. No hay llamada a la acción clara. | Desaprovecha la propuesta de valor: la mayor exposición Sterckeman, desde 1985 y con alquiler. |
| Stock | Las unidades vendidas siguen publicadas con un sello "VENDIDA". Se gestiona a mano, con fichas como imágenes y sin filtros. | Frustra al visitante y obliga a mantener la página a mano. |
| Stock | No hay precios ni ficha técnica completa. 6 de las 20 imágenes no tienen texto alternativo. | Perjudica la accesibilidad y el SEO, y genera menos contactos cualificados. |
| Textos | Horarios mal escritos ("9am - 13pm", "16am - 19.30pm"), sábado a las 13:00 en una página y a las 14:00 en otras, y alguna errata ("esclusivo"). | Da poca seriedad y confunde. |
| Parking | El parking está en Lliçà d'Amunt, pero el bloque de contacto de la página muestra la dirección de Canovelles. | Confunde al cliente. |
| Nuestras marcas | La página solo tiene logotipos, sin texto. | Poco útil para SEO ("caravanas Sterckeman Barcelona"). |
| Tienda | La página dice "realizamos envíos en 24/48 horas a todo el país", sin aclarar qué se envía ni cómo se pide. No habrá tienda online (confirmado). | Hay que redactar con claridad cómo se compra (teléfono o en persona) y qué incluye el envío. |
| Alquiler | No hay precios, temporadas ni calendario. El formulario es genérico. | Llegan solicitudes poco cualificadas. |
| Redes | Hay enlace a Twitter (X). Habría que comprobar si se sigue usando. | Mantenimiento. |
| Lo bueno | Fotos reales de la exposición, visitas 360º en alquiler, teléfono y email siempre visibles. | Conviene conservarlo. |

## 3. Propuestas de diseño

Las dos comparten la misma base: fotos reales de la exposición, stock filtrable, horario con indicador de "abierto ahora", teléfono siempre visible, responsive y accesibilidad AA. Cambia el enfoque.

### Propuesta A: "Km 10.2"

Identidad de carretera y concesionario, construida sobre el amarillo del logo actual.

- **Colores**: amarillo Vallcar `#FFD100`, asfalto `#2B2E33`, hormigón `#E9EBEC`, azul de señal `#1D4F91`, blanco.
- **Tipografía**: Archivo (variable), con titulares estrechos y muy negros y el texto con anchura normal.
- **Elemento propio**: los servicios se presentan como un **panel de orientación de carretera** azul, con flechas (Venta, Alquiler, Taller, Parking, Tienda, Seguros). La dirección se muestra como un hito kilométrico "C-1415b · 10.2".
- **Portada**: titular "La mayor exposición de caravanas Sterckeman del país", foto de la exposición y, justo debajo, una **barra de búsqueda de stock** (Nuevas, Ocasión, Remolques y número de plazas).
- **Le conviene si**: Vallcar quiere reforzar marca y su papel de importador nacional, con la venta y el stock como prioridad.

### Propuesta B: "Plano de planta"

Más cálida y familiar, pensada para quien todavía no sabe qué modelo necesita.

- **Colores**: verde pino `#1F4A3D` (los pinos de la exposición), cielo `#D6EBF6`, sol `#FFD23F`, grafito `#263238`, blanco.
- **Tipografía**: Bricolage Grotesque para títulos y Atkinson Hyperlegible para el texto. Esta última está diseñada para leerse bien con baja visión, lo que encaja con un público de más edad.
- **Elemento propio**: la portada pregunta **"¿Cuántos vais a dormir dentro?"**. Al elegir 2, 4 o 6 personas, un plano en planta de la caravana ilumina las camas que se usarían y la lista de modelos se filtra al momento.
- **Resto**: tres caminos para después de comprar (Taller, Parking, Tienda), alquiler explicado en tres pasos con un formulario específico (modelo, fechas y teléfono) y datos de confianza.
- **Le conviene si**: Vallcar quiere captar a nuevos caravanistas y potenciar el alquiler como puerta de entrada a la compra.

> Las dos son direcciones, no diseños cerrados. Lo normal es que el cliente elija una y se incorporen piezas de la otra. Por ejemplo, el plano de planta de B encaja como herramienta dentro de la ficha de modelo de A.

### Necesidad común: fotografía

Las fotos actuales son de móvil y tienen calidades desiguales. Algunas traen bandas blancas, como la del Montana Explorer. Recomendamos presupuestar **una sesión fotográfica** de la exposición, los interiores y el taller, o pedir a Sterckeman las imágenes oficiales de cada modelo.

## 4. Tecnología: Astro + CMS headless

Vallcar no va a tener tienda online. Las ventas se cierran por teléfono o en persona, y la web solo tiene que captar contactos. Para eso, una web estática con un gestor de contenidos es la opción más rápida, segura y barata de mantener.

- **Front**: [Astro](https://astro.build), una web estática muy rápida que solo carga JavaScript donde hace falta: filtros de stock, plano interactivo y formularios. Las dos maquetas de este estudio ya están hechas en Astro y sirven de base para el desarrollo.
- **Contenidos**: **Sanity** como CMS. Desde su panel, Vallcar gestiona el **stock** (modelo, estado nueva/ocasión/vendida, plazas, longitud, fotos y precio opcional), los **modelos de alquiler**, los horarios, los avisos y los textos. El editor es cómodo, el plan gratuito basta para este volumen y recorta las imágenes automáticamente. Al guardar un cambio, la web se vuelve a publicar sola en uno o dos minutos.
- **Hosting**: Netlify, Vercel o Cloudflare Pages. Para este volumen son gratuitos, con HTTPS y CDN incluidos.
- **Formularios**: un servicio de formularios (Netlify Forms, o una función con Resend o Brevo) que envía cada solicitud al email de Vallcar, con anti-spam.
- **Ventajas**: máximo rendimiento y SEO, seguridad (no hay base de datos ni plugins expuestos), coste de hosting casi nulo y diseño sin limitaciones.
- **A tener en cuenta**: el cliente tiene que aprender un panel nuevo (incluimos formación), y los cambios de estructura, que no los de contenido, requieren desarrollador.

La página de Tienda queda como página informativa: categorías de accesorios y recambios, cómo pedir (teléfono, WhatsApp o en persona) y condiciones de envío.

## 5. Alcance orientativo para el presupuesto (fase 1)

El desarrollo se hace con asistencia de IA (Claude). La IA se encarga de la mayor parte del trabajo mecánico: plantillas, componentes, modelado del CMS, formularios, SEO técnico, redirecciones y pruebas automáticas. Las horas que se presupuestan son las de trabajo humano: decisiones con el cliente, dirección y revisión de lo que genera la IA, ajustes finos, pruebas reales en dispositivos y puesta en marcha. Además, se parte de las maquetas funcionales de este estudio, que ya cubren la estructura de todas las páginas.

| Bloque | Horas | Importe (25 €/h) |
|---|---|---|
| Reunión con el cliente, elección de dirección y diseño final | 6–10 | 150–250 € |
| Plantillas definitivas a partir de la maqueta: inicio, stock (listado y ficha), alquiler, taller, parking, tienda, seguros y financiación, quiénes somos, contacto y legales | 10–16 | 250–400 € |
| CMS Sanity: modelado del stock y el alquiler, panel, vista previa y publicación automática | 6–10 | 150–250 € |
| Formularios: contacto, pedir precio, solicitud de alquiler, cita de taller y parking; envío por email y anti-spam | 3–5 | 75–125 € |
| Migración de textos y fotos, y redirecciones 301 desde las URLs de Wix | 4–6 | 100–150 € |
| SEO técnico (schema LocalBusiness y Product, sitemap, Google Business Profile), analítica y banner de cookies RGPD | 3–5 | 75–125 € |
| Pruebas en dispositivos, accesibilidad y rendimiento | 4–6 | 100–150 € |
| Puesta en producción: hosting, dominio y DNS sin cortar el correo | 2–3 | 50–75 € |
| Formación al cliente en el panel y guía de uso | 2–3 | 50–75 € |
| **Total** | **40–64 h** | **1.000–1.600 €** |

Importes sin IVA. La horquilla depende sobre todo de las respuestas a las preguntas del apartado 6: mostrar precios, número de unidades de stock y quién prepara los textos.

Costes recurrentes previstos: hosting y Sanity, 0 € en sus planes gratuitos para este volumen. El dominio vallcar.com se mantiene; hay que confirmar quién lo gestiona (pregunta 9).

No incluido, a presupuestar aparte: sesión fotográfica, redacción de textos nuevos, versión en catalán o en otros idiomas, reservas de alquiler con pago y calendario en tiempo real, y mantenimiento mensual. La tienda online queda descartada.

## 6. Preguntas para el cliente antes de cerrar el presupuesto

1. ¿Quieren mostrar **precios** en el stock y en el alquiler?
2. ¿Cuántas unidades suele haber en stock y con qué frecuencia cambian? ¿Quién las actualizará?
3. ¿La web debe estar en **catalán** además de en castellano?
4. Envíos en 24/48 h: ¿se refieren a accesorios y recambios, a las caravanas vendidas o a ambos? ¿Qué condiciones de envío hay que publicar?
5. ¿El alquiler debe tener reserva con pago o basta con una solicitud que confirman ellos?
6. ¿Mantienen la herramienta "Configura tu caravana" y la página de distribuidores Sterckeman?
7. ¿Tienen manual de marca o el logo en vectorial?
8. ¿Siguen activos Facebook, Instagram y Twitter/X?
9. ¿Quién tiene el dominio vallcar.com y el correo? Hay que migrar sin cortar el email.
