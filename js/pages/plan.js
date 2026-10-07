/* Plan (index.html): las 10 semanas y sus tareas ya están en el HTML.
   Aquí se marca lo hecho, se elige la semana que se ve y se calcula el progreso. */
import { store, save, touchDay, weekNow, pct, replaceStore, ymd } from "../lib/store.js";
import { $, $$ } from "../lib/dom.js";
import { renderStats, applyTheme, toast } from "../lib/shell.js";

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

const weeks = $$(".week"), boxes = $$(".tasks input[type=checkbox]");
let shown = null;   // semana elegida en la tira (null = la actual)

function render(){
  const started = !!store.plan.start;
  $("#start").hidden = started;
  $("#plan").hidden = !started;
  if(!started){ $("#start-date").value = ymd(new Date()); return; }

  const cw = weekNow(), wn = shown || cw;
  for(const b of boxes){
    b.checked = !!store.done[b.dataset.key];
    b.closest("li").classList.toggle("done", b.checked);
  }
  const done = boxes.filter(b => b.checked).length;
  $("#prog-text").textContent = `${done} de ${boxes.length} tareas del plan`;
  $("#prog-pct").textContent = `${pct(done, boxes.length)}%`;
  $("#prog-bar").style.width = `${pct(done, boxes.length)}%`;

  const exam = new Date(store.plan.start + "T00:00:00"); exam.setDate(exam.getDate() + 70);
  $("#hero-exam").textContent = `Examen hacia el ${exam.toLocaleDateString("es-ES", {day:"numeric", month:"long"})}`;
  $("#hero-exam").hidden = false;
  $("#start-text").textContent = new Date(store.plan.start + "T00:00:00").toLocaleDateString("es-ES", {day:"numeric", month:"long", year:"numeric"});
  $("#started").hidden = false;

  for(const w of weeks){
    const n = +w.dataset.week, list = $$("input[type=checkbox]", w), d = list.filter(b => b.checked).length;
    w.hidden = n !== wn;
    $("[data-week-count]", w).textContent = `${d} de ${list.length} hechas`;
    const a = $(`.wk[data-week="${n}"]`);
    a.classList.toggle("full", d === list.length);
    a.classList.toggle("now", n === cw);
    a.setAttribute("aria-current", n === wn ? "true" : "false");
    if(n === wn){
      $("#hero-tag").textContent = `Semana ${n} de 10${n !== cw ? ` · vas por la ${cw}` : ""}`;
      $("#hero-title").textContent = $(".week-title", w).textContent;
      $("#hero-goal").textContent = $(".week-goal", w).textContent;
      $("#tasks-title").textContent = n === cw ? "Tareas de esta semana" : `Tareas de la semana ${n}`;
      $("#tasks-count").textContent = `${d} de ${list.length} hechas`;
    }
  }
  const n = Object.keys(store.mistakes).length;
  $("#mist-some").hidden = !n;
  $("#mist-none").hidden = !!n;
}

for(const b of boxes) b.addEventListener("change", () => {
  if(b.checked) store.done[b.dataset.key] = true; else delete store.done[b.dataset.key];
  touchDay(); save(); renderStats(); render();
});
for(const a of $$(".wk")) a.addEventListener("click", e => {
  e.preventDefault();
  const n = +a.dataset.week;
  shown = n === weekNow() ? null : n;
  render();
});
$("#start-form").addEventListener("submit", e => {
  e.preventDefault();
  const v = $("#start-date").value; if(!v) return;
  store.plan.start = v; save(); render();
});
$("#edit-start").addEventListener("click", () => {
  $("#start-date").value = store.plan.start;
  $("#start").hidden = false; $("#plan").hidden = true;
  $("#start-date").focus();
});

// Copia de seguridad: el progreso vive solo en este navegador; se puede guardar en un archivo y restaurar
$("#export").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({app:"kit-b1", version:1, saved:new Date().toISOString(), data:store}, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `kit-b1-progreso-${ymd(new Date())}.json`;
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
  const ok = f && f.app === "kit-b1" && d && typeof d === "object" && !Array.isArray(d)
    && d.mistakes && typeof d.mistakes === "object" && !Array.isArray(d.mistakes) && Array.isArray(d.days);
  if(!ok) return toast("Ese archivo no es una copia válida de Kit B1.");
  replaceStore(d); applyTheme(); renderStats(); render();
  toast("Progreso restaurado.");
});

render();
