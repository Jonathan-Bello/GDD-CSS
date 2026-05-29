---
id: "8"
title: "Tuning base de combate"
description: "Parámetros iniciales provisionales para combate, curación, movilidad y uso de munición."
date: 2026-04-23
author: "jonathan-bello"
order: 8
coverImage: "../../assets/imgs/arte-conceptual/guardianes-ciudadela.png"
---

## Tabla base (**provisional**)

| Parámetro | Valor inicial | Propósito de diseño |
|---|---:|---|
| Vida base del jugador | 100 | Punto de referencia para daño recibido y margen de error. |
| Cargas de Luz Solar | 3 | Limitar curación por tramo y reforzar gestión de riesgo. |
| Curación por carga | 35 | Permitir recuperación relevante sin trivializar encuentros. |
| Dash cooldown | 0.45 s | Evitar spam constante de evasión. |
| I-frames del dash | 0.18 s | Ventana de invulnerabilidad precisa pero exigente. |
| Cadencia de disparo base | 0.35 s | Ritmo ofensivo legible y controlable. |
| Daño base de bala | 10 | Base sobre la cual escala la sinergia CSS. |
| Slot de munición inicial | 1 | Iniciar con complejidad baja y ampliar por progresión. |

## Criterio de uso

Estos valores deben tratarse como baseline para playtests internos. Ajustar por telemetría de:

- duración de combates,
- uso de curación por zona,
- tasa de muertes por jefe,
- frecuencia de uso del dash.

