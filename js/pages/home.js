/* Inicio (index.html): tus planes con las tareas que tocan ahora, accesos rápidos, fallos y copia de seguridad.
   Las tarjetas de cada plan se pintan con <template id="t-hplan"> y sus tareas con <template id="t-task">. */
import { store, replaceStore, ymd } from "../lib/store.js";
import { $, clone, fill } from "../lib/dom.js";
import { renderStats, applyTheme, toast } from "../lib/shell.js";
import { activePlans, planById, currentWeek, weekTasks, isDone, progress, weeksText, taskItem } from "../lib/plans.js";

// Enlaces antiguos de la app de una sola página (#practicar/quick5, #guias/be...)
const legacy = location.hash.match(/^#(guias|practicar|tarjetas|fallos)(?:\/(.+))?$/);
if(legacy){
  const [, tab, sub] = legacy, id = sub && decodeURIComponent(sub);
  const to = tab === "fallos" ? "fallos.html"
    : tab === "guias" ? (id ? `guias/${id}.html` : "guias/index.html")
    : tab === "tarjetas" ? (id ? `tarjetas/mazo.html?id=${id}` : "tarjetas/index.html")
    : !id ? "practicar/index.html"
    : id === "sprint" ? "practicar/sprint.html" : id === "comp-table" ? "practicar/tabla.html" : id === "ropa-cat" ? "practicar/clasificar.html"
    : /^(sim\d|w-|sp-|prep-text)/.test(id) ? `practicar/${id}.html` : `practicar/test.html?set=${id}`;
  location.replace(to);
}

// Planes que se proponen a quien todavía no sigue ninguno
const SUGGEST = ["a1", "b1-intensivo", "tranquilo", "conversacion"];


// Cada plan: la semana en curso, el progreso y las próximas tareas sin hacer (hasta 3)
function planCard(p){
  const w = currentWeek(p), wk = p.weeks[w - 1], pr = progress(p);
  const card = fill(clone("t-hplan"), {week:`${p.title} · semana ${w} de ${p.weeks.length}`, title:wk.title, goal:wk.goal, pct:`${pr.pct}%`});
  $(".hplan-top", card).href = `planes/plan.html?id=${p.id}`;
  $(".bar i", card).style.width = `${pr.pct}%`;
  const pending = weekTasks(p, w).filter(t => !isDone(t));
  fill(card, {next: pending.length
    ? `Te quedan ${pending.length} ${pending.length === 1 ? "tarea" : "tareas"} esta semana:`
    : w < p.weeks.length ? "¡Semana completada! Puedes adelantar la siguiente desde el plan." : "¡Plan completado!"});
  $('[data-slot="tasks"]', card).replaceChildren(...pending.slice(0, 3).map(t => taskItem(t, "h-", () => { renderStats(); render(); })));
  $('[data-slot="tasks"]', card).hidden = !pending.length;
  return card;
}

function render(){
  const mine = activePlans();
  $("#myplans-list").replaceChildren(...mine.map(planCard));
  $("#noplans").hidden = !!mine.length;
  if(!mine.length) $("#suggest").replaceChildren(...SUGGEST.map(planById).map(p => {
    const a = document.createElement("a");
    a.href = `planes/plan.html?id=${p.id}`;
    a.innerHTML = "<b></b><small></small>";
    a.querySelector("b").textContent = p.title;
    a.querySelector("small").textContent = `${p.level} · ${weeksText(p.weeks.length)} · ${p.pace}`;
    return a;
  }));
  const n = Object.keys(store.mistakes).length;
  $("#mist-some").hidden = !n;
  $("#mist-none").hidden = !!n;
}

// Copia de seguridad: el progreso vive solo en este navegador; se puede guardar en un archivo y restaurar.
// Se aceptan también las copias de cuando la web se llamaba Kit B1.
const APPS = ["ingles-paso-a-paso", "kit-b1"];
$("#export").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({app:APPS[0], version:2, saved:new Date().toISOString(), data:store}, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `ingles-paso-a-paso-progreso-${ymd(new Date())}.json`;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("Copia guardada en tus descargas.");
});
$("#import").addEventListener("click", () => $("#import-file").click());
$("#import-file").addEventListener("change", async e => {
  const file = e.target.files[0]; e.target.value = "";
  if(!file) return;
  let f = null;
  try { f = JSON.parse(await file.text()); } catch(err){}
  const d = f && f.data;
  const ok = f && APPS.includes(f.app) && d && typeof d === "object" && !Array.isArray(d)
    && d.mistakes && typeof d.mistakes === "object" && !Array.isArray(d.mistakes) && Array.isArray(d.days);
  if(!ok) return toast("Ese archivo no es una copia válida de Inglés Paso a Paso.");
  replaceStore(d); applyTheme(); renderStats(); render();
  toast("Progreso restaurado.");
});

render();
