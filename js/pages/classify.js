/* Clasifica las palabras (como la ficha de clase): 16 palabras al azar; cada una va en una o varias categorías.
   Filas, botones y columnas del resultado se clonan de #tpl-word, #tpl-cat y #tpl-col. */
import { practised, markDone } from "../lib/store.js";
import { $, $$, clone, fill } from "../lib/dom.js";
import { shuffle } from "../lib/text.js";
import { CLOTHES, CLOTHES_CATS } from "../data/vocab.js";
import "../lib/shell.js";
import "../lib/speech.js";

const CATS = Object.entries(CLOTHES_CATS);
let words = [], sel = [];
markDone("q:ropa-cat");

function build(){
  const multi = CLOTHES.filter(w => w[2].length > 1), single = CLOTHES.filter(w => w[2].length === 1);
  words = shuffle([...shuffle(multi).slice(0, 2), ...shuffle(single).slice(0, 14)]);
  sel = words.map(() => new Set());
  $("#cls").replaceChildren(...words.map((w, i) => {
    const row = fill(clone("tpl-word"), {word: w[0]});
    row.dataset.i = i;
    $(".spk", row).dataset.say = w[0];
    $(".clbtns", row).append(...CATS.map(([k, label]) => { const b = clone("tpl-cat"); b.dataset.k = k; b.textContent = label; return b; }));
    return row;
  }));
  $("#grade").disabled = false;
  $("#result").hidden = true;
}

$("#cls").addEventListener("click", e => {
  const b = e.target.closest(".clb"), row = b?.closest(".clrow");
  if(!b || row.dataset.locked) return;
  const s = sel[+row.dataset.i], k = b.dataset.k;
  s.has(k) ? s.delete(k) : s.add(k);
  b.setAttribute("aria-pressed", s.has(k));
});

$("#grade").addEventListener("click", () => {
  let right = 0;
  for(const row of $$(".clrow")){
    const i = +row.dataset.i, w = words[i], s = sel[i];
    const ok = s.size === w[2].length && w[2].every(c => s.has(c));
    if(ok) right++;
    row.dataset.locked = 1;
    row.classList.add(ok ? "ok" : "bad");
    for(const b of $$(".clb", row)){ const k = b.dataset.k; if(w[2].includes(k)) b.classList.add("ok"); else if(s.has(k)) b.classList.add("bad"); }
    const why = $(".why", row);
    why.textContent = `${w[1]} · va en: ${w[2].map(c => CLOTHES_CATS[c]).join(" + ")}`;
    why.hidden = false;
  }
  practised();
  $("#grade").disabled = true;
  $("#r-score").textContent = `${right}/${words.length}`;
  $("#r-msg").textContent = right === words.length ? "Perfecto, todas bien clasificadas." : "Revisa las marcadas en rojo: debajo de cada una tienes la respuesta.";
  $("#r-cols").replaceChildren(...CATS.map(([k, label], n) => {
    const col = fill(clone("tpl-col"), {name: label, words: words.filter(w => w[2].includes(k)).map(w => w[0]).join(", ") || "—"});
    col.classList.add(["a", "b", "c", "a"][n]);
    return col;
  }));
  $("#result").hidden = false;
  $("#result").scrollIntoView({block:"start", behavior:"smooth"});
});
$("#again").addEventListener("click", () => { build(); window.scrollTo({top:0}); });
build();
