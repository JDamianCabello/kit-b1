/* Mezcla de tarjetas: el formulario ya está en el HTML y envía los mazos marcados a mazo.html?mix=...
   Aquí se suman las tarjetas, se marcan grupos enteros y se recuerda la última mezcla. */
import { store, save } from "../lib/store.js";
import { $, $$ } from "../lib/dom.js";
import "../lib/shell.js";

const boxes = $$('input[name="mix"]');
function update(){
  const on = boxes.filter(b => b.checked), cards = on.reduce((n, b) => n + +b.dataset.count, 0);
  $("#mix-decks").textContent = `${on.length} ${on.length === 1 ? "tema" : "temas"}`;
  $("#mix-cards").textContent = `${cards} tarjetas`;
  $("#mix-go").disabled = !on.length;
  for(const g of $$(".mixgroup")){
    const list = $$('input[name="mix"]', g), all = list.every(b => b.checked);
    $("[data-all]", g).textContent = all ? "Ninguno" : "Todos";
  }
}
const remember = () => { store.mix = boxes.filter(b => b.checked).map(b => b.value); save(); };

for(const b of boxes){ b.checked = (store.mix || []).includes(b.value); b.addEventListener("change", () => { remember(); update(); }); }
for(const btn of $$("[data-all]")) btn.addEventListener("click", () => {
  const list = $$('input[name="mix"]', btn.closest(".mixgroup")), all = list.every(b => b.checked);
  for(const b of list) b.checked = !all;
  remember(); update();
});
$("#mix-clear").addEventListener("click", () => { for(const b of boxes) b.checked = false; remember(); update(); });
update();
