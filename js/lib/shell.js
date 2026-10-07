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

// Tema: automático (el del sistema), claro u oscuro. El icono lo elige el CSS según data-theme.
const THEMES = {auto:"automático", light:"claro", dark:"oscuro"};
export function applyTheme(){
  const t = store.theme;
  if(t === "light" || t === "dark") document.documentElement.dataset.theme = t;
  else delete document.documentElement.dataset.theme;
  const b = $("#theme");
  if(b){ const l = THEMES[t] || THEMES.auto; b.setAttribute("aria-label", `Tema: ${l}. Cambiar tema`); b.title = `Tema: ${l}`; }
}
$("#theme")?.addEventListener("click", () => {
  const keys = Object.keys(THEMES);
  store.theme = keys[(keys.indexOf(store.theme) + 1) % keys.length];
  save(); applyTheme();
});
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
    toast("Hay una versión nueva de Kit B1.", "Recargar", () => location.reload());
  });
  navigator.serviceWorker.register(new URL("../../sw.js", import.meta.url), {scope: new URL("../../", import.meta.url).pathname}).catch(() => {});
}
