# Vallcar Propuesta

Estudio inicial y dos propuestas de rediseño para [vallcar.com](https://www.vallcar.com/), hechas con [Astro](https://astro.build).

| Ruta | Contenido |
|---|---|
| `/` | Portada con enlace a las dos propuestas |
| `/a/` | Propuesta A, "Km 10.2": identidad de carretera, stock filtrable y panel de servicios |
| `/b/` | Propuesta B, "Plano de planta": elegir caravana según cuántos dormís, alquiler como puerta de entrada |
| `/estudio/` | Estudio inicial: análisis de la web actual, tecnología y alcance ([docs/estudio-inicial.md](docs/estudio-inicial.md)) |

Cada propuesta incluye inicio, stock con filtros, ficha de cada caravana, alquiler, taller, parking, tienda, seguros y financiación, quiénes somos y contacto.

## Uso

```bash
npm install
npm run dev
```

Para generar la versión estática en `dist/` (por ejemplo, para publicarla en Netlify):

```bash
npm run build
```

## Dónde está cada cosa

- `src/data/vallcar.ts`: stock, modelos de alquiler, horarios y textos de las páginas, compartidos por las dos propuestas. En el proyecto real estos datos vendrán del CMS. Para marcar una caravana como vendida basta con `vendida: true`, y deja de publicarse.
- `src/layouts/` y `src/styles/`: la cabecera, el pie y los estilos de cada propuesta.
- `src/components/Formulario.astro`: formulario común (contacto, pedir precio y alquiler) con validación. Lleva `data-netlify` para que funcione en Netlify sin servidor propio.
- `src/scripts/comun.ts`: horario "abierto ahora", menú móvil, filtros de stock y validación de formularios.

Las fotos se cargan desde la web actual de Vallcar (Wix). Antes de publicar la web definitiva hay que sustituirlas por fotos propias.
