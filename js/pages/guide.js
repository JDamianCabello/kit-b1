/* Página de una guía: el contenido ya está en el HTML.
   Aquí se marca la guía como leída, se filtra la tabla de verbos irregulares y el índice sigue la lectura. */
import { markDone } from "../lib/store.js";
import { $, $$ } from "../lib/dom.js";
import { renderStats } from "../lib/shell.js";
import "../lib/speech.js";

markDone("g:" + document.body.dataset.guide);
renderStats();

// Índice: marca la sección que se está leyendo
const toc = $$("#gtoc a");
if("IntersectionObserver" in window && toc.length){
  const io = new IntersectionObserver(entries => {
    for(const en of entries){
      if(!en.isIntersecting) continue;
      for(const a of toc) a.classList.toggle("on", a.hash === "#" + en.target.id);
      $("#gtoc a.on")?.scrollIntoView({block:"nearest", inline:"nearest"});
    }
  }, {rootMargin:"-30% 0px -60% 0px"});
  for(const a of toc){ const s = document.getElementById(a.hash.slice(1)); if(s) io.observe(s); }
}

// Verbos irregulares: filtra la tabla mientras escribes
const f = $("#irr-filter");
if(f){
  const rows = $$("#irr-table tbody tr");
  const none = document.createElement("p");
  none.className = "empty"; none.textContent = "No está en la lista."; none.hidden = true;
  $("#irr-table").append(none);
  f.addEventListener("input", () => {
    const q = f.value.trim().toLowerCase(); let shown = 0;
    for(const r of rows){ const ok = !q || r.textContent.toLowerCase().includes(q); r.hidden = !ok; shown += ok; }
    none.hidden = !!shown;
  });
}
