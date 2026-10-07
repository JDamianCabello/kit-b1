/* Pronunciación con la voz del dispositivo. Cualquier elemento con data-say se lee al tocarlo. */

export const TTS = "speechSynthesis" in window;
let voices = [];

function loadVoices(){
  voices = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang));
  voices.sort((a, b) => /en-GB/i.test(b.lang) - /en-GB/i.test(a.lang));
}
if(TTS){ loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
// Sin voz se esconden los altavoces (ver .no-tts en el CSS)
else document.documentElement.classList.add("no-tts");

export function speak(text, {voice = 0, pitch = 1, rate = .92, queue = false, onend} = {}){
  if(!TTS) return;
  if(!queue) speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  const v = voices.length ? voices[voice % voices.length] : null;
  if(v){ u.voice = v; u.lang = v.lang; }
  u.pitch = pitch; u.rate = rate;
  if(onend) u.onend = onend;
  speechSynthesis.speak(u);
}

export const stopSpeaking = () => { if(TTS) speechSynthesis.cancel(); };

document.addEventListener("click", e => {
  const b = e.target.closest("[data-say]");
  if(b && b.dataset.say){ e.preventDefault(); speak(b.dataset.say); }
});
