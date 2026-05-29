---
id: "4"
title: "Matriz de propiedades CSS"
description: "Mapa de aplicación de propiedades CSS por combate, exploración, puzzle, dificultad y zona sugerida de desbloqueo."
date: 2026-04-23
author: "jonathan-bello"
order: 4
coverImage: "/gdd-covers/progresion.png"
---

> La evaluación del prototipo se concentra en `fill`, `stroke`, `opacity`, `width` y `height`. Las demás propiedades se mantienen como expansión futura.

| Grupo | Propiedad CSS | Uso en combate | Uso en exploración | Uso en puzzle | Dificultad | Estado |
|---|---|---|---|---|---|---|
| Fundamentos visuales | `fill` | Afinidad cromática de bala contra enemigos | Lectura de color en objetos interactivos | Bloques y plataformas por color | Baja | Implementada en tutorial |
| Forma de munición | `width` | Modificar tamaño horizontal del proyectil | Alcance visual de interruptores | Ajuste de paso por espacios | Baja | Evaluación de prototipo |
| Forma de munición | `height` | Modificar tamaño vertical del proyectil | Lectura de volumen de bala | Ajuste de altura para objetivos | Baja | Evaluación de prototipo |
| Contorno y presencia | `stroke` | Reforzar lectura de impacto y afinidad | Diferenciar estados de objetos | Interacciones por borde/contorno | Media | Avance parcial |
| Transparencia | `opacity` | Lectura de enemigos o estados semitransparentes | Ver pasajes o capas ocultas | Secuencias de visibilidad | Media | Avance parcial |
| Futuro | `z-index`, `position`, `transform`, `scale`, `transition-duration` | Sinergias avanzadas | Gating espacial y temporal | Puzzles de mayor complejidad | Alta | Iteraciones posteriores |
