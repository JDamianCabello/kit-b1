/* Kit B1 · aplicación: plan, guías, práctica, tarjetas, simulacros y fallos */

/* ---------- STORAGE ---------- */
const KEY = "kitb1-v1";
const DEFAULTS = () => ({answered:0, correct:0, mistakes:{}, days:[], done:{}, exams:{}, plan:{start:null}, drafts:{}, sprintBest:0, cardDir:"en", lastTab:"plan"});
let store = DEFAULTS();
try { const s = JSON.parse(localStorage.getItem(KEY)); if(s) store = Object.assign(DEFAULTS(), s); } catch(e){}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e){} };

const ymd = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
function touchDay(){ const t = ymd(new Date()); if(!store.days.includes(t)){ store.days.push(t); store.days = store.days.slice(-400); } }
function streak(){
  const set = new Set(store.days), d = new Date(); let n = 0;
  if(!set.has(ymd(d))) d.setDate(d.getDate()-1);
  while(set.has(ymd(d))){ n++; d.setDate(d.getDate()-1); }
  return n;
}
function record(it, ok){
  store.answered++;
  if(ok){ store.correct++; delete store.mistakes[it.id]; }
  else store.mistakes[it.id] = (store.mistakes[it.id]||0) + 1;
  touchDay(); save(); renderStats(); renderNav();
}
function markDone(key){ if(!store.done[key]){ store.done[key] = true; touchDay(); save(); } }

/* ---------- HELPERS ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const strip = s => String(s).replace(/<[^>]+>/g,"").replace(/\s*\([^)]*\)/g,"").trim();
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const slug = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const fillText = (q, a) => a === "—" ? q.replace(" ___","") : q.replace("___", a);
function filled(it){
  const a = it.ans[0];
  return a === "—" ? esc(it.q).replace(" ___","") : esc(it.q).replace("___", `<mark>${esc(a)}</mark>`);
}
function norm(s){ return s.toLowerCase().replace(/[’‘`]/g,"'").replace(/[.!?]/g,"").replace(/\s+/g," ").trim(); }
function variants(s){
  s = norm(s).replace(/won't/g,"will not").replace(/can't/g,"cannot").replace(/n't/g," not")
    .replace(/'ve/g," have").replace(/'ll/g," will").replace(/'re/g," are").replace(/'m/g," am").replace(/'d/g," had");
  const t = x => x.replace(/\s+/g," ").trim();
  return s.includes("'s") ? [t(s.replace(/'s/g," is")), t(s.replace(/'s/g," has"))] : [t(s)];
}
const isRight = (it, v) => { const ok = it.ans.map(norm); return variants(v).some(x => ok.includes(x)); };
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

/* ---------- ICONS ---------- */
const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const ICON = {
  plan: svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  guias: svg('<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>'),
  practicar: svg('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>'),
  tarjetas: svg('<rect x="3" y="7" width="14" height="13" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/>'),
  fallos: svg('<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 21v-5h-5"/>'),
  spk: svg('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/>'),
  ext: svg('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
  check: svg('<path d="M5 12l5 5L20 7"/>'),
  bolt: svg('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>')
};

/* ---------- SPEECH (pronunciación con la voz del dispositivo) ---------- */
const TTS = typeof window !== "undefined" && "speechSynthesis" in window;
let VOICES = [];
function loadVoices(){
  VOICES = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang));
  VOICES.sort((a,b) => (/en-GB/i.test(b.lang)) - (/en-GB/i.test(a.lang)));
}
if(TTS){ loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function speak(text, {voice=0, pitch=1, rate=.92, queue=false, onend}={}){
  if(!TTS) return;
  if(!queue) speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  const v = VOICES.length ? VOICES[voice % VOICES.length] : null;
  if(v){ u.voice = v; u.lang = v.lang; }
  u.pitch = pitch; u.rate = rate;
  if(onend) u.onend = onend;
  speechSynthesis.speak(u);
}
const spk = (text, label="Escuchar") => TTS ? `<button class="spk" type="button" data-say="${esc(text)}" aria-label="${label}">${ICON.spk}</button>` : "";
document.addEventListener("click", e => {
  const b = e.target.closest("[data-say]");
  if(b){ e.preventDefault(); e.stopPropagation(); speak(b.dataset.say); }
}, true);

/* ---------- ITEMS ---------- */
const ITEMS = {};
const add = it => (ITEMS[it.id] = it, it);
const guideShort = id => (GUIDES.find(g => g.id === id) || {short:id}).short;
const POOL = {
  pv: PV.map((p,i)=>add({id:"pv"+i, sec:"Phrasal verbs", q:p[2], opts:p[3], ans:[p[3][0]], note:`<b>${p[0]}</b> = ${p[1]}`})),
  tn: TN.map((t,i)=>add({id:"tn"+i, sec:"Tiempos verbales", q:t[0], hint:t[1], ans:t[2], note:t[3]})),
  te: TE.map((t,i)=>add({id:"te"+i, sec:"Expresiones de tiempo", q:t[0], opts:t[1], ans:[t[1][0]], note:t[2]})),
  vo: VO.map((v,i)=>add({id:"vo"+i, sec:v[0], cat:v[0], q:v[1], opts:v[2], ans:[v[2][0]], note:v[3]})),
  pc: PC.map((t,i)=>add({id:"pc"+i, sec:"Past simple vs continuous", q:t[0], hint:t[1], ans:t[2], note:t[3]})),
  gr: GR.map((g,i)=>add({id:`gr-${g[0]}-${i}`, sec:guideShort(g[0]), cat:g[0], q:g[1], opts:g[2], ans:g[4] || [g[2][0]], note:g[3]})),
  iv: IRR.flatMap((v,i)=>[
    add({id:"ivp"+i, sec:"Verbos irregulares", q:`${v[0]} → past simple: ___`, ans:v[1].split(" / "), say:`${v[0]}, ${v[1].split(" / ")[0]}, ${v[2]}`, note:`<b>${v[0]}</b> – ${v[1]} – ${v[2]} (${v[3]})`}),
    add({id:"ivn"+i, sec:"Verbos irregulares", q:`${v[0]} → participio: ___`, ans:[v[2]], say:`${v[0]}, ${v[1].split(" / ")[0]}, ${v[2]}`, note:`<b>${v[0]}</b> – ${v[1]} – ${v[2]} (${v[3]})`})
  ]),
  tp: TOPICS.flatMap(t => t.words.map(([en, es], i) => {
    const others = shuffle(t.words.filter(w => w[0] !== en)).slice(0, 3).map(w => w[0]);
    return add({id:`tp-${t.id}-${i}`, sec:t.name, cat:t.id, q:`«${es}» en inglés: ___`, opts:[en, ...others], ans:[en], say:en, note:`<b>${en}</b> = ${es}`});
  }))
};
// Preposiciones sin opciones: hay que escribirla (como en un examen de clase)
POOL.prw = GR.map((g, i) => [g, i]).filter(([g]) => ["prepositions","prep-iot","prep-dep","prep-dep2"].includes(g[0]) && g[2][0] !== "—")
  .map(([g, i]) => add({id:`prw-${i}`, sec:"Preposiciones · escribe", cat:g[0], q:g[1], ans:g[4] || [g[2][0]], note:g[3]}));
const others3 = (list, correct) => shuffle([...new Set(list)].filter(x => x !== correct)).slice(0, 3);
POOL.pv2 = PV2.map(([en, es], i) => add({id:"pv2-"+i, sec:"Phrasal verbs 2", q:`«${es}» en inglés: ___`, opts:[en, ...others3(PV2.map(p => p[0]), en)], ans:[en], say:en, note:`<b>${en}</b> = ${es}`}));
const tenseForm = t => (T_STRUCT.find(s => s[0] === t) || ["", ""])[1];
POOL.tw = T_WHICH.map(([s, t], i) => add({id:"tw"+i, sec:"¿Qué tiempo es?", q:`${s} → ___`, opts:[t, ...others3(T_STRUCT.map(x => x[0]), t)], ans:[t], say:s, note:`<b>${t}</b>: ${tenseForm(t)}`}));
POOL.tc = T_CONJ.map(([s, a, d], i) => add({id:"tc"+i, sec:"Tiempos verbales", q:s, opts:[a, ...d], ans:[a], say:fillText(s.replace(/\s*\([^)]*\)\s*$/, ""), a), note:`Forma correcta: <mark>${a}</mark>`}));
// Ropa, joyas, colores y materiales: opciones de la misma categoría para que no sea demasiado fácil
const catNames = cs => cs.map(c => CLOTHES_CATS_ES[c]).join(" y ");
POOL.ropa = CLOTHES.map(([en, es, cs], i) => add({id:"ropa-"+i, sec:"Ropa, joyas, colores y materiales", q:`«${es}» en inglés: ___`,
  opts:[en, ...others3(CLOTHES.filter(w => w[2][0] === cs[0]).map(w => w[0]), en)], ans:[en], say:en, note:`<b>${en}</b> = ${es} · ${catNames(cs)}`}));
POOL.ropaw = CLOTHES.map(([en, es, cs], i) => add({id:"ropaw-"+i, sec:"Ropa · escribe", q:`«${es}» en inglés: ___`, ans:[en], say:en, note:`<b>${en}</b> = ${es} · ${catNames(cs)}`}));
const uniq3 = (list, ans) => [...new Set(list)].filter(x => x !== ans).slice(0, 3);
const er = a => a.endsWith("e") ? a + "r" : a + "er", est = a => a.endsWith("e") ? a + "st" : a + "est";
// Opciones incorrectas = errores típicos: biger, more tall, the most tallest, the expensivest...
const compWrong = ([adj, , comp, sup]) => uniq3([er(adj), "more " + adj, sup.replace(/^the /, ""), comp.startsWith("more") ? "the " + comp : "more " + comp], comp);
const supWrong = ([adj, , comp, sup]) => uniq3(["the " + est(adj), "the most " + adj, "the " + comp,
  sup.startsWith("the most") ? "the most " + est(adj) : "the most " + sup.replace(/^the /, "")], sup);
