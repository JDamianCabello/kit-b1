/* Menú de Practicar: la lista ya está en el HTML. Aquí se marcan los hechos, las mejores notas y el récord del sprint. */
import { store } from "../lib/store.js";
import { $, $$ } from "../lib/dom.js";
import "../lib/shell.js";

const isDone = a => !!store.done[a.dataset.done];
for(const a of $$("[data-done]")){
  const done = isDone(a), best = store.exams[a.dataset.set]?.best;
  $(".xdone", a) && ($(".xdone", a).hidden = !done);
  a.classList.toggle("done", done);
  const b = $(".xbest", a);
  if(b && best != null){ b.textContent = `Mejor nota ${best} %`; b.hidden = false; $(".xgo", a)?.setAttribute("hidden", ""); }
}
for(const s of $$(".psec")){
  const list = $$("[data-done]", s);
  $("[data-done-count]", s).textContent = `${list.filter(isDone).length} de ${list.length} hechos`;
}
if(store.sprintBest) $("#sprint-best").textContent = `Récord: ${store.sprintBest}`;
