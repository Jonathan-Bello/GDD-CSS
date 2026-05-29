# GDD-CSS

Repositorio del sitio web y Game Design Document de **Citadel of Solar Souls (CSS)**, videojuego educativo de accion 2D orientado al aprendizaje aplicado de propiedades CSS mediante exploracion, combate, creacion de municion y apoyo contextual de **Hemis**.

## URLs oficiales

- Sitio: https://css.jonathanbello.com/
- GDD: https://css.jonathanbello.com/gdd/
- Demo web: https://css.jonathanbello.com/demo/

## Repositorios relacionados

- Juego Godot: https://github.com/Jonathan-Bello/CSS-Godot-Game
- GDD web: https://github.com/Jonathan-Bello/GDD-CSS
- Backend Hemis: https://github.com/Jonathan-Bello/CSS-Game-Emis

## Estado del demo

Estado documentado: **2026-05-29**.

- `Tutorial_Cueva`: zona funcional terminada para la vertical slice.
- `Ciudadela/Citadel`: avance visual y jugable parcial.
- `Combate con jefe`: avance parcial usado como evidencia de direccion tecnica.
- Datos de evaluacion educativa: se trabajan como plantilla simulada para maquetacion de tesis; deben reemplazarse por datos reales.

## Contenido del GDD

El GDD normaliza los terminos de produccion: **Hemis**, **Pilar solar**, **Ciudadela/Citadel**, **sinergia CSS** y **slot de municion**. Tambien documenta el uso de arte SVG nativo, el lore base inspirado en el texto de Jhonnatan Lopez Aguilar y las propiedades CSS evaluadas en el prototipo: `fill`, `stroke`, `opacity`, `width` y `height`.

## Demo Godot embebida

La demo jugable vive en `public/css-game`. El sitio inyecta:

```html
<script src="hemis-config.js"></script>
<script src="hemis-bootstrap.js"></script>
```

`public/css-game/hemis-config.js` define el backend publico:

```js
window.HEMIS_BACKEND_URL = "https://css-game-emis.onrender.com";
window.EMIS_BACKEND_URL = window.HEMIS_BACKEND_URL;
```

La variable `EMIS_BACKEND_URL` se mantiene como alias legacy; la documentacion canonica usa `HEMIS_*`.

## Desarrollo

```sh
npm install
npm run dev
npm run build
```

El script `prebuild` ejecuta `scripts/ensure-hemis-web-config.mjs` para asegurar que el export de Godot cargue los archivos de configuracion de Hemis.