// Frases: las primeras tienen las opciones escritas a mano; las nuevas las calculan a partir del adjetivo
const adjOf = a => COMP_ADJ.find(x => x[0] === a);
const isSupAns = a => /est$|^most |^best$|^worst$/.test(a);
const noThe = x => x.replace(/^the /, "");
const SENT_C = [...COMP_SENT.filter(r => !isSupAns(r[1])),
  ...COMP_SENT2.map(([s, a]) => { const A = adjOf(a); return [`${s} (${a})`, A[2], compWrong(A)]; })];
const SENT_S = [...COMP_SENT.filter(r => isSupAns(r[1])),
  ...SUP_SENT2.map(([s, a]) => { const A = adjOf(a), ans = noThe(A[3]); return [`${s} (${a})`, ans, uniq3(supWrong(A).map(noThe), ans)]; })];
const sentItem = (pre, sec) => ([s, a, d], i) => add({id:pre+i, sec, q:s, opts:[a, ...d], ans:[a], say:fillText(s.replace(/\s*\([^)]*\)\s*$/, ""), a), note:`Forma correcta: <mark>${a}</mark>`});
POOL.cs = SENT_C.map(sentItem("cs", "Comparativos"));
POOL.ss = SENT_S.map(sentItem("ss", "Superlativos"));
POOL.cf = COMP_ADJ.flatMap((a, i) => [
  add({id:"cfc"+i, sec:"Comparativo", q:`${a[0]} → comparativo: ___`, opts:[a[2], ...compWrong(a)], ans:[a[2]], say:`${a[0]}, ${a[2]}`, note:`<b>${a[2]}</b> · ${a[4]}`}),
  add({id:"cfs"+i, sec:"Superlativo", q:`${a[0]} → superlativo: ___`, opts:[a[3], ...supWrong(a)], ans:[a[3]], say:`${a[0]}, ${a[3]}`, note:`<b>${a[3]}</b> · ${a[4]}`})
]);
const OPTION_POOL = [...POOL.pv, ...POOL.pv2, ...POOL.te, ...POOL.vo, ...POOL.gr, ...POOL.tp, ...POOL.tw, ...POOL.tc, ...POOL.ropa, ...POOL.cs, ...POOL.ss, ...POOL.cf];

function mixPool(){
  const wrong = Object.keys(store.mistakes).filter(id => ITEMS[id]).map(id => ITEMS[id]);
  return [...new Set([...shuffle(wrong).slice(0, 7), ...shuffle(Object.values(ITEMS)).slice(0, 20)])];
}

/* ---------- SETS (todo lo que se puede practicar) ---------- */
const SETS = {};
const defSet = (id, label, sub, run) => SETS[id] = {id, label, sub, run};
const setIdOf = raw => raw.startsWith("vo-") ? "vo-" + slug(raw.slice(3)) : raw;

defSet("quick5", "Test rápido", "5 preguntas · 1–2 minutos", h => runQuiz(h, OPTION_POOL, 5, "quick5"));
defSet("quick10", "Test de 5 minutos", "10 preguntas variadas", h => runQuiz(h, OPTION_POOL, 10, "quick10"));
defSet("sprint", "Sprint de 60 segundos", "Todas las que puedas en un minuto", h => sprint(h));
defSet("mix", "Repaso mixto", "Mezcla de todo, con prioridad a tus fallos", h => runQuiz(h, mixPool(), 15, "mix", true));
EXAMS.forEach(e => defSet(e.id, e.title, e.sub, h => runExam(h, e)));
WRITING_TASKS.forEach(w => defSet(w.id, w.title, w.sub, h => runExam(h, {id:w.id, title:w.title, sub:w.sub,
  parts:[{type:"write", title:"Tu texto", intro:"Escribe unas 100 palabras. Cuando termines, pulsa el botón para autoevaluarte y ver la respuesta modelo.", task:w.task, checks:w.checks, model:w.model}]})));
SPEAKING.forEach(s => defSet(s.id, s.title, s.sub, h => speakingPractice(h, s)));
const prepOpts = cats => POOL.gr.filter(x => cats.includes(x.cat));
defSet("prep-exam", "Examen de preposiciones", "20 preguntas con opciones · of, from, for, on, in, to, at, with, about, between", h => runQuiz(h, prepOpts(["prepositions"]), 20, "prep-exam"));
defSet("prep-iot", "In, on, at: tiempo y lugar", "15 preguntas · las que más caen", h => runQuiz(h, prepOpts(["prep-iot"]), 15, "prep-iot"));
defSet("prep-dep", "Verbo o adjetivo + preposición", "15 preguntas · afraid of, good at, depend on...", h => runQuiz(h, prepOpts(["prep-dep"]), 15, "prep-dep"));
defSet("prep-err", "Encuentra el error", "12 errores típicos para corregir", h => runQuiz(h, prepOpts(["prep-err"]), 12, "prep-err"));
defSet("prep-dep2", `Preposiciones dependientes: ${GR.filter(g => ["prep-dep2"].includes(g[0])).length} frases`, "20 preguntas con opciones · fond of, rely on, provide with...", h => runQuiz(h, prepOpts(["prep-dep2"]), 20, "prep-dep2"));
defSet("prep-dep2-w", "Preposiciones dependientes: escríbela", "20 frases sin opciones", h => runQuiz(h, POOL.prw.filter(x => ["prep-dep2"].includes(x.cat)), 20, "prep-dep2-w"));
defSet("prep-write", "Preposiciones: escríbela tú", "15 frases sin opciones, más difícil", h => runQuiz(h, POOL.prw, 15, "prep-write"));
PREP_TEXTS.forEach(e => defSet(e.id, e.title.replace("Preposiciones: t", "T"), e.sub, h => runExam(h, e)));
defSet("prep-final", "Examen final de preposiciones", "25 preguntas de todo tipo, 10 de ellas para escribir", h =>
  runQuiz(h, [...shuffle(prepOpts(["prepositions","prep-iot","prep-dep","prep-err","prep-dep2"])).slice(0, 15), ...shuffle(POOL.prw).slice(0, 10)], 25, "prep-final", true));
defSet("pv2", "Phrasal verbs 2", `${PV2.length} phrasal verbs más · significados`, h => runQuiz(h, POOL.pv2, 10, "pv2"));
defSet("tw", "¿Qué tiempo es?", "Identifica el tiempo verbal de cada frase", h => runQuiz(h, POOL.tw, 10, "tw"));
defSet("tc", "Tiempos verbales con opciones", "Elige la forma correcta del verbo", h => runQuiz(h, POOL.tc, 10, "tc"));
// Mini tests: 5 preguntas de un tema, para cuando hay poco tiempo
const MINI = [
  ["mini-all", "Todo", () => OPTION_POOL],
  ["mini-pv", "Phrasal verbs", () => [...POOL.pv, ...POOL.pv2]],
  ["mini-tn", "Tiempos verbales", () => [...POOL.tc, ...POOL.tw, ...POOL.te]],
  ["mini-prep", "Preposiciones", () => prepOpts(["prepositions","prep-iot","prep-dep","prep-err","prep-dep2"])],
  ["mini-vo", "Vocabulario", () => [...POOL.vo, ...POOL.tp, ...POOL.ropa]],
  ["mini-ropa", "Ropa y colores", () => POOL.ropa],
  ["mini-gr", "Gramática", () => POOL.gr.filter(x => !x.cat.startsWith("prep"))],
  ["mini-iv", "Irregulares", () => POOL.iv]
];
MINI.forEach(([id, label, pool]) => defSet(id, "Mini test: " + label, "5 preguntas · 1 minuto", h => runQuiz(h, pool(), 5, id)));
const miniChips = () => `<div class="minis">${MINI.map(([id, label]) => `<a class="mini" href="#practicar/${id}">${ICON.bolt}${label}</a>`).join("")}</div>`;
defSet("comp-sent", "Comparativos en frases", `${SENT_C.length} frases · 15 preguntas con los errores típicos como opciones`, h => runQuiz(h, POOL.cs, 15, "comp-sent"));
defSet("sup-sent", "Superlativos en frases", `${SENT_S.length} frases · 15 preguntas con los errores típicos como opciones`, h => runQuiz(h, POOL.ss, 15, "sup-sent"));
defSet("comp-form", "Forma el comparativo y el superlativo", `${COMP_ADJ.length} adjetivos · 15 preguntas`, h => runQuiz(h, POOL.cf, 15, "comp-form"));
defSet("ropa-cat", "Clasifica las palabras", "Como la ficha: ropa, joyas, colores y materiales · 16 palabras por ronda", h => classify(h));
defSet("ropa-opt", `Ropa, joyas, colores y materiales: ${CLOTHES.length} palabras`, "20 preguntas con opciones", h => runQuiz(h, POOL.ropa, 20, "ropa-opt"));
defSet("ropa-write", "Ropa, joyas, colores y materiales: escríbela", "20 palabras sin opciones", h => runQuiz(h, POOL.ropaw, 20, "ropa-write"));
defSet("tn", "Conjugar verbos", "Escribe la forma correcta · todos los tiempos", h => runQuiz(h, POOL.tn, 10, "tn"));
defSet("pc", "Past simple vs continuous", "Escribe la forma correcta", h => runQuiz(h, POOL.pc, POOL.pc.length, "pc"));
defSet("te", "Expresiones de tiempo", "in, on, at, for, since, ago...", h => runQuiz(h, POOL.te, 10, "te"));
defSet("iv", "Verbos irregulares", "Escribe el pasado o el participio", h => runQuiz(h, POOL.iv, 12, "iv"));
defSet("pv", "Phrasal verbs", `${PV.length} phrasal verbs del B1`, h => runQuiz(h, POOL.pv, 10, "pv"));
[...new Set(VO.map(v => v[0]))].forEach(c => defSet("vo-" + slug(c), c, "Vocabulario", h => runQuiz(h, POOL.vo.filter(x => x.cat === c), 10, "vo-" + slug(c))));
[...new Set(GR.map(g => g[0]))].forEach(c => defSet("gr-" + c, guideShort(c), "Gramática", h => runQuiz(h, POOL.gr.filter(x => x.cat === c), 10, "gr-" + c)));
TOPICS.forEach(t => defSet("tp-" + t.id, t.name, `${t.words.length} palabras`, h => runQuiz(h, POOL.tp.filter(x => x.cat === t.id), 10, "tp-" + t.id)));

