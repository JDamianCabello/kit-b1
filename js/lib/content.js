/* Contenido para practicar, construido a partir de los datos:
   - ITEMS: todas las preguntas, por id (los fallos se guardan con ese id)
   - SETS: cada test que se puede hacer, con sus preguntas y en qué página se abre
   - DECKS: los mazos de tarjetas
   Las notas y ejemplos llevan algo de HTML propio (<b>, <mark>): se pintan como texto enriquecido. */
import { PV, TN, TE, VO, IRR, PV2, T_STRUCT, T_WHICH, T_SIGNAL, T_CONJ, PC, COMP_ADJ, COMP_SENT, COMP_SENT2, SUP_SENT2, PV_SENT } from "../data/practice.js";
import { GR, PREP_TEXTS } from "../data/grammar.js";
import { TOPICS, PREP_CARDS, CLOTHES, CLOTHES_CATS_ES } from "../data/vocab.js";
import { EXAMS } from "../data/exams.js";
import { EXAMS_MORE, WRITING_TASKS, SPEAKING } from "../data/exams2.js";
import { GUIDES, PREPS } from "../data/guides.js";
import { shuffle, slug, strip, fillText } from "./text.js";

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const guideShort = id => (GUIDES.find(g => g.id === id) || {short:id}).short;

/* ---------- PREGUNTAS ---------- */
export const ITEMS = {};
const add = it => (ITEMS[it.id] = it, it);
const others3 = (list, correct) => shuffle([...new Set(list)].filter(x => x !== correct)).slice(0, 3);
const uniq3 = (list, ans) => [...new Set(list)].filter(x => x !== ans).slice(0, 3);

export const POOL = {
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
POOL.pv2 = PV2.map(([en, es], i) => add({id:"pv2-"+i, sec:"Phrasal verbs 2", q:`«${es}» en inglés: ___`, opts:[en, ...others3(PV2.map(p => p[0]), en)], ans:[en], say:en, note:`<b>${en}</b> = ${es}`}));
const tenseForm = t => (T_STRUCT.find(s => s[0] === t) || ["", ""])[1];
POOL.tw = T_WHICH.map(([s, t], i) => add({id:"tw"+i, sec:"¿Qué tiempo es?", q:`${s} → ___`, opts:[t, ...others3(T_STRUCT.map(x => x[0]), t)], ans:[t], say:s, note:`<b>${t}</b>: ${tenseForm(t)}`}));
POOL.tc = T_CONJ.map(([s, a, d], i) => add({id:"tc"+i, sec:"Tiempos verbales", q:s, opts:[a, ...d], ans:[a], say:fillText(s.replace(/\s*\([^)]*\)\s*$/, ""), a), note:`Forma correcta: <mark>${a}</mark>`}));
// Ropa, joyas, colores y materiales: opciones de la misma categoría para que no sea demasiado fácil
const catNames = cs => cs.map(c => CLOTHES_CATS_ES[c]).join(" y ");
POOL.ropa = CLOTHES.map(([en, es, cs], i) => add({id:"ropa-"+i, sec:"Ropa, joyas, colores y materiales", q:`«${es}» en inglés: ___`,
  opts:[en, ...others3(CLOTHES.filter(w => w[2][0] === cs[0]).map(w => w[0]), en)], ans:[en], say:en, note:`<b>${en}</b> = ${es} · ${catNames(cs)}`}));
POOL.ropaw = CLOTHES.map(([en, es, cs], i) => add({id:"ropaw-"+i, sec:"Ropa · escribe", q:`«${es}» en inglés: ___`, ans:[en], say:en, note:`<b>${en}</b> = ${es} · ${catNames(cs)}`}));

