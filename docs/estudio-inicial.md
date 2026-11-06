# Vallcar: estudio inicial para el rediseño web

Documento de trabajo para preparar el presupuesto. Fecha: 29/10/2026. Actualizado el 06/11/2026 con la propuesta C.

Las tres propuestas son webs navegables hechas en Astro: la propuesta A está en `/a/`, la B en `/b/` y la C en `/c/`. Ver el README para arrancarlas. Usan las fotos actuales de la web de Vallcar y el stock real de octubre de 2026. La C usa además un vídeo provisional de un banco de imágenes.

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

Las tres comparten la misma base: fotos reales de la exposición, stock filtrable, horario con indicador de "abierto ahora", teléfono siempre visible, responsive y accesibilidad AA. Cambia el enfoque.

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

### Propuesta C: "Gran Turismo"

Presentación de producto premium, al estilo de las webs de lanzamiento de coches o de tecnología. La marca se vende primero por imagen y sensación, y después por catálogo.

- **Colores**: tinta `#0E0F0F`, hueso `#F3EFE8`, arena `#E7E0D4` y el amarillo Vallcar `#FFD23F` solo como detalle (el punto de "Vallcar.").
- **Tipografía**: Instrument Serif para los titulares, con cursivas editoriales, y Hanken Grotesk para el texto.
- **Elemento propio**: un **vídeo a pantalla completa** en la portada. Al hacer scroll, el vídeo se recoge en un marco y deja paso a una secuencia de animaciones ligadas al desplazamiento:
  - un manifiesto ("Desde 1985…") que se enciende palabra a palabra;
  - una galería de modelos que avanza en horizontal mientras se baja;
  - cifras que cuentan solas (plazas, metros, 1985, parking 24/7);
  - fotos a sangre con zoom lento;
  - servicios en filas grandes que se rellenan de negro al pasar el ratón.
- **Resto**: las páginas interiores (stock, ficha, alquiler, servicios y contacto) mantienen el mismo tono, con portadas oscuras de foto grande. Tienen los mismos filtros y formularios que A y B.
- **Accesibilidad**: el vídeo tiene botón de pausa. Si el visitante tiene activado "reducir movimiento" en su dispositivo, las animaciones se desactivan y el contenido aparece directamente.
- **Le conviene si**: Vallcar quiere posicionar Sterckeman como producto de gama alta y diferenciarse por imagen de marca de los concesionarios de la zona.

> Las tres son direcciones, no diseños cerrados. Lo normal es que el cliente elija una y se incorporen piezas de las otras. Por ejemplo, el plano de planta de B encaja como herramienta dentro de la ficha de modelo de A o de C, y el hero con vídeo de C puede encabezar cualquiera de las otras dos.

### Necesidad común: fotografía

Las fotos actuales son de móvil y tienen calidades desiguales. Algunas traen bandas blancas, como la del Montana Explorer. Recomendamos presupuestar **una sesión fotográfica** de la exposición, los interiores y el taller, o pedir a Sterckeman las imágenes oficiales de cada modelo. En la propuesta C, que trabaja con fotos a pantalla completa, la sesión es prácticamente imprescindible.

## 4. Tecnología: Astro + CMS headless

Vallcar no va a tener tienda online. Las ventas se cierran por teléfono o en persona, y la web solo tiene que captar contactos. Para eso, una web estática con un gestor de contenidos es la opción más rápida, segura y barata de mantener.