/* ---------- DECKS (tarjetas) ---------- */
const DECKS = {};
DECKS.pv = {name:"Phrasal verbs", cards: PV.map(p => ({en:p[0], es:p[1], ex:esc(p[2]).replace("___", `<mark>${esc(p[3][0])}</mark>`), say:p[0]}))};
DECKS.iv = {name:"Verbos irregulares", cards: IRR.map(v => ({en:v[0], es:v[3], ex:`${esc(v[0])} – <b>${esc(v[1])}</b> – <b>${esc(v[2])}</b>`, say:`${v[0]}, ${v[1].split(" / ")[0]}, ${v[2]}`}))};
TOPICS.forEach(t => DECKS["tp-" + t.id] = {name:t.name, cards: t.words.map(([en, es]) => ({en, es, say:en}))});
DECKS["prep-10"] = {name:"Las 10 preposiciones", cards: PREPS.map(p => ({en:p[0], es:p[1], ex:p[3].map(esc).join(" · "), say:`${p[0]}. ${p[3].join(". ")}`}))};
PREP_CARDS.forEach(t => DECKS["pc-" + t.id] = {name:t.name, cards: t.words.map(([en, es]) => ({en, es, say:en}))});
DECKS.ropa = {name:"Ropa, joyas, colores y materiales", cards: CLOTHES.map(([en, es]) => ({en, es, say:en}))};
// Comparativos y superlativos: las opciones incorrectas son los errores típicos (biger, more tall, gooder...)
DECKS["comp-form"] = {name:"Forma el comparativo", oneWay:true, cards: COMP_ADJ.map(a => ({en:a[0], es:a[2], opts:compWrong(a), say:`${a[0]}, ${a[2]}, ${a[3]}`, ex:`${esc(a[1])} · ${esc(a[4])} · superlativo: <b>${esc(a[3])}</b>`}))};
DECKS["sup-form"] = {name:"Forma el superlativo", oneWay:true, cards: COMP_ADJ.map(a => ({en:a[0], es:a[3], opts:supWrong(a), say:`${a[0]}, ${a[2]}, ${a[3]}`, ex:`${esc(a[1])} · ${esc(a[4])} · comparativo: <b>${esc(a[2])}</b>`}))};
const sentCard = ([s, a, d]) => ({en:s, es:a, opts:d, say:fillText(s.replace(/\s*\([^)]*\)\s*$/, ""), a)});
DECKS["comp-sent"] = {name:"Comparativos en frases", oneWay:true, cards: SENT_C.map(sentCard)};
DECKS["sup-sent"] = {name:"Superlativos en frases", oneWay:true, cards: SENT_S.map(sentCard)};
// Mazos de una sola dirección: la cara es la pregunta y el reverso la respuesta
DECKS.pv2 = {name:"Phrasal verbs 2", cards: PV2.map(([en, es]) => ({en, es, say:en}))};
DECKS["pv-fill"] = {name:"Phrasal verbs: completa la frase", oneWay:true, cards: PV.map(p => ({en:p[2], es:p[3][0], opts:p[3].slice(1), say:fillText(p[2], p[3][0]), ex:`<b>${esc(p[0])}</b> = ${esc(p[1])}`}))};
DECKS["t-struct"] = {name:"Tiempos: cómo se forman", cards: T_STRUCT.map(([en, es]) => ({en, es, say:en}))};
DECKS["t-which"] = {name:"Tiempos: ¿qué tiempo es?", oneWay:true, cards: T_WHICH.map(([s, t]) => ({en:s, es:t, say:s, ex:esc(tenseForm(t))}))};
DECKS["t-signal"] = {name:"Tiempos: palabras señal", oneWay:true, cards: T_SIGNAL.map(([s, t]) => ({en:s, es:t, say:strip(s), ex:esc(tenseForm(t))}))};
DECKS["t-conj"] = {name:"Tiempos: conjuga el verbo", oneWay:true, cards: T_CONJ.map(([s, a, d]) => ({en:s, es:a, opts:d, say:fillText(s.replace(/\s*\([^)]*\)\s*$/, ""), a)}))};

/* ---------- QUIZ ENGINE ---------- */
let keyHandler = null, cleanup = null;
document.addEventListener("keydown", e => { if(keyHandler && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) keyHandler(e); });

