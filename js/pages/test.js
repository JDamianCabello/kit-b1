/* Test (practicar/test.html?set=...): elige preguntas al azar del conjunto y las corrige.
   La estructura está en el HTML; aquí solo se rellenan los huecos y se clonan las opciones (#tpl-opt). */
import { store, record, markDone, pct } from "../lib/store.js";
import { $, clone, fill, filledSentence, params, onKeys, reducedMotion } from "../lib/dom.js";
import { shuffle, fillText, isRight } from "../lib/text.js";
import { SETS } from "../lib/content.js";
import "../lib/shell.js";
import { stopSpeaking } from "../lib/speech.js";

const show = which => { $("#quiz").hidden = which !== "quiz"; $("#result").hidden = which !== "result"; };
const answerText = a => a === "—" ? "(nada)" : a;

function start(pool, n, keep, setId){
  if(!pool.length){ show(""); $("#no-items").hidden = false; return; }
  let q = (keep ? pool : shuffle(pool)).slice(0, n);
  if(keep) q = shuffle(q);
  let i = 0, score = 0, done = false, opts = [];
  const wrongs = [];
  show("quiz");

  function render(){
    const it = q[i]; done = false;
    $("#q-count").textContent = `Pregunta ${i+1} de ${q.length}`;
    $("#q-score").textContent = `${score} ${score === 1 ? "acierto" : "aciertos"}`;
    $("#q-bar").style.width = `${i / q.length * 100}%`;
    $("#q-sec").textContent = it.sec;
    const [pre, post] = it.q.includes("___") ? it.q.split("___") : [it.q, null];
    $("#q-pre").textContent = pre;
    $("#q-post").textContent = post ?? "";
    const blank = $("#q-blank");
    blank.hidden = post === null; blank.textContent = " "; blank.classList.remove("filled");
    $("#q-hint").textContent = it.hint ? `(${it.hint})` : "";
    $("#q-fb").hidden = true;

    opts = it.opts ? shuffle(it.opts) : [];
    $("#q-opts").hidden = !it.opts;
    $("#q-typed").hidden = !!it.opts;
    $("#q-opts").replaceChildren(...opts.map((o, k) => {
      const b = fill(clone("tpl-opt"), {key: k + 1, text: answerText(o)});
      b.addEventListener("click", () => answer(o, b));
      return b;
    }));
    const inp = $("#q-input");
    inp.value = ""; inp.disabled = false; inp.className = "";
    for(const b of $("#q-typed").querySelectorAll("button")) b.disabled = false;
    if(!it.opts && matchMedia("(hover: hover)").matches) inp.focus({preventScroll:true});
  }

  function answer(v, btn){
    if(done) return;
    const it = q[i]; done = true;
    const ok = v !== "" && isRight(it, v);
    if(ok) score++; else wrongs.push(it);
    record(it.id, ok);
    const blank = $("#q-blank");
    blank.textContent = answerText(it.ans[0]); blank.classList.add("filled");
    if(it.opts){
      for(const b of $("#q-opts").children){ b.disabled = true; if(b.querySelector('[data-slot="text"]').textContent === answerText(it.ans[0])) b.classList.add("ok"); }
      if(!ok && btn) btn.classList.add("bad");
    } else {
      const inp = $("#q-input"); inp.disabled = true; inp.classList.add(ok ? "ok" : "bad");
      for(const b of $("#q-typed").querySelectorAll("button")) b.disabled = true;
    }
    const fb = $("#q-fb");
    fb.className = "feedback " + (ok ? "ok" : "bad");
    const others = it.ans.length > 1 ? ` (también vale: ${it.ans.slice(1).join(", ")})` : "";
    $("#q-verdict").textContent = ok ? "¡Correcto!" : `${v ? "No es correcto." : "Esta era la respuesta:"} Respuesta: ${answerText(it.ans[0])}${others}`;
    $("#q-note").innerHTML = it.note;   // nota de nuestros datos, con <b> y <mark>
    $("#q-listen").dataset.say = it.say || fillText(it.q, it.ans[0]);
    $("#q-next").textContent = i + 1 < q.length ? "Siguiente →" : "Ver resultado";
    fb.hidden = false;
    $("#q-next").focus({preventScroll:true});
    fb.scrollIntoView({block:"nearest", behavior: reducedMotion() ? "auto" : "smooth"});
  }

  function end(){
    onKeys(null);
    if(setId) markDone("q:" + setId);
    show("result");
    const p = score / q.length;
    $("#r-score").textContent = `${score}/${q.length}`;
    $("#r-msg").textContent = p === 1 ? "Perfecto. Ronda sin fallos." : p >= .7 ? "Muy bien. Repasa los fallos de abajo." : p >= .4 ? "Vas bien. Repite los fallos hasta que salgan solos." : "Estos cuestan. Repítelos: así es como se fijan.";
    const retry = $("#r-retry");
    retry.hidden = !wrongs.length;
    retry.textContent = `Repetir ${wrongs.length} ${wrongs.length === 1 ? "fallo" : "fallos"}`;
    retry.onclick = () => start(wrongs, wrongs.length, false, null);
    $("#r-again").onclick = () => start(setId ? SETS[setId].pool(store.mistakes) : pool, n, keep, setId);
    $("#r-review").replaceChildren(...wrongs.map(w => {
      const li = fill(clone("tpl-review"), {note: w.note}, ["note"]);
      li.querySelector('[data-slot="sentence"]').append(filledSentence(w));
      return li;
    }));
    $("#r-again").focus({preventScroll:true});
    window.scrollTo({top:0});
  }

  $("#q-typed").onsubmit = e => { e.preventDefault(); const v = $("#q-input").value; if(!done && v.trim()) answer(v); };
  $("#q-skip").onclick = () => answer("");
  $("#q-next").onclick = () => { stopSpeaking(); i++; i < q.length ? render() : end(); window.scrollTo({top:0}); };
  onKeys(e => { const k = +e.key; if(!done && q[i].opts && k >= 1 && k <= opts.length) $("#q-opts").children[k-1].click(); });
  render();
}

const id = params().get("set"), set = SETS[id];
if(!set || !set.pool){ $("#not-found").hidden = false; }
else {
  $("#title").textContent = set.label;
  document.title = `${set.label} · Kit B1`;
  start(set.pool(store.mistakes), set.n, set.keep, id);
}
