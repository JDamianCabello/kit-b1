/* Utilidades del DOM: buscar nodos, clonar plantillas <template>, atajos de teclado */

export const $ = (s, root = document) => root.querySelector(s);
export const $$ = (s, root = document) => [...root.querySelectorAll(s)];

// Clona el contenido de un <template id="..."> y devuelve su primer elemento
export function clone(id){
  const t = document.getElementById(id);
  return t.content.firstElementChild.cloneNode(true);
}

// Rellena los huecos [data-slot] de un nodo: texto plano con textContent;
// solo los campos marcados como rich (notas y explicaciones de nuestros datos, que llevan <b> o <mark>) usan innerHTML
export function fill(node, values, rich = []){
  for(const [k, v] of Object.entries(values)){
    const el = node.matches(`[data-slot="${k}"]`) ? node : node.querySelector(`[data-slot="${k}"]`);
    if(!el) continue;
    if(rich.includes(k)) el.innerHTML = v; else el.textContent = v;
  }
  return node;
}

export const params = () => new URLSearchParams(location.search);

// Frase con el hueco relleno y resaltado (para listas de repaso): nodos, sin HTML
export function filledSentence(it){
  const a = it.ans[0], frag = document.createDocumentFragment();
  if(a === "—"){ frag.append(it.q.replace(" ___", "")); return frag; }
  const [pre, post = ""] = it.q.split("___");
  const m = document.createElement("mark"); m.textContent = a;
  frag.append(pre, m, post);
  return frag;
}

// Teclado: atajos de la página actual (no actúan mientras escribes en un campo)
let keyHandler = null;
export const onKeys = fn => { keyHandler = fn; };
document.addEventListener("keydown", e => { if(keyHandler && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) keyHandler(e); });

export const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