function runQuiz(host, pool, n=10, setId=null, keepOrder=false){
  let q = (keepOrder ? pool : shuffle(pool)).slice(0, n), i = 0, score = 0, done = false, wrongs = [];
  if(keepOrder) q = shuffle(q);
  const again = () => runQuiz(host, setId === "mix" ? mixPool() : pool, n, setId, keepOrder);

  function render(){
    const it = q[i]; done = false;
    const opts = it.opts ? shuffle(it.opts) : null;
    const blank = `<span class="blank" id="blank">&nbsp;</span>` + (it.hint ? ` <span class="hint">(${esc(it.hint)})</span>` : "");
    host.innerHTML = `<div class="quiz">
      <div class="qmeta"><span>Pregunta ${i+1} de ${q.length}</span><span>${score} ${score===1?"acierto":"aciertos"}</span></div>
      <div class="bar"><i style="width:${i/q.length*100}%"></i></div>
      <p class="tag">${esc(it.sec)}</p>
      <p class="sentence">${esc(it.q).replace("___", blank)}</p>
      ${opts ? `<div class="opts">${opts.map((o,k)=>`<button class="opt" data-v="${esc(o)}"><kbd>${k+1}</kbd>${o === "—" ? "(nada)" : esc(o)}</button>`).join("")}</div>`
             : `<form class="typed" id="typed"><input id="answer-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Escribe la forma correcta" aria-label="Tu respuesta"><button class="btn primary">Comprobar</button><button type="button" class="btn ghost" id="reveal">No lo sé</button></form>`}
      <div class="feedback" id="fb" hidden></div>
    </div>`;
    if(opts){
      host.querySelectorAll(".opt").forEach(b => b.onclick = () => answer(b.dataset.v, b));
      keyHandler = e => { const k = +e.key; if(!done && k>=1 && k<=opts.length) host.querySelectorAll(".opt")[k-1].click(); };
    } else {
      keyHandler = null;
      const inp = $("#answer-input");
      if(matchMedia("(hover: hover)").matches) inp.focus({preventScroll:true});
      $("#typed").onsubmit = e => { e.preventDefault(); if(!done && inp.value.trim()) answer(inp.value); };
      $("#reveal").onclick = () => { if(!done) answer(""); };
    }
  }

  function answer(v, btn){
    const it = q[i]; done = true;
    const ok = v !== "" && isRight(it, v);
    if(ok) score++; else wrongs.push(it);
    record(it, ok);
    const b = $("#blank"); b.textContent = it.ans[0] === "—" ? "(nada)" : it.ans[0]; b.classList.add("filled");
    if(it.opts){
      host.querySelectorAll(".opt").forEach(o => { o.disabled = true; if(o.dataset.v === it.ans[0]) o.classList.add("ok"); });
      if(!ok && btn) btn.classList.add("bad");
    } else {
      const inp = $("#answer-input"); inp.disabled = true; inp.classList.add(ok ? "ok" : "bad");
      host.querySelectorAll("#typed button").forEach(x => x.disabled = true);
    }
    const fb = $("#fb");
    fb.className = "feedback " + (ok ? "ok" : "bad");
    const others = it.ans.length > 1 ? ` <span class="n">(también vale: ${it.ans.slice(1).map(esc).join(", ")})</span>` : "";
    const say = it.say || fillText(it.q, it.ans[0]);
    fb.innerHTML = `<p class="verdict">${ok ? "¡Correcto!" : (v ? "No es correcto." : "Esta era la respuesta:")} ${ok ? "" : `Respuesta: <b>${esc(it.ans[0] === "—" ? "(nada)" : it.ans[0])}</b>${others}`}</p>
      <p class="note">${it.note}</p>
      <div class="row">${TTS ? `<button class="btn ghost small" type="button" data-say="${esc(say)}">${ICON.spk} Escuchar</button>` : ""}
      <button class="btn primary" id="next">${i+1 < q.length ? "Siguiente →" : "Ver resultado"}</button></div>`;
    fb.hidden = false;
    $("#next").onclick = () => { i++; i < q.length ? render() : end(); window.scrollTo({top:0}); };
    $("#next").focus({preventScroll:true});
    fb.scrollIntoView({block:"nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
  }

  function end(){
    keyHandler = null;
    if(setId) markDone("q:" + setId);
    const p = score / q.length;
    const msg = p === 1 ? "Perfecto. Ronda sin fallos." : p >= .7 ? "Muy bien. Repasa los fallos de abajo." : p >= .4 ? "Vas bien. Repite los fallos hasta que salgan solos." : "Estos cuestan. Repítelos: así es como se fijan.";
    host.innerHTML = `<div class="end">
      <p class="tag">Resultado</p>
      <p class="big">${score}/${q.length}</p>
      <p style="margin:0">${msg}</p>
      <div class="row">
        <button class="btn primary" id="again">Otra ronda</button>
        ${wrongs.length ? `<button class="btn" id="retry">Repetir ${wrongs.length} ${wrongs.length===1?"fallo":"fallos"}</button>` : ""}
      </div>
      ${wrongs.length ? `<ul class="review">${wrongs.map(w=>`<li><div class="q">${filled(w)}</div><div class="n">${w.note}</div></li>`).join("")}</ul>` : ""}
    </div>`;
    $("#again").onclick = again;
    if(wrongs.length) $("#retry").onclick = () => runQuiz(host, wrongs, wrongs.length);
  }
  render();
}

/* ---------- SPRINT 60 s ---------- */
function sprint(host){
  let left = 60, score = 0, total = 0, timer = null, it = null, locked = false;
  const pool = shuffle(OPTION_POOL);
  host.innerHTML = `<div class="quiz">
    <div class="sprint-top"><span class="clock" id="clock">60</span><span>${ICON.bolt} <b id="sc">0</b> aciertos</span></div>
    <div class="bar"><i id="tbar" style="width:100%"></i></div>
    <p class="tag" id="sec"></p><p class="sentence" id="sen"></p><div class="opts" id="opts"></div></div>`;
  function next(){
    it = pool[total % pool.length]; locked = false;
    $("#sec").textContent = it.sec;
    $("#sen").innerHTML = esc(it.q).replace("___", `<span class="blank">&nbsp;</span>`);
    $("#opts").innerHTML = shuffle(it.opts).map((o,k)=>`<button class="opt" data-v="${esc(o)}"><kbd>${k+1}</kbd>${o === "—" ? "(nada)" : esc(o)}</button>`).join("");
    $("#opts").querySelectorAll(".opt").forEach(b => b.onclick = () => pick(b));
  }
  function pick(b){
    if(locked) return; locked = true; total++;
    const ok = b.dataset.v === it.ans[0];
    if(ok){ score++; $("#sc").textContent = score; }
    record(it, ok);
    b.classList.add(ok ? "ok" : "bad");
    if(!ok) $("#opts").querySelector(`[data-v="${CSS.escape(it.ans[0])}"]`)?.classList.add("ok");
    setTimeout(() => left > 0 && next(), ok ? 300 : 900);
  }
  keyHandler = e => { const k = +e.key; const bs = $("#opts")?.querySelectorAll(".opt"); if(bs && k>=1 && k<=bs.length) bs[k-1].click(); };
  timer = setInterval(() => {
    left--; const c = $("#clock"); if(!c) return clearInterval(timer);
    c.textContent = left; $("#tbar").style.width = (left/60*100) + "%";
    if(left <= 0){ clearInterval(timer); finish(); }
  }, 1000);
  cleanup = () => clearInterval(timer);
  function finish(){
    keyHandler = null; markDone("q:sprint");
    const best = score > store.sprintBest; if(best){ store.sprintBest = score; save(); }
    host.innerHTML = `<div class="end"><p class="tag">Tiempo</p><p class="big">${score}</p>
      <p style="margin:0">${score} aciertos de ${total} respondidas. ${best ? "¡Nuevo récord!" : `Tu récord: ${store.sprintBest}.`}</p>
      <div class="row"><button class="btn primary" id="again">Otra vez</button></div></div>`;
    $("#again").onclick = () => sprint(host);
  }
  next();
}

/* ---------- FLASHCARDS ---------- */
function flashcards(host, deckId){
  const d = DECKS[deckId]; if(!d) return notFound(host);
  markDone("c:" + deckId);
  // Tres modos: girar la tarjeta, elegir entre 4 opciones o escribir la respuesta
  const pick = () => store.cardShort ? shuffle(d.cards).slice(0, 10) : shuffle(d.cards);
  let cards = pick(), i = 0, flipped = false, answered = null, opts = null, right = 0, seen = 0, missed = [], finished = false;
  const mode = () => store.cardMode || "flip";
  const enFirst = () => d.oneWay || store.cardDir === "en";
  const ask = c => enFirst() ? c.en : c.es;
  const want = c => enFirst() ? c.es : c.en;
  const reset = () => { flipped = false; answered = null; opts = null; };

  function render(){
    const c = cards[i], m = mode(), en = enFirst();
    const front = `<p class="pv ${en ? "" : "es-front"} ${d.oneWay ? "long" : ""}">${esc(ask(c))}</p>`;
    const extra = `${c.ex ? `<p class="ex">${c.ex}</p>` : ""}`;
    const head = `<div class="fchead"><h2 class="h2">${esc(d.name)}</h2>
        ${d.oneWay ? "" : `<div class="seg" role="group" aria-label="Dirección"><button aria-pressed="${en}" data-dir="en">Inglés → español</button><button aria-pressed="${!en}" data-dir="es">Español → inglés</button></div>`}</div>
      <div class="fcopts">
        <div class="seg modes3" role="group" aria-label="Modo">${[["flip","Girar"],["choice","Elegir"],["write","Escribir"]].map(([k,l]) => `<button data-mode="${k}" aria-pressed="${m === k}">${l}</button>`).join("")}</div>
        <div class="seg" role="group" aria-label="Cantidad"><button data-short="0" aria-pressed="${!store.cardShort}">Todas</button><button data-short="1" aria-pressed="${!!store.cardShort}">Tanda de 10</button></div>
      </div>`;
    if(finished){
      host.innerHTML = `<div class="fc">${head}<div class="end">
        <p class="tag">Tanda terminada</p><p class="big">${right}/${seen}</p>
        <p style="margin:0">${seen && right === seen ? "Perfecto, sin fallos." : missed.length ? "Repite las falladas hasta que salgan solas." : "Pasa a la siguiente tanda."}</p>
        <div class="row"><button class="btn primary" id="again">Otra tanda</button>${missed.length ? `<button class="btn" id="retry">Repetir ${missed.length} ${missed.length === 1 ? "fallada" : "falladas"}</button>` : ""}</div>
        ${missed.length ? `<ul class="review">${missed.map(x => `<li><div class="q">${esc(ask(x))} → <mark>${esc(want(x))}</mark></div></li>`).join("")}</ul>` : ""}
      </div></div>`;
      bindHead();
      $("#again").onclick = () => restart(pick());
      if(missed.length) $("#retry").onclick = () => restart(shuffle(missed));
      return;
    }
    let body;
    if(m === "flip"){
      body = `<div class="card" id="card" role="button" tabindex="0" aria-live="polite">
        ${front}
        ${flipped ? `<p class="es">${esc(want(c))}</p>${extra}` : `<small>Piensa la respuesta y toca para girar</small>`}
        ${((en && !d.oneWay) || flipped) ? spk(c.say || c.en) : ""}
      </div>`;
    } else {
      if(!opts){
        const others = [...new Set(d.cards.map(want))].filter(x => x !== want(c));
        opts = shuffle([want(c), ...(c.opts && en ? c.opts : shuffle(others).slice(0, 3))]);
      }
      const done = !!answered;
      const reveal = done ? `<div class="feedback ${answered.ok ? "ok" : "bad"}"><p class="verdict">${answered.ok ? "¡Correcto!" : `No es correcto. Respuesta: <b>${esc(want(c))}</b>`}</p>${extra ? `<div class="note">${c.ex}</div>` : ""}</div>` : "";
      body = `<p class="count score">${right} de ${seen} bien en esta sesión</p>
        <div class="card static" aria-live="polite">${front}${((en && !d.oneWay) || done) ? spk(c.say || c.en) : ""}</div>
        ${m === "choice"
          ? `<div class="opts">${opts.map((o,k) => {
              const cls = done ? (o === want(c) ? "ok" : o === answered.val ? "bad" : "") : "";
              return `<button class="opt ${cls}" data-k="${k}" ${done ? "disabled" : ""}><kbd>${k+1}</kbd>${esc(o)}</button>`; }).join("")}</div>`
          : `<form class="typed" id="cwrite"><input id="card-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done"
              placeholder="${d.oneWay ? "Escribe la respuesta" : en ? "Escribe en español" : "Escribe en inglés"}" aria-label="Tu respuesta" value="${done ? esc(answered.val) : ""}" ${done ? `disabled class="${answered.ok ? "ok" : "bad"}"` : ""}>
              <button class="btn primary" ${done ? "disabled" : ""}>Comprobar</button><button type="button" class="btn ghost" id="cskip" ${done ? "disabled" : ""}>No lo sé</button></form>`}
        ${reveal}`;
    }
    host.innerHTML = `<div class="fc">${head}${body}
      <div class="fcnav">
        <button class="btn" id="prev" aria-label="Anterior">←</button>
        <span class="count">${i+1} / ${cards.length}</span>
        <button class="btn primary" id="nxt">Siguiente →</button>
      </div>
      <p class="intro">${m === "flip" ? "Desliza a los lados para cambiar de tarjeta. En ordenador: espacio para girar y flechas para moverte." : m === "choice" ? "Elige la traducción correcta. En ordenador puedes usar las teclas 1 a 4." : "Escribe la traducción. Las tildes no cuentan y si hay varias opciones vale cualquiera."}
        <button class="linkbtn" id="shuf">Barajar de nuevo</button></p></div>`;

    bindHead();
    $("#prev").onclick = () => move(-1);
    $("#nxt").onclick = () => move(1);
    $("#shuf").onclick = () => restart(pick());

    if(m === "flip"){
      const card = $("#card");
      card.onclick = () => { flipped = !flipped; render(); $("#card").focus({preventScroll:true}); };
      card.onkeydown = e => { if(e.key === "Enter"){ e.preventDefault(); card.click(); } };
      let x0 = null;
      card.addEventListener("touchstart", e => x0 = e.touches[0].clientX, {passive:true});
      card.addEventListener("touchend", e => { if(x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if(Math.abs(dx) > 50){ e.preventDefault(); move(dx < 0 ? 1 : -1); } });
    } else if(!answered){
      if(m === "choice") host.querySelectorAll(".opt").forEach(b => b.onclick = () => check(opts[+b.dataset.k], opts[+b.dataset.k] === want(c)));
      else {
        const inp = $("#card-input");
        if(matchMedia("(hover: hover)").matches) inp.focus({preventScroll:true});
        $("#cwrite").onsubmit = e => { e.preventDefault(); if(inp.value.trim()) check(inp.value, cardMatch(want(c), inp.value)); };
        $("#cskip").onclick = () => check("", false);
      }
    } else $("#nxt").focus({preventScroll:true});
  }
  function bindHead(){
    host.querySelectorAll("[data-dir]").forEach(b => b.onclick = () => { store.cardDir = b.dataset.dir; save(); restart(cards); });
    host.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => { store.cardMode = b.dataset.mode; save(); restart(cards); });
    host.querySelectorAll("[data-short]").forEach(b => b.onclick = () => { store.cardShort = b.dataset.short === "1"; save(); restart(pick()); });
  }
  function restart(list){ cards = list; i = 0; right = 0; seen = 0; missed = []; finished = false; reset(); render(); }
  function check(val, ok){
    answered = {val, ok}; seen++; if(ok) right++; else missed.push(cards[i]);
    touchDay(); save(); renderStats();
    render();
  }
  // En Elegir y Escribir, al pasar de la última tarjeta se muestra el resultado de la tanda
  const move = s => {
    if(s > 0 && i === cards.length - 1 && mode() !== "flip" && seen){ finished = true; reset(); return render(); }
    i = (i + s + cards.length) % cards.length; reset(); render();
  };
  keyHandler = e => {
    const m = mode();
    if(m === "flip" && e.key === " "){ e.preventDefault(); $("#card")?.click(); }
    if(m === "choice" && !answered){ const k = +e.key, bs = host.querySelectorAll(".opt"); if(k >= 1 && k <= bs.length) bs[k-1].click(); }
    if(e.key === "ArrowRight") move(1);
    if(e.key === "ArrowLeft") move(-1);
  };
  render();
}
// Compara una respuesta escrita con la de la tarjeta: sin tildes, sin paréntesis y aceptando cualquiera de las opciones
function cardMatch(target, val){
  // «the» al principio es opcional (the tallest = tallest)
  const clean = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\([^)]*\)/g, "")
    .replace(/[’‘`]/g, "'").replace(/[.!?¡¿]/g, "").replace(/\s+/g, " ").trim().replace(/^the /, "");
  const alts = [target, ...target.split(/,|\/|·|–/)].map(clean).filter(Boolean);
  return alts.includes(clean(val));
}

/* ---------- GUIDES ---------- */
function practiceHref(p){
  const [k, a] = p;
  if(k === "gu") return "#guias/" + a;
  if(k === "gr") return "#practicar/gr-" + a;
  if(k === "tn") return "#practicar/" + (a === "time" ? "te" : "tn");
  return "#practicar/" + k;
}
function guideIndex(host){
  host.innerHTML = `<div class="menu">
    <p class="intro">Explicaciones visuales en español, de cero a B1. Cada guía termina con un ejercicio.</p>
    ${GUIDE_SECTIONS.map(s => `<section><h2 class="h2">${s.title}</h2><div class="tiles">
      ${s.ids.map(id => { const g = GUIDES.find(x => x.id === id); return g ? `<a class="tile" href="#guias/${id}"><span>${g.short}</span>${store.done["g:"+id] ? `<i class="seen" title="Vista">${ICON.check}</i>` : ""}</a>` : ""; }).join("")}
    </div></section>`).join("")}
    ${resourcesHTML()}
  </div>`;
}
function resourcesHTML(){
  const cats = [...new Set(RESOURCES.map(r => r.cat))];
  return `<section id="recursos"><h2 class="h2">Recursos gratis de otras webs</h2>
    <p class="intro">Enlaces a materiales gratuitos de sus autores. Se abren en su web original.</p>
    ${cats.map(c => `<h3 class="h3">${c}</h3><div class="res">${RESOURCES.filter(r => r.cat === c).map(r => `
      <a class="resrow" href="${r.url}" target="_blank" rel="noopener">
        <span><b>${esc(r.name)}</b><small class="by">${esc(r.by)}</small><small>${esc(r.what)}</small></span>${ICON.ext}</a>`).join("")}</div>`).join("")}
  </section>`;
}
function guide(host, id){
  const g = GUIDES.find(x => x.id === id);
  if(!g) return notFound(host);
  markDone("g:" + id);
  const tones = ["a","b","c"];
  const li = (x, ex) => ex && TTS ? `<li class="say" data-say="${esc(strip(x))}">${x} ${ICON.spk}</li>` : `<li>${x}</li>`;
  const cell = ex => (c, k) => `<div class="gcell ${tones[k]}"><p class="cname">${g.cols[k]}</p>${Array.isArray(c) ? `<ul>${c.map(x => li(x, ex)).join("")}</ul>` : c}</div>`;
  let extra = g.extra;
  if(extra === "IRREGULARS") extra = `<section class="gsec"><input class="filter" id="irr-filter" type="search" placeholder="Busca un verbo (en inglés o español)" aria-label="Buscar verbo"><div id="irr-table"></div></section>`;
  host.innerHTML = `<article class="guide">
    <div class="ghead"><div><h2>${g.title}</h2><p>${g.sub}</p></div><div class="sticky">${g.sticky}</div></div>
    ${g.rows.map(r => `<section class="gsec"><h3>${r[0]}</h3><div class="gcols">${r[1].map(cell(r[0] === "Ejemplos")).join("")}</div></section>`).join("")}
    ${extra}
    ${g.practice ? `<div class="practice"><a class="btn primary" href="${practiceHref(g.practice)}">${g.practice[2]} →</a><span>Pon en práctica lo que acabas de repasar.</span></div>` : ""}
    ${TTS ? `<p class="xmp">Toca los ejemplos marcados con ${ICON.spk} para oírlos.</p>` : ""}
  </article>`;
  if(g.extra === "IRREGULARS"){
    const draw = f => { f = f.trim().toLowerCase();
      const rows = IRR.filter(v => !f || v.some(x => x.toLowerCase().includes(f)));
      $("#irr-table").innerHTML = rows.length ? table(["", "Infinitivo","Past simple","Participio","Significado"], rows.map(v=>[spk(`${v[0]}, ${v[1].split(" / ")[0]}, ${v[2]}`), v[0],`<b>${v[1]}</b>`,`<b>${v[2]}</b>`,v[3]])) : `<p class="empty">No está en la lista.</p>`; };
    draw(""); $("#irr-filter").oninput = e => draw(e.target.value);
  }
}

/* ---------- PRACTICE & CARDS MENUS ---------- */
const doneMark = key => store.done[key] ? `<i class="seen" title="Hecho">${ICON.check}</i>` : "";
const setRow = id => { const s = SETS[id]; return s ? `<a class="resrow" href="#practicar/${id}"><span><b>${esc(s.label)}</b><small>${esc(s.sub)}${store.exams[id] ? ` · mejor nota ${store.exams[id].best}%` : ""}</small></span>${doneMark("q:"+id) || doneMark("x:"+id)}</a>` : ""; };
// Temas de vocabulario agrupados; los que no estén en ningún grupo van al final
function topicGroups(rowFn){
  const grouped = new Set(TOPIC_GROUPS.flatMap(g => g.ids));
  const rest = TOPICS.filter(t => !grouped.has(t.id)).map(t => t.id);
  const groups = rest.length ? [...TOPIC_GROUPS, {title:"Otros", ids:rest}] : TOPIC_GROUPS;
  return groups.map(g => `<h3 class="h3">${g.title}</h3><div class="res">${g.ids.filter(id => TOPICS.some(t => t.id === id)).map(rowFn).join("")}</div>`).join("");
}
function practiceMenu(host){
  const grIds = GUIDE_SECTIONS.flatMap(s => s.ids).filter(id => SETS["gr-"+id]).map(id => "gr-"+id);
  host.innerHTML = `<div class="menu">
    <section><h2 class="h2">Tengo poco tiempo</h2><div class="quick">
      <a class="qbtn" href="#practicar/quick5"><b>2 min</b><span>Test rápido</span></a>
      <a class="qbtn" href="#practicar/sprint"><b>60 s</b><span>Sprint${store.sprintBest ? ` · récord ${store.sprintBest}` : ""}</span></a>
      <a class="qbtn" href="#practicar/quick10"><b>5 min</b><span>10 preguntas</span></a>
    </div>
    <h3 class="h3">Mini tests de 5 preguntas</h3>${miniChips()}</section>
    <section><h2 class="h2">Comparativos y superlativos</h2><div class="res">${["comp-sent","sup-sent","comp-form","gr-comparatives"].map(setRow).join("")}</div>
      <p class="xmp">Repasa antes la <a href="#guias/comparatives">guía</a> y las <a href="#tarjetas/comp-form">tarjetas</a>.</p></section>
    <section><h2 class="h2">Ropa, joyas, colores y materiales</h2><div class="res">${["ropa-cat","ropa-opt","ropa-write"].map(setRow).join("")}</div>
      <p class="xmp">Repasa antes la <a href="#guias/clothes">guía con todas las palabras</a> y las <a href="#tarjetas/ropa">tarjetas</a>.</p></section>
    <section><h2 class="h2">Preposiciones</h2><div class="res">${["prep-dep2","prep-dep2-w","prep-exam","prep-iot","prep-dep","prep-err","prep-write","prep-text1","prep-text2","prep-final"].map(setRow).join("")}</div>
      <p class="xmp">Orden recomendado: guía → tests por tipo → textos con huecos → examen final. Repasa antes la <a href="#guias/prepositions">guía de preposiciones</a> y las <a href="#tarjetas/pc-prep-dep">tarjetas de preposiciones</a>.</p></section>
    <section><h2 class="h2">Simulacros de examen</h2><div class="res">${EXAMS.map(e => setRow(e.id)).join("")}</div>
      <p class="xmp">Mini simulacros con contenido original en el formato del examen. Para el examen completo, usa los modelos oficiales gratuitos de <a href="https://www.cambridgeenglish.org/exams-and-tests/preliminary/preparation/" target="_blank" rel="noopener">Cambridge English</a>.</p></section>
    <section><h2 class="h2">Speaking</h2><div class="res">${SPEAKING.map(s => setRow(s.id)).join("")}</div>
      <p class="xmp">El móvil lee la pregunta y un cronómetro marca tu tiempo. Contesta en voz alta; si puedes, grábate con la app de notas de voz y escúchate.</p></section>
    <section><h2 class="h2">Writing</h2><div class="res">${WRITING_TASKS.map(w => setRow(w.id)).join("")}</div></section>
    <section><h2 class="h2">Repaso</h2><div class="res">${setRow("mix")}</div></section>
    <section><h2 class="h2">Gramática</h2><div class="res">${grIds.map(setRow).join("")}</div></section>
    <section><h2 class="h2">Tiempos verbales</h2><div class="res">${["tc","tw","tn","pc","te","iv"].map(setRow).join("")}</div></section>
    <section><h2 class="h2">Phrasal verbs</h2><div class="res">${["pv","pv2"].map(setRow).join("")}</div></section>
    <section><h2 class="h2">Vocabulario</h2><div class="res">${Object.keys(SETS).filter(k => k.startsWith("vo-")).map(setRow).join("")}</div></section>
    <section><h2 class="h2">Vocabulario por temas</h2>${topicGroups(id => setRow("tp-"+id))}</section>
  </div>`;
}
function cardsMenu(host){
  const row = id => `<a class="resrow" href="#tarjetas/${id}"><span><b>${esc(DECKS[id].name)}</b><small>${DECKS[id].cards.length} tarjetas</small></span>${doneMark("c:"+id)}</a>`;
  host.innerHTML = `<div class="menu">
    <p class="intro">Tarjetas para memorizar, en tres modos: <b>Girar</b> (piensa y comprueba), <b>Elegir</b> entre 4 opciones o <b>Escribir</b> la respuesta. Con ${ICON.spk} oyes la pronunciación.</p>
    <section><h2 class="h2">Comparativos y superlativos</h2><div class="res">${row("comp-form")}${row("sup-form")}${row("comp-sent")}${row("sup-sent")}</div></section>
    <section><h2 class="h2">Ropa, joyas, colores y materiales</h2><div class="res">${row("ropa")}</div></section>
    <section><h2 class="h2">Phrasal verbs</h2><div class="res">${row("pv")}${row("pv2")}${row("pv-fill")}</div></section>
    <section><h2 class="h2">Tiempos verbales</h2><div class="res">${row("t-conj")}${row("t-which")}${row("t-signal")}${row("t-struct")}${row("iv")}</div></section>
    <section><h2 class="h2">Preposiciones</h2><div class="res">${row("prep-10")}${row("pc-prep-dep")}${row("pc-prep-iot")}</div></section>
    <section><h2 class="h2">Vocabulario por temas</h2><p class="intro">${TOPICS.length} temas y ${TOPICS.reduce((n, t) => n + t.words.length, 0)} palabras.</p>${topicGroups(id => row("tp-"+id))}</section>
  </div>`;
}

/* ---------- EXAMS ---------- */
function runExam(host, ex){
  const ans = {}, t0 = Date.now(), plays = {};
  const letters = "ABCDEFGH";
  const gapify = html => html.replace(/\((\d)\)/g, '<span class="gap">$1</span>');
  const choiceRow = (key, opts, labels) => `<div class="xopts ${labels ? "compact" : ""}" data-key="${key}">${opts.map((o,k)=>`<button type="button" class="xopt" data-v="${k}"><kbd>${labels ? labels[k] : letters[k]}</kbd>${labels ? "" : esc(o)}</button>`).join("")}</div>`;
  const why = w => `<p class="why" hidden>${w}</p>`;
  let html = "";
  ex.parts.forEach((p, pi) => {
    html += `<section class="xpart"><h3 class="h3">${p.title}</h3><p class="intro">${p.intro}</p>`;
    if(p.type === "choice") p.items.forEach((it, ii) => html += `<div class="xq" data-q="${pi}-${ii}"><p class="qn">${ii+1}</p>${it.text}${choiceRow(`${pi}-${ii}`, it.opts)}${why(it.why)}</div>`);
    if(p.type === "text-choice"){
      html += `<div class="xtext">${p.text}</div>`;
      p.items.forEach((it, ii) => html += `<div class="xq" data-q="${pi}-${ii}"><p class="qn">${ii+1}</p><p class="qq">${it.q}</p>${choiceRow(`${pi}-${ii}`, it.opts)}${why(it.why)}</div>`);
    }
    if(p.type === "gapped"){
      html += `<div class="xtext">${gapify(p.text)}</div><ol class="sents">${p.sentences.map((s,k)=>`<li><b>${letters[k]}</b> ${s}</li>`).join("")}</ol>`;
      p.answers.forEach((a, ii) => html += `<div class="xq inline" data-q="${pi}-${ii}"><p class="qq">Hueco ${ii+1}</p>${choiceRow(`${pi}-${ii}`, p.sentences, letters.split(""))}${why(p.why[ii])}</div>`);
    }
    if(p.type === "cloze"){
      html += `<div class="xtext">${gapify(p.text)}</div>`;
      p.items.forEach((it, ii) => html += `<div class="xq" data-q="${pi}-${ii}"><p class="qn">${ii+1}</p>${choiceRow(`${pi}-${ii}`, it.opts)}${why(it.why)}</div>`);
    }
    // Reading Part 2: emparejar personas con textos
    if(p.type === "match"){
      html += `<div class="mtexts">${p.texts.map((t,k)=>`<div class="xtext mtext"><span class="mletter">${letters[k]}</span><p>${t}</p></div>`).join("")}</div>`;
      p.answers.forEach((a, ii) => html += `<div class="xq" data-q="${pi}-${ii}"><p class="qn">${ii+1}</p><p>${p.people[ii]}</p>${choiceRow(`${pi}-${ii}`, p.texts, letters.slice(0, p.texts.length).split(""))}${why(p.why[ii])}</div>`);
    }
    // Listening Part 3: completar notas mientras escuchas
    if(p.type === "notes"){
      if(!TTS) html += `<p class="warn">Este navegador no puede leer textos en voz alta. Abajo tienes la transcripción para leerla.</p>`;
      else html += `<button type="button" class="btn small play" data-play="${pi}-all">${ICON.spk} Escuchar <span>(2)</span></button>`;
      html += `<div class="xtext notes">${gapify(p.text)}</div>`;
    }
    if(p.type === "open" || p.type === "notes"){
      if(p.type === "open") html += `<div class="xtext">${gapify(p.text)}</div>`;
      p.answers.forEach((a, ii) => html += `<div class="xq inline" data-q="${pi}-${ii}"><label class="qq" for="open-${ex.id}-${pi}-${ii}">Hueco ${ii+1}</label><input class="xin" id="open-${ex.id}-${pi}-${ii}" data-key="${pi}-${ii}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">${why(p.why[ii])}</div>`);
      if(p.type === "notes") html += `<details class="script" ${TTS ? "" : "open"}><summary>Transcripción</summary>${p.lines.map(l => `<p>${esc(l)}</p>`).join("")}</details>`;
    }
    if(p.type === "listen"){
      if(!TTS) html += `<p class="warn">Este navegador no puede leer textos en voz alta. Abajo tienes la transcripción para leerla.</p>`;
      p.items.forEach((it, ii) => html += `<div class="xq" data-q="${pi}-${ii}"><p class="qn">${ii+1}</p><p class="qq">${it.q}</p>
        ${TTS ? `<button type="button" class="btn small play" data-play="${pi}-${ii}">${ICON.spk} Escuchar <span>(2)</span></button>` : ""}
        ${choiceRow(`${pi}-${ii}`, it.opts)}
        <details class="script" ${TTS ? "" : "open"}><summary>Transcripción</summary>${it.lines.map(l => `<p><b>${l[0] === "W" ? "Woman" : "Man"}:</b> ${esc(l[1])}</p>`).join("")}</details>${why(it.why)}</div>`);
    }
    if(p.type === "write"){
      const k = `${ex.id}-${pi}`;
      html += `<div class="xtext">${p.task}</div>
        <textarea class="wtext" id="w-${k}" data-draft="${k}" rows="10" placeholder="Escribe aquí...">${esc(store.drafts[k] || "")}</textarea>
        <p class="wcount" id="wc-${k}"></p>
        <div class="checks" hidden id="chk-${k}"><p class="qq">Autoevaluación: marca lo que cumples</p>${p.checks.map((c,ci)=>`<label><input type="checkbox" data-chk="${k}"> ${c}</label>`).join("")}
          <details class="model"><summary>Ver respuesta modelo</summary>${p.model}</details>
          <p class="xmp">Para una corrección automática gratis, pega tu texto en <a href="https://writeandimprove.com/" target="_blank" rel="noopener">Write &amp; Improve</a> (Cambridge English).</p></div>`;
    }
    html += `</section>`;
  });
  host.innerHTML = `<div class="exam">
    <div class="xhead"><div><h2 class="h2">${ex.title}</h2><p class="intro">${ex.sub}</p></div><span class="clock small" id="xclock">0:00</span></div>
    <div id="xresult"></div>
    ${html}
    <div class="row"><button class="btn primary" id="grade">${ex.parts.every(p => p.type === "write") ? "He terminado: autoevaluarme" : "Corregir examen"}</button></div>
  </div>`;

  const clock = setInterval(() => { const s = Math.floor((Date.now()-t0)/1000), c = $("#xclock"); if(c) c.textContent = `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`; }, 1000);
  cleanup = () => { clearInterval(clock); if(TTS) speechSynthesis.cancel(); };

  host.querySelectorAll(".xopts").forEach(g => g.addEventListener("click", e => {
    const b = e.target.closest(".xopt"); if(!b || g.dataset.locked) return;
    g.querySelectorAll(".xopt").forEach(x => x.setAttribute("aria-pressed", x === b));
    ans[g.dataset.key] = +b.dataset.v;
  }));
  host.querySelectorAll("[data-play]").forEach(b => b.onclick = () => {
    const key = b.dataset.play; plays[key] = (plays[key] || 0);
    if(plays[key] >= 2) return;
    plays[key]++;
    const [pi, ii] = key.split("-").map(Number), part = ex.parts[pi];
    const lines = part.type === "notes" ? part.lines.map(t => ["W", t]) : part.items[ii].lines;
    speechSynthesis.cancel();
    lines.forEach((l, k) => speak(l[1], {queue:true, voice: l[0] === "W" ? 0 : 1, pitch: l[0] === "W" ? 1.15 : .85, rate:.9}));
    b.querySelector("span").textContent = `(${2 - plays[key]})`;
    if(plays[key] >= 2) b.disabled = true;
  });
  host.querySelectorAll("textarea[data-draft]").forEach(t => {
    const k = t.dataset.draft, wc = $("#wc-" + k);
    const upd = () => { const n = (t.value.match(/[A-Za-zÀ-ÿ0-9'’-]+/g) || []).length; wc.textContent = `${n} palabras`; wc.className = "wcount " + (n >= 90 && n <= 120 ? "good" : n > 0 ? "warn" : ""); };
    t.oninput = () => { store.drafts[k] = t.value; save(); upd(); };
    upd();
  });

  $("#grade").onclick = () => {
    let right = 0, total = 0;
    ex.parts.forEach((p, pi) => {
      const items = (p.type === "gapped" || p.type === "match") ? p.answers.map(a => ({a}))
        : (p.type === "open" || p.type === "notes") ? p.answers.map(a => ({open:a})) : (p.items || []);
      items.forEach((it, ii) => {
        const key = `${pi}-${ii}`, box = host.querySelector(`[data-q="${key}"]`);
        if(!box) return;
        total++;
        let ok;
        if(it.open){ const v = box.querySelector("input").value; ok = it.open.some(a => norm(a) === norm(v)); box.querySelector("input").disabled = true;
          if(!ok) box.querySelector(".why").insertAdjacentHTML("afterbegin", `Respuesta: <b>${esc(it.open.join(" / "))}</b>. `); }
        else {
          ok = ans[key] === it.a;
          const g = box.querySelector(".xopts"); g.dataset.locked = 1;
          g.querySelectorAll(".xopt").forEach(x => { if(+x.dataset.v === it.a) x.classList.add("ok"); else if(+x.dataset.v === ans[key]) x.classList.add("bad"); });
        }
        if(ok) right++;
        box.classList.add(ok ? "ok" : "bad");
        box.querySelector(".why").hidden = false;
      });
      if(p.type === "write") host.querySelector(`#chk-${ex.id}-${pi}`).hidden = false;
    });
    markDone("x:" + ex.id); save();
    clearInterval(clock);
    // Tarea solo de Writing: no hay nota automática, solo autoevaluación
    if(!total){
      $("#grade").disabled = true;
      host.querySelector(".checks")?.scrollIntoView({block:"start", behavior:"smooth"});
      return;
    }
    const score = pct(right, total), prev = store.exams[ex.id];
    store.exams[ex.id] = {best: Math.max(score, prev?.best || 0), last: score, date: ymd(new Date())};
    save();
    const verdict = score >= 85 ? "Nivel B1 muy sólido." : score >= 70 ? "Estarías aprobando (en el examen real se aprueba con unos 70 %)." : score >= 50 ? "Cerca. Repasa las explicaciones de los fallos." : "Aún queda camino. Revisa las guías de los fallos y repítelo en unos días.";
    $("#xresult").innerHTML = `<div class="result"><p class="big">${score}%</p><p><b>${right} de ${total}</b> en Reading y Listening. ${verdict}</p><p class="xmp">Abajo tienes cada respuesta explicada. El Writing se autoevalúa con la lista y la respuesta modelo.</p><button class="btn" id="redo">Repetir simulacro</button></div>`;
    $("#redo").onclick = () => runExam(host, ex);
    $("#grade").disabled = true;
    window.scrollTo({top:0, behavior:"smooth"});
  };
}

