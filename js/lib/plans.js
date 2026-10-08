/* Planes: qué es cada tarea (título, enlace, tipo), en qué semana vas y cuánto llevas hecho. */
import { PLANS, planById } from "../data/plans.js";
import { RESOURCES } from "../data/plan.js";
import { GUIDES } from "../data/guides.js";
import { SETS, DECKS, setIdOf } from "./content.js";
import { store, save, touchDay, weekOf, pct } from "./store.js";
import { $, clone } from "./dom.js";

export { PLANS, planById };

// Ruta a la raíz de la web desde la página actual (las páginas de carpetas como planes/ van con "../")
export const ROOT = new URL("../../", import.meta.url).pathname;

const guide = id => GUIDES.find(g => g.id === id);

// Una tarea del plan: clave de «hecho», título, enlace y tipo (con su icono)
export function taskInfo(plan, [k, a], w, i){
  // Las tareas libres y los recursos se marcan a mano; el plan intensivo conserva las claves que usaba antes
  const own = plan.legacyKeys ? `w${w}:${i}` : `${plan.id}:w${w}:${i}`;
  if(k === "g") return {key:"g:" + a, label:guide(a)?.short || a, href:`${ROOT}guias/${a}.html`, kind:"Guía", cls:"k-g", icon:"guias"};
  if(k === "c") return {key:"c:" + a, label:DECKS[a]?.name || a, href:`${ROOT}tarjetas/mazo.html?id=${a}`, kind:"Tarjetas", cls:"k-c", icon:"tarjetas"};
  if(k === "r"){
    const r = RESOURCES.find(x => x.id === a);
    return {key:own, label:r ? `${r.name} (${r.by})` : a, href:r?.url, ext:true, kind:"Recurso", cls:"k-r", icon:"externo"};
  }
  if(k === "t") return {key:own, label:a, kind:"Tarea", cls:"k-t", icon:"micro"};
  const id = setIdOf(a), s = SETS[id], href = s ? `${ROOT}practicar/${s.page}` : null, label = s?.label || a;
  if(k === "w") return {key:"x:" + id, label, href, kind:"Writing", cls:"k-q", icon:"teclado"};
  if(k === "s") return {key:"q:" + id, label, href, kind:"Speaking", cls:"k-q", icon:"micro"};
  if(k === "x") return /^sim\d/.test(id)
    ? {key:"x:" + id, label, href, kind:"Simulacro", cls:"k-q", icon:"examen"}
    : {key:"x:" + id, label, href, kind:"Texto", cls:"k-t", icon:"texto"};
  // Los tests de gramática se llaman como su guía: se les pone «Test:» delante para distinguirlos
  return {key:"q:" + id, label:id.startsWith("gr-") ? `Test: ${label}` : label, href, kind:"Test", cls:"k-q", icon:"practicar"};
}

export const weekTasks = (plan, w) => plan.weeks[w - 1].tasks.map((t, i) => taskInfo(plan, t, w, i));
export const allTasks = plan => plan.weeks.flatMap((wk, wi) => weekTasks(plan, wi + 1));
export const isDone = t => !!store.done[t.key];

// Planes que estás siguiendo, en el orden del catálogo
export const activePlans = () => PLANS.filter(p => store.plans[p.id]?.start);
export const currentWeek = plan => weekOf(store.plans[plan.id].start, plan.weeks.length);

export function progress(plan){
  const all = allTasks(plan), done = all.filter(isDone).length;
  return {done, total:all.length, pct:pct(done, all.length)};
}

// Fecha en que termina el plan (y, en los planes de examen, la fecha aproximada del examen)
export function endDate(plan){
  const d = new Date(store.plans[plan.id].start + "T00:00:00");
  d.setDate(d.getDate() + plan.weeks.length * 7);
  return d;
}
export const fmtDate = (d, year = false) => d.toLocaleDateString("es-ES", year ? {day:"numeric", month:"long", year:"numeric"} : {day:"numeric", month:"long"});
// Duración para mostrar: los planes largos, en meses
export const weeksText = n => n >= 20 ? `${Math.round(n / 4.33)} meses` : `${n} semanas`;

// Una fila de tarea con su casilla (plantilla <template id="t-task"> de la página).
// Las tareas con enlace llevan a su página; las libres son una etiqueta que marca la casilla.
export function taskItem(t, prefix, onChange){
  const li = clone("t-task"), box = $("input", li), a = $("a", li), kind = $(".kind", li);
  box.id = prefix + t.key.replace(/[^a-z0-9-]/gi, "-");
  box.checked = isDone(t);
  box.setAttribute("aria-label", `Hecho: ${t.label}`);
  li.classList.toggle("done", box.checked);
  $(".tname", li).textContent = t.label;
  kind.classList.add(t.cls);
  $("use", kind).setAttribute("href", `${ROOT}img/icons.svg#${t.icon}`);
  $("span", kind).textContent = t.kind;
  if(t.href){
    a.href = t.href;
    if(t.ext){ a.target = "_blank"; a.rel = "noopener"; }
    $(".go use", a).setAttribute("href", `${ROOT}img/icons.svg#${t.ext ? "externo" : "derecha"}`);
  } else {
    const label = document.createElement("label");
    label.htmlFor = box.id;
    label.append($(".tname", li), kind);
    a.replaceWith(label);
  }
  box.addEventListener("change", () => {
    if(box.checked) store.done[t.key] = true; else delete store.done[t.key];
    touchDay(); save(); onChange();
  });
  return li;
}