// Comparativos: las opciones incorrectas son los errores típicos (biger, more tall, the most tallest...)
const er = a => a.endsWith("e") ? a + "r" : a + "er", est = a => a.endsWith("e") ? a + "st" : a + "est";
export const compWrong = ([adj, , comp, sup]) => uniq3([er(adj), "more " + adj, sup.replace(/^the /, ""), comp.startsWith("more") ? "the " + comp : "more " + comp], comp);
export const supWrong = ([adj, , comp, sup]) => uniq3(["the " + est(adj), "the most " + adj, "the " + comp,
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
POOL.pvs = PV_SENT.map(([s, a, d, m], i) => add({id:"pvs"+i, sec:"Phrasal verbs en frases", q:s, opts:[a, ...d], ans:[a], say:fillText(s, a), note:`<mark>${m.split(" = ")[0]}</mark> = ${m.split(" = ")[1]}`}));

// Todas las preguntas con opciones: las que usan el test rápido y el sprint
export const OPTION_POOL = [...POOL.pv, ...POOL.pv2, ...POOL.pvs, ...POOL.te, ...POOL.vo, ...POOL.gr, ...POOL.tp, ...POOL.tw, ...POOL.tc, ...POOL.ropa, ...POOL.cs, ...POOL.ss, ...POOL.cf];
const prepOpts = cats => POOL.gr.filter(x => cats.includes(x.cat));
const ALL_PREP = ["prepositions","prep-iot","prep-dep","prep-err","prep-dep2"];

/* ---------- TESTS ----------
   page: dónde se abre (test.html con ?set=, o una página propia). pool: preguntas. n: cuántas por ronda.
   keep: las preguntas de la ronda se eligen en orden (y luego se barajan). */
export const SETS = {};
const test = (id, label, sub, pool, n = 10, keep = false) => SETS[id] = {id, label, sub, page:`test.html?set=${id}`, pool, n, keep};
const own = (id, label, sub, page) => SETS[id] = {id, label, sub, page};

test("quick5", "Test rápido", "5 preguntas · 1–2 minutos", () => OPTION_POOL, 5);
test("quick10", "Test de 5 minutos", "10 preguntas variadas", () => OPTION_POOL, 10);
own("sprint", "Sprint de 60 segundos", "Todas las que puedas en un minuto", "sprint.html");
// Repaso mixto: hasta 7 de tus fallos y el resto al azar
test("mix", "Repaso mixto", "Mezcla de todo, con prioridad a tus fallos", mistakes => {
  const wrong = Object.keys(mistakes).filter(id => ITEMS[id]).map(id => ITEMS[id]);
  return [...new Set([...shuffle(wrong).slice(0, 7), ...shuffle(Object.values(ITEMS)).slice(0, 20)])];
}, 15, true);
test("fallos", "Mis fallos", "Las preguntas que has fallado", mistakes => Object.keys(mistakes).filter(id => ITEMS[id]).map(id => ITEMS[id]), 15);
[...EXAMS, ...EXAMS_MORE].forEach(e => own(e.id, e.title, e.sub, `${e.id}.html`));
WRITING_TASKS.forEach(w => own(w.id, w.title, w.sub, `${w.id}.html`));
own("sp-exam1", "Simulacro de Speaking: ropa y viajes", "Las 4 partes del examen con fotos · unos 12 minutos", "sp-exam1.html");
SPEAKING.forEach(s => own(s.id, s.title, s.sub, `${s.id}.html`));
PREP_TEXTS.forEach(e => own(e.id, e.title.replace("Preposiciones: t", "T"), e.sub, `${e.id}.html`));
test("prep-exam", "Examen de preposiciones", "20 preguntas con opciones · of, from, for, on, in, to, at, with, about, between", () => prepOpts(["prepositions"]), 20);
test("prep-iot", "In, on, at: tiempo y lugar", "15 preguntas · las que más caen", () => prepOpts(["prep-iot"]), 15);
test("prep-dep", "Verbo o adjetivo + preposición", "15 preguntas · afraid of, good at, depend on...", () => prepOpts(["prep-dep"]), 15);
test("prep-err", "Encuentra el error", "12 errores típicos para corregir", () => prepOpts(["prep-err"]), 12);
test("prep-dep2", `Preposiciones dependientes: ${GR.filter(g => g[0] === "prep-dep2").length} frases`, "20 preguntas con opciones · fond of, rely on, provide with...", () => prepOpts(["prep-dep2"]), 20);
test("prep-dep2-w", "Preposiciones dependientes: escríbela", "20 frases sin opciones", () => POOL.prw.filter(x => x.cat === "prep-dep2"), 20);
test("prep-write", "Preposiciones: escríbela tú", "15 frases sin opciones, más difícil", () => POOL.prw, 15);
test("prep-final", "Examen final de preposiciones", "25 preguntas de todo tipo, 10 de ellas para escribir",
  () => [...shuffle(prepOpts(ALL_PREP)).slice(0, 15), ...shuffle(POOL.prw).slice(0, 10)], 25, true);
test("pv-sent", "Elige el phrasal verb", `${PV_SENT.length} frases · 15 preguntas con 4 phrasal verbs distintos`, () => POOL.pvs, 15);
test("pv2", "Phrasal verbs 2", `${PV2.length} phrasal verbs más · significados`, () => POOL.pv2);
test("tw", "¿Qué tiempo es?", "Identifica el tiempo verbal de cada frase", () => POOL.tw);
test("tc", "Tiempos verbales con opciones", "Elige la forma correcta del verbo", () => POOL.tc);
// Mini tests: 5 preguntas de un tema, para cuando hay poco tiempo
export const MINI = [
  ["mini-all", "Todo", () => OPTION_POOL],
  ["mini-pv", "Phrasal verbs", () => [...POOL.pv, ...POOL.pv2, ...POOL.pvs]],
  ["mini-tn", "Tiempos verbales", () => [...POOL.tc, ...POOL.tw, ...POOL.te]],
  ["mini-prep", "Preposiciones", () => prepOpts(ALL_PREP)],
  ["mini-vo", "Vocabulario", () => [...POOL.vo, ...POOL.tp, ...POOL.ropa]],
  ["mini-ropa", "Ropa y colores", () => POOL.ropa],
  ["mini-gr", "Gramática", () => POOL.gr.filter(x => !x.cat.startsWith("prep"))],
  ["mini-iv", "Irregulares", () => POOL.iv]
];
MINI.forEach(([id, label, pool]) => test(id, "Mini test: " + label, "5 preguntas · 1 minuto", pool, 5));
test("comp-sent", "Comparativos en frases", `${SENT_C.length} frases · 15 preguntas con los errores típicos como opciones`, () => POOL.cs, 15);
own("comp-table", "Completa la tabla", "Adjetivo → comparativo → superlativo · 8 adjetivos por tabla", "tabla.html");
test("sup-sent", "Superlativos en frases", `${SENT_S.length} frases · 15 preguntas con los errores típicos como opciones`, () => POOL.ss, 15);
test("comp-form", "Forma el comparativo y el superlativo", `${COMP_ADJ.length} adjetivos · 15 preguntas`, () => POOL.cf, 15);
own("ropa-cat", "Clasifica las palabras", "Como la ficha: ropa, joyas, colores y materiales · 16 palabras por ronda", "clasificar.html");
test("ropa-opt", `Ropa, joyas, colores y materiales: ${CLOTHES.length} palabras`, "20 preguntas con opciones", () => POOL.ropa, 20);
test("ropa-write", "Ropa, joyas, colores y materiales: escríbela", "20 palabras sin opciones", () => POOL.ropaw, 20);
test("tn", "Conjugar verbos", "Escribe la forma correcta · todos los tiempos", () => POOL.tn);
test("pc", "Past simple vs continuous", "Escribe la forma correcta", () => POOL.pc, POOL.pc.length);
test("te", "Expresiones de tiempo", "in, on, at, for, since, ago...", () => POOL.te);
test("iv", "Verbos irregulares", "Escribe el pasado o el participio", () => POOL.iv, 12);
test("pv", "Phrasal verbs", `${PV.length} phrasal verbs del B1`, () => POOL.pv);
[...new Set(VO.map(v => v[0]))].forEach(c => test("vo-" + slug(c), c, "Vocabulario", () => POOL.vo.filter(x => x.cat === c)));
[...new Set(GR.map(g => g[0]))].forEach(c => test("gr-" + c, guideShort(c), "Gramática", () => POOL.gr.filter(x => x.cat === c)));
TOPICS.forEach(t => test("tp-" + t.id, t.name, `${t.words.length} palabras`, () => POOL.tp.filter(x => x.cat === t.id)));

// El plan nombra algunos tests por su categoría de vocabulario («vo-Comida y bebida»)
export const setIdOf = raw => raw.startsWith("vo-") ? "vo-" + slug(raw.slice(3)) : raw;

/* ---------- TARJETAS ---------- */
export const DECKS = {};
DECKS.pv = {name:"Phrasal verbs", cards: PV.map(p => ({en:p[0], es:p[1], ex:esc(p[2]).replace("___", `<mark>${esc(p[3][0])}</mark>`), say:p[0]}))};
DECKS.iv = {name:"Verbos irregulares", cards: IRR.map(v => ({en:v[0], es:v[3], ex:`${esc(v[0])} – <b>${esc(v[1])}</b> – <b>${esc(v[2])}</b>`, say:`${v[0]}, ${v[1].split(" / ")[0]}, ${v[2]}`}))};
TOPICS.forEach(t => DECKS["tp-" + t.id] = {name:t.name, cards: t.words.map(([en, es]) => ({en, es, say:en}))});
DECKS["prep-10"] = {name:"Las 10 preposiciones", cards: PREPS.map(p => ({en:p[0], es:p[1], ex:p[3].map(esc).join(" · "), say:`${p[0]}. ${p[3].join(". ")}`}))};
PREP_CARDS.forEach(t => DECKS["pc-" + t.id] = {name:t.name, cards: t.words.map(([en, es]) => ({en, es, say:en}))});
DECKS.ropa = {name:"Ropa, joyas, colores y materiales", cards: CLOTHES.map(([en, es]) => ({en, es, say:en}))};
// Mazos de una sola dirección (oneWay): la cara es la pregunta y el reverso la respuesta
DECKS["comp-form"] = {name:"Forma el comparativo", oneWay:true, cards: COMP_ADJ.map(a => ({en:a[0], es:a[2], opts:compWrong(a), say:`${a[0]}, ${a[2]}, ${a[3]}`, ex:`${esc(a[1])} · ${esc(a[4])} · superlativo: <b>${esc(a[3])}</b>`}))};
DECKS["sup-form"] = {name:"Forma el superlativo", oneWay:true, cards: COMP_ADJ.map(a => ({en:a[0], es:a[3], opts:supWrong(a), say:`${a[0]}, ${a[2]}, ${a[3]}`, ex:`${esc(a[1])} · ${esc(a[4])} · comparativo: <b>${esc(a[2])}</b>`}))};
const sentCard = ([s, a, d]) => ({en:s, es:a, opts:d, say:fillText(s.replace(/\s*\([^)]*\)\s*$/, ""), a)});
DECKS["comp-sent"] = {name:"Comparativos en frases", oneWay:true, cards: SENT_C.map(sentCard)};
DECKS["sup-sent"] = {name:"Superlativos en frases", oneWay:true, cards: SENT_S.map(sentCard)};
DECKS.pv2 = {name:"Phrasal verbs 2", cards: PV2.map(([en, es]) => ({en, es, say:en}))};
DECKS["pv-sent"] = {name:"Phrasal verbs: elige el correcto", oneWay:true, cards: PV_SENT.map(([s, a, d, m]) => ({en:s, es:a, opts:d, say:fillText(s, a), ex:esc(m)}))};
DECKS["pv-fill"] = {name:"Phrasal verbs: completa la frase", oneWay:true, cards: PV.map(p => ({en:p[2], es:p[3][0], opts:p[3].slice(1), say:fillText(p[2], p[3][0]), ex:`<b>${esc(p[0])}</b> = ${esc(p[1])}`}))};
DECKS["t-struct"] = {name:"Tiempos: cómo se forman", cards: T_STRUCT.map(([en, es]) => ({en, es, say:en}))};
DECKS["t-which"] = {name:"Tiempos: ¿qué tiempo es?", oneWay:true, cards: T_WHICH.map(([s, t]) => ({en:s, es:t, say:s, ex:esc(tenseForm(t))}))};
DECKS["t-signal"] = {name:"Tiempos: palabras señal", oneWay:true, cards: T_SIGNAL.map(([s, t]) => ({en:s, es:t, say:strip(s), ex:esc(tenseForm(t))}))};
DECKS["t-conj"] = {name:"Tiempos: conjuga el verbo", oneWay:true, cards: T_CONJ.map(([s, a, d]) => ({en:s, es:a, opts:d, say:fillText(s.replace(/\s*\([^)]*\)\s*$/, ""), a)}))};