/* ---------- CLASIFICAR (como la ficha de clase) ---------- */
// 16 palabras al azar; cada una se marca en una o varias categorías y al corregir se rellenan las cuatro columnas
function classify(host){
  markDone("q:ropa-cat");
  const multi = CLOTHES.filter(w => w[2].length > 1), single = CLOTHES.filter(w => w[2].length === 1);
  const words = shuffle([...shuffle(multi).slice(0, 2), ...shuffle(single).slice(0, 14)]);
  const sel = words.map(() => new Set());
  const cats = Object.entries(CLOTHES_CATS);
  host.innerHTML = `<div class="quiz">
    <p class="tag">Clasifica las palabras</p>
    <p class="intro">Pon cada palabra en su categoría. Algunas van en más de una: márcalas todas.</p>
    <div class="cls">${words.map((w, i) => `<div class="clrow" data-i="${i}">
      <div class="clw"><b>${esc(w[0])}</b>${spk(w[0])}</div>
      <div class="clbtns">${cats.map(([k, l]) => `<button type="button" class="clb" data-k="${k}" aria-pressed="false">${l}</button>`).join("")}</div>
      <p class="why" hidden></p></div>`).join("")}</div>
    <div class="row"><button class="btn primary" id="grade">Corregir</button></div>
    <div id="clres"></div></div>`;
  host.querySelectorAll(".clrow").forEach(row => row.addEventListener("click", e => {
    const b = e.target.closest(".clb"); if(!b || row.dataset.locked) return;
    const s = sel[+row.dataset.i], k = b.dataset.k;
    s.has(k) ? s.delete(k) : s.add(k);
    b.setAttribute("aria-pressed", s.has(k));
  }));
  $("#grade").onclick = () => {
    let right = 0;
    host.querySelectorAll(".clrow").forEach(row => {
      const i = +row.dataset.i, w = words[i], s = sel[i];
      const ok = s.size === w[2].length && w[2].every(c => s.has(c));
      if(ok) right++;
      row.dataset.locked = 1;
      row.classList.add(ok ? "ok" : "bad");
      row.querySelectorAll(".clb").forEach(b => { const k = b.dataset.k; if(w[2].includes(k)) b.classList.add("ok"); else if(s.has(k)) b.classList.add("bad"); });
      const p = row.querySelector(".why"); p.hidden = false;
      p.innerHTML = `${esc(w[1])} · va en: <b>${w[2].map(c => CLOTHES_CATS[c]).join(" + ")}</b>`;
    });
    touchDay(); save(); renderStats();
    $("#grade").disabled = true;
    $("#clres").innerHTML = `<div class="result"><p class="big">${right}/${words.length}</p>
      <p>${right === words.length ? "Perfecto, todas bien clasificadas." : "Revisa las marcadas en rojo: debajo de cada una tienes la respuesta."}</p>
      <div class="gcols">${cats.map(([k, l], n) => `<div class="gcell ${["a","b","c","a"][n]}"><p class="cname">${l}</p><p>${words.filter(w => w[2].includes(k)).map(w => esc(w[0])).join(", ") || "—"}</p></div>`).join("")}</div>
      <div class="row"><button class="btn primary" id="again">Otra ronda</button></div></div>`;
    $("#again").onclick = () => { classify(host); window.scrollTo({top:0}); };
    $("#clres").scrollIntoView({block:"start", behavior:"smooth"});
  };
}

