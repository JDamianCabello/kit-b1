# Kit B1

App web para preparar el **Cambridge B1 Preliminary** desde cero en 10 semanas. Funciona en el móvil, se puede instalar como app y sirve sin conexión.

- **Plan**: 10 semanas con tareas. Lo que haces en la app se marca solo.
- **Guías**: 30 guías visuales en español, de «to be» a los condicionales, más guías del examen.
- **Practicar**: tests rápidos (2 min, 60 s, 5 min), simulacros que se corrigen solos y ejercicios de cada tema.
- **Tarjetas**: phrasal verbs, verbos irregulares y 16 temas de vocabulario, con audio.
- **Fallos**: guarda lo que fallas hasta que lo aciertas.

El progreso se guarda en el navegador de cada dispositivo (no hay cuentas ni servidor).

## Publicarlo gratis en GitHub Pages

### Opción fácil (desde la web, sin instalar nada)

1. Entra en [github.com](https://github.com) con tu cuenta y pulsa **New repository**.
2. Ponle un nombre, por ejemplo `kit-b1`. Déjalo **Public** y pulsa **Create repository**.
3. En la página del repositorio, pulsa **uploading an existing file**.
4. Arrastra **todo el contenido** de esta carpeta (`index.html`, `styles.css`, `sw.js`, `manifest.webmanifest`, los iconos y la carpeta `js`). Pulsa **Commit changes**.
5. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y pulsa **Save**.
6. En un par de minutos la web estará en `https://TU-USUARIO.github.io/kit-b1/`.

### Instalarla en el móvil

- **iPhone (Safari)**: abre la web → botón Compartir → **Añadir a pantalla de inicio**.
- **Android (Chrome)**: abre la web → menú ⋮ → **Instalar aplicación** o **Añadir a pantalla de inicio**.

### Actualizarla

Sube los archivos cambiados al repositorio (Add file → Upload files). Si cambias archivos, sube también `sw.js` con el número de `CACHE` aumentado (por ejemplo `kitb1-v3`) para que los móviles descarguen la versión nueva.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | La página |
| `styles.css` | Diseño (modo claro y oscuro) |
| `js/app.js` | Lógica de la app |
| `js/plan.js` | Plan de 10 semanas y recursos externos |
| `js/guides.js`, `js/guides-extra.js` | Guías |
| `js/data-*.js` | Ejercicios, vocabulario y simulacros |
| `sw.js`, `manifest.webmanifest`, `icon*` | Instalación y modo sin conexión |

## Créditos

Todo el contenido de ejercicios, guías y simulacros es original. Los recursos externos (Cambridge English, British Council, BBC Learning English, EngExam.info, YouTube) solo se enlazan y pertenecen a sus autores.
