/* Fallos: la lista sale de lo que has fallado (se guarda en este navegador) y se pinta con la plantilla #tpl-mistake. */
import { store, save } from "../lib/store.js";
import { $, clone, fill, filledSentence } from "../lib/dom.js";
import { renderStats } from "../lib/shell.js";
import { ITEMS } from "../lib/content.js";

// Fallos de preguntas que ya no existen (el contenido cambió): se quitan para que los contadores cuadren
const stale = Object.keys(store.mistakes).filter(id => !ITEMS[id]);
if(stale.length){ for(const id of stale) delete store.mistakes[id]; save(); renderStats(); }

function render(){
  const ids = Object.keys(store.mistakes).filter(id => ITEMS[id]).sort((a, b) => store.mistakes[b] - store.mistakes[a]);
  $('[data-stat="mistakes-total"]').textContent = ids.length;
  $("#mactions").hidden = !ids.length;
  $("#mempty").hidden = !!ids.length;
  $("#msort").hidden = ids.length < 2;
  $("#mlist").replaceChildren(...ids.map(id => {
    const it = ITEMS[id], li = clone("tpl-mistake");
    fill(li, {sec: it.sec, times: `${store.mistakes[id]}×`, note: it.note}, ["note"]);
    li.querySelector('[data-slot="sentence"]').append(filledSentence(it));
    return li;
  }));
}

$("#clear").addEventListener("click", () => { $("#confirm").hidden = false; $("#clear").hidden = true; $("#yes").focus(); });
$("#no").addEventListener("click", () => { $("#confirm").hidden = true; $("#clear").hidden = false; });
$("#yes").addEventListener("click", () => {
  store.mistakes = {}; save(); renderStats();
  $("#confirm").hidden = true; $("#clear").hidden = false;
  render();
});
render();