/* ---------- SPEAKING ---------- */
// Una pregunta o situación cada vez, con audio y cronómetro para contestar en voz alta
function speakingPractice(host, s){
  markDone("q:" + s.id);
  const items = shuffle(s.items);
  let i = 0, timer = null;
  const stop = () => { clearInterval(timer); timer = null; };
  cleanup = () => { stop(); if(TTS) speechSynthesis.cancel(); };
  function render(){
    stop();
    const it = items[i], english = s.id !== "sp-2";
    host.innerHTML = `<div class="quiz speak">
      <div class="qmeta"><span>${i+1} de ${items.length}</span><span>${s.secs} s para contestar</span></div>
      <p class="tag">${esc(s.title)}</p>
      ${s.id === "sp-2" ? `<p class="intro">Imagina esta foto y descríbela en inglés:</p>` : ""}
      <p class="sentence">${esc(it.q)}</p>
      ${it.words ? `<div class="chips">${it.words.map(w => `<span data-say="${esc(w)}">${esc(w)}</span>`).join("")}</div>` : ""}
      <div class="row">${TTS && english ? `<button class="btn ghost small" type="button" data-say="${esc(it.q)}">${ICON.spk} Escuchar</button>` : ""}
        <button class="btn primary" id="go">Empezar a hablar (${s.secs} s)</button></div>
      <div class="timer" id="timer" hidden><span class="clock" id="left">${s.secs}</span><div class="bar"><i id="tbar" style="width:100%"></i></div></div>
      <div class="feedback ok" id="done" hidden><p class="verdict">¡Tiempo!</p><p class="note">¿Has hablado sin parar? Si te has quedado en blanco, repítelo con las frases útiles de abajo.</p></div>
      <div class="row"><button class="btn" id="prev" aria-label="Anterior">←</button><button class="btn primary" id="nxt">Siguiente →</button></div>
      <details class="model" open><summary>Frases útiles (toca para oírlas)</summary><div class="chips">${s.phrases.map(p => `<span data-say="${esc(p)}">${esc(p)}</span>`).join("")}</div></details>
      <p class="xmp">${s.tip}</p>
    </div>`;
    $("#go").onclick = () => {
      let left = s.secs;
      $("#timer").hidden = false; $("#done").hidden = true; $("#go").textContent = "Reiniciar";
      stop();
      timer = setInterval(() => {
        left--;
        const l = $("#left"); if(!l) return stop();
        l.textContent = left; $("#tbar").style.width = (left / s.secs * 100) + "%";
        if(left <= 0){ stop(); $("#done").hidden = false; touchDay(); save(); renderStats(); }
      }, 1000);
    };
    $("#prev").onclick = () => { i = (i - 1 + items.length) % items.length; render(); };
    $("#nxt").onclick = () => { i = (i + 1) % items.length; render(); window.scrollTo({top:0}); };
  }
  render();
}

