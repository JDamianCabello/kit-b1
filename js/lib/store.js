/* Progreso del alumno: se guarda solo en este navegador (localStorage) */

const KEY = "kitb1-v1";
export const DEFAULTS = () => ({answered:0, correct:0, mistakes:{}, days:[], done:{}, exams:{}, plan:{start:null}, drafts:{}, sprintBest:0, cardDir:"en", theme:"auto"});

function load(){
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if(s && typeof s === "object") return Object.assign(DEFAULTS(), s);
  } catch(e){}
  return DEFAULTS();
}

export let store = load();
export const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e){} };

// Sustituye todo el progreso (al restaurar una copia de seguridad)
export function replaceStore(data){ store = Object.assign(DEFAULTS(), data); save(); }

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

// Marca una tarea del plan como hecha (guía leída, test hecho, mazo abierto...)
export function markDone(key){
  if(!store.done[key]){ store.done[key] = true; touchDay(); save(); }
}

export function practised(){ touchDay(); save(); document.dispatchEvent(new CustomEvent("progress")); }

// Semana del plan en la que estás (1 a 10) según el día en que empezaste
export function weekNow(){
  if(!store.plan.start) return 1;
  const days = Math.floor((new Date() - new Date(store.plan.start + "T00:00:00")) / 864e5);
  return Math.min(10, Math.max(1, Math.floor(days / 7) + 1));
}

export const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
