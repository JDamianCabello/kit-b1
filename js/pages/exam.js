/* Simulacros, textos con huecos y Writing: todo el contenido está en el HTML.
   Cada pregunta (.xq) lleva su respuesta en data-answer; aquí se cronometra, se escucha el audio y se corrige. */
import { store, save, markDone, pct, ymd } from "../lib/store.js";
import { $, $$ } from "../lib/dom.js";
import { norm } from "../lib/text.js";
import { TTS, speak, stopSpeaking } from "../lib/speech.js";
import "../lib/shell.js";

const exam = $(".exam"), id = exam.dataset.exam, t0 = Date.now();
const clock = setInterval(() => {
  const s = Math.floor((Date.now() - t0) / 1000);
  $("#clock").textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}, 1000);
if(!TTS) for(const d of $$(".script")) d.open = true;

// Elegir respuesta (se puede cambiar hasta corregir)
for(const g of $$(".xopts")) g.addEventListener("click", e => {
  const b = e.target.closest(".xopt");
  if(!b || g.dataset.locked) return;
  for(const x of $$(".xopt", g)) x.setAttribute("aria-pressed", x === b);
  g.dataset.value = b.dataset.v;
});

// Listening: cada audio se puede oír dos veces, con una voz para Woman y otra para Man
for(const b of $$(".play")) b.addEventListener("click", () => {
  const left = +b.dataset.plays;
  if(left <= 0) return;
  b.dataset.plays = left - 1;
  $("span", b).textContent = `(${left - 1})`;
  if(left - 1 <= 0) b.disabled = true;
  const box = b.closest(".xq") || b.closest(".xpart");
  stopSpeaking();
  for(const p of $$(".script [data-line]", box)){
    const text = [...p.childNodes].filter(n => n.nodeName !== "B").map(n => n.textContent).join("").trim();
    const woman = p.dataset.line === "W";
    speak(text, {queue:true, voice: woman ? 0 : 1, pitch: woman ? 1.15 : .85, rate:.9});
  }
});

// Writing: el borrador se guarda mientras escribes y se cuentan las palabras
for(const t of $$("textarea[data-draft]")){
  const k = t.dataset.draft, wc = $(`[data-count-for="${t.id}"]`);
  t.value = store.drafts[k] || "";
  const count = () => {
    const n = (t.value.match(/[A-Za-zÀ-ÿ0-9'’-]+/g) || []).length;
    wc.textContent = `${n} palabras`;
    wc.className = "wcount " + (n >= 90 && n <= 120 ? "good" : n > 0 ? "warn" : "");
  };
  t.addEventListener("input", () => { store.drafts[k] = t.value; save(); count(); });
  count();
}

$("#grade").addEventListener("click", () => {
  let right = 0, total = 0;
  for(const box of $$(".xq")){
    const ans = JSON.parse(box.dataset.answer), why = $(".why", box), input = $("input", box);
    let ok;
    total++;
    if(input){
      ok = ans.some(a => norm(a) === norm(input.value));
      input.disabled = true;
      if(!ok){ const b = document.createElement("b"); b.textContent = ans.join(" / "); why.prepend("Respuesta: ", b, ". "); }
    } else {
      const g = $(".xopts", box), v = g.dataset.value === undefined ? null : +g.dataset.value;
      ok = v === ans;
      g.dataset.locked = 1;
      for(const x of $$(".xopt", g)){ if(+x.dataset.v === ans) x.classList.add("ok"); else if(+x.dataset.v === v) x.classList.add("bad"); }
    }
    if(ok) right++;
    box.classList.add(ok ? "ok" : "bad");
    why.hidden = false;
  }
  for(const c of $$(".checks")) c.hidden = false;
  markDone("x:" + id);
  clearInterval(clock);
  $("#grade").disabled = true;
  $(".gradebar").hidden = true;
  // Tarea solo de Writing: no hay nota automática, solo autoevaluación
  if(!total){ $(".checks")?.scrollIntoView({block:"start", behavior:"smooth"}); return; }
  const score = pct(right, total), prev = store.exams[id];
  store.exams[id] = {best: Math.max(score, prev?.best || 0), last: score, date: ymd(new Date())};
  save();
  $("#r-score").textContent = `${score}%`;
  $("#r-msg").textContent = `${right} de ${total} bien. ` + (score >= 85 ? "Nivel B1 muy sólido." : score >= 70 ? "Estarías aprobando (en el examen real se aprueba con unos 70 %)." : score >= 50 ? "Cerca. Repasa las explicaciones de los fallos." : "Aún queda camino. Revisa las guías de los fallos y repítelo en unos días.");
  $("#result").hidden = false;
  window.scrollTo({top:0, behavior:"smooth"});
});
$("#redo").addEventListener("click", () => location.reload());
