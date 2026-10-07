/* Completa la tabla: 8 adjetivos al azar. Modo fácil: te dan el adjetivo. Modo mezclado: una de las tres formas.
   Filas y celdas se clonan de las plantillas #tpl-row, #tpl-given y #tpl-cell. */
import { store, save, practised, markDone } from "../lib/store.js";
import { $, $$, clone, fill } from "../lib/dom.js";
import { shuffle, cardMatch } from "../lib/text.js";
import { COMP_ADJ } from "../data/practice.js";
import "../lib/shell.js";

const HEADS = ["Adjective", "Comparative", "Superlative"];
let rows = [];
markDone("q:comp-table");

function build(){
  const mixed = !!store.tableMixed;
  for(const b of $$("[data-mixed]")) b.setAttribute("aria-pressed", (b.dataset.mixed === "1") === mixed);
  $("#mode-help").textContent = mixed ? "En cada fila te damos una forma: escribe las otras dos." : "Escribe el comparativo y el superlativo de cada adjetivo.";
  rows = shuffle(COMP_ADJ).slice(0, 8).map(a => ({a, vals:[a[0], a[2], a[3]], give: mixed ? Math.random() * 3 | 0 : 0}));
  const table = $("#ctable");
  table.replaceChildren(table.firstElementChild, ...rows.map((r, i) => {
    const row = clone("tpl-row");
    r.vals.forEach((v, c) => {
      if(c === r.give){ const g = fill(clone("tpl-given"), {value: v}); g.dataset.label = HEADS[c]; row.append(g); return; }
      const cell = clone("tpl-cell"), inp = $("input", cell);
      cell.dataset.label = HEADS[c];
      inp.dataset.c = c; inp.setAttribute("aria-label", `${HEADS[c]} de la fila ${i+1}`);
      row.append(cell);
    });
    row.dataset.r = i;
    return row;
  }));
  $("#grade").disabled = false;
  $("#result").hidden = true;
}

$("#grade").addEventListener("click", () => {
  let right = 0, total = 0;
  for(const rowEl of $$(".crow[data-r]")){
    const r = rows[+rowEl.dataset.r];
    for(const inp of $$("input", rowEl)){
      const target = r.vals[+inp.dataset.c], ok = cardMatch(target, inp.value);
      total++; if(ok) right++;
      inp.disabled = true; inp.classList.add(ok ? "ok" : "bad");
      if(!ok){ const fix = document.createElement("small"); fix.className = "fix"; fix.textContent = target; inp.after(fix); }
    }
    const rule = document.createElement("small");
    rule.className = "crule"; rule.textContent = `${r.a[1]} · ${r.a[4]}`;
    rowEl.append(rule);
  }
  practised();
  $("#grade").disabled = true;
  $("#r-score").textContent = `${right}/${total}`;
  $("#r-msg").textContent = right === total ? "Perfecto, tabla completa." : "En rojo tienes la forma correcta y debajo de cada fila, la regla.";
  $("#result").hidden = false;
  $("#result").scrollIntoView({block:"start", behavior:"smooth"});
});
for(const b of $$("[data-mixed]")) b.addEventListener("click", () => { store.tableMixed = b.dataset.mixed === "1"; save(); build(); });
$("#again").addEventListener("click", () => { build(); window.scrollTo({top:0}); });
build();
