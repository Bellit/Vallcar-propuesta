// Comportamiento compartido por las dos propuestas: horario en vivo, menú móvil, filtros y formularios.

function estadoHorario() {
  const d = new Date();
  const dia = d.getDay();
  const h = d.getHours() + d.getMinutes() / 60;
  if (dia >= 1 && dia <= 5) {
    if (h >= 9 && h < 13) return { abierto: true, texto: "Abierto ahora, hasta las 13:00" };
    if (h >= 16 && h < 19.5) return { abierto: true, texto: "Abierto ahora, hasta las 19:30" };
    if (h < 9) return { abierto: false, texto: "Cerrado. Abrimos hoy a las 9:00" };
    if (h < 16) return { abierto: false, texto: "Cerrado al mediodía. Abrimos a las 16:00" };
    return { abierto: false, texto: dia === 5 ? "Cerrado. Abrimos el sábado a las 10:00" : "Cerrado. Abrimos mañana a las 9:00" };
  }
  if (dia === 6) {
    if (h >= 10 && h < 14) return { abierto: true, texto: "Abierto ahora, hasta las 14:00" };
    return { abierto: false, texto: h < 10 ? "Cerrado. Abrimos hoy a las 10:00" : "Cerrado. Abrimos el lunes a las 9:00" };
  }
  return { abierto: false, texto: "Cerrado hoy. Abrimos el lunes a las 9:00" };
}

document.querySelectorAll<HTMLElement>("[data-horario]").forEach((el) => {
  const e = estadoHorario();
  el.dataset.abierto = String(e.abierto);
  const t = el.querySelector("[data-horario-texto]");
  if (t) t.textContent = e.texto;
});

// Menú móvil
document.querySelectorAll<HTMLButtonElement>("[data-menu-boton]").forEach((b) => {
  const nav = document.getElementById(b.getAttribute("aria-controls")!);
  b.addEventListener("click", () => {
    const abierto = nav!.toggleAttribute("data-abierto");
    b.setAttribute("aria-expanded", String(abierto));
  });
});

// Filtros de stock: botones [data-filtro][data-valor] sobre tarjetas con data-tipo y data-plazas
const lista = document.querySelector<HTMLElement>("[data-stock]");
if (lista) {
  const filtro: Record<string, string> = { tipo: "todas", plazas: "0" };
  const params = new URLSearchParams(location.search);
  if (params.get("tipo")) filtro.tipo = params.get("tipo")!;
  if (params.get("plazas")) filtro.plazas = params.get("plazas")!;
  const botones = document.querySelectorAll<HTMLButtonElement>("[data-filtro]");
  const contador = document.querySelector("[data-contador]");
  const vacio = document.querySelector<HTMLElement>("[data-vacio]");
  const aplica = () => {
    let n = 0;
    lista.querySelectorAll<HTMLElement>("[data-tipo]").forEach((c) => {
      const p = Number(c.dataset.plazas);
      const ok =
        (filtro.tipo === "todas" || c.dataset.tipo === filtro.tipo) &&
        (filtro.plazas === "0" || (filtro.plazas === "4" ? p <= 4 : p >= 5));
      c.hidden = !ok;
      if (ok) n++;
    });
    botones.forEach((b) => b.setAttribute("aria-pressed", String(filtro[b.dataset.filtro!] === b.dataset.valor)));
    if (contador) contador.textContent = String(n);
    if (vacio) vacio.hidden = n > 0;
  };
  botones.forEach((b) =>
    b.addEventListener("click", () => {
      filtro[b.dataset.filtro!] = b.dataset.valor!;
      aplica();
    }),
  );
  aplica();
}

// Formularios: validación y confirmación. En la maqueta no se envía nada; en producción irán a un servicio de formularios.
document.querySelectorAll<HTMLFormElement>("form[data-formulario]").forEach((f) => {
  f.noValidate = true;
  f.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let primero: HTMLElement | null = null;
    f.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea").forEach((c) => {
      const err = f.querySelector<HTMLElement>(`[data-error-de="${c.id}"]`);
      let msg = "";
      if (c.required && !c.value.trim()) msg = "Rellena este campo.";
      else if (c.type === "email" && c.value && !/^\S+@\S+\.\S+$/.test(c.value)) msg = "Escribe un email válido, por ejemplo nombre@correo.com.";
      else if (c.type === "tel" && c.value && c.value.replace(/\D/g, "").length < 9) msg = "Escribe un teléfono de 9 cifras.";
      else if (c instanceof HTMLInputElement && c.type === "checkbox" && c.required && !c.checked) msg = "Necesitamos tu permiso para responderte.";
      c.setAttribute("aria-invalid", String(!!msg));
      if (err) err.textContent = msg;
      if (msg && !primero) primero = c;
    });
    const ini = f.querySelector<HTMLInputElement>("#ini");
    const fin = f.querySelector<HTMLInputElement>("#fin");
    if (ini?.value && fin?.value && fin.value <= ini.value) {
      fin.setAttribute("aria-invalid", "true");
      const err = f.querySelector<HTMLElement>('[data-error-de="fin"]');
      if (err) err.textContent = "La devolución tiene que ser después de la recogida.";
      primero ??= fin;
    }
    if (primero) {
      (primero as HTMLElement).focus();
      return;
    }
    const ok = f.querySelector<HTMLElement>("[data-ok]");
    f.querySelectorAll<HTMLElement>("[data-campos]").forEach((c) => (c.hidden = true));
    if (ok) {
      ok.hidden = false;
      ok.focus();
    }
  });
});
