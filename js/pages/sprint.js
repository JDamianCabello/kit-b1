/* Sprint: todas las preguntas que puedas en 60 segundos. Las opciones se clonan de #tpl-opt. */
import { store, save, record, markDone } from "../lib/store.js";
import { $, clone, fill, onKeys } from "../lib/dom.js";
import { shuffle } from "../lib/text.js";
import { OPTION_POOL } from "../lib/content.js";
import "../lib/shell.js";

function run(){
  const pool = shuffle(OPTION_POOL);
  let left = 60, score = 0, total = 0, it = null, locked = false;
  $("#sprint").hidden = false; $("#result").hidden = true;
  $("#score").textContent = 0; $("#clock").textContent = 60; $("#tbar").style.width = "100%";

  function next(){
    it = pool[total % pool.length]; locked = false;
    $("#sec").textContent = it.sec;
    const [pre, post = ""] = it.q.split("___");
    $("#pre").textContent = pre; $("#post").textContent = post;
    $("#opts").replaceChildren(...shuffle(it.opts).map((o, k) => {
      const b = fill(clone("tpl-opt"), {key: k + 1, text: o === "—" ? "(nada)" : o});
      b.dataset.v = o;
      b.addEventListener("click", () => pick(b));
      return b;
    }));
  }
  function pick(b){
    if(locked || left <= 0) return;
    locked = true; total++;
    const ok = b.dataset.v === it.ans[0];
    if(ok){ score++; $("#score").textContent = score; }
    record(it.id, ok);
    b.classList.add(ok ? "ok" : "bad");
    if(!ok) [...$("#opts").children].find(x => x.dataset.v === it.ans[0])?.classList.add("ok");
    setTimeout(() => left > 0 && next(), ok ? 300 : 900);
  }
  const timer = setInterval(() => {
    left--;
    $("#clock").textContent = left; $("#tbar").style.width = `${left / 60 * 100}%`;
    if(left <= 0){ clearInterval(timer); finish(); }
  }, 1000);
  function finish(){
    onKeys(null); markDone("q:sprint");
    const best = score > store.sprintBest;
    if(best){ store.sprintBest = score; save(); }
    $("#sprint").hidden = true; $("#result").hidden = false;
    $("#r-score").textContent = score;
    $("#r-msg").textContent = `${score} aciertos de ${total} respondidas. ${best ? "¡Nuevo récord!" : `Tu récord: ${store.sprintBest}.`}`;
    $("#again").focus();
  }
  onKeys(e => { const k = +e.key, bs = $("#opts").children; if(k >= 1 && k <= bs.length) bs[k-1].click(); });
  next();
}
$("#again").addEventListener("click", run);
run();