/* ---------- PLAN ---------- */
function weekNow(){
  if(!store.plan.start) return 1;
  const days = Math.floor((new Date() - new Date(store.plan.start + "T00:00:00")) / 864e5);
  return Math.min(10, Math.max(1, Math.floor(days / 7) + 1));
}
function taskInfo(t, w, i){
  const [k, a] = t;
  if(k === "g"){ const g = GUIDES.find(x => x.id === a); return {key:"g:"+a, label:`Guía: ${g ? g.short : a}`, href:"#guias/"+a}; }
  if(k === "q"){ const id = setIdOf(a), s = SETS[id]; return {key:"q:"+id, label:`Test: ${s ? s.label : a}`, href:"#practicar/"+id}; }
  if(k === "c"){ const d = DECKS[a]; return {key:"c:"+a, label:`Tarjetas: ${d ? d.name : a}`, href:"#tarjetas/"+a}; }
  if(k === "x"){ const s = SETS[a]; return {key:"x:"+a, label:`Simulacro: ${s ? s.label : a}`, href:"#practicar/"+a}; }
  if(k === "w"){ const s = SETS[a]; return {key:"x:"+a, label:`Writing: ${s ? s.label : a}`, href:"#practicar/"+a}; }
  if(k === "s"){ const s = SETS[a]; return {key:"q:"+a, label:s ? s.label : a, href:"#practicar/"+a}; }
  if(k === "r"){ const r = RESOURCES.find(x => x.id === a); return {key:`w${w}:${i}`, label:`${r.name} (${r.by})`, href:r.url, ext:true}; }
  return {key:`w${w}:${i}`, label:a, href:null};
}
function planView(host){
  if(!store.plan.start || store.plan.editing){
    host.innerHTML = `<div class="menu"><section class="hero">
      <h2 class="h2">Tu plan de 10 semanas hasta el B1</h2>
      <p>De cero al examen B1 Preliminary en diez semanas. Cada semana tiene guías, tests, tarjetas y tareas. Lo que completes en la app se marca solo.</p>
      <p class="xmp">Es un ritmo intenso: cuenta con unas 2 horas al día además de las clases.</p>
      <label class="qq" for="start">¿Qué día empezaste el intensivo?</label>
      <div class="row"><input type="date" id="start" class="filter" value="${store.plan.start || ymd(new Date())}"><button class="btn primary" id="go">Guardar</button></div>
    </section></div>`;
    $("#go").onclick = () => { const v = $("#start").value; if(!v) return; store.plan.start = v; delete store.plan.editing; save(); planView(host); };
    return;
  }
  const cw = weekNow();
  const all = PLAN.flatMap((w, wi) => w.tasks.map((t, i) => taskInfo(t, wi+1, i)));
  const doneN = all.filter(t => store.done[t.key]).length;
  const exam = new Date(store.plan.start + "T00:00:00"); exam.setDate(exam.getDate() + 70);
  host.innerHTML = `<div class="menu">
    <section class="summary">
      <div><p class="tag">Semana ${cw} de 10</p><h2 class="h2">${PLAN[cw-1].title}</h2><p class="intro">${PLAN[cw-1].goal}</p></div>
      <div class="bar big-bar"><i style="width:${pct(doneN, all.length)}%"></i></div>
      <p class="xmp">${doneN} de ${all.length} tareas del plan · examen hacia el ${exam.toLocaleDateString("es-ES", {day:"numeric", month:"long"})}</p>
    </section>
    <section><div class="quick">
      <a class="qbtn" href="#practicar/quick5"><b>2 min</b><span>Test rápido</span></a>
      <a class="qbtn" href="#practicar/sprint"><b>60 s</b><span>Sprint</span></a>
      <a class="qbtn" href="#practicar/mix"><b>10 min</b><span>Repaso mixto</span></a>
    </div><h3 class="h3">Mini tests de 5 preguntas</h3>${miniChips()}</section>
    <section class="weeks">${PLAN.map((w, wi) => {
      const n = wi + 1, tasks = w.tasks.map((t, i) => taskInfo(t, n, i)), d = tasks.filter(t => store.done[t.key]).length;
      return `<details class="week ${n === cw ? "now" : ""}" ${n === cw ? "open" : ""}>
        <summary><span class="wn">${n}</span><span class="wt"><b>${w.title}</b><small>${d}/${tasks.length} hechas</small></span>${d === tasks.length ? `<i class="seen">${ICON.check}</i>` : ""}</summary>
        <p class="intro">${w.goal}</p>
        <ul class="tasks">${tasks.map((t, i) => `<li><input type="checkbox" id="t-${n}-${i}" data-key="${esc(t.key)}" ${store.done[t.key] ? "checked" : ""} aria-label="Hecho">
          ${t.href ? `<a href="${t.href}" ${t.ext ? 'target="_blank" rel="noopener"' : ""}>${esc(t.label)}${t.ext ? ICON.ext : ""}</a>` : `<label for="t-${n}-${i}">${esc(t.label)}</label>`}</li>`).join("")}</ul>
      </details>`; }).join("")}
    </section>
    <p class="xmp">Empezaste el ${new Date(store.plan.start + "T00:00:00").toLocaleDateString("es-ES", {day:"numeric", month:"long", year:"numeric"})}. <button class="linkbtn" id="edit">Cambiar fecha</button></p>
  </div>`;
  host.querySelectorAll(".tasks input").forEach(c => c.onchange = () => { if(c.checked) store.done[c.dataset.key] = true; else delete store.done[c.dataset.key]; touchDay(); save(); planView(host); });
  $("#edit").onclick = () => { store.plan.editing = true; planView(host); };
}

