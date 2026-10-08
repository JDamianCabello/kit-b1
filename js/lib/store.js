/* Progreso del alumno: se guarda solo en este navegador (localStorage) */

const KEY = "kitb1-v1";
export const DEFAULTS = () => ({answered:0, correct:0, mistakes:{}, days:[], done:{}, exams:{}, plans:{}, drafts:{}, sprintBest:0, cardDir:"en", theme:"auto", palette:"naranja"});

// Antes solo había un plan (el intensivo de 10 semanas) y se guardaba en plan.start.
// Ahora se pueden seguir varios a la vez: plans = {id del plan: {start: "AAAA-MM-DD"}}.
function migrate(s){
  const d = Object.assign(DEFAULTS(), s);
  if(!d.plans || typeof d.plans !== "object" || Array.isArray(d.plans)) d.plans = {};
  if(s.plan?.start && !Object.keys(d.plans).length) d.plans["b1-intensivo"] = {start: s.plan.start};
  delete d.plan;
  return d;
}

function load(){
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if(s && typeof s === "object") return migrate(s);
  } catch(e){}
  return DEFAULTS();
}

export let store = load();
export const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e){} };

// Sustituye todo el progreso (al restaurar una copia de seguridad)
export function replaceStore(data){ store = migrate(data); save(); }

export const ymd = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;

export function touchDay(){
  const t = ymd(new Date());
  if(!store.days.includes(t)){ store.days.push(t); store.days = store.days.slice(-400); }
}

// Días seguidos practicando (hoy cuenta aunque todavía no hayas practicado)
export function streak(){
  const set = new Set(store.days), d = new Date(); let n = 0;
  if(!set.has(ymd(d))) d.setDate(d.getDate()-1);
  while(set.has(ymd(d))){ n++; d.setDate(d.getDate()-1); }
  return n;
}

// Guarda una respuesta: los fallos se acumulan y salen de la lista al acertarlos
export function record(id, ok){
  store.answered++;
  if(ok){ store.correct++; delete store.mistakes[id]; }
  else store.mistakes[id] = (store.mistakes[id] || 0) + 1;
  touchDay(); save();
  document.dispatchEvent(new CustomEvent("progress"));
}

// Marca una tarea como hecha en todos los planes (guía leída, test hecho, mazo abierto...)
export function markDone(key){
  if(!store.done[key]){ store.done[key] = true; touchDay(); save(); }
}

export function practised(){ touchDay(); save(); document.dispatchEvent(new CustomEvent("progress")); }

// Semana de un plan en la que estás (de 1 a total) según el día en que empezaste
export function weekOf(start, total){
  const days = Math.floor((new Date() - new Date(start + "T00:00:00")) / 864e5);
  return Math.min(total, Math.max(1, Math.floor(days / 7) + 1));
}

export const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
