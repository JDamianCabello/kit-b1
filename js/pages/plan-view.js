/* Un plan (planes/plan.html?id=...): empezarlo, ver sus semanas y marcar sus tareas.
   Las tareas se pintan con <template id="t-task">; lo hecho se guarda en store.done y vale para todos los planes. */
import { store, save, touchDay, ymd } from "../lib/store.js";
import { $, $$, params } from "../lib/dom.js";
import { renderStats } from "../lib/shell.js";
import { PLANS, planById, weekTasks, isDone, currentWeek, progress, endDate, fmtDate, weeksText, taskItem, ROOT } from "../lib/plans.js";

const plan = planById(params().get("id"));
let shown = null;   // semana elegida en la tira (null = la actual, o la 1 si el plan no ha empezado)

if(!plan){ $("#notfound").hidden = false; }
else {
  document.title = `${plan.title} · Planes · Inglés Paso a Paso`;
  $("#plan").hidden = false;
  $("#start-title").textContent = plan.title;
  $("#plan-desc").textContent = plan.desc;
  $("#f-level").textContent = plan.level;
  $("#f-weeks").textContent = weeksText(plan.weeks.length);
  $("#f-pace").textContent = plan.pace;

  // Tira de semanas: hasta 13 en una fila; los planes largos se reparten en varias
  const n = plan.weeks.length, strip = $("#strip");
  strip.style.gridTemplateColumns = n <= 13 ? `repeat(${n},1fr)` : "repeat(auto-fill,minmax(40px,1fr))";
  strip.replaceChildren(...plan.weeks.map((wk, i) => {
    const a = document.createElement("a");
    a.className = "wk"; a.href = `#semana-${i + 1}`; a.dataset.week = i + 1;
    a.setAttribute("aria-label", `Semana ${i + 1}: ${wk.title}`);
    a.innerHTML = `<svg aria-hidden="true"><use href="${ROOT}img/icons.svg#check"></use></svg>${i + 1}`;
    a.addEventListener("click", e => { e.preventDefault(); shown = i + 1; render(); });
    return a;
  }));

  // Otros planes, para cambiar o añadir uno más
  $("#others").replaceChildren(...PLANS.filter(p => p !== plan).map(p => {
    const a = document.createElement("a");
    a.href = `plan.html?id=${p.id}`;
    a.innerHTML = `<b></b><small></small>`;
    a.querySelector("b").textContent = p.title;
    a.querySelector("small").textContent = `${p.level} · ${weeksText(p.weeks.length)}${store.plans[p.id]?.start ? " · en curso" : ""}`;
    return a;
  }));
  render();
}


function render(){
  const started = !!store.plans[plan.id]?.start;
  const cw = started ? currentWeek(plan) : 1, wn = shown || cw, wk = plan.weeks[wn - 1];
  $("#start").hidden = started;
  $("#started").hidden = !started;
  $("#prog").hidden = !started;
  $("#leave-confirm").hidden = true;
  if(!started) $("#start-date").value = ymd(new Date());

  $("#plan-name").textContent = started
    ? `${plan.title} · Semana ${wn} de ${plan.weeks.length}${wn !== cw ? ` · vas por la ${cw}` : ""}`
    : `${plan.title} · Semana ${wn} de ${plan.weeks.length}`;
  $("#hero-title").textContent = wk.title;
  $("#hero-goal").textContent = wk.goal;

  const tasks = weekTasks(plan, wn), d = tasks.filter(isDone).length;
  $("#tasks-title").textContent = started && wn === cw ? "Tareas de esta semana" : `Tareas de la semana ${wn}`;
  $("#tasks-count").textContent = `${d} de ${tasks.length} hechas`;
  $("#tasks").replaceChildren(...tasks.map(t => taskItem(t, "t-", () => { renderStats(); render(); })));

  for(const a of $$(".wk", $("#strip"))){
    const n = +a.dataset.week, list = weekTasks(plan, n);
    a.classList.toggle("full", list.every(isDone));
    a.classList.toggle("now", started && n === cw);
    a.setAttribute("aria-current", n === wn ? "true" : "false");
  }

  if(started){
    const pr = progress(plan);
    $("#prog-text").textContent = `${pr.done} de ${pr.total} tareas del plan`;
    $("#prog-pct").textContent = `${pr.pct}%`;
    $("#prog-bar").style.width = `${pr.pct}%`;
    $("#start-text").textContent = fmtDate(new Date(store.plans[plan.id].start + "T00:00:00"), true);
    $("#hero-end").textContent = `${plan.exam ? "Examen" : "Terminas"} hacia el ${fmtDate(endDate(plan))}`;
  }
  $("#hero-end").hidden = !started;
}

if(plan){
  $("#start-form").addEventListener("submit", e => {
    e.preventDefault();
    const v = $("#start-date").value; if(!v) return;
    store.plans[plan.id] = {start: v}; shown = null;
    touchDay(); save(); render();
    $("#hero-title").scrollIntoView({block:"center"});
  });
  $("#edit-start").addEventListener("click", () => {
    $("#start-date").value = store.plans[plan.id].start;
    $("#start").hidden = false;
    $("#start-btn").textContent = "Guardar fecha";
    $("#start-date").focus();
  });
  $("#leave").addEventListener("click", () => { $("#leave-confirm").hidden = false; });
  $("#leave-no").addEventListener("click", () => { $("#leave-confirm").hidden = true; });
  $("#leave-yes").addEventListener("click", () => {
    delete store.plans[plan.id]; shown = null; save();
    $("#start-btn").textContent = "Empezar";
    render();
  });
}
