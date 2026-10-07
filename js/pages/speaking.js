/* Speaking: las preguntas están en el HTML; aquí se enseñan de una en una (en orden aleatorio) con un cronómetro. */
import { markDone, practised } from "../lib/store.js";
import { $, $$ } from "../lib/dom.js";
import { shuffle } from "../lib/text.js";
import { stopSpeaking } from "../lib/speech.js";
import "../lib/shell.js";

const box = $(".speak"), secs = +box.dataset.secs;
const items = shuffle($$(".sp-item"));
let i = 0, timer = null;
markDone("q:" + box.dataset.id);

const stop = () => { clearInterval(timer); timer = null; };
function show(){
  stop(); stopSpeaking();
  for(const it of items) it.hidden = it !== items[i];
  $("#pos").textContent = `${i + 1} de ${items.length}`;
  $("#timer").hidden = true; $("#done").hidden = true;
  $("#go").textContent = `Empezar a hablar (${secs} s)`;
}
$("#go").addEventListener("click", () => {
  let left = secs;
  $("#timer").hidden = false; $("#done").hidden = true; $("#go").textContent = "Reiniciar";
  $("#left").textContent = left; $("#tbar").style.width = "100%";
  stop();
  timer = setInterval(() => {
    left--;
    $("#left").textContent = left; $("#tbar").style.width = `${left / secs * 100}%`;
    if(left <= 0){ stop(); $("#done").hidden = false; practised(); }
  }, 1000);
});
$("#prev").addEventListener("click", () => { i = (i - 1 + items.length) % items.length; show(); });
$("#next").addEventListener("click", () => { i = (i + 1) % items.length; show(); window.scrollTo({top:0}); });
show();
