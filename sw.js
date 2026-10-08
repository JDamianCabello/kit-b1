/* Kit B1 · service worker: la app funciona sin conexión.
   Archivos propios: primero la red (para recibir cambios), si no hay conexión, la copia guardada.
   Fuentes de Google: primero la copia guardada. */
const CACHE = "kitb1-v23";
const SHELL = [
  "./", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png", "icon-180.png",
  "fallos.html", "index.html", "css/styles.css", "guias/articles.html", "guias/be.html", "guias/can.html",
  "guias/clothes.html", "guias/comparatives.html", "guias/conditionals.html", "guias/countable.html", "guias/exam.html", "guias/future.html",
  "guias/gerund.html", "guias/index.html", "guias/irr.html", "guias/linkers.html", "guias/modals.html", "guias/numbers.html",
  "guias/particles.html", "guias/passive.html", "guias/past-basic.html", "guias/past-cont.html", "guias/past-pp.html", "guias/prepositions.html",
  "guias/pronouns.html", "guias/ps-pc.html", "guias/questions.html", "guias/relatives.html", "guias/reported.html", "guias/speaking.html",
  "guias/there.html", "guias/time.html", "guias/too-enough.html", "guias/traps.html", "guias/used-to.html", "guias/writing.html",
  "img/icons.svg", "practicar/clasificar.html", "practicar/index.html", "practicar/prep-text1.html", "practicar/prep-text2.html", "practicar/sim1.html",
  "practicar/sim2.html", "practicar/sim3.html", "practicar/sim4.html", "practicar/sp-1.html", "practicar/sp-2.html", "practicar/sp-3.html",
  "practicar/sp-4.html", "practicar/sp-exam1.html", "practicar/sprint.html", "practicar/tabla.html", "practicar/test.html", "practicar/w-box.html",
  "practicar/w-course.html", "practicar/w-party.html", "practicar/w-phone.html", "practicar/w-sport.html", "practicar/w-town.html", "tarjetas/index.html",
  "tarjetas/mazo.html", "tarjetas/mezcla.html", "js/data/exams.js", "js/data/exams2.js", "js/data/grammar.js", "js/data/guides.js",
  "js/data/plan.js", "js/data/practice.js", "js/data/vocab.js", "js/lib/content.js", "js/lib/dom.js", "js/lib/shell.js",
  "js/lib/speech.js", "js/lib/store.js", "js/lib/text.js", "js/pages/cards-index.js", "js/pages/classify.js", "js/pages/deck.js",
  "js/pages/exam.js", "js/pages/guide.js", "js/pages/guides-index.js", "js/pages/mistakes.js", "js/pages/mix.js", "js/pages/plan.js",
  "js/pages/practice-index.js", "js/pages/speaking-exam.js", "js/pages/speaking.js", "js/pages/sprint.js", "js/pages/table.js", "js/pages/test.js"
];
// Las fotos de Speaking (img/speaking) no se descargan al instalar: se guardan la primera vez que se ven.

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(url.origin === location.origin){
    e.respondWith(
      fetch(req).then(res => {
        if(res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req, {ignoreSearch:true}).then(r => r || caches.match("index.html")))
    );
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        // Solo se guardan respuestas válidas (o opacas, las de otro dominio sin CORS)
        if(res.ok || res.type === "opaque"){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => Response.error()))
    );
  }
});