- **Front**: [Astro](https://astro.build), una web estática muy rápida que solo carga JavaScript donde hace falta: filtros de stock, plano interactivo, animaciones de scroll y formularios. Las animaciones de la propuesta C están hechas sin librerías externas. Las tres maquetas de este estudio ya están hechas en Astro y sirven de base para el desarrollo.
- **Contenidos**: **Sanity** como CMS. Desde su panel, Vallcar gestiona el **stock** (modelo, estado nueva/ocasión/vendida, plazas, longitud, fotos y precio opcional), los **modelos de alquiler**, los horarios, los avisos y los textos. El editor es cómodo, el plan gratuito basta para este volumen y recorta las imágenes automáticamente. Al guardar un cambio, la web se vuelve a publicar sola en uno o dos minutos.
- **Hosting**: Netlify, Vercel o Cloudflare Pages. Para este volumen son gratuitos, con HTTPS y CDN incluidos.
- **Formularios**: un servicio de formularios (Netlify Forms, o una función con Resend o Brevo) que envía cada solicitud al email de Vallcar, con anti-spam.
- **Ventajas**: máximo rendimiento y SEO, seguridad (no hay base de datos ni plugins expuestos), coste de hosting casi nulo y diseño sin limitaciones.
- **A tener en cuenta**: el cliente tiene que aprender un panel nuevo (incluimos formación), y los cambios de estructura, que no los de contenido, requieren desarrollador.

La página de Tienda queda como página informativa: categorías de accesorios y recambios, cómo pedir (teléfono, WhatsApp o en persona) y condiciones de envío.

## 5. Alcance orientativo en horas (fase 1)

El desarrollo se hace con asistencia de IA (Claude). La IA se encarga de la mayor parte del trabajo mecánico: plantillas, componentes, modelado del CMS, formularios, SEO técnico, redirecciones y pruebas automáticas. Las horas estimadas son las de trabajo humano: decisiones con el cliente, dirección y revisión de lo que genera la IA, ajustes finos, pruebas reales en dispositivos y puesta en marcha. Además, se parte de las maquetas funcionales de este estudio, que ya cubren la estructura de todas las páginas.

### Base común a las tres propuestas

| Bloque | Horas |
|---|---|
| Reunión con el cliente, elección de dirección y diseño final | 6–10 |
| Plantillas definitivas a partir de la maqueta: inicio, stock (listado y ficha), alquiler, taller, parking, tienda, seguros y financiación, quiénes somos, contacto y legales | 10–16 |
| CMS Sanity: modelado del stock y el alquiler, panel, vista previa y publicación automática | 6–10 |
| Formularios: contacto, pedir precio, solicitud de alquiler, cita de taller y parking; envío por email y anti-spam | 3–5 |
| Migración de textos y fotos, y redirecciones 301 desde las URLs de Wix | 4–6 |
| SEO técnico (schema LocalBusiness y Product, sitemap, Google Business Profile), analítica y banner de cookies RGPD | 3–5 |
| Pruebas en dispositivos, accesibilidad y rendimiento | 4–6 |
| Puesta en producción: hosting, dominio y DNS sin cortar el correo | 2–3 |
| Formación al cliente en el panel y guía de uso | 2–3 |
| **Total base** | **40–64 h** |

### Trabajo propio de cada propuesta

**Propuesta A, "Km 10.2"**: +3–5 h

| Bloque | Horas |
|---|---|
| Ajuste de la identidad sobre el logo actual: panel de señalización, hito kilométrico e iconos | 1–2 |
| Buscador de stock de la portada conectado al CMS | 1–2 |
| Revisión del titular y de los textos de marca con el cliente | 1 |

**Propuesta B, "Plano de planta"**: +6–10 h

| Bloque | Horas |
|---|---|
| Campo de distribución por modelo en el CMS (camas, literas, comedor convertible) | 2–3 |
| Dibujo del plano en SVG para cada tipo de distribución (se calculan entre 3 y 5 tipos) | 3–5 |
| Selector de personas, filtro de modelos y pruebas | 1–2 |

**Propuesta C, "Gran Turismo"**: +12–18 h

| Bloque | Horas |
|---|---|
| Ajuste de las animaciones de scroll al contenido final y pruebas en iPhone (Safari), Android y escritorio | 5–7 |
| Vídeo del hero: montaje del clip a partir del material del cliente, compresión, versión vertical para móvil e imagen de póster | 2–3 |
| Galería horizontal y portadas con foto conectadas al CMS | 2–3 |
| Pruebas extra de rendimiento (el vídeo no debe frenar la carga) y de accesibilidad del movimiento | 3–5 |

### Total por propuesta

| Propuesta | Base | Propio | Total |
|---|---|---|---|
| A, "Km 10.2" | 40–64 h | 3–5 h | **43–69 h** |
| B, "Plano de planta" | 40–64 h | 6–10 h | **46–74 h** |
| C, "Gran Turismo" | 40–64 h | 12–18 h | **52–82 h** |

La horquilla depende sobre todo de las respuestas a las preguntas del apartado 7: mostrar precios, número de unidades de stock y quién prepara los textos. Si se combinan piezas de varias propuestas, se suman las horas propias de cada pieza.

Costes recurrentes previstos: el hosting y Sanity caben en sus planes gratuitos para este volumen. El dominio vallcar.com se mantiene; hay que confirmar quién lo gestiona (pregunta 9).

No incluido, a presupuestar aparte: sesión fotográfica, rodaje del vídeo (propuesta C), redacción de textos nuevos, versión en catalán o en otros idiomas, reservas de alquiler con pago y calendario en tiempo real, y mantenimiento mensual. La tienda online queda descartada.

## 6. Qué hay que tener en cuenta en cada propuesta

### Propuesta A, "Km 10.2"

- **El titular de la portada** ("La mayor exposición de caravanas Sterckeman del país") es una afirmación comparativa. Vallcar tiene que poder demostrarla. Si no, hay que cambiarlo por otro mensaje, como "Importadores de Sterckeman desde 1985".
- **Se apoya en el amarillo del logo actual.** Si Vallcar está pensando en renovar su marca, conviene saberlo antes de empezar.
- **El buscador de la portada** es la pieza principal. Tiene sentido si hay suficientes unidades en stock: con menos de 8 o 10, se queda vacío enseguida al filtrar.
- **Fotos:** necesita una foto de cabecera horizontal de la exposición, con buena luz.

### Propuesta B, "Plano de planta"

- **Planos de cada modelo:** hacen falta los planos reales de cada distribución. Se pueden sacar del catálogo de Sterckeman o pedirlos al fabricante. El plano de la maqueta es orientativo y genérico.
- **Mantenimiento:** cada modelo nuevo con una distribución distinta necesita su plano. Si es un tipo que ya existe, basta con elegirlo en el CMS.
- **Datos fiables:** el filtro depende de que las plazas y las camas de cada unidad estén bien rellenadas en el CMS. Si un dato está mal, el visitante verá modelos que no le sirven.
- **Más pensada para alquiler y nuevos clientes** que para el comprador que ya sabe qué modelo quiere. Este último tiene el stock completo a un clic.

### Propuesta C, "Gran Turismo"

- **El vídeo es la pieza clave y hoy no existe.** El de la maqueta es un clip gratuito de banco de imágenes (Mixkit) y ni siquiera sale una Sterckeman. Hay tres opciones, de más a menos recomendable:
  1. **Rodaje propio:** un día de grabación con una caravana Sterckeman en ruta y en un camping, idealmente con planos de dron. Para el dron hace falta un operador habilitado y respetar las zonas donde se puede volar. Es la opción que da sentido a esta propuesta.
  2. **Material oficial de Sterckeman:** pedir al fabricante sus vídeos de marca y el permiso para usarlos en la web. Es más rápido, pero será el mismo vídeo que pueden usar otros concesionarios.
  3. **Banco de imágenes de pago:** clips genéricos de caravaning. Sirve para salir del paso, pero no enseña ni la exposición ni el producto de Vallcar.
- **Requisitos técnicos del vídeo:**
  - Clip de 10 a 20 segundos en bucle, sin sonido, sin texto incrustado y con una zona tranquila abajo a la izquierda, que es donde va el titular.
  - Hacen falta dos versiones, horizontal para ordenador y vertical para móvil.
  - Cada versión, comprimida a menos de 4 o 5 MB en MP4 (H.264), con una imagen de póster que se ve mientras carga. Se aloja en la propia web o en un servicio de vídeo (Cloudflare Stream, Bunny) si pesa más.
- **Fotos de calidad:** las fotos van a pantalla completa, así que las actuales de móvil se quedan cortas. La sesión fotográfica es prácticamente imprescindible.
- **Textos:** el tono es más de marca (manifiesto, titulares cortos). Hay que escribirlos y validarlos con el cliente; no se pueden reutilizar los actuales.
- **Rendimiento:** el vídeo y las animaciones pesan más que en A y B. Para mantener la web rápida en móvil, el vídeo carga después del póster y las animaciones solo calculan posiciones al hacer scroll. Hay que comprobarlo con el material definitivo.
- **Público de más edad:** las animaciones respetan la opción "reducir movimiento" del dispositivo y el vídeo tiene botón de pausa. Aun así, conviene enseñar la maqueta a algún cliente habitual: a parte del público le puede costar la galería horizontal.

## 7. Preguntas para el cliente antes de cerrar el presupuesto

1. ¿Quieren mostrar **precios** en el stock y en el alquiler?
2. ¿Cuántas unidades suele haber en stock y con qué frecuencia cambian? ¿Quién las actualizará?
3. ¿La web debe estar en **catalán** además de en castellano?
4. Envíos en 24/48 h: ¿se refieren a accesorios y recambios, a las caravanas vendidas o a ambos? ¿Qué condiciones de envío hay que publicar?
5. ¿El alquiler debe tener reserva con pago o basta con una solicitud que confirman ellos?
6. ¿Mantienen la herramienta "Configura tu caravana" y la página de distribuidores Sterckeman?
7. ¿Tienen manual de marca o el logo en vectorial?
8. ¿Siguen activos Facebook, Instagram y Twitter/X?
9. ¿Quién tiene el dominio vallcar.com y el correo? Hay que migrar sin cortar el email.
10. Si eligen la propuesta C: ¿tienen vídeo propio de sus caravanas, pueden pedirlo a Sterckeman o hay que grabarlo?
