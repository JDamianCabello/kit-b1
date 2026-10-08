/* Tarjetas (tarjetas/mazo.html?id=...): tres modos (girar, elegir entre 4 o escribir) en las dos direcciones.
   La tarjeta, los botones y el resultado están en el HTML; las opciones y el repaso se clonan de plantillas. */
import { store, save, touchDay, markDone } from "../lib/store.js";
import { $, $$, clone, fill, params, onKeys } from "../lib/dom.js";
import { shuffle, cardMatch } from "../lib/text.js";
import { DECKS } from "../lib/content.js";
import { renderStats } from "../lib/shell.js";
import "../lib/speech.js";

// Un mazo (?id=pv) o una mezcla de varios (?mix=tp-food&mix=tp-house). Cada tarjeta recuerda su mazo:
// de ahí salen las opciones de «Elegir» y si se pregunta en una sola dirección (oneWay).
const deckId = params().get("id"), mixIds = params().getAll("mix").filter(id => DECKS[id]);
const tag = id => c => ({...c, deck:id, oneWay:!!DECKS[id].oneWay});
let d = null;
if(mixIds.length){
  const seen = new Set(), cards = [];
  for(const id of mixIds) for(const c of DECKS[id].cards.map(tag(id))){
    const k = c.en + "\u0000" + c.es;
    if(!seen.has(k)){ seen.add(k); cards.push(c); }
  }
  d = {name:`Mezcla · ${mixIds.length} ${mixIds.length === 1 ? "tema" : "temas"}`, cards, mix:true};
} else if(DECKS[deckId]) d = {...DECKS[deckId], cards: DECKS[deckId].cards.map(tag(deckId))};
if(!d){ $("#not-found").hidden = false; }
else init();

