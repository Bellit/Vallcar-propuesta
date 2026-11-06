// Propuesta C: animaciones ligadas al scroll, sin librerías.
// El JS solo calcula el progreso (--p, de 0 a 1) de cada bloque; el CSS decide qué se mueve.
// Con "reducir movimiento" activado todo aparece en su estado final y el vídeo no arranca solo.

const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
const lim = (n: number) => Math.min(1, Math.max(0, n));

// Cabecera: transparente sobre el hero y sólida al bajar
const cab = document.querySelector<HTMLElement>("[data-cab]");

// Bloques con progreso
// data-progreso="fijo": bloque alto con contenido sticky; 0 al entrar, 1 al soltarse.
// data-progreso="vista": 0 cuando asoma por abajo, 1 cuando sale por arriba.
const bloques = [...document.querySelectorAll<HTMLElement>("[data-progreso]")];

// Galería horizontal: el bloque mide lo necesario para recorrer la pista con el scroll vertical
const horizontales = [...document.querySelectorAll<HTMLElement>("[data-horizontal]")];
const usarHorizontal = () => !quieto && innerWidth >= 900;

function medir() {
  horizontales.forEach((h) => {
    const pista = h.querySelector<HTMLElement>("[data-pista]")!;
    if (usarHorizontal()) {
      const recorrido = Math.max(0, pista.scrollWidth - innerWidth);
      h.style.height = `${recorrido + innerHeight}px`;
      h.dataset.recorrido = String(recorrido);
      h.classList.add("activa");
    } else {
      h.style.height = "";
      pista.style.transform = "";
      h.classList.remove("activa");
    }
  });
}

function pintar() {
  const vh = innerHeight;
  cab?.classList.toggle("solida", scrollY > vh * 0.6 || !cab.classList.contains("cab-hero"));
  bloques.forEach((b) => {
    const r = b.getBoundingClientRect();
    if (r.bottom < -vh || r.top > vh * 2) return;
    const p = b.dataset.progreso === "fijo" ? lim(-r.top / Math.max(1, r.height - vh)) : lim((vh - r.top) / (vh + r.height));
    b.style.setProperty("--p", p.toFixed(4));
  });
  horizontales.forEach((h) => {
    if (!h.classList.contains("activa")) return;
    const p = Number(h.style.getPropertyValue("--p")) || 0;
    const pista = h.querySelector<HTMLElement>("[data-pista]")!;
    pista.style.transform = `translate3d(${-p * Number(h.dataset.recorrido)}px,0,0)`;
  });
}

let pendiente = false;
const alMover = () => {
  if (pendiente) return;
  pendiente = true;
  requestAnimationFrame(() => {
    pendiente = false;
    pintar();
  });
};

if (quieto) {
  bloques.forEach((b) => b.style.setProperty("--p", b.dataset.quieto ?? "1"));
  addEventListener("scroll", () => cab?.classList.toggle("solida", scrollY > innerHeight * 0.6 || !cab.classList.contains("cab-hero")), { passive: true });
  cab?.classList.toggle("solida", !cab.classList.contains("cab-hero"));
} else {
  medir();
  pintar();
  addEventListener("scroll", alMover, { passive: true });
  addEventListener("resize", () => {
    medir();
    pintar();
  });
  addEventListener("load", () => {
    medir();
    pintar();
  });
}

// Apariciones al entrar en pantalla
const revela = document.querySelectorAll<HTMLElement>("[data-revela]");
if (quieto || !("IntersectionObserver" in window)) {
  revela.forEach((e) => e.classList.add("visto"));
} else {
  const io = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("visto");
        io.unobserve(e.target);
      }),
    { rootMargin: "0px 0px -12% 0px" },
  );
  revela.forEach((e) => io.observe(e));
}

// Contadores
document.querySelectorAll<HTMLElement>("[data-cuenta]").forEach((el) => {
  const fin = Number(el.dataset.cuenta);
  const desde = Number(el.dataset.desde ?? 0);
  if (quieto) return;
  el.textContent = String(desde);
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const t0 = performance.now();
    const dur = 1600;
    const paso = (t: number) => {
      const k = lim((t - t0) / dur);
      const suave = 1 - Math.pow(1 - k, 4);
      el.textContent = String(Math.round(desde + (fin - desde) * suave));
      if (k < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  }, { threshold: 0.6 });
  io.observe(el);
});

// Vídeo del hero: botón de pausa (WCAG 2.2.2) y sin reproducción automática si se pide menos movimiento
document.querySelectorAll<HTMLElement>("[data-video]").forEach((caja) => {
  const v = caja.querySelector("video")!;
  const b = caja.querySelector<HTMLButtonElement>("[data-video-boton]")!;
  const marcar = () => {
    const parado = v.paused;
    b.setAttribute("aria-pressed", String(parado));
    b.setAttribute("aria-label", parado ? "Reproducir el vídeo" : "Pausar el vídeo");
    b.dataset.estado = parado ? "parado" : "en-marcha";
  };
  if (quieto) v.pause();
  else v.play().catch(() => {});
  b.addEventListener("click", () => (v.paused ? v.play() : v.pause()));
  v.addEventListener("play", marcar);
  v.addEventListener("pause", marcar);
  marcar();
});