/* ---------- MISTAKES ---------- */
function mistakes(host){
  const ids = Object.keys(store.mistakes).filter(id => ITEMS[id]).sort((a,b)=>store.mistakes[b]-store.mistakes[a]);
  if(!ids.length){
    host.innerHTML = `<p class="empty">No tienes fallos guardados. Cuando falles una pregunta aparecerá aquí, y sale de la lista cuando la aciertes.</p>`;
    return;
  }
  host.innerHTML = `<div class="end">
    <p class="intro">Tus fallos se guardan en este dispositivo. Cada pregunta sale de la lista cuando la aciertas.</p>
    <div class="row">
      <button class="btn primary" id="practise">Practicar mis fallos (${ids.length})</button>
      <span id="clearbox"><button class="btn ghost" id="clear">Borrar la lista</button></span>
    </div>
    <ul class="review">${ids.map(id=>{const it=ITEMS[id];return `<li><div class="q">${filled(it)} <span class="n">· ${esc(it.sec)} · ${store.mistakes[id]}×</span></div><div class="n">${it.note}</div></li>`}).join("")}</ul>
  </div>`;
  $("#practise").onclick = () => runQuiz(host, ids.map(id=>ITEMS[id]), Math.min(ids.length, 15));
  $("#clear").onclick = () => {
    $("#clearbox").innerHTML = `<span class="confirm">¿Seguro? <button class="btn" id="yes">Sí, borrar</button><button class="btn ghost" id="no">Cancelar</button></span>`;
    $("#yes").onclick = () => { store.mistakes = {}; save(); renderNav(); mistakes(host); };
    $("#no").onclick = () => mistakes(host);
  };
}

/* ---------- LAYOUT & ROUTER ---------- */
const TABS = [["plan","Plan"],["guias","Guías"],["practicar","Practicar"],["tarjetas","Tarjetas"],["fallos","Fallos"]];
function notFound(host){ host.innerHTML = `<p class="empty">No encuentro esta sección. <a href="#plan">Volver al plan</a></p>`; }
function renderStats(){
  const s = streak();
  $("#stats").innerHTML = `<span class="chip" title="Días seguidos practicando">Racha <b>${s} ${s===1?"día":"días"}</b></span><span class="chip">Acierto <b>${pct(store.correct, store.answered)}%</b></span>`;
}
function renderNav(){
  const [tab] = parseHash();
  const n = Object.keys(store.mistakes).filter(id => ITEMS[id]).length;
  $("#tabs").innerHTML = TABS.map(([k, l]) => `<a href="#${k}" ${tab === k ? 'aria-current="page"' : ""}>${ICON[k]}<span>${l}</span>${k === "fallos" && n ? `<span class="badge">${n}</span>` : ""}</a>`).join("");
}
function parseHash(){
  const h = location.hash.slice(1), i = h.indexOf("/");
  const tab = decodeURIComponent(i < 0 ? h : h.slice(0, i)) || "plan";
  return [TABS.some(t => t[0] === tab) ? tab : "plan", i < 0 ? null : decodeURIComponent(h.slice(i + 1))];
}
function route(){
  if(cleanup){ cleanup(); cleanup = null; }
  keyHandler = null;
  if(TTS) speechSynthesis.cancel();
  const [tab, sub] = parseHash();
  store.lastTab = tab; save();
  renderNav(); renderStats();
  const host = $("#panel");
  $("#back").innerHTML = sub ? `<a class="back" href="#${tab}">← ${TABS.find(t => t[0] === tab)[1]}</a>` : "";
  if(tab === "plan") planView(host);
  if(tab === "guias") sub ? guide(host, sub) : guideIndex(host);
  if(tab === "practicar") sub ? (SETS[sub] ? SETS[sub].run(host) : notFound(host)) : practiceMenu(host);
  if(tab === "tarjetas") sub ? flashcards(host, sub) : cardsMenu(host);
  if(tab === "fallos") mistakes(host);
  window.scrollTo({top:0});
}
window.addEventListener("hashchange", route);
if(!location.hash) history.replaceState(null, "", "#" + (store.lastTab || "plan"));
route();

if("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("sw.js").catch(() => {});