function init(){
  if(!d.mix) markDone("c:" + deckId);
  $("#title").textContent = d.name;
  document.title = `${d.name} · Tarjetas · Inglés Paso a Paso`;
  $("#dir").hidden = d.cards.every(c => c.oneWay);

  const pick = () => store.cardShort ? shuffle(d.cards).slice(0, 10) : shuffle(d.cards);
  let cards = pick(), i = 0, flipped = false, answered = null, opts = null, right = 0, seen = 0, missed = [], finished = false;
  const mode = () => store.cardMode || "flip";
  const enFirst = c => c.oneWay || store.cardDir === "en";
  const ask = c => enFirst(c) ? c.en : c.es;
  const want = c => enFirst(c) ? c.es : c.en;
  const reset = () => { flipped = false; answered = null; opts = null; };
  const HELP = {
    flip: "Gira la tarjeta y di si te la sabías. Desliza a los lados para cambiar de tarjeta. En ordenador: espacio para girar, 1 = no me la sé, 2 = me la sé.",
    choice: "Elige la traducción correcta. En ordenador puedes usar las teclas 1 a 4.",
    write: "Escribe la traducción. Las tildes no cuentan y si hay varias opciones vale cualquiera."
  };

  function render(){
    const m = mode();
    for(const b of $$("[data-dir]")) b.setAttribute("aria-pressed", b.dataset.dir === (store.cardDir === "es" ? "es" : "en"));
    for(const b of $$("[data-mode]")) b.setAttribute("aria-pressed", b.dataset.mode === m);
    for(const b of $$("[data-short]")) b.setAttribute("aria-pressed", (b.dataset.short === "1") === !!store.cardShort);
    $("#deck").hidden = finished;
    $("#finished").hidden = !finished;
    if(finished) return renderFinished();

    const c = cards[i], done = !!answered, en = enFirst(c);
    const card = $("#card");
    card.classList.toggle("stack", m === "flip");
    card.classList.toggle("static", m !== "flip");
    card.tabIndex = m === "flip" ? 0 : -1;
    card.setAttribute("role", m === "flip" ? "button" : "group");
    const front = $("#card-front");
    front.textContent = ask(c);
    front.className = `pv${en ? "" : " es-front"}${c.oneWay ? " long" : ""}`;
    const showBack = m === "flip" && flipped;
    $("#card-back").hidden = !showBack; $("#card-back").textContent = want(c);
    $("#card-ex").hidden = !(showBack && c.ex); $("#card-ex").innerHTML = showBack && c.ex ? c.ex : "";   // ejemplo de nuestros datos, con <b> y <mark>
    $("#flip-hint").hidden = m !== "flip" || flipped;
    const say = $("#card-say");
    say.hidden = !((en && !c.oneWay) || flipped || done);
    say.dataset.say = c.say || c.en;

    $("#session").hidden = m === "flip";
    $("#session").textContent = `${right} de ${seen} bien en esta sesión`;
    $("#opts").hidden = m !== "choice";
    $("#write").hidden = m !== "write";
    if(m === "choice"){
      if(!opts){
        // Opciones incorrectas del mismo mazo que la tarjeta, para que se parezcan
        const others = [...new Set(DECKS[c.deck].cards.map(x => en ? x.es : x.en))].filter(x => x !== want(c));
        opts = shuffle([want(c), ...(c.opts && en ? c.opts : shuffle(others).slice(0, 3))]);
      }
      $("#opts").replaceChildren(...opts.map((o, k) => {
        const b = fill(clone("tpl-opt"), {key: k + 1, text: o});
        b.disabled = done;
        if(done) b.classList.toggle("ok", o === want(c)), b.classList.toggle("bad", o !== want(c) && o === answered.val);
        b.addEventListener("click", () => check(o, o === want(c)));
        return b;
      }));
    }
    if(m === "write"){
      const inp = $("#answer");
      inp.placeholder = c.oneWay ? "Escribe la respuesta" : en ? "Escribe en español" : "Escribe en inglés";
      inp.value = done ? answered.val : "";
      inp.disabled = done; inp.className = done ? (answered.ok ? "ok" : "bad") : "";
      for(const b of $$("#write button")) b.disabled = done;
      if(!done && matchMedia("(hover: hover)").matches) inp.focus({preventScroll:true});
    }
    const fb = $("#fb");
    fb.hidden = !done;
    if(done){
      fb.className = "feedback " + (answered.ok ? "ok" : "bad");
      $("#verdict").textContent = answered.ok ? "¡Correcto!" : `No es correcto. Respuesta: ${want(c)}`;
      $("#fb-note").innerHTML = c.ex || "";   // ejemplo de nuestros datos
      $("#fb-note").hidden = !c.ex;
    }

    // Navegación y progreso
    $("#pos").textContent = `${i + 1} / ${cards.length}`;
    const few = cards.length <= 20;
    $("#dots").hidden = !few; $("#pbar").hidden = few;
    if(few) $("#dots").replaceChildren(...cards.map((x, k) => { const dot = document.createElement("i"); if(k < i) dot.className = "past"; if(k === i) dot.className = "cur"; return dot; }));
    else $("#pbar i").style.width = `${(i + 1) / cards.length * 100}%`;
    const rating = m === "flip" && flipped;
    $("#rate").hidden = !rating;
    $("#next").hidden = rating;
    $("#next").textContent = m === "flip" ? "Girar" : "Siguiente →";
    $("#help").textContent = HELP[m];
    if(done) $("#next").focus({preventScroll:true});
  }

  function renderFinished(){
    $("#f-score").textContent = `${right}/${seen}`;
    $("#f-msg").textContent = seen && right === seen ? "Perfecto, sin fallos." : missed.length ? "Repite las falladas hasta que salgan solas." : "Pasa a la siguiente tanda.";
    const retry = $("#f-retry");
    retry.hidden = !missed.length;
    retry.textContent = `Repetir ${missed.length} ${missed.length === 1 ? "fallada" : "falladas"}`;
    $("#f-review").replaceChildren(...missed.map(x => fill(clone("tpl-missed"), {ask: ask(x), want: want(x)})));
    $("#f-again").focus({preventScroll:true});
  }

  function restart(list){ cards = list; i = 0; right = 0; seen = 0; missed = []; finished = false; reset(); render(); }
  function check(val, ok){
    if(answered) return;
    answered = {val, ok}; seen++; if(ok) right++; else missed.push(cards[i]);
    touchDay(); save(); renderStats();
    render();
  }
  // Girar: «me la sé» / «no me la sé» cuenta para el resultado y pasa a la siguiente
  function rate(ok){ seen++; if(ok) right++; else missed.push(cards[i]); touchDay(); save(); renderStats(); move(1); }
  // Al pasar de la última tarjeta, si has respondido alguna, se muestra el resultado de la tanda
  function move(s){
    if(s > 0 && i === cards.length - 1 && seen){ finished = true; reset(); return render(); }
    i = (i + s + cards.length) % cards.length; reset(); render();
  }
  const flip = () => { if(mode() !== "flip") return; flipped = !flipped; render(); $("#card").focus({preventScroll:true}); };

  $("#card").addEventListener("click", e => { if(!e.target.closest(".spk")) flip(); });
  $("#card").addEventListener("keydown", e => { if(e.key === "Enter"){ e.preventDefault(); flip(); } });
  let x0 = null;
  $("#card").addEventListener("touchstart", e => x0 = e.touches[0].clientX, {passive:true});
  $("#card").addEventListener("touchend", e => {
    if(x0 === null || mode() !== "flip") return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if(Math.abs(dx) > 50){ e.preventDefault(); move(dx < 0 ? 1 : -1); }
  });
  $("#prev").addEventListener("click", () => move(-1));
  $("#next").addEventListener("click", () => mode() === "flip" ? flip() : move(1));
  $("#know").addEventListener("click", () => rate(true));
  $("#nope").addEventListener("click", () => rate(false));
  $("#reshuffle").addEventListener("click", () => restart(pick()));
  $("#write").addEventListener("submit", e => { e.preventDefault(); const v = $("#answer").value; if(v.trim()) check(v, cardMatch(want(cards[i]), v)); });
  $("#skip").addEventListener("click", () => check("", false));
  $("#f-again").addEventListener("click", () => restart(pick()));
  $("#f-retry").addEventListener("click", () => restart(shuffle(missed)));
  for(const b of $$("[data-dir]")) b.addEventListener("click", () => { store.cardDir = b.dataset.dir; save(); restart(cards); });
  for(const b of $$("[data-mode]")) b.addEventListener("click", () => { store.cardMode = b.dataset.mode; save(); restart(cards); });
  for(const b of $$("[data-short]")) b.addEventListener("click", () => { store.cardShort = b.dataset.short === "1"; save(); restart(pick()); });
  onKeys(e => {
    const m = mode();
    if(finished) return;
    if(m === "flip" && e.key === " "){ e.preventDefault(); flip(); }
    if(m === "flip" && flipped && (e.key === "1" || e.key === "2")) rate(e.key === "2");
    if(m === "choice" && !answered){ const k = +e.key, bs = $("#opts").children; if(k >= 1 && k <= bs.length) bs[k-1].click(); }
    if(e.key === "ArrowRight") move(1);
    if(e.key === "ArrowLeft") move(-1);
  });
  render();
}
