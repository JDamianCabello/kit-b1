/* Lo común a todas las páginas: racha y acierto, aviso de fallos, tema, avisos y modo sin conexión.
   El HTML de la cabecera ya está en cada página; aquí solo se rellenan los datos. */
import { store, save, streak, pct } from "./store.js";
import { $, $$ } from "./dom.js";

document.documentElement.classList.add("js");

export function renderStats(){
  const s = streak(), n = Object.keys(store.mistakes).length;
  for(const el of $$('[data-stat="streak"]')) el.textContent = `${s} ${s === 1 ? "día" : "días"}`;
  for(const el of $$('[data-stat="accuracy"]')) el.textContent = `${pct(store.correct, store.answered)}%`;
  for(const el of $$('[data-stat="mistakes"]')){ el.textContent = n; el.hidden = !n; }
}
document.addEventListener("progress", renderStats);
renderStats();

// Tema: modo (automático, claro u oscuro) y paleta de colores (naranja por defecto).
// Se guardan en localStorage con el resto del progreso; el <head> de cada página ya los aplica antes de pintar.
const MODES = {auto:"automático", light:"claro", dark:"oscuro"};
const PALETTES = ["naranja", "cobalto", "lavanda", "bosque", "rosa"];
export function applyTheme(){
  const r = document.documentElement, mode = MODES[store.theme] ? store.theme : "auto";
  const pal = PALETTES.includes(store.palette) ? store.palette : "naranja";
  if(mode === "auto") delete r.dataset.theme; else r.dataset.theme = mode;
  if(pal === "naranja") delete r.dataset.palette; else r.dataset.palette = pal;
  const b = $("#theme");
  if(b){ b.setAttribute("aria-label", `Tema y colores (modo ${MODES[mode]})`); b.title = "Tema y colores"; }
  for(const i of $$('input[name="tm-mode"]')) i.checked = i.value === mode;
  for(const i of $$('input[name="tm-pal"]')) i.checked = i.value === pal;
  // Color de la barra del navegador en el móvil
  const bg = getComputedStyle(r).getPropertyValue("--bg").trim();
  for(const m of $$('meta[name="theme-color"]')) m.content = bg;
}
for(const i of $$('input[name="tm-mode"]')) i.addEventListener("change", () => { store.theme = i.value; save(); applyTheme(); });
for(const i of $$('input[name="tm-pal"]')) i.addEventListener("change", () => { store.palette = i.value; save(); applyTheme(); });
// Navegadores sin popover: el botón muestra y esconde el menú
const menu = $("#theme-menu");
if(menu && !("popover" in HTMLElement.prototype)){
  menu.hidden = true;
  $("#theme")?.addEventListener("click", () => { menu.hidden = !menu.hidden; });
}
applyTheme();

// Avisos breves abajo de la pantalla, con un botón opcional
let toastTimer = null;
export function toast(msg, action, cb){
  const t = $("#toast"); if(!t) return;
  clearTimeout(toastTimer);
  $("[data-slot=msg]", t).textContent = msg;
  const b = $("button", t);
  b.hidden = !action;
  if(action){ b.textContent = action; b.onclick = () => { t.hidden = true; cb?.(); }; }
  else toastTimer = setTimeout(() => t.hidden = true, 3500);
  t.hidden = false;
}

// «Saltar al contenido» mueve el foco al contenido principal
$(".skip")?.addEventListener("click", e => { e.preventDefault(); $("main")?.focus(); });

// Sin conexión: el service worker guarda la web. Si llega una versión nueva, se avisa para recargar.
if("serviceWorker" in navigator && /^https?:$/.test(location.protocol)){
  const hadController = !!navigator.serviceWorker.controller;
  let notified = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if(!hadController || notified) return;
    notified = true;
    toast("Hay una versión nueva de Inglés Paso a Paso.", "Recargar", () => location.reload());
  });
  navigator.serviceWorker.register(new URL("../../sw.js", import.meta.url), {scope: new URL("../../", import.meta.url).pathname}).catch(() => {});
}
