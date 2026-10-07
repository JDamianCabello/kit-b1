/* Menú de Tarjetas: los mazos ya están en el HTML. Aquí se marcan los que ya has abierto. */
import { store } from "../lib/store.js";
import { $, $$ } from "../lib/dom.js";
import "../lib/shell.js";

const seen = a => !!store.done[a.dataset.done];
for(const a of $$(".deck")){ $(".seen", a).hidden = !seen(a); a.classList.toggle("done", seen(a)); }
for(const s of $$(".psec")){
  const list = $$(".deck", s);
  $("[data-done-count]", s).textContent = `${list.filter(seen).length} de ${list.length} vistos`;
}
