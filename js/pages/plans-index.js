/* Catálogo de planes (planes/index.html): tus planes arriba y luego todos, agrupados por nivel, objetivo y ritmo.
   La estructura de cada tarjeta está en <template id="t-card">. */
import { $, clone, fill } from "../lib/dom.js";
import { PLANS, activePlans, currentWeek, progress, allTasks, weeksText } from "../lib/plans.js";
import { PLAN_GROUPS } from "../data/plans.js";
import { store } from "../lib/store.js";
import "../lib/shell.js";

function card(p){
  const a = fill(clone("t-card"), {level:p.level, title:p.title, desc:p.desc, weeks:weeksText(p.weeks.length), pace:p.pace, tasks:`${allTasks(p).length} tareas`});
  a.href = `plan.html?id=${p.id}`;
  if(store.plans[p.id]?.start){
    const w = currentWeek(p), pr = progress(p);
    fill(a, {state:`Semana ${w} de ${p.weeks.length} · ${pr.pct} %`});
    $('[data-slot="state"]', a).hidden = false;
    const bar = $('[data-slot="bar"]', a);
    bar.hidden = false; $("i", bar).style.width = `${pr.pct}%`;
    a.classList.add("active");
  }
  return a;
}

const mine = activePlans();
$("#mine").hidden = !mine.length;
$("#mine-list").replaceChildren(...mine.map(card));
$("#groups").replaceChildren(...PLAN_GROUPS.map(([id, title, intro]) => {
  const s = fill(clone("t-group"), {title, intro});
  s.id = id;
  $('[data-slot="list"]', s).replaceChildren(...PLANS.filter(p => p.group === id).map(card));
  return s;
}));
