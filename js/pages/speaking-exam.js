/* Simulacro de Speaking: el guion está en el HTML (una <li class="mstep"> por pregunta).
   Aquí se hace de examinador: una pregunta cada vez, en voz alta, con cronómetro;
   en modo «solo» el móvil también hace de compañero, y si quieres se graban tus respuestas. */
import { markDone, practised } from "../lib/store.js";
import { $, $$, clone, fill } from "../lib/dom.js";
import { shuffle } from "../lib/text.js";
import { TTS, speak, stopSpeaking } from "../lib/speech.js";
import { toast } from "../lib/shell.js";

const EXAMINER = {voice:0, rate:.9}, PARTNER = {voice:1, pitch:1.1, rate:.95};
const PART1_QUESTIONS = 4;   // de la lista de la parte 1 se eligen unas pocas al azar, como en el examen
let steps = [], i = 0, timer = null, left = 0, solo = true;
let turn = 0;   // cada pregunta (o repetición) es un turno nuevo: lo que llegue tarde de un turno anterior se ignora
let recorder = null, stream = null, chunks = [], recs = [], recLabel = "";

// Grabación (opcional): un micrófono para todo el simulacro y un archivo por respuesta
async function micOn(){
  try { stream = await navigator.mediaDevices.getUserMedia({audio:true}); return true; }
  catch(e){ toast("No he podido usar el micrófono. Sigue sin grabar."); return false; }
}
function recStart(label){
  if(!stream || recorder) return;
  chunks = []; recLabel = label;
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => recs.push({label: recLabel, url: URL.createObjectURL(new Blob(chunks, {type: recorder?.mimeType || "audio/webm"}))});
  recorder.start();
}
function recStop(){ if(recorder){ recorder.stop(); recorder = null; } }

function stopTimer(){ clearInterval(timer); timer = null; }
function startTimer(){
  const st = steps[i];
  stopTimer();
  left = +st.dataset.secs;
  const total = left;
  $("#left").textContent = left; $("#tbar").style.width = "100%";
  $("#state").textContent = st.dataset.who === "partner" && !solo ? "Habla tu compañero" : "Te toca hablar";
  $("#go-now").hidden = true;
  if(st.dataset.who !== "partner" || !solo) recStart($(".mquestion", st).textContent.slice(0, 60));
  timer = setInterval(() => {
    left--;
    $("#left").textContent = Math.max(left, 0); $("#tbar").style.width = `${Math.max(left, 0) / total * 100}%`;
    if(left <= 0){ stopTimer(); recStop(); $("#state").textContent = "¡Tiempo! Pasa a la siguiente."; $("#next").focus(); }
  }, 1000);
}

// Lee un texto y luego sigue. Si el dispositivo no avisa del final (pasa con algunas voces), sigue igualmente
// cuando haya pasado el tiempo que se tarda en leerlo.
function sayThen(text, voice, then){
  let done = false;
  const go = () => { if(!done){ done = true; then?.(); } };
  if(!TTS) return go();
  speak(text, {...voice, onend: go});
  setTimeout(go, 1500 + text.split(/\s+/).length * 450);
}

// En «solo», el compañero (otra voz) dice su parte: la descripción de su foto o sus frases en la parte 3
function partnerSays(text, then){
  $("#state").textContent = "Escucha a tu compañero";
  sayThen(text, PARTNER, then);
}

function show(n){
  turn++; stopTimer(); recStop(); stopSpeaking();
  i = n;
  const st = steps[i];
  for(const s of steps) s.hidden = s !== st;
  for(const li of $$(".mparts li")) li.classList.toggle("on", li.dataset.part === st.dataset.part);
  $("#next").textContent = i === steps.length - 1 ? "Terminar" : "Siguiente →";
  $("#left").textContent = st.dataset.secs; $("#tbar").style.width = "100%";
  $("#go-now").hidden = false;
  const box = $(".mpartner", st);
  if(box){ box.hidden = !solo; st.partnerLine = 0; $(".mpartner-line", box).textContent = ""; }
  ask();
  window.scrollTo({top:0});
}

// El examinador lee la pregunta; al terminar empieza el tiempo (o habla el compañero)
function ask(){
  const st = steps[i], q = $(".mquestion", st).dataset.say, t = ++turn;
  $("#state").textContent = "Escucha al examinador";
  const after = () => {
    if(t !== turn) return;
    if(st.dataset.who === "partner" && solo) partnerSays(st.dataset.partner, () => { if(t === turn) $("#state").textContent = "Tu compañero ha terminado. Pasa a la siguiente."; });
    else startTimer();
  };
  sayThen(q, EXAMINER, after);
}

function finish(){
  stopTimer(); recStop(); stopSpeaking();
  for(const s of steps) s.hidden = true;
  $("#run").hidden = true; $("#nav").hidden = true;
  markDone("q:" + $(".mock").dataset.id); practised();
  // Las grabaciones tardan un instante en cerrarse
  setTimeout(() => {
    $("#recs-box").hidden = !recs.length;
    $("#recs").replaceChildren(...recs.map(r => { const li = fill(clone("tpl-rec"), {label: r.label}); $("audio", li).src = r.url; return li; }));
  }, 300);
  $("#end").hidden = false;
  stream?.getTracks().forEach(t => t.stop()); stream = null;
}

function begin(){
  solo = $('input[name="mode"]:checked').value === "solo";
  const all = $$(".mstep");
  // Parte 1: las fijas y unas pocas al azar de la lista
  const picks = new Set(shuffle(all.filter(s => s.hasAttribute("data-pick"))).slice(0, PART1_QUESTIONS));
  steps = all.filter(s => !s.hasAttribute("data-pick") || picks.has(s));
  for(const s of all) s.hidden = true;
  recs.forEach(r => URL.revokeObjectURL(r.url)); recs = [];
  $("#setup").hidden = true; $("#end").hidden = true;
  $("#run").hidden = false; $("#nav").hidden = false;
  show(0);
}

$("#start").addEventListener("click", async () => {
  if($("#record").checked && !stream) await micOn();
  begin();
});
$("#again").addEventListener("click", () => { $("#end").hidden = true; $("#setup").hidden = false; window.scrollTo({top:0}); });
$("#next").addEventListener("click", () => i < steps.length - 1 ? show(i + 1) : finish());
$("#repeat").addEventListener("click", () => { stopTimer(); recStop(); stopSpeaking(); ask(); });
$("#go-now").addEventListener("click", () => { turn++; stopSpeaking(); startTimer(); });
// Parte 3 en «solo»: el compañero dice su siguiente frase cuando se lo pides
document.addEventListener("click", e => {
  const b = e.target.closest("[data-partner-next]"); if(!b) return;
  const st = b.closest(".mstep"), lines = JSON.parse(st.dataset.lines || "[]");
  const line = lines[(st.partnerLine || 0) % lines.length];
  st.partnerLine = (st.partnerLine || 0) + 1;
  $(".mpartner-line", st).textContent = `Tu compañero: «${line}»`;
  speak(line, PARTNER);
});
if(!("MediaRecorder" in window) || !navigator.mediaDevices) $(".mrec").hidden = true;
// Con JavaScript, las preguntas salen de una en una al empezar (sin él se ven todas, como un guion)
for(const s of $$(".mstep")) s.hidden = true;
