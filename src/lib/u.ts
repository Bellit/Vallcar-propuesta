// Construye rutas internas respetando el `base` de astro.config (por si se publica en una subcarpeta).
export const u = (ruta: string) => import.meta.env.BASE_URL.replace(/\/$/, "") + ruta;
