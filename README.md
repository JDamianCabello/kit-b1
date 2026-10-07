# Kit B1

App web para preparar el **Cambridge B1 Preliminary** desde cero en 10 semanas. Funciona en el móvil, se puede instalar como app y sirve sin conexión.

- **Plan**: 10 semanas con tareas. Lo que haces en la app se marca solo.
- **Guías**: 32 guías visuales en español, de «to be» a los condicionales, más guías del examen.
- **Practicar**: tests rápidos (2 min, 60 s, 5 min), simulacros que se corrigen solos y ejercicios de cada tema.
- **Tarjetas**: phrasal verbs, verbos irregulares y 16 temas de vocabulario, con audio.
- **Fallos**: guarda lo que fallas hasta que lo aciertas.
- **Tema**: claro, oscuro o automático (el del sistema), con el botón redondo de arriba.
- **Copia de seguridad**: al final del Plan puedes guardar tu progreso en un archivo y restaurarlo en otro dispositivo.

El progreso se guarda en el navegador de cada dispositivo (no hay cuentas ni servidor). Para pasarlo a otro móvil u ordenador, usa **Guardar copia** y **Restaurar copia** en la sección *Copia de seguridad* del Plan.

## Publicarlo gratis en GitHub Pages

### Opción fácil (desde la web, sin instalar nada)

1. Entra en [github.com](https://github.com) con tu cuenta y pulsa **New repository**.
2. Ponle un nombre, por ejemplo `kit-b1`. Déjalo **Public** y pulsa **Create repository**.
3. En la página del repositorio, pulsa **uploading an existing file**.
4. Arrastra **todo el contenido** de esta carpeta (los archivos sueltos y las carpetas `css`, `img`, `js`, `guias`, `practicar` y `tarjetas`). Pulsa **Commit changes**.
5. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y pulsa **Save**.
6. En un par de minutos la web estará en `https://TU-USUARIO.github.io/kit-b1/`.

### Instalarla en el móvil

- **iPhone (Safari)**: abre la web → botón Compartir → **Añadir a pantalla de inicio**.
- **Android (Chrome)**: abre la web → menú ⋮ → **Instalar aplicación** o **Añadir a pantalla de inicio**.

### Actualizarla

Sube los archivos cambiados al repositorio (Add file → Upload files). Si cambias archivos, sube también `sw.js` con el número de `CACHE` aumentado (por ejemplo, de `kitb1-v20` a `kitb1-v21`) para que los móviles descarguen la versión nueva.

## Cómo está hecha

Es una web estática de varias páginas: **HTML para el contenido, CSS para el diseño y JavaScript solo para lo interactivo**. No hay que compilar nada.

- Todo lo que no cambia (menús, plan de 10 semanas, guías, simulacros, tareas de Writing y Speaking) está escrito en HTML y se lee aunque falle el JavaScript.
- El JavaScript guarda tu progreso y lleva los ejercicios que eligen preguntas al azar (tests, sprint, tarjetas, tabla, clasificar). Su estructura está en etiquetas `<template>` dentro de cada página; el JS las clona y rellena el texto.
- Los scripts son módulos ES (`<script type="module">`), así que para probarla en tu ordenador hay que abrirla con un servidor (por ejemplo `python3 -m http.server` en esta carpeta y entrar en `http://localhost:8000`), no con doble clic.

| Carpeta o archivo | Qué contiene |
|---|---|
| `index.html` | Plan de 10 semanas (página de inicio) y copia de seguridad del progreso |
| `guias/` | Índice de guías y una página por guía |
| `practicar/` | Menú de práctica, simulacros, Writing y Speaking (una página cada uno) y las páginas de ejercicios: `test.html?set=…`, `sprint.html`, `tabla.html`, `clasificar.html` |
| `tarjetas/` | Menú de mazos y `mazo.html?id=…` |
| `fallos.html` | Las preguntas falladas |
| `css/styles.css` | Diseño, modo claro y oscuro |
| `img/icons.svg` | Iconos (se usan con `<svg><use href="img/icons.svg#nombre"/></svg>`) |
| `js/data/` | Datos: preguntas, vocabulario, simulacros, guías y plan |
| `js/lib/` | Código común: progreso (`store.js`), preguntas y mazos (`content.js`), voz (`speech.js`), cabecera (`shell.js`) y utilidades |
| `js/pages/` | Un módulo por página |
| `sw.js`, `manifest.webmanifest`, `icon*` | Instalación y modo sin conexión |

Para cambiar el texto de una guía, un simulacro o un menú, edita su archivo `.html`. Si añades una página, añádela también a la lista `SHELL` de `sw.js` para que funcione sin conexión.

## Créditos

Todo el contenido de ejercicios, guías y simulacros es original. Los recursos externos (Cambridge English, British Council, BBC Learning English, EngExam.info, YouTube) solo se enlazan y pertenecen a sus autores.
