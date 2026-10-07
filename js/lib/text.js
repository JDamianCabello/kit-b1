/* Utilidades de texto (sin DOM): barajar, normalizar y comparar respuestas */

export const shuffle = a => { a = [...a]; for(let i = a.length-1; i > 0; i--){ const j = Math.random()*(i+1)|0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const slug = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
export const strip = s => String(s).replace(/<[^>]+>/g,"").replace(/\s*\([^)]*\)/g,"").trim();
export const fillText = (q, a) => a === "—" ? q.replace(" ___","") : q.replace("___", a);

// Respuestas escritas: sin mayúsculas, puntos ni espacios de más; acepta contracciones
export function norm(s){ return s.toLowerCase().replace(/[’‘`]/g,"'").replace(/[.!?]/g,"").replace(/\s+/g," ").trim(); }
function variants(s){
  s = norm(s).replace(/won't/g,"will not").replace(/can't/g,"cannot").replace(/n't/g," not")
    .replace(/'ve/g," have").replace(/'ll/g," will").replace(/'re/g," are").replace(/'m/g," am").replace(/'d/g," had");
  const t = x => x.replace(/\s+/g," ").trim();
  return s.includes("'s") ? [t(s.replace(/'s/g," is")), t(s.replace(/'s/g," has"))] : [t(s)];
}
export const isRight = (it, v) => { const ok = it.ans.map(norm); return variants(v).some(x => ok.includes(x)); };

// Tarjetas y tablas: sin tildes ni paréntesis, «the» al principio opcional (the tallest = tallest)
// y vale cualquiera de las opciones separadas por , / · –
export function cardMatch(target, val){
  const clean = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\([^)]*\)/g, "")
    .replace(/[’‘`]/g, "'").replace(/[.!?¡¿]/g, "").replace(/\s+/g, " ").trim().replace(/^the /, "");
  const alts = [target, ...target.split(/,|\/|·|–/)].map(clean).filter(Boolean);
  return alts.includes(clean(val));
}
