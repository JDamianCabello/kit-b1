/* Índice de guías: las tarjetas ya están en el HTML.
   Aquí se marcan las leídas y las de esta semana, se filtra por texto y nivel y se elige «Sigue por aquí». */
import { store, pct } from "../lib/store.js";
import { activePlans, currentWeek } from "../lib/plans.js";
import { $, $$ } from "../lib/dom.js";
import "../lib/shell.js";

const cards = $$(".gcard"), sections = $$(".gsect");
// Guías de la semana en curso de tus planes (si sigues alguno)
const weekGuides = new Set(activePlans().flatMap(p => p.weeks[currentWeek(p) - 1].tasks.filter(t => t[0] === "g").map(t => t[1])));
const isRead = c => !!store.done["g:" + c.dataset.guide];
const thisWeek = c => weekGuides.has(c.dataset.guide);

// Estado de cada guía
for(const c of cards){
  const read = isRead(c), now = thisWeek(c) && !read;
  $(".gread", c).hidden = !read;
  $(".gnow", c).hidden = !now;
  $(".gchev", c).hidden = read || now;
  c.classList.toggle("now", now);
}
for(const s of sections){
  const list = $$(".gcard", s);
  $("[data-read-count]", s).textContent = `${list.filter(isRead).length} de ${list.length} leídas`;
}
const read = cards.filter(isRead).length;
$("#read-count").textContent = `${read} de ${cards.length}`;
$("#read-bar").style.width = `${pct(read, cards.length)}%`;

// «Sigue por aquí»: la primera sin leer de la semana de tus planes; si no hay, la primera sin leer
const next = cards.find(c => thisWeek(c) && !isRead(c)) || cards.find(c => !isRead(c));
if(next){
  const box = $("#next-guide"), sec = next.closest(".gsect");
  box.href = next.getAttribute("href");
  $("#next-tag").textContent = thisWeek(next) ? "Sigue por aquí · de tu plan" : "Sigue por aquí";
  $("#next-level").textContent = $(".lvtag", sec).textContent;
  $("#next-level").className = `lvtag lv-${[...sec.classList].find(k => k.startsWith("lv-")).slice(3)}`;
  $("#next-title").textContent = $(".gtx b", next).textContent;
  $("#next-sub").textContent = $(".gtx small", next).textContent;
  box.hidden = false;
}

// Filtros: texto y nivel
let level = null;
function filter(){
  const q = $("#gq").value.trim().toLowerCase();
  let shown = 0;
  for(const s of sections){
    const levelOk = level === null || s.dataset.level === level;
    let inSection = 0;
    for(const c of $$(".gcard", s)){
      const ok = levelOk && (!q || c.dataset.search.includes(q));
      c.hidden = !ok; inSection += ok;
    }
    s.hidden = !inSection; shown += inSection;
  }
  $("#no-guides").hidden = !!shown;
}
$("#gq").addEventListener("input", filter);
for(const b of $$("[data-lv]")) b.addEventListener("click", () => {
  level = b.dataset.lv || null;
  for(const x of $$("[data-lv]")) x.setAttribute("aria-pressed", x === b);
  filter();
});
